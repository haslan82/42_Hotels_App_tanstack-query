import { Field, Form, Formik } from "formik"
import Container from "../../components/Container"
import { initial, inputs } from "../../constant"
import { PlaceData } from "../../types";
import { useMutation } from "@tanstack/react-query";
import { createPlace } from "../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const Create = () => {
const navigate = useNavigate();
const {mutate} = useMutation({
  mutationFn:(body:PlaceData)=>createPlace(body),
  onSuccess:()=> {
    toast.success("Konaklama noktası oluşturuldu");
    navigate("/");
  },

  onError:() => {
    toast.error("İşlem başarısız oldu...")
  },
})


  const handleSubmit = (values:PlaceData)=> {
// kopya oluştur

const body = {...values};

     // özellikleri diziye çevir
body.amenities = (values.amenities as string).split(",") ;
    // api ye istek at
console.log(body)
  };
  return (
    <Container>
     <Formik 
     initialValues={initial} 
     onSubmit={handleSubmit}
     >
  <Form className="flex max-w-2xl mx-auto grid grid-cols-1 gap-5" >
    {inputs.map((item, key)=> (
     <div key={key} className="flex flex-col gap-3"> 
     <label className="font-bold" >{item.label} </label>
     <Field 
     type={item.type || "text"}
     name={item.name}
     placeholder={item.label} 
     className="border py-1 px-4 rounded-md shadow w-full"/>
     </div>
    ))}
     <button className="border px-4 py-1 shadow rounded-md bg-blue-500" type="submit">Gönder</button>
     </Form>
     </Formik>
    </Container>
  )
}

export default Create
