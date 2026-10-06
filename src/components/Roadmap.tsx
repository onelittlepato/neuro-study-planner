"use client";

import {
  Background,
  Controls,
  ReactFlow,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 250, y: 0 },
    data: {
      label: "📝 Psychology Essay",
    },
  },

  {
    id: "2",
    position: { x: 250, y: 180 },
    data: {
      label: "🧠 Biology Midterm",
    },
  },

  {
    id: "3",
    position: { x: 250, y: 360 },
    data: {
      label: "🔬 Research Project",
    },
  },

  {
    id: "4",
    position: { x: 250, y: 540 },
    data: {
      label: "🎓 Semester Finish",
    },
  },
];

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },

  {
    id: "e2-3",
    source: "2",
    target: "3",
  },

  {
    id: "e3-4",
    source: "3",
    target: "4",
  },
];

export default function Roadmap() {
  return (
    <div className="h-[700px] bg-white rounded-xl shadow">

      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>

    </div>
  );
}
