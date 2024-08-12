import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPlace } from "../../api";
import Container from "../../components/Container";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Buttons from "./Buttons";



const Detail = () => {

const {id} = useParams();
//! console.log(id)

const {isLoading, error, data} = useQuery({
queryKey:["places"],
queryFn:() => getPlace(id as string),
})

//! console.log(data)
  return (
    <Container designs="max-w-[700px] ">
     {isLoading ? (
      <Loader/> 
    ): error ? (
    <Error info={error.message as string} name={"place"} />
  ) : (
  <div>
    <Buttons id={data.id} />
  </div>
  )}
    </Container>
  )
}

export default Detail
