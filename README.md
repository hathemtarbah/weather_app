# Weather App

A simple React web application that fetches and displays current weather data using the OpenWeatherMap API.

## Features

- Search for a city
- View current temperature and weather description
- Uses OpenWeatherMap API
- Basic responsive UI with CSS styling

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Add your OpenWeatherMap API key:

    - Either replace the `apiKey` string directly in `App.js`
    - Or store it in a `.env` file like this:

    ```env
    REACT_APP_API_KEY=your_openweather_api_key
    ```

    *(You'll also need to update the code to use `process.env.REACT_APP_API_KEY` if using this method.)*

4. Start the development server:

    ```bash
    npm start
    ```

## API

This project uses the [OpenWeatherMap API](https://openweathermap.org/api) for current weather data.

## License

This project is open source and available under the MIT License.
