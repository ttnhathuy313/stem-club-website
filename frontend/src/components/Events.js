import React from "react";
import dummy from '../images/blog-picture1.png'
import SectionHeader from "./utils/SectionHeader";

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

const Projects = () => {
  return (
    <div className="">
      {/* EVENTS */}
      <div class="container">
        <SectionHeader text="Events" />
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
      </div>
    </div>
  )
}

export default Projects