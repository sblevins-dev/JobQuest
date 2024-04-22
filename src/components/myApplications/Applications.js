import "./Applications.css"
import { Routes, Route, Link, NavLink } from "react-router-dom"
import Applied from "../applied/Applied"
import JobContainer from "../jobContainer/JobContainer"

const Applications = () => {
  return (
    <div className="applications-container">
        <h1 className="applications-title">My Applications</h1>
        <div className="applications-pages-container">
          <div className="applications-links-container">
            <ul className="applications-links">
              <li><NavLink to="/" className="link" activeClassName="active-link">Applied</NavLink></li>
              <li><NavLink to="/interviewed" className="link">Interviewed</NavLink></li>
              <li><NavLink to="/interviewed" className="link">Offered</NavLink></li>
              <li><NavLink to="/interviewed" className="link">Rejected</NavLink></li>
            </ul>
          </div>
          <Routes>
            <Route path="/" element={<JobContainer />} />
            <Route path="/interviewed" element={<JobContainer />} />
          </Routes>
        </div>
    </div>
  )
}

export default Applications