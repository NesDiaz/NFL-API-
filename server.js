// server.js
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON requests
app.use(express.json());

// Proxy route for your API
app.get('/api/nfl-team-info', async (req, res) => {
    const teamId = req.query.id; // Get the team ID from the query parameters

    const url = `https://nfl-api-data.p.rapidapi.com/nfl-team-info/v1/data?id=${teamId}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e32215217amshef4e1dc9816d23ap1253d0jsn59569ab58c79',
            'x-rapidapi-host': 'nfl-api-data.p.rapidapi.com'
        },
    };

    try {
        const response = await axios(url, options);
        res.json(response.data); // Forward the response data back to the client
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});
