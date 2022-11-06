import { firebase } from "@/shared/api";

export const useGetSingleProduct = ({ id }: { id: string }) => {
  id = "Rv7hxz5MTgxhDMVELjxk";
  const getProduct = async () => {
    const data = firebase.GetSingleProduct(id);
    console.log(data);
  };
};
