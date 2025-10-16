import { useEffect, useState } from "react"
import UseAuth from "../../Hooks/UseAuth"

const MyApplication = () => {
    const {user} = UseAuth()
    const [applications, setApplications] = useState([])

   useEffect(() => {
  if (!user?.email) return; 
  fetch(`http://localhost:3000/job-application?email=${user.email}`)
    .then(res => res.json())
    .then(data => setApplications(data))
    .catch(err => console.error(err));
}, [user?.email]);

  return (
  <div className="max-w-3xl mx-auto p-6">
    <h2 className="text-2xl font-semibold mb-6 text-center">My Applications</h2>

    {applications.length > 0 ? (
      <div className="space-y-4">
        {applications.map(app => (
          <div key={app._id || app.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-medium">{app.jobTitle}</h3>
            <p className="text-gray-600">Status: <span className="font-medium">{app.status || "Pending"}</span></p>
            <p className="text-gray-600">Company: {app.company}</p>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-500">No applications found.</p>
    )}
  </div>
);

}

export default MyApplication