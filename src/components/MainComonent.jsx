export const MainComponent = ({ value, loading }) => {
  return (
    <section>
      {loading ? 'Loading...' : null}

      {!loading && <>
        <h1>{value.condition.temperature}℉</h1>
        <h2>WIND: {value.wind.direction}, {value.wind.speed} m/s</h2>
        <p>
          sunset: {value.astronomy.sunset},
          sunrise: {value.astronomy.sunrise}
        </p>
      </>}
    </section>
  )
}
