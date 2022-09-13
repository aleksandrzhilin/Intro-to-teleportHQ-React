import React from 'react'

import { Helmet } from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'
import './positioning-elements.css'

const PositioningElements = (props) => {
  return (
    <div className="positioning-elements-container">
      <Helmet>
        <title>Positioning-Elements - Intro to teleportHQ</title>
        <meta
          name="description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:title"
          content="Positioning-Elements - Intro to teleportHQ"
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
      <div className="positioning-elements-container1">
        <div className="positioning-elements-container2">
          <Heading
            text="Let's see how we position elements in containers"
            heading1="Positioning Elements"
          ></Heading>
          <div className="positioning-elements-ul">
            <ListItem text="Drag and drop a Heading (H) in the box below "></ListItem>
            <ListItem text="Try to place it in another area of the container and see what happens"></ListItem>
          </div>
          <div className="positioning-elements-container3">
            <h1>Heading</h1>
          </div>
          <div className="positioning-elements-ul1">
            <ListItem text="You can place your elements to any of these nine points in your containers"></ListItem>
            <Tip text="This option is available only for containers with display flex for the moment"></Tip>
            <ListItem text="Not sure if it's the right position for your element? Just drag and drop it to another point!"></ListItem>
          </div>
        </div>
        <Navigation></Navigation>
      </div>
    </div>
  )
}

export default PositioningElements
