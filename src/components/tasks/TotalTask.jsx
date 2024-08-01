import {
  TrashCan,
  ForkRight,
  CircleCheckFill,
  MoreVerticalFill,
  Edit,
  Cross,
} from "akar-icons";

import { motion } from "framer-motion";
import TotalTaskList from "../lists/TotalTaskList";

export default function TotalTask({ TotalTask, onHandleMove, RemoveTask,setTaskFunc}) {

  const onCheckToggle = (id) => {
    setTaskFunc((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, ToggleOpen: !todo.ToggleOpen } : todo
      ) 
    );
  };

  return (
    
      <div className="Overall-tasks">
        <div className="header">
          <h1 className="font-Inter text-sm font-semibold text-yellow-400">
            <span className="dot"></span>Tasks
          </h1>
        </div>
        <div className="overall-task-list flex flex-col gap-5">
      
            {TotalTask &&
              TotalTask.map((item, index) => {
                if (item.status === "Pending") {
                  return (
                    <div key={index} className="task flex flex-col">
                      <TotalTaskList id={item.id} item={item} onCheckToggle={onCheckToggle} onHandleMove = {onHandleMove} RemoveTask = {RemoveTask}/>
                    </div>
                  );
                }
              })}
        </div>
      </div>
  );
}
