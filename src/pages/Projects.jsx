import { useMemo, useState } from 'react';
import { projects } from '../data/content';

const categories = ['All', 'Factory Sheds', 'Warehouse Construction', 'PEB Structures'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-[#0B1118]">
      <section className="bg-[#0B1118] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F5A623]">Projects</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold sm:text-5xl">Industrial progress delivered through robust engineered steel solutions.</h1>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${activeCategory === category ? 'bg-[#F5A623] text-[#0B1118]' : 'bg-[#121A24] text-[#AEB8C5] ring-1 ring-[#2D3B4D]'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-[1.75rem] border border-[#2D3B4D] bg-[#121A24] shadow-[0_10px_35px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-1 hover:border-[#F5A623]">
              <img loading="lazy" src={project.image} alt={project.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F5A623]">{project.category}</p>
                <h2 className="mt-2 text-xl font-semibold text-white">{project.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#AEB8C5]">{project.summary}</p>
                <p className="mt-4 text-sm font-medium text-[#8E9AA7]">Location • Ahmedabad Region</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#2D3B4D] bg-[#121A24] p-8 shadow-[0_10px_35px_rgba(0,0,0,0.24)]">
          <h2 className="text-3xl font-semibold text-white">Before & After Showcase</h2>
          <p className="mt-3 max-w-2xl text-[#AEB8C5]">We transform complex industrial requirements into durable, modern structures with strong visual and operational impact.</p>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F5A623]">Before</p>
              <img loading="lazy" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80" alt="Before industrial site" className="mt-4 h-64 w-full rounded-2xl object-cover" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#F5A623]">After</p>
              <img loading="lazy" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80" alt="After industrial site" className="mt-4 h-64 w-full rounded-2xl object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
