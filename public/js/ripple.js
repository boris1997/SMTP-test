
// // import init from './lib.js';


// var rippleTypeAttr = 'data-event';

// /**
//  * @param {!Event|!Touch} event
//  * @return {Node}
//  */
// function getHolderWithRippleJsClass(event) {
//   var holder = /** @type {!Node} */ (event.target);
//   var childNodesLength = holder.childNodes.length;

//   if (holder.localName !== 'button' || !childNodesLength) {
//     return holder.classList.contains('rippleJS') ? holder : null;
//   }

//   // fix firefox event target issue https://bugzilla.mozilla.org/show_bug.cgi?id=1089326
//   for (var i = 0; i < childNodesLength; ++i) {
//     var child = holder.childNodes[i];
//     var cl = child.classList;
//     if (cl && cl.contains('rippleJS')) {
//       return child;  // return valid holder
//     }
//   }

//   return null;
// }

// /**
//  * @param {string} type
//  * @param {!Event|!Touch} at
//  */
// function startRipple(type, at) {
//   var holder = getHolderWithRippleJsClass(at);
//   if (!holder) {
//     return false;  // ignore
//   }
//   var cl = holder.classList;

//   // Store the event use to generate this ripple on the holder: don't allow
//   // further events of different types until we're done. Prevents double-
//   // ripples from mousedown/touchstart.
//   var prev = holder.getAttribute(rippleTypeAttr);
//   if (prev && prev !== type) {
//     return false;
//   }
//   holder.setAttribute(rippleTypeAttr, type);

//   // Create and position the ripple.
//   var rect = holder.getBoundingClientRect();
//   var x = at.offsetX;
//   var y;
//   if (x !== undefined) {
//     y = at.offsetY;
//   } else {
//     x = at.clientX - rect.left;
//     y = at.clientY - rect.top;
//   }
//   var ripple = document.createElement('div');
//   var max;
//   if (rect.width === rect.height) {
//     max = rect.width * 1.412;
//   } else {
//     max = Math.sqrt(rect.width * rect.width + rect.height * rect.height);
//   }
//   var dim = max * 2 + 'px';
//   ripple.style.width = dim;
//   ripple.style.height = dim;
//   ripple.style.marginLeft = -max + x + 'px';
//   ripple.style.marginTop = -max + y + 'px';

//   // Activate/add the element.
//   ripple.className = 'ripple';
//   holder.appendChild(ripple);
//   window.setTimeout(function () {
//     ripple.classList.add('held');
//   }, 0);

//   var releaseEvent = (type === 'mousedown' ? 'mouseup' : 'touchend');
//   var release = function (ev) {
//     // TODO: We don't check for _our_ touch here. Releasing one finger
//     // releases all ripples.
//     document.removeEventListener(releaseEvent, release);
//     ripple.classList.add('done');

//     // larger than animation: duration in css
//     window.setTimeout(function () {
//       holder.removeChild(ripple);
//       if (!holder.children.length) {
//         cl.remove('active');
//         holder.removeAttribute(rippleTypeAttr);
//       }
//     }, 650);
//   };
//   document.addEventListener(releaseEvent, release);
// }

// /**
//  * Installs mousedown/touchstart handlers on the target for ripples.
//  *
//  * @param {!Node=} target to install on, default document 
//  */
// function init(target) {
//   target = target || document;
//   target.addEventListener('mousedown', function (ev) {
//     if (ev.button === 0) {
//       // trigger on left click only
//       startRipple(ev.type, ev);
//     }
//   }, { passive: true });
//   target.addEventListener('touchstart', function (ev) {
//     for (var i = 0; i < ev.changedTouches.length; ++i) {
//       startRipple(ev.type, ev.changedTouches[i]);
//     }
//   }, { passive: true });
// }






// (function () {
//   var css = /** @noinline */ ('/*rippleJS*/.rippleJS,.rippleJS.fill::after{position:absolute;top:0;left:0;right:0;bottom:0}.rippleJS{display:block;overflow:hidden;border-radius:inherit;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.rippleJS.fill::after{content:""}.rippleJS.fill{border-radius:1000000px}.rippleJS .ripple{position:absolute;border-radius:100%;background:currentColor;opacity:.2;width:0;height:0;-webkit-transition:-webkit-transform .4s ease-out,opacity .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out;-webkit-transform:scale(0);transform:scale(0);pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rippleJS .ripple.held{opacity:.4;-webkit-transform:scale(1);transform:scale(1)}.rippleJS .ripple.done{opacity:0}');

//   /**
//    * @return {boolean}
//    */
//   function hasCSS() {
//     var test = document.createElement('div');
//     test.className = 'rippleJS';
//     document.body.appendChild(test);
//     var s = window.getComputedStyle(test);
//     var result = (s.position === 'absolute');
//     document.body.removeChild(test);
//     return result;
//   }

