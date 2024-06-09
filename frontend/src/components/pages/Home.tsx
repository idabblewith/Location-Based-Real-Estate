import city from "@/assets/city.jpg";
import { Button, Center, Text } from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-router";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Center
        className="z-10"
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
      >
        <Center mt={-20} display={"flex"} flexDir={"column"}>
          <Text
            casing={"uppercase"}
            fontSize="30px"
            fontWeight="bold"
            color={"white"}
          >
            Find your next property
          </Text>
          <Text
            casing={"uppercase"}
            fontSize="30px"
            fontWeight="bold"
            color={"green.500"}
            pb={10}
          >
            on LBREP
          </Text>
          <Button
            bg={"green.600"}
            _hover={{ bg: "green.500" }}
            color={"white"}
            //   className="rounded-xl bg-green-500 p-4 px-8 text-white"
            onClick={() => navigate({ to: "/listings" })}
          >
            See All Properties
          </Button>
        </Center>
      </Center>
      <img src={city} className="absolute z-0 h-full w-full object-cover" />
    </>
  );
};
