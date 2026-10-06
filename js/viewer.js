window.Viewer = {
    frame(uid, title) {
        const f = document.createElement('iframe');
        f.src = `https://sketchfab.com/models/${uid}/embed?autostart=1&ui_theme=dark&dnt=1`;
        f.title = title;
        f.allow = 'autoplay; fullscreen; xr-spatial-tracking';
        f.allowFullscreen = true;
        return f;
    },
};
