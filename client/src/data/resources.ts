import app from "images/app.svg";
import childcare from "images/childcare.svg";
import documents from "images/document.svg";
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