// target all the .accordion classes
let accordions = document.getElementsByClassName('accordion')

// create a for loop to add eventListener to all .accordion elements
for (const accordion of accordions) {
    accordion.addEventListener('click', function () {

        // target the sibling .panel of every .accordion
        let panel = this.nextElementSibling

        // if the panel is open, then the accordion will close on mouse click
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.marginBottom = null;
            this.classList.remove('open');
        }
        // if the panel is closed, then it will open on mouse click
        else {
            for (const acc of accordions) {
                acc.classList.remove('open')
                acc.nextElementSibling.style.maxHeight = null;
                acc.nextElementSibling.style.marginBottom = null;
            }
            panel.style.maxHeight = panel.scrollHeight + 'px';
            panel.style.marginBottom = '30px';
            this.classList.toggle('open');
        }
    })
}