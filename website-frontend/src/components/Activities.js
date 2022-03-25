import React from "react";
import Divider from "./utils/Divider";

import dummy1 from '../images/dummy1.png';
import dummy2 from '../images/dummy2.png';

const Project = () => {
  return (
    <div>
      <h3 className="text-primary">Projects</h3>
      <Divider />

      <></>
    </div>
  )
}

const Event = ({title, image, date, excerpt}) => {
  return (
    <div>
      <div className="card mb-4 border-0"> 
        <div className="card-body">
          <div className="row">
            <div className="col-7">
              <img class="card-img-top mb-3" src={image} alt=''/>
              <h5 className="card-title text-secondary">{title}</h5>
              <p className="card-text"><small class="text-muted">[{date}]</small></p>
            </div>
            <div className="col-5">
              <p className="card-text">{excerpt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Competition = () => {
  return (
    <div>
      <h3 className="text-primary">Competition</h3>
    </div>
  )
}

const Activities = () => {
  return (
    <div className="">
      <div className="text-center">
        <h2 className="text-primary">Activities</h2>
      </div>

      {/* PROJECT */}
      <Project />

      {/* EVENTS */}
      <div>
        <h3 className="text-primary">Events</h3>
        <Divider />
        <div className="row">
          <div class="col-6">
            <Event image={ dummy1 } title='Trivia Night' date='Dec 12, 2021' 
            excerpt='Topic: On Dec 12, 2021, STEM Club hosted successfully Trivia Night to create a playground for STEM and non-STEM background students at Fulbright campus.'/>
          </div>
          <div class="col-6">
            <Event image={ dummy2 } title='Sharing with NASA Intern' date='Feb 10, 2022' 
            excerpt='Topic: During the talk, insights about being an intern in such an prestigious STEM organization, the pros and cons of being an data analyst intern at NASA'/>
          </div>
        </div>
      </div>

      {/* COMPETITION */}
      <Competition />
      <Divider />

    </div>
  )
}

export default Activities