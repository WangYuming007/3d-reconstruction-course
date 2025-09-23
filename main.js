(function () {
  // 默认使用深色主题

  // 自动目录生成
  const tocContainer = document.getElementById('toc');
  const headings = Array.from(document.querySelectorAll('article h2'));
  if (tocContainer && headings.length) {
    const frag = document.createDocumentFragment();
    headings.forEach(h => {
      const id = h.id || h.textContent.trim().replace(/\s+/g, '-');
      h.id = id;
      const a = document.createElement('a');
      a.href = `#${id}`;
      a.textContent = h.textContent;
      frag.appendChild(a);
    });
    tocContainer.appendChild(frag);
  }

  // 滚动高亮功能已删除
})();


