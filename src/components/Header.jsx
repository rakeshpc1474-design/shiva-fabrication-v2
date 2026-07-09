import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { scrollToQuoteForm } from '../utils/quote';
import navbarLogo from "../assets/images/navbar.png";

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/industries', label: 'Industries' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#2D3B4D] bg-[#0B1118]/95 backdrop-blur-xl shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <img
            src={navbarLogo}
            alt="Shiva Enterprise"
            className="h-10 lg:h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-[15px] font-medium transition ${
                  isActive
                    ? 'text-[#F5A623]'
                    : 'text-[#AEB8C5] hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Button */}
        <button
          type="button"
          onClick={scrollToQuoteForm}
          className="hidden rounded-full bg-[#F5A623] px-5 py-2.5 text-sm font-semibold text-[#0B1118] transition hover:bg-[#D98C00] lg:inline-flex"
        >
          Get Quote
        </button>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg border border-slate-700 p-2 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="mt-1 block h-0.5 w-6 bg-white"></span>
          <span className="mt-1 block h-0.5 w-6 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-[#2A3646] bg-[#121A24] px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium ${
                    isActive
                      ? 'text-[#F5A623]'
                      : 'text-[#B9C4CF]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <button
              type="button"
              className="mt-2 rounded-full bg-[#F5A623] px-4 py-3 text-sm font-semibold text-[#0B1118]"
              onClick={() => {
                scrollToQuoteForm();
                setOpen(false);
              }}
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}