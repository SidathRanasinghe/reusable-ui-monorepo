import{j as e}from"./jsx-runtime-DdxpLdx6.js";import{R as V,r as Z}from"./index-Bk7LAl9r.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Oa={primary:{progress:"#3b82f6",filledTicks:"#3b82f6"},success:{progress:"#10b981",filledTicks:"#10b981"},warning:{progress:"#f59e0b",filledTicks:"#f59e0b"},error:{progress:"#ef4444",filledTicks:"#ef4444"},info:{progress:"#06b6d4",filledTicks:"#06b6d4"},custom:{}},_a={linear:t=>t,"ease-in":t=>t*t,"ease-out":t=>1-Math.pow(1-t,2),"ease-in-out":t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2},a=({value:t,max:s=100,min:r=0,unit:o="",label:i,size:l=200,thickness:p=8,tickCount:z=40,startAngle:A=-90,endAngle:oe=270,animated:ee=!1,animationDuration:ae=1e3,animationEasing:te="ease-out",showTicks:da=!0,showValue:ua=!0,showLabel:ma=!0,valueFormatter:ce,gradient:n,variant:va="primary",colors:f={},tickConfig:pa={},progressConfig:M={},className:ga="",containerClassName:xa="",valueClassName:fa="",labelClassName:ba="",tickClassName:ha="",filledTickClassName:Na="",majorTickClassName:ya="",tickLabelClassName:ja="",style:Ca,containerStyle:ka,valueStyle:wa,labelStyle:Sa,"aria-label":Va,"aria-describedby":za,onAnimationComplete:q,onValueChange:y,renderValue:de,renderLabel:ue,renderCenterContent:me,shouldAnimate:se,tooltip:re={}})=>{const[c,ve]=V.useState(ee?r:t),[Aa,pe]=V.useState(!1),b=V.useRef(),L=V.useRef(t),g=Math.max(r,Math.min(s,t)),Ga=g;V.useEffect(()=>{if(L.current===g)return;if(!(se?se(g,L.current):ee)){ve(g),L.current=g,y==null||y(g);return}b.current&&cancelAnimationFrame(b.current);const C=Date.now(),u=c,k=g,j=ae,w=_a[te];pe(!0);const S=()=>{const I=Date.now()-C,m=Math.min(I/j,1),P=w(m),x=u+(k-u)*P;ve(x),y==null||y(x),m<1?b.current=requestAnimationFrame(S):(pe(!1),L.current=g,q==null||q())};return b.current=requestAnimationFrame(S),()=>{b.current&&cancelAnimationFrame(b.current)}},[g,ee,ae,te,se,q,y,c]),V.useEffect(()=>()=>{b.current&&cancelAnimationFrame(b.current)},[]);const d=l/2,h=d-p/2-10,ge=(c-r)/(s-r)*100,xe=oe-A,Ma=ge/100*xe,ne=Oa[va],N={track:f.track||"#e5e7eb",progress:f.progress||ne.progress||"#3b82f6",ticks:f.ticks||"#d1d5db",filledTicks:f.filledTicks||ne.filledTicks||f.progress||ne.progress||"#3b82f6",value:f.value||"#111827",label:f.label||"#6b7280",background:f.background||"transparent"},fe=(v,C,u)=>{const k=v*Math.PI/180,j=C*Math.PI/180,w=d+u*Math.cos(k),S=d+u*Math.sin(k),I=d+u*Math.cos(j),m=d+u*Math.sin(j),P=Math.abs(C-v)>180?1:0;return`M ${w} ${S} A ${u} ${u} 0 ${P} 1 ${I} ${m}`},qa=fe(A,oe,h),La=fe(A,A+Ma,h),Ta=()=>{if(!da||z===0)return null;const{majorInterval:v=5,majorLength:C=1.5,minorLength:u=1,showLabels:k=!1,labelFormatter:j,labelOffset:w=15}=pa,S=Math.round(ge/100*z);return Array.from({length:z}).map((I,m)=>{const x=(A+m/(z-1)*xe)*Math.PI/180,ie=m%v===0,F=ie?C:u,Pa=d+(h+p/4*F)*Math.cos(x),Fa=d+(h+p/4*F)*Math.sin(x),$a=d+(h-p/4*F)*Math.cos(x),Ea=d+(h-p/4*F)*Math.sin(x),le=m<=S,Ra=le?N.filledTicks:N.ticks,Da=le?2:1,be=r+m/(z-1)*(s-r),Ua=j?j(be,m):Math.round(be).toString();return e.jsxs("g",{children:[e.jsx("line",{x1:Pa,y1:Fa,x2:$a,y2:Ea,stroke:Ra,strokeWidth:Da,className:`${le?Na:ha} ${ie?ya:""}`}),k&&ie&&e.jsx("text",{x:d+(h+w)*Math.cos(x),y:d+(h+w)*Math.sin(x),textAnchor:"middle",dominantBaseline:"central",className:ja,style:{fontSize:l*.04,fill:N.ticks,fontFamily:"inherit"},children:Ua})]},m)})},G=v=>ce?ce(v):Number.isInteger(v)?v.toString():v.toFixed(1),T=(n==null?void 0:n.id)||`gauge-gradient-${Math.random().toString(36).substr(2,9)}`,Ia=()=>me?me(c,G(c),i):e.jsxs(e.Fragment,{children:[ua&&(de?de(c,G(c)):e.jsxs("span",{className:`font-bold ${fa}`,style:{color:N.value,fontSize:l*.12,...wa},children:[G(c),o]})),ma&&i&&(ue?ue(i):e.jsx("span",{className:`mt-1 text-sm ${ba}`,style:{color:N.label,fontSize:l*.06,...Sa},children:i}))]});return e.jsxs("div",{className:`relative inline-block ${xa}`,style:{width:l,height:l,backgroundColor:N.background,...ka},role:"meter","aria-valuemin":r,"aria-valuemax":s,"aria-valuenow":Ga,"aria-label":Va||`${i||"Gauge"}: ${G(c)}${o}`,"aria-describedby":za,title:re.enabled?re.formatter?re.formatter(c):`${G(c)}${o}`:void 0,children:[e.jsxs("svg",{width:l,height:l,className:ga,style:{overflow:"visible",...Ca},children:[e.jsxs("defs",{children:[n&&e.jsxs("linearGradient",{id:T,x1:(n.direction==="vertical","0%"),y1:(n.direction==="vertical","0%"),x2:n.direction==="vertical"?"0%":"100%",y2:n.direction==="vertical"?"100%":"0%",children:[e.jsx("stop",{offset:"0%",stopColor:n.from}),e.jsx("stop",{offset:"100%",stopColor:n.to})]}),(n==null?void 0:n.direction)==="radial"&&e.jsxs("radialGradient",{id:`${T}-radial`,cx:"50%",cy:"50%",r:"50%",children:[e.jsx("stop",{offset:"0%",stopColor:n.from}),e.jsx("stop",{offset:"100%",stopColor:n.to})]})]}),e.jsx("path",{d:qa,fill:"none",stroke:N.track,strokeWidth:p,strokeLinecap:M.lineCap||"round"}),e.jsx("path",{d:La,fill:"none",stroke:n?n.direction==="radial"?`url(#${T}-radial)`:`url(#${T})`:N.progress,strokeWidth:p,strokeLinecap:M.lineCap||"round",strokeDasharray:M.dashArray,strokeDashoffset:M.dashOffset,style:{transition:Aa?void 0:`stroke-dashoffset ${ae}ms ${te}`}}),Ta()]}),e.jsx("div",{className:"pointer-events-none absolute inset-0 flex flex-col items-center justify-center",children:Ia()})]})};try{a.displayName="CircularGauge",a.__docgenInfo={description:"",displayName:"CircularGauge",props:{value:{defaultValue:null,description:"Current value to display",name:"value",required:!0,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Maximum value for the gauge (default: 100)",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"Minimum value for the gauge (default: 0)",name:"min",required:!1,type:{name:"number"}},unit:{defaultValue:{value:""},description:"Unit to display after the value",name:"unit",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label text below the value",name:"label",required:!1,type:{name:"string"}},size:{defaultValue:{value:"200"},description:"Size of the gauge in pixels",name:"size",required:!1,type:{name:"number"}},thickness:{defaultValue:{value:"8"},description:"Thickness of the gauge track",name:"thickness",required:!1,type:{name:"number"}},tickCount:{defaultValue:{value:"40"},description:"Number of ticks around the gauge",name:"tickCount",required:!1,type:{name:"number"}},startAngle:{defaultValue:{value:"-90"},description:"Start angle in degrees (0 = top, 90 = right)",name:"startAngle",required:!1,type:{name:"number"}},endAngle:{defaultValue:{value:"270"},description:"End angle in degrees for partial gauges",name:"endAngle",required:!1,type:{name:"number"}},animated:{defaultValue:{value:"false"},description:"Show animated progress",name:"animated",required:!1,type:{name:"boolean"}},animationDuration:{defaultValue:{value:"1000"},description:"Animation duration in milliseconds",name:"animationDuration",required:!1,type:{name:"number"}},animationEasing:{defaultValue:{value:"ease-out"},description:"Animation easing function",name:"animationEasing",required:!1,type:{name:"enum",value:[{value:'"linear"'},{value:'"ease-in"'},{value:'"ease-out"'},{value:'"ease-in-out"'}]}},showTicks:{defaultValue:{value:"true"},description:"Show ticks",name:"showTicks",required:!1,type:{name:"boolean"}},showValue:{defaultValue:{value:"true"},description:"Show value text",name:"showValue",required:!1,type:{name:"boolean"}},showLabel:{defaultValue:{value:"true"},description:"Show label text",name:"showLabel",required:!1,type:{name:"boolean"}},valueFormatter:{defaultValue:null,description:"Format function for the displayed value",name:"valueFormatter",required:!1,type:{name:"(value: number) => string"}},gradient:{defaultValue:null,description:"Gradient colors for the progress arc",name:"gradient",required:!1,type:{name:'{ from: string; to: string; id?: string; direction?: "horizontal" | "vertical" | "radial"; }'}},variant:{defaultValue:{value:"primary"},description:"Color variants",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'},{value:'"custom"'}]}},colors:{defaultValue:{value:"{}"},description:"Custom colors",name:"colors",required:!1,type:{name:"{ track?: string; progress?: string; ticks?: string; filledTicks?: string; value?: string; label?: string; background?: string; }"}},tickConfig:{defaultValue:{value:"{}"},description:"Tick configuration",name:"tickConfig",required:!1,type:{name:"{ majorInterval?: number; majorLength?: number; minorLength?: number; showLabels?: boolean; labelFormatter?: (value: number, index: number) => string; labelOffset?: number; }"}},progressConfig:{defaultValue:{value:"{}"},description:"Progress bar configuration",name:"progressConfig",required:!1,type:{name:'{ lineCap?: "round" | "butt" | "square"; dashArray?: string; dashOffset?: number; }'}},className:{defaultValue:{value:""},description:"CSS classes",name:"className",required:!1,type:{name:"string"}},containerClassName:{defaultValue:{value:""},description:"",name:"containerClassName",required:!1,type:{name:"string"}},valueClassName:{defaultValue:{value:""},description:"",name:"valueClassName",required:!1,type:{name:"string"}},labelClassName:{defaultValue:{value:""},description:"",name:"labelClassName",required:!1,type:{name:"string"}},tickClassName:{defaultValue:{value:""},description:"",name:"tickClassName",required:!1,type:{name:"string"}},filledTickClassName:{defaultValue:{value:""},description:"",name:"filledTickClassName",required:!1,type:{name:"string"}},majorTickClassName:{defaultValue:{value:""},description:"",name:"majorTickClassName",required:!1,type:{name:"string"}},tickLabelClassName:{defaultValue:{value:""},description:"",name:"tickLabelClassName",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Custom styles",name:"style",required:!1,type:{name:"CSSProperties"}},containerStyle:{defaultValue:null,description:"",name:"containerStyle",required:!1,type:{name:"CSSProperties"}},valueStyle:{defaultValue:null,description:"",name:"valueStyle",required:!1,type:{name:"CSSProperties"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:"CSSProperties"}},"aria-label":{defaultValue:null,description:"Accessibility",name:"aria-label",required:!1,type:{name:"string"}},"aria-describedby":{defaultValue:null,description:"",name:"aria-describedby",required:!1,type:{name:"string"}},onAnimationComplete:{defaultValue:null,description:"Callbacks",name:"onAnimationComplete",required:!1,type:{name:"() => void"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!1,type:{name:"(value: number) => void"}},renderValue:{defaultValue:null,description:"Render props for custom content",name:"renderValue",required:!1,type:{name:"(value: number, formattedValue: string) => ReactNode"}},renderLabel:{defaultValue:null,description:"",name:"renderLabel",required:!1,type:{name:"(label: string) => ReactNode"}},renderCenterContent:{defaultValue:null,description:"",name:"renderCenterContent",required:!1,type:{name:"(value: number, formattedValue: string, label?: string) => ReactNode"}},shouldAnimate:{defaultValue:null,description:"Performance optimization",name:"shouldAnimate",required:!1,type:{name:"(newValue: number, oldValue: number) => boolean"}},tooltip:{defaultValue:{value:"{}"},description:"Tooltip configuration",name:"tooltip",required:!1,type:{name:'{ enabled?: boolean; formatter?: (value: number) => string; position?: "left" | "right" | "top" | "bottom"; }'}}}}}catch{}const Ka={title:"📊 Data Visualization/Circular Gauge",component:a,parameters:{docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Current value to display"},max:{control:{type:"number",min:1,max:1e3},description:"Maximum value for the gauge"},min:{control:{type:"number",min:0,max:100},description:"Minimum value for the gauge"},size:{control:{type:"range",min:50,max:400,step:10},description:"Size of the gauge in pixels"},thickness:{control:{type:"range",min:2,max:20,step:1},description:"Thickness of the gauge track"},tickCount:{control:{type:"range",min:0,max:100,step:5},description:"Number of ticks around the gauge"},variant:{control:{type:"select"},options:["primary","success","warning","error","info","custom"],description:"Color variant"},animated:{control:{type:"boolean"},description:"Enable smooth animation"},animationEasing:{control:{type:"select"},options:["linear","ease-in","ease-out","ease-in-out"],description:"Animation easing function"},showTicks:{control:{type:"boolean"},description:"Show tick marks"},showValue:{control:{type:"boolean"},description:"Show center value"},showLabel:{control:{type:"boolean"},description:"Show center label"}}},$={args:{value:75,label:"Performance",unit:"%"}},E={args:{value:87,unit:"%",label:"Performance Score",size:200,animated:!0}},R={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-8 p-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:75,label:"With Tick Labels",unit:"%",variant:"primary",animated:!0,tickConfig:{majorInterval:4,showLabels:!0,labelFormatter:t=>`${Math.round(t)}%`},size:200}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Major tick labels"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:850,min:0,max:1e3,label:"Custom Labels",unit:"",variant:"success",animated:!0,tickConfig:{majorInterval:5,majorLength:2,minorLength:.8,showLabels:!0,labelFormatter:t=>`${(t/1e3).toFixed(1)}K`},valueFormatter:t=>`$${Math.round(t)}`,size:200}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Custom formatting"})]})]})},D={render:()=>e.jsxs("div",{className:"flex gap-8 p-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:85,label:"Radial Gradient",unit:"%",gradient:{from:"#3b82f6",to:"#8b5cf6",direction:"radial"},animated:!0,size:180}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Radial"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:65,label:"Vertical Gradient",unit:"%",gradient:{from:"#10b981",to:"#06b6d4",direction:"vertical"},animated:!0,size:180}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Vertical"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:90,label:"Horizontal Gradient",unit:"%",gradient:{from:"#f59e0b",to:"#ef4444",direction:"horizontal"},animated:!0,size:180}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Horizontal"})]})]})},U={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-8 p-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:75,label:"Custom Value",unit:"%",variant:"primary",animated:!0,renderValue:(t,s)=>e.jsxs("div",{className:"text-center",children:[e.jsxs("div",{className:"text-2xl font-bold text-blue-600",children:[s,"%"]}),e.jsx("div",{className:"text-xs text-gray-500",children:"of target"})]}),renderLabel:t=>e.jsx("div",{className:"mt-2 rounded-full bg-blue-100 px-2 py-1",children:e.jsx("span",{className:"text-xs font-medium text-blue-800",children:t})}),size:180}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Custom value & label"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:42,min:0,max:50,variant:"success",animated:!0,renderCenterContent:(t,s,r)=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-3xl",children:"🎯"}),e.jsx("div",{className:"text-lg font-bold text-green-600",children:s}),e.jsx("div",{className:"text-xs text-gray-500",children:"goals completed"})]}),size:180}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Complete custom content"})]})]})},O={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-6 p-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:75,label:"Dashed Progress",unit:"%",variant:"primary",animated:!0,progressConfig:{dashArray:"10 5",lineCap:"butt"},size:160}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Dashed lines"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:60,label:"Square Caps",unit:"%",variant:"warning",animated:!0,progressConfig:{lineCap:"square"},thickness:12,size:160}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Square line caps"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:85,label:"Animated Dash",unit:"%",variant:"success",animated:!0,progressConfig:{dashArray:"20 10",dashOffset:0},size:160}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Animated dashes"})]})]})},_={render:()=>{const[t,s]=Z.useState(50),[r,o]=Z.useState(!1);return Z.useEffect(()=>{if(!r)return;const i=setInterval(()=>{s(l=>{const p=l+(Math.random()-.5)*20;return Math.max(0,Math.min(100,p))})},2e3);return()=>clearInterval(i)},[r]),e.jsxs("div",{className:"space-y-6 p-4",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx(a,{value:t,label:"Live Data",unit:"%",variant:"info",animated:!0,shouldAnimate:(i,l)=>Math.abs(i-l)>5,onValueChange:i=>console.log("Value changed:",i),tickConfig:{majorInterval:5,showLabels:!0},tooltip:{enabled:!0,formatter:i=>`Current: ${i.toFixed(1)}%`},size:220})}),e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium",children:"Manual Control"}),e.jsx("input",{type:"range",min:"0",max:"100",value:t,onChange:i=>s(Number(i.target.value)),className:"w-32",disabled:r})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"block text-sm font-medium",children:"Auto Update"}),e.jsx("button",{onClick:()=>o(!r),className:`rounded px-4 py-2 text-sm font-medium ${r?"bg-red-500 text-white hover:bg-red-600":"bg-blue-500 text-white hover:bg-blue-600"}`,children:r?"Stop":"Start"})]})]})]})}},W={render:()=>{const[t,s]=Z.useState(0),r=[{name:"Linear",value:"linear"},{name:"Ease In",value:"ease-in"},{name:"Ease Out",value:"ease-out"},{name:"Ease In-Out",value:"ease-in-out"}];return e.jsxs("div",{className:"space-y-6 p-4",children:[e.jsx("div",{className:"text-center",children:e.jsx("button",{onClick:()=>s(o=>o+1),className:"rounded-lg bg-blue-500 px-6 py-2 font-medium text-white hover:bg-blue-600",children:"Trigger Animation"})}),e.jsx("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-4",children:r.map(o=>e.jsx("div",{className:"text-center",children:e.jsx(a,{value:t%2===0?20:80,label:o.name,unit:"%",variant:"primary",animated:!0,animationEasing:o.value,animationDuration:2e3,size:140})},o.value))})]})}},H={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-6 p-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:85,label:"Primary",variant:"primary",animated:!0}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Primary"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:92,label:"Success",variant:"success",animated:!0}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Success"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:67,label:"Warning",variant:"warning",animated:!0}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Warning"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:34,label:"Error",variant:"error",animated:!0}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Error"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:78,label:"Info",variant:"info",animated:!0}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Info"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:55,label:"Custom",variant:"custom",colors:{progress:"#8b5cf6",filledTicks:"#8b5cf6"},animated:!0}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"Custom"})]})]})},B={render:()=>e.jsxs("div",{className:"flex items-center gap-8 p-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:75,label:"Small",size:100,thickness:6}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"100px"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:75,label:"Medium",size:150,thickness:8}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"150px"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:75,label:"Large",size:200,thickness:10}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"200px"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:75,label:"X-Large",size:250,thickness:12}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"250px"})]})]})},K={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-6 rounded-lg bg-gray-50 p-6 md:grid-cols-4",children:[e.jsx("div",{className:"rounded-lg bg-white p-4 shadow-sm",children:e.jsx(a,{value:92,unit:"%",label:"CPU Usage",size:120,variant:"success",animated:!0,thickness:6,tickConfig:{showLabels:!1}})}),e.jsx("div",{className:"rounded-lg bg-white p-4 shadow-sm",children:e.jsx(a,{value:67,unit:"%",label:"Memory",size:120,variant:"warning",animated:!0,thickness:6})}),e.jsx("div",{className:"rounded-lg bg-white p-4 shadow-sm",children:e.jsx(a,{value:34,unit:"%",label:"Storage",size:120,variant:"error",animated:!0,thickness:6})}),e.jsx("div",{className:"rounded-lg bg-white p-4 shadow-sm",children:e.jsx(a,{value:88,unit:"%",label:"Network",size:120,variant:"info",animated:!0,thickness:6})})]})},Q={render:()=>e.jsxs("div",{className:"flex gap-8 p-4",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:750,min:0,max:1e3,label:"Revenue",unit:"K",variant:"success",animated:!0,valueFormatter:t=>`${Math.round(t)}`}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"0-1000 range"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{value:23,min:-10,max:40,label:"Temperature",unit:"°C",variant:"info",animated:!0}),e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"-10 to 40 range"})]})]})},X={render:()=>e.jsxs("div",{className:"flex gap-8 p-4",children:[e.jsx(a,{value:75,label:"Speed",unit:"mph",startAngle:-180,endAngle:0,variant:"primary",animated:!0,size:200,thickness:12,tickConfig:{majorInterval:4,showLabels:!0}}),e.jsx(a,{value:60,label:"Fuel",unit:"%",startAngle:-90,endAngle:90,variant:"warning",animated:!0,size:200,thickness:12})]})},J={render:()=>e.jsxs("div",{className:"space-y-8 p-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Performance Metrics"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx(a,{value:94,label:"Page Speed",unit:"/100",variant:"success",animated:!0,size:140,tickConfig:{majorInterval:5,showLabels:!0,labelFormatter:t=>t.toString()}}),e.jsx(a,{value:87,label:"SEO Score",unit:"/100",variant:"primary",animated:!0,size:140}),e.jsx(a,{value:76,label:"Accessibility",unit:"/100",variant:"warning",animated:!0,size:140})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-semibold",children:"Smart Home Dashboard"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 md:grid-cols-4",children:[e.jsx("div",{className:"rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-4",children:e.jsx(a,{value:22,min:10,max:30,label:"Temperature",unit:"°C",variant:"info",animated:!0,size:120,renderValue:(t,s)=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl",children:"🌡️"}),e.jsxs("div",{className:"text-lg font-bold text-blue-600",children:[s,"°C"]})]})})}),e.jsx("div",{className:"rounded-lg bg-gradient-to-br from-green-50 to-green-100 p-4",children:e.jsx(a,{value:65,unit:"%",label:"Humidity",variant:"success",animated:!0,size:120,renderValue:(t,s)=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl",children:"💧"}),e.jsxs("div",{className:"text-lg font-bold text-green-600",children:[s,"%"]})]})})}),e.jsx("div",{className:"rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 p-4",children:e.jsx(a,{value:850,min:0,max:1e3,label:"Air Quality",unit:" AQI",variant:"warning",animated:!0,size:120,renderValue:(t,s)=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl",children:"🌬️"}),e.jsx("div",{className:"text-lg font-bold text-yellow-600",children:s})]})})}),e.jsx("div",{className:"rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 p-4",children:e.jsx(a,{value:45,unit:"dB",label:"Noise Level",colors:{progress:"#8b5cf6",filledTicks:"#8b5cf6"},animated:!0,size:120,renderValue:(t,s)=>e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-2xl",children:"🔊"}),e.jsxs("div",{className:"text-lg font-bold text-purple-600",children:[s,"dB"]})]})})})]})]})]})},Y={args:{value:75,max:100,min:0,unit:"%",label:"Interactive Gauge",size:200,thickness:8,tickCount:40,startAngle:-90,endAngle:270,animated:!0,animationDuration:1e3,animationEasing:"ease-out",showTicks:!0,showValue:!0,showLabel:!0,variant:"primary"}};var he,Ne,ye;$.parameters={...$.parameters,docs:{...(he=$.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: "Performance",
    unit: "%"
  }
}`,...(ye=(Ne=$.parameters)==null?void 0:Ne.docs)==null?void 0:ye.source}}};var je,Ce,ke;E.parameters={...E.parameters,docs:{...(je=E.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    value: 87,
    unit: "%",
    label: "Performance Score",
    size: 200,
    animated: true
  }
}`,...(ke=(Ce=E.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var we,Se,Ve;R.parameters={...R.parameters,docs:{...(we=R.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Ve=(Se=R.parameters)==null?void 0:Se.docs)==null?void 0:Ve.source}}};var ze,Ae,Ge;D.parameters={...D.parameters,docs:{...(ze=D.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ge=(Ae=D.parameters)==null?void 0:Ae.docs)==null?void 0:Ge.source}}};var Me,qe,Le;U.parameters={...U.parameters,docs:{...(Me=U.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Le=(qe=U.parameters)==null?void 0:qe.docs)==null?void 0:Le.source}}};var Te,Ie,Pe;O.parameters={...O.parameters,docs:{...(Te=O.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Pe=(Ie=O.parameters)==null?void 0:Ie.docs)==null?void 0:Pe.source}}};var Fe,$e,Ee;_.parameters={..._.parameters,docs:{...(Fe=_.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ee=($e=_.parameters)==null?void 0:$e.docs)==null?void 0:Ee.source}}};var Re,De,Ue;W.parameters={...W.parameters,docs:{...(Re=W.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ue=(De=W.parameters)==null?void 0:De.docs)==null?void 0:Ue.source}}};var Oe,_e,We;H.parameters={...H.parameters,docs:{...(Oe=H.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(We=(_e=H.parameters)==null?void 0:_e.docs)==null?void 0:We.source}}};var He,Be,Ke;B.parameters={...B.parameters,docs:{...(He=B.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ke=(Be=B.parameters)==null?void 0:Be.docs)==null?void 0:Ke.source}}};var Qe,Xe,Je;K.parameters={...K.parameters,docs:{...(Qe=K.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(Je=(Xe=K.parameters)==null?void 0:Xe.docs)==null?void 0:Je.source}}};var Ye,Ze,ea;Q.parameters={...Q.parameters,docs:{...(Ye=Q.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(ea=(Ze=Q.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source}}};var aa,ta,sa;X.parameters={...X.parameters,docs:{...(aa=X.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 p-4">
      <CircularGauge value={75} label="Speed" unit="mph" startAngle={-180} endAngle={0} variant="primary" animated size={200} thickness={12} tickConfig={{
      majorInterval: 4,
      showLabels: true
    }} />
      <CircularGauge value={60} label="Fuel" unit="%" startAngle={-90} endAngle={90} variant="warning" animated size={200} thickness={12} />
    </div>
}`,...(sa=(ta=X.parameters)==null?void 0:ta.docs)==null?void 0:sa.source}}};var ra,na,ia;J.parameters={...J.parameters,docs:{...(ra=J.parameters)==null?void 0:ra.docs,source:{originalSource:`{
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
}`,...(ia=(na=J.parameters)==null?void 0:na.docs)==null?void 0:ia.source}}};var la,oa,ca;Y.parameters={...Y.parameters,docs:{...(la=Y.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ca=(oa=Y.parameters)==null?void 0:oa.docs)==null?void 0:ca.source}}};const Qa=["Default","BasicUsage","EnhancedTicks","RadialGradients","CustomRenderProps","ProgressCustomization","InteractiveDemo","EasingFunctions","ColorVariants","Sizes","Dashboard","CustomRange","SemiCircle","RealWorldExamples","Playground"];export{E as BasicUsage,H as ColorVariants,Q as CustomRange,U as CustomRenderProps,K as Dashboard,$ as Default,W as EasingFunctions,R as EnhancedTicks,_ as InteractiveDemo,Y as Playground,O as ProgressCustomization,D as RadialGradients,J as RealWorldExamples,X as SemiCircle,B as Sizes,Qa as __namedExportsOrder,Ka as default};
