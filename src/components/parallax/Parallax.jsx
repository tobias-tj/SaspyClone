import { useRef } from "react";
import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion";
import PropTypes from "prop-types";


const Parallax = ({type}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    })

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


    return ( 
        <div 
        className="parallax" 
        ref={ref}
        style={{
            background: "linear-gradient(180deg, #070F2B, #1B1A55"
        }}>
            <motion.h1 style={{y: yText}}>{type == "services" ? "No importa la distancia" : "Disponible cuando quieras"}</motion.h1>
            <motion.div className="mountains" ></motion.div>
            <motion.div className="planets" ></motion.div>
            <motion.div style={{
                backgroundImage:`url(${
                    type == "services" ? "/image-10.png" : "/image-8.png"
                })`,
                x : yBg}} className="stars" ></motion.div>
            
        </div>
    )
}

Parallax.propTypes = {
    type: PropTypes.func.isRequired,
};


export default Parallax;