"use strict";(self["webpackChunkvue_event"]=self["webpackChunkvue_event"]||[]).push([[114],{8637:function(t,a,e){e.r(a),e.d(a,{default:function(){return u}});var s=function(){var t=this,a=t._self._c;return a("div",[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("更换头像")])]),a("div",[t.avatar?a("img",{attrs:{src:t.avatar,alt:""}}):a("img",{attrs:{src:e(9389),alt:""}}),a("div",{staticClass:"btn-box"},[a("input",{ref:"iptRef",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFileChange}}),a("el-button",{attrs:{type:"primary"},on:{click:t.chooseImg}},[a("i",{staticClass:"el-icon-plus"}),t._v("选择图片")]),a("el-button",{attrs:{type:"success",disabled:""===t.avatar},on:{click:t.uploadFn}},[a("i",{staticClass:"el-icon-upload"}),t._v("上传头像")])],1)])])],1)},i=[],r=e(7877),n={name:"my-userAvatar",data(){return{avatar:""}},methods:{chooseImg(){this.$refs.iptRef.click()},onFileChange(t){console.log(t);const a=t.target.files;if(0===a.length)this.avatar="";else{const t=new FileReader;t.readAsDataURL(a[0]),t.onload=t=>{this.avatar=t.target.result}}},async uploadFn(){const{data:t}=await(0,r.fo)(this.avatar);if(0!==t.code)return this.$message.error(t.message);this.$message.success({message:`${t.message}`,duration:2e3,customClass:"windthClass"}),this.$store.dispatch("getUserInfoActions")}}},c=n,l=e(1001),o=(0,l.Z)(c,s,i,!1,null,"e7a9ee24",null),u=o.exports},9389:function(t,a,e){t.exports=e.p+"img/avatar.b216c21d.jpg"}}]);
//# sourceMappingURL=114.ebfa9841.js.map