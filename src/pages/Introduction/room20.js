import React from "react";
import "./roomInfo.css";
import { dbService, storageService } from "../../firebase";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { collection, query, where, getDocs } from "firebase/firestore";


export default function RoomInfo20() {

    const [RoomInfo, setRoomInfos] = useState([]);
    useEffect(()=>{
     const getRoomInfo = async () => {
        const q = query(collection(dbService, "roomInfo"), where("max", "==", 20));
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

    let roomName20 ="";
    let roomInfo1_20 ="";
    let roomInfo2_20 ="";
    let roomInfo3_20 ="";

    if(RoomInfo.RoomInfo !== undefined)
      {
        roomName20 = RoomInfo.RoomInfo[0].roomName;
        roomInfo1_20 = RoomInfo.RoomInfo[0].roomInfo1;
        roomInfo2_20 = RoomInfo.RoomInfo[0].roomInfo2;
        roomInfo3_20 = RoomInfo.RoomInfo[0].roomInfo3;
      }
    
    return(
        <div className="container">
          <div className="infoBox">
            <h1>{roomName20}</h1><br/>
            <h2>{roomInfo1_20}</h2><br/><br/><br/>
            <div>1️⃣ &nbsp;{roomInfo2_20}</div><br/><br/><br/>
            <div>2️⃣ &nbsp;{roomInfo3_20}</div> 
          </div>
          <div className="iconBox1">
                <i class="far fa-clock"></i>
                <i class="fas fa-desktop"></i>
                <i class="fas fa-users"></i>
                <i class="fas fa-wifi"></i>
            </div>
            <div className="iconBox2">
                <span>24 hour access</span>
                <span>Fully Equiped</span>
                <span>Up to 20 Number of People</span>
                <span>Free WIFI</span>
            </div>

            <div className="btnToIntro">
            <Link to="/intro">Go Back</Link>
            </div>
        </div>
    );
}