
// GOAL POST ANIMATION 
window.addEventListener('load', function() {
    const goalPost = document.querySelector('.goal-post');
    goalPost.classList.add('animate');
});

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const playerWrapper = document.querySelector('.player-wrapper');
    const searchInput = document.querySelector('input[type="text"]');

   
    searchInput.addEventListener('focus', function() {
        
        playerWrapper.classList.add('move-player');
    });
});

// Mobile navigation 
window.onload = function () {
    const toggleMenu = () => {
      const menuBtn = document.querySelector('.hamburger');
      const mobileMenu = document.querySelector('.mobile-nav');
  
      menuBtn.classList.toggle('is-active');
      mobileMenu.classList.toggle('is-active');
  
      const icon = menuBtn.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    };
  
    document.querySelector('.hamburger').addEventListener('click', toggleMenu);
  };