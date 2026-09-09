import { useState } from "react";
import { useLocation } from "react-router-dom";

import ResumeTopBar from "../components/resume/ResumeTopBar";
import ResumeProgress from "../components/resume/ResumeProgress";
import BasicInfoStep from "../components/resume/BasicInfoStep";
import SummaryStep from "../components/resume/SummaryStep";
import ResumePreview from "../components/resume/ResumePreview";

const ResumeEditor = () => {
  const location = useLocation();

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

  const [summarySuggestions, setSummarySuggestions] = useState<string[]>(
    []
  );

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
        throw new Error(
          data.error || "Failed to generate summary"
        );
      }

      setSummarySuggestions(data.suggestions);
    } catch (error) {
      console.error("AI Error:", error);

      alert(
        "Something went wrong while generating the summary."
      );
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
      <ResumeTopBar
        title={title}
        currentStep={currentStep}
      />

      {/* Progress Bar */}
      <ResumeProgress
        currentStep={currentStep}
      />

      {/* Main Content */}
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-6 py-8 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div>
          {currentStep === 1 && (
            <BasicInfoStep
              form={form}
              handleChange={handleChange}
              handleNext={handleNext}
            />
          )}

          {currentStep === 2 && (
            <SummaryStep
              form={{
                jobTitle: form.jobTitle,
                experienceLevel: form.experienceLevel,
                location: form.location,
              }}
              summarySuggestions={summarySuggestions}
              selectedSummary={selectedSummary}
              loadingAI={loadingAI}
              generateSummary={generateSummary}
              setSelectedSummary={setSelectedSummary}
              goBack={() => setCurrentStep(1)}
              handleNext={handleNext}
            />
          )}

          {/* Step 3 will go here */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Experience
              </h2>

              <p className="mt-2 text-gray-500">
                Step 3 will be added next.
              </p>
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <ResumePreview
          form={{
            fullName: form.fullName,
            jobTitle: form.jobTitle,
            email: form.email,
            phone: form.phone,
            location: form.location,
            linkedin: form.linkedin,
            github: form.github,
          }}
          selectedSummary={selectedSummary}
        />
      </div>
    </div>
  );
};

export default ResumeEditor;