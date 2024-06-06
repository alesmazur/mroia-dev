import{j as e,B as r,T as a,r as s}from"./index-CqB831tZ.js";import{S as h,P as w,a as g}from"./pagination-Bz1x_UwJ.js";import{S as o}from"./SubTitile-oQ9_sLVP.js";function l({id:t,title:i,text:m,image:p}){return e.jsxs("div",{className:`overflow-hidden grid rounded-2xl border-2 border-white/50 bg-mr-main/80 h-full
                 transition-colors duration-300 hover:bg-mr-main/90 hover:border-mr-main-active/80
                 3xl:grid-cols-[2fr_1fr]`,children:[e.jsxs("div",{className:"p-6",children:[e.jsxs("div",{className:"relative",children:[e.jsxs("span",{className:"text-mr-main-active text-lg",children:["Step ",t+1,":"]}),e.jsx("h2",{className:"font-heading text-2xl 3xl:text-4xl mb-10 tracking-widest",children:i})]}),e.jsx("div",{className:"flex flex-col gap-5",children:m.map((n,u)=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsxs("b",{className:"tracking-wider font-medium text-mr-main-active capitalize",children:[Object.keys(n),":"]}),e.jsx("p",{className:"opacity-65 text-sm leading-6 3xl:text-base 3xl:leading-7",children:Object.values(n)})]},u))})]}),e.jsx("div",{className:"-order-1 max-h-80 3xl:order-1 3xl:max-h-none",children:e.jsx("img",{src:p,alt:i,width:500,height:500,loading:"lazy",className:`w-full h-full object-cover 
                   3xl:[clip-path:polygon(40%_0%,100%_0%,100%_100%,0%_100%)] `})})]})}const c="/assets/how-we-work-background-banner-DFyUrTi1.webp",x="/assets/how-we-work-analysis-banner-CrxynfUD.webp",v="/assets/how-we-work-development-banner-DTJ6_yQM.webp",f="/assets/how-we-work-evolution-banner-BWhXoFPC.webp",d=[{title:"Analysis and Prototyping",text:[{process:"A series of interviews with customer to understand the need and agree on the scope."},{deliveries:"Product Brief with a clickable design prototype, Timeline and Cost for MVP development"},{value:"Evaluation and fine-tuning of your idea. Bringning of understanding of what is required to deliver a product to market as fast as possible. Visualisation of your idea as a dynamic design prototype to show to potential customers and investors"}],image:x},{title:"MVP Development",text:[{process:"Development according to the agreed scope and timeline. weekly calls with progress reports, demos, feedback aggregation and implementation."},{deliveries:"A Minimum Viable Product - a workable software solution developed and deployed."},{value:"A working software solution for test Market fit which is instrumental in evaluating market traction and attracting investors"}],image:v},{title:"Product evolution",text:[{process:"Consulting: providing consulting sessions to identify aims, challenges and risks, strategic planning, establish processes communication: conducting regular meetings for progress evaluation and planning, day-to-day direct contact with management and team members product development: performing end-to-end services including design, infrastructure setup & maintenance, development and QA of product components and new features"},{deliveries:"Audit of your Project, Product Roadmap , Product team allocation, Agile delivery process setup"},{value:"A Software Development Life Cycle implementation together with Predictable product evolution and delivery process."}],image:f}];function b(){return e.jsx("section",{className:"min-h-screen py-20 relative","data-element":"how-we-work",id:"how-we-work",children:e.jsx(r,{banner:c,bgColor:"bg-black/70",children:e.jsxs("div",{className:"box",children:[e.jsx(a,{children:"How we work"}),e.jsx(o,{children:"Dive into the heart of our process, where collaboration meets brilliance. We weave together your vision and our expertise, crafting solutions that resonate with your audience and drive success."}),e.jsx(h,{speed:1e3,slidesPerView:1,pagination:{clickable:!0},modules:[w],className:"pb-16",children:d.map((t,i)=>e.jsx(g,{className:"p-3",children:e.jsx(l,{...t,id:i})},i))})]})})})}function j(){return e.jsx("section",{className:"min-h-screen py-20 relative","data-element":"how-we-work",id:"how-we-work",children:e.jsx(r,{banner:c,bgColor:"bg-black/70",children:e.jsxs("div",{className:"box",children:[e.jsx(a,{children:"How we work"}),e.jsx(o,{children:"Dive into the heart of our process, where collaboration meets brilliance. We weave together your vision and our expertise, crafting solutions that resonate with your audience and drive success."}),e.jsx("div",{className:"grid gap-8",children:d.map((t,i)=>e.jsx(l,{...t,id:i},i))})]})})})}function S(){const[t,i]=s.useState(window.innerWidth);return s.useEffect(()=>{window.addEventListener("resize",()=>i(window.innerWidth))},[]),t<=767?e.jsx(b,{}):e.jsx(j,{})}export{S as default};
