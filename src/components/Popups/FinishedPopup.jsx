import "../../App.css";
import { motion } from "framer-motion";
import { CheckBoxFill } from "akar-icons";

export default function FinishedPopup() {
  return (
    <motion.div
      initial={{Y: -200,position: "fixed", top: 550, left: 20, opacity: 0}}
      animate={{Y: 0,position: "fixed", opacity: 1}}
      transition={{ease: "easeIn"}}
      className="Popup w-44 shadow-2xl flex items-center justify-center relative left-56 bg-blue-500 text-white py-2 px-5 rounded-lg"
    >
      <div className="popup-content">
        <p className="flex items-center justify-center gap-2 text-sm">
          Task completed <CheckBoxFill size={20} color="white" />
        </p>
      </div>
    </motion.div>
  );
}
