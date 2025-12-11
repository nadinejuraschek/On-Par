export const navLinks = [
  { label: "Dashboard", link: "/dashboard" },
  { label: "Notebook", link: "/notebook", subLinks: [
    {
      label: "Work Hours", link: "/workhours",
    },
    {
      label: "Payments", link: "/payments",
    },
    {
      label: "Goals", link: "/goals",
    },
    {
      label: "Notes", link: "/notes",
    },
  ] },
  { label: "Resources", link: "", subLinks: [
    {
      label: "Resources", link: "/resources",
    },
  ] },
  { label: "Settings", link: "", subLinks: [
    {
      label: "Profile", link: "/profile",
    },
  ] },
  // { iconSrc: chat, label: "Messages", link: "/messages" },
  // { iconSrc: hostfamily, label: "Host Family", link: "/hostfamily" },
  // { iconSrc: cluster, label: "Cluster", link: "/cluster" },
];