import {
  Cross,
  MoreVerticalFill,
  Edit,
  ForkRight,
  CircleCheckFill,
  TrashCan,
  Calendar
} from "akar-icons";
import "../../App.css";
import { motion } from "framer-motion";

export default function InProgressList({ item, onCheckToggle, RemoveTask, HandleMove }) {
  
  return (
    <>
      <div className="task-section-1 flex justify-between items-center px-4 py-2">
        <p className="text-xs">{item.TaskName}</p>
        <div className="tag-&-action flex items-center gap-2">
          <p className="tag">{item.TaskTag}</p>
          {item.ToggleOpen ? (
                        <Cross
                            size={12}
                            onClick={() => onCheckToggle(item.id)}
                        />
                    ) : (
                        <MoreVerticalFill
                            size={14}
                            onClick={() => onCheckToggle(item.id)}
                        />
                    )}
        </div>
      </div>
      <div className="task-section-2">
                    {item.ToggleOpen ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1}}
                        transition={{duration: 1, ease: 'circIn'}}
                        className="action-menu-btns"
                      > 
                      <div className="flex gap-1 items-center">
                          <Calendar
                            size={15}
                            className="CircleCheck"
                            color = "#4E4E4E"
                          />
                          <span
                            className="text-xs cursor-pointer">
                            {item.TaskDate}
                          </span>
                        </div>
                        <div className="flex gap-1 items-center">
                          <CircleCheckFill
                            size={15}
                            className="CircleCheck"
                            color = "#4E4E4E"
                          />
                          <span
                            className="text-xs cursor-pointer"
                            onClick={() => HandleMove(item.id, "Completed")}
                          >
                            completed
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <TrashCan
                            size={14}
                            color = "#4E4E4E"
                            className="trashcan"
                          />
                          <span
                            className="text-xs cursor-pointer"
                            onClick={() => RemoveTask(item.id)}
                          >
                            Remove
                          </span>
                        </div>
                      </motion.div>
                    ) : (
                      <div></div>
                    )}
                  </div>
    </>
  );
}
