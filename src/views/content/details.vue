<template>
  <div id="details" v-if="details" ref="details">
      <h3>{{details.title}}</h3>
      <h6>
        <span>浏览数·{{details.Fabulous}}</span>
        <span @click.once="updateLick">支持数·{{details.lick}}</span>
      </h6>
      <div v-html="details.ueditor" class="detailsContent"></div>
      <p>
        <router-link tag="span" :to="'/details/'+prev._id" v-if="prev">上一篇：{{prev.title}}</router-link>
        <router-link tag="span" :to="'/details/'+next._id" v-if="next">下一篇：{{next.title}}</router-link>
      </p>
      <div class="comment">
        <h2>评论</h2>
        <el-form :inline="true" :model="comments" class="demo-form-inline">
          <el-form-item>
            <el-input  v-model="comments.name" placeholder="呢称" clearable resize="none"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input  v-model="comments.url" placeholder="输入显示个人博客地址" clearable resize="none"></el-input>
          </el-form-item>
          <el-input type="textarea" v-model="comments.text" :rows="4" placeholder="请输入..." resize="none"></el-input>
          <el-button type="primary" @click.prevent="addComment" :disabled="comments.text == ''">提交</el-button>
        </el-form>
        <h6>共{{details.comment.length}}条评论</h6>
        <ul v-if="details.comment !== 0">
          <li v-for="(item, i) in details.comment" :key="i">
            <h4>
              <b v-html="item.name" @click.prevent="reply(i, item.name)"></b>
              <a v-if="item.url" :href="'http://'+item.url" target="_blank">个人博客地址</a>:
              <i>{{item.time | timer}}评论</i>
            </h4>
            <span v-html="item.text"></span>
            <ol v-if="item.comment.length !== 0">
              <li v-for="(items, j) in item.comment" :key="j">
                <strong v-html="items.name" @click.prevent="reply(i, items.name)"></strong><em>回复{{items.reply}}:</em><span v-html="items.text"></span>
              </li>
            </ol>
            <p>
              <b @click.once="licks(i)">支持·{{item.lick}}</b>
              <b @click.prevent="reply(i, item.name)">回复</b>
            </p>
            <form class="showComment" ref="forms">
              <el-input
                placeholder="昵称"
                v-model="childrenComment.name"
                clearable>
              </el-input>
              <el-input
                :placeholder='placeholder'
                v-model="childrenComment.text"
                clearable>
              </el-input>
              <el-button type="primary" @click.prevent="replyComment(i)" :disabled="childrenComment.text == ''">回复</el-button>
            </form>
          </li>
        </ul>
      </div>
      <div class="top">
        <el-button size="small" @click="backTOp" icon="el-icon-caret-top"></el-button>
      </div>
  </div>
</template>

<script>
import xss from 'xss'
export default {
  data () {
    return {
      details: null,
      next: null,
      prev: null,
      comments: {
        name: '',
        text: '',
        url: '',
        comment: []
      },
      childrenComment: {
        name: '',
        text: '',
        reply: ''
      },
      click: false,
      placeholder: ''
    }
  },
  methods: {
    // 获取详情
    getDetails () {
      let self = this
      this.$emit('showLoading', true)
      let params = {
        id: this.$route.params.id
      }
      this.$http.details(params).then(data => {
        self.details = data.data.result
        self.next = data.data.next
        self.prev = data.data.prev
        self.$emit('showLoading', false)
        self.updateFabulous()
      }).catch(eorr => {
        self.$emit('showLoading', false)
      })
    },

    // 提交评论
    addComment () {
      this.comments = {
        name: this.comments.name ? xss(this.comments.name) : '匿名',
        text: xss(this.comments.text),
        time: new Date(),
        url: xss(this.comments.url),
        lick: 0,
        comment: this.comments.comment
      }

      this.details.comment.unshift(this.comments)
      this.comments = {
        name: '',
        text: '',
        url: '',
        comment: []
      }
      this.$http.update(this.details).then(data => {
      })
    },

    // 更新浏览量
    updateFabulous () {
      var FabulousDate = {
        _id: this.details._id,
        Fabulous: ++this.details.Fabulous
      }
      this.$http.update(FabulousDate).then(data => {
      })
    },

    // 更新支持量
    updateLick () {
      var self = this
      var lickDate = {
        _id: this.details._id,
        lick: ++this.details.lick
      }
      this.$http.update(lickDate).then(data => {
        self.click = true
      })
    },

    // 返回顶部
    backTOp () {
      var timer = setInterval(() => {
        var ele = this.$parent.$el.scrollTop ? this.$parent.$el : document.documentElement
        if (ele.scrollTop <= 0 || ele.scrollTop / 5 <= 0) {
          ele.scrollTop = 0
          clearInterval(timer)
        }
        ele.scrollTop -= ele.scrollTop / 7
      })
    },

    // 增加评论支持量
    licks (id) {
      this.details.comment[id].lick += 1
      this.$http.update(this.details).then(data => {
      })
    },

    // 显示回复框
    reply (id, name) {
      this.placeholder = '回复' + name
      this.childrenComment.reply = name
      var ele = this.$refs.forms[id]
      if (ele.className === 'showComment') {
        ele.className = ''
      } else {
        ele.className = 'showComment'
      }
    },

    // 回复
    replyComment (id) {
      this.childrenComment = {
        name: this.childrenComment.name ? xss(this.childrenComment.name) : '匿名',
        text: xss(this.childrenComment.text),
        reply: this.childrenComment.reply
      }
      this.details.comment[id].comment.push(this.childrenComment)
      this.childrenComment = {
        name: '',
        text: '',
        reply: ''
      }
      this.$refs.forms[id].className = 'showComment'
      this.$http.update(this.details).then(data => {
      })
    }
  },
  mounted () {
    this.getDetails()
  },
  watch: {
    '$route': 'getDetails'
  }

}
</script>

