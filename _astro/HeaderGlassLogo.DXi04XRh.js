import"./disclose-version.DsnmJJEf.js";import{i as gt}from"./legacy.BsEeWQ9X.js";import{o as mt,a as ut}from"./index-client.g2AIP3Sw.js";import{l as D,j as ht,u as J,D as L,w as K,x as bt,e as xt,f as e,n as Q,z as Z,s as p,y as g,k as U,m as vt,v as $t,r as O}from"./template.DacfUSvK.js";import{e as Mt,i as wt}from"./each.CQe2-dF3.js";import{s as kt}from"./class.D_lr5isI.js";import{s as R}from"./style.BAdqQPhP.js";import{b as V}from"./this.C6V5YTaz.js";var yt=Z('<div><span class="bevel-glint-left svelte-1ci3ikk"></span> <span class="bevel-glint-right svelte-1ci3ikk"></span> <span class="bevel-glint-bottom svelte-1ci3ikk"></span></div>'),Et=Z('<div class="header-glass-brand-root svelte-1ci3ikk"><a href="/" class="brand-link svelte-1ci3ikk" aria-label="Spectral Immersion Home"><div class="contiguous-pillars-wrap svelte-1ci3ikk"></div> <span class="brand-name svelte-1ci3ikk">Spectral Immersion</span></a> <div class="header-waveguide-border svelte-1ci3ikk"></div></div>');function Xt(tt,et){xt(et,!1);const x=g(),_=g(),Y=g(),S=10,rt=5,at=25,nt=900,it=.45,v=1,m=1;let w=g(420),k=g(160),h=g(1280),y=g(800),C=!1,G=420,q=160,z=!1,N=0,W=20,I=-1,E=g(null),b=g([]),f=g(-1);const u=[{name:"650nm Red",hex:"#ff0200",rgb:"255, 2, 0",r:255,g:2,b:0,brightHex:"#ffa1a0",coreHex:"#ff3330"},{name:"580nm Amber",hex:"#f7d404",rgb:"247, 212, 4",r:247,g:212,b:4,brightHex:"#fff8b3",coreHex:"#ffe247"},{name:"520nm Emerald",hex:"#00fe96",rgb:"0, 254, 150",r:0,g:254,b:150,brightHex:"#b8ffdf",coreHex:"#42ffb5"},{name:"470nm Sapphire",hex:"#00a5ff",rgb:"0, 165, 255",r:0,g:165,b:255,brightHex:"#bae5ff",coreHex:"#47c0ff"}];function T(a){z||(G=a.clientX,q=a.clientY,C||(C=!0,requestAnimationFrame(()=>{p(w,G),p(k,q),C=!1})))}function A(){typeof window>"u"||(p(h,window.innerWidth),p(y,window.innerHeight))}function P(a){if(a.gamma===null||a.beta===null)return;z=!0,N=Math.max(-45,Math.min(45,a.gamma)),W=Math.max(-10,Math.min(60,a.beta));const s=.5+N/32*.5;p(w,Math.round(Math.max(0,Math.min(1,s))*e(h)));const l=(W-10)/35;p(k,Math.round(Math.max(0,Math.min(1,l))*e(y)));const t=Math.floor(Math.max(0,Math.min(.99,s))*4);if(t!==I&&(I=t,typeof navigator<"u"&&navigator.vibrate))try{navigator.vibrate(5)}catch{}}async function F(){if(typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function")try{await DeviceOrientationEvent.requestPermission()==="granted"&&window.addEventListener("deviceorientation",P,{passive:!0})}catch{}}function $(a){if(e(b)&&e(b)[a]&&e(E)){const o=e(E).closest(".topbar");if(o){const n=e(b)[a].getBoundingClientRect(),c=o.getBoundingClientRect(),d=n.left-c.left+S*.5;if(!isNaN(d)&&d>0)return Math.round(d)}}const s=50+13.6+8+22,l=a*(S+rt)+S*.5,t=40*Math.tan(at*Math.PI/180);return Math.round(s+l-t)}function ot(a,s,l){const t=Math.max(0,Math.min(1,a/Math.max(600,s)));return u.map((o,n)=>{const c=.15+n*.22,d=Math.abs(t-c),i=Math.max(0,1-d/l),r=.5-.5*Math.cos(i*Math.PI);return Math.max(.14,Math.min(1,r))})}function st(a){let s=0,l=0;for(let t=0;t<4;t++){const o=a[t],n=$(t);l+=n*o,s+=o}return s<.001?$(0):Math.round(l/s)}function lt(a){let s=0,l=0,t=0,o=0;for(let i=0;i<4;i++){const r=a[i];s+=r,l+=u[i].r*r,t+=u[i].g*r,o+=u[i].b*r}s<.001&&(s=1);const n=Math.round(l/s),c=Math.round(t/s),d=Math.round(o/s);return{rgb:`${n}, ${c}, ${d}`,brightHex:`rgb(${Math.min(255,n+90)}, ${Math.min(255,c+90)}, ${Math.min(255,d+90)})`}}function ct(a,s,l){const o=16+Math.max(0,Math.min(1,s/Math.max(400,l)))*66;return u.map((n,c)=>{const d=a[c],i=(.28+.72*d)*v,r=(.28+.72*d)*v,B=(.32+.68*d)*v,ft=Math.min(1,(.32+.68*d)*v);return`
				--c-hex: ${n.hex};
				--c-rgb: ${n.rgb};
				--c-bright: ${n.brightHex};
				--c-core: ${n.coreHex};
				--glint-y: ${o.toFixed(1)}%;
				--hotspot-alpha: ${ft.toFixed(3)};
				--left-lit: ${i.toFixed(3)};
				--right-lit: ${r.toFixed(3)};
				--bottom-lit: ${B.toFixed(3)};
				--act: ${d.toFixed(3)};
			`})}function dt(a,s,l){const t=Math.round(Math.min(l*.58,nt));if(a>=0&&a<4){const i=u[a],r=$(a);return`
				--border-glow-opacity: ${m};
				--border-grad: linear-gradient(90deg,
					rgba(${i.rgb}, 0.35) 0px,
					rgba(${i.rgb}, 0.55) ${Math.max(10,Math.round(r*.5))}px,
					rgba(${i.rgb}, 0.85) ${Math.max(15,r-12)}px,
					#ffffff ${r}px,
					${i.brightHex} ${r+8}px,
					${i.hex} ${r+35}px,
					rgba(${i.rgb}, 0.7) ${Math.round(r+(t-r)*.22)}px,
					rgba(${i.rgb}, 0.38) ${Math.round(r+(t-r)*.48)}px,
					rgba(${i.rgb}, 0.15) ${Math.round(r+(t-r)*.72)}px,
					rgba(${i.rgb}, 0.02) ${Math.round(r+(t-r)*.92)}px,
					transparent ${t}px,
					transparent 100%
				);
				--border-filter: drop-shadow(0 0 8px rgba(${i.rgb}, ${(.85*m).toFixed(2)})) drop-shadow(0 2px 16px rgba(${i.rgb}, ${(.5*m).toFixed(2)}));
			`}if(a===4){const i=$(0),r=$(3),B=Math.round((i+r)*.5);return`
				--border-glow-opacity: ${m};
				--border-grad: linear-gradient(90deg,
					rgba(255, 255, 255, 0.4) 0px,
					rgba(255, 255, 255, 0.65) ${Math.max(10,Math.round(i*.5))}px,
					rgba(255, 255, 255, 0.88) ${Math.max(15,i-10)}px,
					#ffffff ${i}px,
					#ffffff ${B}px,
					#ffffff ${r}px,
					rgba(255, 255, 255, 0.9) ${r+18}px,
					rgba(255, 255, 255, 0.75) ${r+45}px,
					rgba(255, 255, 255, 0.42) ${Math.round(r+(t-r)*.28)}px,
					rgba(255, 255, 255, 0.18) ${Math.round(r+(t-r)*.58)}px,
					rgba(255, 255, 255, 0.04) ${Math.round(r+(t-r)*.85)}px,
					transparent ${t}px,
					transparent 100%
				);
				--border-filter: drop-shadow(0 0 9px rgba(255, 255, 255, ${(.95*m).toFixed(2)})) drop-shadow(0 2px 18px rgba(255, 255, 255, ${(.6*m).toFixed(2)}));
			`}const o=lt(s),n=st(s),c=Math.max(...s);return`
			--border-glow-opacity: ${((.25+.65*c)*m*v).toFixed(3)};
			--border-grad: linear-gradient(90deg,
				rgba(${o.rgb}, ${(.28*c).toFixed(2)}) 0px,
				rgba(${o.rgb}, ${(.55*c).toFixed(2)}) ${Math.max(10,Math.round(n*.5))}px,
				rgba(${o.rgb}, ${(.82*c).toFixed(2)}) ${Math.max(15,n-10)}px,
				#ffffff ${n}px,
				${o.brightHex} ${n+8}px,
				rgb(${o.rgb}) ${n+35}px,
				rgba(${o.rgb}, ${(.65*c).toFixed(2)}) ${Math.round(n+(t-n)*.22)}px,
				rgba(${o.rgb}, ${(.35*c).toFixed(2)}) ${Math.round(n+(t-n)*.48)}px,
				rgba(${o.rgb}, ${(.12*c).toFixed(2)}) ${Math.round(n+(t-n)*.72)}px,
				transparent ${t}px,
				transparent 100%
			);
			--border-filter: drop-shadow(0 0 7px rgba(${o.rgb}, ${(.75*c).toFixed(2)}));
		`}mt(()=>{A(),window.addEventListener("mousemove",T,{passive:!0}),window.addEventListener("resize",A,{passive:!0}),window.addEventListener("click",F,{passive:!0,once:!0}),window.addEventListener("touchstart",F,{passive:!0,once:!0}),typeof window<"u"&&"DeviceOrientationEvent"in window&&typeof DeviceOrientationEvent.requestPermission!="function"&&window.addEventListener("deviceorientation",P,{passive:!0})}),ut(()=>{typeof window<"u"&&(window.removeEventListener("mousemove",T),window.removeEventListener("resize",A),window.removeEventListener("deviceorientation",P),window.removeEventListener("click",F),window.removeEventListener("touchstart",F))}),D(()=>(e(w),e(h)),()=>{p(x,ot(e(w),e(h),it))}),D(()=>(e(x),e(k),e(y)),()=>{p(_,ct(e(x),e(k),e(y)))}),D(()=>(e(f),e(x),e(h)),()=>{p(Y,dt(e(f),e(x),e(h)))}),ht(),gt();var M=Et();R(M,`
		--overhang: 0px;
		--pillar-w: 10px;
		--pillar-gap: 5px;
		--slant: -25deg;
		--tint: 0;
		--edge-power: 0.6;
	`);var X=U(M),H=U(X);Mt(H,5,()=>u,wt,(a,s,l)=>{var t=yt();let o;V(t,(n,c)=>vt(b,e(b)[c]=n),n=>e(b)?.[n],()=>[l]),J(()=>{o=kt(t,1,"edgelit-slab svelte-1ci3ikk",null,o,{"is-lit":e(f)===l||e(f)===4,"is-dimmed":e(f)!==-1&&e(f)!==4&&e(f)!==l}),R(t,(e(_),$t(()=>e(_)[l])))}),L("mouseenter",t,()=>p(f,l)),K(a,t)}),O(H);var j=Q(H,2);O(X);var pt=Q(X,2);O(M),V(M,a=>p(E,a),()=>e(E)),J(()=>R(pt,e(Y))),L("mouseleave",H,()=>p(f,-1)),L("mouseenter",j,()=>p(f,4)),L("mouseleave",j,()=>p(f,-1)),K(tt,M),bt()}export{Xt as default};
