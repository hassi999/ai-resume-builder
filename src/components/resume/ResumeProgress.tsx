interface ResumeProgressProps {
  currentStep: number;
}

const ResumeProgress = ({
  currentStep,
}: ResumeProgressProps) => {
  return (
    <div className="border-b bg-white">
      <div className="mx-auto max-w-[1500px] px-6">
        <div className="flex h-1">
          <div
            className="rounded-full bg-purple-600 transition-all duration-300"
            style={{
              width: `${(currentStep / 5) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeProgress;