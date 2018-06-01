<template>
  <div id="list" v-if="list">
      <ul>
          <router-link :to="'/details/'+item._id" v-for="(item,i) in list" :key="i">
            <li >
                <div class="listContent">
                    <h3>{{item.title}}</h3>
                    <p>{{item.brief}}</p>
                    <span>
                        <em>发布于{{item.time | timer}}</em>
                        <i class="iconfont icon-pinglun2"> {{item.comment.length}}</i>
                        <i class="iconfont icon-xihuan"> {{item.lick}}</i>
                        <i class="iconfont icon-liulan-tianchong"> {{item.Fabulous}}</i>
                    </span>
                </div>
                <a href="javascript:;">
                    <img src="../../assets/img/icon.jpg"/>
                </a>
            </li>
          </router-link>
      </ul>
      <div class="page">
          <span @click.prevent="prev" :class="params.page == 1?'active':''"><i class="el-icon-d-arrow-left"></i></span>
          <span @click.prevent="next" :class="params.page == total?'active':''"><i class="el-icon-d-arrow-right"></i></span>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: null,
      total: null,
      params: {
        num: 5,
        page: 1
      }
    }
  },
  methods: {
    gitList () {
      var self = this
      this.$emit('showLoading', true)
      this.$http.list(self.params).then(data => {
        console.log(data)
        self.list = data.data.result
        self.total = Math.ceil(data.data.total / self.params.num)
        self.$emit('showLoading', false)
      }).catch(eorr => {
        self.loading = false
      })
    },
    prev () {
      this.params.page--
      if (this.params.page <= 0) {
        this.params.page = 1
        return false
      }
      this.gitList()
    },
    next () {
      this.params.page++
      if (this.params.page > this.total) {
        this.params.page = this.total
        return false
      }
      this.gitList()
    }
  },
  mounted () {
    this.gitList()
  }
}
</script>

<style lang="scss" scoped>
  #list{
      ul{
          padding: rem(15) rem(20);
          li{
              width: 100%;
              display: flex;
              justify-content: space-between;
              border-bottom: rem(0.75) solid #ccc;
              padding:rem(15) rem(10);
              .listContent{
                  color:#353434;
                  display: flex;
                  flex-flow: column;
                  justify-content: space-between;
                  flex: 1;
                  padding-right: rem(20);
                  h3{
                      color: #868282;
                      font-size: rem(16);
                      line-height: rem(28);
                      text-align: center;
                  }
                  p{
                      color: #8c8585;
                      font-size:rem(14);
                      text-indent: rem(28);
                      line-height: rem(28);
                  }
                  span{
                      line-height: rem(20);
                      color: $color;
                      em{
                          float: left;
                      }
                      i{
                          float: right;
                          margin-left: rem(20);
                          font-size: rem(8);
                          &:first-child{
                              margin-left: 0;
                          }
                      }
                  }
              }
              a{
                  border-radius: rem(6);
                  display: block;
                  width: rem(200);
                  height: rem(130);
                  overflow: hidden;
                  img{
                      border: 0;
                      display: block;
                      width: 100%;
                  }
              }
          }
      }
      .page{
          display: flex;
          justify-content: space-between;
          padding:rem(10) rem(30);
          span{
              border-radius: rem(6);
              cursor: pointer;
              background:#fff !important;
              i{
                  font-size: rem(14);
                  padding: rem(10) rem(20);
              }
          }
          .active{
              background:#ccc !important;
          }
      }
  }

  @media (max-width: 750px) {
      #list{
          ul{
              li{
                  flex-flow: column-reverse;
                  a{
                      width:100%;
                  }
                  .listContent{
                      padding-right:0;
                      p{
                          text-indent: 0;
                      }
                  }
              }
          }
      }
  }
</style>
