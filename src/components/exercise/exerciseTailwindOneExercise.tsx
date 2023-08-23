const steps = [
  { id: "01", name: "Job details", status: "complete" },
  { id: "02", name: "Application form", status: "current" },
  { id: "03", name: "Preview", status: "upcoming" },
] as const;

const ExerciseTailwindOneExercise = () => {
  return (
    <nav>
      <ul className="border-[1px] rounded-md flex justify-between items-stretch ">
        {steps.map((step, stepIdx) => (
          <Step key={step.id} step={step} stepIdx={stepIdx} />
        ))}
      </ul>
    </nav>
  );
};

interface StepProps {
  step: {
    id: string;
    name: string;
    status: "complete" | "current" | "upcoming";
  };
  stepIdx: number;
}

const Step = ({ step, stepIdx }: StepProps) => {
  return (
    <li key={step.name} className="flex w-full border-l pl-2 ">
      {step.status === "complete" ? (
        <div className="flex justify-between items-center">
          <div className="bg-violet-600 w-8 h-8 rounded-full flex justify-center items-center m-2 ml-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <span className="ml-2 text-xs">{step.name}</span>
        </div>
      ) : step.status === "current" ? (
        <div className="flex justify-center items-center border-x-1-slate">
          <span className="flex rounded-full border-2 w-8 h-8 p-1 border-violet-400 justify-center items-center">
            <span className="text-xs ">{step.id}</span>
          </span>
          <span className="ml-2 text-xs text-violet-500">{step.name}</span>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <span className="flex rounded-full border-2 w-8 h-8 p-1 border-slate-200 justify-center items-center">
            <span className="text-xs">{step.id}</span>
          </span>
          <span className="ml-2 text-[0.5rem]">{step.name}</span>
        </div>
      )}
    </li>
  );
};

export default ExerciseTailwindOneExercise;
