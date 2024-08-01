import { TrashCan, CircleCheckFill, MoreVerticalFill, Edit } from "akar-icons";
import "../../App.css";
import { motion } from "framer-motion";
import InProgressList from "../lists/InProgressList";

export default function InProgress({ InProgress, onRemoveTask, onHandleMove, setTaskFunc }) {


  const onCheckToggle = (id) => {
    setTaskFunc((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, ToggleOpen: !todo.ToggleOpen } : todo
      )
    );
  };



  return (
    <div className="task-in-progress">
      <div className="header">
        <div className="flex items-center gap-1">
          <h1 className="font-Inter text-sm font-semibold text-green-500">
            <span className="In-progress-dot"></span> In Progress 
          </h1>
        </div>
      </div>
      <div className="In-progress-list flex flex-col gap-5">
        {
          InProgress && InProgress.map((item, index) => {
            if (item.status === "In Progress") {
              return (
                <div key={index} className="In-progress-task  flex-col">
                  <InProgressList item={item} HandleMove = {onHandleMove} onCheckToggle={onCheckToggle} RemoveTask = {onRemoveTask}/>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}
