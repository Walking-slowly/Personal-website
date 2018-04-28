<template>
  <div>
        <!-- <h2>HTML5_canvas</h2>
    <ul style="list-style:none">
        <li>1、创建canvas</li>
        <li>2、创建矩形</li>
        <li>3、创建线条</li>
        <li>4、创建文本</li>
        <li>5、创建圆形</li>
        <li>6、创建图像</li>
    </ul>
    <hr/>
    <h3>1、创建canvas</h3>
    <p>
        <canvas id="canvas">亲,你的浏览器不支持canvas.^_^</canvas>
    </p>
    <hr/>
    <h3>2、创建矩形</h3>
    <p>
        <canvas id="canvas1">亲,你的浏览器不支持canvas.^_^</canvas>
        <button @click="func(1);">创建矩形</button>
    </p>
    <hr/>
    <h3>3、创建线条</h3>
    <p>
        <canvas id="canvas2">亲,你的浏览器不支持canvas.^_^</canvas>
        <button @click="func(2);">创建线条</button>
    </p>
    <hr/>
    <h3>4、创建文本</h3>
    <p>
        <canvas id="canvas3">亲,你的浏览器不支持canvas.^_^</canvas>
        <button @click="func(3);">创建文本</button>
    </p>
    <hr/>
    <h3>5、创建圆形</h3>
    <p>
        <canvas id="canvas4">亲,你的浏览器不支持canvas.^_^</canvas>
        <button @click="func(4);">创建圆形</button>
    </p>
    <hr/>
    <h3>6、创建图像</h3>
    <p>
        <img src="canvas.png" id="img"/>
        <canvas id="canvas5">亲,你的浏览器不支持canvas.^_^</canvas>
        <button @click="func(5);">创建图形</button>
        
    </p> -->
     <canvas id="canvas" width="300" height="300" style="border:1px solid #000000;"></canvas>
  </div>
</template>

<script>
export default {
  name: 'SSS',
  mounted () {
    console.log(window.navigator.geolocation.getCurrentPosition)
        
   var cvs = document.getElementById('canvas'),
    width = cvs.width, //800
    height = cvs.height,
    ctx = cvs.getContext('2d'),
    qi = 0, t = 600, num = 1800; //注意，是1800
    ctx.fillStyle="#f00";   
// ctx.fillRect(0,0,100,100);
    function animate () {
    // console.log(t);
      ctx.clearRect(0,0,width,height);
      for(var i=0;i<num;i++) {
          // ctx.fillRect(qi*Math.random(),t*i,50,50);
          ctx.fillRect(qi*Math.random(),t*Math.random(),50,50); //而且全部随机定位哟
      }   
      if(qi++ > width) {
          qi = 0;
      }
    } 
    window.setTimeout(animate,20)
  

     
  }
  // methods:{
  //   func(id)
  //   {
  //       var c = document.getElementById('canvas'+id);
  //       var ctx = c.getContext('2d');
  //       switch(id)
  //       {
  //           case 1:
  //               ctx.fillStyle = "#FF0000";
  //               ctx.fillRect(10,10,100,50);
  //           break;
  //           case 2:
  //               ctx.beginPath();
  //               ctx.moveTo(10,10);
  //               ctx.lineTo(100,100);
  //               ctx.stroke();
  //           break;
  //           case 3:
  //               ctx.font="20px Arial";
  //               ctx.strokeText("脚本小子_小贝_HTML5_canvas",20,20);
  //           break;
  //           case 4:
  //               ctx.beginPath();
  //               ctx.arc(95,50,40,0,2*Math.PI);
  //               ctx.stroke();
  //           break;
  //           case 5:
  //               var img=document.getElementById("img");
  //               c.width=img.width;
  //               c.height=img.height;
  //               ctx.drawImage(img,10,10);
  //           break;
  //       }
        
  //   }
  // }
 
}
</script>

