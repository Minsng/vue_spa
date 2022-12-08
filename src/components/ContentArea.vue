<template>
  <div id="app">
    <MainVisual />
    <div class="wrap">
      <article>
        <h2 class="hidden">본문콘텐츠영역</h2>
        <section class="도서관 소개">
          <h3>도서관 소개</h3>
          
        </section>
        <section class="section2">
          <h3>이용안내</h3>
          
        </section>
        <section class="section3">
          <h3>도서 정보</h3>
      
        </section>
      </article>
    </div>
  </div>
</template>
<style>
  .wrap {
    width: 1400px; transform: translateX(-700px); position: relative; left: 50%;
  }
</style>
<script>
import MainVisual from './MainVisual'
export default {
  name: 'app',
  components: {
    MainVisual,
  },
  data() {

    return {

    }
  }
}
</script>
