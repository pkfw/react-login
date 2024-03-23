import React from 'react';
import './Login_1.css';
import github from '../asset/icon/github.png';
import kakao from '../asset/icon/kakaotalk.png';
import naver from '../asset/icon/naver.png';

const Login_1 = () => {
    return (
        <div className="box">
            <span className="borderLine"></span>
            <form>
                <h2>Sign in</h2>
                <div className="inputBox">
                    <input type="text" required={true}/>
                    <span>Username</span>
                    <i></i>
                </div>
                <div className="inputBox">
                    <input type="password" required={true}/>
                    <span>Password</span>
                    <i></i>
                </div>
                <div className="links">
                    <a href="#">Forgot password</a>
                    <a href="#">Signup</a>
                </div>
                <button type="submit" className="inputLogin">Login</button>
                <div className="logins">
                    <button type="button" className="github">
                        <img src={github} alt="github"/>
                    </button>
                    <button type="button" className="naver">
                        <img src={naver} alt="naver"/>
                    </button>
                    <button type="button" className="kakao">
                        <img src={kakao} alt="kakao"/>
                    </button>
                </div>
            </form>
        </div>
    )
};

export default Login_1;