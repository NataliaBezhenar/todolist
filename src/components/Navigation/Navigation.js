import { Route, NavLink, Switch } from "react-router-dom";
import HomeView from "../../views/HomeView";
import TodosView from "../../views/TodosView";
import NotFoundView from "../../views/NotFoundView";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          className={styles.NavLink}
          activeClassName={styles.NavLink__active}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.NavLink__active}
          to="/todos"
        >
          Todos
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route path="/todos" component={TodosView} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default Navigation;
