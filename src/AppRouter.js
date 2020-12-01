import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import AppContainer from './containers/App/AppContainer';

function AppRouter(props) {
    return (
      <Router>
          <Switch>
            <Route exact path="/">
              <MainApp/>
            </Route>
            <Route path="/products/:id">
              <MainApp/>
            </Route>
          </Switch>
      </Router>
    );
}

export default AppRouter;

function MainApp() {
  var {id} = useParams();

  console.log('useParams function result', useParams())

  console.log('useparams id', id);

  if (!id) {
    id = 1;
  }

  console.log('MainApp id', id);
  return (
    <AppContainer productID={id}/>
  );
}