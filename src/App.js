import './App.css';
import Header from "./Components/Header";
import Hero from './Components/Hero';
import Separator from './Components/Separator';
import WhoWeAre from './Components/WhoWeAre';
import WhoWeAreBrief from './Components/WhoWeAreBrief';
import Blog from "./Components/Blog";
import Visit from "./Components/Visit";
import Footer from './Components/Footer';



function App() {
  return (
    <div className="App">

      <Header />
      <Hero />
      <WhoWeAre />
      <WhoWeAreBrief />

      <Separator />

      <Blog />
      

      <Visit />

      <Footer />
      
        
    </div>
  );
}

export default App;
