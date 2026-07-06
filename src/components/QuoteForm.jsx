import { AnimatePresence, motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { company } from '../data/content';
import { QUOTE_SECTION_ID } from '../utils/quote';

const projectTypes = [
  'Industrial Shed',
  'Warehouse',
  'PEB Structure',
  'Factory Shed',
  'Structural Steel',
  'Mezzanine Floor',
  'Roofing',
  'Custom Fabrication',
];

const initialState = {
  companyName: '',
  contactPerson: '',
  mobile: '',
  email: '',
  projectLocation: '',
  projectType: projectTypes[0],
  area: '',
  budget: '',
  projectDescription: '',
  contactMethod: 'Phone',
  drawingFileName: '',
};

export default function QuoteForm() {
  const [formData, setFormData] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    setFormData((prev) => ({ ...prev, drawingFileName: file ? file.name : '' }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requiredFields = [
      formData.companyName,
      formData.contactPerson,
      formData.mobile,
      formData.email,
      formData.projectLocation,
      formData.projectType,
      formData.projectDescription,
    ];

    if (requiredFields.some((field) => !field.trim())) {
      setStatus({ type: 'error', message: 'Please complete all required fields before submitting.' });
      return;
    }

    const phonePattern = /^[0-9+\-\s]{7,15}$/;
    if (!phonePattern.test(formData.mobile)) {
      setStatus({ type: 'error', message: 'Please enter a valid mobile number.' });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'idle', message: '' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setIsSubmitting(false);
      setStatus({ type: 'error', message: 'Quote submission is not configured yet. Please contact us directly at ' + company.email + '.' });
      return;
    }

    const templateParams = {
      from_name: formData.contactPerson,
      company_name: formData.companyName,
      contact_person: formData.contactPerson,
      mobile_number: formData.mobile,
      email_address: formData.email,
      project_location: formData.projectLocation,
      project_type: formData.projectType,
      approximate_area: formData.area || 'Not specified',
      estimated_budget: formData.budget || 'Not specified',
      project_description: formData.projectDescription,
      drawing_upload: formData.drawingFileName || 'Not provided',
      preferred_contact_method: formData.contactMethod,
      to_email: company.email,
      reply_to: formData.email,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setStatus({ type: 'success', message: 'Thank you. Our team will contact you shortly.' });
      setFormData(initialState);
      setSelectedFile(null);
    } catch (error) {
      setStatus({ type: 'error', message: 'We could not submit your request right now. Please try again or call us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={QUOTE_SECTION_ID} className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-[2rem] border border-[#2D3B4D] bg-[#121A24] p-8 shadow-[0_24px_80px_rgba(6,19,26,0.2)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F5A623]">Quote Request</p>
          <h2 className="mt-3 text-3xl font-semibold text-white">Request a tailored industrial quotation.</h2>
          <p className="mt-4 text-lg leading-8 text-[#AEB8C5]">Share a few project details and our team will respond with a preliminary estimate for your fabrication or structural steel requirement.</p>
          <div className="mt-6 rounded-2xl border border-[#2D3B4D] bg-[#18222F] p-5 text-sm text-[#AEB8C5]">
            <p className="font-semibold text-white">Need a faster response?</p>
            <p className="mt-2">Call {company.phone} or reach us at {company.email}.</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-[1.5rem] border border-[#2D3B4D] bg-[#0B1118]/80 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <input required name="companyName" value={formData.companyName} onChange={handleChange} className="rounded-2xl border border-[#2D3B4D] bg-[#18222F] px-4 py-3 text-white placeholder:text-[#8E9AA7]" placeholder="Company Name" />
            <input required name="contactPerson" value={formData.contactPerson} onChange={handleChange} className="rounded-2xl border border-[#2D3B4D] bg-[#18222F] px-4 py-3 text-white placeholder:text-[#8E9AA7]" placeholder="Contact Person" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input required name="mobile" value={formData.mobile} onChange={handleChange} className="rounded-2xl border border-[#2D3B4D] bg-[#18222F] px-4 py-3 text-white placeholder:text-[#8E9AA7]" placeholder="Mobile Number" />
            <input required type="email" name="email" value={formData.email} onChange={handleChange} className="rounded-2xl border border-[#2D3B4D] bg-[#18222F] px-4 py-3 text-white placeholder:text-[#8E9AA7]" placeholder="Email Address" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input required name="projectLocation" value={formData.projectLocation} onChange={handleChange} className="rounded-2xl border border-[#2D3B4D] bg-[#18222F] px-4 py-3 text-white placeholder:text-[#8E9AA7]" placeholder="Project Location" />
            <select required name="projectType" value={formData.projectType} onChange={handleChange} className="rounded-2xl border border-[#2D3B4D] bg-[#18222F] px-4 py-3 text-white">
              {projectTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <input name="area" value={formData.area} onChange={handleChange} className="rounded-2xl border border-[#2D3B4D] bg-[#18222F] px-4 py-3 text-white placeholder:text-[#8E9AA7]" placeholder="Approximate Area (sq ft)" />
            <input name="budget" value={formData.budget} onChange={handleChange} className="rounded-2xl border border-[#2D3B4D] bg-[#18222F] px-4 py-3 text-white placeholder:text-[#8E9AA7]" placeholder="Estimated Budget" />
          </div>
          <textarea required name="projectDescription" value={formData.projectDescription} onChange={handleChange} rows="4" className="min-h-32 w-full rounded-2xl border border-[#2D3B4D] bg-[#18222F] px-4 py-3 text-white placeholder:text-[#8E9AA7]" placeholder="Project Description" />
          <div className="grid gap-4 md:grid-cols-2">
            <label className="rounded-2xl border border-dashed border-[#2D3B4D] bg-[#18222F] px-4 py-3 text-sm text-[#AEB8C5]">
              <span className="mb-1 block font-semibold text-white">Upload Drawing (Optional)</span>
              <input type="file" accept=".pdf,.jpg,.jpeg,.png,.dwg,.dxf" onChange={handleFileChange} className="mt-1 text-sm text-[#8E9AA7]" />
              {selectedFile && <span className="mt-2 block text-xs text-[#F5A623]">Selected: {selectedFile.name}</span>}
            </label>
            <select name="contactMethod" value={formData.contactMethod} onChange={handleChange} className="rounded-2xl border border-[#2D3B4D] bg-[#18222F] px-4 py-3 text-white">
              <option>Phone</option>
              <option>WhatsApp</option>
              <option>Email</option>
            </select>
          </div>
          <motion.button
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-[#F5A623] px-6 py-3 text-base font-semibold text-[#0B1118] transition hover:bg-[#D98C00] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Submitting…' : 'Request Free Quote'}
          </motion.button>
          <AnimatePresence mode="wait">
            {status.message && (
              <motion.p
                key={status.message}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className={`rounded-2xl px-4 py-3 text-sm ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                {status.message}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}
