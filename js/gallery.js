const grid = document.getElementById('models');
const dialog = document.getElementById('viewer');
const stage = dialog.querySelector('.stage');
const heading = dialog.querySelector('h2');

const escape = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

grid.innerHTML = MODELS.map(m => `<button class="card wide" data-uid="${m.uid}">
    <img src="${m.thumb}" alt="" loading="lazy">
    <h3>${escape(m.title)}</h3>
</button>`).join('');

grid.addEventListener('click', e => {
    const m = MODELS.find(q => q.uid === e.target.closest('[data-uid]')?.dataset.uid);
    if (!m) return;
    heading.textContent = m.title;
    stage.replaceChildren(Viewer.frame(m.uid, m.title));
    dialog.showModal();
});

// dropping the iframe on close stops the WebGL viewer
dialog.addEventListener('close', () => stage.replaceChildren());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
dialog.querySelector('.close').addEventListener('click', () => dialog.close());
