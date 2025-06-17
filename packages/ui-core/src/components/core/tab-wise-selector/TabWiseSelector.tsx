import { ReactNode, useCallback, useEffect, useState } from "react";

import { cn } from "../../../lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

export type NumberDisplayConfig = {
  isShow: boolean;
  value: number | string;
  className?: string;
};

export type TWTabSelectorOption = {
  displayName: string;
  value: any;
  icon?: ReactNode;
  isDisabled?: boolean;
};

export type TWTabItem = {
  isDisabled?: boolean | undefined;
  id: string;
  title: string;
  options: TWTabSelectorOption[];
  renderOption?: (option: TWTabSelectorOption) => ReactNode;
  numberDisplayConfig?: NumberDisplayConfig;
};

type TanWiseSelectorProps = {
  activeTabId: string;
  tabItems: TWTabItem[];
  selectedValue: any;
  onValueChange: (value: any, tab?: TWTabItem) => void;
  onChangeActiveTab?: (tabId: string) => void;
  placeholder?: string;
  tabListClassName?: string;
  tabTriggerClassName?: string;
  tabContentClassName?: string;
};

const TabWiseSelector = ({
  activeTabId,
  onChangeActiveTab,
  tabItems,
  selectedValue,
  onValueChange,
  placeholder,
  tabListClassName,
  tabTriggerClassName,
  tabContentClassName,
}: TanWiseSelectorProps) => {
  const [activeTab, setActiveTab] = useState<string>(activeTabId);

  useEffect(() => {
    if (activeTabId !== undefined) setActiveTab(activeTabId);
  }, [activeTabId]);

  const onChangeTab = useCallback(
    (tabId: string) => {
      setActiveTab(tabId);
      onChangeActiveTab?.(tabId);
    },
    [onChangeActiveTab]
  );

  return (
    <Select
      value={selectedValue}
      onValueChange={value =>
        onValueChange(
          value,
          tabItems?.find(t => t.id === activeTab)
        )
      }
    >
      <SelectTrigger
        className="h-7 w-full rounded border-none bg-white font-hankenGrotesk text-cadet-gray-8.5 !shadow-none outline-none ring-1 ring-inset ring-cadet-gray-1 focus:ring-cadet-gray-1 sm:w-64"
        style={{ fontSize: "11px" }}
      >
        <SelectValue placeholder={placeholder || "Select an option"} />
      </SelectTrigger>
      <SelectContent className="z-[200] border-none font-hankenGrotesk text-cadet-gray-8.5 ring-1 ring-cadet-gray-1">
        {tabItems?.length && (
          <Tabs
            value={activeTab}
            onValueChange={onChangeTab}
            className="flex size-full flex-col gap-y-4 overflow-hidden"
          >
            <TabsList
              className={cn(
                "h-8 w-full !bg-transparent !py-0",
                tabListClassName
              )}
            >
              {tabItems.map(tab => (
                <TabsTrigger
                  disabled={tab.isDisabled}
                  key={tab.id}
                  value={tab.id}
                  className={cn(
                    "relative !size-full !bg-transparent !px-4 !py-1.5 font-hankenGrotesk !text-[12px] font-medium leading-[14.33px] text-cadet-gray-7 !shadow-none after:absolute after:-bottom-px after:left-0 after:h-[2px] after:w-full after:bg-cadet-gray-2 hover:text-cadet-gray-9.5 disabled:pointer-events-none disabled:text-cadet-gray-7/50 disabled:opacity-100 data-[state=active]:text-uber-blue-5 data-[state=active]:after:bg-uber-blue-5",
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
            {tabItems?.map(tab => (
              <TabsContent
                key={tab?.id}
                value={tab?.id}
                className={cn(
                  "relative m-0 size-full overflow-hidden p-0",
                  tabContentClassName
                )}
              >
                {tab.options.map(
                  (option: TWTabSelectorOption, index: number) => (
                    <SelectItem
                      key={`tw_selector_${tab.id}_${option.value}_${index}`}
                      value={option?.value || ""}
                      className="cursor-pointer whitespace-pre-wrap break-words font-hankenGrotesk !text-sub-caption-xs capitalize text-cadet-gray-9.5"
                      disabled={!!option?.isDisabled}
                    >
                      {tab.renderOption?.(option) || (
                        <div className="flex items-center justify-start gap-x-2">
                          {option?.icon || null}
                          <p className="font-hankenGrotesk text-caption-xxs text-cadet-gray-8.5">
                            {option.displayName}
                          </p>
                        </div>
                      )}
                    </SelectItem>
                  )
                )}
              </TabsContent>
            ))}
          </Tabs>
        )}
      </SelectContent>
    </Select>
  );
};

export default TabWiseSelector;
