import { useEffect, useState } from "react";
import UseAuth from "../../hooks/UseAuth";
import { Link } from "react-router";

const MyPostedJob = () => {
  const [postedJobs, setPostedJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = UseAuth();
  console.log("User:", user);


  useEffect(() => {
    if (!user?.email) return;
    {
      fetch(`http://localhost:3000/jobs?email=${user.email}`)
        .then(res => res.json())
        .then(data => setPostedJobs(data))
        .catch(err => console.error("Error fetching posted jobs:", err))
        .finally(() => setLoading(false));
    }
  }, [user?.email]);
console.log("Posted Jobs:", postedJobs);


  if (loading) return <p>Loading your posted jobs...</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-center">My Posted Jobs</h2>

      {postedJobs.length === 0 ? (
        <p className="text-center text-gray-500">You have not posted any jobs yet.</p>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-xl border">
          <table className="table w-full border-collapse">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 text-left">#</th>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Company</th>
                <th className="p-3 text-left">Location</th>
                <th className="p-3 text-left">Type</th>
                <th className="p-3 text-left">Salary</th>
                <th className="p-3 text-left">Deadline</th>
                <th className="p-3 text-left">View application</th>
              </tr>
            </thead>
            <tbody>
              {postedJobs.map((job, index) => (
                <tr
                  key={job._id}
                  className="hover:bg-gray-50 border-b text-gray-800"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 font-medium">{job.title}</td>
                  <td className="p-3">{job.company}</td>
                  <td className="p-3">{job.location}</td>
                  <td className="p-3">{job.jobType}</td>
                  <td className="p-3">{job.salaryRange}</td>
                  <td className="p-3">{job.applicationDeadline}</td>
                  <Link to={`/viewapplication/${job._id}`} className="p-3">
                  <button className="btn bg-cyan-500 hover:bg-cyan-600 px-4 py-2 text-white">View Application</button>
                  </Link>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyPostedJob;
