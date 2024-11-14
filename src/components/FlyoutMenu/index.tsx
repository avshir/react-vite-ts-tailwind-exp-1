// https://tailwindui.com/components/marketing/elements/headers
// https://tailwindui.com/components/application-ui/navigation/navbars
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { classNames } from './../../utils/utils';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const IMG_LOGO = 'https://tailwindui.com/plus/img/logos/mark.svg?color=purple&shade=300';

const navigation = [
  { name: 'Experiments', href: '/', current: true },
  { name: 'Products', href: '/products', current: false },
  { name: 'ProductsDummy', href: '/products-dummy', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Tailwind practice', href: '/tailwind', current: false },
];

export default function FlyoutMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-lg text-gray-300">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex items-center space-x-4 lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">React Vite Tailwind 2024</span>
            <img alt="logo" src={IMG_LOGO} className="h-8 w-auto" />
          </Link>
          <span className="font-bold text-purple-300">React Vite Tailwind 2024</span>
        </div>
        {/* Mobile menu button*/}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        {/* Desktop menu */}
        <ul className="hidden items-center lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <li>
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `${isActive ? 'active text-purple-300 hover:text-purple-300' : 'text-gray-50 hover:text-white'} rounded-md bg-gray-800 px-3 py-2 hover:bg-gray-700`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${isActive ? 'active text-purple-300 hover:text-purple-300' : 'text-gray-50 hover:text-white'} rounded-md bg-gray-800 px-3 py-2 hover:bg-gray-700`
            }
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </NavLink>
        </div>
      </nav>

      {/* Profile dropdown */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto border-l border-gray-300/20 bg-gray-800 px-6 py-6 text-gray-300 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">React Vite Tailwind 2024</span>
              <img alt="logo" src={IMG_LOGO} className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-300/20">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? 'active text-purple-300 hover:text-purple-300'
                          : 'text-gray-50 hover:text-white',
                        '-mx-3 block rounded-lg px-3 py-2 hover:bg-gray-700'
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="py-6">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    classNames(
                      isActive
                        ? 'active text-purple-300 hover:text-purple-300'
                        : 'text-gray-50 hover:text-white',
                      '-mx-3 block rounded-lg px-3 py-2 hover:bg-gray-700'
                    )
                  }
                >
                  Log in
                </NavLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
