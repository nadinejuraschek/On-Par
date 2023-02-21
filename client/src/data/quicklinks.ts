import childcare from "images/childcare.svg";
import emergencyphone from "images/emergency-call.svg";
import tax from "images/tax.svg";

export const quicklinks = [
  {
    icon: emergencyphone,
    label: "Emergency Numbers",
    link: "/resources/emergencynumbers",
    active: true,
  },
  { icon: childcare,
    label: "Kid Activity Suggestions",
    link: "",
    active: false,
  },
  {
    icon: tax,
    label: "Paying Taxes",
    link: "/resources/tax",
    active: true,
  },
]