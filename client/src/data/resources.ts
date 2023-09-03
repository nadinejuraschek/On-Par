import app from "assets/app.svg";
import childcare from "assets/childcare.svg";
import documents from "assets/document.svg";
import driversLicense from "assets/driver-license.svg";
import education from "assets/education.svg";
import emergencyphone from "assets/emergency-call.svg";
import englishLanguage from "assets/english-language.svg";
import extension from "assets/extension.svg";
import firstAid from "assets/first-aid.svg";
import rule from "assets/rule.svg";
import tax from "assets/tax.svg";
import traveling from "assets/traveling.svg";

export const resources = [
  {
    title: "Au Pair Program",
    type: "program",
    resources: [
      {
        icon: rule,
        label: "Au Pair Rules",
        active: false,
      },
      {
        icon: documents,
        label: "Host Family Interview Preparation",
        active: false,
      },
      {
        icon: documents,
        label: "Your J-1 Visa",
        active: false,
      },
      {
        icon: extension,
        label: "Extension",
        active: false,
      },
      {
        icon: documents,
        label: "Travel Month",
        active: false,
      },
    ],
  },
  {
    title: "Childcare",
    type: "childcare",
    resources: [
      {
        icon: childcare,
        label: "Childcare Activities",
        active: false,
      },
      {
        icon: firstAid,
        label: "First Aid",
        active: false,
      },
    ],
  },
  {
    title: "Living in the USA",
    type: "life",
    resources: [
      {
        icon: englishLanguage,
        label: "Improve your English Skills",
        active: false,
      },
      {
        icon: documents,
        label: "Apply for your SSN (Social Security Number)",
        active: false,
      },
      {
        icon: driversLicense,
        label: "Get your Driver's License",
        active: false,
      },
    ],
  },
  {
    title: "Emergency",
    type: "emergency",
    resources: [
      {
        icon: emergencyphone,
        label: "Emergency Numbers",
        link: "/resources/emergencynumbers",
        active: true,
      },
    ],
  },
  {
    title: "Education",
    type: "education",
    resources: [
      {
        icon: education,
        label: "Education Requirements",
        active: false,
      },
    ],
  },
  {
    title: "Finances",
    type: "finance",
    resources: [
      {
        icon: tax,
        label: "Pay Taxes",
        link: "/resources/tax",
        active: true,
      },
    ],
  },
  {
    title: "Travel",
    type: "travel",
    resources: [
      {
        icon: traveling,
        label: "Travel Information",
        active: false,
      },
    ],
  },
  {
    title: "Other",
    type: "other",
    resources: [
      {
        icon: documents,
        label: "Add Your Experience to Your Resume / CV",
        active: false,
      },
      {
        icon: app,
        label: "Great Apps to Try",
        active: false,
      },
    ],
  },
];