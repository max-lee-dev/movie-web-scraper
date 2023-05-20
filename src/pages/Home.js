import React from "react";
import { Box, Center, HStack, VStack, Text, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <Center>
      <Box width="70%" className="font">
        <Center>
          <VStack>
            <Text fontSize="40px">movie-web-scraper</Text>
            <Box>
              <Button>New movie</Button>
            </Box>
            <Box paddingTop="50px">
              <Text> test </Text>
            </Box>
          </VStack>
        </Center>
      </Box>
    </Center>
  );
}
