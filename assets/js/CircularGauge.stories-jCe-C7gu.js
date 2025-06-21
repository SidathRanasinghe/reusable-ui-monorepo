import{j as e}from"./jsx-runtime-DdxpLdx6.js";import{r as y}from"./index-Bk7LAl9r.js";import{C as a}from"./CircularGauge-BAowPtQo.js";import"./_commonjsHelpers-Cpj98o6Y.js";const fe={title:"Data Visualization/Circular Gauge",component:a,parameters:{docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Current value to display"},max:{control:{type:"number",min:1,max:1e3},description:"Maximum value for the gauge"},min:{control:{type:"number",min:0,max:100},description:"Minimum value for the gauge"},size:{control:{type:"range",min:50,max:400,step:10},description:"Size of the gauge in pixels"},thickness:{control:{type:"range",min:2,max:20,step:1},description:"Thickness of the gauge track"},tickCount:{control:{type:"range",min:0,max:100,step:5},description:"Number of ticks around the gauge"},variant:{control:{type:"select"},options:["primary","success","warning","error","info","custom"],description:"Color variant"},animated:{control:{type:"boolean"},description:"Enable smooth animation"},animationEasing:{control:{type:"select"},options:["linear","ease-in","ease-out","ease-in-out"],description:"Animation easing function"},showTicks:{control:{type:"boolean"},description:"Show tick marks"},showValue:{control:{type:"boolean"},description:"Show center value"},showLabel:{control:{type:"boolean"},description:"Show center label"}}},l={args:{value:75,label:"Performance",unit:"%"}},c={args:{value:87,unit:"%",label:"Performance Score",size:200,animated:!0}},d={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-8 p-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:75,label:"With Tick Labels",unit:"%",variant:"primary",animated:!0,tickConfig:{majorInterval:4,showLabels:!0,labelFormatter:t=>`${Math.round(t)}%`},size:200}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Major tick labels"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:850,min:0,max:1e3,label:"Custom Labels",unit:"",variant:"success",animated:!0,tickConfig:{majorInterval:5,majorLength:2,minorLength:.8,showLabels:!0,labelFormatter:t=>`${(t/1e3).toFixed(1)}K`},valueFormatter:t=>`$${Math.round(t)}`,size:200}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Custom formatting"})]})]})},m={render:()=>e.jsxs("div",{className:"flex gap-8 p-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:85,label:"Radial Gradient",unit:"%",gradient:{from:"#3b82f6",to:"#8b5cf6",direction:"radial"},animated:!0,size:180}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Radial"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:65,label:"Vertical Gradient",unit:"%",gradient:{from:"#10b981",to:"#06b6d4",direction:"vertical"},animated:!0,size:180}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Vertical"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:90,label:"Horizontal Gradient",unit:"%",gradient:{from:"#f59e0b",to:"#ef4444",direction:"horizontal"},animated:!0,size:180}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Horizontal"})]})]})},o={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-8 p-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:75,label:"Custom Value",unit:"%",variant:"primary",animated:!0,renderValue:(t,s)=>e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"text-2xl font-bold text-blue-600",children:[s,"%"]}),e.jsx("div",{className:"text-xs text-gray-500",children:"of target"})]}),renderLabel:t=>e.jsx("div",{className:"mt-2 rounded-full bg-blue-100 px-2 py-1",children:e.jsx("span",{className:"text-xs font-medium text-blue-800",children:t})}),size:180}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Custom value & label"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:42,min:0,max:50,variant:"success",animated:!0,renderCenterContent:(t,s,n)=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl",children:"🎯"}),e.jsx("div",{className:"text-lg font-bold text-green-600",children:s}),e.jsx("div",{className:"text-xs text-gray-500",children:"goals completed"})]}),size:180}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Complete custom content"})]})]})},u={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-6 p-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:75,label:"Dashed Progress",unit:"%",variant:"primary",animated:!0,progressConfig:{dashArray:"10 5",lineCap:"butt"},size:160}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Dashed lines"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:60,label:"Square Caps",unit:"%",variant:"warning",animated:!0,progressConfig:{lineCap:"square"},thickness:12,size:160}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Square line caps"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:85,label:"Animated Dash",unit:"%",variant:"success",animated:!0,progressConfig:{dashArray:"20 10",dashOffset:0},size:160}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Animated dashes"})]})]})},v={render:()=>{const[t,s]=y.useState(50),[n,i]=y.useState(!1);return y.useEffect(()=>{if(!n)return;const r=setInterval(()=>{s(C=>{const ge=C+(Math.random()-.5)*20;return Math.max(0,Math.min(100,ge))})},2e3);return()=>clearInterval(r)},[n]),e.jsxs("div",{className:"space-y-6 p-4",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx(a,{value:t,label:"Live Data",unit:"%",variant:"info",animated:!0,shouldAnimate:(r,C)=>Math.abs(r-C)>5,onValueChange:r=>console.log("Value changed:",r),tickConfig:{majorInterval:5,showLabels:!0},tooltip:{enabled:!0,formatter:r=>`Current: ${r.toFixed(1)}%`},size:220})}),e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium",children:"Manual Control"}),e.jsx("input",{type:"range",min:"0",max:"100",value:t,onChange:r=>s(Number(r.target.value)),className:"w-32",disabled:n})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium",children:"Auto Update"}),e.jsx("button",{onClick:()=>i(!n),className:`rounded px-4 py-2 text-sm font-medium ${n?"bg-red-500 text-white hover:bg-red-600":"bg-blue-500 text-white hover:bg-blue-600"}`,children:n?"Stop":"Start"})]})]})]})}},x={render:()=>{const[t,s]=y.useState(0),n=[{name:"Linear",value:"linear"},{name:"Ease In",value:"ease-in"},{name:"Ease Out",value:"ease-out"},{name:"Ease In-Out",value:"ease-in-out"}];return e.jsxs("div",{className:"space-y-6 p-4",children:[e.jsx("div",{className:"text-center",children:e.jsx("button",{onClick:()=>s(i=>i+1),className:"rounded-lg bg-blue-500 px-6 py-2 font-medium text-white hover:bg-blue-600",children:"Trigger Animation"})}),e.jsx("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-4",children:n.map(i=>e.jsx("div",{className:"text-center",children:e.jsx(a,{value:t%2===0?20:80,label:i.name,unit:"%",variant:"primary",animated:!0,animationEasing:i.value,animationDuration:2e3,size:140})},i.value))})]})}},g={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-6 p-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:85,label:"Primary",variant:"primary",animated:!0}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Primary"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:92,label:"Success",variant:"success",animated:!0}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Success"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:67,label:"Warning",variant:"warning",animated:!0}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Warning"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:34,label:"Error",variant:"error",animated:!0}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Error"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:78,label:"Info",variant:"info",animated:!0}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Info"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:55,label:"Custom",variant:"custom",colors:{progress:"#8b5cf6",filledTicks:"#8b5cf6"},animated:!0}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Custom"})]})]})},p={render:()=>e.jsxs("div",{className:"flex items-center gap-8 p-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:75,label:"Small",size:100,thickness:6}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"100px"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:75,label:"Medium",size:150,thickness:8}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"150px"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:75,label:"Large",size:200,thickness:10}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"200px"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:75,label:"X-Large",size:250,thickness:12}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"250px"})]})]})},b={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6 rounded-lg bg-gray-50 p-6 md:grid-cols-4",children:[e.jsx("div",{className:"rounded-lg bg-white p-4 shadow-sm",children:e.jsx(a,{value:92,unit:"%",label:"CPU Usage",size:120,variant:"success",animated:!0,thickness:6,tickConfig:{showLabels:!1}})}),e.jsx("div",{className:"rounded-lg bg-white p-4 shadow-sm",children:e.jsx(a,{value:67,unit:"%",label:"Memory",size:120,variant:"warning",animated:!0,thickness:6})}),e.jsx("div",{className:"rounded-lg bg-white p-4 shadow-sm",children:e.jsx(a,{value:34,unit:"%",label:"Storage",size:120,variant:"error",animated:!0,thickness:6})}),e.jsx("div",{className:"rounded-lg bg-white p-4 shadow-sm",children:e.jsx(a,{value:88,unit:"%",label:"Network",size:120,variant:"info",animated:!0,thickness:6})})]})},h={render:()=>e.jsxs("div",{className:"flex gap-8 p-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:750,min:0,max:1e3,label:"Revenue",unit:"K",variant:"success",animated:!0,valueFormatter:t=>`${Math.round(t)}`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"0-1000 range"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:23,min:-10,max:40,label:"Temperature",unit:"°C",variant:"info",animated:!0}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"-10 to 40 range"})]})]})},N={render:()=>e.jsxs("div",{className:"flex gap-8 p-4",children:[e.jsx(a,{value:75,label:"Speed",unit:"mph",startAngle:-180,endAngle:0,variant:"primary",animated:!0,size:200,thickness:12,tickConfig:{majorInterval:4,showLabels:!0}}),e.jsx(a,{value:60,label:"Fuel",unit:"%",startAngle:-90,endAngle:90,variant:"warning",animated:!0,size:200,thickness:12})]})},f={render:()=>e.jsxs("div",{className:"space-y-8 p-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Performance Metrics"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx(a,{value:94,label:"Page Speed",unit:"/100",variant:"success",animated:!0,size:140,tickConfig:{majorInterval:5,showLabels:!0,labelFormatter:t=>t.toString()}}),e.jsx(a,{value:87,label:"SEO Score",unit:"/100",variant:"primary",animated:!0,size:140}),e.jsx(a,{value:76,label:"Accessibility",unit:"/100",variant:"warning",animated:!0,size:140})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Smart Home Dashboard"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-4",children:[e.jsx("div",{className:"rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-4",children:e.jsx(a,{value:22,min:10,max:30,label:"Temperature",unit:"°C",variant:"info",animated:!0,size:120,renderValue:(t,s)=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl",children:"🌡️"}),e.jsxs("div",{className:"text-lg font-bold text-blue-600",children:[s,"°C"]})]})})}),e.jsx("div",{className:"rounded-lg bg-gradient-to-br from-green-50 to-green-100 p-4",children:e.jsx(a,{value:65,unit:"%",label:"Humidity",variant:"success",animated:!0,size:120,renderValue:(t,s)=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl",children:"💧"}),e.jsxs("div",{className:"text-lg font-bold text-green-600",children:[s,"%"]})]})})}),e.jsx("div",{className:"rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 p-4",children:e.jsx(a,{value:850,min:0,max:1e3,label:"Air Quality",unit:" AQI",variant:"warning",animated:!0,size:120,renderValue:(t,s)=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl",children:"🌬️"}),e.jsx("div",{className:"text-lg font-bold text-yellow-600",children:s})]})})}),e.jsx("div",{className:"rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 p-4",children:e.jsx(a,{value:45,unit:"dB",label:"Noise Level",colors:{progress:"#8b5cf6",filledTicks:"#8b5cf6"},animated:!0,size:120,renderValue:(t,s)=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl",children:"🔊"}),e.jsxs("div",{className:"text-lg font-bold text-purple-600",children:[s,"dB"]})]})})})]})]})]})},j={args:{value:75,max:100,min:0,unit:"%",label:"Interactive Gauge",size:200,thickness:8,tickCount:40,startAngle:-90,endAngle:270,animated:!0,animationDuration:1e3,animationEasing:"ease-out",showTicks:!0,showValue:!0,showLabel:!0,variant:"primary"}};var z,w,k;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: "Performance",
    unit: "%"
  }
}`,...(k=(w=l.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var S,G,A;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 87,
    unit: "%",
    label: "Performance Score",
    size: 200,
    animated: true
  }
}`,...(A=(G=c.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var V,L,E;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-8 p-4">
      <div className="text-center">
        <CircularGauge value={75} label="With Tick Labels" unit="%" variant="primary" animated tickConfig={{
        majorInterval: 4,
        showLabels: true,
        labelFormatter: value => \`\${Math.round(value)}%\`
      }} size={200} />
        <p className="mt-2 text-sm text-gray-600">Major tick labels</p>
      </div>
      <div className="text-center">
        <CircularGauge value={850} min={0} max={1000} label="Custom Labels" unit="" variant="success" animated tickConfig={{
        majorInterval: 5,
        majorLength: 2,
        minorLength: 0.8,
        showLabels: true,
        labelFormatter: value => \`\${(value / 1000).toFixed(1)}K\`
      }} valueFormatter={val => \`$\${Math.round(val)}\`} size={200} />
        <p className="mt-2 text-sm text-gray-600">Custom formatting</p>
      </div>
    </div>
}`,...(E=(L=d.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var I,M,P;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 p-4">
      <div className="text-center">
        <CircularGauge value={85} label="Radial Gradient" unit="%" gradient={{
        from: "#3b82f6",
        to: "#8b5cf6",
        direction: "radial"
      }} animated size={180} />
        <p className="mt-2 text-sm text-gray-600">Radial</p>
      </div>
      <div className="text-center">
        <CircularGauge value={65} label="Vertical Gradient" unit="%" gradient={{
        from: "#10b981",
        to: "#06b6d4",
        direction: "vertical"
      }} animated size={180} />
        <p className="mt-2 text-sm text-gray-600">Vertical</p>
      </div>
      <div className="text-center">
        <CircularGauge value={90} label="Horizontal Gradient" unit="%" gradient={{
        from: "#f59e0b",
        to: "#ef4444",
        direction: "horizontal"
      }} animated size={180} />
        <p className="mt-2 text-sm text-gray-600">Horizontal</p>
      </div>
    </div>
}`,...(P=(M=m.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var T,D,F;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-8 p-4">
      <div className="text-center">
        <CircularGauge value={75} label="Custom Value" unit="%" variant="primary" animated renderValue={(value, formatted) => <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {formatted}%
              </div>
              <div className="text-xs text-gray-500">of target</div>
            </div>} renderLabel={label => <div className="mt-2 rounded-full bg-blue-100 px-2 py-1">
              <span className="text-xs font-medium text-blue-800">{label}</span>
            </div>} size={180} />
        <p className="mt-2 text-sm text-gray-600">Custom value & label</p>
      </div>
      <div className="text-center">
        <CircularGauge value={42} min={0} max={50} variant="success" animated renderCenterContent={(value, formatted, label) => <div className="text-center">
              <div className="text-3xl">🎯</div>
              <div className="text-lg font-bold text-green-600">
                {formatted}
              </div>
              <div className="text-xs text-gray-500">goals completed</div>
            </div>} size={180} />
        <p className="mt-2 text-sm text-gray-600">Complete custom content</p>
      </div>
    </div>
}`,...(F=(D=o.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var R,U,$;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-6 p-4">
      <div className="text-center">
        <CircularGauge value={75} label="Dashed Progress" unit="%" variant="primary" animated progressConfig={{
        dashArray: "10 5",
        lineCap: "butt"
      }} size={160} />
        <p className="mt-2 text-sm text-gray-600">Dashed lines</p>
      </div>
      <div className="text-center">
        <CircularGauge value={60} label="Square Caps" unit="%" variant="warning" animated progressConfig={{
        lineCap: "square"
      }} thickness={12} size={160} />
        <p className="mt-2 text-sm text-gray-600">Square line caps</p>
      </div>
      <div className="text-center">
        <CircularGauge value={85} label="Animated Dash" unit="%" variant="success" animated progressConfig={{
        dashArray: "20 10",
        dashOffset: 0
      }} size={160} />
        <p className="mt-2 text-sm text-gray-600">Animated dashes</p>
      </div>
    </div>
}`,...($=(U=u.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var O,H,W;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    return <div className="space-y-6 p-4">
        <div className="flex justify-center">
          <CircularGauge value={value} label="Live Data" unit="%" variant="info" animated shouldAnimate={(newVal, oldVal) => Math.abs(newVal - oldVal) > 5} onValueChange={val => console.log("Value changed:", val)} tickConfig={{
          majorInterval: 5,
          showLabels: true
        }} tooltip={{
          enabled: true,
          formatter: val => \`Current: \${val.toFixed(1)}%\`
        }} size={220} />
        </div>

        <div className="flex justify-center gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Manual Control</label>
            <input type="range" min="0" max="100" value={value} onChange={e => setValue(Number(e.target.value))} className="w-32" disabled={autoUpdate} />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Auto Update</label>
            <button onClick={() => setAutoUpdate(!autoUpdate)} className={\`rounded px-4 py-2 text-sm font-medium \${autoUpdate ? "bg-red-500 text-white hover:bg-red-600" : "bg-blue-500 text-white hover:bg-blue-600"}\`}>
              {autoUpdate ? "Stop" : "Start"}
            </button>
          </div>
        </div>
      </div>;
  }
}`,...(W=(H=v.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var B,q,K;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [triggerAnimation, setTriggerAnimation] = useState(0);
    const easingTypes = [{
      name: "Linear",
      value: "linear" as const
    }, {
      name: "Ease In",
      value: "ease-in" as const
    }, {
      name: "Ease Out",
      value: "ease-out" as const
    }, {
      name: "Ease In-Out",
      value: "ease-in-out" as const
    }];
    return <div className="space-y-6 p-4">
        <div className="text-center">
          <button onClick={() => setTriggerAnimation(prev => prev + 1)} className="rounded-lg bg-blue-500 px-6 py-2 font-medium text-white hover:bg-blue-600">
            Trigger Animation
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {easingTypes.map(easing => <div key={easing.value} className="text-center">
              <CircularGauge value={triggerAnimation % 2 === 0 ? 20 : 80} label={easing.name} unit="%" variant="primary" animated animationEasing={easing.value} animationDuration={2000} size={140} />
            </div>)}
        </div>
      </div>;
  }
}`,...(K=(q=x.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var Q,X,_;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-6 p-4">
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
        <CircularGauge value={55} label="Custom" variant="custom" colors={{
        progress: "#8b5cf6",
        filledTicks: "#8b5cf6"
      }} animated />
        <p className="mt-2 text-sm text-gray-600">Custom</p>
      </div>
    </div>
}`,...(_=(X=g.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var J,Y,Z;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-8 p-4">
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
}`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-6 rounded-lg bg-gray-50 p-6 md:grid-cols-4">
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <CircularGauge value={92} unit="%" label="CPU Usage" size={120} variant="success" animated thickness={6} tickConfig={{
        showLabels: false
      }} />
      </div>
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <CircularGauge value={67} unit="%" label="Memory" size={120} variant="warning" animated thickness={6} />
      </div>
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <CircularGauge value={34} unit="%" label="Storage" size={120} variant="error" animated thickness={6} />
      </div>
      <div className="rounded-lg bg-white p-4 shadow-sm">
        <CircularGauge value={88} unit="%" label="Network" size={120} variant="info" animated thickness={6} />
      </div>
    </div>
}`,...(te=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,ne,re;h.parameters={...h.parameters,docs:{...(se=h.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 p-4">
      <div className="text-center">
        <CircularGauge value={750} min={0} max={1000} label="Revenue" unit="K" variant="success" animated valueFormatter={val => \`\${Math.round(val)}\`} />
        <p className="mt-2 text-sm text-gray-600">0-1000 range</p>
      </div>
      <div className="text-center">
        <CircularGauge value={23} min={-10} max={40} label="Temperature" unit="°C" variant="info" animated />
        <p className="mt-2 text-sm text-gray-600">-10 to 40 range</p>
      </div>
    </div>
}`,...(re=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ie,le,ce;N.parameters={...N.parameters,docs:{...(ie=N.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 p-4">
      <CircularGauge value={75} label="Speed" unit="mph" startAngle={-180} endAngle={0} variant="primary" animated size={200} thickness={12} tickConfig={{
      majorInterval: 4,
      showLabels: true
    }} />
      <CircularGauge value={60} label="Fuel" unit="%" startAngle={-90} endAngle={90} variant="warning" animated size={200} thickness={12} />
    </div>
}`,...(ce=(le=N.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,me,oe;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div className="space-y-8 p-6">
      {/* Performance Metrics */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Performance Metrics</h3>
        <div className="grid grid-cols-3 gap-4">
          <CircularGauge value={94} label="Page Speed" unit="/100" variant="success" animated size={140} tickConfig={{
          majorInterval: 5,
          showLabels: true,
          labelFormatter: val => val.toString()
        }} />
          <CircularGauge value={87} label="SEO Score" unit="/100" variant="primary" animated size={140} />
          <CircularGauge value={76} label="Accessibility" unit="/100" variant="warning" animated size={140} />
        </div>
      </div>

      {/* Smart Home Dashboard */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Smart Home Dashboard</h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-4">
            <CircularGauge value={22} min={10} max={30} label="Temperature" unit="°C" variant="info" animated size={120} renderValue={(value, formatted) => <div className="text-center">
                  <div className="text-2xl">🌡️</div>
                  <div className="text-lg font-bold text-blue-600">
                    {formatted}°C
                  </div>
                </div>} />
          </div>
          <div className="rounded-lg bg-gradient-to-br from-green-50 to-green-100 p-4">
            <CircularGauge value={65} unit="%" label="Humidity" variant="success" animated size={120} renderValue={(value, formatted) => <div className="text-center">
                  <div className="text-2xl">💧</div>
                  <div className="text-lg font-bold text-green-600">
                    {formatted}%
                  </div>
                </div>} />
          </div>
          <div className="rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 p-4">
            <CircularGauge value={850} min={0} max={1000} label="Air Quality" unit=" AQI" variant="warning" animated size={120} renderValue={(value, formatted) => <div className="text-center">
                  <div className="text-2xl">🌬️</div>
                  <div className="text-lg font-bold text-yellow-600">
                    {formatted}
                  </div>
                </div>} />
          </div>
          <div className="rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 p-4">
            <CircularGauge value={45} unit="dB" label="Noise Level" colors={{
            progress: "#8b5cf6",
            filledTicks: "#8b5cf6"
          }} animated size={120} renderValue={(value, formatted) => <div className="text-center">
                  <div className="text-2xl">🔊</div>
                  <div className="text-lg font-bold text-purple-600">
                    {formatted}dB
                  </div>
                </div>} />
          </div>
        </div>
      </div>
    </div>
}`,...(oe=(me=f.parameters)==null?void 0:me.docs)==null?void 0:oe.source}}};var ue,ve,xe;j.parameters={...j.parameters,docs:{...(ue=j.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
    variant: "primary"
  }
}`,...(xe=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};const je=["Default","BasicUsage","EnhancedTicks","RadialGradients","CustomRenderProps","ProgressCustomization","InteractiveDemo","EasingFunctions","ColorVariants","Sizes","Dashboard","CustomRange","SemiCircle","RealWorldExamples","Playground"];export{c as BasicUsage,g as ColorVariants,h as CustomRange,o as CustomRenderProps,b as Dashboard,l as Default,x as EasingFunctions,d as EnhancedTicks,v as InteractiveDemo,j as Playground,u as ProgressCustomization,m as RadialGradients,f as RealWorldExamples,N as SemiCircle,p as Sizes,je as __namedExportsOrder,fe as default};
