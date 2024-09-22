document.getElementById('search-button').addEventListener('click', async () => {
    const teamId = document.getElementById('team-search').value; 
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
        console.error(error);
    }
});

document.addEventListener('DOMContentLoaded', () => {
   
    const storedData = localStorage.getItem('teamData');

    if (storedData) {
        const teamData = JSON.parse(storedData);
        displayTeamStats(teamData); 
    } else {
        console.error('No team data found in localStorage.');
    }
});

function displayTeamStats(data) {
    const resultsDiv = document.getElementById('results');
    
 
    const team = data.team;
    const coach = data.coach[0]; 
    const season = data.season;


    resultsDiv.innerHTML = `
        <h3>Team Info</h3>
        <p><strong>Team Name:</strong> ${team.displayName}</p>
        <p><strong>Location:</strong> ${team.location}</p>
        <p><strong>Abbreviation:</strong> ${team.abbreviation}</p>
        <p><strong>Standing Summary:</strong> ${team.standingSummary}</p>
        <p><strong>Record Summary:</strong> ${team.recordSummary}</p>
        <p><strong>Coach:</strong> ${coach.firstName} ${coach.lastName}, Experience: ${coach.experience} year(s)</p>
        <p><strong>Season Year:</strong> ${season.year}</p>
        <p><strong>Season Name:</strong> ${season.displayName}</p>

        <h3>Team Logo:</h3>
        <img src="${team.logo}" alt="${team.displayName} Logo" style="width:150px;">
        
        <a href="${team.clubhouse}" target="_blank">Visit Clubhouse</a>
    `;
}
