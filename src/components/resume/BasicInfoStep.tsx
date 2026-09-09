import { ChevronRight } from "lucide-react";

interface FormData {
  fullName: string;
  jobTitle: string;
  experienceLevel: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
}

interface BasicInfoStepProps {
  form: FormData;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleNext: () => void;
}

const BasicInfoStep = ({
  form,
  handleChange,
  handleNext,
}: BasicInfoStepProps) => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Let's start with the basics
        </h2>

        <p className="mt-2 text-gray-500">
          Tell us a little about yourself and the job you're targeting.
          We'll use this information to personalize your resume.
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        {/* Full Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Full Name
          </label>

          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="e.g. Hassan Khan"
            className="w-full rounded-lg border px-3 py-2.5 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          />
        </div>

        {/* Job Title */}
        <div className="mt-5">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Target Job Title
          </label>

          <input
            name="jobTitle"
            value={form.jobTitle}
            onChange={handleChange}
            placeholder="e.g. Frontend Developer"
            className="w-full rounded-lg border px-3 py-2.5 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          />

          <p className="mt-1.5 text-xs text-gray-400">
            What position are you applying for?
          </p>
        </div>

        {/* Experience Level */}
        <div className="mt-5">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Experience Level
          </label>

          <select
            name="experienceLevel"
            value={form.experienceLevel}
            onChange={handleChange}
            className="w-full rounded-lg border bg-white px-3 py-2.5 text-gray-700 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          >
            <option value="">
              Select your experience level
            </option>

            <option value="Student / Beginner">
              Student / Beginner
            </option>

            <option value="Entry Level">
              Entry Level
            </option>

            <option value="Intermediate">
              Intermediate
            </option>

            <option value="Advanced">
              Advanced
            </option>
          </select>

          <p className="mt-1.5 text-xs text-gray-400">
            This helps AI adjust the tone of your resume.
          </p>
        </div>

        {/* Email + Phone */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-lg border px-3 py-2.5 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Phone
            </label>

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+92 300 1234567"
              className="w-full rounded-lg border px-3 py-2.5 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
            />
          </div>
        </div>

        {/* Location */}
        <div className="mt-5">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Location
          </label>

          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="e.g. Islamabad, Pakistan"
            className="w-full rounded-lg border px-3 py-2.5 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          />
        </div>

        {/* LinkedIn */}
        <div className="mt-5">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            LinkedIn
            <span className="ml-1 font-normal text-gray-400">
              (Optional)
            </span>
          </label>

          <input
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            placeholder="linkedin.com/in/yourname"
            className="w-full rounded-lg border px-3 py-2.5 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          />
        </div>

        {/* GitHub */}
        <div className="mt-5">
          <label className="mb-2 block text-sm font-medium text-gray-700">
            GitHub
            <span className="ml-1 font-normal text-gray-400">
              (Optional)
            </span>
          </label>

          <input
            name="github"
            value={form.github}
            onChange={handleChange}
            placeholder="github.com/yourusername"
            className="w-full rounded-lg border px-3 py-2.5 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
          />
        </div>

        {/* Next Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleNext}
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-medium text-white shadow-md transition hover:from-blue-600 hover:to-purple-700"
          >
            Save & Continue
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasicInfoStep;