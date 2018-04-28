<template>
    <div id= "ueditor">
        <form>
            <input type= "text" placeholder="请输入标题" v-model= "data.title"/>
            <input type= "text" placeholder="请输入简介"  v-model= "data.brief"/>
        </form>
        <div id="wangeditor"></div>
        <span @click.prevent= "submission" :class= "data.title == ''?'':'lineheight'">提交</span>
    </div>
</template>

<script>
import E from 'wangeditor';
export default {
    name: "Ueditor",
    data () {
        return {
            data:{
                ueditor:'<p style= "color:#b2b2b2">请输入内容</p>',
                title:'',
                brief:'',
                time:null,
                Fabulous:0,
                lick:0,
                comment:0,
                url:'http://45.76.169.191:80'
            }
        }
    },
    methods:{
        //富文本编辑器初始化
        creaUeditor () {
            var self = this;
            var editor = new E('#wangeditor');
            // 自定义菜单配置
            editor.customConfig.menus = [
                'bold',
                'italic',
                'underline',
                'fontSize',
                'strikeThrough', 
                'foreColor',
                'list', 
                'justify',
                'quote',
                'link',
                'emoticon',
                'image',
                'table',
                'undo',
                'redo'
            ]

            //隐藏网络图片
            editor.customConfig.showLinkImg = false;

            //自定义上传图片
            editor.customConfig.customUploadImg = function (files, insert) {
                // files 是 input 中选中的文件列表
                // insert 是获取图片 url 后，插入到编辑器的方法

                // 上传代码返回结果之后，将图片插入到编辑器中
                // insert(imgUrl)
                var formData = new FormData();
                $(files).each((index,item)=>{
                     formData.append('files',item)
                })
                $.ajax({
                    url:`${self.url}/upload`,
                    type:'POST',
                    cache:false,
                    data:formData,
                    processData: false,
                    contentType:false,
                    success(data){
                        $(data.files).each((index,item)=>{
                            insert("../../../static/img/"+item.filename)
                        })
                    }
                })
            }

             //获取焦点编辑
            editor.customConfig.onfocus = ()=> {
                editor.$textElem.attr('contenteditable', true).focus();
                if(this.data.ueditor == '<p style= "color:#b2b2b2">请输入内容</p>'){
                    editor.txt.html('');
                    this.data.ueditor = ''
                }   
            }

            //实时更新内容
            editor.customConfig.onchange = (html) => {
                 this.data.ueditor = html
            }

            editor.create()
            //修改编辑器头样式
            $(editor.$toolbarElem[0]).css({
                backgroundColor:'#fff',
                border:'1px solid #ddd',
                flexFlow:'wrap',
                borderRadius:'0.6rem 0.6rem 0 0', 
                fontSize:'1.4rem',
            })
            //修改编辑器内容样式
            $(editor.$textElem[0]).css({
                backgroundColor:'#fff',
                border:'1px solid #ddd',
                borderTop:0,
                borderRadius:'0 0 0.6rem 0.6rem',
                padding:'0 1rem',
                fontSize:'1.4rem',
                overflowY:'auto',
                color:'#6f6868'
            }).parent().css({
                border:0,
                height:'30rem'
            });

            //禁止编辑
            editor.$textElem.attr('contenteditable', false);

            //设置内容
            editor.txt.html(this.data.ueditor); 
        },
        //提交
        submission () {
            let self = this;
            this.data.time = new Date().getTime();
            $.ajax({
                    type:"POST",
                    url:`${self.url}/insertDate`,
                    data:self.data,
                    success(data){
                        self.$notify({
                            title: '成功',
                            type: 'success'
                        });
                        console.log(data)
                    },
                    error(){
                        self.$notify.error({
                            title: '失败'
                        });
                    }
                    
            })
           
        }
    },
    mounted() {
        this.creaUeditor()
    }
}
</script>

<style lang="scss" scoped>
    #ueditor{
        width:50%;
        margin:4% auto;
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        form{
            margin:2rem 0;
            display: flex;
            justify-content: space-around;
            input{
                flex:1;
                margin-right:2rem;
                padding:0.4rem 1rem;
                height:2rem;
                border:0.1rem solid #ddd;
                border-radius: 0.6rem;
                font-size:1.4rem;
                color:#6f6868;
                outline: none;
                &:last-child{
                    margin-right:0;
                }
            }
        }
        span{
            display: block;
            margin:2rem auto;
            padding:1rem 3.5rem;
            background:#ddd;
            margin-bottom:0;
            color:#fff;
            border-radius: 0.6rem;
            font-size:1.4rem;
        }
        .lineheight{
             background:#3688ff;
        }

    }

    @media (max-width: 730px) {
        #ueditor{
             width:70%;
        }
    }

    @media (max-width: 500px) {
        #ueditor{
            margin:1% auto;
             width:85%;
             form{
                 margin-top:0;
                 box-sizing: border-box;
                 flex-flow: column;
                 input{
                     margin-right:0;
                     margin-top:2rem;
                 }
             }
        }
    }
</style>




