import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Home from './Components/Home';
import Footer from './Components/Footer';
import Explore from './Components/Explore';
import About from './Components/About';
import Intern from './Components/intern';
import FullTimeCse from './Components/Fulltimecse';
function App() {
  return (
    <BrowserRouter>

      <Nav />
    
    <div className="App">
    
    <Switch>
      <Route exact path='/' exact component={() => <Home /> } />
      <Route path='/explore' component={Explore} />
      <Route path='/about' component={About} />
      <Route path='/internshipCse' component={Intern} /> 
      <Route path='/fulltimeCse' component={FullTimeCse} /> 
  

    </Switch>
    


    
    </div>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
