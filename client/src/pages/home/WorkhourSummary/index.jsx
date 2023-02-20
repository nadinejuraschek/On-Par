import { Button, Tabs } from "components";
import { useMemo, useState } from "react";

import styles from "./workhour.module.css";

export const WorkhourSummary = () => {
  const [activeTab, setActiveTab] = useState("day");

  const tabs = [
    { label: "Today", value: "day" },
    { label: "This Week", value: "week" }
  ];

  const renderDailySummary = useMemo(() => <div>Progress Ring here</div>, []);

  const renderWeeklySummary = useMemo(() => <div>Bar Graph here</div>, []);

  return (
    <div className={ styles.container }>
      { /* <h3 className={ styles.developmentNotice }>This app is currently in development.</h3>
      <h2 className={ styles.featureNotice }>To enjoy the first working features, go to </h2>
    <Button link="/notebook" variant="primary">Notebook</Button> */ }
      <Tabs activeTab={ activeTab } handleClick={ setActiveTab }  tabs={ tabs } variant="secondary" />
      { activeTab === "day" ? renderDailySummary : renderWeeklySummary }
      <Button link="/notebook/workhours" variant="primary">Go to Workhours Log</Button>
    </div>
  );
};