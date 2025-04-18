import React, { useState, useContext } from 'react';
import { CartContext } from "./CartContext";
import '../styles/Sub_Fashion_Electronics.css';

const Sub_Fashion_Electronics = () => {
  const { cartCount, addToCart } = useContext(CartContext);
  const [items, setItems] = useState([
    { id: 1, title: 'Adipisicing ground', price: '1718.36€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/25-270x270.jpg' },
    { id: 2, title: 'Cuid dementius', price: '1032.73€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/22-270x270.jpg' },
    { id: 3, title: 'Dail minimunam', price: '1718.36€', image: 'https://opencart.smartaddons.com/themes/so_revo3/image/cache/catalog/demo/product/sport/4-270x270.jpg' },
    { id: 4, title: 'Dail 2940/295 PhD', price: '85.99€', image: 'https://storage.googleapis.com/a1aa/image/7BL-FWdPy7AYfJm2suYvdqkXtth02lzSPvHT-PLHGnU.jpg' },
  ]);

  const [isTableView, setIsTableView] = useState(false);
  const [gridColumns, setGridColumns] = useState(4); // Default grid columns
  const [activeButton, setActiveButton] = useState(4); // Default active button

  const handleGridColumns = (columns, buttonNumber) => {
    setGridColumns(columns);
    setActiveButton(buttonNumber);
    setIsTableView(false); // Ensure table view is disabled when grid view is active
  };

  const toggleTableView = () => {
    setIsTableView(!isTableView);
    setActiveButton(null); // Reset active button when switching to table view
  };

  return (
    <div className="Sub_Fashion_Electronics-container">
      <h1 className="Sub_Fashion_Electronics-title">Fashion</h1>
      <div className="Sub_Fashion_Electronics-controls">
        <div className="Sub_Fashion_Electronics-grid-controls">
          <span className="Sub_Fashion_Electronics-control-label">Grid View:</span>
          {[2, 3, 4, 5].map((columns) => (
            <button
              key={columns}
              className={`Sub_Fashion_Electronics-grid-view-button ${activeButton === columns ? 'Sub_Fashion_Electronics-button-active' : ''}`}
              onClick={() => handleGridColumns(columns, columns)}
            >
              {columns}
            </button>
          ))}
          <button
            className="Sub_Fashion_Electronics-grid-view-button"
            onClick={toggleTableView}
          >
            <i className="fas fa-th"></i>
          </button>
        </div>
        <div className="Sub_Fashion_Electronics-sort-controls">
          <span className="Sub_Fashion_Electronics-control-label">Sort By:</span>
          <select className="Sub_Fashion_Electronics-select">
            <option>Default</option>
            <option>Name(A-Z)</option>
            <option>Name(Z-A)</option>
            <option>Rating(Highest)</option>
            <option>Rating(Lowest)</option>
            <option>Price(Low&gt;High)</option>
            <option>Price(High&gt;Low)</option>
            <option>Model(A-Z)</option>
            <option>Model(Z-A)</option>
          </select>
          <span className="Sub_Fashion_Electronics-control-label">Show:</span>
          <select className="Sub_Fashion_Electronics-select">
            <option>12</option>
            <option>25</option>
            <option>50</option>
            <option>75</option>
            <option>100</option>
          </select>
          <button className="Sub_Fashion_Electronics-compare-button">
            Product Compare (0)
          </button>
        </div>
      </div>

      {/* Product Grid or Table */}
      {isTableView ? (
        <table className="Sub_Fashion_Electronics-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Price</th>
              <th>Information</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="Sub_Fashion_Electronics-table-image"
                  />
                </td>
                <td>{item.price}</td>
                <td>Some information about the item</td>
                <td>{item.title}</td>
                <td>
                  <div className="Sub_Fashion_Electronics-table-actions">
                    <button className="Sub_Fashion_Electronics-action-button">
                      <i className="fas fa-heart"></i>
                    </button>
                    <button className="Sub_Fashion_Electronics-action-button">
                      <i className="fas fa-exchange-alt"></i>
                    </button>
                    <button className="Sub_Fashion_Electronics-action-button">
                      <i className="fas fa-shopping-cart" onClick={() => addToCart(item)}></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div
          className={`Sub_Fashion_Electronics-grid Sub_Fashion_Electronics-grid-cols-${gridColumns}`}
        >
          {items.map((item) => (
            <div key={item.id} className="Sub_Fashion_Electronics-product-card">
              <div className="Sub_Fashion_Electronics-product-image">
                <img
                  src={item.image}
                  alt={item.title}
                  className="Sub_Fashion_Electronics-image"
                />
                <div className="Sub_Fashion_Electronics-overlay">
                  <button className="Sub_Fashion_Electronics-overlay-button">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
              <h2 className="Sub_Fashion_Electronics-product-title">{item.title}</h2>
              <div className="Sub_Fashion_Electronics-rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="Sub_Fashion_Electronics-star">
                    <i className="fas fa-star"></i>
                  </span>
                ))}
                <span className="Sub_Fashion_Electronics-rating-count">(8)</span>
              </div>
              <p className="Sub_Fashion_Electronics-price">{item.price}</p>
              <div className="Sub_Fashion_Electronics-actions">
                <button className="Sub_Fashion_Electronics-action-button">
                  <i className="fas fa-heart"></i>
                </button>
                <button className="Sub_Fashion_Electronics-action-button">
                  <i className="fas fa-exchange-alt"></i>
                </button>
                <button className="Sub_Fashion_Electronics-action-button">
                  <i className="fas fa-shopping-cart" onClick={() => addToCart(item)}></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sub_Fashion_Electronics;