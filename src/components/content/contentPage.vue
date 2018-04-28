<template>
    <div id= "content" :class= "{'scroll':showScroll}" ref= "content">
            <router-view class= "contentBox"/>
    </div>
</template>

<script>
export default {
   name: "Content",
   data () {
       return {
           topValue :0,
           showScroll:false,
          
       }
   },
   methods:{
        roll () {
           this.showScroll = true
            var interval = setInterval(()=> {
                if(document.documentElement.scrollTop == this.topValue) {
                    clearInterval(interval);
                    this.showScroll = false
                }
            },800);
            this.topValue = document.documentElement.scrollTop;
        },
        showHead(val){
            this.headPopups = val;
        }
   },
   mounted () {
       $('#content').bind('scroll',this.roll)
   },
   destroyed () {
       $('#content').unbind('scroll')
   },
 

}
</script>

<style lang="scss" scoped>
    #content{
        background:#f5f5f5;
        overflow-y: scroll;
        flex:1;
          
        &::-webkit-scrollbar {
            width:.8rem; 
            height:.8rem; 
        }
        &::-webkit-scrollbar-button{/*滚动条两端的按钮，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置2）*/  
            display: none;
        } 
        &::-webkit-scrollbar-track{/*外层轨道，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置3）*/  
            display: none; 
        }  
    }

    .scroll{
        &::-webkit-scrollbar-thumb{/*滚动条里面可以拖动的那部分（位置5）*/  
            background:#b2b2b2;  
            border-radius:6px;  
        } 
    }

    @media (max-width: 500px) {
        #content {
            position: fixed;
            height:100%;
            display: flex;
            &::-webkit-scrollbar {
                    display: none; 
                }
                .contentHead{  
                    display: block;
                
                }
            }

      
        
    }

    
</style>


