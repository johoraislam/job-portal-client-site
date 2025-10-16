import { MapPin } from "lucide-react";
import { NavLink } from "react-router";

const HotJobCard = ({ job }) => {
  const {
    _id,
    title,
    company,
    company_logo,
    description,
    location,
    requirements,
    salaryRange,
  } = job;

  return (
    <div className="px-6 py-4 rounded-2xl flex-col justify-between shadow-xl hover:scale-[1.02] transition-all duration-300 bg-stone-100 border border-gray-200">
      {/* Top Section */}
      <div className="flex gap-3 items-center mb-3">
        <img
          className="w-16 h-16 object-contain"
          src={company_logo}
          alt={company}
        />
        <div>
          <h4 className="text-xl font-semibold text-blue-700">{company}</h4>
          <p className="flex items-center text-gray-600 text-sm">
            <MapPin className="w-4 h-4 mr-1 text-blue-500" /> {location}
          </p>
        </div>
      </div>

      {/* Body */}
      <div>
        <h3 className="text-lg font-semibold text-blue-500 mb-1">{title}</h3>
        <p className="text-gray-700 text-sm line-clamp-3">{description}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {requirements.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm  text-teal-700 rounded border border-teal-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-gray-700 text-sm font-medium">
          💰 {salaryRange.min}-{salaryRange.max} {salaryRange.currency}
        </p>
        <NavLink to={`/job/${_id}`}>
          <button className="btn bg-teal-700 text-white hover:bg-teal-900 transition-all duration-200">
           Details
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default HotJobCard;
