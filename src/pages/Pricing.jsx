import Navbar from "../components/common/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Pricing() {
  const [changValue, setChangeValue] = useState(false);

  function HandleTrue() {
    setChangeValue(true);
  }

  function HandleDefault() {
    setChangeValue(false);
  }

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{x: "100%"}}
      transition={{ ease: "backOut", duration: 1 }}
      className="Pricing font-Inter"
    >
      <Navbar />
      <div className="Button-tabs flex items-center justify-center flex-col relative top-14 gap-2">
        <p className="text-xs">Billing cycle</p>
        <div className="btn flex items-center gap-2 bg-gray-100 px-5 py-2 rounded-lg">
          <button className="text-sm text-gray-600" onClick={HandleDefault}>
            Monthly
          </button>
          <button className="text-sm text-green-400" onClick={HandleTrue}>
            Yearly
          </button>
        </div>
      </div>
      <div className="product-pricing flex items-center justify-center mt-24 gap-24">
        <div className="beginner-pricing-card shadow-2xl flex flex-col gap-5 bg-gray-100 rounded-lg p-10 h-auto">
          <div className="header flex flex-col gap-2">
            <h1 className="text-xl font-bold">Beginner</h1>
            <p className="opacity-40 text-sm">
              Start organizing your life for free
            </p>
          </div>
          <div className="card-content flex flex-col gap-3">
            <h4 className="text-xl font-bold text-green-400">$0 Monthly</h4>
            <div className="list flex flex-col gap-4">
              <li className="opacity-40 text-sm font-medium">
                15 personal projects
              </li>
              <li className="opacity-40 text-sm font-medium">
                Smart quick add
              </li>
              <li className="opacity-40 text-sm font-medium">
                Flexible list & board layouts
              </li>
              <li className="opacity-40 text-sm font-medium">3 filter views</li>
            </div>
            <p className="text-center bg-black p-2 rounded-lg text-white text-xs mt-2">
              Get Started
            </p>
          </div>
        </div>
        <div className="pro-pricing-card flex flex-col gap-5 bg-gray-100 rounded-lg p-10 h-auto shadow-2xl">
          <div className="header flex flex-col gap-2">
            <h1 className="text-xl font-bold">Pro</h1>
            <p className="opacity-40 text-sm">Organize your work and life</p>
          </div>
          <div className="card-content flex flex-col gap-3">
            <h4 className="text-xl font-bold text-green-400">
              {changValue ? "$6 Yearly" : "$8 Monthly"}
            </h4>
            <div className="list flex flex-col gap-4">
              <li className="opacity-65 text-sm font-medium">
                350 personal projects
              </li>
              <li className="opacity-65 text-sm font-medium">
                Calendar layout
              </li>
              <li className="opacity-65 text-sm font-medium">
                Flexible list & board layouts
              </li>
              <li className="opacity-65 text-sm font-medium">
                150 filter views
              </li>
            </div>
            <p className="text-center bg-black p-2 rounded-lg text-white text-xs mt-2">
              Get Started
            </p>
          </div>
        </div>
        <div className="Business-pricing-card flex flex-col gap-5 bg-gray-100 rounded-lg p-10 h-auto shadow-2xl">
          <div className="header flex flex-col gap-2">
            <h1 className="text-xl font-bold">Business</h1>
            <p className="opacity-40 text-sm">Manage your team’s tasks, too</p>
          </div>
          <div className="card-content flex flex-col gap-3">
            <h4 className="text-xl font-bold text-green-400">
              {changValue ? "$12 Yearly" : "$14 Monthly"}
            </h4>
            <div className="list flex flex-col gap-4">
              <li className="opacity-65 text-sm font-medium">
                Up to 500 team projects
              </li>
              <li className="opacity-65 text-sm font-medium">
                A shared team workspace
              </li>
              <li className="opacity-65 text-sm font-medium">
                1000 project folders
              </li>
              <li className="opacity-65 text-sm font-medium">
                Centralized team billing
              </li>
            </div>
            <p className="text-center bg-black p-2 rounded-lg text-white text-xs mt-2">
              Get Started
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
