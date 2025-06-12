import type { Meta, StoryObj } from "@storybook/react";
import CircularGauge from "../../packages/ui-core/src/components/CircularGauge";

const meta: Meta<typeof CircularGauge> = {
  title: "📊 Data Visualization/CircularGauge",
  component: CircularGauge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Performance: Story = {
  args: {
    score: 87,
    unit: "%",
    label: "Performance Score",
    size: 200,
    tickCount: 40,
    containerClassName: "mx-auto",
    valueClassName: "text-primary-400",
    filledTickClassName: "stroke-primary-400 stroke-2",
    tickClassName: "stroke-gray-200 stroke-1",
  },
};

export const Dashboard: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 p-4">
      <CircularGauge
        score={92}
        unit="%"
        label="CPU Usage"
        size={150}
        filledTickClassName="stroke-green-500 stroke-2"
        tickClassName="stroke-gray-200 stroke-1"
      />
      <CircularGauge
        score={67}
        unit="%"
        label="Memory"
        size={150}
        filledTickClassName="stroke-yellow-500 stroke-2"
        tickClassName="stroke-gray-200 stroke-1"
      />
      <CircularGauge
        score={34}
        unit="%"
        label="Storage"
        size={150}
        filledTickClassName="stroke-red-500 stroke-2"
        tickClassName="stroke-gray-200 stroke-1"
      />
    </div>
  ),
};
