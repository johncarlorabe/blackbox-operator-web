import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Provider } from 'react-redux';
// import { configureStore } from './resources/redux/store';
import Login from './pages/Login/Login';
import Main from './pages/Main';
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from "./utils/PublicRoute";
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';

function App() {
  // const store = configureStore();
  console.log("ENV");
  console.log(process.env.REACT_APP_API_KEY);
  return (
    // <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
          <PublicRoute restricted={true} component={Login} path="/" exact />
          <PublicRoute restricted={true} component={Login} path="/login" exact />
          <PublicRoute restricted={true} component={ForgotPassword} path="/forgotpassword" exact />
          <PrivateRoute component={Main} path="/home" exact />

            {/* <Route path="/" exact component={() => <Login />} />
            <Route path="/login" exact component={() => <Login />} />
            <Route path="/home" exact component={() => <Main />} /> */}
          </Switch>
        </Router>
      </div>
    // </Provider>
  );
}

export default App;
