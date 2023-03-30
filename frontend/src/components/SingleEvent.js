import React, { useState, useEffect } from "react";
import SectionHeader from "./utils/SectionHeader";
import dummy from '../images/blog-picture1.png'
import axios from "axios"
import { BACKEND_URL } from '../utils/api'
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const SingleEvent = () => {
  let { slug } = useParams()

  const [event, setEvent] = useState([])
  useEffect(() => {
    const fetchEvent = async () => {
      const res = await axios.get(`${BACKEND_URL}/events.json`)
      setEvent(res.data.filter(event => {
        return event.slug === slug
      }))
    }

    fetchEvent()
  }, [])


  const FeatureImg = (imgsrc) => {
    const image = imgsrc.imgsrc
      ? imgsrc.imgsrc.url
      : dummy;
    console.log(imgsrc);
    return (
      <img src={image} width="100%" className="my-4" />
    )
  }

  return (
    <div className="pt-4 container col-lg-7">
      {event.length === 0 ?
        <div className='col-6 col-md-3'>
          <p>Loading ...</p>
        </div> : event
          .map(attributes =>
            <div>
              <SectionHeader text={attributes.name} className="mt-5" />
              <FeatureImg imgsrc={attributes.featureImage} />
              <ReactMarkdown className="my-4" components={{
                img: ({ src, ...props }) => {
                  // console.log(src);
                  return <img src={src} width="100%" className="my-4" />
                }
              }}>
                {attributes.description}
              </ReactMarkdown>
            </div>
          )}
    </div>
  )

}

export default SingleEvent