import React from "react";
import footerLinks from "../data/footerLinks.js";
import contacts from "../data/contacts.js";
import stemClubLogo from '../images/stem-club-logo.png'
import './Footer.scss'

const Column = ({ title, links }) => {
  return (
    <div className='col-4 col-md-3 d-flex flex-column px-3'>
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
      <div className="mx-auto row col-12 col-md-8">
        {
          footerLinks.map(
            col => <Column 
              title={col.title} links={ col.links } key={col.title} 
            />
          )
        }
        <div className="d-flex flex-column align-items-center col-12 col-md-3">
          <img src={ stemClubLogo } alt="STEM Club logo" className='footer-avatar d-none d-md-block'/>
          <Contacts />
        </div>
        {/* <div className='container'>
          <div className="row justify-content-between">
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Footer