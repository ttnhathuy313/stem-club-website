import React from "react";
import footerLinks from "../data/footerLinks.js";
import contacts from "../data/contacts.js";
import stemClubLogo from '../images/stem-club-logo.png'
import './Footer.scss'

const Column = ({ title, links }) => {
  return (
    <div className='d-flex flex-column ms-5'>
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
      <div className="d-flex flex-row align-items-start justify-content-center w-75 mx-auto">
        <div className="d-flex flex-column align-items-center">
          <img src={ stemClubLogo } alt="STEM Club logo" className='footer-avatar'/>
          <Contacts />
        </div>

        {
          footerLinks.map(
            col => <Column 
              title={col.title} links={ col.links } key={col.title} 
            />
          )
        }
        {/* <div className='container'>
          <div className="row justify-content-between">
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default Footer