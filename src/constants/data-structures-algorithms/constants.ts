/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import {
  Cog,
  ArrowUpFromLine,
  ArrowDownFromLine,
  FileSpreadsheet,
  FileJson,
  Download,
  Share,
} from "lucide-react";

export const dsaDropdownMenu = {
  data: {
    name: "Preferences",
    displayMessage: "Preferences Menu",
    icon: Cog,
  },
  listItem: [
    {
      name: "Expand All",
      onClick: "expandAll",
      icon: ArrowDownFromLine,
    },
    {
      name: "Collapse All",
      onClick: "collapseAll",
      icon: ArrowUpFromLine,
    },
    {
      name: "Import Bulk from .xlsx file",
      onClick: "bulkExcel",
      icon: FileSpreadsheet,
    },
    {
      name: "Import Bulk from .json file",
      onClick: "bulkJson",
      icon: FileJson,
    },
    {
      name: "Download Import Template",
      onClick: "import",
      icon: Download,
    },
    {
      name: "Export questions.json backup",
      onClick: "export",
      icon: Share,
    },
  ],
};
