import { useEffect, useState } from "react";
import { WorkshopList } from "./components/WorkshopList";
import { getWorkshops } from "./api/get-workshops";

export function App() {
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    getWorkshops()
      .then(({ workshops }) => {
        setWorkshops(workshops);
      })
      .catch((err) => {
        console.error("Error occurred", err);
      });
  }, []);

  return (
    <div className="container layout">
      <WorkshopList workshops={workshops} />
    </div>
  );
}
