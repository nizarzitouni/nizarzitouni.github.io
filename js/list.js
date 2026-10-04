const grid = document.getElementById('grid');
const buttons = document.querySelectorAll('[data-filter]');

const escape = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

function where(p) {
    if (p.playStore && p.appStore) return 'Android · iOS';
    if (p.playStore) return 'Android';
    if (p.appStore) return 'iOS';
    if (p.github) return 'GitHub';
    return p.tech.slice(0, 2).join(' · ');
}

function card(p) {
    const wide = p.kind === '3d';
    return `<a class="card${wide ? ' wide' : ''}" href="project.html?p=${p.slug}">
        <img src="${wide ? p.cover : p.icon}" alt="" loading="lazy">
        <h3>${escape(p.title)}</h3>
        <p>${escape(p.tagline)}</p>
        <span class="meta">${escape(where(p))}</span>
    </a>`;
}

function render(filter) {
    const list = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.kind === filter);
    grid.innerHTML = list.map(card).join('');
    buttons.forEach(b => b.setAttribute('aria-pressed', b.dataset.filter === filter));
}

const fromHash = () => (['mobile', '3d'].includes(location.hash.slice(1)) ? location.hash.slice(1) : 'all');

buttons.forEach(b => b.addEventListener('click', () => {
    history.replaceState(null, '', b.dataset.filter === 'all' ? location.pathname : '#' + b.dataset.filter);
    render(b.dataset.filter);
}));
window.addEventListener('hashchange', () => render(fromHash()));
render(fromHash());
