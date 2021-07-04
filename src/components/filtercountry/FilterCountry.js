import { useCallback,useEffect,useReducer, useState } from "react";
import { BsChevronDown , BsChevronUp} from "react-icons/bs";
import CountriesList from "../../data/CountriesList";
import { debounce } from "../../helpers/debounce";
import Loader from "../../components/loader";


const SET_COUNTRIES = "SET_COUNTRIES";
const SET_FILTER = "SET_FILTER";
const CLEAR_FILTER = "CLEAR_FILTER";

const initialState = {
	countries: [],
	oldcountries: [],
	filters: null,
	empty: false,
}
const countriesReducer = (state, action) => {
	switch (action.type) {
		case SET_COUNTRIES:
			return {
				...state,
				countries: action.payload,
				oldcountries: [...action.payload],
			};
		case SET_FILTER:
			// eslint-disable-next-line
			const data = state.countries.filter((item) =>
          
				item.name.toLowerCase().includes(action.payload.toLowerCase())
			);
           
			if (data.length === 0) {
				state.empty = true;
			}
			return {
				...state,
				filter: action.payload,
				countries: data,
			};
		case CLEAR_FILTER:
			return {
				...state,
				filter: null,
				countries: [...state.oldcountries],
				empty: false,
			};

		default:
			throw new Error("");
	}
};



function FilterCountry({countrydata}){

    const [state, dispatch] = useReducer(countriesReducer, initialState);
    const [show, SetShow] = useState(false);
    const ComponentName=!show? BsChevronDown:BsChevronUp;
    const [loading, setLoading] = useState(true);

        useEffect(() => {
            dispatch({
                type: SET_COUNTRIES,
                payload: countrydata,
            });
        }, [countrydata]);

    const onSearch =  debounce(({ target })=>{
        if (target.value.length > 3) {
            const timer = setTimeout(() => {
                dispatch({
                    type: SET_FILTER,
                    payload: target.value,
                });

                setLoading(false);
            }, 1000);
            return () => {
                clearTimeout(timer);
            };
            } else {
            if (state.filter) {
                dispatch({
                    type: CLEAR_FILTER,
                });
            }
            }
    });
    console.log(state.countries)
    return (
        <div className="col-12 text-start p-2 mb-3">

            Searc Country <ComponentName onClick={() => {
             SetShow((prev)=>!prev);
            }}/>
             
               <div className={show ? 'd-block':'d-none "' } >
				
					<input
						type="search"
						className="mt-3 form-control"
						placeholder="start typing..."
						name="searchTerm"
                         onKeyUp={onSearch}
					/>
				</div>

                 <CountriesList data={state.countries} />

                 	 {!loading && state.empty ? <div className='col-12'>No data found</div> : ""} 
                
        </div>
    )

   
} export default FilterCountry;