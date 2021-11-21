import React from "react";
import "./roomInfo.css";
import { dbService, storageService } from "../../firebase";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { collection, query, where, getDocs } from "firebase/firestore";


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

    return(
        <div className="container">
            <span>{roomName10}</span><br/>
            <span>{roomInfo1_10}</span><br/>
            <span>{roomInfo2_10}</span><br/>
            <span>{roomInfo3_10}</span>  
        </div>
    );
}