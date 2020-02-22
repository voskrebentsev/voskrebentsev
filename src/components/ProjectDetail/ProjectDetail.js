import React from 'react';
import {mockData as data} from '../../data/data';
import {withRouter, Redirect} from 'react-router-dom';
import RootPart from './Todo/RootPart/RootPart';
import Carousel from './Carousel';
import './ProjectDetail.css';

const ProjectDetail = (props) => {
  const {id} = props.match.params;
  const post = data.find(post => id === post.id.toString());
  let project = null;
  if( id === '3'){
    project = <RootPart />
  }
  if (post){
    return (
      <div className="container">
        <h2>{post.header}</h2>
        {project}
        { post.imgs.length ? <Carousel imgs={post.imgs} /> : null}
        <div>
          <p>GitHub: <a href={post.github} className='detail-link'>{post.github}</a></p>
        </div>
        <div>
    <p>Stack: {post.stack.map((el,i ) => {
            if (i < post.stack.length - 1) {
              return <b key={i}>{el}, </b>
            }else{
              return <b key={i}>{el}.</b>
            }
            })}</p>
        </div>
        <div>
          <p>{post.description}</p>
        </div>
      </div>
    )
  }else{
    return (<Redirect to='/home'/>)
  }
  
}

export default withRouter(ProjectDetail);
