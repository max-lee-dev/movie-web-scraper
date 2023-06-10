import React, { useEffect, useState } from "react";
import allmovies from "./components/allmovies.json";
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
    let randomMovie = allmovies[randInt];
    return (
      /*
      <Center>
      <Text paddingTop='30px' paddingBottom='50px' fontWeight={600} fontSize='30px' color={config["mainText"]}> sign up </Text>
    </Center>
    <form onSubmit={register}>
      <Box color={config['mainText']} className={'placeholder'} width="100%">
        <Input
          placeholder="Username"
          _hover={{ borderColor: config["mainText"]}}

          borderColor={config["subtleText"]}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <Input
          placeholder="Email"
          marginTop={'10px'}
          _hover={{ borderColor: config["mainText"]}}

          borderColor={config["subtleText"]}
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <Input
          placeholder="Password"
          marginTop={'10px'}
          _hover={{ borderColor: config["mainText"]}}

          borderColor={config["subtleText"]}
          type="password"
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <Input
          marginTop={'10px'}
          _hover={{ borderColor: config["mainText"]}}

          borderColor={config["subtleText"]}
          placeholder="Confirm Password"
          type="password"

          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        <Center>
          <p className="currentIncorrect">{registerErrorMessage}</p>
        </Center>
        <Center className="standardButton">

          <Button marginTop="10px"
            type="submit"
            backgroundColor={"#555"}
            onClick={register}>
            <Box paddingTop='10px' minWidth='150%' minHeight='100%' bg={config["themeInactiveButton"]}>
              sign up
            </Box>
          </Button>

        </Center>
        <Center>
          <Box paddingTop={'10px'} color={config["subtleText"]}>
            have an account?{" "}<Button onClick={() => setLoginPage(true)} color={config["subtleText"]} className={'underline'} variant="link">log in</Button>
          </Box>
        </Center>
      </Box>
    </form>
  </Box>
  */
      <Box
        borderRadius="15px"
        paddingTop="10px"
        color="black"
        minW="150%"
        boxShadow={"0px 1px 15px 3px rgba(0, 0, 0, 0.12)"}
      >
        <VStack>
          <HStack>
            <Text maxW="1000px" fontSize="25px" fontWeight="600">
              {randomMovie.title}
            </Text>
            <Text>{randomMovie.year} </Text>
          </HStack>
          <Center>
            <Box>
              <Button
                _hover={{ bg: "#9e9e9e", color: "white" }}
                bg="#c9c9c9"
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
    let tryrandInt = Math.floor(Math.random() * allmovies.length);
    while (randInt === tryrandInt) {
      tryrandInt = Math.floor(Math.random() * allmovies.length);
    }
    setRandInt(tryrandInt);
  }

  useEffect(() => {
    getRandInt();
    // eslint-disable-next-line
  }, []);

  return (
    <Center>
      <Box minH="95vh" className="font">
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

              <Text color="black" fontWeight="600" fontSize="30px">
                movie-web-scraper
              </Text>
            </HStack>

            <Box paddingTop="50px">
              <Center>
                <RandomMovie />
              </Center>
            </Box>
          </VStack>
        </Center>
      </Box>
    </Center>
  );
}
