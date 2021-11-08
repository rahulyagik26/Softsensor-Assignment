import React, { useContext } from 'react';

import { CartContext } from '../../store/cart-context';

import classes from './ProductCard.module.css';

const ProductCard = ({ data }) => {
    const cartCtx = useContext(CartContext);

    const addItemHandler = () => {
        cartCtx.addItem({
            id: data.id,
            name: data.title,
            price: data.price,
            image: data.image,
            amount: 1
        });
    }

    return (
        <div className={classes.productCard}>
            <img className={classes.cardImage}
                src={data.image} alt='product-img' height="60%" />
            <div className={classes.cardBody}>
                <h5 className={classes.productTitle}>{data.title.slice(0, 50)}</h5>
                <div className={classes.rating}>
                    <span>
                        {data.rating.rate}&nbsp;
                        <i className="fas fa-star"></i>
                    </span>
                    &nbsp;{data.rating.count} ratings
                </div>
                <div className={classes.productPrice}>
                    <i className="fas fa-rupee-sign"></i>
                    <p>{data.price}</p>
                </div>
                <button className={classes.cartBtn} onClick={addItemHandler}>
                    Add To Cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard;
