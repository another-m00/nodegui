(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{214:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"metadata",(function(){return l})),a.d(t,"default",(function(){return j}));var n=a(1),b=a(6),r=(a(0),a(369)),c={id:"qpainter",title:"QPainter",sidebar_label:"QPainter"},p=[{value:"Example",id:"example",children:[]},{value:"Advanced example:",id:"advanced-example",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"native",id:"native",children:[]},{value:"nodeChildren",id:"nodechildren",children:[]},{value:"<code>Optional</code> nodeParent",id:"optional-nodeparent",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"begin",id:"begin",children:[]},{value:"drawConvexPolygon",id:"drawconvexpolygon",children:[]},{value:"drawLine",id:"drawline",children:[]},{value:"drawText",id:"drawtext",children:[]},{value:"end",id:"end",children:[]},{value:"restore",id:"restore",children:[]},{value:"rotate",id:"rotate",children:[]},{value:"save",id:"save",children:[]},{value:"scale",id:"scale",children:[]},{value:"setBrush",id:"setbrush",children:[]},{value:"setNodeParent",id:"setnodeparent",children:[]},{value:"setPen",id:"setpen",children:[]},{value:"setRenderHint",id:"setrenderhint",children:[]},{value:"translate",id:"translate",children:[]}]}],l={id:"api/generated/classes/qpainter",title:"QPainter",description:"> Lets you paint on widgets.",source:"@site/docs/api/generated/classes/qpainter.md",permalink:"/docs/api/generated/classes/qpainter",sidebar_label:"QPainter",sidebar:"api",previous:{title:"QObject",permalink:"/docs/api/generated/classes/qobject"},next:{title:"QPixmap",permalink:"/docs/api/generated/classes/qpixmap"}},i={rightToc:p,metadata:l},O="wrapper";function j(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)(O,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Lets you paint on widgets.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"This class is a JS wrapper around Qt's ",Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"https://doc.qt.io/qt-5/qpainter.html"}),"QPainter class"))),Object(r.b)("p",null,"Note: QPainter works only inside the paint event."),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"\nimport { FlexLayout, WidgetEventTypes, QMainWindow, QPainter, QWidget } from '@nodegui/nodegui';\n\nconst win = new QMainWindow();\nconst center = new QWidget();\nconst layout = new FlexLayout();\ncenter.setLayout(layout);\nwin.resize(200, 200);\n\nwin.addEventListener(WidgetEventTypes.Paint, () => {\nconst painter = new QPainter(win);\npainter.drawText(20, 20, 'Hello');\npainter.end();\n});\nwin.show();\n(global as any).win = win;\n\n")),Object(r.b)("h2",{id:"advanced-example"},"Advanced example:"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/nodegui/examples/blob/master/nodegui/custom-native-widget-qpainter"}),"https://github.com/nodegui/examples/blob/master/nodegui/custom-native-widget-qpainter")),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/component"}),"Component")),Object(r.b)("p",{parentName:"li"},"\u21b3 ",Object(r.b)("strong",{parentName:"p"},"QPainter")))),Object(r.b)("h2",{id:"index"},"Index"),Object(r.b)("h3",{id:"constructors"},"Constructors"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qpainter#constructor"}),"constructor"))),Object(r.b)("h3",{id:"properties"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qpainter#native"}),"native")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qpainter#nodechildren"}),"nodeChildren")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qpainter#optional-nodeparent"}),"nodeParent"))),Object(r.b)("h3",{id:"methods"},"Methods"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qpainter#begin"}),"begin")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qpainter#drawconvexpolygon"}),"drawConvexPolygon")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qpainter#drawline"}),"drawLine")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qpainter#drawtext"}),"drawText")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qpainter#end"}),"end")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qpainter#restore"}),"restore")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qpainter#rotate"}),"rotate")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qpainter#save"}),"save")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qpainter#scale"}),"scale")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qpainter#setbrush"}),"setBrush")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qpainter#setnodeparent"}),"setNodeParent")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qpainter#setpen"}),"setPen")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qpainter#setrenderhint"}),"setRenderHint")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qpainter#translate"}),"translate"))),Object(r.b)("h2",{id:"constructors-1"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new QPainter"),"(): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qpainter"}),"QPainter"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Overrides ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#constructor"}),"constructor"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qpainter"}),"QPainter"))),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new QPainter"),"(",Object(r.b)("inlineCode",{parentName:"p"},"device"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/component"}),"Component"),"): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qpainter"}),"QPainter"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Overrides ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#constructor"}),"constructor"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"device")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/classes/component"}),"Component"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qpainter"}),"QPainter"))),Object(r.b)("h2",{id:"properties-1"},"Properties"),Object(r.b)("h3",{id:"native"},"native"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"native"),": ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/globals#nativeelement"}),"NativeElement"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Overrides ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#abstract-native"}),"native"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"nodechildren"},"nodeChildren"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"nodeChildren"),": ",Object(r.b)("em",{parentName:"p"},"Set\u2039",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),"\u203a")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#nodechildren"}),"nodeChildren"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"optional-nodeparent"},Object(r.b)("inlineCode",{parentName:"h3"},"Optional")," nodeParent"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"nodeParent"),"? : ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#optional-nodeparent"}),"nodeParent"))),Object(r.b)("h2",{id:"methods-1"},"Methods"),Object(r.b)("h3",{id:"begin"},"begin"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"begin"),"(",Object(r.b)("inlineCode",{parentName:"p"},"device"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/component"}),"Component"),"): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"device")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/classes/component"}),"Component"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"drawconvexpolygon"},"drawConvexPolygon"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"drawConvexPolygon"),"(",Object(r.b)("inlineCode",{parentName:"p"},"points"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qpoint"}),"QPoint"),"[]): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"points")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/classes/qpoint"}),"QPoint"),"[]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"drawline"},"drawLine"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"drawLine"),"(",Object(r.b)("inlineCode",{parentName:"p"},"x1"),": number, ",Object(r.b)("inlineCode",{parentName:"p"},"y1"),": number, ",Object(r.b)("inlineCode",{parentName:"p"},"x2"),": number, ",Object(r.b)("inlineCode",{parentName:"p"},"y2"),": number): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"x1")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"y1")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"x2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"y2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"drawtext"},"drawText"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"drawText"),"(",Object(r.b)("inlineCode",{parentName:"p"},"x"),": number, ",Object(r.b)("inlineCode",{parentName:"p"},"y"),": number, ",Object(r.b)("inlineCode",{parentName:"p"},"text"),": string): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"x")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"y")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"text")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"end"},"end"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"end"),"(): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"restore"},"restore"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"restore"),"(): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"rotate"},"rotate"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"rotate"),"(",Object(r.b)("inlineCode",{parentName:"p"},"angle"),": number): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"angle")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"save"},"save"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"save"),"(): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"scale"},"scale"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"scale"),"(",Object(r.b)("inlineCode",{parentName:"p"},"sx"),": number, ",Object(r.b)("inlineCode",{parentName:"p"},"sy"),": number): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"sx")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"sy")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setbrush"},"setBrush"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setBrush"),"(",Object(r.b)("inlineCode",{parentName:"p"},"color"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qcolor"}),"QColor"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"color")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/classes/qcolor"}),"QColor"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setnodeparent"},"setNodeParent"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setNodeParent"),"(",Object(r.b)("inlineCode",{parentName:"p"},"parent?"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/component"}),"Component"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#setnodeparent"}),"setNodeParent"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"parent?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/classes/component"}),"Component"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setpen"},"setPen"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setPen"),"(",Object(r.b)("inlineCode",{parentName:"p"},"arg"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/enums/penstyle"}),"PenStyle")," | ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qcolor"}),"QColor"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"arg")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/enums/penstyle"}),"PenStyle")," ","|"," ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/classes/qcolor"}),"QColor"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setrenderhint"},"setRenderHint"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setRenderHint"),"(",Object(r.b)("inlineCode",{parentName:"p"},"hint"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/enums/renderhint"}),"RenderHint"),", ",Object(r.b)("inlineCode",{parentName:"p"},"on"),": boolean): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"hint")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/enums/renderhint"}),"RenderHint")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"on")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"translate"},"translate"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"translate"),"(",Object(r.b)("inlineCode",{parentName:"p"},"dx"),": number, ",Object(r.b)("inlineCode",{parentName:"p"},"dy"),": number): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"dx")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"dy")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")))}j.isMDXComponent=!0},369:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),b=a.n(n),r=b.a.createContext({}),c=function(e){var t=b.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},p=function(e){var t=c(e.components);return b.a.createElement(r.Provider,{value:t},e.children)};var l="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),O=c(a),j=n,d=O[p+"."+j]||O[j]||i[j]||r;return a?b.a.createElement(d,Object.assign({},{ref:t},l,{components:a})):b.a.createElement(d,Object.assign({},{ref:t},l))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=O;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[l]="string"==typeof e?e:n,c[1]=p;for(var j=2;j<r;j++)c[j]=a[j];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);