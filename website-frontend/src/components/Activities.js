import React from "react";
import Divider from "./utils/Divider";

import dummy from '../images/Background.png'

const SectionHeader = ({text}) => (
  <div className='bg-primary text-white text-center rounded pb-1 pt-2 mt-5'>
    <h3 className=""> {text} </h3>
  </div>
)

const Card = ({title, image, date}) => {
  return (
    <div>
      <div className="card border-0">
        <div className="inner">
            <img className="card-img-top rounded" src={image} alt=""/>
        </div> 
        <div className="card-body">
          <div className="row">
            <h6 className="card-title text-primary fw-bold">{title}</h6>
            <p className="card-text text-secondary fw-bold">[{date}]</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const SeeMore = ({link}) => {
  return (
    <div className="text-end fst-italic text-primary mb-5">
      <a href={link}>See more</a>
    </div>
  )
}

const Activities = () => {
  return (
    <div className="">
      {/* PROJECT */}
      <div class="container">
        <SectionHeader text="Project" />
        <div className="row mt-5">
          <div className="col-sm">
            <Card image={ dummy } title='Landscape Research Project' date='Present' />
          </div>
          <div className="col-sm">
            <Card image={ dummy } title='STEM Club Website' date='Past' />
          </div>
          <div className="col-sm">
            <Card image={ dummy } title='STEM Club Website' date='Past' />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm">
            <Card image={ dummy } title='SQL Workshop Series' date='Upcoming' />
          </div>
          <div className="col-sm">
            <Card image={ dummy } title='STEMazine' date='Past'/>
          </div>
          <div className="col-sm">
            <Card image={ dummy } title='STEM Club Website' date='Past' />
          </div>
        </div>

        <SeeMore link={'https://google.com'}/>

      </div>

      {/* EVENTS */}
      <div class="container">
        <SectionHeader text="Event" />
        <div className="row mt-5">
          <div class="col-sm">
            <Card image={ dummy } title='Trivia Night at Fulbright - an annual playground for STEM enthusiasts' date='Dec 12, 2021' />
          </div>
          <div class="col-sm">
            <Card image={ dummy } title='Sharing with NASA Intern' date='Feb 10, 2022' />
          </div>
          <div class="col-sm">
            <Card image={ dummy } title='Sharing with NASA Intern' date='Feb 10, 2022' />
          </div>
        </div>

        <SeeMore link={'https://google.com'}/>
        
      </div>

      {/* COMPETITION */}
      <div class="container">
        <SectionHeader text="Competition" />  
        <div className="row mt-5">
          <div class="col-sm">
            <Card image={ dummy } title='ICPC 2022' date='Mar 1st, 2022' />
          </div>
          <div class="col-sm">
            <Card image={ dummy } title='STEM Hackathon' date='Jun 7th, 2021'/>
          </div>
          <div class="col-sm">
            <Card image={ dummy } title='STEM Hackathon' date='Jun 7th, 2021'/>
          </div>
        </div>
        <SeeMore link={'https://google.com'}/>
      </div>
    </div>
  )
}

export default Activities