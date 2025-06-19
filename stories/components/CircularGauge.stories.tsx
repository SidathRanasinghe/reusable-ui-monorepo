import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "react";

import CircularGauge from "../../packages/ui-core/src/components/core/circular-gauge/CircularGauge";

const meta: Meta<typeof CircularGauge> = {
  title: "Data Visualization/Circular Gauge",
  component: CircularGauge,
  parameters: {
    docs: {
      description: {
        component: `
A highly customizable and flexible circular gauge component for displaying progress, metrics, or any numerical data with visual appeal.

## ✨ New Features
- 🎯 **Enhanced Tick System**: Major/minor ticks with customizable labels
- 🎨 **Radial Gradients**: Support for radial gradient backgrounds
- 🔧 **Custom Render Props**: Complete control over center content rendering
- ⚡ **Performance Optimized**: Conditional animations and frame cleanup
- 🎭 **Advanced Styling**: Fine-grained control over all visual elements
- 📐 **Improved Accessibility**: Better ARIA support and semantic markup
- 🎪 **Progress Customization**: Dashed lines, custom line caps, and more

## Features
- 🎨 Multiple color variants and custom colors
- 📐 Configurable angles for partial gauges  
- ✨ Smooth animations with customizable easing functions
- 🎯 Flexible tick system with major/minor ticks and labels
- 🌈 Gradient support (linear and radial)
- ♿ Full accessibility support
- 📱 Responsive design
- 🔧 Extensive customization options
- 🎭 Render props for complete customization
- ⚡ Performance optimizations
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "Current value to display",
    },
    max: {
      control: { type: "number", min: 1, max: 1000 },
      description: "Maximum value for the gauge",
    },
    min: {
      control: { type: "number", min: 0, max: 100 },
      description: "Minimum value for the gauge",
    },
    size: {
      control: { type: "range", min: 50, max: 400, step: 10 },
      description: "Size of the gauge in pixels",
    },
    thickness: {
      control: { type: "range", min: 2, max: 20, step: 1 },
      description: "Thickness of the gauge track",
    },
    tickCount: {
      control: { type: "range", min: 0, max: 100, step: 5 },
      description: "Number of ticks around the gauge",
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "error", "info", "custom"],
      description: "Color variant",
    },
    animated: {
      control: { type: "boolean" },
      description: "Enable smooth animation",
    },
    animationEasing: {
      control: { type: "select" },
      options: ["linear", "ease-in", "ease-out", "ease-in-out"],
      description: "Animation easing function",
    },
    showTicks: {
      control: { type: "boolean" },
      description: "Show tick marks",
    },
    showValue: {
      control: { type: "boolean" },
      description: "Show center value",
    },
    showLabel: {
      control: { type: "boolean" },
      description: "Show center label",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    value: 75,
    label: "Performance",
    unit: "%",
  },
};

export const BasicUsage: Story = {
  args: {
    value: 87,
    unit: "%",
    label: "Performance Score",
    size: 200,
    animated: true,
  },
};

// Enhanced Tick System
export const EnhancedTicks: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-4">
      <div className="text-center">
        <CircularGauge
          value={75}
          label="With Tick Labels"
          unit="%"
          variant="primary"
          animated
          tickConfig={{
            majorInterval: 4,
            showLabels: true,
            labelFormatter: value => `${Math.round(value)}%`,
          }}
          size={200}
        />
        <p className="mt-2 text-sm text-gray-600">Major tick labels</p>
      </div>
      <div className="text-center">
        <CircularGauge
          value={850}
          min={0}
          max={1000}
          label="Custom Labels"
          unit=""
          variant="success"
          animated
          tickConfig={{
            majorInterval: 5,
            majorLength: 2,
            minorLength: 0.8,
            showLabels: true,
            labelFormatter: value => `${(value / 1000).toFixed(1)}K`,
          }}
          valueFormatter={val => `$${Math.round(val)}`}
          size={200}
        />
        <p className="mt-2 text-sm text-gray-600">Custom formatting</p>
      </div>
    </div>
  ),
};

// Radial Gradients
export const RadialGradients: Story = {
  render: () => (
    <div className="flex gap-8 p-4">
      <div className="text-center">
        <CircularGauge
          value={85}
          label="Radial Gradient"
          unit="%"
          gradient={{
            from: "#3b82f6",
            to: "#8b5cf6",
            direction: "radial",
          }}
          animated
          size={180}
        />
        <p className="mt-2 text-sm text-gray-600">Radial</p>
      </div>
      <div className="text-center">
        <CircularGauge
          value={65}
          label="Vertical Gradient"
          unit="%"
          gradient={{
            from: "#10b981",
            to: "#06b6d4",
            direction: "vertical",
          }}
          animated
          size={180}
        />
        <p className="mt-2 text-sm text-gray-600">Vertical</p>
      </div>
      <div className="text-center">
        <CircularGauge
          value={90}
          label="Horizontal Gradient"
          unit="%"
          gradient={{
            from: "#f59e0b",
            to: "#ef4444",
            direction: "horizontal",
          }}
          animated
          size={180}
        />
        <p className="mt-2 text-sm text-gray-600">Horizontal</p>
      </div>
    </div>
  ),
};

// Custom Render Props
export const CustomRenderProps: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-4">
      <div className="text-center">
        <CircularGauge
          value={75}
          label="Custom Value"
          unit="%"
          variant="primary"
          animated
          renderValue={(value, formatted) => (
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {formatted}%
              </div>
              <div className="text-xs text-gray-500">of target</div>
            </div>
          )}
          renderLabel={label => (
            <div className="mt-2 rounded-full bg-blue-100 px-2 py-1">
              <span className="text-xs font-medium text-blue-800">{label}</span>
            </div>
          )}
          size={180}
        />
        <p className="mt-2 text-sm text-gray-600">Custom value & label</p>
      </div>
      <div className="text-center">
        <CircularGauge
          value={42}
          min={0}
          max={50}
          variant="success"
          animated
          renderCenterContent={(value, formatted, label) => (
            <div className="text-center">
              <div className="text-3xl">🎯</div>
              <div className="text-lg font-bold text-green-600">
                {formatted}
              </div>
              <div className="text-xs text-gray-500">goals completed</div>
            </div>
          )}
          size={180}
        />
        <p className="mt-2 text-sm text-gray-600">Complete custom content</p>
      </div>
    </div>
  ),
};

// Progress Customization
export const ProgressCustomization: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6 p-4">
      <div className="text-center">
        <CircularGauge
          value={75}
          label="Dashed Progress"
          unit="%"
          variant="primary"
          animated
          progressConfig={{
            dashArray: "10 5",
            lineCap: "butt",
          }}
          size={160}
        />
        <p className="mt-2 text-sm text-gray-600">Dashed lines</p>
      </div>
      <div className="text-center">
        <CircularGauge
          value={60}
          label="Square Caps"
          unit="%"
          variant="warning"
          animated
          progressConfig={{
            lineCap: "square",
          }}
          thickness={12}
          size={160}
        />
        <p className="mt-2 text-sm text-gray-600">Square line caps</p>
      </div>
      <div className="text-center">
        <CircularGauge
          value={85}
          label="Animated Dash"
          unit="%"
          variant="success"
          animated
          progressConfig={{
            dashArray: "20 10",
            dashOffset: 0,
          }}
          size={160}
        />
        <p className="mt-2 text-sm text-gray-600">Animated dashes</p>
      </div>
    </div>
  ),
};

// Interactive Demo with Conditional Animation
export const InteractiveDemo: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    const [autoUpdate, setAutoUpdate] = useState(false);

    useEffect(() => {
      if (!autoUpdate) return;

      const interval = setInterval(() => {
        setValue(prev => {
          const newValue = prev + (Math.random() - 0.5) * 20;
          return Math.max(0, Math.min(100, newValue));
        });
      }, 2000);

      return () => clearInterval(interval);
    }, [autoUpdate]);

    return (
      <div className="space-y-6 p-4">
        <div className="flex justify-center">
          <CircularGauge
            value={value}
            label="Live Data"
            unit="%"
            variant="info"
            animated
            shouldAnimate={(newVal, oldVal) => Math.abs(newVal - oldVal) > 5}
            onValueChange={val => console.log("Value changed:", val)}
            tickConfig={{
              majorInterval: 5,
              showLabels: true,
            }}
            tooltip={{
              enabled: true,
              formatter: val => `Current: ${val.toFixed(1)}%`,
            }}
            size={220}
          />
        </div>

        <div className="flex justify-center gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Manual Control</label>
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={e => setValue(Number(e.target.value))}
              className="w-32"
              disabled={autoUpdate}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Auto Update</label>
            <button
              onClick={() => setAutoUpdate(!autoUpdate)}
              className={`rounded px-4 py-2 text-sm font-medium ${
                autoUpdate
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {autoUpdate ? "Stop" : "Start"}
            </button>
          </div>
        </div>
      </div>
    );
  },
};

// Advanced Easing Functions
export const EasingFunctions: Story = {
  render: () => {
    const [triggerAnimation, setTriggerAnimation] = useState(0);

    const easingTypes = [
      { name: "Linear", value: "linear" as const },
      { name: "Ease In", value: "ease-in" as const },
      { name: "Ease Out", value: "ease-out" as const },
      { name: "Ease In-Out", value: "ease-in-out" as const },
    ];

    return (
      <div className="space-y-6 p-4">
        <div className="text-center">
          <button
            onClick={() => setTriggerAnimation(prev => prev + 1)}
            className="rounded-lg bg-blue-500 px-6 py-2 font-medium text-white hover:bg-blue-600"
          >
            Trigger Animation
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {easingTypes.map(easing => (
            <div key={easing.value} className="text-center">
              <CircularGauge
                value={triggerAnimation % 2 === 0 ? 20 : 80}
                label={easing.name}
                unit="%"
                variant="primary"
                animated
                animationEasing={easing.value}
                animationDuration={2000}
                size={140}
              />
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// Variants
export const ColorVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-6 p-4">
      <div className="text-center">
        <CircularGauge value={85} label="Primary" variant="primary" animated />
        <p className="mt-2 text-sm text-gray-600">Primary</p>
      </div>
      <div className="text-center">
        <CircularGauge value={92} label="Success" variant="success" animated />
        <p className="mt-2 text-sm text-gray-600">Success</p>
      </div>
      <div className="text-center">
        <CircularGauge value={67} label="Warning" variant="warning" animated />
        <p className="mt-2 text-sm text-gray-600">Warning</p>
      </div>
      <div className="text-center">
        <CircularGauge value={34} label="Error" variant="error" animated />
        <p className="mt-2 text-sm text-gray-600">Error</p>
      </div>
      <div className="text-center">
        <CircularGauge value={78} label="Info" variant="info" animated />
        <p className="mt-2 text-sm text-gray-600">Info</p>
      </div>
      <div className="text-center">
        <CircularGauge
          value={55}
          label="Custom"
          variant="custom"
          colors={{
            progress: "#8b5cf6",
            filledTicks: "#8b5cf6",
          }}
          animated
        />
        <p className="mt-2 text-sm text-gray-600">Custom</p>
      </div>
    </div>
  ),
};

// Different Sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-8 p-4">
      <div className="text-center">
        <CircularGauge value={75} label="Small" size={100} thickness={6} />
        <p className="mt-2 text-sm text-gray-600">100px</p>
      </div>
      <div className="text-center">
        <CircularGauge value={75} label="Medium" size={150} thickness={8} />
        <p className="mt-2 text-sm text-gray-600">150px</p>
      </div>
      <div className="text-center">
        <CircularGauge value={75} label="Large" size={200} thickness={10} />
        <p className="mt-2 text-sm text-gray-600">200px</p>
      </div>
      <div className="text-center">
        <CircularGauge value={75} label="X-Large" size={250} thickness={12} />
        <p className="mt-2 text-sm text-gray-600">250px</p>
      </div>
    </div>
  ),
};

// Dashboard Example
export const Dashboard: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-6 rounded-lg bg-gray-50 p-6 md:grid-cols-4">
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <CircularGauge
          value={92}
          unit="%"
          label="CPU Usage"
          size={120}
          variant="success"
          animated
          thickness={6}
          tickConfig={{ showLabels: false }}
        />
      </div>
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <CircularGauge
          value={67}
          unit="%"
          label="Memory"
          size={120}
          variant="warning"
          animated
          thickness={6}
        />
      </div>
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <CircularGauge
          value={34}
          unit="%"
          label="Storage"
          size={120}
          variant="error"
          animated
          thickness={6}
        />
      </div>
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <CircularGauge
          value={88}
          unit="%"
          label="Network"
          size={120}
          variant="info"
          animated
          thickness={6}
        />
      </div>
    </div>
  ),
};

// Custom Range
export const CustomRange: Story = {
  render: () => (
    <div className="flex gap-8 p-4">
      <div className="text-center">
        <CircularGauge
          value={750}
          min={0}
          max={1000}
          label="Revenue"
          unit="K"
          variant="success"
          animated
          valueFormatter={val => `${Math.round(val)}`}
        />
        <p className="mt-2 text-sm text-gray-600">0-1000 range</p>
      </div>
      <div className="text-center">
        <CircularGauge
          value={23}
          min={-10}
          max={40}
          label="Temperature"
          unit="°C"
          variant="info"
          animated
        />
        <p className="mt-2 text-sm text-gray-600">-10 to 40 range</p>
      </div>
    </div>
  ),
};

// Partial Gauge (Semi-circle)
export const SemiCircle: Story = {
  render: () => (
    <div className="flex gap-8 p-4">
      <CircularGauge
        value={75}
        label="Speed"
        unit="mph"
        startAngle={-180}
        endAngle={0}
        variant="primary"
        animated
        size={200}
        thickness={12}
        tickConfig={{
          majorInterval: 4,
          showLabels: true,
        }}
      />
      <CircularGauge
        value={60}
        label="Fuel"
        unit="%"
        startAngle={-90}
        endAngle={90}
        variant="warning"
        animated
        size={200}
        thickness={12}
      />
    </div>
  ),
};

// Real-world Examples
export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-8 p-6">
      {/* Performance Metrics */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Performance Metrics</h3>
        <div className="grid grid-cols-3 gap-4">
          <CircularGauge
            value={94}
            label="Page Speed"
            unit="/100"
            variant="success"
            animated
            size={140}
            tickConfig={{
              majorInterval: 5,
              showLabels: true,
              labelFormatter: val => val.toString(),
            }}
          />
          <CircularGauge
            value={87}
            label="SEO Score"
            unit="/100"
            variant="primary"
            animated
            size={140}
          />
          <CircularGauge
            value={76}
            label="Accessibility"
            unit="/100"
            variant="warning"
            animated
            size={140}
          />
        </div>
      </div>

      {/* Smart Home Dashboard */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Smart Home Dashboard</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-4">
            <CircularGauge
              value={22}
              min={10}
              max={30}
              label="Temperature"
              unit="°C"
              variant="info"
              animated
              size={120}
              renderValue={(value, formatted) => (
                <div className="text-center">
                  <div className="text-2xl">🌡️</div>
                  <div className="text-lg font-bold text-blue-600">
                    {formatted}°C
                  </div>
                </div>
              )}
            />
          </div>
          <div className="rounded-lg bg-gradient-to-br from-green-50 to-green-100 p-4">
            <CircularGauge
              value={65}
              unit="%"
              label="Humidity"
              variant="success"
              animated
              size={120}
              renderValue={(value, formatted) => (
                <div className="text-center">
                  <div className="text-2xl">💧</div>
                  <div className="text-lg font-bold text-green-600">
                    {formatted}%
                  </div>
                </div>
              )}
            />
          </div>
          <div className="rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 p-4">
            <CircularGauge
              value={850}
              min={0}
              max={1000}
              label="Air Quality"
              unit=" AQI"
              variant="warning"
              animated
              size={120}
              renderValue={(value, formatted) => (
                <div className="text-center">
                  <div className="text-2xl">🌬️</div>
                  <div className="text-lg font-bold text-yellow-600">
                    {formatted}
                  </div>
                </div>
              )}
            />
          </div>
          <div className="rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 p-4">
            <CircularGauge
              value={45}
              unit="dB"
              label="Noise Level"
              colors={{
                progress: "#8b5cf6",
                filledTicks: "#8b5cf6",
              }}
              animated
              size={120}
              renderValue={(value, formatted) => (
                <div className="text-center">
                  <div className="text-2xl">🔊</div>
                  <div className="text-lg font-bold text-purple-600">
                    {formatted}dB
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Playground
export const Playground: Story = {
  args: {
    value: 75,
    max: 100,
    min: 0,
    unit: "%",
    label: "Interactive Gauge",
    size: 200,
    thickness: 8,
    tickCount: 40,
    startAngle: -90,
    endAngle: 270,
    animated: true,
    animationDuration: 1000,
    animationEasing: "ease-out",
    showTicks: true,
    showValue: true,
    showLabel: true,
    variant: "primary",
  },
};
