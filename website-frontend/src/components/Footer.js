import React from "react";
import footerLinks from "../data/footerLinks.js";
import contacts from "../data/contacts.js";
import stemClubLogo from '../images/stem-club-logo.png'

const Column = ({ title, links }) => {
  return (
    <div className='d-flex flex-column col-3'>
      <h5 className="fw-bold text-white"> { title } </h5>
      {
        links.map(link => {
          return <a className='text-white' href={ link.url }> { link.text } </a>
        })
      }
    </div>
  )
}

const Contacts = () => {
  return <div className='d-flex flex-column'>
    {
      contacts.map(contact => (
        <p> <span className="fw-bold">{ contact.text }</span>: { contact.url } </p>
      ))
    }
  </div>
}

const Footer = () => {
  return (
    <div className='bg-black p-5 container-fluid text-white mt-4'>
      <div className="row">
        <div className="col-6 d-flex flex-row align-items-center">
          <img src={ stemClubLogo } alt="STEM Club logo" className='w-25 me-4'/>
          <Contacts />
        </div>
        <div className='col-6 container'>
          <div className="row justify-content-end">
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
      <div className="text-center mt-4">
        <div>&copy; 2022 - Present, Fulbright STEM Club. All Rights Reserved.</div>
      </div>
    </div>
  )
}

export default Footer