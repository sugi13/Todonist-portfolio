import "../../App.css";
import { Cross } from "akar-icons";
import { doc, updateDoc } from "firebase/firestore";
import { TaskDB } from "../../firebase/FBconfig";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function EditModal({ id, ToggleEdit, editValue }) {

  const [updateTaskName, setUpdateTaskName] = useState("");
  const [updateTaskTag, setUpdateTaskTag] = useState("");



  async function HandleUpdate(e) {
    e.preventDefault();
    const updateData = doc(TaskDB, "Tasks", id);
    const newData = {
      TaskName: updateTaskName,
      TaskTag: updateTaskTag
    }
    await updateDoc(updateData, newData);
  }

  function closeEditModal (){
    ToggleEdit(false)
  }

  return (
    <div className="Edit-modal">
      <div className="Edit-modal-container">
        <div className="modal-header flex items-start gap-56">
          <h2 className="text-black font-Inter text-sm font-bold">Edit Task</h2>
          <Cross onClick={closeEditModal} color="black" size={15} />
        </div>
        <div className="form">
          <form>
            <div className="container">
              <label>Name</label>
              <input type="text" placeholder="Task Name"  onChange={(e) => setUpdateTaskName(e.target.value)}  />
            </div>
            <div className="container">
              <label>Tag</label>
              <input type="text"  placeholder="Work" onChange={e => setUpdateTaskTag(e.target.value)} />
              <span></span>
            </div>
            <div className="action-btn">
              <button className="text-blue-600 font-medium" onClick={closeEditModal}>Cancel</button>
              <button onClick={HandleUpdate} className="bg-green-500 px-5 py-1 rounded-md text-white">Edit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
