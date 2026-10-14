const imageExtensions = [
    // Raster images
    ".png", ".jpg", ".jpeg", ".jfif", ".pjpeg", ".pjp",
    ".gif", ".webp", ".avif", ".apng", ".bmp", ".ico",
    ".cur", ".tif", ".tiff",

    // High-efficiency and modern formats
    ".heic", ".heif", ".jxl",

    // Other image formats supported by FFmpeg or Chromium
    ".svg", ".jp2", ".j2k", ".jpf", ".jpx",
    ".tga", ".dds", ".exr", ".hdr", ".pcx",
    ".ppm", ".pgm", ".pbm", ".pnm", ".pam",
    ".xbm", ".xpm", ".fits", ".dng", ".psd",
];

const videoExtensions = [
    // Common video containers
    ".mp4", ".m4v", ".webm", ".mov", ".avi",
    ".mkv", ".wmv", ".flv", ".f4v", ".mpeg",
    ".mpg", ".mpe", ".m2v", ".m2ts", ".mts",
    ".ts", ".vob", ".ogv", ".ogg", ".3gp",
    ".3g2", ".asf", ".rm", ".rmvb", ".divx",
    ".yuv", ".amv", ".mxf",

    // MPEG-4 and other containers
    ".mp4v", ".mpg4", ".m2p", ".m2t",
    ".m2ts", ".m2v", ".mpv", ".nut",

    // Mobile and streaming formats
    ".ismv", ".isma", ".f4p", ".f4a",
    ".hls", ".m3u8", ".mpd",

    // Animated image formats that may contain video-like content
    ".gif", ".apng", ".webp",
];

// Expose arrays to browser scripts (renderer.js).
if (typeof window !== "undefined") {
    window.imageExtensions = imageExtensions;
    window.videoExtensions = videoExtensions;
}

// Export arrays for Node.js (index.js).
if (typeof module !== "undefined" && module.exports) {
    module.exports = { imageExtensions, videoExtensions };
}