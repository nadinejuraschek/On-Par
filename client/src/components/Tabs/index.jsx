import { useMemo } from "react";
import styles from "./tabs.module.css";
import { Text } from "../Text";

export const Tabs = ({ activeTab, handleClick, tabs, variant = "primary" }) => {
  const renderTabs = useMemo(() => {
    return tabs.map(tab => {
      const { label, value } = tab;
      const isActive = value === (activeTab || tabs[0].value);
      return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          className={ `${ styles.tab } ${ styles[variant] } ${ isActive && styles.active }` }
          key={ `tab_${ value }` }
          onClick={ () => handleClick(tab.value) }
        >
          <Text color={ isActive ? "--primary_700" : "--grey_500" } size="md">{ label }</Text>
        </div>
      );
    });
  }, [activeTab, handleClick, tabs, variant]);

  return <div className={ `${ styles.tabs } ${ styles[variant] }` }>{ renderTabs }</div>;
}