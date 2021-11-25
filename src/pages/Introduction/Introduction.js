import React from "react";
import "./Introduction.css";
import { Link } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react"
import { dbService } from "../../firebase";

export default function Introduction() {
    const [RoomInfo, setRoomInfos] = useState([""]);
    useEffect(()=>{
     const getRoomInfo = async () => {
        const q = query(collection(dbService, "roomInfo"), where("max", "==", 4));
        const querySnapshot = await getDocs(q);
        let RoomInfo = [];
        querySnapshot.forEach((doc) => {
               RoomInfo.push(doc.data())
        })
            return {
            RoomInfo
        }
      }
        getRoomInfo().then(data => setRoomInfos(data));
    }, [])

    let roomNum = "";

    if(RoomInfo.RoomInfo !== undefined)
        roomNum = RoomInfo.RoomInfo[0].max;

    
    return ( 
    <div className="IntroParents">
    <div className="IntroIntro">
        <div className="IntroContents">
            <span className="IntroTitle">스터디룸 소개</span><br/><br/><br/>    
            <span>취업 준비, 강의 등 모임 맞춤형 스터디룸</span><br/><br/>
            <span>1인당 1,000원에 이용 가능, 4인 ~ 20인의 스터디 공간</span>
        </div>
    </div>

    <div className="IntroImages">

        <div className="room4Box">   
            <div className="overlay">4인 스터디룸</div> 
            <Link to="/intro/roomInfo" className="BtnToRoom" onClick={ () => RoomInfo(4) }>
            <img className="room4" alt="room4" src={require('../Introduction/images/4인.jpg').default}/>
            </Link>     
        </div>
        

        <div className="room6Box">
            <div className="overlay">6인 스터디룸</div>
            <Link to="/intro/roomInfo" className="BtnToRoom" onClick={ () => RoomInfo(6)}>
            <img className="room6" alt="room6" src={require('../Introduction/images/6인.png').default} />
            </Link>
        </div>
   

        <div className="room10Box">
            <div className="overlay">10인 스터디룸</div>
            <Link to="/intro/roomInfo" className="BtnToRoom" onClick={ () => RoomInfo(10)}>
            <img className="room10" alt="room10" src={require('../Introduction/images/10인.jpg').default} />
            </Link>
        </div>

         <div className="room20Box">
            <div className="overlay">20인 스터디룸</div>
            <Link to="/intro/roomInfo" className="BtnToRoom" onClick={ () => RoomInfo(20)}>
            <img className="room20" alt="room20" src={require('../Introduction/images/20인.webp').default} /> 
            </Link> 
        </div>
    </div>
    </div>
    
     );
}
