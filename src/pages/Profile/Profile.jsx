import { useState, useEffect } from "react"
import { collection, query, where, getDocs, doc, deleteDoc } from "firebase/firestore";
import { dbService } from "../../firebase"
import "./profile.css";

// function ChangeProfile({currentEmail}) {
//   const [email, setEmail] = useState("")
//   const onSubmitChangedEmail = (e) => {
//     e.preventDefault();
//     console.log('d')
//     updateEmail(authService.currentUser, email).then(() => {
//       window.alert("업데이트 되었습니다")
//       setEmail("")
//     }).catch((error) => {
//       console.log(error)
//     });
//   }
//   const onEmailChange = (e) => {
//     const { target : { value } } = e
//     setEmail(value)
//     console.log(email)
//   }
//   return (
//     <form onSubmit={onSubmitChangedEmail}>
//       <input
//         type="text"
//         placeholder={currentEmail}
//         onChange={onEmailChange}
//       />
//     </form>
//   )
// }

function UserReserveList({ reserveObj }) {
  const onCancelClick = async () => {
    const ok = window.confirm("해당 예약을 취소하시겠습니까?")
    if(ok) {
      await deleteDoc(doc(dbService, "reservations", `${reserveObj.createdAt}`));
      window.alert("예약 취소되었습니다")
    }
  }
  return (
    <li>
      <div className="userReserveTop">
        <span className="userReserveIcon">
          <svg>
            <path d="M23.126 6.55c.1 0 .183.066.213.157l.011.073v17.122c0 .192-.2.299-.35.216l-.06-.047-.876-.935c-.075-.08-.19-.096-.28-.048l-.063.048-1.113 1.189c-.075.08-.19.096-.281.048l-.063-.048-1.13-1.21c-.075-.08-.19-.096-.28-.048l-.063.048-1.13 1.21c-.075.08-.19.096-.28.048l-.064-.048-1.13-1.21c-.074-.08-.19-.096-.28-.048l-.063.048-1.13 1.21c-.074.08-.19.096-.28.048l-.063-.048-1.13-1.21c-.074-.08-.19-.096-.28-.048l-.063.048-1.13 1.21c-.075.08-.19.096-.28.048l-.064-.048-1.129-1.21c-.075-.08-.19-.096-.28-.048l-.064.048-.891.954c-.13.14-.346.075-.398-.091L8.65 23.9V6.78c0-.102.064-.188.153-.218l.07-.012h14.253zM14.95 16H11.8v1.05h3.15V16zm5.25-3.15h-8.4v1.05h8.4v-1.05zM17.05 9.7H11.8v1.05h5.25V9.7z"></path>
          </svg>
        </span>
        <div>
          <p>스터디룸 ({reserveObj.room})</p>
          <p>
            <span>{reserveObj.reserveDate}</span>
            <span>{reserveObj.reserveTime}</span>
          </p>
        </div>
      </div>
      <div className="userReserveBottom">
        <p>
          <span>휴대폰 번호</span>
          <span>{reserveObj.phoneNum}</span>
        </p>
        <div className="userReserveBtnGroup">
          <div className="userReserveBtn" onClick={onCancelClick}>예약 취소</div>
        </div>
      </div>
    </li>
  )
}


export default function Profile({ userObj, isLoggedIn }) {
  // //change profile email
  // const [isClickedChangeBtn, setIsClickedChangeBtn] = useState(false)
  // const onChangedClick = () => {
  //   setIsClickedChangeBtn(prev => !prev)
  // }

  //get reservation data
  const [reserveDataArray, setReserveDataArray] = useState([]);
  useEffect(()=>{
    if (isLoggedIn) {const getReserveData = async () => {
      const q = query(collection(dbService, "reservations"), where("userId", "==", userObj.uid));
      const querySnapshot = await getDocs(q);
      let reserveDataArray = []
      querySnapshot.forEach((doc) => {
        reserveDataArray.push(doc.data())
      })
      return {
        isReserveData: !querySnapshot.empty,
        reserveCount: querySnapshot.size,
        reserveDataArray
      }
    }
    getReserveData().then(data => setReserveDataArray(data));}
  })
  //예약 수정, 취소, 프로필 정보 변경구현 남음
  return (
    <div className="profile">
    {isLoggedIn ? (
      <div>
        <section className="userInfoWrapper">
          <div className="userInfo">
            <div className="userInfoTop">
              <div className="userIcon">
                <svg viewBox="0 0 55 55" role="img">
                  <path d="M48.2,55l0.1-2.3c-0.2-1.4-1.2-3.3-2.5-4c0,0-10.9-6.6-11.5-7c-1.1-0.7-1.6-2.5-1.6-4.1v-0.1 c0-0.8,0.2-1.3,0.5-2.1c0.4-0.9,1.2-2,1.7-2.8c0.4-0.7,0.9-1.9,1.2-3.1c1-0.2,1.6-1.5,1.9-2.8c0.2-1,0.1-2.5-0.9-3v-3.8 c0-1.5-0.4-3-1.2-4.3c-0.5-0.9-1.3-1.7-2.2-2.4l0,0l0.2-1.2c0.1-0.4-0.2-0.7-0.5-0.7h-5.8c-2.6,0-4.7,0.7-6.2,1.8 c-0.9,0.7-1.6,1.5-2.2,2.4c-0.8,1.3-1.2,2.8-1.2,4.3v3.8c-1.1,0.5-1.1,2-0.9,3c0.3,1.3,0.9,2.7,1.9,2.8c0.4,1.3,0.8,2.5,1.2,3.1 c0.5,0.8,1.3,2,1.7,2.8c0.4,0.7,0.5,1.3,0.5,2.1c0,1.7-0.5,3.5-1.6,4.2c-0.5,0.3-11.5,7-11.5,7C8,49.4,7,51.2,7,52.7L7.1,55 L48.2,55z"></path>
                </svg>
              </div>
              <div className="userDesc">
                <p>{userObj.displayName}</p>
                <div className="userDescList">
                  <p>
                    <span>이메일</span>
                    <em>{userObj.email}</em>
                  </p>
                  <p>
                    <span>예약</span>
                    <em>{reserveDataArray.reserveCount}</em>
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="userInfoBottom">
              <div className="profileChangeBtn">정보 수정하기</div>
            </div> */}
          </div>
        </section>
          <section className="userReserveWrapper">
          <div className="userReserveInfo">
            <span>예약정보</span>
          </div>
          <ul className="userReserve">
            { reserveDataArray.isReserveData ?
            reserveDataArray.reserveDataArray.map(r =>
              <UserReserveList key={r.createdAt} reserveObj={r}/>)
              : "예약 내역이 없습니다"}
          </ul>
        </section>
      </div>) : null}
    </div>
  );
}
