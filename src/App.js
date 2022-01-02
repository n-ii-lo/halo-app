import React from "react";
import { ProductListing, ProductModal } from "./Components";
import { QueryClient, QueryClientProvider } from "react-query";
import "./Styles/App.scss";

const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <ProductListing />
      </QueryClientProvider>
    </div>
  );
}

export default App;
