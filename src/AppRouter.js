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
            <Route path="/:page/:id">
              <MainApp/>
            </Route>
            <Route path="/:page">
              <MainApp/>
            </Route>
          </Switch>
      </Router>
    );
}

export default AppRouter;

function MainApp() {
  var {id, page} = useParams();

  console.log('useParams function result', useParams())

  console.log('useparams id', id);

  if (!id) {
    id = 1;
  }

  if (page !== 'products' && page) {
    return <div>The page "{page}" does not exist</div>
  }

  if (id < 1 || id > 10011) {
    return <div>The product number "{id}" does not exist</div>
  }

  console.log('MainApp id', id);
  return (
    <AppContainer productID={id}/>
  );
}