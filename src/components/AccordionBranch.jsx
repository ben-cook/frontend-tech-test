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
        tabIndex={0}
      >
        <li
          style={{
            listStyleType: open ? "disclosure-open" : "disclosure-closed",
          }}
        >
          {name}
        </li>
      </button>

      {open && (
        <ul>
          {children.map((item) => (
            <Accordion key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
};
