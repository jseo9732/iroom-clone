import React from "react";
import "./roomInfo.css";
import { dbService } from "../../firebase";
import { useState, useEffect } from "react"
import { collection, query, where, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom"
import styled from "styled-components";
import bg from "./images/3.jpg"; 

export default function RoomInfo10() {

    const [RoomInfo, setRoomInfos] = useState([]);
    useEffect(()=>{
     const getRoomInfo = async () => {
        const q = query(collection(dbService, "roomInfo"), where("max", "==", 10));
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

    let roomName10 ="";
    let roomInfo1_10 ="";
    let roomInfo2_10 ="";
    let roomInfo3_10 ="";

    if(RoomInfo.RoomInfo !== undefined)
    {
      roomName10 = RoomInfo.RoomInfo[0].roomName;
      roomInfo1_10 = RoomInfo.RoomInfo[0].roomInfo1;
      roomInfo2_10 = RoomInfo.RoomInfo[0].roomInfo2;
      roomInfo3_10 = RoomInfo.RoomInfo[0].roomInfo3;
    }

    const Container = styled.div`
        position: absolute;
       top: 0;
       left: 0;
       width: 100%;
       height: 100%;
       background: url(${bg});
       background-size: cover;
       `;

    return(
      <Container>
        <div className="container">
          <div className="infoBox">
            <h1>{roomName10}</h1><br/>
            <h2>{roomInfo1_10}</h2><br/><br/><br/>
            <div>1️⃣ &nbsp;{roomInfo2_10}</div><br/><br/><br/>
            <div>2️⃣ &nbsp;{roomInfo3_10}</div>  
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
                <span>Up to 10 Number of People</span>
                <span>Free WIFI</span>
            </div>

            <div className="btnToIntro">
            <Link to="/intro">Go Back</Link>
            </div>
        </div>
        </Container>
    );
}