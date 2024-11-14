import { Route, Routes } from 'react-router-dom';

import ErrorPage from './pages/ErrorPage';
import TailwindPage from './pages/TailwindPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import ProductDummyPage from './pages/ProductsDummyPage';
import Experiments from './pages/Experiments';
// import Navigation from './components/Navigation';
import FlyoutMenu from './components/FlyoutMenu';

function App() {
  return (
    <>
      {/* <Navigation /> */}
      <FlyoutMenu />
      <Routes>
        <Route path="/" element={<Experiments />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products-dummy" element={<ProductDummyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tailwind" element={<TailwindPage />} />
        <Route path="/login" element={<h2>Login page in progress ...</h2>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
