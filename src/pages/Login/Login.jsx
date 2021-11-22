import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { authService } from "../../firebase";
import "./Login.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const auth = authService;

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newAccount) {
        await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          updateProfile(auth.currentUser,{ displayName: displayName})
        })
        .then((res) => {
          navigate('/');
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          navigate('/');
        });
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => {
    setNewAccount(!newAccount);
  };

  return (
    <div className="LoginContainer">
      <img src="/images/login_img.jpg" alt="" className="BackImg"/>
      <div className="LoginFormContainer">
        <form onSubmit={onSubmit}>
          {newAccount ? 
            <input 
              name="displayName"
              type="text"
              placeholder="이름을 입력하세요"
              required
              value={displayName}
              onChange={onChange}
              className="LoginInput"
            /> 
            : ""}
          <input
            name="email"
            type="text"
            placeholder="이메일을 입력하세요"
            required
            value={email}
            onChange={onChange}
            className="LoginInput"
          />
          <input
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            required
            value={password}
            onChange={onChange}
            className="LoginInput"
          />
          {error && <span className="authError">{error}</span>}
          <input
            type="submit"
            className="LoginInput LoginSubmit"
            value={newAccount ? "회원가입" : "로그인"}
          />
        </form>
        <span onClick={toggleAccount} className="authSwitch">
          {newAccount ? "로그인 하기" : "회원가입 하기"}
        </span>
      </div>
    </div>
  );
}
