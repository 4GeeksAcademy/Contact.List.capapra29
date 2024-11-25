import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import TarjetaContacto from "../component/TarjetaContacto";
import Editar from "../component/editar";

const Contacts = () => {
    const { actions, store } = useContext(Context)
    const [edit, setEdit] = useState({
        showModal: false,
        id: undefined
    })

    useEffect(() => {
        actions.getInfoContactos()
    }, [])
    return (
        <div>
            {store.listaContactos.map((item, index) => (
                <TarjetaContacto
                    key={index}
                    contact={item}
                    editar={() => setEdit({ showModal: true, id: item.id })}
                    img="https://picsum.photos/170/170"
                />
            ))}
            <Editar
                id={edit.id}
                showModal={edit.showModal}
            />
        </div>
    )
}
export default Contacts