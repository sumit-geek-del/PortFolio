
import Contact from './Components/Contact';
import Container from './Components/Container';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Proficiency from './Components/Proficiency';
import Projects from './Components/Projects';
import './Components/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>

    <Header/>
    <Switch>
          <Route path="/"> 
          </Route>
        </Switch>
    </Router>
    <Container/>
    <Main/>
    <Proficiency/>
    <Education/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
