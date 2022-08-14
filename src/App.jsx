import "./index.css";

import { Accordion } from "./components/Accordion";
import { useData } from "./hooks/useData";

export const App = () => {
  // Mock shopping list data
  const { data, status } = useData();

  if (status === "loading") {
    return "Fetching data...";
  }

  return (
    <main className="App">
      <div style={{ listStyleType: "none" }}>
        {data && data.map((item) => <Accordion key={item.id} {...item} />)}
      </div>
    </main>
  );
};
