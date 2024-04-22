import "./Applications.css"
import { Routes, Route, Link, NavLink } from "react-router-dom"
import Applied from "../applied/Applied"
import JobContainer from "../jobContainer/JobContainer"
import { useEffect, useState } from "react"

let data = [{
  "id": 1,
  "status": "applied",
  "companyLogo": "Logo",
  "jobTitle": "Software Engineer",
  "companyTitle": "Facebook",
  "location": "Salem",
  "type": "part-time",
  "link": "link"
}, {
  "id": 2,
  "status": "interviewed",
  "companyLogo": "Logo",
  "jobTitle": "Software Engineer",
  "companyTitle": "Adams",
  "location": "Washington",
  "type": "full-time",
  "link": "link"
}]

const Applications = () => {

  const [activeTab, setActiveTab] = useState("applied");
  const [jobList, setJobList] = useState(data);
  const [filteredList, setFilteredList] = useState([]);

  function filterList(param) {
    setFilteredList(jobList.filter(job => job.status === param))
  }

  function setTab(tabToActivate) {
    setActiveTab(tabToActivate)

    filterList(tabToActivate)
  }

  useEffect(() => {
    filterList("applied");
  }, []) 

  return (
    <div className="applications-container">
        <h1 className="applications-title">My Applications</h1>
        <div className="applications-pages-container">
          <div className="applications-links-container">
            <ul className="applications-links">
              <li className={activeTab !== "applied" ? "link" : "link active-link"} onClick={() => setTab("applied")}>Applied</li>
              <li className={activeTab !== "interviewed" ? "link" : "link active-link"} onClick={() => setTab("interviewed")}>Interviewed</li>
              <li className={activeTab !== "offered" ? "link" : "link active-link"} onClick={() => setTab("offered")}>Offered</li>
              <li className={activeTab !== "rejected" ? "link" : "link active-link"} onClick={() => setTab("rejected")}>Rejected</li>
            </ul>
          </div>
          <JobContainer jobList={filteredList} />
        </div>
    </div>
  )
}

export default Applications