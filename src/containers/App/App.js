import Home from "../../pages/home";
import Subscribers from "../../pages/subscribers";
import { Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Switch>
        <Route path="/subscribers">
          <Subscribers />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export default App;
