import styles from "./Header.module.css";

const Header = (props) => {
  const { currentWeather, location, forecast } = props;

  return (
    <div className={styles.header}>
      <div>
        <h3>{location.name}</h3>
      </div>
      <div>
        <h1>{Math.round(currentWeather.temp_f)}°</h1>
        <p>{currentWeather.condition.text}</p>
        <h3>
          <span>H:{Math.round(forecast.forecastday[0].day.maxtemp_f)}°</span>
          <span>L:{Math.round(forecast.forecastday[0].day.mintemp_f)}°</span>
        </h3>
      </div>
    </div>
  );
};

export default Header;
