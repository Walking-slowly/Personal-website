<template>
    <div id= "head">
        <div class= "carousel">
            <ul>
                <li v-for= "(item,i) in headList" :key= "i" ref= "li">
                    <img :src= "item.src"/>
                </li>
            </ul>
        </div>
        <div class= "headPage">
            <div class= "headTop">
                <a href= "javasript:0;">
                    <img src= "../../../static/img/icon.jpg"/>
                    <el-progress ref= "loadings" type="circle" :width= "112" :show-text= "false" :percentage= "showLoading"></el-progress>
                </a>
                
                <h4>VONNE</h4>
            </div>
            <ul>
                <li v-for= "(item,i) in headList" :key= "i" :class= "nav == item.id?'navActive':''" ref= "nav">
                    <router-link :to= "item.path" @click.native= "showNav(item.id)">{{item.name}}</router-link>
                    <b ref= "active"></b>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
   name : 'Head',
   data () {
       return {
           headList:[
               {
                    id:0,
                    name:'ARTICLE',
                    path:'/list',
                    src:'../../../static/img/banner.jpg'
               },
               {
                    id:1,
                    name:'ARTICLE  FILING',
                    path:'/sss',
                    src:'../../../static/img/banner1.jpg'
               },{
                    id:2,
                    name:'ADDSASCADDSASC',
                    path:'/list',
                    src:'../../../static/img/banner2.jpg'
               }
           ],
           nav:0
       }
   },
   methods:{
       //当前nav高亮
        showNav (id) {
            this.nav = id;
            this.selectimg(id)
            this.has(id)
        },
        //显示相应图片
        selectimg(index){ 
            $(this.$refs.li).eq(index).fadeIn(600).siblings().fadeOut(600)
                     
        },
        has (id) {
            $(this.$refs.active).width($(this.$refs.nav).eq(id).children().width());
            $(this.$refs.active).css(
                {
                    'top':(this.$refs.nav[id].offsetTop+this.$refs.nav[id].offsetHeight),
                    'left':$(this.$refs.nav[id]).children()[0].offsetLeft 
                }
            )   
        } 
   },
   mounted () {
       this.has(this.nav)
    //    this.showPopups()
   },
   computed : {
        showLoading () {
           return this.$store.state.list.loading;
        },
        showBool () {
            return this.$store.state.list.loadingBool;
        }
   },
   watch : {
       'showBool'(val) {
           if(val){
               setTimeout(()=>{
                   $(this.$refs.loadings.$el).hide(100,()=>{
                       this.$store.commit('showLoading',0)
                   })
               },600)
           }else{
               $(this.$refs.loadings.$el).show()
           }
       }
   }
  
}
</script>

<style lang="scss" scoped>
    #head{
        position: relative;
        box-sizing:border-box;
        width:30%;
        min-width:27rem;
        height:100%;
        text-align: center;
        .carousel{
            position: absolute;
            width:100%;
            height:100%;
            ul{
                width:100%;
                height:100%;
                overflow: hidden;
                position: relative;
                li{
                    display: none;
                    position: absolute;
                    left:0;
                    top:0;
                    right:0;
                    bottom:0;
                    &:first-child{
                        display: block;
                    }
                    img{
                        height:100%;
                        width:auto;
                    }
                }
            }
            
        }
        .headPage{
            padding:7rem 0;
            position: absolute;
            z-index: 99;
            right:0;
            left:0;
            .headTop{
                a{
                    position: relative;
                    border:0.6rem solid rgba(0,0,0,.0);
                    transition: all 0.5s;
                    margin:0 auto;   
                    display: block;
                    width:100px;
                    height:100px;
                    border-radius: 50%;
                    &:hover{
                        border:6px solid #fff;
                        transform: rotateZ(360deg);
                    }
                    img{
                        border:0;
                        width:100%;
                        border-radius: 50%;
                    }
                    .el-progress{
                        z-index: 99;
                        position: absolute;
                        top:-6px;
                        left:-6px;
                    }
                    
                }
                h4{
                    font-size:2rem;
                    color:#ffffff;
                    line-height: 3rem;
                }
            }
            ul{
                margin-top:4rem;
                li{
                    padding-right:3.5rem;
                    cursor: pointer;
                    line-height: 5rem;
                    text-align: right;
                    a{
                        font-size:1.8rem;
                        color:#a09c9c;
                        position: relative;
                       
                    }
                    b{
                    
                        transition: all 0.2s linear;
                        position: absolute;
                        left:0;
                        bottom:0;
                        display: block;
                        height:3px;
                        width:0;
                        background: linear-gradient(to right, red , blue);
                    }
                    &:hover{
                        a{
                            color:#fff;
                        }
                    }
                    
                }
                .navActive{
                    background: rgba(255,255,255,.29);
                    a{
                        color:#fff;
                    }
                }
            }
        }
    }

    @media (max-width: 1024px){
        #head {
            width:100%;
            height:18rem;
            display: flex;
            flex-flow: column;
            justify-content: space-around;
            .carousel{            
                ul{                
                    li{                       
                        img{
                            height:auto;
                            width:100%;
                        }
                    }
                }        
            }
            .headPage{
                padding:0;
                ul{
                    display: flex;
                    justify-content: space-around;
                    margin-top:1rem;
                    overflow: hidden;
                    width:100%;
                    li{
                        padding:0;
                        line-height: 3rem;
                        a{
                            &:after{
                                left:0;
                            }
                        }
                            &:hover{
                            a{
                                color:#fff;
                            }
                        }
                    }
                    .navActive{
                        background: none;
                        
                        a{
                            color:#fff;
                            &:after{
                                width:100%;
                            }
                        }
                    }
                   
                }
            }
        }
    }

    @media (max-width: 500px) {
        #head {
            box-sizing: border-box;
            text-align: center;
            width:80%;
            height:100%;
            display: block;   
            position: fixed;
            z-index: 9999;
            transform: translateX(-100%);
            .carousel{            
                ul{   
                       
                    li{   
                                            
                        img{
                            height:100%;
                            width:auto;
                        }
                    }
                }        
            } 
            .headPage{
                padding:4rem 0 0 0;
                ul{
                    margin-top:2rem;
                    display: block;
                    li{
                        margin-top:1rem;
                        line-height: 2.5rem;
                        padding-right:2rem;
                    }
                }
            }
        }
    }
</style>


