import { Box, Center, Heading, Text } from "@chakra-ui/react";

interface ErrorPageProps {
  title: string
  message?: string
}

export const ErrorPage = ({ title, message }: ErrorPageProps) => {
  return (
    <Center height="100vh">
      <Box textAlign="center">
        <Heading fontSize="6xl" color="black.500">
          {title}
        </Heading>
        <Text fontSize="xl" mt="4" color="gray.600">
          {message}
        </Text>
      </Box>
    </Center>
  );
};