async function fetchTeamList() {
	const url = 'https://nfl-api-data.p.rapidapi.com/nfl-team-listing/v1/data';
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'e32215217amshef4e1dc9816d23ap1253d0jsn59569ab58c79',
			'x-rapidapi-host': 'nfl-api-data.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		const result = await response.json();
		console.log(result);
	} catch (error) {
		console.error('Error fetching team list:', error);
	}
}

// Call the async function
fetchTeamList();
