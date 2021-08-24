import { BrowserRouter, Route, Switch } from 'react-router-dom'
import City from './City/city'
import Cities from './Cities/citiesList'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Cities}></Route>
            <Route path="/cities/:slug" exact component={City}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
