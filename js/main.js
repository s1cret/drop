document.addEventListener('DOMContentLoaded', function() {
    // Переключение языка
    const languageBtns = document.querySelectorAll('.language-btn');
    const htmlEl = document.documentElement;
    
    languageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            htmlEl.setAttribute('lang', lang);
            
            // Обновление класса активной кнопки
            languageBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const menu = document.querySelector('.menu');
    
    menuToggle.addEventListener('click', function() {
        menu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    menuClose.addEventListener('click', function() {
        menu.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Добавление в корзину
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    
    let count = 0;
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            count++;
            cartCount.textContent = count;
            
            const originalText = this.textContent;
            
            // Анимация добавления в корзину
            if (htmlEl.getAttribute('lang') === 'uk') {
                this.textContent = 'Додано!';
            } else {
                this.textContent = 'Added!';
            }
            
            setTimeout(() => {
                this.textContent = originalText;
            }, 1000);
        });
    });
    
    // Избранное
    const favoriteButtons = document.querySelectorAll('.product-favorite');
    
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === '♡') {
                this.textContent = '♥';
                this.style.color = 'red';
            } else {
                this.textContent = '♡';
                this.style.color = '';
            }
        });
    });
});