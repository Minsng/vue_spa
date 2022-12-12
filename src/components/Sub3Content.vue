<template lang="html">
  <div class="subbox sub3">
    <div class="subvisual">
      <img src="../assets/sub3visual.png" />
    </div>
    <div class="wrap">
      <h3>도서 정보</h3>
      <p>새로 들어온 도서를 검색해보세요</p>
      
      <div class="sub3search">
        <label for="title">도서명 </label>
        <input id="title" type="text" v-model="value" />
        <button @click="search()"><img src="../assets/search.png"/></button>
      </div>

      <div v-show="message" class="searchresult"><span>{{msgtext}}</span></div>
      
      <div class="books">
        <span>최근 업데이트 : 20221202</span>
        <dl v-for="(x,index) in library" :key="index">         
          <dt><span>{{index+1}}</span>{{x.title }}</dt>
          <dd>
            <span>{{ '저자 : ' + x.author}}</span>
            <!-- <span>{{' 소장처 : ' + x.loca}}</span> -->
            <span>{{ '발행처 : ' + x.publisher}}</span>
            <span>{{' 등록일 : ' + x.indt }}</span>
            <span>{{' 유형 : ' + x.type}}</span>
            <span>{{' 발행년도 : ' + x.publisher_year}}</span>
          </dd>          
        </dl>
      </div>

      <!-- "DESCRIPTION" : {"AUTHOR":"저자","LOCA":"소장처","PUBLISHER":"발행처","INDT":"등록일","PUBLISHER_YEAR":"발행년도","TYPE":"자료유형","TITLE":"서명"} -->
    </div>
  </div>
</template>
<style>  
  .subbox {
    padding-top: 91px;
  }
  .subvisual {position: relative; left: 50%; transform: translateX(-960px);}
  .subbox .wrap {margin: 100px 0;}
  .subbox .wrap h3 {text-align: center; font-size: 38px;}

  .sub3 p {text-align: center; font-size: 20px; margin: 40px 0;}
  .sub3search {font-size: 18px; text-align: right;}
  .sub3search label {width: 50px ;height: 30px; font-size: 20px; line-height: 20px; padding: 10px; vertical-align: middle;}
  .sub3search input {background: #f8f8f8; width: 300px; height: 30px; font-size: 20px; padding: 10px;}
  .sub3search button {background: #f8f8f8; width: 50px; height: 50px; font-size: 20px; padding: 10px;}
  .sub3search button:hover {background: #ccc;}
  .searchresult span {font-size: 18px;}

  .books {margin: 30px 0 60px;}
  .books>span {display: block; margin-bottom: 10px;}
  .sub3 dl {
    border-top: 1px solid #ccc;
    padding: 10px 0;
    position: relative;
  }
  .sub3 dl dt {font-size: 22px; font-weight: 500; padding: 20px 100px;}
  .sub3 dl dt span {position: absolute; left: 10px; top: 50px; font-size: 30px; color: #017eb9; opacity: .7;}
  .sub3 dl dd {color: #aaa; font-size: 18px; padding: 0 80px 20px;}
  .sub3 dl dd span {margin: 0 20px;}

</style>

<script>
import jdata from './library.json';

export default {
  data(){
    return{
      message:false,
      msgtext:'검색 데이터가 없습니다',
      value: '',
      library : jdata
    }
  },
  methods:{
    search: function(){
      let text = this.value;
      if(text){
        this.library = jdata.filter(function(element){
          return element.title.includes(text);  //조건에 참이면 객체를 배열로 리턴
        });
        
        if(this.library.length==0){
            this.message=true;
            this.msgtext='검색 데이터가 없습니다';
            
        }else{
            this.message=true;
            this.msgtext= this.library.length + ' 개가 검색되었습니다';
            
        }
      }else{
        alert('검색어를 입력해주세요!');
      } 
    }
  }
  
}
</script>
