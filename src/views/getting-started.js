import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Next from '../components/next'
import './getting-started.css'

const GettingStarted = (props) => {
  return (
    <div className="getting-started-container">
      <Helmet>
        <title>Getting-Started - Intro to teleportHQ</title>
        <meta
          name="description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:title"
          content="Getting-Started - Intro to teleportHQ"
        />
        <meta
          property="og:description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/992828f4-25ae-4000-94b3-de129dd3f27d/8615b01c-77df-49d1-89ab-bbcb403499dd?org_if_sml=1"
        />
      </Helmet>
      <div className="getting-started-container1">
        <Link to="/page1" className="getting-started-navlink">
          <Heading
            heading1="Welcome to teleportHQ!"
            className="getting-started-heading"
          ></Heading>
        </Link>
        <div className="getting-started-ul">
          <ListItem></ListItem>
          <ListItem text="Your progress is saved automatically"></ListItem>
          <ListItem text="Don't worry if you make mistakes. Just undo with Ctrl/Cmd + Z"></ListItem>
        </div>
        <div className="getting-started-footer">
          <span className="getting-started-text subheading">
            Let&apos;s do this!
          </span>
          <Next
            text="Hit Ctrl/Cmd + Arrow Down for the next step"
            rootClassName="next-root-class-name"
          ></Next>
        </div>
      </div>
      <div className="getting-started-container2">
        <div className="getting-started-container3">
          <div className="getting-started-container4"></div>
        </div>
      </div>
    </div>
  )
}

export default GettingStarted
