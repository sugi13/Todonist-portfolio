import { Cross, MoreVerticalFill, Edit, ForkRight, CircleCheckFill, TrashCan } from "akar-icons";
import "../../App.css";
import { motion } from "framer-motion";
import { useState } from "react";
import EditModal from "../modals/EditModal";


export default function TotalTaskList({ id, item, onCheckToggle, onHandleMove, RemoveTask }) {

    const [ToggleEdit, setToggleEdit] = useState(false);

    const ToggleModal = () => {
        setToggleEdit(true);
    }

    return (
        <>
            <div className="task-section-1 items-center flex justify-between px-4 py-2">
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
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "circIn" }}
                        className="action-menu-btns"
                    >
                        <div className="flex items-center gap-1">
                            <Edit
                                size={14}
                                color="#4E4E4E"
                                className="trashcan"
                            />
                            <span onClick={ToggleModal} className="text-xs cursor-pointer">
                                Edit
                            </span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <ForkRight
                                size={15}
                                color="#4E4E4E"
                                className="trashcan"
                            />
                            <span
                                className="text-xs cursor-pointer"
                                onClick={() =>
                                    onHandleMove(item.id, "In Progress")
                                }
                            >
                                In Progress
                            </span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <CircleCheckFill
                                size={15}
                                className="CircleCheck"
                                color="#4E4E4E"
                            />
                            <span
                                className="text-xs cursor-pointer"
                                onClick={() =>
                                    onHandleMove(item.id, "Completed")
                                }
                            >
                                completed
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <TrashCan
                                size={14}
                                color="#4E4E4E"
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
            {
                ToggleEdit ? <EditModal editValue = {item.TaskName} id={id} ToggleEdit={setToggleEdit} /> : <div></div>
            }
        </>
    )
}
