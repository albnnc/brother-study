import useSWR from "swr";
import qs from "qs";

export const useScreen = (id?: string) => {
  const query = qs.stringify({ populate: "*" }, { encodeValuesOnly: true });
  const url = id ? `/api/strapi/api/screens/${id}?${query}` : "";
  return useSWR(url, async (key: string) => {
    if (!key) {
      return undefined;
    }
    const data = await fetch(key).then((v) => v.json());
    return data;
  });
};
