import React from 'react';
import { FilterSection } from './filter-section';
import { ProductDisplaySection } from './product-display-section';
import { MODEL } from '../model';

class App extends React.Component{
   
    constructor() {
        
        super();
        this.handleFilterSelect = this.handleFilterSelect.bind( this );
        
        this.products = [];
        this.state = {
            
            isProductsFetched: false
        };
    }
    
    getProducts() {
        
        let getProductsPromise = MODEL.getProducts();
        let self = this;
        
        getProductsPromise
            .then( products => {
            
                self.products = products;
                
                self.setState( {
                    
                    isProductsFetched: true
                    
                } );
            } );
    }
    
    handleFilterSelect() {
        
        
    }
    
    componentDidMount() {
        
        this.getProducts();
        
    }
    
    render() {
       
        return (
       
            <div id="dt-code-test-app">
                <h1>DT Code Test</h1>
                <FilterSection onFilterSelect={ this.handleFilterSelect } />
                <ProductDisplaySection products={ this.products } />
            </div>
        );
    }
    
}

export { App };