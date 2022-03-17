import Divider from "./utils/Divider"

// Dummy avatars
import khoi from '../images/khoi.png'
import phu from '../images/phu.png'
import lp from '../images/lp.png'
import thayminh from '../images/thayminh.jpg'
import kinho from '../images/kinho.jpg'
import thaykien from '../images/thaykien.jpg'
import nanette from '../images/nanette.jpg'
import gdsc from '../images/gdsc.png'

const Person = ({ avatar, title, bio }) => {
  // TODO: show bio via popup

  return (
    <div className="text-center col-4 col-md-3">
      <img src={ avatar } alt={`avatar of ${title}`} className='w-100 rounded-circle' />
      <p className="text-primary mt-2"> { title } </p>
    </div>
  )
}

const Members = () => {
  return (
    <div>
      <h3 className="text-primary mb-3">Members</h3>
      <div className="row">
        <Person avatar={ khoi } title='Nguyen Phung Nhat Khoi (Co23)' />
        <Person avatar={ phu } title='Nguyen Duc Phu (Co24)' />
        <Person avatar={ lp } title='Tran Lan Phuc (Co24)' />
      </div>
    </div>
  ) 
}

const Advisors = () => {
  return (
    <div>
      <h3 className="text-primary mb-3">Advisors</h3>
      <div className="row">
        <Person avatar={ thayminh } title='Dr. Nguyen Hop Minh' />
        <Person avatar={ thaykien } title='Dr. Truong Trung Kien' />
        <Person avatar={ kinho } title='Dr. KinHo Chan' />
        <Person avatar={ nanette } title='Dr. Nanette Veilleux' />
      </div>
    </div>
  ) 
}

const Partners = () => {
  return (
    <div>
      <h3 className="text-primary mb-3">Partners</h3>
      <div className="row">
        <Person avatar={ gdsc } title='GDSC @ Fulbright' />
      </div>
    </div>
  ) 
}

const About = () => {
  const CoreValue = ({title, content}) => {
    return (
      <div>
        <h5 className="text-secondary">
          { title }
        </h5>
        <p>
          { content }
        </p>
      </div>
    )
  }

  return (
    <div className=''>
      
      {/* MISSON AND CORE VALUES */}
      <div className="row">
        <div className="col-12 col-md">
          <h3 className='text-primary'>Mission</h3>
          <p>
            The world is evolving in unexpected ways. Fulbright is built to <a href="https://fulbright.edu.vn/mission/">close the gap</a> between higher education and Vietnam’s greatest needs. One of such needs is quality human resources for the technological revolution.
          </p>
          <p>
            Fulbright STEM Club is an incubator of future leaders for the next technological revolution. By 2025, Fulbright STEM Club will be one of the most innovative and vibrant STEM communities for Vietnamese youth.
          </p>
        </div>
        <div className="col-12 col-md">
          <h3 className='text-primary'>Core values</h3>
          <CoreValue title='Community-minded' content='We solve real problems in our community.' />
          <CoreValue title='Connected' content='We help great minds meet, network, and socialize. ' />
          <CoreValue title='Intellectually curious' content='We create innovative STEM-powered products.' />
          <CoreValue title='Career-oriented' content='We equip members with essential hard skills for future career. ' />
        </div>     
      </div>

      <Divider />

      {/* MEMBERS */}
      <Members />
      <Divider />

      {/* Advisors */}
      <Advisors />
      <Divider />

      {/* Partners */}
      <Partners />
    </div>
  )
}

export default About