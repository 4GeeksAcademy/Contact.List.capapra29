import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import  Contact  from "./views/Contact.js";
import agregarContactoALista from "./views/agregarContactoALista.js";
//import { editarContacto} from "./views/editarContacto.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import AgregarContactoALista from "./views/agregarContactoALista.js";


const Layout = () => {
	
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Contact />} />
						<Route path="/agregarContacto" element={<AgregarContactoALista />} />
						<Route path="/editarContacto" element={<editarContacto />} />
						<Route path="*" element={<h1>No encontrado!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
