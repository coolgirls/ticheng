(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ticheng-ticheng"],{"0ddc":function(t,i,e){var s=e("aa00");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=e("4f06").default;a("7593bea2",s,!0,{sourceMap:!1,shadowMode:!1})},"1e6f":function(t,i,e){"use strict";e.r(i);var s=e("7e9b"),a=e("c79d");for(var n in a)"default"!==n&&function(t){e.d(i,t,function(){return a[t]})}(n);e("415b");var l=e("2877"),d=Object(l["a"])(a["default"],s["a"],s["b"],!1,null,"599d1d14",null);i["default"]=d.exports},3400:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s="http://122.114.88.110:8081/api/",a={url:s};i.default=a},"415b":function(t,i,e){"use strict";var s=e("0ddc"),a=e.n(s);a.a},"7e9b":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"content"},t._l(t.tichengList,function(i,s){return e("v-uni-view",{staticClass:"ticheng-item"},[e("v-uni-view",{staticClass:"item-title"},[t._v("提成明细")]),e("v-uni-view",{staticClass:"item-list"},[e("v-uni-label",{staticClass:"list-title"},[t._v("产品名称")]),e("v-uni-text",{staticClass:"list-desc"},[t._v(t._s(i.ProductName))])],1),e("v-uni-view",{staticClass:"item-list"},[e("v-uni-label",{staticClass:"list-title"},[t._v("产品金额")]),e("v-uni-text",{staticClass:"list-desc"},[t._v(t._s(i.ProductPrise)+"元")])],1),e("v-uni-view",{staticClass:"item-list"},[e("v-uni-label",{staticClass:"list-title"},[t._v("分成百分比")]),e("v-uni-text",{staticClass:"list-desc"},[t._v(t._s(i.IngredientRed)+"%")])],1),e("v-uni-view",{staticClass:"item-list"},[e("v-uni-label",{staticClass:"list-title"},[t._v("产品分红")]),e("v-uni-text",{staticClass:"list-desc"},[t._v(t._s(i.ProductRebate)+"元")])],1),e("v-uni-view",{staticClass:"item-list"},[e("v-uni-label",{staticClass:"list-title"},[t._v("备注")]),e("v-uni-text",{staticClass:"list-desc"},[t._v(t._s(i.Remake))])],1)],1)}),1)},a=[];e.d(i,"a",function(){return s}),e.d(i,"b",function(){return a})},"8d0f":function(t,i,e){"use strict";var s=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=s(e("3400")),n={data:function(){return{tichengList:[]}},onLoad:function(){var t=this,i=uni.getStorageSync("userId");console.log("userid",i),uni.request({url:a.default.url+"CommissionDetail/GetCommissionDetail?ID="+i,header:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},method:"GET",success:function(i){uni.hideLoading(),console.log("提成明细",i),0==i.data.code?t.tichengList=i.data.data:uni.showToast({title:i.data.ErrMsg})}})},methods:{}};i.default=n},aa00:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,"uni-page-body[data-v-599d1d14]{background:#f7f7f8;font-size:14px}.content .ticheng-item[data-v-599d1d14]{background:#fff;width:80%;margin:6% 10%;border-radius:5px;overflow:hidden;padding-bottom:%?30?%}.content .ticheng-item .item-title[data-v-599d1d14]{margin:%?20?% 0 %?40?% %?30?%}.content .ticheng-item .item-list[data-v-599d1d14]{margin-left:%?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;line-height:25px}.content .ticheng-item .item-list .list-title[data-v-599d1d14]{color:#333;width:40%}body.?%PAGE?%[data-v-599d1d14]{background:#f7f7f8}",""])},c79d:function(t,i,e){"use strict";e.r(i);var s=e("8d0f"),a=e.n(s);for(var n in s)"default"!==n&&function(t){e.d(i,t,function(){return s[t]})}(n);i["default"]=a.a}}]);