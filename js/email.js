// The address never appears in the HTML: it is XOR-ed with a key and base64-encoded, and only decoded on click.
const EMAIL_KEY = 'nz-dev';
const GLYPHS = '!<>/\\[]{}=+*^?#%&$01ABCDEFabcdef';

const decode = enc => [...atob(enc)]
    .map((c, i) => String.fromCharCode(c.charCodeAt(0) ^ EMAIL_KEY.charCodeAt(i % EMAIL_KEY.length)))
    .join('');

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

function decrypt(el, email) {
    return new Promise(resolve => {
        const lockAt = [...email].map((_, i) => 300 + i * 55 + Math.random() * 120);
        const start = performance.now();
        el.classList.add('decrypting');
        const frame = now => {
            const t = now - start;
            let html = '', done = true;
            for (let i = 0; i < email.length; i++) {
                if (t >= lockAt[i]) html += email[i];
                else { html += `<span class="glyph">${randomGlyph()}</span>`; done = false; }
            }
            el.innerHTML = html;
            if (!done) return requestAnimationFrame(frame);
            el.classList.remove('decrypting');
            resolve();
        };
        requestAnimationFrame(frame);
    });
}

document.querySelectorAll('[data-e]').forEach(el => {
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', 'Reveal email address');
    el.addEventListener('click', async e => {
        if (el.classList.contains('revealed')) return;
        e.preventDefault();
        if (el.classList.contains('decrypting')) return;
        const email = decode(el.dataset.e);
        if (!matchMedia('(prefers-reduced-motion: reduce)').matches) await decrypt(el, email);
        el.textContent = email;
        el.href = `mailto:${email}`;
        el.classList.add('revealed');
        el.removeAttribute('role');
        el.removeAttribute('aria-label');
    });
});
