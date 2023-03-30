import logo from '../images/stem-club-logo.png'
import { useEffect, useState } from "react"
import axios from "axios"
import { BACKEND_URL } from '../utils/api'
import SectionHeader from './utils/SectionHeader'
import './About.scss'

// function countString(str, ch) {
//   let count = 0
//     for (let i = 0; i < str.length; i++) {
//       if (str.charAt(i) === ch) {
//         count += 1
//       }
//     }
//   return count
// }

const Bio = ({ profile, avatar }) => {
  // while (countString(profile.name, ' ') !== 1) {
  //   profile.name = profile.name.slice(profile.name.indexOf(' ') + 1)
  // }
  return (
    <div className='text-start py-3 px-3'>
      <h3 classname="fw-bold"> {profile.name} </h3>
      <p> {profile.subtitle} </p>
      <div className='d-flex flex-row'>
        <div className="">
          {avatar}
        </div>
        <div style={{ marginLeft: 20 }}>
          <h5 classname="fw-bold">Profile</h5>
          <div> {profile.bio} </div>
          <div>Class of </div>
          <div>DOB: {profile.dateOfBirth} </div>
          <div>Joined since {profile.joinedSince} </div>
          <div>Linkedin: {profile.linkedin != null
            ? <a href={profile.linkedin}>{profile.name} </a>
            : "N/A"} </div>
          <div>Major: {profile.major != null ? profile.major : "N/A"} </div>
          <div>Minor: {profile.minor != null ? profile.minor : "N/A"} </div>
          <div>Interest: {profile.interests != null ? profile.interests : "N/A"}</div>
        </div>
      </div>
    </div>
  )
}

const Person = ({ avatar, title, profile, index, loading = false }) => {
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

  const avatarUrl = avatar
    ? avatar.url
    : logo
  console.log(avatar);
    
  const Avatar = () =>
    <div className='avatar-square-container'>
      <img
        src={avatarUrl} alt={`avatar of ${title}`}
        className='avatar'
        data-bs-toggle="modal" data-bs-target={`#bio${index}`}
      />
    </div>

  return (
    <div
      className="text-center col-6 col-sm-4 col-md-3 col-lg-2 cursor-pointer flex flex-column align-items-center"
    >
      <Avatar />
      <div className="text-primary mt-2 fw-bold">
        {title}
      </div>
      <p className="text-gray-100">
        {profile.subtitle}
      </p>

      <div className="modal fade" id={`bio${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
        <div className="modal-dialog">
          <div className="modal-content border-radius">
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
    const fetchMembers = async () => {
      const res = await axios.get(`${BACKEND_URL}/members.json`)
      setMembers(res.data)
    }

    fetchMembers()
  }, [])
  const People = ({ role, title }) => (
    <div>
      <h4 className='bold text-primary py-3'>{title}</h4>
      <div className="row gx-3 gx-md-5">
        {members.length === 0
          ? <Person loading />
          : members
            .filter(attributes => attributes.role === role && attributes.priorityLevel !== -1)
            .sort((a, b) => a.priorityLevel < b.priorityLevel)
            .map((attributes , index) =>
              <Person
                key={attributes.name}
                title={attributes.name}
                avatar={attributes.avatar}
                profile={attributes}
                index={role + index} // to make the index unique for all people
              />)
        }
      </div>
    </div>
  )

  return (
    <div className='container'>
      <SectionHeader text="Our Team" />
      <People role='leader' title='Leaders' />
      <People role='member' title='Members' />
      <SectionHeader text="Our Partners" />
      <People role='advisor' title='Advisors' />
    </div>
  )
}

export default About