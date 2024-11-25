import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";



const Editar = ({ id }) => {

    const { actions, store } = useContext(Context)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const navigate = useNavigate()

    const editarContacto = async (e) => {
        e.preventDefault()
        let data = {
            "name": nombre,
            "phone": telefono,
            "email": email,
            "address": direccion
        }
        await actions.editarContacto(id, data)




    }

    return (
        <div>
            <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Editar Contacto</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
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


                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={(e) => editarContacto(e)} data-bs-dismiss="modal">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Editar