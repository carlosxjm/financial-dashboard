import { useState } from "react";
import { Box, Flex, VStack, Button, Text, useBreakpoint } from "@chakra-ui/react";
import { DragHandleIcon, HamburgerIcon, SettingsIcon } from "@chakra-ui/icons";
import { NavLink, useLocation } from "react-router-dom";

const ASIDE_LINKS = [
  { label: 'Overview', path: '/', icon: <DragHandleIcon /> },
  { label: 'Resources', path: '/resources', icon: <SettingsIcon /> },
];

export const MainAside = () => {
  const currentBreakPoint =  useBreakpoint()
  const isExtraLargeScreen = currentBreakPoint.includes('xl')
  const [isCollapsed, setIsCollapsed] = useState(!isExtraLargeScreen);
  const { pathname } = useLocation();


  console.log({currentBreakPoint})

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  


  return (
    <Box
      width={{base: "250px", xl: isCollapsed ? "60px" : "250px"}}
      position={{ base: 'absolute', xl: 'relative' }}
      left={{base: isCollapsed ? "-250px" : "0px", xl: "0px" }}
      bg="white"
      borderRight="1px"
      borderColor="gray.200"
      transition="width 0.3s"
      height="100vh"
      zIndex="4"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
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
          position="relative"
          left={{ base: "54px", xl: "0px" }}
          background={{ base: 'gray.300', xl: 'transparent' }}
          _hover={{ color: 'gray.700' }}
          borderLeftRadius="0"

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
          onClick={() => !isExtraLargeScreen && setIsCollapsed(true)}
        >
          {link.icon}
          <Text
            marginLeft="2"
            display={{base:'block', xl: isCollapsed ? "none" : "block"}}

          >
            {link.label}
          </Text>
        </Flex>
      ))}
      </VStack>
    </Box>
  );
};