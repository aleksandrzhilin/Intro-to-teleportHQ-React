import React from 'react'

import Previous from './previous'
import Next from './next'
import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container">
      <Previous rootClassName="previous-root-class-name1"></Previous>
      <Next></Next>
    </div>
  )
}

export default Navigation
