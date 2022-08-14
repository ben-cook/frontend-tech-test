import { AccordionBranch } from "./AccordionBranch";
import { AccordionLeaf } from "./AccordionLeaf";

export const Accordion = (props) => {
  const { children } = props;

  return children ? (
    <AccordionBranch {...props} />
  ) : (
    <AccordionLeaf {...props} />
  );
};
