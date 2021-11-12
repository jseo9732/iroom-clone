import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  const [currentClick, setCurrentClick] = useState(null);
  const [prevClick, setPrevClick] = useState(null);

  const onMenuClick = (e) => {
    setCurrentClick(e.target.id);
  };

  useEffect(() => {
    if (currentClick !== null) {
      let current = document.getElementById(currentClick);
      current.style.color = "#3eccb5";
    }

    if (prevClick !== null) {
      let prev = document.getElementById(prevClick);
      prev.style.color = "#ffffff";
    }
    setPrevClick(currentClick);
  }, [currentClick]);

  return (
    <div className="HeaderContainer">
      <div className="HeaderBox">
        <Link to="/" className="HeaderTitle">
          모임공간 이룸
        </Link>
        <ul className="HeaderMenu">
          <li>
            <Link to="/" id="1" onClick={onMenuClick}>
              홈
            </Link>
          </li>
          <li>
            <Link to="/intro" id="2" onClick={onMenuClick}>
              공간소개
            </Link>
          </li>
          <li>
            <Link to="/reservation" id="3" onClick={onMenuClick}>
              예약하기
            </Link>
          </li>
          <li>
            <Link to="/login" id="4" onClick={onMenuClick}>
              로그인
            </Link>
          </li>
          <li>
            <Link to="/profile" id="5" onClick={onMenuClick}>
              마이페이지
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
