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

// const SeeMore = ({link}) => {
//   return (
//     <div className="text-end fst-italic text-primary mb-5">
//       <a href={link}>See more</a>
//     </div>
//   )
// }

const Projects = () => {
  return (
    <div className="">
      {/* PROJECT */}
      <div class="container">
        <SectionHeader text="Projects" />
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
      </div>
    </div>
  )
}

export default Projects