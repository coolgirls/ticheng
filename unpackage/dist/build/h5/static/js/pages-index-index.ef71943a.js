(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{2588:function(t,e,i){"use strict";i.r(e);var o=i("a73d"),n=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);e["default"]=n.a},3400:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o="http://122.114.88.110:8081/api/",n={url:o};e.default=n},"37d7":function(t,e,i){"use strict";i.r(e);var o=i("5f1a"),n=i("2588");for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);i("6f47");var r=i("2877"),s=Object(r["a"])(n["default"],o["a"],o["b"],!1,null,"2ebf90f9",null);e["default"]=s.exports},"3ca7":function(t,e,i){var o=i("aaf1");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var n=i("4f06").default;n("f7174ee0",o,!0,{sourceMap:!1,shadowMode:!1})},"5f1a":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},t._l(t.productList,function(e,o){return i("v-uni-view",{staticClass:"product-item"},["png"==e.ext?i("v-uni-view",{staticClass:"item-pic"},[i("v-uni-image",{attrs:{src:"http://110.fonery.cn:8025"+e.ProductFileName}})],1):i("v-uni-view",{staticClass:"item-pic"},[i("v-uni-video",{staticClass:"videos",attrs:{src:"http://110.fonery.cn:8025"+e.ProductFileName,"show-center-play-btn":"",objectFit:"fill",controls:""},on:{error:function(e){e=t.$handleEvent(e),t.videoErrorCallback(e)}}})],1),i("v-uni-view",{staticClass:"product-title"},[t._v(t._s(e.ProductName))]),""!=e.ProductDesciption?i("v-uni-view",{staticClass:"product-desc"},[t._v(t._s(e.ProductDesciption))]):t._e(),i("v-uni-view",{staticClass:"product-price"},[t._v("￥"+t._s(e.Prise))])],1)}),1)},n=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return n})},"6f47":function(t,e,i){"use strict";var o=i("3ca7"),n=i.n(o);n.a},a73d:function(t,e,i){"use strict";var o=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(i("3400")),a={data:function(){return{productList:[],ext:"",userId:""}},onLoad:function(){this.userId=uni.getStorageSync("userId"),console.log("id",this.userId),""!=this.userId?this.showList():uni.navigateTo({url:"../login/login"})},onShow:function(){this.userId=uni.getStorageSync("userId"),console.log("id2",this.userId),""!=this.userId?this.showList():uni.navigateTo({url:"../login/login"})},methods:{showList:function(){var t=this;uni.request({url:n.default.url+"Product/GetDisplayProduct",header:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},method:"GET",success:function(e){if(console.log("列表",e),0==e.data.code){for(var i=e.data.data,o=0;o<i.length;o++){var n=i[o].ProductFileName,a=n.lastIndexOf("."),r=n.substr(a+1);i[o].ext=r}t.productList=i}else uni.showToast({title:e.data.ErrMsg})}})}}};e.default=a},aaf1:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-2ebf90f9]{background:#f7f7f8;font-size:14px}.content .product-item[data-v-2ebf90f9]{background:#fff;border-radius:%?20?%;margin-bottom:%?36?%}.content .product-item .item-pic[data-v-2ebf90f9]{width:%?750?%;height:%?292?%}.content .product-item .item-pic .videos[data-v-2ebf90f9],.content .product-item .item-pic uni-image[data-v-2ebf90f9]{width:100%;height:100%;display:block;border-top-left-radius:%?36?%;border-top-right-radius:%?36?%}.content .product-item .product-title[data-v-2ebf90f9]{height:23px;line-height:23px;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis;padding-left:%?10?%}.content .product-item .product-desc[data-v-2ebf90f9]{height:23px;line-height:23px;padding-left:%?10?%}.content .product-item .product-price[data-v-2ebf90f9]{color:#e51c23;height:30px;line-height:30px;padding-left:%?10?%}body.?%PAGE?%[data-v-2ebf90f9]{background:#f7f7f8}",""])}}]);