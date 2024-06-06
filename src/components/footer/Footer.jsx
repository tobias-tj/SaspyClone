import { footerLinks } from "@/utils";
import { Github, Linkedin } from "lucide-react";
import ButtonsFooter from "./ButtonsFooter";
import { motion } from "framer-motion";




const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <section className="relative pb-10 sm:pb-16 py-5 bg-white dark:bg-blue">
      <div className="flex items-center flex-col gap-10 my-2">
        <ButtonsFooter />
        <motion.div 
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
        className="md:max-w-[370px]">
          <h1 className="text-4xl text-blue dark:text-white">Saspy Express</h1>
          <p className="leading-relaxed text-base ss:text-lg mt-5 text-blue dark:text-white">
            Focalizamos nuestros esfuerzos en la calidad de atención a los clientes a fin de brindarles oportunas soluciones desde la búsqueda, compra y entrega de sus pedidos.          </p>
        </motion.div>
        <div className="flex items-center gap-10 md:gap-[120px]">
          {footerLinks.map((item, index) => (
            <div key={index}>
              <h3 className="font-semibold text-blue dark:text-white">{item.title}</h3>
              <ul className="flex flex-col gap-3 xs:gap-5 mt-5">
                {item.links.map((link, index) => (
                  <motion.a 
                  key={index} 
                  initial={{opacity: 0, y:-20}}
                  animate={{opacity: 1, y: 0, transition: {delay: index * 0.1}}}
                  exit={{opacity: 0, y: -20}}
                  href={link.link} 
                  >
                    <li className="text-[.9rem] font-[500] text-blue dark:text-white">
                      {link.name}
                    </li>
                  </motion.a>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between md:flex-row flex-col gap-5 pt-10 mt-10 sm:mt-16 border-t border-t-blue dark:border-t-white">
        <p className="md:text-base xs:text-sm text-xs text-blue dark:text-white">
          Copyright Ⓒ {date} TJ.
        </p>
        <div>
          <div className="flex items-center gap-3 xs:gap-5 text-lg xs:text-xl">
            <motion.a href="https://github.com/tobias-tj" whileTap={{scale: 2.015}} whileHover={{scale: 2.015}} className="rounded-full bg-gray-950/10 px-4 py-2 text-blue dark:text-white transition-colors hover:blue">
              <Github />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/tobias-jara-65956a21a/" whileTap={{scale: 2.015}} whileHover={{scale: 2.015}} className="rounded-full bg-gray-950/10 px-4 py-2 text-blue dark:text-white transition-colors hover:blue">
              <Linkedin />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;