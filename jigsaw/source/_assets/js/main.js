const buildMailtoUrl = (email, name, sender, message) => {
  const subject = encodeURIComponent('New enquiry from Interoke Digital website');
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${sender}\n\nMessage:\n${message}`
  );

  return `mailto:${email}?subject=${subject}&body=${body}`;
};

const bindNavbarToggle = () => {
  const toggler = document.querySelector('.navbar-toggler');
  const nav = document.getElementById('navbarSupportedContent');

  if (!toggler || !nav) {
    return;
  }

  toggler.addEventListener('click', () => {
    const isOpen = nav.classList.contains('show');
    nav.classList.toggle('show', !isOpen);
    toggler.classList.toggle('collapsed', isOpen);
    toggler.setAttribute('aria-expanded', String(!isOpen));
  });
};

const bindContactForm = () => {
  const form = document.getElementById('contact-form');
  const success = document.getElementById('contact-success');

  if (!form) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const message = String(formData.get('message') || '');
    const mailto = buildMailtoUrl(form.dataset.email, name, email, message);

    window.location.href = mailto;

    if (success) {
      success.classList.remove('d-none');
    }

    form.classList.add('d-none');
  });
};

document.addEventListener('DOMContentLoaded', () => {
  bindNavbarToggle();
  bindContactForm();
});