//   function setup() {
//     // minified CSS from ripple.css
//     if (!hasCSS()) {
//       var style = document.createElement('style');
//       style.textContent = css;
//       document.head.insertBefore(style, document.head.firstChild);
//     }
//     init();
//   };

//   if (document.readyState === 'complete') {
//     setup();
//   } else {
//     window.addEventListener('load', setup);
//   }
// }());



// (function () {
//   function h(c) { c = c.target; var a = c.childNodes.length; if ("button" !== c.localName || !a) return c.classList.contains("rippleJS") ? c : null; for (var b = 0; b < a; ++b) { var g = c.childNodes[b], e = g.classList; if (e && e.contains("rippleJS")) return g } return null }
//   function n(c, a) {
//     var b = h(a); if (b) {
//       var g = b.classList, e = b.getAttribute("data-event"); if (!e || e === c) {
//         b.setAttribute("data-event", c); var d = b.getBoundingClientRect(); e = a.offsetX; void 0 !== e ? a = a.offsetY : (e = a.clientX - d.left, a = a.clientY - d.top); var f = document.createElement("div"); d = d.width === d.height ? 1.412 * d.width : Math.sqrt(d.width * d.width + d.height * d.height); var k = 2 * d + "px"; f.style.width = k; f.style.height = k; f.style.marginLeft = -d + e + "px"; f.style.marginTop = -d + a + "px"; f.className = "ripple"; b.appendChild(f); window.setTimeout(function () { f.classList.add("held") },
//           0); var l = "mousedown" === c ? "mouseup" : "touchend", m = function () { document.removeEventListener(l, m); f.classList.add("done"); window.setTimeout(function () { b.removeChild(f); b.children.length || (g.remove("active"), b.removeAttribute("data-event")) }, 650) }; document.addEventListener(l, m)
//       }
//     }
//   }
//   function p() { var c = c || document; c.addEventListener("mousedown", function (a) { 0 === a.button && n(a.type, a) }, { passive: !0 }); c.addEventListener("touchstart", function (a) { for (var b = 0; b < a.changedTouches.length; ++b)n(a.type, a.changedTouches[b]) }, { passive: !0 }) }; (function () {
//     function c() {
//       var a = document.createElement("div"); a.className = "rippleJS"; document.body.appendChild(a); var b = "absolute" === window.getComputedStyle(a).position; document.body.removeChild(a); b || (a = document.createElement("style"), a.textContent = '/*rippleJS*/.rippleJS,.rippleJS.fill::after{position:absolute;top:0;left:0;right:0;bottom:0}.rippleJS{display:block;overflow:hidden;border-radius:inherit;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.rippleJS.fill::after{content:""}.rippleJS.fill{border-radius:1000000px}.rippleJS .ripple{position:absolute;border-radius:100%;background:currentColor;opacity:.2;width:0;height:0;-webkit-transition:-webkit-transform .4s ease-out,opacity .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out;-webkit-transform:scale(0);transform:scale(0);pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rippleJS .ripple.held{opacity:.4;-webkit-transform:scale(1);transform:scale(1)}.rippleJS .ripple.done{opacity:0}',
//         document.head.insertBefore(a, document.head.firstChild)); p()
//     } "complete" === document.readyState ? c() : window.addEventListener("load", c)
//   })();
// }())


// (function () {
//   function h(c) { c = c.target; var a = c.childNodes.length; if ("button" !== c.localName || !a) return c.classList.contains("rippleJS") ? c : null; for (var b = 0; b < a; ++b) { var g = c.childNodes[b], e = g.classList; if (e && e.contains("rippleJS")) return g } return null }
//   function n(c, a) {
//     var b = h(a); if (b) {
//       var g = b.classList, e = b.getAttribute("data-event"); if (!e || e === c) {
//         b.setAttribute("data-event", c); var d = b.getBoundingClientRect(); e = a.offsetX; void 0 !== e ? a = a.offsetY : (e = a.clientX - d.left, a = a.clientY - d.top); var f = document.createElement("div"); d = d.width === d.height ? 1.412 * d.width : Math.sqrt(d.width * d.width + d.height * d.height); var k = 2 * d + "px"; f.style.width = k; f.style.height = k; f.style.marginLeft = -d + e + "px"; f.style.marginTop = -d + a + "px"; f.className = "ripple"; b.appendChild(f); window.setTimeout(function () { f.classList.add("held") },
//           0); var l = "mousedown" === c ? "mouseup" : "touchend", m = function () { document.removeEventListener(l, m); f.classList.add("done"); window.setTimeout(function () { b.removeChild(f); b.children.length || (g.remove("active"), b.removeAttribute("data-event")) }, 650) }; document.addEventListener(l, m)
//       }
//     }
//   }
//   function p() { var c = c || document; c.addEventListener("mousedown", function (a) { 0 === a.button && n(a.type, a) }, { passive: !0 }); c.addEventListener("touchstart", function (a) { for (var b = 0; b < a.changedTouches.length; ++b)n(a.type, a.changedTouches[b]) }, { passive: !0 }) }; (function () {
//     function c() {
//       var a = document.createElement("div"); a.className = "rippleJS"; document.body.appendChild(a); var b = "absolute" === window.getComputedStyle(a).position; document.body.removeChild(a); b || (a = document.createElement("style"), a.textContent = '/*rippleJS*/.rippleJS,.rippleJS.fill::after{position:absolute;top:0;left:0;right:0;bottom:0}.rippleJS{display:block;overflow:hidden;border-radius:inherit;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.rippleJS.fill::after{content:""}.rippleJS.fill{border-radius:1000000px}.rippleJS .ripple{position:absolute;border-radius:100%;background:currentColor;opacity:.2;width:0;height:0;-webkit-transition:-webkit-transform .4s ease-out,opacity .4s ease-out;transition:transform .4s ease-out,opacity .4s ease-out;-webkit-transform:scale(0);transform:scale(0);pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rippleJS .ripple.held{opacity:.4;-webkit-transform:scale(1);transform:scale(1)}.rippleJS .ripple.done{opacity:0}',
//         document.head.insertBefore(a, document.head.firstChild)); p()
//     } "complete" === document.readyState ? c() : window.addEventListener("load", c)
//   })();
// }())



