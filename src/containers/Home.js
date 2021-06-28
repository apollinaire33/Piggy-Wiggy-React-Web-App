import React, { useState } from 'react';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import SearchBar from "material-ui-search-bar";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles" 
import Pagination from '@material-ui/lab/Pagination';

import Listings from '../components/Listings'
import Products from '../products.json'

const Home = () => {

    // pagination bar style
    const paginationStyles = makeStyles({
        root: {
            justifyContent:"center",
            display:'flex',            
            paddingBottom: "200px"
        },
    });
    
    const paginationClasses = paginationStyles();

    // filter button style
    const filterStyles = makeStyles({
        root: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            width: '100px',
            marginRight: '20px'                
        },
    });
    
    const filterClasses = filterStyles();

    // variable for setting products per page
    const productsPerPage = 4

    let start = productsPerPage * -1
    let end = 0

    const [view, setView] = React.useState("table-view");

    // products state

    const [products, setProducts] = useState(Products);

    const [currentProducts, setCurrentProducts] = useState(products)
    
    let firstLoadProducts = products.slice(start + productsPerPage, end + productsPerPage) 

    const [usedProducts, setUsedProducts] = useState(firstLoadProducts)    

    // filter state
    const [filterStatus, setFilterStatus] = useState({
        kaban: false,
        borov: false,
        hryak: false,
        svinka: false
    });

    // page variables
    let currentPage = 1

    let pageQuantity = Math.ceil(currentProducts.length / productsPerPage)

    // pagination
    const changePage = (event, value) => {
        currentPage = value

        let new_products = currentProducts.slice(start + currentPage * productsPerPage, end + currentPage * productsPerPage)
        setUsedProducts(new_products)
    }

    // change display mode
    const table = () => {
        setView("table-view")
    }
    
    const list = () => {
        setView("list-view")
    }

    // search funcion
    const searchProduct = (title) => {
        let searchedProducts = []
        
        for (let i = 0; i < products.length; i++) {
            let product = products[i]
            if (product.title.indexOf(title) > -1) {
                searchedProducts.push(product)
            } 
            
        }

        let new_products = searchedProducts.slice(start + currentPage * productsPerPage, end + currentPage * productsPerPage)
        setCurrentProducts(searchedProducts)
        setUsedProducts(new_products)

    }

    // filter functions
    const changeFilterStatus = (event) => {
        setFilterStatus({ ...filterStatus, [event.target.name]: event.target.checked });        
    };

    const filterProducts = () => {
        let filteredProducts = []

        for (let i = 0; i < products.length; i++) {
            let product = products[i]
            if (filterStatus[product.category]) {
                filteredProducts.push(product)
            }
        }

        if (filteredProducts.length == 0) {
            filteredProducts = products
        }
        let new_products = filteredProducts.slice(start + currentPage * productsPerPage, end + currentPage * productsPerPage)
        setCurrentProducts(filteredProducts)
        setUsedProducts(new_products)
    };

    const { kaban, borov, hryak, svinka } = filterStatus;

    return (
        
        <div>
            
            <div className="icons">

                <Button variant="outlined" onClick={filterProducts} className={filterClasses.root} >Filter</Button>

                <FormControlLabel
                    control={<Checkbox color="secondary" checked={kaban} onChange={changeFilterStatus} name="kaban" />}
                    label="Кабан"
                />

                <FormControlLabel
                    control={<Checkbox color="secondary" checked={borov} onChange={changeFilterStatus} name="borov" />}
                    label="Боров"
                />

                <FormControlLabel
                    control={<Checkbox color="secondary" checked={hryak} onChange={changeFilterStatus} name="hryak" />}
                    label="Хряк"
                />

                <FormControlLabel
                    control={<Checkbox color="secondary" checked={svinka} onChange={changeFilterStatus} name="svinka" />}
                    label="Свинка"
                />

                <SearchBar 
                    onChange={title => searchProduct(title)} 
                    onRequestSearch={title => searchProduct(title)} 
                    style={{maxWidth: 400}}
                />

                <ViewComfyIcon className="table-icon" style={{ fontSize: 40 }} onClick={table} />
                <ViewHeadlineIcon className="list-icon" style={{ fontSize: 40, }} onClick={list} />

            </div>

            <Listings products={usedProducts} view={view} />

            <Pagination 
                onChange={changePage}
                count={pageQuantity}
                className={paginationClasses.root} size="large" 
            />

        </div>

    );
};

export default Home;