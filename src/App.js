import logo from './logo.svg';
import './App.css';
import Navbarr from './navbar/Navbarr'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home/Home';
import Todo from './Todo/Todo';
function App() {
  return (
    <div>
     
        <Router>
        <Navbarr/>
        <Switch>
          <Route exact path="/home"  component={Home}/>  
          <Route  path="/todo"  component={Todo}/>  
          
          </Switch>

        </Router>

     
    </div>
  );
}

export default App;
