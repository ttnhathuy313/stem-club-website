import React from "react";
import Divider from "./utils/Divider";

import dummy1 from '../images/dummy1.png';
import dummy2 from '../images/dummy2.png';
import dummypj1 from '../images/dummypj1.png';
import dummypj2 from '../images/dummypj2.png';
import dummypj3 from '../images/dummypj3.png';
import dummypj4 from '../images/dummypj4.png';
import dummycompetition1 from '../images/dummycompetition1.png';
import dummycompetition2 from '../images/dummycompetition2.png';

const Card = ({title, image, date, excerpt}) => {
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

const Activities = () => {
  return (
    <div className="">
      <div className="text-center">
        <h2 className="text-primary">Activities</h2>
      </div>

      {/* PROJECT */}
      <div>
        <h3 className="text-primary">Project</h3>
        <Divider />

        <div className="row">
          <div className="col-6">
            <Card image={ dummypj1 } title='Landscape Research Project' date='Present'
            excerpt='Purpose: This project aims to collect data about our surroundings and analyze the abc of xyz...
            Field: Chemistry, Biology...' />
          </div>
          <div className="col-6">
            <Card image={ dummypj2 } title='STEM Club Website' date='Past'
            excerpt='Purpose: This project aims to create a professional identity for Fulbright STEM Club beyond Fanpage.
            Field: Computer Science, Web Design.' />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <Card image={ dummypj3 } title='SQL Workshop Series' date='Upcoming'
            excerpt='Purpose: This project aims to collect data about our surroundings and analyze the abc of xyz...
            Field: Chemistry, Biology...' />
          </div>

          <div className="col-6">
            <Card image={ dummypj4 } title='STEMazine' date='Past'
            excerpt='Purpose: This project aims to create a professional identity for Fulbright STEM Club beyond Fanpage.
            Field: Computer Science, Web Design' />
          </div>
        </div>
      </div>

      {/* EVENTS */}
      <div>
        <h3 className="text-primary">Events</h3>
        <Divider />
        <div className="row">
          <div class="col-6">
            <Card image={ dummy1 } title='Trivia Night' date='Dec 12, 2021' 
            excerpt='Topic: On Dec 12, 2021, STEM Club hosted successfully Trivia Night to 
            create a playground for STEM and non-STEM background students at Fulbright campus.'/>
          </div>
          <div class="col-6">
            <Card image={ dummy2 } title='Sharing with NASA Intern' date='Feb 10, 2022' 
            excerpt='Topic: During the talk, insights about being an intern in such an 
            prestigious STEM organization, the pros and cons of being an data analyst 
            intern at NASA'/>
          </div>
        </div>
      </div>

      {/* COMPETITION */}
      <div>
        <h3 className="text-primary">Competition</h3>
        <Divider />
        
        <div className="row">
          <div class="col-6">
            <Card image={ dummycompetition1 } title='ICPC 2022' date='Mar 1st, 2022' 
            excerpt='A 4-member team from STEM Club has participated in the competition.
            The team has finished the challenge with a really promising result.'/>
          </div>
          <div class="col-6">
            <Card image={ dummycompetition2 } title='STEM Hackathon' date='Jun 7th, 2021' 
            excerpt='STEM Hackathon is a place for STEM enthusiasts to join and challenge 
            themselves with STEM topics throughout 72 hours.'/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Activities