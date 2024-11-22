import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 p-2">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Agenda</span>
			</Link>
			<div className="ml-auto">
				<Link to="/agregarContacto">
					<button className="btn btn-primary">Agregar Contacto</button>
				</Link>
			</div>
		</nav>
	);
};
