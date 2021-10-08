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
