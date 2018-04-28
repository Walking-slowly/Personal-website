<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    width:100%;
    height:100%;
    background:#f5f5f5 !important;
    
  }
  html{
    font-size:62.5%;
  }
  
  body,ul,h4,p,h2,ol{
    margin:0;
    padding:0;
  }

  li{
    list-style:none;
  }

  a{
    text-decoration: none;
  }

  body::-webkit-scrollbar {
      width:0.8rem; 
      height:0.8rem; 
  }
  body::-webkit-scrollbar-button{/*滚动条两端的按钮，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置2）*/  
      display: none;
  } 
  body::-webkit-scrollbar-track{/*外层轨道，可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果（位置3）*/  
      display: none; 
  }
  body::-webkit-scrollbar-thumb{/*滚动条里面可以拖动的那部分（位置5）*/  
      background:#b2b2b2;  
      border-radius:0.6rem;  
  } 
  @media (max-width: 500px) {
    body::-webkit-scrollbar {
         display: none;
      
    }
  }   
 
</style>
