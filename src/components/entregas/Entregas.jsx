import { sucursalesData } from "./sucursales/SucursalesData";
import SingleSucursales from "./sucursales/SingleSucursales";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"




const Entregas = () => {



    return (
        <div className="relative bg-white dark:bg-blue">
            <div className="pt-[50px] top-0 left-0 text-center">
                <h1 className="text-4xl text-blue dark:text-white">Entregas</h1>
            </div>
            <Carousel
                opts={{
                    align: "start",
                }}
                orientation="vertical"
                className="mt-10 h-[600px]"
            >
                <CarouselContent className="-mt-1 h-[460px] ">
                    {sucursalesData.map((sucursal) => (
                        <CarouselItem key={sucursal.id} className="pt-1 md:basis-1/2">
                            <div className="p-1">
                                <SingleSucursales sucursal={sucursal} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
                
        </div>
    )
}

export default Entregas;
