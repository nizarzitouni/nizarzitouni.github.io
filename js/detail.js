const root = document.getElementById('project');
const escape = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

const slug = new URLSearchParams(location.search).get('p');
const index = PROJECTS.findIndex(p => p.slug === slug);
const p = PROJECTS[index];

const LINKS = [['playStore', 'Google Play'], ['appStore', 'App Store'], ['live', 'Live'], ['github', 'GitHub'], ['behance', 'Behance']];
const external = (url, label) => `<a href="${escape(url)}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;

if (!p) {
    root.innerHTML = `<a class="back" href="projects.html">← All projects</a><h1 style="margin-top:40px">Not found</h1><p>No project called "${escape(slug)}".</p>`;
} else {
    document.title = `${p.title} · Nizar Zitouni`;
    const siblings = PROJECTS.filter(q => q.kind === p.kind);
    const i = siblings.indexOf(p);
    const prev = siblings[(i - 1 + siblings.length) % siblings.length];
    const next = siblings[(i + 1) % siblings.length];
    const links = LINKS.filter(([k]) => p[k]).map(([k, label]) => external(p[k], label)).join('');
    const wide = p.kind === '3d';

    root.innerHTML = `
        <a class="back" href="projects.html#${p.kind}">← All projects</a>
        <div class="detail-head">
            <img src="${wide ? p.cover : p.icon}" alt="">
            <h1>${escape(p.title)}</h1>
        </div>
        <p class="detail-tagline">${escape(p.tagline)}</p>
        ${links ? `<p class="links">${links}</p>` : ''}
        <div class="screens${wide ? ' wide' : ''}">
            ${p.screens.map((s, n) => `<img src="${s}" alt="${escape(p.title)} screenshot ${n + 1}" loading="lazy">`).join('')}
        </div>
        <div class="detail-body">
            <div>
                <p class="eyebrow">About</p>
                <p class="desc">${escape(p.description.trim())}</p>
            </div>
            <div class="side">
                <div><p class="eyebrow">Role</p><p>${escape(p.role)}</p></div>
                <div><p class="eyebrow">Stack</p><div class="chips">${p.tech.map(t => `<span>${escape(t)}</span>`).join('')}</div></div>
            </div>
        </div>
        <div class="pager">
            <a href="project.html?p=${prev.slug}">← ${escape(prev.title)}</a>
            <a href="project.html?p=${next.slug}">${escape(next.title)} →</a>
        </div>`;
}
