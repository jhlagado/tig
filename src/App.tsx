import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ShipmentPanel } from "./components/ShipmentPanel";

const client = new ApolloClient({
  uri: "https://fe-coding-test-o6yezgstiq-km.a.run.app/graphql",
  headers: {
    "x-token": "fe-test-2023",
  },
  queryDeduplication: false,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <ShipmentPanel />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
