import { useState } from "react";
import FormModal from "../components/modals/FormModal";
import TaskList from "../components/common/TaskList"
import { Link } from "react-router-dom";
import { SignOut, ChevronDownSmall, ChevronUpSmall, Person } from "akar-icons";
import { signOut } from "firebase/auth";
import { UserAuth } from "../firebase/FBconfig";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


export default function UserHome() {

  const [ShowModal, setShowModal] = useState(false);
  const [showNav, setShowNav] = useState(false);

  let UserName = JSON.parse(localStorage.getItem("user_name"));

  let Navigate = useNavigate();


  function ToggleModal() {
    setShowModal(true);
  }

  function HideForm() {
    setShowModal(false);
  }

  function ToggleNav() {
    setShowNav(!showNav)
  }

  // log out //
  function SignOutFromApp() {
    signOut(UserAuth).then(() => {
      Navigate("/");
      localStorage.clear();
      location.reload();
    })
  }

  return (
    <div className="User-Home font-Inter">
      <div className="Navbar flex items-center justify-around">
        <div className="brand">
          <Link to="/" className="text-xl font-bold">
            Todonist
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <div className="Add-task-btn">
            <button onClick={ToggleModal} className="bg-white text-xs px-5 text-black py-2 rounded-lg">Add Task +</button>
          </div>
          <div className="Profile">
            <p onClick={ToggleNav} className="user-name text-xs flex items-center gap-1 rounded-md">
              {UserName} {showNav ? <ChevronDownSmall size={15} /> : <ChevronUpSmall size={15}/> }
            </p>
          </div>
          {
            showNav ? (<motion.div initial= {{y: 0, opacity: 0}} animate = {{y: 5, opacity: 1}} className="user-profile-nav">
              <div className="log-out-btn">
                <button onClick={SignOutFromApp} className="text-sm font-semibold flex items-center gap-1 text-gray-100"><SignOut size={13} />Sign out</button>
              </div>
            </motion.div>) : <div></div>
          }
        </div>
      </div>
      {
        ShowModal ? <FormModal onHideForm={HideForm} /> : <div></div>
      }
      <div className="Task-list flex justify-center mt-20 w-12/12">
        <TaskList />
      </div>
    </div>
  );
}
