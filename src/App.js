import React from "react";
import ProductListing from "./Components/ProductListing";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductModal from "./Components/ProductModal";

const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <ProductListing />
      </QueryClientProvider>
      <ProductModal />
    </div>
  );
}

export default App;
