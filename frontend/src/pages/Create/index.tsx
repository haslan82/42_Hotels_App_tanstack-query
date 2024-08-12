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
const {isPending,mutate} = useMutation({
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
//!console.log(body)

mutate(body);

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
     <button disabled={isPending} className="border px-6 py-2 my-5 
     font-bold text-white shadow rounded-md bg-blue-500 transition
      hover:bg-blue-600 disabled:bg-blue-300" 
     type="submit">Gönder</button>
     </Form>
     </Formik>
    </Container>
  )
}

export default Create
