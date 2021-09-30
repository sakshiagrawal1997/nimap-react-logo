import './App.css';
import React from "react";
import {useState} from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {Header} from './Components/Header';
import HomePage from './Components/HomePage';
import TaskPage from './Components/TaskPage';
import UserPage from './Components/UserPage';

function App() {
  const [selected, setSelected] = useState();
  
  return (
    <Router>
    <div className="App">
        <Header />
      <Switch>
          <Route exact path="/"><UserPage /></Route>
          <Route exact path="/HomePage"><HomePage selected={selected} setSelected={setSelected}/></Route>
          <Route path="/TaskPage"><TaskPage /></Route>
          <Route path="/UserPage"><UserPage /></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
