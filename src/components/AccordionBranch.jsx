import "./AccordionBranch.module.css";

import { useState } from "react";

import { Accordion } from "./Accordion";

export const AccordionBranch = (props) => {
  const { name, children } = props;

  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen((current) => !current);

  return (
    <div>
      <button
        style={{
          border: "none",
          backgroundColor: "transparent",
          fontFamily: "inherit",
          fontSize: "16px",
        }}
        type="button"
        aria-expanded={open}
        onClick={toggleOpen}
        onKeyDown={toggleOpen}
      >
        {open ? "▼" : "▶"}
        {name}
      </button>{" "}
      {open && (
        <ul style={{ listStyleType: "none", margin: 0 }}>
          {children.map((item) => (
            <Accordion key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
};
