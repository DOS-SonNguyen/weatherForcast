import React, { useState} from 'react';

import Card from './component/card/card';
import './App.scss';

function App() {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const key = "d01ed74f13d285ba9f785fb49335bf3a";

  const getWeather = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&APPID=${key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <div className="App__title">
        <h2>Weather Information</h2>
      </div>
      <div className="header">
        <div className="left_info">
          <img id="icon" src={weather && weather.cod === '200' ? "http://openweathermap.org/img/w/" + weather.list[0].weather[0].icon + ".png" : "http://openweathermap.org/img/w/04n.png"} alt='icon' />
          <div className=" temp_box">
            <div>
              <span id="temp">{weather && weather.cod === '200' ? Math.round(weather.list[0].main.temp) : "0"}</span>
              <span className="temp_unit">&#8451;</span>
            </div>
          </div>
          <div className="add_info">
            <div>
              Visibility:
              <span id="visibility">{weather && weather.cod === '200' ? weather.list[0].visibility / 1000 : "0"}</span> km
            </div>
            <div>
              Wind:
              <span id="wind_speed">{weather && weather.cod === '200' ? weather.list[0].wind.speed : "0"}</span> m/s
            </div>
            <div>
              Humidity:
              <span id="humidity">{weather && weather.cod === '200' ? weather.list[0].main.humidity : "0"}</span> %
            </div>
          </div>
        </div>
        <div className="right_info">
          <span>
            <div>
              <span id="city">{weather && weather.cod === '200' ? weather.city.name + ", " + new Intl.DisplayNames(['en'], { type: 'region' }).of(weather.city.country) : "None"}</span>
            </div>
            <div>
              <span id="date">{weather && weather.cod === '200' ? new Date(weather.list[0].dt * 1000).toLocaleDateString("en-JP", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) : "None"}</span>
            </div>
            <div>
              <span id="main">{weather && weather.cod === '200' ? weather.list[0].weather[0].main : "None"}</span>
            </div>
          </span>
        </div>
        <form className="input_city" onSubmit={getWeather}>
          <input type="text" value={city} placeholder="Enter City" onChange={(e) => setCity(e.target.value)} />
          <button>Search</button>
        </form>
      </div>
      <div className="cards">
        <Card weather={weather} index={7} />
        <Card weather={weather} index={15} />
        <Card weather={weather} index={23} />
        <Card weather={weather} index={31} />
        <Card weather={weather} index={39} />`
      </div>
    </div>
  );
}

export default App;
