import React from "react";
import "./ProductList.css";

const ProductList = () => {
  const categories = [
    {
      title: "WATCHES",
      image:
        "https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/banners/home1/cate1.jpg",
      alt: "Smartwatch with a colorful display and a beige strap",
    },
    {
      title: "BAGS",
      image:
        "https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/banners/home1/cate2.jpg",
      alt: "Person holding a light blue handbag",
    },
    {
      title: "SWIMWEARS",
      image:
        "https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/banners/home1/cate3.jpg",
      alt: "Person wearing a floral swimsuit and a denim jacket",
    },
    {
      title: "SHOES",
      image:
        "https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/banners/home1/cate4.jpg",
      alt: "Pair of yellow and white sneakers with a blue background",
    },
    {
      title: "FASHION",
      image:
        "https://opencart.smartaddons.com/themes/so_revo3/image/catalog/demo/banners/home1/cate5.jpg",
      alt: "Person wearing a white t-shirt with floral patterns on the sleeves and pocket",
    },
  ];

  return (
    <div className="container">
      <h2 className="title">FEATURED CATEGORIES</h2>
      <div className="underline"></div>
      <div className="grid">
        {categories.map((category, index) => (
          <div key={index} className="card">
            <img src={category.image} alt={category.alt} className="image" />
            <div className="content">
              <h3 className="category-title">{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;