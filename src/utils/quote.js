export const QUOTE_SECTION_ID = 'quote-request';

export function scrollToQuoteForm() {
  if (typeof window === 'undefined') return;

  const section = document.getElementById(QUOTE_SECTION_ID);
  if (window.location.pathname !== '/' && !section) {
    window.location.assign('/#quote-request');
    return;
  }

  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
