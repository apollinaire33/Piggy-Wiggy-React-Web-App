import React, { useState } from 'react';

import Products from '../products.json'

import styles from '../components/styles/detail.css'


const Detail = (props) => {
    let product_id = props.match.params.id
    let current_product = Products[product_id - 1]

    return (
        <section>
            <article>
                <img src={current_product.image} />
                <h1>{current_product.title}</h1>
                <h2>АХАХАХАХАХХАХАХАХ</h2>
                <h2>АХАХАХАХАХХАХАХАХ</h2>
                <h2>АХАХАХАХАХХАХАХАХ</h2>
            </article>
        </section>
    );
};

export default Detail;