import { IListing } from "@/types";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Tag,
  Text,
} from "@chakra-ui/react";

interface IListingCard {
  listing: IListing;
  shouldMB: boolean;
}

export const ListingCard = ({ listing, shouldMB }: IListingCard) => {
  return (
    <>
      <Card key={listing.id} mb={shouldMB ? 2 : undefined} m={4}>
        <CardBody>
          <Box pos={"relative"} rounded={8} overflow={"hidden"}>
            <img src={listing.picture1} className="object-cover" />

            <Flex
              pos={"absolute"}
              top={0}
              right={0}
              flexDir={"column"}
              justifyContent={"space-between"}
              // w={"100%"}
              h={"100%"}
              p={2}
            >
              <Tag
                alignSelf="flex-end"
                bg={
                  listing.listing_type === "Apartment"
                    ? "blue.500"
                    : listing.listing_type === "Office"
                      ? "orange.500"
                      : "green.500"
                }
                color={"white"}
              >
                {listing.listing_type}
              </Tag>
              <Tag size={"lg"} alignSelf="flex-end">
                $
                {listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                {listing.property_status !== "Sale" &&
                  `/ ${listing.rental_frequency}`}
              </Tag>
            </Flex>
          </Box>
          <Box mt={2}>
            <Heading size="sm" mb={1}>
              {listing.title}
            </Heading>

            <Text>
              {listing.description.substring(0, 200)}
              {listing.description.length >= 200 && "..."}
            </Text>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};
