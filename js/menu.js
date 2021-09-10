 function toggleMenu(){
            const menuToggle = document.querySelector('.header__toggleMenu');
            /* DIV NAVBAR */
            const navbar__menu = document.querySelector('.header__nav');
            menuToggle.classList.toggle('active');
            navbar__menu.classList.toggle('active');
        }