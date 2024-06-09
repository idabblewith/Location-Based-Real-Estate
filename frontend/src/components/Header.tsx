import { useNavigate } from "@tanstack/react-router";
import { Box, Button } from "@chakra-ui/react";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <Box className="absolute z-20 flex w-full flex-row px-4 py-2">
      <Box className="mr-auto">
        <Button
          rounded={6}
          //   variant={"ghost"}
          bg={"none"}
          _hover={{ bg: "none" }}
          color={"white"}
          className="text-black dark:text-white"
          onClick={() => navigate({ to: "/" })}
        >
          LBREP
        </Button>
      </Box>
      <Box className="">
        <Button
          rounded={6}
          mr={2}
          className="text-black dark:text-white"
          onClick={() => navigate({ to: "/listings" })}
        >
          Listings
        </Button>
        <Button
          rounded={6}
          className="text-black dark:text-white"
          onClick={() => navigate({ to: "/" })}
        >
          Agencies
        </Button>
      </Box>
      <Box className="ml-auto">
        <Button mr={2} rounded={6} onClick={() => navigate({ to: "/" })}>
          Add Property
        </Button>
        <Button
          onClick={() => navigate({ to: "/login" })}
          bg={"blue.500"}
          _hover={{ bg: "blue.400" }}
          color={"white"}
          rounded={6}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};
