import { NavLink } from "react-router-dom";
import s from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <nav className="headerNavigation">
      <ul className={s.navList}>
        <li className={s.navItem}>
          <NavLink
            exact
            to="/"
            className={s.navLink}
            activeClassName={s.navLinkActive}
          >
            Home
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink
            to="/movie"
            className={s.navLink}
            activeClassName={s.navLinkActive}
          >
            Movie
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
