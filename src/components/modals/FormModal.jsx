import "../../App.css";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { TaskDB } from "../../firebase/FBconfig";
import {Cross} from "akar-icons";

export default function FormModal({ onHideForm }) {

  const [TaskName, setTaskName] = useState('');
  const [TaskDate, setTaskDate] = useState('');
  const [TaskTag, setTaskTag] = useState('');



  // firestore ref //

  const TaskDataRef = collection(TaskDB, 'Tasks');

  const HandleTaskData = async(e) => {
    e.preventDefault();
    await addDoc(TaskDataRef, {
      TaskName: TaskName,
      TaskDate: TaskDate,
      TaskTag: TaskTag,
      status: "Pending",
      ToggleOpen: false,
    }); 
  }

  const CloseForm = () => {
    onHideForm();
  }

  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-header flex items-start gap-52">
          <h2 className="text-black font-Inter text-sm font-bold">Add New Task</h2>
          <Cross color="black" size={15} onClick={CloseForm}/>
        </div>
        <div className="form">
          <form>
            <div className="container">
              <label>Name</label>
              <input type="text" onChange={e => setTaskName(e.target.value)} placeholder="Task Name" />
              <span></span>
            </div>
            <div className="container">
              <label>Date</label>
              <input type='date' onChange={e => setTaskDate(e.target.value)} placeholder="set Date" />
              <span></span>
            </div>  
            <div className="container">
              <label>Tag</label>
              <input type="text" placeholder="Work" onChange={e => setTaskTag(e.target.value)} />
              <span></span>
            </div>
            <div className="action-btn">
            <button onClick={HandleTaskData} className="bg-orange-500 px-5 py-1 rounded-md text-white">Add</button>
            <button className="text-blue-600 font-medium" onClick={() => onHideForm()}>Cancel</button>
          </div>
          </form>
        </div>
      </div>

    </div>
  )
}
