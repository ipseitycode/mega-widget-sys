class VideoPlayerController {
    constructor(videoId, buttonId) {
        this.videoId = videoId;
        this.buttonId = buttonId;
        this.playing = false;
    }

    get video() {
        return document.getElementById(this.videoId);
    }

    get button() {
        return document.getElementById(this.buttonId);
    }

    toggle() {
        if (!this.video) return;
        this.playing ? this.pause() : this.play();
    }

    play() {
        this.video.style.display = 'block';
        this.video.play();
        this.video.classList.add('is-playing');
        this.playing = true;
        if (this.button) this.button.textContent = 'II';
    }

    pause() {
        this.video.pause();
        this.video.classList.remove('is-playing');
        this.playing = false;
        if (this.button) this.button.textContent = '▶';
    }

    obterStop() {
        if (!this.video) return;
        this.video.pause();
        this.video.currentTime = 0;
        this.video.style.display = 'none';
        this.video.classList.remove('is-playing');
        this.playing = false;
        if (this.button) this.button.textContent = '▶';
    }
}

let spVideoSmall, spVideoMedium, spVideoLarge;

function spVideoInit() {
    if (document.getElementById('video-small')) {
        spVideoSmall = new VideoPlayerController('video-small', 'btn-small');
    }
    if (document.getElementById('video-medium')) {
        spVideoMedium = new VideoPlayerController('video-medium', 'btn-medium');
    }
    if (document.getElementById('video-large')) {
        spVideoLarge = new VideoPlayerController('video-large', 'btn-large');
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', spVideoInit);
} else {
    spVideoInit();
}