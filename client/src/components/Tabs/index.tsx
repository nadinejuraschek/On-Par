import { ITabs, TTab } from "./types";
import { Tab, Tabbar, TabText } from "./styled";
import { useMemo } from "react";

export const Tabs = ({
  activeTab,
  className = '',
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
        <Tab
          active={isActive}
          disabled={disabled}
          key={ `tab_${ value }` }
          onClick={ disabled ? () => {} : () => handleClick(value) }
          style={{ width: fullWidth ? `calc(100% / ${tabs.length}` : 'auto' }}
          variant={variant}
        >
          <TabText
            disabled={disabled}
            size="md"
          >
            { label }
          </TabText>
        </Tab>
      );
    });
  }, [activeTab, fullWidth, handleClick, tabs, variant]);

  return (
    <Tabbar
      className={className}
      fullWidth={fullWidth}
      spaceBetween={spaceBetween}
      variant={variant}
    >
      { renderTabs }
    </Tabbar>
  );
}