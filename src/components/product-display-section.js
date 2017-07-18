import React from 'react';
import { CONFIG } from '../config';

class ProductPane extends React.Component {
    
    renderProductBadges( isSale = false, isExclusive = false ) {
        
        let saleTag = ( isSale === true ) 
            ? <div className="badge sale-badge">Sale</div>
            : null;
        
        let exclusiveTag = ( isExclusive === true ) 
            ? <div className="badge exclusive-badge">Exclusive</div>
            : null;
        
        return (

            <div className="product-badges">
                { saleTag }
                { exclusiveTag }
            </div>
        );
    }
    
    render() {
        
        return (
        
            <div className="product-pane">
                <div className="product-image-container">
                    <img alt="Not available"
                         src={ this.props.productImageLink }
                    />
                </div>
                { 
                    this.renderProductBadges( 
                        this.props.isSale,
                        this.props.isExclusive
                    ) 
                }
                <div className="product-info">

                    <div className="product-name">
                    { this.props.productName }
                    </div>
                    <div className="product-price">
                        { this.props.productPrice }
                    </div>
                </div>
                
            </div>
        );
    }
}

class ProductDisplaySection extends React.Component {
    
    render() {
        console.log( 2, this.props.products );
        
        return (
            
            <section id="product-display-section">
                <ul>
                {
                    
                    this.props.products.map( product => {
                        
                        let productImageLink = CONFIG.productImagePath
                                             + product.productImage;
                        
                        return ( 
                            <li key={ product.index }>
                                <ProductPane 
                                    productName={ product.productName }
                                    productImageLink={ productImageLink }
                                    productPrice={ product.price }
                                    isSale={ product.isSale }
                                    isExclusive={ product.isExclusive }
                                />
                            </li>
                       );
                                     
                    } )
                }
                </ul>
            </section>
        );
    }
}


export { ProductDisplaySection }