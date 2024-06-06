import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import PropTypes from "prop-types";




const SingleSucursales = ({sucursal}) => {

   
    return (
        <motion.div
        className="flex justify-center pt-[10px]"
        initial={{ opacity: 0, y: -20 }} // Inicialmente fuera de la pantalla y transparente
        animate={{ opacity: 1, y: 0 }} // Animación de entrada
        exit={{ opacity: 0, y: -20 }} // Animación de salida
        >
        <div className="group flex relative items-center justify-center cursor-pointer overflow-hidden text-justify bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
            <span className="absolute top-0 z-0 h-20 w-20 rounded-full bg-sky transition-all duration-300 group-hover:scale-[10]">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                <MapPin className="text-blue" />
            </span>
            </span>
            <div className="relative z-10 mx-auto max-w-md mt-5">
            <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <h1 className="text-xl font-bold">{sucursal.title}</h1>
                <div>
                <span>
                    <b>Direccion:</b> {sucursal.direccion}
                </span>
                <br />
                <span>
                    <b>Telefono:</b> {sucursal.telefono}
                </span>
                <br />
                <span>
                    <b>Celular:</b> {sucursal.celular}
                </span>
                <br />
                <span>
                    <b>Horario:</b> {sucursal.horario}
                </span>
                </div>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
                <p>
                <a href="#" className="text-sky text-lg transition-all duration-300 group-hover:text-white">
                    Abrir en Maps &rarr;
                </a>
                </p>
            </div>
            </div>
        </div>
    </motion.div>
    )
}


SingleSucursales.propTypes = {
    sucursal: PropTypes.object.isRequired,
};


export default SingleSucursales