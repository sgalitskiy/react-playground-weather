import {useEffect, useMemo, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

import {MenuComponent} from "./components/MenuComponent.jsx";
import {MainComponent} from "./components/MainComonent.jsx";
import {ForecastComponent} from "./components/ForecastComponent.jsx";

function App() {
  const [location, setLocation] = useState('sunnyvale');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const options = useMemo(() => ({
    method: 'GET',
    url: 'https://yahoo-weather5.p.rapidapi.com/weather',
    params: {
      location: location,
      format: 'json',
      u: 'f'
    },
    headers: {
      'X-RapidAPI-Key': 'b1c54f17b8msh682154962ddd781p192188jsn6d25978328e6',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
  }), [location]);


  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const [count, setCount] = useState(0)

  const setLocationCallback = (location) => {
    console.log('bla-bla-bla new location: ', location);
    setLocation(location);
  }


  useEffect(() => {
    fetchData();
  }, [location]);

  return (
    <>
      <header>
        <MenuComponent location={location} loading={loading} setLocation={setLocationCallback}/>
      </header>
      <main>
        {weather?.current_observation && <MainComponent value={weather.current_observation} loading={loading}/>}
      </main>
      <footer>
        {weather?.forecasts && <ForecastComponent value={weather?.forecasts} loading={loading}/>}
      </footer>
    </>
  )
}

export default App
