import React, { useState } from "react";
import movies from "./components/movies.json";
import { Box, Center, HStack, VStack, Text, Button } from "@chakra-ui/react";

export default function Home() {
  const [randInt, setRandInt] = useState(0);
  function RandomMovie() {
    let randomMovie = movies[randInt];
    return (
      <Box>
        <VStack>
          <HStack>
            <Text maxW="1000px" fontSize="30px" fontWeight="600">
              {randomMovie.title}
            </Text>
            <Text>{randomMovie.year}</Text>
          </HStack>

          <Box>
            <img width="200" src={randomMovie.image} alt={randomMovie.title} />
          </Box>
          <Box>
            <Center>
              <Box paddingBottom="0px" fontSize="24px">
                <HStack>
                  {" "}
                  <Box paddingTop="8px">
                    <ion-icon name="time-outline"></ion-icon>{" "}
                  </Box>
                  <Text>{randomMovie.runtime}</Text>
                </HStack>
              </Box>
            </Center>
            <Box paddingBottom="15px" fontSize="18px">
              <HStack>
                {" "}
                <Box paddingTop="8px">
                  <ion-icon name="film-outline"></ion-icon>
                </Box>
                <Text>{randomMovie.genre}</Text>
              </HStack>
              <HStack>
                {" "}
                <Box paddingTop="8px">
                  <ion-icon name="star"></ion-icon>
                </Box>
                <Text>{randomMovie.rating}</Text>
              </HStack>
            </Box>
          </Box>
        </VStack>
      </Box>
    );
  }

  function getRandInt() {
    let tryrandInt = Math.floor(Math.random() * movies.length);
    while (randInt === tryrandInt) {
      tryrandInt = Math.floor(Math.random() * movies.length);
    }
    setRandInt(tryrandInt);
  }

  return (
    <Center>
      <Box width="70%" className="font">
        <Center>
          <VStack>
            <Text fontSize="40px">movie-web-scraper</Text>
            <Box>
              <Button onClick={() => getRandInt()}>New movie</Button>
            </Box>
            <Box paddingTop="50px">
              <RandomMovie />
            </Box>
          </VStack>
        </Center>
      </Box>
    </Center>
  );
}
