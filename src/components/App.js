import citiesList from './Airlines/citiesList'
import { Route, Switch } from 'react-router-dom'
import city from './Airline/city'

function App() {
  return (
    <div className="App">
     <Switch>
        <Route exact path="/" component={citiesList}></Route>
        <Route exact path="/cities" component={city}></Route>
     </Switch>
    </div>
  );
}

export default App;
