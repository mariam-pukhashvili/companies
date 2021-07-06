
import Modal from "../components/modal";
import { useState } from "react";
export const CountriesList = ({ data }) => {
	const [showModal, setShowModal] = useState(false);
	const [alpha3Code, setalpha3Code] = useState("");	

return (
	<div className="row cocktail mt-3">
  
			<Modal showModal={showModal} setShowModal={setShowModal}>
				 <div>
			 {data.map((item) => { 

               const dataone = data.filter((item) =>
          
				item.alpha3Code.toLowerCase().includes(alpha3Code.toLowerCase())
			);

			console.log(dataone)
				
				//return (<div className="col-12 text-start country_name">{dataone}</div>)

			  })} 


			    </div>
			</Modal>

			{data.map((item) => {
			
			return (
					
	<div className=" col-12 shadow mb-3 p-0" key={item.name}>
		
		<div className="col-12 d-flex justify-content-start p-3 align-items-center" >
			<div className="col-1"><img
			className="card-img-top img-fluid"
			src={item.flag}
			alt="cocktail"
			/>
			</div>
			<div className="col-4  text-start offset-1 country_name">{item.name}</div>
			<div className="col-4 offset-md-1 text-start">
				<div className="d-flex align-items-center"><div className="country_details">region: </div> {item.region}</div>
				<div className="d-flex align-items-center"><div className="country_details">capital: </div>{item.capital}</div>
				<div className="d-flex align-items-center"><div className="country_details">population: </div>{item.population}</div>
			</div>
			
			<div className="col-1 text-start "><button className="btn btn-primary detailsbutton" onClick={() => {
						setShowModal(true);
						setalpha3Code(item.alpha3Code);

					}}>details</button></div>
		
		    </div>
	</div>
				);
			})} 
	</div>
	);
};

export default CountriesList;
