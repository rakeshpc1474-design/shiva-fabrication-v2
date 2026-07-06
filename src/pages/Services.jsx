import { services } from '../data/content';

export default function Services() {
  return (
    <div className="bg-[#0B1118]">
      <section className="bg-[#0B1118] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F5A623]">Services</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">Specialized fabrication and structural solutions for complex industrial requirements.</h1>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="overflow-hidden rounded-[1.75rem] border border-[#2D3B4D] bg-[#121A24] shadow-[0_10px_35px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[#F5A623]">
              <div className="h-32 bg-[linear-gradient(135deg,#0B1118_0%,#18222F_100%)]" />
              <div className="p-8">
                <h2 className="text-xl font-semibold text-white">{service}</h2>
                <p className="mt-3 text-sm leading-7 text-[#AEB8C5]">Precision-engineered steel solutions tailored for durability, fast assembly and superior performance on site.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
