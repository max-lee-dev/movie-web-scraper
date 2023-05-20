import "./App.css";
import Home from "./pages/Home.js";
import { ChakraProvider, Box } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box bgColor="red" minH="100vh">
        <Home />
      </Box>
    </ChakraProvider>
  );
}

export default App;
