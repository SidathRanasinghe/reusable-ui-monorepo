import { LayoutGrid, X } from "lucide-react";
import { CSSProperties } from "react";
import ReactECharts from "echarts-for-react";
import { EChartsOption } from "echarts";

export interface Metric {
  title: string;
  subtitle: string;
  value: string;
  data: number[];
}

type MetricsChartProps = {
  chartData: Metric;
  style?: CSSProperties;
  onClose?: () => void;
};

export function MetricsChart({ chartData, style, onClose }: MetricsChartProps) {
  const option: EChartsOption = {
    grid: {
      show: true,
      top: 10,
      right: 10,
      bottom: 10,
      left: 10,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["1m", "2m", "3m", "6m", "9m", "12m", "18m", "24m", "36m", "48m"],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        fontSize: 10,
        interval: 0,
        rotate: 45,
      },
    },
    yAxis: {
      type: "value",
      show: false,
      splitLine: {
        show: true,
        lineStyle: { color: "#e5e7eb" },
      },
    },
    series: [
      {
        data: chartData?.data || [],
        type: "bar",
        barWidth: "60%",
        itemStyle: {
          color: "#9DA4AE",
          borderColor: "#666",
          borderWidth: 1,
          decal: {
            symbol: "bar",
            symbolSize: 2,
            rotation: 0.785398,
            dashArrayX: [1, 0],
            dashArrayY: [2, 4],
            color: "#1E2023",
          },
        },
      },
    ],
  };

  return (
    <div className="p-4" style={style}>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded bg-gray-100 p-1">
            <LayoutGrid className="size-4" />
          </div>
          <div>
            <h3 className="text-caption-sm font-medium">{chartData?.title}</h3>
            <p className="text-caption-xs text-muted-foreground">
              {chartData?.subtitle}
            </p>
          </div>
        </div>
        {onClose && (
          <div className="rounded-md bg-slate-200">
            <button
              onClick={onClose}
              className="cursor-pointer p-1 text-gray-500"
            >
              <X className="size-4" />
            </button>
          </div>
        )}
      </div>
      <div className="h-[180px] rounded-md bg-gray-50">
        <ReactECharts
          option={option}
          style={{ height: "100%", width: "100%" }}
          opts={{ renderer: "svg" }}
        />
      </div>
    </div>
  );
}
