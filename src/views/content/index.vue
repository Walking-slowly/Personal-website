<template>
  <div id="content" v-loading="loadingBool">
        <router-view @showLoading="getLoading"></router-view>
  </div>
</template>

<script>
export default {
  data () {
      return {
          loadingBool:true
      }
  },
  methods: {
      getLoading(val) {
          this.loadingBool = val
      }
  }
}
</script>

<style lang="scss" scoped>
    #content{
        flex: 1;
        overflow-y: auto;
        background-color: $backgroundcolor;
    }

</style>


