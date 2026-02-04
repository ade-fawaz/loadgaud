import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white border-t mt-16 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP DESCRIPTION */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-black mb-2">
            AliExpress: Your Best Choice for Online Shopping
          </h2>
          <p className="leading-6 max-w-4xl">
            AliExpress is an international B2C cross-border ecommerce platform
            under the Alibaba Group, connecting buyers directly with global
            manufacturers and suppliers.
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs text-black">
            {[
              "Blog",
              "ahegao hoodie",
              "chromebook charger",
              "ps2 controller",
              "purge mask",
              "gatsby dress",
              "hoverboard charger",
              "inflatable tent",
              "jade bracelet",
              "kuromi plush",
            ].map((item) => (
              <span key={item} className="hover:underline cursor-pointer">
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* LINK SECTIONS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <FooterColumn
            title="Customer service"
            items={[
              "Help Center",
              "Transaction Services Agreement",
              "Terms & Conditions",
              "Take our feedback survey",
            ]}
          />

          <FooterColumn
            title="Shopping with us"
            items={[
              "Making payments",
              "Delivery options",
              "Buyer Protection",
            ]}
          />

          <FooterColumn
            title="Collaborate with us"
            items={[
              "Partnerships",
              "Affiliate program",
              "Seller Log In",
              "Registration",
            ]}
          />

          <div>
            <h4 className="font-semibold text-black mb-3">Pay with</h4>
            <div className="flex flex-wrap gap-3">
              {["VISA", "Mastercard", "Verve", "Pay"].map((p) => (
                <div
                  key={p}
                  className="border rounded px-3 py-1 text-xs font-semibold"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-3">Stay connected</h4>
            <div className="flex gap-4 text-lg text-gray-700">
              <FaFacebookF className="hover:text-black cursor-pointer" />
              <FaTwitter className="hover:text-black cursor-pointer" />
              <FaInstagram className="hover:text-black cursor-pointer" />
              <FaWhatsapp className="hover:text-black cursor-pointer" />
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t pt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} ShopEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="font-semibold text-black mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="hover:underline cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;
