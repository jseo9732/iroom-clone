import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  return (
    <div className="HeaderContainer">
      <div className="HeaderBox">
        <Link to="/" className="HeaderTitle">
          모임공간 이룸
        </Link>
        <div className="HeaderMenu">
          <NavLink to="/" className="NavBtn">
            홈
          </NavLink>
          <NavLink to="/intro" className="NavBtn">
            공간소개
          </NavLink>
          <NavLink to="/reservation" className="NavBtn">
            예약하기
          </NavLink>
          <NavLink to="/login" className="NavBtn">
            로그인
          </NavLink>
          <NavLink to="/profile" className="NavBtn">
            마이페이지
          </NavLink>
        </div>
      </div>
    </div>
  );
}
