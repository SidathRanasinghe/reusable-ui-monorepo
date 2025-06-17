import React, { useCallback, useEffect, useMemo, useState } from "react";

import ContentData, { TabItem } from "./ContentData";

// You can move this to a separate file if needed
export type TabConfig = {
  id: string;
  title: string;
  component: React.ReactNode;
  isDisabled?: boolean;
  rightSideDrawerData?: any;
  numberDisplayConfig?: {
    isShow: boolean;
    value: number | string;
    className?: string;
  };
};

interface DynamicTabContainerProps {
  initialTabId?: string;
  tabConfigs: TabConfig[];
}

const DynamicTabContainer: React.FC<DynamicTabContainerProps> = ({
  initialTabId,
  tabConfigs,
}) => {
  const [safeTabConfigs, setSafeTabConfigs] = useState<TabConfig[]>(
    Array.isArray(tabConfigs) ? tabConfigs : []
  );

  useEffect(
    () => setSafeTabConfigs(Array.isArray(tabConfigs) ? tabConfigs : []),
    [tabConfigs]
  );

  const tabItems: TabItem[] = useMemo(
    () =>
      safeTabConfigs
        .filter(config => config && typeof config === "object" && config.id)
        .map(config => ({
          id: config.id,
          title: config.title || "Untitled", // Fallback for title
          isDisabled: config.isDisabled || false,
          rightSideDrawerData: config?.rightSideDrawerData,
          content: config.component,
          numberDisplayConfig: config.numberDisplayConfig
            ? {
                isShow: config.numberDisplayConfig.isShow,
                value: config.numberDisplayConfig.value ?? 0, // Add fallback
                className: config.numberDisplayConfig.className,
              }
            : undefined,
        })),
    [safeTabConfigs]
  );

  const extractActiveTab = useCallback(() => {
    if (!tabItems || tabItems.length === 0) {
      return "";
    }
    if (initialTabId && tabItems.some(tab => tab.id === initialTabId)) {
      return initialTabId;
    }

    const firstEnabledTab = tabItems.find(tab => !tab.isDisabled);
    return firstEnabledTab ? firstEnabledTab.id : tabItems[0].id; // Final fallback to first tab
  }, [tabItems, initialTabId]);

  // State to track active tab with validation
  const [activeTab, setActiveTab] = useState<string>(extractActiveTab());

  useEffect(() => {
    setActiveTab(extractActiveTab());
  }, [tabItems, initialTabId]);

  // If there are no tabs, show a fallback
  if (!tabItems || tabItems.length === 0) {
    return <div>No tabs available</div>;
  }

  return (
    <div className="flex size-full items-start justify-start overflow-hidden">
      <ContentData
        isWidgetExpand={true}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabItems={tabItems}
      />
    </div>
  );
};

export default DynamicTabContainer;
