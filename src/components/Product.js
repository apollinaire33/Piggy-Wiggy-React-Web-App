import React from 'react';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles" 
import { Link } from 'react-router-dom';

import styles from './styles/listings.css'

const Product = (props) => {

    const tableStyles = makeStyles({
        root: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            margin: "20px 0px 110px 0px"                
            
        },
    });
    
    const tableClasses = tableStyles();

    const listStyles = makeStyles({
        root: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            margin: "30px 0px 0px 50px"                
        },
    });
    
    const listClasses = listStyles();

    let product = props.product
    let view = props.view

    if (view === "table-view") {

        return (
            <article className="table-view">
                <h1>{product.title}</h1>
                <img src={product.image} />
                <Button component={Link} to={'' + product.id} variant="outlined" className={tableClasses.root}>Learn More</Button>
            </article>
        );
        
    } else if (view === "list-view") {
        return (
            <article className="list-view">
                <img className="list-img" src={product.image} />

                <h1 className="list-h1">{product.title}</h1>
                <h2 className="list-h2">
                    Кабан представляет семейство млекопитающих. 
                    Этот зверь имеет несколько названий, при этом такое понятие, как хряк применяется в отношении домашней свиньи, а точнее самца. Насколько известно, домашние свиньи являются потомками диких кабанов, поэтому являются их близкими родственниками.
                </h2>                
                <Button component={Link} to={'' + product.id}р variant="outlined" className={listClasses.root} >Learn More</Button>

            </article>
        );
    }  

};

export default Product;