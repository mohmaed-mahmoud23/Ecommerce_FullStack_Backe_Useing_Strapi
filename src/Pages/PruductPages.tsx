import { Grid } from "@chakra-ui/react";
import ProductCard from "./PruductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Iprop } from "@/Interfaces";

const ProductPages = () => {
  const [productList, setProductList] = useState([]);
  console.log(import.meta.env.VITE_SERVER_URL);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_SERVER_URL
        }/api/pruducts?populate=category&populate=thumbnail`
      )
      .then((res) => setProductList(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(productList)

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="4">
      {productList.map((product: Iprop) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Grid>
  );
};

export default ProductPages;
