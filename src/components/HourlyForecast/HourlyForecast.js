import styles from "./HourlyForecast.module.css";
import HourlyForecastItem from "./HourlyForecastItem";

const HourlyForecast = (props) => {
  const { forecast } = props;
  const unformattedDate = new Date();
  // formats todays date to match API structure as well as current hour
  const formatedDate = (date, increaseDayBy) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hour = date.getHours();

    return {
      date:
        year + "-" + parseInt(month + 1) + "-" + parseInt(day + increaseDayBy),
      hour: hour,
    };
  };

  const hourlyForecastItems = () => {
    // retireving all hours of forecast for current day
    const todaysForecast = forecast.forecastday.filter((day) => {
      return day.date === formatedDate(unformattedDate, 0).date;
    });
    // retireving all hours of forecast for next day
    const tommorowsForecast = forecast.forecastday.filter((day) => {
      return day.date === formatedDate(unformattedDate, 1).date;
    });

    // retireving specific hours of forecast for current day from time searched
    const todaysTimesToDisplay = todaysForecast[0].hour.filter((hour) => {
      return (
        hour.time.split(" ")[1].split(":")[0] >=
        formatedDate(unformattedDate, 0).hour
      );
    });

    let counter = 24 - todaysTimesToDisplay.length;
    let timesArray = [...todaysTimesToDisplay];

    // addidng remainder of times from the next day for 24hr hourly coverage
    for (let i = 0; i <= counter; i++) {
      timesArray.push(tommorowsForecast[0].hour[i]);
    }

    return timesArray.map((hour) => {
      return <HourlyForecastItem key={Math.random()} hour={hour} />;
    });
  };

  return (
    <div className={styles["hourly-forcast__container"]}>
      <ul>{hourlyForecastItems()}</ul>
    </div>
  );
};

export default HourlyForecast;