window.addEventListener('load', function () {
  function applyStyle(css) {
    console.log('ok')
    var style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    document.body.appendChild(style);
  }
  function hasCSS() {
    var test = document.createElement('div');
    test.className = 'rippleJS';
    document.body.appendChild(test);
    var s = window.getComputedStyle(test);
    var result = s.position == 'absolute';
    document.body.removeChild(test);
    console.log(result)
    return result;
  }
  if (!hasCSS()) {
    var css = '/*rippleJS*/.rippleJS{display:block;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;border-radius:inherit;-webkit-mask-image:-webkit-radial-gradient(circle,#fff,#000)}.rippleJS.fill::after{position:absolute;top:0;left:0;right:0;bottom:0;content:""}.rippleJS.fill.active{border-radius:1000000px}.rippleJS .ripple{position:absolute;border-radius:100%;background:currentColor;opacity:.5;transition:all .4s ease-out;width:0;height:0;pointer-events:none;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.rippleJS .ripple.held{opacity:1}.rippleJS .ripple.done{opacity:0}';
    applyStyle(css);
  }

  function startRipple(type, at) {
    console.log('ok')
    var holder = at.target;
    var cl = holder.classList;
    if (!cl.contains('rippleJS')) {
      return false;  // ignore
    }

    // Store the event use to generate this ripple on the holder: don't allow
    // further events of different types until we're done. Prevents double-
    // ripples from mousedown/touchstart.
    var prev = holder.getAttribute('data-event');
    if (prev && prev != type) {
      return false;
    }
    holder.setAttribute('data-event', type);

    // Create and position the ripple.
    var rect = holder.getBoundingClientRect();
    var x = at.offsetX;
    var y;
    if (x !== undefined) {
      y = at.offsetY;
    } else {
      x = at.clientX - rect.left;
      y = at.clientY - rect.top;
    }
    var ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    ripple.style.webkitTransform = ripple.style.transform;
    ripple.style.zIndex = -1;

    // Activate/add the element, forcing an animation (setTimeout).
    cl.add('active');
    holder.appendChild(ripple);
    window.setTimeout(function () {
      var max;
      if (rect.width == rect.height) {
        max = rect.width * 1.412;
      } else {
        max = Math.sqrt(rect.width * rect.width + rect.height * rect.height);
      }

      var dim = max * 2 + 'px';
      var margin = -max + 'px';
      ripple.style.width = dim;
      ripple.style.height = dim;
      ripple.style.marginLeft = margin;
      ripple.style.marginTop = margin;
      ripple.classList.add('held');
    }, 20);

    var releaseEvent = (type == 'mousedown' ? 'mouseup' : 'touchend');
    var release = function (ev) {
      // TODO: We don't check for _our_ touch here. Releasing one finger
      // releases all ripples.
      document.removeEventListener(releaseEvent, release);
      ripple.classList.add('done');

      // larger than animation: duration in css
      window.setTimeout(function () {
        holder.removeChild(ripple);
        if (!holder.children.length) {
          cl.remove('active');
          holder.removeAttribute('data-event');
        }
      }, 650);
    };
    document.addEventListener(releaseEvent, release);
  }

  document.addEventListener('mousedown', function (ev) {
    if (ev.button == 0) {
      // trigger on left click only
      startRipple(ev.type, ev);
    }
  });
  document.addEventListener('touchstart', function (ev) {
    for (var i = 0; i < ev.changedTouches.length; ++i) {
      startRipple(ev.type, ev.changedTouches[i]);
    }
  });
});