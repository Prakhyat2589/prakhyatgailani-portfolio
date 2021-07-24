/* Mobile Menu
    * ---------------------------------------------------- */ 
const ssMobileMenu = function() {
        
    const toggleButton = document.querySelector('.s-header__menu-toggle');
    const headerNavWrap = document.querySelector('.s-header__nav-wrap');
    const siteBody = document.querySelector("body");

    if (!(toggleButton && headerNavWrap)) return;

    toggleButton.addEventListener('click', function(event){
        event.preventDefault();
        toggleButton.classList.toggle('is-clicked');
        siteBody.classList.toggle('menu-is-open');
    });

    headerNavWrap.querySelectorAll('.s-header__nav a').forEach(function(link) {
        link.addEventListener("click", function(evt) {

            // at 800px and below
            if (window.matchMedia('(max-width: 800px)').matches) {
                toggleButton.classList.toggle('is-clicked');
                siteBody.classList.toggle('menu-is-open');
            }
        });
    });

    window.addEventListener('resize', function() {

        // above 800px
        if (window.matchMedia('(min-width: 801px)').matches) {
            if (siteBody.classList.contains('menu-is-open')) siteBody.classList.remove('menu-is-open');
            if (toggleButton.classList.contains("is-clicked")) toggleButton.classList.remove("is-clicked");
        }
    });

}; // end ssMobileMenu

export default ssMobileMenu