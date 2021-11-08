import "./reservation.css";

export default function Reservation() {
  return (
    <section className="reservation">
      <img
        className="reservationBackgroundImg"
        src="https://static.wixstatic.com/media/1e3643_0643d259faaa4532a6868cae979ac775~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_980,h_817,al_c,q_85,usm_0.66_1.00_0.01/1e3643_0643d259faaa4532a6868cae979ac775~mv2_d_5184_3456_s_4_2.webp"
        alt=""
      />
      <div className="reserveInfoWrapper">
        <div className="reserveInfo">
          <h2>Iroom study</h2>
          <div className="reserveDesc">
            <div className="reserveDescTop">
              <p>강의를 위한 모니터, 복사기 등 사무 용품 보유</p>
              <p>각 방마다 무료 와이파이 제공 및 화이트보드 제공</p>
              <p>15인실 대형 TV 보유</p>
            </div>
            <div className="reserveDescCenter">
              <p>스터디룸 이룸은 인원이 아닌 공간과 시간에 따라 </p>
              <p>
                요금을 책정하여{" "}
                <span style={{ fontWeight: "bold", color: "#8B0000" }}>
                  1인당 1,000원의 저렴한 가격
                </span>
                으로
              </p>
              <p>이용할 수 있으며 무인 시스템으로 쉽게 이용할 수 있습니다.</p>
            </div>
            <div className="reserveDescBottom">
              <p>* 별도의 음료 주문 필요 없습니다</p>
              <p>* 주차공간이 없어 스터디룸 근처의 공용 주차장 이용</p>
            </div>
          </div>
          <div className="reserveBtnWrapper">
            <div className="reserveBtn" onClick={null}>
              예약 하기
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
