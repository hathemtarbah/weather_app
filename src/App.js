import "./App.css";
import React, {useState} from "react";

function App(){
  const apiKey = process.env.REACT_APP_API_KEY;

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  
  const getWeather = async() => {
    if(!query) return;

    try{
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`
      );
      const data = await res.json();
      setWeather(data);
    } catch(err){
      console.error("failed to fetch weather", err);
    }
  }
  
  

  console.log(query)
  
  return(
    <div className="App">

      
      <h1>Weather App</h1>

      <input
        type="text"
        placeholder="Enter city:"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={getWeather}>Get weather</button>
      {weather && weather.main && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;