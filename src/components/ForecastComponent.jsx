import {useEffect, useMemo} from "react";
import {DayForecast} from "./DayForecast.jsx";

export const ForecastComponent = ({value, loading}) => {

  useEffect(() => {
    console.log('v', value);
  }, [value]);

  const daysCount = useMemo(() => {
    return value?.length;
  }, [value]);

  return (<>
      {!loading && <div className='forecast'>
        <h2>{daysCount}-Day Forecast</h2>
        <ul>
          {value.map((day, index) => <DayForecast key={index} value={day}/>)}
        </ul>
      </div>}
    </>)
}
