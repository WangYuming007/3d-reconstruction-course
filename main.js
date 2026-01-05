(function () {
  // 自动目录（h2/h3）+ 轻量滚动高亮
  const toc = document.getElementById('toc');
  const heads = Array.from(document.querySelectorAll('article h2, article h3'));
  const map = new Map();
  if (toc && heads.length) {
    const frag = document.createDocumentFragment();
    heads.forEach(h => {
      const level = h.tagName.toLowerCase() === 'h3' ? 3 : 2;
      const id = h.id || h.textContent.trim().replace(/\s+/g, '-');
      h.id = id;
      const a = document.createElement('a');
      a.href = `#${id}`;
      a.textContent = h.textContent.trim();
      if (level === 3) a.classList.add('depth-3');
      frag.appendChild(a);
      map.set(id, a);
    });
    toc.innerHTML = '';
    toc.appendChild(frag);

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        const el = map.get(id);
        if (!el) return;
        if (entry.isIntersecting) {
          map.forEach(n => n.classList.remove('active'));
          el.classList.add('active');
        }
      });
    }, { rootMargin: '-72px 0px -70% 0px', threshold: [0, 1] });
    heads.forEach(h => io.observe(h));
  }
})();

