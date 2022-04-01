import React, { useEffect } from 'react';
import MainImage from '../components/Common/MainImage';
import Item from '../components/Common/Item';
import { fetchItems } from '../reducks/items/operations';
import { getItems } from '../reducks/items/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarts } from '../reducks/carts/operations';

export default function Home() {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const items = getItems(selector);

    useEffect(() => {
        dispatch(fetchItems());
        if (localStorage.getItem('LOGIN_USER_KEY')) {
            dispatch(fetchCarts());
            console.log(items);
        }
    }, []);

    return (
        <main>
            <MainImage />
            <section class="item-container">{items && items.map(item => <Item key={item.id} item={item} />)}</section>
        </main>
    );
}
