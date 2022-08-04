import { Switch, Route, Link } from "react-router-dom";
import NewToDoListView from "./views/NewToDoListView";
import TodosView from "./views/TodosView";

const App = () => (
  <>
    <ul>
      <li>
        <Link to="/createTodo">NewToDoListView</Link>
      </li>
      <li>
        <Link to="/todos">Todos</Link>
      </li>
    </ul>

    <Switch>
      <Route path="/counter">
        <NewToDoListView />
      </Route>

      <Route path="/todos">
        <TodosView />
      </Route>
    </Switch>
  </>
);

export default App;
