import { ITabs, TTab } from "./types";

import { Text } from "../Text";
import styles from "./tabs.module.css";
import { useMemo } from "react";

export const Tabs = ({
  activeTab,
  fullWidth = false,
  handleClick,
  spaceBetween = false,
  tabs,
  variant = "primary",
}: ITabs): JSX.Element => {
  const renderTabs = useMemo(() => {
    return tabs.map((tab: TTab): JSX.Element => {
      const { disabled = false, label, value } = tab;
      const isActive = value === (activeTab || tabs[0].value);
      return (
        <div
          className={ `${ styles.tab } ${ styles[variant] } ${ isActive && styles.active } ${ disabled && styles.disabled }` }
          key={ `tab_${ value }` }
          onClick={ disabled ? () => {} : () => handleClick(value) }
        >
          <Text color={ isActive ? "--primary_700" : "--grey_500" } size="md">{ label }</Text>
        </div>
      );
    });
  }, [activeTab, handleClick, tabs, variant]);

  return <div className={ `${ styles.tabs } ${ styles[variant] } ${ fullWidth && styles.fullWidth } ${ spaceBetween && styles.spaceBetween }` }>{ renderTabs }</div>;
}