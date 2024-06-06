import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { motion, AnimatePresence } from "framer-motion";



const Carrousel = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const[modalContent, setModalContent] = useState();

    const openModal = (title, subtitle, descriptionTitle, descriptionSub) => {
        setModalContent({title, subtitle, descriptionTitle, descriptionSub});
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const listStringSub = {
        items: [
            "- Registro Gratuito",
            "- Licencias, Certificados, Habilitaciones y Permisos Especiales",
            "- Atención Personalizada",
            "- Sucursales en puntos importantes del país",
            "- Delivery y envíos en todo el país.",
            "- +2 vuelos semanales",
            "- Servicio de carga aérea puerta a puerta",
            "- Embarques mensuales Marítimos",
            "- Seguro de Carga",
        ]
    }



    return (
        <>
            <Carousel orientation="horizontal">
                <CarouselContent classNameName="-ml-2 md:-ml-4">
                    <CarouselItem classNameName="pl-2 md:pl-4" onClick={() => openModal("Saspy Cargo", "Ventajas", "Con Saspy, puedes cotizar y transportar tus cargas desde y hacia cualquier parte del mundo. Por vía marítima, aérea, o terrestre.", listStringSub.items)}>
                            <motion.div
                                className="bg-blue dark:bg-white rounded-lg overflow-hidden shadow-lg mx-auto max-w-[450px] text-center sm:shrink-0 sm:grow sm:basis-0"
                                whileTap={{scale: 1.089}} whileHover={{scale: 1.089}}>
                                <img
                                    className="rounded-t-lg h-[250px] w-[250px] mx-auto"
                                    src="/image-1.png"
                                    alt="Saspy Cargo" />
                                <div className="p-6">
                                    <h1 className="text-white dark:text-blue text-3xl">Saspy Cargo</h1>
                                </div>
                            </motion.div>
                    </CarouselItem>
                    <CarouselItem classNameName="pl-2 md:pl-4" onClick={() => openModal("Saspy Care", "Ventajas", "Importacion de Productos Sanitarios: A través de Saspy Care podemos gestionar al cliente, tanto la compra, como el transporte e importación de productos sanitarios.", listStringSub.items)}>
                            <motion.div
                                className="bg-blue dark:bg-white rounded-lg overflow-hidden shadow-lg mx-auto max-w-[450px] text-center sm:shrink-0 sm:grow sm:basis-0"
                                whileTap={{scale: 1.089}} whileHover={{scale: 1.089}}>
                                <img
                                    className="rounded-t-lg h-[250px] w-[250px] mx-auto"
                                    src="/image-2.png"
                                    alt="Saspy Care" />
                                <div className="p-6">
                                    <h1 className="text-white dark:text-blue text-3xl">Saspy Care</h1>
                                </div>
                            </motion.div>
                    </CarouselItem>
                    <CarouselItem classNameName="pl-2 md:pl-4" onClick={() => openModal("Servicio Pickup", "Ventajas", "Si la tienda no hace envíos a nuestra bodega, contamos con el servicio de recogida de las tiendas, hoteles. Te cotizamos acorde a la distancia y al tamaño del producto.", listStringSub.items)}>
                            <motion.div
                                className="bg-blue dark:bg-white rounded-lg overflow-hidden shadow-lg mx-auto max-w-[450px] text-center sm:shrink-0 sm:grow sm:basis-0"
                                whileTap={{scale: 1.089}} whileHover={{scale: 1.089}}>
                                <img
                                    className="rounded-t-lg h-[250px] w-[250px] mx-auto"
                                    src="/image-5.png"
                                    alt="Servicio Pickup" />
                                <div className="p-6">
                                    <h1 className="text-white dark:text-blue text-3xl">Servicio Pickup</h1>
                                </div>
                            </motion.div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>

            <AnimatePresence>
                {modalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-red p-8 rounded-lg w-[350px] h-[550px] lg:w-[500px] flex flex-col justify-center items-center">
                            <h1 className="text-2xl font-bold mb-2 text-[#fff]">{modalContent.title}</h1>
                            <motion.p 
                                 initial={{ opacity: 0, y: -20}}
                                 animate={{ opacity: 1, y: 0 }}
                                 exit={{ opacity: 0, y: -20 }}
                                className="text-white">
                                {modalContent.descriptionTitle}
                            </motion.p>
                            <h1 className="text-2xl font-semibold mb-2 mt-4 text-[#fff]">{modalContent.subtitle}</h1>
                            <ul>
                                {modalContent.descriptionSub.map((item, index) => (
                                    <motion.li
                                        className="text-white"
                                        key={index}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0, transition: { delay: index * 0.1 } }}
                                        exit={{ opacity: 0, y: -20 }}
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                            <button
                                className="ml-auto flex items-center justify-center rounded-lg p-2 font-bold bg-white border-none text-red text-2xl cursor-pointer"
                                onClick={closeModal}
                            >
                                Cerrar
                            </button>
                            
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            
            </>
    )
};

export default Carrousel;
