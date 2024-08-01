import { Link } from "react-router-dom";
import { FacebookFill, InstagramFill, YoutubeFill } from "akar-icons";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <div  className="Footer mt-28 p-10 font-Inter flex justify-around">
            <div className="footer-header">
                <Link to='/' className="text-xl font-bold">Todonist</Link>
            </div>
            <div className="social-links flex items-center gap-4">
                <p className="text-xs opacity-40 font-medium">Follow us on</p>
                <div className="flex items-center gap-5">
                    <FacebookFill size={15} />
                    <InstagramFill size={15} />
                    <YoutubeFill size={15} />
                </div>
            </div>
        </div>
    )
}
