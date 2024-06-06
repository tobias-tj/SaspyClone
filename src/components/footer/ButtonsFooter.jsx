import { motion } from "framer-motion";
import { BiLogoAmazon, BiLogoApple, BiLogoEbay, BiLogoMastercard, BiLogoPlayStore, BiLogoShopify, BiLogoVisa } from "react-icons/bi";

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
  };

  const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x: "-30%", // Ajusta el porcentaje para controlar cuánto se desplaza el slider dentro del contenedor
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 4, // Reduce la duración para hacer el movimiento más rápido
        },
    },
};

const ButtonsFooter = () => {


    return (
        <div className="overflow-hidden">
            <motion.div className="flex flex-row gap-10 w-[50%]" variants={sliderVariants} initial="initial" animate="animate">
            <motion.button variants={textVariants} whileTap={{scale: 2.015}} whileHover={{scale: 2.015}} className='rounded-full bg-gray-950/10 px-4 py-2 text-blue dark:text-white transition-colors hover:blue'>
              <BiLogoApple className="w-[30px] h-[30px]"/>
            </motion.button>
            <motion.button variants={textVariants} whileTap={{scale: 2.015}} whileHover={{scale: 2.015}} className='rounded-full bg-gray-950/10 px-4 py-2 text-blue dark:text-white transition-colors hover:blue'>
              <BiLogoAmazon className="w-[50px] h-[50px]"/>
            </motion.button>
            <motion.button variants={textVariants} whileTap={{scale: 2.015}} whileHover={{scale: 2.015}} className='rounded-full bg-gray-950/10 px-4 py-2 text-blue dark:text-white transition-colors hover:blue'>
              <BiLogoEbay className="w-[50px] h-[50px]"/>
            </motion.button>
            <motion.button variants={textVariants} whileTap={{scale: 2.015}} whileHover={{scale: 2.015}} className='rounded-full bg-gray-950/10 px-4 py-2 text-blue dark:text-white transition-colors hover:blue'>
              <BiLogoPlayStore className="w-[50px] h-[50px]"/>
            </motion.button>
            <motion.button variants={textVariants} whileTap={{scale: 2.015}} whileHover={{scale: 2.015}} className='rounded-full bg-gray-950/10 px-4 py-2 text-blue dark:text-white transition-colors hover:blue'>
              <BiLogoShopify className="w-[50px] h-[50px]"/>
            </motion.button>
            <motion.button variants={textVariants} whileTap={{scale: 2.015}} whileHover={{scale: 2.015}} className='rounded-full bg-gray-950/10 px-4 py-2 text-blue dark:text-white transition-colors hover:blue'>
              <BiLogoMastercard className="w-[50px] h-[50px]"/>
            </motion.button>
            <motion.button variants={textVariants} whileTap={{scale: 2.015}} whileHover={{scale: 2.015}} className='rounded-full bg-gray-950/10 px-4 py-2 text-blue dark:text-white transition-colors hover:blue'>
              <BiLogoVisa className="w-[50px] h-[50px]"/>
            </motion.button>
        </motion.div>
        </div>
        
    )

}

export default ButtonsFooter;