import React from "react";
import "./roomInfo.css";
import { dbService, storageService } from "../../firebase";
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
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
        <div className="container">
            <span>{roomName4}</span><br/>
            <span>{roomInfo1_4}</span><br/> 
            <span>{roomInfo2_4}</span><br/>
            <span>{roomInfo3_4}</span><br/>
        </div>
    );
    }
    
