 import TodoList from './component/todoList'
 import "bootstrap/dist/css/bootstrap.min.css";
 import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
        <>
          <Route exact path="/" component={TodoList} />
         
        </>
      </Switch>
    </div>
  );
}

export default App;
