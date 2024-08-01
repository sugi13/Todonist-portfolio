import { ArrowForward } from "akar-icons";
import { motion } from "framer-motion";

export default function StatusUpdated() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100}}
      animate={{ opacity: 1, y: 0}}
      exit={{opacity: 0, y: -100}}
      transition={{ease: "anticipate"}}
      className="task-status-update bg-white text-black px-4 py-2 rounded-md text-sm"
    >
      <p className="flex text-xs items-center justify-center gap-2">
        Status updated <ArrowForward size={14} />
      </p>
    </motion.div>
  );
}
