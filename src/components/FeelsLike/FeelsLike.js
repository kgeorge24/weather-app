import styles from '../OtherInfo/OtherInfo.module.css'

const FeelsLike = (props) => {
  return (
    <div className={styles["other-info__feels-like"]}>
      <ul>
        <li>
          <div>
            <p>Feels Like</p>
          </div>
          <div>
            <h1>{Math.round(props.currentWeather.current.feelslike_f)}°</h1>
          </div>
        </li>
        <li>
          <div>
            <p>Humidity</p>
          </div>
          <div>
            <h1>{Math.round(props.currentWeather.current.humidity)}%</h1>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FeelsLike;
