import { useNavigate } from "@tanstack/react-router";
import { Box, Button } from "@chakra-ui/react";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box className="bg-blue-500">
        <Box className="flex flex-row">
          <Box className="mr-auto">
            <Button
              className="text-black dark:text-white"
              onClick={() => navigate({ to: "/" })}
            >
              Home
            </Button>
          </Box>
          <Box className="">
            <Button
              className="text-black dark:text-white"
              onClick={() => navigate({ to: "/listings" })}
            >
              Listings
            </Button>
            <Button
              className="text-black dark:text-white"
              onClick={() => navigate({ to: "/" })}
            >
              Agencies
            </Button>
          </Box>
          <Box className="ml-auto">
            <Button
              className="mr-1 w-[15rem] rounded-sm bg-green-500 p-1 text-base text-white"
              onClick={() => navigate({ to: "/" })}
            >
              Add Property
            </Button>
            <Button
              className="w-[15rem] rounded-sm bg-white p-1 text-base text-black"
              onClick={() => navigate({ to: "/login" })}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
