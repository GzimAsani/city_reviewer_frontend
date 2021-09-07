import { BrowserRouter, Route, Switch } from 'react-router-dom';
import City from './City/City';
import GoogleAuth from './googleAuth';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={GoogleAuth} />
        {/* <Route path="/cities" exact component={Cities}></Route> */}
        <Route path="/cities/:slug" exact component={City} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
