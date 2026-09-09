import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface FormData {
  jobTitle: string;
  experienceLevel: string;
  location: string;
}

interface SummaryStepProps {
  form: FormData;
  summarySuggestions: string[];
  selectedSummary: string;
  loadingAI: boolean;
  generateSummary: () => void;
  setSelectedSummary: (summary: string) => void;
  goBack: () => void;
  handleNext: () => void;
}

const SummaryStep = ({
  form,
  summarySuggestions,
  selectedSummary,
  loadingAI,
  generateSummary,
  setSelectedSummary,
  goBack,
  handleNext,
}: SummaryStepProps) => {
  return (
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

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        {/* AI Information Card */}
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

        {/* Manual Summary */}
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
                      onChange={() =>
                        setSelectedSummary(summary)
                      }
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
            onClick={goBack}
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
  );
};

export default SummaryStep;