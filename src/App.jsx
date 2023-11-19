import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
<<<<<<< HEAD
import Team from './pages/Team';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Testimonials from './pages/Testimonials';

const App = () => {
  return (
    <Router>
      <nav>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/team" activeClassName="active">
          Team
        </NavLink>
        <NavLink to="/services" activeClassName="active">
          Services
        </NavLink>
        <NavLink to="/projects" activeClassName="active">
          Projects
        </NavLink>
        <NavLink to="/testimonials" activeClassName="active">
          Testimonials
        </NavLink>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/team" component={Team} />
      <Route path="/services" component={Services} />
      <Route path="/projects" component={Projects} />
      <Route path="/testimonials" component={Testimonials} />
    </Router>
  );
};

=======
import Service from './pages/Service';
import About from './pages/About';
import Project from './pages/Project';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './App.css'; 

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/service">Service</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/project">Project</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>

      <Route exact path="/" component={Home} />
      <Route path="/service" component={Service} />
      <Route path="/about" component={About} />
      <Route path="/project" component={Project} />
      <Route path="/blog" component={Blog} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

>>>>>>> ef2b9470eb517352ca11566beb8a0ca7acd2ace5
export default App;
