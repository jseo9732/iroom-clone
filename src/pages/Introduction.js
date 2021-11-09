import React from "react";

const onClick = () => {
  console.log("Clicked");
}

export default function Introduction() {
    return ( 
    <div>
    <p>스터디룸 소개</p>
    <p>취업 준비, 강의 등 모임 맞춤형 스터디룸</p>
    <p>1인당 1,000원에 이용 가능, 2인 ~ 15인의 스터디 공간</p>
    <img onClick={onClick} className="room4" alt="room4" src="../components/4인.jpg" />
  </div>
    );
}
