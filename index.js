// NFL Player Detail by Player ID

// GET /nfl-player-info/v1/data?id=4360644 HTTP/1.1
// X-Rapidapi-Key: e32215217amshef4e1dc9816d23ap1253d0jsn59569ab58c79
// X-Rapidapi-Host: nfl-api-data.p.rapidapi.com
// Host: nfl-api-data.p.rapidapi.com

// const url = 'https://nfl-api-data.p.rapidapi.com/nfl-player-info/v1/data?id=4360644';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': 'e32215217amshef4e1dc9816d23ap1253d0jsn59569ab58c79',
// 		'x-rapidapi-host': 'nfl-api-data.p.rapidapi.com'
// 	}
// };

// // Wrap the fetch request in an async function
// async function fetchPlayerData() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();  // You can also use .json() if the API returns JSON
//         console.log(result);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

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