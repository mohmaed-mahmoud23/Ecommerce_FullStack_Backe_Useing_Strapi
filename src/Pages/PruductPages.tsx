import { Grid } from "@chakra-ui/react";
import ProductCard from "./PruductCard";
import axios from "axios";
import type { Iprop } from "@/Interfaces";
import { useQuery } from "@tanstack/react-query";
import PruductSkeleton from "./PruductSkeleton";

const ProductPages = () => {
  const getPrudact = async () => {
    const { data } = await axios.get(
      `${
        import.meta.env.VITE_SERVER_URL
      }/api/pruducts?populate=category&populate=thumbnail`
    );

    return data;
  };

  const { isLoading, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getPrudact(),
  });

  if (isLoading)
    return (
      <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="4">
        {Array.from({ length: 20 }, (_, ind) => (
          <PruductSkeleton key={ind} />
        ))}
      </Grid>
    );

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="4">
      {data.data.map((product: Iprop) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Grid>
  );
};

export default ProductPages;
