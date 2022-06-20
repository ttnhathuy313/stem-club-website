import React, { useState, useEffect } from "react";
import SectionHeader from "./utils/SectionHeader";
import moment from 'moment';
import axios from "axios"
import { BACKEND_URL } from '../utils/api'
import dummy from '../images/blog-picture1.png'
import { Link } from "react-router-dom";

const Card = ({title, image, date, slug}) => {
  const imgUrl = image.data
    ? image.data.attributes.url
    : dummy
  
  return (
    <Link style={{textDecoration: 'none'}} to={`${slug}`}>
      <div className="cursor-pointer">
        <div className="card border-0">
          <div className="inner">
              <img className="card-img-top rounded" src={imgUrl} alt=""/>
          </div> 
          <div>
            <div className="row">
              <h6 className="card-title text-primary fw-bold mt-3">{title}</h6>
              <div className="card-text text-muted text-secondary fst-italic">
                <small class="text-muted">
                  {date}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

const Events = () => {
  const [events, setEvents] = useState([])
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get(`${BACKEND_URL}/api/events?populate=*`)
      console.log(`${BACKEND_URL}/api/events?populate=*`);
      console.log(res.data.data);
      setEvents(res.data.data)
    }

    fetchEvents()
  }, [])

  return (
    <div className="container pt-4 col-9">
      <SectionHeader text="Events" />
      <div className="row my-5">
        {events
        .map(({attributes}) => 
          <div class="col-md-4 mb-5">
            <Card 
              image={ attributes.featureImage } 
              title={ attributes.name } 
              date={ moment().startOf('day').fromNow() } 
              slug={ attributes.slug }
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Events