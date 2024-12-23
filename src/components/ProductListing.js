import React from 'react';
import './styles.css';

// Sample Product Data
const products = [
  { id: 1, name: 'Snake Plant', price: 15, category: 'Air Purifying', image: './images/snake.jpeg' },
  { id: 2, name: 'Spider Plant', price: 12, category: 'Air Purifying', image: ../images/spider.jpg' },
  { id: 3, name: 'Peace Lily', price: 18, category: 'Aromatic', image: 'public/images/peace.jpeg' },
  { id: 4, name: 'Lavender', price: 25, category: 'Aromatic', image: 'images/lavender-shk-1.JPG' },
  { id: 5, name: 'Rosemary', price: 30, category: 'Scented', image: 'images/rosemary.jpg' },
  { id: 6, name: 'Jasmine', price: 28, category: 'Scented', image: 'images/lily.jpeg' },
];

const ProductListing = ({ cart, addToCart }) => {
  // Separate products by category
  const airPurifyingPlants = products.filter((product) => product.category === 'Air Purifying');
  const aromaticPlants = products.filter((product) => product.category === 'Aromatic');
  const scentedPlants = products.filter((product) => product.category === 'Scented');

  // Reusable Section Component
  const ProductSection = ({ title, plants }) => (
    <div className="product-section">
      <h2>{title}</h2>
      <div className="products">
        {plants.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              disabled={cart.some((item) => item.id === product.id)}
            >
              {cart.some((item) => item.id === product.id) ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="product-listing">
      <ProductSection title="Air Purifying Plants" plants={airPurifyingPlants} />
      <ProductSection title="Aromatic Plants" plants={aromaticPlants} />
      <ProductSection title="Scented Plants" plants={scentedPlants} />
    </div>
  );
};

export default ProductListing;
