import logo from '../images/stem-club-logo.png'
import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from '../utils/api'
import SectionHeader from './utils/SectionHeader'
import './About.scss'

const Bio = ({profile, avatar}) => {
  return (
    <div className='text-start'>
      <h3> {profile.name} </h3>
      <p> {profile.subtitle} </p>
      <div className='d-flex flex-row'>
        <div className="">
          {avatar}
        </div>
        <p> {profile.bio} </p>
      </div>
    </div>
  )
}

const Person = ({ avatar, title, profile, index, loading=false }) => {
  if (loading) {
    return (
      <div className='col-6 col-md-3'>
        {/* <div className='placeholder' />
        <p>
          <span className="placeholder"></span>
        </p> */}
        {/* TODO: Have real placeholders */}
        <p>Loading ...</p>
      </div>
    )
  }
  
  // TODO: show bio via popup

  const avatarUrl = avatar.data 
    ? avatar.data.attributes.url 
    : logo
  
  const Avatar = () => 
  <div className='avatar-square-container'>
    <img
      src={ avatarUrl } alt={`avatar of ${title}`} 
      className='avatar'
      data-bs-toggle="modal" data-bs-target={`#bio${index}`}
    />
  </div>

  return (
    <div
      className="text-center col-6 col-md-3 cursor-pointer"
    >
      <Avatar /> 
      <p className="text-primary mt-2"> { title } ({profile.subtitle}) </p>

      <div className="modal fade" id={`bio${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h5 className="modal-title" id="exampleModalLabel">Bio of { title }</h5> */}
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body w-100">
              <Bio profile={profile} avatar={<Avatar />} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const About = () => {
  const [members, setMembers] = useState([])
  useEffect(() => {
    // console.log('before fetch:', members === []);
    const fetchMembers = async () => {
      const res = await axios.get(`${BACKEND_URL}/api/members?populate=*`)
      setMembers(res.data.data)
      // console.log('after fetch:', members === []);
    }

    fetchMembers()
  }, [])

  const People = ({role, title}) => (
    <div>
      <h4 className='bold text-primary py-3'>{title}</h4>
      <div className="row">
        {members.length === 0
        ? <Person loading />
        : members
          .filter(({attributes}) => attributes.role === role)
          .map(({attributes}, index) =>
            <Person
              key={attributes.name} 
              title={attributes.name} 
              avatar={attributes.avatar} 
              profile={attributes} 
              index={role+index} // to make the index unique for all people
            />)
        }
      </div>
      {
        
      }
    </div>
  )  

  return (
    <div className='px-5 py-3'>
      <SectionHeader text="Our Team" />
      <People role='leader' title='Leaders' />
      <People role='member' title='Members' />
      {/* <SectionHeader text="Our Partners" /> */}
      <People role='advisor' title='Advisors' />
    </div>
  )
}

export default About