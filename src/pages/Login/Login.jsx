import React, { useState } from "react";
import "./Login.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   if (newAccount) {
    //     await createUserWithEmailAndPassword(auth, email, password);
    //   } else {
    //     await signInWithEmailAndPassword(auth, email, password);
    //   }
    // } catch (error) {
    //   setError(error.message);
    // }
  };

  const toggleAccount = () => {
    setNewAccount(!newAccount);
  };

  return (
    <div className="LoginContainer">
      <img src="/images/login_img.jpg" alt="" className="BackImg"/>
      <div className="LoginFormContainer">
        <form onSubmit={onSubmit}>
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
          <input
            type="submit"
            className="LoginInput LoginSubmit"
            value={newAccount ? "회원가입" : "로그인"}
          />
          {error && <span className="authError">{error}</span>}
        </form>
        <span onClick={toggleAccount} className="authSwitch">
          {newAccount ? "로그인 하기" : "회원가입 하기"}
        </span>
      </div>
    </div>
  );
}
