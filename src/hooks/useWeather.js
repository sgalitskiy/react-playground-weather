import {useCallback, useEffect, useMemo, useState} from "react";
import axios from "axios";

const useWeather = (location) => {
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


  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.request(options);
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [options]);


  useEffect(() => {
    fetchData();
  }, [fetchData, location]);

  return {
    weather,
    loading,
  }
};

export default useWeather;
