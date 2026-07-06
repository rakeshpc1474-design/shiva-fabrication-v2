import { Link } from 'react-router-dom';
import { company, services } from '../data/content';
import { scrollToQuoteForm } from '../utils/quote';

export default function Footer() {
  return (
    <footer className="border-t border-[#2D3B4D] bg-[#0B1118] text-[#AEB8C5]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="flex w-full max-w-[220px] items-center justify-center lg:justify-start">
            <img src="/src/assets/images/full-Logo.png" alt="Shiva Fabrication logo" className="w-[180px] object-contain" />
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#AEB8C5]">Premium steel fabrication and structural engineering crafted for industrial durability, speed and long-term performance.</p>
          <div className="mt-6 space-y-2 text-sm text-[#AEB8C5]">
            <p>{company.phone}</p>
            <p>{company.phone2}</p>
            <p>{company.email}</p>
            <p>{company.address}</p>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Core Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {services.slice(0, 6).map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Navigate</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
            <li><button type="button" onClick={scrollToQuoteForm} className="hover:text-white">Get Quote</button></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#2D3B4D] px-4 py-4 text-center text-sm text-[#8E9AA7] sm:px-6 lg:px-8">
        © 2026 {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
