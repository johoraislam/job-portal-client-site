import { useEffect, useState } from "react"
import HotJobCard from "../components/HotJobCard"

const HotJobs = () => {
    const [jobs,setJobs] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/jobs')
        .then(res=> res.json())
        .then(data=> setJobs(data))
    },[])
    console.log(jobs)
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-stretch">
            {
                jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
            }
        </div>
    </div>
  )
}

export default HotJobs