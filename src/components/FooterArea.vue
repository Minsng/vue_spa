<template>
  <div class="footerArea">
    <p>Copyright &copy; By Minseung Sung Portfolio 2022</p>
    <a href="#top" class="topMove"></a>
  </div>
</template>
<style>
  html {scroll-behavior: smooth;}
    .footerArea {height: 55px; background: #6f6f6f; position: relative;}
    .footerArea p {text-align: center; line-height: 55px; color: #fff; font-weight: 300;}
    .topMove {
      display: block; width: 50px; height: 50px; bottom: 50px; right: 50px; position: fixed;
      text-indent: -9999px; background: rgba(1, 126, 185, .5);    
      z-index: 50; border-radius: 8px; box-shadow: 2px 2px 30px 0 rgb(0 0 0 / 10%);
      transition: all .5s;
      }

    .topMove:hover {
      background: rgba(1, 126, 185, 1);   
    }
    .topMove::before {
      content: '';
      display: block;
      width: 50px;
      height: 50px;
      background: url(../assets/scroll_icon.png) no-repeat;
      background-size: cover;
    }
</style>