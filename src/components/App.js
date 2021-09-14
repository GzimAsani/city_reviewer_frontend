import { BrowserRouter, Route, Switch } from 'react-router-dom';

import City from './City/City';
import Cities from './Cities/citiesList';
import GoogleAuth from './googleAuth';
import ProtectedRoute from '../containers/ProtectedRoute';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={GoogleAuth}></Route>
          <ProtectedRoute path="/cities" exact component={Cities}></ProtectedRoute>
          <Route path="/cities/:slug" exact component={City}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default App;

