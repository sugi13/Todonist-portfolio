import { motion } from "framer-motion";
import { CheckBoxFill } from "akar-icons";


export default function AddTaskPopup() {
  return (
    <motion.div
    initial={{Y: 200,position: "fixed", top: 450, left: 20, opacity: 0}}
    animate={{Y: 0,position: "fixed", opacity: 1}}
    transition={{ease: "easeIn"}}
    className="Popup w-40 shadow-2xl flex items-center justify-center relative left-56 py-2 bg-blue-500 text-white  rounded-lg"
  >
    <div className="popup-content">
      <p className="flex items-center justify-center gap-2 text-sm">
        Task added <CheckBoxFill size={20} color="white" />
      </p>
    </div>
  </motion.div>
  )
}
