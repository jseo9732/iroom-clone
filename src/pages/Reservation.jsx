import React from "react";

export default function Reservation() {
  return (
    <section className="reservationInfo">
      <div>
        <h2>Iroom study</h2>
        <div>
        <p>강의를 위한 모니터, 복사기 등 사무 용품 보유</p>
          <p>각 방마다 무료 와이파이 제공 및 화이트보드 제공</p>
          <p>15인실 대형 TV 보유</p>
          <p>스터디룸 이룸은 인원이 아닌 공간과 시간에 따라 요금을 책정하여 1인 당 1,000원의 저렴한 가격으로 이용할 수 있으며 무인 시스템으로 쉽게 이용할 수 있습니다.</p>
          <p>* 별도의 음료 주문 필요 없습니다</p>
          <p>* 주차공간이 없어 스터디룸 근처의 공용 주차장 이용</p>
        </div>
      </div>
      <div className="reserveBtn" onClick={null}></div>
    </section>
  );
}
