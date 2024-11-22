import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

const AgregarContactoALista = () => {
    const { actions, store } = useContext(Context)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const navigate = useNavigate()

    const agregarContacto = async (e) => {
        e.preventDefault()
        let data = {
            "name": nombre,
            "phone": telefono,
            "email": email,
            "address": direccion
        }
        await actions.createContact(data)


        navigate("/")

    }

    return (
        <div className="container">
            <h1 className="text-center">Agregar Contacto</h1>
            <form>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Nombre</label>
                    <input value={nombre} onChange={(e) => setNombre(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" />
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>


                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Telefono</label>
                    <input value={telefono} onChange={(e) => setTelefono(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" />
                </div>

                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Direccion</label>
                    <input value={direccion} onChange={(e) => setDireccion(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" />
                </div>

                <button type="button" onClick={(e) => agregarContacto(e)} className="btn btn-primary">Agregar Contacto</button>
            </form>
        </div>
    )
}
export default AgregarContactoALista