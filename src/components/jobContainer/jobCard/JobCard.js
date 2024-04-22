import React from 'react'
import "../JobContainer.css"

const JobCard = ({job}) => {
  return (
    <div className='job-card-container'>
          <div className="job-header">
              <div className="company-logo">{job.companyLogo}</div>
              <h2 className="job-title">{job.jobTitle}</h2>
          </div>

          <div className="job-container-second">
              <span className="job-status">{job.status}</span>
              <span className="job-link">{job.link}</span>
          </div>


          <div className="job-detail-container">
              <div className="company-title">{job.companyTitle}</div>
              <span className="job-location">{job.location}</span>
              <span className="job-type">{job.type}</span>
          </div>
    </div>
    
  )
}

export default JobCard