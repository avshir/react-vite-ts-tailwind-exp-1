import { NavLink, Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <header className="bg-gray-800 text-lg text-white">
      <div className="container mx-auto flex h-[60px] items-center justify-between px-8">
        <Link to="/" className="font-bold text-purple-300">
          React Vite Tailwind 2024
        </Link>
        <nav className="flex items-center justify-between gap-4">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Experiments
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
            Products
          </NavLink>
          <NavLink to="/products-dummy" className={({ isActive }) => (isActive ? 'active' : '')}>
            ProductsDummy
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            About
          </NavLink>
          <NavLink to="/tailwind" className={({ isActive }) => (isActive ? 'active' : '')}>
            Tailwind practice
          </NavLink>
        </nav>
      </div>
    </header>
  );
}