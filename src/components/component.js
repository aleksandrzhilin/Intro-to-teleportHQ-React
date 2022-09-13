import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className={`component-container ${props.rootClassName} `}>
      <div className="component-container1">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="component-image"
        />
        <div className="component-container2">
          <span className="component-text">{props.text}</span>
          <h1 className="component-text1">{props.heading}</h1>
        </div>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  heading: 'Привет',
  image_src:
    'https://images.unsplash.com/photo-1543364195-077a16c30ff3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=200',
  text: 'Description',
  image_alt: 'image',
  rootClassName: '',
}

AppComponent.propTypes = {
  heading: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default AppComponent
