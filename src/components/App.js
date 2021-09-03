import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Cities from './Cities/citiesList'
import City from './City/City'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Cities}></Route>
          <Route path={"/cities/:slug"} exact component={ City }></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
