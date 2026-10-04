const Iso = (() => {
    const NS = 'http://www.w3.org/2000/svg';
    const C = Math.cos(Math.PI / 6);

    const p = (x, y, z = 0) => [(x - y) * C, (x + y) * 0.5 - z];
    const pts = list => list.map(([x, y, z]) => p(x, y, z).map(n => n.toFixed(2)).join(',')).join(' ');

    function el(tag, attrs = {}, parent) {
        const e = document.createElementNS(NS, tag);
        for (const k in attrs) e.setAttribute(k, attrs[k]);
        if (parent) parent.appendChild(e);
        return e;
    }

    const face = (parent, corners, cls) => el('polygon', { points: pts(corners), class: 'f ' + cls }, parent);

    function box(parent, x, y, z, w, d, h, cls = '') {
        const g = el('g', {}, parent);
        const t = z + h;
        face(g, [[x + w, y, z], [x + w, y + d, z], [x + w, y + d, t], [x + w, y, t]], 'right ' + cls);
        face(g, [[x, y + d, z], [x + w, y + d, z], [x + w, y + d, t], [x, y + d, t]], 'left ' + cls);
        face(g, [[x, y, t], [x + w, y, t], [x + w, y + d, t], [x, y + d, t]], 'top ' + cls);
        return g;
    }

    function pyramid(parent, x, y, z, w, d, h, cls = '') {
        const g = el('g', {}, parent);
        const apex = [x + w / 2, y + d / 2, z + h];
        face(g, [[x + w, y, z], [x + w, y + d, z], apex], 'right ' + cls);
        face(g, [[x, y + d, z], [x + w, y + d, z], apex], 'left ' + cls);
        return g;
    }

    // Gable roof with its ridge running along x.
    function gable(parent, x, y, z, w, d, h, cls = '') {
        const g = el('g', {}, parent);
        const r = y + d / 2;
        face(g, [[x + w, y, z], [x + w, y + d, z], [x + w, r, z + h]], 'right ' + cls);
        face(g, [[x, y + d, z], [x + w, y + d, z], [x + w, r, z + h], [x, r, z + h]], 'top ' + cls);
        return g;
    }

    // Affine maps that lay a flat 2D drawing (u right, v down) onto a box face, origin at the face's top-left corner.
    const matrix = (a, b, c, d, [e, f]) => `matrix(${a} ${b} ${c} ${d} ${e.toFixed(2)} ${f.toFixed(2)})`;
    const onTop = (x, y, z) => matrix(C, .5, -C, .5, p(x, y, z));
    const onLeft = (x, y, z) => matrix(C, .5, 0, 1, p(x, y, z));
    const onRight = (x, y, z) => matrix(C, -.5, 0, 1, p(x, y, z));

    function fit(svg, pad = 12, extraTop = 0) {
        const b = svg.getBBox();
        svg.setAttribute('viewBox', `${b.x - pad} ${b.y - pad - extraTop} ${b.width + pad * 2} ${b.height + pad * 2 + extraTop}`);
    }

    const ease = t => 1 - Math.pow(1 - t, 3);

    function tween(ms, onFrame, easing = ease) {
        return new Promise(resolve => {
            const start = performance.now();
            const step = now => {
                const t = Math.min(1, (now - start) / ms);
                onFrame(easing(t));
                if (t < 1) requestAnimationFrame(step); else resolve();
            };
            requestAnimationFrame(step);
        });
    }

    const clear = g => { while (g.firstChild) g.removeChild(g.firstChild); };

    return { point: p, el, face, box, pyramid, gable, onTop, onLeft, onRight, fit, tween, clear };
})();
