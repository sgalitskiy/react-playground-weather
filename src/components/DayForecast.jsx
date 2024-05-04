export const DayForecast = ({value}) => {
  return (
    <li>
      <div>
        {value.day}: {value.low}-{value.high}℉
      </div>
      {value.text && <em>{value.text}</em>}
    </li>
  )
}
