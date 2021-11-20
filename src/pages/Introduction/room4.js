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

    if(RoomInfo.RoomInfo !== undefined)
            roomName4 = RoomInfo.RoomInfo[0].roomName;
        
    return(
        <div className="container">
            <span>{roomName4}</span> 
        </div>
    );
    }
    
