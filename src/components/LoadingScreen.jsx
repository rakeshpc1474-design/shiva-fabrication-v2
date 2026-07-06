import { useEffect, useState } from 'react';
import navbarLogo from "../assets/images/navbar.png";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B1118] text-white">
      <div className="flex flex-col items-center gap-4">
        <img
          src={navbarLogo}
          alt="Shiva Fabrication logo"
          className="h-[42px] w-auto object-contain"
        />

        <div className="h-1 w-36 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-[#F5A623]" />
        </div>

        <p className="text-sm uppercase tracking-[0.35em] text-slate-300">
          Shiva Fabrication
        </p>
      </div>
    </div>
  );
}