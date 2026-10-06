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
    const models = (p.models ?? []).map(uid => MODELS.find(m => m.uid === uid)).filter(Boolean);
    const clip = p.video
        ? `<button class="clip"><img src="${p.video.poster}" alt=""><span>▶ Play video</span></button>`
        : '';
    const picks = models.length > 1
        ? `<div class="tabs picks">${models.map(m => `<button data-uid="${m.uid}">${escape(m.title)}</button>`).join('')}</div>`
        : '';

    root.innerHTML = `
        <a class="back" href="projects.html#${p.kind}">← All projects</a>
        <div class="detail-head">
            <img src="${wide ? p.cover : p.icon}" alt="">
            <h1>${escape(p.title)}</h1>
        </div>
        <p class="detail-tagline">${escape(p.tagline)}</p>
        ${links ? `<p class="links">${links}</p>` : ''}
        ${models.length ? `<div class="viewer"><div class="stage"></div>${picks}</div>` : ''}
        <div class="screens${wide ? ' wide' : ''}">
            ${clip}
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

    // the YouTube player only loads once the poster is clicked
    if (p.video) root.querySelector('.clip').addEventListener('click', e => e.currentTarget.replaceWith(Viewer.youtube(p.video.id, p.title)));
    if (models.length) mountViewer(root.querySelector('.viewer'), models);
}

// the poster defers the heavy WebGL embed until asked; after that, picks swap models directly
function mountViewer(el, models) {
    const stage = el.querySelector('.stage');
    let live = false;
    const show = m => {
        if (live) {
            stage.replaceChildren(Viewer.frame(m.uid, m.title));
        } else {
            stage.innerHTML = `<button class="poster"><img src="${m.thumb}" alt=""><span>View ${escape(m.title)} in 3D</span></button>`;
            stage.firstChild.addEventListener('click', () => { live = true; show(m); });
        }
        el.querySelectorAll('[data-uid]').forEach(b => b.setAttribute('aria-pressed', b.dataset.uid === m.uid));
    };
    el.querySelectorAll('[data-uid]').forEach(b => b.addEventListener('click', () => show(models.find(m => m.uid === b.dataset.uid))));
    show(models[0]);
}
