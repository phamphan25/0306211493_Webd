
import './App.css';
import './css/bootstrap.css';
import './js/bootstrap.bundle.js';
import HomePage from './pages/home-page';
import PDDetail from './pages/product-detail';
import ProductType from './pages/product-type';

import { Route,Routes } from 'react-router-dom';


export default function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product-detail" element={<PDDetail />} />
      <Route path="/product-type" element={<ProductType />} />
    </Routes>
   </>
  );
}

