import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./reservation.css";
import { doc, setDoc } from "firebase/firestore";
import { dbService } from "../../firebase"

function ReserveModal({uid, username, toggleReserveModal}) {
  const [phoneNum, setPhoneNum] = useState("")
  const [room, setRoom] = useState("")
  const [reserveDate, setReserveDate] = useState("")
  const [reserveTime, setReserveTime] = useState("")
  const [reserveRemainTime, setReserveRemainTime] = useState("")

  const onReserveSubmit = async (e) => {
    e.preventDefault();
    const reserveObj = {
      createdAt: Date.now(),
      userId: uid,
      phoneNum,
      room,
      reserveDate,
      reserveTime,
      reserveRemainTime,
    }
    if (phoneNum && room && reserveDate && reserveTime && reserveRemainTime) {
      const ok = window.confirm("위의 정보로 예약하시겠습니까?")
      if(ok) {
        try {
          await setDoc(doc(dbService, "reservations", `${reserveObj.createdAt}`), reserveObj);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        setPhoneNum("");
        setRoom("");
        setReserveDate("");
        setReserveTime("");
        setReserveRemainTime("");
        toggleReserveModal();
        window.alert("예약되었습니다")
      }
    } else {
      window.alert("정보를 전부 입력해주세요")
    }
  }
  const onPhoneNumChange = (e) => {
    const { target : { value } } = e
    setPhoneNum(value);
  }
  const onRoomChange = (e) => {
    const { target : { value } } = e
    setRoom(value);
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
    setReserveRemainTime(value);
  }
  return (
    <div className="reserveModalWrapper">
      <div className="reserveModalInner">
        <form onSubmit={ onReserveSubmit }>
          <div 
            className="reserveCloseBtn"
            onClick={ toggleReserveModal }
          > X </div>
          <h2>스터디룸 예약</h2>
          <ul>
            <li>
              <p>예약자</p>
              <p>{username}</p> {/* 유저아이디 불러오기 */}
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
                <option value="4인실">4인실</option>
                <option value="6인실">6인실</option>
                <option value="10인실">10인실</option>
                <option value="20인실">20인실</option>
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
        </form>
      </div>
    </div>
  )
}

export default function Reservation({userObj, isLoggedIn}) {
  const [openReserveModal, setOpenReserveModal] = useState(false);
  const toggleReserveModal = () => {
    setOpenReserveModal((prev) => !prev)
  }

  //redirect to login page
  const navigate = useNavigate();
  const redirectLogin = () => {
    window.alert("로그인 후 이용해주세요");
    navigate('/login');
  }
  return (
    <section className="reservation">
      <img
        className="reservationBackgroundImg"
        src="https://static.wixstatic.com/media/1e3643_0643d259faaa4532a6868cae979ac775~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_980,h_817,al_c,q_85,usm_0.66_1.00_0.01/1e3643_0643d259faaa4532a6868cae979ac775~mv2_d_5184_3456_s_4_2.webp"
        alt=""
      />
      { openReserveModal &&
        ( isLoggedIn ? 
            <ReserveModal 
            uid={userObj.uid} 
            username={userObj.displayName}
            isLoggedIn={isLoggedIn}
            toggleReserveModal={toggleReserveModal} 
            />
          : redirectLogin())
      }
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
