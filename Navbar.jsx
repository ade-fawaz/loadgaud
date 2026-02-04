import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaSearch} from "react-icons/fa";


function Navbar({ onSignIn, user }) {
  return (
    <nav className="w-full bg-white border-b shadow-sm">
      {/* TOP BAR */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-black-600">
          AliExpress
        </Link>

        {/* SEARCH */}
        <div className="flex w-1/2 h-10 border rounded-full overflow-hidden">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 px-4 text-sm outline-none"
          />
          <button
            type="button"
            className="flex items-center justify-center bg-black text-white px-4"
          >
            <FaSearch />
          </button>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-6 text-gray-700">
          {user ? (
            <div className="flex items-center gap-2">
              <FaUserCircle className="text-xl" />
              <span className="text-sm truncate max-w-[120px]">
                {user.email}
              </span>
            </div>
          ) : (
            <button
              type="button"
              onClick={onSignIn}
              className="flex items-center gap-1 hover:text-black"
            >
              <FaUserCircle className="text-xl" />
              <span className="text-sm">Sign in</span>
            </button>
          )}

          {/* CART */}
          <Link to="/cart" className="relative hover:text-black">
            <FaShoppingCart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {user?.cartCount ?? 0}
            </span>
          </Link>
        </div>
      </div>

      {/* CATEGORY BAR */}
      <div className="bg-gray-100 border-t overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-end gap-8 mr-4 p-4 text-sm font-semibold min-w-max ">
          <span className="cursor-pointer hover:text-red-600">
            Bundle deals
          </span>
          <span className="cursor-pointer hover:text-red-600">
            Choice
          </span>
          <span className="cursor-pointer hover:text-red-600">
            SuperDeals
          </span>
          <span className="cursor-pointer hover:text-red-600">
            Home & Furniture
          </span>
          <span className="cursor-pointer hover:text-red-600">
            Jewelry & Watches
          </span>
          <span className="cursor-pointer hover:text-red-600">
            Electronics
          </span>
          <span className="cursor-pointer hover:text-red-600">
            Women's Clothing
          </span>
          <span className="cursor-pointer hover:text-red-600">
            Automotive & Motorcycle
          </span>
          <span className="cursor-pointer hover:text-red-600">
            Computer & Education
          </span>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
