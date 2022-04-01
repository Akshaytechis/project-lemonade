import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../reducks/users/operations';
import cross from '../assets/img/cross.svg';
import Home from '../containers/Home';
import { push } from 'connected-react-router';

export default function Signup() {
    const dispatch = useDispatch();

    const closeButton = () => {
        dispatch(push('/'));
    };
    const [user_name, setUserName] = useState(''),
        [email, setEmail] = useState(''),
        [password, setPassword] = useState('');
    const inputUserName = event => {
        setUserName(event.target.value);
    };
    const inputEmail = event => {
        setEmail(event.target.value);
    };
    const inputPassword = event => {
        setPassword(event.target.value);
    };
    const signUpButton = () => {
        dispatch(signUp(user_name, email, password));
        setUserName('');
        setEmail('');
        setPassword('');
    };
    return (
        <>
            <Home />
            <section class="popup2">
                <div class="popup-inner2">
                    <span onClick={closeButton}>
                        <img class="cross" src={cross} alt="" />
                    </span>
                    <h2>SIGN UP</h2>
                    <div class="popup-input">
                        <input type="name" required placeholder="Name" value={user_name} onChange={inputUserName} />
                        <br />
                        <br />
                        <input type="email" required placeholder="Email-address" value={email} onChange={inputEmail} />
                        <br />
                        <br />
                        <input
                            type="password"
                            required
                            placeholder="Password"
                            value={password}
                            onChange={inputPassword}
                        />
                        <br /> <br />
                        <button onClick={signUpButton}> SIGN UP</button>
                        <br />
                        <br />
                        <p>
                            Already a Member? <a href="/signin">Sign In</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
