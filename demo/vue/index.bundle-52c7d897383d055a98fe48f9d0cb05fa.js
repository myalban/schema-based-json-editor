webpackJsonp([2],{13:function(e,t,a){"use strict";function r(){new x({el:"#container"})}Object.defineProperty(t,"__esModule",{value:!0});var p=a(1),l=a(0),n=a.n(l),o=a(2),i=a.n(o),m=a(16),s=(a(8),a(10)),c=(a.n(s),a(11)),u=(a.n(c),a(12)),d=(a.n(u),null),x=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.locale=d,t.schema=m.a,t.value={},t.color="black",t.dragula=s,t.markdownit=c,t.hljs=u,t.valueHtml="",t.schemaSchema=m.b,t}return p.c(t,e),Object.defineProperty(t.prototype,"formattedSchema",{get:function(){return JSON.stringify(this.schema,null,"  ")},enumerable:!0,configurable:!0}),t.prototype.updateSchema=function(e){var t=e.value;try{this.schema=JSON.parse(t)}catch(e){console.log(e)}},t.prototype.updateValue=function(e){var t=e.value,a=e.isValid;this.valueHtml=u.highlight("json",JSON.stringify(t,null,"  ")).value,this.color=a?"black":"red"},t=p.b([i()({template:'\n    <div>\n        <a href="https://github.com/plantain-00/schema-based-json-editor/tree/master/demo/vue/index.ts" target="_blank">the source code of the demo</a>\n        <br/>\n        <div style="width: 400px; margin: 10px; float: left; overflow-y: scroll; height: 600px" class="bootstrap3-row-container">\n            <json-editor :schema="schemaSchema"\n\t\t\t    :initial-value="formattedSchema"\n\t\t\t\t@update-value="updateSchema($event)"\n\t\t\t\ttheme="bootstrap3"\n\t\t\t\ticon="fontawesome4"\n\t\t\t\t:locale="locale"\n\t\t\t\t:dragula="dragula"\n\t\t\t\t:markdownit="markdownit"\n\t\t\t\t:hljs="hljs"\n\t\t\t\t:force-https="false">\n\t\t\t</json-editor>\n\t\t</div>\n\t\t<div style="width: 500px; margin: 10px; float: left; overflow-y: scroll; height: 600px" class="bootstrap3-row-container">\n\t\t\t<json-editor :schema="schema"\n\t\t\t    :initial-value="value"\n\t\t\t\t@update-value="updateValue($event)"\n\t\t\t\ttheme="bootstrap3"\n\t\t\t\ticon="fontawesome4"\n\t\t\t\t:locale="locale"\n\t\t\t\t:dragula="dragula"\n\t\t\t\t:markdownit="markdownit"\n\t\t\t\t:hljs="hljs"\n\t\t\t\t:force-https="false">\n\t\t\t</json-editor>\n\t\t</div>\n\t\t<div style="width: 400px; margin: 10px; float: left; overflow-y: scroll; height: 600px">\n            Value:\n\t\t\t<pre :style="{borderColor: color}"><code v-html="valueHtml"></code></pre>\n\t\t</div>\n    </div>\n    '})],t)}(n.a);"zh-CN"===navigator.language?a(220)("./"+navigator.language+".js").then(function(e){d=e.locale,r()},function(e){r()}):r()},16:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return p});var r={type:"object",title:"GUI:",description:"a description example",properties:{stringExample:{type:"string",title:"A string example",description:"a string description example",default:"a default string example",minLength:20,maxLength:25},booleanExample:{type:"boolean",title:"A boolean example",description:"a boolean description example",default:!0},numberExample:{type:"number",title:"A number example",description:"a number description example",default:123.4,minimum:10,exclusiveMinimum:!0,maximum:1e3,exclusiveMaximum:!0},integerExample:{type:"integer",title:"A integer example",description:"a integer description example",default:124,multipleOf:2},nullExample:{type:"null",title:"A null example",description:"a null description example",default:null},objectExample:{type:"object",title:"A object example",description:"a object description example",properties:{propertyExample1:{type:"string"},propertyExample2:{type:"number"}},default:{},required:["propertyExample1","propertyExample2"]},arrayExample:{type:"array",title:"A array example",description:"a array description example",items:{type:"string",maxLength:15},default:["default item 1","default item 2"],minItems:1,uniqueItems:!0},readOnlyExample:{type:"string",readonly:!0,default:"abc"},readOnlyAndOptionalExample:{type:"string",readonly:!0,default:"abc"},enumExample:{type:"string",enum:["enum 1","enum 2"]},optionalExample:{type:"string"},optionalAndDefaultExample:{type:"string",default:"abc"},booleanOptionalExample:{type:"boolean"},colorExample:{type:"string",format:"color",default:"#000000"},textareaExample:{type:"string",format:"textarea"},patternExample:{type:"string",pattern:"^[A-z]{3}$",default:"abc"},imagePreviewExample:{type:"string",default:"http://image2.sina.com.cn/bj/art/2004-08-02/U91P52T4D51657F160DT20040802125523.jpg"},markdownExample:{type:"string",format:"markdown",default:"###### markdown title and code example\n\n```js\nfunction foo(bar) {\n    console.log(bar);\n}\n```"},codeExample:{type:"string",format:"code",default:"function foo(bar) {\n    console.log(bar);\n}\n"},itemTitleExample:{type:"array",items:{type:"object",properties:{propertyExample1:{type:"string"},propertyExample2:{type:"number"}},required:["propertyExample1","propertyExample2"],collapsed:!0},default:[{propertyExample1:"foo",propertyExample2:1},{propertyExample1:"bar",propertyExample2:2},{propertyExample1:"baz",propertyExample2:3},{propertyExample1:"abc",propertyExample2:4},{propertyExample1:"def",propertyExample2:5},{propertyExample1:"ghi",propertyExample2:6}]},optionalObjectExample:{type:"object",properties:{propertyExample1:{type:"string"},propertyExample2:{type:"number"}},maxProperties:1,minProperties:0},propertyOrderExample:{type:"object",properties:{propertyExample1:{type:"string",propertyOrder:3},propertyExample2:{type:"number",propertyOrder:1},propertyExample3:{type:"number",propertyOrder:2}}},collapsedObjectExample:{type:"object",properties:{propertyExample1:{type:"string"}},collapsed:!0}},required:["stringExample","booleanExample","numberExample","integerExample","nullExample","objectExample","arrayExample","readOnlyExample","enumExample","colorExample","textareaExample","patternExample","imagePreviewExample","markdownExample","codeExample","performanceExample","itemTitleExample","optionalObjectExample","propertyOrderExample","collapsedObjectExample"]},p={title:"Schema:",type:"string",format:"code"}},220:function(e,t,a){function r(e){var t=p[e];return t?a.e(t[1]).then(function(){return a(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var p={"./zh-CN.js":[223,0]};r.keys=function(){return Object.keys(p)},r.id=220,e.exports=r}},[13]);