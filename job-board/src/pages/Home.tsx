// pages/Home.tsx
import JobCard from '../components/JobCard';
import { useJobStore } from '../store/jobStore';
import { useThemeStore } from '../store/themeStore';

export default function Home() {
  const { jobs } = useJobStore();
  const { darkMode } = useThemeStore();

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Available Jobs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}