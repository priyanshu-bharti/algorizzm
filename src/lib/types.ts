import { LucideProps } from "lucide-react";

/**
 * A single entry of DSA Question for its prepration page.
 */
export interface DsaQuestion {
  id: string;
  isExpanded: boolean;
  questionName: string;
  pattern: string;
  difficulty: string;
  problemStatement: string;
  solutions: {
    name: string;
    answer: string;
    isCode: boolean;
  }[];
}

/* ------------------------- Dropdown Menu Related˛ ------------------------- */

export interface DropdownMenuListItem {
  name: string;
  onClick: unknown;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

export interface DropDownMenuData {
  name: string;
  displayMessage: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

/* ----------------------------- Accordion State ---------------------------- */

export interface AccordionState {
  id: string;
  isExpanded: boolean;
}
