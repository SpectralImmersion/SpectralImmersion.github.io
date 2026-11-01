import"./disclose-version.DsnmJJEf.js";import{i as ft}from"./legacy.BsEeWQ9X.js";import{o as gt,a as mt}from"./index-client.g2AIP3Sw.js";import{l as D,j as ut,u as j,D as H,w as J,x as bt,e as ht,f as t,n as K,z as V,s as p,y as g,k as Q,m as xt,v as vt,r as O}from"./template.DacfUSvK.js";import{e as $t,i as wt}from"./each.CQe2-dF3.js";import{s as Mt}from"./class.D_lr5isI.js";import{s as R}from"./style.BAdqQPhP.js";import{b as U}from"./this.C6V5YTaz.js";var kt=V('<div><span class="bevel-glint-left svelte-1ci3ikk"></span> <span class="bevel-glint-right svelte-1ci3ikk"></span> <span class="bevel-glint-bottom svelte-1ci3ikk"></span></div>'),yt=V('<div class="header-glass-brand-root svelte-1ci3ikk"><a href="/" class="brand-link svelte-1ci3ikk" aria-label="Spectral Immersion Home"><div class="contiguous-pillars-wrap svelte-1ci3ikk"></div> <span class="brand-name svelte-1ci3ikk">Spectral Immersion</span></a> <div class="header-waveguide-border svelte-1ci3ikk"></div></div>');function Xt(Z,tt){ht(tt,!1);const x=g(),_=g(),Y=g(),S=10,et=5,rt=25,nt=900,at=.45,v=1,m=1;let M=g(420),k=g(160),b=g(1280),y=g(800),A=!1,G=420,q=160,z=!1,N=0,W=20,E=g(null),h=g([]),f=g(-1);const u=[{name:"650nm Red",hex:"#ff0200",rgb:"255, 2, 0",r:255,g:2,b:0,brightHex:"#ffa1a0",coreHex:"#ff3330"},{name:"580nm Amber",hex:"#f7d404",rgb:"247, 212, 4",r:247,g:212,b:4,brightHex:"#fff8b3",coreHex:"#ffe247"},{name:"520nm Emerald",hex:"#00fe96",rgb:"0, 254, 150",r:0,g:254,b:150,brightHex:"#b8ffdf",coreHex:"#42ffb5"},{name:"470nm Sapphire",hex:"#00a5ff",rgb:"0, 165, 255",r:0,g:165,b:255,brightHex:"#bae5ff",coreHex:"#47c0ff"}];function I(n){z||(G=n.clientX,q=n.clientY,A||(A=!0,requestAnimationFrame(()=>{p(M,G),p(k,q),A=!1})))}function P(){typeof window>"u"||(p(b,window.innerWidth),p(y,window.innerHeight))}function X(n){if(n.gamma===null||n.beta===null)return;z=!0,N=Math.max(-45,Math.min(45,n.gamma)),W=Math.max(-10,Math.min(60,n.beta));const s=.5+N/32*.5;p(M,Math.round(Math.max(0,Math.min(1,s))*t(b)));const d=(W-10)/35;p(k,Math.round(Math.max(0,Math.min(1,d))*t(y)))}async function F(){if(typeof DeviceOrientationEvent<"u"&&typeof DeviceOrientationEvent.requestPermission=="function")try{await DeviceOrientationEvent.requestPermission()==="granted"&&window.addEventListener("deviceorientation",X,{passive:!0})}catch{}}function $(n){if(t(h)&&t(h)[n]&&t(E)){const i=t(E).closest(".topbar");if(i){const a=t(h)[n].getBoundingClientRect(),l=i.getBoundingClientRect(),c=a.left-l.left+S*.5;if(!isNaN(c)&&c>0)return Math.round(c)}}const s=50+13.6+8+22,d=n*(S+et)+S*.5,r=40*Math.tan(rt*Math.PI/180);return Math.round(s+d-r)}function ot(n,s,d){const r=Math.max(0,Math.min(1,n/Math.max(600,s)));return u.map((i,a)=>{const l=.15+a*.22,c=Math.abs(r-l),o=Math.max(0,1-c/d),e=.5-.5*Math.cos(o*Math.PI);return Math.max(.14,Math.min(1,e))})}function it(n){let s=0,d=0;for(let r=0;r<4;r++){const i=n[r],a=$(r);d+=a*i,s+=i}return s<.001?$(0):Math.round(d/s)}function st(n){let s=0,d=0,r=0,i=0;for(let o=0;o<4;o++){const e=n[o];s+=e,d+=u[o].r*e,r+=u[o].g*e,i+=u[o].b*e}s<.001&&(s=1);const a=Math.round(d/s),l=Math.round(r/s),c=Math.round(i/s);return{rgb:`${a}, ${l}, ${c}`,brightHex:`rgb(${Math.min(255,a+90)}, ${Math.min(255,l+90)}, ${Math.min(255,c+90)})`}}function dt(n,s,d){const i=16+Math.max(0,Math.min(1,s/Math.max(400,d)))*66;return u.map((a,l)=>{const c=n[l],o=(.28+.72*c)*v,e=(.28+.72*c)*v,B=(.32+.68*c)*v,pt=Math.min(1,(.32+.68*c)*v);return`
				--c-hex: ${a.hex};
				--c-rgb: ${a.rgb};
				--c-bright: ${a.brightHex};
				--c-core: ${a.coreHex};
				--glint-y: ${i.toFixed(1)}%;
				--hotspot-alpha: ${pt.toFixed(3)};
				--left-lit: ${o.toFixed(3)};
				--right-lit: ${e.toFixed(3)};
				--bottom-lit: ${B.toFixed(3)};
				--act: ${c.toFixed(3)};
			`})}function lt(n,s,d){const r=Math.round(Math.min(d*.58,nt));if(n>=0&&n<4){const o=u[n],e=$(n);return`
				--border-glow-opacity: ${m};
				--border-grad: linear-gradient(90deg,
					rgba(${o.rgb}, 0.35) 0px,
					rgba(${o.rgb}, 0.55) ${Math.max(10,Math.round(e*.5))}px,
					rgba(${o.rgb}, 0.85) ${Math.max(15,e-12)}px,
					#ffffff ${e}px,
					${o.brightHex} ${e+8}px,
					${o.hex} ${e+35}px,
					rgba(${o.rgb}, 0.7) ${Math.round(e+(r-e)*.22)}px,
					rgba(${o.rgb}, 0.38) ${Math.round(e+(r-e)*.48)}px,
					rgba(${o.rgb}, 0.15) ${Math.round(e+(r-e)*.72)}px,
					rgba(${o.rgb}, 0.02) ${Math.round(e+(r-e)*.92)}px,
					transparent ${r}px,
					transparent 100%
				);
				--border-filter: drop-shadow(0 0 8px rgba(${o.rgb}, ${(.85*m).toFixed(2)})) drop-shadow(0 2px 16px rgba(${o.rgb}, ${(.5*m).toFixed(2)}));
			`}if(n===4){const o=$(0),e=$(3),B=Math.round((o+e)*.5);return`
				--border-glow-opacity: ${m};
				--border-grad: linear-gradient(90deg,
					rgba(255, 255, 255, 0.4) 0px,
					rgba(255, 255, 255, 0.65) ${Math.max(10,Math.round(o*.5))}px,
					rgba(255, 255, 255, 0.88) ${Math.max(15,o-10)}px,
					#ffffff ${o}px,
					#ffffff ${B}px,
					#ffffff ${e}px,
					rgba(255, 255, 255, 0.9) ${e+18}px,
					rgba(255, 255, 255, 0.75) ${e+45}px,
					rgba(255, 255, 255, 0.42) ${Math.round(e+(r-e)*.28)}px,
					rgba(255, 255, 255, 0.18) ${Math.round(e+(r-e)*.58)}px,
					rgba(255, 255, 255, 0.04) ${Math.round(e+(r-e)*.85)}px,
					transparent ${r}px,
					transparent 100%
				);
				--border-filter: drop-shadow(0 0 9px rgba(255, 255, 255, ${(.95*m).toFixed(2)})) drop-shadow(0 2px 18px rgba(255, 255, 255, ${(.6*m).toFixed(2)}));
			`}const i=st(s),a=it(s),l=Math.max(...s);return`
			--border-glow-opacity: ${((.25+.65*l)*m*v).toFixed(3)};
			--border-grad: linear-gradient(90deg,
				rgba(${i.rgb}, ${(.28*l).toFixed(2)}) 0px,
				rgba(${i.rgb}, ${(.55*l).toFixed(2)}) ${Math.max(10,Math.round(a*.5))}px,
				rgba(${i.rgb}, ${(.82*l).toFixed(2)}) ${Math.max(15,a-10)}px,
				#ffffff ${a}px,
				${i.brightHex} ${a+8}px,
				rgb(${i.rgb}) ${a+35}px,
				rgba(${i.rgb}, ${(.65*l).toFixed(2)}) ${Math.round(a+(r-a)*.22)}px,
				rgba(${i.rgb}, ${(.35*l).toFixed(2)}) ${Math.round(a+(r-a)*.48)}px,
				rgba(${i.rgb}, ${(.12*l).toFixed(2)}) ${Math.round(a+(r-a)*.72)}px,
				transparent ${r}px,
				transparent 100%
			);
			--border-filter: drop-shadow(0 0 7px rgba(${i.rgb}, ${(.75*l).toFixed(2)}));
		`}gt(()=>{P(),window.addEventListener("mousemove",I,{passive:!0}),window.addEventListener("resize",P,{passive:!0}),window.addEventListener("click",F,{passive:!0,once:!0}),window.addEventListener("touchstart",F,{passive:!0,once:!0}),typeof window<"u"&&"DeviceOrientationEvent"in window&&typeof DeviceOrientationEvent.requestPermission!="function"&&window.addEventListener("deviceorientation",X,{passive:!0})}),mt(()=>{typeof window<"u"&&(window.removeEventListener("mousemove",I),window.removeEventListener("resize",P),window.removeEventListener("deviceorientation",X),window.removeEventListener("click",F),window.removeEventListener("touchstart",F))}),D(()=>(t(M),t(b)),()=>{p(x,ot(t(M),t(b),at))}),D(()=>(t(x),t(k),t(y)),()=>{p(_,dt(t(x),t(k),t(y)))}),D(()=>(t(f),t(x),t(b)),()=>{p(Y,lt(t(f),t(x),t(b)))}),ut(),ft();var w=yt();R(w,`
		--overhang: 0px;
		--pillar-w: 10px;
		--pillar-gap: 5px;
		--slant: -25deg;
		--tint: 0;
		--edge-power: 0.6;
	`);var C=Q(w),L=Q(C);$t(L,5,()=>u,wt,(n,s,d)=>{var r=kt();let i;U(r,(a,l)=>xt(h,t(h)[l]=a),a=>t(h)?.[a],()=>[d]),j(()=>{i=Mt(r,1,"edgelit-slab svelte-1ci3ikk",null,i,{"is-lit":t(f)===d||t(f)===4,"is-dimmed":t(f)!==-1&&t(f)!==4&&t(f)!==d}),R(r,(t(_),vt(()=>t(_)[d])))}),H("mouseenter",r,()=>p(f,d)),J(n,r)}),O(L);var T=K(L,2);O(C);var ct=K(C,2);O(w),U(w,n=>p(E,n),()=>t(E)),j(()=>R(ct,t(Y))),H("mouseleave",L,()=>p(f,-1)),H("mouseenter",T,()=>p(f,4)),H("mouseleave",T,()=>p(f,-1)),J(Z,w),bt()}export{Xt as default};
