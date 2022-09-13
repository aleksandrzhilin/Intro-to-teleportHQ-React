import React from 'react'

import { Helmet } from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'
import './selecting-elements.css'

const SelectingElements = (props) => {
  return (
    <div className="selecting-elements-container">
      <Helmet>
        <title>Selecting-Elements - Intro to teleportHQ</title>
        <meta
          name="description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:title"
          content="Selecting-Elements - Intro to teleportHQ"
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
      <div className="selecting-elements-container1">
        <Heading
          text="There are multiple ways to select and group elements "
          heading1="Selecting Elements"
        ></Heading>
        <div className="selecting-elements-ul">
          <ListItem text="You can select multiple items by holding Ctrl/Cmd or Shift and clicking the items"></ListItem>
          <ListItem text="Same thing can be achieved in the Tree View"></ListItem>
          <Tip text="The only difference is that in the Tree View pressing Shift + Click allows selecting all siblings between two elements"></Tip>
          <ListItem text="You can also mouse-select by dragging over the desired items and holding Ctrl/Cmd pressed "></ListItem>
          <Tip text="If you are not dragging over a container you don't need to press Cmd/Ctrl"></Tip>
          <ListItem text="If you want to become a pro go to the Keyboard Shortcuts - Control - Selection and see all the ways you can select elements"></ListItem>
          <Tip text="Open the Keyboard Shortcuts panel by pressing Ctrl + Shift + /"></Tip>
        </div>
        <div className="selecting-elements-container2"></div>
      </div>
      <div className="selecting-elements-container3">
        <h2 className="selecting-elements-text subheading">Give it a try</h2>
        <span className="selecting-elements-text1">
          And you can also select me
        </span>
        <div className="selecting-elements-container4">
          <img
            src="https://play.teleporthq.io/static/img/default.png"
            className="selecting-elements-image"
          />
          <h1 className="selecting-elements-h1">Heading</h1>
          <span className="selecting-elements-text2">Text</span>
          <span className="selecting-elements-text3">Text</span>
          <span className="selecting-elements-text4">Text</span>
        </div>
      </div>
      <h1 className="selecting-elements-text5">Select me as well</h1>
      <div className="selecting-elements-container5">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
          className="selecting-elements-image1"
        />
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
          className="selecting-elements-image2"
        />
      </div>
      <span className="selecting-elements-text6">
        And you can also select me
      </span>
      <div className="selecting-elements-container6">
        <Navigation></Navigation>
      </div>
    </div>
  )
}

export default SelectingElements
