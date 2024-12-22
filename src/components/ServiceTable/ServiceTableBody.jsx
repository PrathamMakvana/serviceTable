import React from "react";
import { Loader2 } from "lucide-react";

const ServiceTableBody = ({ loading, error, filteredServices }) => {
  if (error) {
    return <div className="text-red-500 text-center py-4">{error}</div>;
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200" border={2}>
        <thead className="bg-gray-50">
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Duration</th>
          </tr>
        </thead>
        {loading ? (
          <div className="flex justify-center py-4">
            <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
            <span className="ml-2 text-gray-500">Loading services...</span>
          </div>
        ) : (
          <tbody>
            {filteredServices.length === 0 ? (
              <div className="text-gray-500 text-center py-4">
                No services found
              </div>
            ) : (
              filteredServices.map((service) => (
                <tr key={service.id}>
                  <td className="pl-2">{service.id}</td>
                  <td className="pl-5 pr-5">
                    <img
                      src={service.service_image}
                      alt={service.service_name || "Service Image"}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "scroll",
                      }}
                    />
                  </td>
                  <td>{service?.service_name}</td>
                  <td>
                    <div
                      dangerouslySetInnerHTML={{ __html: service?.description }}
                    />
                  </td>
                  <td>${service.price}</td>
                  <td>{service?.service_time?.minutes} minutes</td>
                </tr>
              ))
            )}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default ServiceTableBody;
