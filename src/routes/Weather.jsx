import {useParams} from "react-router-dom";
import useWeather from "../hooks/useWeather.js";
import {MainComponent} from "../components/MainComonent.jsx";
import {ForecastComponent} from "../components/ForecastComponent.jsx";

const Weather = () => {
  const { locationName } = useParams();
  const {loading, weather} = useWeather(locationName);


  return (
    <div id="detail">
      <h1>{"Hi! I'm weather page"}</h1>
      <h3>{locationName}</h3>

      {loading ? 'Loading...' : null}

      {!loading && <>
        {weather?.current_observation && <MainComponent value={weather.current_observation} loading={loading}/>}
        {weather?.forecasts && <ForecastComponent value={weather?.forecasts} loading={loading}/>}
      </>}
    </div>
  );
}

export default Weather;
