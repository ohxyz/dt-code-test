import React from 'react';

class FilterSection extends React.Component {
    
    constructor() {
        super();
        this.handleSizeChange = this.handleSizeChange.bind( this );
    }
    
    handleSizeChange( event ) {
        
        let productSize = event.target.value;
        this.props.onFilterSelect( productSize );
    }
    
    render() {
        
        return (
        
            <section id="filter-section">
                <div id="filter-title">Women's tops</div>
                <div id="filter-box">
                    <select id="product-size-filter"
                            defaultValue="FILTER BY SIZE"
                            onChange={ this.handleSizeChange }
                    >
                        <option value="FILTER BY SIZE" hidden disabled>
                            Filter by size
                        </option>
                        <option value="ALL">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
            </section>
        );
    }
    
}

export { FilterSection }