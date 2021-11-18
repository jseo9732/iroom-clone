import AppRouter from "./Router";
import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { authService } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    const auth = authService;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          email: user.email,
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
    });
  };

  return (
    <div className="App">
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        />
      ) : (
        <div className="Init">Initializing...</div>
      )}
    </div>
  );
}
