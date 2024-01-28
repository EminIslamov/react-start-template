/*! For license information please see components-ProductDetail-ProductDetail-stories.67598ed4.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[235],{"./src/components/ProductDetail/ProductDetail.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ProductDetailShoes:()=>ProductDetailShoes,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ProductDetail_stories});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ProductDetail/styles.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.Z,options);const ProductDetail_styles_module=styles_module.Z&&styles_module.Z.locals?styles_module.Z.locals:void 0;var AddToCartButton=__webpack_require__("./src/components/AddToCartButton/AddToCartButton.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ProductDetail=function ProductDetail(_ref){var cost=_ref.cost,images=_ref.images,category=_ref.category,title=_ref.title,description=_ref.description;return(0,jsx_runtime.jsxs)("div",{className:ProductDetail_styles_module.product_detail_container,children:[images.map((function(img,index){return(0,jsx_runtime.jsx)("img",{src:img,alt:title},index)})),(0,jsx_runtime.jsx)("h2",{children:title}),(0,jsx_runtime.jsxs)("p",{className:ProductDetail_styles_module.category,children:["Category: ",category]}),(0,jsx_runtime.jsx)("p",{children:description}),(0,jsx_runtime.jsx)("p",{className:ProductDetail_styles_module.cost,children:cost}),(0,jsx_runtime.jsx)(AddToCartButton.Z,{count:0})]})};ProductDetail.displayName="ProductDetail";const ProductDetail_ProductDetail=ProductDetail;try{ProductDetail.displayName="ProductDetail",ProductDetail.__docgenInfo={description:"",displayName:"ProductDetail",props:{cost:{defaultValue:null,description:"",name:"cost",required:!0,type:{name:"number"}},images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"string[]"}},category:{defaultValue:null,description:"",name:"category",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ProductDetail/ProductDetail.tsx#ProductDetail"]={docgenInfo:ProductDetail.__docgenInfo,name:"ProductDetail",path:"src/components/ProductDetail/ProductDetail.tsx#ProductDetail"})}catch(__react_docgen_typescript_loader_error){}var _ProductDetailShoes$p,_ProductDetailShoes$p2,_ProductDetailShoes$p3;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const ProductDetail_stories={title:"components/ProductDetail",component:ProductDetail_ProductDetail};var Template=function Template(args){return(0,jsx_runtime.jsx)(ProductDetail_ProductDetail,_objectSpread({},args))};Template.displayName="Template";var ProductDetailShoes=Template.bind({});ProductDetailShoes.args={cost:300,images:["https://fineshoes.ru/upload/iblock/a86/loake_badminton_mahogany_4.jpg"],category:"Обувь.",title:"Броги",description:"Коричневые броги"},ProductDetailShoes.parameters=_objectSpread(_objectSpread({},ProductDetailShoes.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ProductDetailShoes$p=ProductDetailShoes.parameters)||void 0===_ProductDetailShoes$p?void 0:_ProductDetailShoes$p.docs),{},{source:_objectSpread({originalSource:"args => <ProductDetail {...args} />"},null===(_ProductDetailShoes$p2=ProductDetailShoes.parameters)||void 0===_ProductDetailShoes$p2||null===(_ProductDetailShoes$p3=_ProductDetailShoes$p2.docs)||void 0===_ProductDetailShoes$p3?void 0:_ProductDetailShoes$p3.source)})});var __namedExportsOrder=["ProductDetailShoes"]},"./src/components/AddToCartButton/AddToCartButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AddToCartButton_AddToCartButton});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AddToCartButton/styles.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(styles_module.Z,options);const AddToCartButton_styles_module=styles_module.Z&&styles_module.Z.locals?styles_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),AddToCartButton=function AddToCartButton(_ref){var count=_ref.count;return count>0?(0,jsx_runtime.jsxs)("div",{className:AddToCartButton_styles_module.button_container,children:[(0,jsx_runtime.jsx)("button",{children:"-"}),(0,jsx_runtime.jsx)("input",{value:count}),(0,jsx_runtime.jsx)("button",{children:"+"})]}):(0,jsx_runtime.jsx)("button",{className:AddToCartButton_styles_module.single_button,children:"Купить"})};AddToCartButton.displayName="AddToCartButton";const AddToCartButton_AddToCartButton=AddToCartButton;try{AddToCartButton.displayName="AddToCartButton",AddToCartButton.__docgenInfo={description:"",displayName:"AddToCartButton",props:{count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AddToCartButton/AddToCartButton.tsx#AddToCartButton"]={docgenInfo:AddToCartButton.__docgenInfo,name:"AddToCartButton",path:"src/components/AddToCartButton/AddToCartButton.tsx#AddToCartButton"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/AddToCartButton/styles.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".jNQwGn0WC5saoSImUCaL {\n  display: flex;\n  justify-content: space-between;\n  width: 100px;\n  margin-bottom: 15px;\n}\n\n.jNQwGn0WC5saoSImUCaL button,\n.jNQwGn0WC5saoSImUCaL input {\n  height: 30px;\n}\n\n.bHfxHO80NANefJMi4umA {\n  width: 100px;\n  height: 30px;\n  background-color: blue;\n  color: #FFF;\n  border: none;\n}","",{version:3,sources:["webpack://./src/components/AddToCartButton/styles.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd",sourcesContent:[".button_container {\n  display: flex;\n  justify-content: space-between;\n  width: 100px;\n  margin-bottom: 15px;\n}\n\n.button_container button,\n.button_container input {\n  height: 30px;\n}\n\n.single_button {\n  width: 100px;\n  height: 30px;\n  background-color: blue;\n  color: #FFF;\n  border: none;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={button_container:"jNQwGn0WC5saoSImUCaL",single_button:"bHfxHO80NANefJMi4umA"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/components/ProductDetail/styles.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".jXi7gtOE4XUJdNiZ1l6Q {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 20px;\n  width: 500px;\n  font-family: Arial, sans-serif;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  margin: auto;\n}\n\n.jXi7gtOE4XUJdNiZ1l6Q img {\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n  border-radius: 4px;\n  margin-bottom: 15px;\n}\n\n.jXi7gtOE4XUJdNiZ1l6Q h2 {\n  margin: 10px 0;\n  font-size: 20px;\n  color: #333;\n}\n\n.jXi7gtOE4XUJdNiZ1l6Q p {\n  font-size: 14px;\n  color: #666;\n  text-align: left;\n  margin: 5px 0;\n}\n\n.ohSHO2mG237RLfzFCoAj {\n  color: #2ecc71;\n  font-weight: bold;\n  font-size: 16px;\n  margin: 10px 0;\n}\n\n.qj0g3WXcXe8If_8Tesm1 {\n  font-style: italic;\n  color: #999;\n  font-size: 12px;\n}","",{version:3,sources:["webpack://./src/components/ProductDetail/styles.module.css"],names:[],mappings:"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,8BAA8B;EAC9B,wCAAwC;EACxC,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,WAAW;AACb;;AAEA;EACE,eAAe;EACf,WAAW;EACX,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iBAAiB;EACjB,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,eAAe;AACjB",sourcesContent:[".product_detail_container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 20px;\n  width: 500px;\n  font-family: Arial, sans-serif;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  margin: auto;\n}\n\n.product_detail_container img {\n  width: 100%;\n  height: auto;\n  object-fit: contain;\n  border-radius: 4px;\n  margin-bottom: 15px;\n}\n\n.product_detail_container h2 {\n  margin: 10px 0;\n  font-size: 20px;\n  color: #333;\n}\n\n.product_detail_container p {\n  font-size: 14px;\n  color: #666;\n  text-align: left;\n  margin: 5px 0;\n}\n\n.cost {\n  color: #2ecc71;\n  font-weight: bold;\n  font-size: 16px;\n  margin: 10px 0;\n}\n\n.category {\n  font-style: italic;\n  color: #999;\n  font-size: 12px;\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={product_detail_container:"jXi7gtOE4XUJdNiZ1l6Q",cost:"ohSHO2mG237RLfzFCoAj",category:"qj0g3WXcXe8If_8Tesm1"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);