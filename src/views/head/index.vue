<template>
    <div id="head">
        <header class="active0" ref="head">
            <a href="javascript:;">
                <img src="../../assets/img/icon.jpg"/>
            </a>
            <ul>
                <li v-for="(item,i) in nav" :key="i" :class="item.id==showId?'active':''" @click="showNav(item.id)">{{item.name}}</li>
            </ul>
        </header>
        <div class="head">
            <a href="javascript:;">
                <img src="../../assets/img/icon.jpg"/>
            </a>  
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      nav: [
        {id: 0, name: 'aaaa'},
        {id: 1, name: 'bbbbb'},
        {id: 2, name: 'cccc'}
      ],
      showId: 0
    }
  },
  methods: {
    showNav (id) {
      this.showId = id
      this.$refs.head.className = 'active' + id
    }
  }
}
</script>

<style lang="scss" scoped>
    #head{
        header{
            padding:5rem 0;
            width: 33%;
            min-width:30rem;
            height: 100%;
            background-size: auto 100%;
            transition: all 1s;
            a{
                margin: 0 auto;
                display: block;
                width: 10rem;
                height: 10rem;
                border-radius: 50%;
                overflow: hidden;
                border:0.4rem solid $color;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
            ul{
                margin-top:4rem;
                text-align: right;
                li{
                    padding-right: 1.5rem;
                    font-size: 2rem;
                    color: $color;
                    line-height: 4.8rem;
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
            background:#000;
            height:5rem;
            line-height: 5rem;
            a{
                margin: 0.5rem 0 0 1rem;
                display: inline-block;
                width: 4rem;
                height: 4rem;
                overflow: hidden;
                border-radius: 50%;
                img{
                    width:100%;
                    border:0;
                    display: block;
                }
            }
        }
    }

    @media (max-width: 500px) {
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




