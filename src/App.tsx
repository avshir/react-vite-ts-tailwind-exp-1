import { Route, Routes } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import TailwindPage from './pages/TailwindPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import Navigation from './components/Navigation';
import ProductDummyPage from './pages/ProductsDummyPage';
import Experiments from './pages/Experiments';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Experiments />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products-dummy" element={<ProductDummyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tailwind" element={<TailwindPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
