
/* Highlight active menu link on pagescroll
    * ------------------------------------------------------ */
const ssScrollSpy = function() {

    const sections = document.querySelectorAll(".target-section");

    // Add an event listener listening for scroll
    window.addEventListener("scroll", navHighlight);

    function navHighlight() {
    
        // Get current scroll position
        let scrollY = window.pageYOffset;
    
        // Loop through sections to get height(including padding and border), 
        // top and ID values for each
        sections.forEach(function(current) {
            const sectionHeight = current.offsetHeight;
            let sectionTop = current.offsetTop - 100;
            if (window.matchMedia('(max-width: 800px)').matches) {
                sectionTop = current.offsetTop - 10;
            }
            const sectionId = current.getAttribute("id");
        
           /* If our current scroll position enters the space where current section 
            * on screen is, add .current class to parent element(li) of the thecorresponding 
            * navigation link, else remove it. To know which link is active, we use 
            * sectionId variable we are getting while looping through sections as 
            * an selector
            */
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(".s-header__nav a[href*=" + sectionId + "]").parentNode.classList.add("current");
            } else {
                document.querySelector(".s-header__nav a[href*=" + sectionId + "]").parentNode.classList.remove("current");
            }
        });
    }

}; // end ssScrollSpy


export default ssScrollSpy