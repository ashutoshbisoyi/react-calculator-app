(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],[,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var D_Web_Development_Learning_React_React_Projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_App_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12),_App_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__),_Keypad__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(D_Web_Development_Learning_React_React_Projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),operation=_useState2[0],updateOperation=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(D_Web_Development_Learning_React_React_Projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),result=_useState4[0],updateResult=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState6=Object(D_Web_Development_Learning_React_React_Projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),action=_useState6[0],updateAction=_useState6[1],keyPress=function keyPress(btnName){if("c"==btnName)updateResult(""),updateOperation("");else if("="==btnName)try{var answer=eval(operation);Number.isInteger(answer)?updateResult(answer):updateResult(answer.toFixed(2)),updateAction(!0)}catch(err){updateResult(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:"error-msg"},"Math Error")),updateOperation("")}else"del"==btnName?(updateOperation(operation.slice(0,-1)),updateResult("")):1==action?(updateOperation(result+btnName),updateResult(""),updateAction(!1)):updateOperation(operation+btnName)};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"calculator-body"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"calculator-display"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,operation),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",null,result)),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Keypad__WEBPACK_IMPORTED_MODULE_3__.a,{clickEvent:keyPress}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:"developer"},"handcrafted by ashutoshbisoyi"))))}__webpack_exports__.a=App},function(e,a,t){"use strict";var _=t(0),c=t.n(_);a.a=function(e){var a=function(a){e.clickEvent(a.target.name)};return c.a.createElement("div",{className:"keypad-section"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement("button",{name:"c",onClick:a,className:"calc-btn"},"C")),c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{name:"%",onClick:a,className:"calc-btn "},"%")),c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{name:"/",onClick:a,className:"calc-btn operator-btn"},"/"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{name:"7",onClick:a,className:"calc-btn"},"7")),c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{name:"8",onClick:a,className:"calc-btn"},"8")),c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{name:"9",onClick:a,className:"calc-btn"},"9")),c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{name:"*",onClick:a,className:"calc-btn operator-btn"},"*"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{name:"4",onClick:a,className:"calc-btn"},"4")),c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{name:"5",onClick:a,className:"calc-btn"},"5")),c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{name:"6",onClick:a,className:"calc-btn"},"6")),c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{name:"-",onClick:a,className:"calc-btn operator-btn"},"-"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{name:"1",onClick:a,className:"calc-btn"},"1")),c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{name:"2",onClick:a,className:"calc-btn"},"2")),c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{name:"3",onClick:a,className:"calc-btn"},"3")),c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{name:"+",onClick:a,className:"calc-btn operator-btn"},"+"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{name:"0",onClick:a,className:"calc-btn"},"0")),c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{name:".",onClick:a,className:"calc-btn"},".")),c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{name:"del",onClick:a,className:"calc-btn"},"del")),c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{name:"=",onClick:a,className:"calc-btn eqal-btn"},"="))))}},function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var _=t(0),c=t.n(_),l=t(3),n=t.n(l),r=(t(11),t(4));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(r.a,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.2cf44b1d.chunk.js.map