const Figures = {};

// One shared rounded-square clip for app icons, wherever they appear on the page.
function iconClip(svg) {
    if (document.getElementById('icon-clip')) return 'url(#icon-clip)';
    const defs = Iso.el('defs', {}, svg);
    const clip = Iso.el('clipPath', { id: 'icon-clip', clipPathUnits: 'objectBoundingBox' }, defs);
    Iso.el('rect', { width: 1, height: 1, rx: .24 }, clip);
    return 'url(#icon-clip)';
}

// Grid of window panes on the two visible walls of a box; lit(i) decides which glow.
function windows(parent, x, y, z, w, d, h, lit = () => false, step = 9) {
    const { el, onLeft, onRight } = Iso;
    const walls = [[onLeft(x, y + d, z + h), w], [onRight(x + w, y + d, z + h), d]];
    let i = 0;
    walls.forEach(([transform, span]) => {
        const wall = el('g', { transform }, parent);
        for (let v = 6; v < h - 5; v += step)
            for (let u = 5; u + 4 <= span - 4; u += 8)
                el('rect', { x: u, y: v, width: 4, height: 4, class: lit(i++) ? 'win lit' : 'win' }, wall);
    });
}

Figures.farm = (svg, setStatus) => {
    const { el, box, pyramid, gable, point } = Iso;
    const g = el('g', {}, svg);
    const fly = el('g', {}, svg);
    const plots = [[160, 20], [20, 100], [95, 100], [170, 100], [20, 175], [95, 175], [170, 175]];
    const STAGES = ['sown', 'sprouting', 'growing', 'ready to harvest'];
    const HQ = [50, 45, 66];
    let stage = 0, season = 1, busy = false;

    function draw() {
        Iso.clear(g);
        box(g, 0, 0, 0, 250, 250, 8);
        box(g, 20, 20, 8, 60, 50, 30);
        windows(g, 20, 20, 8, 60, 50, 30, i => i % 3 === 0);
        gable(g, 18, 18, 38, 64, 54, 22);
        box(g, 100, 26, 8, 24, 24, 52);
        pyramid(g, 100, 26, 60, 24, 24, 14, 'acc');
        plots.forEach(([px, py]) => {
            box(g, px, py, 8, 62, 62, 2, 'soil');
            for (let r = 0; r < 4; r++) {
                const ry = py + 6 + r * 14;
                box(g, px + 4, ry, 10, 54, 8, 1, 'soil');
                if (stage) for (let c = 0; c < 5; c++) pyramid(g, px + 5 + c * 11, ry - .5, 11, 9, 9, stage * 6, 'acc');
            }
        });
    }

    function packets(t) {
        Iso.clear(fly);
        plots.forEach(([px, py], i) => {
            const k = Math.min(1, Math.max(0, t * 1.6 - i * .09));
            if (k <= 0 || k >= 1) return;
            const sx = px + 31, sy = py + 31, sz = 10 + stage * 5;
            const x = sx + (HQ[0] - sx) * k, y = sy + (HQ[1] - sy) * k;
            const z = sz + (HQ[2] - sz) * k + 50 * Math.sin(Math.PI * k);
            box(fly, x - 3, y - 3, z, 6, 6, 6, 'acc');
        });
        const [x1, y1] = point(HQ[0], HQ[1], HQ[2] + 10);
        el('circle', { cx: x1, cy: y1, r: 3 + 9 * t, class: 'ring', opacity: 1 - t }, fly);
    }

    draw();
    Iso.fit(svg, 12, 30);
    const status = () => setStatus(`season ${season} · ${STAGES[stage]}`);
    status();

    return async () => {
        if (busy) return;
        busy = true;
        stage = (stage + 1) % STAGES.length;
        if (stage === 0) season++;
        draw();
        setStatus('syncing field data…');
        await Iso.tween(1400, packets, t => t);
        Iso.clear(fly);
        status();
        busy = false;
    };
};

