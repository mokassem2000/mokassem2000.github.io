import{a as F}from"./chunk-3M5OLWAC.js";import{e as ae,j as se}from"./chunk-3E37ZMTN.js";import{e as I,qa as ne,ra as O,ua as E,wa as D}from"./chunk-63OGU6KW.js";import{$c as ee,D as s,Da as N,Eb as g,Fb as c,Gb as R,Hb as L,Jb as $,Jc as y,Kc as X,Pb as b,Qb as v,Rb as q,Ub as J,Xb as Q,Yb as T,Zc as Z,ad as te,bc as j,bd as re,da as l,dc as _,ea as x,ec as P,fb as u,fd as ie,ia as m,ic as G,ja as k,kb as M,lc as Y,o as B,pc as w,rb as V,rc as K,s as d,sb as S,sc as W,tb as H,vb as C,xa as f,xb as A}from"./chunk-MKGVNHRG.js";var z=class e{getToken(){return localStorage.getItem("idToken")}setToken(r){localStorage.setItem("idToken",r)}removeToken(){localStorage.removeItem("idToken")}isTokenValid(){let r=this.getToken();if(!r)return!1;try{let t=this.decodeToken(r);if(!t)return!1;let i=Math.floor(Date.now()/1e3);return t.exp>i}catch(t){return console.error("Error validating token:",t),!1}}getTokenExpiration(){let r=this.getToken();if(!r)return null;try{let t=this.decodeToken(r);return t?new Date(t.exp*1e3):null}catch(t){return console.error("Error getting token expiration:",t),null}}getTimeUntilExpiration(){let r=this.getTokenExpiration();if(!r)return 0;let t=Math.floor(Date.now()/1e3),i=Math.floor(r.getTime()/1e3);return Math.max(0,i-t)}decodeToken(r){try{let i=r.split(".")[1].replace(/-/g,"+").replace(/_/g,"/"),n=decodeURIComponent(atob(i).split("").map(o=>"%"+("00"+o.charCodeAt(0).toString(16)).slice(-2)).join(""));return JSON.parse(n)}catch(t){return console.error("Error decoding token:",t),null}}getUserFromToken(){let r=this.getToken();if(!r)return null;try{let t=this.decodeToken(r);return t||null}catch(t){return console.error("Error getting user from token:",t),null}}static \u0275fac=function(t){return new(t||e)};static \u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})};var oe=class e{constructor(r,t){this.http=r;this.tokenService=t}apiUrl=F.apiUrl;login(r){let t=`${this.apiUrl}/auth/signin`;return this.http.post(t,r).pipe(d(i=>(this.storeAuthData(i),i)),s(this.handleError))}storeAuthData(r){this.tokenService.setToken(r.accessToken),localStorage.setItem("refreshToken",r.refreshToken),localStorage.setItem("idToken",r.idToken),localStorage.setItem("user",JSON.stringify(r.user))}confirmSignUp(r){return this.http.post(`${this.apiUrl}/auth/confirm-signup`,r).pipe(s(this.handleError))}resendConfirmation(r){return this.http.post(`${this.apiUrl}/auth/resend-confirmation`,r).pipe(s(this.handleError))}registerFirm(r){let t=`${this.apiUrl}/auth/register-firm`;return console.log("AuthService: Sending registration data to backend:",JSON.stringify(r,null,2)),console.log("AuthService: URL:",t),this.http.post(t,r).pipe(d(i=>(console.log("AuthService: Response received:",i),this.handleRegisterResponse(i))),s(i=>(console.log("AuthService: Error occurred:",i),this.handleError(i))))}getFirmLawyers(){let r=`${this.apiUrl}/lawyers`;return this.http.get(r).pipe(s(this.handleError))}validateFirmData(r){let t=`${this.apiUrl}/auth/validate-firm-registration`;return this.http.post(t,r).pipe(s(i=>this.handleError(i)))}handleRegisterResponse(r){return r.data?.token&&(this.tokenService.setToken(r.data.token),localStorage.setItem("user",JSON.stringify(r.data.user)),localStorage.setItem("firm",JSON.stringify(r.data.firm))),r}handleError(r){let t="\u062D\u062F\u062B \u062E\u0637\u0623 \u063A\u064A\u0631 \u0645\u062A\u0648\u0642\u0639";if(r.error instanceof ErrorEvent)t=r.error.message;else switch(r.status){case 400:t="\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0627\u0644\u0645\u062F\u062E\u0644\u0629";break;case 401:t="\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0623\u0648 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629";break;case 409:t="\u0627\u0644\u0645\u0643\u062A\u0628 \u0623\u0648 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0633\u062A\u062E\u062F\u0645 \u0628\u0627\u0644\u0641\u0639\u0644";break;case 422:t=r.error?.message||"\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u0627\u0644\u062D\u0629";break;case 500:t="\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645\u060C \u064A\u0631\u062C\u0649 \u0627\u0644\u0645\u062D\u0627\u0648\u0644\u0629 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649 \u0644\u0627\u062D\u0642\u0627\u064B";break;default:t=r.error?.message||`\u062E\u0637\u0623 \u0641\u064A \u0627\u0644\u062E\u0627\u062F\u0645: ${r.status}`}return B(()=>new Error(t))}clearAuthData(){this.tokenService.removeToken(),localStorage.removeItem("refreshToken"),localStorage.removeItem("idToken"),localStorage.removeItem("user"),localStorage.removeItem("firm")}getStoredAuthData(){return{token:this.tokenService.getToken(),user:JSON.parse(localStorage.getItem("user")||"null"),firm:JSON.parse(localStorage.getItem("firm")||"null")}}isAuthenticated(){return this.tokenService.isTokenValid()}refreshToken(r){let t=`${this.apiUrl}/auth/refresh-token`;return this.http.post(t,{refreshToken:r}).pipe(d(i=>(this.storeAuthData(i),i)),s(this.handleError))}forgotPassword(r){let t=`${this.apiUrl}/auth/forgot-password`;return this.http.post(t,{email:r}).pipe(s(this.handleError))}confirmForgotPassword(r,t,i){let n=`${this.apiUrl}/auth/confirm-forgot-password`;return this.http.post(n,{email:r,confirmationCode:t,newPassword:i}).pipe(s(this.handleError))}verifyFirmRegistrationOtp(r,t,i,n){let o=`${this.apiUrl}/auth/verify-otp`,a={to:r,code:t};i&&(a.firmId=i);let p={};return n&&(p.Authorization=`Bearer ${n}`),console.log("AuthService: Verifying firm registration OTP:",a,"with headers:",p),this.http.post(o,a,{headers:p}).pipe(d(h=>(console.log("AuthService: OTP verification success:",h),h)),s(h=>(console.log("AuthService: OTP verification error:",h),this.handleError(h))))}resendFirmRegistrationOtp(r,t,i){let n=`${this.apiUrl}/auth/resend-otp`,o={to:r,firmName:"Takalaw"};t&&(o.firmId=t);let a={};return i&&(a.Authorization=`Bearer ${i}`),console.log("AuthService: Resending firm registration OTP:",o,"with headers:",a),this.http.post(n,o,{headers:a}).pipe(d(p=>(console.log("AuthService: OTP resend success:",p),p)),s(p=>(console.log("AuthService: OTP resend error:",p),this.handleError(p))))}static \u0275fac=function(t){return new(t||e)(m(I),m(z))};static \u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})};var ge=({dt:e})=>`
.p-textarea {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("textarea.color")};
    background: ${e("textarea.background")};
    padding: ${e("textarea.padding.y")} ${e("textarea.padding.x")};
    border: 1px solid ${e("textarea.border.color")};
    transition: background ${e("textarea.transition.duration")}, color ${e("textarea.transition.duration")}, border-color ${e("textarea.transition.duration")}, outline-color ${e("textarea.transition.duration")}, box-shadow ${e("textarea.transition.duration")};
    appearance: none;
    border-radius: ${e("textarea.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("textarea.shadow")};
}

.p-textarea.ng-invalid.ng-dirty {
    border-color: ${e("textarea.invalid.border.color")};
}

.p-textarea:enabled:hover {
    border-color: ${e("textarea.hover.border.color")};
}

.p-textarea:enabled:focus {
    border-color: ${e("textarea.focus.border.color")};
    box-shadow: ${e("textarea.focus.ring.shadow")};
    outline: ${e("textarea.focus.ring.width")} ${e("textarea.focus.ring.style")} ${e("textarea.focus.ring.color")};
    outline-offset: ${e("textarea.focus.ring.offset")};
}

.p-textarea.p-invalid {
    border-color: ${e("textarea.invalid.border.color")};
}

.p-textarea.p-variant-filled {
    background: ${e("textarea.filled.background")};
}

.p-textarea.p-variant-filled:enabled:focus {
    background: ${e("textarea.filled.focus.background")};
}

.p-textarea:disabled {
    opacity: 1;
    background: ${e("textarea.disabled.background")};
    color: ${e("textarea.disabled.color")};
}

.p-textarea::placeholder {
    color: ${e("textarea.placeholder.color")};
}

.p-textarea.ng-invalid.ng-dirty::placeholder {
    color: ${e("textarea.invalid.placeholder.color")};
}

.p-textarea-fluid {
    width: 100%;
}

.p-textarea-resizable {
    overflow: hidden;
    resize: none;
}

.p-textarea-sm {
    font-size: ${e("textarea.sm.font.size")};
    padding-block: ${e("textarea.sm.padding.y")};
    padding-inline: ${e("textarea.sm.padding.x")};
}

.p-textarea-lg {
    font-size: ${e("textarea.lg.font.size")};
    padding-block: ${e("textarea.lg.padding.y")};
    padding-inline: ${e("textarea.lg.padding.x")};
}
`,he={root:({instance:e,props:r})=>["p-textarea p-component",{"p-filled":e.filled,"p-textarea-resizable ":r.autoResize,"p-invalid":r.invalid,"p-variant-filled":r.variant?r.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled","p-textarea-fluid":r.fluid}]},le=(()=>{class e extends E{name="textarea";theme=ge;classes=he;static \u0275fac=(()=>{let t;return function(n){return(t||(t=f(e)))(n||e)}})();static \u0275prov=l({token:e,factory:e.\u0275fac})}return e})();var Ne=(()=>{class e extends D{ngModel;control;autoResize;variant;fluid=!1;pSize;onResize=new N;filled;cachedScrollHeight;ngModelSubscription;ngControlSubscription;_componentStyle=k(le);constructor(t,i){super(),this.ngModel=t,this.control=i}ngOnInit(){super.ngOnInit(),this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}ngAfterViewInit(){super.ngAfterViewInit(),this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(t){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}resize(t){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(t||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||e)(M(se,8),M(ae,8))};static \u0275dir=H({type:e,selectors:[["","pTextarea",""]],hostAttrs:[1,"p-textarea","p-component"],hostVars:16,hostBindings:function(i,n){i&1&&Q("input",function(a){return n.onInput(a)}),i&2&&L("p-filled",n.filled)("p-textarea-resizable",n.autoResize)("p-variant-filled",n.variant==="filled"||n.config.inputStyle()==="filled"||n.config.inputVariant()==="filled")("p-textarea-fluid",n.hasFluid)("p-textarea-sm",n.pSize==="small")("p-inputfield-sm",n.pSize==="small")("p-textarea-lg",n.pSize==="large")("p-inputfield-lg",n.pSize==="large")},inputs:{autoResize:[2,"autoResize","autoResize",y],variant:"variant",fluid:[2,"fluid","fluid",y],pSize:"pSize"},outputs:{onResize:"onResize"},features:[w([le]),C]})}return e})(),Ve=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=S({type:e});static \u0275inj=x({})}return e})();var me=["content"],fe=(e,r)=>({"p-progressbar p-component":!0,"p-progressbar-determinate":e,"p-progressbar-indeterminate":r}),be=e=>({$implicit:e});function ve(e,r){if(e&1&&(b(0,"div"),G(1),v()),e&2){let t=T(2);R("display",t.value!=null&&t.value!==0?"flex":"none"),g("data-pc-section","label"),u(),Y("",t.value,"",t.unit,"")}}function ye(e,r){e&1&&J(0)}function xe(e,r){if(e&1&&(b(0,"div",3)(1,"div",4),A(2,ve,2,5,"div",5)(3,ye,1,0,"ng-container",6),v()()),e&2){let t=T();$(t.valueStyleClass),R("width",t.value+"%")("background",t.color),c("ngClass","p-progressbar-value p-progressbar-value-animate"),g("data-pc-section","value"),u(2),c("ngIf",t.showValue&&!t.contentTemplate&&!t._contentTemplate),u(),c("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",K(11,be,t.value))}}function ke(e,r){if(e&1&&(b(0,"div",7),q(1,"div",8),v()),e&2){let t=T();$(t.valueStyleClass),c("ngClass","p-progressbar-indeterminate-container"),g("data-pc-section","container"),u(),R("background",t.color),g("data-pc-section","value")}}var Se=({dt:e})=>`
.p-progressbar {
    position: relative;
    overflow: hidden;
    height: ${e("progressbar.height")};
    background: ${e("progressbar.background")};
    border-radius: ${e("progressbar.border.radius")};
}

.p-progressbar-value {
    margin: 0;
    background: ${e("progressbar.value.background")};
}

.p-progressbar-label {
    color: ${e("progressbar.label.color")};
    font-size: ${e("progressbar.label.font.size")};
    font-weight: ${e("progressbar.label.font.weight")};
}

.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: width 1s ease-in-out;
}

.p-progressbar-determinate .p-progressbar-label {
    display: inline-flex;
}

.p-progressbar-indeterminate .p-progressbar-value::before {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}

.p-progressbar-indeterminate .p-progressbar-value::after {
    content: "";
    position: absolute;
    background: inherit;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    will-change: inset-inline-start, inset-inline-end;
    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    animation-delay: 1.15s;
}

@-webkit-keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@keyframes p-progressbar-indeterminate-anim {
    0% {
        inset-inline-start: -35%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
    100% {
        inset-inline-start: 100%;
        inset-inline-end: -90%;
    }
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
@keyframes p-progressbar-indeterminate-anim-short {
    0% {
        inset-inline-start: -200%;
        inset-inline-end: 100%;
    }
    60% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
    100% {
        inset-inline-start: 107%;
        inset-inline-end: -8%;
    }
}
`,Ce={root:({instance:e})=>["p-progressbar p-component",{"p-progressbar-determinate":e.determinate,"p-progressbar-indeterminate":e.indeterminate}],value:"p-progressbar-value",label:"p-progressbar-label"},pe=(()=>{class e extends E{name="progressbar";theme=Se;classes=Ce;static \u0275fac=(()=>{let t;return function(n){return(t||(t=f(e)))(n||e)}})();static \u0275prov=l({token:e,factory:e.\u0275fac})}return e})();var Re=(()=>{class e extends D{value;showValue=!0;styleClass;valueStyleClass;style;unit="%";mode="determinate";color;contentTemplate;_componentStyle=k(pe);templates;_contentTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template}})}static \u0275fac=(()=>{let t;return function(n){return(t||(t=f(e)))(n||e)}})();static \u0275cmp=V({type:e,selectors:[["p-progressBar"],["p-progressbar"],["p-progress-bar"]],contentQueries:function(i,n,o){if(i&1&&(j(o,me,4),j(o,ne,4)),i&2){let a;_(a=P())&&(n.contentTemplate=a.first),_(a=P())&&(n.templates=a)}},inputs:{value:[2,"value","value",X],showValue:[2,"showValue","showValue",y],styleClass:"styleClass",valueStyleClass:"valueStyleClass",style:"style",unit:"unit",mode:"mode",color:"color"},features:[w([pe]),C],decls:3,vars:15,consts:[["role","progressbar",3,"ngStyle","ngClass"],["style","display:flex",3,"ngClass","class","width","background",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[2,"display","flex",3,"ngClass"],[1,"p-progressbar-label"],[3,"display",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass"],[1,"p-progressbar-value","p-progressbar-value-animate"]],template:function(i,n){i&1&&(b(0,"div",0),A(1,xe,4,13,"div",1)(2,ke,2,7,"div",2),v()),i&2&&($(n.styleClass),c("ngStyle",n.style)("ngClass",W(12,fe,n.mode==="determinate",n.mode==="indeterminate")),g("aria-valuemin",0)("aria-valuenow",n.value)("aria-valuemax",100)("data-pc-name","progressbar")("data-pc-section","root")("aria-label",n.value+n.unit),u(),c("ngIf",n.mode==="determinate"),u(),c("ngIf",n.mode==="indeterminate"))},dependencies:[ie,Z,ee,re,te,O],encapsulation:2,changeDetection:0})}return e})(),nt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=S({type:e});static \u0275inj=x({imports:[Re,O,O]})}return e})();var ce=class e{constructor(r){this.http=r}apiUrl=`${F.apiUrl}/cases`;getCases(){return this.http.get(this.apiUrl)}getCase(r){return this.http.get(`${this.apiUrl}/${r}`)}createCase(r){return this.http.post(this.apiUrl,r)}updateCase(r,t){return this.http.patch(`${this.apiUrl}/${r}`,t)}deleteCase(r){return this.http.delete(`${this.apiUrl}/${r}`)}archiveCase(r){return this.http.post(`${this.apiUrl}/${r}/archive`,{})}restoreCase(r){return this.http.post(`${this.apiUrl}/${r}/restore`,{})}addNote(r,t){return this.http.post(`${this.apiUrl}/${r}/notes`,t)}addDocument(r,t){return this.http.post(`${this.apiUrl}/${r}/documents`,t)}addSession(r,t){return this.http.post(`${this.apiUrl}/${r}/sessions`,t)}addTask(r,t){return this.http.post(`${this.apiUrl}/${r}/tasks`,t)}addMeeting(r,t){return this.http.post(`${this.apiUrl}/${r}/meetings`,t)}addExpense(r,t){return this.http.post(`${this.apiUrl}/${r}/expenses`,t)}static \u0275fac=function(t){return new(t||e)(m(I))};static \u0275prov=l({token:e,factory:e.\u0275fac,providedIn:"root"})};export{z as a,oe as b,Ne as c,Ve as d,Re as e,nt as f,ce as g};
