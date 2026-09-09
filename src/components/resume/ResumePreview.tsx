interface ResumePreviewProps {
  form: {
    fullName: string;
    jobTitle: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
  selectedSummary: string;
}

const ResumePreview = ({
  form,
  selectedSummary,
}: ResumePreviewProps) => {
  return (
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

        {/* Summary */}
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
  );
};

export default ResumePreview;