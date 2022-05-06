import Divider from "./utils/Divider"
import blogcover from '../images/blog-cover.png'
import blogpicture1 from '../images/blog-picture1.png'
import blogpicture2 from '../images/blog-picture2.png'
import general from '../data/general.js'
import point1 from "../data/point1.js"

const General = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <h1 className="col text-secondary fw-bold">Fulbright <br></br> STEM Club</h1>
        <h2 className="col text-primary">Leaders of the next <br></br> technological revolution</h2>
      </div>
      <div className="row d-flex align-items-end my-2">
        <h3 className="col-1 text-primary fw-bold">Blog</h3>
        <h4 className="col-11 text-secondary fw-bold">Sharings</h4>
      </div>

      {
      general.map(general => (
        <div className="row">
          <h3 className="text-primary fw-bold">{general.title}</h3>
          <p className="fst-italic">{general.text}</p>
          <img src={blogcover} alt="Blog Cover" width="80%"></img>
        </div>
      ))
      }
    </div>
  )
}

const Point1 = () => {
  return (
    <div className="container">
      <h3 className="text-primary fw-bold">Point 1</h3>

      {
        point1.map(point1 => (
        <>
          <div className="col">
            <h4 className="text-secondary fw-bold">{point1.title1}</h4>
            <p>{point1.text1[0]}</p>
            <p>{point1.text1[1]}</p>
          </div>
          <div className="row">
            <div className="col">
              <img src={blogpicture1} alt="Blog Cover" width="95%"></img>
            </div>
            <div className="col">
              <p>{point1.text1[2]}</p>
              <p>{point1.text1[3]}</p>
              <p>{point1.text1[4]}</p>
            </div>
          </div>
        </>
        ))
      }
      
      {
        point1.map(point1 => (
          <>
          <div className="col">
          <h4 className="text-secondary fw-bold">{point1.title2}</h4>
          <p>{point1.text2[0]}</p>
          <p>{point1.text2[1]}</p>
        </div>
        <div className="row">
          <div className="col">
            <p>{point1.text2[2]}</p>
            <p>{point1.text2[3]}</p>
          </div>
          <div className="col">
            <img src={blogpicture2} alt="Blog Cover" width="90%"></img>
          </div>
        </div>
          </>
        ))
      }

    </div>
  )
}

const Blog = () => {
  return (
    <div>
      <General/>
      <Divider/>
      <Point1/>
    </div>
  )
}

export default Blog