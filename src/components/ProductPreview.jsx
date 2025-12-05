import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import { FaTruckFast } from "react-icons/fa6";
import { HiReceiptRefund } from "react-icons/hi2";
import { MdOutlineSecurity } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";

function ProductPreview() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setActiveImage(data.thumbnail);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4 overflow-auto">
      <div className="bg-white w-full max-w-6xl rounded-lg p-6 relative shadow-xl">

        <button
          onClick={() => navigate(-1)}
          className="absolute top-0 right-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-10 gap-6">

          <div className="col-span-3">
            <img src={activeImage} className="w-full h-96 object-cover rounded" />
          </div>

          <div className="col-span-1 lg:col-span-4">
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>

            <p className="text-yellow-500 text-sm mb-1">
              ★ {product.rating} | {product.stock} sold
            </p>

            <div className="bg-white text-black border border-red-600 p-4 rounded-lg mb-3">
              <div className="-mt-4 -mx-4 bg-red-300 text-red-600 px-4 py-2 rounded-t-lg">
                <h2 className="m-0 text-lg font-semibold">Welcome deal</h2>
              </div>
              <div className="flex p-3 items-baseline justify-between">
                <p className="text-2xl font-bold">
                  NGN {(product.price * 1500).toLocaleString()}
                </p>
                <p className="text-sm opacity-80">
                  New shoppers save NGN {(product.price * 700).toLocaleString()}
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-sm">{product.description}</p>
          </div>

          <div className="col-span-1 lg:col-span-3 border-l pl-4">
            <p className="font-semibold mb-3">Service commitment</p>

            <p className="flex text-sm mb-1">
              <FaTruckFast className="text-green-500" />
              Shipping: NGN 33,907
            </p>

            <p className="flex text-sm text-black font-bold mb-2 mt-4">
              <HiReceiptRefund className="text-green-500" />
              Refund policy
            </p>

            <p className="flex text-sm text-black font-bold mb-6">
              <MdOutlineSecurity
                className="text-green-500 mr-1"
              /> 
              Security & Privacy
            </p>

            <div className="mt-40">
              <button className="w-full bg-red-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-700 flex items-center justify-center gap-2">
                <FaCartPlus />
                Add to Cart
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductPreview;
