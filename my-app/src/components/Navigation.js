import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <header>
      <nav>
        <a href="/" id="logo">
          Filmsiden.no
        </a>
        <ul>
          <li>
            <NavLink to="/">Hjem</NavLink>
          </li>
          <li>
            <NavLink to="movies">Filmene</NavLink>
          </li>
          <li>
            <NavLink to="actors">Skuespillerne</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}