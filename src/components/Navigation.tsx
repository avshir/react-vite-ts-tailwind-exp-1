import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <header className="bg-gray-800 text-lg text-white">
      <div className="container mx-auto flex h-[60px] max-w-[1200px] items-center justify-between">
        <span className="font-bold text-purple-300">React base 2022 Minin tailwind</span>
        <nav className="flex items-center justify-between gap-4 px-5">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Products
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