<style lang="scss" scoped>
  #details{
      padding:rem(5) rem(30) rem(20) rem(30);
      h3{
          font-size: 500;
          text-align: center;
          font-size:rem(20);
          line-height: rem(40);
          border-bottom: rem(1) solid #eaecef;
      }
      h6{
        line-height: rem(28);
        display: flex;
        justify-content: space-between;
        span{
          font-weight: 400;
          color:#aba9a9;
        }
      }
      .detailsContent{
          margin-top:rem(20);
          font-size:rem(14);
          /deep/ p{
            margin-top: rem(10);
            line-height: rem(20);
          }
          /deep/ h1,/deep/ h2,/deep/ h3,/deep/ h4,/deep/ h5,/deep/ h6 {
            line-height: rem(30);
            border-bottom: rem(1) solid #eaecef;
          }
          /deep/ ol li {
            list-style: inherit;
            line-height: rem(26);
          }
          /deep/ ul,/deep/ ol {
            margin: rem(15) 0 rem(15) rem(26);
          }
          /deep/ pre{
            overflow-x: auto;
            font-size: rem(11);
            background: #f6f8fa !important;
            padding: rem(10) rem(15);
            border-radius: rem(6);
          }
          /deep/ pre code {
            font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
            color: #24292e;
          }
          /deep/ table {
            margin-top: rem(15);
            width: auto;
            border-collapse: collapse;
          }
          /deep/ table tbody tr th,/deep/ table tbody tr td{
            padding: rem(8) rem(14);
            border:1px solid #ddd;
          }
      }
      p{
        margin: rem(20) 0 rem(10) 0;
        span{
          display: block;
          font-size: rem(14);
          color: #aba9a9;
          cursor: pointer;
          line-height: rem(22);
          &:hover{
            color:#399ab2;
          }
        }
      }
      .comment{
        margin-top: rem(40);
        h2{
          line-height: rem(40);
          font-size: rem(26);
        }
        .el-form{
          overflow: hidden;
          border: 1px solid #ddd;
          border-radius: rem(6);
          padding: rem(10) rem(15);
          margin-bottom: rem(20);
          .el-form-item{
            width: 45%;
          }
          .el-button{
            margin-top: rem(10);
            float: right;
          }
        }
        h6{
          font-weight: 400;
          font-size: rem(12);
          color: #5e5e5e;
          line-height: rem(24);
          border-bottom: 1px solid #ddd;
        }
        ul {
          padding: rem(10);
          li{
            padding: rem(15);
            border-bottom: 1px solid #ddd;
            h4{
              color: #399ab2;
              font-weight: 400;
              font-size: rem(14);
              b{
                cursor: pointer;
                font-weight: 400;
              }
              a{
                font-size: rem(10);
              }
              i{
                display: block;
                font-size: rem(10);
                color: #aba9a9;
              }
            }
            span{
              display: inline-block;
              margin: rem(5) 0 0 rem(10);
              font-size: rem(12);
              line-height: rem(20);
              padding: rem(4) rem(6);
              border-radius: rem(4);
              color: #5e5e5e;
            }
            ol{
              box-sizing: border-box;
              width:80%;
              margin: 0 auto;
              background:#eaeefb;
              border-radius: rem(6);
              padding:rem(5) rem(10);
              li{
                word-break:break-all;
                margin:0;
                padding:0;
                border:0;
                line-height: rem(20);
                strong{
                  cursor: pointer;
                }
                span{
                  font-size:rem(10);
                  line-height: rem(12);
                  padding:0;
                  margin:0 0 0 rem(4);
                }
              }
            }
            p{
              text-align: right;
              margin-top: rem(10);
              b{
                cursor: pointer;
                font-weight: 400;
                margin-left: rem(10);
                color: #4395ff;
              }
            }
            form{
              display: flex;
              justify-content: space-between;
              .el-input:nth-child(1){
                max-width:25%;
              }
              .el-input:nth-child(2){
                margin:0 rem(5);
              }
            }
            .showComment{
              display: none;
            }
          }
        }
      }
      .top{
        position: fixed;
        right: rem(20);
        bottom: rem(10);
        .el-button {
          display: block;
          width: 100%;
        }
      }
  }
</style>
