"use strict";(self["webpackChunkfinal_challenge"]=self["webpackChunkfinal_challenge"]||[]).push([[895],{4895:function(a,s,e){e.r(s),e.d(s,{default:function(){return x}});var t=e(6768),d=e(5130);const o=a=>((0,t.Qi)("data-v-6f412df1"),a=a(),(0,t.jt)(),a),l={class:"container custom-margin-top"},n={class:"card mb-3"},r={class:"row g-0 d-flex align-items-center"},c=o((()=>(0,t.Lk)("div",{class:"col-lg-4 d-none d-lg-flex"},[(0,t.Lk)("img",{src:"https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg",alt:"Trendy Pants and Shoes",class:"w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"})],-1))),i={class:"col-lg-8"},u={class:"card-body py-5 px-md-5"},f=o((()=>(0,t.Lk)("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1))),m={class:"mb-2"},p=o((()=>(0,t.Lk)("label",{for:"inputEmail",class:"sr-only"},"請輸入Email",-1))),v={class:"mb-2"},h=o((()=>(0,t.Lk)("label",{for:"inputPassword",class:"sr-only"},"請輸入密碼",-1))),b=(0,t.Fv)('<div class="row mb-4" data-v-6f412df1><div class="col d-flex justify-content-center" data-v-6f412df1><div class="form-check" data-v-6f412df1><input class="form-check-input" type="checkbox" value="" id="form2Example31" checked data-v-6f412df1><label class="form-check-label" for="form2Example31" data-v-6f412df1> 記住我 </label></div></div><div class="col" data-v-6f412df1><a href="#!" data-v-6f412df1>忘記密碼?</a></div></div><div class="text-end mt-4" data-v-6f412df1><button class="btn btn-lg btn-primary btn-block" type="submit" data-v-6f412df1>登入</button></div>',2);function k(a,s,e,o,k,g){return(0,t.uX)(),(0,t.CE)("div",l,[(0,t.Lk)("div",n,[(0,t.Lk)("div",r,[c,(0,t.Lk)("div",i,[(0,t.Lk)("div",u,[(0,t.Lk)("form",{onSubmit:s[2]||(s[2]=(0,d.D$)(((...a)=>g.signIn&&g.signIn(...a)),["prevent"]))},[f,(0,t.Lk)("div",m,[p,(0,t.bo)((0,t.Lk)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":s[0]||(s[0]=a=>k.user.username=a)},null,512),[[d.Jo,k.user.username]])]),(0,t.Lk)("div",v,[h,(0,t.bo)((0,t.Lk)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":s[1]||(s[1]=a=>k.user.password=a)},null,512),[[d.Jo,k.user.password]])]),b],32)])])])])])}e(4114);var g={name:"Login",data(){return{user:{username:"",password:""}}},methods:{signIn(){const a="https://vue3-course-api.hexschool.io/admin/signin";console.log(a),this.$http.post(a,this.user).then((a=>{if(console.log(a),a.data.success){const s=a.data.token,e=a.data.expired;document.cookie=`hexToken=${s}; expires=${new Date(e)};`,this.$router.push("/dashboard/products")}}))}}},w=e(1241);const L=(0,w.A)(g,[["render",k],["__scopeId","data-v-6f412df1"]]);var x=L}}]);
//# sourceMappingURL=895.9fa239f5.js.map