import { Box, Flex, Heading, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const color = useColorModeValue("black", "white");
  const boxShadow = useColorModeValue("lg", "dark-lg");

  return (
    <Flex direction="column" minH="100vh" p={4} bg={bgColor} color={color}>
      <Flex justifyContent="flex-end" p={2}>
        <IconButton aria-label="Toggle dark mode" icon={useColorModeValue(<FaMoon />, <FaSun />)} onClick={toggleColorMode} />
      </Flex>
      <Heading mb={4} textAlign="left">
        AI Software Dev
      </Heading>
      <Flex flex={1} gap={4} flexDirection="row" flexWrap="wrap">
        <Box flex="1 0 48%" borderRadius="lg" p={4} boxShadow={boxShadow} bg={bgColor}>
          Container 1
        </Box>
        <Box flex="1 0 48%" borderRadius="lg" p={4} boxShadow={boxShadow} bg={bgColor}>
          Container 2
        </Box>
        <Box flex="1 0 48%" borderRadius="lg" p={4} boxShadow={boxShadow} bg={bgColor}>
          Container 3
        </Box>
        <Box flex="1 0 48%" borderRadius="lg" p={4} boxShadow={boxShadow} bg={bgColor}>
          Container 4
        </Box>
      </Flex>
    </Flex>
  );
};

export default Index;
