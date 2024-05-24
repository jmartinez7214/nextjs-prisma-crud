import { prisma } from "@/libs/prisma";
import TaskCard from "@/components/TaskCard";

async function loadTasks() {
  // API
  // const res = await fetch("http://127.0.0.1:3000/api/tasks");
  // const data = await res.json();
  // return data;

  return await prisma.task.findMany();
}

export default async function HomePage() {
  const tasks = await loadTasks();

  return (
    <section className="container mx-auto">
      <label className="text-3xl">Tasks</label>

      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
}
