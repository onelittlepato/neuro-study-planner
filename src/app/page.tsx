import Roadmap from "@/components/Roadmap";
import AssignmentCard from "@/components/AssignmentCard";

import { assignments } from "@/data/demoAssignments";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-2">
          Neuro Study Map
        </h1>

        <p className="text-slate-600 mb-8">
          A visual planner designed for
          neurodivergent university students.
        </p>

        <Roadmap />

        <div className="mt-10">

          <h2 className="text-3xl font-bold mb-6">
            Current Assignments
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {assignments.map(
              (assignment) => (
                <AssignmentCard
                  key={assignment.id}
                  assignment={assignment}
                />
              )
            )}

          </div>

        </div>

      </div>

    </main>
  );
}
