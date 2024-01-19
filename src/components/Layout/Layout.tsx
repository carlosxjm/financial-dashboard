import { Box, Flex } from "@chakra-ui/react";
import { MainAside } from "../MainAside/MainAside";
import { Outlet } from "react-router-dom";



export const Layout = () => {
  return (
    <Flex minHeight="100vh" bg="gray.100">
      <MainAside />

      <Flex direction="column" flex="1">
        <Box flex="1" p="12">
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};
