import React from 'react';
import './ProductsPage.css';

const products = [
  {
    id: 1,
    name: 'Dog Food',
    price: '$20',
    image: 'src/assets/media/dogfood.jpg',
    description: 'High-quality dog food for your pet.'
  },
  {
    id: 2,
    name: 'Cat Toy',
    price: '$10',
    image: 'src/assets/media/cattoy.jpg',
    description: 'Fun and engaging toy for your cat.'
  },
  {
    id: 3,
    name: 'Bird Cage',
    price: '$50',
    image: 'src/assets/media/cage.jpg',
    description: 'Spacious and safe cage for your bird.'
  },
  {
    id: 4,
    name: 'Fish Tank',
    price: '$100',
    image: 'src/assets/media/fishtank.jpg',
    description: 'Large fish tank with filtration system.'
  },
  {
    id: 5,
    name: 'Rabbit Hutch',
    price: '$80',
    image: 'src/assets/media/rabbit.jpg',
    description: 'Comfortable and secure hutch for rabbits.'
  },
];

const ProductsPage = () => {
  return (
    <div className="products-page">
      <h1>Products</h1>
      <div className="products-container">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
            <p className="product-description">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
