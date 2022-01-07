import { useContext, useEffect } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { useAnimate } from '../../hooks/useAnimate';

const Header = () => {
    const { items } = useContext(ProductContext);
    const [animate, setAnimation] = useAnimate();

    useEffect(() => {
        setAnimation('fadeIn');
    }, [items]);

    return (
        <div className="header py-4">
            <div className="container">
                <div className="align-items-center d-flex justify-content-between">
                    <a className="header__logo d-block" target="_blank" href="https://saatva.com">
                        <img src="/img/logo-saatva.png" alt="" />
                    </a>
                    <div className="cart">
                        <svg name="cart" className="cart__icon" role="img" alt="cart icon" description="Cart" viewBox="0 0 25 25" width="25" height="25" aria-labelledby="cartIcon"><title id="cartIcon">Cart</title><path d="M24.6,5.9c-0.3-0.3-0.7-0.6-1.1-0.6l-18.1-2V3.1C5.2,1.4,3.9,0,2.6,0h-2C0.2,0,0,0.2,0,0.5 C0,0.8,0.2,1,0.5,1h2c0.8,0,1.6,1,1.8,2.1l0.8,8.2c0.1,1.5-0.2,3-0.8,4.4c-0.4,0.6-0.4,1.3,0,1.9c0.5,0.7,1.3,1,2.1,0.9h16.5c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5H6.3c-0.4,0.1-0.9-0.1-1.1-0.4c-0.1-0.3-0.1-0.6,0.1-0.9c0.3-0.5,0.5-1.1,0.7-1.7H22c0.9,0,1.6-0.6,1.8-1.4l1.1-6C25,6.7,24.9,6.2,24.6,5.9L24.6,5.9z M22.8,12.9c-0.1,0.3-0.4,0.6-0.7,0.6H6.1c0.1-0.7,0.2-1.5,0.1-2.2L5.5,4.3l17.9,2c0.1,0,0.2,0.1,0.3,0.2c0.1,0.1,0.1,0.2,0.1,0.3L22.8,12.9L22.8,12.9z M19.8,24.2c-1.3,0-2.3-1-2.3-2.3s1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3S21.1,24.2,19.8,24.2z M19.8,20.6c-0.5,0-0.9,0.2-1.1,0.6s-0.2,0.9,0,1.3s0.7,0.6,1.1,0.6c0.7,0,1.3-0.6,1.3-1.3S20.6,20.6,19.8,20.6z M7.8,24.2c-1.3,0-2.3-1-2.3-2.3s1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3S9.1,24.2,7.8,24.2z M7.8,20.6c-0.5,0-0.9,0.2-1.1,0.6s-0.2,0.9,0,1.3s0.7,0.6,1.1,0.6c0.7,0,1.3-0.6,1.3-1.3S8.6,20.6,7.8,20.6z"></path></svg>
                        <div className="cart__notification">
                            <span className={`animate__animated animate__${animate} animate__faster`}>
                                {items}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Header;