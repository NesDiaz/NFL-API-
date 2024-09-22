document.addEventListener("DOMContentLoaded", function() {
    // Goal Post Animation
    const goalPost = document.querySelector('.goal-post');
    if (goalPost) {
        goalPost.classList.add('animate');
    }

    // Player Animation on Search Input Focus
    const playerWrapper = document.querySelector('.player-wrapper');
    const searchInput = document.querySelector('input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            playerWrapper.classList.add('move-player');
        });
    }

    // Mobile Navigation Toggle
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

   
    const mobileLinks = document.querySelectorAll('.mobile-Links .nav__link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('.mobile-nav').classList.remove('is-active');
            document.querySelector('.hamburger').classList.remove('is-active');
            const icon = document.querySelector('.hamburger i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        });
    });
});


// Team DATA
document.getElementById('search-button').addEventListener('click', async (event) => {
    event.preventDefault(); 
    const teamId = document.getElementById('team-search').value.trim();
    
    if (!teamId) {
        alert("Please enter a valid team name!");
        return;
    }

    const url = `https://nfl-api-data.p.rapidapi.com/nfl-team-info/v1/data?id=${teamId}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '121c0d8ffcmshb186777b6367027p15942djsnd8fcc53421a9', 
            'x-rapidapi-host': 'nfl-api-data.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        localStorage.setItem('teamData', JSON.stringify(result));

    
        window.location.href = 'stats.html';
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch team data. Please check the team ID or API key.');
    }
});

