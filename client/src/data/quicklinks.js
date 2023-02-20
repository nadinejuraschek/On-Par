import childcare from "images/childcare.svg";
import emergencyphone from "images/emergency-call.svg";
import extension from "images/extension.svg";

export const quicklinks = [
  {
    icon: emergencyphone,
    label: "Emergency Numbers",
    link: "/emergencynumbers",
    active: true,
  },
  { icon: childcare,
    label: "Kid Activity Suggestions",
    link: "",
    active: false,
  },
  {
    icon: extension,
    label: "Extending",
    active: false,
  },
]