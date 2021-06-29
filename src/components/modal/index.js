import react from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

class ModalRoot extends react.Component {
	element = document.createElement("div");

	render() {
		const { showModal, setShowModal, children } = this.props;

		return createPortal(
			<Modal showModal={showModal} setShowModal={setShowModal}>
				{children}
			</Modal>,
			document.getElementById("modal-root")
		);
	}
}
export default ModalRoot;
