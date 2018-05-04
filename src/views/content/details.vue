<template>
  <div id="details" v-if="details">
      <h3>{{details.title}}</h3>
      <div v-html="details.ueditor" class="detailsContent"></div>
  </div>
</template>


<script>
export default {
  data () {
      return {
          details: {
              id:1
          }
      }
  },
  methods: {
      getDetails () {
          let self = this
          this.$emit('showLoading',true)
          let params = {id:this.$route.params.id}
          this.$http.list(params).then(data=>{
            self.details = data.data.data[0]
            self.$emit('showLoading',false)
          }).catch(eorr => {
            self.$emit('showLoading',false)
          })
      }
  },
  mounted () {
      this.getDetails()
  }
}
</script>

<style lang="scss" scoped>
  #details{
      padding:1.5rem 1.5rem;
      h3{
          text-align: center;
          font-size:2rem;
      }
      .detailsContent{
          margin-top:2rem;
          font-size:1.4rem;
          /deep/ blockquote{
              margin: 1rem;
              padding: 1.5rem;
              border-radius: 0.6rem;
              background:#cccc;
              overflow:auto;
          }
          /deep/ p{
              line-height: 2rem;
          }
      }
  }

  @media (max-width: 500px) {
      #details{
      padding:1.5rem 1rem;
      h3{
          text-align: center;
          font-size:1.8rem;
      }
  }
  }
</style>


