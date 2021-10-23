
import About from './About'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import path from './utils/path';

function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path={path.root} component={Home} />
        <Route path={path.about} component={About} />
      </Switch>
    </Router>
  );
}

export default App;
