<template>
    <div id= "home" ref= "home">
        <Head/>
        <Content/>
    </div>
</template>

<script>
import Head from "./head/headPage";
import Content from "./content/contentPage";

export default {
    name : 'HelloWorld',
    components:{
        Head,
        Content
    },
    computed:{
        showHead(){  
            return this.$store.state.list.headPopups;
        }
    },
    watch :{
        'showHead'(val) {
            if(val){
                $(this.$refs.home).addClass('homebox')
            }else{
                $(this.$refs.home).removeClass('homebox')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    #home{
        display: flex;
        height:100%;
        width:100%;
        position:fixed;
        transition: all 0.5s;
       
    }

    @media (max-width: 1024px) {
        #home {
            flex-flow: column;
            position:initial;
        }
    }

    @media (max-width: 730px) {
        #home {
            display: flex;
            height:100%;
            width:100%;
        }
        
    }
    @media (max-width: 500px) {
        #home {
           position: fixed;
        }
        .homebox{
            transform: translateX(85%);
        }
        
    }

</style>




