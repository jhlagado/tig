import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import "./App.css";
import { useState } from "react";
import { Shipment } from "./types/Shipment";
import { ShipmentList } from "./components/ShippingList";
import { ChakraProvider } from "@chakra-ui/react";

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
  const [showDetails, setShowDetails] = useState(false);

  const handleSelected = (shipment: Shipment) => {
    console.log({ shipment });
    setShowDetails(true);
  };

  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <main className="">
          <ShipmentList onSelect={handleSelected} />
        </main>
        {showDetails && (
          <details>
            <p className="text-red-600">Shipment details</p>
          </details>
        )}
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
