import React, { useState, useEffect } from "react";
import SectionHeader from "./utils/SectionHeader";
import dummy from '../images/blog-picture1.png'
import axios from "axios"
import { BACKEND_URL } from '../utils/api'
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const SingleProject = () => {
  let { slug } = useParams()

  const [project, setProject] = useState([])
  useEffect(() => {
    const fetchProject = async () => {
      const res = await axios.get(`${BACKEND_URL}/projects.json`)
      setProject(res.data.filter(project => {
        return project.slug === slug
      }))
    }

    fetchProject()
  }, [])


  const FeatureImg = (imgsrc) => {
    const image = imgsrc.imgsrc
      ? imgsrc.imgsrc.url
      : dummy;

    return (
      <img src={image} width="100%" className="my-4" />
    )
  }

  return (
    <div className="pt-4 container col-lg-7">
      {project.map(attributes =>
        <div>
          <SectionHeader text={attributes.name} className="mt-5" />
          <FeatureImg imgsrc={attributes.featureImage} />
          <ReactMarkdown className="my-4">
            {attributes.description}
          </ReactMarkdown>
        </div>
      )}
    </div>
  )

}

export default SingleProject