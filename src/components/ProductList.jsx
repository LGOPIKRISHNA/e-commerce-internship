import React from 'react';
import { Heart } from 'lucide-react';
import '../styles/ProductList.css';

const products = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Denim Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Leather Backpack',
    price: 119.99,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    name: 'Summer Dress',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    name: 'Cotton Sweatshirt',
    price: 49.99,
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRmfBSJlnZauylgbYjCFcZ1esU2v-qUwVK7RnqUg6IyLN6sU7NMkNcqGiqc9WCrN9upkXy77EBLOCCb-kZ3j9n3ex_o7cqGOConvH1UzRwKC3e1Zib2S95YOpCoryE2HCmNzyedFg&usqp=CAc',
  },
  {
    id: 6,
    name: 'Chic Sunglasses',
    price: 29.99,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQKP3eiFrg-k0SI6RqgAQ4v0cqB-pK5IEfZgFUQFVio6d8HHz-MMCYzZ6WigAubNiuSppEjrhcuNKWzav7glEa0eSN_EoH-Gzo9Jk4GTcd_pUKuZrkRjoKUWg',
  },
  {
    id: 7,
    name: 'Casual Sneakers',
    price: 79.99,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSWj70n4HK1ZJYZPKQmEQuIMn2edRBlxoRbefELsq5z6zg3Ok8CDNChjkD-pUhjOgNgGxsksXYkVfrsNLiqdnY02qn2XzuY0Ls7O6al7wcQS9K_pNnTK8VCxA',
  },
  {
    id: 8,
    name: 'Leather Wallet',
    price: 39.99,
    image: 'https://5.imimg.com/data5/OF/GH/MY-7610375/handmade-men-s-short-leather-wallet.jpg',
  },
];

function ProductList() {
  return (
    <div className="product-section">
      <h2 className="section-title">Featured Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <button className="wishlist-button">
                <Heart className="w-5 h-5" />
              </button>
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-details">
                <span className="product-price">${product.price}</span>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
