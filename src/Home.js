import React from 'react';
import "./css/Home.css";
import Product from './Product';
import { useState, useEffect } from 'react';


function Home() {
    const [productRows, setProductRows] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();

            // Enhance products with a random rating
            const productsWithRating = data.map(product => ({
            ...product,
            rating: Math.ceil(Math.random() * 5) // Assigns a random integer from 1 to 5
          }));
    
           // Group products into rows of 4
        const groupedProducts = [];
        for (let i = 0; i < productsWithRating.length; i += 4) {
          groupedProducts.push(productsWithRating.slice(i, i + 4));
        }
        setProductRows(groupedProducts);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      }
    };
    
        fetchProducts();
      }, []);


      return (
        <div className='home'>
          <div className="home_container">
            <img src="https://i.postimg.cc/yd9qg0vf/backgroung-clean-webstore.png" alt="" className="home_image" />
            
            {productRows.map((row, index) => (
              <div key={index} className="home_row">
                {row.map(product => (
                  <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    rating={product.rating} // Assuming the API returns an object with a `rate` property for the rating
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      );
}

export default Home