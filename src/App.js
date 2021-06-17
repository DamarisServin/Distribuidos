import './App.css';
import {Switch, Route} from "react-router-dom";
import Home from './component/Home';
import Quiz from './component/Quiz';
import Final from './component/Final';


function App() {

  

  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Quiz/:_code/:_nombre" component={Quiz} />
        <Route path="/Final/:_code" component={Final} />
      </Switch>

    </div>
  );
}

export default App;
