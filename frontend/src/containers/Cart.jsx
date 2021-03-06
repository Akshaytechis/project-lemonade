import React, { useEffect, useState } from 'react';
import CartItem from '../components/Common/CartItem';
import MainImage from '../components/Common/MainImage';
import { fetchCarts } from '../reducks/carts/operations';
import { fetchItems } from '../reducks/items/operations';
import { getCarts } from '../reducks/carts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../reducks/users/selectors';
import { getItems } from '../reducks/items/selectors';

export default function Cart() {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const carts = getCarts(selector);
    const user = getUser(selector);
    const items = getItems(selector);

    useEffect(() => {
        dispatch(fetchItems());
        dispatch(fetchCarts());
    }, []);

    return (
        <main>
            <MainImage />
            <section class="item-container">
                {
                    (carts,
                    items &&
                        carts.map(cart => (
                            <li>
                                <CartItem
                                    cart={cart.item}
                                    cartId={cart.id}
                                    key={cart.item.id}
                                    quantity={cart.quantity}
                                />
                            </li>
                        )))
                }
            </section>
        </main>
    );
}
