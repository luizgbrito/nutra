(function(p){typeof define=="function"&&define.amd?define(p):p()})(function(){"use strict";var O=Object.defineProperty;var L=(p,u,c)=>u in p?O(p,u,{enumerable:!0,configurable:!0,writable:!0,value:c}):p[u]=c;var y=(p,u,c)=>(L(p,typeof u!="symbol"?u+"":u,c),c);const p=["overlayCheckout","salesFunnel","inlineCheckout","element:creditCardForm"],u=(m,e)=>{const o=document.createElement("iframe");return e&&(o.id=e),o.className="custom-element__iframe",o.style.width="100%",o.style.minWidth="320px",o.style.minHeight="300px",o.style.border="0 none",o.style.display="block",o.allow="clipboard-write; payment *",o.src=m,o},c="https://pay.hotmart.com";class _{constructor(e,o){y(this,"options",{payment:{},visibilityOptions:{}});y(this,"wrapperElement");y(this,"iframeElement");y(this,"iframeURL",new URL(c));this.options=e,console.debug("@@@@ this.options:",this.options);const i={...{elements_document_height_update:t=>{this.iframeElement&&(this.iframeElement.style.height=t)},on_load:()=>{var t,r,f,d,l,a,s,h;this.postMessage({action:"set_data",data:{shopperData:(t=this.options.payment)==null?void 0:t.shopperData,hasErrorCallback:!!((r=this.options.payment)!=null&&r.onError),countryIsoCode:((f=this.options)==null?void 0:f.countryIsoCode)??"",gateways:(a=(l=(d=this.options)==null?void 0:d.elementOptions)==null?void 0:l.creditCardForm)==null?void 0:a.gateways}}),(h=(s=this.options)==null?void 0:s.onLoad)==null||h.call(s)}},...o||{}};window.addEventListener("message",t=>{var f;const r=t.source!==((f=this.iframeElement)==null?void 0:f.contentWindow);t.origin!==c||r||(console.debug("@@@@ message:",t),!(!t.data.action||!Object.keys(i).includes(t.data.action))&&i[t.data.action](t.data.data))})}updateOptions(e){this.options={...this.options,...e}}postMessage({action:e,data:o}){var n,i;(i=(n=this.iframeElement)==null?void 0:n.contentWindow)==null||i.postMessage({action:e,data:o},"*")}mount(e){var n;if(this.options.integrationKey&&this.iframeURL.searchParams.append("integrationKey",this.options.integrationKey),this.options.locale&&this.iframeURL.searchParams.append("locale",this.options.locale),this.options.countryIsoCode&&this.iframeURL.searchParams.append("countrycode",this.options.countryIsoCode),this.options.prefilledInfo)for(const[i,t]of Object.entries(this.options.prefilledInfo))this.iframeURL.searchParams.append(i,t);if(this.options.visibilityOptions)for(const[i,t]of Object.entries(this.options.visibilityOptions))this.iframeURL.searchParams.append(i,t);const o=u(this.iframeURL.href);this.iframeElement=o,this.wrapperElement=typeof e=="string"?document.querySelector(e):e,this.wrapperElement&&(this.wrapperElement.innerHTML="",(n=this.wrapperElement)==null||n.appendChild(o),console.debug("@@@@ element mounted successfully"))}}class g extends _{constructor(e,o){const n={on_payment_approve:i=>{var t,r;(r=(t=this.options.payment)==null?void 0:t.onSuccess)==null||r.call(t,i)},on_payment_error:i=>{var t,r;(r=(t=this.options.payment)==null?void 0:t.onError)==null||r.call(t,i)},on_submit_payment:({actionToCall:i})=>{var t,r;this.postMessage({action:"process_payment",data:{shopperData:(t=this.options.payment)==null?void 0:t.shopperData,hasErrorCallback:!!((r=this.options.payment)!=null&&r.onError),actionToCall:i}})},...o||{}};super(e,n),this.iframeURL=new URL(`${c}/elements?off=${this.options.offer}&checkoutMode=2`),this.options.bid=new Date().getTime()}}class E extends g{constructor(e){super(e),console.debug("@@@@ Initializing OverlayCheckout element"),Promise.resolve().then(()=>k).then(o=>{const n=document.createElement("style");n.innerText=o.default,document.head.append(n)})}onKeyUp(e){e.key==="Escape"&&this.destroy()}attach(e){const o=typeof e=="string"?document.querySelector(e):e;e&&(o==null||o.addEventListener("click",n=>{n.preventDefault();const i=document.createElement("div");i.id="custom-element-lightbox-overlay",i.className="custom-element__lightbox-overlay",i.addEventListener("click",()=>{this.destroy()});const t=document.createElement("div");t.id="custom-element-lightbox-modal",t.className="custom-element__lightbox-modal",super.mount(t),document.body.appendChild(i),document.body.appendChild(t)}),document.addEventListener("keyup",n=>this.onKeyUp(n)),console.debug("@@@@ OverlayCheckout attached successfully"))}mount(e){this.attach(e)}destroy(){var e,o;(e=document.getElementById("custom-element-lightbox-overlay"))==null||e.remove(),(o=document.getElementById("custom-element-lightbox-modal"))==null||o.remove()}}class v extends g{constructor(e){super(e),this.iframeURL=new URL(`${c}/funnel${window.location.search}`),console.debug("@@@@ Initializing SalesFunnel element")}}class C extends g{constructor(e){super(e),this.iframeURL=new URL(`${c}/elements?off=${this.options.offer}&checkoutMode=2`),console.debug("@@@@ Initializing InlineCheckout element")}}class w extends _{constructor(e){var t,r,f;const o={on_generate_tokens_intent_success:d=>{var l,a,s,h;(h=(s=(a=(l=this.options)==null?void 0:l.elementOptions)==null?void 0:a.creditCardForm)==null?void 0:s.onGenerateTokensSuccess)==null||h.call(s,d)},on_generate_tokens_intent_error:d=>{var l,a,s,h;(h=(s=(a=(l=this.options)==null?void 0:l.elementOptions)==null?void 0:a.creditCardForm)==null?void 0:s.onGenerateTokensError)==null||h.call(s,d)},on_credit_card_form_valid:()=>{var d,l,a,s;(s=(a=(l=(d=this.options)==null?void 0:d.elementOptions)==null?void 0:l.creditCardForm)==null?void 0:a.onValidationSuccess)==null||s.call(a)},on_credit_card_form_invalid:d=>{var l,a,s,h;(h=(s=(a=(l=this.options)==null?void 0:l.elementOptions)==null?void 0:a.creditCardForm)==null?void 0:s.onValidationError)==null||h.call(s,d)}},n=(r=(t=e.elementOptions)==null?void 0:t.creditCardForm)==null?void 0:r.gateways,i=n&&Array.isArray(n)&&n.length?n:["ADYEN","WORLDPAY","DLOCAL","PAYU","EBANX"];e.elementOptions={...e.elementOptions,creditCardForm:{...(f=e.elementOptions)==null?void 0:f.creditCardForm,gateways:i}},super(e,o),this.iframeURL=new URL(`${c}/elements/credit-card-form`),console.debug("@@@@ Initializing creditCardForm element")}generateTokens(){this.postMessage({action:"generate_tokens_intent",data:{}}),console.debug("@@@@ tryToGenerateTokens Button triggered")}validateForm(){this.postMessage({action:"validate_intent",data:{}}),console.debug("@@@@ tryToValidateForm Button triggered")}}const b=(m,e={})=>{if(e.off&&(e.offer=e.off),!(e.offer||e.affiliation)&&["overlayCheckout","inlineCheckout"].includes(m))throw new Error("Offer must be present");const n={overlayCheckout:()=>new E(e),inlineCheckout:()=>new C(e),salesFunnel:()=>new v(e),"element:creditCardForm":()=>new w(e)};if(console.debug("@@@@ Initializing Checkout Elements"),!p.includes(m))throw new Error("Element type not available, please check the documentation");return n[m]()};window.checkoutElements={init:b};const k=Object.freeze(Object.defineProperty({__proto__:null,default:".custom-element__iframe{border:none}.custom-element__lightbox-overlay{background-color:#000;position:fixed;width:100%;height:100%;top:0;left:0;opacity:.8}.custom-element__lightbox-modal{position:fixed;width:90%;max-width:90vw;min-height:500px;max-height:90vh;top:5%;left:50%;transform:translate(-50%);overflow:scroll}"},Symbol.toStringTag,{value:"Module"}))});