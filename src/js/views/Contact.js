import React,{useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import TarjetaContacto from "../component/TarjetaContacto";

const Contacts=()=>{
    const {actions, store} = useContext(Context)

    useEffect(()=>{
        actions.getInfoContactos()
    },[])
    return(
        <div>
            {store.listaContactos.map((item,index)=>(
                <TarjetaContacto
                key={index}
                contact={item}
                />
            ))}
        </div>
    )
}
export default Contacts