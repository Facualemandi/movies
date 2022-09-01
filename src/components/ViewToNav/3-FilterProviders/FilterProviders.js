import { useQuery } from "@tanstack/react-query";
import React from "react";
import { helpHttp } from "../../../Helper/Helphttps";

const FilterProviders = () => {
  const API_URL =
    "https://api.themoviedb.org/3/discover/movie?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295&sort_by=popularity.desc&page=1&with_watch_providers=43&watch_region=AR";

  const getFilter = async () => {
    const response = await Promise.all([helpHttp().get(API_URL)]);
    console.log(response);
  };

  const { data, status } = useQuery([""], getFilter);;

  if(status === 'loading'){
    return <p>Cargando</p>
  }
  return (
    <>
      <div>FilterProviders</div>
    </>
  );
};

export default FilterProviders;
