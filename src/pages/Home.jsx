import Navbar from "../components/common/Navbar";;
import { Link } from "react-router-dom";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import Footer from "../components/common/Footer";
import { useEffect } from "react";

export default function Home() {
  const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

  const color = useMotionValue(COLORS[0]);

  const backgroundImage = useMotionTemplate`radial-gradient(120% 120% at 50% 0%, #ffffff 50%, ${color})`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "circIn",
      duration: 10,
      repeat: Infinity,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{opacity: 0}}
      transition={{ duration: 2, ease: "anticipate" }}
      className="Home relative h-screen overflow-hidden"
      style={{
        backgroundImage,
      }}
    >
      <Navbar />
      <div className="Home-content mt-44 flex  items-center justify-center text-center font-Inter">
        <div className="content flex flex-col items-center gap-5">
          <h1 className="text-header text-5xl font-Inter font-bold">
            More than just a To-do list.
          </h1>
          <p className="text-black text-sm font-semibold opacity-30 font-Inter leading-7">
            Solving problems with drowsiness, apathy, lack of motivation <br />{" "}
            and other factors that do not allow you to grow.
          </p>
          <Link
            to="/register"
            className="bg-green-500 text-white px-5 py-2 rounded-xl text-sm"
          >
            starts for free
          </Link>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}
