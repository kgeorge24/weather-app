import { useState } from "react";
import Search from "./components/Search/Search";
import "./App.css";

function App() {
  const [fiveDayWeatherState, setFiveDayWeatherState] = useState([]);
  const [currentWeatherState, setCurrentWeatherState] = useState({});
  const [searchState, setSearchState] = useState("");
  const [locationResults, setLocationResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Makes a get request to provided URL and saves repsonse to provided state.
  const fetchHandler = (apiURL, settingFunction) => {
    fetch(`${apiURL}`)
      .then((response) => response.json())
      .then((data) => settingFunction(data));
  };

  // Handles user search input and saves to state.
  const searchHandler = (e) => {
    e.preventDefault();
    setSearchState(e.target.value);
  };

  // Retrieves the cities that match search results
  const searchFormSubmitHandler = (e) => {
    e.preventDefault();
    const getCityLocationURL = `http://api.openweathermap.org/geo/1.0/direct?q=${searchState}&limit=5&appid=27276c73470430251f04c6c66c51f72d`;

    const getZipCodeLocationURL = `http://api.openweathermap.org/geo/1.0/zip?zip=${searchState}&appid=27276c73470430251f04c6c66c51f72d`;

    if (parseInt(searchState)) {
      console.log("Its a Number!");
      fetchHandler(getZipCodeLocationURL, setLocationResults);
    } else {
      console.log("Not a Number!");
      fetchHandler(getCityLocationURL, setLocationResults);
      setShowResults(true);
    }
  };

  // Retrieves current weather and 5day weather for selected city.
  const getWeatherResults = (result) => {
    const fiveDayWeatherURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${result.lat}&lon=${result.lon}&units=imperial&appid=27276c73470430251f04c6c66c51f72d`;
    
    const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${result.lat}&lon=${result.lon}&units=imperial&appid=27276c73470430251f04c6c66c51f72d`;

    setSearchState("");
    setShowResults(false);
    fetchHandler(fiveDayWeatherURL, setFiveDayWeatherState);
    fetchHandler(currentWeatherURL, setCurrentWeatherState);
  };

  return (
    <div className="App">
      <Search
        searchFormSubmitHandler={searchFormSubmitHandler}
        searchHandler={searchHandler}
        getWeatherResults={getWeatherResults}
        searchState={searchState}
        searchResults={locationResults}
        showResults={showResults}
      />
    </div>
  );
}

export default App;
