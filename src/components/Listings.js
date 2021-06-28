import React from 'react';

import styles from './styles/listings.css'

import Product from './Product'

const Listings = (props) => {

    return (
        <main  >

            { props.products.map(product => {
                return <Product product={product} view={props.view} />
            }) }

        </main>

    );

};

export default Listings;