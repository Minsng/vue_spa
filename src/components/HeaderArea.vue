<template>
  <header>
      <router-link to="/"><h1>서울도서관 로고</h1></router-link>
      <ul>
        <li><router-link to="/sub1">도서관 소내</router-link></li>
        <li><router-link to="/sub2">이용 안내</router-link></li>
        <li><router-link to="/sub3">도서 정보</router-link></li>
      </ul>
  </header>
</template>
<style>
  header {
    width: 100%; height: 55px; padding: 20px 30px; position: fixed; z-index: 40; background: #fff;
  }   
  header h1 {
    background: url(../assets/vue.gif); width: 211px; height: 55px;
    text-indent: -9999px; float: left; margin-left: 100px;
  }
  header ul {overflow: hidden; margin-left: 1300px;}
  header ul li {float: left; margin-left: 30px; font-size: 20px; font-weight: 700; line-height: 55px; height: 55px;}
</style>