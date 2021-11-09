import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Intro, Reservation, Login, Profile } from "../pages/PagesIndex";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/intro" element={<Intro />} />
        </Routes>
        <Routes>
          <Route exact path="/reservation" element={<Reservation />} />
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
