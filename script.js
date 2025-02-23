let lastScrollTop = 0;
const headerContent = document.querySelector('.header-content');
const videoSection = document.querySelector('.video-background');
const tilesSection = document.querySelector('.interactive-tiles');

window.addEventListener('scroll', function () {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    // Hide video and header content after scrolling past the video section
    if (currentScroll > videoSection.offsetHeight) {
        videoSection.style.opacity = '0'; // Fade out video
        headerContent.style.opacity = '0'; // Fade out header content
    } else {
        // Show video and header content when you are at the top
        videoSection.style.opacity = '1';
        headerContent.style.opacity = '1';
    }

    // Ensure tiles section appears after scroll
    if (currentScroll > videoSection.offsetHeight) {
        tilesSection.style.marginTop = '0';  // Make sure tiles section appears after scroll
    } else {
        tilesSection.style.marginTop = '100px';  // Keep space for video section at top
    }
});
