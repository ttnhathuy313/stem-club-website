import React from "react";
import footerLinks from "../data/footerLinks.js";
import contacts from "../data/contacts.js";
import stemClubLogo from '../images/stem-club-logo.png'

const Column = ({ title, links }) => {
  return (
    <div className='d-flex flex-column col-4'>
      <h5 className="fw-bold text-white"> { title } </h5>
      {
        links.map((link, index) => {
          return <a className='text-white text-break' href={ link.url } key={index}> { link.text } </a>
        })
      }
    </div>
  )
}

const Contacts = () => {
  return <div className='d-flex flex-row'>
    {
      contacts.map(contact => (
        <a href={contact.url} className="text-white mx-1" >
          <i className={contact.iconClass} />
        </a>
      ))
    }
  </div>
}

const Footer = () => {
  return (
    <div className='bg-primary py-5 container-fluid text-white mt-4'>
      <div className="row gy-4 align-items-center w-75 mx-auto">
        <div className="col-12 col-md-3 d-flex flex-column align-items-center">
          <img src={ stemClubLogo } alt="STEM Club logo" className='w-75 flex-shrink-0'/>
          <Contacts />
        </div>

        <div className='col-12 col-md-9 container'>
          <div className="row justify-content-between">
            {
              footerLinks.map(
                col => <Column 
                  title={col.title} links={ col.links } key={col.title} 
                />
              )
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer