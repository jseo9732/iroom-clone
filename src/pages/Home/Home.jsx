import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

export default function Home() {
  return (
      <div className="HomeContainer">
        <img src="/images/homePic.webp" alt=""/>
        <div className="HomeContnts">
          <div className="HomeTitle">IROOM STUDY</div>
          <div className="HomeDesc">2인 ~ 15인 무인 스터디룸</div>
          <div className="HomeBtn">
            <Link to="/reservation">예약 하기</Link>
          </div>
        </div>
      </div>
    );
}
