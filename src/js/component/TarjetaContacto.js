import React from "react";
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../store/appContext'

const TarjetaContacto = ({ contact, editar, img }) => {
    const { store, actions } = useContext(Context)

    const eliminarContacto = () => {
        actions.borrarContacto(contact.id);
    };

    return (

        <div className="container">
        <li className="list-group-item d-flex justify-content-center">
            <div className="d-flex align-items-center w-75">
                <div className="col-md-3 d-flex justify-content-center">
                    <img
                        className="rounded-circle"
                        src={img}
                        alt="Contact"

                    />
                </div>
                <div className="col-md-6">
                    <h5 className="card-title mb-1">{contact.name}</h5>
                    <p className="card-text mb-1">{contact.address}</p>
                    <p className="card-text mb-1">{contact.phone}</p>
                    <p className="card-text mb-1">{contact.email}</p>
                </div>
                <div className="col-md-3 d-flex justify-content-end">
                    <button type="button" className="btn btn-outline-primary mx-2" onClick={()=>editar()} data-bs-toggle="modal" data-bs-target="#editModal">
                        <i className="fa fa-eraser"></i>
                    </button>
                  
                    <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target={"#delete-contact-" + contact.id} >
                        <i className="fa fa-trash fa-lg"></i>
                    </button>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id={"delete-contact-" + contact.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Are you sure?</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    If you delete this thing the etire universe will go down!
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Oh no!</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={eliminarContacto}>Yes baby!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        </div>
    )
}
export default TarjetaContacto