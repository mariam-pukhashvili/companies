import Modal from "../../components/modal";
import { useState } from "react";
function AboutPage() {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className="row justify-content-center about">
			<h2>About Us</h2>
			<Modal showModal={showModal} setShowModal={setShowModal}>
				<h2> custom context</h2>
			</Modal>
			<div className="col-10 d-flex justify-content-start pl=5">
				<button
					className="btn btn-warning col-2"
					type="button"
					onClick={() => {
						setShowModal(true);
					}}
				>
					show modal
				</button>
			</div>
			<div className="col-6 aboutClass mt-5">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
				repudiandae architecto qui adipisci in officiis, aperiam sequi atque
				perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur
				nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione
				hic aspernatur error blanditiis?
			</div>
		</div>
	);
}
export default AboutPage;
