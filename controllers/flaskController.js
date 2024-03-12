const express = require('express');
const axios = require('axios');
const router = express.Router();

// Environment variable or hardcoded URL of your Flask app
const flaskAppUrl = process.env.FLASK_APP_URL || 'https://your-flask-app.onrender.com';

router.post('/ask', async (req, res) => {
    try {
        // Forward the request to the Flask app
        const response = await axios.post(`${flaskAppUrl}/ask`, req.body);
        
        // Send the response back to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error forwarding request to Flask app:', error);
        res.status(500).send('Failed to forward request to Flask app.');
    }
});

module.exports = router;
