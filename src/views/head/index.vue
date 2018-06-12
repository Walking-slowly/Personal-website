<template>
    <div id="head">
        <header class="active0" ref="head">
            <a href="javascript:;">
                <img src="../../assets/img/icon.jpg"/>
            </a>
            <ul>
                <router-link tag="li" :to="item.path" v-for="(item,i) in nav" :key="i" :class="item.id==showId?'active':''" @click="showNav(item.id)">{{item.name}}</router-link>
            </ul>
        </header>
        <div class="head">
            <el-row :gutter="20" type="flex" justify="space-between" tag="div" class="listHead" v-if="showHead">
                <el-col :span="4"><a href="javascript:;"><img src="../../assets/img/icon.jpg"/></a></el-col>
                <el-col :span="16">
                    <el-input
                        size="mini"
                        placeholder="请输入..."
                        clearable
                        prefix-icon="el-icon-search"
                        >
                    </el-input>
                </el-col>
                <el-col :span="3.5"><span><i class="el-icon-menu"></i></span></el-col>
            </el-row>
            <el-row type="flex" justify="space-between" tag="div" class="detailsHead" v-else>
                <el-col :span="2"><span><i class="el-icon-back" @click.prevent="back"></i></span></el-col>
                <el-col :span="2">
                    <el-dropdown trigger="click">
                        <span class="el-dropdown-link">
                        <i class="el-icon-more"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item><i class="el-icon-share"></i> 分享</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      nav: [
        {id: 0, name: 'Article', path: '/list'},
        {id: 1, name: 'bbbbb', path: '/list'},
        {id: 2, name: 'cccc', path: '/list'}
      ],
      showId: 0,
      showHead: true
    }
  },
  methods: {
    showNav (id) {
      this.showId = id
      this.$refs.head.className = 'active' + id
    },
    back () {
      this.$router.back(-1)
    },
    switchHead () {
      if (this.$route.name === 'list') {
        this.showHead = true
      } else {
        this.showHead = false
      }
    }
  },
  mounted () {
    this.switchHead()
  },
  watch: {
    $route (to, from) {
      if (to.name === 'details') {
        this.showHead = false
      } else {
        this.showHead = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    #head{
        header{
            padding:rem(50) 0;
            width: 33%;
            min-width:rem(240);
            height: 100%;
            background-size: auto 100%;
            transition: all 1s;
            a{
                margin: 0 auto;
                display: block;
                width: rem(100);
                height: rem(100);
                border-radius: 50%;
                overflow: hidden;
                border:rem(5) solid $color;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            ul{
                margin-top:rem(30);
                text-align: right;
                li{
                    padding-right: rem(15);
                    font-size: rem(20);
                    color: $color;
                    line-height: rem(48);
                    cursor: pointer;
                    &:hover{
                        background: rgba(255,255,255,.2);
                        color:#fff;
                    }
                }
                .active{
                    background:rgba(255,255,255,.2);
                    color:#fff;
                }
            }
        }
        .active0{
            background-image: url('../../assets/img/banner0.jpg');
        }
        .active1{
            background-image: url('../../assets/img/banner1.jpg');
        }
        .active2{
            background-image: url('../../assets/img/banner2.jpg');
        }
        .head{
            display: none;
            width:100%;
            background:#000 !important;
            height:rem(54);
            .listHead{
                align-items: center;
                height: 100%;
                padding: 0 rem(15);
                a{
                    display: inline-block;
                    width: rem(40);
                    height: rem(40);
                    overflow: hidden;
                    border-radius: 50%;
                    img{
                        width:100%;
                        border:0;
                        display: block;
                    }
                }
                .el-input{
                    font-size:rem(14);
                }
                span{
                    font-size:rem(30);
                    color:$backgroundcolor;
                }
            }
            .detailsHead{
                align-items: center;
                height:100%;
                padding: 0 rem(15);
                span{
                    color:#fff;
                    font-size:rem(28);
                }
            }
        }
    }

    @media (max-width: 1024px) {
      #head{
          header{
            display: flex;
            flex-flow: column;
            justify-content: space-between;
              padding: 0;
              width: 100%;
              height: rem(180);
              background-size: 100% auto;
              a{
                  margin-top : rem(20);
                  width: rem(80);
                  height: rem(80);
                  border: rem(2) solid $color;
              }
              ul{
                  width:100%;
                  display: flex;
                  justify-content: space-around;
                  li{
                      text-align: center;
                      flex:1;
                      border-radius: rem(8) rem(8) 0 0;
                  }
              }
          }
      }
    }

    @media (max-width: 750px) {
        #head{
            header{
                display: none;
            }
            .head{
                display: block;
            }
        }
    }
</style>
