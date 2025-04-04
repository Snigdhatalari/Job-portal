// components/JobCard.tsx
import { Link } from 'react-router-dom';
import { Job } from '../types/types';

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">{job.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{job.company}</p>
          </div>
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
            {job.isRemote ? 'Remote' : job.location}
          </span>
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{job.salary}</p>
        <p className="mt-4 text-gray-700 dark:text-gray-300 line-clamp-2 flex-1">{job.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {job.requirements.slice(0, 3).map((req, index) => (
            <span key={index} className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded">
              {req}
            </span>
          ))}
        </div>
        <Link
          to={`/jobs/${job.id}`}
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 w-full text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}