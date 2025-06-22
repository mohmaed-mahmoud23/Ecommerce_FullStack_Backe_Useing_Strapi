// import type { Iprop } from "@/Interfaces";
import type { Iprop } from "@/Interfaces";
import { Button, Card, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router";

const PruductCard = ({ thumbnail, desecription, price }: Iprop) => {
  const imageUrl = `${import.meta.env.VITE_SERVER_URL}${
    thumbnail?.[0]?.url
  }`;

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
          <Card.Description
            textAlign={"center"}
            fontSize={"sm"}
            color={"purple.500"}
            borderRadius={"lg"}
          >
            {}
          </Card.Description>
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
          <Link to="/Prudact/1" style={{ width: "100%" }}>
            <Button w="full" size="xl" mt="6px" variant="outline" mx="auto">
              View Details
            </Button>
          </Link>
        </Card.Footer>
      </Card.Root>
    </div>
  );
};

export default PruductCard;
