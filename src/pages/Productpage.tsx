"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchProduct = async () => {
      try {
        const response = await axios.get('https://strapi.velvetbud.in/api/products?populate=*', {
          signal: controller.signal,
        });
        if (response.data && response.data.data && response.data.data.length > 0) {
          setProduct(response.data.data[0]);
        } else {
          setError('No product data found');
        }
        setLoading(false);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError('Failed to fetch product data: ' + err.message);
        }
        setLoading(false);
      }
    };
    fetchProduct();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) return <div className="text-center text-2xl mt-10 text-white">Loading...</div>;
  if (error) return <div className="text-center text-red-400 text-2xl mt-10">{error}</div>;

  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg">
        {product.image && product.image[0] && (
          <img
            src={`https://strapi.velvetbud.in${product.image[0].url}`}
            alt={product.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}
        <div className="mb-4">
          <span className="inline-block bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
            {product.tagText}
          </span>
        </div>
        <h1 className="text-2xl font-bold text-gray-700 mb-4">{product.title}</h1>
        <div className="mb-4">
          {product.content
            .filter((paragraph) => paragraph.children[0].text.trim() !== '')
            .map((paragraph, index) => (
              <p key={index} className="text-gray-600 text-sm mb-2">
                {paragraph.children[0].text}
              </p>
            ))}
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-gray-900 text-blue-500 font-semibold py-2 px-4 rounded-lg hover:bg-coral-600 transition-colors">
            Book a Demo
          </button>
          <div className="text-xl font-bold text-red-900">
            Price: ${product.price}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;