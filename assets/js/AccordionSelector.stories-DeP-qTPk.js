import{j as e}from"./jsx-runtime-DdxpLdx6.js";import{r as g}from"./index-Bk7LAl9r.js";import{A as B,D as V,U as Q}from"./AccordionSelector-B6bLdELQ.js";import{S as q,F as X}from"./settings-C6X2QPx7.js";import{c as a}from"./createLucideIcon-DO4rnCdN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./utils-CvxHGwbR.js";import"./checkbox-CMmbhn_I.js";import"./index-BGsY1BpV.js";import"./index-MZe4P6nS.js";import"./index-D-huZkrT.js";import"./check-IdjsCUsE.js";import"./chevron-down-BfzRN9Ux.js";/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],ee=a("bell",Y);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]],ae=a("chart-no-axes-column-increasing",ne);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],le=a("globe",te);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],J=a("lock",ie);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],se=a("shield",oe);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],$=a("zap",re),Ne={title:"Interactive/Accordion Selector",component:B,tags:["autodocs"],parameters:{docs:{description:{component:"A highly customizable accordion-based selector component with TypeScript support, search functionality, and flexible rendering options."}}},argTypes:{allowMultipleExpanded:{control:"boolean",description:"Allow multiple accordion items to be expanded simultaneously"},allowMultipleSelection:{control:"boolean",description:"Allow multiple items to be selected"},searchable:{control:"boolean",description:"Enable search functionality"},clearSelectionOnGroupChange:{control:"boolean",description:"Clear selections from other groups when selecting items"}}},t=[{id:"database",label:"Database Tables",icon:e.jsx(V,{className:"size-4 text-blue-500"}),content:[{id:"users",label:"Users Table",metadata:{description:"Manage user accounts and profiles"}},{id:"products",label:"Products Table",metadata:{description:"Product catalog and inventory"}},{id:"orders",label:"Orders Table",metadata:{description:"Customer orders and transactions"}},{id:"analytics",label:"Analytics Data",metadata:{description:"Usage statistics and metrics"}}]},{id:"permissions",label:"User Permissions",icon:e.jsx(Q,{className:"size-4 text-green-500"}),content:[{id:"read",label:"Read Access"},{id:"write",label:"Write Access"},{id:"admin",label:"Admin Access"},{id:"delete",label:"Delete Access",disabled:!0}]},{id:"settings",label:"System Settings",icon:e.jsx(q,{className:"size-4 text-purple-500"}),content:[{id:"notifications",label:"Email Notifications"},{id:"security",label:"Security Settings"},{id:"integrations",label:"API Integrations"}]}],l={args:{groups:t,onSelectionChange:(n,u)=>{console.log("Selection changed:",n),console.log("Metadata:",u)}}},i={render:n=>{const[u,H]=g.useState({database_users:!0,permissions_read:!0}),[K,Z]=g.useState(["database"]);return e.jsx(B,{...n,selectedItems:u,onSelectionChange:m=>H(m),expandedItems:K,onExpandedChange:m=>Z(m)})},args:{groups:t}},o={args:{groups:t,allowMultipleSelection:!1,onSelectionChange:n=>console.log("Single selection:",n)}},s={args:{groups:[...t,{id:"advanced",label:"Advanced Features",icon:e.jsx($,{className:"size-4 text-yellow-500"}),content:[{id:"automation",label:"Automation Rules"},{id:"webhooks",label:"Webhook Configuration"},{id:"api",label:"API Management"},{id:"logs",label:"System Logs"}]}],searchable:!0,searchPlaceholder:"Search features...",onSearch:n=>console.log("Search query:",n)}},r={args:{groups:t,styles:{wrapper:"border-2 border-blue-200 rounded-xl bg-blue-50",accordionItem:"border-b border-blue-200 last:border-b-0",accordionTrigger:"px-6 py-4 hover:bg-blue-100",accordionContent:"px-6 py-3 bg-white",checkboxItem:"p-3 hover:bg-blue-50 rounded-lg mx-2 my-1",checkbox:"border-blue-300 text-blue-600",label:"text-blue-900 font-medium"}}},c={args:{groups:[{id:"dashboard",label:"Dashboard Widgets",icon:e.jsx(ae,{className:"size-4 text-indigo-500"}),content:e.jsx("div",{className:"space-y-2",children:e.jsxs("div",{className:"rounded-lg bg-gray-50 p-3",children:[e.jsx("h4",{className:"font-medium text-gray-900",children:"Custom Widget"}),e.jsx("p",{className:"text-sm text-gray-600",children:"This is a custom content area"}),e.jsx("button",{className:"mt-2 rounded bg-blue-500 px-3 py-1 text-sm text-white",children:"Configure"})]})})},...t]}},d={args:{groups:[{id:"countries",label:"Countries",icon:e.jsx(le,{className:"size-4 text-green-500"}),content:[{id:"us",label:"United States"},{id:"uk",label:"United Kingdom"},{id:"ca",label:"Canada"},{id:"de",label:"Germany"},{id:"fr",label:"France"},{id:"jp",label:"Japan"},{id:"au",label:"Australia"},{id:"br",label:"Brazil"},{id:"in",label:"India"},{id:"cn",label:"China"},{id:"ru",label:"Russia"},{id:"mx",label:"Mexico"},{id:"es",label:"Spain"},{id:"it",label:"Italy"},{id:"nl",label:"Netherlands"}]},{id:"languages",label:"Programming Languages",icon:e.jsx(X,{className:"size-4 text-orange-500"}),content:[{id:"js",label:"JavaScript"},{id:"ts",label:"TypeScript"},{id:"py",label:"Python"},{id:"java",label:"Java"},{id:"cs",label:"C#"},{id:"cpp",label:"C++"},{id:"go",label:"Go"},{id:"rust",label:"Rust"},{id:"php",label:"PHP"},{id:"ruby",label:"Ruby"},{id:"swift",label:"Swift"},{id:"kotlin",label:"Kotlin"}]}],searchable:!0,allowMultipleExpanded:!0,defaultExpanded:["countries"]}},b={args:{groups:[{id:"security",label:"Security Policies",icon:e.jsx(se,{className:"size-4 text-red-500"}),content:[{id:"mfa",label:"Multi-Factor Authentication"},{id:"sso",label:"Single Sign-On"},{id:"encryption",label:"Data Encryption"},{id:"audit",label:"Audit Logging"},{id:"compliance",label:"Compliance Monitoring"}]},{id:"notifications",label:"Notification Settings",icon:e.jsx(ee,{className:"size-4 text-blue-500"}),content:[{id:"email",label:"Email Alerts"},{id:"sms",label:"SMS Notifications"},{id:"push",label:"Push Notifications"},{id:"webhook",label:"Webhook Notifications"},{id:"slack",label:"Slack Integration"}]},{id:"privacy",label:"Privacy Controls",icon:e.jsx(J,{className:"size-4 text-gray-500"}),content:[{id:"gdpr",label:"GDPR Compliance"},{id:"ccpa",label:"CCPA Compliance"},{id:"data-retention",label:"Data Retention"},{id:"anonymization",label:"Data Anonymization"}]},{id:"integrations",label:"Third-party Integrations",icon:e.jsx($,{className:"size-4 text-purple-500"}),content:[{id:"salesforce",label:"Salesforce CRM"},{id:"hubspot",label:"HubSpot"},{id:"mailchimp",label:"Mailchimp"},{id:"stripe",label:"Stripe Payments"},{id:"google-analytics",label:"Google Analytics"}]}],searchable:!0,allowMultipleExpanded:!0,clearSelectionOnGroupChange:!1,ariaLabel:"Enterprise Configuration Settings",styles:{wrapper:"border border-gray-300 rounded-lg shadow-sm",accordionTrigger:"px-4 py-3 hover:bg-gray-50",checkboxItem:"px-3 py-2 hover:bg-gray-50 rounded"}}},p={args:{groups:[{id:"features",label:"Available Features",icon:e.jsx(q,{className:"size-4 text-blue-500"}),content:[{id:"basic",label:"Basic Features"},{id:"advanced",label:"Advanced Features",disabled:!0},{id:"premium",label:"Premium Features",disabled:!0}]},{id:"disabled-group",label:"Unavailable Options",icon:e.jsx(J,{className:"size-4 text-gray-400"}),disabled:!0,content:[{id:"option1",label:"Option 1"},{id:"option2",label:"Option 2"}]}]}};var h,x,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    groups: sampleGroups,
    onSelectionChange: (selection, metadata) => {
      console.log("Selection changed:", selection);
      console.log("Metadata:", metadata);
    }
  }
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,C,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const [selection, setSelection] = useState<SelectionState>({
      database_users: true,
      permissions_read: true
    });
    const [expanded, setExpanded] = useState<string[]>(["database"]);
    return <AccordionSelector {...args} selectedItems={selection} onSelectionChange={newSelection => setSelection(newSelection)} expandedItems={expanded} onExpandedChange={newExpanded => setExpanded(newExpanded)} />;
  },
  args: {
    groups: sampleGroups
  }
}`,...(f=(C=i.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var N,v,A;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    groups: sampleGroups,
    allowMultipleSelection: false,
    onSelectionChange: selection => console.log("Single selection:", selection)
  }
}`,...(A=(v=o.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var w,k,z;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    groups: [...sampleGroups, {
      id: "advanced",
      label: "Advanced Features",
      icon: <Zap className="size-4 text-yellow-500" />,
      content: [{
        id: "automation",
        label: "Automation Rules"
      }, {
        id: "webhooks",
        label: "Webhook Configuration"
      }, {
        id: "api",
        label: "API Management"
      }, {
        id: "logs",
        label: "System Logs"
      }]
    }],
    searchable: true,
    searchPlaceholder: "Search features...",
    onSearch: query => console.log("Search query:", query)
  }
}`,...(z=(k=s.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var M,P,j;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    groups: sampleGroups,
    styles: {
      wrapper: "border-2 border-blue-200 rounded-xl bg-blue-50",
      accordionItem: "border-b border-blue-200 last:border-b-0",
      accordionTrigger: "px-6 py-4 hover:bg-blue-100",
      accordionContent: "px-6 py-3 bg-white",
      checkboxItem: "p-3 hover:bg-blue-50 rounded-lg mx-2 my-1",
      checkbox: "border-blue-300 text-blue-600",
      label: "text-blue-900 font-medium"
    }
  }
}`,...(j=(P=r.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var E,I,D;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    groups: [{
      id: "dashboard",
      label: "Dashboard Widgets",
      icon: <BarChart className="size-4 text-indigo-500" />,
      content: <div className="space-y-2">
            <div className="rounded-lg bg-gray-50 p-3">
              <h4 className="font-medium text-gray-900">Custom Widget</h4>
              <p className="text-sm text-gray-600">
                This is a custom content area
              </p>
              <button className="mt-2 rounded bg-blue-500 px-3 py-1 text-sm text-white">
                Configure
              </button>
            </div>
          </div>
    }, ...sampleGroups]
  }
}`,...(D=(I=c.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var G,T,_;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    groups: [{
      id: "countries",
      label: "Countries",
      icon: <Globe className="size-4 text-green-500" />,
      content: [{
        id: "us",
        label: "United States"
      }, {
        id: "uk",
        label: "United Kingdom"
      }, {
        id: "ca",
        label: "Canada"
      }, {
        id: "de",
        label: "Germany"
      }, {
        id: "fr",
        label: "France"
      }, {
        id: "jp",
        label: "Japan"
      }, {
        id: "au",
        label: "Australia"
      }, {
        id: "br",
        label: "Brazil"
      }, {
        id: "in",
        label: "India"
      }, {
        id: "cn",
        label: "China"
      }, {
        id: "ru",
        label: "Russia"
      }, {
        id: "mx",
        label: "Mexico"
      }, {
        id: "es",
        label: "Spain"
      }, {
        id: "it",
        label: "Italy"
      }, {
        id: "nl",
        label: "Netherlands"
      }]
    }, {
      id: "languages",
      label: "Programming Languages",
      icon: <FileText className="size-4 text-orange-500" />,
      content: [{
        id: "js",
        label: "JavaScript"
      }, {
        id: "ts",
        label: "TypeScript"
      }, {
        id: "py",
        label: "Python"
      }, {
        id: "java",
        label: "Java"
      }, {
        id: "cs",
        label: "C#"
      }, {
        id: "cpp",
        label: "C++"
      }, {
        id: "go",
        label: "Go"
      }, {
        id: "rust",
        label: "Rust"
      }, {
        id: "php",
        label: "PHP"
      }, {
        id: "ruby",
        label: "Ruby"
      }, {
        id: "swift",
        label: "Swift"
      }, {
        id: "kotlin",
        label: "Kotlin"
      }]
    }],
    searchable: true,
    allowMultipleExpanded: true,
    defaultExpanded: ["countries"]
  }
}`,...(_=(T=d.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var F,R,L;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    groups: [{
      id: "security",
      label: "Security Policies",
      icon: <Shield className="size-4 text-red-500" />,
      content: [{
        id: "mfa",
        label: "Multi-Factor Authentication"
      }, {
        id: "sso",
        label: "Single Sign-On"
      }, {
        id: "encryption",
        label: "Data Encryption"
      }, {
        id: "audit",
        label: "Audit Logging"
      }, {
        id: "compliance",
        label: "Compliance Monitoring"
      }]
    }, {
      id: "notifications",
      label: "Notification Settings",
      icon: <Bell className="size-4 text-blue-500" />,
      content: [{
        id: "email",
        label: "Email Alerts"
      }, {
        id: "sms",
        label: "SMS Notifications"
      }, {
        id: "push",
        label: "Push Notifications"
      }, {
        id: "webhook",
        label: "Webhook Notifications"
      }, {
        id: "slack",
        label: "Slack Integration"
      }]
    }, {
      id: "privacy",
      label: "Privacy Controls",
      icon: <Lock className="size-4 text-gray-500" />,
      content: [{
        id: "gdpr",
        label: "GDPR Compliance"
      }, {
        id: "ccpa",
        label: "CCPA Compliance"
      }, {
        id: "data-retention",
        label: "Data Retention"
      }, {
        id: "anonymization",
        label: "Data Anonymization"
      }]
    }, {
      id: "integrations",
      label: "Third-party Integrations",
      icon: <Zap className="size-4 text-purple-500" />,
      content: [{
        id: "salesforce",
        label: "Salesforce CRM"
      }, {
        id: "hubspot",
        label: "HubSpot"
      }, {
        id: "mailchimp",
        label: "Mailchimp"
      }, {
        id: "stripe",
        label: "Stripe Payments"
      }, {
        id: "google-analytics",
        label: "Google Analytics"
      }]
    }],
    searchable: true,
    allowMultipleExpanded: true,
    clearSelectionOnGroupChange: false,
    ariaLabel: "Enterprise Configuration Settings",
    styles: {
      wrapper: "border border-gray-300 rounded-lg shadow-sm",
      accordionTrigger: "px-4 py-3 hover:bg-gray-50",
      checkboxItem: "px-3 py-2 hover:bg-gray-50 rounded"
    }
  }
}`,...(L=(R=b.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var O,W,U;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    groups: [{
      id: "features",
      label: "Available Features",
      icon: <Settings className="size-4 text-blue-500" />,
      content: [{
        id: "basic",
        label: "Basic Features"
      }, {
        id: "advanced",
        label: "Advanced Features",
        disabled: true
      }, {
        id: "premium",
        label: "Premium Features",
        disabled: true
      }]
    }, {
      id: "disabled-group",
      label: "Unavailable Options",
      icon: <Lock className="size-4 text-gray-400" />,
      disabled: true,
      content: [{
        id: "option1",
        label: "Option 1"
      }, {
        id: "option2",
        label: "Option 2"
      }]
    }]
  }
}`,...(U=(W=p.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};const ve=["Default","Controlled","SingleSelection","WithSearch","CustomStyling","CustomContent","LargeDataset","EnterpriseConfig","WithDisabledItems"];export{i as Controlled,c as CustomContent,r as CustomStyling,l as Default,b as EnterpriseConfig,d as LargeDataset,o as SingleSelection,p as WithDisabledItems,s as WithSearch,ve as __namedExportsOrder,Ne as default};
