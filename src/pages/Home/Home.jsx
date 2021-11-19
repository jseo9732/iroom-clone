/*global kakao*/ 
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"

export default function Home() {
  const [isHomeContntsScrolled, setIsHomeContntsScrolled] = useState(false);
  // HomeContnts의 top 값
  const homeContnts = document.getElementsByClassName('HomeContnts');
  const [homeContntsFromTop, setHomeContntsFromTop] = useState(0);

  const showHomeContnts = () => {
    if (homeContntsFromTop <= 71) {
      setIsHomeContntsScrolled(true);
    }
  }

  const [isContactScrolled, setIsContactScrolled] = useState(false);
  // HomeContnts의 top 값
  const contactInfo = document.getElementsByClassName('ContactInfo');
  const [contactInfoFromTop, setcontactInfoFromTop] = useState(1000);

  const showContact = () => {
    if (contactInfoFromTop <= 700) {
      setIsContactScrolled(true);
    }
  }

  const listener = () => {
    if(homeContnts[0] && contactInfo[0]) {
      setHomeContntsFromTop(homeContnts[0].getBoundingClientRect().top);
      setcontactInfoFromTop(contactInfo[0].getBoundingClientRect().top);
    }
  };

  useEffect(() => {
    const container = document.getElementById('map');
    const mapOption  = {
      center: new kakao.maps.LatLng(37.546461322039434, 127.07344888121038),
      level: 3
    };
    const  map = new kakao.maps.Map(container, mapOption );
    const markerPosition  = new kakao.maps.LatLng(37.546461322039434, 127.07344888121038); 
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);

    const iwContent = '<div style="padding:5px;">모임공간 이룸<br>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(37.546461322039434, 127.07344888121038); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    const infowindow = new kakao.maps.InfoWindow({
        position : iwPosition, 
        content : iwContent 
    });
      
    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker); 

    // 지도 이동 막기
    map.setDraggable(false);

    // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
    const mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);   

    window.addEventListener('scroll', listener);
    showHomeContnts(homeContntsFromTop);
    showContact(contactInfoFromTop);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [homeContntsFromTop, contactInfoFromTop]);
  
  return (
    <>
      <div className="HomeContainer">
        <img src="/images/homePic.webp" alt=""/>
        <div className={isHomeContntsScrolled ? 'HomeContnts HomeContntsScrolled' : 'HomeContnts'}>
          <div className="HomeTitle">IROOM STUDY</div>
          <div className="HomeDesc">2인 ~ 15인 무인 스터디룸</div>
          <div className="HomeBtn">
            <Link to="/reservation">예약 하기</Link>
          </div>
        </div>
      </div>
      <div className="ContactContainer">
        <img src="/images/contant_img.jpg" alt=""/>
        <div className="ContactBox">
          <div className={isContactScrolled ? "ContactInfo ContactScrolled" : "ContactInfo"}>
            <div className="ContactTitle">CONTACT US</div>
            <div className="ContactAddress">
              찾아 오는 길:&nbsp;
              <a href="https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B4%91%EC%A7%84%EA%B5%AC%20%ED%99%94%EC%96%91%EB%8F%99%20111-159" target="_blank" rel="noreferrer">서울특별시 광진구 화양동 111-159 2층 모임공간 이룸</a>
            </div>
            <div className="ContactTel">TEL: 02-461-2030</div>
          </div>
          <div id="map" className="KakaoMap"></div> 
        </div>
      </div>
    </>
  );
}
