import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Cities from './Cities/citiesList'
import City from './City/City'
import GoogleAuth from './googleAuth'
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={GoogleAuth}></Route>
          {/* <Route path="/cities" exact component={Cities}></Route> */}
          <Route path={"/cities/:slug"} exact component={ City }></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
