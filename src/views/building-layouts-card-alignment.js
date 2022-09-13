import React from 'react'

import { Helmet } from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'
import './building-layouts-card-alignment.css'

const BuildingLayoutsCardAlignment = (props) => {
  return (
    <div className="building-layouts-card-alignment-container">
      <Helmet>
        <title>Building-Layouts-Card-Alignment - Intro to teleportHQ</title>
        <meta
          name="description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:title"
          content="Building-Layouts-Card-Alignment - Intro to teleportHQ"
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
      <div className="building-layouts-card-alignment-container1">
        <div className="building-layouts-card-alignment-container2">
          <Heading
            text="Card &amp; Alignment"
            heading1="Building Layouts"
          ></Heading>
          <h2 className="building-layouts-card-alignment-text subheading">
            Desired Outcome
          </h2>
          <div className="building-layouts-card-alignment-container3">
            <h1 className="building-layouts-card-alignment-text01">Heading</h1>
            <span className="building-layouts-card-alignment-text02">
              Lorem ipsum dolor sit amet, ut sed aeque virtute, stet congue
              legere id quo. Dicam virtute scribentur te usu, cum omnium eripuit
              copiosae ne. An nullam essent fastidii eos.
            </span>
            <div className="building-layouts-card-alignment-container4">
              <button className="button">No</button>
              <button className="building-layouts-card-alignment-button1 button">
                Yes
              </button>
            </div>
          </div>
          <div className="building-layouts-card-alignment-ul">
            <ListItem text="Add the elements you see above using keyboard shortcuts"></ListItem>
            <ListItem text="Change their position to the vertical axis by selecting the parent node and choosing Column in the Layout section "></ListItem>
            <ListItem text="To have the buttons on the same row, simply drag the second one to the right of the first"></ListItem>
            <ListItem text="Set margins on the first three elements"></ListItem>
            <Tip text="Try using the layout tokens we introduced earlier"></Tip>
          </div>
          <h2 className="building-layouts-card-alignment-text03 subheading">
            Give it a try
          </h2>
          <div className="building-layouts-card-alignment-div">
            <h1 className="building-layouts-card-alignment-text04">Heading</h1>
            <span className="building-layouts-card-alignment-text05">
              Lorem ipsum dolor sit amet, ut sed aeque virtute, stet congue
              legere id quo. Dicam virtute scribentur te usu, cum omnium eripuit
              copiosae ne. An nullam essent fastidii eos.
            </span>
            <div className="building-layouts-card-alignment-container5">
              <button className="button">Button</button>
              <button className="building-layouts-card-alignment-button3 button">
                Button
              </button>
            </div>
          </div>
          <div className="building-layouts-card-alignment-feedback">
            <span>
              <span>
                How was it so far? Did you find it too easy or hard to follow?
                We would love to hear your feedback. Write us at
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <a href="mailto:hello@teleporthq.io?subject=">
                <span className="building-layouts-card-alignment-text08">
                  hello@teleporthq.io
                </span>
              </a>
              <span className="building-layouts-card-alignment-text09"></span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </div>
        </div>
        <Navigation></Navigation>
      </div>
    </div>
  )
}

export default BuildingLayoutsCardAlignment
