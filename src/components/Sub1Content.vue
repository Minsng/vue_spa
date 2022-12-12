<template lang="html">
  <div class="subbox sub1">
    <div class="subvisual">
      <img src="../assets/sub1visual.png" />
    </div>
    <div class="wrap">
      <h3>도서관 소개</h3>
      <ul>
        <li class="sub1title">
          <div><img src="../assets/guideTitBg1.gif" /></div>
          <p>상징문자</p>
        </li>
        <li>
          <p>
            상징문자는 휘장과 함께 서울도서관의 이미지를 전달하는 중요한 기본요소로 휘장이 주는 이미지와 조화될 수 있도록 디자인 되었으며
            각각의 글자꼴의 비례를 조정한 것이므로 글자의 꼴, 굵기, 비례 등을 임의로 변경하여서는 안된다.
            상징문자는 서울도서관의 이미지를 형성하는데 중요한 기본 요소임을 인식하여 본 디자인가이드에 예시된 항목별 규정에 따라 정확하게 사용되도록 철저한 관리를 해야 한다.
          </p>
        </li>
        <li class="sub1img">
          <div><img src="../assets/logotype.jpg" /></div>
        </li>
      </ul>
      <ul class="both">
        <li class="sub1title">
          <div><img src="../assets/guideTitBg1.gif" /></div>
          <p>대표상징</p>
          <div><img src="../assets/signature.jpg" /></div>
          
        </li>
        <li class="sub1title">
          <div><img src="../assets/guideTitBg1.gif" /></div>
          <p>상징표</p>
          <div><img src="../assets/emblem.jpg" /></div>
        </li>
      </ul>
      <ul>
        <li class="sub1title">
          <div><img src="../assets/guideTitBg1.gif" /></div>
          <p>비전</p>
          <div><img src="../assets/cali_title.gif" /></div>
        </li>
        <li class="sub1title">
          <div><img src="../assets/guideTitBg1.gif" /></div>
          <p>조직도</p>
          <div><img src="../assets/organization.gif" /></div>
        </li>
      </ul>
      
      



    </div>
  </div>
</template>
<style>  
  .sub1 .wrap {width: 1200px; position: relative;left: 50%; transform: translateX(-50%);}
  .sub1 h3 {margin: 80px 0;}
  .sub1 ul li {margin: 60px 0;}
  .sub1 ul li.sub1title > div:first-of-type {float: left; width: 18px; height: 18px;}
  .sub1 ul li.sub1title > div img {width: 100%;}
  .sub1 ul li.sub1title p {font-size: 18px; font-weight: 500; height: 18px; line-height: 18px; margin-left: 30px;}
  
  .sub1 ul li p {margin-left: 30px;}

  .sub1 ul.both {display: flex; flex-direction: row; gap: 30px; margin: 60px 0;}
</style>