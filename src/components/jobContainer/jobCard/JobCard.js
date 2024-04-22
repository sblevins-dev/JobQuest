import React from 'react'
import "../JobContainer.css"

const JobCard = () => {
  return (
    <div className='job-card-container'>
          <div className="job-header">
              <div className="company-logo">Logo</div>
              <h2 className="job-title">Software Engineer</h2>
          </div>

          <div className="job-container-second">
              <span className="job-status">Applied</span>
              <span className="job-link">Link</span>
          </div>


          <div className="job-detail-container">
              <div className="company-title">Facebook</div>
              <span className="job-location">Salem</span>
              <span className="job-type">Full-Time</span>
          </div>
    </div>
    
  )
}

export default JobCard