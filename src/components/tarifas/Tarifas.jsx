import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowBigRightDash } from "lucide-react";
import { AlertDialogTarifa } from "./dialog/AlertDialogTarifa";
import { tarifaData } from "./data/tarifaData";




const Tarifas = () => {
  const [selectedTab, setSelectedTab] = useState(tarifaData[0]);
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="relative overflow-x-auto overflow-y-scroll bg-white dark:bg-blue">
        <h1 className="text-center mb-5 text-4xl text-blue dark:text-white">Tarifas</h1>
        <div className="flex justify-center items-center">
            <div className="max-w-lg w-full bg-blue dark:bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="flex">
                {tarifaData.map((item, index) => (
                    <div
                    key={index}
                    className={`flex-1 p-4 cursor-pointer ${
                        item === selectedTab ? "bg-red text-white dark:bg-[#fff]" : "bg-blue dark:bg-white"
                    }`}
                    onClick={() => setSelectedTab(item)}
                    >
                    <h2 className="text-lg font-bold text-white dark:text-blue">{item.title}</h2>
                    </div>
                ))}
                </div>
                <div className="p-4" style={{ overflowY: 'auto', maxHeight: '400px' }}>
                    {selectedTab && (
                    <motion.table
                        key={selectedTab.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full mb-4 text-base bg-blue text-white dark:bg-white dark:text-blue"
                    >
                        <thead>
                            <tr>
                                <th scope="col" className="px-6 py-4">Viaje</th>
                                <th scope="col" className="px-4 py-2">Punto De Retiro</th>
                                <th scope="col" className="px-4 py-2">Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                        {selectedTab.content.slice(0, showMore ? selectedTab.content.length : 3).map((item, index) => (
                            <motion.tr 
                            key={index}
                            initial={{opacity: 0, y: -20}}
                            animate={{opacity: 1, y:0, transition: {delay: index * 0.1}}}
                            exit={{opacity: 0, y: -20}}
                            className="bg-[#393667] dark:bg-[#fff] border-none hover:bg-gray-50 dark:hover:bg-black text-blue dark:text-gray-500">
                            <td className="px-4 py-2 flex items-center space-x-2 border-none w-[100px] h-[50px]">
                                <img src={item.flag1} alt="Country Enviada" className="w-[15px]" />
                                <ArrowBigRightDash className="w-[20px]"/>
                                <img src={item.flag2} alt="Country Recibida" className="w-[15px]"/>
                            </td>
                            <td className="px-4 py-2">{item.name}</td>
                            <td className="px-4 py-2">{item.value}</td>
                            </motion.tr>
                        ))}
                        </tbody>
                    </motion.table>
                    )}
                   {selectedTab && selectedTab.content.length > 3 && (
                        <button onClick={() => setShowMore(!showMore)} className="block mx-auto bg-blue text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-blue-400 focus:ring-opacity-75">
                            {showMore ? "Ver Menos" : "Ver Mas"}
                        </button>
                   )}
                    <div className="flex justify-between mt-2">
                        <AlertDialogTarifa type=""/>
                        <AlertDialogTarifa type="delivery"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Tarifas;

