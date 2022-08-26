import { useQuery } from "@tanstack/react-query";

export const useReactQuery = (endpoint, param) => {
  const getData = async () => {
    const response = await fetch(endpoint);
    return response.json();
  };

  const { data, status } = useQuery([`${param}`], getData);

  return {
    data,
    status,
  };
};