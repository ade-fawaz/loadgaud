import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import SignIn from "./SignIn";
import { FaCartPlus } from "react-icons/fa6";
import { FaFireAlt } from "react-icons/fa";
import { LuTicketPercent } from "react-icons/lu";

function ProductGrid() {
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=12")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);  
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <><button
      onClick={() => setOpen(true)}
      className="bg-red-600 text-white py-2 px-4 rounded"
    >
      Open Login Modal
    </button>
    {open && <SignIn onClose={() => setOpen(false)} />}
    <section className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">More to love</h2>

        <div className="w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {loading ? (
            <div className="col-span-4 flex justify-center py-10">
              <Spinner />
            </div>
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}

        </div>
      </section></>
  );
}

function ProductCard({ product }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="h-89 rounded-lg p-0 shadow hover:shadow-lg transition group cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative mb-2">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-50 object-cover rounded"
        />
        <button className="absolute bottom-2 right-2 bg-white text-black p-2 rounded-full shadow hover:bg-black hover:text-white">
          <FaCartPlus />
        </button>
      </div>

      <h3 className="text-md font-semibold">{product.title}</h3>
      <p className="text-xl font-bold">
        <span className="text-sm">NGN</span>{" "}
        {(product.price * 1500).toLocaleString()}
      </p>
      <p className="text-sm text-gray-600">
        ★ {product.rating} | {product.stock}+ sold
      </p>

      <div className="mt-1">
        {!hover ? (
          <>
            {product.brand && (
              <p className="text-sm text-red-500 flex items-center">
                <FaFireAlt />
                Top selling from {product.brand}
              </p>
            )}
            {product.discountPercentage && (
              <p className="text-md text-red-600 flex items-center mt-1">
                <LuTicketPercent />
                Save {product.discountPercentage}% today
              </p>
            )}
          </>
        ) : (
          <Link to={`/products/${product.id}`}>
            <button className="w-full bg-black text-white py-2 rounded-lg transition-all duration-300">
              See Preview
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProductGrid;
