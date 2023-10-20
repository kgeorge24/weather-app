import React, { useState } from "react";
import Search from "./components/Search/Search";
import "./App.css";
import Header from "./components/Header/Header";
import HourlyForecast from "./components/HourlyForecast/HourlyForecast";

function App() {
  const [forecastWeatherState, setForecastWeatherState] = useState([]);
  const [searchState, setSearchState] = useState("");
  const [showResults, setShowResults] = useState(false);

  // Makes a get request to provided URL and saves repsonse to provided state.
  const fetchHandler = (apiURL, options, settingFunction) => {
    fetch(`${apiURL}`, options)
      .then((response) => response.json())
      .then((data) => settingFunction(data));
  };

  // Handles user search input and saves to state.
  const searchHandler = (e) => {
    e.preventDefault();
    setSearchState(e.target.value);
  };

  // Retrieves current and 3day weather for the location searched.
  const searchFormSubmitHandler = (e) => {
    e.preventDefault();
    const forecastWeatherURL = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${searchState}&days=3`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "bfc0db9b15mshb030a1c6628c57ep1cbd98jsnb4eafd08d752",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    fetchHandler(forecastWeatherURL, options, setForecastWeatherState);
    setSearchState("");
  };

  // Displays the other components one the forecast weather has been received.
  const displayWeatherInfo = () => {
    if (Object.keys(forecastWeatherState).length > 0) {
      const { current, forecast, location } = forecastWeatherState;
      return (
        <React.Fragment>
          <Header
            currentWeather={current}
            location={location}
            forecast={forecast}
          />
          <HourlyForecast forecast={forecast}/>
        </React.Fragment>
      );
    }
  };

  return (
    <div className="App">
      <Search
        searchFormSubmitHandler={searchFormSubmitHandler}
        searchHandler={searchHandler}
        searchState={searchState}
      />
      {displayWeatherInfo()}
    </div>
  );
}

export default App;
