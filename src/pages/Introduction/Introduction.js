import React, { useState } from "react";
import { dbService, storageService } from "../../firebase";
import "./Introduction.css";

export default function Introduction() {

    const Hover = () => {
        const [isListHover, setIsListHover] = useState(false);
        
        return (
            <li>
            onMouseOver={() => setIsListHover(true)}
            onMouseOut={() => setIsListHover(false)}
          </li>
        ) 
    }

    return ( 
    <div className="IntroParents">
    <div className="IntroIntro">
        <div className="IntroContents">
            <span className="IntroTitle">스터디룸 소개</span><br/><br/><br/>    
            <span>취업 준비, 강의 등 모임 맞춤형 스터디룸</span><br/><br/>
            <span>1인당 1,000원에 이용 가능, 2인 ~ 15인의 스터디 공간</span>
        </div>
    </div>

    <div className="IntroImages">
        <div className="room4Box">
           <img className="room4" alt="room4" src={require('../Introduction/images/4인.jpg').default}/>    
        </div>

        <div className="room6Box">
            <img className="room6" alt="room6" src={require('../Introduction/images/6인.png').default} />
        </div>
   

        <div className="room10Box">
            <img className="room10" alt="room10" src={require('../Introduction/images/10인.jpg').default} />
        </div>

         <div className="room20Box">
             <img className="room20" alt="room20" src={require('../Introduction/images/20인.webp').default} />  
        </div>
    </div>
    </div>

    );
}
