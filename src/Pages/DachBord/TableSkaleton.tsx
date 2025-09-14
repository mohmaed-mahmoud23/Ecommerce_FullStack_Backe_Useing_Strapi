import {
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
const TableSkaleton = () => (
  <Stack gap="6" maxW="xs">
    <HStack width="full">
      <SkeletonText noOfLines={10} />
    </HStack>
    <HStack width="full">
      <SkeletonText noOfLines={2} />
    </HStack>
    <HStack width="100%" style={{ width: "100%" }}>
      <SkeletonText noOfLines={2} />
    </HStack>
  </Stack>
);
export default TableSkaleton;
