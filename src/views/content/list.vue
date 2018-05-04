<template>
  <div id="list">
      <ul v-if="list">
          <router-link :to="'/details/'+item.id" v-for="(item,i) in list" :key="i">
            <li >
                <div class="listContent">
                    <h3>{{item.title}}</h3>
                    <p>{{item.brief}}</p>
                    <span>
                        <em>发布于{{item.time | timers}}</em>
                        <i class="iconfont icon-pinglun2"> {{item.comment}}</i>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: null,
      loading: true,
      params: {
          num: 5,
          page: 1
      }
    }
  },
  methods: {
    gitList () {
      var self = this
      this.$http.list(self.params).then(data => {
        self.list = data.data.data
        self.loading = false
      }).catch(eorr => {
        self.loading = false
      })
    }
  },
  mounted () {
    this.gitList()
  },
  watch: {
      loading () {
          this.$emit('showLoading',this.loading)
      }
  }
}
</script>

<style lang="scss" scoped>
  #list{
      ul{
          padding: 1.5rem 3rem;
          li{
              width: 100%;
              display: flex;
              justify-content: space-between;
              border-bottom: 0.075rem solid #ccc;
              padding:3rem 1.5rem;
              .listContent{
                  color:#353434;
                  display: flex;
                  flex-flow: column;
                  justify-content: space-between;
                  flex: 1;
                  padding-right: 2rem;
                  h3{
                      font-size: 1.8rem;
                      text-align: center;
                  }
                  p{
                      font-size: 1.6rem;
                      text-indent: 3.2rem;
                      line-height: 2.6rem;
                  }
                  span{
                      line-height: 2rem;
                      color: $color;
                      em{
                          float: left;
                      }
                      i{
                          float: right;
                          margin-left: 2rem;
                          font-size: 1.2rem;
                          &:first-child{
                              margin-left: 0;
                          }
                      }
                      
                  }
              }
              a{
                  border-radius: 0.4rem;
                  display: block;
                  width: 20rem;
                  height: 13rem;
                  overflow: hidden;
                  img{
                      border: 0;
                      display: block;
                      width: 100%;
                  }
              }
              
          }

      }
  }

  @media (max-width: 500px) {
      #list{
          ul{
              padding:0.3rem 0.5rem;
              li{
                  padding:2rem 1rem;
                  flex-flow: column-reverse;
                  a{
                      width:100%;
                  }
                  .listContent{
                      padding-right:0;
                      h3{
                          line-height: 4rem;
                      }
                      span{
                          margin-top: 1rem;
                      }
                  }
                  
              }
          }
          
      }
  }
</style>



