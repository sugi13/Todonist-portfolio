
import { TrashCan, ForkRight, CircleCheckFill } from "akar-icons";
import "../../App.css";

export default function Completed({ completed, RemoveTask }) {
    return (
        <div className="task-completed">
            <div className="header">
                <div className="flex items-center gap-1">
                    <h1 className="font-Inter text-sm font-semibold text-blue-400">
                        <span className="completed-dot"></span>  Completed
                    </h1>
                </div>
            </div>
            <div className="completed">
                <div className="completed flex flex-col gap-5">
                    {
                        completed && completed.map((item, index) => {
                            if (item.status === 'Completed') {
                                return (
                                    <div key={index} className="completed-task flex items-center justify-between px-4 py-2">
                                        <p className="text-xs">{item.TaskName}</p>
                                        <div className="actions">
                                            <p className="tag">{item.TaskTag}</p>
                                            <TrashCan size={15} color="black" className="trashcan" onClick={() => RemoveTask(item.id)} />
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}
