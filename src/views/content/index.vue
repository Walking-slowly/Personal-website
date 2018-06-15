<template>
  <div id="content" v-loading="loadingBool" element-loading-background="rgba(245,245,245,0.5) !important" ref="content" :class="loadingBool?'contentActive':''">
    <router-view @showLoading="getLoading"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loadingBool: true
    }
  },
  methods: {
    getLoading (val) {
      this.loadingBool = val
      this.$refs.content.scrollTop = 0
    }
  }
}
</script>

<style lang="scss" scoped>
    #content{
        position: relative;
        flex: 1;
        overflow-y: scroll;
        background-color: $backgroundcolor !important;
        -webkit-overflow-scrolling: touch;
    }
    .contentActive{
        overflow:hidden !important;
    }

    @media (max-width: 1024px) {
      #content{
        overflow: hidden;
      }
    }

    @media (max-width: 750px) {
      #content{
        overflow-y: scroll;
      }
    }
</style>
