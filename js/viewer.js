window.Viewer = {
    frame(uid, title) {
        const f = document.createElement('iframe');
        f.src = `https://sketchfab.com/models/${uid}/embed?autostart=1&ui_theme=dark&dnt=1`;
        f.title = title;
        f.allow = 'autoplay; fullscreen; xr-spatial-tracking';
        f.allowFullscreen = true;
        return f;
    },
    youtube(id, title) {
        const f = document.createElement('iframe');
        f.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0`;
        f.title = title;
        f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
        f.allowFullscreen = true;
        f.className = 'clip';
        // YouTube refuses embeds that arrive without a referrer (player error 153)
        f.referrerPolicy = 'strict-origin-when-cross-origin';
        return f;
    },
};
