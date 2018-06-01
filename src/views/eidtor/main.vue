<template>
    <div id="main">
        <el-header>{{title}}</el-header>
        <el-main>
            <router-view/>
        </el-main>
    </div>
</template>

<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  created () {
    this.title = document.title
  },
  watch: {
    $route () {
      this.title = document.title
    }
  }
}
</script>

<style lang="scss" scoped>
    #main {
        display: flex;
        flex-flow: column;
        height: 100%;
        flex: 1;
        width: 100%;
        background: #f1f4f5;
        .el-header {
            height: rem(35) !important;
            background: #fff;
            box-shadow: 0 rem(2) rem(4) rgba(0, 0, 0, .08);
            text-align: center;
            line-height: rem(35);
            font-size: rem(12);
            color: #909399;
        }
    }
</style>
