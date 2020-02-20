import React, {useContext} from 'react';
import {mockData} from '../data/data';
import { ThemeContext } from '../contexts/ThemeContext';
import {Link} from 'react-router-dom';
import './ProjectList.css';

const ProjectList = () => {
  return (
    <div id="cards">
      {
        mockData.map(post => (
          <Project {...post} key={post.id} />
        ))
      }
    </div>
  )
}

const Project = (props) => {
  const {isLight} = useContext(ThemeContext);
  const bgColor = isLight ? 'bg-light' : 'bg-dark';
  const textColor = !isLight ? 'text-light' : 'text-dark';
  return(
    <Link to={`/home/${props.id}`} className={`link ${textColor}`}>
      <div className='project-container '>
        <div className={`card mb-6 ${bgColor}`} >
          <div className="card-header">{props.header}</div>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>  
          </div>
        </div>
      </div>
    </Link>
  )
}



export default ProjectList
