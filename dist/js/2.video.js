webpackJsonp([2],{80:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function i(t){var e=arguments.length<=1||void 0===arguments[1]?1:arguments[1];return TweenMax.to(C,e,{opacity:t})}function r(){return new k["default"](function(t){(new TimelineMax).add(function(){I.show(),i(1,0)}).fromTo(I,1,{autoAlpha:0},{autoAlpha:1}).addLabel("start").add(i(.7),"start").fromTo([L,j],.1,{scale:2,opacity:0},{scale:1,opacity:1,ease:Elastic.easeOut.config(2,.3)},"start+=0.2").fromTo(q.getElement(),.3,{y:100},{y:0},"start+=0.4").add(function(){t(),B["default"].trigger(M.MODAL_AFTER_OPEN)})})}function a(){return new k["default"](function(t){(new TimelineMax).add(i(1,.3)).fromTo(I,.5,{autoAlpha:1},{autoAlpha:0}).add(function(){I.hide(),t(),B["default"].trigger(M.MODAL_AFTER_CLOSE)})})}function s(t){var e=arguments.length<=1||void 0===arguments[1]?.3:arguments[1];return new k["default"](function(n){var o=F.eq(t);TweenMax.to(o,e,{autoAlpha:0,scale:2,clearProps:"all",onComplete:n})})}function u(){R.on("click",c),j.on("click",f),L.on("click",function(){L.toggleClass("is-muted"),V.toggleSound()}),V.on(M.VIDEO_BREAKPOINT,function(t,e){console.info("breakpoint "+e);var n=$[e];i(.7),d(e),m(e),"function"==typeof n&&n(),setTimeout(function(){V.one("play",function(){var t=N.get("activeBp");p(),i(0),y(t,1)})},0)}),V.on(M.VIDEO_PROGRESS,function(t,e){q.setProgress(e)}),V.on("volumechange",function(){console.log("change volume")}),q.on(M.PROGRESSBAR_CLICK,function(t,e){V.setProgress(e),V.getProp("paused")&&V.play()}),q.on(M.PROGRESSBAR_POINT_CLICK,function(t,e){V.goToBreakpoint(e)})}function c(){B["default"].trigger(M.MODAL_BEFORE_OPEN),r().then(function(){return V.goToBreakpoint(0)})["catch"](function(t){return console.error(t)})}function f(){var t=N.get("activeBp");B["default"].trigger(M.MODAL_BEFORE_CLOSE),V.pause(),null!==t?y().then(a).then(h):a().then(h)}function l(t){K.eq(t).addClass("is-active")}function p(){K.filter(".is-active").removeClass("is-active")}function d(t){p(),l(t)}function v(){F.each(function(t,e){(0,E["default"])(e).attr("style","")})}function h(){v(),p(),V.setProgress(0),q.setProgress(0)}function g(t){var e=G[t];return N.set("activeBp",t),"function"==typeof e?e():void 0}function y(){var t=arguments.length<=0||void 0===arguments[0]?N.get("activeBp"):arguments[0],e=arguments[1];return null!==t?(N.set("activeBp",null),s(t,e)):void 0}function m(t){var e=N.get("activeBp");return null===e?g(t):y(e).then(function(){return g(t)})}var _=n(81),k=o(_),T=n(1),E=o(T);n(3);var w=n(100),O=o(w),A=n(106),P=o(A),x=n(8),B=o(x),b=n(9),M=n(10),S=[24,52,81],D=123,R=(0,E["default"])(".hero__logo"),I=(0,E["default"])(".modal-video"),C=I.find(".modal-video__overlay"),F=I.find(".video-section"),L=I.find(".controll-btn-volume"),j=I.find(".controll-btn-close"),q=new P["default"](I.find(".video-timeline")),V=window.video=new O["default"]("video",{breakpoints:S,fakeDuration:D}),K=q.getPoints(),N={modalActive:!1,activeBp:null,set:function(t,e){this[t]=e},get:function(t){return this[t]}};V.on(M.VIDEO_READY,function(){console.info("Video ready"),u(),q.setupPoints(V.getBreakpoints()),B["default"].trigger(M.VIDEO_READY),R.trigger("click")}),V.setProp("preload",!0);var G=[function(){return new k["default"](function(t){var e=F.eq(0);(new TimelineMax).fromTo(e,.5,{autoAlpha:0,scale:5},{autoAlpha:1,scale:1}).fromTo(e.find("p"),.5,{opacity:0,y:100},{opacity:1,y:0}).fromTo(e.find(".icon-mouse"),.8,{opacity:0,y:100},{opacity:1,y:0,ease:Elastic.easeOut.config(1,.5)}).add(t).staggerTo(e.find(".icon-mouse__arrow"),.3,{opacity:0,repeat:5,yoyo:!0},.15,"-=0.4")})},function(){return new k["default"](function(t){var e=F.eq(1),n=e.find(".step-figure"),o=n.first(),i=n.not(":first"),r=o.find(".icon-radio__signal"),a=new TimelineMax({repeat:10}).staggerFromTo(r,.1,{opacity:0},{opacity:1,repeat:1,yoyo:!0},.2).set(r,{opacity:1});(new TimelineMax).set(e,{autoAlpha:1}).fromTo(e.find(".step-r-logo"),.5,{autoAlpha:0,scale:7},{autoAlpha:1,scale:1}).fromTo(e.find(".h4"),.5,{opacity:0,y:30},{opacity:1,y:0},"-=0.2").staggerFromTo([i.find(".icon"),i.find(".h5")],.5,{opacity:0,y:20},{opacity:1,y:0,ease:Elastic.easeOut.config(1.2,.5)},.1).fromTo(o,.5,{opacity:0,scale:2},{opacity:1,scale:1,ease:Elastic.easeOut.config(1,.75)},"-=0.2").staggerFromTo([o.find(".icon"),o.find(".h5")],.5,{opacity:0,y:20},{opacity:1,y:0,ease:Elastic.easeOut.config(1.2,.5)},.1).add(t).add(a)})},function(){return new k["default"](function(t){var e=F.eq(2);(new TimelineMax).set(e,{autoAlpha:1}).fromTo(e.find(".step-r-logo"),.5,{autoAlpha:0,scale:7},{autoAlpha:1,scale:1}).staggerFromTo([e.find(".h4"),e.find(".h5")],.5,{opacity:0,y:20},{opacity:1,y:0,ease:Elastic.easeOut.config(1.2,.5)},.1).fromTo(e.find(".step-3__circle"),.5,{opacity:0,scale:2},{opacity:1,scale:1,ease:Elastic.easeOut.config(1,.75)}).fromTo(e.find(".step-3__slider"),.2,{opacity:0},{opacity:1}).add(t)})},function(){return new k["default"](function(t){var e=F.eq(3),n=e.find(".step-figure"),o=n.last(),i=n.not(":last");(new TimelineMax).set(e,{autoAlpha:1}).fromTo(e.find(".step-r-logo"),.5,{autoAlpha:0,scale:7},{autoAlpha:1,scale:1}).fromTo(e.find(".h4"),.5,{opacity:0,y:30},{opacity:1,y:0},"-=0.2").staggerFromTo([i.find(".icon"),i.find(".h5")],.5,{opacity:0,y:20},{opacity:1,y:0,ease:Elastic.easeOut.config(1.2,.5)},.1).fromTo(o,.5,{opacity:0,scale:2},{opacity:1,scale:1,ease:Elastic.easeOut.config(1,.75)},"-=0.2").staggerFromTo([o.find(".icon"),o.find(".h5")],.5,{opacity:0,y:20},{opacity:1,y:0,ease:Elastic.easeOut.config(1.2,.5)},.1).add(t)})},function(){return new k["default"](function(t){var e=F.eq(4),n=e.find(".step-figure"),o=n.last(),i=n.not(":last");(new TimelineMax).set(e,{autoAlpha:1}).fromTo(e.find(".step-r-logo"),.5,{autoAlpha:0,scale:7},{autoAlpha:1,scale:1}).fromTo(e.find(".h4"),.5,{opacity:0,y:30},{opacity:1,y:0},"-=0.2").staggerFromTo([i.find(".icon"),i.find(".h5")],.5,{opacity:0,y:20},{opacity:1,y:0,ease:Elastic.easeOut.config(1.2,.5)},.1).fromTo(o,.5,{opacity:0,scale:2},{opacity:1,scale:1,ease:Elastic.easeOut.config(1,.75)},"-=0.2").staggerFromTo([o.find(".icon-squares"),o.find(".h5")],.5,{opacity:0,y:20},{opacity:1,y:0,ease:Elastic.easeOut.config(1.2,.5)},.1).add(t)})}],$=[function(){function t(n){"down"===(0,b.getScrollDirection)(n)&&(V.play(),e.off("wheel",t))}var e=(0,E["default"])(window);e.on("wheel",t),B["default"].one(M.MODAL_BEFORE_CLOSE,function(){e.off("wheel",t)})},function(){F.eq(1).find(".step-action-button").one("click",function(t){t.preventDefault(),V.play()})},function(){function t(t){u=t.pageX,a.addClass("is-dragging"),setTimeout(function(){a.on("mousemove",e),a.one("mouseup",n)},0)}function e(t){var e=t.pageX-u;if(!(0>e)){var n=s>=e?e:s;TweenMax.set(i,{x:n}),TweenMax.set(r,{x:n/3,opacity:1-(0,b.percentage)(n,s,0)/100}),c=n}}function n(){var t=0;u=null,a.removeClass("is-dragging"),c===s&&(V.play(),c=0,t=1e3),setTimeout(function(){TweenMax.set([i,r],{x:0,opacity:1,clearProps:"all"})},t),setTimeout(function(){a.off("mousemove",e)},0)}var o=F.eq(2),i=o.find(".step-3__slider"),r=o.find(".step-3__right .h5"),a=(0,E["default"])("body"),s=300,u=null,c=0;i.on("mousedown",t),i.on("touchend",function(){return V.play()})},function(){F.eq(3).find(".step-action-button").one("click",function(t){t.preventDefault(),V.play()})},function(){V.play()}]},81:function(t,e,n){t.exports={"default":n(82),__esModule:!0}},82:function(t,e,n){n(67),n(43),n(15),n(83),t.exports=n(28).Promise},83:function(t,e,n){"use strict";var o,i=n(33),r=n(25),a=n(27),s=n(29),u=n(47),c=n(26),f=n(52),l=n(51),p=n(30),d=n(84),v=n(85),h=n(89).set,g=n(90),y=n(40)("species"),m=n(91),_=n(92),k="Promise",T=a.process,E="process"==u(T),w=a[k],O=function(t){var e=new w(function(){});return t&&(e.constructor=Object),w.resolve(e)===e},A=function(){function t(e){var n=new w(e);return h(n,t.prototype),n}var e=!1;try{if(e=w&&w.resolve&&O(),h(t,w),t.prototype=i.create(w.prototype,{constructor:{value:t}}),t.resolve(5).then(function(){})instanceof t||(e=!1),e&&n(35)){var o=!1;w.resolve(i.setDesc({},"then",{get:function(){o=!0}})),e=o}}catch(r){e=!1}return e}(),P=function(t,e){return r&&t===w&&e===o?!0:g(t,e)},x=function(t){var e=l(t)[y];return void 0!=e?e:t},B=function(t){var e;return f(t)&&"function"==typeof(e=t.then)?e:!1},b=function(t){var e,n;this.promise=new t(function(t,o){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=o}),this.resolve=p(e),this.reject=p(n)},M=function(t){try{t()}catch(e){return{error:e}}},S=function(t,e){if(!t.n){t.n=!0;var n=t.c;_(function(){for(var o=t.v,i=1==t.s,r=0,s=function(e){var n,r,a=i?e.ok:e.fail,s=e.resolve,u=e.reject;try{a?(i||(t.h=!0),n=a===!0?o:a(o),n===e.promise?u(TypeError("Promise-chain cycle")):(r=B(n))?r.call(n,s,u):s(n)):u(o)}catch(c){u(c)}};n.length>r;)s(n[r++]);n.length=0,t.n=!1,e&&setTimeout(function(){var e,n,i=t.p;D(i)&&(E?T.emit("unhandledRejection",o,i):(e=a.onunhandledrejection)?e({promise:i,reason:o}):(n=a.console)&&n.error&&n.error("Unhandled promise rejection",o)),t.a=void 0},1)})}},D=function(t){var e,n=t._d,o=n.a||n.c,i=0;if(n.h)return!1;for(;o.length>i;)if(e=o[i++],e.fail||!D(e.promise))return!1;return!0},R=function(t){var e=this;e.d||(e.d=!0,e=e.r||e,e.v=t,e.s=2,e.a=e.c.slice(),S(e,!0))},I=function(t){var e,n=this;if(!n.d){n.d=!0,n=n.r||n;try{if(n.p===t)throw TypeError("Promise can't be resolved itself");(e=B(t))?_(function(){var o={r:n,d:!1};try{e.call(t,s(I,o,1),s(R,o,1))}catch(i){R.call(o,i)}}):(n.v=t,n.s=1,S(n,!1))}catch(o){R.call({r:n,d:!1},o)}}};A||(w=function(t){p(t);var e=this._d={p:d(this,w,k),c:[],a:void 0,s:0,d:!1,v:void 0,h:!1,n:!1};try{t(s(I,e,1),s(R,e,1))}catch(n){R.call(e,n)}},n(97)(w.prototype,{then:function(t,e){var n=new b(m(this,w)),o=n.promise,i=this._d;return n.ok="function"==typeof t?t:!0,n.fail="function"==typeof e&&e,i.c.push(n),i.a&&i.a.push(n),i.s&&S(i,!1),o},"catch":function(t){return this.then(void 0,t)}})),c(c.G+c.W+c.F*!A,{Promise:w}),n(39)(w,k),n(98)(k),o=n(28)[k],c(c.S+c.F*!A,k,{reject:function(t){var e=new b(this),n=e.reject;return n(t),e.promise}}),c(c.S+c.F*(!A||O(!0)),k,{resolve:function(t){if(t instanceof w&&P(t.constructor,this))return t;var e=new b(this),n=e.resolve;return n(t),e.promise}}),c(c.S+c.F*!(A&&n(99)(function(t){w.all(t)["catch"](function(){})})),k,{all:function(t){var e=x(this),n=new b(e),o=n.resolve,r=n.reject,a=[],s=M(function(){v(t,!1,a.push,a);var n=a.length,s=Array(n);n?i.each.call(a,function(t,i){var a=!1;e.resolve(t).then(function(t){a||(a=!0,s[i]=t,--n||o(s))},r)}):o(s)});return s&&r(s.error),n.promise},race:function(t){var e=x(this),n=new b(e),o=n.reject,i=M(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,o)})});return i&&o(i.error),n.promise}})},84:function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError(n+": use the 'new' operator!");return t}},85:function(t,e,n){var o=n(29),i=n(86),r=n(87),a=n(51),s=n(88),u=n(53);t.exports=function(t,e,n,c){var f,l,p,d=u(t),v=o(n,c,e?2:1),h=0;if("function"!=typeof d)throw TypeError(t+" is not iterable!");if(r(d))for(f=s(t.length);f>h;h++)e?v(a(l=t[h])[0],l[1]):v(t[h]);else for(p=d.call(t);!(l=p.next()).done;)i(p,v,l.value,e)}},86:function(t,e,n){var o=n(51);t.exports=function(t,e,n,i){try{return i?e(o(n)[0],n[1]):e(n)}catch(r){var a=t["return"];throw void 0!==a&&o(a.call(t)),r}}},87:function(t,e,n){var o=n(19),i=n(40)("iterator"),r=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||r[i]===t)}},88:function(t,e,n){var o=n(45),i=Math.min;t.exports=function(t){return t>0?i(o(t),9007199254740991):0}},89:function(t,e,n){var o=n(33).getDesc,i=n(52),r=n(51),a=function(t,e){if(r(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=n(29)(Function.call,o(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:i(t,n),t}}({},!1):void 0),check:a}},90:function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},91:function(t,e,n){var o=n(51),i=n(30),r=n(40)("species");t.exports=function(t,e){var n,a=o(t).constructor;return void 0===a||void 0==(n=o(a)[r])?e:i(n)}},92:function(t,e,n){var o,i,r,a=n(27),s=n(93).set,u=a.MutationObserver||a.WebKitMutationObserver,c=a.process,f=a.Promise,l="process"==n(22)(c),p=function(){var t,e,n;for(l&&(t=c.domain)&&(c.domain=null,t.exit());o;)e=o.domain,n=o.fn,e&&e.enter(),n(),e&&e.exit(),o=o.next;i=void 0,t&&t.enter()};if(l)r=function(){c.nextTick(p)};else if(u){var d=1,v=document.createTextNode("");new u(p).observe(v,{characterData:!0}),r=function(){v.data=d=-d}}else r=f&&f.resolve?function(){f.resolve().then(p)}:function(){s.call(a,p)};t.exports=function(t){var e={fn:t,next:void 0,domain:l&&c.domain};i&&(i.next=e),o||(o=e,r()),i=e}},93:function(t,e,n){var o,i,r,a=n(29),s=n(94),u=n(95),c=n(96),f=n(27),l=f.process,p=f.setImmediate,d=f.clearImmediate,v=f.MessageChannel,h=0,g={},y="onreadystatechange",m=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},_=function(t){m.call(t.data)};p&&d||(p=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return g[++h]=function(){s("function"==typeof t?t:Function(t),e)},o(h),h},d=function(t){delete g[t]},"process"==n(22)(l)?o=function(t){l.nextTick(a(m,t,1))}:v?(i=new v,r=i.port2,i.port1.onmessage=_,o=a(r.postMessage,r,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(o=function(t){f.postMessage(t+"","*")},f.addEventListener("message",_,!1)):o=y in c("script")?function(t){u.appendChild(c("script"))[y]=function(){u.removeChild(this),m.call(t)}}:function(t){setTimeout(a(m,t,1),0)}),t.exports={set:p,clear:d}},94:function(t,e){t.exports=function(t,e,n){var o=void 0===n;switch(e.length){case 0:return o?t():t.call(n);case 1:return o?t(e[0]):t.call(n,e[0]);case 2:return o?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return o?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return o?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},95:function(t,e,n){t.exports=n(27).document&&document.documentElement},96:function(t,e,n){var o=n(52),i=n(27).document,r=o(i)&&o(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},97:function(t,e,n){var o=n(31);t.exports=function(t,e){for(var n in e)o(t,n,e[n]);return t}},98:function(t,e,n){"use strict";var o=n(28),i=n(33),r=n(35),a=n(40)("species");t.exports=function(t){var e=o[t];r&&e&&!e[a]&&i.setDesc(e,a,{configurable:!0,get:function(){return this}})}},99:function(t,e,n){var o=n(40)("iterator"),i=!1;try{var r=[7][o]();r["return"]=function(){i=!0},Array.from(r,function(){throw 2})}catch(a){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var r=[7],a=r[o]();a.next=function(){n=!0},r[o]=function(){return a},t(r)}catch(s){}return n}},100:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var i=n(101),r=o(i),a=n(68),s=o(a),u=n(69),c=o(u);Object.defineProperty(e,"__esModule",{value:!0});var f=n(1),l=o(f),p=n(9),d=n(10),v={breakpoints:[],startBreakpoint:!0,endBreakpoint:!0,pauseOnBreakpoint:!0,fakeDuration:null},h=function(){function t(e,n){(0,s["default"])(this,t),this.settings=l["default"].extend({},v,n),this.video=document.getElementById(e),this.$video=(0,l["default"])(this.video),this.breakpointsPercent=[],this.breakpointsSec=[],this.currentBreakpoint=0,this._bindEvents()}return(0,c["default"])(t,[{key:"_bindEvents",value:function(){var t=this,e=this.settings.pauseOnBreakpoint;this.video.addEventListener("timeupdate",function(e){var n=t.getProgress(),o=t._whichBpIsActive();o>t.currentBreakpoint&&(t.currentBreakpoint=o,t.trigger(d.VIDEO_BREAKPOINT,[o])),t.trigger(d.VIDEO_PROGRESS,[n])}),this.video.addEventListener("loadedmetadata",function(e){t._setupBreakpoints(),t.trigger(d.VIDEO_READY,[t])}),e&&this.on(d.VIDEO_BREAKPOINT,function(){t.pause()})}},{key:"_setupBreakpoints",value:function(){var t=this,e=this.settings,n=e.breakpoints,o=e.startBreakpoint,i=e.endBreakpoint,a=e.fakeDuration,s=n.map(function(e){return t.getProgress(e)}),u=[],c=[];o&&(u.push(0),c.push(0)),u.push.apply(u,(0,r["default"])(s)),c.push.apply(c,(0,r["default"])(n)),i&&(u.push(100),c.push(a||this.video.duration)),this.breakpointsPercent=u,this.breakpointsSec=c}},{key:"_whichBpIsActive",value:function(){for(var t=arguments.length<=0||void 0===arguments[0]?this.video.currentTime:arguments[0],e=this.breakpointsSec,n=e.length;n;)if(t>=e[--n])return n;return 0}},{key:"getBreakpoints",value:function(){return this.breakpointsPercent}},{key:"on",value:function(){var t;return(t=this.$video).on.apply(t,arguments),this}},{key:"one",value:function(){var t;return(t=this.$video).one.apply(t,arguments),this}},{key:"off",value:function(){var t;return(t=this.$video).off.apply(t,arguments),this}},{key:"trigger",value:function(){var t;(t=this.$video).trigger.apply(t,arguments)}},{key:"play",value:function(){return this.video.play(),this}},{key:"pause",value:function(){return this.video.pause(),this}},{key:"getProgress",value:function(t){var e=this.video,n=e.duration,o=e.currentTime,i=this.settings.fakeDuration;return void 0===t&&(t=o),(0,p.percentage)(t,i||n,2)}},{key:"getProp",value:function(t){return"string"==typeof t?this.video[t]:void 0}},{key:"setProp",value:function(t,e){"string"==typeof t&&(this.video[t]=e)}},{key:"setProgress",value:function(t){var e=this.video.duration,n=this.settings.fakeDuration,o=n||e,i=void 0;switch("string"==typeof t&&(t=parseFloat(t,10)),t>100&&(t=100),0>t&&(t=0),t){case 0:i=0;break;case 100:i=o;break;default:i=Math.round(o/100*t*100)/100}return this.video.currentTime=i,this.currentBreakpoint=this._whichBpIsActive(),this}},{key:"goToBreakpoint",value:function(t){this.currentBreakpoint=t,this.setProgress(this.breakpointsPercent[t]),this.trigger(d.VIDEO_BREAKPOINT,[t])}},{key:"toggleSound",value:function(){this.video.muted=!this.video.muted}}]),t}();e["default"]=h},101:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var i=n(102),r=o(i);e["default"]=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,r["default"])(t)}},102:function(t,e,n){t.exports={"default":n(103),__esModule:!0}},103:function(t,e,n){n(43),n(104),t.exports=n(28).Array.from},104:function(t,e,n){"use strict";var o=n(29),i=n(26),r=n(105),a=n(86),s=n(87),u=n(88),c=n(53);i(i.S+i.F*!n(99)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,f,l=r(t),p="function"==typeof this?this:Array,d=arguments,v=d.length,h=v>1?d[1]:void 0,g=void 0!==h,y=0,m=c(l);if(g&&(h=o(h,v>2?d[2]:void 0,2)),void 0==m||p==Array&&s(m))for(e=u(l.length),n=new p(e);e>y;y++)n[y]=g?h(l[y],y):l[y];else for(f=m.call(l),n=new p;!(i=f.next()).done;y++)n[y]=g?a(f,h,[i.value,y],!0):i.value;return n.length=y,n}})},105:function(t,e,n){var o=n(23);t.exports=function(t){return Object(o(t))}},106:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var i=n(68),r=o(i),a=n(69),s=o(a);Object.defineProperty(e,"__esModule",{value:!0});var u=n(1),c=o(u),f=n(9),l=n(10),p={barSel:".video-timeline__progress-bar",pointSel:".video-timeline__point"},d=function(){function t(e,n){(0,r["default"])(this,t),this.settings=c["default"].extend({},p,n),this.el=e instanceof c["default"]?e:(0,c["default"])(e),this.progressBar=this.el.find(this.settings.barSel),this.points=this.el.find(this.settings.pointSel),this._bindEvents()}return(0,s["default"])(t,[{key:"_bindEvents",value:function(){var t=this;this.el.on("click",function(e){var n=t._getProgressByClick(e);t.setProgress(n),t.trigger(l.PROGRESSBAR_CLICK,[n])})}},{key:"_getProgressByClick",value:function(t){var e=this.el.offset().left,n=this.el.width(),o=t.pageX;return(0,f.percentage)(o-e,n,2)}},{key:"setupPoints",value:function(t){var e=this,n=this;t.forEach(function(t,n){e.points.eq(n).css({left:t+"%"}).attr("data-progress",t)}),this.points.on("click",function(t){var e=(0,c["default"])(this),o=e.index(),i=e.data("progress");t.stopPropagation(),n.setProgress(i),n.trigger(l.PROGRESSBAR_POINT_CLICK,[o,i])})}},{key:"setProgress",value:function(t){t>100||this.progressBar.css({width:t+"%"})}},{key:"on",value:function(){var t;return(t=this.el).on.apply(t,arguments),this}},{key:"off",value:function(){var t;return(t=this.el).off.apply(t,arguments),this}},{key:"trigger",value:function(){var t;return(t=this.el).trigger.apply(t,arguments),this}},{key:"getElement",value:function(){return this.el}},{key:"getPoints",value:function(){return this.points}}]),t}();e["default"]=d}});
//# sourceMappingURL=2.video.js.map