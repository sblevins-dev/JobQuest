import "./JobContainer.css"
import JobCard from "./jobCard/JobCard"

const JobContainer = () => {
    return (
        <div className="applications-jobs-container">
            <JobCard />
            <JobCard />
            <JobCard />
        </div>
    )
}

export default JobContainer