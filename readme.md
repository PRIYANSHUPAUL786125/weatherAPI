# 🌦️ Weather API with Node.js, Express & OpenWeatherMap

This is a simple Weather API built using Node.js, Express, and the OpenWeatherMap API. It allows users to get current weather data for any city.

---

## 📦 Features

- Get real-time weather data (temperature, description, humidity, wind speed)
- Use city name as query parameter
- Handles errors gracefully
- Uses `.env` file to secure API key

---

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Axios](https://axios-http.com/)
- [OpenWeatherMap API](https://openweathermap.org/api)
- [dotenv](https://www.npmjs.com/package/dotenv)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/weatherAPI.git
cd weather-api

2. Install Dependencies

npm install

3. Create .env File
Create a .env file in the root directory and add your OpenWeatherMap API key:

WEATHER_API_KEY=your_api_key_here
You can get your API key by signing up at https://openweathermap.org.

4. Start the Server

node app.js
Server will run at: http://localhost:3000

📡 Usage
Endpoint

GET /weather?city=CityName
Example

curl "http://localhost:3000/weather?city=Delhi"
Sample Response
json

{
  "city": "Delhi",
  "temperature": 32.5,
  "description": "overcast clouds",
  "humidity": 60,
  "windSpeed": 2.5
}

📄 Project Structure
.
├── app.js
├── .env
├── package.json
└── README.md

Render

👨‍💻 Author
Priyanshu Paul
Made with ❤️ while learning Node.js & Express
