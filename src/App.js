import "./App.css";
import Home from "./pages/Home.js";
import Footer from "./pages/components/Footer.js";
import { ChakraProvider, Box } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box
        bgGradient="linear(rgba(21, 83,
          117, 0.69) 0%, rgba(78, 130, 147, 0.8) 100%);"
        minH="100vh"
      >
        <Home />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
