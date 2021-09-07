import { BrowserRouter, Route, Switch } from 'react-router-dom';
import City from './City/City';
import GoogleAuth from './googleAuth';
import Cities from './Cities/citiesList';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={GoogleAuth} />
        <Route path="/cities/:slug" exact component={City} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
