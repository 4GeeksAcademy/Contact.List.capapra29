const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            listaContactos: []
        },
        actions: {
            crearUsuario: () => {
                fetch("https://playground.4geeks.com/contact/agendas/capapra29", {
                    method: "POST",

                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);

                    })
                    .catch((error) => console.log(error));
            },

            getInfoContactos: () => {
                fetch("https://playground.4geeks.com/contact/agendas/capapra29/contacts", {
                    method: "GET"
                })
                    .then((response) => {
                        if (response.status == 404) {
                            getActions().crearUsuario()
                        }
                        if (response.ok) {
                            return response.json()
                        }
                    })
                    .then((data) => {
                        if (data) {
                            setStore({ listaContactos: data.contacts })
                        }
                    }) // store is an object, and I want to target the contacts state and assign it the value of data.contacts
                    .catch((error => console.log(error)))
            },

            agregarContactoALista: (contact) => {
                const store = getStore();
                setStore({ ...store, listaContactos: [...store.listContacts, contact] })
            },

            createContact: (payload) => {
                fetch("https://playground.4geeks.com/contact/agendas/capapra29/contacts", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        payload
                    ),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        const actions = getActions();
                        // actions.agregarContactoALista(data);
                        actions.getInfoContactos()
                        console.log("Contact added:", data);
                        return true
                    })
                    .catch((error) => console.log(error));
            },
            borrarContacto: (id) => {
                fetch(`https://playground.4geeks.com/contact/agendas/capapra29/contacts/${id}`, {
                    method: "DELETE",
                })
                    .then((response) => {
                        console.log(response)
                        if (response.ok) {
                            const store = getStore();
                            const updatedContacts = store.listaContactos.filter(contact => contact.id !== id);
                            setStore({ listaContactos: updatedContacts });
                            console.log(`Contact with ID ${id} deleted`);
                        } else {
                            console.log("Error deleting contact");
                        }
                    })
                    .catch((error) => console.log(error));
            },

            editarContacto: (id, contact) => {
                const store = getStore()
                fetch(`https://playground.4geeks.com/contact/agendas/4geeks-user/contacts/${id}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(contact)
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.json()
                        }
                    })
                    .then((data) => {
                        if (data) {
                            const updatedList = store.listaContactos.map(contact => {
                                if (contact.id == id) {
                                    contact = data
                                }
                                return contact
                            })
                            setStore({ listaContactos: updatedList })
                        }
                    })
                    .catch((error) => console.log(error));


            }
        }
    }
};

export default getState;