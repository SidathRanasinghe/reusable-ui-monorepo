import React, { ReactNode, useCallback, useEffect, useState } from "react";

import { Button } from "../../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";

import DynamicTabContainer, { TabConfig } from "./DynamicTabContent";

export type StcOption = {
  displayName?: string;
  name?: string;
  [key: string]: any;
};

export type StcTab = {
  id: string;
  title: string;
  count: number;
  options: StcOption[];
};

type SelectTabContentOptionsProps = {
  isLoading: boolean;
  triggerComponent: ReactNode;
  tabs: any[];
  onOpen: () => void;
  onSelectOption: (option: any, tabId: string) => void;
};

const SelectTabContentOptions = ({
  isLoading,
  triggerComponent,
  tabs,
  onOpen,
  onSelectOption,
}: SelectTabContentOptionsProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(isLoading);

  useEffect(() => {
    if (isOpen) onOpen?.();
  }, [isOpen, onOpen]);

  useEffect(() => setLoading(isLoading), [isLoading]);

  const manipulateTabs = useCallback(
    (): TabConfig[] =>
      [...(tabs || [])].map(tab => ({
        id: tab.id,
        title: tab.title,
        rightSideDrawerData: null,
        numberDisplayConfig: {
          isShow: true,
          value: tab.count,
        },
        component: (
          <div className="flex w-full flex-col gap-y-1">
            {loading ? (
              <div className="flex h-[100px] w-full flex-col items-center justify-center pb-4">
                Loading...
              </div>
            ) : tab.options?.length ? (
              tab.options?.map((option: any, index: number) => (
                <Button
                  key={`stc_opt_btn_${index}`}
                  variant="ghost"
                  className="flex w-full items-center justify-start rounded-sm font-hankenGrotesk text-cadet-gray-8 !shadow-none ring-0"
                  onClick={e => {
                    e.stopPropagation();
                    e.preventDefault();
                    setIsOpen(false);
                    onSelectOption(option, tab.id);
                  }}
                >
                  {option?.displayName || option?.name}
                </Button>
              ))
            ) : (
              <div>No Data</div>
            )}
          </div>
        ),
      })),
    [tabs, loading, onSelectOption]
  );

  const [tabConfigs, setTabConfigs] = useState<TabConfig[]>(manipulateTabs());

  useEffect(
    () => setTabConfigs(manipulateTabs()),
    [tabs, loading, manipulateTabs]
  );

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>{triggerComponent}</PopoverTrigger>
      <PopoverContent
        className="z-[200] max-h-[300px] w-fit overflow-auto !rounded p-1"
        align="center"
        side="bottom"
        sideOffset={4}
      >
        <DynamicTabContainer tabConfigs={tabConfigs} initialTabId={"teams"} />
      </PopoverContent>
    </Popover>
  );
};

export default SelectTabContentOptions;
