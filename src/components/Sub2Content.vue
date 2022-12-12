<template lang="html">
  <div class="subbox sub2">
    <div class="subvisual">
      <img src="../assets/sub2visual.png" />
    </div>
    <div class="wrap">
      <h3>이용 안내</h3>
      <v-tabs
        fixed-tabs
        background-color="#017eb9"
        color="#fff"
        dark
      >
        <v-tab><h4>이용시간</h4></v-tab>
        <v-tab><h4>회원증 발급</h4></v-tab>
        <v-tab><h4>대출&middot;반납&middot;연장&middot;예약</h4></v-tab>
        <v-tab><h4>이용예절</h4></v-tab>
        <v-tab-item>
          <v-card-text>
            <div class="sub2_1">              
              <dl>
                <dt>
                  <div><img src="../assets/guideTitBg1.gif" /></div>
                  <p>이용대상</p>
                </dt>
                <dd>&middot; 서울도서관은 도서관 자료 열람을 원하는 누구나 이용이 가능합니다.</dd>
                <dd>&middot; 단, 대출/예약/보존서고 이용 등 일부 서비스는 대출증을 발급받은 회원만 이용이 가능합니다.</dd>
                <dt>
                  <div><img src="../assets/guideTitBg1.gif" /></div>
                  <p>이용시간 안내</p>
                </dt>
                <table class="tr4">
                  <tr>
                    <th>자료실</th>
                    <th>화~금요일</th>
                    <th>토~일요일</th>
                    <th>비고</th>
                  </tr>
                  <tr>
                    <td>일반자료실1,2</td>
                    <td rowspan="3">09:00 ~ 21:00</td>
                    <td rowspan="5">09:00 ~ 18:00</td>
                    <td rowspan="5"></td>
                  </tr>
                  <tr><td>디지털자료실</td></tr>
                  <tr><td>장애인자료실</td></tr>
                  <tr>
                    <td>세계자료실</td>
                    <td rowspan="2">09:00 ~ 18:00</td>
                  </tr>
                  <tr><td>세계자료실</td></tr>
                </table>
                <dt>
                  <div><img src="../assets/guideTitBg1.gif" /></div>
                  <p>휴관일 안내</p>
                </dt>
                <dd>&middot; 매주 월요일</dd>
                <dd>&middot; 일요일을 제외한 법정공휴일 및 국가가 정한 임시 휴일</dd>
                <dd>&middot; 기타 관장이 필요하다고 인정하는 날 미리 공지 후 휴관</dd>
                <dt>
                  <div><img src="../assets/guideTitBg1.gif" /></div>
                  <p>12월 휴관일</p>
                </dt>
                <dd>&middot; 5일 월요일</dd>
                <dd>&middot; 12일 월요일</dd>
                <dd>&middot; 19일 월요일</dd>
                <dd>&middot; 25일 성탄절</dd>
                <dd>&middot; 26일 월요일</dd>
              </dl>
            </div>
          </v-card-text>
        </v-tab-item>
        <v-tab-item>
          <v-card-text>
            <div class="sub2_2">              
              <dl>
                <dt>
                  <div><img src="../assets/guideTitBg1.gif" /></div>
                  <p>회원증 발급 유형</p>
                </dt>
                <dd>&middot; 방문 발급</dd>
                <dd class="ddleft"> - 발급방법 : 서울도서관 홈페이지 회원 가입 후 구비서류 지참하여 도서관 2층(디지털 자료실) 방문</dd>
                <dd class="ddleft"> - 이용가능 서비스 : 실물카드 및 모바일 회원증 발급되어 모든 서비스 이용 가능</dd>
                <dd>&middot; 온라인 발급(비대면 자격확인)</dd>
                <dd class="ddleft"> - 발급방법 : 서울도서관 홈페이지 회원 가입 후 비대면 자격확인 절차 진행</dd>
                <dd class="ddleft"> - 이용가능 서비스 : 모바일 회원증만 발급 가능, [서울시민 인증]의 경우 모든 서비스 이용 가능, [서울소재 직장·학교 및 재외동포 인증]은 전자책, 오디오북, 전자잡지 서비스에 국한</dd>
                
                <dt>
                  <div><img src="../assets/guideTitBg1.gif" /></div>
                  <p>모바일 회원증</p>
                </dt>
                <dd>&middot; 방문발급 혹은 온라인 발급을 받은 경우 받는 모바일용 회원증</dd>
                <dd>&middot; 서울도서관 홈페이지·앱 메인화면의 [모바일 회원증] 버튼 클릭 혹은 서울도서관 앱 실행 후 흔들기</dd>
                <dd>&middot; 사용용도 : 모바일 회원증을 통한 실물 도서 대여(비대면 자격확인 중 [서울소재 직장·학교 및 재외동포 인증]을 받은 경우에는 실물도서 대여 불가)</dd>                
                <dd><img src="../assets/sub2_5.gif" /></dd>
              </dl>
            </div>
          </v-card-text>
        </v-tab-item>
        <v-tab-item>
          <v-card-text>
            <div class="sub2_3">              
              <dl>
                <dt>
                  <div><img src="../assets/guideTitBg1.gif" /></div>
                  <p>도서 대출</p>
                </dt>
                <dd>&middot; 대출자격 : 서울도서관 대출증 발급 회원</dd>
                <dd class="ddleft"> - 자료대출은 본인만 할 수 있다. 단, 만14세 미만 회원의 경우 사전에 지정된 보호자(법정대리인)가 대리로 할 수 있다.</dd>
                <dd>&middot; 대출권수 및 기간</dd>
                <table class="tr3">
                  <tr>
                    <th>회원 구분</th>
                    <th>도서<br>(일반자료/세계/장애인자료)</th>
                    <th>비도서<br>(영화·애니DVD/오디오북CD)</th>
                  </tr>
                  <tr>
                    <td>일반</td>
                    <td>5권 15일 (대출일 포함)</td>
                    <td rowspan="2">3점 15일 (대출일 포함)</td>
                  </tr>
                  <tr>
                    <td>등록장애인</td>
                    <td>7권 30일 (대출일 포함)</td>
                  </tr>
                </table>

                <dd>&middot; 대출이 불가능한 자료</dd>
                <dd class="ddleft"> - 도서: 서울자료실 소장자료, 세계자료실 대사관 기증자료, 참고도서, 연속간행물, 시청각자료 등</dd>
                <dd class="ddleft"> - 비도서: 다큐나 통계 등 보전가치가 높은 자료</dd>


                <dt>
                  <div><img src="../assets/guideTitBg1.gif" /></div>
                  <p>도서 반납</p>
                </dt>
                <dd>&middot; 반납 장소</dd>
                <dd class="ddleft"> - 도서 : 자료실 대출반납 데스크(일반열람실 1,2, 세계자료실), 무인반납기</dd>
                <dd class="ddleft"> - 비도서(DVD등 영상자료) : 디지털자료실로 반납</dd>
                <dd>&middot; 무인반납기 운영</dd>
                <dd class="ddleft"> - 설치 위치 : 서울도서관 후문 옆</dd>
                <dd class="ddleft"> - 운영 시간 : 24시간</dd>
                <dd class="ddleft"> - 주의사항 : 무인반납기는 부록을 대출하지 않은 도서만 반납가능합니다.(DVD와 부록이 있는 도서는 해당 자료실 데스크에 반납 가능)</dd>
                
                
                <dt>
                  <div><img src="../assets/guideTitBg1.gif" /></div>
                  <p>대출 연장</p>
                </dt>
                <dd>&middot; 도서 대출 기간은 기본 15일(대출일 포함)이나, 예약이 없는 책은 1회(7일)에 한해 연장 신청이 가능합니다. (비도서는 연장 불가능)</dd>
                <dd>&middot; 반납예정일 7일전부터 연장 신청이 가능하며, 연체도서가 있는 경우 연장이 불가합니다.</dd>
                <dd class="ddleft"> - 홈페이지 로그인 -> 나의공간 -> 대출현황 -> [연장]버튼 클릭</dd>
                
                
                <dt>
                  <div><img src="../assets/guideTitBg1.gif" /></div>
                  <p>도서 예약</p>
                </dt>
                <dd>&middot; 예약 가능권수: 1인당 3권</dd>
                <dd class="ddleft"> ※ 같은 도서가 여러권인 경우 1권당 3명씩(최대 10명) 예약 가능합니다.</dd>
                <dd>&middot; ‘대출중’인 도서를 예약하면, 예약순서에 따라 도서가 반납되는 즉시 개별 통보(SMS) 합니다.</dd>
                <dd>&middot; 예약자가 대출가능 통보를 받은 후 3일 이내에 대출하지 않으면 자동 취소됩니다.</dd>
                <dd class="ddleft"> - 홈페이지 로그인 -> 도서 검색 -> 도서 [상세정보] -> [예약] 버튼 클릭</dd>

              </dl>
            </div>
          </v-card-text>
        </v-tab-item>
        <v-tab-item>
          <v-card-text>
            <div class="sub2_4">
              <img src="../assets/sub2_1.gif"/>
              <img src="../assets/sub2_2.gif"/>
              <img src="../assets/sub2_3.gif"/>
              <img src="../assets/sub2_4.gif"/>
            </div>
          </v-card-text>
        </v-tab-item>
      </v-tabs>
    </div>

  </div>
