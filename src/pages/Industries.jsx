import { industries } from '../data/content';

export default function Industries() {
  return (
    <div className="bg-[#0B1118]">
      <section className="bg-[#0B1118] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F5A623]">Industries We Serve</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Flexible steel systems for demanding operational environments.</h1>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {industries.map((industry) => (
            <div key={industry} className="rounded-3xl border border-[#2D3B4D] bg-[#121A24] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <h2 className="text-xl font-semibold text-white">{industry}</h2>
              <p className="mt-3 text-sm leading-7 text-[#AEB8C5]">Tailored steel fabrication and structural guidance for sector-specific challenges.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
