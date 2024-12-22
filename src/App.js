import React from "react";
import ServiceProvider from "./context/ServiceContext";
import ServiceTable from "./components/ServiceTable/ServiceTable";

const App = () => {
  return (
    <ServiceProvider>
      <ServiceTable />
    </ServiceProvider>
  );
};

export default App;
