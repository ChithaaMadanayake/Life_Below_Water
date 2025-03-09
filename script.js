let lastScrollTop = 0;
const headerContent = document.querySelector('.header-content');
const videoSection = document.querySelector('.video-background');
const tilesSection = document.querySelector('.interactive-tiles');

// Apply smooth transitions
videoSection.style.transition = 'opacity 0.5s ease-in-out';
headerContent.style.transition = 'opacity 0.5s ease-in-out';
tilesSection.style.transition = 'margin-top 0.5s ease-in-out';

window.addEventListener('scroll', function () {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    // Adjust opacity instead of fully hiding
    if (currentScroll > videoSection.offsetHeight) {
        videoSection.style.opacity = '0.3'; // Reduce opacity instead of hiding
        headerContent.style.opacity = '0';
    } else {
        videoSection.style.opacity = '1';
        headerContent.style.opacity = '1';
    }

    // Ensure tiles section smoothly moves up
    tilesSection.style.marginTop = currentScroll > videoSection.offsetHeight ? '0' : '100px';
});
