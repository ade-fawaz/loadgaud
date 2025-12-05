import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductPreview from "./ProductPreview";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);


  return <ProductPreview product={product} onClose={() => window.history.back()} />;
}

export default ProductPage;
