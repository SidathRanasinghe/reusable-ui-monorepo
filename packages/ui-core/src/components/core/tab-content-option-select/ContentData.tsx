import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

import { cn } from "../../../lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

interface NumberDisplayConfig {
  isShow: boolean;
  value: number | string;
  className?: string;
}

export type TabItem = {
  isDisabled?: boolean | undefined;
  id: string;
  title: string;
  content: React.ReactNode;
  numberDisplayConfig?: NumberDisplayConfig;
  rightSideDrawerData?: any;
};

type DataContentProps = {
  isWidgetExpand?: boolean;
  activeTab: string;
  setActiveTab: (value: string) => void;
  tabItems: TabItem[];
  tabListClassName?: string;
  tabTriggerClassName?: string;
  tabContentClassName?: string;
};

const DataContent = ({
  isWidgetExpand = true,
  activeTab,
  setActiveTab,
  tabItems,
  tabListClassName,
  tabTriggerClassName,
  tabContentClassName,
}: DataContentProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Tabs
      value={activeTab}
      onValueChange={value => setActiveTab(value)}
      className="flex size-full flex-col gap-y-4 overflow-hidden"
    >
      {isWidgetExpand && (
        <TabsList
          className={cn("h-8 w-fit !bg-transparent !py-0", tabListClassName)}
        >
          {tabItems.map(tab => (
            <TabsTrigger
              disabled={tab.isDisabled}
              key={tab.id}
              value={tab.id}
              className={cn(
                "relative !h-full !bg-transparent !px-4 !py-1.5 font-hankenGrotesk !text-[12px] font-medium leading-[14.33px] text-cadet-gray-7 !shadow-none after:absolute after:-bottom-px after:left-0 after:h-[2px] after:w-full after:bg-cadet-gray-2 hover:text-cadet-gray-9.5 disabled:pointer-events-none disabled:text-cadet-gray-7/50 disabled:opacity-100 data-[state=active]:text-uber-blue-5 data-[state=active]:after:bg-uber-blue-5",
                tabTriggerClassName
              )}
            >
              <div className="flex flex-row items-center gap-3">
                {tab.title}
                {tab?.numberDisplayConfig?.isShow === true && (
                  <div
                    className={cn(
                      "rounded-sm px-1.5 py-1 !font-hankenGrotesk !text-sub-caption-xs text-dark-400 ring-1 ring-inset ring-cadet-gray-2",
                      {
                        "bg-uber-blue-5 text-gray-50 !ring-0":
                          activeTab === tab?.id,
                      },
                      tab?.numberDisplayConfig?.className
                    )}
                  >
                    {tab?.numberDisplayConfig?.value}
                  </div>
                )}
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      )}
      {tabItems?.map(tab => (
        <TabsContent
          key={tab?.id}
          value={tab?.id}
          className={cn(
            "relative m-0 size-full overflow-hidden p-0",
            tabContentClassName
          )}
        >
          {tab?.content || null}
          {!!tab?.rightSideDrawerData?.length && (
            <div
              className={cn(
                "absolute right-0 top-0 z-10 h-full bg-transparent !font-hankenGrotesk backdrop-blur-sm transition-all duration-300 ease-in-out",
                isDrawerOpen ? "min-w-[25%] max-w-[25%]" : "min-w-0 max-w-0"
              )}
            >
              <button
                onClick={toggleDrawer}
                className={cn(
                  "absolute -left-6 top-2 flex h-6 w-6 items-center justify-center border border-cadet-gray-1.5",
                  isDrawerOpen
                    ? "!-left-[1.45rem] rounded-l !border-r-transparent bg-transparent"
                    : "rounded",
                  "!font-hankenGrotesk text-cadet-gray-7 backdrop-blur-sm hover:bg-cadet-gray-1 focus:outline-none"
                )}
                aria-label={
                  isDrawerOpen
                    ? "Close properties panel"
                    : "Open properties panel"
                }
              >
                {isDrawerOpen ? (
                  <ChevronRight size={16} className="text-cadet-gray-5" />
                ) : (
                  <ChevronLeft size={16} className="text-cadet-gray-5" />
                )}
              </button>
            </div>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default DataContent;
