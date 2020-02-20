import React from 'react';
import {mockData as data} from '../data/data';

const ProjectDetail = (props) => {
  const post = data.find(post => props.match.params.id === post.id.toString());
  return (
    <div className="container">
      <h2>{post.header}</h2>
      <p>{post.description}</p>
      <p>GitHub Link: <a href='#'></a></p>
    </div>
  )
}

export default ProjectDetail;
