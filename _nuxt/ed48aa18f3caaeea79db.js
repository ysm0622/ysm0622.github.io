(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{338:function(t,o,r){"use strict";r.d(o,"a",function(){return n});var n=[{name:"Los Angeles",country:"California",photoNum:74,thumbnail:32},{name:"San Francisco",country:"California",photoNum:29,thumbnail:2},{name:"Las Vegas",country:"California",photoNum:19,thumbnail:15},{name:"Amsterdam",country:"Netherlands",photoNum:52,thumbnail:39},{name:"Dusseldorf",country:"Germany",photoNum:23,thumbnail:19},{name:"Munchen",country:"California",photoNum:33,thumbnail:22},{name:"Salzburg",country:"Austria",photoNum:26,thumbnail:9},{name:"Venice",country:"Italia",photoNum:53,thumbnail:41},{name:"Milano",country:"Italia",photoNum:23,thumbnail:2},{name:"Luzern",country:"Swiss",photoNum:36,thumbnail:3},{name:"Paris",country:"France",photoNum:23,thumbnail:18},{name:"London",country:"England",photoNum:20,thumbnail:8}]},340:function(t,o,r){var content=r(348);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("aca67b14",content,!0,{sourceMap:!1})},344:function(t,o,r){"use strict";function n(t){return function(t){if(Array.isArray(t)){for(var i=0,o=new Array(t.length);i<t.length;i++)o[i]=t[i];return o}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(o,"a",function(){return n})},347:function(t,o,r){"use strict";var n=r(340);r.n(n).a},348:function(t,o,r){(t.exports=r(15)(!1)).push([t.i,'@font-face{font-family:Spoqa Han Sans;src:url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459557/fonts/SpoqaHanSansBold.eot);src:url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459557/fonts/SpoqaHanSansBold.eot#iefix) format("embedded-opentype"),url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459557/fonts/SpoqaHanSansBold.woff2) format("woff2"),url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459557/fonts/SpoqaHanSansBold.woff) format("woff"),url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459557/fonts/SpoqaHanSansBold.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:Poppins;src:url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459678/fonts/Poppins-ExtraBold.eot);src:url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459678/fonts/Poppins-ExtraBold.eot#iefix) format("embedded-opentype"),url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459678/fonts/Poppins-ExtraBold.woff2) format("woff2"),url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459678/fonts/Poppins-ExtraBold.woff) format("woff"),url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459678/fonts/Poppins-ExtraBold.ttf) format("truetype");font-weight:900;font-style:normal}@font-face{font-family:Poppins;src:url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459650/fonts/Poppins-Regular.eot);src:url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459650/fonts/Poppins-Regular.eot#iefix) format("embedded-opentype"),url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459650/fonts/Poppins-Regular.woff2) format("woff2"),url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459650/fonts/Poppins-Regular.woff) format("woff"),url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459650/fonts/Poppins-Regular.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:Permanent Marker;src:url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459489/fonts/PermanentMarker-Regular.eot);src:url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459489/fonts/PermanentMarker-Regular.eot#iefix) format("embedded-opentype"),url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459489/fonts/PermanentMarker-Regular.woff2) format("woff2"),url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459489/fonts/PermanentMarker-Regular.woff) format("woff"),url(https://res.cloudinary.com/dvcuac7zg/raw/upload/v1551459489/fonts/PermanentMarker-Regular.ttf) format("truetype");font-weight:400;font-style:normal}.grid--container[data-v-12916d06]{height:100%;padding-top:60px}.grid--container .grid[data-v-12916d06]{display:-ms-grid;display:grid}@media (min-width:760px) and (max-width:1200px){.grid--container .grid[data-v-12916d06]{-ms-grid-columns:1fr 1fr;grid-template-columns:1fr 1fr}}@media (min-width:1200px){.grid--container .grid[data-v-12916d06]{-ms-grid-columns:1fr 1fr 1fr;grid-template-columns:1fr 1fr 1fr}}',""])},360:function(t,o,r){"use strict";r.r(o);r(44),r(105);var n=r(344),e=r(34),c=r(108),l=r(338),f={data:function(){return{cities:l.a}},layout:"photo",mixins:[e.c],mounted:function(){this.quicklink({urls:[].concat(Object(n.a)(l.a.flatMap(function(t){return Object(n.a)(10).map(function(i){return e.a.url("photo/".concat(t.name.replace(" ","").toLowerCase(),"/img").concat(i),{width:42,crop:"limit",effect:"blur:100"})})})),Object(n.a)(l.a.flatMap(function(t){return Object(n.a)(10).map(function(i){return e.a.url("photo/".concat(t.name.replace(" ","").toLowerCase(),"/img").concat(i),{width:800,crop:"limit",quality:80})})}))),origins:!0})},head:{title:"Photography 📷",meta:[{property:"og:title",hid:"og:title",content:"Photography 📷"},{property:"og:description",hid:"og:description",content:"13개국을 여행다니며 찍은 사진들"},{property:"og:url",hid:"og:url",content:"https://ysm.sh/photo"},{property:"og:image",hid:"og:image",content:e.a.url("photo/opengraph-big",{width:800,crop:"limit",quality:100,fetch_format:"jpg"})},{property:"og:image:type",hid:"og:image:type",content:"image/jpg"}]},components:{CityBox:c.a,CopyRight:c.b}},d=(r(347),r(2)),component=Object(d.a)(f,function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"grid--container"},[r("div",{staticClass:"grid"},t._l(t.cities,function(o){return r("city-box",t._b({key:o.name},"city-box",o,!1))}),1),t._v(" "),r("copy-right")],1)},[],!1,null,"12916d06",null);o.default=component.exports}}]);