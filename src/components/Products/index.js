import React, { useContext, useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating'

import { ProductContext } from '../../context/ProductContext';
import DataMattress from '../../data/mattress';
import { useAnimate } from '../../hooks/useAnimate';


const Products = () => {
    const [itemActive, setItemActive] = useState(0);
    const [animate, setAnimation] = useAnimate();
    useEffect(() => {
        setAnimation('fadeIn');
    }, [itemActive]);

    const { setItems } = useContext(ProductContext);
    const { mattresses } = DataMattress;
    const mattressTypes = Object.keys(mattresses);

    return (
        <div className="align-items-center product center-body d-flex">
            <div className="container">
                <div className="row">
                    <h1 className="primary-title mt-4 d-block d-md-none">Choose Your Mattress</h1>

                    <div className="col-12 col-md-6 mt-5 mt-md-0 product__image">
                        <img className={`animate__animated animate__${animate}`} src={`/img/${mattresses[mattressTypes[itemActive]].imageFileName}`} alt="" />
                    </div>
                    {/* flex-direction: column */}
                    <div className="col-12 col-md-6 d-flex flex-column">
                        <h1 className="primary-title mb-5 d-none d-md-block">Choose Your Mattress</h1>
                        <div className=" mb-auto">
                            <label className="label-primary">SELECT MATTRESS TYPE</label>
                            <div className="toggle">
                                {mattressTypes.map((type, idx) => {
                                    return <div key={idx} onClick={() => setItemActive(idx)} className={`toggle__tab ${idx === itemActive ? 'toggle__tab_active' : ''}`}><span>{mattresses[type].name}</span></div>
                                })}
                            </div>

                            <div className="product__details">
                                <strong className="product__name">{mattresses[mattressTypes[itemActive]].name} Mattress</strong>
                                <span className="product__price">${mattresses[mattressTypes[itemActive]].price.toLocaleString()}</span>
                            </div>
                            <div className="product__rating">
                                <Rating className="mb-4" size={22} readonly initialValue={mattresses[mattressTypes[itemActive]].reviewRating} />
                            </div>
                        </div>
                        <button
                            onClick={() => setItems((prev) => {
                                return prev + 1
                            })}
                            className="button button__primary w-100 text-center py-2 fs-4">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;