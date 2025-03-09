import React, { useState } from "react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
};

const jobData: Job[] = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Corp",
    location: "New York, NY",
    description: "Develop and maintain web applications."
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovate Ltd",
    location: "San Francisco, CA",
    description: "Lead product teams and manage roadmaps."
  }
];

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="border p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-xl font-bold">{job.title}</h2>
      <p className="text-gray-600">{job.company} - {job.location}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && <p className="mt-2 text-gray-700">{job.description}</p>}
    </div>
  );
};

const JobList: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      {jobData.length > 0 ? (
        jobData.map(job => <JobCard key={job.id} job={job} />)
      ) : (
        <p className="text-gray-500">No jobs available at the moment.</p>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <JobList />
    </div>
  );
};

export default App;
