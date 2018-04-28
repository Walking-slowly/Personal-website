<template>
    <div id= "details">
        <div class= "detailsHead">
            <i class="el-icon-arrow-left" @click.prevent= "returnPrev"></i>
            <i class="el-icon-more"></i>
        </div>
        <div class= "detailsContent">
            <div class= "detailsBox" v-if= "detailsData">
                <h2>{{detailsData.title}}</h2>
                <p>
                    <span>发布于{{detailsData.time}}</span>
                    <span><i class="iconfont icon-liulan-tianchong"></i>{{detailsData.Fabulous}}  ·  <i class="iconfont icon-xihuan"></i>{{detailsData.Fabulous}}</span>
                </p>
                <div v-html= "detailsData.ueditor" class= "detailsHtml"></div>
                <p class= "prev">上一篇:</p>
                <p class= "next">下一篇:</p>
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
    name: 'Details',
    data () {
        return {
            detailsData:null,
            url:'http://45.76.169.191:80'
        }
    },
    methods:{
        //返回上一层路由
        returnPrev() {
            this.$router.back(-1)
        },
        //根据id获取数据
        getDetailsData(){
            let id = this.$route.query.id;
            let self = this;
             $.ajax({
                    type:"POST",
                    url:`${self.url}/getList`,
                    data:{
                        id:id
                    },
                    success(data){
                        self.detailsData = JSON.parse(data).data[0];
                        console.log(self.detailsData)
                    }
            })
        }
    },
    mounted() {
        this.getDetailsData()
    }
}
</script>

<style lang="scss" scoped>
    #details{
        display: flex;
        flex-flow: column;
        width:100%;
        height:100%;
        color:#6F6868;
        .detailsHead{
            background:black;
            height:4rem;
            display: flex;
            display: none;
            width:100%;
            justify-content: space-between;
            i{
                display: inline-block;
                width:5rem;
                height:4rem;
                line-height: 4rem;
                font-size:2.4rem;
                color:#fff;
                text-align: center;
            }
            
        }
        .detailsContent{
            flex:1;
            overflow-y: scroll;
            padding:1rem 3rem;
            &::-webkit-scrollbar {
                width:0.6rem; 
                height:0.6rem; 
            }
            &::-webkit-scrollbar-button{/*滚动条两端的按钮，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置2）*/  
                display: none;
            } 
            &::-webkit-scrollbar-track{/*外层轨道，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置3）*/  
                display: none; 
            }
            &::-webkit-scrollbar-thumb{/*滚动条里面可以拖动的那部分（位置5）*/  
                background:#b2b2b2;  
                border-radius:0.4rem;  
            } 
           .detailsBox{
                h2{
                    font-size:1.8rem;
                    line-height:4rem;
                    text-align: center;
                }
                p{
                    display: flex;
                    justify-content: space-between;
                    color:#b2b2b2;
                    line-height: 5rem;
                    font-size:1.2rem;
                    span{
                        i{
                            font-size:1.4rem;
                            margin-right:0.5rem;
                            &:last-child{
                                cursor: pointer;
                            }
                        }
                        
                    }
                }
                .detailsHtml{
                    padding:0.4rem 0.6rem;
                    background:#fff;
                    border-radius: 0.6rem;
                    margin-bottom:1.6rem;
                    font-size:1.4rem;
                    line-height: 1.8rem;
                    /deep/ li{
                        margin-top:0.8rem;
                        list-style: initial;
                    }
                    /deep/ ul, /deep/ ol{
                        margin:1.2rem 0 1.2rem 4rem;
                    }
                    /deep/ blockquote{
                        background:#ddd;
                        width:80%;
                        margin:2rem auto;
                        padding:1rem 2rem;
                        border-radius: 0.6rem;
                        color:#6f6868;
                    }
                    /deep/ p{
                        line-height: 2rem;
                    }
                    /deep/ span{
                        line-height: 2.4rem;
                    }
                }
                .prev, .next{
                    cursor: pointer;
                    line-height: 3rem;
                }
                
           }
        }
    }
    @media (max-width: 730px) {
        #details{
            .detailsHead{
                display: none;
            }
        }
    }

    @media (max-width: 500px) {
        #details{
            position: fixed;
            .detailsHead{
                display: block;
                display: flex;
            }
            .detailsContent{
                 padding:0.5rem 1.5rem;
                 .detailsBox{
                        h2{
                            font-size:1.8rem;
                            line-height:3rem;
                            text-align: center;
                        }
                        p{
                            display: flex;
                            justify-content: space-between;
                            color:#b2b2b2;
                            line-height: 3rem;
                            font-size:1.2rem;
                        }
                        .detailsHtml{
                            font-size:1.4rem;
                            line-height: 1.8rem;
                            /deep/ li{
                                margin-top:0.8rem;
                                list-style: initial;
                            }
                            /deep/ ul, /deep/ ol{
                                margin:1.2rem 0 1.2rem 3rem;
                            }
                            /deep/ pre{
                                background:#b2b2b2;
                            }
                        }
                        
                }
            }
        }
    }
</style>


