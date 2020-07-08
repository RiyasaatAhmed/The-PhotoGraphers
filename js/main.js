//preloader
const preloader = document.querySelector('.spinner');
const nav = document.querySelector('#nav');


window.addEventListener('load', () => {
    preloader.remove();
    nav.style.display = 'block';

});


// menu

const burger = document.querySelector('.burger');
const menu = document.querySelector('header .menu');
const cross = document.querySelector('.cross');

burger.addEventListener( 'click', () =>{
    menu.classList.add('menu-toggle');
    
});

cross.addEventListener('click', () =>{
    menu.classList.remove('menu-toggle');

});

// Lazy Loading
const lazyLaoding = document.querySelectorAll('.lazy-loading-before');
options = {rootMargin: "-100px 0px 0px 0px"};
const LazyLoadingObserver = new IntersectionObserver((entries, LazyLoadingObserver) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting)
        {

            entry.target.classList.add('lazy-loading-after');
            LazyLoadingObserver.unobserve(entry.target);
        }
    });
},options);

lazyLaoding.forEach(lazy => {
    LazyLoadingObserver.observe(lazy);
});


// Hover Effect

const work = document.querySelectorAll('.work');
const displaySize1100 = window.matchMedia( "(max-width: 1100px)" );

    work.forEach((w, key) => {

        w.addEventListener('mouseenter', () => {

            w.children[0].style.transition = "all 1s";
            w.children[0].style.opacity = "0.5";

            w.children[1].style.transition = "all 1s";
            w.children[1].style.transform = "translateY(0%)";

            w.children[2].style.transition = "all 1s";
            w.children[2].style.transform = "scale(1.1)";
            if(key === 2 || key == 3)
            {
                w.children[3].style.transition = "all 1s";
                w.children[3].style.transform = "translateY(50%)";

            } 
            else if (key == 1 || key == 5)
            {
                w.children[3].style.transition = "all 1s";
                w.children[3].style.transform = "translateY(-70%)";
            }
            else
            {
                w.children[3].style.transition = "all 1s";
                w.children[3].style.transform = "translateY(0%)";
            }
            
            
        });
        w.addEventListener('mouseleave', () => {
            w.children[0].style.transition = "all 1s";
            w.children[0].style.opacity = "0";

            w.children[1].style.transition = "all 1s";
            w.children[1].style.transform = "translateY(-250%)";

            w.children[2].style.transition = "all 1s";
            w.children[2].style.transform = "scale(1)";
            
            w.children[3].style.transition = "all 1s";
            w.children[3].style.transform = "translateY(250%)";
               
        });
    });


    // Slidder
    const dots = document.querySelector('.dots');
    const icons = document.querySelectorAll('.clients-icons i');

        dots.children[0].addEventListener('click', () =>{

            for(let i = 0; i < 4; i++)
            {
                if(i === 0)
                {
                    dots.children[i].classList.add('current');
                }
                else
                {
                    dots.children[i].classList.remove('current');
                }
            }
            icons.forEach(icon =>{
                icon.style.transform = "translateX(-15%)";
            });
        });
        dots.children[1].addEventListener('click', () =>{
            
            for(let i = 0; i < 4; i++)
            {
                if(i === 1)
                {
                    dots.children[i].classList.add('current');
                }
                else
                {
                    dots.children[i].classList.remove('current');
                }
            }
            icons.forEach(icon =>{
                icon.style.transform = "translateX(-178%)";
            });
        });
        dots.children[2].addEventListener('click', () =>{
            for(let i = 0; i < 4; i++)
            {
                if(i === 2)
                {
                    dots.children[i].classList.add('current');
                }
                else
                {
                    dots.children[i].classList.remove('current');
                }
            }
            icons.forEach(icon =>{
                icon.style.transform = "translateX(-356%)";
            });
        });
        dots.children[3].addEventListener('click', () =>{
            for(let i = 0; i < 4; i++)
            {
                if(i === 3)
                {
                    dots.children[i].classList.add('current');
                }
                else
                {
                    dots.children[i].classList.remove('current');
                }
            }
            icons.forEach(icon =>{
                icon.style.transform = "translateX(-534%)";
            });
        });

    // Feedback Slider
    const leftArrow = document.querySelector('.fa-long-arrow-alt-left');
    const rightArrow = document.querySelector('.fa-long-arrow-alt-right');
    const Feedbacks = document.querySelectorAll('.feedback');
    let feedBackValue = 0;
    rightArrow.addEventListener('click', () =>{

        feedBackValue += 100;
        console.log(feedBackValue, "right");
        if(feedBackValue >= 200)
        {
            rightArrow.classList.add("fa-times-circle");
            rightArrow.classList.remove("fa-long-arrow-alt-left");
            feedBackValue = 200;
        }
        else
        {
            rightArrow.classList.add("fa-long-arrow-alt-left");
            rightArrow.classList.remove("fa-times-circle");
            leftArrow.classList.add("fa-long-arrow-alt-left");
            leftArrow.classList.remove("fa-times-circle");
        }
        Feedbacks.forEach(Feedback => {
            Feedback.style.transform = "translateX(-" + feedBackValue + "%)";
        });
    });

   leftArrow .addEventListener('click', () =>{

        feedBackValue -= 100;
        console.log(feedBackValue);
        if(feedBackValue <= 0 )
        {
            leftArrow.classList.add("fa-times-circle");
            leftArrow.classList.remove("fa-long-arrow-alt-left");
            feedBackValue = 0;
        }
        else 
        {
            leftArrow.classList.add("fa-long-arrow-alt-left");
            leftArrow.classList.remove("fa-times-circle");
            rightArrow.classList.add("fa-long-arrow-alt-left");
            rightArrow.classList.remove("fa-times-circle");
        }
        Feedbacks.forEach(Feedback => {
            Feedback.style.transform = "translateX(-" + feedBackValue + "%)";
        });
    });