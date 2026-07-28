/* Pivot Pharmacy — shared site behaviour */
/* Mobile menu (fixes audited site's reliance on desktop-only nav) */
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
if (burger && menu) {
  burger.addEventListener('click', () => menu.classList.toggle('open'));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
}

/* Contact form — client-side validation + mailto fallback.
   NOTE: a real backend (or form service such as Formspree) must replace this before launch.
   The audited live site faked success with setTimeout — this version never pretends to send. */
const form = document.querySelector('form[data-contact]');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const d = new FormData(form);
    const subject = encodeURIComponent(`[Pivot Pharmacy] ${d.get('topic') || 'Website enquiry'} — ${d.get('name')}`);
    const body = encodeURIComponent(
      `Name: ${d.get('name')}\nEmail: ${d.get('email')}\nPhone: ${d.get('phone') || '—'}\n\n${d.get('message')}\n\n— sent from pivotpharmacy.topservice.ng`
    );
    window.location.href = `mailto:info@pivotpharm.com?subject=${subject}&body=${body}`;
    const ok = form.querySelector('.ok');
    if (ok) ok.classList.add('show');
  });
}
