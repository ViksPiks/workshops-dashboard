import { useEffect, useState } from "react";
import { WorkshopList } from "./components/WorkshopList";
import { getWorkshops } from "./api/get-workshops";
import { Pagination } from "./components/Pagination";

export function App() {
  const [workshops, setWorkshops] = useState([]);
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    getWorkshops()
      .then((res) => {
        setWorkshops(res.workshops);
        setPagination(res.pagination);
      })
      .catch((err) => {
        console.error("Error occurred", err);
      });
  }, []);

  return (
    <div className="container layout">
      <WorkshopList workshops={workshops} />
      <Pagination
        currentPage={pagination.page}
        totalPages={pagination.totalPages}
      />
    </div>
  );
}
