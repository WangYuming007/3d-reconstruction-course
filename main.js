(function () {
  document.body.classList.add('has-js');

  const tocContainer = document.getElementById('toc');
  const headings = Array.from(document.querySelectorAll('article h2'));
  const tocLinks = new Map();

  if (tocContainer && headings.length) {
    const frag = document.createDocumentFragment();
    headings.forEach((heading) => {
      const id = heading.id || heading.textContent.trim().replace(/\s+/g, '-');
      heading.id = id;
      const link = document.createElement('a');
      link.href = `#${id}`;
      link.textContent = heading.textContent;
      frag.appendChild(link);
      tocLinks.set(id, link);
    });
    tocContainer.appendChild(frag);
  }

  const sections = Array.from(document.querySelectorAll('article section'));
  if ('IntersectionObserver' in window && sections.length) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    sections.forEach((section, index) => {
      section.style.setProperty('--reveal-delay', `${index * 60}ms`);
      revealObserver.observe(section);
    });
  } else {
    sections.forEach((section) => section.classList.add('is-visible'));
  }

  const updateActive = () => {
    if (!headings.length || !tocLinks.size) {
      return;
    }

    const offset = 140;
    const scrollPos = window.scrollY + offset;
    let currentId = headings[0].id;

    headings.forEach((heading) => {
      if (heading.offsetTop <= scrollPos) {
        currentId = heading.id;
      }
    });

    tocLinks.forEach((link, id) => {
      link.classList.toggle('is-active', id === currentId);
    });
  };

  window.addEventListener('scroll', updateActive, { passive: true });
  window.addEventListener('resize', updateActive);
  window.addEventListener('load', updateActive);
  updateActive();
})();


