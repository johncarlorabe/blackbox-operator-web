import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Homepage/Home';
import Login from './pages/Login/Login';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Login />} />
          <Route path="/main" exact component={() => <Main />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
