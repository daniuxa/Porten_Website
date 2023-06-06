
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {

    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {

        animItems.forEach(item => {
            const animItemHeight = item.offsetHeight;
            const animItemOffset = offset(item).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight/animStart;
            if (animItemHeight >  window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight/animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight) ) {
                item.classList.add('_active');
            }
            else{

                if (!item.classList.contains('_anim-no-hide')) {
                    item.classList.remove('_active');
                }               
            }

        });

    }


    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop , left : rect.left + scrollLeft }
    } 


    setTimeout(() => {
        animOnScroll();
    }, 300);
   


}