Figures.skyline = (svg, setStatus) => {
    const { el, box, onTop } = Iso;
    const clip = iconClip(svg);
    const data = [
        ['just-delete-me', 'Just Delete Me', 98], ['live-stream-simulator', 'Livestream Simulator', 50],
        ['social-profile-prank', 'Social Profile Prank', 50], ['quran-reels-maker', 'Quran Reels', 10],
        ['stretchy-v2', 'Stretchy', 7.5], ['mockly', 'Mockly', 1],
    ];
    const total = '217K+ installs';
    const spots = [[18, 18], [72, 18], [126, 18], [18, 72], [72, 72], [126, 72]];
    const S = 34;
    const towers = data.map(([slug, name, v], i) => ({
        icon: PROJECTS.find(p => p.slug === slug)?.icon, name, v,
        x: spots[i][0], y: spots[i][1], h: 16 + v * 1.25,
    }));
    const g = el('g', {}, svg);
    let k = 1, hover = -1, busy = false;

    function draw() {
        Iso.clear(g);
        box(g, 0, 0, 0, 178, 124, 6);
        const streets = el('g', { transform: onTop(0, 0, 6) }, g);
        [62, 116].forEach(u => el('line', { x1: u - 4, y1: 8, x2: u - 4, y2: 116, class: 'street' }, streets));
        el('line', { x1: 8, y1: 62 - 4, x2: 170, y2: 62 - 4, class: 'street' }, streets);
        [...towers.keys()].sort((a, b) => (towers[a].x + towers[a].y) - (towers[b].x + towers[b].y)).forEach(i => {
            const t = towers[i], h = Math.max(2, t.h * k);
            const tg = el('g', { 'data-i': i }, g);
            box(tg, t.x, t.y, 6, S, S, h, i === hover ? 'acc' : '');
            windows(tg, t.x, t.y, 6, S, S, h, n => (n * 7 + i * 3) % 5 === 0);
            if (t.icon) {
                const roof = el('g', { transform: onTop(t.x + 5, t.y + 5, 6 + h) }, tg);
                el('image', { href: t.icon, width: S - 10, height: S - 10, 'clip-path': clip, preserveAspectRatio: 'xMidYMid slice' }, roof);
            }
        });
    }

    svg.addEventListener('mousemove', e => {
        const hit = e.target.closest('[data-i]');
        const i = hit ? +hit.dataset.i : -1;
        if (i === hover) return;
        hover = i;
        setStatus(i < 0 ? total : `${towers[i].name} · ${towers[i].v}K`);
        if (!busy) draw();
    });
    svg.addEventListener('mouseleave', () => { hover = -1; setStatus(total); if (!busy) draw(); });

    draw();
    Iso.fit(svg, 12);
    setStatus(total);

    const grow = async () => {
        if (busy) return;
        busy = true;
        await Iso.tween(1300, t => { k = t; draw(); });
        busy = false;
    };
    new IntersectionObserver((entries, obs) => {
        if (entries[0].isIntersecting) { grow(); obs.disconnect(); }
    }, { threshold: .5 }).observe(svg);
    return grow;
};

