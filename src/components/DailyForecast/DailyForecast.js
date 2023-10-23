import DailyForecastItem from "./DailyForecastItem";
import styles from "./Dailyforecast.module.css";

const DailyForecast = (props) => {
  const { forecastday } = props.forecast;
  const dailyForecastItems = () => {
    return forecastday.map((day) => {
      return <DailyForecastItem key={Math.random()} day={day} />;
    });
  };

  return (
    <div className={styles["daily-forecast"]}>
      <ul>{dailyForecastItems()}</ul>
    </div>
  );
};

export default DailyForecast;
