<template>
  <div id="details" v-if="details" ref="details">
      <h3>{{details.title}}</h3>
      <div v-html="details.ueditor" class="detailsContent"></div>
      <p>
        <router-link tag="span" :to="'/details/'+prev._id" v-if="prev">上一篇：{{prev.title}}</router-link>
        <router-link tag="span" :to="'/details/'+next._id" v-if="next">下一篇：{{next.title}}</router-link>
      </p>
      <div class="comment">
        <h2>评论</h2>
        <el-form :inline="true" :model="comments" class="demo-form-inline" >
          <el-form-item>
            <el-input  v-model="comments.name" placeholder="呢称" clearable resize="none"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input  v-model="comments.url" placeholder="输入显示个人博客地址" clearable resize="none"></el-input>
          </el-form-item>
          <el-input type="textarea" v-model="comments.text" :rows="4" placeholder="请输入..." resize="none"></el-input>
          <el-button type="primary" @click="addComment">提交</el-button>
        </el-form>
        <h6>共{{details.comment.length}}条评论</h6>
        <ul v-if="details.comment !== 0">
          <li v-for="(item, i) in details.comment" :key="i">
            <h4>
              <b v-html="item.name"></b>
              <a v-if="item.url" :href="'http://'+item.url" target="_blank">个人博客地址</a>:
              <i>{{item.time | timer}}评论</i>
            </h4>
            <span v-html="item.text"></span>
            <p>
              <b>支持·{{item.lick}}</b>
              <b>回复</b>
            </p>
          </li>
        </ul>
      </div>
      <div class="top">
        <el-button size="small" disabled>{{details.Fabulous}}·浏览</el-button>
        <el-button size="small" :disabled="click" @click="updateLick">{{details.lick}}·支持</el-button>
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
        url: ''
      },
      click: false
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
        name: this.comments.name ? xss(this.comments.name) : '路人甲',
        text: xss(this.comments.text),
        time: new Date(),
        url: xss(this.comments.url),
        lick: 0
      }

      this.details.comment.unshift(this.comments)
      this.comments = {
        name: '',
        text: '',
        url: ''
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
        margin-top: rem(20);
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
              background: #d0e0ca;
              border-radius: rem(4);
              color: #5e5e5e;
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
          }
        }
      }
      .top{
        position: fixed;
        right: rem(20);
        bottom: rem(30);
        .el-button {
          display: block;
          margin: rem(10) 0 0 0;
          width: 100%;
        }
      }
  }
</style>
