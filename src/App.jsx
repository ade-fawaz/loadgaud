import { Routes, Route } from 'react-router-dom';
import './index.css';
import ProductGrid from './components/ProductGrid';
import ProductPreview from './components/ProductPreview';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductGrid/>}/>
        <Route path="/products/:id" element={<ProductPreview/>}/>
      </Routes>
    </div>
  );
}

export default App;
