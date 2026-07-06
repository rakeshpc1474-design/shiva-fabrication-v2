import { galleryImages } from '../data/content';

export default function Gallery() {
  return (
    <div className="bg-[#0B1118]">
      <section className="bg-[#0B1118] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F5A623]">Gallery</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">A visual portfolio of build quality and industrial precision.</h1>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {galleryImages.map((image, index) => (
            <img loading="lazy" key={image} src={image} alt={`Project gallery ${index + 1}`} className="h-72 w-full rounded-3xl border border-[#2D3B4D] object-cover shadow-[0_10px_35px_rgba(0,0,0,0.24)]" />
          ))}
        </div>
      </section>
    </div>
  );
}
