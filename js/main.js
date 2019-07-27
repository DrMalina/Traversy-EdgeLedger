/* Sticky menu background */
window.addEventListener('scroll', ()=> {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

/* Smooth Scrolling */
$('#navbar a, .bnt').on('click', function (event){
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
            scrollTop: $(hash).offset().top - 100
            },
            800
            );
    }
});