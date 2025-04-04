// pages/CompanyDashboard.tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useJobStore } from '../store/jobStore';
import { useThemeStore } from '../store/themeStore';
import JobCard from '../components/JobCard';

const jobFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  company: z.string().min(1, 'Company is required'),
  location: z.string().min(1, 'Location is required'),
  salary: z.string().min(1, 'Salary is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  requirements: z.string().min(1, 'At least one requirement is required'),
  isRemote: z.boolean(),
});

type JobFormData = z.infer<typeof jobFormSchema>;

export default function CompanyDashboard() {
  const { darkMode } = useThemeStore();
  const {addJob, getCompanyJobs } = useJobStore();
  const [showForm, setShowForm] = useState(false);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<JobFormData>({
    resolver: zodResolver(jobFormSchema),
  });

  const onSubmit = (data: JobFormData) => {
    const requirements = data.requirements.split('\n').filter(req => req.trim() !== '');
    addJob({
      ...data,
      requirements,
      companyId: '1', // In a real app, this would come from auth
    });
    reset();
    setShowForm(false);
  };

  const companyJobs = getCompanyJobs('1'); // Mock company ID

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Company Dashboard</h1>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
            >
              {showForm ? 'Cancel' : 'Post New Job'}
            </button>
          </div>

          {showForm && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Post a New Job</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Job Title
                  </label>
                  <input
                    id="title"
                    {...register('title')}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Company Name
                  </label>
                  <input
                    id="company"
                    {...register('company')}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>}
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Location
                  </label>
                  <input
                    id="location"
                    {...register('location')}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  {errors.location && <p className="mt-1 text-sm text-red-600">{errors.location.message}</p>}
                </div>

                <div>
                  <label htmlFor="salary" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Salary
                  </label>
                  <input
                    id="salary"
                    {...register('salary')}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  {errors.salary && <p className="mt-1 text-sm text-red-600">{errors.salary.message}</p>}
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description
                  </label>
                  <textarea
                    id="description"
                    {...register('description')}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>}
                </div>

                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Requirements (one per line)
                  </label>
                  <textarea
                    id="requirements"
                    {...register('requirements')}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                  />
                  {errors.requirements && <p className="mt-1 text-sm text-red-600">{errors.requirements.message}</p>}
                </div>

                <div className="flex items-center">
                  <input
                    id="isRemote"
                    type="checkbox"
                    {...register('isRemote')}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600 rounded"
                  />
                  <label htmlFor="isRemote" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Remote position
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
                >
                  Post Job
                </button>
              </form>
            </div>
          )}

          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Your Posted Jobs</h2>
          {companyJobs.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">You haven't posted any jobs yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {companyJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}