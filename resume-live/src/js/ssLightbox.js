const basicLightbox = require('basiclightbox')

const ssLightbox = function() {

    const folioLinks = document.querySelectorAll('.folio-item a');
    const modals = [];

    folioLinks.forEach(function(link) {
        let modalbox = link.getAttribute('href');
        let instance = basicLightbox.create(
            document.querySelector(modalbox),
            {
                onShow: function(instance) {
                    //detect Escape key press
                    document.addEventListener("keydown", function(evt) {
                        evt = evt || window.event;
                        if(evt.keyCode === 27){
                        instance.close();
                        }
                    });
                }
            }
        )
        modals.push(instance);
    });

    folioLinks.forEach(function(link, index) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            modals[index].show();
        });
    });

};  // end ssLightbox

export default ssLightbox