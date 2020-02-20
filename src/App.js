import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import MainPage from './components/MainPage';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';
import ThemeContextProvider, { ThemeContext } from './contexts/ThemeContext';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <ThemeContextProvider >
      <InnerThemePart />
    </ThemeContextProvider>
  );
}

const InnerThemePart = (props) => {
  const {isLight} = useContext(ThemeContext);
  const bgColor = isLight ? 'bg-light' : 'bg-secondary';
  const textColor = !isLight ? 'text-light' : 'text-dark';
  return (
    <Router >
        <div style={{'min-height': '100vh', 'padding-bottom': '40px'}} className={`${bgColor} ${textColor}`}>
            <Navbar />
            <Switch >    
              <Route exact path='/home' component={MainPage} />
              <Route path='/contactme' component={ContactMe} />
              <Route path='/aboutme' component={AboutMe} />
              <Route path='/home/:id' component={ProjectDetail} />
              <Redirect to="/home" />
            </Switch >
        </div>
      </Router >
  )
}

export default App;
