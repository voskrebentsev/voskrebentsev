import React from 'react'
import ProjectList from '../ProjectList/ProjectList'

const MainPage = () => {
  return (
    <div className={`container `}>
      <h1 className="display-4">My projects</h1>
      <ProjectList />
    </div>
  )
}

export default MainPage;
