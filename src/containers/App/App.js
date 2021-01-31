import Home from "../../pages/home";
import Subscribers from "../../pages/subscribers";
import { Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

const SSubscribeLink = styled.div`
  a {
    background-color: ${(props) => props.theme.colors.indianRed};
    border: none;
    text-decoration: none;
    color: ${(props) => props.theme.colors.white} !important;
    padding: 1rem 2rem;
    border-radius: 2rem;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.18);
    transition: box-shadow 0.4s ease;

    &:hover {
      box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.18);
    }
    position: fixed;
    bottom: 1rem;
    left: 1rem;
  }
`;

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
      <SSubscribeLink>
        <Link to="/subscribers">View Subscribers</Link>
      </SSubscribeLink>
    </>
  );
};

export default App;
