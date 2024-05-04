
export function MenuComponent({location, setLocation, loading}) {

  const changeLocation = (e) => {
    setLocation(e.target.value);
  }

  return (
    <nav>
      <select value={location} onChange={changeLocation} disabled={loading}>
        <option value="sunnyvale">Sunnyvale</option>
        <option value="toronto">Toronto</option>
        <option value="quebec">Quebec</option>
      </select>
    </nav>
  )
}


