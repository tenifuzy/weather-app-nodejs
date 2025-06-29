const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Weather endpoint - fetch weather for any city
app.get('/weather/:city', async (req, res) => {
  try {
    const city = req.params.city;
    if (!city) {
      return res.status(400).json({ error: 'City name is required' });
    }

    // Request weather data forcing English language
    const response = await axios.get(`https://wttr.in/${encodeURIComponent(city)}?format=j1&lang=en`);
    const data = response.data;

    if (!data || !data.current_condition || !data.current_condition[0]) {
      return res.status(404).json({ error: 'Weather data not found for the specified city' });
    }

    const current = data.current_condition[0];
    res.json({
      city: city,
      temperature: Math.round(current.temp_C),
      description: current.weatherDesc[0].value,
      humidity: current.humidity
    });
  } catch (error) {
    console.error(`Error fetching weather for city "${req.params.city}":`, error.message);
    res.status(500).json({ error: 'Failed to fetch weather data. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Weather app running on http://localhost:${PORT}`);
});