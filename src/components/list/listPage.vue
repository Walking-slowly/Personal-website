<template>
    <div id= "list" >
        <div class="listHead">
            <a href= "javasript:0;" @click.prevent= "popup">
                <img src= "../../../static/img/icon.jpg"/>  
            </a>
            <form>
                <input type="text"/>
                <span><i class="iconfont icon-unie036"></i></span>
            </form>
        </div>
        <div v-if= "list" class= "listContentBox">
            <ul >
                <li v-for= "(item,i) in list" :key= "i" @click.prevent= "jumpDetails(item.id)">
                    <a href= "javascript:0;">
                        <img :src= "item.ueditor | getImg"/>
                    </a>
                    <div class= "listContent">
                        <h4>{{item.title}}</h4>
                        <p>{{item.brief | capitalize('50')}}</p>
                        <div class= "icon"> 
                            <p>{{item.time | timers}}</p>
                            <p>
                                <span><i class="iconfont icon-liulan-tianchong"></i>{{item.Fabulous}}</span>
                                <span><i class="iconfont icon-xihuan"></i>{{item.lick}}</span>
                                <span><i class="iconfont icon-pinglun2"></i>{{item.comment}}</span>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :background = true
                :page-sizes="[5, 20, 30, 40]"
                layout="total, sizes, prev, pager, next, jumper"
                :page-size="pageNumber"
                :total="6">
            </el-pagination>
            <div class="listPage">
                <button @click.prevent= "prev" ref= "prev" disabled class= "showbutton">上一页</button>
                <button @click.prevent= "next" ref= "next">下一页</button>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: "List",
  data () {
      return {
          page:1,
          pageNumber:5,
          total:null,
          totalPage:null,
          list:null,
          currentPage: 1,
          percentage:0,
          popups:false,
          url:'http://45.76.169.191:80'

      }
  },
  methods:{
      //获取数据
        getData () {
            
            let self = this;
            let time;
            $.ajax({
                    type:"POST",
                    url:`${self.url}/getList`,
                    data:{
                        page:self.page,
                        num:self.pageNumber
                    },
                    beforeSend : function(){
                    // 设置 进度条到20%慢慢变到50%
                        time  = setInterval(()=>{
                            self.percentage += 1;
                            if(self.percentage >= 20){
                                clearInterval(time)
                            }
                        })

                    },
                    complete: function(){
                        // 设置 进度条到80%
                        time  = setInterval(()=>{
                            self.percentage += 1;
                            if(self.percentage >= 80){
                                clearInterval(time)
                            }
                        })

                    },
                    success (data) {
                        console.log(JSON.parse(data))
                        self.percentage = 99;
                        clearInterval(time)
                        self.$store.commit('loadingBool',false)
                        self.list = JSON.parse(data).data;
                        self.total = JSON.parse(data).total;
                        self.totalPage = Math.ceil(JSON.parse(data).total/self.pageNumber);
                    },//失败
                    error(){
                        clearInterval(time)
                    }
                    
            })
            
        },
        handleSizeChange(val) {
            this.pageNumber = val;
            this.percentage = 0;
            this.getData();
        },
        handleCurrentChange(val) {
            this.page = val;
            this.percentage = 0;
            this.$store.commit('loadingBool',true)
            this.getData();
        },
      //下一页
        next() {
            this.percentage = 0;
            this.page++;
            this.getData()
        },
        //上一页
        prev(){
            this.percentage = 0;
            this.page--;
            this.getData()
        },
        //跳转详情
        jumpDetails (id) {
            this.$router.push({path:'/list/details',query:{id:`${id}`}})
        },
        //显示侧边栏
        popup() {
            this.popups = !this.popups
            this.$store.commit('showHead',this.popups)
        }
  },
  mounted(){
        this.$store.commit('loadingBool',true)
        this.getData()
  },
  watch : {
        'percentage' (){
            this.$store.commit('showLoading',this.percentage)
        },
        //高亮
        'page'(val){
            if(val <= 1){
                $(this.$refs.prev).attr('disabled',"true").addClass('showbutton')
                $(this.$refs.next).removeAttr("disabled").removeClass('showbutton')

            }else if(val >= this.totalPage){
                    $(this.$refs.prev).removeAttr("disabled").removeClass('showbutton')
                    $(this.$refs.next).attr('disabled',"true").addClass('showbutton')
            }else{
                    $(this.$refs.prev).removeAttr("disabled").removeClass('showbutton')
                    $(this.$refs.next).removeAttr("disabled").removeClass('showbutton')
            }
        }    
  }
 
}
</script>

