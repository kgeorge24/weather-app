const HourlyForecastItem = (props) => {
  const { hour } = props;
  const time = parseInt(hour.time.split(" ")[1].split(":")[0]);

  const calculateTime = (hour) => {
    if (time < 1) {
      return "12AM";
    } else if (time >= 1 && time < 12) {
      return `${Math.round(time)}AM`;
    } else if (time === 12) {
      return `${time}PM`;
    } else if (time > 12 && time < 24) {
      return `${time - 12}PM`;
    }
  };


  return (
    <li>
      <div>
        <p>{calculateTime(hour)}</p>
      </div>
      <div>
        <img src={hour.condition.icon} alt="" />
      </div>
      <div>{<p>{Math.round(hour.temp_f)}°</p>}</div>
    </li>
  );
};

export default HourlyForecastItem;
