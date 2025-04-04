// pages/JobDetails.tsx
import { useParams } from 'react-router-dom';
import { useJobStore } from '../store/jobStore';
import { useThemeStore } from '../store/themeStore';

export default function JobDetails() {
  const { id } = useParams();
  const { getJobById } = useJobStore();
  const { darkMode } = useThemeStore();
  const job = getJobById(id!);

  if (!job) {
    return <div className="text-center py-10">Job not found</div>;
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-3xl mx-auto">
            <div className="p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{job.title}</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">{job.company}</p>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">{job.location}</p>
                </div>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded">
                  {job.isRemote ? 'Remote' : 'On-site'}
                </span>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Salary</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{job.salary}</p>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Job Description</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2 whitespace-pre-line">{job.description}</p>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Requirements</h2>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-2">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Posted At</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {new Date(job.postedAt).toLocaleDateString()}
                </p>
              </div>

              <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition-colors duration-300">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}