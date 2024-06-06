import {  MessageCircle, PackageCheck, PhoneCall } from 'lucide-react';
import {  motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';


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




const Hero = () => {
    return (
        <section className="hero lg:py-16 bg-white dark:bg-blue">
            <div className="grid grid-cols-1 sm:grid-cols-12 m-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
                <h1 className="text-blue dark:text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                <TypeAnimation
                    sequence={[
                    "Lo compramos",
                    1000,
                    "Lo traemos",
                    1000,
                    "Lo guardamos",
                    1000,
                    "Lo entregamos",
                    1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
                </h1>
                <p className="text-blue dark:text-white sm:text-lg mb-6 lg:text-xl">
                Tus compras online al mejor precio, de la manera mas rápida y eficiente.
                </p>
                <motion.div className="text-5xl flex justify-center gap-16 py-3 text-white dark:text-blue" variants={textVariants}>
                        <motion.button variants={textVariants} whileTap={{scale: 2.015}} whileHover={{scale: 2.015}} className='rounded-full bg-gray-950/10 px-4 py-2 text-blue dark:text-white transition-colors hover:blue'>
                            <PackageCheck />
                        </motion.button>
                        <motion.button variants={textVariants} whileTap={{scale: 2.015}} whileHover={{scale: 2.015}} className='rounded-full bg-gray-950/10 px-4 py-2 text-blue dark:text-white transition-colors hover:blue'>
                            <MessageCircle />
                        </motion.button>
                        <motion.button variants={textVariants} whileTap={{scale: 2.015}} whileHover={{scale: 2.015}} className='rounded-full bg-gray-950/10 px-4 py-2 text-blue dark:text-white transition-colors hover:blue'>
                            <PhoneCall/>
                        </motion.button>
                    </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
                <motion.div className="rounded-full bg-white dark:bg-blue w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mb-8 shadow-lg hover:shadow-xl transition-shadow" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <img
                        src="/saspyintitucionalcolor.png"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={400}
                        height={400}
                    />
                </motion.div>
            </motion.div>
            </div>
        </section>

        
    )
}

export default Hero;