import { useState } from "react";
import SearchBox from "./SearchBox";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskMordal from "./AddTaskMordal/AddTaskMordal";
export default function TaskBord() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "learn Ract ",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores alias beatae doloremque possimus voluptas nulla, molestias adipisci esse id omnis dignissimos exercitationem ratione totam qui porro. Laborum facere eum atque.",
    tags: ["web", "python", "js"],
    priority: "high",
    isFavorite: false,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddModal, setShowAddModal] = useState(false);
  function handleAddTask(newTask) {
    console.log("adding a task...", newTask);
    setTasks([...tasks, newTask]);
    setShowAddModal(false);
  }
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && <AddTaskMordal onSave={handleAddTask} />}
      <div className="container mx-auto">
        {/* <!-- Search Box --> */}
        <div className="p-2 flex justify-end">
          <SearchBox></SearchBox>
        </div>
        {/* <!-- Search Box Ends --> */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskAction onAddClick={() => setShowAddModal(true)}></TaskAction>
          <TaskList tasks={tasks}></TaskList>
          {/* <AddTaskMordal></AddTaskMordal> */}
        </div>
      </div>
    </section>
  );
}