Figures.phones = (svg, setStatus) => {
    const { el, box, onTop } = Iso;
    const apps = PROJECTS.filter(p => p.kind === 'mobile').slice(0, 20);
    const W = 128, D = 236, H = 12, SX = 6, SY = 8;
    const S = 20, BIG = 36, LIFT = 58;
    const slot = i => ({ u: 12 + (i % 4) * 25, v: 30 + Math.floor(i / 4) * 33 });

    const clip = iconClip(svg);
    const icon = (parent, href, x, y, extra = {}) =>
        el('image', { href, x, y, width: S, height: S, 'clip-path': clip, preserveAspectRatio: 'xMidYMid slice', ...extra }, parent);

    const phone = el('g', {}, svg);
    const tile = el('g', { class: 'tile' }, svg);
    let sel = Math.max(0, apps.findIndex(a => a.slug === 'just-delete-me'));
    let lift = LIFT, busy = false;

    function drawPhone() {
        Iso.clear(phone);
        box(phone, W, 52, 3, 2, 24, 6);
        box(phone, W, 84, 3, 2, 14, 6);
        box(phone, 0, 0, 0, W, D, H);
        const screen = el('g', { transform: onTop(SX, SY, H) }, phone);
        el('rect', { width: W - 12, height: D - 16, rx: 10, class: 'f glow' }, screen);
        el('rect', { x: 46, y: 6, width: 24, height: 7, rx: 3.5, class: 'notch' }, screen);
        el('text', { x: 11, y: 12.5, class: 'ink', 'font-size': 6.5, 'font-family': 'ui-monospace, monospace' }, screen).textContent = '9:41';
        el('rect', { x: 92, y: 8, width: 12, height: 5, rx: 1.5, class: 'mute' }, screen);
        apps.forEach((app, i) => {
            const { u, v } = slot(i);
            if (i === sel) {
                el('rect', { x: u, y: v, width: S, height: S, rx: 5, class: 'slot' }, screen);
                el('rect', { x: u + 1, y: v + 1, width: S, height: S, rx: 5, class: 'shadow', opacity: .55 * (1 - lift / (LIFT * 1.6)) }, screen);
            } else {
                icon(screen, app.icon, u, v, { 'data-i': i, class: 'app-icon' });
            }
            el('rect', { x: u + 3, y: v + 23, width: 14, height: 2, rx: 1, class: i === sel ? 'accent' : 'mute' }, screen);
        });
        [0, 1, 2].forEach(n => el('circle', { cx: 50 + n * 8, cy: 198, r: 1.6, class: n === 0 ? 'ink' : 'mute' }, screen));
        el('rect', { x: 40, y: 210, width: 36, height: 2.5, rx: 1.25, class: 'ink' }, screen);
    }

    function drawTile() {
        Iso.clear(tile);
        const { u, v } = slot(sel);
        const k = lift / LIFT, size = S + (BIG - S) * k;
        const cx = SX + u + S / 2, cy = SY + v + S / 2, z = H + lift;
        const [x1, y1] = Iso.point(cx, cy, H), [x2, y2] = Iso.point(cx, cy, z);
        el('line', { x1, y1, x2, y2, class: 'beam', opacity: k }, tile);
        const x = cx - size / 2, y = cy - size / 2;
        box(tile, x, y, z, size, size, 4);
        const face = el('g', { transform: onTop(x, y, z + 4) }, tile);
        icon(face, apps[sel].icon, 0, 0, { 'data-open': apps[sel].slug, width: size, height: size, class: 'open' });
    }

    const render = () => { drawPhone(); drawTile(); };
    const back = t => 1 + 2.2 * Math.pow(t - 1, 3) + 1.2 * Math.pow(t - 1, 2);

    async function select(i) {
        if (busy || i === sel) return;
        busy = true;
        await Iso.tween(180, t => { lift = LIFT * (1 - t); render(); });
        sel = i;
        setStatus(apps[sel].title);
        await Iso.tween(520, t => { lift = LIFT * t; render(); }, back);
        busy = false;
    }

    render();
    Iso.fit(svg, 12, 10);
    setStatus(apps[sel].title);

    return e => {
        const open = e?.target.closest?.('[data-open]');
        if (open) { location.href = `project.html?p=${open.dataset.open}`; return; }
        const hit = e?.target.closest?.('[data-i]');
        select(hit ? +hit.dataset.i : (sel + 1) % apps.length);
    };
};

