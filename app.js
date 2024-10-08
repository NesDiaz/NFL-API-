document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const teamSearchInput = document.getElementById('team-search');

    if (searchButton) {
        searchButton.addEventListener('click', async (event) => {
            event.preventDefault(); // Prevent form from submitting

            // Get the team ID from the input field and trim any extra spaces
            const teamId = teamSearchInput.value.trim();

            // Basic input validation
            if (!teamId) {
                alert("Please enter a valid team name or ID!");
                return;
            }

            // Additional validation (assuming teamId is an alphanumeric string)
            const validIdPattern = /^[a-zA-Z0-9\s]+$/; // Allow letters, numbers, and spaces
            if (!validIdPattern.test(teamId)) {
                alert("Team ID should only contain letters, numbers, or spaces.");
                return;
            }

            // Example length check (adjust based on your teamId format)
            if (teamId.length < 2 || teamId.length > 30) { // Adjust length as needed
                alert("Team ID must be between 2 and 30 characters.");
                return;
            }

            // If validation passes, proceed with the API call
            const url = `http://localhost:3000/api/nfl-team-info?id=${teamId}`;
            const options = {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache' // Ensure caching is disabled
                }
            };

            try {
                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const result = await response.json();

                // Store the fetched team data in localStorage
                localStorage.setItem('teamData', JSON.stringify(result));

                // Redirect to stats page
                window.location.href = 'stats.html';
            } catch (error) {
                console.error('Error fetching data:', error);
                alert('Failed to fetch team data. Please check the team ID or API key.');
            }
        });
    } else {
        console.error('Search button not found');
    }
});
async function fetchTeams() {
    const url = 'http://localhost:3000/api/nfl-teams'; // Adjust this to your actual API endpoint

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const teams = await response.json();
        const datalist = document.getElementById('teams');

        // Clear existing options
        datalist.innerHTML = '';

        teams.forEach(team => {
            const option = document.createElement('option');
            option.value = team.name; // Adjust based on your team object structure
            datalist.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching teams:', error);
    }
}

// Call the function to fetch teams when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    fetchTeams();

    const searchButton = document.getElementById('search-button');
    // Existing code for search button...
});
