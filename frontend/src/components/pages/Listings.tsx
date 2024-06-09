import myListings from "@/assets/Data/Dummydata";
import apartmentIcon from "@/assets/Mapicons/apartment.png";
import houseIcon from "@/assets/Mapicons/house.png";
import officeIcon from "@/assets/Mapicons/office.png";
import { Box, Button, Grid, Text } from "@chakra-ui/react";
import { DivIcon, Icon, IconOptions, LatLngExpression } from "leaflet";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import { ListingCard } from "../ListingCard";

export const Listings = () => {
  const coordinates: LatLngExpression = [
    51.505, -0.09,
    // -32.163769770347876, 115.8486285111731,
  ];
  interface IconDefinition {
    icon: Icon<IconOptions> | DivIcon;
    iconSize: [number, number];
  }
  const icons: { [key: string]: IconDefinition } = {
    house: {
      icon: new Icon({
        iconUrl: houseIcon, // Adjust the path to your icon
        iconSize: [40, 40],
      }),
      iconSize: [40, 40],
    },
    apartment: {
      icon: new Icon({
        iconUrl: apartmentIcon, // Adjust the path to your icon
        iconSize: [40, 40],
      }),
      iconSize: [40, 40],
    },
    office: {
      icon: new Icon({
        iconUrl: officeIcon, // Adjust the path to your icon
        iconSize: [40, 40],
      }),
      iconSize: [40, 40],
    },
  };
  return (
    <Grid gridTemplateColumns={"1fr 3fr"} w={"100%"} h={"100%"} pt={14}>
      <Box w={"100%"} h={"100%"} overflowY={"scroll"}>
        {myListings.map((item, idx) => {
          return (
            <ListingCard
              key={item.title}
              listing={item}
              shouldMB={idx !== myListings.length - 1}
            />
          );
        })}
      </Box>
      <Box w={"100%"} h={"100%"}>
        <MapContainer
          attributionControl={false}
          center={coordinates}
          zoom={16}
          scrollWheelZoom={true}
          zoomControl={false}
        >
          <TileLayer
            // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png"
          />
          {myListings.map((item) => {
            return (
              <Marker
                key={item.id}
                icon={
                  item.listing_type === "Apartment"
                    ? icons.apartment.icon
                    : item.listing_type === "Office"
                      ? icons.office.icon
                      : icons.house.icon
                }
                position={[
                  item.location.coordinates[0],
                  item.location.coordinates[1],
                ]}
              >
                <Popup>
                  <Text fontWeight={"semibold"} fontSize={"larger"}>
                    {item.title}
                  </Text>
                  <img src={item.picture1} className="rounded-[8px]" />
                  <Text>{item.description.substring(0, 150)}...</Text>
                  <Button
                    w={"100%"}
                    color={"white"}
                    bg={"blue.500"}
                    _hover={{ bg: "blue.400" }}
                  >
                    Details
                  </Button>
                </Popup>
              </Marker>
            );
          })}
          {/* <Marker icon={icons.house.icon} position={coordinates}>
            <Popup>
              <Text>Home</Text>
            </Popup>
          </Marker> */}
          <ZoomControl position="bottomright" /> {/* Add custom zoom control */}
        </MapContainer>
      </Box>
    </Grid>
  );
};
