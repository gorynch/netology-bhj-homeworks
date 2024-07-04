function showBlock() {
    const blocks = document.querySelectorAll('.reveal');
    for (let i = 0; i < blocks.length; i++) {
        let rect = blocks[i].getBoundingClientRect();
        const isVisible = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
        if (isVisible) {
            blocks[i].classList.add('reveal_active');
        }
        else {
            blocks[i].classList.remove('reveal_active');
        }
    
    }
}
window.addEventListener("scroll", showBlock);