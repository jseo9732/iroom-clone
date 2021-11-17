import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Intro, Reservation, Login, Profile } from "../pages/PagesIndex";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function AppRouter({ refreshUser, isLoggedIn, userObj }) {
  return (
    <>
      <BrowserRouter>
        <Navigation isLoggedIn={isLoggedIn} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
