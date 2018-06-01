<template>
  <div id="aside">
     <el-header>后台管理</el-header>
     <el-aside>
       <router-link tag="li" v-for="(item,i) in nav" :key="i" :to="item.path" :class="item.path==lineheight?'active':''">{{item.name}}</router-link>
     </el-aside>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nav: [
        {
          name: '列表',
          path: '/eidtor/list'
        },
        {
          name: '添加',
          path: '/eidtor/insert/null'
        }
      ],
      lineheight: '/eidtor/list'
    }
  },
  created () {
    this.lineheight = this.$route.path
  },
  watch: {
    $route () {
      this.lineheight = this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
  #aside{
    width: rem(170);
    height: 100%;
    .el-header{
      background:#409EFF;
      height: rem(35)!important;
      font-size: rem(14);
      font-weight: 600;
      line-height: rem(35);
      text-align: center;
      color: #fff;
    }
    .el-aside{
      width: rem(170) !important;
      background: #303133;
      height: 100%;
      li{
        cursor: pointer;
        color: #8a979e;
        line-height: rem(40);
        font-size: rem(12);
        text-align: center;
        &:hover{
          background:#2b373d;
          color: #e8eaec;
        }
      }
      .active{
        background:#2b373d;
        color: #e8eaec;
      }
    }
  }
</style>
