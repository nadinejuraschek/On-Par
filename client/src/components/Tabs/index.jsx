import { useMemo } from "react";
import styles from "./tabs.module.css";
import { Text } from "../Text";

export const Tabs = ({ activeTab, fullWidth = false, handleClick, spaceBetween, tabs, variant = "primary" }) => {
  const renderTabs = useMemo(() => {
    return tabs.map(tab => {
      const { disabled = false, label, value } = tab;
      const isActive = value === (activeTab || tabs[0].value);
      return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          className={ `${ styles.tab } ${ styles[variant] } ${ isActive && styles.active } ${ disabled && styles.disabled }` }
          key={ `tab_${ value }` }
          onClick={ disabled ? {} : () => handleClick(tab.value) }
        >
          <Text color={ isActive ? "--primary_700" : "--grey_500" } size="md">{ label }</Text>
        </div>
      );
    });
  }, [activeTab, handleClick, tabs, variant]);

  return <div className={ `${ styles.tabs } ${ styles[variant] } ${ fullWidth && styles.fullWidth } ${ spaceBetween && styles.spaceBetween }` }>{ renderTabs }</div>;
}