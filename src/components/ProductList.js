
import React from 'react';

function ProductList({ products }) {
    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <button>Add to Cart</button>
                    <button>Add to Wishlist</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
