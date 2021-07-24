const ssAlertBoxes = function() {

    const boxes = document.querySelectorAll('.alert-box');

    boxes.forEach(function(box) {

        box.addEventListener('click', function(e){
            if (e.target.matches(".alert-box__close")) {
                e.stopPropagation();
                e.target.parentElement.classList.add("hideit");

                setTimeout(function() {
                    box.style.display = "none";
                }, 500)
            }    
        });

    })

}; 

export default ssAlertBoxes