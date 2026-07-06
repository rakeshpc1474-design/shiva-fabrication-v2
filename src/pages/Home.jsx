import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import { company, services, stats, projects, testimonials, timeline, faqItems } from '../data/content';
import QuoteForm from '../components/QuoteForm';
import { scrollToQuoteForm } from '../utils/quote';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center text-white">
        <div className="absolute inset-0 bg-[#0B1118]/90" />
        <div className="relative mx-auto grid min-h-[90vh] max-w-7xl items-center gap-8 px-4 py-24 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-32">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F5A623]">Industrial Fabrication Contractor</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">Engineering robust steel infrastructure for factories, warehouses and heavy industry.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#AEB8C5]">{company.name} delivers precision fabrication, structural steel execution and industrial construction solutions for projects from ₹25 lakh to ₹20 crore.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button type="button" onClick={scrollToQuoteForm} className="rounded-full bg-[#F5A623] px-6 py-3 font-semibold text-[#0B1118] transition hover:bg-[#D98C00]">Get Free Quote</button>
              <Link to="/projects" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">View Projects</Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-[#2D3B4D] bg-[#121A24]/85 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[#2D3B4D] bg-[#18222F] p-4">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-[#AEB8C5]">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-[#2D3B4D] bg-[#0B1118]/80 p-5">
              <p className="text-sm uppercase tracking-[0.25em] text-[#F5A623]">Execution Standards</p>
              <p className="mt-2 text-xl font-semibold text-white">Engineered for precision, safety and lasting performance on every site.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionHeading eyebrow="Why Shiva Enterprise" title="Built for industrial scale, engineered for precision." description="Our team combines fabrication expertise, structural insight and disciplined project delivery to support complex industrial environments with dependable execution." />
          <div className="grid gap-4 sm:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <div key={service} className="rounded-2xl border border-[#2D3B4D] bg-[#121A24] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-[#F5A623]">
                <p className="text-lg font-semibold text-white">{service}</p>
                <p className="mt-2 text-sm leading-7 text-[#AEB8C5]">Durable steel solutions tailored for modern industrial operations.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#2D3B4D] bg-[#121A24] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="Recent Projects" title="Structures that move production forward." description="Explore a selection of industrial builds created for efficiency, resilience and fast deployment." />
            <Link to="/projects" className="text-sm font-semibold text-[#2F6FED] hover:text-[#5d91ff]">See all projects →</Link>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article key={project.title} whileHover={{ y: -6 }} className="overflow-hidden rounded-[1.75rem] border border-[#2D3B4D] bg-[#18222F] shadow-[0_10px_35px_rgba(0,0,0,0.24)]">
                <img loading="lazy" src={project.image} alt={project.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F5A623]">{project.category}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#AEB8C5]">{project.summary}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-[#2D3B4D] bg-[#121A24] p-8 text-white shadow-[0_24px_80px_rgba(6,19,26,0.2)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F5A623]">Execution Timeline</p>
            <h2 className="mt-3 text-3xl font-semibold">A disciplined path from planning to handover.</h2>
          </div>
          <div className="space-y-4">
            {timeline.map((item, index) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-[#2D3B4D] bg-[#18222F] p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A623] font-semibold text-[#0B1118]">{index + 1}</div>
                <p className="text-sm leading-7 text-[#AEB8C5]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#2D3B4D] bg-[#121A24] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Testimonials" title="Trusted by ambitious industrial clients." description="Client confidence is built through reliable delivery, clear communication and superior craftsmanship." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-3xl border border-[#2D3B4D] bg-[#18222F] p-8">
                <p className="text-lg leading-8 text-[#AEB8C5]">“{item.quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-[#8E9AA7]">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteForm />

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#2D3B4D] bg-[#121A24] p-8 shadow-[0_24px_80px_rgba(6,19,26,0.2)] lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F5A623]">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Talk to our team about your next industrial build.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#AEB8C5]">We’re ready to discuss fabrication scope, site requirements and a preliminary estimate for your next project.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${company.phone}`} className="rounded-full border border-[#2D3B4D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#18222F]">Call Now</a>
              <a href={`mailto:${company.email}`} className="rounded-full bg-[#F5A623] px-5 py-3 text-sm font-semibold text-[#0B1118] transition hover:bg-[#D98C00]">Email Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="FAQ" title="Common questions about our fabrication process." description="We make project coordination straightforward and transparent from initial inquiry to final handover." />
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="rounded-2xl border border-[#2D3B4D] bg-[#121A24] p-5 shadow-sm" open={item.question === faqItems[0].question}>
                <summary className="cursor-pointer text-lg font-semibold text-white">{item.question}</summary>
                <p className="mt-3 text-sm leading-7 text-[#AEB8C5]">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
