import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPlace } from "../../api";
import Container from "../../components/Container";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Buttons from "./Buttons";
import Rating from "../Home/Rating";
import { Place } from "../../types";
import Features from "./Features";
import Price from "./Price";
import Availability from "../Home/Availability";

const Detail = () => {
  const { id } = useParams();
  //! console.log(id)

  const { isLoading, error, data } = useQuery<Place>({
    queryKey: ["place"],
    queryFn: () => getPlace(id as string),
  });

  //! console.log(data)
  return (
    <Container designs="max-w-[700px] ">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error.message} name={"place"} />
      ) : (
        data && (
          <div className="flex flex-col gap-3">
            <Buttons id={data.id} />
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold">{data.name} </h1>
              <Rating point={data.rating} expand />
            </div>
            <p>{data.description} </p>
            <img src={data.image_url} className="rounded-lg" alt="" />
            <Features arr={data.amenities} />
            <div className="flex gap-5 items-center justify-between mt-5">
              <Price data={data.price_per_night} />
              <Availability status={data.availability} expand />
            </div>
          </div>
        )
      )}
    </Container>
  );
};

export default Detail;
