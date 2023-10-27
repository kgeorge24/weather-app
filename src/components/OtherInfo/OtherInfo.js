import styles from "./OtherInfo.module.css";

const OtherInfo = (props) => {
  return (
    <div className={styles["other-info"]}>
      <ul>
        <li>
          <div>
            <p>Feels Like</p>
          </div>
          <div>
            <p>{Math.round(props.currentWeather.current.feelslike_f)}°</p>
          </div>
        </li>
        <li>
          <div>
            <p>Humidity</p>
          </div>
          <div>
            <p>{Math.round(props.currentWeather.current.humidity)}%</p>
          </div>
        </li>
        <li>
          <div>
            <p>Wind Speed</p>
          </div>
          <div>
            <p>{Math.round(props.currentWeather.current.wind_mph)}MPH</p>
          </div>
        </li>
        <li>
          <div>
            <p>Gust Speed</p>
          </div>
          <div>
            <p>{Math.round(props.currentWeather.current.gust_mph)}MPH</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OtherInfo;
