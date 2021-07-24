const ssPreloader = function() {

    const preloader = document.querySelector('#preloader');
    if (!preloader) return;

    window.addEventListener('load', function() {
        document.querySelector('body').classList.remove('ss-preload');
        document.querySelector('body').classList.add('ss-loaded');

        preloader.addEventListener('transitionend', function(e) {
            if (e.target.matches("#preloader")) {
                this.style.display = 'none';
            }
        });

    });

    // force page scroll position to top at page refresh
    window.addEventListener('beforeunload' , function () {
        window.scrollTo(0, 0);
    });
}; // end ssPreloader

export default ssPreloader