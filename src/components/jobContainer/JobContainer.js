import { useEffect } from "react"
import "./JobContainer.css"
import JobCard from "./jobCard/JobCard"

const JobContainer = ({jobList}) => {

    useEffect(() => {
        
    }, [jobList])

    return (
        <div className="applications-jobs-container">
            {jobList.length > 0 ? jobList.map(job => {
                return (
                    <JobCard key={job.id} job={job} />
                )
            }) : <div>Nothing to show</div>}
        </div>
    )
}

export default JobContainer