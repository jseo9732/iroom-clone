import { useState } from "react"
import "./reservation.css";

function ReserveModal({toggleReserveModal}) {
  const isLoginedTest = true
  const [phoneNum, setPhoneNum] = useState("")
  const [room, setRoom] = useState("")
  const [reserveDate, setReserveDate] = useState("")
  const [reserveTime, setReserveTime] = useState("")
  const [reserveRemainTime, setReserveRemainTime] = useState("")

  const onReserveSubmit = async (e) => {
    e.preventDefault();
    const reserveObj = {
      phoneNum,
      createdAt: Date.now(),
      // creatorId: userObj.uid,
      room,
      reserveDate,
      reserveTime,
      reserveRemainTime,
    }
    console.log(reserveObj);
    const ok = window.confirm("위의 정보로 예약하시겠습니까?")
    if(ok) {
      //send db
      // try {
      //   await addDoc(collection(db, "reservation"), reserveObj);
      // } catch (e) {
      //   console.error("Error adding document: ", e);
      // }
    }
    setPhoneNum("");
    setRoom("");
    setReserveDate("");
    setReserveTime("");
    setReserveRemainTime("");
  }
  const onPhoneNumChange = (e) => {
    const { target : { value } } = e
    setPhoneNum(value);
  }
  const onRoomChange = (e) => {
    const { target : { value } } = e
    setRoom(value);
    console.log(value)
  }
  const onReserveDateChange = (e) => {
    const { target : { value } } = e
    setReserveDate(value);
  }
  const onReserveTimeChange = (e) => {
    const { target : { value } } = e
    setReserveTime(value);
  }
  const onReserveRemainTimeChange = (e) => {
    const { target : { value } } = e
    console.log(value)
    setReserveRemainTime(value);
  }
  return (
    <div className="reserveModalWrapper">
      <div className="reserveModalInner">
        { isLoginedTest ? (
          <form onSubmit={ onReserveSubmit }>
            <div 
              className="reserveCloseBtn"
              onClick={ toggleReserveModal }
            > X </div>
            <h2>스터디룸 예약</h2>
            <ul>
              <li>
                <p>예약자</p>
                <p>홍길동</p> {/* 유저아이디 불러오기 */}
              </li>
              <li>
                <p>휴대폰</p>
                <input
                  type="text"
                  placeholder="010-1234-5678" 
                  onChange={ onPhoneNumChange }
                  value={ phoneNum }
                />
              </li>
              <li>
                <p>예약공간</p>
                <select onChange={onRoomChange}>
                  <option value="">--방을 선택하세요--</option>
                  <option value="twoRoom">2인실</option>
                  <option value="fourRoom">4인실</option>
                  <option value="sixRoom">6인실</option>
                  <option value="fiftRoom">15인실</option>
                </select>
              </li>
              <li>
                <p>예약일</p>
                <input
                  type="date"
                  onChange={ onReserveDateChange }
                />
              </li>
              <li>
                <p>예약시간</p>
                <input
                  type="time"
                  onChange={ onReserveTimeChange }
                />
                <select onChange={ onReserveRemainTimeChange }>
                  <option value="">--시간을 선택하세요--</option>
                  <option value="1">1시간</option>
                  <option value="2">2시간</option>
                  <option value="3">3시간</option>
                  <option value="4">4시간</option>
                </select>
              </li>
            </ul>
            <input type="submit" value="예약신청" />
          </form>) : (
          <div>로그인 후 이용하세요</div>)
        }
      </div>
    </div>
  )
}

export default function Reservation() {
  const [openReserveModal, setOpenReserveModal] = useState(false);
  const toggleReserveModal = () => {
    setOpenReserveModal((prev) => !prev)
  }
  return (
    <section className="reservation">
      <img
        className="reservationBackgroundImg"
        src="https://static.wixstatic.com/media/1e3643_0643d259faaa4532a6868cae979ac775~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_980,h_817,al_c,q_85,usm_0.66_1.00_0.01/1e3643_0643d259faaa4532a6868cae979ac775~mv2_d_5184_3456_s_4_2.webp"
        alt=""
      />
      {openReserveModal && <ReserveModal toggleReserveModal={toggleReserveModal} />}
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
            <div className="reserveBtn" onClick={toggleReserveModal}>
              예약 하기
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
