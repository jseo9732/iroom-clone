import React from "react";
import "./roomInfo.css";
import { dbService } from "../../firebase";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { collection, query, where, getDocs } from "firebase/firestore";

export default function RoomInfo4() {

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

    let roomName4 ="";
    let roomInfo1_4 ="";
    let roomInfo2_4 ="";
    let roomInfo3_4 ="";

    if(RoomInfo.RoomInfo !== undefined)
        {
            roomName4 = RoomInfo.RoomInfo[0].roomName;
            roomInfo1_4 = RoomInfo.RoomInfo[0].roomInfo1;
            roomInfo2_4 = RoomInfo.RoomInfo[0].roomInfo2;
            roomInfo3_4 = RoomInfo.RoomInfo[0].roomInfo3;
        } 

    return(
        <div className="bgContainer">
            <img className="bgImage" src={require('../Introduction/images/1.jpg').default} alt=""/>
        <div className="container">
            <div className="infoBox">
                <h1>{roomName4}</h1><br/>
                <h2>{roomInfo1_4}</h2><br/><br/><br/>
                <div>1️⃣ &nbsp;{roomInfo2_4}</div><br/><br/><br/>
                <div>2️⃣ &nbsp;{roomInfo3_4}</div><br/>
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
                <span>Up to 4 Number of People</span>
                <span>Free WIFI</span>
            </div>

            <div className="btnToIntro">
            <Link to="/intro">Go Back</Link>
            </div>
        </div>
        </div>
    );
    }
    
