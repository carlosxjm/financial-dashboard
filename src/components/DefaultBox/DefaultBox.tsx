import { Box, type BoxProps } from "@chakra-ui/react"


export const DefaultBox = (props: BoxProps) => {
  return (
    <Box width="50%" backgroundColor="white" borderRadius="6px" p="4" {...props} />
  )  

}