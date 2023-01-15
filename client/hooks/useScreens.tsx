import useSWRInfinite from "swr/infinite";
import qs from "qs";

export const useScreens = () => {
  return useSWRInfinite(
    (index) => {
      const query = qs.stringify(
        {
          populate: "*",
          pagination: {
            pageSize: 10,
            page: index + 1,
          },
        },
        {
          encodeValuesOnly: true,
        }
      );
      return `/api/strapi/api/screens?${query}`;
    },
    async (key) => {
      const data = await fetch(key).then((v) => v.json());
      return data;
    }
  );
};
