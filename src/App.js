import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from '../resources/redux/store';
import Home from './pages/Homepage/Home';
import Login from './pages/Login/Login';
import Main from './pages/Main';

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={() => <Login />} />
            <Route path="/main" exact component={() => <Main />} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
