import { Link } from "react-router-dom";
import "../../App.css";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div  className="navbar font-Inter text-sm flex items-center justify-around m-3">
        <div className="Nav-links flex gap-4 items-center text-black">
            <Link to= '/'>Home</Link>
            <Link to= '/HowItWorks'>How It Works</Link>
            <Link to= '/pricing'>Pricing</Link>
        </div>
        <div  className="brand">
            <Link to= '/' className="text-xl font-bold">Todonist</Link>
        </div>
        <div className="Auth flex items-center gap-5">
        <Link to= '/register' className="bg-green-500 text-white px-4 py-2 rounded-2xl text-xs">Register</Link>
        </div>
    </div>
  )
}
