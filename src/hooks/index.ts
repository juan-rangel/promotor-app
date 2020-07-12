import useSWR from "swr";
import api from "../services/api";

export function useCustomFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(url, async (url) => {
    const response = await api.get(url);

    return response.data;
  });

  return { data, error, mutate };
}

export function useActionFetch<Data = any, Error = any>(
  url: string,
  dispatcher: Function
) {
  const { data, error, mutate } = useSWR<Data, Error>(url, async (url) => {
    const response = await api.get(url);

    return response.data;
  });

  dispatcher(data);

  return { data, error, mutate };
}

export function useFetch<Data = any, Error = any>(url: string) {
  return useCustomFetch(url);
}
