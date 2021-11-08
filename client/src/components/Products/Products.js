import React, { useContext, useMemo } from 'react';
import ProductCard from './ProductCard'
import Loading from './../UI/Loading';

import { ProductContext } from '../../store/product-context';

import classes from './Products.module.css';

const Products = () => {
    const productCtx = useContext(ProductContext);
    const { loading, product } = useMemo(() => {
        return productCtx;
    }, [productCtx])

    const productData = product.map(e => {
        return <ProductCard
            key={e.id}
            data={{
                id: e.id,
                title: e.title,
                price: e.price,
                image: e.image,
                rating: {
                    rate: e.rating.rate,
                    count: e.rating.count
                }
            }}
        />
    })
    return (
        <div className={classes.container}>
            {!loading ? productData : <Loading />}
        </div>
    )
}

export default Products;