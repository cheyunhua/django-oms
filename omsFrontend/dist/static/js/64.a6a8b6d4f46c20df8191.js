webpackJsonp([64],{VPNs:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Zk8K"),o=a("vMJZ"),l=a("nSkA"),s={props:["rowdata"],data:function(){return{create_user:localStorage.getItem("username"),rules:{type:[{required:!0,message:"请输入正确的内容",trigger:"change"}],m_id:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],action_user:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},users:[],sendnotice:!1}},created:function(){this.getTicketUsers()},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(a){if(!a)return console.log("error submit!!"),!1;Object(r.t)(t.rowdata.id,t.rowdata).then(function(a){if(t.sendnotice){var r={action_user:t.rowdata.action_user,title:"【支付通道修改】",message:"修改人: "+t.create_user+"\n处理人: "+t.rowdata.action_user+"\n平台: "+t.rowdata.platform+"     商户: "+t.rowdata.merchant+"     通道: "+t.rowdata.type};Object(l.h)(r)}t.$emit("formdata",a.data),t.$refs[e].resetFields()}).catch(function(e){t.$message.error("检查修改项是否正确"),console.log(e)})})},getTicketUsers:function(){var e=this;Object(o.f)().then(function(t){e.users=t.data})}}},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"ruleForm",attrs:{model:e.rowdata,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"平台",prop:"platform"}},[a("el-input",{attrs:{disabled:""},model:{value:e.rowdata.platform,callback:function(t){e.$set(e.rowdata,"platform",t)},expression:"rowdata.platform"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商户",prop:"merchant"}},[a("el-input",{attrs:{disabled:""},model:{value:e.rowdata.merchant,callback:function(t){e.$set(e.rowdata,"merchant",t)},expression:"rowdata.merchant"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-input",{attrs:{disabled:""},model:{value:e.rowdata.type,callback:function(t){e.$set(e.rowdata,"type",t)},expression:"rowdata.type"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"费率",prop:"rate"}},[a("el-input",{model:{value:e.rowdata.rate,callback:function(t){e.$set(e.rowdata,"rate",t)},expression:"rowdata.rate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"key信息",prop:"keyinfo"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.rowdata.keyinfo,callback:function(t){e.$set(e.rowdata,"keyinfo",t)},expression:"rowdata.keyinfo"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"转发域名",prop:"m_forwardurl"}},[a("el-input",{model:{value:e.rowdata.m_forwardurl,callback:function(t){e.$set(e.rowdata,"m_forwardurl",t)},expression:"rowdata.m_forwardurl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"提交域名",prop:"m_submiturl"}},[a("el-input",{model:{value:e.rowdata.m_submiturl,callback:function(t){e.$set(e.rowdata,"m_submiturl",t)},expression:"rowdata.m_submiturl"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"通知人",prop:"action_user"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择通知人"},model:{value:e.rowdata.action_user,callback:function(t){e.$set(e.rowdata,"action_user",t)},expression:"rowdata.action_user"}},e._l(e.users,function(e){return a("el-option",{key:e.id,attrs:{value:e.username}})})),e._v(" "),a("el-checkbox",{model:{value:e.sendnotice,callback:function(t){e.sendnotice=t},expression:"sendnotice"}},[e._v("发送通知")])],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("更新")])],1)],1)},i=[],u={render:n,staticRenderFns:i},c=u,d=a("VU/8"),m=d(s,c,!1,null,null,null);t.default=m.exports}});