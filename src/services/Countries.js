import axios from 'axios'
// import { country_URL } from './service.helpers'

axios.defaults.baseURL = 'https://restcountries.eu/rest/v2';

export const getCountries = async () => {
  try {
    const result = await axios.get(
      `/all` 
      
    )
//    result.data.map((item)=> {  
// console.log("item",item)
//    });

    return result.data


  } catch (error) {
    console.log("myerror",error)
  }
}
