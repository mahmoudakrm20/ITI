// pages/dashboard.js
import { getSession, signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  return res.json();
};

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const secureFunc = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };

    secureFunc();
  }, []);

  const { data, error } = useSWR(
    !loading ? "https://fakestoreapi.com/products" : null,
    fetcher
  );

  if (loading)
    return <div className="text-gray-600 text-center">Loading...</div>;
  if (error)
    return (
      <div className="text-red-500 text-center">Error loading products.</div>
    );
  if (!data) return <div className="text-gray-600 text-center">Loading...</div>;

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">Product List</h1>
      <div className="grid grid-cols-3 gap-6">
        {data.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-2">Price: ${product.price}</p>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
