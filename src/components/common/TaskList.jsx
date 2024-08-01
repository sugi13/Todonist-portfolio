/* firestore */
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";

import { useEffect, useState } from "react";
import { TaskDB } from "../../firebase/FBconfig";

/* css */

import "../../App.css";
/* components */
import StatusUpdated from "../Popups/StatusUpdated";
import TotalTask from "../tasks/TotalTask";
import InProgress from "../tasks/InProgress";
import Completed from "../tasks/Completed";

export default function TaskList() {
  const [TaskArray, setTaskArray] = useState([]);

  const [StatusPopup, setStatusPopup] = useState(false);

  const TaskDataRef = collection(TaskDB, "Tasks");

  // to load data from firestore
  useEffect(() => {
    const Unsubscribe = onSnapshot(TaskDataRef, (snapshot) => {
      setTaskArray(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return Unsubscribe;
  }, []);

  // Handle remove Task //
  const HandleRemoveTask = async (id) => {
    const DeleteTask = doc(TaskDB, "Tasks", id);
    await deleteDoc(DeleteTask);
  };

  // Move to Progress //
  const HandleTaskMove = (id, UpdateStatus) => {
    const updateTaskStatus = doc(TaskDB, "Tasks", id);

    let ProgressArray = TaskArray;
    ProgressArray = ProgressArray.map((item) => {
      if (item.id === id) {
        item.status = UpdateStatus;
        let newData = {
          status: UpdateStatus,
        };
        updateDoc(updateTaskStatus, newData);
        setStatusPopup(true);
        setTimeout(() => {
          setStatusPopup(false);
        }, 2000);
      }
      return item;
    });

    setTaskArray(ProgressArray);
  };

  return (
    <div className="Task-list">
      <TotalTask
        TotalTask={TaskArray}
        onHandleMove={HandleTaskMove}
        RemoveTask={HandleRemoveTask}
        setTaskFunc = {setTaskArray}
      />
      <InProgress
        InProgress={TaskArray}
        onHandleMove={HandleTaskMove}
        onRemoveTask={HandleRemoveTask}
        setTaskFunc = {setTaskArray}
      />
      <Completed
        completed={TaskArray}
        onHandleMove={HandleTaskMove}
        RemoveTask={HandleRemoveTask}
        setTaskFunc = {setTaskArray}
      />
      {StatusPopup && <StatusUpdated />}
    </div>
  );
}
