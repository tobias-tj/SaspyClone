import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import {  MessageCircleQuestionIcon, PackageCheckIcon } from "lucide-react"
import PropTypes from "prop-types";


export const AlertDialogTarifa = ({type}) =>{

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline" className="text-white dark:bg-[#fff] dark:text-black">{type == "delivery" ? <PackageCheckIcon/> : <MessageCircleQuestionIcon/>}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle className="text-3xl text-white">{type == "delivery" ? "Delivery Gratuito" : "Productos"}</AlertDialogTitle>
                <AlertDialogDescription>
                    {type == "delivery" ? "Delivery gratuito para Asunción, para Gran Asunción e interior del País consultar costo con Ejecutivo de Cuenta. Tiempo de entrega estimado: entre 24 a 72 hs (sujeto a disponibilidad)." : "Productos con valores superiores a 100 US$ o que se encuentran dentro de categorías especiales por su tipología, cuentan con un abono extra de arancel establecido. Consultar este tipo de categorías y tarifas a su ejecutivo de cuentas asignado."}
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogAction className="bg-red">Entendido</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}


AlertDialogTarifa.propTypes = {
    type: PropTypes.string.isRequired,
};

