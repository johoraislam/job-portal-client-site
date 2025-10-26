import { useLoaderData } from "react-router";

const ViewApplication = () => {
  const applications = useLoaderData();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        {applications.length > 0 ? "All Applications" : "No Applications Found"}
      </h2>

      {applications.length > 0 ? (
        <div className="overflow-x-auto shadow-lg rounded-xl border border-gray-200">
          <table className="table-auto w-full text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 border-b">#</th>
                <th className="p-3 border-b">Applicant Email</th>
                <th className="p-3 border-b">Resume</th>
                <th className="p-3 border-b">GitHub</th>
                <th className="p-3 border-b">LinkedIn</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr
                  key={app._id || index}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="p-3 border-b">{index + 1}</td>
                  <td className="p-3 border-b">{app.applicant_email}</td>
                  <td className="p-3 border-b text-blue-600 underline">
                    <a
                      href={app.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Resume
                    </a>
                  </td>
                  <td className="p-3 border-b text-blue-600 underline">
                    <a
                      href={app.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </td>
                  <td className="p-3 border-b text-blue-600 underline">
                    <a
                      href={app.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No applications have been submitted yet.
        </p>
      )}
    </div>
  );
};

export default ViewApplication;
