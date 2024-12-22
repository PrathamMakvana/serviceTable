import React, { useContext } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ServiceContext } from "../../context/ServiceContext";

const Pagination = () => {
  const { currentPage, setCurrentPage, nextPageUrl, prevPageUrl } =
    useContext(ServiceContext);

  return (
    <div className="flex items-center justify-between mt-4">
      <button
        onClick={() => setCurrentPage((prev) => prev - 1)}
        disabled={!prevPageUrl}
        className="btn"
      >
        <ChevronLeft />
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button
        onClick={() => setCurrentPage((prev) => prev + 1)}
        disabled={!nextPageUrl}
        className="btn"
      >
        Next
        <ChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
