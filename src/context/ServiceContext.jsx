import React, { createContext, useState } from "react";

export const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);

  return (
    <ServiceContext.Provider
      value={{
        services,
        setServices,
        currentPage,
        setCurrentPage,
        nextPageUrl,
        setNextPageUrl,
        prevPageUrl,
        setPrevPageUrl,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
