import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';


export default function Thankyou() {
    const selector = useSelector(state => state);
    const user = JSON.parse(localStorage.getItem('LOGIN_USER_KEY'));
    useEffect(() => {
        console.log(user);
    }, []);
    return (
        <>
            <section class="main3">
                <h4>-Thank You For Your Ordering-</h4>
            </section>

            <div class="note">
                <p>
                    Thank you for your ordering <span class="color">{user.user_name}</span>. We received your request.{' '}
                    <br />
                    Our Staff will be contacting with you to tell next steps.
                </p>
                <a href="/">
                    <button>Back to Home</button>
                </a>
            </div>
        </>
    );
}
