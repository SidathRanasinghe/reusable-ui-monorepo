import{N as Me,g as e,a as n}from"./utils-CLXMOyHW.js";import{g as r,A as o}from"./assetUtils-DbA588Dg.js";import"./jsx-runtime-DdxpLdx6.js";import"./index-Bk7LAl9r.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./createLucideIcon-DO4rnCdN.js";import"./chevron-up-D7OYm28i.js";import"./chevron-down-BfzRN9Ux.js";const He={title:"Data Visualization/Network Graph",component:Me,parameters:{layout:"fullscreen",docs:{description:{component:`
A powerful and flexible network graph visualization component built with D3.js and React.

## Features
- **Interactive Visualization**: Zoom, pan, and drag nodes
- **Customizable Styling**: Flexible node shapes, colors, and link styles
- **Minimap Navigation**: Optional minimap for easy navigation of large graphs
- **Force Simulation**: Physics-based layout with customizable forces
- **Event Handling**: Rich set of interaction callbacks
- **Performance Optimized**: Virtualization support for large datasets
- **Accessible**: Keyboard and screen reader friendly
- **Responsive**: Adapts to container size changes

## Node Shapes
- Circle
- Square / Rounded Square
- Rectangle / Rounded Rectangle
- Custom shapes via renderer

## Themes
Supports both light and dark themes with automatic styling adjustments.
        `}}},tags:["autodocs"],argTypes:{nodes:{description:"Array of node objects to render",control:{type:"object"}},links:{description:"Array of link objects connecting nodes",control:{type:"object"}},width:{description:"Fixed width in pixels (optional)",control:{type:"number",min:200,max:2e3,step:50}},height:{description:"Fixed height in pixels (optional)",control:{type:"number",min:200,max:1200,step:50}},enableMinimap:{description:"Enable minimap navigation",control:{type:"boolean"}},enableZoom:{description:"Enable zoom functionality",control:{type:"boolean"}},enableDrag:{description:"Enable node dragging",control:{type:"boolean"}},enableHover:{description:"Enable hover effects and interactions",control:{type:"boolean"}},theme:{description:"Visual theme",control:{type:"select"},options:["light","dark"]},fitOnMount:{description:"Automatically fit graph to container on mount",control:{type:"boolean"}},minZoom:{description:"Minimum zoom level",control:{type:"number",min:.1,max:1,step:.1}},maxZoom:{description:"Maximum zoom level",control:{type:"number",min:2,max:10,step:.5}},enableVirtualization:{description:"Enable virtualization for large datasets",control:{type:"boolean"}},maxRenderNodes:{description:"Maximum nodes to render when virtualization is enabled",control:{type:"number",min:100,max:5e3,step:100}},maxRenderLinks:{description:"Maximum links to render when virtualization is enabled",control:{type:"number",min:100,max:1e4,step:100}}},args:{width:800,height:600,enableMinimap:!0,enableZoom:!0,enableDrag:!0,enableHover:!0,theme:"light",fitOnMount:!0,minZoom:.1,maxZoom:4,enableVirtualization:!1,maxRenderNodes:1e3,maxRenderLinks:2e3}},s={args:{nodes:n(8),links:e(8)}},t={name:"Simple Network",args:{nodes:[{id:"1",name:"Root",shape:"circle",style:{backgroundColor:"#ff6b6b"}},{id:"2",name:"Child A",shape:"square",style:{backgroundColor:"#4ecdc4"}},{id:"3",name:"Child B",shape:"rectangle",style:{backgroundColor:"#45b7d1"}},{id:"4",name:"Grandchild",shape:"rounded-square",style:{backgroundColor:"#96ceb4"}}],links:[{source:"1",target:"2",label:"connects to"},{source:"1",target:"3",label:"links to"},{source:"2",target:"4",label:"parent of"}]}},l={name:"Dark Theme",args:{theme:"dark",nodes:n(6),links:e(6)},parameters:{backgrounds:{default:"dark"}}},i={name:"Light Theme",args:{theme:"light",nodes:n(6),links:e(6)}},c={name:"Different Node Shapes",args:{nodes:[{id:"1",name:"Circle",shape:"circle",style:{backgroundColor:"#ff6b6b"}},{id:"2",name:"Square",shape:"square",style:{backgroundColor:"#4ecdc4"}},{id:"3",name:"Rectangle",shape:"rectangle",style:{backgroundColor:"#45b7d1"}},{id:"4",name:"Rounded Square",shape:"rounded-square",style:{backgroundColor:"#96ceb4"}},{id:"5",name:"Rounded Rectangle",shape:"rounded-rectangle",style:{backgroundColor:"#feca57"}}],links:[{source:"1",target:"2"},{source:"2",target:"3"},{source:"3",target:"4"},{source:"4",target:"5"},{source:"5",target:"1"}]}},d={name:"Custom Node & Link Styling",args:{nodes:[{id:"1",name:"Server",label:`Main Server
US-East`,shape:"rectangle",style:{backgroundColor:"#2c3e50",borderColor:"#3498db",borderWidth:3,width:120,height:80}},{id:"2",name:"DB",label:`Database
PostgreSQL`,shape:"circle",style:{backgroundColor:"#e74c3c",borderColor:"#c0392b",borderWidth:2}},{id:"3",name:"Cache",label:"Redis Cache",shape:"rounded-square",style:{backgroundColor:"#f39c12",borderColor:"#e67e22",borderWidth:2}}],links:[{source:"1",target:"2",label:"queries",style:{linkColor:"#e74c3c",linkWidth:3,linkType:"solid"}},{source:"1",target:"3",label:"caches",style:{linkColor:"#f39c12",linkWidth:2,linkType:"dashed"}}]}},g={name:"Large Network (100 nodes)",args:{nodes:n(100),links:e(100),enableVirtualization:!0,maxRenderNodes:50,maxRenderLinks:100}},m={name:"Medium Network (25 nodes)",args:{nodes:n(25),links:e(25)}},u={name:"Without Minimap",args:{nodes:n(10),links:e(10),enableMinimap:!1}},p={name:"Zoom Disabled",args:{nodes:n(8),links:e(8),enableZoom:!1}},h={name:"Drag Disabled",args:{nodes:n(8),links:e(8),enableDrag:!1}},b={name:"Static Layout (No interactions)",args:{nodes:n(8),links:e(8),enableZoom:!1,enableDrag:!1,enableHover:!1,enableMinimap:!1}},k={name:"Network Topology",args:{nodes:[{id:"router",name:"Router",label:`Main Router
192.168.1.1`,shape:"rectangle",style:{backgroundColor:"#34495e",borderColor:"#2c3e50"}},{id:"switch1",name:"Switch 1",label:`Switch A
Port 24`,shape:"square",style:{backgroundColor:"#27ae60",borderColor:"#229954"}},{id:"switch2",name:"Switch 2",label:`Switch B
Port 16`,shape:"square",style:{backgroundColor:"#27ae60",borderColor:"#229954"}},{id:"pc1",name:"PC 1",label:`Workstation
192.168.1.10`,shape:"circle",style:{backgroundColor:"#3498db",borderColor:"#2980b9"}},{id:"pc2",name:"PC 2",label:`Workstation
192.168.1.11`,shape:"circle",style:{backgroundColor:"#3498db",borderColor:"#2980b9"}},{id:"server",name:"Server",label:`File Server
192.168.1.100`,shape:"rounded-rectangle",style:{backgroundColor:"#e74c3c",borderColor:"#c0392b",width:100,height:60}}],links:[{source:"router",target:"switch1",label:"Ethernet"},{source:"router",target:"switch2",label:"Ethernet"},{source:"switch1",target:"pc1",label:"1Gbps"},{source:"switch2",target:"pc2",label:"1Gbps"},{source:"router",target:"server",label:"10Gbps",style:{linkWidth:4,linkColor:"#e74c3c"}}],simulationConfig:{linkDistance:180,chargeStrength:-3e3}}},C={name:"Nodes with Images",args:{nodes:[{id:"1",name:"User",label:`John Doe
Admin`,shape:"circle",image:r(o.ART_AVATAR_JOHN),style:{backgroundColor:"#3498db",padding:5,width:60,height:60}},{id:"2",name:"User",label:`Jane Smith
Manager`,shape:"circle",image:r(o.ART_AVATAR_JANE),style:{backgroundColor:"#e74c3c",padding:5,width:60,height:60}},{id:"3",name:"User",label:`Bob Wilson
Developer`,shape:"square",image:r(o.ART_AVATAR_BOB),style:{backgroundColor:"#27ae60",padding:5,width:120,height:120}},{id:"4",name:"User",label:`Kamala Devi
Designer`,shape:"circle",image:r(o.ART_AVATAR_KAMALA),style:{backgroundColor:"#9b59b6",padding:5,width:60,height:60}},{id:"5",name:"User",label:`Luna Park
Analyst`,shape:"rounded-square",image:r(o.ART_AVATAR_LUNA),style:{backgroundColor:"#1abc9c",padding:5,width:100,height:100}},{id:"6",name:"User",label:`Mike Ross
Engineer`,shape:"circle",image:r(o.ART_AVATAR_MIKE),style:{backgroundColor:"#f39c12",padding:5,width:60,height:60}},{id:"7",name:"User",label:`Bell Nash
Architect`,shape:"rectangle",image:r(o.ART_AVATAR_BELL),style:{backgroundColor:"#34495e",padding:5,width:120,height:60}},{id:"8",name:"User",label:`Ron Clark
Support`,shape:"circle",image:r(o.ART_AVATAR_RON),style:{backgroundColor:"#2ecc71",padding:5,width:60,height:60}},{id:"9",name:"User",label:`Sarath Silva
Intern`,shape:"rounded-rectangle",image:r(o.ART_AVATAR_SARATH),style:{backgroundColor:"#c0392b",padding:5,width:140,height:100}},{id:"10",name:"User",label:`Jine Lee
HR`,shape:"circle",image:r(o.ART_AVATAR_JINE),style:{backgroundColor:"#7f8c8d",padding:5,width:60,height:60}}],links:[{source:"1",target:"2",label:"supervises"},{source:"1",target:"6",label:"supervises"},{source:"2",target:"3",label:"manages"},{source:"2",target:"7",label:"manages"},{source:"3",target:"4",label:"collaborates"},{source:"3",target:"8",label:"collaborates"},{source:"4",target:"5",label:"reviews"},{source:"4",target:"9",label:"reviews"},{source:"5",target:"6",label:"supports"},{source:"5",target:"10",label:"supports"},{source:"6",target:"7",label:"coordinates"},{source:"6",target:"3",label:"coordinates"},{source:"7",target:"8",label:"assists"},{source:"7",target:"4",label:"assists"},{source:"8",target:"9",label:"mentors"},{source:"8",target:"5",label:"mentors"},{source:"9",target:"10",label:"reports to"},{source:"9",target:"6",label:"reports to"},{source:"10",target:"2",label:"reports to"},{source:"10",target:"1",label:"reports to"}]}},y={name:"Interactive with Callbacks",args:{nodes:n(6),links:e(6),onNodeClick:(a,R)=>{console.log("Node clicked:",a),alert(`Clicked on ${a.name}`)},onLinkClick:(a,R)=>{console.log("Link clicked:",a),alert(`Clicked on link from ${a.source} to ${a.target}`)},onNodeHover:(a,R)=>{console.log("Node hovered:",a)},onZoomChange:a=>{console.log("Zoom changed:",a)}},parameters:{docs:{description:{story:"This example demonstrates the callback functions. Check the console and try clicking on nodes and links."}}}},A={name:"Custom Simulation Settings",args:{nodes:n(12),links:e(12),simulationConfig:{linkDistance:300,chargeStrength:-1e3,collisionRadius:50,alphaDecay:.005,alphaMin:.001},centerForce:.3},parameters:{docs:{description:{story:"Custom simulation with increased link distance and modified forces for a more spread out layout."}}}},S={name:"Custom Zoom Levels",args:{nodes:n(8),links:e(8),minZoom:.2,maxZoom:8,zoomLevel:1.5},parameters:{docs:{description:{story:"Custom zoom levels with extended range and initial zoom level."}}}},T={name:"Responsive (No Fixed Dimensions)",args:{nodes:n(10),links:e(10)},parameters:{docs:{description:{story:"Example without fixed width/height - the component will adapt to its container size."}}}},w={name:"Different Link Types",args:{nodes:[{id:"1",name:"Node 1",shape:"circle",style:{backgroundColor:"#3498db"}},{id:"2",name:"Node 2",shape:"circle",style:{backgroundColor:"#e74c3c"}},{id:"3",name:"Node 3",shape:"circle",style:{backgroundColor:"#27ae60"}},{id:"4",name:"Node 4",shape:"circle",style:{backgroundColor:"#f39c12"}}],links:[{source:"1",target:"2",label:"Solid",style:{linkType:"solid",linkColor:"#3498db",linkWidth:2}},{source:"2",target:"3",label:"Dashed",style:{linkType:"dashed",linkColor:"#e74c3c",linkWidth:3}},{source:"3",target:"4",label:"Thick",style:{linkType:"solid",linkColor:"#27ae60",linkWidth:6}},{source:"1",target:"4",label:"Curved",shape:"curved",style:{linkType:"solid",linkColor:"#9b59b6",linkWidth:2}}]}},f={name:"Minimal Setup",args:{nodes:[{id:"A",name:"A"},{id:"B",name:"B"},{id:"C",name:"C"}],links:[{source:"A",target:"B"},{source:"B",target:"C"}]},parameters:{docs:{description:{story:"Minimal example showing the simplest possible configuration with just IDs and names."}}}};var N,v,L;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    nodes: generateNodes(8),
    links: generateLinks(8)
  }
}`,...(L=(v=s.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var D,_,x;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Simple Network",
  args: {
    nodes: [{
      id: "1",
      name: "Root",
      shape: "circle",
      style: {
        backgroundColor: "#ff6b6b"
      }
    }, {
      id: "2",
      name: "Child A",
      shape: "square",
      style: {
        backgroundColor: "#4ecdc4"
      }
    }, {
      id: "3",
      name: "Child B",
      shape: "rectangle",
      style: {
        backgroundColor: "#45b7d1"
      }
    }, {
      id: "4",
      name: "Grandchild",
      shape: "rounded-square",
      style: {
        backgroundColor: "#96ceb4"
      }
    }],
    links: [{
      source: "1",
      target: "2",
      label: "connects to"
    }, {
      source: "1",
      target: "3",
      label: "links to"
    }, {
      source: "2",
      target: "4",
      label: "parent of"
    }]
  }
}`,...(x=(_=t.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var M,E,P;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Dark Theme",
  args: {
    theme: "dark",
    nodes: generateNodes(6),
    links: generateLinks(6)
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...(P=(E=l.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var W,z,V;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Light Theme",
  args: {
    theme: "light",
    nodes: generateNodes(6),
    links: generateLinks(6)
  }
}`,...(V=(z=i.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var Z,q,B;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: "Different Node Shapes",
  args: {
    nodes: [{
      id: "1",
      name: "Circle",
      shape: "circle",
      style: {
        backgroundColor: "#ff6b6b"
      }
    }, {
      id: "2",
      name: "Square",
      shape: "square",
      style: {
        backgroundColor: "#4ecdc4"
      }
    }, {
      id: "3",
      name: "Rectangle",
      shape: "rectangle",
      style: {
        backgroundColor: "#45b7d1"
      }
    }, {
      id: "4",
      name: "Rounded Square",
      shape: "rounded-square",
      style: {
        backgroundColor: "#96ceb4"
      }
    }, {
      id: "5",
      name: "Rounded Rectangle",
      shape: "rounded-rectangle",
      style: {
        backgroundColor: "#feca57"
      }
    }],
    links: [{
      source: "1",
      target: "2"
    }, {
      source: "2",
      target: "3"
    }, {
      source: "3",
      target: "4"
    }, {
      source: "4",
      target: "5"
    }, {
      source: "5",
      target: "1"
    }]
  }
}`,...(B=(q=c.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var H,U,I;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Custom Node & Link Styling",
  args: {
    nodes: [{
      id: "1",
      name: "Server",
      label: "Main Server\\nUS-East",
      shape: "rectangle",
      style: {
        backgroundColor: "#2c3e50",
        borderColor: "#3498db",
        borderWidth: 3,
        width: 120,
        height: 80
      }
    }, {
      id: "2",
      name: "DB",
      label: "Database\\nPostgreSQL",
      shape: "circle",
      style: {
        backgroundColor: "#e74c3c",
        borderColor: "#c0392b",
        borderWidth: 2
      }
    }, {
      id: "3",
      name: "Cache",
      label: "Redis Cache",
      shape: "rounded-square",
      style: {
        backgroundColor: "#f39c12",
        borderColor: "#e67e22",
        borderWidth: 2
      }
    }],
    links: [{
      source: "1",
      target: "2",
      label: "queries",
      style: {
        linkColor: "#e74c3c",
        linkWidth: 3,
        linkType: "solid"
      }
    }, {
      source: "1",
      target: "3",
      label: "caches",
      style: {
        linkColor: "#f39c12",
        linkWidth: 2,
        linkType: "dashed"
      }
    }]
  }
}`,...(I=(U=d.parameters)==null?void 0:U.docs)==null?void 0:I.source}}};var J,F,O;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: "Large Network (100 nodes)",
  args: {
    nodes: generateNodes(100),
    links: generateLinks(100),
    enableVirtualization: true,
    maxRenderNodes: 50,
    maxRenderLinks: 100
  }
}`,...(O=(F=g.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var G,j,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Medium Network (25 nodes)",
  args: {
    nodes: generateNodes(25),
    links: generateLinks(25)
  }
}`,...(K=(j=m.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var $,Q,X;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Without Minimap",
  args: {
    nodes: generateNodes(10),
    links: generateLinks(10),
    enableMinimap: false
  }
}`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ee,ne;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: "Zoom Disabled",
  args: {
    nodes: generateNodes(8),
    links: generateLinks(8),
    enableZoom: false
  }
}`,...(ne=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,re,oe;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: "Drag Disabled",
  args: {
    nodes: generateNodes(8),
    links: generateLinks(8),
    enableDrag: false
  }
}`,...(oe=(re=h.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,te,le;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: "Static Layout (No interactions)",
  args: {
    nodes: generateNodes(8),
    links: generateLinks(8),
    enableZoom: false,
    enableDrag: false,
    enableHover: false,
    enableMinimap: false
  }
}`,...(le=(te=b.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ie,ce,de;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: "Network Topology",
  args: {
    nodes: [{
      id: "router",
      name: "Router",
      label: "Main Router\\n192.168.1.1",
      shape: "rectangle",
      style: {
        backgroundColor: "#34495e",
        borderColor: "#2c3e50"
      }
    }, {
      id: "switch1",
      name: "Switch 1",
      label: "Switch A\\nPort 24",
      shape: "square",
      style: {
        backgroundColor: "#27ae60",
        borderColor: "#229954"
      }
    }, {
      id: "switch2",
      name: "Switch 2",
      label: "Switch B\\nPort 16",
      shape: "square",
      style: {
        backgroundColor: "#27ae60",
        borderColor: "#229954"
      }
    }, {
      id: "pc1",
      name: "PC 1",
      label: "Workstation\\n192.168.1.10",
      shape: "circle",
      style: {
        backgroundColor: "#3498db",
        borderColor: "#2980b9"
      }
    }, {
      id: "pc2",
      name: "PC 2",
      label: "Workstation\\n192.168.1.11",
      shape: "circle",
      style: {
        backgroundColor: "#3498db",
        borderColor: "#2980b9"
      }
    }, {
      id: "server",
      name: "Server",
      label: "File Server\\n192.168.1.100",
      shape: "rounded-rectangle",
      style: {
        backgroundColor: "#e74c3c",
        borderColor: "#c0392b",
        width: 100,
        height: 60
      }
    }],
    links: [{
      source: "router",
      target: "switch1",
      label: "Ethernet"
    }, {
      source: "router",
      target: "switch2",
      label: "Ethernet"
    }, {
      source: "switch1",
      target: "pc1",
      label: "1Gbps"
    }, {
      source: "switch2",
      target: "pc2",
      label: "1Gbps"
    }, {
      source: "router",
      target: "server",
      label: "10Gbps",
      style: {
        linkWidth: 4,
        linkColor: "#e74c3c"
      }
    }],
    simulationConfig: {
      linkDistance: 180,
      chargeStrength: -3000
    }
  }
}`,...(de=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ge,me,ue;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: "Nodes with Images",
  args: {
    nodes: [{
      id: "1",
      name: "User",
      label: "John Doe\\nAdmin",
      shape: "circle",
      image: getAssetPath(ASSET_PATHS.ART_AVATAR_JOHN),
      style: {
        backgroundColor: "#3498db",
        padding: 5,
        width: 60,
        height: 60
      }
    }, {
      id: "2",
      name: "User",
      label: "Jane Smith\\nManager",
      shape: "circle",
      image: getAssetPath(ASSET_PATHS.ART_AVATAR_JANE),
      style: {
        backgroundColor: "#e74c3c",
        padding: 5,
        width: 60,
        height: 60
      }
    }, {
      id: "3",
      name: "User",
      label: "Bob Wilson\\nDeveloper",
      shape: "square",
      image: getAssetPath(ASSET_PATHS.ART_AVATAR_BOB),
      style: {
        backgroundColor: "#27ae60",
        padding: 5,
        width: 120,
        height: 120
      }
    }, {
      id: "4",
      name: "User",
      label: "Kamala Devi\\nDesigner",
      shape: "circle",
      image: getAssetPath(ASSET_PATHS.ART_AVATAR_KAMALA),
      style: {
        backgroundColor: "#9b59b6",
        padding: 5,
        width: 60,
        height: 60
      }
    }, {
      id: "5",
      name: "User",
      label: "Luna Park\\nAnalyst",
      shape: "rounded-square",
      image: getAssetPath(ASSET_PATHS.ART_AVATAR_LUNA),
      style: {
        backgroundColor: "#1abc9c",
        padding: 5,
        width: 100,
        height: 100
      }
    }, {
      id: "6",
      name: "User",
      label: "Mike Ross\\nEngineer",
      shape: "circle",
      image: getAssetPath(ASSET_PATHS.ART_AVATAR_MIKE),
      style: {
        backgroundColor: "#f39c12",
        padding: 5,
        width: 60,
        height: 60
      }
    }, {
      id: "7",
      name: "User",
      label: "Bell Nash\\nArchitect",
      shape: "rectangle",
      image: getAssetPath(ASSET_PATHS.ART_AVATAR_BELL),
      style: {
        backgroundColor: "#34495e",
        padding: 5,
        width: 120,
        height: 60
      }
    }, {
      id: "8",
      name: "User",
      label: "Ron Clark\\nSupport",
      shape: "circle",
      image: getAssetPath(ASSET_PATHS.ART_AVATAR_RON),
      style: {
        backgroundColor: "#2ecc71",
        padding: 5,
        width: 60,
        height: 60
      }
    }, {
      id: "9",
      name: "User",
      label: "Sarath Silva\\nIntern",
      shape: "rounded-rectangle",
      image: getAssetPath(ASSET_PATHS.ART_AVATAR_SARATH),
      style: {
        backgroundColor: "#c0392b",
        padding: 5,
        width: 140,
        height: 100
      }
    }, {
      id: "10",
      name: "User",
      label: "Jine Lee\\nHR",
      shape: "circle",
      image: getAssetPath(ASSET_PATHS.ART_AVATAR_JINE),
      style: {
        backgroundColor: "#7f8c8d",
        padding: 5,
        width: 60,
        height: 60
      }
    }],
    links: [{
      source: "1",
      target: "2",
      label: "supervises"
    }, {
      source: "1",
      target: "6",
      label: "supervises"
    }, {
      source: "2",
      target: "3",
      label: "manages"
    }, {
      source: "2",
      target: "7",
      label: "manages"
    }, {
      source: "3",
      target: "4",
      label: "collaborates"
    }, {
      source: "3",
      target: "8",
      label: "collaborates"
    }, {
      source: "4",
      target: "5",
      label: "reviews"
    }, {
      source: "4",
      target: "9",
      label: "reviews"
    }, {
      source: "5",
      target: "6",
      label: "supports"
    }, {
      source: "5",
      target: "10",
      label: "supports"
    }, {
      source: "6",
      target: "7",
      label: "coordinates"
    }, {
      source: "6",
      target: "3",
      label: "coordinates"
    }, {
      source: "7",
      target: "8",
      label: "assists"
    }, {
      source: "7",
      target: "4",
      label: "assists"
    }, {
      source: "8",
      target: "9",
      label: "mentors"
    }, {
      source: "8",
      target: "5",
      label: "mentors"
    }, {
      source: "9",
      target: "10",
      label: "reports to"
    }, {
      source: "9",
      target: "6",
      label: "reports to"
    }, {
      source: "10",
      target: "2",
      label: "reports to"
    }, {
      source: "10",
      target: "1",
      label: "reports to"
    }]
  }
}`,...(ue=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,he,be;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: "Interactive with Callbacks",
  args: {
    nodes: generateNodes(6),
    links: generateLinks(6),
    onNodeClick: (node, event) => {
      console.log("Node clicked:", node);
      alert(\`Clicked on \${node.name}\`);
    },
    onLinkClick: (link, event) => {
      console.log("Link clicked:", link);
      alert(\`Clicked on link from \${link.source} to \${link.target}\`);
    },
    onNodeHover: (node, event) => {
      console.log("Node hovered:", node);
    },
    onZoomChange: zoomLevel => {
      console.log("Zoom changed:", zoomLevel);
    }
  },
  parameters: {
    docs: {
      description: {
        story: "This example demonstrates the callback functions. Check the console and try clicking on nodes and links."
      }
    }
  }
}`,...(be=(he=y.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ke,Ce,ye;A.parameters={...A.parameters,docs:{...(ke=A.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  name: "Custom Simulation Settings",
  args: {
    nodes: generateNodes(12),
    links: generateLinks(12),
    simulationConfig: {
      linkDistance: 300,
      chargeStrength: -1000,
      collisionRadius: 50,
      alphaDecay: 0.005,
      alphaMin: 0.001
    },
    centerForce: 0.3
  },
  parameters: {
    docs: {
      description: {
        story: "Custom simulation with increased link distance and modified forces for a more spread out layout."
      }
    }
  }
}`,...(ye=(Ce=A.parameters)==null?void 0:Ce.docs)==null?void 0:ye.source}}};var Ae,Se,Te;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  name: "Custom Zoom Levels",
  args: {
    nodes: generateNodes(8),
    links: generateLinks(8),
    minZoom: 0.2,
    maxZoom: 8,
    zoomLevel: 1.5
  },
  parameters: {
    docs: {
      description: {
        story: "Custom zoom levels with extended range and initial zoom level."
      }
    }
  }
}`,...(Te=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:Te.source}}};var we,fe,Re;T.parameters={...T.parameters,docs:{...(we=T.parameters)==null?void 0:we.docs,source:{originalSource:`{
  name: "Responsive (No Fixed Dimensions)",
  args: {
    nodes: generateNodes(10),
    links: generateLinks(10)
    // No width/height specified - will be responsive
  },
  parameters: {
    docs: {
      description: {
        story: "Example without fixed width/height - the component will adapt to its container size."
      }
    }
  }
}`,...(Re=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:Re.source}}};var Ne,ve,Le;w.parameters={...w.parameters,docs:{...(Ne=w.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: "Different Link Types",
  args: {
    nodes: [{
      id: "1",
      name: "Node 1",
      shape: "circle",
      style: {
        backgroundColor: "#3498db"
      }
    }, {
      id: "2",
      name: "Node 2",
      shape: "circle",
      style: {
        backgroundColor: "#e74c3c"
      }
    }, {
      id: "3",
      name: "Node 3",
      shape: "circle",
      style: {
        backgroundColor: "#27ae60"
      }
    }, {
      id: "4",
      name: "Node 4",
      shape: "circle",
      style: {
        backgroundColor: "#f39c12"
      }
    }],
    links: [{
      source: "1",
      target: "2",
      label: "Solid",
      style: {
        linkType: "solid",
        linkColor: "#3498db",
        linkWidth: 2
      }
    }, {
      source: "2",
      target: "3",
      label: "Dashed",
      style: {
        linkType: "dashed",
        linkColor: "#e74c3c",
        linkWidth: 3
      }
    }, {
      source: "3",
      target: "4",
      label: "Thick",
      style: {
        linkType: "solid",
        linkColor: "#27ae60",
        linkWidth: 6
      }
    }, {
      source: "1",
      target: "4",
      label: "Curved",
      shape: "curved",
      style: {
        linkType: "solid",
        linkColor: "#9b59b6",
        linkWidth: 2
      }
    }]
  }
}`,...(Le=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:Le.source}}};var De,_e,xe;f.parameters={...f.parameters,docs:{...(De=f.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: "Minimal Setup",
  args: {
    nodes: [{
      id: "A",
      name: "A"
    }, {
      id: "B",
      name: "B"
    }, {
      id: "C",
      name: "C"
    }],
    links: [{
      source: "A",
      target: "B"
    }, {
      source: "B",
      target: "C"
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal example showing the simplest possible configuration with just IDs and names."
      }
    }
  }
}`,...(xe=(_e=f.parameters)==null?void 0:_e.docs)==null?void 0:xe.source}}};const Ue=["Default","SimpleNetwork","DarkTheme","LightTheme","NodeShapes","CustomStyling","LargeNetwork","MediumNetwork","WithoutMinimap","ZoomDisabled","DragDisabled","StaticLayout","NetworkTopology","WithImages","InteractiveCallbacks","CustomSimulation","ZoomLevels","ResponsiveLayout","CustomLinkTypes","MinimalExample"];export{w as CustomLinkTypes,A as CustomSimulation,d as CustomStyling,l as DarkTheme,s as Default,h as DragDisabled,y as InteractiveCallbacks,g as LargeNetwork,i as LightTheme,m as MediumNetwork,f as MinimalExample,k as NetworkTopology,c as NodeShapes,T as ResponsiveLayout,t as SimpleNetwork,b as StaticLayout,C as WithImages,u as WithoutMinimap,p as ZoomDisabled,S as ZoomLevels,Ue as __namedExportsOrder,He as default};
