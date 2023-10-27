import { createContext, useState, Fragment } from "react";
import Header from "../components/Header/Header";
import FeelsLike from "../components/FeelsLike/FeelsLike";
import HourlyForecast from "../components/HourlyForecast/HourlyForecast";
import WindGust from "../components/WindGust/WindGust";
import DailyForecast from "../components/DailyForecast/DailyForecast";
import OtherInfo from "../components/OtherInfo/OtherInfo";

const SearchContext = createContext({
  error: "",
  forecastWeatherState: [],
  searchFormSubmitHandler: () => {},
  displayWeatherInfo: () => {},
});

export const SearchContextProvider = (props) => {
  const [forecastWeatherState, setForecastWeatherState] = useState([]);
  const [errorState, setError] = useState("");

  // Makes a get request to provided URL and saves repsonse to provided state.
  const fetchHandler = async (apiURL, options, settingFunction) => {
    try {
      const response = await fetch(`${apiURL}`, options);
      const json = await response.json();

      if (!response.ok) {
        throw new Error(
          "Falied to fetch the Weather, please try a valid City or Zip Code!"
        );
      }
      settingFunction(json);
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  // Retrieves current and 3day weather for the location searched.
  const searchFormSubmitHandler = (e, searchState, setSearchState) => {
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

  // returns desktop view components.
  const displayDesktopView = (current, location, forecast) => {
    return (
      <Fragment>
        <Header
          currentWeather={current}
          location={location}
          forecast={forecast}
        />
        <div className="container">
          <FeelsLike currentWeather={forecastWeatherState} />
          <HourlyForecast forecast={forecast} />
          <WindGust currentWeather={forecastWeatherState} />
        </div>
        <DailyForecast forecast={forecast} />
      </Fragment>
    );
  };

  // returns mobile view components.
  const displayMobileView = (current, location, forecast) => {
    return (
      <Fragment>
        <Header
          currentWeather={current}
          location={location}
          forecast={forecast}
        />
        <HourlyForecast forecast={forecast} />
        <DailyForecast forecast={forecast} />
        <OtherInfo currentWeather={forecastWeatherState} />
      </Fragment>
    );
  };

  // Displays the other components one the forecast weather has been received.
  const displayWeatherInfo = () => {
    if (Object.keys(forecastWeatherState).length > 0) {
      const { current, forecast, location } = forecastWeatherState;
      if (window.innerWidth > 900) {
        return displayDesktopView(current, location, forecast);
      } else if (window.innerWidth < 900) {
        return displayMobileView(current, location, forecast);
      }
    }
  };

  return (
    <SearchContext.Provider
      value={{
        error: errorState,
        forecastWeatherState: forecastWeatherState,
        searchFormSubmitHandler: searchFormSubmitHandler,
        displayWeatherInfo: displayWeatherInfo,
      }}
    >
      {props.children}
      {displayWeatherInfo()}
    </SearchContext.Provider>
  );
};

export default SearchContext;
