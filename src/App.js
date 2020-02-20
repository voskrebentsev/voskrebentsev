import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from 'react-router-dom';
import MainPage from './components/MainPage';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';
import ThemeContextProvider, { ThemeContext } from './contexts/ThemeContext';
import ProjectDetail from './components/ProjectDetail';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  return (
    <ThemeContextProvider >
      <Router >
        <InnerThemePart />
      </Router >
    </ThemeContextProvider>
  );
}

let InnerThemePart = (props) => {
  const {isLight} = useContext(ThemeContext);
  const bgColor = isLight ? 'bg-light' : 'bg-secondary';
  const textColor = !isLight ? 'text-light' : 'text-dark';
  return (
 
      <div style={{'minHeight': '100vh', 'paddingBottom': '40px'}} className={`${bgColor} ${textColor}`}>
        <Navbar />
        <TransitionGroup>
          <CSSTransition 
            key={props.location.key}
            classNames='page'
            timeout={300}
          >
            <Switch >    
              <Route exact path='/home' component={MainPage} />
              <Route path='/contactme' component={ContactMe} />
              <Route path='/aboutme' component={AboutMe} />
              <Route path='/home/:id' component={ProjectDetail} />
              <Redirect to="/home" />
            </Switch >
          </CSSTransition>
        </TransitionGroup>
      </div>
  
  )
}

InnerThemePart = withRouter(InnerThemePart);

export default App;
