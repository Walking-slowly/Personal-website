<template>
  <div id="home">
      <homeHead></homeHead>
      <homeContent></homeContent>
  </div>
</template>

<script>
import homeHead from '../head/index'
import homeContent from '../content/index'
export default {
  components: {
    homeHead,
    homeContent
  }
}
</script>

<style lang="scss" scoped>
    #home{
        width:100%;
        height:100%;
        display: flex;
        position: fixed;
    }

    @media (max-width: 1024px) {
      #home{
        flex-flow: column;
        position: initial;
      }
    }

    @media (max-width: 750px) {
      #home{
        flex-flow: column;
         position: fixed;
      }
    }
</style>
