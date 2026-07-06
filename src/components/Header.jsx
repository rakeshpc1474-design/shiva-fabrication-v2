import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { company } from '../data/content';
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
    <header className="sticky top-0 z-50 border-b border-[#2D3B4D] bg-[#0B1118]/95 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.28)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center py-0" onClick={() => setOpen(false)}>
         <img src={navbarLogo} alt="Shiva Fabrication logo" />

        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => `text-sm font-medium tracking-[0.04em] transition ${isActive ? 'text-[#F5A623]' : 'text-[#AEB8C5] hover:text-white'}`}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button type="button" onClick={scrollToQuoteForm} className="hidden rounded-full border border-[#F5A623]/40 bg-[#F5A623] px-5 py-2.5 text-sm font-semibold text-[#0B1118] transition hover:bg-[#D98C00] lg:inline-flex">
          Get Quote
        </button>
        <button className="rounded-full border border-slate-700 p-2 lg:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
          <span className="block h-0.5 w-6 bg-slate-200" />
          <span className="mt-1 block h-0.5 w-6 bg-slate-200" />
          <span className="mt-1 block h-0.5 w-6 bg-slate-200" />
        </button>
      </div>
      {open && (
        <div className="border-t border-[#2A3646] bg-[#121A24] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-[#F5A623]' : 'text-[#B9C4CF]'}`} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <button type="button" className="mt-2 inline-flex rounded-full bg-[#F5A623] px-4 py-2 text-sm font-semibold text-[#0B1118]" onClick={() => { scrollToQuoteForm(); setOpen(false); }}>Get Quote</button>
          </div>
        </div>
      )}
    </header>
  );
}
