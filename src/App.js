import './App.css';
import Header from "./Components/Header";
import Homepage from "./Components/Homepage"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './Components/About';
import Admissions from './Components/Admissions';
import Academics from './Components/Academics';
import ContactUs from './Components/ContactUs';



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

        <Route exact path="/admissions">
          <Admissions />
        </Route>

        <Route exact path="/academics">
          <Academics />
        </Route>

        <Route exact path="/contact">
          <ContactUs />
        </Route>


      </Switch>

      





      </Router>

      
      
        
    </div>
  );
}

export default App;
