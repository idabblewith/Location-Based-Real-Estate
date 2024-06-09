import { Header } from "@/components/Header";
import { Box } from "@chakra-ui/react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import "leaflet/dist/leaflet.css";

export const Route = createRootRoute({
  component: () => (
    <Box className="relative h-screen w-screen bg-red-500">
      <Header /> {/* Absoulte header */}
      <Box className="absolute z-10 h-full w-full bg-slate-700">
        <Box
          //   bg={"orange"}
          className="flex h-full w-full flex-col"
          justifyContent={"center"}
        >
          <Outlet />
          <TanStackRouterDevtools />
        </Box>
      </Box>
    </Box>
  ),
});
