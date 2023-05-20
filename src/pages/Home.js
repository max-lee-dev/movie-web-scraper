import React, { useEffect, useState } from "react";
import movies from "./components/movies.json";
import {
  Box,
  Center,
  HStack,
  VStack,
  Text,
  Button,
  Tooltip,
  Divider,
} from "@chakra-ui/react";

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
            <img width="300" src={randomMovie.image} alt={randomMovie.title} />
          </Box>
          <Box fontWeight="400">
            <Center>
              <Box paddingBottom="0px" fontSize="26px">
                <HStack>
                  {" "}
                  <Box paddingTop="8px" width="120px">
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
                  <Divider
                    orientation="vertical"
                    borderWidth="1px"
                    borderColor="black"
                    height={6}
                  />
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

  useEffect(() => {
    getRandInt();
    // eslint-disable-next-line
  }, []);

  return (
    <Center>
      <Box minH="95vh" width="70%" className="font">
        <Center>
          <VStack>
            <Text fontWeight="900" fontSize="40px">
              movie-web-scraper
            </Text>

            <Box paddingTop="50px">
              <Center>
                <Box>
                  <Button
                    _hover={{ bg: "#5471a1" }}
                    bg="#7da4e3"
                    onClick={() => getRandInt()}
                  >
                    New movie
                  </Button>
                </Box>
              </Center>
              <RandomMovie />
            </Box>
          </VStack>
        </Center>
      </Box>
    </Center>
  );
}
