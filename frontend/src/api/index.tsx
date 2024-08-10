import axios from "axios";



// base URL' e sahip axios örneği oluşturduk

const api = axios.create({baseURL:"http://localhost:4004"})


// bütün konaklama yerlerini getiren istek

export const getPlaces =() => 
api.get("api/places")
.then((res)=> res.data.places);


// 1 konaklama yerini getir

export const getPlace =() => 
api.get("api/places/1")
.then((res)=> res.data);


