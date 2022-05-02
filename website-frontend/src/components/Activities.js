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


const Card = ({title, image, date}) => {
  return (
    <div>
      <div className="card">
        <div className="inner">
            <img className="card-img-top rounded" src={image} alt=""/>
        </div> 
        <div className="card-body">
          <div className="row">
            <h5 className="card-title text-primary font-weight-bold">{title}</h5>
            <p className="card-text"><small class="text-muted">[{date}]</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}


const Activities = () => {
  return (
    <div className="">
      {/* PROJECT */}
      <h3 className="text-primary">Project</h3>
      <Divider />
      <div class="container">
        <div className="row">
          <div className="col-sm">
            <Card image={ dummypj1 } title='Landscape Research Project' date='Present' />
          </div>
          <div className="col-sm">
            <Card image={ dummypj2 } title='STEM Club Website' date='Past' />
          </div>
          <div className="col-sm">
            <Card image={ dummypj2 } title='STEM Club Website' date='Past' />
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <Card image={ dummypj3 } title='SQL Workshop Series' date='Upcoming' />
          </div>
          <div className="col-sm">
            <Card image={ dummypj4 } title='STEMazine' date='Past'/>
          </div>
          <div className="col-sm">
            <Card image={ dummypj2 } title='STEM Club Website' date='Past' />
          </div>
        </div>
      </div>

      {/* EVENTS */}
      <h3 className="text-primary">Events</h3>
      <Divider />
      <div class="container">
        <div className="row">
          <div class="col-sm">
            <Card image={ dummy1 } title='Trivia Night' date='Dec 12, 2021' />
          </div>
          <div class="col-sm">
            <Card image={ dummy2 } title='Sharing with NASA Intern' date='Feb 10, 2022' />
          </div>
          <div class="col-sm">
            <Card image={ dummy2 } title='Sharing with NASA Intern' date='Feb 10, 2022' />
          </div>
        </div>
      </div>

      {/* COMPETITION */}
      <h3 className="text-primary">Competition</h3>
      <Divider />
      <div class="container">
        <div className="row">
          <div class="col-sm">
            <Card image={ dummycompetition1 } title='ICPC 2022' date='Mar 1st, 2022' />
          </div>
          <div class="col-sm">
            <Card image={ dummycompetition2 } title='STEM Hackathon' date='Jun 7th, 2021'/>
          </div>
          <div class="col-sm">
            <Card image={ dummycompetition2 } title='STEM Hackathon' date='Jun 7th, 2021'/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Activities