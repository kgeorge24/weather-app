import styles from "./HourlyForecastItem.module.css";
import weatherImg from "../../assets/partly-cloudy-day-80.png";
const HourlyForecastItem = (props) => {
  const { hour } = props;

  const hourConverter = (time) => {
    switch (time) {
      case "00":
        time = "12AM";
        break;
      case "03":
        time = "3AM";
        break;
      case "06":
        time = "6AM";
        break;
      case "09":
        time = "9AM";
        break;
      case "12":
        time = "12PM";
        break;
      case "15":
        time = "3PM";
        break;
      case "18":
        time = "6PM";
        break;
      case "21":
        time = "9PM";
        break;
    }
    return time;
  };

  return (
    <li>
      <div>
        <p>{hourConverter(hour.dt_txt.split(" ")[1].split(":")[0])}</p>
      </div>
      <div>
        <img src={weatherImg} alt="" />
      </div>
      <div>
        <p>{Math.round(hour.main.temp)}°</p>
      </div>
    </li>
  );
};

export default HourlyForecastItem;
