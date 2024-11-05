(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2745:function(e,s,a){Promise.resolve().then(a.bind(a,6793))},6793:function(e,s,a){"use strict";a.d(s,{default:function(){return b}});var i=a(7437),r=a(2265),n=a(1994),l=a(3335);function t(){for(var e=arguments.length,s=Array(e),a=0;a<e;a++)s[a]=arguments[a];return(0,l.m6)((0,n.W)(s))}let d=r.forwardRef((e,s)=>{let{className:a,type:r,...n}=e;return(0,i.jsx)("input",{type:r,className:t("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:s,...n})});d.displayName="Input";var o=a(6394);let c=(0,a(7712).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),m=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,i.jsx)(o.f,{ref:s,className:t(c(),a),...r})});m.displayName=o.f.displayName;var p=a(2835);let g=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,i.jsxs)(p.fC,{ref:s,className:t("relative flex w-full touch-none select-none items-center",a),...r,children:[(0,i.jsx)(p.fQ,{className:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",children:(0,i.jsx)(p.e6,{className:"absolute h-full bg-primary"})}),(0,i.jsx)(p.bU,{className:"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"})]})});g.displayName=p.fC.displayName;let f=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,i.jsx)("div",{ref:s,className:t("rounded-lg border bg-card text-card-foreground shadow-sm",a),...r})});f.displayName="Card";let u=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,i.jsx)("div",{ref:s,className:t("flex flex-col space-y-1.5 p-6",a),...r})});u.displayName="CardHeader";let x=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,i.jsx)("h3",{ref:s,className:t("text-2xl font-semibold leading-none tracking-tight",a),...r})});x.displayName="CardTitle",r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,i.jsx)("p",{ref:s,className:t("text-sm text-muted-foreground",a),...r})}).displayName="CardDescription";let h=r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,i.jsx)("div",{ref:s,className:t("p-6 pt-0",a),...r})});function b(){let[e,s]=(0,r.useState)({tshirt:0,printing:0,shippingBag:0,packagingBag:0,shipping:0,advertising:0}),[a,n]=(0,r.useState)(0),[l,t]=(0,r.useState)(0),o=Object.fromEntries(Object.entries(e).map(e=>{let[s,a]=e;return[s,a/1.21]})),c=Object.values(e).reduce((e,s)=>e+s,0),p=Object.values(o).reduce((e,s)=>e+s,0);(0,r.useEffect)(()=>{t(c/(1-a/100))},[c,a]);let b=l-c,j=l/1.21,N=a=>{s({...e,[a.target.name]:parseFloat(a.target.value)||0})};return(0,i.jsx)("div",{className:"container mx-auto p-4",children:(0,i.jsxs)(f,{className:"w-full max-w-2xl mx-auto",children:[(0,i.jsx)(u,{children:(0,i.jsx)(x,{className:"text-2xl font-bold text-center",children:"Calculadora de Margen de Beneficio"})}),(0,i.jsxs)(h,{children:[(0,i.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(m,{htmlFor:"tshirt",children:"Coste de la camiseta (con IVA)"}),(0,i.jsx)(d,{id:"tshirt",name:"tshirt",type:"number",value:e.tshirt,onChange:N,className:"mt-1"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(m,{htmlFor:"printing",children:"Coste de impresi\xf3n (DTF) (con IVA)"}),(0,i.jsx)(d,{id:"printing",name:"printing",type:"number",value:e.printing,onChange:N,className:"mt-1"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(m,{htmlFor:"shippingBag",children:"Coste de la bolsa de env\xedo (con IVA)"}),(0,i.jsx)(d,{id:"shippingBag",name:"shippingBag",type:"number",value:e.shippingBag,onChange:N,className:"mt-1"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(m,{htmlFor:"packagingBag",children:"Coste de la bolsa de empaquetado (con IVA)"}),(0,i.jsx)(d,{id:"packagingBag",name:"packagingBag",type:"number",value:e.packagingBag,onChange:N,className:"mt-1"})]}),(0,i.jsxs)("div",{className:"sm:col-span-2",children:[(0,i.jsx)(m,{htmlFor:"shipping",children:"Coste de env\xedo (con IVA)"}),(0,i.jsx)(d,{id:"shipping",name:"shipping",type:"number",value:e.shipping,onChange:N,className:"mt-1"})]}),(0,i.jsxs)("div",{className:"sm:col-span-2",children:[(0,i.jsx)(m,{htmlFor:"advertising",children:"Coste de publicidad (con IVA)"}),(0,i.jsx)(d,{id:"advertising",name:"advertising",type:"number",value:e.advertising,onChange:N,className:"mt-1"})]})]}),(0,i.jsxs)("div",{className:"mb-6",children:[(0,i.jsxs)(m,{htmlFor:"profitMargin",className:"block mb-2",children:["Margen de beneficio: ",a.toFixed(2),"%"]}),(0,i.jsx)(g,{id:"profitMargin",min:0,max:100,step:.1,value:[a],onValueChange:e=>n(e[0]),className:"mt-2"})]}),(0,i.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-center",children:[(0,i.jsxs)("div",{className:"bg-gray-100 p-3 rounded",children:[(0,i.jsx)("p",{className:"font-semibold",children:"Coste total (sin IVA)"}),(0,i.jsxs)("p",{children:[p.toFixed(2),"€"]})]}),(0,i.jsxs)("div",{className:"bg-gray-100 p-3 rounded",children:[(0,i.jsx)("p",{className:"font-semibold",children:"Coste total (con IVA)"}),(0,i.jsxs)("p",{children:[c.toFixed(2),"€"]})]}),(0,i.jsxs)("div",{className:"bg-gray-100 p-3 rounded",children:[(0,i.jsx)("p",{className:"font-semibold",children:"Beneficio (sin IVA)"}),(0,i.jsxs)("p",{children:[(b/1.21).toFixed(2),"€"]})]}),(0,i.jsxs)("div",{className:"bg-gray-100 p-3 rounded",children:[(0,i.jsx)("p",{className:"font-semibold",children:"Beneficio (con IVA)"}),(0,i.jsxs)("p",{children:[b.toFixed(2),"€"]})]}),(0,i.jsxs)("div",{className:"bg-gray-100 p-3 rounded",children:[(0,i.jsx)("p",{className:"font-semibold",children:"Precio sin IVA"}),(0,i.jsxs)("p",{children:[j.toFixed(2),"€"]})]}),(0,i.jsxs)("div",{className:"bg-gray-100 p-3 rounded",children:[(0,i.jsx)("p",{className:"font-semibold",children:"IVA (21%)"}),(0,i.jsxs)("p",{children:[(l-j).toFixed(2),"€"]})]}),(0,i.jsxs)("div",{className:"sm:col-span-2 bg-green-100 p-4 rounded",children:[(0,i.jsx)("p",{className:"font-semibold text-lg",children:"Precio final con IVA"}),(0,i.jsxs)("p",{className:"text-xl font-bold text-green-600",children:[l.toFixed(2),"€"]})]})]})]})]})})}h.displayName="CardContent",r.forwardRef((e,s)=>{let{className:a,...r}=e;return(0,i.jsx)("div",{ref:s,className:t("flex items-center p-6 pt-0",a),...r})}).displayName="CardFooter"}},function(e){e.O(0,[32,971,117,744],function(){return e(e.s=2745)}),_N_E=e.O()}]);