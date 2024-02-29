import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
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
    <ChakraProvider>
      <ApolloProvider client={client}>
        <ShipmentPanel />
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
