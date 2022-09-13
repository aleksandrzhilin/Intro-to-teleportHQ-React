import React from 'react'

import { Helmet } from 'react-helmet'

import Heading from '../components/heading'
import ListItem from '../components/list-item'
import Tip from '../components/tip'
import Navigation from '../components/navigation'
import './building-layouts-navbar.css'

const BuildingLayoutsNavbar = (props) => {
  return (
    <div className="building-layouts-navbar-container">
      <Helmet>
        <title>Building-Layouts-Navbar - Intro to teleportHQ</title>
        <meta
          name="description"
          content="This project will introduce you to the capabilities of teleportHQ. Learn to navigate around the app and go through the main features with us."
        />
        <meta
          property="og:title"
          content="Building-Layouts-Navbar - Intro to teleportHQ"
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
      <div className="building-layouts-navbar-container1">
        <div className="building-layouts-navbar-container2">
          <Heading
            text=" Crating a Navbar"
            heading1="Building Layouts"
          ></Heading>
          <h2 className="building-layouts-navbar-text subheading">
            Desired Outcome
          </h2>
          <div className="building-layouts-navbar-container3">
            <div className="building-layouts-navbar-div">
              <div className="building-layouts-navbar-container4">
                <div className="building-layouts-navbar-container5"></div>
              </div>
            </div>
            <a
              href="https://play.teleporthq.io/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Get Started
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              Link
            </a>
          </div>
          <div className="building-layouts-navbar-ul">
            <ListItem text="Add an Image (I) and four Text (T) elements or Links (L)"></ListItem>
            <ListItem text="Select the image together with the first three text elements and group them "></ListItem>
            <Tip text="Ctrl/Cmd + Click to select and Ctrl + G to group"></Tip>
            <ListItem text="Select the parent container. Change the distribution of the items to space-between from the Layout section in the Visual Inspector"></ListItem>
            <ListItem text="Set margins on the first three text elements"></ListItem>
            <ListItem text="Bonus - add links to all the texts"></ListItem>
            <div className="building-layouts-navbar-container6">
              <Tip text="To add a link, select and element and click on the link icon above it"></Tip>
              <div className="building-layouts-navbar-container7">
                <svg
                  viewBox="0 0 1024 1024"
                  className="building-layouts-navbar-icon"
                >
                  <path d="M440.236 635.766c-13.31 0-26.616-5.076-36.77-15.23-95.134-95.136-95.134-249.934 0-345.070l192-192c46.088-46.086 107.36-71.466 172.534-71.466s126.448 25.38 172.536 71.464c95.132 95.136 95.132 249.934 0 345.070l-87.766 87.766c-20.308 20.308-53.23 20.308-73.54 0-20.306-20.306-20.306-53.232 0-73.54l87.766-87.766c54.584-54.586 54.584-143.404 0-197.99-26.442-26.442-61.6-41.004-98.996-41.004s-72.552 14.562-98.996 41.006l-192 191.998c-54.586 54.586-54.586 143.406 0 197.992 20.308 20.306 20.306 53.232 0 73.54-10.15 10.152-23.462 15.23-36.768 15.23z"></path>
                  <path d="M256 1012c-65.176 0-126.45-25.38-172.534-71.464-95.134-95.136-95.134-249.934 0-345.070l87.764-87.764c20.308-20.306 53.234-20.306 73.54 0 20.308 20.306 20.308 53.232 0 73.54l-87.764 87.764c-54.586 54.586-54.586 143.406 0 197.992 26.44 26.44 61.598 41.002 98.994 41.002s72.552-14.562 98.998-41.006l192-191.998c54.584-54.586 54.584-143.406 0-197.992-20.308-20.308-20.306-53.232 0-73.54 20.306-20.306 53.232-20.306 73.54 0.002 95.132 95.134 95.132 249.932 0.002 345.068l-192.002 192c-46.090 46.088-107.364 71.466-172.538 71.466z"></path>
                </svg>
              </div>
            </div>
          </div>
          <h2 className="building-layouts-navbar-text1 subheading">
            Give it a try
          </h2>
          <div className="building-layouts-navbar-container8">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/img/default.png"
              className="building-layouts-navbar-image"
            />
            <a
              href="https://teleporthq.io"
              target="_blank"
              rel="noreferrer noopener"
              className="building-layouts-navbar-link2"
            >
              Home
            </a>
            <a
              href="https://teleporthq.io/about"
              target="_blank"
              rel="noreferrer noopener"
              className="building-layouts-navbar-link3"
            >
              About
            </a>
            <a
              href="https://teleporthq.io/docs"
              target="_blank"
              rel="noreferrer noopener"
              className="building-layouts-navbar-link4"
            >
              Docs
            </a>
          </div>
        </div>
        <Navigation></Navigation>
      </div>
    </div>
  )
}

export default BuildingLayoutsNavbar
