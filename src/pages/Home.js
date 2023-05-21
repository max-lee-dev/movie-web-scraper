import React, { useEffect, useState } from "react";
import movies from "./components/movies.json";
import logo from "./components/movie.png";
import {
  Box,
  Center,
  HStack,
  VStack,
  Text,
  Button,
  Tooltip,
  Divider,
  Icon,
} from "@chakra-ui/react";

export default function Home() {
  const [randInt, setRandInt] = useState(0);
  function RandomMovie() {
    let randomMovie = movies[randInt];
    return (
      <Box color="#2e2323">
        <VStack>
          <HStack>
            <Text maxW="1000px" fontSize="25px" fontWeight="600">
              {randomMovie.title}
            </Text>
            <Text>{randomMovie.year}</Text>
          </HStack>
          <Center>
            <Box>
              <Button
                _hover={{ bg: "#ff685e", color: "white" }}
                bg="#ffe0de"
                onClick={() => getRandInt()}
                fontSize="24px"
                fontWeight="400"
                color="black"
                width="300px"
              >
                New movie
              </Button>
            </Box>
          </Center>

          <Box>
            <img width="300" src={randomMovie.image} alt={randomMovie.title} />
          </Box>
          <Box width="300px" fontWeight="400">
            <Box paddingBottom="0px" fontSize="26px">
              <HStack justifyContent="space-between">
                {" "}
                <Box paddingTop="8px" minWidth="120px">
                  <HStack>
                    <Tooltip label="Runtime">
                      <Box fontSize="32px">
                        <ion-icon name="time-outline"></ion-icon>{" "}
                      </Box>
                    </Tooltip>

                    <Text fontSize="22px" paddingBottom="10px">
                      {randomMovie.runtime}
                    </Text>
                  </HStack>
                </Box>
                <Tooltip label="Copy runtime to clipboard">
                  <Button
                    minH="40px"
                    maxW="25px"
                    bgColor="transparent"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        randomMovie.runtime.split(" ")[0]
                      );
                    }}
                  >
                    <Box fontSize="24px" paddingTop="5px">
                      <ion-icon name="clipboard-outline"></ion-icon>
                    </Box>
                  </Button>
                </Tooltip>
              </HStack>
            </Box>
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

  useEffect(() => {
    getRandInt();
    // eslint-disable-next-line
  }, []);

  return (
    <Center>
      <Box minH="95vh" width="70%" className="font">
        <Center>
          <VStack>
            <HStack>
              <Box
                color="#ff685e"
                fontSize="40px"
                paddingTop="16px"
                paddingRight="3px"
              >
                <ion-icon name="videocam"></ion-icon>{" "}
              </Box>

              <Text color="#ffe0de" fontWeight="900" fontSize="30px">
                movie-web-scraper
              </Text>
            </HStack>

            <Box paddingTop="50px">
              <RandomMovie />
            </Box>
          </VStack>
        </Center>
      </Box>
    </Center>
  );
}
