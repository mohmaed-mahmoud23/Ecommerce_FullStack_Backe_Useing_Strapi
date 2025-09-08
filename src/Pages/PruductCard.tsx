import type { Iprop } from "@/Interfaces";
import { Button, Card, Image, Text } from "@chakra-ui/react";
import { type AppDispatch } from "../app/store";
import { Addtocard } from "../app/Fetcher/Cart";
import { useDispatch } from "react-redux";

const ProductCard = (props: Iprop) => {
  const dispatch = useDispatch<AppDispatch>();
  const { id, title, desecription, price, thumbnail, stoke } = props; // ✅ خد كل props

  const imageUrl = `${import.meta.env.VITE_SERVER_URL}${thumbnail?.[0]?.url}`;

  const apro = () => {
    dispatch(
      Addtocard({
        id,
        title,
        desecription,
        price,
        stoke,

        imageUrl: imageUrl ?? "",
        quantity: 1,
        thumbnail,
        url: "",
      })
    );
  };

  return (
    <div>
      <Card.Root
        overflow="hidden"
        bg={"none"}
        border={"1px solid #a8b5c8"}
        margin={"12px"}
      >
        <Image
          src={imageUrl}
          alt="Product image"
          boxSize="200px"
          objectFit="cover"
          borderRadius="50%"
          mx="auto"
          my="4"
        />
        <Card.Body gap="2">
          <Card.Title textAlign={"center"}>{desecription}</Card.Title>
          <Text
            textStyle="2xl"
            fontWeight="medium"
            letterSpacing="tight"
            mt="2"
          >
            {stoke}
          </Text>
          <Text
            textStyle="2xl"
            fontWeight="medium"
            letterSpacing="tight"
            mt="2"
          >
            ${price}
          </Text>
        </Card.Body>
        <Card.Footer gap="2">
          <Button
            onClick={apro}
            w="full"
            size="xl"
            mt="6px"
            variant="outline"
            mx="auto"
          >
            Buy
          </Button>
        </Card.Footer>
      </Card.Root>
    </div>
  );
};

export default ProductCard;
