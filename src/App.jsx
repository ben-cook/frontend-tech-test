import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { fetchData } from "./data";

import "./index.css";

export const App = () => {
  // Mock shopping list data
  const [data, setData] = useState();

  // Accordion & sub-accordion states
  const [showChildrenID2, setShowChildrenID2] = useState(false);
  const [showChildrenID3, setShowChildrenID3] = useState(false);
  const [showChildrenID4, setShowChildrenID4] = useState(false);
  const [showChildrenID5, setShowChildrenID5] = useState(false);
  const [showChildrenID6, setShowChildrenID6] = useState(false);
  const [showChildrenID7, setShowChildrenID7] = useState(false);

  useEffect(() => {
    fetchData()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.log(error)
      });
  }, []);

  function transformData(data) {
    if (!data) {
      console.log("Error: no data");
      return;
    }
    return data.map((object) => {
      if (object.children) {
        let setValue;
        let setFunction;

        switch (object.id) {
          case "2":
            setValue = showChildrenID2;
            setFunction = setShowChildrenID2;
            break;
          case "3":
            setValue = showChildrenID3;
            setFunction = setShowChildrenID3;
            break;
          case "4":
            setValue = showChildrenID4;
            setFunction = setShowChildrenID4;
            break;
          case "5":
            setValue = showChildrenID5;
            setFunction = setShowChildrenID5;
            break;
          case "6":
            setValue = showChildrenID6;
            setFunction = setShowChildrenID6;
            break;
          case "7":
            setValue = showChildrenID7;
            setFunction = setShowChildrenID7;
            break;
          default:
            console.log("Error in switch case");
        }
        return (
          <ul
            key={uuidv4()}
            style={{ listStyleType: "none", margin: 0, padding: 0 }}
          >
            <button
              style={{
                border: "none",
                backgroundColor: "transparent",
                fontFamily: "inherit",
                fontSize: "16px",
              }}
              type="button"
              aria-expanded={setValue}
              onClick={() => setFunction(!setValue)}
              onKeyDown={() => setFunction(!setValue)}
              key={object.id}
            >
              {setValue ? "▼" : "▶"}
              {object.name}
            </button>
            {setValue && (
              <ul key={uuidv4()} style={{ listStyleType: "none" }}>
                {transformData(object.children)}
              </ul>
            )}
          </ul>
        );
      }
      return <li key={object.id}>• {object.name}</li>;
    });
  }

  if (!data) {
    return "Fetching data...";
  }

  return (
    <main className="App">
      <div style={{ listStyleType: "none" }}>
        {data && transformData(data)}
      </div>
    </main>
  );
};
