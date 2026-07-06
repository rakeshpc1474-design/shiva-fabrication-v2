import { company } from '../data/content';

export default function Contact() {
  return (
    <div className="bg-[#0B1118]">
      <section className="bg-[#0B1118] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F5A623]">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Let’s build something industrial, resilient and future-ready.</h1>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-[#2D3B4D] bg-[#121A24] p-8 shadow-[0_10px_35px_rgba(0,0,0,0.24)]">
            <h2 className="text-2xl font-semibold text-white">Get in touch</h2>
            <div className="mt-6 space-y-4 text-sm text-[#AEB8C5]">
              <p><span className="font-semibold text-white">Phone:</span> {company.phone}</p>
              <p><span className="font-semibold text-white">Alternate:</span> {company.phone2}</p>
              <p><span className="font-semibold text-white">Email:</span> {company.email}</p>
              <p><span className="font-semibold text-white">Address:</span> {company.address}</p>
            </div>
          </div>
          <div className="rounded-3xl border border-[#2D3B4D] bg-[#121A24] p-8 shadow-[0_10px_35px_rgba(0,0,0,0.24)]">
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input className="rounded-2xl border border-[#2D3B4D] bg-[#18222F] px-4 py-3 text-white placeholder:text-[#8E9AA7]" placeholder="Your Name" />
                <input className="rounded-2xl border border-[#2D3B4D] bg-[#18222F] px-4 py-3 text-white placeholder:text-[#8E9AA7]" placeholder="Phone Number" />
              </div>
              <input className="w-full rounded-2xl border border-[#2D3B4D] bg-[#18222F] px-4 py-3 text-white placeholder:text-[#8E9AA7]" placeholder="Email Address" />
              <input className="w-full rounded-2xl border border-[#2D3B4D] bg-[#18222F] px-4 py-3 text-white placeholder:text-[#8E9AA7]" placeholder="Project Type" />
              <textarea className="min-h-32 w-full rounded-2xl border border-[#2D3B4D] bg-[#18222F] px-4 py-3 text-white placeholder:text-[#8E9AA7]" placeholder="Describe your project" />
              <button className="rounded-full bg-[#F5A623] px-6 py-3 font-semibold text-[#0B1118]">Send Inquiry</button>
            </form>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-[#2D3B4D]">
          <iframe title="Shiva Fabrication Map" src="https://www.google.com/maps?q=425%20Neptune%20Tower%2C%20Ashram%20Road%2C%20Ahmedabad%20Gujarat&output=embed" className="h-80 w-full" loading="lazy" />
        </div>
      </section>
    </div>
  );
}
