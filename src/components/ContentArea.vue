<template>
  <div id="app">
    <MainVisual />
    <div class="wrap">
      <article>
        <h2 class="hidden">본문콘텐츠영역</h2>
        <section class="section1">
          <h3>도서관 소개</h3>
          <div class="intro1">
            <p><span>서울의 대표도서관 서울도서관</span>에 오신 것을 환영합니다.</p>
            <p>서울도서관은 2012년 개관하여 “내 삶을 바꾸는 지식문화도시, 서울”을 구현하기 위하여 서울시민이 언제, 어디서나 편리하게 이용할 수 있는 도서관 서비스를 제공 받을 수 있도록 서울시 도서관 정책을 개발하고 있습니다. 또한 이를 기반으로 서울시에 소재하고 있는 천여 개 도서관과 함께 정보제공, 독서진흥, 평생학습 및 문화 활동 증진을 위한 다양한 서비스를 제공하고 있습니다.</p>
            <ul>
              <li><router-link to="/sub1"><img src="../assets/index1.jpg" alt="소개이미지"></router-link></li>
              <li><router-link to="/sub1"><img src="../assets/index2.jpg" alt="소개이미지"></router-link></li>
              <li><router-link to="/sub1"><img src="../assets/index3.jpg" alt="소개이미지"></router-link></li>
            </ul>
          </div>
          <div class="intro2">
            <div>
              <p><span>앞으로 서울도서관은 서울시 도서관이 디지털 대전환 시대</span>에 통합적 모바일·웹 서비스 강화로 서울시민의 정보 접근권을 확대하고, 서울시민의 꿈과 희망을 실현하기 위한 다양한 경험과 교류가 가능한 개방적이고 안전한 공간으로 자리매김할 뿐 아니라 사회·기술환경의 급격한 변화에 대응할 수 있는 생애주기별 맞춤서비스를 강화할 수 있도록 지원하여 서울시민 여러분의 삶의 질 향상에 기여하도록 최선의 노력을 다하겠습니다.</p>
              <p>서울도서관은 <span>서울시민 여러분의 성장과 발전을 응원하고 지원</span>하겠습니다. 여러분의 많은 관심과 지원 부탁드립니다.</p>
            </div>
            <div><img src="../assets/introduceBg.gif" alt="소개이미지"></div>
          </div>
        </section>
        <section class="section2">
          <h3>이용안내</h3>
          <ul>
            <li>
              <router-link to="/sub2">
                <img src="../assets/index4.png" alt="">
              </router-link>
            </li>
            <li>
              <dl>
                <dt>
                  <div><img src="../assets/guideTitBg1.gif" /></div>
                  <h4>이용시간</h4>
                </dt>
                <dd>&middot; 서울도서관은 도서관 자료 열람을 원하는 누구나 이용이 가능합니다.</dd>
                <dd>&middot; 단, 대출/예약/보존서고 이용 등 일부 서비스는 대출증을 발급받은 회원만 이용이 가능합니다.</dd>
                <dt>
                  <div><img src="../assets/guideTitBg1.gif" /></div>
                  <h4>휴관일 안내</h4>
                </dt>
                <dd>&middot; 매주 월요일</dd>
                <dd>&middot; 일요일을 제외한 법정공휴일 및 국가가 정한 임시 휴일</dd>
                <dd>&middot; 기타 관장이 필요하다고 인정하는 날 미리 공지 후 휴관</dd>
                <dt>
                  <div><img src="../assets/guideTitBg1.gif" /></div>
                  <h4>12월 휴관일</h4>
                </dt>
                <dd>&middot; 5일 월요일</dd>
                <dd>&middot; 12일 월요일</dd>
                <dd>&middot; 19일 월요일</dd>
                <dd>&middot; 25일 성탄절</dd>
                <dd>&middot; 26일 월요일</dd>
              </dl>
              <div class="link"><router-link to="/sub2"><h4>더 알아보기</h4></router-link></div>
            </li>
          </ul>
        </section>
        <section class="section3">
          <img src="../assets/bookinfo.png" alt="도서정보">
          <div>
            <h3>도서 정보</h3>
            <p>서울도서관에 새로 들어온 도서정보를 알려드립니다.</p>
            <div class="link"><router-link to="/sub3"><h4>더 알아보기</h4></router-link></div>
          </div>
        </section>
      </article>
    </div>
  </div>
</template>
<style>
.wrap {width: 1400px; transform: translateX(-700px); position: relative; left: 50%;}
section {margin: 120px 0 0;}
section h3 {text-align: center; font-size: 38px;}
.section1 span {color: #017eb9; font-size: 1.2em;}
.section1 p {margin: 60px 0; text-align: center; line-height: 1.5em;}
.section1 .intro1 p:nth-of-type(1){font-size: 22px;}
.section1 ul {
  margin: 60px 0;
  display: flex;
  flex-direction: row;
  gap: 30px;
  }
.section1 ul li {overflow: hidden;}
.section1 ul li img {width: 100%; transition: all .5s;;}
.section1 ul li img:hover {transform: scale(1.2);}
.section1 .intro2 {display: flex; flex-direction: row;}

.section2 > ul {
  display:flex;
  flex-direction: row;
  margin: 60px 0 0;
  }
.section2 ul li {overflow: hidden;}
.section2 ul li img {transition: all .5s; transform: scale(1.2);}
.section2 ul li img:hover {transform: scale(1);}
.section2 ul li dl {padding: 40px 30px;}
.section2 ul li dl dt {margin: 50px 0 10px;}
.section2 ul li dl dt div {float: left; width: 20px; height: 20px;}
.section2 ul li dl dt div img {width: 100%;}
.section2 ul li dl dt h4 {font-size: 20px; height: 20px; line-height: 20px; padding-left: 30px;}
.section2 ul li dl dd {margin: 10px 0 0 10px;}
.link {
  position: relative; left: 50%; transform: translateX(-60px);
  display: block; text-align: center; width: 120px; height: 40px;
  background: #017eb9; line-height: 40px;
  border: solid 1px #017eb9; box-sizing: border-box; border-radius: 15px;
  transition: all .5s;
}
.link a {color: #fff;}
.link a h4 {font-weight: 500;}
.link:hover {background: #fff;}
.link:hover a {color: #017eb9;}


.section3 {position: relative;}
.section3 img {transform: translateX(-240px);}
.section3 > img {position: relative;}
.section3 > div {
  position: absolute; left: 0; top: 0;
  padding: 80px 0 0 200px;
  }
.section3 > div h3 {margin: 10px 0 20px;}
.section3 > div p {margin: 40px 0; font-size: 20px;}
.section3 > div .link {}

</style>
<script src="https://kit.fontawesome.com/d488d1cfdc.js" crossorigin="anonymous"></script>
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
