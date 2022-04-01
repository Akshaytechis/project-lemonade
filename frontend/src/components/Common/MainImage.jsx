import React, { useState } from 'react';
import image2 from '../../assets/img/background.png';
import image1 from '../../assets/img/image1.png';

export default function MainImage() {
    const [checkUser, setCheckUser] = useState(false);
    return (
        <section class="main-image">
            <img src={image2} alt="main-banner" />
            {checkUser && <img src={image1} alt="main-banner" />}
        </section>
    );
}
