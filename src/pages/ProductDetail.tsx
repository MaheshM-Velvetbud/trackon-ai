"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "@/components/Navigation";

const fetchProduct = async (id) => {
  const response = await axios.get(
    `https://strapi.velvetbud.in/api/products?filters[id][$eq]=${id}&populate=*`
  );
  if (response.data && response.data.data && response.data.data.length > 0) {
    return response.data.data[0]; // Extract the single product from the array
  }
  throw new Error("No product data found");
};

function ProductDetails() {
  const { id } = useParams();
  const { data: product, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    enabled: !!id, // Only run query if id is present
  });

  if (isLoading) return <div className="text-center text-2xl mt-10 text-white">Loading...</div>;
  if (error) return <div className="text-center text-red-400 text-2xl mt-10">Error: {error.message}</div>;
  if (!product) return <div className="text-center text-white text-2xl mt-10">Product not found</div>;

  return (
    <>
      <Header />
      <div className="min-h-screen  py-32 flex flex-col items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-3xl">
          {product.image && product.image[0] && (
            <img
              src={`https://strapi.velvetbud.in${product.image[0].url}`}
              alt={product.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}
          <div className="mb-4">
            <span className="inline-block bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
              {product.tagText}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">{product.title}</h1>
          <div className="space-y-4 mb-8">
            {product.content
              .filter((paragraph) => paragraph.children[0].text.trim() !== "")
              .map((paragraph, index) => (
                <p key={index} className="text-gray-600 text-base leading-relaxed">
                  {paragraph.children[0].text}
                </p>
              ))}
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg hover:bg-coral-600 transition-colors">
              Book a Demo
            </button>
            <Link
              to="/products"
              className="bg-gray-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Back to Products
            </Link>
          </div>
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

export default ProductDetails;