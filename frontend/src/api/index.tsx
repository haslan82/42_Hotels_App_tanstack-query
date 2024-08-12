import axios from "axios";



// base URL' e sahip axios örneği oluşturduk

const api = axios.create({baseURL:"http://localhost:4004"})

export type Params= {
    location: string;
    title: string;
    order: string;
}
// bütün konaklama yerlerini getiren istek

export const getPlaces =(params:Params) => 
api.get("api/places", {params})
.then((res)=> res.data.places);


// 1 konaklama yerini getir

export const getPlace =(id:string) => 
api.get(`/api/place/${id}`)
.then((res)=> res.data.place);


// 1 konaklama yerini sil
export const deletePlace =(id:string) => 
api.delete(`/api/place/${id}`);


