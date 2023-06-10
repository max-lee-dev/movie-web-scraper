import "./App.css";
import Home from "./pages/Home.js";
import Footer from "./pages/components/Footer.js";
import { ChakraProvider, Box } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box bg="#ededed" minH="100vh">
        <Home />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
