"use client";

import { useRouter } from "next/navigation";

export default function TaskCard({ task }) {
  const router = useRouter();

  return (
    <div
      className="bg-slate-900 hover:bg-slate-800 hover:cursor-pointer p-3"
      onClick={() => {
        router.push(`/tasks/edit/${task.id}`);
      }}
    >
      <h3 className="font-bold text-2xl mb-2">{task.title}</h3>
      <p>{task.description}</p>
      <p>{new Date(task.createdAt).toDateString()}</p>
    </div>
  );
}
