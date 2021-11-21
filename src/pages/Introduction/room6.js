import React from "react";
import "./roomInfo.css";
import { dbService, storageService } from "../../firebase";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { collection, query, where, getDocs } from "firebase/firestore";


export default function RoomInfo6() {

    const [RoomInfo, setRoomInfos] = useState([]);
    useEffect(()=>{
     const getRoomInfo = async () => {
        const q = query(collection(dbService, "roomInfo"), where("max", "==", 6));
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

    let roomName6 = "";
    let roomInfo1_6 = "";
    let roomInfo2_6 = "";
    let roomInfo3_6 = "";

    if(RoomInfo.RoomInfo !== undefined)
        {
            roomName6 = RoomInfo.RoomInfo[0].roomName;
            roomInfo1_6 = RoomInfo.RoomInfo[0].roomInfo1;
            roomInfo2_6 = RoomInfo.RoomInfo[0].roomInfo2;
            roomInfo3_6 = RoomInfo.RoomInfo[0].roomInfo3;
        }
    
    return(
        <div className="container">
            <span>{roomName6}</span><br/>
            <span>{roomInfo1_6}</span><br/>
            <span>{roomInfo2_6}</span><br/>
            <span>{roomInfo3_6}</span> 
        </div>
    );
}