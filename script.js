const slides = document.querySelectorAll('.slide')

for(const i of slides){
    i.addEventListener('click', () => {
        clear()
        i.classList.add('active')
    })
}
function clear() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}