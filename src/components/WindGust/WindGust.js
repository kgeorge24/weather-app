import styles from "../OtherInfo/OtherInfo.module.css";

const WindGust = (props) => {
  return (
    <div className={styles["other-info__wind-gust"]}>
      <ul>
        <li>
          <div>
            <p>Wind Speed</p>
          </div>
          <div>
            <h1>
              {Math.round(props.currentWeather.current.wind_mph)}
              <span>MPH</span>
            </h1>
          </div>
        </li>
        <li>
          <div>
            <p>Gust Speed</p>
          </div>
          <div>
            <h1>
              {Math.round(props.currentWeather.current.gust_mph)}
              <span>MPH</span>
            </h1>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WindGust;
