import Navbar from "../components/common/Navbar";
import Illustration from "../assets/diagram-export-6-13-2024-12_47_12-AM.png";
import { motion } from "framer-motion";

export default function Appwork() {
  return (
    <motion.div
      initial={{y: "-100%"}}
      animate={{y: 0}}
      exit={{y: "-100%"}}
      transition={{ease: "backIn", duration: 1}}
      className="App-work font-Inter"
    >
      <Navbar />
      <div className="content flex  flex-col items-center mt-32">
        <div className="header flex flex-col gap-5 text-center">
          <h1 className="text-4xl font-bold leading-relaxed">
            Overwhelmed On top of it
          </h1>
          <p className="text-xs opacity-55">
            know your app and how it works and organised.
          </p>
        </div>
        <div className="w-12/12 mt-10 flex flex-col items-center justify-center">
          <img src={Illustration} className="w-10/12" />
        </div>
      </div>
    </motion.div>
  );
}
