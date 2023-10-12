import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authService } from "../firebase";
import { signOut } from "firebase/auth";
import "./Navigation.css";

export default function Navigation({ isLoggedIn }) {
  const auth = authService;
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMenuShow, setIsMenuShow] = useState(false);
  const onMenuShowClick = () => {
    setIsMenuShow(!isMenuShow);
  };

  const onBtnClick = () => {
    setIsMenuShow(false);
  };

  const onLogOutClick = () => {
    signOut(auth);
    navigate("/");
    setIsMenuShow(false);
  };

  useEffect(() => {
    setIsScrolled(true);
  }, []);

  return (
    <div className="HeaderContainer">
      <div className={isScrolled ? "HeaderBox scrolled" : "HeaderBox"}>
        <Link to="/" className="HeaderTitle" onClick={onBtnClick}>
          모임공간 이룸
        </Link>
        <div className={isMenuShow ? "HeaderMenu active" : "HeaderMenu"}>
          <NavLink to="/" className="NavBtn" onClick={onBtnClick}>
            홈
          </NavLink>
          <NavLink to="/intro" className="NavBtn" onClick={onBtnClick}>
            공간소개
          </NavLink>
          <NavLink to="/reservation" className="NavBtn" onClick={onBtnClick}>
            예약하기
          </NavLink>
          {isLoggedIn && (
            <NavLink to="/profile" className="NavBtn" onClick={onBtnClick}>
              마이페이지
            </NavLink>
          )}
          {isLoggedIn ? (
            <div className="LogoutBtn" onClick={onLogOutClick}>
              로그아웃
            </div>
          ) : (
            <NavLink to="/login" className="NavBtn" onClick={onBtnClick}>
              로그인
            </NavLink>
          )}
        </div>
      </div>
      <div className="MenuBtn" onClick={onMenuShowClick}>
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
}