</template>
<style>

  .sub2 .theme--dark.v-tabs > .v-tabs-bar {margin: 80px 0 40px; width: 90%; position: relative;left: 50%; transform: translateX(-50%);}
  .sub2 .v-tab h4 {font-size: 20px; font-weight:400;}
  .sub2 .wrap {width: 1200px; position: relative;left: 50%; transform: translateX(-50%);}
  
  .sub2 dl dt {margin: 50px 0 30px;}
  .sub2 dl dt div {float: left; width: 18px; height: 18px;}
  .sub2 dl dt div img {width: 100%;}
  .sub2 dl dt p {font-size: 18px; font-weight: 500; height: 18px; line-height: 18px; margin-left: 30px;}
  .sub2 dl dd {margin-left: 30px; font-size: 16px;}
  
  table {width: 90%; font-size: 16px; text-align: center; vertical-align: auto; margin: auto;}
  table tr {}
  table tr th {padding: 30px 5px; width: 25%; border: 1px solid #ccc; background: rgba(1, 126, 185,.2); display: table-cell; vertical-align: middle;}
  table tr td {padding: 30px 5px; width: 25%; border: 1px solid #ccc; display: table-cell; vertical-align: middle;}
  .sub2_2 dd img {position: relative; left: 50%; transform: translateX(-50%); margin: 40px 0 0;}
  .tr3 {margin-top: 20px; margin-bottom: 20px;}
  .ddleft {text-indent: 10px;}
  .sub2_4 img {position: relative; left: 50%; transform: translateX(-50%);}
</style>