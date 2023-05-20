import React from "react";
import { Box, Center, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      paddingTop="26px"
      color="#595959"
      fontSize="14px"
      className="font"
      fontWeight={400}
    >
      <Center>
        <Box>
          Made by Max Lee |{" "}
          <Link href="https://github.com/max-lee-dev/movie-web-scraper">
            GitHub
          </Link>
        </Box>
      </Center>
    </Box>
  );
}