<style lang="scss" scoped>
    #list{
        padding-bottom:1rem;
        text-align: center;
        .listHead{
            display: none;
            width:100%;
            height:4rem;
            background:#000;
            a{
                float:left;
                width:3rem;
                height:3rem;
                border-radius: 50%;
                display: block;
                overflow: hidden;
                margin:0.5rem 0 0 1rem;
                img{
                    width:100%;
                    height:100%;
                }
            }
            form{
                width:17rem;
                height:2.5rem;
                margin:0.75rem auto;
                border-radius: 1.3rem;
                background:#fff;
                input{
                    float:left;
                    padding:0.5rem 0.5rem 0.5rem 1rem;
                    border-radius: 1.3rem;
                    border:0;
                    outline: none;
                    font-size:1.4rem;
                    width:13rem;
                }
                span{
                    
                    cursor: pointer;
                    display: block;
                    i{
                        color:#000;
                        font-size:1.8rem;
                        font-weight:700;
                        line-height: 2.4rem;
                    }
                }
                
            }
        }
        .listContentBox{
            ul{
                margin:0 auto;
                width:90%;
                li{
                    cursor: pointer;
                    overflow: hidden;
                    padding:0 1rem;
                    margin-top:1.5rem;
                    border-radius: 0.6rem;
                    padding-bottom:1rem;
                    border-bottom:1px solid #ddd;
                    a{
                        overflow: hidden;
                        border-radius: 0.4rem;
                        float: left;
                        margin-right:2rem;
                        display: block;
                        width:30%;
                        max-height:16rem;
                        min-height:12rem;
                        overflow: hidden;
                        background:#ddd;
                        img{
                            transition: all 0.5s;
                            border:0;
                            width:100%;
                            height:100%;
                            border-radius: 0.4rem;
                            &:hover{
                                transform: scale(1.5);
                            }
                        }
                    }
                    .listContent{
                        display: flex;
                        flex-flow: column;
                        justify-content: space-between;
                        height:16rem;
                        text-align: left;
                        h4{
                            font-size:1.8rem;
                            color:#6f6868;
                        }
                        p{
                            line-height: 2.5rem;
                            color:#6f6868;
                            font-size: 1.4rem;
                        }
                        .icon{
                            p{
                                color:#b2b2b2;
                                float:left;
                                font-size:1.2rem;
                                &:last-child{
                                    float:right;
                                }
                                span{
                                    font-size: 1.2rem;
                                    margin-right:3rem;
                                    i{
                                        font-size:1.4rem !important;
                                        margin-right:0.9rem;
                                        
                                    }
                                    &:hover{
                                        color:#3688ff;
                                    }
                                }
                            }
                            
                            
                            
                        }
                    }
                }
            }
            .el-pagination{
                margin:2rem auto;
            }
            .listPage{
                display: none;
                padding:0.6rem 5%;
                button{
                    font-size:12px;
                    float:left;
                    width:8rem;
                    height:3rem;
                    border-radius: 0.6rem;
                    background:#fff;
                    display: block;
                    line-height: 3rem;
                    border:0;
                    outline: none;
                    &:last-child{
                        float:right;
                    }
                }
                .showbutton{
                    background:#ddd;
                }
            }
        }
       
    }
    @media (max-width: 730px) {
        #list{
           .listContentBox{
                ul{
                    
                    li{
                        a{
                        
                            float: none;
                            width:100%;
                            height:auto;  
                            margin-bottom: 0.3rem;   
                        }
                        .listContent{
                        height:auto;
                        h4{
                            line-height: 3.2rem;
                        }
                        p{
                            line-height: 2.8rem;
                        }
                        .icon{  
                            p{
                                    color:#b2b2b2;
                                    float:left;
                                    &:last-child{
                                        float:right;
                                    }
                                    span{
                                        
                                        &:last-child{
                                            margin-right:0;
                                        }
                                    }
                                }
                        }
                        }
                    }
                }
           } 
        }   
    }

    @media (max-width: 500px) {
        #list{
            display: flex;
            flex-flow: column;
            .listContentBox{
                overflow-y:auto;
                
                &::-webkit-scrollbar {
                    width:0.4rem; 
                    height:0.4rem; 
                }
                &::-webkit-scrollbar-button{/*滚动条两端的按钮，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置2）*/  
                    display: none;
                } 
                &::-webkit-scrollbar-track{/*外层轨道，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置3）*/  
                    display: none; 
                }
                &::-webkit-scrollbar-thumb{/*滚动条里面可以拖动的那部分（位置5）*/  
                    background:#b2b2b2;  
                    border-radius:0.2rem;  
                } 
                .el-pagination{
                    display: none;
                }
                .listPage{
                    display: block;
                }
            }
             .listHead{
                display: block;
            }
        }
    }


</style>


