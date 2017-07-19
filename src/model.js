/* 
 * MODEL is the global data layer for access to remote data.
 * fetch api and Promise object are used for AJAX calls.
 * For browsers that do not support, look for a pollyfill. eg. whatwg
 */

import { CONFIG } from './config';

function getProducts() {
    
    return fetch( CONFIG.productsJsonUrl )
                .then( response => response.json() )
                .catch( error => {
                    
                    console.error( 'Failed to fetch Products.', error );
                } );

}

let MODEL = {
    getProducts
};

export { MODEL };