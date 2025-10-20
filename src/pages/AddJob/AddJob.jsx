import { useState } from "react";
import { useNavigate } from "react-router";

const AddJob = () => {
  const navigator = useNavigate();
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    company_logo: "",
    location: "",
    salaryRange: "",
    jobType: "",
    applicationDeadline: "",
    description: "",
    requirements: "",
    responsibilities: "",
    hr_name: "",
    hr_email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Job Added:", jobData);

    const formattedData = {
      ...jobData,
      requirements: jobData.requirements
        .split(/\n|,/)
        .map((item) => item.trim())
        .filter((item) => item !== ""),
      responsibilities: jobData.responsibilities
        .split(/\n|,/)
        .map((item) => item.trim())
        .filter((item) => item !== ""),
    };

    fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Job added successfully!");
          navigator("/mypostedjobs");
        } else {
          throw new Error("Failed to add job");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Job</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Job Title */}
        <div>
          <label className="block mb-1 font-medium">Job Title</label>
          <input
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
            placeholder="Software Engineer"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block mb-1 font-medium">Company</label>
          <input
            type="text"
            name="company"
            value={jobData.company}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
            placeholder="TechCorp Ltd."
          />
        </div>

        {/* Company Logo */}
        <div>
          <label className="block mb-1 font-medium">Company Logo URL</label>
          <input
            type="url"
            name="company_logo"
            value={jobData.company_logo}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="https://i.ibb.co/logo.png"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={jobData.location}
            onChange={handleChange}
            required
            className="input input-bordered w-full"
            placeholder="Dhaka, Bangladesh"
          />
        </div>

        {/* Salary */}
        <div>
          <label className="block mb-1 font-medium">Salary Range</label>
          <input
            type="text"
            name="salaryRange"
            value={jobData.salaryRange}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="$800 - $1200"
          />
        </div>

        {/* Job Type */}
        <div>
          <label className="block mb-1 font-medium">Job Type</label>
          <select
            name="jobType"
            value={jobData.jobType}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select type</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Deadline */}
        <div>
          <label className="block mb-1 font-medium">Application Deadline</label>
          <input
            type="date"
            name="applicationDeadline"
            value={jobData.applicationDeadline}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        {/* HR Name */}
        <div>
          <label className="block mb-1 font-medium">HR Name</label>
          <input
            type="text"
            name="hr_name"
            value={jobData.hr_name}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="John Doe"
          />
        </div>

        {/* HR Email */}
        <div>
          <label className="block mb-1 font-medium">HR Email</label>
          <input
            type="email"
            name="hr_email"
            value={jobData.hr_email}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="hr@company.com"
          />
        </div>

        {/* Full Width Textareas */}
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            value={jobData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            rows="3"
            placeholder="Write a short job description..."
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Requirements</label>
          <textarea
            name="requirements"
            value={jobData.requirements}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            rows="2"
            placeholder="List requirements..."
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Responsibilities</label>
          <textarea
            name="responsibilities"
            value={jobData.responsibilities}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            rows="2"
            placeholder="List responsibilities..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn bg-[#70B4EC] text-white hover:bg-[#362478] transition duration-500 md:col-span-2"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
