import { FileText } from "lucide-react";

interface ResumeTopBarProps {
  title: string;
  currentStep: number;
}

const ResumeTopBar = ({
  title,
  currentStep,
}: ResumeTopBarProps) => {
  return (
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
          Step{" "}
          <span className="font-semibold text-gray-900">
            {currentStep}
          </span>{" "}
          of 5
        </div>
      </div>
    </div>
  );
};

export default ResumeTopBar;