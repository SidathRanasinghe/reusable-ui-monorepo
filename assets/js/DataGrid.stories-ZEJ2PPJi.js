import{j as e}from"./jsx-runtime-DdxpLdx6.js";import{a}from"./index-B-lxVbXh.js";import{D as pe,g as de,a as ge}from"./DataGrid-WIBvEXJi.js";import{c as w}from"./createLucideIcon-DO4rnCdN.js";import{S as me}from"./settings-C6X2QPx7.js";import"./index-Bk7LAl9r.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./v4-CtRu48qb.js";import"./utils-CvxHGwbR.js";import"./check-IdjsCUsE.js";import"./chevron-right-BAKq19RS.js";/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],he=w("eye",be);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],S=w("plus",ye);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],fe=w("square-pen",xe);/**
 * @license lucide-react v0.516.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Se=w("trash-2",we),r=de(100),Ce=Array.from({length:50},(t,o)=>({id:o+1,name:`Product ${o+1}`,category:["Electronics","Clothing","Books","Home"][Math.floor(Math.random()*4)],price:Math.floor(Math.random()*500)+10,stock:Math.floor(Math.random()*100),createdAt:new Date(Date.now()-Math.random()*1e3*60*60*24*365).toISOString().split("T")[0],isAvailable:Math.random()>.2})),n=[{key:"name",title:"Full Name",dataIndex:"name",dataType:"string",sortable:!0,filterable:!0,width:200,render:(t,o)=>e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{className:"shrink-0",children:e.jsx("div",{className:"flex size-8 items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white",children:t.split(" ").map(ue=>ue[0]).join("").toUpperCase()})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-gray-900",children:t}),e.jsx("div",{className:"text-sm text-gray-500",children:o.email})]})]})},{key:"department",title:"Department",dataIndex:"department",dataType:"string",sortable:!0,filterable:!0,width:120,render:t=>e.jsx("span",{className:`inline-flex rounded-full px-2 py-1 text-xs font-medium ${t==="Engineering"?"bg-blue-100 text-blue-800":t==="Marketing"?"bg-green-100 text-green-800":t==="Sales"?"bg-yellow-100 text-yellow-800":t==="HR"?"bg-purple-100 text-purple-800":"bg-gray-100 text-gray-800"}`,children:t})},{key:"salary",title:"Salary",dataIndex:"salary",dataType:"number",sortable:!0,align:"right",width:120,render:t=>e.jsxs("span",{className:"font-medium text-gray-900",children:["$",t.toLocaleString()]})},{key:"hireDate",title:"Hire Date",dataIndex:"hireDate",dataType:"date",sortable:!0,width:120,render:t=>new Date(t).toLocaleDateString()},{key:"status",title:"Status",dataIndex:"status",dataType:"string",sortable:!0,filterable:!0,width:100,render:t=>e.jsx("span",{className:`inline-flex rounded-full px-2 py-1 text-xs font-medium ${t==="Active"?"bg-green-100 text-green-800":t==="Inactive"?"bg-red-100 text-red-800":"bg-yellow-100 text-yellow-800"}`,children:t})},{key:"rating",title:"Rating",dataIndex:"rating",dataType:"number",sortable:!0,align:"center",width:100,render:t=>e.jsxs("div",{className:"flex items-center justify-center space-x-1",children:[e.jsx("span",{className:"text-sm font-medium",children:t}),e.jsx("span",{className:"text-yellow-400",children:"★"})]})},{key:"actions",title:"Actions",dataIndex:"actions",sortable:!1,align:"center",width:120,render:(t,o)=>e.jsxs("div",{className:"flex items-center justify-center space-x-2",children:[e.jsx("button",{onClick:()=>a("view")(o),className:"rounded p-1 text-gray-400 hover:text-blue-600",title:"View",children:e.jsx(he,{className:"size-4"})}),e.jsx("button",{onClick:()=>a("edit")(o),className:"rounded p-1 text-gray-400 hover:text-green-600",title:"Edit",children:e.jsx(fe,{className:"size-4"})}),e.jsx("button",{onClick:()=>a("delete")(o),className:"rounded p-1 text-gray-400 hover:text-red-600",title:"Delete",children:e.jsx(Se,{className:"size-4"})})]})}],ke=[{key:"name",title:"Product Name",dataIndex:"name",dataType:"string",sortable:!0,filterable:!0,width:200},{key:"category",title:"Category",dataIndex:"category",dataType:"string",sortable:!0,filterable:!0,width:120},{key:"price",title:"Price",dataIndex:"price",dataType:"number",sortable:!0,align:"right",width:100,render:t=>`$${t.toFixed(2)}`},{key:"stock",title:"Stock",dataIndex:"stock",dataType:"number",sortable:!0,align:"center",width:80,render:t=>e.jsx("span",{className:`font-medium ${t<10?"text-red-600":t<50?"text-yellow-600":"text-green-600"}`,children:t})},{key:"isAvailable",title:"Available",dataIndex:"isAvailable",dataType:"boolean",sortable:!0,align:"center",width:100,render:t=>e.jsx("span",{className:`inline-flex rounded-full px-2 py-1 text-xs font-medium ${t?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}`,children:t?"Yes":"No"})}],Me={title:"Data Visualization/Data Grid",component:pe,parameters:{layout:"fullscreen",docs:{description:{component:"A powerful and flexible data grid component with sorting, pagination, selection, and export features."}}},tags:["autodocs"],argTypes:{dataSource:{description:"Array of data objects to display in the grid",control:!1},columns:{description:"Column configuration array",control:!1},loading:{description:"Loading state configuration",control:{type:"boolean"}},pagination:{description:"Pagination configuration",control:{type:"object"}},selection:{description:"Row selection configuration",control:{type:"object"}},sortable:{description:"Enable/disable sorting functionality",control:{type:"boolean"}},size:{description:"Table size variant",control:{type:"select"},options:["small","medium","large"]},striped:{description:"Enable striped rows",control:{type:"boolean"}},bordered:{description:"Enable bordered table",control:{type:"boolean"}},hoverable:{description:"Enable row hover effects",control:{type:"boolean"}}}},s={args:{dataSource:r.slice(0,10),columns:n,title:"Employee Directory",subtitle:"Manage your team members",description:"View and manage employee information with comprehensive details."}},i={args:{dataSource:r,columns:n,title:"Employee Directory",subtitle:"Paginated employee list",pagination:{enabled:!0,pageSize:10,showSizeChanger:!0,showQuickJumper:!0,showTotal:!0,position:"bottom",align:"right"}}},l={args:{dataSource:r.slice(0,20),columns:n,title:"Employee Selection",subtitle:"Select multiple employees",selection:{type:"checkbox",selectedRowKeys:[1,3,5],onChange:a("selection-changed"),getCheckboxProps:t=>({disabled:t.status==="Inactive"})},pagination:{enabled:!0,pageSize:10}}},c={args:{dataSource:r.slice(0,15),columns:n,title:"Employee Selection (Radio)",subtitle:"Select single employee",selection:{type:"radio",selectedRowKeys:[2],onChange:a("radio-selection-changed")}}},d={args:{dataSource:[],columns:n,title:"Loading Data",subtitle:"Please wait while we fetch the data",loading:{loading:!0,rows:8}}},m={args:{dataSource:[],columns:n,title:"No Data Available",subtitle:"The table is empty",empty:{description:"No employees found. Try adjusting your search criteria.",component:e.jsxs("div",{className:"flex flex-col items-center justify-center py-12",children:[e.jsx("div",{className:"mb-4 rounded-lg bg-gray-100 p-4",children:e.jsx(S,{className:"size-8 text-gray-400"})}),e.jsx("p",{className:"mb-1 text-sm font-medium text-gray-900",children:"No employees found"}),e.jsx("p",{className:"mb-4 text-sm text-gray-500",children:"Get started by adding your first employee"}),e.jsx("button",{className:"rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700",onClick:a("add-employee"),children:"Add Employee"})]})}}},u={args:{dataSource:r.slice(0,20),columns:n,title:"Employee Export Demo",subtitle:"Export data in multiple formats",export:{enabled:!0,formats:["csv","excel"],filename:"employees",onExport:a("export")},pagination:{enabled:!0,pageSize:10}}},p={args:{dataSource:r.slice(0,15),columns:n,title:"Customized DataGrid",subtitle:"With custom styling and behavior",description:"This example shows various customization options.",size:"large",striped:!0,bordered:!0,hoverable:!0,stickyHeader:!0,maxHeight:"600px",headerActions:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("button",{className:"rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",onClick:a("settings"),children:[e.jsx(me,{className:"mr-2 size-4"}),"Settings"]}),e.jsxs("button",{className:"rounded-md border border-blue-600 bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700",onClick:a("add-new"),children:[e.jsx(S,{className:"mr-2 size-4"}),"Add New"]})]}),footerActions:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"text-sm text-gray-500",children:["Last updated: ",new Date().toLocaleString()]}),e.jsx("button",{className:"px-3 py-2 text-sm text-gray-600 hover:text-gray-900",onClick:a("refresh"),children:"Refresh Data"})]}),pagination:{enabled:!0,pageSize:5,showSizeChanger:!0,position:"both",align:"between"},onRowClick:a("row-clicked"),onRowDoubleClick:a("row-double-clicked"),onRowHover:a("row-hovered")}},g={args:{dataSource:Ce,columns:ke,title:"Product Inventory",subtitle:"Manage your product catalog",description:"View and manage product information including pricing and availability.",pagination:{enabled:!0,pageSize:15,showSizeChanger:!0,showTotal:(t,o)=>`${o[0]}-${o[1]} of ${t} products`},selection:{type:"checkbox",onChange:a("product-selection-changed")},defaultSort:{key:"name",direction:"asc"},onSortChange:a("sort-changed")}},b={args:{dataSource:r.slice(0,25),columns:n.filter(t=>["name","department","status","actions"].includes(t.key)),title:"Compact View",subtitle:"Space-efficient layout",size:"small",compact:!0,striped:!0,pagination:{enabled:!0,pageSize:10,showSizeChanger:!1,showQuickJumper:!1}}},h={args:{dataSource:r.slice(0,15),columns:n.map(t=>({...t,filterable:!1})),title:"Sortable Columns",subtitle:"Click column headers to sort",sortable:!0,defaultSort:{key:"salary",direction:"desc"},onSortChange:a("sort-changed")}},y={args:{dataSource:r.slice(0,12),columns:n,title:"Custom Theme",subtitle:"Dark theme example",theme:{primaryColor:"#3b82f6",secondaryColor:"#1f2937",textColor:"#f9fafb",borderColor:"#374151",borderRadius:"8px",fontFamily:"Inter, sans-serif"},className:"bg-gray-900 text-white",styles:{container:{backgroundColor:"#111827",border:"1px solid #374151"},header:{backgroundColor:"#1f2937",borderBottom:"1px solid #374151"},table:{backgroundColor:"#111827"}},pagination:{enabled:!0,pageSize:6}}},x={args:{dataSource:r.slice(0,30),columns:n,title:"Interactive Demo",subtitle:"Test all features",description:"This demo includes all interactive features for comprehensive testing.",pagination:{enabled:!0,pageSize:8,showSizeChanger:!0,showQuickJumper:!0,showTotal:!0,position:"both",align:"between"},selection:{type:"checkbox",onChange:a("selection-changed"),getCheckboxProps:t=>({disabled:t.status==="Inactive"})},export:{enabled:!0,formats:["csv","excel"],filename:"interactive-demo",onExport:a("export")},headerActions:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsxs("button",{className:"flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",onClick:a("filter"),children:[e.jsx(me,{className:"mr-2 size-4"}),"Filter"]}),e.jsxs("button",{className:"flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50",onClick:a("export"),children:[e.jsx(ge,{className:"mr-2 size-4"}),"Export"]}),e.jsxs("button",{className:"flex items-center rounded-md border border-blue-600 bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700",onClick:a("add-new"),children:[e.jsx(S,{className:"mr-2 size-4"}),"Add New"]})]}),sortable:!0,striped:!1,hoverable:!0,onRowClick:a("row-clicked"),onRowDoubleClick:a("row-double-clicked"),onSortChange:a("sort-changed"),onDataChange:a("data-changed")}},f={args:{dataSource:de(1e3),columns:n,title:"Large Dataset",subtitle:"1000 records for performance testing",pagination:{enabled:!0,pageSize:50,showSizeChanger:!0,pageSizeOptions:[25,50,100,200],showTotal:!0},virtual:!0,height:"600px"}};var C,k,v;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    dataSource: employeeData.slice(0, 10),
    columns: employeeColumns,
    title: "Employee Directory",
    subtitle: "Manage your team members",
    description: "View and manage employee information with comprehensive details."
  }
}`,...(v=(k=s.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var N,D,z;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    dataSource: employeeData,
    columns: employeeColumns,
    title: "Employee Directory",
    subtitle: "Paginated employee list",
    pagination: {
      enabled: true,
      pageSize: 10,
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: true,
      position: "bottom",
      align: "right"
    }
  }
}`,...(z=(D=i.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var j,T,E;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    dataSource: employeeData.slice(0, 20),
    columns: employeeColumns,
    title: "Employee Selection",
    subtitle: "Select multiple employees",
    selection: {
      type: "checkbox",
      selectedRowKeys: [1, 3, 5],
      onChange: action("selection-changed"),
      getCheckboxProps: (record: EmployeeData) => ({
        disabled: record.status === "Inactive"
      })
    },
    pagination: {
      enabled: true,
      pageSize: 10
    }
  }
}`,...(E=(T=l.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var I,R,A;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    dataSource: employeeData.slice(0, 15),
    columns: employeeColumns,
    title: "Employee Selection (Radio)",
    subtitle: "Select single employee",
    selection: {
      type: "radio",
      selectedRowKeys: [2],
      onChange: action("radio-selection-changed")
    }
  }
}`,...(A=(R=c.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var P,M,$;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    dataSource: [],
    columns: employeeColumns,
    title: "Loading Data",
    subtitle: "Please wait while we fetch the data",
    loading: {
      loading: true,
      rows: 8
    }
  }
}`,...($=(M=d.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var L,_,H;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    dataSource: [],
    columns: employeeColumns,
    title: "No Data Available",
    subtitle: "The table is empty",
    empty: {
      description: "No employees found. Try adjusting your search criteria.",
      component: <div className="flex flex-col items-center justify-center py-12">
          <div className="mb-4 rounded-lg bg-gray-100 p-4">
            <Plus className="size-8 text-gray-400" />
          </div>
          <p className="mb-1 text-sm font-medium text-gray-900">
            No employees found
          </p>
          <p className="mb-4 text-sm text-gray-500">
            Get started by adding your first employee
          </p>
          <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700" onClick={action("add-employee")}>
            Add Employee
          </button>
        </div>
    }
  }
}`,...(H=(_=m.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var V,W,F;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    dataSource: employeeData.slice(0, 20),
    columns: employeeColumns,
    title: "Employee Export Demo",
    subtitle: "Export data in multiple formats",
    export: {
      enabled: true,
      formats: ["csv", "excel"],
      filename: "employees",
      onExport: action("export")
    },
    pagination: {
      enabled: true,
      pageSize: 10
    }
  }
}`,...(F=(W=u.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var G,J,O;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    dataSource: employeeData.slice(0, 15),
    columns: employeeColumns,
    title: "Customized DataGrid",
    subtitle: "With custom styling and behavior",
    description: "This example shows various customization options.",
    size: "large",
    striped: true,
    bordered: true,
    hoverable: true,
    stickyHeader: true,
    maxHeight: "600px",
    headerActions: <div className="flex items-center space-x-2">
        <button className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" onClick={action("settings")}>
          <Settings className="mr-2 size-4" />
          Settings
        </button>
        <button className="rounded-md border border-blue-600 bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700" onClick={action("add-new")}>
          <Plus className="mr-2 size-4" />
          Add New
        </button>
      </div>,
    footerActions: <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleString()}
        </div>
        <button className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900" onClick={action("refresh")}>
          Refresh Data
        </button>
      </div>,
    pagination: {
      enabled: true,
      pageSize: 5,
      showSizeChanger: true,
      position: "both",
      align: "between"
    },
    onRowClick: action("row-clicked"),
    onRowDoubleClick: action("row-double-clicked"),
    onRowHover: action("row-hovered")
  }
}`,...(O=(J=p.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var Q,K,B;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    dataSource: productData,
    columns: productColumns,
    title: "Product Inventory",
    subtitle: "Manage your product catalog",
    description: "View and manage product information including pricing and availability.",
    pagination: {
      enabled: true,
      pageSize: 15,
      showSizeChanger: true,
      showTotal: (total: number, range: [number, number]) => \`\${range[0]}-\${range[1]} of \${total} products\`
    },
    selection: {
      type: "checkbox",
      onChange: action("product-selection-changed")
    },
    defaultSort: {
      key: "name",
      direction: "asc"
    },
    onSortChange: action("sort-changed")
  }
}`,...(B=(K=g.parameters)==null?void 0:K.docs)==null?void 0:B.source}}};var q,U,Y;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    dataSource: employeeData.slice(0, 25),
    columns: employeeColumns.filter(col => ["name", "department", "status", "actions"].includes(col.key as string)),
    title: "Compact View",
    subtitle: "Space-efficient layout",
    size: "small",
    compact: true,
    striped: true,
    pagination: {
      enabled: true,
      pageSize: 10,
      showSizeChanger: false,
      showQuickJumper: false
    }
  }
}`,...(Y=(U=b.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var X,Z,ee;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    dataSource: employeeData.slice(0, 15),
    columns: employeeColumns.map(col => ({
      ...col,
      filterable: false
    })),
    title: "Sortable Columns",
    subtitle: "Click column headers to sort",
    sortable: true,
    defaultSort: {
      key: "salary",
      direction: "desc"
    },
    onSortChange: action("sort-changed")
  }
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    dataSource: employeeData.slice(0, 12),
    columns: employeeColumns,
    title: "Custom Theme",
    subtitle: "Dark theme example",
    theme: {
      primaryColor: "#3b82f6",
      secondaryColor: "#1f2937",
      textColor: "#f9fafb",
      borderColor: "#374151",
      borderRadius: "8px",
      fontFamily: "Inter, sans-serif"
    },
    className: "bg-gray-900 text-white",
    styles: {
      container: {
        backgroundColor: "#111827",
        border: "1px solid #374151"
      },
      header: {
        backgroundColor: "#1f2937",
        borderBottom: "1px solid #374151"
      },
      table: {
        backgroundColor: "#111827"
      }
    },
    pagination: {
      enabled: true,
      pageSize: 6
    }
  }
}`,...(ne=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var oe,re,se;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    dataSource: employeeData.slice(0, 30),
    columns: employeeColumns,
    title: "Interactive Demo",
    subtitle: "Test all features",
    description: "This demo includes all interactive features for comprehensive testing.",
    pagination: {
      enabled: true,
      pageSize: 8,
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: true,
      position: "both",
      align: "between"
    },
    selection: {
      type: "checkbox",
      onChange: action("selection-changed"),
      getCheckboxProps: (record: EmployeeData) => ({
        disabled: record.status === "Inactive"
      })
    },
    export: {
      enabled: true,
      formats: ["csv", "excel"],
      filename: "interactive-demo",
      onExport: action("export")
    },
    headerActions: <div className="flex items-center space-x-2">
        <button className="flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" onClick={action("filter")}>
          <Settings className="mr-2 size-4" />
          Filter
        </button>
        <button className="flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" onClick={action("export")}>
          <Download className="mr-2 size-4" />
          Export
        </button>
        <button className="flex items-center rounded-md border border-blue-600 bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700" onClick={action("add-new")}>
          <Plus className="mr-2 size-4" />
          Add New
        </button>
      </div>,
    sortable: true,
    striped: false,
    hoverable: true,
    onRowClick: action("row-clicked"),
    onRowDoubleClick: action("row-double-clicked"),
    onSortChange: action("sort-changed"),
    onDataChange: action("data-changed")
  }
}`,...(se=(re=x.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,le,ce;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    dataSource: generateSampleData(1000) as EmployeeData[],
    columns: employeeColumns,
    title: "Large Dataset",
    subtitle: "1000 records for performance testing",
    pagination: {
      enabled: true,
      pageSize: 50,
      showSizeChanger: true,
      pageSizeOptions: [25, 50, 100, 200],
      showTotal: true
    },
    virtual: true,
    height: "600px"
  }
}`,...(ce=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};const $e=["Default","WithPagination","WithSelection","WithRadioSelection","Loading","Empty","WithExport","Customized","ProductTable","CompactTable","SortableOnly","CustomTheme","InteractiveDemo","LargeDataset"];export{b as CompactTable,y as CustomTheme,p as Customized,s as Default,m as Empty,x as InteractiveDemo,f as LargeDataset,d as Loading,g as ProductTable,h as SortableOnly,u as WithExport,i as WithPagination,c as WithRadioSelection,l as WithSelection,$e as __namedExportsOrder,Me as default};
