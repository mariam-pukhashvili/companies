import { useCallback, useEffect, useState, useReducer } from "react";
import { CountriesList } from "../../data/CountriesList";

import { getCountries } from "../../services";
import { debounce } from "../../helpers/debounce";
import Loader from "../../components/loader";
import FilterCountry from '../../components/filtercountry';


function Homepage() {
	// const [state, dispatch] = useReducer(cocktailsReducer, initialState);
	// const [, setcocktailsStorage] = useLocalStorage("app:cocktails", []);
	const [countries, setCountries]=useState([]);
	const [loading, setLoading] = useState(true);

	const loadCountries = useCallback(async () => {
		const countriesList = await getCountries();
		setCountries(countriesList);
	}, [countries]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
			loadCountries();
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	}, []);


	const rendercountries = () => {


		return <FilterCountry countrydata={countries}/>
	};
	
	return (
		<div className="container m-auto w-75 mt-5">
			<div className="col-12">{loading ? <Loader /> : rendercountries()}</div>	
			<div className="col-12">
				{/* {!loading && state.empty ? <EmptyData /> : ""} */}
			</div>
		</div>
	);
}

export default Homepage;
