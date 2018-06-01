<template>
    <div id="sss">
        <aside-component/>
        <main-component/>
    </div>
</template>

<script>
import asideComponent from './aside.vue'
import mainComponent from './main.vue'
export default {
  components: {
    asideComponent,
    mainComponent
  }
}
</script>

<style lang="scss" scoped>
    #sss {
        width: 100%;
        height: 100%;
        display: flex;
        position: fixed;
    }
</style>
