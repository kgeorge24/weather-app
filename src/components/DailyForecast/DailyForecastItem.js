const DailyForecastItem = (props) => {
  const { day } = props.day;

  const reformatDateForAllBrowsers = () => {
    let testDate = new Date(props.day.date);
    let year = testDate.getFullYear();
    let month = testDate.getMonth();
    let day = testDate.getDate();
    let reformated = new Date(year, month, day + 1);
    return reformated;
  };

  const returnDayAsString = (dayInt) => {
    const today = new Date().getDay();

    if (today === dayInt) {
      return "Today";
    } else {
      switch (dayInt) {
        case 0:
          return "Sunday";
        case 1:
          return "Monday";
        case 2:
          return "Tuesday";
        case 3:
          return "Wednesday";
        case 4:
          return "Thursday";
        case 5:
          return "Friday";
        case 6:
          return "Saturday";
        default:
          return;
      }
    }
  };

  return (
    <li>
      <div>
        <p>{returnDayAsString(reformatDateForAllBrowsers().getDay())}</p>
      </div>
      <div>
        <img src={day.condition.icon} alt="" />
      </div>
      <div>
        <p>H:{Math.round(day.maxtemp_f)}°</p>
        <p>L:{Math.round(day.mintemp_f)}°</p>
      </div>
    </li>
  );
};

export default DailyForecastItem;
