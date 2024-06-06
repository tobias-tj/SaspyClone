import { useRef } from "react";
import { motion } from "framer-motion";
import Carrousel from "../carrousel/Carrousel";

const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
};

const Services = () => {

    const ref = useRef()

    return(
        <motion.div 
            className="bg-white dark:bg-blue h-screen flex flex-col justify-between"
            variants={variants}
            initial="initial" 
            animate={"animate"}
            ref={ref}
        >
             <motion.div className="textContainer flex self-end items-center gap-20">
                <p className="text-right font-light text-2xl mt-4 md:mt-10">
                    Verifica todas tus cargas
                    <br /> y costos desde nuestra web!
                </p>
                <hr className="w-[300px] max-md:w-[50px] border-t border-blue dark:border-white" />
            </motion.div>
            <motion.div className="flex flex-col items-center">
                <div className="flex items-center flex-col mb-5">
                    <img src="/saspyintitucionalcolor.png" alt="" className="w-72 h-24 rounded-full object-cover mb-2 md:rounded-lg" />
                    <motion.h1 className="text-6xl lg:text-7xl font-thin text-center">
                        <motion.b className="text-red" whileTap={{color:"#fcfcfc"}} whileHover={{color:"#fcfcfc"}}>Unicos</motion.b> Servicios
                    </motion.h1>
                </div>
            </motion.div>
            <motion.div className="mt-5">
                <Carrousel />
            </motion.div>
        </motion.div>
    )
}

export default Services;
