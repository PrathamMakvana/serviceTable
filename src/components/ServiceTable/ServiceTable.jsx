import React, { useEffect, useState, useContext } from "react";
import { ServiceContext } from "../../context/ServiceContext";
import { fetchServices } from "../../utils/api";
import ServiceTableHeader from "./ServiceTableHeader";
import ServiceTableBody from "./ServiceTableBody";
import Pagination from "./Pagination";

const ServiceTable = () => {
  const { services, setServices, currentPage, setNextPageUrl, setPrevPageUrl } =
    useContext(ServiceContext);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    const loadServices = async () => {
      setLoading(true);
      try {
        const data = await fetchServices(currentPage);
        console.log("🚀data --->", data.results);
        setServices(data.results || []);
        setNextPageUrl(data.next);
        setPrevPageUrl(data.previous);
      } catch (err) {
        setError("Failed to fetch services");
      } finally {
        setLoading(false);
      }
    };
    loadServices();
  }, [currentPage, setServices, setNextPageUrl, setPrevPageUrl]);

  useEffect(() => {
    const filtered = services.filter((service) =>
      service?.service_name?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredServices(filtered);
  }, [searchTerm, services]);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-4">
      <ServiceTableHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <ServiceTableBody
        loading={loading}
        error={error}
        filteredServices={filteredServices}
      />
      <Pagination />
    </div>
  );
};

export default ServiceTable;
