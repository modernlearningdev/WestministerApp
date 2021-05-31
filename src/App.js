import './App.css';
import Header from "./Components/Header";
import Homepage from "./Components/Homepage"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './Components/About';
import Admissions from './Components/Admissions';



function App() {
  return (
    <div className="App">

      

      <Router>

      <Header />

      <Switch>

        <Route exact path={"/"} >
          <Homepage />
        </Route>

        <Route exact path={"/about"}>
          <About />
        </Route>

        <Route path="/admissions">
          <Admissions />
        </Route>


      </Switch>

      





      </Router>

      
      
        
    </div>
  );
}

export default App;
