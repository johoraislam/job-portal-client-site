import { Link, useLoaderData } from "react-router";
import { MapPin } from "lucide-react";

const JobDetails = () => {
  const job = useLoaderData();

  // console.log("Job Details:", JSON.stringify(job, null, 2));

  if (!job || job.message) {
    // Invalid ID or Job not found
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-red-100 text-red-700 rounded-lg text-center">
        {job?.message || "Job not found"}
      </div>
    );
  }

  const {
    _id,
    title,
    company,
    company_logo,
    description,
    location,
    requirements,
    responsibilities,
    salaryRange,
    jobType,
    applicationDeadline,
    hr_name,
    hr_email,
  } = job;

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
      {/* Top Section: Company */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={company_logo}
          alt={company}
          className="w-20 h-20 object-contain rounded-lg"
        />
        <div>
          <h2 className="text-2xl font-bold text-blue-700">{company}</h2>
          <p className="flex items-center text-gray-600 mt-1">
            <MapPin className="w-4 h-4 mr-1 text-blue-500" /> {location}
          </p>
          <p className="text-gray-500 text-sm mt-1">
            {jobType} | Deadline: {applicationDeadline}
          </p>
        </div>
      </div>

      {/* Job Title & Description */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-500 mb-2">{title}</h3>
        <p className="text-gray-700 mb-3">{description}</p>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Requirements:</h4>
        <div className="flex flex-wrap gap-2">
          {requirements.map((req, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm font-medium text-teal-700 bg-teal-100 rounded-full border border-teal-300"
            >
              {req}
            </span>
          ))}
        </div>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Responsibilities:</h4>
        <ul className="list-disc list-inside text-gray-700">
          {responsibilities.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      </div>

      {/* Salary & HR Contact */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-4">
        <p className="text-gray-700 font-medium">
          💰 {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
        </p>
        <div className="text-gray-700">
          <p>HR: {hr_name}</p>
          <p>Email: {hr_email}</p>
        </div>
      </div>

      {/* Apply Button */}
      <div className="mt-6 text-center">
        <Link to={`/jobapply/${_id}`}><button className="px-6 py-2 bg-teal-700 text-white font-medium rounded-lg hover:bg-teal-900 transition-colors duration-200">
          Apply Now
        </button></Link>
      </div>
    </div>
  );
};

export default JobDetails;
