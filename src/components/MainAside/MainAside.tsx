import { useState } from "react";
import { Box, Flex, VStack, Button, Text } from "@chakra-ui/react";
import { DragHandleIcon, HamburgerIcon, SettingsIcon } from "@chakra-ui/icons";
import { NavLink, useLocation } from "react-router-dom";

const ASIDE_LINKS = [
  { label: 'Overview', path: '/', icon: <DragHandleIcon /> },
  { label: 'Resources', path: '/resources', icon: <SettingsIcon /> },
];

export const MainAside = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { pathname } = useLocation();


  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box
      width={isCollapsed ? "60px" : "250px"}
      bg="white"
      borderRight="1px"
      borderColor="gray.200"
      transition="width 0.3s"
    >
      <Flex
        direction="row"
        align="center"
        justifyContent="space-between"
        p="4"
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Box as="img" width="80px" src="/logo.jpeg" alt="Logo" mb="2" />

        <Button
          size="sm"
          onClick={handleCollapse}
          variant="ghost"
          color="gray.500"
          _hover={{ color: 'gray.700' }}
        >
          <HamburgerIcon />
        </Button>
      </Flex>

      <VStack align="start" pt="4" spacing="0">
      {ASIDE_LINKS.map(link => (
        <Flex
          key={link.path}
          bgColor={pathname === link.path ?  'gray.100' : 'white' }
          alignItems="center"
          as={NavLink}
          to={link.path}
          width="100%"
          p="2"
        >
          {link.icon}
          <Text marginLeft="2" display={isCollapsed ? "none" : "block"}>
            {link.label}
          </Text>
        </Flex>
      ))}
      </VStack>
    </Box>
  );
};