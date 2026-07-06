import { motion } from 'framer-motion';
import { company, services, stats } from '../data/content';

export default function About() {
  return (
    <div className="bg-[#0B1118]">
      <section className="bg-[#0B1118] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F5A623]">About Shiva Enterprise</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">Delivering heavy-duty steel infrastructure with industrial precision and dependable execution.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#AEB8C5]">We are a fabrication-led engineering company focused on premium industrial structures, reliable project delivery and high-performance execution for demanding factory, warehouse and infrastructure developments.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl border border-[#2D3B4D] bg-[#121A24] p-8 shadow-[0_10px_35px_rgba(0,0,0,0.24)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#2F6FED]">Our approach</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Engineering-led fabrication for modern industrial infrastructure.</h2>
            <p className="mt-5 text-lg leading-8 text-[#AEB8C5]">We believe premium industrial construction should balance speed, structural integrity and long-term value. Every project is planned with precise detailing and executed with a strong focus on quality control.</p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[#2D3B4D] bg-[#121A24] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                <p className="text-3xl font-semibold text-[#F5A623]">{stat.value}</p>
                <p className="mt-2 text-sm text-[#AEB8C5]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#2D3B4D] bg-[#121A24] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-white">Mission, Vision and Core Strengths</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[#2D3B4D] bg-[#18222F] p-6">
              <p className="text-lg font-semibold text-white">Industrial Expertise</p>
              <p className="mt-3 text-sm leading-7 text-[#AEB8C5]">To engineer and deliver high-performance steel structures that strengthen industrial operations and exceed client expectations.</p>
            </div>
            <div className="rounded-[1.5rem] border border-[#2D3B4D] bg-[#18222F] p-6">
              <p className="text-lg font-semibold text-white">Quality Assurance</p>
              <p className="mt-3 text-sm leading-7 text-[#AEB8C5]">To be a preferred fabrication partner for large-scale industrial, warehousing and infrastructure developments.</p>
            </div>
            <div className="rounded-[1.5rem] border border-[#2D3B4D] bg-[#18222F] p-6">
              <p className="text-lg font-semibold text-white">Safety & Delivery</p>
              <p className="mt-3 text-sm leading-7 text-[#AEB8C5]">Site-ready execution, quality assurance, experienced project leadership and dependable delivery across demanding environments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#2D3B4D] bg-[#121A24] p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F5A623]">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold">Let’s discuss your next industrial build.</h2>
          <p className="mt-4 max-w-2xl text-[#AEB8C5]">Reach us at {company.phone} or {company.email} for a consultation and technical estimate.</p>
        </div>
      </section>
    </div>
  );
}
