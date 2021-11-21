import React from "react";
import "./roomInfo.css";
import { dbService, storageService } from "../../firebase";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
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
            <span>{roomName20}</span><br/>
            <span>{roomInfo1_20}</span><br/>
            <span>{roomInfo2_20}</span><br/>
            <span>{roomInfo3_20}</span> 
        </div>
    );
}