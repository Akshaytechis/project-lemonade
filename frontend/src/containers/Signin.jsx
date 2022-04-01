import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../reducks/users/operations';
import cross from '../assets/img/cross.svg';
import Home from './Home';
import { push } from 'connected-react-router';

export default function Signin() {
    const dispatch = useDispatch();

    const closeButton = () => {
        dispatch(push('/'));
    };

    const [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    const inputEmail = event => {
        setEmail(event.target.value);
    };

    const inputPassword = event => {
        setPassword(event.target.value);
    };

    const signInButton = () => {
        dispatch(signIn(email, password));
        setEmail('');
        setPassword('');
    };
    return (
        <>
            <Home />
            <section class="popup">
                <div class="popup-inner">
                    <span onClick={closeButton}>
                        <img class="cross" src={cross} alt="" />
                    </span>
                    <h2>SIGN IN</h2>

                    <div class="popup-input">
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
                        <button onClick={signInButton} >SIGN IN</button>
                        <br />
                        <br />
                        <p>
                            Not a Member? <a href="/signup">Sign Up</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
