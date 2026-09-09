import { FileText, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const ResumeEditor = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const title = location.state?.title || "Untitled Resume";

  const [form, setForm] = useState({
    fullName: "",
    jobTitle: "",
    experienceLevel: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
  });

  const [summarySuggestions, setSummarySuggestions] = useState<string[]>([]);
const [selectedSummary, setSelectedSummary] = useState("");
const [loadingAI, setLoadingAI] = useState(false);
const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const generateSummary = async () => {
  try {
    setLoadingAI(true);

    const response = await fetch("http://localhost:5000/api/ai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: form.fullName,
        jobTitle: form.jobTitle,
        experienceLevel: form.experienceLevel,
        location: form.location,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to generate summary");
    }

    setSummarySuggestions(data.suggestions);
  } catch (error) {
    console.error("AI Error:", error);
    alert("Something went wrong while generating the summary.");
  } finally {
    setLoadingAI(false);
  }
};

  const handleNext = () => {
  if (currentStep === 1) {
    setCurrentStep(2);
    return;
  }

  if (currentStep === 2) {
    if (!selectedSummary.trim()) return;

    setCurrentStep(3);
    return;
  }
};

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Top Bar */}
      <div className="border-b bg-white">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
              <FileText className="h-5 w-5 text-purple-600" />
            </div>

            <div>
              <h1 className="font-semibold text-gray-900">
                {title}
              </h1>

              <p className="text-sm text-gray-500">
                Resume Builder
              </p>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            Step <span className="font-semibold text-gray-900">{currentStep}</span> of 5
          </div>

        </div>
      </div>

      {/* Progress Bar */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-[1500px] px-6">
          <div className="flex h-1">
            <div
  className="rounded-full bg-purple-600 transition-all duration-300"
  style={{ width: `${(currentStep / 5) * 100}%` }}
/>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-6 py-8 lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}
                {currentStep === 1 && (

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
                <option value="">Select your experience level</option>
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
        )}

        {currentStep === 2 && (
  <div>
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-gray-900">
        Create your professional summary
      </h2>

      <p className="mt-2 text-gray-500">
        Let AI create a professional summary based on the information
        you provided.
      </p>
    </div>

    {/* AI Information Card */}
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="rounded-xl bg-purple-50 p-5">
        <div className="flex items-start gap-3">

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-100">
            <Sparkles className="h-5 w-5 text-purple-600" />
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">
              AI Professional Summary
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-600">
              We'll use your target role and experience level to create
              professional summary options.
            </p>
          </div>

        </div>

        {/* User Information */}
        <div className="mt-5 grid gap-3 sm:grid-cols-3">

          <div className="rounded-lg bg-white p-3">
            <p className="text-xs text-gray-400">
              Target Role
            </p>

            <p className="mt-1 text-sm font-medium text-gray-900">
              {form.jobTitle || "Not provided"}
            </p>
          </div>

          <div className="rounded-lg bg-white p-3">
            <p className="text-xs text-gray-400">
              Experience
            </p>

            <p className="mt-1 text-sm font-medium text-gray-900">
              {form.experienceLevel || "Not provided"}
            </p>
          </div>

          <div className="rounded-lg bg-white p-3">
            <p className="text-xs text-gray-400">
              Location
            </p>

            <p className="mt-1 text-sm font-medium text-gray-900">
              {form.location || "Not provided"}
            </p>
          </div>

        </div>

        {/* Generate Button */}
        <button
          onClick={generateSummary}
          disabled={loadingAI}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-3 font-medium text-white shadow-sm transition hover:from-blue-600 hover:to-purple-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Sparkles className="h-4 w-4" />

          {loadingAI
            ? "Generating summaries..."
            : "Generate with AI"}
        </button>
      </div>

      <div className="mt-6">
  <label className="mb-2 block text-sm font-medium text-gray-900">
    Or write your own summary
  </label>

  <textarea
    value={selectedSummary}
    onChange={(e) => setSelectedSummary(e.target.value)}
    placeholder="Write a short professional summary about yourself..."
    rows={5}
    className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100"
  />

  <p className="mt-2 text-xs text-gray-500">
    You can write your own summary or edit the AI-generated one.
  </p>
</div>

      {/* AI Suggestions */}
      {summarySuggestions.length > 0 && (
        <div className="mt-6">

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              AI Suggestions
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Choose the summary that best represents you.
            </p>
          </div>

          <div className="space-y-4">

            {summarySuggestions.map((summary, index) => (
              <div
                key={index}
                className={`rounded-xl border p-5 transition ${
                  selectedSummary === summary
                    ? "border-purple-500 bg-purple-50 ring-2 ring-purple-100"
                    : "border-gray-200 bg-white hover:border-purple-300"
                }`}
              >
                <div className="flex gap-3">

                  <input
                    type="radio"
                    name="summary"
                    checked={selectedSummary === summary}
                    onChange={() => setSelectedSummary(summary)}
                    className="mt-1 h-4 w-4 accent-purple-600"
                  />

                  <p className="text-sm leading-6 text-gray-700">
                    {summary}
                  </p>

                </div>

                <button
                  onClick={() => setSelectedSummary(summary)}
                  className={`mt-4 rounded-lg px-4 py-2 text-sm font-medium transition ${
                    selectedSummary === summary
                      ? "bg-purple-600 text-white"
                      : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {selectedSummary === summary
                    ? "Selected ✓"
                    : "Use this summary"}
                </button>
              </div>
            ))}

          </div>

        </div>
      )}

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">

        <button
          onClick={() => setCurrentStep(1)}
          className="flex items-center gap-2 rounded-lg border bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>

        <button
          onClick={handleNext}
          disabled={!selectedSummary}
          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:from-blue-600 hover:to-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Save & Continue
          <ChevronRight className="h-4 w-4" />
        </button>

      </div>

    </div>
  </div>
)}

        {/* ================= RIGHT SIDE ================= */}
        <div className="lg:sticky lg:top-6 lg:h-fit">

          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Live Preview
            </h2>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
              Live
            </span>
          </div>

          {/* Resume */}
          <div className="min-h-[800px] rounded-2xl border bg-white p-10 shadow-lg">

            {/* Resume Header */}
            <div className="border-b pb-5 text-center">

              <h1 className="text-3xl font-bold text-gray-900">
                {form.fullName || "Your Name"}
              </h1>

              <p className="mt-1 text-lg font-medium text-purple-600">
                {form.jobTitle || "Your Job Title"}
              </p>

              <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-500">

                {form.email && (
                  <span>{form.email}</span>
                )}

                {form.phone && (
                  <span>{form.phone}</span>
                )}

                {form.location && (
                  <span>{form.location}</span>
                )}

              </div>

              {(form.linkedin || form.github) && (
                <div className="mt-1 flex flex-wrap justify-center gap-x-4 text-sm text-purple-600">

                  {form.linkedin && (
                    <span>{form.linkedin}</span>
                  )}

                  {form.github && (
                    <span>{form.github}</span>
                  )}

                </div>
              )}

            </div>

            {/* Summary Placeholder */}
            <section className="mt-8">

              <h2 className="border-b pb-2 text-sm font-bold uppercase tracking-wider text-gray-900">
                Professional Summary
              </h2>

             <p className="mt-3 text-sm leading-6 text-gray-600">
  {selectedSummary ||
    "Your AI-generated professional summary will appear here."}
</p>

            </section>

            {/* Experience Placeholder */}
            <section className="mt-7">

              <h2 className="border-b pb-2 text-sm font-bold uppercase tracking-wider text-gray-900">
                Experience
              </h2>

              <div className="mt-4 space-y-2">
                <div className="h-3 w-2/3 rounded bg-gray-100" />
                <div className="h-3 w-full rounded bg-gray-100" />
                <div className="h-3 w-5/6 rounded bg-gray-100" />
              </div>

            </section>

            {/* Education Placeholder */}
            <section className="mt-7">

              <h2 className="border-b pb-2 text-sm font-bold uppercase tracking-wider text-gray-900">
                Education
              </h2>

              <div className="mt-4 space-y-2">
                <div className="h-3 w-1/2 rounded bg-gray-100" />
                <div className="h-3 w-3/4 rounded bg-gray-100" />
              </div>

            </section>

            {/* Skills Placeholder */}
            <section className="mt-7">

              <h2 className="border-b pb-2 text-sm font-bold uppercase tracking-wider text-gray-900">
                Skills
              </h2>

              <div className="mt-4 flex gap-2">
                <div className="h-7 w-16 rounded bg-gray-100" />
                <div className="h-7 w-20 rounded bg-gray-100" />
                <div className="h-7 w-16 rounded bg-gray-100" />
              </div>

            </section>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumeEditor;

