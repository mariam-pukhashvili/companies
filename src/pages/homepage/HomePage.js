import { useCallback, useEffect, useState, useReducer } from "react";
import { CountriesList } from "../../data/CountriesList";

import { getCountries } from "../../services";
import { debounce } from "../../helpers/debounce";
import Loader from "../../components/loader";


function Homepage() {
	// const [state, dispatch] = useReducer(cocktailsReducer, initialState);
	// const [, setcocktailsStorage] = useLocalStorage("app:cocktails", []);
	const [countries, setCountries]=useState([]);
	const [loading, setLoading] = useState(true);

	const loadCocktails = useCallback(async () => {
		const countriesList = await getCountries();
		setCountries(countriesList);
	}, [countries]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
			loadCocktails();
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	}, []);


	const rendercocktails = () => {
		return <CountriesList data={countries} />;
	};
	return (
		<div className="container m-auto w-75 mt-5">
			<div className="col-12 mb-4">
				{/* <div className="col-12 shadow search p-5 row m-0">
					<h5> Search Your Favorite Cocktail </h5>
					<input
						type="search"
						className="form-control"
						placeholder="start typing..."
						name="searchTerm"
						
					/>
				</div> */}
				{/* <h3 className="myTitle display-6">Countries</h3> */}
			</div>
			<div className="col-12">{rendercocktails()}</div>

			<div className="col-12">
				{/* {!loading && state.empty ? <EmptyData /> : ""} */}
			</div>
		</div>
	);
}

export default Homepage;
