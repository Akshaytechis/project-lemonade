import React, { useEffect, useState } from 'react';
import image1 from '../../assets/img/image1.png';
import { signOut } from '../../reducks/users/operations';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

export default function Header() {
    const dispatch = useDispatch();
    const key = localStorage.getItem('LOGIN_USER_KEY');
    const [checkUser, setCheckUser] = useState(false);

    const signOutButton = () => {
        dispatch(signOut());
        setCheckUser(false);
        dispatch(push('/signin'));
    };

    useEffect(() => {
        if (key != null) {
            setCheckUser(true);
        }
    }, [key]);
    return (
        <header>
            <div class="logo">
                <h1>Lemonade</h1>
            </div>
            <div class="right-nav">
                {checkUser ? (
                    <span class="logout" onClick={signOutButton}>
                        Logout
                    </span>
                ) : (
                    <a href="/signin">Sign in</a>
                )}
                {checkUser && <img src={image1} alt="Cart" />}
            </div>
        </header>
    );
}
