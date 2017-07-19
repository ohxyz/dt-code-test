import React from 'react';
import { FilterSection } from './filter-section';
import { ProductDisplaySection } from './product-display-section';
import { MODEL } from '../model';

let PRODUCTS = [];

class App extends React.Component{
   
    constructor() {
        
        super();
        this.handleFilterSelect = this.handleFilterSelect.bind( this );
        
        this.productsListed = PRODUCTS;
        this.state = {
            
            isProductsFetched: false,
        };
    }
    
    getProducts() {
        
        let getProductsPromise = MODEL.getProducts();
        let self = this;
        
        getProductsPromise
            .then( products => {
            
                PRODUCTS = products;
                this.productsListed = PRODUCTS;
                
                self.setState( {
                    
                    isProductsFetched: true
                    
                } );
            } );
    }
    
    handleFilterSelect( productSize = 'ALL') {
        
        if ( productSize === 'ALL' ) {
            
            this.productsListed = PRODUCTS;
        }
        else {
        
            this.productsListed = PRODUCTS.filter( product => 
            
                product.size.indexOf( productSize ) !== -1
            );
        }
        
        this.forceUpdate();
        
    }
    
    componentDidMount() {
        
        this.getProducts();
        
    }
    
    render() {
       
        return (
       
            <div id="dt-code-test-app">
                <FilterSection onFilterSelect={ this.handleFilterSelect } />
                <ProductDisplaySection products={ this.productsListed } />
            </div>
        );
    }
    
}

export { App };