Figures.town = (svg, setStatus) => {
    const { el, box, pyramid, gable, onTop, onLeft, point } = Iso;
    const g = el('g', {}, svg);
    const platforms = [[58, 128, 12], [108, 156, 26], [160, 122, 42]];
    const hero = { x: 0, y: 0, z: 0 };
    let at = 0, next = 1, coins = 0, puff = 0;

    const place = i => {
        const [x, y, h] = platforms[i];
        return { x: x + 7, y: y + 7, z: 8 + h };
    };

    const fir = (x, y) => () => {
        box(g, x + 9, y + 9, 8, 4, 4, 8);
        pyramid(g, x, y, 16, 22, 22, 24);
        pyramid(g, x + 3, y + 3, 30, 16, 16, 22);
    };

    const house = (x, y, w, d, h, roofCls) => () => {
        box(g, x, y, 8, w, d, h);
        windows(g, x, y, 8, w, d, h, i => i % 4 === 1);
        el('rect', { x: w / 2 - 4, y: -14, width: 8, height: 14, class: 'door' }, el('g', { transform: onLeft(x, y + d, 8) }, g));
        gable(g, x - 2, y - 2, 8 + h, w + 4, d + 4, 20, roofCls);
    };

    const flag = (x, y, z) => {
        box(g, x, y, z, 2, 2, 30);
        Iso.face(g, [[x + 1, y + 1, z + 30], [x + 1, y + 1, z + 20], [x - 13, y + 1, z + 25]], 'left acc');
    };

    function draw() {
        Iso.clear(g);
        box(g, 0, 0, 0, 220, 220, 8);
        const road = el('g', { transform: onTop(0, 82, 8) }, g);
        el('rect', { width: 220, height: 16, class: 'road' }, road);
        el('line', { x1: 4, y1: 8, x2: 216, y2: 8, class: 'lane' }, road);

        const items = [
            { key: 36, draw: house(16, 16, 50, 40, 26, '') },
            { key: 56, draw: house(96, 18, 34, 34, 44, 'acc') },
            { key: 170, draw: fir(150, 20) },
            { key: 172, draw: fir(184, 44) },
            { key: 168, draw: fir(14, 142) },
            { key: 196, draw: fir(26, 176) },
            ...platforms.map(([x, y, h], i) => ({
                key: x + y,
                draw: () => { box(g, x, y, 8, 28, 28, h); if (i === 2) flag(x + 22, y + 4, 8 + h); },
            })),
            { key: hero.x + hero.y + 1, draw: drawHero },
        ];
        if (next !== null) {
            const c = place(next);
            items.push({ key: c.x + c.y + 2, draw: () => drawCoin(c.x + 7, c.y + 7, c.z + 30) });
        }
        items.sort((a, b) => a.key - b.key).forEach(it => it.draw());
    }

    function drawHero() {
        box(g, hero.x, hero.y, hero.z, 14, 14, 14, 'acc');
        const eyes = el('g', { transform: onLeft(hero.x, hero.y + 14, hero.z + 14) }, g);
        el('rect', { x: 3, y: 4, width: 2.5, height: 3.5, class: 'eye' }, eyes);
        el('rect', { x: 8.5, y: 4, width: 2.5, height: 3.5, class: 'eye' }, eyes);
        if (puff > 0) {
            const ring = el('g', { transform: onTop(hero.x + 7, hero.y + 7, hero.z - 2) }, g);
            el('circle', { r: 6 + 18 * (1 - puff), class: 'ring', opacity: puff }, ring);
        }
    }

    function drawCoin(x, y, z) {
        const [cx, cy] = point(x, y, z);
        const bob = el('g', { class: 'bob' }, g);
        el('polygon', { points: `${cx},${cy - 8} ${cx + 5},${cy} ${cx},${cy + 8} ${cx - 5},${cy}`, class: 'coin' }, bob);
    }

    Object.assign(hero, place(0));
    draw();
    Iso.fit(svg, 12, 50);
    setStatus('Unity · Blender');

    let busy = false;
    return async () => {
        if (busy) return;
        busy = true;
        const from = place(at);
        at = (at + 1) % platforms.length;
        const to = place(at);
        await Iso.tween(950, t => {
            hero.x = from.x + (to.x - from.x) * t;
            hero.y = from.y + (to.y - from.y) * t;
            hero.z = from.z + (to.z - from.z) * t + 46 * Math.sin(Math.PI * t) + 14 * Math.abs(Math.sin(2 * Math.PI * t));
            puff = t > .45 && t < .85 ? 1 - (t - .45) / .4 : 0;
            draw();
        }, t => t);
        coins++;
        next = (at + 1) % platforms.length;
        puff = 0;
        draw();
        setStatus(`${coins} coin${coins > 1 ? 's' : ''} · double jump`);
        busy = false;
    };
};

document.querySelectorAll('svg[data-object]').forEach(svg => {
    const fig = svg.closest('.fig');
    const status = fig.querySelector('[data-status]');
    const setStatus = text => { if (status) status.textContent = text; };
    const onClick = Figures[svg.dataset.object](svg, setStatus);
    fig.addEventListener('click', e => { if (!e.target.closest('a')) onClick(e); });
    fig.tabIndex = 0;
    fig.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); }
    });
});
