import { useLoaderData, useNavigate, useParams } from "react-router";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import UseAuth from "../../Hooks/UseAuth";

const JobApply = () => {
  const job = useLoaderData();
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = UseAuth();
  // console.log(user,id);
  const { title, company, hr_email } = job;

  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    resume: "",
    coverLetter: "",
    github: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.resume) {
      toast.error("Please fill in all required fields!");
      return;
    }

    // console.log("Job Applied:", { ...formData, jobTitle: title, company });

    toast.success("Your application has been submitted successfully!");
    setFormData({
      name: "",
      email: "",
      resume: "",
      coverLetter: "",
      github: "",
    });

    const jobApplication = {
      jobId: id,
      applicantEmail: user?.email, 
      github: formData.github,
      resume: formData.resume,
      coverLetter: formData.coverLetter,
      company,
      jobTitle: title,
      status: "Pending",
    };
    fetch("http://localhost:3000/job-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Job Application Successful");
        }
        navigate("/myapplications");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to submit application. Please try again later.");
      });
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
        Apply for {title}
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Company: <span className="font-medium">{company}</span>
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Resume Link (Google Drive / Portfolio) *
          </label>
          <input
            type="url"
            name="resume"
            value={formData.resume}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
            placeholder="Paste your resume link here"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            GitHub Profile (if applicable)
          </label>
          <input
            type="url"
            name="github"
            value={formData.github}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
            placeholder="Paste your GitHub profile link here"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Cover Letter
          </label>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-blue-500"
            placeholder="Write a short cover letter..."
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Application
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        <p>
          HR Email: <span className="font-medium">{hr_email}</span>
        </p>
      </div>

      <Toaster position="top-center" />
    </div>
  );
};

export default JobApply;
