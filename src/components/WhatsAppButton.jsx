import { Link } from 'react-router-dom';
import { company } from '../data/content';
import { scrollToQuoteForm } from '../utils/quote';

const actions = [
  {
    label: 'Call Now',
    href: `tel:${company.phone}`,
    color: 'bg-emerald-600 hover:bg-emerald-500',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 4h3l2 4-2.5 1.5a15 15 0 0 0 6.5 6.5L14 12l4 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2h3Z" />
      </svg>
    ),
  },
  {
    label: 'Get Quote',
    href: '/contact',
    color: 'bg-[#F5A623] hover:bg-[#D98C00] text-[#0B1118]',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 3h10a2 2 0 0 1 2 2v14l-3-2-3 2-3-2-3 2V5a2 2 0 0 1 2-2Z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: `https://wa.me/${company.whatsappNumber}`,
    color: 'bg-[#25D366] hover:bg-[#1fb75a] text-white',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M17.6 6.4A8.3 8.3 0 0 0 12 3.5C7.2 3.5 3.4 7.3 3.4 12c0 1.5.4 2.9 1.2 4.2L3 21l4.8-1.2A8.7 8.7 0 0 0 12 20.5c4.8 0 8.6-3.8 8.6-8.6 0-2.3-.9-4.5-2.5-6.1ZM12 19.1a7.2 7.2 0 0 1-3.6-.9l-.3-.2-2.8.7.7-2.8-.2-.3A7.2 7.2 0 1 1 12 19.1Zm4.1-5.4c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.6.8-.1.1-.2.1-.4 0a5.8 5.8 0 0 1-1.7-1A6.4 6.4 0 0 1 9.4 10c-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.3.1-.1.1-.2.2-.3.1-.1.1-.2 0-.3-.1-.1-.4-.9-.6-1.2-.2-.3-.4-.2-.5-.2h-.4c-.1 0-.3 0-.5.1-.2.1-.6.6-.6 1.4 0 .8.6 1.6.7 1.7.1.1 1.2 1.8 2.9 2.5.4.2.7.3 1 .4.4.1.8.1 1 .1.3 0 .9-.4 1.1-.7.2-.3.2-.6.2-.7-.1-.2-.2-.3-.4-.4Z" />
      </svg>
    ),
  },
];

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-4">
      {actions.map((action) => {
        const content = (
          <span className={`flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold shadow-[0_10px_24px_rgba(0,0,0,0.24)] transition duration-200 hover:-translate-y-0.5 ${action.color}`}>
            {action.icon}
            <span>{action.label}</span>
          </span>
        );

        if (action.label === 'Get Quote') {
          return (
            <button key={action.label} type="button" onClick={scrollToQuoteForm} className="inline-flex">
              {content}
            </button>
          );
        }

        if (action.href.startsWith('/')) {
          return (
            <Link key={action.label} to={action.href} className="inline-flex">
              {content}
            </Link>
          );
        }

        return (
          <a key={action.label} href={action.href} target="_blank" rel="noreferrer" className="inline-flex">
            {content}
          </a>
        );
      })}
    </div>
  );
}
