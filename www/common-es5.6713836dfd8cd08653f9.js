function _defineProperty(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function asyncGeneratorStep(n,t,e,r,i,o,c){try{var a=n[o](c),u=a.value}catch(s){return void e(s)}a.done?t(u):Promise.resolve(u).then(r,i)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var o=n.apply(t,e);function c(n){asyncGeneratorStep(o,r,i,c,a,"next",n)}function a(n){asyncGeneratorStep(o,r,i,c,a,"throw",n)}c(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2c9M":function(n,t,e){"use strict";e.d(t,"a",(function(){return o})),e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return u})),e.d(t,"e",(function(){return a}));var r={getEngine:function(){var n=window;return n.TapticEngine||n.Capacitor&&n.Capacitor.isPluginAvailable("Haptics")&&n.Capacitor.Plugins.Haptics},available:function(){return!!this.getEngine()},isCordova:function(){return!!window.TapticEngine},isCapacitor:function(){return!!window.Capacitor},impact:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.impact({style:e})}},notification:function(n){var t=this.getEngine();if(t){var e=this.isCapacitor()?n.style.toUpperCase():n.style;t.notification({style:e})}},selection:function(){this.impact({style:"light"})},selectionStart:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionStart():n.gestureSelectionStart())},selectionChanged:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionChanged():n.gestureSelectionChanged())},selectionEnd:function(){var n=this.getEngine();n&&(this.isCapacitor()?n.selectionEnd():n.gestureSelectionEnd())}},i=function(){r.selection()},o=function(){r.selectionStart()},c=function(){r.selectionChanged()},a=function(){r.selectionEnd()},u=function(n){r.impact(n)}},"6i10":function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(n,t,e){var r=n*t/e-n+"ms",i=2*Math.PI*t/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(n,t,e){var r=t/e,i=n*r-n+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,t){return{r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(n,t,e){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":n*t/e-n+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(n,t,e){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":n*t/e-n+"ms"}}}}}},NqGI:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return i}));var r=function(){var n=_asyncToGenerator(regeneratorRuntime.mark((function n(t,e,r,i,o){var c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=2;break}return n.abrupt("return",t.attachViewToDom(e,r,o,i));case 2:if("string"==typeof r||r instanceof HTMLElement){n.next=4;break}throw new Error("framework delegate is missing");case 4:if(c="string"==typeof r?e.ownerDocument&&e.ownerDocument.createElement(r):r,i&&i.forEach((function(n){return c.classList.add(n)})),o&&Object.assign(c,o),e.appendChild(c),n.t0=c.componentOnReady,!n.t0){n.next=12;break}return n.next=12,c.componentOnReady();case 12:return n.abrupt("return",c);case 13:case"end":return n.stop()}}),n)})));return function(t,e,r,i,o){return n.apply(this,arguments)}}(),i=function(n,t){if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},Nqa4:function(n,t,e){"use strict";e.d(t,"a",(function(){return i}));var r=e("fXoL"),i=function(){var n=function n(){_classCallCheck(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=r.Fb({token:n,factory:n.\u0275fac,providedIn:"root"}),n}()},PYW1:function(n,t,e){"use strict";e.d(t,"a",(function(){return c}));var r=e("ePDZ"),i=e("ItpF"),o=e("2c9M"),c=function(n,t){var e,c,a=function(n,r,i){if("undefined"!=typeof document){var o=document.elementFromPoint(n,r);o&&t(o)?o!==e&&(s(),u(o,i)):s()}},u=function(n,t){e=n,c||(c=e);var i=e;Object(r.g)((function(){return i.classList.add("ion-activated")})),t()},s=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e){var t=e;Object(r.g)((function(){return t.classList.remove("ion-activated")})),n&&c!==e&&e.click(),e=void 0}};return Object(i.createGesture)({el:n,gestureName:"buttonActiveDrag",threshold:0,onStart:function(n){return a(n.currentX,n.currentY,o.a)},onMove:function(n){return a(n.currentX,n.currentY,o.b)},onEnd:function(){s(!0),Object(o.e)(),c=void 0}})}},hcCc:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return a}));var r=function(n,t){return null!==t.closest(n)},i=function(n){return"string"==typeof n&&n.length>0?_defineProperty({"ion-color":!0},"ion-color-"+n,!0):void 0},o=function(n){var t={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter((function(n){return null!=n})).map((function(n){return n.trim()})).filter((function(n){return""!==n})):[]}(n).forEach((function(n){return t[n]=!0})),t},c=/^[a-z][a-z0-9+\-.]*:/,a=function(){var n=_asyncToGenerator(regeneratorRuntime.mark((function n(t,e,r,i){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null==t||"#"===t[0]||c.test(t)){n.next=4;break}if(!(o=document.querySelector("ion-router"))){n.next=4;break}return n.abrupt("return",(null!=e&&e.preventDefault(),o.push(t,r,i)));case 4:return n.abrupt("return",!1);case 5:case"end":return n.stop()}}),n)})));return function(t,e,r,i){return n.apply(this,arguments)}}()}}]);