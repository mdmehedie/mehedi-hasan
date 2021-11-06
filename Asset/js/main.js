// ================= MENU SHOW Y HIDDEN ======================
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close')

// ============= MENU SHOW =========
// validate if constant exit 
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// ============== MENU HIDDLE ============
// validate if constant exists
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

// ============ REMOVE MOBILE MENU ========================



// ============= ACCODING SKILLS =============
const skillsHeader = document.querySelectorAll('.skills_header');
const skillsContent = document.getElementsByClassName('skills_content');

function toggleSkills(){
    let itemClass = this.parentNode.className;
    console.log(skillsContent)
    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

// ============= Qualification Tab ==============
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active');

        tab.forEach(tab => {
            tab.classList.remove('qualification_active');
        })
        tab.classList.add('qualification_active')
    })
})


// ========== SERVICES MODAL ================
const modaViews = document.querySelectorAll('.services_modal');
const modalBtns = document.querySelectorAll('.services_button');
const modalCloses = document.querySelectorAll('.services_modal-close');

let modal = function(modalClick){
    modaViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i);
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modaViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        })
    })
})




// =========== SWIPER SLIDE ==========
let swiper = new Swiper(".portfolio_swiper", {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clicable: true,
    },
});



//   ============ TESTIMONIAL =============
let swiperTestimonial = new Swiper(".testimonialSwiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
      el: ".swiper-pagination",
      clicable: true,
      dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        },
    },
  });

//   =========== ACTIVE LINKS ============
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrolly = window.pageYOffset;

    sections.forEach(current =>{
        
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')
        
        if(scrolly > sectionTop && scrolly <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ===== Change Background Header ===============================
function scrollHeader(){
    const nav = document.getElementById('header');
    if(this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    }else{
        nav.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader);


//========= SCROLL UP ===========
function scrollUp(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560 ){
        scrollTop.classList.add('show-scroll');
    }else{
        scrollTop.classList.remove('show-scroll');
    } 
}
window.addEventListener('scroll',scrollUp);

// ================================= DARK LIGHT THEME =================
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const  iconTheme = 'uil-sun';

//Previously Selected Topuc (if user Selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//we obtain the current theme that the interface has by a;idateing the dark-theme class
const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = ()=> document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

//we validate if the user previously chose a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

//Active / deactive the theme manually with the button
themeButton.addEventListener('click', () =>{
    //Add or remove dark theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //we save the theme and current icon that user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



