import{j as e}from"./jsx-runtime-DdxpLdx6.js";import{a as I}from"./index-B-lxVbXh.js";import{r as c}from"./index-Bk7LAl9r.js";import{W as P,T as m}from"./WysiwygEditor-BnXgO34z.js";import"./v4-CtRu48qb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./quill.snow-CrofkH0a.js";import"./index-D-huZkrT.js";import"./utils-CvxHGwbR.js";const pr={title:"Interactive/WYSIWYG Editor",component:P,parameters:{layout:"padded",docs:{description:{component:`
## What You See is What You Get Editor

A flexible WYSIWYG editor component built on top of ReactQuill with extensive customization options.

## Features
- **Flexible Toolbar**: Configure with presets or custom toolbar groups
- **Theming**: Comprehensive theme customization
- **Character Counting**: Built-in character counting with limits
- **Accessibility**: Full ARIA support and keyboard navigation
- **Validation**: Error states and helper text
- **Responsive**: Mobile-friendly design
- **TypeScript**: Full TypeScript support with proper types

## Usage
\`\`\`tsx
import { WysiwygEditor } from '@your-org/ui-core';

function MyComponent() {
  const [value, setValue] = useState('');
  
  return (
    <WysiwygEditor
      value={value}
      onChange={setValue}
      placeholder="Start typing..."
    />
  );
}
\`\`\`
        `}}},argTypes:{value:{control:"text",description:"Current HTML content of the editor"},onChange:{action:"changed",description:"Callback when content changes"},onTextChange:{action:"text-changed",description:"Callback with detailed change information"},onSelectionChange:{action:"selection-changed",description:"Callback when text selection changes"},placeholder:{control:"text",description:"Placeholder text when editor is empty"},minHeight:{control:{type:"number",min:100,max:800,step:50},description:"Minimum height of the editor in pixels"},maxHeight:{control:{type:"number",min:200,max:1200,step:50},description:"Maximum height of the editor in pixels"},readOnly:{control:"boolean",description:"Make the editor read-only"},disabled:{control:"boolean",description:"Disable the editor"},showCharCount:{control:"boolean",description:"Show character count"},maxLength:{control:{type:"number",min:50,max:1e4,step:50},description:"Maximum character limit"},error:{control:"boolean",description:"Show error state"},errorMessage:{control:"text",description:"Error message to display"},helperText:{control:"text",description:"Helper text to display"},autoFocus:{control:"boolean",description:"Auto focus the editor on mount"},"aria-label":{control:"text",description:"ARIA label for accessibility"},toolbar:{control:"object",description:"Toolbar configuration"},theme:{control:"object",description:"Theme customization options"}},tags:["autodocs"]},n=r=>{const[i,t]=c.useState(r.value||""),l=c.useCallback(s=>{t(s),I("onChange")(s)},[]),o=c.useCallback((s,h,d)=>{I("onTextChange")(s,h,d)},[]),a=c.useCallback((s,h,d)=>{I("onSelectionChange")(s,h,d)},[]);return e.jsx(P,{...r,value:i,onChange:l,onTextChange:o,onSelectionChange:a})},p={render:r=>e.jsx(n,{...r}),args:{placeholder:"Start typing...",minHeight:200}},g={render:r=>e.jsx(n,{...r}),args:{value:"<h1>Welcome to the Editor</h1><p>This is some <strong>initial content</strong> with <em>formatting</em>.</p><ul><li>List item 1</li><li>List item 2</li></ul>",placeholder:"Start typing...",minHeight:200}},u={render:r=>e.jsx(n,{...r}),args:{value:"<h2>Read-Only Content</h2><p>This content cannot be edited. The toolbar is still visible but disabled.</p><blockquote>This is a blockquote example.</blockquote>",readOnly:!0,placeholder:"This is read-only"}},x={render:r=>e.jsx(n,{...r}),args:{value:"<p>This editor is completely disabled.</p>",disabled:!0,placeholder:"Disabled editor"}},b={render:r=>e.jsx(n,{...r}),args:{placeholder:"Minimal toolbar with basic formatting only",toolbar:{groups:m.minimal},minHeight:150}},f={render:r=>e.jsx(n,{...r}),args:{placeholder:"Standard toolbar with common features",toolbar:{groups:m.standard},minHeight:200}},C={render:r=>e.jsx(n,{...r}),args:{placeholder:"Advanced toolbar with all features",toolbar:{groups:m.advanced},minHeight:250}},y={render:r=>e.jsx(n,{...r}),args:{placeholder:"Editor without toolbar - content only",toolbar:{show:!1},minHeight:150}},T={render:r=>e.jsx(n,{...r}),args:{placeholder:"Custom toolbar configuration",toolbar:{custom:[["bold","italic"],[{list:"ordered"},{list:"bullet"}],["link","image"],["clean"]]},minHeight:200}},v={render:r=>e.jsx(n,{...r}),args:{placeholder:"Compact editor",minHeight:120,toolbar:{groups:m.minimal}}},E={render:r=>e.jsx(n,{...r}),args:{placeholder:"Tall editor with fixed height",minHeight:400,maxHeight:400}},w={render:r=>e.jsx(n,{...r}),args:{placeholder:"Editor with min/max height constraints",minHeight:150,maxHeight:300}},S={render:r=>e.jsx(n,{...r}),args:{placeholder:"Type something to see character count",showCharCount:!0,minHeight:150}},H={render:r=>e.jsx(n,{...r}),args:{placeholder:"This editor has a 200 character limit",showCharCount:!0,maxLength:200,minHeight:150}},k={render:r=>e.jsx(n,{...r}),args:{placeholder:"This editor has an error state",error:!0,errorMessage:"This field is required and cannot be empty.",minHeight:150}},j={render:r=>e.jsx(n,{...r}),args:{placeholder:"Editor with helpful guidance",helperText:"You can use rich text formatting, links, and images in your content.",showCharCount:!0,maxLength:500,minHeight:150}},N={render:r=>e.jsx(n,{...r}),args:{placeholder:"Required field with validation",error:!0,errorMessage:"Content must be at least 10 characters long.",helperText:"Minimum 10 characters required.",showCharCount:!0,maxLength:1e3,minHeight:150}},R={render:r=>e.jsx(n,{...r}),args:{placeholder:"Dark themed editor",theme:{primary:"#60a5fa",borderColor:"#374151",toolbarBg:"#1f2937",editorBg:"#111827",fontFamily:"Inter, sans-serif"},minHeight:200}},L={render:r=>e.jsx(n,{...r}),args:{placeholder:"Colorful themed editor",theme:{primary:"#8b5cf6",borderColor:"#d8b4fe",toolbarBg:"#f3e8ff",editorBg:"#fefbff",borderRadius:"12px",fontFamily:"Georgia, serif",fontSize:"16px"},minHeight:200}},O={render:r=>e.jsx(n,{...r}),args:{placeholder:"Clean, minimal design",theme:{primary:"#000000",borderColor:"#e5e7eb",toolbarBg:"#ffffff",editorBg:"#ffffff",borderRadius:"4px",fontFamily:"system-ui, sans-serif"},toolbar:{groups:m.minimal},minHeight:180}},A={render:()=>{const[r,i]=c.useState("<p>Click the buttons to interact with the editor programmatically.</p>"),t=c.useRef(null),l=()=>{var s;(s=t.current)==null||s.insertText(`

Inserted text via ref!`)},o=()=>{var s;(s=t.current)==null||s.focus()},a=()=>{var d,q;const s=(d=t.current)==null?void 0:d.getHTML(),h=(q=t.current)==null?void 0:q.getText();alert(`HTML: ${s}

Text: ${h}`)};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx("button",{onClick:l,className:"rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600",children:"Insert Text"}),e.jsx("button",{onClick:o,className:"rounded bg-green-500 px-3 py-1 text-sm text-white hover:bg-green-600",children:"Focus Editor"}),e.jsx("button",{onClick:a,className:"rounded bg-purple-500 px-3 py-1 text-sm text-white hover:bg-purple-600",children:"Get Content"})]}),e.jsx(P,{ref:t,value:r,onChange:i,placeholder:"Editor with ref methods",showCharCount:!0,minHeight:200})]})}},M={render:r=>e.jsx(n,{...r}),args:{placeholder:"Accessible editor with ARIA labels","aria-label":"Rich text editor for article content","aria-describedby":"editor-description",helperText:"Use this editor to write your article. All formatting options are keyboard accessible.",showCharCount:!0,maxLength:5e3,minHeight:200}},W={render:r=>e.jsx(n,{...r}),args:{value:`
      <h1>Large Content Example</h1>
      ${Array.from({length:10},(r,i)=>`
        <h2>Section ${i+1}</h2>
        <p>This is a paragraph with <strong>bold text</strong>, <em>italic text</em>, and <u>underlined text</u>. 
        It demonstrates how the editor handles larger amounts of content efficiently.</p>
        <ul>
          <li>List item 1 for section ${i+1}</li>
          <li>List item 2 for section ${i+1}</li>
          <li>List item 3 for section ${i+1}</li>
        </ul>
        <blockquote>This is a blockquote in section ${i+1}. It shows how quoted content appears.</blockquote>
      `).join("")}
    `,showCharCount:!0,minHeight:300,maxHeight:500}},B={render:()=>{const[r,i]=c.useState(""),[t,l]=c.useState({showCharCount:!0,maxLength:1e3,minHeight:200,error:!1,readOnly:!1,disabled:!1,toolbarPreset:"standard"});return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2 lg:grid-cols-4",children:[e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:t.showCharCount,onChange:o=>l(a=>({...a,showCharCount:o.target.checked}))}),e.jsx("span",{className:"text-sm",children:"Show Character Count"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:t.error,onChange:o=>l(a=>({...a,error:o.target.checked}))}),e.jsx("span",{className:"text-sm",children:"Error State"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:t.readOnly,onChange:o=>l(a=>({...a,readOnly:o.target.checked}))}),e.jsx("span",{className:"text-sm",children:"Read Only"})]}),e.jsxs("label",{className:"flex items-center space-x-2",children:[e.jsx("input",{type:"checkbox",checked:t.disabled,onChange:o=>l(a=>({...a,disabled:o.target.checked}))}),e.jsx("span",{className:"text-sm",children:"Disabled"})]}),e.jsxs("label",{className:"flex flex-col space-y-1",children:[e.jsx("span",{className:"text-sm font-medium",children:"Max Length"}),e.jsx("input",{type:"number",value:t.maxLength,onChange:o=>l(a=>({...a,maxLength:Number(o.target.value)})),className:"rounded border px-2 py-1 text-sm",min:"50",max:"5000"})]}),e.jsxs("label",{className:"flex flex-col space-y-1",children:[e.jsx("span",{className:"text-sm font-medium",children:"Min Height"}),e.jsx("input",{type:"number",value:t.minHeight,onChange:o=>l(a=>({...a,minHeight:Number(o.target.value)})),className:"rounded border px-2 py-1 text-sm",min:"100",max:"800"})]}),e.jsxs("label",{className:"flex flex-col space-y-1",children:[e.jsx("span",{className:"text-sm font-medium",children:"Toolbar Preset"}),e.jsxs("select",{value:t.toolbarPreset,onChange:o=>l(a=>({...a,toolbarPreset:o.target.value})),className:"rounded border px-2 py-1 text-sm",children:[e.jsx("option",{value:"minimal",children:"Minimal"}),e.jsx("option",{value:"standard",children:"Standard"}),e.jsx("option",{value:"advanced",children:"Advanced"})]})]})]}),e.jsx(P,{value:r,onChange:i,placeholder:"Interactive playground - configure options above",showCharCount:t.showCharCount,maxLength:t.maxLength,minHeight:t.minHeight,error:t.error,errorMessage:t.error?"This is an example error message":void 0,helperText:"This is an interactive playground. Use the controls above to test different configurations.",readOnly:t.readOnly,disabled:t.disabled,toolbar:{groups:m[t.toolbarPreset]}})]})}};var $,D,F;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Start typing...",
    minHeight: 200
  }
}`,...(F=(D=p.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var _,V,Y;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    value: "<h1>Welcome to the Editor</h1><p>This is some <strong>initial content</strong> with <em>formatting</em>.</p><ul><li>List item 1</li><li>List item 2</li></ul>",
    placeholder: "Start typing...",
    minHeight: 200
  }
}`,...(Y=(V=g.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var G,z,U;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    value: "<h2>Read-Only Content</h2><p>This content cannot be edited. The toolbar is still visible but disabled.</p><blockquote>This is a blockquote example.</blockquote>",
    readOnly: true,
    placeholder: "This is read-only"
  }
}`,...(U=(z=u.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var Q,J,K;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    value: "<p>This editor is completely disabled.</p>",
    disabled: true,
    placeholder: "Disabled editor"
  }
}`,...(K=(J=x.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var X,Z,ee;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Minimal toolbar with basic formatting only",
    toolbar: {
      groups: TOOLBAR_PRESETS.minimal
    },
    minHeight: 150
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,te,ne;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Standard toolbar with common features",
    toolbar: {
      groups: TOOLBAR_PRESETS.standard
    },
    minHeight: 200
  }
}`,...(ne=(te=f.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var oe,ae,se;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Advanced toolbar with all features",
    toolbar: {
      groups: TOOLBAR_PRESETS.advanced
    },
    minHeight: 250
  }
}`,...(se=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ie,le,ce;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Editor without toolbar - content only",
    toolbar: {
      show: false
    },
    minHeight: 150
  }
}`,...(ce=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var de,me,he;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Custom toolbar configuration",
    toolbar: {
      custom: [["bold", "italic"], [{
        list: "ordered"
      }, {
        list: "bullet"
      }], ["link", "image"], ["clean"]]
    },
    minHeight: 200
  }
}`,...(he=(me=T.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var pe,ge,ue;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Compact editor",
    minHeight: 120,
    toolbar: {
      groups: TOOLBAR_PRESETS.minimal
    }
  }
}`,...(ue=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var xe,be,fe;E.parameters={...E.parameters,docs:{...(xe=E.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Tall editor with fixed height",
    minHeight: 400,
    maxHeight: 400
  }
}`,...(fe=(be=E.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var Ce,ye,Te;w.parameters={...w.parameters,docs:{...(Ce=w.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Editor with min/max height constraints",
    minHeight: 150,
    maxHeight: 300
  }
}`,...(Te=(ye=w.parameters)==null?void 0:ye.docs)==null?void 0:Te.source}}};var ve,Ee,we;S.parameters={...S.parameters,docs:{...(ve=S.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Type something to see character count",
    showCharCount: true,
    minHeight: 150
  }
}`,...(we=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:we.source}}};var Se,He,ke;H.parameters={...H.parameters,docs:{...(Se=H.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "This editor has a 200 character limit",
    showCharCount: true,
    maxLength: 200,
    minHeight: 150
  }
}`,...(ke=(He=H.parameters)==null?void 0:He.docs)==null?void 0:ke.source}}};var je,Ne,Re;k.parameters={...k.parameters,docs:{...(je=k.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "This editor has an error state",
    error: true,
    errorMessage: "This field is required and cannot be empty.",
    minHeight: 150
  }
}`,...(Re=(Ne=k.parameters)==null?void 0:Ne.docs)==null?void 0:Re.source}}};var Le,Oe,Ae;j.parameters={...j.parameters,docs:{...(Le=j.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Editor with helpful guidance",
    helperText: "You can use rich text formatting, links, and images in your content.",
    showCharCount: true,
    maxLength: 500,
    minHeight: 150
  }
}`,...(Ae=(Oe=j.parameters)==null?void 0:Oe.docs)==null?void 0:Ae.source}}};var Me,We,Be;N.parameters={...N.parameters,docs:{...(Me=N.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Required field with validation",
    error: true,
    errorMessage: "Content must be at least 10 characters long.",
    helperText: "Minimum 10 characters required.",
    showCharCount: true,
    maxLength: 1000,
    minHeight: 150
  }
}`,...(Be=(We=N.parameters)==null?void 0:We.docs)==null?void 0:Be.source}}};var Pe,Ie,qe;R.parameters={...R.parameters,docs:{...(Pe=R.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Dark themed editor",
    theme: {
      primary: "#60a5fa",
      borderColor: "#374151",
      toolbarBg: "#1f2937",
      editorBg: "#111827",
      fontFamily: "Inter, sans-serif"
    },
    minHeight: 200
  }
}`,...(qe=(Ie=R.parameters)==null?void 0:Ie.docs)==null?void 0:qe.source}}};var $e,De,Fe;L.parameters={...L.parameters,docs:{...($e=L.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Colorful themed editor",
    theme: {
      primary: "#8b5cf6",
      borderColor: "#d8b4fe",
      toolbarBg: "#f3e8ff",
      editorBg: "#fefbff",
      borderRadius: "12px",
      fontFamily: "Georgia, serif",
      fontSize: "16px"
    },
    minHeight: 200
  }
}`,...(Fe=(De=L.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};var _e,Ve,Ye;O.parameters={...O.parameters,docs:{...(_e=O.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Clean, minimal design",
    theme: {
      primary: "#000000",
      borderColor: "#e5e7eb",
      toolbarBg: "#ffffff",
      editorBg: "#ffffff",
      borderRadius: "4px",
      fontFamily: "system-ui, sans-serif"
    },
    toolbar: {
      groups: TOOLBAR_PRESETS.minimal
    },
    minHeight: 180
  }
}`,...(Ye=(Ve=O.parameters)==null?void 0:Ve.docs)==null?void 0:Ye.source}}};var Ge,ze,Ue;A.parameters={...A.parameters,docs:{...(Ge=A.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("<p>Click the buttons to interact with the editor programmatically.</p>");
    const editorRef = useRef<EditorRef>(null);
    const insertText = () => {
      editorRef.current?.insertText("\\n\\nInserted text via ref!");
    };
    const focusEditor = () => {
      editorRef.current?.focus();
    };
    const getContent = () => {
      const html = editorRef.current?.getHTML();
      const text = editorRef.current?.getText();
      alert(\`HTML: \${html}\\n\\nText: \${text}\`);
    };
    return <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <button onClick={insertText} className="rounded bg-blue-500 px-3 py-1 text-sm text-white hover:bg-blue-600">
            Insert Text
          </button>
          <button onClick={focusEditor} className="rounded bg-green-500 px-3 py-1 text-sm text-white hover:bg-green-600">
            Focus Editor
          </button>
          <button onClick={getContent} className="rounded bg-purple-500 px-3 py-1 text-sm text-white hover:bg-purple-600">
            Get Content
          </button>
        </div>
        <WysiwygEditor ref={editorRef} value={value} onChange={setValue} placeholder="Editor with ref methods" showCharCount minHeight={200} />
      </div>;
  }
}`,...(Ue=(ze=A.parameters)==null?void 0:ze.docs)==null?void 0:Ue.source}}};var Qe,Je,Ke;M.parameters={...M.parameters,docs:{...(Qe=M.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    placeholder: "Accessible editor with ARIA labels",
    "aria-label": "Rich text editor for article content",
    "aria-describedby": "editor-description",
    helperText: "Use this editor to write your article. All formatting options are keyboard accessible.",
    showCharCount: true,
    maxLength: 5000,
    minHeight: 200
  }
}`,...(Ke=(Je=M.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Xe,Ze,er;W.parameters={...W.parameters,docs:{...(Xe=W.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: args => <ControlledEditor {...args} />,
  args: {
    value: \`
      <h1>Large Content Example</h1>
      \${Array.from({
      length: 10
    }, (_, i) => \`
        <h2>Section \${i + 1}</h2>
        <p>This is a paragraph with <strong>bold text</strong>, <em>italic text</em>, and <u>underlined text</u>. 
        It demonstrates how the editor handles larger amounts of content efficiently.</p>
        <ul>
          <li>List item 1 for section \${i + 1}</li>
          <li>List item 2 for section \${i + 1}</li>
          <li>List item 3 for section \${i + 1}</li>
        </ul>
        <blockquote>This is a blockquote in section \${i + 1}. It shows how quoted content appears.</blockquote>
      \`).join("")}
    \`,
    showCharCount: true,
    minHeight: 300,
    maxHeight: 500
  }
}`,...(er=(Ze=W.parameters)==null?void 0:Ze.docs)==null?void 0:er.source}}};var rr,tr,nr;B.parameters={...B.parameters,docs:{...(rr=B.parameters)==null?void 0:rr.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState("");
    const [config, setConfig] = useState({
      showCharCount: true,
      maxLength: 1000,
      minHeight: 200,
      error: false,
      readOnly: false,
      disabled: false,
      toolbarPreset: "standard" as keyof typeof TOOLBAR_PRESETS
    });
    return <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2 lg:grid-cols-4">
          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={config.showCharCount} onChange={e => setConfig(prev => ({
            ...prev,
            showCharCount: e.target.checked
          }))} />
            <span className="text-sm">Show Character Count</span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={config.error} onChange={e => setConfig(prev => ({
            ...prev,
            error: e.target.checked
          }))} />
            <span className="text-sm">Error State</span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={config.readOnly} onChange={e => setConfig(prev => ({
            ...prev,
            readOnly: e.target.checked
          }))} />
            <span className="text-sm">Read Only</span>
          </label>

          <label className="flex items-center space-x-2">
            <input type="checkbox" checked={config.disabled} onChange={e => setConfig(prev => ({
            ...prev,
            disabled: e.target.checked
          }))} />
            <span className="text-sm">Disabled</span>
          </label>

          <label className="flex flex-col space-y-1">
            <span className="text-sm font-medium">Max Length</span>
            <input type="number" value={config.maxLength} onChange={e => setConfig(prev => ({
            ...prev,
            maxLength: Number(e.target.value)
          }))} className="rounded border px-2 py-1 text-sm" min="50" max="5000" />
          </label>

          <label className="flex flex-col space-y-1">
            <span className="text-sm font-medium">Min Height</span>
            <input type="number" value={config.minHeight} onChange={e => setConfig(prev => ({
            ...prev,
            minHeight: Number(e.target.value)
          }))} className="rounded border px-2 py-1 text-sm" min="100" max="800" />
          </label>

          <label className="flex flex-col space-y-1">
            <span className="text-sm font-medium">Toolbar Preset</span>
            <select value={config.toolbarPreset} onChange={e => setConfig(prev => ({
            ...prev,
            toolbarPreset: e.target.value as keyof typeof TOOLBAR_PRESETS
          }))} className="rounded border px-2 py-1 text-sm">
              <option value="minimal">Minimal</option>
              <option value="standard">Standard</option>
              <option value="advanced">Advanced</option>
            </select>
          </label>
        </div>

        <WysiwygEditor value={value} onChange={setValue} placeholder="Interactive playground - configure options above" showCharCount={config.showCharCount} maxLength={config.maxLength} minHeight={config.minHeight} error={config.error} errorMessage={config.error ? "This is an example error message" : undefined} helperText="This is an interactive playground. Use the controls above to test different configurations." readOnly={config.readOnly} disabled={config.disabled} toolbar={{
        groups: TOOLBAR_PRESETS[config.toolbarPreset]
      }} />
      </div>;
  }
}`,...(nr=(tr=B.parameters)==null?void 0:tr.docs)==null?void 0:nr.source}}};const gr=["Default","WithInitialContent","ReadOnly","Disabled","MinimalToolbar","StandardToolbar","AdvancedToolbar","NoToolbar","CustomToolbar","CompactEditor","TallEditor","ResponsiveHeight","WithCharacterCount","WithCharacterLimit","WithError","WithHelperText","ValidationExample","DarkTheme","ColorfulTheme","MinimalTheme","WithRefExample","AccessibilityExample","LargeContentExample","PlaygroundExample"];export{M as AccessibilityExample,C as AdvancedToolbar,L as ColorfulTheme,v as CompactEditor,T as CustomToolbar,R as DarkTheme,p as Default,x as Disabled,W as LargeContentExample,O as MinimalTheme,b as MinimalToolbar,y as NoToolbar,B as PlaygroundExample,u as ReadOnly,w as ResponsiveHeight,f as StandardToolbar,E as TallEditor,N as ValidationExample,S as WithCharacterCount,H as WithCharacterLimit,k as WithError,j as WithHelperText,g as WithInitialContent,A as WithRefExample,gr as __namedExportsOrder,pr as default};
