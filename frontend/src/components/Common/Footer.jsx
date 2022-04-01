import React, { useEffect, useState } from 'react';

export default function Footer({ price }) {
    let pageUrl = window.location.toString();
    const [showCheckoutButton, setShowCheckoutButton] = useState(true);
    const key = localStorage.getItem('LOGIN_USER_KEY');

    useEffect(() => {
        if (pageUrl.includes('cart')) {
            setShowCheckoutButton(false);
        }
    }, []);
    return (
        <footer>
            {key !== null && (
                <div class="price">
                    <p>Subtotal: ${price}</p>
                    {showCheckoutButton ? (
                        <a href="/cart">
                            <button>Check your Cart</button>
                        </a>
                    ) : (
                        <a href="/order">
                            <button>Checkout</button>
                        </a>
                    )}
                </div>
            )}
        </footer>
    );
}
