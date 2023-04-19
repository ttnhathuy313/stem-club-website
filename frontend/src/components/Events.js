import React, { useState, useEffect } from "react";
import SectionHeader from "./utils/SectionHeader";
import dummy from '../images/blog-picture1.png'
import { Link } from "react-router-dom";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import { db } from '../utils/db.js'
import { collection, getDocs } from "firebase/firestore";
TimeAgo.addDefaultLocale(en)

const Card = ({ title, image, date, slug}) => {
  const imgUrl = image
    ? image.url
    : dummy

  return (
    <Link style={{ textDecoration: 'none' }} to={`${slug}`}>
      <div className="cursor-pointer">
        <div className="card border-0">
          <div className="inner">
            <img className="card-img-top rounded" src={imgUrl} alt="" />
          </div>
          <div>
            <div className="card-body row">
              <h6 className="card-title text-primary fw-bold">{title}</h6>
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
      var tempList = []
      const querySnapshot = await getDocs(collection(db, "events"));
      querySnapshot.forEach((doc) => {
        tempList.push(doc.data());
      });
      setEvents(tempList)
    }

    fetchEvents()
  }, [])

  const timeAgo = new TimeAgo('en-US')

  return (
    <div className="container pt-4 col-9">
      <SectionHeader text="Events" />
      <div className="row my-5">
        {events.length === 0 ? 
        <div className='col-6 col-md-3'>
          <p>Loading ...</p>
        </div> : events.map(attributes =>
            <div class="col-md-4 mb-5">
              <Card
                image={attributes.featureImage}
                title={attributes.name}
                date={timeAgo.format(Date.now() - (Date.now() - Date.parse(attributes.publishedAt)),
                  'round')}
                slug={attributes.slug}
              />
            </div>
          )}
      </div>
    </div>
  )
}

export default Events