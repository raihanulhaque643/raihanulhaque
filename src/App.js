import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PageContainer from './components/PageContainer';

function App() {
  return (
    <div className="App">
    <Router>
    <Header
      brand="Raihanul Haque"
      linkOne="About Me"
      linkTwo="Projects"
      linkThree="Contact"
    />
    <PageContainer />
    </Router>
    </div>
  );
}

export default App;
