import { Assignment } from "@/types/assignment";
import ProgressBar from "./ProgressBar";

export default function AssignmentCard({
  assignment,
}: {
  assignment: Assignment;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">

      <h3 className="font-bold text-xl">
        {assignment.title}
      </h3>

      <p className="text-slate-500 mt-2">
        Due: {assignment.dueDate}
      </p>

      <p className="text-slate-500">
        Difficulty: {assignment.difficulty}
      </p>

      <div className="mt-4">

        <ProgressBar
          completed={
            assignment.completedHours
          }
          total={
            assignment.estimatedHours
          }
        />

      </div>

    </div>
  );
}
