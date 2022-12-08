<template>
  <div id="app">    
      <HeaderArea />
      <MainVisual />
      <ContentArea />
      <FooterArea />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Roboto:wght@100;300;400;500;700;900&display=swap');

  /* css reset */
  * { margin:0; padding:0; border:0; outline:0; vertical-align:top;
    -webkit-text-size-adjust:none;  }
    html {font-size: 16px;}
    body {font-family:'noto sans kr', sans-serif; font-size:16px; color:#333;}
    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display:block; }
    ul, ol, dl { list-style:none; }
    img, video {border:0; vertical-align:top; }
    a, a:link {color:#333;text-decoration:none; }
    a:visited { color:#333; }
    a:hover, a:active {color:#333;text-decoration:none; }
    table { border-collapse:collapse; border-spacing:0; }
    input, select { vertical-align:middle; }
    label { cursor:pointer; }
    .blind,legend,hr,caption { display:block; overflow:hidden; position:absolute; top:0; left:-1000em; }
    i,em,address { font-style:normal; font-weight:normal; }
    p,li,dd{ line-height:1.5em}
    .hidden, #skipNav{display: block; position: absolute; left:-1000%; top:0; width: 1px; height: 1px;
      overflow: hidden; color: #fff;}
</style>
<script>
import HeaderArea from './components/HeaderArea'
import MainVisual from './components/MainVisual'
import ContentArea from './components/ContentArea'
import FooterArea from './components/FooterArea'


export default {
  name: 'app',
  components: {
    HeaderArea,
    MainVisual,
    ContentArea,
    FooterArea
  },
  data() {

    return {

    }
  }
}
</script>