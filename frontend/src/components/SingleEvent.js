import React, { useState, useEffect } from "react";
import SectionHeader from "./utils/SectionHeader";
import dummy from '../images/blog-picture1.png'
import axios from "axios"
import { BACKEND_URL } from '../utils/api'
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const SingleEvent = () =>{
  let { slug } = useParams()
  const qs = require('qs');
  const query = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: '*',
  }, {
    encodeValuesOnly: true,
  });

  const [event, setEvent] = useState([])
  useEffect(() => {
    const fetchEvent = async () => {
      const res = await axios.get(`${BACKEND_URL}/api/events?${query}`)
      console.log('The URL of data is ' + `${BACKEND_URL}/api/events?${query}`);
      console.log(res.data.data);
      setEvent(res.data.data)
    }

    fetchEvent()
  }, [])


  const FeatureImg = (imgsrc) => {
    console.log(imgsrc.imgsrc.data);
    const image = imgsrc.imgsrc.data
      ? imgsrc.imgsrc.data.attributes.url
      : dummy;
    
    return (
      <img src={image} width="100%" className="my-4"/>
    )
  }

  return(
    <div className="pt-4 container col-lg-7">
      {event
      .map(({attributes}) =>
        <div>
          <SectionHeader text={ attributes.name } className="mt-5"/>
          <FeatureImg imgsrc={ attributes.featureImage }/>
          <ReactMarkdown className="my-4">
            {attributes.description}
          </ReactMarkdown>
        </div>
      )}
    </div>
  )

}

export default SingleEvent