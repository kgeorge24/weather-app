import styles from "./HourlyForecast.module.css";
import HourlyForecastItem from "./HourlyForecastItem";

const HourlyForecast = (props) => {
  const { fiveDayWeather } = props;
  const today = new Date();

  const formatedDate = (date, increaseDayBy) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return (
      year + "-" + parseInt(month + 1) + "-" + parseInt(day + increaseDayBy)
    );
  };

  const hourList = fiveDayWeather.list.filter((hour) => {
    return (
      hour.dt_txt.includes(formatedDate(today, 0)) ||
      hour.dt_txt.includes(formatedDate(today, 1))
    );
  });

  const returnList = () => {
    return hourList.map((hour) => {
      return <HourlyForecastItem key={Math.random()} hour={hour} />;
    });
  };

  return (
    <div className={styles["hourly-forcast__container"]}>
      <ul>{returnList()}</ul>
    </div>
  );
};

export default HourlyForecast;
