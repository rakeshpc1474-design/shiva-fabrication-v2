import { Link } from 'react-router-dom';

const articles = [
  {
    title: 'Why structural steel remains the preferred choice for modern industrial facilities',
    excerpt: 'Explore the advantages of steel in large-span industrial construction and how it supports faster delivery.',
  },
  {
    title: 'Key considerations when planning a warehouse construction project',
    excerpt: 'From foundation planning to roof design, a structured approach keeps delivery predictable.',
  },
];

export default function Blog() {
  return (
    <div className="bg-[#0B1118]">
      <section className="bg-[#0B1118] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F5A623]">Blog</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Insights on fabrication, construction and industrial engineering.</h1>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {articles.map((article) => (
            <div key={article.title} className="rounded-3xl border border-[#2D3B4D] bg-[#121A24] p-8 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <h2 className="text-2xl font-semibold text-white">{article.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[#AEB8C5]">{article.excerpt}</p>
              <Link to="/contact" className="mt-6 inline-flex text-sm font-semibold text-[#2F6FED]">Discuss your project →</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
