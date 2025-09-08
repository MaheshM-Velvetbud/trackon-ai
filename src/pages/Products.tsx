"use client";

import { Shield } from 'lucide-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from "@/components/Navigation";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://strapi.velvetbud.in/api/products?populate=*', {
          signal: controller.signal,
        });
        if (response.data && response.data.data && response.data.data.length > 0) {
          setProducts(response.data.data);
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
    fetchProducts();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) return <div className="text-center text-2xl mt-10 text-white">Loading...</div>;
  if (error) return <div className="text-center text-red-400 text-2xl mt-10">{error}</div>;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-900 py-32 flex flex-col items-center justify-center p-4">
         <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Innovate with <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-emerald-500">AI-Powered Solutions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover TrackOn AI’s cutting-edge products, from emotion detection to intelligent automation, designed to transform your business with smarter, future-ready technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {products.map((product) => {
            const firstParagraph = product.content
              .filter((paragraph) => paragraph.children[0].text.trim() !== '')[0];
            const firstLine = firstParagraph?.children[0].text.split('. ')[0] + '.';

            return (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-xl p-6 w-full"
              >
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
                  <p className="text-gray-600 text-sm mb-2">
                    {firstLine}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-coral-600 transition-colors">
                    Book a Demo
                  </button>
                  <Link
                    to={`/products/${product.id}`}
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary-glow hover:to-accent cyber-glow text-white font-semibold py-2 px-4 rounded-lg"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <footer className="py-8 border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <img src="/trackonailogo.png" alt="TrackOn Logo" className="h-32 w-32" />
            </div>
            <p className="text-sm text-gray-400">
              © 2024 TrackOn AI Security. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;