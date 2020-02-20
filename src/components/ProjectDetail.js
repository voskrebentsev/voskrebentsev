import React from 'react';
import {mockData as data} from '../data/data';
import {withRouter, Redirect} from 'react-router-dom'

const ProjectDetail = (props) => {
  const post = data.find(post => props.match.params.id === post.id.toString());
  if (post){
    return (
      <div className="container">
        <h2>{post.header}</h2>
        <p>{post.description}</p>
        <p>GitHub Link: <a href='#'></a></p>
      </div>
    )
  }else{
    return (<Redirect to='/home'/>)
  }
  
}

export default withRouter(ProjectDetail);
