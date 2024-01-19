import { Heading, Flex, Box } from "@chakra-ui/react"

export const ResourceList = () => {
  return (
    <>
      <Heading>Resources</Heading>
      <Flex gap="12px" mt="4">
        <Box width="100%" backgroundColor="white" borderRadius="6px" p="4">
          <Heading size='md'>Bank accounts</Heading>
        </Box>

        <Box width="100%" backgroundColor="white" borderRadius="6px" p="4">
          <Heading size='md'>Credit cards</Heading>
        </Box>
      </Flex>
    </>
  )
}