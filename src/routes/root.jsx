import {NavLink, Outlet} from "react-router-dom";

export default function Root() {
  const naviItems = ['Toronto', 'Vancouver', 'Sunnyvale', 'New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Houston',]

  return (<>
    <div id="sidebar">
      <h1>Weather By City</h1>
      <nav>
        <ul>
          {naviItems.map((city, index) => <li key={index}>
            <NavLink
              to={`/weather/${city}`}
              className={({
                            isActive, isPending
                          }) => isActive ? "active" : isPending ? "pending" : ""}>{city}</NavLink>
          </li>)}
        </ul>

        <br/>
        <hr/>
        <br/>
        <NavLink to={'/profile'}>Profile</NavLink>
      </nav>
    </div>
    <div id="detail">
      <Outlet/>
    </div>
  </>);
}
