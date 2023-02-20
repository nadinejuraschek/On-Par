import app from "images/app.svg";
import childcare from "images/childcare.svg";
import driversLicense from "images/driver-license.svg";
import education from "images/education.svg";
import emergencyphone from "images/emergency-call.svg";
import englishLanguage from "images/english-language.svg";
import extension from "images/extension.svg";
import firstAid from "images/first-aid.svg";
import rule from "images/rule.svg";
import tax from "images/tax.svg";
import traveling from "images/traveling.svg";

export const resources = [
  {
    icon: tax,
    label: "Paying Taxes",
    link: "/resources/tax",
    active: true,
  },
  {
    icon: childcare,
    label: "Childcare Activities",
    active: false,
  },
  {
    icon: app,
    label: "Great Apps to Try",
    active: false,
  },
  {
    icon: traveling,
    label: "Traveling",
    active: false,
  },
  {
    icon: education,
    label: "Education",
    active: false,
  },
  {
    icon: emergencyphone,
    label: "Emergency Numbers",
    link: "/emergencynumbers",
    active: true,
  },
  {
    icon: firstAid,
    label: "First Aid",
    active: false,
  },
  {
    icon: englishLanguage,
    label: "Improving your English Skills",
    active: false,
  },
  {
    icon: rule,
    label: "Au Pair Rules",
    active: false,
  },
  {
    icon: extension,
    label: "Extending",
    active: false,
  },
  {
    icon: driversLicense,
    label: "Getting your Driver's License",
    active: false,
  },
];