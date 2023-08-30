"use strict";(self.webpackChunkcodar_15_client=self.webpackChunkcodar_15_client||[]).push([[922],{8922:(H,v,a)=>{a.r(v),a.d(v,{AccountsModule:()=>Y});var i=a(4006),s=a(6895),l=a(858),c=a(590),e=a(4650),p=a(9982);function x(n,r){1&n&&e.\u0275\u0275element(0,"span",11)}function g(n,r){1&n&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1,"Delete"),e.\u0275\u0275elementEnd())}function E(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"tr")(1,"td",6),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td",6),e.\u0275\u0275text(4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"td",6),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(7,"td",7)(8,"a",8),e.\u0275\u0275text(9,"Edit"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"button",9),e.\u0275\u0275listener("click",function(){const f=e.\u0275\u0275restoreView(t).$implicit,u=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(u.deleteAccount(f.id))}),e.\u0275\u0275template(11,x,1,0,"span",10),e.\u0275\u0275template(12,g,2,0,"span",5),e.\u0275\u0275elementEnd()()()}if(2&n){const t=r.$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate3("",t.title," ",t.firstName," ",t.lastName,""),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.email),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.role),e.\u0275\u0275advance(2),e.\u0275\u0275propertyInterpolate1("routerLink","edit/",t.id,""),e.\u0275\u0275advance(2),e.\u0275\u0275property("disabled",t.isDeleting),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.isDeleting),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.isDeleting)}}function b(n,r){1&n&&(e.\u0275\u0275elementStart(0,"tr")(1,"td",12),e.\u0275\u0275element(2,"span",13),e.\u0275\u0275elementEnd()())}let C=(()=>{class n{constructor(t){this.accountService=t}ngOnInit(){this.accountService.getAll().pipe((0,c.P)()).subscribe(t=>this.accounts=t)}deleteAccount(t){this.accounts.find(d=>d.id===t).isDeleting=!0,this.accountService.delete(t).pipe((0,c.P)()).subscribe(()=>{this.accounts=this.accounts.filter(d=>d.id!==t)})}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(p.BR))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ng-component"]],decls:19,vars:2,consts:[["routerLink","add",1,"btn","btn-sm","btn-success","mb-2"],[1,"table","table-striped"],[2,"width","30%"],[2,"width","10%"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"align-middle"],[2,"white-space","nowrap"],[1,"btn","btn-sm","btn-primary","me-1",3,"routerLink"],[1,"btn","btn-sm","btn-danger","btn-delete-account",3,"disabled","click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(t,o){1&t&&(e.\u0275\u0275elementStart(0,"h1"),e.\u0275\u0275text(1,"Accounts"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(2,"p"),e.\u0275\u0275text(3,"All accounts from secure (admin only) api end point:"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"a",0),e.\u0275\u0275text(5,"Create Account"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"table",1)(7,"thead")(8,"tr")(9,"th",2),e.\u0275\u0275text(10,"Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"th",2),e.\u0275\u0275text(12,"Email"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"th",2),e.\u0275\u0275text(14,"Role"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(15,"th",3),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(16,"tbody"),e.\u0275\u0275template(17,E,13,9,"tr",4),e.\u0275\u0275template(18,b,3,0,"tr",5),e.\u0275\u0275elementEnd()()),2&t&&(e.\u0275\u0275advance(17),e.\u0275\u0275property("ngForOf",o.accounts),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!o.accounts))},dependencies:[s.sg,s.O5,l.rH],encapsulation:2}),n})();var h=a(4346);function S(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Title is required"),e.\u0275\u0275elementEnd())}function y(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"div",29),e.\u0275\u0275template(1,S,2,0,"div",21),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.title.errors.required)}}function I(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"First Name is required"),e.\u0275\u0275elementEnd())}function A(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"div",29),e.\u0275\u0275template(1,I,2,0,"div",21),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.firstName.errors.required)}}function w(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Last Name is required"),e.\u0275\u0275elementEnd())}function T(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"div",29),e.\u0275\u0275template(1,w,2,0,"div",21),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.lastName.errors.required)}}function N(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email is required"),e.\u0275\u0275elementEnd())}function k(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Email must be a valid email address"),e.\u0275\u0275elementEnd())}function F(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"div",29),e.\u0275\u0275template(1,N,2,0,"div",21),e.\u0275\u0275template(2,k,2,0,"div",21),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.email.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.email.errors.email)}}function L(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Role is required"),e.\u0275\u0275elementEnd())}function M(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"div",29),e.\u0275\u0275template(1,L,2,0,"div",21),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.role.errors.required)}}function P(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div")(1,"h3",30),e.\u0275\u0275text(2,"Change Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"p"),e.\u0275\u0275text(4,"Leave blank to keep the same password"),e.\u0275\u0275elementEnd()())}function q(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Password is required"),e.\u0275\u0275elementEnd())}function j(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Password must be at least 6 characters"),e.\u0275\u0275elementEnd())}function R(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"div",29),e.\u0275\u0275template(1,q,2,0,"div",21),e.\u0275\u0275template(2,j,2,0,"div",21),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.password.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.password.errors.minlength)}}function B(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Confirm Password is required"),e.\u0275\u0275elementEnd())}function V(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275text(1,"Passwords must match"),e.\u0275\u0275elementEnd())}function O(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"div",29),e.\u0275\u0275template(1,B,2,0,"div",21),e.\u0275\u0275template(2,V,2,0,"div",21),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.confirmPassword.errors.required),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.f.confirmPassword.errors.mustMatch)}}function D(n,r){1&n&&e.\u0275\u0275element(0,"span",31)}const m=function(n){return{"is-invalid":n}};function z(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"form",2),e.\u0275\u0275listener("ngSubmit",function(){e.\u0275\u0275restoreView(t);const d=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(d.onSubmit())}),e.\u0275\u0275elementStart(1,"div",3)(2,"div",4)(3,"label",5),e.\u0275\u0275text(4,"Title"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"select",6),e.\u0275\u0275element(6,"option",7),e.\u0275\u0275elementStart(7,"option",8),e.\u0275\u0275text(8,"Mr"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"option",9),e.\u0275\u0275text(10,"Mrs"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(11,"option",10),e.\u0275\u0275text(12,"Miss"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(13,"option",11),e.\u0275\u0275text(14,"Ms"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(15,y,2,1,"div",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(16,"div",13)(17,"label",5),e.\u0275\u0275text(18,"First Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(19,"input",14),e.\u0275\u0275template(20,A,2,1,"div",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"div",13)(22,"label",5),e.\u0275\u0275text(23,"Last Name"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(24,"input",15),e.\u0275\u0275template(25,T,2,1,"div",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(26,"div",3)(27,"div",16)(28,"label",5),e.\u0275\u0275text(29,"Email"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(30,"input",17),e.\u0275\u0275template(31,F,3,2,"div",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(32,"div",13)(33,"label",5),e.\u0275\u0275text(34,"Role"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(35,"select",18),e.\u0275\u0275element(36,"option",7),e.\u0275\u0275elementStart(37,"option",19),e.\u0275\u0275text(38,"User"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(39,"option",20),e.\u0275\u0275text(40,"Admin"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(41,M,2,1,"div",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(42,P,5,0,"div",21),e.\u0275\u0275elementStart(43,"div",3)(44,"div",22)(45,"label",5),e.\u0275\u0275text(46,"Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(47,"input",23),e.\u0275\u0275template(48,R,3,2,"div",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(49,"div",22)(50,"label",5),e.\u0275\u0275text(51,"Confirm Password"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(52,"input",24),e.\u0275\u0275template(53,O,3,2,"div",12),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(54,"div",25)(55,"button",26),e.\u0275\u0275template(56,D,1,0,"span",27),e.\u0275\u0275text(57," Save "),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(58,"a",28),e.\u0275\u0275text(59,"Cancel"),e.\u0275\u0275elementEnd()()()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("formGroup",t.form),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(18,m,t.submitted&&t.f.title.errors)),e.\u0275\u0275advance(10),e.\u0275\u0275property("ngIf",t.submitted&&t.f.title.errors),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(20,m,t.submitted&&t.f.firstName.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.submitted&&t.f.firstName.errors),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(22,m,t.submitted&&t.f.lastName.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.submitted&&t.f.lastName.errors),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(24,m,t.submitted&&t.f.email.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.submitted&&t.f.email.errors),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(26,m,t.submitted&&t.f.role.errors)),e.\u0275\u0275advance(6),e.\u0275\u0275property("ngIf",t.submitted&&t.f.role.errors),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.id),e.\u0275\u0275advance(5),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(28,m,t.submitted&&t.f.password.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.submitted&&t.f.password.errors),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(30,m,t.submitted&&t.f.confirmPassword.errors)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.submitted&&t.f.confirmPassword.errors),e.\u0275\u0275advance(2),e.\u0275\u0275property("disabled",t.submitting),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.submitting)}}function J(n,r){1&n&&(e.\u0275\u0275elementStart(0,"div",32),e.\u0275\u0275element(1,"span",33),e.\u0275\u0275elementEnd())}let _=(()=>{class n{constructor(t,o,d,f,u){this.formBuilder=t,this.route=o,this.router=d,this.accountService=f,this.alertService=u,this.loading=!1,this.submitting=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.form=this.formBuilder.group({title:["",i.kI.required],firstName:["",i.kI.required],lastName:["",i.kI.required],email:["",[i.kI.required,i.kI.email]],role:["",i.kI.required],password:["",[i.kI.minLength(6),...this.id?[]:[i.kI.required]]],confirmPassword:[""]},{validator:(0,h.Yf)("password","confirmPassword")}),this.title="Create Account",this.id&&(this.title="Edit Account",this.loading=!0,this.accountService.getById(this.id).pipe((0,c.P)()).subscribe(t=>{this.form.patchValue(t),this.loading=!1}))}get f(){return this.form.controls}onSubmit(){if(this.submitted=!0,this.alertService.clear(),this.form.invalid)return;let t,o;this.submitting=!0,this.id?(t=()=>this.accountService.update(this.id,this.form.value),o="Account updated"):(t=()=>this.accountService.create(this.form.value),o="Account created"),t().pipe((0,c.P)()).subscribe({next:()=>{this.alertService.success(o,{keepAfterRouteChange:!0}),this.router.navigateByUrl("/admin/accounts")},error:d=>{this.alertService.error(d),this.submitting=!1}})}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(i.qu),e.\u0275\u0275directiveInject(l.gz),e.\u0275\u0275directiveInject(l.F0),e.\u0275\u0275directiveInject(p.BR),e.\u0275\u0275directiveInject(p.c9))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ng-component"]],decls:4,vars:3,consts:[[3,"formGroup","ngSubmit",4,"ngIf"],["class","text-center m-5",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"mb-3","col-2"],[1,"form-label"],["formControlName","title",1,"form-select",3,"ngClass"],["value",""],["value","Mr"],["value","Mrs"],["value","Miss"],["value","Ms"],["class","invalid-feedback",4,"ngIf"],[1,"mb-3","col-5"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],[1,"mb-3","col-7"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],["formControlName","role",1,"form-select",3,"ngClass"],["value","User"],["value","Admin"],[4,"ngIf"],[1,"mb-3","col"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],["type","password","formControlName","confirmPassword",1,"form-control",3,"ngClass"],[1,"mb-3"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],["routerLink","/admin/accounts",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"pt-3"],[1,"spinner-border","spinner-border-sm","me-1"],[1,"text-center","m-5"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(t,o){1&t&&(e.\u0275\u0275elementStart(0,"h1"),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(2,z,60,32,"form",0),e.\u0275\u0275template(3,J,2,0,"div",1)),2&t&&(e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(o.title),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!o.loading),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",o.loading))},dependencies:[s.mk,s.O5,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.sg,i.u,l.rH],encapsulation:2}),n})();const U=[{path:"",component:C},{path:"add",component:_},{path:"edit/:id",component:_}];let G=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[l.Bz.forChild(U),l.Bz]}),n})(),Y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[s.ez,i.UX,G]}),n})()}}]);