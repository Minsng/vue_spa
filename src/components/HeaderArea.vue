<template>
  <header>
      <router-link to="/"><h1>서울도서관 로고</h1></router-link>
      <nav>
        <ul>
          <h2 class="hidden">네비게이션영역</h2>
          <li><router-link to="/sub1"><h3>도서관 소개</h3></router-link></li>
          <li><router-link to="/sub2"><h3>이용 안내</h3></router-link></li>
          <li><router-link to="/sub3"><h3>도서 정보</h3></router-link></li>
        </ul>
      </nav>
  </header>
</template>
<style>
  header {
    width: 100%; /*height: 55px;*/ padding: 20px 30px; position: fixed; z-index: 40; background: #fff;
    box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
  }   
  .router-link-active {display: block;}
  header h1 {
    background: url(../assets/vue.gif); width: 211px; height: 55px;
    text-indent: -9999px; float: left; margin-left: 10%;
  }
  header nav ul {overflow: hidden; margin-left: 65%;}
  header nav ul li {float: left; margin-left: 55px; font-weight: 700; line-height: 55px; height: 55px;}
  header nav ul li h3 {font-size: 20px; transition: all .3s;}
  header nav ul li:hover h3 {      
      color: #017eb9; font-weight: 700;
    }
  .hidden{
    display: block;
    position: absolute; left: -1000%;
    width: 1px; height: 1px;
    color: #fff;
    overflow: hidden;
}
</style>