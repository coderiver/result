webpackJsonp([2],{103:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function i(t){var e=arguments.length<=1||void 0===arguments[1]?1:arguments[1];return TweenMax.to(F,e,{opacity:t})}function r(){return new k["default"](function(t){(new TimelineMax).add(function(){I.show(),i(1,0)}).fromTo(I,1,{autoAlpha:0},{autoAlpha:1}).addLabel("start").add(i(.7),"start").fromTo([L,q],.1,{scale:2,opacity:0},{scale:1,opacity:1,ease:Elastic.easeOut.config(2,.3)},"start+=0.2").fromTo(V.getElement(),.3,{y:100},{y:0},"start+=0.4").add(function(){t(),B["default"].trigger(M.MODAL_AFTER_OPEN)})})}function a(){return new k["default"](function(t){(new TimelineMax).add(i(1,.3)).fromTo(I,.5,{autoAlpha:1},{autoAlpha:0}).add(function(){I.hide(),t(),B["default"].trigger(M.MODAL_AFTER_CLOSE)})})}function s(t){var e=arguments.length<=1||void 0===arguments[1]?.3:arguments[1];return new k["default"](function(n){var o=j.eq(t);TweenMax.to(o,e,{autoAlpha:0,scale:2,clearProps:"all",onComplete:n})})}function c(){D.on("click",u),q.on("click",f),C.on("click",f),L.on("click",function(){L.toggleClass("is-muted"),K.toggleSound()}),K.on(M.VIDEO_BREAKPOINT,function(t,e){console.info("breakpoint "+e);var n=X[e];i(.7),d(e),_(e),"function"==typeof n&&n(),setTimeout(function(){K.one("play",function(){var t=G.get("activeBp");p(),i(0),g(t,1)})},0)}),K.on(M.VIDEO_PROGRESS,function(t,e){V.setProgress(e)}),K.on("volumechange",function(){console.log("change volume")}),V.on(M.PROGRESSBAR_CLICK,function(t,e){K.setProgress(e),K.getProp("paused")&&K.play()}),V.on(M.PROGRESSBAR_POINT_CLICK,function(t,e){K.goToBreakpoint(e)})}function u(){B["default"].trigger(M.MODAL_BEFORE_OPEN),r().then(function(){return K.goToBreakpoint(0)})["catch"](function(t){return console.error(t)})}function f(){console.log("hide modal video");var t=G.get("activeBp");B["default"].trigger(M.MODAL_BEFORE_CLOSE),C.fadeOut(),K.pause(),null!==t?g().then(a).then(v):a().then(v)}function l(t){N.eq(t).addClass("is-active")}function p(){N.filter(".is-active").removeClass("is-active")}function d(t){p(),l(t)}function h(){j.each(function(t,e){(0,E["default"])(e).attr("style","")})}function v(){h(),p(),K.setProgress(0),V.setProgress(0)}function y(t){var e=$[t];return G.set("activeBp",t),"function"==typeof e?e():void 0}function g(){var t=arguments.length<=0||void 0===arguments[0]?G.get("activeBp"):arguments[0],e=arguments[1];return null!==t?(G.set("activeBp",null),s(t,e)):void 0}function _(t){var e=G.get("activeBp");return null===e?y(t):g(e).then(function(){return y(t)})}var m=n(104),k=o(m),T=n(1),E=o(T);n(3);var w=n(119),O=o(w),P=n(124),A=o(P),x=n(8),B=o(x),b=n(9),M=n(10),R=[24,52,81],S=123,D=(0,E["default"])(".hero__logo"),I=(0,E["default"])(".modal-video"),C=(0,E["default"])(".modal-video__preloader"),F=I.find(".modal-video__overlay"),j=I.find(".video-section"),L=I.find(".controll-btn-volume"),q=I.find(".controll-btn-close"),V=new A["default"](I.find(".video-timeline")),K=window.video=new O["default"]("video",{breakpoints:R,fakeDuration:S}),N=V.getPoints(),G={modalActive:!1,activeBp:null,set:function(t,e){this[t]=e},get:function(t){return this[t]}};K.on(M.VIDEO_READY,function(){console.info("Video ready"),c(),V.setupPoints(K.getBreakpoints()),B["default"].trigger(M.VIDEO_READY),D.trigger("click")}),K.setProp("preload",!0);var $=[function(){return new k["default"](function(t){var e=j.eq(0);(new TimelineMax).fromTo(e,.5,{autoAlpha:0,scale:5},{autoAlpha:1,scale:1}).fromTo(e.find("p"),.5,{opacity:0,y:100},{opacity:1,y:0}).fromTo(e.find(".icon-mouse"),.8,{opacity:0,y:100},{opacity:1,y:0,ease:Elastic.easeOut.config(1,.5)}).add(t).staggerTo(e.find(".icon-mouse__arrow"),.3,{opacity:0,repeat:5,yoyo:!0},.15,"-=0.4")})},function(){return new k["default"](function(t){var e=j.eq(1),n=e.find(".step-figure"),o=n.first(),i=n.not(":first"),r=o.find(".icon-radio__signal"),a=new TimelineMax({repeat:10}).staggerFromTo(r,.1,{opacity:0},{opacity:1,repeat:1,yoyo:!0},.2).set(r,{opacity:1});(new TimelineMax).set(e,{autoAlpha:1}).fromTo(e.find(".step-r-logo"),.5,{autoAlpha:0,scale:7},{autoAlpha:1,scale:1}).fromTo(e.find(".h4"),.5,{opacity:0,y:30},{opacity:1,y:0},"-=0.2").staggerFromTo([i.find(".icon"),i.find(".h5")],.5,{opacity:0,y:20},{opacity:1,y:0,ease:Elastic.easeOut.config(1.2,.5)},.1).fromTo(o,.5,{opacity:0,scale:2},{opacity:1,scale:1,ease:Elastic.easeOut.config(1,.75)},"-=0.2").staggerFromTo([o.find(".icon"),o.find(".h5")],.5,{opacity:0,y:20},{opacity:1,y:0,ease:Elastic.easeOut.config(1.2,.5)},.1).add(t).add(a)})},function(){return new k["default"](function(t){var e=j.eq(2);(new TimelineMax).set(e,{autoAlpha:1}).fromTo(e.find(".step-r-logo"),.5,{autoAlpha:0,scale:7},{autoAlpha:1,scale:1}).staggerFromTo([e.find(".h4"),e.find(".h5")],.5,{opacity:0,y:20},{opacity:1,y:0,ease:Elastic.easeOut.config(1.2,.5)},.1).fromTo(e.find(".step-3__circle"),.5,{opacity:0,scale:2},{opacity:1,scale:1,ease:Elastic.easeOut.config(1,.75)}).fromTo(e.find(".step-3__slider"),.2,{opacity:0},{opacity:1}).add(t)})},function(){return new k["default"](function(t){var e=j.eq(3),n=e.find(".step-figure"),o=n.last(),i=n.not(":last");(new TimelineMax).set(e,{autoAlpha:1}).fromTo(e.find(".step-r-logo"),.5,{autoAlpha:0,scale:7},{autoAlpha:1,scale:1}).fromTo(e.find(".h4"),.5,{opacity:0,y:30},{opacity:1,y:0},"-=0.2").staggerFromTo([i.find(".icon"),i.find(".h5")],.5,{opacity:0,y:20},{opacity:1,y:0,ease:Elastic.easeOut.config(1.2,.5)},.1).fromTo(o,.5,{opacity:0,scale:2},{opacity:1,scale:1,ease:Elastic.easeOut.config(1,.75)},"-=0.2").staggerFromTo([o.find(".icon"),o.find(".h5")],.5,{opacity:0,y:20},{opacity:1,y:0,ease:Elastic.easeOut.config(1.2,.5)},.1).add(t)})},function(){return new k["default"](function(t){var e=j.eq(4),n=e.find(".step-figure"),o=n.last(),i=n.not(":last");(new TimelineMax).set(e,{autoAlpha:1}).fromTo(e.find(".step-r-logo"),.5,{autoAlpha:0,scale:7},{autoAlpha:1,scale:1}).fromTo(e.find(".h4"),.5,{opacity:0,y:30},{opacity:1,y:0},"-=0.2").staggerFromTo([i.find(".icon"),i.find(".h5")],.5,{opacity:0,y:20},{opacity:1,y:0,ease:Elastic.easeOut.config(1.2,.5)},.1).fromTo(o,.5,{opacity:0,scale:2},{opacity:1,scale:1,ease:Elastic.easeOut.config(1,.75)},"-=0.2").staggerFromTo([o.find(".icon-squares"),o.find(".h5")],.5,{opacity:0,y:20},{opacity:1,y:0,ease:Elastic.easeOut.config(1.2,.5)},.1).add(t)})}],X=[function(){function t(n){"down"===(0,b.getScrollDirection)(n)&&(K.play(),e.off("wheel",t))}var e=(0,E["default"])(window);e.on("wheel",t),B["default"].one(M.MODAL_BEFORE_CLOSE,function(){e.off("wheel",t)})},function(){j.eq(1).find(".step-action-button").one("click",function(t){t.preventDefault(),K.play()})},function(){function t(t){c=t.pageX,a.addClass("is-dragging"),setTimeout(function(){a.on("mousemove",e),a.one("mouseup",n)},0)}function e(t){var e=t.pageX-c;if(!(0>e)){var n=s>=e?e:s;TweenMax.set(i,{x:n}),TweenMax.set(r,{x:n/3,opacity:1-(0,b.percentage)(n,s,0)/100}),u=n}}function n(){var t=0;c=null,a.removeClass("is-dragging"),u===s&&(K.play(),u=0,t=1e3),setTimeout(function(){TweenMax.set([i,r],{x:0,opacity:1,clearProps:"all"})},t),setTimeout(function(){a.off("mousemove",e)},0)}var o=j.eq(2),i=o.find(".step-3__slider"),r=o.find(".step-3__right .h5"),a=(0,E["default"])("body"),s=300,c=null,u=0;i.on("mousedown",t),i.on("touchend",function(){return K.play()})},function(){j.eq(3).find(".step-action-button").one("click",function(t){t.preventDefault(),K.play()})},function(){K.play()}]},104:function(t,e,n){t.exports={"default":n(105),__esModule:!0}},105:function(t,e,n){n(88),n(61),n(15),n(106),t.exports=n(28).Promise},106:function(t,e,n){"use strict";var o,i,r,a=n(25),s=n(27),c=n(29),u=n(64),f=n(26),l=n(34),p=(n(33),n(30)),d=n(107),h=n(108),v=(n(111).set,n(112)),y=n(113).set,g=n(115),_="Promise",m=s.TypeError,k=s.process,T=s[_],k=s.process,E="process"==u(k),w=function(){},O=!!function(){try{var t=T.resolve(1),e=(t.constructor={})[n(58)("species")]=function(t){t(w,w)};return(E||"function"==typeof PromiseRejectionEvent)&&t.then(w)instanceof e}catch(o){}}(),P=function(t,e){return t===e||t===T&&e===r},A=function(t){var e;return l(t)&&"function"==typeof(e=t.then)?e:!1},x=function(t){return P(T,t)?new B(t):new i(t)},B=i=function(t){var e,n;this.promise=new t(function(t,o){if(void 0!==e||void 0!==n)throw m("Bad Promise constructor");e=t,n=o}),this.resolve=p(e),this.reject=p(n)},b=function(t){try{t()}catch(e){return{error:e}}},M=function(t,e){if(!t._n){t._n=!0;var n=t._c;g(function(){for(var o=t._v,i=1==t._s,r=0,a=function(e){var n,r,a=i?e.ok:e.fail,s=e.resolve,c=e.reject,u=e.domain;try{a?(i||(2==t._h&&D(t),t._h=1),a===!0?n=o:(u&&u.enter(),n=a(o),u&&u.exit()),n===e.promise?c(m("Promise-chain cycle")):(r=A(n))?r.call(n,s,c):s(n)):c(o)}catch(f){c(f)}};n.length>r;)a(n[r++]);t._c=[],t._n=!1,e&&!t._h&&R(t)})}},R=function(t){y.call(s,function(){var e,n,o,i=t._v;if(S(t)&&(e=b(function(){E?k.emit("unhandledRejection",i,t):(n=s.onunhandledrejection)?n({promise:t,reason:i}):(o=s.console)&&o.error&&o.error("Unhandled promise rejection",i)}),t._h=E||S(t)?2:1),t._a=void 0,e)throw e.error})},S=function(t){if(1==t._h)return!1;for(var e,n=t._a||t._c,o=0;n.length>o;)if(e=n[o++],e.fail||!S(e.promise))return!1;return!0},D=function(t){y.call(s,function(){var e;E?k.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},I=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),M(e,!0))},C=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw m("Promise can't be resolved itself");(e=A(t))?g(function(){var o={_w:n,_d:!1};try{e.call(t,c(C,o,1),c(I,o,1))}catch(i){I.call(o,i)}}):(n._v=t,n._s=1,M(n,!1))}catch(o){I.call({_w:n,_d:!1},o)}}};O||(T=function(t){d(this,T,_,"_h"),p(t),o.call(this);try{t(c(C,this,1),c(I,this,1))}catch(e){I.call(this,e)}},o=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},o.prototype=n(116)(T.prototype,{then:function(t,e){var n=x(v(this,T));return n.ok="function"==typeof t?t:!0,n.fail="function"==typeof e&&e,n.domain=E?k.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&M(this,!1),n.promise},"catch":function(t){return this.then(void 0,t)}}),B=function(){var t=new o;this.promise=t,this.resolve=c(C,t,1),this.reject=c(I,t,1)}),f(f.G+f.W+f.F*!O,{Promise:T}),n(57)(T,_),n(117)(_),r=n(28)[_],f(f.S+f.F*!O,_,{reject:function(t){var e=x(this),n=e.reject;return n(t),e.promise}}),f(f.S+f.F*(a||!O),_,{resolve:function(t){if(t instanceof T&&P(t.constructor,this))return t;var e=x(this),n=e.resolve;return n(t),e.promise}}),f(f.S+f.F*!(O&&n(118)(function(t){T.all(t)["catch"](w)})),_,{all:function(t){var e=this,n=x(e),o=n.resolve,i=n.reject,r=b(function(){var n=[],r=0,a=1;h(t,!1,function(t){var s=r++,c=!1;n.push(void 0),a++,e.resolve(t).then(function(t){c||(c=!0,n[s]=t,--a||o(n))},i)}),--a||o(n)});return r&&i(r.error),n.promise},race:function(t){var e=this,n=x(e),o=n.reject,i=b(function(){h(t,!1,function(t){e.resolve(t).then(n.resolve,o)})});return i&&o(i.error),n.promise}})},107:function(t,e){t.exports=function(t,e,n,o){if(!(t instanceof e)||void 0!==o&&o in t)throw TypeError(n+": incorrect invocation!");return t}},108:function(t,e,n){var o=n(29),i=n(109),r=n(110),a=n(33),s=n(49),c=n(68);t.exports=function(t,e,n,u,f){var l,p,d,h=f?function(){return t}:c(t),v=o(n,u,e?2:1),y=0;if("function"!=typeof h)throw TypeError(t+" is not iterable!");if(r(h))for(l=s(t.length);l>y;y++)e?v(a(p=t[y])[0],p[1]):v(t[y]);else for(d=h.call(t);!(p=d.next()).done;)i(d,v,p.value,e)}},109:function(t,e,n){var o=n(33);t.exports=function(t,e,n,i){try{return i?e(o(n)[0],n[1]):e(n)}catch(r){var a=t["return"];throw void 0!==a&&o(a.call(t)),r}}},110:function(t,e,n){var o=n(19),i=n(58)("iterator"),r=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||r[i]===t)}},111:function(t,e,n){var o=n(34),i=n(33),r=function(t,e){if(i(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=n(29)(Function.call,n(87).f(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return r(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:r}},112:function(t,e,n){var o=n(33),i=n(30),r=n(58)("species");t.exports=function(t,e){var n,a=o(t).constructor;return void 0===a||void 0==(n=o(a)[r])?e:i(n)}},113:function(t,e,n){var o,i,r,a=n(29),s=n(114),c=n(56),u=n(38),f=n(27),l=f.process,p=f.setImmediate,d=f.clearImmediate,h=f.MessageChannel,v=0,y={},g="onreadystatechange",_=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},m=function(t){_.call(t.data)};p&&d||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return y[++v]=function(){s("function"==typeof t?t:Function(t),e)},o(v),v},d=function(t){delete y[t]},"process"==n(22)(l)?o=function(t){l.nextTick(a(_,t,1))}:h?(i=new h,r=i.port2,i.port1.onmessage=m,o=a(r.postMessage,r,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(o=function(t){f.postMessage(t+"","*")},f.addEventListener("message",m,!1)):o=g in u("script")?function(t){c.appendChild(u("script"))[g]=function(){c.removeChild(this),_.call(t)}}:function(t){setTimeout(a(_,t,1),0)}),t.exports={set:p,clear:d}},114:function(t,e){t.exports=function(t,e,n){var o=void 0===n;switch(e.length){case 0:return o?t():t.call(n);case 1:return o?t(e[0]):t.call(n,e[0]);case 2:return o?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return o?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return o?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},115:function(t,e,n){var o,i,r,a=n(27),s=n(113).set,c=a.MutationObserver||a.WebKitMutationObserver,u=a.process,f=a.Promise,l="process"==n(22)(u),p=function(){var t,e;for(l&&(t=u.domain)&&t.exit();o;)e=o.fn,e(),o=o.next;i=void 0,t&&t.enter()};if(l)r=function(){u.nextTick(p)};else if(c){var d=!0,h=document.createTextNode("");new c(p).observe(h,{characterData:!0}),r=function(){h.data=d=!d}}else r=f&&f.resolve?function(){f.resolve().then(p)}:function(){s.call(a,p)};t.exports=function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,r()),i=e}},116:function(t,e,n){var o=n(31);t.exports=function(t,e,n){for(var i in e)n&&t[i]?t[i]=e[i]:o(t,i,e[i]);return t}},117:function(t,e,n){"use strict";var o=n(27),i=n(28),r=n(32),a=n(36),s=n(58)("species");t.exports=function(t){var e="function"==typeof i[t]?i[t]:o[t];a&&e&&!e[s]&&r.f(e,s,{configurable:!0,get:function(){return this}})}},118:function(t,e,n){var o=n(58)("iterator"),i=!1;try{var r=[7][o]();r["return"]=function(){i=!0},Array.from(r,function(){throw 2})}catch(a){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var r=[7],a=r[o]();a.next=function(){n=!0},r[o]=function(){return a},t(r)}catch(s){}return n}},119:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(120),r=o(i),a=n(89),s=o(a),c=n(90),u=o(c),f=n(1),l=o(f),p=n(9),d=n(10),h={breakpoints:[],startBreakpoint:!0,endBreakpoint:!0,pauseOnBreakpoint:!0,fakeDuration:null},v=function(){function t(e,n){(0,s["default"])(this,t),this.settings=l["default"].extend({},h,n),this.video=document.getElementById(e),this.$video=(0,l["default"])(this.video),this.breakpointsPercent=[],this.breakpointsSec=[],this.currentBreakpoint=0,this._bindEvents()}return(0,u["default"])(t,[{key:"_bindEvents",value:function(){var t=this,e=this.settings.pauseOnBreakpoint;this.video.addEventListener("timeupdate",function(e){var n=t.getProgress(),o=t._whichBpIsActive();o>t.currentBreakpoint&&(t.currentBreakpoint=o,t.trigger(d.VIDEO_BREAKPOINT,[o])),t.trigger(d.VIDEO_PROGRESS,[n])}),this.video.addEventListener("loadedmetadata",function(e){t._setupBreakpoints(),t.trigger(d.VIDEO_READY,[t])}),e&&this.on(d.VIDEO_BREAKPOINT,function(){t.pause()})}},{key:"_setupBreakpoints",value:function(){var t=this,e=this.settings,n=e.breakpoints,o=e.startBreakpoint,i=e.endBreakpoint,a=e.fakeDuration,s=n.map(function(e){return t.getProgress(e)}),c=[],u=[];o&&(c.push(0),u.push(0)),c.push.apply(c,(0,r["default"])(s)),u.push.apply(u,(0,r["default"])(n)),i&&(c.push(100),u.push(a||this.video.duration)),this.breakpointsPercent=c,this.breakpointsSec=u}},{key:"_whichBpIsActive",value:function(){for(var t=arguments.length<=0||void 0===arguments[0]?this.video.currentTime:arguments[0],e=this.breakpointsSec,n=e.length;n;)if(t>=e[--n])return n;return 0}},{key:"getBreakpoints",value:function(){return this.breakpointsPercent}},{key:"on",value:function(){var t;return(t=this.$video).on.apply(t,arguments),this}},{key:"one",value:function(){var t;return(t=this.$video).one.apply(t,arguments),this}},{key:"off",value:function(){var t;return(t=this.$video).off.apply(t,arguments),this}},{key:"trigger",value:function(){var t;(t=this.$video).trigger.apply(t,arguments)}},{key:"play",value:function(){return this.video.play(),this}},{key:"pause",value:function(){return this.video.pause(),this}},{key:"getProgress",value:function(t){var e=this.video,n=e.duration,o=e.currentTime,i=this.settings.fakeDuration;return void 0===t&&(t=o),(0,p.percentage)(t,i||n,2)}},{key:"getProp",value:function(t){return"string"==typeof t?this.video[t]:void 0}},{key:"setProp",value:function(t,e){"string"==typeof t&&(this.video[t]=e)}},{key:"setProgress",value:function(t){var e=this.video.duration,n=this.settings.fakeDuration,o=n||e,i=void 0;switch("string"==typeof t&&(t=parseFloat(t,10)),t>100&&(t=100),0>t&&(t=0),t){case 0:i=0;break;case 100:i=o;break;default:i=Math.round(o/100*t*100)/100}return this.video.currentTime=i,this.currentBreakpoint=this._whichBpIsActive(),this}},{key:"goToBreakpoint",value:function(t){this.currentBreakpoint=t,this.setProgress(this.breakpointsPercent[t]),this.trigger(d.VIDEO_BREAKPOINT,[t])}},{key:"toggleSound",value:function(){this.video.muted=!this.video.muted}}]),t}();e["default"]=v},120:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var i=n(121),r=o(i);e["default"]=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,r["default"])(t)}},121:function(t,e,n){t.exports={"default":n(122),__esModule:!0}},122:function(t,e,n){n(61),n(123),t.exports=n(28).Array.from},123:function(t,e,n){"use strict";var o=n(29),i=n(26),r=n(60),a=n(109),s=n(110),c=n(49),u=n(68);i(i.S+i.F*!n(118)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,f,l=r(t),p="function"==typeof this?this:Array,d=arguments.length,h=d>1?arguments[1]:void 0,v=void 0!==h,y=0,g=u(l);if(v&&(h=o(h,d>2?arguments[2]:void 0,2)),void 0==g||p==Array&&s(g))for(e=c(l.length),n=new p(e);e>y;y++)n[y]=v?h(l[y],y):l[y];else for(f=g.call(l),n=new p;!(i=f.next()).done;y++)n[y]=v?a(f,h,[i.value,y],!0):i.value;return n.length=y,n}})},124:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(89),r=o(i),a=n(90),s=o(a),c=n(1),u=o(c),f=n(9),l=n(10),p={barSel:".video-timeline__progress-bar",pointSel:".video-timeline__point"},d=function(){function t(e,n){(0,r["default"])(this,t),this.settings=u["default"].extend({},p,n),this.el=e instanceof u["default"]?e:(0,u["default"])(e),this.progressBar=this.el.find(this.settings.barSel),this.points=this.el.find(this.settings.pointSel),this._bindEvents()}return(0,s["default"])(t,[{key:"_bindEvents",value:function(){var t=this;this.el.on("click",function(e){var n=t._getProgressByClick(e);t.setProgress(n),t.trigger(l.PROGRESSBAR_CLICK,[n])})}},{key:"_getProgressByClick",value:function(t){var e=this.el.offset().left,n=this.el.width(),o=t.pageX;return(0,f.percentage)(o-e,n,2)}},{key:"setupPoints",value:function(t){var e=this,n=this;t.forEach(function(t,n){e.points.eq(n).css({left:t+"%"}).attr("data-progress",t)}),this.points.on("click",function(t){var e=(0,u["default"])(this),o=e.index(),i=e.data("progress");t.stopPropagation(),n.setProgress(i),n.trigger(l.PROGRESSBAR_POINT_CLICK,[o,i])})}},{key:"setProgress",value:function(t){t>100||this.progressBar.css({width:t+"%"})}},{key:"on",value:function(){var t;return(t=this.el).on.apply(t,arguments),this}},{key:"off",value:function(){var t;return(t=this.el).off.apply(t,arguments),this}},{key:"trigger",value:function(){var t;return(t=this.el).trigger.apply(t,arguments),this}},{key:"getElement",value:function(){return this.el}},{key:"getPoints",value:function(){return this.points}}]),t}();e["default"]=d}});
//# sourceMappingURL=2.video.js.map