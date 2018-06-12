<template>
    <div id="insert" v-if="data">
        <el-input
        placeholder="请输入标题"
        v-model="data.title"
        clearable>
        </el-input>
         <el-input
        placeholder="请输入简介"
        v-model="data.brief"
        clearable>
        </el-input>
        <div class="editor">
            <div id="editorHead"></div>
            <div id="editorContent"></div>
        </div>
        <el-button type="primary" @click="submi" round :disabled="data.title == ''">确认提交</el-button>
    </div>
</template>

<script>
import E from 'wangeditor'
export default {
  data () {
    return {
      data: {
        title: '',
        brief: '',
        ueditor: ''
      }
    }
  },
  methods: {
    create () {
      var editor = new E('#editorHead', '#editorContent')

      // 菜单配置
      editor.customConfig.menus = [
        'head', // 标题
        'bold', // 粗体
        'italic', // 斜体
        'underline', // 下划线
        'strikeThrough', // 删除线
        'foreColor', // 文字颜色
        'link', // 插入链接
        'list', // 列表
        'justify', // 对齐方式
        'image', // 插入图片
        'table', // 表格
        'code' // 插入代码
      ]

      // 隐藏“网络图片”tab
      editor.customConfig.showLinkImg = false
      editor.customConfig.customUploadImg = (files, insert) => {
        var imgdata = new FormData() // 创建formData对象
        // 循环写入formData
        files.forEach(item => {
          return imgdata.append('img', item)
        })
        this.$http.upload(imgdata).then(data => {
          data.data.files.forEach(item => {
            insert('./upload/' + item.filename)
          })
        })
      }

      editor.customConfig.onchange = html => {
        // html 即变化之后的内容
        this.data.ueditor = html
      }
      editor.create()
      // 设置内容
      editor.txt.html(this.data.ueditor)

      // 添加头部样式
      editor.$toolbarElem[0].className += ' editorTop'
    },
    submi () {
      var text = this.data._id ? '更新' : '添加'
      var self = this
      this.$http[this.data._id ? 'update' : 'inserts'](this.data).then(data => {
        this.$message({
          duration: 500,
          message: text + '成功',
          type: 'success',
          onClose: function () {
            self.$router.push({ path: '/eidtor/list' })
          }
        })
      }).catch(eorr => {
        this.$message.error(text + '失败')
      })
    },
    getId () {
      let id = this.$route.params.id
      if (id !== 'null') {
        this.$http.details({id: id}).then(data => {
          this.data = data.data.result
          this.create()
        })
      } else {
        this.create()
      }
    }
  },
  mounted () {
    this.getId()
  }
}
</script>

<style lang="scss" scoped>
    #insert {
        width: 85%;
        margin: 0 auto;
        .el-input{
            margin-bottom: rem(10);
        }
        .editor{
            .editorTop {
                background: #ffffff;
                min-height: rem(27.8);
                border-radius: rem(4);
                border: rem(1) solid #dcdfe6;
                line-height: rem(20);
                flex-wrap:wrap;
                font-size: rem(12);
            }
            #editorContent {
                margin-top: rem(10);
                background: #ffffff;
                border-radius: rem(4);
                border: rem(1) solid #dcdfe6;
                min-height: rem(220);
                font-size: rem(14);
            }
        }
        .el-button{
            margin: rem(15) auto;
            width: rem(130);
            display: block;
        }
    }
</style>
