// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
if (typeof jQuery === 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}
// Place any jQuery/helper plugins in here.

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
/*
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
  def: "easeOutQuad",
  swing: function(e, f, a, h, g) {
    return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
  },
  easeInQuad: function(e, f, a, h, g) {
    return h * (f /= g) * f + a
  },
  easeOutQuad: function(e, f, a, h, g) {
    return -h * (f /= g) * (f - 2) + a
  },
  easeInOutQuad: function(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f + a
    }
    return -h / 2 * ((--f) * (f - 2) - 1) + a
  },
  easeInCubic: function(e, f, a, h, g) {
    return h * (f /= g) * f * f + a
  },
  easeOutCubic: function(e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f + 1) + a
  },
  easeInOutCubic: function(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f * f + a
    }
    return h / 2 * ((f -= 2) * f * f + 2) + a
  },
  easeInQuart: function(e, f, a, h, g) {
    return h * (f /= g) * f * f * f + a
  },
  easeOutQuart: function(e, f, a, h, g) {
    return -h * ((f = f / g - 1) * f * f * f - 1) + a
  },
  easeInOutQuart: function(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f * f * f + a
    }
    return -h / 2 * ((f -= 2) * f * f * f - 2) + a
  },
  easeInQuint: function(e, f, a, h, g) {
    return h * (f /= g) * f * f * f * f + a
  },
  easeOutQuint: function(e, f, a, h, g) {
    return h * ((f = f / g - 1) * f * f * f * f + 1) + a
  },
  easeInOutQuint: function(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return h / 2 * f * f * f * f * f + a
    }
    return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
  },
  easeInSine: function(e, f, a, h, g) {
    return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
  },
  easeOutSine: function(e, f, a, h, g) {
    return h * Math.sin(f / g * (Math.PI / 2)) + a
  },
  easeInOutSine: function(e, f, a, h, g) {
    return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
  },
  easeInExpo: function(e, f, a, h, g) {
    return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
  },
  easeOutExpo: function(e, f, a, h, g) {
    return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
  },
  easeInOutExpo: function(e, f, a, h, g) {
    if (f == 0) {
      return a
    }
    if (f == g) {
      return a + h
    }
    if ((f /= g / 2) < 1) {
      return h / 2 * Math.pow(2, 10 * (f - 1)) + a
    }
    return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
  },
  easeInCirc: function(e, f, a, h, g) {
    return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
  },
  easeOutCirc: function(e, f, a, h, g) {
    return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
  },
  easeInOutCirc: function(e, f, a, h, g) {
    if ((f /= g / 2) < 1) {
      return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
    }
    return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
  },
  easeInElastic: function(f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e
    }
    if ((h /= k) == 1) {
      return e + l
    }
    if (!j) {
      j = k * 0.3
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4
    } else {
      var i = j / (2 * Math.PI) * Math.asin(l / g)
    }
    return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
  },
  easeOutElastic: function(f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e
    }
    if ((h /= k) == 1) {
      return e + l
    }
    if (!j) {
      j = k * 0.3
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4
    } else {
      var i = j / (2 * Math.PI) * Math.asin(l / g)
    }
    return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
  },
  easeInOutElastic: function(f, h, e, l, k) {
    var i = 1.70158;
    var j = 0;
    var g = l;
    if (h == 0) {
      return e
    }
    if ((h /= k / 2) == 2) {
      return e + l
    }
    if (!j) {
      j = k * (0.3 * 1.5)
    }
    if (g < Math.abs(l)) {
      g = l;
      var i = j / 4
    } else {
      var i = j / (2 * Math.PI) * Math.asin(l / g)
    }
    if (h < 1) {
      return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    }
    return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
  },
  easeInBack: function(e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158
    }
    return i * (f /= h) * f * ((g + 1) * f - g) + a
  },
  easeOutBack: function(e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158
    }
    return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
  },
  easeInOutBack: function(e, f, a, i, h, g) {
    if (g == undefined) {
      g = 1.70158
    }
    if ((f /= h / 2) < 1) {
      return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
    }
    return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
  },
  easeInBounce: function(e, f, a, h, g) {
    return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
  },
  easeOutBounce: function(e, f, a, h, g) {
    if ((f /= g) < (1 / 2.75)) {
      return h * (7.5625 * f * f) + a
    } else {
      if (f < (2 / 2.75)) {
        return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
      } else {
        if (f < (2.5 / 2.75)) {
          return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
        } else {
          return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
        }
      }
    }
  },
  easeInOutBounce: function(e, f, a, h, g) {
    if (f < g / 2) {
      return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
    }
    return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
  }
});
*/
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
/*
! function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
  function b(b) {
    var g = b || window.event,
      h = i.call(arguments, 1),
      j = 0,
      l = 0,
      m = 0,
      n = 0,
      o = 0,
      p = 0;
    if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
      if (1 === g.deltaMode) {
        var q = a.data(this, "mousewheel-line-height");
        j *= q, m *= q, l *= q
      } else if (2 === g.deltaMode) {
        var r = a.data(this, "mousewheel-page-height");
        j *= r, m *= r, l *= r
      }
      if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
        var s = this.getBoundingClientRect();
        o = b.clientX - s.left, p = b.clientY - s.top
      }
      return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
    }
  }

  function c() {
    f = null
  }

  function d(a, b) {
    return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
  }
  var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
    i = Array.prototype.slice;
  if (a.event.fixHooks)
    for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
  var k = a.event.special.mousewheel = {
    version: "3.1.12",
    setup: function() {
      if (this.addEventListener)
        for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
      else this.onmousewheel = b;
      a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
    },
    teardown: function() {
      if (this.removeEventListener)
        for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
      else this.onmousewheel = null;
      a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
    },
    getLineHeight: function(b) {
      var c = a(b),
        d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
      return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
    },
    getPageHeight: function(b) {
      return a(b).height()
    },
    settings: {
      adjustOldDeltas: !0,
      normalizeOffset: !0
    }
  };
  a.fn.extend({
    mousewheel: function(a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
    },
    unmousewheel: function(a) {
      return this.unbind("mousewheel", a)
    }
  })
});
*/
/*
 * =================================================
 * viewScroller
 * Version: 2.0.6
 * Copyright (c) 2016 Marcin Gierczak
 * http://www.viewdesic.com
 * =================================================
 */
/*
! function(a) {
  a.fn.viewScroller = function(b) {
    function J() {
      function c(c) {
        return void 0 === b[c] && (b[c] = a(c)), b[c]
      }
      var b = {};
      return {
        get: c
      }
    }
    "object" == typeof b && (b = a.extend({
      animSpeedMainView: 700,
      animSpeedSubView: 700,
      animEffectMainView: "easeInOutCubic",
      animEffectSubView: "easeInOutCubic",
      animEffectMainViewCss3: "ease",
      animEffectSubViewCss3: "ease",
      useKeyboard: !0,
      useScrollbar: !1,
      changeWhenAnim: !0,
      loopMainViews: !1,
      loopSubViews: !1,
      fitToView: !0,
      timeToFit: 1e3,
      fixedWidth: 0,
      spaceMainBag: 0,
      beforeChange: null,
      afterChange: null,
      beforeResize: null,
      afterResize: null
    }, b)), a.fn.viewScroller.setAnimSpeedMainView = function(a) {
      b.animSpeedMainView = parseInt(a, 10) || 700
    }, a.fn.viewScroller.setAnimSpeedSubView = function(a) {
      b.animSpeedSubView = parseInt(a, 10) || 700
    }, a.fn.viewScroller.setAnimEffectMainView = function(a) {
      b.animEffectMainView = a
    }, a.fn.viewScroller.setAnimEffectSubView = function(a) {
      b.animEffectSubView = a
    }, a.fn.viewScroller.setAnimEffectMainViewCss3 = function(a) {
      b.animEffectMainViewCss3 = a
    }, a.fn.viewScroller.setAnimEffectSubViewCss3 = function(a) {
      b.animEffectSubViewCss3 = a
    }, a.fn.viewScroller.setUseKeyboard = function(a) {
      a !== !0 && a !== !1 || (b.useKeyboard = a)
    }, a.fn.viewScroller.setUseScrollbar = function(a) {
      pa(u[0], u[0].viewsData.views[0], !1, !1), a !== !0 && a !== !1 || (b.useScrollbar = a), ba(), Fa(!1, !1, !1)
    }, a.fn.viewScroller.setChangeWhenAnim = function(a) {
      a !== !0 && a !== !1 || (b.changeWhenAnim = a)
    }, a.fn.viewScroller.setLoopMainViews = function(a) {
      a !== !0 && a !== !1 || (b.loopMainViews = a)
    }, a.fn.viewScroller.setLoopSubViews = function(a) {
      a !== !0 && a !== !1 || (b.loopSubViews = a)
    }, a.fn.viewScroller.setFitToView = function(a) {
      a !== !0 && a !== !1 || (b.fitToView = a)
    }, a.fn.viewScroller.setTimeToFit = function(a) {
      b.timeToFit = parseInt(a, 10) || 1e3
    }, a.fn.viewScroller.setFixedWidth = function(a) {
      b.fixedWidth = parseInt(a, 10) || 0, ja(), fa(), Fa(!1, !0, !1)
    }, a.fn.viewScroller.setSpaceMainBag = function(a) {
      b.spaceMainBag = parseInt(a, 10) || 0, fa(), Fa(!1, !0, !1)
    }, a.fn.viewScroller.showMainView = function(a) {
      ma("next" === a ? q.NEXT : q.PREV)
    }, a.fn.viewScroller.showSubView = function(a, b) {
      "next" === b ? la(a, q.NEXT) : la(a, q.PREV)
    }, a.fn.viewScroller.showView = function(a) {
      W(a, !1)
    };
    var c = ".mainbag",
      d = ".subbag",
      e = ".mainview",
      f = ".subview",
      g = ".vs-anchor",
      h = ".vs-active",
      j = ".vs-subview-prev",
      k = ".vs-subview-next",
      l = ".vs-mainview-prev",
      m = ".vs-mainview-next",
      n = c + ">" + e,
      o = d + ">" + f,
      p = {
        MAINBAG: 0,
        SUBBAG: 1
      },
      q = {
        NEXT: 1,
        PREV: -1
      },
      r = 0,
      s = [],
      t = 0,
      u = [],
      v = !1,
      w = "",
      x = !1,
      y = a(window),
      z = a(document),
      A = y.height(),
      B = y.width(),
      C = !1,
      D = !1,
      E = Date.now(),
      F = 10,
      G = 50,
      H = !0,
      I = !0,
      K = new J,
      L = function() {
        var a = document.createElement("p").style,
          b = "transition" in a || "WebkitTransition" in a || "MozTransition" in a || "msTransition" in a || "OTransition" in a;
        return b
      },
      M = function() {
        Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
          for (var c = this.length, d = b || 0, e = c; d < e; d++)
            if (this[d] === a) return d;
          return -1
        })
      },
      N = function() {
        String.prototype.includes || (String.prototype.includes = function() {
          "use strict";
          return String.prototype.indexOf.apply(this, arguments) !== -1
        })
      },
      O = function() {
        return "undefined" != typeof window.orientation
      },
      P = function() {
        return Math.abs(A - y.height()) > 100 ? (A = y.height(), !0) : Math.abs(B - y.width()) > 100 && (B = y.width(), !0)
      },
      Q = function(a, b) {
        var c = "#" + b.attr("vs-anchor");
        return "#undefined" === c && (c = ""), a + c
      },
      R = function() {
        var b = [];
        return K.get(n).each(function(c) {
          b.push(Q(c, a(this)))
        }), b
      },
      S = function(b) {
        var c = [],
          d = K.get(n).slice(b, b + 1);
        d.find(K.get(o)).each(function(b) {
          c.push(Q(b, a(this)))
        });
        for (var e = 0; e < c.length;) e++;
        return c
      },
      T = function(a) {
        for (var b = u.length, c = 0; c < b; c++)
          for (var d = u[c].viewsData.views.length, e = 0; e < d; e++)
            if (u[c].viewsData.views[e].split("#")[1] === a) return c;
        return -1
      },
      U = function(b) {
        var c = [];
        return K.get("div[vs-anchor=" + b + "]").find(K.get(o)).each(function(b) {
          c.push(a(this).attr("vs-anchor"))
        }), c.length > 0 ? T(c[0]) : 0 === c.length && (K.get("div[vs-anchor=" + b + "]").parents(K.get(d)).each(function(b) {
          c.push(a(this).attr("class"))
        }), c.length > 0 && c[0].includes(d.replace(".", ""))) ? T(b) : -1
      },
      V = function() {
        var a = "",
          b = 0;
        return window.location.hash.indexOf("#") > -1 && (a = window.location.hash.replace("#", ""), b = U(a)), b
      },
      W = function(a, b) {
        x = b === !0, window.location.hash = a
      },
      X = function(a, b, c) {
        var d = new Wa;
        return d.setBagObj(a, b, c), d
      },
      Y = function(a) {
        for (var b = [], c = "", e = 0, f = 0, g = a.length; e < g;) b = S(e), c = a[e].split("#")[1], b.length > 0 && (u.push(X(d + "|" + f + "|" + c + "|" + e, b, p.SUBBAG)), f++), e++
      },
      Z = function() {
        var a = R();
        u.push(X(c, a, p.MAINBAG)), Y(a)
      },
      $ = function(a) {
        if (x === !1 && window.location.hash.indexOf("#") > -1) {
          var b = window.location.hash.replace("#", ""),
            c = _(b);
          "undefined" != typeof c && c.length > 0 && pa(u[c[0]], c[1], !1, !1)
        }
        x = !1
      },
      _ = function(a) {
        for (var b = [], c = u.length, d = 0; d < c; d++)
          for (var e = u[d].viewsData.views, f = u[d].viewsData.bagType, g = e.length, h = 0; h < g; h++)
            if (e[h].indexOf("#") > -1 && e[h].split("#")[1] === a) return b.push(d, e[h], f), b
      },
      aa = function(a, e) {
        var f = a.viewsData.views.indexOf(a.viewsData.activeView) + e;
        return (b.loopSubViews && "undefined" == typeof a.viewsData.views[f] && a.viewsData.container.includes(d) || b.loopMainViews && "undefined" == typeof a.viewsData.views[f] && a.viewsData.container.includes(c)) && (f = f < 0 ? a.viewsData.views.length - 1 : 0), f
      },
      ba = function() {
        b.useScrollbar ? (K.get("html").css("overflow-y", "scroll"), K.get("body").css("overflow-y", "")) : (K.get("body").css("overflow-y", "hidden"), K.get("html").css("overflow-y", "hidden"))
      },
      ca = function(a, b) {
        return b ? 1 : a
      },
      da = function(a) {
        a.viewsData.viewsPos.length = 0;
        for (var e = a.viewsData.views.length, f = 0; f < e; f++)
          if (a.viewsData.bagType === p.SUBBAG) {
            var g = K.get(c).width();
            g = 0 === b.fixedWidth ? y.width() - b.spaceMainBag : b.fixedWidth, a.viewsData.viewsPos.push(g * f)
          } else a.viewsData.viewsPos.push(y.height() * f)
      },
      ea = function(a) {
        for (var b = y.scrollTop(), c = 0, d = 0, e = 0, f = a.length, g = 0; g < f; g++) d = Math.abs(a[g] - b), d < c && (e = g), c = d;
        return e
      },
      fa = function() {
        var g = K.get(c).width();
        g = 0 === b.fixedWidth ? y.width() - b.spaceMainBag : b.fixedWidth, K.get(c).css("width", g + "px");
        var h = y.height();
        K.get(e).css("height", h + "px"), K.get(f).css("width", g + "px"), K.get(d).each(function(b) {
          a(this).css("width", g * a(this).find(f).length + "px")
        }), I && K.get(c).css("height", "auto")
      },
      ga = function() {
        K.get(d).each(function(b) {
          a(this).addClass(d.replace(".", "") + "-" + b)
        })
      },
      ha = function() {
        K.get(d).wrap('<div style="overflow: hidden; height: 100%; width: 100%;"></div>')
      },
      ia = function() {
        0 === b.fixedWidth ? K.get(c).css("width", K.get(c).width() - b.spaceMainBag + "px") : K.get(c).css("width", b.fixedWidth + "px")
      },
      ja = function() {
        b.fixedWidth > 0 && a(K.get(c)).css({
          position: "absolute"
        })
      },
      ka = function() {
        a(K.get(c)).find(K.get(h)).each(function(b) {
          0 === b && W(a(this).attr("vs-anchor"))
        })
      },
      la = function(a, c) {
        a > -1 && (b.changeWhenAnim || !b.changeWhenAnim && !C) && pa(u[a], "", !1, !1, c)
      },
      ma = function(a) {
        (b.changeWhenAnim || !b.changeWhenAnim && !C) && pa(u[0], "", !1, !1, a)
      },
      na = function(a, c, d, e, f) {
        if ("x" === e) {
          var g = ca(b.animSpeedMainView, d);
          a.css({
            "-webkit-transition": "all " + g + "ms " + b.animEffectSubViewCss3 + " 0ms",
            "-moz-transition": "all " + g + "ms " + b.animEffectSubViewCss3 + " 0ms",
            "-o-transition": "all " + g + "ms " + b.animEffectSubViewCss3 + " 0ms",
            transition: "all " + g + "ms " + b.animEffectSubViewCss3 + " 0ms",
            "-webkit-transform": "translate3d(" + c + "px,0,0)",
            "-moz-transform": "translate3d(" + c + "px,0,0)",
            "-o-transform": "translate3d(" + c + "px,0,0)",
            transform: "translate3d(" + c + "px,0,0)"
          })
        } else {
          var h = ca(b.animSpeedMainView, d);
          a.css({
            "-webkit-transition": "all " + h + "ms " + b.animEffectMainViewCss3 + " 0ms",
            "-moz-transition": "all " + h + "ms " + b.animEffectMainViewCss3 + " 0ms",
            "-o-transition": "all " + h + "ms " + b.animEffectMainViewCss3 + " 0ms",
            transition: "all " + h + "ms " + b.animEffectMainViewCss3 + " 0ms",
            "-webkit-transform": "translate3d(0," + c + "px,0)",
            "-moz-transform": "translate3d(0," + c + "px,0)",
            "-o-transform": "translate3d(0," + c + "px,0)",
            transform: "translate3d(0," + c + "px,0)"
          })
        }
        a.one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
          "function" == typeof f && f()
        })
      },
      oa = function(a, c, d, e, f) {
        "x" === e ? a.stop().animate({
          scrollLeft: c
        }, ca(b.animSpeedSubView, d), b.animEffectSubView, function() {
          "function" == typeof f && f()
        }) : a.stop().animate({
          scrollTop: c
        }, ca(b.animSpeedMainView, d), b.animEffectMainView, function() {
          "function" == typeof f && f()
        })
      },
      pa = function(a, d, e, f, g) {
        if ("undefined" != typeof g && (d = a.viewsData.views[aa(a, g)]), a.viewsData.views.length > 0 && "undefined" != typeof d) {
          var h = a.viewsData.views.indexOf(d),
            i = a.viewsData.viewsPos[h],
            j = a.viewsData.container,
            k = 0;
          if (D || v === !1 && ("undefined" == typeof e && f === !1 || a.viewsData.activeView !== d && e === !1)) {
            var l = !1;
            if ("function" == typeof b.beforeChange && (l = b.beforeChange()), t++, l) return !1
          }
          if (a.viewsData.container === c ? w = d.split("#")[1] : D || (e || w === a.viewsData.container.split("|")[2] || (v = !0, pa(u[0], a.viewsData.container.split("|")[3] + "#" + a.viewsData.container.split("|")[2], !1, !1)), w = a.viewsData.container.split("|")[2]), e || D || window.location.hash !== d.split("#" [1]) && W(d.split("#")[1], !0), a.viewsData.bagType === p.SUBBAG) {
            var m = j.split("|")[0],
              n = j.split("|")[1];
            j = K.get(m + "-" + n)
          } else j = K.get(j);
          var o = j;
          C = !0, a.viewsData.bagType === p.SUBBAG ? I ? na(o, i * -1, e, "x", function() {
            qa(f, a, d)
          }) : oa(o.parent(), i, e, "x", function() {
            qa(f, a, d)
          }) : (f || za(), (b.useScrollbar || f) && I && (o = navigator.userAgent.includes("Firefox") || navigator.userAgent.includes(".NET") || navigator.userAgent.includes("MSIE") || navigator.userAgent.includes("Windows Phone") ? K.get("html") : K.get("body")), b.useScrollbar || !I ? (wa(), oa(o, i, e, "y", function() {
            qa(f, a, d)
          })) : (k = K.get("body").scrollTop(), i -= k, na(o, i * -1, e, "y", function() {
            qa(f, a, d)
          })), b.useScrollbar || ya()), D || (a.viewsData.activeView = d, v = !1)
        }
      },
      qa = function(a, c, d) {
        if (t > 0 && ("function" == typeof b.afterChange && b.afterChange(), t -= 1), b.useScrollbar || a) {
          if (x = !1, Ea(), y.height() !== A && (Fa(!1, !1, !1), A = y.height()), u[0].viewsData.viewsPos.length > 1 && H && O() && y.height() !== Math.abs(u[0].viewsData.viewsPos[0] - u[0].viewsData.viewsPos[1])) {
            fa();
            for (var e = u.length, f = 0; f < e; f++) da(u[f]), pa(u[f], u[f].viewsData.activeView, !0)
          }
          Da(), va()
        } else;
        C = !1, D = !1
      },
      ra = function() {
        K.get(g).on("click", sa)
      },
      sa = function(c) {
        c.preventDefault();
        var d = a(this).attr("href").replace("#", ""),
          e = _(d);
        e && e.length > 0 && (b.changeWhenAnim || !b.changeWhenAnim && !C) && W(d)
      },
      ta = function() {
        y.on("hashchange", $)
      },
      ua = function() {
        y.off("hashchange", $)
      },
      va = function() {
        y.on("scroll", xa)
      },
      wa = function() {
        y.off("scroll", xa)
      },
      xa = function(a) {
        var c = ea(u[0].viewsData.viewsPos);
        clearTimeout(r), ua(), window.location.hash !== "#" + u[0].viewsData.views[c].split("#")[1] && (W(u[0].viewsData.views[c].split("#")[1], !1), u[0].viewsData.activeView = u[0].viewsData.views[c]), r = setTimeout(function() {
          ta()
        }, 10), Array.prototype.forEach.call(s, function(a) {
          clearTimeout(a)
        }), s.length = 0;
        var e = (u[0].viewsData.viewsPos.length - 1, y.scrollTop());
        s.push(setTimeout(function() {
          if (b.fitToView) {
            var a = !0;
            Array.prototype.forEach.call(u[0].viewsData.viewsPos, function(b) {
              b === e && (a = !1)
            }), a && (D = !0, pa(u[0], u[0].viewsData.activeView, !1, !1))
          }
        }, b.timeToFit))
      },
      ya = function() {
        y.on("mousewheel", Aa)
      },
      za = function() {
        y.off("mousewheel", Aa)
      },
      Aa = function(a) {
        var b = Date.now(),
          c = b - E;
        E = b, !a.ctrlKey && c > 50 && ma(a.deltaY < 0 ? q.NEXT : q.PREV)
      },
      Ba = function() {
        K.get(j).each(function(b) {
          a(this).on("click", function() {
            currentBagIndex = V(), currentBagIndex > -1 && la(currentBagIndex, q.PREV)
          })
        }), K.get(k).each(function(b) {
          a(this).on("click", function() {
            currentBagIndex = V(), currentBagIndex > -1 && la(currentBagIndex, q.NEXT)
          })
        }), K.get(l).each(function(b) {
          a(this).on("click", function() {
            ma(q.PREV)
          })
        }), K.get(m).each(function(b) {
          a(this).on("click", function() {
            ma(q.NEXT)
          })
        })
      },
      Ca = function() {
        var a = window;
        Oa(a)
      },
      Da = function() {
        y.on("resize", Fa)
      },
      Ea = function() {
        y.off("resize", Fa)
      },
      Fa = function(a, c, d) {
        if (!O() || c || O() && P()) {
          "function" == typeof b.beforeResize && "undefined" == typeof d && b.beforeResize(), fa();
          for (var e = u.length, f = 0; f < e; f++) da(u[f]), pa(u[f], u[f].viewsData.activeView, !0);
          "function" == typeof b.afterResize && "undefined" == typeof d && b.afterResize()
        }
      },
      Ga = function() {
        z.on("keydown", Ia)
      },
      Ia = function(a) {
        var c = 38,
          d = 40,
          e = 37,
          f = 39,
          g = 36,
          h = 35,
          i = 33,
          j = 34,
          k = 0,
          l = function(a) {
            return window.event ? a.keyCode : a.which ? a.which : void 0
          },
          m = l(a);
        if (k = V(), b.useKeyboard) switch (m) {
          case i:
          case c:
            b.useScrollbar || ma(q.PREV);
            break;
          case j:
          case d:
            b.useScrollbar || ma(q.NEXT);
            break;
          case f:
            k > -1 && la(k, q.NEXT);
            break;
          case e:
            k > -1 && la(k, q.PREV);
            break;
          case g:
            b.useScrollbar || W(u[0].viewsData.views[0].split("#")[1]);
            break;
          case h:
            b.useScrollbar || W(u[0].viewsData.views[u[0].viewsData.views.length - 1].split("#")[1])
        }
      },
      Ja = "createTouch" in document,
      Ka = [],
      La = 0,
      Ma = 0,
      Na = {
        x: null,
        y: null
      },
      Oa = function(a) {
        window.PointerEvent && a.addEventListener("pointermove", Sa, !1), Ja && (a.addEventListener("touchstart", Qa, !1), a.addEventListener("touchmove", Sa, !1), a.addEventListener("touchend", Ra, !1))
      },
      Pa = function(a) {
        if (Ka = a.touches, Ja) {
          Ka = a.touches;
          for (var b = Ka.length, c = 0; c < b; c++) {
            var d = Ka[c];
            Na.x = Ta(d), Na.y = Ua(d)
          }
        } else Na.x = Ta(a), Na.y = Ua(a);
        return Na.x + "|" + Na.y
      },
      Qa = function(a) {
        var b = Pa(a).split("|");
        La = parseInt(b[0], 10), Ma = parseInt(b[1], 10)
      },
      Ra = function(a) {
        var c = Pa(a).split("|"),
          d = 0,
          e = F,
          f = G,
          g = parseInt(c[0], 10),
          h = parseInt(c[1], 10),
          i = parseInt(La + e, 10),
          j = parseInt(La - e, 10),
          k = parseInt(Ma + f, 10),
          l = parseInt(Ma - f, 10);
        Math.abs(g - La) < Math.abs(h - Ma) ? h > k ? b.useScrollbar || ma(q.PREV) : h < l && (b.useScrollbar || ma(q.NEXT)) : (d = V(), d > -1 && (g > i ? la(d, q.PREV) : g < j && la(d, q.NEXT)))
      },
      Sa = function(a) {
        if (b.useScrollbar || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), Ja) {
          Ka = a.touches;
          for (var c = Ka.length, d = 0; d < c; d++) {
            var e = Ka[d];
            Na.x = Ta(e), Na.y = Ua(e)
          }
        } else Na.x = Ta(a), Na.y = Ua(a)
      },
      Ta = function(a) {
        var b = a.clientX;
        return b
      },
      Ua = function(a) {
        var b = a.clientY;
        return b
      },
      Va = function() {
        M(), N(), ia(), L() || (I = !1), ga(), ha(), fa(), ba(), Z();
        for (var a = u.length, c = 0; c < a; c++) da(u[c]);
        Fa(!1, !1, !1), b.useScrollbar || ya(), ka(), $(), ra(), ta(), va(), Da(), Ca(), Ba(), b.useKeyboard && Ga(), ja()
      },
      Wa = function() {
        var a = {
            activeView: "",
            container: "",
            bagType: p.MAINBAG,
            views: [],
            viewsPos: []
          },
          b = function(b, c, d) {
            a.container = b, a.views = c, a.bagType = d, a.activeView = a.views[0]
          };
        return {
          setBagObj: b,
          viewsData: a
        }
      };
    Va()
  }
}(jQuery);
*/
/*!
 * jquery.inputmask.bundle.js
 * https://github.com/RobinHerbots/jquery.inputmask
 * Copyright (c) 2010 - 2016 Robin Herbots
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 3.3.4-92
 */
! function($) {
  function Inputmask(alias, options) {
    return this instanceof Inputmask ? ($.isPlainObject(alias) ? options = alias : (options = options || {},
        options.alias = alias), this.el = void 0, this.opts = $.extend(!0, {}, this.defaults, options),
      this.noMasksCache = options && void 0 !== options.definitions, this.userOptions = options || {},
      this.events = {}, this.dataAttribute = "data-inputmask", void resolveAlias(this.opts.alias, options, this.opts)) : new Inputmask(alias, options);
  }

  function isInputEventSupported(eventName) {
    var el = document.createElement("input"),
      evName = "on" + eventName,
      isSupported = evName in el;
    return isSupported || (el.setAttribute(evName, "return;"), isSupported = "function" == typeof el[evName]),
      el = null, isSupported;
  }

  function isElementTypeSupported(input, opts) {
    var elementType = input.getAttribute("type"),
      isSupported = "INPUT" === input.tagName && $.inArray(elementType, opts.supportsInputType) !== -1 || input.isContentEditable || "TEXTAREA" === input.tagName;
    if (!isSupported && "INPUT" === input.tagName) {
      var el = document.createElement("input");
      el.setAttribute("type", elementType), isSupported = "text" === el.type, el = null;
    }
    return isSupported;
  }

  function resolveAlias(aliasStr, options, opts) {
    var aliasDefinition = opts.aliases[aliasStr];
    return aliasDefinition ? (aliasDefinition.alias && resolveAlias(aliasDefinition.alias, void 0, opts),
      $.extend(!0, opts, aliasDefinition), $.extend(!0, opts, options), !0) : (null === opts.mask && (opts.mask = aliasStr), !1);
  }

  function importAttributeOptions(npt, opts, userOptions, dataAttribute) {
    function importOption(option, optionData) {
      optionData = void 0 !== optionData ? optionData : npt.getAttribute(dataAttribute + "-" + option),
        null !== optionData && ("string" == typeof optionData && (0 === option.indexOf("on") ? optionData = window[optionData] : "false" === optionData ? optionData = !1 : "true" === optionData && (optionData = !0)),
          userOptions[option] = optionData);
    }
    var option, dataoptions, optionData, p, attrOptions = npt.getAttribute(dataAttribute);
    if (attrOptions && "" !== attrOptions && (attrOptions = attrOptions.replace(new RegExp("'", "g"), '"'),
        dataoptions = JSON.parse("{" + attrOptions + "}")), dataoptions) {
      optionData = void 0;
      for (p in dataoptions)
        if ("alias" === p.toLowerCase()) {
          optionData = dataoptions[p];
          break;
        }
    }
    importOption("alias", optionData), userOptions.alias && resolveAlias(userOptions.alias, userOptions, opts);
    for (option in opts) {
      if (dataoptions) {
        optionData = void 0;
        for (p in dataoptions)
          if (p.toLowerCase() === option.toLowerCase()) {
            optionData = dataoptions[p];
            break;
          }
      }
      importOption(option, optionData);
    }
    return $.extend(!0, opts, userOptions), opts;
  }

  function generateMaskSet(opts, nocache) {
    function generateMask(mask, metadata, opts) {
      if (null !== mask && "" !== mask) {
        if (1 === mask.length && opts.greedy === !1 && 0 !== opts.repeat && (opts.placeholder = ""),
          opts.repeat > 0 || "*" === opts.repeat || "+" === opts.repeat) {
          var repeatStart = "*" === opts.repeat ? 0 : "+" === opts.repeat ? 1 : opts.repeat;
          mask = opts.groupmarker.start + mask + opts.groupmarker.end + opts.quantifiermarker.start + repeatStart + "," + opts.repeat + opts.quantifiermarker.end;
        }
        var masksetDefinition;
        return void 0 === Inputmask.prototype.masksCache[mask] || nocache === !0 ? (masksetDefinition = {
            mask: mask,
            maskToken: Inputmask.analyseMask(mask, opts),
            validPositions: {},
            _buffer: void 0,
            buffer: void 0,
            tests: {},
            metadata: metadata,
            maskLength: void 0
          }, nocache !== !0 && (Inputmask.prototype.masksCache[opts.numericInput ? mask.split("").reverse().join("") : mask] = masksetDefinition,
            masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[opts.numericInput ? mask.split("").reverse().join("") : mask]))) : masksetDefinition = $.extend(!0, {}, Inputmask.prototype.masksCache[opts.numericInput ? mask.split("").reverse().join("") : mask]),
          masksetDefinition;
      }
    }
    var ms;
    if ($.isFunction(opts.mask) && (opts.mask = opts.mask(opts)), $.isArray(opts.mask)) {
      if (opts.mask.length > 1) {
        opts.keepStatic = null === opts.keepStatic || opts.keepStatic;
        var altMask = opts.groupmarker.start;
        return $.each(opts.numericInput ? opts.mask.reverse() : opts.mask, function(ndx, msk) {
          altMask.length > 1 && (altMask += opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start),
            altMask += void 0 === msk.mask || $.isFunction(msk.mask) ? msk : msk.mask;
        }), altMask += opts.groupmarker.end, generateMask(altMask, opts.mask, opts);
      }
      opts.mask = opts.mask.pop();
    }
    return opts.mask && (ms = void 0 === opts.mask.mask || $.isFunction(opts.mask.mask) ? generateMask(opts.mask, opts.mask, opts) : generateMask(opts.mask.mask, opts.mask, opts)),
      ms;
  }

  function maskScope(actionObj, maskset, opts) {
    function getMaskTemplate(baseOnInput, minimalPos, includeInput) {
      minimalPos = minimalPos || 0;
      var ndxIntlzr, test, testPos, maskTemplate = [],
        pos = 0,
        lvp = getLastValidPosition();
      maxLength = void 0 !== el ? el.maxLength : void 0, maxLength === -1 && (maxLength = void 0);
      do baseOnInput === !0 && getMaskSet().validPositions[pos] ? (testPos = getMaskSet().validPositions[pos],
          test = testPos.match, ndxIntlzr = testPos.locator.slice(), maskTemplate.push(includeInput === !0 ? testPos.input : getPlaceholder(pos, test))) : (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1),
          test = testPos.match, ndxIntlzr = testPos.locator.slice(), (opts.jitMasking === !1 || pos < lvp || Number.isFinite(opts.jitMasking) && opts.jitMasking > pos) && maskTemplate.push(getPlaceholder(pos, test))),
        pos++; while ((void 0 === maxLength || pos < maxLength) && (null !== test.fn || "" !== test.def) || minimalPos > pos);
      return "" === maskTemplate[maskTemplate.length - 1] && maskTemplate.pop(), getMaskSet().maskLength = pos + 1,
        maskTemplate;
    }

    function getMaskSet() {
      return maskset;
    }

    function resetMaskSet(soft) {
      var maskset = getMaskSet();
      maskset.buffer = void 0, soft !== !0 && (maskset._buffer = void 0, maskset.validPositions = {},
        maskset.p = 0);
    }

    function getLastValidPosition(closestTo, strict, validPositions) {
      var before = -1,
        after = -1,
        valids = validPositions || getMaskSet().validPositions;
      void 0 === closestTo && (closestTo = -1);
      for (var posNdx in valids) {
        var psNdx = parseInt(posNdx);
        valids[psNdx] && (strict || null !== valids[psNdx].match.fn) && (psNdx <= closestTo && (before = psNdx),
          psNdx >= closestTo && (after = psNdx));
      }
      return before !== -1 && closestTo - before > 1 || after < closestTo ? before : after;
    }

    function stripValidPositions(start, end, nocheck, strict) {
      function IsEnclosedStatic(pos) {
        var posMatch = getMaskSet().validPositions[pos];
        if (void 0 !== posMatch && null === posMatch.match.fn) {
          var prevMatch = getMaskSet().validPositions[pos - 1],
            nextMatch = getMaskSet().validPositions[pos + 1];
          return void 0 !== prevMatch && void 0 !== nextMatch;
        }
        return !1;
      }
      var i, startPos = start,
        positionsClone = $.extend(!0, {}, getMaskSet().validPositions),
        needsValidation = !1;
      for (getMaskSet().p = start, i = end - 1; i >= startPos; i--) void 0 !== getMaskSet().validPositions[i] && (nocheck !== !0 && (!getMaskSet().validPositions[i].match.optionality && IsEnclosedStatic(i) || opts.canClearPosition(getMaskSet(), i, getLastValidPosition(), strict, opts) === !1) || delete getMaskSet().validPositions[i]);
      for (resetMaskSet(!0), i = startPos + 1; i <= getLastValidPosition();) {
        for (; void 0 !== getMaskSet().validPositions[startPos];) startPos++;
        var s = getMaskSet().validPositions[startPos];
        if (i < startPos && (i = startPos + 1), void 0 === getMaskSet().validPositions[i] && isMask(i) || void 0 !== s) i++;
        else {
          var t = getTestTemplate(i);
          needsValidation === !1 && positionsClone[startPos] && positionsClone[startPos].match.def === t.match.def ? (getMaskSet().validPositions[startPos] = $.extend(!0, {}, positionsClone[startPos]),
            getMaskSet().validPositions[startPos].input = t.input, delete getMaskSet().validPositions[i],
            i++) : positionCanMatchDefinition(startPos, t.match.def) ? isValid(startPos, t.input || getPlaceholder(i), !0) !== !1 && (delete getMaskSet().validPositions[i],
            i++, needsValidation = !0) : isMask(i) || (i++, startPos--), startPos++;
        }
      }
      resetMaskSet(!0);
    }

    function determineTestTemplate(tests, guessNextBest) {
      for (var testPos, testPositions = tests, lvp = getLastValidPosition(), lvTest = getMaskSet().validPositions[lvp] || getTests(0)[0], lvTestAltArr = void 0 !== lvTest.alternation ? lvTest.locator[lvTest.alternation].toString().split(",") : [], ndx = 0; ndx < testPositions.length && (testPos = testPositions[ndx], !(testPos.match && (opts.greedy && testPos.match.optionalQuantifier !== !0 || (testPos.match.optionality === !1 || testPos.match.newBlockMarker === !1) && testPos.match.optionalQuantifier !== !0) && (void 0 === lvTest.alternation || lvTest.alternation !== testPos.alternation || void 0 !== testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAltArr))) || guessNextBest === !0 && (null !== testPos.match.fn || /[0-9a-bA-Z]/.test(testPos.match.def))); ndx++);
      return testPos;
    }

    function getTestTemplate(pos, ndxIntlzr, tstPs) {
      return getMaskSet().validPositions[pos] || determineTestTemplate(getTests(pos, ndxIntlzr ? ndxIntlzr.slice() : ndxIntlzr, tstPs));
    }

    function getTest(pos) {
      return getMaskSet().validPositions[pos] ? getMaskSet().validPositions[pos] : getTests(pos)[0];
    }

    function positionCanMatchDefinition(pos, def) {
      for (var valid = !1, tests = getTests(pos), tndx = 0; tndx < tests.length; tndx++)
        if (tests[tndx].match && tests[tndx].match.def === def) {
          valid = !0;
          break;
        }
      return valid;
    }

    function selectBestMatch(pos, alternateNdx) {
      var bestMatch, indexPos;
      return (getMaskSet().tests[pos] || getMaskSet().validPositions[pos]) && $.each(getMaskSet().tests[pos] || [getMaskSet().validPositions[pos]], function(ndx, lmnt) {
        var ndxPos = lmnt.alternation ? lmnt.locator[lmnt.alternation].toString().indexOf(alternateNdx) : -1;
        (void 0 === indexPos || ndxPos < indexPos) && ndxPos !== -1 && (bestMatch = lmnt,
          indexPos = ndxPos);
      }), bestMatch;
    }

    function getTests(pos, ndxIntlzr, tstPs) {
      function resolveTestFromToken(maskToken, ndxInitializer, loopNdx, quantifierRecurse) {
        function handleMatch(match, loopNdx, quantifierRecurse) {
          function isFirstMatch(latestMatch, tokenGroup) {
            var firstMatch = 0 === $.inArray(latestMatch, tokenGroup.matches);
            return firstMatch || $.each(tokenGroup.matches, function(ndx, match) {
              if (match.isQuantifier === !0 && (firstMatch = isFirstMatch(latestMatch, tokenGroup.matches[ndx - 1]))) return !1;
            }), firstMatch;
          }

          function resolveNdxInitializer(pos, alternateNdx) {
            var bestMatch = selectBestMatch(pos, alternateNdx);
            return bestMatch ? bestMatch.locator.slice(bestMatch.alternation + 1) : void 0;
          }

          function staticCanMatchDefinition(source, target) {
            return null === source.match.fn && null !== target.match.fn && target.match.fn.test(source.match.def, getMaskSet(), pos, !1, opts, !1);
          }
          if (testPos > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + getMaskSet().mask;
          if (testPos === pos && void 0 === match.matches) return matches.push({
            match: match,
            locator: loopNdx.reverse(),
            cd: cacheDependency
          }), !0;
          if (void 0 !== match.matches) {
            if (match.isGroup && quantifierRecurse !== match) {
              if (match = handleMatch(maskToken.matches[$.inArray(match, maskToken.matches) + 1], loopNdx)) return !0;
            } else if (match.isOptional) {
              var optionalToken = match;
              if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) {
                if (latestMatch = matches[matches.length - 1].match, !isFirstMatch(latestMatch, optionalToken)) return !0;
                insertStop = !0, testPos = pos;
              }
            } else if (match.isAlternator) {
              var maltMatches, alternateToken = match,
                malternateMatches = [],
                currentMatches = matches.slice(),
                loopNdxCnt = loopNdx.length,
                altIndex = ndxInitializer.length > 0 ? ndxInitializer.shift() : -1;
              if (altIndex === -1 || "string" == typeof altIndex) {
                var amndx, currentPos = testPos,
                  ndxInitializerClone = ndxInitializer.slice(),
                  altIndexArr = [];
                if ("string" == typeof altIndex) altIndexArr = altIndex.split(",");
                else
                  for (amndx = 0; amndx < alternateToken.matches.length; amndx++) altIndexArr.push(amndx);
                for (var ndx = 0; ndx < altIndexArr.length; ndx++) {
                  if (amndx = parseInt(altIndexArr[ndx]), matches = [], ndxInitializer = resolveNdxInitializer(testPos, amndx) || ndxInitializerClone.slice(),
                    match = handleMatch(alternateToken.matches[amndx] || maskToken.matches[amndx], [amndx].concat(loopNdx), quantifierRecurse) || match,
                    match !== !0 && void 0 !== match && altIndexArr[altIndexArr.length - 1] < alternateToken.matches.length) {
                    var ntndx = $.inArray(match, maskToken.matches) + 1;
                    maskToken.matches.length > ntndx && (match = handleMatch(maskToken.matches[ntndx], [ntndx].concat(loopNdx.slice(1, loopNdx.length)), quantifierRecurse),
                      match && (altIndexArr.push(ntndx.toString()), $.each(matches, function(ndx, lmnt) {
                        lmnt.alternation = loopNdx.length - 1;
                      })));
                  }
                  maltMatches = matches.slice(), testPos = currentPos, matches = [];
                  for (var ndx1 = 0; ndx1 < maltMatches.length; ndx1++) {
                    var altMatch = maltMatches[ndx1],
                      hasMatch = !1;
                    altMatch.alternation = altMatch.alternation || loopNdxCnt;
                    for (var ndx2 = 0; ndx2 < malternateMatches.length; ndx2++) {
                      var altMatch2 = malternateMatches[ndx2];
                      if (("string" != typeof altIndex || $.inArray(altMatch.locator[altMatch.alternation].toString(), altIndexArr) !== -1) && (altMatch.match.def === altMatch2.match.def || staticCanMatchDefinition(altMatch, altMatch2))) {
                        hasMatch = altMatch.match.nativeDef === altMatch2.match.nativeDef, altMatch2.locator[altMatch.alternation].toString().indexOf(altMatch.locator[altMatch.alternation]) === -1 && (altMatch2.locator[altMatch.alternation] = altMatch2.locator[altMatch.alternation] + "," + altMatch.locator[altMatch.alternation],
                          altMatch2.alternation = altMatch.alternation, null == altMatch.match.fn && (altMatch2.na = altMatch2.na || altMatch.locator[altMatch.alternation].toString(),
                            altMatch2.na.indexOf(altMatch.locator[altMatch.alternation]) === -1 && (altMatch2.na = altMatch2.na + "," + altMatch.locator[altMatch.alternation])));
                        break;
                      }
                    }
                    hasMatch || malternateMatches.push(altMatch);
                  }
                }
                "string" == typeof altIndex && (malternateMatches = $.map(malternateMatches, function(lmnt, ndx) {
                    if (isFinite(ndx)) {
                      var mamatch, alternation = lmnt.alternation,
                        altLocArr = lmnt.locator[alternation].toString().split(",");
                      lmnt.locator[alternation] = void 0, lmnt.alternation = void 0;
                      for (var alndx = 0; alndx < altLocArr.length; alndx++) mamatch = $.inArray(altLocArr[alndx], altIndexArr) !== -1,
                        mamatch && (void 0 !== lmnt.locator[alternation] ? (lmnt.locator[alternation] += ",",
                            lmnt.locator[alternation] += altLocArr[alndx]) : lmnt.locator[alternation] = parseInt(altLocArr[alndx]),
                          lmnt.alternation = alternation);
                      if (void 0 !== lmnt.locator[alternation]) return lmnt;
                    }
                  })), matches = currentMatches.concat(malternateMatches), testPos = pos, insertStop = matches.length > 0,
                  ndxInitializer = ndxInitializerClone.slice();
              } else match = handleMatch(alternateToken.matches[altIndex] || maskToken.matches[altIndex], [altIndex].concat(loopNdx), quantifierRecurse);
              if (match) return !0;
            } else if (match.isQuantifier && quantifierRecurse !== maskToken.matches[$.inArray(match, maskToken.matches) - 1])
              for (var qt = match, qndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; qndx < (isNaN(qt.quantifier.max) ? qndx + 1 : qt.quantifier.max) && testPos <= pos; qndx++) {
                var tokenGroup = maskToken.matches[$.inArray(qt, maskToken.matches) - 1];
                if (match = handleMatch(tokenGroup, [qndx].concat(loopNdx), tokenGroup)) {
                  if (latestMatch = matches[matches.length - 1].match, latestMatch.optionalQuantifier = qndx > qt.quantifier.min - 1,
                    isFirstMatch(latestMatch, tokenGroup)) {
                    if (qndx > qt.quantifier.min - 1) {
                      insertStop = !0, testPos = pos;
                      break;
                    }
                    return !0;
                  }
                  return !0;
                }
              } else if (match = resolveTestFromToken(match, ndxInitializer, loopNdx, quantifierRecurse)) return !0;
          } else testPos++;
        }
        for (var tndx = ndxInitializer.length > 0 ? ndxInitializer.shift() : 0; tndx < maskToken.matches.length; tndx++)
          if (maskToken.matches[tndx].isQuantifier !== !0) {
            var match = handleMatch(maskToken.matches[tndx], [tndx].concat(loopNdx), quantifierRecurse);
            if (match && testPos === pos) return match;
            if (testPos > pos) break;
          }
      }

      function mergeLocators(tests) {
        var locator = [];
        return $.isArray(tests) || (tests = [tests]), tests.length > 0 && (void 0 === tests[0].alternation ? (locator = determineTestTemplate(tests.slice()).locator.slice(),
          0 === locator.length && (locator = tests[0].locator.slice())) : $.each(tests, function(ndx, tst) {
          if ("" !== tst.def)
            if (0 === locator.length) locator = tst.locator.slice();
            else
              for (var i = 0; i < locator.length; i++) tst.locator[i] && locator[i].toString().indexOf(tst.locator[i]) === -1 && (locator[i] += "," + tst.locator[i]);
        })), locator;
      }

      function filterTests(tests) {
        return opts.keepStatic && pos > 0 && tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0) && tests[0].match.optionality !== !0 && tests[0].match.optionalQuantifier !== !0 && null === tests[0].match.fn && !/[0-9a-bA-Z]/.test(tests[0].match.def) ? [determineTestTemplate(tests)] : tests;
      }
      var latestMatch, maskTokens = getMaskSet().maskToken,
        testPos = ndxIntlzr ? tstPs : 0,
        ndxInitializer = ndxIntlzr ? ndxIntlzr.slice() : [0],
        matches = [],
        insertStop = !1,
        cacheDependency = ndxIntlzr ? ndxIntlzr.join("") : "";
      if (pos > -1) {
        if (void 0 === ndxIntlzr) {
          for (var test, previousPos = pos - 1; void 0 === (test = getMaskSet().validPositions[previousPos] || getMaskSet().tests[previousPos]) && previousPos > -1;) previousPos--;
          void 0 !== test && previousPos > -1 && (ndxInitializer = mergeLocators(test), cacheDependency = ndxInitializer.join(""),
            testPos = previousPos);
        }
        if (getMaskSet().tests[pos] && getMaskSet().tests[pos][0].cd === cacheDependency) return filterTests(getMaskSet().tests[pos]);
        for (var mtndx = ndxInitializer.shift(); mtndx < maskTokens.length; mtndx++) {
          var match = resolveTestFromToken(maskTokens[mtndx], ndxInitializer, [mtndx]);
          if (match && testPos === pos || testPos > pos) break;
        }
      }
      return (0 === matches.length || insertStop) && matches.push({
        match: {
          fn: null,
          cardinality: 0,
          optionality: !0,
          casing: null,
          def: "",
          placeholder: ""
        },
        locator: [],
        cd: cacheDependency
      }), void 0 !== ndxIntlzr && getMaskSet().tests[pos] ? filterTests($.extend(!0, [], matches)) : (getMaskSet().tests[pos] = $.extend(!0, [], matches),
        filterTests(getMaskSet().tests[pos]));
    }

    function getBufferTemplate() {
      return void 0 === getMaskSet()._buffer && (getMaskSet()._buffer = getMaskTemplate(!1, 1),
        void 0 === getMaskSet().buffer && getMaskSet()._buffer.slice()), getMaskSet()._buffer;
    }

    function getBuffer(noCache) {
      return void 0 !== getMaskSet().buffer && noCache !== !0 || (getMaskSet().buffer = getMaskTemplate(!0, getLastValidPosition(), !0)),
        getMaskSet().buffer;
    }

    function refreshFromBuffer(start, end, buffer) {
      var i;
      if (start === !0) resetMaskSet(), start = 0, end = buffer.length;
      else
        for (i = start; i < end; i++) delete getMaskSet().validPositions[i];
      for (i = start; i < end; i++) resetMaskSet(!0), buffer[i] !== opts.skipOptionalPartCharacter && isValid(i, buffer[i], !0, !0);
    }

    function casing(elem, test, pos) {
      switch (opts.casing || test.casing) {
        case "upper":
          elem = elem.toUpperCase();
          break;

        case "lower":
          elem = elem.toLowerCase();
          break;

        case "title":
          var posBefore = getMaskSet().validPositions[pos - 1];
          elem = 0 === pos || posBefore && posBefore.input === String.fromCharCode(Inputmask.keyCode.SPACE) ? elem.toUpperCase() : elem.toLowerCase();
      }
      return elem;
    }

    function checkAlternationMatch(altArr1, altArr2) {
      for (var altArrC = opts.greedy ? altArr2 : altArr2.slice(0, 1), isMatch = !1, alndx = 0; alndx < altArr1.length; alndx++)
        if ($.inArray(altArr1[alndx], altArrC) !== -1) {
          isMatch = !0;
          break;
        }
      return isMatch;
    }

    function isValid(pos, c, strict, fromSetValid, fromAlternate) {
      function isSelection(posObj) {
        var selection = isRTL ? posObj.begin - posObj.end > 1 || posObj.begin - posObj.end === 1 && opts.insertMode : posObj.end - posObj.begin > 1 || posObj.end - posObj.begin === 1 && opts.insertMode;
        return selection && 0 === posObj.begin && posObj.end === getMaskSet().maskLength ? "full" : selection;
      }

      function _isValid(position, c, strict) {
        var rslt = !1;
        return $.each(getTests(position), function(ndx, tst) {
          for (var test = tst.match, loopend = c ? 1 : 0, chrs = "", i = test.cardinality; i > loopend; i--) chrs += getBufferElement(position - (i - 1));
          if (c && (chrs += c), getBuffer(!0), rslt = null != test.fn ? test.fn.test(chrs, getMaskSet(), position, strict, opts, isSelection(pos)) : (c === test.def || c === opts.skipOptionalPartCharacter) && "" !== test.def && {
              c: test.placeholder || test.def,
              pos: position
            }, rslt !== !1) {
            var elem = void 0 !== rslt.c ? rslt.c : c;
            elem = elem === opts.skipOptionalPartCharacter && null === test.fn ? test.placeholder || test.def : elem;
            var validatedPos = position,
              possibleModifiedBuffer = getBuffer();
            if (void 0 !== rslt.remove && ($.isArray(rslt.remove) || (rslt.remove = [rslt.remove]),
                $.each(rslt.remove.sort(function(a, b) {
                  return b - a;
                }), function(ndx, lmnt) {
                  stripValidPositions(lmnt, lmnt + 1, !0);
                })), void 0 !== rslt.insert && ($.isArray(rslt.insert) || (rslt.insert = [rslt.insert]),
                $.each(rslt.insert.sort(function(a, b) {
                  return a - b;
                }), function(ndx, lmnt) {
                  isValid(lmnt.pos, lmnt.c, !0, fromSetValid);
                })), rslt.refreshFromBuffer) {
              var refresh = rslt.refreshFromBuffer;
              if (strict = !0, refreshFromBuffer(refresh === !0 ? refresh : refresh.start, refresh.end, possibleModifiedBuffer),
                void 0 === rslt.pos && void 0 === rslt.c) return rslt.pos = getLastValidPosition(), !1;
              if (validatedPos = void 0 !== rslt.pos ? rslt.pos : position, validatedPos !== position) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0, fromSetValid)), !1;
            } else if (rslt !== !0 && void 0 !== rslt.pos && rslt.pos !== position && (validatedPos = rslt.pos,
                refreshFromBuffer(position, validatedPos, getBuffer().slice()), validatedPos !== position)) return rslt = $.extend(rslt, isValid(validatedPos, elem, !0)), !1;
            return (rslt === !0 || void 0 !== rslt.pos || void 0 !== rslt.c) && (ndx > 0 && resetMaskSet(!0),
              setValidPosition(validatedPos, $.extend({}, tst, {
                input: casing(elem, test, validatedPos)
              }), fromSetValid, isSelection(pos)) || (rslt = !1), !1);
          }
        }), rslt;
      }

      function alternate(pos, c, strict) {
        var lastAlt, alternation, altPos, prevAltPos, i, validPos, altNdxs, decisionPos, validPsClone = $.extend(!0, {}, getMaskSet().validPositions),
          isValidRslt = !1,
          lAltPos = getLastValidPosition();
        for (prevAltPos = getMaskSet().validPositions[lAltPos]; lAltPos >= 0; lAltPos--)
          if (altPos = getMaskSet().validPositions[lAltPos],
            altPos && void 0 !== altPos.alternation) {
            if (lastAlt = lAltPos, alternation = getMaskSet().validPositions[lastAlt].alternation,
              prevAltPos.locator[altPos.alternation] !== altPos.locator[altPos.alternation]) break;
            prevAltPos = altPos;
          }
        if (void 0 !== alternation) {
          decisionPos = parseInt(lastAlt);
          var decisionTaker = void 0 !== prevAltPos.locator[prevAltPos.alternation || alternation] ? prevAltPos.locator[prevAltPos.alternation || alternation] : altNdxs[0];
          decisionTaker.length > 0 && (decisionTaker = decisionTaker.split(",")[0]);
          var possibilityPos = getMaskSet().validPositions[decisionPos],
            prevPos = getMaskSet().validPositions[decisionPos - 1];
          $.each(getTests(decisionPos, prevPos ? prevPos.locator : void 0, decisionPos - 1), function(ndx, test) {
            altNdxs = test.locator[alternation] ? test.locator[alternation].toString().split(",") : [];
            for (var mndx = 0; mndx < altNdxs.length; mndx++) {
              var validInputs = [],
                staticInputsBeforePos = 0,
                staticInputsBeforePosAlternate = 0,
                verifyValidInput = !1;
              if (decisionTaker < altNdxs[mndx] && (void 0 === test.na || $.inArray(altNdxs[mndx], test.na.split(",")) === -1)) {
                getMaskSet().validPositions[decisionPos] = $.extend(!0, {}, test);
                var possibilities = getMaskSet().validPositions[decisionPos].locator;
                for (getMaskSet().validPositions[decisionPos].locator[alternation] = parseInt(altNdxs[mndx]),
                  null == test.match.fn ? (possibilityPos.input !== test.match.def && (verifyValidInput = !0,
                      possibilityPos.generatedInput !== !0 && validInputs.push(possibilityPos.input)),
                    staticInputsBeforePosAlternate++, getMaskSet().validPositions[decisionPos].generatedInput = !/[0-9a-bA-Z]/.test(test.match.def),
                    getMaskSet().validPositions[decisionPos].input = test.match.def) : getMaskSet().validPositions[decisionPos].input = possibilityPos.input,
                  i = decisionPos + 1; i < getLastValidPosition(void 0, !0) + 1; i++) validPos = getMaskSet().validPositions[i],
                  validPos && validPos.generatedInput !== !0 && /[0-9a-bA-Z]/.test(validPos.input) ? validInputs.push(validPos.input) : i < pos && staticInputsBeforePos++,
                  delete getMaskSet().validPositions[i];
                for (verifyValidInput && validInputs[0] === test.match.def && validInputs.shift(),
                  resetMaskSet(!0), isValidRslt = !0; validInputs.length > 0;) {
                  var input = validInputs.shift();
                  if (input !== opts.skipOptionalPartCharacter && !(isValidRslt = isValid(getLastValidPosition(void 0, !0) + 1, input, !1, fromSetValid, !0))) break;
                }
                if (isValidRslt) {
                  getMaskSet().validPositions[decisionPos].locator = possibilities;
                  var targetLvp = getLastValidPosition(pos) + 1;
                  for (i = decisionPos + 1; i < getLastValidPosition() + 1; i++) validPos = getMaskSet().validPositions[i], (void 0 === validPos || null == validPos.match.fn) && i < pos + (staticInputsBeforePosAlternate - staticInputsBeforePos) && staticInputsBeforePosAlternate++;
                  pos += staticInputsBeforePosAlternate - staticInputsBeforePos, isValidRslt = isValid(pos > targetLvp ? targetLvp : pos, c, strict, fromSetValid, !0);
                }
                if (isValidRslt) return !1;
                resetMaskSet(), getMaskSet().validPositions = $.extend(!0, {}, validPsClone);
              }
            }
          });
        }
        return isValidRslt;
      }

      function trackbackAlternations(originalPos, newPos) {
        var vp = getMaskSet().validPositions[newPos];
        if (vp)
          for (var targetLocator = vp.locator, tll = targetLocator.length, ps = originalPos; ps < newPos; ps++)
            if (void 0 === getMaskSet().validPositions[ps] && !isMask(ps, !0)) {
              var tests = getTests(ps),
                bestMatch = tests[0],
                equality = -1;
              $.each(tests, function(ndx, tst) {
                for (var i = 0; i < tll && (void 0 !== tst.locator[i] && checkAlternationMatch(tst.locator[i].toString().split(","), targetLocator[i].toString().split(","))); i++) equality < i && (equality = i,
                  bestMatch = tst);
              }), setValidPosition(ps, $.extend({}, bestMatch, {
                input: bestMatch.match.placeholder || bestMatch.match.def
              }), !0);
            }
      }

      function setValidPosition(pos, validTest, fromSetValid, isSelection) {
        if (isSelection || opts.insertMode && void 0 !== getMaskSet().validPositions[pos] && void 0 === fromSetValid) {
          var i, positionsClone = $.extend(!0, {}, getMaskSet().validPositions),
            lvp = getLastValidPosition(void 0, !0);
          for (i = pos; i <= lvp; i++) delete getMaskSet().validPositions[i];
          getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);
          var j, valid = !0,
            vps = getMaskSet().validPositions,
            needsValidation = !1,
            initialLength = getMaskSet().maskLength;
          for (i = j = pos; i <= lvp; i++) {
            var t = positionsClone[i];
            if (void 0 !== t)
              for (var posMatch = j; posMatch < getMaskSet().maskLength && (null == t.match.fn && vps[i] && (vps[i].match.optionalQuantifier === !0 || vps[i].match.optionality === !0) || null != t.match.fn);) {
                if (posMatch++, needsValidation === !1 && positionsClone[posMatch] && positionsClone[posMatch].match.def === t.match.def) getMaskSet().validPositions[posMatch] = $.extend(!0, {}, positionsClone[posMatch]),
                  getMaskSet().validPositions[posMatch].input = t.input, fillMissingNonMask(posMatch),
                  j = posMatch, valid = !0;
                else if (positionCanMatchDefinition(posMatch, t.match.def)) {
                  var result = isValid(posMatch, t.input, !0, !0);
                  valid = result !== !1, j = result.caret || result.insert ? getLastValidPosition() : posMatch,
                    needsValidation = !0;
                } else valid = t.generatedInput === !0;
                if (getMaskSet().maskLength < initialLength && (getMaskSet().maskLength = initialLength),
                  valid) break;
              }
            if (!valid) break;
          }
          if (!valid) return getMaskSet().validPositions = $.extend(!0, {}, positionsClone),
            resetMaskSet(!0), !1;
        } else getMaskSet().validPositions[pos] = $.extend(!0, {}, validTest);
        return resetMaskSet(!0), !0;
      }

      function fillMissingNonMask(maskPos) {
        for (var pndx = maskPos - 1; pndx > -1 && !getMaskSet().validPositions[pndx]; pndx--);
        var testTemplate, testsFromPos;
        for (pndx++; pndx < maskPos; pndx++) void 0 === getMaskSet().validPositions[pndx] && (opts.jitMasking === !1 || opts.jitMasking > pndx) && (testsFromPos = getTests(pndx, getTestTemplate(pndx - 1).locator, pndx - 1).slice(),
          "" === testsFromPos[testsFromPos.length - 1].match.def && testsFromPos.pop(), testTemplate = determineTestTemplate(testsFromPos),
          testTemplate && (testTemplate.match.def === opts.radixPointDefinitionSymbol || !isMask(pndx, !0) || $.inArray(opts.radixPoint, getBuffer()) < pndx && testTemplate.match.fn && testTemplate.match.fn.test(getPlaceholder(pndx), getMaskSet(), pndx, !1, opts)) && (result = _isValid(pndx, testTemplate.match.placeholder || (null == testTemplate.match.fn ? testTemplate.match.def : "" !== getPlaceholder(pndx) ? getPlaceholder(pndx) : getBuffer()[pndx]), !0),
            result !== !1 && (getMaskSet().validPositions[result.pos || pndx].generatedInput = !0)));
      }
      strict = strict === !0;
      var maskPos = pos;
      void 0 !== pos.begin && (maskPos = isRTL && !isSelection(pos) ? pos.end : pos.begin);
      var result = !1,
        positionsClone = $.extend(!0, {}, getMaskSet().validPositions);
      if (fillMissingNonMask(maskPos), isSelection(pos) && (handleRemove(void 0, Inputmask.keyCode.DELETE, pos),
          maskPos = getMaskSet().p), maskPos < getMaskSet().maskLength && (result = _isValid(maskPos, c, strict), (!strict || fromSetValid === !0) && result === !1)) {
        var currentPosValid = getMaskSet().validPositions[maskPos];
        if (!currentPosValid || null !== currentPosValid.match.fn || currentPosValid.match.def !== c && c !== opts.skipOptionalPartCharacter) {
          if ((opts.insertMode || void 0 === getMaskSet().validPositions[seekNext(maskPos)]) && !isMask(maskPos, !0)) {
            var testsFromPos = getTests(maskPos).slice();
            "" === testsFromPos[testsFromPos.length - 1].match.def && testsFromPos.pop();
            var staticChar = determineTestTemplate(testsFromPos, !0);
            staticChar && null === staticChar.match.fn && (staticChar = staticChar.match.placeholder || staticChar.match.def,
              _isValid(maskPos, staticChar, strict), getMaskSet().validPositions[maskPos].generatedInput = !0);
            for (var nPos = maskPos + 1, snPos = seekNext(maskPos); nPos <= snPos; nPos++)
              if (result = _isValid(nPos, c, strict),
                result !== !1) {
                trackbackAlternations(maskPos, void 0 !== result.pos ? result.pos : nPos), maskPos = nPos;
                break;
              }
          }
        } else result = {
          caret: seekNext(maskPos)
        };
      }
      return result === !1 && opts.keepStatic && !strict && fromAlternate !== !0 && (result = alternate(maskPos, c, strict)),
        result === !0 && (result = {
          pos: maskPos
        }), $.isFunction(opts.postValidation) && result !== !1 && !strict && fromSetValid !== !0 && (result = !!opts.postValidation(getBuffer(!0), result, opts) && result),
        void 0 === result.pos && (result.pos = maskPos), result === !1 && (resetMaskSet(!0),
          getMaskSet().validPositions = $.extend(!0, {}, positionsClone)), result;
    }

    function isMask(pos, strict) {
      var test;
      if (strict ? (test = getTestTemplate(pos).match, "" === test.def && (test = getTest(pos).match)) : test = getTest(pos).match,
        null != test.fn) return test.fn;
      if (strict !== !0 && pos > -1) {
        var tests = getTests(pos);
        return tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0);
      }
      return !1;
    }

    function seekNext(pos, newBlock) {
      var maskL = getMaskSet().maskLength;
      if (pos >= maskL) return maskL;
      for (var position = pos; ++position < maskL && (newBlock === !0 && (getTest(position).match.newBlockMarker !== !0 || !isMask(position)) || newBlock !== !0 && !isMask(position)););
      return position;
    }

    function seekPrevious(pos, newBlock) {
      var tests, position = pos;
      if (position <= 0) return 0;
      for (; --position > 0 && (newBlock === !0 && getTest(position).match.newBlockMarker !== !0 || newBlock !== !0 && !isMask(position) && (tests = getTests(position),
          tests.length < 2 || 2 === tests.length && "" === tests[1].match.def)););
      return position;
    }

    function getBufferElement(position) {
      return void 0 === getMaskSet().validPositions[position] ? getPlaceholder(position) : getMaskSet().validPositions[position].input;
    }

    function writeBuffer(input, buffer, caretPos, event, triggerInputEvent) {
      if (event && $.isFunction(opts.onBeforeWrite)) {
        var result = opts.onBeforeWrite(event, buffer, caretPos, opts);
        if (result) {
          if (result.refreshFromBuffer) {
            var refresh = result.refreshFromBuffer;
            refreshFromBuffer(refresh === !0 ? refresh : refresh.start, refresh.end, result.buffer || buffer),
              buffer = getBuffer(!0);
          }
          void 0 !== caretPos && (caretPos = void 0 !== result.caret ? result.caret : caretPos);
        }
      }
      input.inputmask._valueSet(buffer.join("")), void 0 === caretPos || void 0 !== event && "blur" === event.type ? renderColorMask(input, buffer, caretPos) : caret(input, caretPos),
        triggerInputEvent === !0 && (skipInputEvent = !0, $(input).trigger("input"));
    }

    function getPlaceholder(pos, test) {
      if (test = test || getTest(pos).match, void 0 !== test.placeholder) return test.placeholder;
      if (null === test.fn) {
        if (pos > -1 && void 0 === getMaskSet().validPositions[pos]) {
          var prevTest, tests = getTests(pos),
            staticAlternations = [];
          if (tests.length > 1 + ("" === tests[tests.length - 1].match.def ? 1 : 0))
            for (var i = 0; i < tests.length; i++)
              if (tests[i].match.optionality !== !0 && tests[i].match.optionalQuantifier !== !0 && (null === tests[i].match.fn || void 0 === prevTest || tests[i].match.fn.test(prevTest.match.def, getMaskSet(), pos, !0, opts) !== !1) && (staticAlternations.push(tests[i]),
                  null === tests[i].match.fn && (prevTest = tests[i]), staticAlternations.length > 1 && /[0-9a-bA-Z]/.test(staticAlternations[0].match.def))) return opts.placeholder.charAt(pos % opts.placeholder.length);
        }
        return test.def;
      }
      return opts.placeholder.charAt(pos % opts.placeholder.length);
    }

    function checkVal(input, writeOut, strict, nptvl, initiatingEvent, stickyCaret) {
      function isTemplateMatch() {
        var isMatch = !1,
          charCodeNdx = getBufferTemplate().slice(initialNdx, seekNext(initialNdx)).join("").indexOf(charCodes);
        if (charCodeNdx !== -1 && !isMask(initialNdx)) {
          isMatch = !0;
          for (var bufferTemplateArr = getBufferTemplate().slice(initialNdx, initialNdx + charCodeNdx), i = 0; i < bufferTemplateArr.length; i++)
            if (" " !== bufferTemplateArr[i]) {
              isMatch = !1;
              break;
            }
        }
        return isMatch;
      }
      var inputValue = nptvl.slice(),
        charCodes = "",
        initialNdx = 0,
        result = void 0;
      if (resetMaskSet(), getMaskSet().p = seekNext(-1), !strict)
        if (opts.autoUnmask !== !0) {
          var staticInput = getBufferTemplate().slice(0, seekNext(-1)).join(""),
            matches = inputValue.join("").match(new RegExp("^" + Inputmask.escapeRegex(staticInput), "g"));
          matches && matches.length > 0 && (inputValue.splice(0, matches.length * staticInput.length),
            initialNdx = seekNext(initialNdx));
        } else initialNdx = seekNext(initialNdx);
      if ($.each(inputValue, function(ndx, charCode) {
          if (void 0 !== charCode) {
            var keypress = new $.Event("keypress");
            keypress.which = charCode.charCodeAt(0), charCodes += charCode;
            var lvp = getLastValidPosition(void 0, !0),
              lvTest = getMaskSet().validPositions[lvp],
              nextTest = getTestTemplate(lvp + 1, lvTest ? lvTest.locator.slice() : void 0, lvp);
            if (!isTemplateMatch() || strict || opts.autoUnmask) {
              var pos = strict ? ndx : null == nextTest.match.fn && nextTest.match.optionality && lvp + 1 < getMaskSet().p ? lvp + 1 : getMaskSet().p;
              result = keypressEvent.call(input, keypress, !0, !1, strict, pos), initialNdx = pos + 1,
                charCodes = "";
            } else result = keypressEvent.call(input, keypress, !0, !1, !0, lvp + 1);
            if (!strict && $.isFunction(opts.onBeforeWrite) && (result = opts.onBeforeWrite(keypress, getBuffer(), result.forwardPosition, opts),
                result && result.refreshFromBuffer)) {
              var refresh = result.refreshFromBuffer;
              refreshFromBuffer(refresh === !0 ? refresh : refresh.start, refresh.end, result.buffer),
                resetMaskSet(!0), result.caret && (getMaskSet().p = result.caret);
            }
          }
        }), writeOut) {
        var caretPos = void 0,
          lvp = getLastValidPosition();
        document.activeElement === input && (initiatingEvent || result) && (caretPos = caret(input).begin,
            initiatingEvent && result === !1 && (caretPos = seekNext(getLastValidPosition(caretPos))),
            result && stickyCaret !== !0 && (caretPos < lvp + 1 || lvp === -1) && (caretPos = opts.numericInput && void 0 === result.caret ? seekPrevious(result.forwardPosition) : result.forwardPosition)),
          writeBuffer(input, getBuffer(), caretPos, initiatingEvent || new $.Event("checkval"));
      }
    }

    function unmaskedvalue(input) {
      if (input && void 0 === input.inputmask) return input.value;
      var umValue = [],
        vps = getMaskSet().validPositions;
      for (var pndx in vps) vps[pndx].match && null != vps[pndx].match.fn && umValue.push(vps[pndx].input);
      var unmaskedValue = 0 === umValue.length ? "" : (isRTL ? umValue.reverse() : umValue).join("");
      if ($.isFunction(opts.onUnMask)) {
        var bufferValue = (isRTL ? getBuffer().slice().reverse() : getBuffer()).join("");
        unmaskedValue = opts.onUnMask(bufferValue, unmaskedValue, opts) || unmaskedValue;
      }
      return unmaskedValue;
    }

    function caret(input, begin, end, notranslate) {
      function translatePosition(pos) {
        if (notranslate !== !0 && isRTL && "number" == typeof pos && (!opts.greedy || "" !== opts.placeholder)) {
          var bffrLght = getBuffer().join("").length;
          pos = bffrLght - pos;
        }
        return pos;
      }
      var range;
      if ("number" != typeof begin) return input.setSelectionRange ? (begin = input.selectionStart,
        end = input.selectionEnd) : window.getSelection ? (range = window.getSelection().getRangeAt(0),
        range.commonAncestorContainer.parentNode !== input && range.commonAncestorContainer !== input || (begin = range.startOffset,
          end = range.endOffset)) : document.selection && document.selection.createRange && (range = document.selection.createRange(),
        begin = 0 - range.duplicate().moveStart("character", -input.inputmask._valueGet().length),
        end = begin + range.text.length), {
        begin: translatePosition(begin),
        end: translatePosition(end)
      };
      begin = translatePosition(begin), end = translatePosition(end), end = "number" == typeof end ? end : begin;
      var scrollCalc = parseInt(((input.ownerDocument.defaultView || window).getComputedStyle ? (input.ownerDocument.defaultView || window).getComputedStyle(input, null) : input.currentStyle).fontSize) * end;
      if (input.scrollLeft = scrollCalc > input.scrollWidth ? scrollCalc : 0, mobile || opts.insertMode !== !1 || begin !== end || end++,
        input.setSelectionRange) input.selectionStart = begin, input.selectionEnd = end;
      else if (window.getSelection) {
        if (range = document.createRange(), void 0 === input.firstChild || null === input.firstChild) {
          var textNode = document.createTextNode("");
          input.appendChild(textNode);
        }
        range.setStart(input.firstChild, begin < input.inputmask._valueGet().length ? begin : input.inputmask._valueGet().length),
          range.setEnd(input.firstChild, end < input.inputmask._valueGet().length ? end : input.inputmask._valueGet().length),
          range.collapse(!0);
        var sel = window.getSelection();
        sel.removeAllRanges(), sel.addRange(range);
      } else input.createTextRange && (range = input.createTextRange(), range.collapse(!0),
        range.moveEnd("character", end), range.moveStart("character", begin), range.select());
      renderColorMask(input, void 0, {
        begin: begin,
        end: end
      });
    }

    function determineLastRequiredPosition(returnDefinition) {
      var pos, testPos, buffer = getBuffer(),
        bl = buffer.length,
        lvp = getLastValidPosition(),
        positions = {},
        lvTest = getMaskSet().validPositions[lvp],
        ndxIntlzr = void 0 !== lvTest ? lvTest.locator.slice() : void 0;
      for (pos = lvp + 1; pos < buffer.length; pos++) testPos = getTestTemplate(pos, ndxIntlzr, pos - 1),
        ndxIntlzr = testPos.locator.slice(), positions[pos] = $.extend(!0, {}, testPos);
      var lvTestAlt = lvTest && void 0 !== lvTest.alternation ? lvTest.locator[lvTest.alternation] : void 0;
      for (pos = bl - 1; pos > lvp && (testPos = positions[pos], (testPos.match.optionality || testPos.match.optionalQuantifier || lvTestAlt && (lvTestAlt !== positions[pos].locator[lvTest.alternation] && null != testPos.match.fn || null === testPos.match.fn && testPos.locator[lvTest.alternation] && checkAlternationMatch(testPos.locator[lvTest.alternation].toString().split(","), lvTestAlt.toString().split(",")) && "" !== getTests(pos)[0].def)) && buffer[pos] === getPlaceholder(pos, testPos.match)); pos--) bl--;
      return returnDefinition ? {
        l: bl,
        def: positions[bl] ? positions[bl].match : void 0
      } : bl;
    }

    function clearOptionalTail(buffer) {
      for (var rl = determineLastRequiredPosition(), lmib = buffer.length - 1; lmib > rl && !isMask(lmib); lmib--);
      return buffer.splice(rl, lmib + 1 - rl), buffer;
    }

    function isComplete(buffer) {
      if ($.isFunction(opts.isComplete)) return opts.isComplete(buffer, opts);
      if ("*" !== opts.repeat) {
        var complete = !1,
          lrp = determineLastRequiredPosition(!0),
          aml = seekPrevious(lrp.l);
        if (void 0 === lrp.def || lrp.def.newBlockMarker || lrp.def.optionality || lrp.def.optionalQuantifier) {
          complete = !0;
          for (var i = 0; i <= aml; i++) {
            var test = getTestTemplate(i).match;
            if (null !== test.fn && void 0 === getMaskSet().validPositions[i] && test.optionality !== !0 && test.optionalQuantifier !== !0 || null === test.fn && buffer[i] !== getPlaceholder(i, test)) {
              complete = !1;
              break;
            }
          }
        }
        return complete;
      }
    }

    function patchValueProperty(npt) {
      function patchValhook(type) {
        if ($.valHooks && (void 0 === $.valHooks[type] || $.valHooks[type].inputmaskpatch !== !0)) {
          var valhookGet = $.valHooks[type] && $.valHooks[type].get ? $.valHooks[type].get : function(elem) {
              return elem.value;
            },
            valhookSet = $.valHooks[type] && $.valHooks[type].set ? $.valHooks[type].set : function(elem, value) {
              return elem.value = value, elem;
            };
          $.valHooks[type] = {
            get: function(elem) {
              if (elem.inputmask) {
                if (elem.inputmask.opts.autoUnmask) return elem.inputmask.unmaskedvalue();
                var result = valhookGet(elem);
                return getLastValidPosition(void 0, void 0, elem.inputmask.maskset.validPositions) !== -1 || opts.nullable !== !0 ? result : "";
              }
              return valhookGet(elem);
            },
            set: function(elem, value) {
              var result, $elem = $(elem);
              return result = valhookSet(elem, value), elem.inputmask && $elem.trigger("setvalue"),
                result;
            },
            inputmaskpatch: !0
          };
        }
      }

      function getter() {
        return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : getLastValidPosition() !== -1 || opts.nullable !== !0 ? document.activeElement === this && opts.clearMaskOnLostFocus ? (isRTL ? clearOptionalTail(getBuffer().slice()).reverse() : clearOptionalTail(getBuffer().slice())).join("") : valueGet.call(this) : "" : valueGet.call(this);
      }

      function setter(value) {
        valueSet.call(this, value), this.inputmask && $(this).trigger("setvalue");
      }

      function installNativeValueSetFallback(npt) {
        EventRuler.on(npt, "mouseenter", function(event) {
          var $input = $(this),
            input = this,
            value = input.inputmask._valueGet();
          value !== getBuffer().join("") && $input.trigger("setvalue");
        });
      }
      var valueGet, valueSet;
      if (!npt.inputmask.__valueGet) {
        if (opts.noValuePatching !== !0) {
          if (Object.getOwnPropertyDescriptor) {
            "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function(object) {
              return object.__proto__;
            } : function(object) {
              return object.constructor.prototype;
            });
            var valueProperty = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(npt), "value") : void 0;
            valueProperty && valueProperty.get && valueProperty.set ? (valueGet = valueProperty.get,
              valueSet = valueProperty.set, Object.defineProperty(npt, "value", {
                get: getter,
                set: setter,
                configurable: !0
              })) : "INPUT" !== npt.tagName && (valueGet = function() {
              return this.textContent;
            }, valueSet = function(value) {
              this.textContent = value;
            }, Object.defineProperty(npt, "value", {
              get: getter,
              set: setter,
              configurable: !0
            }));
          } else document.__lookupGetter__ && npt.__lookupGetter__("value") && (valueGet = npt.__lookupGetter__("value"),
            valueSet = npt.__lookupSetter__("value"), npt.__defineGetter__("value", getter),
            npt.__defineSetter__("value", setter));
          npt.inputmask.__valueGet = valueGet, npt.inputmask.__valueSet = valueSet;
        }
        npt.inputmask._valueGet = function(overruleRTL) {
          return isRTL && overruleRTL !== !0 ? valueGet.call(this.el).split("").reverse().join("") : valueGet.call(this.el);
        }, npt.inputmask._valueSet = function(value, overruleRTL) {
          valueSet.call(this.el, null === value || void 0 === value ? "" : overruleRTL !== !0 && isRTL ? value.split("").reverse().join("") : value);
        }, void 0 === valueGet && (valueGet = function() {
          return this.value;
        }, valueSet = function(value) {
          this.value = value;
        }, patchValhook(npt.type), installNativeValueSetFallback(npt));
      }
    }

    function handleRemove(input, k, pos, strict) {
      function generalize() {
        if (opts.keepStatic) {
          for (var validInputs = [], lastAlt = getLastValidPosition(-1, !0), positionsClone = $.extend(!0, {}, getMaskSet().validPositions), prevAltPos = getMaskSet().validPositions[lastAlt]; lastAlt >= 0; lastAlt--) {
            var altPos = getMaskSet().validPositions[lastAlt];
            if (altPos) {
              if (altPos.generatedInput !== !0 && /[0-9a-bA-Z]/.test(altPos.input) && validInputs.push(altPos.input),
                delete getMaskSet().validPositions[lastAlt], void 0 !== altPos.alternation && altPos.locator[altPos.alternation] !== prevAltPos.locator[altPos.alternation]) break;
              prevAltPos = altPos;
            }
          }
          if (lastAlt > -1)
            for (getMaskSet().p = seekNext(getLastValidPosition(-1, !0)); validInputs.length > 0;) {
              var keypress = new $.Event("keypress");
              keypress.which = validInputs.pop().charCodeAt(0), keypressEvent.call(input, keypress, !0, !1, !1, getMaskSet().p);
            } else getMaskSet().validPositions = $.extend(!0, {}, positionsClone);
        }
      }
      if ((opts.numericInput || isRTL) && (k === Inputmask.keyCode.BACKSPACE ? k = Inputmask.keyCode.DELETE : k === Inputmask.keyCode.DELETE && (k = Inputmask.keyCode.BACKSPACE),
          isRTL)) {
        var pend = pos.end;
        pos.end = pos.begin, pos.begin = pend;
      }
      k === Inputmask.keyCode.BACKSPACE && (pos.end - pos.begin < 1 || opts.insertMode === !1) ? (pos.begin = seekPrevious(pos.begin),
          void 0 === getMaskSet().validPositions[pos.begin] || getMaskSet().validPositions[pos.begin].input !== opts.groupSeparator && getMaskSet().validPositions[pos.begin].input !== opts.radixPoint || pos.begin--) : k === Inputmask.keyCode.DELETE && pos.begin === pos.end && (pos.end = isMask(pos.end, !0) ? pos.end + 1 : seekNext(pos.end) + 1,
          void 0 === getMaskSet().validPositions[pos.begin] || getMaskSet().validPositions[pos.begin].input !== opts.groupSeparator && getMaskSet().validPositions[pos.begin].input !== opts.radixPoint || pos.end++),
        stripValidPositions(pos.begin, pos.end, !1, strict), strict !== !0 && generalize();
      var lvp = getLastValidPosition(pos.begin, !0);
      lvp < pos.begin ? getMaskSet().p = seekNext(lvp) : strict !== !0 && (getMaskSet().p = pos.begin);
    }

    function keydownEvent(e) {
      var input = this,
        $input = $(input),
        k = e.keyCode,
        pos = caret(input);
      if (k === Inputmask.keyCode.BACKSPACE || k === Inputmask.keyCode.DELETE || iphone && k === Inputmask.keyCode.BACKSPACE_SAFARI || e.ctrlKey && k === Inputmask.keyCode.X && !isInputEventSupported("cut")) e.preventDefault(),
        handleRemove(input, k, pos), writeBuffer(input, getBuffer(!0), getMaskSet().p, e, input.inputmask._valueGet() !== getBuffer().join("")),
        input.inputmask._valueGet() === getBufferTemplate().join("") ? $input.trigger("cleared") : isComplete(getBuffer()) === !0 && $input.trigger("complete"),
        opts.showTooltip && (input.title = opts.tooltip || getMaskSet().mask);
      else if (k === Inputmask.keyCode.END || k === Inputmask.keyCode.PAGE_DOWN) {
        e.preventDefault();
        var caretPos = seekNext(getLastValidPosition());
        opts.insertMode || caretPos !== getMaskSet().maskLength || e.shiftKey || caretPos--,
          caret(input, e.shiftKey ? pos.begin : caretPos, caretPos, !0);
      } else k === Inputmask.keyCode.HOME && !e.shiftKey || k === Inputmask.keyCode.PAGE_UP ? (e.preventDefault(),
        caret(input, 0, e.shiftKey ? pos.begin : 0, !0)) : (opts.undoOnEscape && k === Inputmask.keyCode.ESCAPE || 90 === k && e.ctrlKey) && e.altKey !== !0 ? (checkVal(input, !0, !1, undoValue.split("")),
        $input.trigger("click")) : k !== Inputmask.keyCode.INSERT || e.shiftKey || e.ctrlKey ? opts.tabThrough === !0 && k === Inputmask.keyCode.TAB ? (e.shiftKey === !0 ? (null === getTest(pos.begin).match.fn && (pos.begin = seekNext(pos.begin)),
          pos.end = seekPrevious(pos.begin, !0), pos.begin = seekPrevious(pos.end, !0)) : (pos.begin = seekNext(pos.begin, !0),
          pos.end = seekNext(pos.begin, !0), pos.end < getMaskSet().maskLength && pos.end--),
        pos.begin < getMaskSet().maskLength && (e.preventDefault(), caret(input, pos.begin, pos.end))) : e.shiftKey || (opts.insertMode === !1 ? k === Inputmask.keyCode.RIGHT ? setTimeout(function() {
        var caretPos = caret(input);
        caret(input, caretPos.begin);
      }, 0) : k === Inputmask.keyCode.LEFT && setTimeout(function() {
        var caretPos = caret(input);
        caret(input, isRTL ? caretPos.begin + 1 : caretPos.begin - 1);
      }, 0) : setTimeout(function() {
        renderColorMask(input);
      }, 0)) : (opts.insertMode = !opts.insertMode, caret(input, opts.insertMode || pos.begin !== getMaskSet().maskLength ? pos.begin : pos.begin - 1));
      opts.onKeyDown.call(this, e, getBuffer(), caret(input).begin, opts), ignorable = $.inArray(k, opts.ignorables) !== -1;
    }

    function keypressEvent(e, checkval, writeOut, strict, ndx) {
      var input = this,
        $input = $(input),
        k = e.which || e.charCode || e.keyCode;
      if (!(checkval === !0 || e.ctrlKey && e.altKey) && (e.ctrlKey || e.metaKey || ignorable)) return k === Inputmask.keyCode.ENTER && undoValue !== getBuffer().join("") && (undoValue = getBuffer().join(""),
        setTimeout(function() {
          $input.trigger("change");
        }, 0)), !0;
      if (k) {
        46 === k && e.shiftKey === !1 && "," === opts.radixPoint && (k = 44);
        var forwardPosition, pos = checkval ? {
            begin: ndx,
            end: ndx
          } : caret(input),
          c = String.fromCharCode(k);
        getMaskSet().writeOutBuffer = !0;
        var valResult = isValid(pos, c, strict);
        if (valResult !== !1 && (resetMaskSet(!0), forwardPosition = void 0 !== valResult.caret ? valResult.caret : checkval ? valResult.pos + 1 : seekNext(valResult.pos),
            getMaskSet().p = forwardPosition), writeOut !== !1) {
          var self = this;
          if (setTimeout(function() {
              opts.onKeyValidation.call(self, k, valResult, opts);
            }, 0), getMaskSet().writeOutBuffer && valResult !== !1) {
            var buffer = getBuffer();
            writeBuffer(input, buffer, opts.numericInput && void 0 === valResult.caret ? seekPrevious(forwardPosition) : forwardPosition, e, checkval !== !0),
              checkval !== !0 && setTimeout(function() {
                isComplete(buffer) === !0 && $input.trigger("complete");
              }, 0);
          }
        }
        if (opts.showTooltip && (input.title = opts.tooltip || getMaskSet().mask), e.preventDefault(),
          checkval) return valResult.forwardPosition = forwardPosition, valResult;
      }
    }

    function pasteEvent(e) {
      var tempValue, input = this,
        ev = e.originalEvent || e,
        $input = $(input),
        inputValue = input.inputmask._valueGet(!0),
        caretPos = caret(input);
      isRTL && (tempValue = caretPos.end, caretPos.end = caretPos.begin, caretPos.begin = tempValue);
      var valueBeforeCaret = inputValue.substr(0, caretPos.begin),
        valueAfterCaret = inputValue.substr(caretPos.end, inputValue.length);
      if (valueBeforeCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(0, caretPos.begin).join("") && (valueBeforeCaret = ""),
        valueAfterCaret === (isRTL ? getBufferTemplate().reverse() : getBufferTemplate()).slice(caretPos.end).join("") && (valueAfterCaret = ""),
        isRTL && (tempValue = valueBeforeCaret, valueBeforeCaret = valueAfterCaret, valueAfterCaret = tempValue),
        window.clipboardData && window.clipboardData.getData) inputValue = valueBeforeCaret + window.clipboardData.getData("Text") + valueAfterCaret;
      else {
        if (!ev.clipboardData || !ev.clipboardData.getData) return !0;
        inputValue = valueBeforeCaret + ev.clipboardData.getData("text/plain") + valueAfterCaret;
      }
      var pasteValue = inputValue;
      if ($.isFunction(opts.onBeforePaste)) {
        if (pasteValue = opts.onBeforePaste(inputValue, opts), pasteValue === !1) return e.preventDefault();
        pasteValue || (pasteValue = inputValue);
      }
      return checkVal(input, !1, !1, isRTL ? pasteValue.split("").reverse() : pasteValue.toString().split("")),
        writeBuffer(input, getBuffer(), seekNext(getLastValidPosition()), e, undoValue !== getBuffer().join("")),
        isComplete(getBuffer()) === !0 && $input.trigger("complete"), e.preventDefault();
    }

    function inputFallBackEvent(e) {
      var input = this,
        inputValue = input.inputmask._valueGet();
      if (getBuffer().join("") !== inputValue) {
        var caretPos = caret(input);
        if (inputValue = inputValue.replace(new RegExp("(" + Inputmask.escapeRegex(getBufferTemplate().join("")) + ")*"), ""),
          iemobile) {
          var inputChar = inputValue.replace(getBuffer().join(""), "");
          if (1 === inputChar.length) {
            var keypress = new $.Event("keypress");
            return keypress.which = inputChar.charCodeAt(0), keypressEvent.call(input, keypress, !0, !0, !1, getMaskSet().validPositions[caretPos.begin - 1] ? caretPos.begin : caretPos.begin - 1), !1;
          }
        }
        if (caretPos.begin > inputValue.length && (caret(input, inputValue.length), caretPos = caret(input)),
          getBuffer().length - inputValue.length !== 1 || inputValue.charAt(caretPos.begin) === getBuffer()[caretPos.begin] || inputValue.charAt(caretPos.begin + 1) === getBuffer()[caretPos.begin] || isMask(caretPos.begin)) {
          for (var lvp = getLastValidPosition() + 1, bufferTemplate = getBufferTemplate().join(""); null === inputValue.match(Inputmask.escapeRegex(bufferTemplate) + "$");) bufferTemplate = bufferTemplate.slice(1);
          inputValue = inputValue.replace(bufferTemplate, ""), inputValue = inputValue.split(""),
            checkVal(input, !0, !1, inputValue, e, caretPos.begin < lvp), isComplete(getBuffer()) === !0 && $(input).trigger("complete");
        } else e.keyCode = Inputmask.keyCode.BACKSPACE, keydownEvent.call(input, e);
        e.preventDefault();
      }
    }

    function setValueEvent(e) {
      var input = this,
        value = input.inputmask._valueGet();
      checkVal(input, !0, !1, ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask(value, opts) || value : value).split("")),
        undoValue = getBuffer().join(""), (opts.clearMaskOnLostFocus || opts.clearIncomplete) && input.inputmask._valueGet() === getBufferTemplate().join("") && input.inputmask._valueSet("");
    }

    function focusEvent(e) {
      var input = this,
        nptValue = input.inputmask._valueGet();
      opts.showMaskOnFocus && (!opts.showMaskOnHover || opts.showMaskOnHover && "" === nptValue) && (input.inputmask._valueGet() !== getBuffer().join("") ? writeBuffer(input, getBuffer(), seekNext(getLastValidPosition())) : mouseEnter === !1 && caret(input, seekNext(getLastValidPosition()))),
        opts.positionCaretOnTab === !0 && setTimeout(function() {
          clickEvent.apply(this, [e]);
        }, 0), undoValue = getBuffer().join("");
    }

    function mouseleaveEvent(e) {
      var input = this;
      if (mouseEnter = !1, opts.clearMaskOnLostFocus && document.activeElement !== input) {
        var buffer = getBuffer().slice(),
          nptValue = input.inputmask._valueGet();
        nptValue !== input.getAttribute("placeholder") && "" !== nptValue && (getLastValidPosition() === -1 && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer),
          writeBuffer(input, buffer));
      }
    }

    function clickEvent(e) {
      function doRadixFocus(clickPos) {
        if ("" !== opts.radixPoint) {
          var vps = getMaskSet().validPositions;
          if (void 0 === vps[clickPos] || vps[clickPos].input === getPlaceholder(clickPos)) {
            if (clickPos < seekNext(-1)) return !0;
            var radixPos = $.inArray(opts.radixPoint, getBuffer());
            if (radixPos !== -1) {
              for (var vp in vps)
                if (radixPos < vp && vps[vp].input !== getPlaceholder(vp)) return !1;
              return !0;
            }
          }
        }
        return !1;
      }
      var input = this;
      setTimeout(function() {
        if (document.activeElement === input) {
          var selectedCaret = caret(input);
          if (selectedCaret.begin === selectedCaret.end) switch (opts.positionCaretOnClick) {
            case "none":
              break;

            case "radixFocus":
              if (doRadixFocus(selectedCaret.begin)) {
                var radixPos = $.inArray(opts.radixPoint, getBuffer().join(""));
                caret(input, opts.numericInput ? seekNext(radixPos) : radixPos);
                break;
              }

            default:
              var clickPosition = selectedCaret.begin,
                lvclickPosition = getLastValidPosition(clickPosition, !0),
                lastPosition = seekNext(lvclickPosition);
              if (clickPosition < lastPosition) caret(input, isMask(clickPosition) || isMask(clickPosition - 1) ? clickPosition : seekNext(clickPosition));
              else {
                var placeholder = getPlaceholder(lastPosition);
                ("" !== placeholder && getBuffer()[lastPosition] !== placeholder && getTest(lastPosition).match.optionalQuantifier !== !0 || !isMask(lastPosition) && getTest(lastPosition).match.def === placeholder) && (lastPosition = seekNext(lastPosition)),
                caret(input, lastPosition);
              }
          }
        }
      }, 0);
    }

    function dblclickEvent(e) {
      var input = this;
      setTimeout(function() {
        caret(input, 0, seekNext(getLastValidPosition()));
      }, 0);
    }

    function cutEvent(e) {
      var input = this,
        $input = $(input),
        pos = caret(input),
        ev = e.originalEvent || e,
        clipboardData = window.clipboardData || ev.clipboardData,
        clipData = isRTL ? getBuffer().slice(pos.end, pos.begin) : getBuffer().slice(pos.begin, pos.end);
      clipboardData.setData("text", isRTL ? clipData.reverse().join("") : clipData.join("")),
        document.execCommand && document.execCommand("copy"), handleRemove(input, Inputmask.keyCode.DELETE, pos),
        writeBuffer(input, getBuffer(), getMaskSet().p, e, undoValue !== getBuffer().join("")),
        input.inputmask._valueGet() === getBufferTemplate().join("") && $input.trigger("cleared"),
        opts.showTooltip && (input.title = opts.tooltip || getMaskSet().mask);
    }

    function blurEvent(e) {
      var $input = $(this),
        input = this;
      if (input.inputmask) {
        var nptValue = input.inputmask._valueGet(),
          buffer = getBuffer().slice();
        undoValue !== buffer.join("") && setTimeout(function() {
          $input.trigger("change"), undoValue = buffer.join("");
        }, 0), "" !== nptValue && (opts.clearMaskOnLostFocus && (getLastValidPosition() === -1 && nptValue === getBufferTemplate().join("") ? buffer = [] : clearOptionalTail(buffer)),
          isComplete(buffer) === !1 && (setTimeout(function() {
            $input.trigger("incomplete");
          }, 0), opts.clearIncomplete && (resetMaskSet(), buffer = opts.clearMaskOnLostFocus ? [] : getBufferTemplate().slice())),
          writeBuffer(input, buffer, void 0, e));
      }
    }

    function mouseenterEvent(e) {
      var input = this;
      mouseEnter = !0, document.activeElement !== input && opts.showMaskOnHover && input.inputmask._valueGet() !== getBuffer().join("") && writeBuffer(input, getBuffer());
    }

    function submitEvent(e) {
      undoValue !== getBuffer().join("") && $el.trigger("change"), opts.clearMaskOnLostFocus && getLastValidPosition() === -1 && el.inputmask._valueGet && el.inputmask._valueGet() === getBufferTemplate().join("") && el.inputmask._valueSet(""),
        opts.removeMaskOnSubmit && (el.inputmask._valueSet(el.inputmask.unmaskedvalue(), !0),
          setTimeout(function() {
            writeBuffer(el, getBuffer());
          }, 0));
    }

    function resetEvent(e) {
      setTimeout(function() {
        $el.trigger("setvalue");
      }, 0);
    }

    function initializeColorMask(input) {
      function findCaretPos(clientx) {
        var caretPos, e = document.createElement("span");
        for (var style in computedStyle) isNaN(style) && style.indexOf("font") !== -1 && (e.style[style] = computedStyle[style]);
        e.style.textTransform = computedStyle.textTransform, e.style.letterSpacing = computedStyle.letterSpacing,
          e.style.position = "absolute", e.style.height = "auto", e.style.width = "auto",
          e.style.visibility = "hidden", e.style.whiteSpace = "nowrap", document.body.appendChild(e);
        var itl, inputText = input.inputmask._valueGet(),
          previousWidth = 0;
        for (caretPos = 0, itl = inputText.length; caretPos <= itl; caretPos++) {
          if (e.innerHTML += inputText.charAt(caretPos) || "_", e.offsetWidth >= clientx) {
            var offset1 = clientx - previousWidth,
              offset2 = e.offsetWidth - clientx;
            e.innerHTML = inputText.charAt(caretPos), offset1 -= e.offsetWidth / 3, caretPos = offset1 < offset2 ? caretPos - 1 : caretPos;
            break;
          }
          previousWidth = e.offsetWidth;
        }
        return document.body.removeChild(e), caretPos;
      }

      function position() {
        colorMask.style.position = "absolute", colorMask.style.top = offset.top + "px",
          colorMask.style.left = offset.left + "px", colorMask.style.width = parseInt(input.offsetWidth) - parseInt(computedStyle.paddingLeft) - parseInt(computedStyle.paddingRight) - parseInt(computedStyle.borderLeftWidth) - parseInt(computedStyle.borderRightWidth) + "px",
          colorMask.style.height = parseInt(input.offsetHeight) - parseInt(computedStyle.paddingTop) - parseInt(computedStyle.paddingBottom) - parseInt(computedStyle.borderTopWidth) - parseInt(computedStyle.borderBottomWidth) + "px",
          colorMask.style.lineHeight = colorMask.style.height, colorMask.style.zIndex = isNaN(computedStyle.zIndex) ? -1 : computedStyle.zIndex - 1,
          colorMask.style.webkitAppearance = "textfield", colorMask.style.mozAppearance = "textfield",
          colorMask.style.Appearance = "textfield";
      }
      var offset = $(input).position(),
        computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null);
      input.parentNode;
      colorMask = document.createElement("div"), document.body.appendChild(colorMask);
      for (var style in computedStyle) isNaN(style) && "cssText" !== style && style.indexOf("webkit") == -1 && (colorMask.style[style] = computedStyle[style]);
      input.style.backgroundColor = "transparent", input.style.color = "transparent",
        input.style.webkitAppearance = "caret", input.style.mozAppearance = "caret", input.style.Appearance = "caret",
        position(), $(window).on("resize", function(e) {
          offset = $(input).position(), computedStyle = (input.ownerDocument.defaultView || window).getComputedStyle(input, null),
            position();
        }), $(input).on("click", function(e) {
          return caret(input, findCaretPos(e.clientX)), clickEvent.call(this, [e]);
        });
    }

    function renderColorMask(input, buffer, caretPos) {
      function handleStatic() {
        static || null !== test.fn && void 0 !== testPos.input ? static && null !== test.fn && void 0 !== testPos.input && (static = !1,
          maskTemplate += "</span>") : (static = !0, maskTemplate += "<span class='im-static''>");
      }
      if (void 0 !== colorMask) {
        buffer = buffer || getBuffer(), void 0 === caretPos ? caretPos = caret(input) : void 0 === caretPos.begin && (caretPos = {
          begin: caretPos,
          end: caretPos
        });
        var maskTemplate = "",
          static = !1;
        if ("" != buffer) {
          var ndxIntlzr, test, testPos, pos = 0,
            lvp = getLastValidPosition();
          do pos === caretPos.begin && document.activeElement === input && (maskTemplate += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"),
            getMaskSet().validPositions[pos] ? (testPos = getMaskSet().validPositions[pos],
              test = testPos.match, ndxIntlzr = testPos.locator.slice(), handleStatic(), maskTemplate += testPos.input) : (testPos = getTestTemplate(pos, ndxIntlzr, pos - 1),
              test = testPos.match, ndxIntlzr = testPos.locator.slice(), (opts.jitMasking === !1 || pos < lvp || Number.isFinite(opts.jitMasking) && opts.jitMasking > pos) && (handleStatic(),
                maskTemplate += getPlaceholder(pos, test))), pos++; while ((void 0 === maxLength || pos < maxLength) && (null !== test.fn || "" !== test.def) || lvp > pos);
        }
        colorMask.innerHTML = maskTemplate;
      }
    }

    function mask(elem) {
      if (isElementTypeSupported(elem, opts) && (el = elem, $el = $(el), opts.showTooltip && (el.title = opts.tooltip || getMaskSet().mask), ("rtl" === el.dir || opts.rightAlign) && (el.style.textAlign = "right"), ("rtl" === el.dir || opts.numericInput) && (el.dir = "ltr",
            el.removeAttribute("dir"), el.inputmask.isRTL = !0, isRTL = !0), opts.colorMask === !0 && initializeColorMask(el),
          android && (el.hasOwnProperty("inputmode") && (el.inputmode = opts.inputmode, el.setAttribute("inputmode", opts.inputmode)),
            "rtfm" === opts.androidHack && (opts.colorMask !== !0 && initializeColorMask(el),
              el.type = "password")), EventRuler.off(el), patchValueProperty(el), EventRuler.on(el, "submit", submitEvent),
          EventRuler.on(el, "reset", resetEvent), EventRuler.on(el, "mouseenter", mouseenterEvent),
          EventRuler.on(el, "blur", blurEvent), EventRuler.on(el, "focus", focusEvent), EventRuler.on(el, "mouseleave", mouseleaveEvent),
          opts.colorMask !== !0 && EventRuler.on(el, "click", clickEvent), EventRuler.on(el, "dblclick", dblclickEvent),
          EventRuler.on(el, "paste", pasteEvent), EventRuler.on(el, "dragdrop", pasteEvent),
          EventRuler.on(el, "drop", pasteEvent), EventRuler.on(el, "cut", cutEvent), EventRuler.on(el, "complete", opts.oncomplete),
          EventRuler.on(el, "incomplete", opts.onincomplete), EventRuler.on(el, "cleared", opts.oncleared),
          opts.inputEventOnly !== !0 && (EventRuler.on(el, "keydown", keydownEvent), EventRuler.on(el, "keypress", keypressEvent)),
          EventRuler.on(el, "compositionstart", $.noop), EventRuler.on(el, "compositionupdate", $.noop),
          EventRuler.on(el, "compositionend", $.noop), EventRuler.on(el, "keyup", $.noop),
          EventRuler.on(el, "input", inputFallBackEvent), EventRuler.on(el, "setvalue", setValueEvent),
          getBufferTemplate(), "" !== el.inputmask._valueGet() || opts.clearMaskOnLostFocus === !1 || document.activeElement === el)) {
        var initialValue = $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask(el.inputmask._valueGet(), opts) || el.inputmask._valueGet() : el.inputmask._valueGet();
        checkVal(el, !0, !1, initialValue.split(""));
        var buffer = getBuffer().slice();
        undoValue = buffer.join(""), isComplete(buffer) === !1 && opts.clearIncomplete && resetMaskSet(),
          opts.clearMaskOnLostFocus && document.activeElement !== el && (getLastValidPosition() === -1 ? buffer = [] : clearOptionalTail(buffer)),
          writeBuffer(el, buffer), document.activeElement === el && caret(el, seekNext(getLastValidPosition()));
      }
    }
    var undoValue, el, $el, maxLength, colorMask, valueBuffer, isRTL = !1,
      skipKeyPressEvent = !1,
      skipInputEvent = !1,
      ignorable = !1,
      mouseEnter = !1,
      EventRuler = {
        on: function(input, eventName, eventHandler) {
          var ev = function(e) {
            if (void 0 === this.inputmask && "FORM" !== this.nodeName) {
              var imOpts = $.data(this, "_inputmask_opts");
              imOpts ? new Inputmask(imOpts).mask(this) : EventRuler.off(this);
            } else {
              if ("setvalue" === e.type || !(this.disabled || this.readOnly && !("keydown" === e.type && e.ctrlKey && 67 === e.keyCode || opts.tabThrough === !1 && e.keyCode === Inputmask.keyCode.TAB))) {
                switch (e.type) {
                  case "input":
                    if (skipInputEvent === !0) return skipInputEvent = !1, e.preventDefault();
                    break;

                  case "keydown":
                    skipKeyPressEvent = !1, skipInputEvent = !1;
                    break;

                  case "keypress":
                    if (skipKeyPressEvent === !0) return e.preventDefault();
                    skipKeyPressEvent = !0;
                    break;

                  case "click":
                    if (iemobile || iphone) {
                      var that = this,
                        args = arguments;
                      return setTimeout(function() {
                        eventHandler.apply(that, args);
                      }, 0), !1;
                    }
                }
                var returnVal = eventHandler.apply(this, arguments);
                return returnVal === !1 && (e.preventDefault(), e.stopPropagation()), returnVal;
              }
              e.preventDefault();
            }
          };
          input.inputmask.events[eventName] = input.inputmask.events[eventName] || [], input.inputmask.events[eventName].push(ev),
            $.inArray(eventName, ["submit", "reset"]) !== -1 ? null != input.form && $(input.form).on(eventName, ev) : $(input).on(eventName, ev);
        },
        off: function(input, event) {
          if (input.inputmask && input.inputmask.events) {
            var events;
            event ? (events = [], events[event] = input.inputmask.events[event]) : events = input.inputmask.events,
              $.each(events, function(eventName, evArr) {
                for (; evArr.length > 0;) {
                  var ev = evArr.pop();
                  $.inArray(eventName, ["submit", "reset"]) !== -1 ? null != input.form && $(input.form).off(eventName, ev) : $(input).off(eventName, ev);
                }
                delete input.inputmask.events[eventName];
              });
          }
        }
      };
    if (void 0 !== actionObj) switch (actionObj.action) {
      case "isComplete":
        return el = actionObj.el, isComplete(getBuffer());

      case "unmaskedvalue":
        return el = actionObj.el, void 0 !== el && void 0 !== el.inputmask ? (maskset = el.inputmask.maskset,
            opts = el.inputmask.opts, isRTL = el.inputmask.isRTL) : (valueBuffer = actionObj.value,
            opts.numericInput && (isRTL = !0), valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask(valueBuffer, opts) || valueBuffer : valueBuffer).split(""),
            checkVal(void 0, !1, !1, isRTL ? valueBuffer.reverse() : valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite(void 0, getBuffer(), 0, opts)),
          unmaskedvalue(el);

      case "mask":
        el = actionObj.el, maskset = el.inputmask.maskset, opts = el.inputmask.opts, isRTL = el.inputmask.isRTL,
          mask(el);
        break;

      case "format":
        return opts.numericInput && (isRTL = !0), valueBuffer = ($.isFunction(opts.onBeforeMask) ? opts.onBeforeMask(actionObj.value, opts) || actionObj.value : actionObj.value).split(""),
          checkVal(void 0, !1, !1, isRTL ? valueBuffer.reverse() : valueBuffer), $.isFunction(opts.onBeforeWrite) && opts.onBeforeWrite(void 0, getBuffer(), 0, opts),
          actionObj.metadata ? {
            value: isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join(""),
            metadata: maskScope({
              action: "getmetadata"
            }, maskset, opts)
          } : isRTL ? getBuffer().slice().reverse().join("") : getBuffer().join("");

      case "isValid":
        opts.numericInput && (isRTL = !0), actionObj.value ? (valueBuffer = actionObj.value.split(""),
          checkVal(void 0, !1, !0, isRTL ? valueBuffer.reverse() : valueBuffer)) : actionObj.value = getBuffer().join("");
        for (var buffer = getBuffer(), rl = determineLastRequiredPosition(), lmib = buffer.length - 1; lmib > rl && !isMask(lmib); lmib--);
        return buffer.splice(rl, lmib + 1 - rl), isComplete(buffer) && actionObj.value === getBuffer().join("");

      case "getemptymask":
        return getBufferTemplate().join("");

      case "remove":
        el = actionObj.el, $el = $(el), maskset = el.inputmask.maskset, opts = el.inputmask.opts,
          el.inputmask._valueSet(unmaskedvalue(el)), EventRuler.off(el);
        var valueProperty;
        Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? (valueProperty = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(el), "value"),
          valueProperty && el.inputmask.__valueGet && Object.defineProperty(el, "value", {
            get: el.inputmask.__valueGet,
            set: el.inputmask.__valueSet,
            configurable: !0
          })) : document.__lookupGetter__ && el.__lookupGetter__("value") && el.inputmask.__valueGet && (el.__defineGetter__("value", el.inputmask.__valueGet),
          el.__defineSetter__("value", el.inputmask.__valueSet)), el.inputmask = void 0;
        break;

      case "getmetadata":
        if ($.isArray(maskset.metadata)) {
          for (var alternation, lvp = getLastValidPosition(void 0, !0), firstAlt = lvp; firstAlt >= 0; firstAlt--)
            if (getMaskSet().validPositions[firstAlt] && void 0 !== getMaskSet().validPositions[firstAlt].alternation) {
              alternation = getMaskSet().validPositions[firstAlt].alternation;
              break;
            }
          return void 0 !== alternation ? maskset.metadata[getMaskSet().validPositions[firstAlt].locator[alternation]] : [];
        }
        return maskset.metadata;
    }
  }
  Inputmask.prototype = {
    defaults: {
      placeholder: "_",
      optionalmarker: {
        start: "[",
        end: "]"
      },
      quantifiermarker: {
        start: "{",
        end: "}"
      },
      groupmarker: {
        start: "(",
        end: ")"
      },
      alternatormarker: "|",
      escapeChar: "\\",
      mask: null,
      oncomplete: $.noop,
      onincomplete: $.noop,
      oncleared: $.noop,
      repeat: 0,
      greedy: !0,
      autoUnmask: !1,
      removeMaskOnSubmit: !1,
      clearMaskOnLostFocus: !0,
      insertMode: !0,
      clearIncomplete: !1,
      aliases: {},
      alias: null,
      onKeyDown: $.noop,
      onBeforeMask: null,
      onBeforePaste: function(pastedValue, opts) {
        return $.isFunction(opts.onBeforeMask) ? opts.onBeforeMask(pastedValue, opts) : pastedValue;
      },
      onBeforeWrite: null,
      onUnMask: null,
      showMaskOnFocus: !0,
      showMaskOnHover: !0,
      onKeyValidation: $.noop,
      skipOptionalPartCharacter: " ",
      showTooltip: !1,
      tooltip: void 0,
      numericInput: !1,
      rightAlign: !1,
      undoOnEscape: !0,
      radixPoint: "",
      radixPointDefinitionSymbol: void 0,
      groupSeparator: "",
      keepStatic: null,
      positionCaretOnTab: !0,
      tabThrough: !1,
      supportsInputType: ["text", "tel", "password"],
      definitions: {
        "9": {
          validator: "[0-9]",
          cardinality: 1,
          definitionSymbol: "*"
        },
        a: {
          validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
          cardinality: 1,
          definitionSymbol: "*"
        },
        "*": {
          validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
          cardinality: 1
        }
      },
      ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
      isComplete: null,
      canClearPosition: $.noop,
      postValidation: null,
      staticDefinitionSymbol: void 0,
      jitMasking: !1,
      nullable: !0,
      inputEventOnly: !1,
      noValuePatching: !1,
      positionCaretOnClick: "lvp",
      casing: null,
      inputmode: "verbatim",
      colorMask: !1,
      androidHack: !1
    },
    masksCache: {},
    mask: function(elems) {
      var that = this;
      return "string" == typeof elems && (elems = document.getElementById(elems) || document.querySelectorAll(elems)),
        elems = elems.nodeName ? [elems] : elems, $.each(elems, function(ndx, el) {
          var scopedOpts = $.extend(!0, {}, that.opts);
          importAttributeOptions(el, scopedOpts, $.extend(!0, {}, that.userOptions), that.dataAttribute);
          var maskset = generateMaskSet(scopedOpts, that.noMasksCache);
          void 0 !== maskset && (void 0 !== el.inputmask && el.inputmask.remove(), el.inputmask = new Inputmask(),
            el.inputmask.opts = scopedOpts, el.inputmask.noMasksCache = that.noMasksCache, el.inputmask.userOptions = $.extend(!0, {}, that.userOptions),
            el.inputmask.el = el, el.inputmask.maskset = maskset, el.inputmask.isRTL = !1, $.data(el, "_inputmask_opts", scopedOpts),
            maskScope({
              action: "mask",
              el: el
            }));
        }), elems && elems[0] ? elems[0].inputmask || this : this;
    },
    option: function(options, noremask) {
      return "string" == typeof options ? this.opts[options] : "object" == typeof options ? ($.extend(this.userOptions, options),
        this.el && noremask !== !0 && this.mask(this.el), this) : void 0;
    },
    unmaskedvalue: function(value) {
      return maskScope({
        action: "unmaskedvalue",
        el: this.el,
        value: value
      }, this.el && this.el.inputmask ? this.el.inputmask.maskset : generateMaskSet(this.opts, this.noMasksCache), this.opts);
    },
    remove: function() {
      if (this.el) return maskScope({
        action: "remove",
        el: this.el
      }), this.el.inputmask = void 0, this.el;
    },
    getemptymask: function() {
      return maskScope({
        action: "getemptymask"
      }, this.maskset || generateMaskSet(this.opts, this.noMasksCache), this.opts);
    },
    hasMaskedValue: function() {
      return !this.opts.autoUnmask;
    },
    isComplete: function() {
      return maskScope({
        action: "isComplete",
        el: this.el
      }, this.maskset || generateMaskSet(this.opts, this.noMasksCache), this.opts);
    },
    getmetadata: function() {
      return maskScope({
        action: "getmetadata"
      }, this.maskset || generateMaskSet(this.opts, this.noMasksCache), this.opts);
    },
    isValid: function(value) {
      return maskScope({
        action: "isValid",
        value: value
      }, this.maskset || generateMaskSet(this.opts, this.noMasksCache), this.opts);
    },
    format: function(value, metadata) {
      return maskScope({
        action: "format",
        value: value,
        metadata: metadata
      }, this.maskset || generateMaskSet(this.opts, this.noMasksCache), this.opts);
    }
  }, Inputmask.extendDefaults = function(options) {
    $.extend(!0, Inputmask.prototype.defaults, options);
  }, Inputmask.extendDefinitions = function(definition) {
    $.extend(!0, Inputmask.prototype.defaults.definitions, definition);
  }, Inputmask.extendAliases = function(alias) {
    $.extend(!0, Inputmask.prototype.defaults.aliases, alias);
  }, Inputmask.format = function(value, options, metadata) {
    return Inputmask(options).format(value, metadata);
  }, Inputmask.unmask = function(value, options) {
    return Inputmask(options).unmaskedvalue(value);
  }, Inputmask.isValid = function(value, options) {
    return Inputmask(options).isValid(value);
  }, Inputmask.remove = function(elems) {
    $.each(elems, function(ndx, el) {
      el.inputmask && el.inputmask.remove();
    });
  }, Inputmask.escapeRegex = function(str) {
    var specials = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];
    return str.replace(new RegExp("(\\" + specials.join("|\\") + ")", "gim"), "\\$1");
  }, Inputmask.keyCode = {
    ALT: 18,
    BACKSPACE: 8,
    BACKSPACE_SAFARI: 127,
    CAPS_LOCK: 20,
    COMMA: 188,
    COMMAND: 91,
    COMMAND_LEFT: 91,
    COMMAND_RIGHT: 93,
    CONTROL: 17,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    INSERT: 45,
    LEFT: 37,
    MENU: 93,
    NUMPAD_ADD: 107,
    NUMPAD_DECIMAL: 110,
    NUMPAD_DIVIDE: 111,
    NUMPAD_ENTER: 108,
    NUMPAD_MULTIPLY: 106,
    NUMPAD_SUBTRACT: 109,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SHIFT: 16,
    SPACE: 32,
    TAB: 9,
    UP: 38,
    WINDOWS: 91,
    X: 88
  }, Inputmask.analyseMask = function(mask, opts) {
    function MaskToken(isGroup, isOptional, isQuantifier, isAlternator) {
      this.matches = [], this.isGroup = isGroup || !1, this.isOptional = isOptional || !1,
        this.isQuantifier = isQuantifier || !1, this.isAlternator = isAlternator || !1,
        this.quantifier = {
          min: 1,
          max: 1
        };
    }

    function insertTestDefinition(mtoken, element, position) {
      var maskdef = opts.definitions[element];
      position = void 0 !== position ? position : mtoken.matches.length;
      var prevMatch = mtoken.matches[position - 1];
      if (maskdef && !escaped) {
        maskdef.placeholder = $.isFunction(maskdef.placeholder) ? maskdef.placeholder(opts) : maskdef.placeholder;
        for (var prevalidators = maskdef.prevalidator, prevalidatorsL = prevalidators ? prevalidators.length : 0, i = 1; i < maskdef.cardinality; i++) {
          var prevalidator = prevalidatorsL >= i ? prevalidators[i - 1] : [],
            validator = prevalidator.validator,
            cardinality = prevalidator.cardinality;
          mtoken.matches.splice(position++, 0, {
            fn: validator ? "string" == typeof validator ? new RegExp(validator) : new function() {
              this.test = validator;
            }() : new RegExp("."),
            cardinality: cardinality ? cardinality : 1,
            optionality: mtoken.isOptional,
            newBlockMarker: void 0 === prevMatch || prevMatch.def !== (maskdef.definitionSymbol || element),
            casing: maskdef.casing,
            def: maskdef.definitionSymbol || element,
            placeholder: maskdef.placeholder,
            nativeDef: element
          }), prevMatch = mtoken.matches[position - 1];
        }
        mtoken.matches.splice(position++, 0, {
          fn: maskdef.validator ? "string" == typeof maskdef.validator ? new RegExp(maskdef.validator) : new function() {
            this.test = maskdef.validator;
          }() : new RegExp("."),
          cardinality: maskdef.cardinality,
          optionality: mtoken.isOptional,
          newBlockMarker: void 0 === prevMatch || prevMatch.def !== (maskdef.definitionSymbol || element),
          casing: maskdef.casing,
          def: maskdef.definitionSymbol || element,
          placeholder: maskdef.placeholder,
          nativeDef: element
        });
      } else mtoken.matches.splice(position++, 0, {
        fn: null,
        cardinality: 0,
        optionality: mtoken.isOptional,
        newBlockMarker: void 0 === prevMatch || prevMatch.def !== element,
        casing: null,
        def: opts.staticDefinitionSymbol || element,
        placeholder: void 0 !== opts.staticDefinitionSymbol ? element : void 0,
        nativeDef: element
      }), escaped = !1;
    }

    function verifyGroupMarker(lastMatch, isOpenGroup) {
      lastMatch.isGroup && (lastMatch.isGroup = !1, insertTestDefinition(lastMatch, opts.groupmarker.start, 0),
        isOpenGroup !== !0 && insertTestDefinition(lastMatch, opts.groupmarker.end));
    }

    function maskCurrentToken(m, currentToken, lastMatch, extraCondition) {
      currentToken.matches.length > 0 && (void 0 === extraCondition || extraCondition) && (lastMatch = currentToken.matches[currentToken.matches.length - 1],
        verifyGroupMarker(lastMatch)), insertTestDefinition(currentToken, m);
    }

    function defaultCase() {
      if (openenings.length > 0) {
        if (currentOpeningToken = openenings[openenings.length - 1], maskCurrentToken(m, currentOpeningToken, lastMatch, !currentOpeningToken.isAlternator),
          currentOpeningToken.isAlternator) {
          alternator = openenings.pop();
          for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1;
          openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1],
            currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
        }
      } else maskCurrentToken(m, currentToken, lastMatch);
    }

    function reverseTokens(maskToken) {
      function reverseStatic(st) {
        return st === opts.optionalmarker.start ? st = opts.optionalmarker.end : st === opts.optionalmarker.end ? st = opts.optionalmarker.start : st === opts.groupmarker.start ? st = opts.groupmarker.end : st === opts.groupmarker.end && (st = opts.groupmarker.start),
          st;
      }
      maskToken.matches = maskToken.matches.reverse();
      for (var match in maskToken.matches) {
        var intMatch = parseInt(match);
        if (maskToken.matches[match].isQuantifier && maskToken.matches[intMatch + 1] && maskToken.matches[intMatch + 1].isGroup) {
          var qt = maskToken.matches[match];
          maskToken.matches.splice(match, 1), maskToken.matches.splice(intMatch + 1, 0, qt);
        }
        void 0 !== maskToken.matches[match].matches ? maskToken.matches[match] = reverseTokens(maskToken.matches[match]) : maskToken.matches[match] = reverseStatic(maskToken.matches[match]);
      }
      return maskToken;
    }
    for (var match, m, openingToken, currentOpeningToken, alternator, lastMatch, groupToken, tokenizer = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, escaped = !1, currentToken = new MaskToken(), openenings = [], maskTokens = []; match = tokenizer.exec(mask);)
      if (m = match[0],
        escaped) defaultCase();
      else switch (m.charAt(0)) {
        case opts.escapeChar:
          escaped = !0;
          break;

        case opts.optionalmarker.end:
        case opts.groupmarker.end:
          if (openingToken = openenings.pop(), void 0 !== openingToken)
            if (openenings.length > 0) {
              if (currentOpeningToken = openenings[openenings.length - 1], currentOpeningToken.matches.push(openingToken),
                currentOpeningToken.isAlternator) {
                alternator = openenings.pop();
                for (var mndx = 0; mndx < alternator.matches.length; mndx++) alternator.matches[mndx].isGroup = !1;
                openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1],
                  currentOpeningToken.matches.push(alternator)) : currentToken.matches.push(alternator);
              }
            } else currentToken.matches.push(openingToken);
          else defaultCase();
          break;

        case opts.optionalmarker.start:
          openenings.push(new MaskToken((!1), (!0)));
          break;

        case opts.groupmarker.start:
          openenings.push(new MaskToken((!0)));
          break;

        case opts.quantifiermarker.start:
          var quantifier = new MaskToken((!1), (!1), (!0));
          m = m.replace(/[{}]/g, "");
          var mq = m.split(","),
            mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
            mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
          if ("*" !== mq1 && "+" !== mq1 || (mq0 = "*" === mq1 ? 0 : 1), quantifier.quantifier = {
              min: mq0,
              max: mq1
            }, openenings.length > 0) {
            var matches = openenings[openenings.length - 1].matches;
            match = matches.pop(), match.isGroup || (groupToken = new MaskToken((!0)), groupToken.matches.push(match),
              match = groupToken), matches.push(match), matches.push(quantifier);
          } else match = currentToken.matches.pop(), match.isGroup || (groupToken = new MaskToken((!0)),
              groupToken.matches.push(match), match = groupToken), currentToken.matches.push(match),
            currentToken.matches.push(quantifier);
          break;

        case opts.alternatormarker:
          openenings.length > 0 ? (currentOpeningToken = openenings[openenings.length - 1],
              lastMatch = currentOpeningToken.matches.pop()) : lastMatch = currentToken.matches.pop(),
            lastMatch.isAlternator ? openenings.push(lastMatch) : (alternator = new MaskToken((!1), (!1), (!1), (!0)),
              alternator.matches.push(lastMatch), openenings.push(alternator));
          break;

        default:
          defaultCase();
      }
    for (; openenings.length > 0;) openingToken = openenings.pop(), verifyGroupMarker(openingToken, !0),
      currentToken.matches.push(openingToken);
    return currentToken.matches.length > 0 && (lastMatch = currentToken.matches[currentToken.matches.length - 1],
        verifyGroupMarker(lastMatch), maskTokens.push(currentToken)), opts.numericInput && reverseTokens(maskTokens[0]),
      maskTokens;
  };
  var ua = navigator.userAgent,
    mobile = /mobile/i.test(ua),
    iemobile = /iemobile/i.test(ua),
    iphone = /iphone/i.test(ua) && !iemobile,
    android = /android/i.test(ua) && !iemobile;
  return window.Inputmask = Inputmask, Inputmask;
}(jQuery),
function($, Inputmask) {
  return void 0 === $.fn.inputmask && ($.fn.inputmask = function(fn, options) {
    var nptmask, input = this[0];
    if (void 0 === options && (options = {}), "string" == typeof fn) switch (fn) {
      case "unmaskedvalue":
        return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();

      case "remove":
        return this.each(function() {
          this.inputmask && this.inputmask.remove();
        });

      case "getemptymask":
        return input && input.inputmask ? input.inputmask.getemptymask() : "";

      case "hasMaskedValue":
        return !(!input || !input.inputmask) && input.inputmask.hasMaskedValue();

      case "isComplete":
        return !input || !input.inputmask || input.inputmask.isComplete();

      case "getmetadata":
        return input && input.inputmask ? input.inputmask.getmetadata() : void 0;

      case "setvalue":
        $(input).val(options), input && void 0 === input.inputmask && $(input).triggerHandler("setvalue");
        break;

      case "option":
        if ("string" != typeof options) return this.each(function() {
          if (void 0 !== this.inputmask) return this.inputmask.option(options);
        });
        if (input && void 0 !== input.inputmask) return input.inputmask.option(options);
        break;

      default:
        return options.alias = fn, nptmask = new Inputmask(options), this.each(function() {
          nptmask.mask(this);
        });
    } else {
      if ("object" == typeof fn) return nptmask = new Inputmask(fn), void 0 === fn.mask && void 0 === fn.alias ? this.each(function() {
        return void 0 !== this.inputmask ? this.inputmask.option(fn) : void nptmask.mask(this);
      }) : this.each(function() {
        nptmask.mask(this);
      });
      if (void 0 === fn) return this.each(function() {
        nptmask = new Inputmask(options), nptmask.mask(this);
      });
    }
  }), $.fn.inputmask;
}(jQuery, Inputmask),
function($, Inputmask) {
  function isLeapYear(year) {
    return isNaN(year) || 29 === new Date(year, 2, 0).getDate();
  }
  return Inputmask.extendDefinitions({
    h: {
      validator: "[01][0-9]|2[0-3]",
      cardinality: 2,
      prevalidator: [{
        validator: "[0-2]",
        cardinality: 1
      }]
    },
    s: {
      validator: "[0-5][0-9]",
      cardinality: 2,
      prevalidator: [{
        validator: "[0-5]",
        cardinality: 1
      }]
    },
    d: {
      validator: "0[1-9]|[12][0-9]|3[01]",
      cardinality: 2,
      prevalidator: [{
        validator: "[0-3]",
        cardinality: 1
      }]
    },
    m: {
      validator: "0[1-9]|1[012]",
      cardinality: 2,
      prevalidator: [{
        validator: "[01]",
        cardinality: 1
      }]
    },
    y: {
      validator: "(19|20)\\d{2}",
      cardinality: 4,
      prevalidator: [{
        validator: "[12]",
        cardinality: 1
      }, {
        validator: "(19|20)",
        cardinality: 2
      }, {
        validator: "(19|20)\\d",
        cardinality: 3
      }]
    }
  }), Inputmask.extendAliases({
    "dd/mm/yyyy": {
      mask: "1/2/y",
      placeholder: "dd/mm/yyyy",
      regex: {
        val1pre: new RegExp("[0-3]"),
        val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
        val2pre: function(separator) {
          var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
          return new RegExp("((0[1-9]|[12][0-9]|3[01])" + escapedSeparator + "[01])");
        },
        val2: function(separator) {
          var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
          return new RegExp("((0[1-9]|[12][0-9])" + escapedSeparator + "(0[1-9]|1[012]))|(30" + escapedSeparator + "(0[13-9]|1[012]))|(31" + escapedSeparator + "(0[13578]|1[02]))");
        }
      },
      leapday: "29/02/",
      separator: "/",
      yearrange: {
        minyear: 1900,
        maxyear: 2099
      },
      isInYearRange: function(chrs, minyear, maxyear) {
        if (isNaN(chrs)) return !1;
        var enteredyear = parseInt(chrs.concat(minyear.toString().slice(chrs.length))),
          enteredyear2 = parseInt(chrs.concat(maxyear.toString().slice(chrs.length)));
        return !isNaN(enteredyear) && (minyear <= enteredyear && enteredyear <= maxyear) || !isNaN(enteredyear2) && (minyear <= enteredyear2 && enteredyear2 <= maxyear);
      },
      determinebaseyear: function(minyear, maxyear, hint) {
        var currentyear = new Date().getFullYear();
        if (minyear > currentyear) return minyear;
        if (maxyear < currentyear) {
          for (var maxYearPrefix = maxyear.toString().slice(0, 2), maxYearPostfix = maxyear.toString().slice(2, 4); maxyear < maxYearPrefix + hint;) maxYearPrefix--;
          var maxxYear = maxYearPrefix + maxYearPostfix;
          return minyear > maxxYear ? minyear : maxxYear;
        }
        if (minyear <= currentyear && currentyear <= maxyear) {
          for (var currentYearPrefix = currentyear.toString().slice(0, 2); maxyear < currentYearPrefix + hint;) currentYearPrefix--;
          var currentYearAndHint = currentYearPrefix + hint;
          return currentYearAndHint < minyear ? minyear : currentYearAndHint;
        }
        return currentyear;
      },
      onKeyDown: function(e, buffer, caretPos, opts) {
        var $input = $(this);
        if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
          var today = new Date();
          $input.val(today.getDate().toString() + (today.getMonth() + 1).toString() + today.getFullYear().toString()),
            $input.trigger("setvalue");
        }
      },
      getFrontValue: function(mask, buffer, opts) {
        for (var start = 0, length = 0, i = 0; i < mask.length && "2" !== mask.charAt(i); i++) {
          var definition = opts.definitions[mask.charAt(i)];
          definition ? (start += length, length = definition.cardinality) : length++;
        }
        return buffer.join("").substr(start, length);
      },
      postValidation: function(buffer, currentResult, opts) {
        var dayMonthValue, year, bufferStr = buffer.join("");
        return 0 === opts.mask.indexOf("y") ? (year = bufferStr.substr(0, 4), dayMonthValue = bufferStr.substr(4, 11)) : (year = bufferStr.substr(6, 11),
          dayMonthValue = bufferStr.substr(0, 6)), currentResult && (dayMonthValue !== opts.leapday || isLeapYear(year));
      },
      definitions: {
        "1": {
          validator: function(chrs, maskset, pos, strict, opts) {
            var isValid = opts.regex.val1.test(chrs);
            return strict || isValid || chrs.charAt(1) !== opts.separator && "-./".indexOf(chrs.charAt(1)) === -1 || !(isValid = opts.regex.val1.test("0" + chrs.charAt(0))) ? isValid : (maskset.buffer[pos - 1] = "0", {
              refreshFromBuffer: {
                start: pos - 1,
                end: pos
              },
              pos: pos,
              c: chrs.charAt(0)
            });
          },
          cardinality: 2,
          prevalidator: [{
            validator: function(chrs, maskset, pos, strict, opts) {
              var pchrs = chrs;
              isNaN(maskset.buffer[pos + 1]) || (pchrs += maskset.buffer[pos + 1]);
              var isValid = 1 === pchrs.length ? opts.regex.val1pre.test(pchrs) : opts.regex.val1.test(pchrs);
              if (!strict && !isValid) {
                if (isValid = opts.regex.val1.test(chrs + "0")) return maskset.buffer[pos] = chrs,
                  maskset.buffer[++pos] = "0", {
                    pos: pos,
                    c: "0"
                  };
                if (isValid = opts.regex.val1.test("0" + chrs)) return maskset.buffer[pos] = "0",
                  pos++, {
                    pos: pos
                  };
              }
              return isValid;
            },
            cardinality: 1
          }]
        },
        "2": {
          validator: function(chrs, maskset, pos, strict, opts) {
            var frontValue = opts.getFrontValue(maskset.mask, maskset.buffer, opts);
            frontValue.indexOf(opts.placeholder[0]) !== -1 && (frontValue = "01" + opts.separator);
            var isValid = opts.regex.val2(opts.separator).test(frontValue + chrs);
            return strict || isValid || chrs.charAt(1) !== opts.separator && "-./".indexOf(chrs.charAt(1)) === -1 || !(isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs.charAt(0))) ? isValid : (maskset.buffer[pos - 1] = "0", {
              refreshFromBuffer: {
                start: pos - 1,
                end: pos
              },
              pos: pos,
              c: chrs.charAt(0)
            });
          },
          cardinality: 2,
          prevalidator: [{
            validator: function(chrs, maskset, pos, strict, opts) {
              isNaN(maskset.buffer[pos + 1]) || (chrs += maskset.buffer[pos + 1]);
              var frontValue = opts.getFrontValue(maskset.mask, maskset.buffer, opts);
              frontValue.indexOf(opts.placeholder[0]) !== -1 && (frontValue = "01" + opts.separator);
              var isValid = 1 === chrs.length ? opts.regex.val2pre(opts.separator).test(frontValue + chrs) : opts.regex.val2(opts.separator).test(frontValue + chrs);
              return strict || isValid || !(isValid = opts.regex.val2(opts.separator).test(frontValue + "0" + chrs)) ? isValid : (maskset.buffer[pos] = "0",
                pos++, {
                  pos: pos
                });
            },
            cardinality: 1
          }]
        },
        y: {
          validator: function(chrs, maskset, pos, strict, opts) {
            return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
          },
          cardinality: 4,
          prevalidator: [{
            validator: function(chrs, maskset, pos, strict, opts) {
              var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
              if (!strict && !isValid) {
                var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 1);
                if (isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(0), {
                  pos: pos
                };
                if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs + "0").toString().slice(0, 2),
                  isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(0),
                  maskset.buffer[pos++] = yearPrefix.charAt(1), {
                    pos: pos
                  };
              }
              return isValid;
            },
            cardinality: 1
          }, {
            validator: function(chrs, maskset, pos, strict, opts) {
              var isValid = opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
              if (!strict && !isValid) {
                var yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2);
                if (isValid = opts.isInYearRange(chrs[0] + yearPrefix[1] + chrs[1], opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos++] = yearPrefix.charAt(1), {
                  pos: pos
                };
                if (yearPrefix = opts.determinebaseyear(opts.yearrange.minyear, opts.yearrange.maxyear, chrs).toString().slice(0, 2),
                  isValid = opts.isInYearRange(yearPrefix + chrs, opts.yearrange.minyear, opts.yearrange.maxyear)) return maskset.buffer[pos - 1] = yearPrefix.charAt(0),
                  maskset.buffer[pos++] = yearPrefix.charAt(1), maskset.buffer[pos++] = chrs.charAt(0), {
                    refreshFromBuffer: {
                      start: pos - 3,
                      end: pos
                    },
                    pos: pos
                  };
              }
              return isValid;
            },
            cardinality: 2
          }, {
            validator: function(chrs, maskset, pos, strict, opts) {
              return opts.isInYearRange(chrs, opts.yearrange.minyear, opts.yearrange.maxyear);
            },
            cardinality: 3
          }]
        }
      },
      insertMode: !1,
      autoUnmask: !1
    },
    "mm/dd/yyyy": {
      placeholder: "mm/dd/yyyy",
      alias: "dd/mm/yyyy",
      regex: {
        val2pre: function(separator) {
          var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
          return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");
        },
        val2: function(separator) {
          var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
          return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");
        },
        val1pre: new RegExp("[01]"),
        val1: new RegExp("0[1-9]|1[012]")
      },
      leapday: "02/29/",
      onKeyDown: function(e, buffer, caretPos, opts) {
        var $input = $(this);
        if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
          var today = new Date();
          $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString()),
            $input.trigger("setvalue");
        }
      }
    },
    "yyyy/mm/dd": {
      mask: "y/1/2",
      placeholder: "yyyy/mm/dd",
      alias: "mm/dd/yyyy",
      leapday: "/02/29",
      onKeyDown: function(e, buffer, caretPos, opts) {
        var $input = $(this);
        if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
          var today = new Date();
          $input.val(today.getFullYear().toString() + (today.getMonth() + 1).toString() + today.getDate().toString()),
            $input.trigger("setvalue");
        }
      }
    },
    "dd.mm.yyyy": {
      mask: "1.2.y",
      placeholder: "dd.mm.yyyy",
      leapday: "29.02.",
      separator: ".",
      alias: "dd/mm/yyyy"
    },
    "dd-mm-yyyy": {
      mask: "1-2-y",
      placeholder: "dd-mm-yyyy",
      leapday: "29-02-",
      separator: "-",
      alias: "dd/mm/yyyy"
    },
    "mm.dd.yyyy": {
      mask: "1.2.y",
      placeholder: "mm.dd.yyyy",
      leapday: "02.29.",
      separator: ".",
      alias: "mm/dd/yyyy"
    },
    "mm-dd-yyyy": {
      mask: "1-2-y",
      placeholder: "mm-dd-yyyy",
      leapday: "02-29-",
      separator: "-",
      alias: "mm/dd/yyyy"
    },
    "yyyy.mm.dd": {
      mask: "y.1.2",
      placeholder: "yyyy.mm.dd",
      leapday: ".02.29",
      separator: ".",
      alias: "yyyy/mm/dd"
    },
    "yyyy-mm-dd": {
      mask: "y-1-2",
      placeholder: "yyyy-mm-dd",
      leapday: "-02-29",
      separator: "-",
      alias: "yyyy/mm/dd"
    },
    datetime: {
      mask: "1/2/y h:s",
      placeholder: "dd/mm/yyyy hh:mm",
      alias: "dd/mm/yyyy",
      regex: {
        hrspre: new RegExp("[012]"),
        hrs24: new RegExp("2[0-4]|1[3-9]"),
        hrs: new RegExp("[01][0-9]|2[0-4]"),
        ampm: new RegExp("^[a|p|A|P][m|M]"),
        mspre: new RegExp("[0-5]"),
        ms: new RegExp("[0-5][0-9]")
      },
      timeseparator: ":",
      hourFormat: "24",
      definitions: {
        h: {
          validator: function(chrs, maskset, pos, strict, opts) {
            if ("24" === opts.hourFormat && 24 === parseInt(chrs, 10)) return maskset.buffer[pos - 1] = "0",
              maskset.buffer[pos] = "0", {
                refreshFromBuffer: {
                  start: pos - 1,
                  end: pos
                },
                c: "0"
              };
            var isValid = opts.regex.hrs.test(chrs);
            if (!strict && !isValid && (chrs.charAt(1) === opts.timeseparator || "-.:".indexOf(chrs.charAt(1)) !== -1) && (isValid = opts.regex.hrs.test("0" + chrs.charAt(0)))) return maskset.buffer[pos - 1] = "0",
              maskset.buffer[pos] = chrs.charAt(0), pos++, {
                refreshFromBuffer: {
                  start: pos - 2,
                  end: pos
                },
                pos: pos,
                c: opts.timeseparator
              };
            if (isValid && "24" !== opts.hourFormat && opts.regex.hrs24.test(chrs)) {
              var tmp = parseInt(chrs, 10);
              return 24 === tmp ? (maskset.buffer[pos + 5] = "a", maskset.buffer[pos + 6] = "m") : (maskset.buffer[pos + 5] = "p",
                maskset.buffer[pos + 6] = "m"), tmp -= 12, tmp < 10 ? (maskset.buffer[pos] = tmp.toString(),
                maskset.buffer[pos - 1] = "0") : (maskset.buffer[pos] = tmp.toString().charAt(1),
                maskset.buffer[pos - 1] = tmp.toString().charAt(0)), {
                refreshFromBuffer: {
                  start: pos - 1,
                  end: pos + 6
                },
                c: maskset.buffer[pos]
              };
            }
            return isValid;
          },
          cardinality: 2,
          prevalidator: [{
            validator: function(chrs, maskset, pos, strict, opts) {
              var isValid = opts.regex.hrspre.test(chrs);
              return strict || isValid || !(isValid = opts.regex.hrs.test("0" + chrs)) ? isValid : (maskset.buffer[pos] = "0",
                pos++, {
                  pos: pos
                });
            },
            cardinality: 1
          }]
        },
        s: {
          validator: "[0-5][0-9]",
          cardinality: 2,
          prevalidator: [{
            validator: function(chrs, maskset, pos, strict, opts) {
              var isValid = opts.regex.mspre.test(chrs);
              return strict || isValid || !(isValid = opts.regex.ms.test("0" + chrs)) ? isValid : (maskset.buffer[pos] = "0",
                pos++, {
                  pos: pos
                });
            },
            cardinality: 1
          }]
        },
        t: {
          validator: function(chrs, maskset, pos, strict, opts) {
            return opts.regex.ampm.test(chrs + "m");
          },
          casing: "lower",
          cardinality: 1
        }
      },
      insertMode: !1,
      autoUnmask: !1
    },
    datetime12: {
      mask: "1/2/y h:s t\\m",
      placeholder: "dd/mm/yyyy hh:mm xm",
      alias: "datetime",
      hourFormat: "12"
    },
    "mm/dd/yyyy hh:mm xm": {
      mask: "1/2/y h:s t\\m",
      placeholder: "mm/dd/yyyy hh:mm xm",
      alias: "datetime12",
      regex: {
        val2pre: function(separator) {
          var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
          return new RegExp("((0[13-9]|1[012])" + escapedSeparator + "[0-3])|(02" + escapedSeparator + "[0-2])");
        },
        val2: function(separator) {
          var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
          return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + escapedSeparator + "30)|((0[13578]|1[02])" + escapedSeparator + "31)");
        },
        val1pre: new RegExp("[01]"),
        val1: new RegExp("0[1-9]|1[012]")
      },
      leapday: "02/29/",
      onKeyDown: function(e, buffer, caretPos, opts) {
        var $input = $(this);
        if (e.ctrlKey && e.keyCode === Inputmask.keyCode.RIGHT) {
          var today = new Date();
          $input.val((today.getMonth() + 1).toString() + today.getDate().toString() + today.getFullYear().toString()),
            $input.trigger("setvalue");
        }
      }
    },
    "hh:mm t": {
      mask: "h:s t\\m",
      placeholder: "hh:mm xm",
      alias: "datetime",
      hourFormat: "12"
    },
    "h:s t": {
      mask: "h:s t\\m",
      placeholder: "hh:mm xm",
      alias: "datetime",
      hourFormat: "12"
    },
    "hh:mm:ss": {
      mask: "h:s:s",
      placeholder: "hh:mm:ss",
      alias: "datetime",
      autoUnmask: !1
    },
    "hh:mm": {
      mask: "h:s",
      placeholder: "hh:mm",
      alias: "datetime",
      autoUnmask: !1
    },
    date: {
      alias: "dd/mm/yyyy"
    },
    "mm/yyyy": {
      mask: "1/y",
      placeholder: "mm/yyyy",
      leapday: "donotuse",
      separator: "/",
      alias: "mm/dd/yyyy"
    },
    shamsi: {
      regex: {
        val2pre: function(separator) {
          var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
          return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "[0-3])");
        },
        val2: function(separator) {
          var escapedSeparator = Inputmask.escapeRegex.call(this, separator);
          return new RegExp("((0[1-9]|1[012])" + escapedSeparator + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + escapedSeparator + "30)|((0[1-6])" + escapedSeparator + "31)");
        },
        val1pre: new RegExp("[01]"),
        val1: new RegExp("0[1-9]|1[012]")
      },
      yearrange: {
        minyear: 1300,
        maxyear: 1499
      },
      mask: "y/1/2",
      leapday: "/12/30",
      placeholder: "yyyy/mm/dd",
      alias: "mm/dd/yyyy",
      clearIncomplete: !0
    }
  }), Inputmask;
}(jQuery, Inputmask),
function($, Inputmask) {
  return Inputmask.extendDefinitions({
    A: {
      validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
      cardinality: 1,
      casing: "upper"
    },
    "&": {
      validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
      cardinality: 1,
      casing: "upper"
    },
    "#": {
      validator: "[0-9A-Fa-f]",
      cardinality: 1,
      casing: "upper"
    }
  }), Inputmask.extendAliases({
    url: {
      definitions: {
        i: {
          validator: ".",
          cardinality: 1
        }
      },
      mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
      insertMode: !1,
      autoUnmask: !1,
      inputmode: "url"
    },
    ip: {
      mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
      definitions: {
        i: {
          validator: function(chrs, maskset, pos, strict, opts) {
            return pos - 1 > -1 && "." !== maskset.buffer[pos - 1] ? (chrs = maskset.buffer[pos - 1] + chrs,
                chrs = pos - 2 > -1 && "." !== maskset.buffer[pos - 2] ? maskset.buffer[pos - 2] + chrs : "0" + chrs) : chrs = "00" + chrs,
              new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(chrs);
          },
          cardinality: 1
        }
      },
      onUnMask: function(maskedValue, unmaskedValue, opts) {
        return maskedValue;
      },
      inputmode: "numeric"
    },
    email: {
      mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
      greedy: !1,
      onBeforePaste: function(pastedValue, opts) {
        return pastedValue = pastedValue.toLowerCase(), pastedValue.replace("mailto:", "");
      },
      definitions: {
        "*": {
          validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
          cardinality: 1,
          casing: "lower"
        },
        "-": {
          validator: "[0-9A-Za-z-]",
          cardinality: 1,
          casing: "lower"
        }
      },
      onUnMask: function(maskedValue, unmaskedValue, opts) {
        return maskedValue;
      },
      inputmode: "email"
    },
    mac: {
      mask: "##:##:##:##:##:##"
    },
    vin: {
      mask: "V{13}9{4}",
      definitions: {
        V: {
          validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
          cardinality: 1,
          casing: "upper"
        }
      },
      clearIncomplete: !0,
      autoUnmask: !0
    }
  }), Inputmask;
}(jQuery, Inputmask),
function($, Inputmask) {
  return Inputmask.extendAliases({
    numeric: {
      mask: function(opts) {
        function autoEscape(txt) {
          for (var escapedTxt = "", i = 0; i < txt.length; i++) escapedTxt += opts.definitions[txt.charAt(i)] || opts.optionalmarker.start === txt.charAt(i) || opts.optionalmarker.end === txt.charAt(i) || opts.quantifiermarker.start === txt.charAt(i) || opts.quantifiermarker.end === txt.charAt(i) || opts.groupmarker.start === txt.charAt(i) || opts.groupmarker.end === txt.charAt(i) || opts.alternatormarker === txt.charAt(i) ? "\\" + txt.charAt(i) : txt.charAt(i);
          return escapedTxt;
        }
        if (0 !== opts.repeat && isNaN(opts.integerDigits) && (opts.integerDigits = opts.repeat),
          opts.repeat = 0, opts.groupSeparator === opts.radixPoint && ("." === opts.radixPoint ? opts.groupSeparator = "," : "," === opts.radixPoint ? opts.groupSeparator = "." : opts.groupSeparator = ""),
          " " === opts.groupSeparator && (opts.skipOptionalPartCharacter = void 0), opts.autoGroup = opts.autoGroup && "" !== opts.groupSeparator,
          opts.autoGroup && ("string" == typeof opts.groupSize && isFinite(opts.groupSize) && (opts.groupSize = parseInt(opts.groupSize)),
            isFinite(opts.integerDigits))) {
          var seps = Math.floor(opts.integerDigits / opts.groupSize),
            mod = opts.integerDigits % opts.groupSize;
          opts.integerDigits = parseInt(opts.integerDigits) + (0 === mod ? seps - 1 : seps),
            opts.integerDigits < 1 && (opts.integerDigits = "*");
        }
        opts.placeholder.length > 1 && (opts.placeholder = opts.placeholder.charAt(0)),
          "radixFocus" === opts.positionCaretOnClick && "" === opts.placeholder && opts.integerOptional === !1 && (opts.positionCaretOnClick = "lvp"),
          opts.definitions[";"] = opts.definitions["~"], opts.definitions[";"].definitionSymbol = "~",
          opts.numericInput === !0 && (opts.positionCaretOnClick = "radixFocus" === opts.positionCaretOnClick ? "lvp" : opts.positionCaretOnClick,
            opts.digitsOptional = !1, isNaN(opts.digits) && (opts.digits = 2), opts.decimalProtect = !1);
        var mask = "[+]";
        if (mask += autoEscape(opts.prefix), mask += opts.integerOptional === !0 ? "~{1," + opts.integerDigits + "}" : "~{" + opts.integerDigits + "}",
          void 0 !== opts.digits) {
          opts.decimalProtect && (opts.radixPointDefinitionSymbol = ":");
          var dq = opts.digits.toString().split(",");
          isFinite(dq[0] && dq[1] && isFinite(dq[1])) ? mask += (opts.decimalProtect ? ":" : opts.radixPoint) + ";{" + opts.digits + "}" : (isNaN(opts.digits) || parseInt(opts.digits) > 0) && (mask += opts.digitsOptional ? "[" + (opts.decimalProtect ? ":" : opts.radixPoint) + ";{1," + opts.digits + "}]" : (opts.decimalProtect ? ":" : opts.radixPoint) + ";{" + opts.digits + "}");
        }
        return mask += autoEscape(opts.suffix), mask += "[-]", opts.greedy = !1, null !== opts.min && (opts.min = opts.min.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""),
            "," === opts.radixPoint && (opts.min = opts.min.replace(opts.radixPoint, "."))),
          null !== opts.max && (opts.max = opts.max.toString().replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""),
            "," === opts.radixPoint && (opts.max = opts.max.replace(opts.radixPoint, "."))),
          mask;
      },
      placeholder: "",
      greedy: !1,
      digits: "*",
      digitsOptional: !0,
      radixPoint: ".",
      positionCaretOnClick: "radixFocus",
      groupSize: 3,
      groupSeparator: "",
      autoGroup: !1,
      allowPlus: !0,
      allowMinus: !0,
      negationSymbol: {
        front: "-",
        back: ""
      },
      integerDigits: "+",
      integerOptional: !0,
      prefix: "",
      suffix: "",
      rightAlign: !0,
      decimalProtect: !0,
      min: null,
      max: null,
      step: 1,
      insertMode: !0,
      autoUnmask: !1,
      unmaskAsNumber: !1,
      inputmode: "numeric",
      postFormat: function(buffer, pos, opts) {
        opts.numericInput === !0 && (buffer = buffer.reverse(), isFinite(pos) && (pos = buffer.join("").length - pos - 1));
        var i, l;
        pos = pos >= buffer.length ? buffer.length - 1 : pos < 0 ? 0 : pos;
        var charAtPos = buffer[pos],
          cbuf = buffer.slice();
        charAtPos === opts.groupSeparator && (cbuf.splice(pos--, 1), charAtPos = cbuf[pos]);
        var isNegative = cbuf.join("").match(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)));
        isNegative = null !== isNegative && 1 === isNegative.length, pos > (isNegative ? opts.negationSymbol.front.length : 0) + opts.prefix.length && pos < cbuf.length - opts.suffix.length && (cbuf[pos] = "!");
        var bufVal = cbuf.join(""),
          bufValOrigin = cbuf.join();
        if (isNegative && (bufVal = bufVal.replace(new RegExp("^" + Inputmask.escapeRegex(opts.negationSymbol.front)), ""),
            bufVal = bufVal.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), "")),
          bufVal = bufVal.replace(new RegExp(Inputmask.escapeRegex(opts.suffix) + "$"), ""),
          bufVal = bufVal.replace(new RegExp("^" + Inputmask.escapeRegex(opts.prefix)), ""),
          bufVal.length > 0 && opts.autoGroup || bufVal.indexOf(opts.groupSeparator) !== -1) {
          var escapedGroupSeparator = Inputmask.escapeRegex(opts.groupSeparator);
          bufVal = bufVal.replace(new RegExp(escapedGroupSeparator, "g"), "");
          var radixSplit = bufVal.split(charAtPos === opts.radixPoint ? "!" : opts.radixPoint);
          if (bufVal = "" === opts.radixPoint ? bufVal : radixSplit[0], charAtPos !== opts.negationSymbol.front && (bufVal = bufVal.replace("!", "?")),
            bufVal.length > opts.groupSize)
            for (var reg = new RegExp("([-+]?[\\d?]+)([\\d?]{" + opts.groupSize + "})"); reg.test(bufVal) && "" !== opts.groupSeparator;) bufVal = bufVal.replace(reg, "$1" + opts.groupSeparator + "$2"),
              bufVal = bufVal.replace(opts.groupSeparator + opts.groupSeparator, opts.groupSeparator);
          bufVal = bufVal.replace("?", "!"), "" !== opts.radixPoint && radixSplit.length > 1 && (bufVal += (charAtPos === opts.radixPoint ? "!" : opts.radixPoint) + radixSplit[1]);
        }
        bufVal = opts.prefix + bufVal + opts.suffix, isNegative && (bufVal = opts.negationSymbol.front + bufVal + opts.negationSymbol.back);
        var needsRefresh = bufValOrigin !== bufVal.split("").join(),
          newPos = $.inArray("!", bufVal);
        if (newPos === -1 && (newPos = pos), needsRefresh) {
          for (buffer.length = bufVal.length, i = 0, l = bufVal.length; i < l; i++) buffer[i] = bufVal.charAt(i);
          buffer[newPos] = charAtPos;
        }
        return newPos = opts.numericInput && isFinite(pos) ? buffer.join("").length - newPos - 1 : newPos,
          opts.numericInput && (buffer = buffer.reverse(), $.inArray(opts.radixPoint, buffer) < newPos && buffer.join("").length - opts.suffix.length !== newPos && (newPos -= 1)), {
            pos: newPos,
            refreshFromBuffer: needsRefresh,
            buffer: buffer,
            isNegative: isNegative
          };
      },
      onBeforeWrite: function(e, buffer, caretPos, opts) {
        var rslt;
        if (e && ("blur" === e.type || "checkval" === e.type || "keydown" === e.type)) {
          var maskedValue = opts.numericInput ? buffer.slice().reverse().join("") : buffer.join(""),
            processValue = maskedValue.replace(opts.prefix, "");
          processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""),
            "," === opts.radixPoint && (processValue = processValue.replace(opts.radixPoint, "."));
          var isNegative = processValue.match(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"));
          if (isNegative = null !== isNegative && 1 === isNegative.length, processValue = processValue.replace(new RegExp("[-" + Inputmask.escapeRegex(opts.negationSymbol.front) + "]", "g"), ""),
            processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.negationSymbol.back) + "$"), ""),
            isNaN(opts.placeholder) && (processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.placeholder), "g"), "")),
            processValue = processValue === opts.negationSymbol.front ? processValue + "0" : processValue,
            "" !== processValue && isFinite(processValue)) {
            var floatValue = parseFloat(processValue),
              signedFloatValue = isNegative ? floatValue * -1 : floatValue;
            if (null !== opts.min && isFinite(opts.min) && signedFloatValue < parseFloat(opts.min) ? (floatValue = Math.abs(opts.min),
                isNegative = opts.min < 0, maskedValue = void 0) : null !== opts.max && isFinite(opts.max) && signedFloatValue > parseFloat(opts.max) && (floatValue = Math.abs(opts.max),
                isNegative = opts.max < 0, maskedValue = void 0), processValue = floatValue.toString().replace(".", opts.radixPoint).split(""),
              isFinite(opts.digits)) {
              var radixPosition = $.inArray(opts.radixPoint, processValue),
                rpb = $.inArray(opts.radixPoint, maskedValue);
              radixPosition === -1 && (processValue.push(opts.radixPoint), radixPosition = processValue.length - 1);
              for (var i = 1; i <= opts.digits; i++) opts.digitsOptional || void 0 !== processValue[radixPosition + i] && processValue[radixPosition + i] !== opts.placeholder.charAt(0) ? rpb !== -1 && void 0 !== maskedValue[rpb + i] && (processValue[radixPosition + i] = processValue[radixPosition + i] || maskedValue[rpb + i]) : processValue[radixPosition + i] = "0";
              processValue[processValue.length - 1] === opts.radixPoint && delete processValue[processValue.length - 1];
            }
            if (floatValue.toString() !== processValue && floatValue.toString() + "." !== processValue || isNegative) return processValue = (opts.prefix + processValue.join("")).split(""), !isNegative || 0 === floatValue && "blur" === e.type || (processValue.unshift(opts.negationSymbol.front),
                processValue.push(opts.negationSymbol.back)), opts.numericInput && (processValue = processValue.reverse()),
              rslt = opts.postFormat(processValue, opts.numericInput ? caretPos : caretPos - 1, opts),
              rslt.buffer && (rslt.refreshFromBuffer = rslt.buffer.join("") !== buffer.join("")),
              rslt;
          }
        }
        if (opts.autoGroup) return rslt = opts.postFormat(buffer, opts.numericInput ? caretPos : caretPos - 1, opts),
          rslt.caret = caretPos < (rslt.isNegative ? opts.negationSymbol.front.length : 0) + opts.prefix.length || caretPos > rslt.buffer.length - (rslt.isNegative ? opts.negationSymbol.back.length : 0) ? rslt.pos : rslt.pos + 1,
          rslt;
      },
      regex: {
        integerPart: function(opts) {
          return new RegExp("[" + Inputmask.escapeRegex(opts.negationSymbol.front) + "+]?\\d+");
        },
        integerNPart: function(opts) {
          return new RegExp("[\\d" + Inputmask.escapeRegex(opts.groupSeparator) + Inputmask.escapeRegex(opts.placeholder.charAt(0)) + "]+");
        }
      },
      signHandler: function(chrs, maskset, pos, strict, opts) {
        if (!strict && opts.allowMinus && "-" === chrs || opts.allowPlus && "+" === chrs) {
          var matchRslt = maskset.buffer.join("").match(opts.regex.integerPart(opts));
          if (matchRslt && matchRslt[0].length > 0) return maskset.buffer[matchRslt.index] === ("-" === chrs ? "+" : opts.negationSymbol.front) ? "-" === chrs ? "" !== opts.negationSymbol.back ? {
            pos: 0,
            c: opts.negationSymbol.front,
            remove: 0,
            caret: pos,
            insert: {
              pos: maskset.buffer.length - 1,
              c: opts.negationSymbol.back
            }
          } : {
            pos: 0,
            c: opts.negationSymbol.front,
            remove: 0,
            caret: pos
          } : "" !== opts.negationSymbol.back ? {
            pos: 0,
            c: "+",
            remove: [0, maskset.buffer.length - 1],
            caret: pos
          } : {
            pos: 0,
            c: "+",
            remove: 0,
            caret: pos
          } : maskset.buffer[0] === ("-" === chrs ? opts.negationSymbol.front : "+") ? "-" === chrs && "" !== opts.negationSymbol.back ? {
            remove: [0, maskset.buffer.length - 1],
            caret: pos - 1
          } : {
            remove: 0,
            caret: pos - 1
          } : "-" === chrs ? "" !== opts.negationSymbol.back ? {
            pos: 0,
            c: opts.negationSymbol.front,
            caret: pos + 1,
            insert: {
              pos: maskset.buffer.length,
              c: opts.negationSymbol.back
            }
          } : {
            pos: 0,
            c: opts.negationSymbol.front,
            caret: pos + 1
          } : {
            pos: 0,
            c: chrs,
            caret: pos + 1
          };
        }
        return !1;
      },
      radixHandler: function(chrs, maskset, pos, strict, opts) {
        if (!strict && opts.numericInput !== !0 && chrs === opts.radixPoint && void 0 !== opts.digits && (isNaN(opts.digits) || parseInt(opts.digits) > 0)) {
          var radixPos = $.inArray(opts.radixPoint, maskset.buffer),
            integerValue = maskset.buffer.join("").match(opts.regex.integerPart(opts));
          if (radixPos !== -1 && maskset.validPositions[radixPos]) return maskset.validPositions[radixPos - 1] ? {
            caret: radixPos + 1
          } : {
            pos: integerValue.index,
            c: integerValue[0],
            caret: radixPos + 1
          };
          if (!integerValue || "0" === integerValue[0] && integerValue.index + 1 !== pos) return maskset.buffer[integerValue ? integerValue.index : pos] = "0", {
            pos: (integerValue ? integerValue.index : pos) + 1,
            c: opts.radixPoint
          };
        }
        return !1;
      },
      leadingZeroHandler: function(chrs, maskset, pos, strict, opts, isSelection) {
        if (!strict) {
          var buffer = maskset.buffer.slice("");
          if (buffer.splice(0, opts.prefix.length), buffer.splice(buffer.length - opts.suffix.length, opts.suffix.length),
            opts.numericInput === !0) {
            var buffer = buffer.reverse(),
              bufferChar = buffer[0];
            if ("0" === bufferChar && void 0 === maskset.validPositions[pos - 1]) return {
              pos: pos,
              remove: buffer.length - 1
            };
          } else {
            pos -= opts.prefix.length;
            var radixPosition = $.inArray(opts.radixPoint, buffer),
              matchRslt = buffer.slice(0, radixPosition !== -1 ? radixPosition : void 0).join("").match(opts.regex.integerNPart(opts));
            if (matchRslt && (radixPosition === -1 || pos <= radixPosition)) {
              var decimalPart = radixPosition === -1 ? 0 : parseInt(buffer.slice(radixPosition + 1).join(""));
              if (0 === matchRslt[0].indexOf("" !== opts.placeholder ? opts.placeholder.charAt(0) : "0") && (matchRslt.index + 1 === pos || isSelection !== !0 && 0 === decimalPart)) return maskset.buffer.splice(matchRslt.index + opts.prefix.length, 1), {
                pos: matchRslt.index + opts.prefix.length,
                remove: matchRslt.index + opts.prefix.length
              };
              if ("0" === chrs && pos <= matchRslt.index && matchRslt[0] !== opts.groupSeparator) return !1;
            }
          }
        }
        return !0;
      },
      definitions: {
        "~": {
          validator: function(chrs, maskset, pos, strict, opts, isSelection) {
            var isValid = opts.signHandler(chrs, maskset, pos, strict, opts);
            if (!isValid && (isValid = opts.radixHandler(chrs, maskset, pos, strict, opts), !isValid && (isValid = strict ? new RegExp("[0-9" + Inputmask.escapeRegex(opts.groupSeparator) + "]").test(chrs) : new RegExp("[0-9]").test(chrs),
                isValid === !0 && (isValid = opts.leadingZeroHandler(chrs, maskset, pos, strict, opts, isSelection),
                  isValid === !0)))) {
              var radixPosition = $.inArray(opts.radixPoint, maskset.buffer);
              isValid = radixPosition !== -1 && (opts.digitsOptional === !1 || maskset.validPositions[pos]) && opts.numericInput !== !0 && pos > radixPosition && !strict ? {
                pos: pos,
                remove: pos
              } : {
                pos: pos
              };
            }
            return isValid;
          },
          cardinality: 1
        },
        "+": {
          validator: function(chrs, maskset, pos, strict, opts) {
            var isValid = opts.signHandler(chrs, maskset, pos, strict, opts);
            return !isValid && (strict && opts.allowMinus && chrs === opts.negationSymbol.front || opts.allowMinus && "-" === chrs || opts.allowPlus && "+" === chrs) && (isValid = !(!strict && "-" === chrs) || ("" !== opts.negationSymbol.back ? {
              pos: pos,
              c: "-" === chrs ? opts.negationSymbol.front : "+",
              caret: pos + 1,
              insert: {
                pos: maskset.buffer.length,
                c: opts.negationSymbol.back
              }
            } : {
              pos: pos,
              c: "-" === chrs ? opts.negationSymbol.front : "+",
              caret: pos + 1
            })), isValid;
          },
          cardinality: 1,
          placeholder: ""
        },
        "-": {
          validator: function(chrs, maskset, pos, strict, opts) {
            var isValid = opts.signHandler(chrs, maskset, pos, strict, opts);
            return !isValid && strict && opts.allowMinus && chrs === opts.negationSymbol.back && (isValid = !0),
              isValid;
          },
          cardinality: 1,
          placeholder: ""
        },
        ":": {
          validator: function(chrs, maskset, pos, strict, opts) {
            var isValid = opts.signHandler(chrs, maskset, pos, strict, opts);
            if (!isValid) {
              var radix = "[" + Inputmask.escapeRegex(opts.radixPoint) + "]";
              isValid = new RegExp(radix).test(chrs), isValid && maskset.validPositions[pos] && maskset.validPositions[pos].match.placeholder === opts.radixPoint && (isValid = {
                caret: pos + 1
              });
            }
            return isValid;
          },
          cardinality: 1,
          placeholder: function(opts) {
            return opts.radixPoint;
          }
        }
      },
      onUnMask: function(maskedValue, unmaskedValue, opts) {
        if ("" === unmaskedValue && opts.nullable === !0) return unmaskedValue;
        var processValue = maskedValue.replace(opts.prefix, "");
        return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""),
          opts.unmaskAsNumber ? ("" !== opts.radixPoint && processValue.indexOf(opts.radixPoint) !== -1 && (processValue = processValue.replace(Inputmask.escapeRegex.call(this, opts.radixPoint), ".")),
            Number(processValue)) : processValue;
      },
      isComplete: function(buffer, opts) {
        var maskedValue = buffer.join(""),
          bufClone = buffer.slice();
        if (opts.postFormat(bufClone, 0, opts), bufClone.join("") !== maskedValue) return !1;
        var processValue = maskedValue.replace(opts.prefix, "");
        return processValue = processValue.replace(opts.suffix, ""), processValue = processValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), ""),
          "," === opts.radixPoint && (processValue = processValue.replace(Inputmask.escapeRegex(opts.radixPoint), ".")),
          isFinite(processValue);
      },
      onBeforeMask: function(initialValue, opts) {
        if (opts.numericInput === !0 && (initialValue = initialValue.split("").reverse().join("")),
          "" !== opts.radixPoint && isFinite(initialValue)) initialValue = initialValue.toString().replace(".", opts.radixPoint);
        else {
          var kommaMatches = initialValue.match(/,/g),
            dotMatches = initialValue.match(/\./g);
          dotMatches && kommaMatches ? dotMatches.length > kommaMatches.length ? (initialValue = initialValue.replace(/\./g, ""),
            initialValue = initialValue.replace(",", opts.radixPoint)) : kommaMatches.length > dotMatches.length ? (initialValue = initialValue.replace(/,/g, ""),
            initialValue = initialValue.replace(".", opts.radixPoint)) : initialValue = initialValue.indexOf(".") < initialValue.indexOf(",") ? initialValue.replace(/\./g, "") : initialValue = initialValue.replace(/,/g, "") : initialValue = initialValue.replace(new RegExp(Inputmask.escapeRegex(opts.groupSeparator), "g"), "");
        }
        if (0 === opts.digits && (initialValue.indexOf(".") !== -1 ? initialValue = initialValue.substring(0, initialValue.indexOf(".")) : initialValue.indexOf(",") !== -1 && (initialValue = initialValue.substring(0, initialValue.indexOf(",")))),
          "" !== opts.radixPoint && isFinite(opts.digits) && initialValue.indexOf(opts.radixPoint) !== -1) {
          var valueParts = initialValue.split(opts.radixPoint),
            decPart = valueParts[1].match(new RegExp("\\d*"))[0];
          if (parseInt(opts.digits) < decPart.toString().length) {
            var digitsFactor = Math.pow(10, parseInt(opts.digits));
            initialValue = initialValue.replace(Inputmask.escapeRegex(opts.radixPoint), "."),
              initialValue = Math.round(parseFloat(initialValue) * digitsFactor) / digitsFactor,
              initialValue = initialValue.toString().replace(".", opts.radixPoint);
          }
        }
        return opts.numericInput === !0 && (initialValue = initialValue.split("").reverse().join("")),
          initialValue.toString();
      },
      canClearPosition: function(maskset, position, lvp, strict, opts) {
        var positionInput = maskset.validPositions[position].input,
          canClear = positionInput !== opts.radixPoint || null !== maskset.validPositions[position].match.fn && opts.decimalProtect === !1 || isFinite(positionInput) || position === lvp || positionInput === opts.groupSeparator || positionInput === opts.negationSymbol.front || positionInput === opts.negationSymbol.back;
        return canClear;
      },
      onKeyDown: function(e, buffer, caretPos, opts) {
        var $input = $(this);
        if (e.ctrlKey) switch (e.keyCode) {
          case Inputmask.keyCode.UP:
            $input.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(opts.step)), $input.trigger("setvalue");
            break;

          case Inputmask.keyCode.DOWN:
            $input.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(opts.step)), $input.trigger("setvalue");
        }
      }
    },
    currency: {
      prefix: "$ ",
      groupSeparator: ",",
      alias: "numeric",
      placeholder: "0",
      autoGroup: !0,
      digits: 2,
      digitsOptional: !1,
      clearMaskOnLostFocus: !1
    },
    decimal: {
      alias: "numeric"
    },
    integer: {
      alias: "numeric",
      digits: 0,
      radixPoint: ""
    },
    percentage: {
      alias: "numeric",
      digits: 2,
      radixPoint: ".",
      placeholder: "0",
      autoGroup: !1,
      min: 0,
      max: 100,
      suffix: " %",
      allowPlus: !1,
      allowMinus: !1
    }
  }), Inputmask;
}(jQuery, Inputmask),
function($, Inputmask) {
  function maskSort(a, b) {
    var maska = (a.mask || a).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
      maskb = (b.mask || b).replace(/#/g, "9").replace(/\)/, "9").replace(/[+()#-]/g, ""),
      maskas = (a.mask || a).split("#")[0],
      maskbs = (b.mask || b).split("#")[0];
    return 0 === maskbs.indexOf(maskas) ? -1 : 0 === maskas.indexOf(maskbs) ? 1 : maska.localeCompare(maskb);
  }
  var analyseMaskBase = Inputmask.analyseMask;
  return Inputmask.analyseMask = function(mask, opts) {
    function reduceVariations(masks, previousVariation, previousmaskGroup) {
      previousVariation = previousVariation || "", previousmaskGroup = previousmaskGroup || maskGroups,
        "" !== previousVariation && (previousmaskGroup[previousVariation] = {});
      for (var variation = "", maskGroup = previousmaskGroup[previousVariation] || previousmaskGroup, i = masks.length - 1; i >= 0; i--) mask = masks[i].mask || masks[i],
        variation = mask.substr(0, 1), maskGroup[variation] = maskGroup[variation] || [],
        maskGroup[variation].unshift(mask.substr(1)), masks.splice(i, 1);
      for (var ndx in maskGroup) maskGroup[ndx].length > 1e3 && reduceVariations(maskGroup[ndx].slice(), ndx, maskGroup);
    }

    function rebuild(maskGroup) {
      var mask = "",
        submasks = [];
      for (var ndx in maskGroup) $.isArray(maskGroup[ndx]) ? 1 === maskGroup[ndx].length ? submasks.push(ndx + maskGroup[ndx]) : submasks.push(ndx + opts.groupmarker.start + maskGroup[ndx].join(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start) + opts.groupmarker.end) : submasks.push(ndx + rebuild(maskGroup[ndx]));
      return mask += 1 === submasks.length ? submasks[0] : opts.groupmarker.start + submasks.join(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start) + opts.groupmarker.end;
    }
    var maskGroups = {};
    opts.phoneCodes && opts.phoneCodes.length > 500 && (mask = mask.substr(1, mask.length - 2),
      reduceVariations(mask.split(opts.groupmarker.end + opts.alternatormarker + opts.groupmarker.start)),
      mask = rebuild(maskGroups)), console.log(mask);
    var mt = analyseMaskBase.call(this, mask, opts);
    return mt;
  }, Inputmask.extendAliases({
    abstractphone: {
      groupmarker: {
        start: "<",
        end: ">"
      },
      countrycode: "",
      phoneCodes: [],
      mask: function(opts) {
        return opts.definitions = {
          "#": opts.definitions[9]
        }, opts.phoneCodes.sort(maskSort);
      },
      keepStatic: !0,
      onBeforeMask: function(value, opts) {
        var processedValue = value.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
        return (processedValue.indexOf(opts.countrycode) > 1 || processedValue.indexOf(opts.countrycode) === -1) && (processedValue = "+" + opts.countrycode + processedValue),
          processedValue;
      },
      onUnMask: function(maskedValue, unmaskedValue, opts) {
        return unmaskedValue;
      },
      inputmode: "tel"
    }
  }), Inputmask;
}(jQuery, Inputmask),
function($, Inputmask) {
  return Inputmask.extendAliases({
    Regex: {
      mask: "r",
      greedy: !1,
      repeat: "*",
      regex: null,
      regexTokens: null,
      tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
      quantifierFilter: /[0-9]+[^,]/,
      isComplete: function(buffer, opts) {
        return new RegExp(opts.regex).test(buffer.join(""));
      },
      definitions: {
        r: {
          validator: function(chrs, maskset, pos, strict, opts) {
            function RegexToken(isGroup, isQuantifier) {
              this.matches = [], this.isGroup = isGroup || !1, this.isQuantifier = isQuantifier || !1,
                this.quantifier = {
                  min: 1,
                  max: 1
                }, this.repeaterPart = void 0;
            }

            function analyseRegex() {
              var match, m, currentToken = new RegexToken(),
                opengroups = [];
              for (opts.regexTokens = []; match = opts.tokenizer.exec(opts.regex);) switch (m = match[0],
                m.charAt(0)) {
                case "(":
                  opengroups.push(new RegexToken((!0)));
                  break;

                case ")":
                  groupToken = opengroups.pop(), opengroups.length > 0 ? opengroups[opengroups.length - 1].matches.push(groupToken) : currentToken.matches.push(groupToken);
                  break;

                case "{":
                case "+":
                case "*":
                  var quantifierToken = new RegexToken((!1), (!0));
                  m = m.replace(/[{}]/g, "");
                  var mq = m.split(","),
                    mq0 = isNaN(mq[0]) ? mq[0] : parseInt(mq[0]),
                    mq1 = 1 === mq.length ? mq0 : isNaN(mq[1]) ? mq[1] : parseInt(mq[1]);
                  if (quantifierToken.quantifier = {
                      min: mq0,
                      max: mq1
                    }, opengroups.length > 0) {
                    var matches = opengroups[opengroups.length - 1].matches;
                    match = matches.pop(), match.isGroup || (groupToken = new RegexToken((!0)), groupToken.matches.push(match),
                      match = groupToken), matches.push(match), matches.push(quantifierToken);
                  } else match = currentToken.matches.pop(), match.isGroup || (groupToken = new RegexToken((!0)),
                      groupToken.matches.push(match), match = groupToken), currentToken.matches.push(match),
                    currentToken.matches.push(quantifierToken);
                  break;

                default:
                  opengroups.length > 0 ? opengroups[opengroups.length - 1].matches.push(m) : currentToken.matches.push(m);
              }
              currentToken.matches.length > 0 && opts.regexTokens.push(currentToken);
            }

            function validateRegexToken(token, fromGroup) {
              var isvalid = !1;
              fromGroup && (regexPart += "(", openGroupCount++);
              for (var mndx = 0; mndx < token.matches.length; mndx++) {
                var matchToken = token.matches[mndx];
                if (matchToken.isGroup === !0) isvalid = validateRegexToken(matchToken, !0);
                else if (matchToken.isQuantifier === !0) {
                  var crrntndx = $.inArray(matchToken, token.matches),
                    matchGroup = token.matches[crrntndx - 1],
                    regexPartBak = regexPart;
                  if (isNaN(matchToken.quantifier.max)) {
                    for (; matchToken.repeaterPart && matchToken.repeaterPart !== regexPart && matchToken.repeaterPart.length > regexPart.length && !(isvalid = validateRegexToken(matchGroup, !0)););
                    isvalid = isvalid || validateRegexToken(matchGroup, !0), isvalid && (matchToken.repeaterPart = regexPart),
                      regexPart = regexPartBak + matchToken.quantifier.max;
                  } else {
                    for (var i = 0, qm = matchToken.quantifier.max - 1; i < qm && !(isvalid = validateRegexToken(matchGroup, !0)); i++);
                    regexPart = regexPartBak + "{" + matchToken.quantifier.min + "," + matchToken.quantifier.max + "}";
                  }
                } else if (void 0 !== matchToken.matches)
                  for (var k = 0; k < matchToken.length && !(isvalid = validateRegexToken(matchToken[k], fromGroup)); k++);
                else {
                  var testExp;
                  if ("[" == matchToken.charAt(0)) {
                    testExp = regexPart, testExp += matchToken;
                    for (var j = 0; j < openGroupCount; j++) testExp += ")";
                    var exp = new RegExp("^(" + testExp + ")$");
                    isvalid = exp.test(bufferStr);
                  } else
                    for (var l = 0, tl = matchToken.length; l < tl; l++)
                      if ("\\" !== matchToken.charAt(l)) {
                        testExp = regexPart, testExp += matchToken.substr(0, l + 1), testExp = testExp.replace(/\|$/, "");
                        for (var j = 0; j < openGroupCount; j++) testExp += ")";
                        var exp = new RegExp("^(" + testExp + ")$");
                        if (isvalid = exp.test(bufferStr)) break;
                      }
                  regexPart += matchToken;
                }
                if (isvalid) break;
              }
              return fromGroup && (regexPart += ")", openGroupCount--), isvalid;
            }
            var bufferStr, groupToken, cbuffer = maskset.buffer.slice(),
              regexPart = "",
              isValid = !1,
              openGroupCount = 0;
            null === opts.regexTokens && analyseRegex(), cbuffer.splice(pos, 0, chrs), bufferStr = cbuffer.join("");
            for (var i = 0; i < opts.regexTokens.length; i++) {
              var regexToken = opts.regexTokens[i];
              if (isValid = validateRegexToken(regexToken, regexToken.isGroup)) break;
            }
            return isValid;
          },
          cardinality: 1
        }
      }
    }
  }), Inputmask;
}(jQuery, Inputmask);
/*
 Input Mask plugin extensions
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 -  Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 0.0.0-dev

 Belgian Phone extension.
 */
(function(factory) {
    if (typeof define === "function" && define.amd) {
      define(["inputmask"], factory);
    } else if (typeof exports === "object") {
      module.exports = factory(require("./inputmask"));
    } else {
      factory(window.Inputmask);
    }
  }
  (function(Inputmask) {
    Inputmask.extendAliases({
      "phone": {
        alias: "abstractphone",
        phoneCodes: [{
          "mask": "+247-####",
          "cc": "AC",
          "cd": "Ascension",
          "desc_en": "",
          "name_ru": "Остров Вознесения",
          "desc_ru": ""
        }, {
          "mask": "+376-###-###",
          "cc": "AD",
          "cd": "Andorra",
          "desc_en": "",
          "name_ru": "Андорра",
          "desc_ru": ""
        }, {
          "mask": "+971-5#-###-####",
          "cc": "AE",
          "cd": "United Arab Emirates",
          "desc_en": "mobile",
          "name_ru": "Объединенные Арабские Эмираты",
          "desc_ru": "мобильные"
        }, {
          "mask": "+971-#-###-####",
          "cc": "AE",
          "cd": "United Arab Emirates",
          "desc_en": "",
          "name_ru": "Объединенные Арабские Эмираты",
          "desc_ru": ""
        }, {
          "mask": "+93-##-###-####",
          "cc": "AF",
          "cd": "Afghanistan",
          "desc_en": "",
          "name_ru": "Афганистан",
          "desc_ru": ""
        }, {
          "mask": "+1(268)###-####",
          "cc": "AG",
          "cd": "Antigua & Barbuda",
          "desc_en": "",
          "name_ru": "Антигуа и Барбуда",
          "desc_ru": ""
        }, {
          "mask": "+1(264)###-####",
          "cc": "AI",
          "cd": "Anguilla",
          "desc_en": "",
          "name_ru": "Ангилья",
          "desc_ru": ""
        }, {
          "mask": "+355(###)###-###",
          "cc": "AL",
          "cd": "Albania",
          "desc_en": "",
          "name_ru": "Албания",
          "desc_ru": ""
        }, {
          "mask": "+374-##-###-###",
          "cc": "AM",
          "cd": "Armenia",
          "desc_en": "",
          "name_ru": "Армения",
          "desc_ru": ""
        }, {
          "mask": "+599-###-####",
          "cc": "AN",
          "cd": "Caribbean Netherlands",
          "desc_en": "",
          "name_ru": "Карибские Нидерланды",
          "desc_ru": ""
        }, {
          "mask": "+599-###-####",
          "cc": "AN",
          "cd": "Netherlands Antilles",
          "desc_en": "",
          "name_ru": "Нидерландские Антильские острова",
          "desc_ru": ""
        }, {
          "mask": "+599-9###-####",
          "cc": "AN",
          "cd": "Netherlands Antilles",
          "desc_en": "Curacao",
          "name_ru": "Нидерландские Антильские острова",
          "desc_ru": "Кюрасао"
        }, {
          "mask": "+244(###)###-###",
          "cc": "AO",
          "cd": "Angola",
          "desc_en": "",
          "name_ru": "Ангола",
          "desc_ru": ""
        }, {
          "mask": "+672-1##-###",
          "cc": "AQ",
          "cd": "Australian bases in Antarctica",
          "desc_en": "",
          "name_ru": "Австралийская антарктическая база",
          "desc_ru": ""
        }, {
          "mask": "+54(###)###-####",
          "cc": "AR",
          "cd": "Argentina",
          "desc_en": "",
          "name_ru": "Аргентина",
          "desc_ru": ""
        }, {
          "mask": "+1(684)###-####",
          "cc": "AS",
          "cd": "American Samoa",
          "desc_en": "",
          "name_ru": "Американское Самоа",
          "desc_ru": ""
        }, {
          "mask": "+43(###)###-####",
          "cc": "AT",
          "cd": "Austria",
          "desc_en": "",
          "name_ru": "Австрия",
          "desc_ru": ""
        }, {
          "mask": "+61-#-####-####",
          "cc": "AU",
          "cd": "Australia",
          "desc_en": "",
          "name_ru": "Австралия",
          "desc_ru": ""
        }, {
          "mask": "+297-###-####",
          "cc": "AW",
          "cd": "Aruba",
          "desc_en": "",
          "name_ru": "Аруба",
          "desc_ru": ""
        }, {
          "mask": "+994-##-###-##-##",
          "cc": "AZ",
          "cd": "Azerbaijan",
          "desc_en": "",
          "name_ru": "Азербайджан",
          "desc_ru": ""
        }, {
          "mask": "+387-##-#####",
          "cc": "BA",
          "cd": "Bosnia and Herzegovina",
          "desc_en": "",
          "name_ru": "Босния и Герцеговина",
          "desc_ru": ""
        }, {
          "mask": "+387-##-####",
          "cc": "BA",
          "cd": "Bosnia and Herzegovina",
          "desc_en": "",
          "name_ru": "Босния и Герцеговина",
          "desc_ru": ""
        }, {
          "mask": "+1(246)###-####",
          "cc": "BB",
          "cd": "Barbados",
          "desc_en": "",
          "name_ru": "Барбадос",
          "desc_ru": ""
        }, {
          "mask": "+880-##-###-###",
          "cc": "BD",
          "cd": "Bangladesh",
          "desc_en": "",
          "name_ru": "Бангладеш",
          "desc_ru": ""
        }, {
          "mask": "+32(###)###-###",
          "cc": "BE",
          "cd": "Belgium",
          "desc_en": "",
          "name_ru": "Бельгия",
          "desc_ru": ""
        }, {
          "mask": "+226-##-##-####",
          "cc": "BF",
          "cd": "Burkina Faso",
          "desc_en": "",
          "name_ru": "Буркина Фасо",
          "desc_ru": ""
        }, {
          "mask": "+359(###)###-###",
          "cc": "BG",
          "cd": "Bulgaria",
          "desc_en": "",
          "name_ru": "Болгария",
          "desc_ru": ""
        }, {
          "mask": "+973-####-####",
          "cc": "BH",
          "cd": "Bahrain",
          "desc_en": "",
          "name_ru": "Бахрейн",
          "desc_ru": ""
        }, {
          "mask": "+257-##-##-####",
          "cc": "BI",
          "cd": "Burundi",
          "desc_en": "",
          "name_ru": "Бурунди",
          "desc_ru": ""
        }, {
          "mask": "+229-##-##-####",
          "cc": "BJ",
          "cd": "Benin",
          "desc_en": "",
          "name_ru": "Бенин",
          "desc_ru": ""
        }, {
          "mask": "+1(441)###-####",
          "cc": "BM",
          "cd": "Bermuda",
          "desc_en": "",
          "name_ru": "Бермудские острова",
          "desc_ru": ""
        }, {
          "mask": "+673-###-####",
          "cc": "BN",
          "cd": "Brunei Darussalam",
          "desc_en": "",
          "name_ru": "Бруней-Даруссалам",
          "desc_ru": ""
        }, {
          "mask": "+591-#-###-####",
          "cc": "BO",
          "cd": "Bolivia",
          "desc_en": "",
          "name_ru": "Боливия",
          "desc_ru": ""
        }, {
          "mask": "+55-##-####-####",
          "cc": "BR",
          "cd": "Brazil",
          "desc_en": "",
          "name_ru": "Бразилия",
          "desc_ru": ""
        }, {
          "mask": "+55-##-#####-####",
          "cc": "BR",
          "cd": "Brazil",
          "desc_en": "",
          "name_ru": "Бразилия",
          "desc_ru": ""
        }, {
          "mask": "+1(242)###-####",
          "cc": "BS",
          "cd": "Bahamas",
          "desc_en": "",
          "name_ru": "Багамские Острова",
          "desc_ru": ""
        }, {
          "mask": "+975-17-###-###",
          "cc": "BT",
          "cd": "Bhutan",
          "desc_en": "",
          "name_ru": "Бутан",
          "desc_ru": ""
        }, {
          "mask": "+975-#-###-###",
          "cc": "BT",
          "cd": "Bhutan",
          "desc_en": "",
          "name_ru": "Бутан",
          "desc_ru": ""
        }, {
          "mask": "+267-##-###-###",
          "cc": "BW",
          "cd": "Botswana",
          "desc_en": "",
          "name_ru": "Ботсвана",
          "desc_ru": ""
        }, {
          "mask": "+375(##)###-##-##",
          "cc": "BY",
          "cd": "Belarus",
          "desc_en": "",
          "name_ru": "Беларусь (Белоруссия)",
          "desc_ru": ""
        }, {
          "mask": "+501-###-####",
          "cc": "BZ",
          "cd": "Belize",
          "desc_en": "",
          "name_ru": "Белиз",
          "desc_ru": ""
        }, {
          "mask": "+243(###)###-###",
          "cc": "CD",
          "cd": "Dem. Rep. Congo",
          "desc_en": "",
          "name_ru": "Дем. Респ. Конго (Киншаса)",
          "desc_ru": ""
        }, {
          "mask": "+236-##-##-####",
          "cc": "CF",
          "cd": "Central African Republic",
          "desc_en": "",
          "name_ru": "Центральноафриканская Республика",
          "desc_ru": ""
        }, {
          "mask": "+242-##-###-####",
          "cc": "CG",
          "cd": "Congo (Brazzaville)",
          "desc_en": "",
          "name_ru": "Конго (Браззавиль)",
          "desc_ru": ""
        }, {
          "mask": "+41-##-###-####",
          "cc": "CH",
          "cd": "Switzerland",
          "desc_en": "",
          "name_ru": "Швейцария",
          "desc_ru": ""
        }, {
          "mask": "+225-##-###-###",
          "cc": "CI",
          "cd": "Cote d’Ivoire (Ivory Coast)",
          "desc_en": "",
          "name_ru": "Кот-д’Ивуар",
          "desc_ru": ""
        }, {
          "mask": "+682-##-###",
          "cc": "CK",
          "cd": "Cook Islands",
          "desc_en": "",
          "name_ru": "Острова Кука",
          "desc_ru": ""
        }, {
          "mask": "+56-#-####-####",
          "cc": "CL",
          "cd": "Chile",
          "desc_en": "",
          "name_ru": "Чили",
          "desc_ru": ""
        }, {
          "mask": "+237-####-####",
          "cc": "CM",
          "cd": "Cameroon",
          "desc_en": "",
          "name_ru": "Камерун",
          "desc_ru": ""
        }, {
          "mask": "+86(###)####-####",
          "cc": "CN",
          "cd": "China (PRC)",
          "desc_en": "",
          "name_ru": "Китайская Н.Р.",
          "desc_ru": ""
        }, {
          "mask": "+86(###)####-###",
          "cc": "CN",
          "cd": "China (PRC)",
          "desc_en": "",
          "name_ru": "Китайская Н.Р.",
          "desc_ru": ""
        }, {
          "mask": "+86-##-#####-#####",
          "cc": "CN",
          "cd": "China (PRC)",
          "desc_en": "",
          "name_ru": "Китайская Н.Р.",
          "desc_ru": ""
        }, {
          "mask": "+57(###)###-####",
          "cc": "CO",
          "cd": "Colombia",
          "desc_en": "",
          "name_ru": "Колумбия",
          "desc_ru": ""
        }, {
          "mask": "+506-####-####",
          "cc": "CR",
          "cd": "Costa Rica",
          "desc_en": "",
          "name_ru": "Коста-Рика",
          "desc_ru": ""
        }, {
          "mask": "+53-#-###-####",
          "cc": "CU",
          "cd": "Cuba",
          "desc_en": "",
          "name_ru": "Куба",
          "desc_ru": ""
        }, {
          "mask": "+238(###)##-##",
          "cc": "CV",
          "cd": "Cape Verde",
          "desc_en": "",
          "name_ru": "Кабо-Верде",
          "desc_ru": ""
        }, {
          "mask": "+599-###-####",
          "cc": "CW",
          "cd": "Curacao",
          "desc_en": "",
          "name_ru": "Кюрасао",
          "desc_ru": ""
        }, {
          "mask": "+357-##-###-###",
          "cc": "CY",
          "cd": "Cyprus",
          "desc_en": "",
          "name_ru": "Кипр",
          "desc_ru": ""
        }, {
          "mask": "+420(###)###-###",
          "cc": "CZ",
          "cd": "Czech Republic",
          "desc_en": "",
          "name_ru": "Чехия",
          "desc_ru": ""
        }, {
          "mask": "+49(####)###-####",
          "cc": "DE",
          "cd": "Germany",
          "desc_en": "",
          "name_ru": "Германия",
          "desc_ru": ""
        }, {
          "mask": "+49(###)###-####",
          "cc": "DE",
          "cd": "Germany",
          "desc_en": "",
          "name_ru": "Германия",
          "desc_ru": ""
        }, {
          "mask": "+49(###)##-####",
          "cc": "DE",
          "cd": "Germany",
          "desc_en": "",
          "name_ru": "Германия",
          "desc_ru": ""
        }, {
          "mask": "+49(###)##-###",
          "cc": "DE",
          "cd": "Germany",
          "desc_en": "",
          "name_ru": "Германия",
          "desc_ru": ""
        }, {
          "mask": "+49(###)##-##",
          "cc": "DE",
          "cd": "Germany",
          "desc_en": "",
          "name_ru": "Германия",
          "desc_ru": ""
        }, {
          "mask": "+49-###-###",
          "cc": "DE",
          "cd": "Germany",
          "desc_en": "",
          "name_ru": "Германия",
          "desc_ru": ""
        }, {
          "mask": "+253-##-##-##-##",
          "cc": "DJ",
          "cd": "Djibouti",
          "desc_en": "",
          "name_ru": "Джибути",
          "desc_ru": ""
        }, {
          "mask": "+45-##-##-##-##",
          "cc": "DK",
          "cd": "Denmark",
          "desc_en": "",
          "name_ru": "Дания",
          "desc_ru": ""
        }, {
          "mask": "+1(767)###-####",
          "cc": "DM",
          "cd": "Dominica",
          "desc_en": "",
          "name_ru": "Доминика",
          "desc_ru": ""
        }, {
          "mask": "+1(809)###-####",
          "cc": "DO",
          "cd": "Dominican Republic",
          "desc_en": "",
          "name_ru": "Доминиканская Республика",
          "desc_ru": ""
        }, {
          "mask": "+1(829)###-####",
          "cc": "DO",
          "cd": "Dominican Republic",
          "desc_en": "",
          "name_ru": "Доминиканская Республика",
          "desc_ru": ""
        }, {
          "mask": "+1(849)###-####",
          "cc": "DO",
          "cd": "Dominican Republic",
          "desc_en": "",
          "name_ru": "Доминиканская Республика",
          "desc_ru": ""
        }, {
          "mask": "+213-##-###-####",
          "cc": "DZ",
          "cd": "Algeria",
          "desc_en": "",
          "name_ru": "Алжир",
          "desc_ru": ""
        }, {
          "mask": "+593-##-###-####",
          "cc": "EC",
          "cd": "Ecuador ",
          "desc_en": "mobile",
          "name_ru": "Эквадор ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+593-#-###-####",
          "cc": "EC",
          "cd": "Ecuador",
          "desc_en": "",
          "name_ru": "Эквадор",
          "desc_ru": ""
        }, {
          "mask": "+372-####-####",
          "cc": "EE",
          "cd": "Estonia ",
          "desc_en": "mobile",
          "name_ru": "Эстония ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+372-###-####",
          "cc": "EE",
          "cd": "Estonia",
          "desc_en": "",
          "name_ru": "Эстония",
          "desc_ru": ""
        }, {
          "mask": "+20(###)###-####",
          "cc": "EG",
          "cd": "Egypt",
          "desc_en": "",
          "name_ru": "Египет",
          "desc_ru": ""
        }, {
          "mask": "+291-#-###-###",
          "cc": "ER",
          "cd": "Eritrea",
          "desc_en": "",
          "name_ru": "Эритрея",
          "desc_ru": ""
        }, {
          "mask": "+34(###)###-###",
          "cc": "ES",
          "cd": "Spain",
          "desc_en": "",
          "name_ru": "Испания",
          "desc_ru": ""
        }, {
          "mask": "+251-##-###-####",
          "cc": "ET",
          "cd": "Ethiopia",
          "desc_en": "",
          "name_ru": "Эфиопия",
          "desc_ru": ""
        }, {
          "mask": "+358(###)###-##-##",
          "cc": "FI",
          "cd": "Finland",
          "desc_en": "",
          "name_ru": "Финляндия",
          "desc_ru": ""
        }, {
          "mask": "+679-##-#####",
          "cc": "FJ",
          "cd": "Fiji",
          "desc_en": "",
          "name_ru": "Фиджи",
          "desc_ru": ""
        }, {
          "mask": "+500-#####",
          "cc": "FK",
          "cd": "Falkland Islands",
          "desc_en": "",
          "name_ru": "Фолклендские острова",
          "desc_ru": ""
        }, {
          "mask": "+691-###-####",
          "cc": "FM",
          "cd": "F.S. Micronesia",
          "desc_en": "",
          "name_ru": "Ф.Ш. Микронезии",
          "desc_ru": ""
        }, {
          "mask": "+298-###-###",
          "cc": "FO",
          "cd": "Faroe Islands",
          "desc_en": "",
          "name_ru": "Фарерские острова",
          "desc_ru": ""
        }, {
          "mask": "+262-#####-####",
          "cc": "FR",
          "cd": "Mayotte",
          "desc_en": "",
          "name_ru": "Майотта",
          "desc_ru": ""
        }, {
          "mask": "+33(###)###-###",
          "cc": "FR",
          "cd": "France",
          "desc_en": "",
          "name_ru": "Франция",
          "desc_ru": ""
        }, {
          "mask": "+508-##-####",
          "cc": "FR",
          "cd": "St Pierre & Miquelon",
          "desc_en": "",
          "name_ru": "Сен-Пьер и Микелон",
          "desc_ru": ""
        }, {
          "mask": "+590(###)###-###",
          "cc": "FR",
          "cd": "Guadeloupe",
          "desc_en": "",
          "name_ru": "Гваделупа",
          "desc_ru": ""
        }, {
          "mask": "+241-#-##-##-##",
          "cc": "GA",
          "cd": "Gabon",
          "desc_en": "",
          "name_ru": "Габон",
          "desc_ru": ""
        }, {
          "mask": "+1(473)###-####",
          "cc": "GD",
          "cd": "Grenada",
          "desc_en": "",
          "name_ru": "Гренада",
          "desc_ru": ""
        }, {
          "mask": "+995(###)###-###",
          "cc": "GE",
          "cd": "Rep. of Georgia",
          "desc_en": "",
          "name_ru": "Грузия",
          "desc_ru": ""
        }, {
          "mask": "+594-#####-####",
          "cc": "GF",
          "cd": "Guiana (French)",
          "desc_en": "",
          "name_ru": "Фр. Гвиана",
          "desc_ru": ""
        }, {
          "mask": "+233(###)###-###",
          "cc": "GH",
          "cd": "Ghana",
          "desc_en": "",
          "name_ru": "Гана",
          "desc_ru": ""
        }, {
          "mask": "+350-###-#####",
          "cc": "GI",
          "cd": "Gibraltar",
          "desc_en": "",
          "name_ru": "Гибралтар",
          "desc_ru": ""
        }, {
          "mask": "+299-##-##-##",
          "cc": "GL",
          "cd": "Greenland",
          "desc_en": "",
          "name_ru": "Гренландия",
          "desc_ru": ""
        }, {
          "mask": "+220(###)##-##",
          "cc": "GM",
          "cd": "Gambia",
          "desc_en": "",
          "name_ru": "Гамбия",
          "desc_ru": ""
        }, {
          "mask": "+224-##-###-###",
          "cc": "GN",
          "cd": "Guinea",
          "desc_en": "",
          "name_ru": "Гвинея",
          "desc_ru": ""
        }, {
          "mask": "+240-##-###-####",
          "cc": "GQ",
          "cd": "Equatorial Guinea",
          "desc_en": "",
          "name_ru": "Экваториальная Гвинея",
          "desc_ru": ""
        }, {
          "mask": "+30(###)###-####",
          "cc": "GR",
          "cd": "Greece",
          "desc_en": "",
          "name_ru": "Греция",
          "desc_ru": ""
        }, {
          "mask": "+502-#-###-####",
          "cc": "GT",
          "cd": "Guatemala",
          "desc_en": "",
          "name_ru": "Гватемала",
          "desc_ru": ""
        }, {
          "mask": "+1(671)###-####",
          "cc": "GU",
          "cd": "Guam",
          "desc_en": "",
          "name_ru": "Гуам",
          "desc_ru": ""
        }, {
          "mask": "+245-#-######",
          "cc": "GW",
          "cd": "Guinea-Bissau",
          "desc_en": "",
          "name_ru": "Гвинея-Бисау",
          "desc_ru": ""
        }, {
          "mask": "+592-###-####",
          "cc": "GY",
          "cd": "Guyana",
          "desc_en": "",
          "name_ru": "Гайана",
          "desc_ru": ""
        }, {
          "mask": "+852-####-####",
          "cc": "HK",
          "cd": "Hong Kong",
          "desc_en": "",
          "name_ru": "Гонконг",
          "desc_ru": ""
        }, {
          "mask": "+504-####-####",
          "cc": "HN",
          "cd": "Honduras",
          "desc_en": "",
          "name_ru": "Гондурас",
          "desc_ru": ""
        }, {
          "mask": "+385-(##)-###-###[#]",
          "cc": "HR",
          "cd": "Croatia",
          "desc_en": "",
          "name_ru": "Хорватия",
          "desc_ru": ""
        }, {
          "mask": "+385-1-####-###",
          "cc": "HR",
          "cd": "Croatia",
          "desc_en": "",
          "name_ru": "Хорватия",
          "desc_ru": ""
        }, {
          "mask": "+509-##-##-####",
          "cc": "HT",
          "cd": "Haiti",
          "desc_en": "",
          "name_ru": "Гаити",
          "desc_ru": ""
        }, {
          "mask": "+36(###)###-###",
          "cc": "HU",
          "cd": "Hungary",
          "desc_en": "",
          "name_ru": "Венгрия",
          "desc_ru": ""
        }, {
          "mask": "+62(8##)###-####",
          "cc": "ID",
          "cd": "Indonesia ",
          "desc_en": "mobile",
          "name_ru": "Индонезия ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+62-##-###-##",
          "cc": "ID",
          "cd": "Indonesia",
          "desc_en": "",
          "name_ru": "Индонезия",
          "desc_ru": ""
        }, {
          "mask": "+62-##-###-###",
          "cc": "ID",
          "cd": "Indonesia",
          "desc_en": "",
          "name_ru": "Индонезия",
          "desc_ru": ""
        }, {
          "mask": "+62-##-###-####",
          "cc": "ID",
          "cd": "Indonesia",
          "desc_en": "",
          "name_ru": "Индонезия",
          "desc_ru": ""
        }, {
          "mask": "+62(8##)###-###",
          "cc": "ID",
          "cd": "Indonesia ",
          "desc_en": "mobile",
          "name_ru": "Индонезия ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+62(8##)###-##-###",
          "cc": "ID",
          "cd": "Indonesia ",
          "desc_en": "mobile",
          "name_ru": "Индонезия ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+353(###)###-###",
          "cc": "IE",
          "cd": "Ireland",
          "desc_en": "",
          "name_ru": "Ирландия",
          "desc_ru": ""
        }, {
          "mask": "+972-5#-###-####",
          "cc": "IL",
          "cd": "Israel ",
          "desc_en": "mobile",
          "name_ru": "Израиль ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+972-#-###-####",
          "cc": "IL",
          "cd": "Israel",
          "desc_en": "",
          "name_ru": "Израиль",
          "desc_ru": ""
        }, {
          "mask": "+91(####)###-###",
          "cc": "IN",
          "cd": "India",
          "desc_en": "",
          "name_ru": "Индия",
          "desc_ru": ""
        }, {
          "mask": "+246-###-####",
          "cc": "IO",
          "cd": "Diego Garcia",
          "desc_en": "",
          "name_ru": "Диего-Гарсия",
          "desc_ru": ""
        }, {
          "mask": "+964(###)###-####",
          "cc": "IQ",
          "cd": "Iraq",
          "desc_en": "",
          "name_ru": "Ирак",
          "desc_ru": ""
        }, {
          "mask": "+98(###)###-####",
          "cc": "IR",
          "cd": "Iran",
          "desc_en": "",
          "name_ru": "Иран",
          "desc_ru": ""
        }, {
          "mask": "+354-###-####",
          "cc": "IS",
          "cd": "Iceland",
          "desc_en": "",
          "name_ru": "Исландия",
          "desc_ru": ""
        }, {
          "mask": "+39(###)####-###",
          "cc": "IT",
          "cd": "Italy",
          "desc_en": "",
          "name_ru": "Италия",
          "desc_ru": ""
        }, {
          "mask": "+1(876)###-####",
          "cc": "JM",
          "cd": "Jamaica",
          "desc_en": "",
          "name_ru": "Ямайка",
          "desc_ru": ""
        }, {
          "mask": "+962-#-####-####",
          "cc": "JO",
          "cd": "Jordan",
          "desc_en": "",
          "name_ru": "Иордания",
          "desc_ru": ""
        }, {
          "mask": "+81-##-####-####",
          "cc": "JP",
          "cd": "Japan ",
          "desc_en": "mobile",
          "name_ru": "Япония ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+81(###)###-###",
          "cc": "JP",
          "cd": "Japan",
          "desc_en": "",
          "name_ru": "Япония",
          "desc_ru": ""
        }, {
          "mask": "+254-###-######",
          "cc": "KE",
          "cd": "Kenya",
          "desc_en": "",
          "name_ru": "Кения",
          "desc_ru": ""
        }, {
          "mask": "+996(###)###-###",
          "cc": "KG",
          "cd": "Kyrgyzstan",
          "desc_en": "",
          "name_ru": "Киргизия",
          "desc_ru": ""
        }, {
          "mask": "+855-##-###-###",
          "cc": "KH",
          "cd": "Cambodia",
          "desc_en": "",
          "name_ru": "Камбоджа",
          "desc_ru": ""
        }, {
          "mask": "+686-##-###",
          "cc": "KI",
          "cd": "Kiribati",
          "desc_en": "",
          "name_ru": "Кирибати",
          "desc_ru": ""
        }, {
          "mask": "+269-##-#####",
          "cc": "KM",
          "cd": "Comoros",
          "desc_en": "",
          "name_ru": "Коморы",
          "desc_ru": ""
        }, {
          "mask": "+1(869)###-####",
          "cc": "KN",
          "cd": "Saint Kitts & Nevis",
          "desc_en": "",
          "name_ru": "Сент-Китс и Невис",
          "desc_ru": ""
        }, {
          "mask": "+850-191-###-####",
          "cc": "KP",
          "cd": "DPR Korea (North) ",
          "desc_en": "mobile",
          "name_ru": "Корейская НДР ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+850-##-###-###",
          "cc": "KP",
          "cd": "DPR Korea (North)",
          "desc_en": "",
          "name_ru": "Корейская НДР",
          "desc_ru": ""
        }, {
          "mask": "+850-###-####-###",
          "cc": "KP",
          "cd": "DPR Korea (North)",
          "desc_en": "",
          "name_ru": "Корейская НДР",
          "desc_ru": ""
        }, {
          "mask": "+850-###-###",
          "cc": "KP",
          "cd": "DPR Korea (North)",
          "desc_en": "",
          "name_ru": "Корейская НДР",
          "desc_ru": ""
        }, {
          "mask": "+850-####-####",
          "cc": "KP",
          "cd": "DPR Korea (North)",
          "desc_en": "",
          "name_ru": "Корейская НДР",
          "desc_ru": ""
        }, {
          "mask": "+850-####-#############",
          "cc": "KP",
          "cd": "DPR Korea (North)",
          "desc_en": "",
          "name_ru": "Корейская НДР",
          "desc_ru": ""
        }, {
          "mask": "+82-##-###-####",
          "cc": "KR",
          "cd": "Korea (South)",
          "desc_en": "",
          "name_ru": "Респ. Корея",
          "desc_ru": ""
        }, {
          "mask": "+965-####-####",
          "cc": "KW",
          "cd": "Kuwait",
          "desc_en": "",
          "name_ru": "Кувейт",
          "desc_ru": ""
        }, {
          "mask": "+1(345)###-####",
          "cc": "KY",
          "cd": "Cayman Islands",
          "desc_en": "",
          "name_ru": "Каймановы острова",
          "desc_ru": ""
        }, {
          "mask": "+7(6##)###-##-##",
          "cc": "KZ",
          "cd": "Kazakhstan",
          "desc_en": "",
          "name_ru": "Казахстан",
          "desc_ru": ""
        }, {
          "mask": "+7(7##)###-##-##",
          "cc": "KZ",
          "cd": "Kazakhstan",
          "desc_en": "",
          "name_ru": "Казахстан",
          "desc_ru": ""
        }, {
          "mask": "+856(20##)###-###",
          "cc": "LA",
          "cd": "Laos ",
          "desc_en": "mobile",
          "name_ru": "Лаос ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+856-##-###-###",
          "cc": "LA",
          "cd": "Laos",
          "desc_en": "",
          "name_ru": "Лаос",
          "desc_ru": ""
        }, {
          "mask": "+961-##-###-###",
          "cc": "LB",
          "cd": "Lebanon ",
          "desc_en": "mobile",
          "name_ru": "Ливан ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+961-#-###-###",
          "cc": "LB",
          "cd": "Lebanon",
          "desc_en": "",
          "name_ru": "Ливан",
          "desc_ru": ""
        }, {
          "mask": "+1(758)###-####",
          "cc": "LC",
          "cd": "Saint Lucia",
          "desc_en": "",
          "name_ru": "Сент-Люсия",
          "desc_ru": ""
        }, {
          "mask": "+423(###)###-####",
          "cc": "LI",
          "cd": "Liechtenstein",
          "desc_en": "",
          "name_ru": "Лихтенштейн",
          "desc_ru": ""
        }, {
          "mask": "+94-##-###-####",
          "cc": "LK",
          "cd": "Sri Lanka",
          "desc_en": "",
          "name_ru": "Шри-Ланка",
          "desc_ru": ""
        }, {
          "mask": "+231-##-###-###",
          "cc": "LR",
          "cd": "Liberia",
          "desc_en": "",
          "name_ru": "Либерия",
          "desc_ru": ""
        }, {
          "mask": "+266-#-###-####",
          "cc": "LS",
          "cd": "Lesotho",
          "desc_en": "",
          "name_ru": "Лесото",
          "desc_ru": ""
        }, {
          "mask": "+370(###)##-###",
          "cc": "LT",
          "cd": "Lithuania",
          "desc_en": "",
          "name_ru": "Литва",
          "desc_ru": ""
        }, {
          "mask": "+352(###)###-###",
          "cc": "LU",
          "cd": "Luxembourg",
          "desc_en": "",
          "name_ru": "Люксембург",
          "desc_ru": ""
        }, {
          "mask": "+371-##-###-###",
          "cc": "LV",
          "cd": "Latvia",
          "desc_en": "",
          "name_ru": "Латвия",
          "desc_ru": ""
        }, {
          "mask": "+218-##-###-###",
          "cc": "LY",
          "cd": "Libya",
          "desc_en": "",
          "name_ru": "Ливия",
          "desc_ru": ""
        }, {
          "mask": "+218-21-###-####",
          "cc": "LY",
          "cd": "Libya",
          "desc_en": "Tripoli",
          "name_ru": "Ливия",
          "desc_ru": "Триполи"
        }, {
          "mask": "+212-##-####-###",
          "cc": "MA",
          "cd": "Morocco",
          "desc_en": "",
          "name_ru": "Марокко",
          "desc_ru": ""
        }, {
          "mask": "+377(###)###-###",
          "cc": "MC",
          "cd": "Monaco",
          "desc_en": "",
          "name_ru": "Монако",
          "desc_ru": ""
        }, {
          "mask": "+377-##-###-###",
          "cc": "MC",
          "cd": "Monaco",
          "desc_en": "",
          "name_ru": "Монако",
          "desc_ru": ""
        }, {
          "mask": "+373-####-####",
          "cc": "MD",
          "cd": "Moldova",
          "desc_en": "",
          "name_ru": "Молдова",
          "desc_ru": ""
        }, {
          "mask": "+382-##-###-###",
          "cc": "ME",
          "cd": "Montenegro",
          "desc_en": "",
          "name_ru": "Черногория",
          "desc_ru": ""
        }, {
          "mask": "+261-##-##-#####",
          "cc": "MG",
          "cd": "Madagascar",
          "desc_en": "",
          "name_ru": "Мадагаскар",
          "desc_ru": ""
        }, {
          "mask": "+692-###-####",
          "cc": "MH",
          "cd": "Marshall Islands",
          "desc_en": "",
          "name_ru": "Маршалловы Острова",
          "desc_ru": ""
        }, {
          "mask": "+389-##-###-###",
          "cc": "MK",
          "cd": "Republic of Macedonia",
          "desc_en": "",
          "name_ru": "Респ. Македония",
          "desc_ru": ""
        }, {
          "mask": "+223-##-##-####",
          "cc": "ML",
          "cd": "Mali",
          "desc_en": "",
          "name_ru": "Мали",
          "desc_ru": ""
        }, {
          "mask": "+95-##-###-###",
          "cc": "MM",
          "cd": "Burma (Myanmar)",
          "desc_en": "",
          "name_ru": "Бирма (Мьянма)",
          "desc_ru": ""
        }, {
          "mask": "+95-#-###-###",
          "cc": "MM",
          "cd": "Burma (Myanmar)",
          "desc_en": "",
          "name_ru": "Бирма (Мьянма)",
          "desc_ru": ""
        }, {
          "mask": "+95-###-###",
          "cc": "MM",
          "cd": "Burma (Myanmar)",
          "desc_en": "",
          "name_ru": "Бирма (Мьянма)",
          "desc_ru": ""
        }, {
          "mask": "+976-##-##-####",
          "cc": "MN",
          "cd": "Mongolia",
          "desc_en": "",
          "name_ru": "Монголия",
          "desc_ru": ""
        }, {
          "mask": "+853-####-####",
          "cc": "MO",
          "cd": "Macau",
          "desc_en": "",
          "name_ru": "Макао",
          "desc_ru": ""
        }, {
          "mask": "+1(670)###-####",
          "cc": "MP",
          "cd": "Northern Mariana Islands",
          "desc_en": "",
          "name_ru": "Северные Марианские острова Сайпан",
          "desc_ru": ""
        }, {
          "mask": "+596(###)##-##-##",
          "cc": "MQ",
          "cd": "Martinique",
          "desc_en": "",
          "name_ru": "Мартиника",
          "desc_ru": ""
        }, {
          "mask": "+222-##-##-####",
          "cc": "MR",
          "cd": "Mauritania",
          "desc_en": "",
          "name_ru": "Мавритания",
          "desc_ru": ""
        }, {
          "mask": "+1(664)###-####",
          "cc": "MS",
          "cd": "Montserrat",
          "desc_en": "",
          "name_ru": "Монтсеррат",
          "desc_ru": ""
        }, {
          "mask": "+356-####-####",
          "cc": "MT",
          "cd": "Malta",
          "desc_en": "",
          "name_ru": "Мальта",
          "desc_ru": ""
        }, {
          "mask": "+230-###-####",
          "cc": "MU",
          "cd": "Mauritius",
          "desc_en": "",
          "name_ru": "Маврикий",
          "desc_ru": ""
        }, {
          "mask": "+960-###-####",
          "cc": "MV",
          "cd": "Maldives",
          "desc_en": "",
          "name_ru": "Мальдивские острова",
          "desc_ru": ""
        }, {
          "mask": "+265-1-###-###",
          "cc": "MW",
          "cd": "Malawi",
          "desc_en": "Telecom Ltd",
          "name_ru": "Малави",
          "desc_ru": "Telecom Ltd"
        }, {
          "mask": "+265-#-####-####",
          "cc": "MW",
          "cd": "Malawi",
          "desc_en": "",
          "name_ru": "Малави",
          "desc_ru": ""
        }, {
          "mask": "+52(###)###-####",
          "cc": "MX",
          "cd": "Mexico",
          "desc_en": "",
          "name_ru": "Мексика",
          "desc_ru": ""
        }, {
          "mask": "+52-##-##-####",
          "cc": "MX",
          "cd": "Mexico",
          "desc_en": "",
          "name_ru": "Мексика",
          "desc_ru": ""
        }, {
          "mask": "+60-##-###-####",
          "cc": "MY",
          "cd": "Malaysia ",
          "desc_en": "mobile",
          "name_ru": "Малайзия ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+60(###)###-###",
          "cc": "MY",
          "cd": "Malaysia",
          "desc_en": "",
          "name_ru": "Малайзия",
          "desc_ru": ""
        }, {
          "mask": "+60-##-###-###",
          "cc": "MY",
          "cd": "Malaysia",
          "desc_en": "",
          "name_ru": "Малайзия",
          "desc_ru": ""
        }, {
          "mask": "+60-#-###-###",
          "cc": "MY",
          "cd": "Malaysia",
          "desc_en": "",
          "name_ru": "Малайзия",
          "desc_ru": ""
        }, {
          "mask": "+258-##-###-###",
          "cc": "MZ",
          "cd": "Mozambique",
          "desc_en": "",
          "name_ru": "Мозамбик",
          "desc_ru": ""
        }, {
          "mask": "+264-##-###-####",
          "cc": "NA",
          "cd": "Namibia",
          "desc_en": "",
          "name_ru": "Намибия",
          "desc_ru": ""
        }, {
          "mask": "+687-##-####",
          "cc": "NC",
          "cd": "New Caledonia",
          "desc_en": "",
          "name_ru": "Новая Каледония",
          "desc_ru": ""
        }, {
          "mask": "+227-##-##-####",
          "cc": "NE",
          "cd": "Niger",
          "desc_en": "",
          "name_ru": "Нигер",
          "desc_ru": ""
        }, {
          "mask": "+672-3##-###",
          "cc": "NF",
          "cd": "Norfolk Island",
          "desc_en": "",
          "name_ru": "Норфолк (остров)",
          "desc_ru": ""
        }, {
          "mask": "+234(###)###-####",
          "cc": "NG",
          "cd": "Nigeria",
          "desc_en": "",
          "name_ru": "Нигерия",
          "desc_ru": ""
        }, {
          "mask": "+234-##-###-###",
          "cc": "NG",
          "cd": "Nigeria",
          "desc_en": "",
          "name_ru": "Нигерия",
          "desc_ru": ""
        }, {
          "mask": "+234-##-###-##",
          "cc": "NG",
          "cd": "Nigeria",
          "desc_en": "",
          "name_ru": "Нигерия",
          "desc_ru": ""
        }, {
          "mask": "+234(###)###-####",
          "cc": "NG",
          "cd": "Nigeria ",
          "desc_en": "mobile",
          "name_ru": "Нигерия ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+505-####-####",
          "cc": "NI",
          "cd": "Nicaragua",
          "desc_en": "",
          "name_ru": "Никарагуа",
          "desc_ru": ""
        }, {
          "mask": "+31-##-###-####",
          "cc": "NL",
          "cd": "Netherlands",
          "desc_en": "",
          "name_ru": "Нидерланды",
          "desc_ru": ""
        }, {
          "mask": "+47(###)##-###",
          "cc": "NO",
          "cd": "Norway",
          "desc_en": "",
          "name_ru": "Норвегия",
          "desc_ru": ""
        }, {
          "mask": "+977-##-###-###",
          "cc": "NP",
          "cd": "Nepal",
          "desc_en": "",
          "name_ru": "Непал",
          "desc_ru": ""
        }, {
          "mask": "+674-###-####",
          "cc": "NR",
          "cd": "Nauru",
          "desc_en": "",
          "name_ru": "Науру",
          "desc_ru": ""
        }, {
          "mask": "+683-####",
          "cc": "NU",
          "cd": "Niue",
          "desc_en": "",
          "name_ru": "Ниуэ",
          "desc_ru": ""
        }, {
          "mask": "+64(###)###-###",
          "cc": "NZ",
          "cd": "New Zealand",
          "desc_en": "",
          "name_ru": "Новая Зеландия",
          "desc_ru": ""
        }, {
          "mask": "+64-##-###-###",
          "cc": "NZ",
          "cd": "New Zealand",
          "desc_en": "",
          "name_ru": "Новая Зеландия",
          "desc_ru": ""
        }, {
          "mask": "+64(###)###-####",
          "cc": "NZ",
          "cd": "New Zealand",
          "desc_en": "",
          "name_ru": "Новая Зеландия",
          "desc_ru": ""
        }, {
          "mask": "+968-##-###-###",
          "cc": "OM",
          "cd": "Oman",
          "desc_en": "",
          "name_ru": "Оман",
          "desc_ru": ""
        }, {
          "mask": "+507-###-####",
          "cc": "PA",
          "cd": "Panama",
          "desc_en": "",
          "name_ru": "Панама",
          "desc_ru": ""
        }, {
          "mask": "+51(###)###-###",
          "cc": "PE",
          "cd": "Peru",
          "desc_en": "",
          "name_ru": "Перу",
          "desc_ru": ""
        }, {
          "mask": "+689-##-##-##",
          "cc": "PF",
          "cd": "French Polynesia",
          "desc_en": "",
          "name_ru": "Французская Полинезия (Таити)",
          "desc_ru": ""
        }, {
          "mask": "+675(###)##-###",
          "cc": "PG",
          "cd": "Papua New Guinea",
          "desc_en": "",
          "name_ru": "Папуа-Новая Гвинея",
          "desc_ru": ""
        }, {
          "mask": "+63(###)###-####",
          "cc": "PH",
          "cd": "Philippines",
          "desc_en": "",
          "name_ru": "Филиппины",
          "desc_ru": ""
        }, {
          "mask": "+92(###)###-####",
          "cc": "PK",
          "cd": "Pakistan",
          "desc_en": "",
          "name_ru": "Пакистан",
          "desc_ru": ""
        }, {
          "mask": "+48(###)###-###",
          "cc": "PL",
          "cd": "Poland",
          "desc_en": "",
          "name_ru": "Польша",
          "desc_ru": ""
        }, {
          "mask": "+970-##-###-####",
          "cc": "PS",
          "cd": "Palestine",
          "desc_en": "",
          "name_ru": "Палестина",
          "desc_ru": ""
        }, {
          "mask": "+351-##-###-####",
          "cc": "PT",
          "cd": "Portugal",
          "desc_en": "",
          "name_ru": "Португалия",
          "desc_ru": ""
        }, {
          "mask": "+680-###-####",
          "cc": "PW",
          "cd": "Palau",
          "desc_en": "",
          "name_ru": "Палау",
          "desc_ru": ""
        }, {
          "mask": "+595(###)###-###",
          "cc": "PY",
          "cd": "Paraguay",
          "desc_en": "",
          "name_ru": "Парагвай",
          "desc_ru": ""
        }, {
          "mask": "+974-####-####",
          "cc": "QA",
          "cd": "Qatar",
          "desc_en": "",
          "name_ru": "Катар",
          "desc_ru": ""
        }, {
          "mask": "+262-#####-####",
          "cc": "RE",
          "cd": "Reunion",
          "desc_en": "",
          "name_ru": "Реюньон",
          "desc_ru": ""
        }, {
          "mask": "+40-##-###-####",
          "cc": "RO",
          "cd": "Romania",
          "desc_en": "",
          "name_ru": "Румыния",
          "desc_ru": ""
        }, {
          "mask": "+381-##-###-####",
          "cc": "RS",
          "cd": "Serbia",
          "desc_en": "",
          "name_ru": "Сербия",
          "desc_ru": ""
        }, {
          "mask": "+7(###)###-##-##",
          "cc": "RU",
          "cd": "Russia",
          "desc_en": "",
          "name_ru": "Россия",
          "desc_ru": ""
        }, {
          "mask": "+250(###)###-###",
          "cc": "RW",
          "cd": "Rwanda",
          "desc_en": "",
          "name_ru": "Руанда",
          "desc_ru": ""
        }, {
          "mask": "+966-5-####-####",
          "cc": "SA",
          "cd": "Saudi Arabia ",
          "desc_en": "mobile",
          "name_ru": "Саудовская Аравия ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+966-#-###-####",
          "cc": "SA",
          "cd": "Saudi Arabia",
          "desc_en": "",
          "name_ru": "Саудовская Аравия",
          "desc_ru": ""
        }, {
          "mask": "+677-###-####",
          "cc": "SB",
          "cd": "Solomon Islands ",
          "desc_en": "mobile",
          "name_ru": "Соломоновы Острова ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+677-#####",
          "cc": "SB",
          "cd": "Solomon Islands",
          "desc_en": "",
          "name_ru": "Соломоновы Острова",
          "desc_ru": ""
        }, {
          "mask": "+248-#-###-###",
          "cc": "SC",
          "cd": "Seychelles",
          "desc_en": "",
          "name_ru": "Сейшелы",
          "desc_ru": ""
        }, {
          "mask": "+249-##-###-####",
          "cc": "SD",
          "cd": "Sudan",
          "desc_en": "",
          "name_ru": "Судан",
          "desc_ru": ""
        }, {
          "mask": "+46-##-###-####",
          "cc": "SE",
          "cd": "Sweden",
          "desc_en": "",
          "name_ru": "Швеция",
          "desc_ru": ""
        }, {
          "mask": "+65-####-####",
          "cc": "SG",
          "cd": "Singapore",
          "desc_en": "",
          "name_ru": "Сингапур",
          "desc_ru": ""
        }, {
          "mask": "+290-####",
          "cc": "SH",
          "cd": "Saint Helena",
          "desc_en": "",
          "name_ru": "Остров Святой Елены",
          "desc_ru": ""
        }, {
          "mask": "+290-####",
          "cc": "SH",
          "cd": "Tristan da Cunha",
          "desc_en": "",
          "name_ru": "Тристан-да-Кунья",
          "desc_ru": ""
        }, {
          "mask": "+386-##-###-###",
          "cc": "SI",
          "cd": "Slovenia",
          "desc_en": "",
          "name_ru": "Словения",
          "desc_ru": ""
        }, {
          "mask": "+421(###)###-###",
          "cc": "SK",
          "cd": "Slovakia",
          "desc_en": "",
          "name_ru": "Словакия",
          "desc_ru": ""
        }, {
          "mask": "+232-##-######",
          "cc": "SL",
          "cd": "Sierra Leone",
          "desc_en": "",
          "name_ru": "Сьерра-Леоне",
          "desc_ru": ""
        }, {
          "mask": "+378-####-######",
          "cc": "SM",
          "cd": "San Marino",
          "desc_en": "",
          "name_ru": "Сан-Марино",
          "desc_ru": ""
        }, {
          "mask": "+221-##-###-####",
          "cc": "SN",
          "cd": "Senegal",
          "desc_en": "",
          "name_ru": "Сенегал",
          "desc_ru": ""
        }, {
          "mask": "+252-##-###-###",
          "cc": "SO",
          "cd": "Somalia",
          "desc_en": "",
          "name_ru": "Сомали",
          "desc_ru": ""
        }, {
          "mask": "+252-#-###-###",
          "cc": "SO",
          "cd": "Somalia",
          "desc_en": "",
          "name_ru": "Сомали",
          "desc_ru": ""
        }, {
          "mask": "+252-#-###-###",
          "cc": "SO",
          "cd": "Somalia ",
          "desc_en": "mobile",
          "name_ru": "Сомали ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+597-###-####",
          "cc": "SR",
          "cd": "Suriname ",
          "desc_en": "mobile",
          "name_ru": "Суринам ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+597-###-###",
          "cc": "SR",
          "cd": "Suriname",
          "desc_en": "",
          "name_ru": "Суринам",
          "desc_ru": ""
        }, {
          "mask": "+211-##-###-####",
          "cc": "SS",
          "cd": "South Sudan",
          "desc_en": "",
          "name_ru": "Южный Судан",
          "desc_ru": ""
        }, {
          "mask": "+239-##-#####",
          "cc": "ST",
          "cd": "Sao Tome and Principe",
          "desc_en": "",
          "name_ru": "Сан-Томе и Принсипи",
          "desc_ru": ""
        }, {
          "mask": "+503-##-##-####",
          "cc": "SV",
          "cd": "El Salvador",
          "desc_en": "",
          "name_ru": "Сальвадор",
          "desc_ru": ""
        }, {
          "mask": "+1(721)###-####",
          "cc": "SX",
          "cd": "Sint Maarten",
          "desc_en": "",
          "name_ru": "Синт-Маартен",
          "desc_ru": ""
        }, {
          "mask": "+963-##-####-###",
          "cc": "SY",
          "cd": "Syrian Arab Republic",
          "desc_en": "",
          "name_ru": "Сирийская арабская республика",
          "desc_ru": ""
        }, {
          "mask": "+268-##-##-####",
          "cc": "SZ",
          "cd": "Swaziland",
          "desc_en": "",
          "name_ru": "Свазиленд",
          "desc_ru": ""
        }, {
          "mask": "+1(649)###-####",
          "cc": "TC",
          "cd": "Turks & Caicos",
          "desc_en": "",
          "name_ru": "Тёркс и Кайкос",
          "desc_ru": ""
        }, {
          "mask": "+235-##-##-##-##",
          "cc": "TD",
          "cd": "Chad",
          "desc_en": "",
          "name_ru": "Чад",
          "desc_ru": ""
        }, {
          "mask": "+228-##-###-###",
          "cc": "TG",
          "cd": "Togo",
          "desc_en": "",
          "name_ru": "Того",
          "desc_ru": ""
        }, {
          "mask": "+66-##-###-####",
          "cc": "TH",
          "cd": "Thailand ",
          "desc_en": "mobile",
          "name_ru": "Таиланд ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+66-##-###-###",
          "cc": "TH",
          "cd": "Thailand",
          "desc_en": "",
          "name_ru": "Таиланд",
          "desc_ru": ""
        }, {
          "mask": "+992-##-###-####",
          "cc": "TJ",
          "cd": "Tajikistan",
          "desc_en": "",
          "name_ru": "Таджикистан",
          "desc_ru": ""
        }, {
          "mask": "+690-####",
          "cc": "TK",
          "cd": "Tokelau",
          "desc_en": "",
          "name_ru": "Токелау",
          "desc_ru": ""
        }, {
          "mask": "+670-###-####",
          "cc": "TL",
          "cd": "East Timor",
          "desc_en": "",
          "name_ru": "Восточный Тимор",
          "desc_ru": ""
        }, {
          "mask": "+670-77#-#####",
          "cc": "TL",
          "cd": "East Timor",
          "desc_en": "Timor Telecom",
          "name_ru": "Восточный Тимор",
          "desc_ru": "Timor Telecom"
        }, {
          "mask": "+670-78#-#####",
          "cc": "TL",
          "cd": "East Timor",
          "desc_en": "Timor Telecom",
          "name_ru": "Восточный Тимор",
          "desc_ru": "Timor Telecom"
        }, {
          "mask": "+993-#-###-####",
          "cc": "TM",
          "cd": "Turkmenistan",
          "desc_en": "",
          "name_ru": "Туркменистан",
          "desc_ru": ""
        }, {
          "mask": "+216-##-###-###",
          "cc": "TN",
          "cd": "Tunisia",
          "desc_en": "",
          "name_ru": "Тунис",
          "desc_ru": ""
        }, {
          "mask": "+676-#####",
          "cc": "TO",
          "cd": "Tonga",
          "desc_en": "",
          "name_ru": "Тонга",
          "desc_ru": ""
        }, {
          "mask": "+90(###)###-####",
          "cc": "TR",
          "cd": "Turkey",
          "desc_en": "",
          "name_ru": "Турция",
          "desc_ru": ""
        }, {
          "mask": "+1(868)###-####",
          "cc": "TT",
          "cd": "Trinidad & Tobago",
          "desc_en": "",
          "name_ru": "Тринидад и Тобаго",
          "desc_ru": ""
        }, {
          "mask": "+688-90####",
          "cc": "TV",
          "cd": "Tuvalu ",
          "desc_en": "mobile",
          "name_ru": "Тувалу ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+688-2####",
          "cc": "TV",
          "cd": "Tuvalu",
          "desc_en": "",
          "name_ru": "Тувалу",
          "desc_ru": ""
        }, {
          "mask": "+886-#-####-####",
          "cc": "TW",
          "cd": "Taiwan",
          "desc_en": "",
          "name_ru": "Тайвань",
          "desc_ru": ""
        }, {
          "mask": "+886-####-####",
          "cc": "TW",
          "cd": "Taiwan",
          "desc_en": "",
          "name_ru": "Тайвань",
          "desc_ru": ""
        }, {
          "mask": "+255-##-###-####",
          "cc": "TZ",
          "cd": "Tanzania",
          "desc_en": "",
          "name_ru": "Танзания",
          "desc_ru": ""
        }, {
          "mask": "+380(##)###-##-##",
          "cc": "UA",
          "cd": "Ukraine",
          "desc_en": "",
          "name_ru": "Украина",
          "desc_ru": ""
        }, {
          "mask": "+256(###)###-###",
          "cc": "UG",
          "cd": "Uganda",
          "desc_en": "",
          "name_ru": "Уганда",
          "desc_ru": ""
        }, {
          "mask": "+44-##-####-####",
          "cc": "UK",
          "cd": "United Kingdom",
          "desc_en": "",
          "name_ru": "Великобритания",
          "desc_ru": ""
        }, {
          "mask": "+598-#-###-##-##",
          "cc": "UY",
          "cd": "Uruguay",
          "desc_en": "",
          "name_ru": "Уругвай",
          "desc_ru": ""
        }, {
          "mask": "+998-##-###-####",
          "cc": "UZ",
          "cd": "Uzbekistan",
          "desc_en": "",
          "name_ru": "Узбекистан",
          "desc_ru": ""
        }, {
          "mask": "+39-6-698-#####",
          "cc": "VA",
          "cd": "Vatican City",
          "desc_en": "",
          "name_ru": "Ватикан",
          "desc_ru": ""
        }, {
          "mask": "+1(784)###-####",
          "cc": "VC",
          "cd": "Saint Vincent & the Grenadines",
          "desc_en": "",
          "name_ru": "Сент-Винсент и Гренадины",
          "desc_ru": ""
        }, {
          "mask": "+58(###)###-####",
          "cc": "VE",
          "cd": "Venezuela",
          "desc_en": "",
          "name_ru": "Венесуэла",
          "desc_ru": ""
        }, {
          "mask": "+1(284)###-####",
          "cc": "VG",
          "cd": "British Virgin Islands",
          "desc_en": "",
          "name_ru": "Британские Виргинские острова",
          "desc_ru": ""
        }, {
          "mask": "+1(340)###-####",
          "cc": "VI",
          "cd": "US Virgin Islands",
          "desc_en": "",
          "name_ru": "Американские Виргинские острова",
          "desc_ru": ""
        }, {
          "mask": "+84-##-####-###",
          "cc": "VN",
          "cd": "Vietnam",
          "desc_en": "",
          "name_ru": "Вьетнам",
          "desc_ru": ""
        }, {
          "mask": "+84(###)####-###",
          "cc": "VN",
          "cd": "Vietnam",
          "desc_en": "",
          "name_ru": "Вьетнам",
          "desc_ru": ""
        }, {
          "mask": "+678-##-#####",
          "cc": "VU",
          "cd": "Vanuatu ",
          "desc_en": "mobile",
          "name_ru": "Вануату ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+678-#####",
          "cc": "VU",
          "cd": "Vanuatu",
          "desc_en": "",
          "name_ru": "Вануату",
          "desc_ru": ""
        }, {
          "mask": "+681-##-####",
          "cc": "WF",
          "cd": "Wallis and Futuna",
          "desc_en": "",
          "name_ru": "Уоллис и Футуна",
          "desc_ru": ""
        }, {
          "mask": "+685-##-####",
          "cc": "WS",
          "cd": "Samoa",
          "desc_en": "",
          "name_ru": "Самоа",
          "desc_ru": ""
        }, {
          "mask": "+967-###-###-###",
          "cc": "YE",
          "cd": "Yemen ",
          "desc_en": "mobile",
          "name_ru": "Йемен ",
          "desc_ru": "мобильные"
        }, {
          "mask": "+967-#-###-###",
          "cc": "YE",
          "cd": "Yemen",
          "desc_en": "",
          "name_ru": "Йемен",
          "desc_ru": ""
        }, {
          "mask": "+967-##-###-###",
          "cc": "YE",
          "cd": "Yemen",
          "desc_en": "",
          "name_ru": "Йемен",
          "desc_ru": ""
        }, {
          "mask": "+27-##-###-####",
          "cc": "ZA",
          "cd": "South Africa",
          "desc_en": "",
          "name_ru": "Южно-Африканская Респ.",
          "desc_ru": ""
        }, {
          "mask": "+260-##-###-####",
          "cc": "ZM",
          "cd": "Zambia",
          "desc_en": "",
          "name_ru": "Замбия",
          "desc_ru": ""
        }, {
          "mask": "+263-#-######",
          "cc": "ZW",
          "cd": "Zimbabwe",
          "desc_en": "",
          "name_ru": "Зимбабве",
          "desc_ru": ""
        }, {
          "mask": "+1(###)###-####",
          "cc": ["US", "CA"],
          "cd": "USA and Canada",
          "desc_en": "",
          "name_ru": "США и Канада",
          "desc_ru": ""
        }]
      }
    });

    return Inputmask;
  }));
$(document).ready(function() {
  // Sets viewScroller
  // $('.mainbag').viewScroller({
  //   useScrollbar: false,
  //   changeWhenAnim: false
  // });
  // triangle set width

  function mobileFriendly() {
    setTimeout(function() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        var ww = (document.documentElement.clientWidth < window.screen.width) ? jQuery(window).width() : window.screen.width; //get proper width
        var mw = 1200;
        //alert ("width" + ww);
        var ratio = ww / mw; //calculate ratio
        //alert ("ratio: " + ratio);
        if (ratio < 1) { //smaller than minimum size
          jQuery("meta[name='viewport']").attr('content', 'initial-scale=' + ratio + ', maximum-scale=' + ratio + ', minimum-scale=' + ratio + ', user-scalable=yes, width=' + mw);
        } else { //regular size
          jQuery("meta[name='viewport']").attr('content', 'initial-scale=1.0, maximum-scale=2, minimum-scale=1.0, user-scalable=yes, width=' + ww);
        }
      }
    }, 600);
  }
  jQuery(document).ready(function() {
    mobileFriendly()
  });

  window.addEventListener("orientationchange", mobileFriendly, false);

  var screenWidth = $('.home-second--title').width();
  var borderWidth = screenWidth / 2 + 'px';
  $('<style>.arrow-top::after,.home-second .arrow-top::after{border-left-width:' + borderWidth + ';border-right-width:' + borderWidth + ';margin-left:-' + borderWidth + ';}</style>').appendTo('header');


  $("input[name=phone]").inputmask(undefined, {
    oncomplete: function() {
      var eventIdenticators = $(this).next().next(".eventIndicator").children("span");
      $.each(eventIdenticators, function(ndx, lmnt) {
        var $lmnt = $(lmnt);
        if ($lmnt.hasClass("complete")) {
          $lmnt.addClass("fired");
        } else {
          $lmnt.removeClass("fired");
        }
      });
    },
    onincomplete: function() {
      var eventIdenticators = $(this).next().next(".eventIndicator").children("span");
      $.each(eventIdenticators, function(ndx, lmnt) {
        var $lmnt = $(lmnt);
        if ($lmnt.hasClass("incomplete")) {
          $lmnt.addClass("fired");
        } else {
          $lmnt.removeClass("fired");
        }
      });
    },
    oncleared: function() {
      var eventIdenticators = $(this).next().next(".eventIndicator").children("span");
      $.each(eventIdenticators, function(ndx, lmnt) {
        var $lmnt = $(lmnt);
        if ($lmnt.hasClass("cleared")) {
          $lmnt.addClass("fired");
        } else {
          $lmnt.removeClass("fired");
        }
      });
    },
    onKeyValidation: function(result, opts) {
      var eventIdenticators = $(this).next().next(".eventIndicator").children("span");
      if (this.id == "phone" && $(this).inputmask("getmetadata")) {
        $(this).next().text($(this).inputmask("getmetadata")["cd"]);
      }
      $.each(eventIdenticators, function(ndx, lmnt) {
        var $lmnt = $(lmnt);
        if ($lmnt.hasClass("keyvalidation")) {
          if (result !== false) {
            $lmnt.addClass("fired");
          } else {
            $lmnt.removeClass("fired");
          }
        }
      });
    }
  }).on("input", function() {
    var eventIdenticators = $(this).next().next(".eventIndicator").children("span");
    $.each(eventIdenticators, function(ndx, lmnt) {
      var $lmnt = $(lmnt);
      if ($lmnt.hasClass("input")) {
        $lmnt.addClass("fired");
        setTimeout(function() {
          $lmnt.removeClass("fired");
        }, 100);
      }
    });
  });

  $('input[name=email]').inputmask({
    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    greedy: false,
    onBeforePaste: function (pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace("mailto:", "");
    },
    definitions: {
      '*': {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        cardinality: 1,
        casing: "lower"
      }
    }
  });

  // modal forms
  $(".modal-c").click(function(event) {
    event.stopPropagation();
  });
  $('.modalbg').on('click', function(e) {
    event.stopPropagation();
    $('.modalbg').fadeOut('fast');
  })
  $('span.close').on('click', function(e) {
    $('.modalbg').fadeOut('fast');
  })

  $('.ancient-offer .btn').on('click', function(e){
    e.preventDefault();
    $('.modal-ancient-offer').css('display', 'flex');
  })

  $('.ancient-fourth .btn').on('click', function(e){
    e.preventDefault();
    $('.modal-ancient-offer').css('display', 'flex');
  })

  $('.ancient-nine .btn').on('click', function(e){
    e.preventDefault();
    $('.modal-ancient-offer').css('display', 'flex');
  })

  $('.weoffer .btn').on('click', function(e){
    e.preventDefault();
    $('.modal-ancient-offer').css('display', 'flex');
  })

  $('.home-third .btn').on('click', function(e){
    e.preventDefault();
    $('.modal-ancient-offer').css('display', 'flex');
  })

  $('.design--item .btn').on('click', function(e){
    e.preventDefault();
    $('.modal-ancient-offer').css('display', 'flex');
  })

  $('.design-first .btn-red').on('click', function(e){
    e.preventDefault();
    $('.modal-ancient-offer').css('display', 'flex');
  })

  $('.design-second .btn-red').on('click', function(e){
    e.preventDefault();
    $('.modal-ancient-offer').css('display', 'flex');
  })

  $('.design-third .btn-red').on('click', function(e){
    e.preventDefault();
    $('.modal-ancient-offer').css('display', 'flex');
  })

  $('.design-fourth .btn').on('click', function(e){
    e.preventDefault();
    $('.modal-ancient-offer').css('display', 'flex');
  })

  $('.design-five .btn').on('click', function(e){
    e.preventDefault();
    $('.modal-ancient-offer').css('display', 'flex');
  })

  $('.home-eight .btn').on('click', function(e){
    e.preventDefault();
    $('.modal-ancient-offer').css('display', 'flex');
  })

  $('.ancient-six .btn').on('click', function(e){
    e.preventDefault();
    $('.modal-ancient-sms').css('display', 'flex');
  })

  $('.home-five .btn').on('click', function(e){
    e.preventDefault();
    $('.modal-ancient-sms').css('display', 'flex');
  })


  // Variable to hold request
  var request;

  // Bind to the submit event of our form
  $(".red-form").submit(function(event) {
    // Prevent default posting of form - put here to work in case of errors
    event.preventDefault();
    // Abort any pending request
    if (request) {
      request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
      url: "/handler.php",
      type: "post",
      data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function(response, textStatus, jqXHR) {
      // Log a message to the console
      console.log("Ho o o oray, it worked!");
      $form.children('input').fadeOut('fast');
      $form.children('button').fadeOut('fast');
      $form.find('.form-sended').fadeIn('fast');
    });

    // Callback handler that will be called on failure
    request.fail(function(jqXHR, textStatus, errorThrown) {
      // Log the error to the console
      console.error(
        "The following error occurred: " +
        textStatus, errorThrown
      );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function() {
      // Reenable the inputs
      $inputs.prop("disabled", false);
    });

  });

  // Bind to the submit event of our form
  $(".form-container form").submit(function(event) {
    // Prevent default posting of form - put here to work in case of errors
    event.preventDefault();
    // Abort any pending request
    if (request) {
      request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
      url: "/handler.php",
      type: "post",
      data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function(response, textStatus, jqXHR) {
      // Log a message to the console
      console.log("Ho o o oray, it worked!");
      $form.children('input').fadeOut('fast');
      $form.children('button').fadeOut('fast');
      $form.find('.form-sended').fadeIn('fast');
    });

    // Callback handler that will be called on failure
    request.fail(function(jqXHR, textStatus, errorThrown) {
      // Log the error to the console
      console.error(
        "The following error occurred: " +
        textStatus, errorThrown
      );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function() {
      // Reenable the inputs
      $inputs.prop("disabled", false);
    });

  });

  // Bind to the submit event of our form
  $(".modal-c form").submit(function(event) {
    // Prevent default posting of form - put here to work in case of errors
    event.preventDefault();
    // Abort any pending request
    if (request) {
      request.abort();
    }
    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
    request = $.ajax({
      url: "/handler.php",
      type: "post",
      data: serializedData
    });

    // Callback handler that will be called on success
    request.done(function(response, textStatus, jqXHR) {
      // Log a message to the console
      console.log("Ho o o oray, it worked!");
      $form.parent('').children('h5').fadeOut('fast');
      $form.parent('').children('h6').fadeOut('fast');
      $form.children('input').fadeOut('fast');
      $form.children('button').fadeOut('fast');
      $form.parent('').find('.form-sended').fadeIn('fast');
    });

    // Callback handler that will be called on failure
    request.fail(function(jqXHR, textStatus, errorThrown) {
      // Log the error to the console
      console.error(
        "The following error occurred: " +
        textStatus, errorThrown
      );
    });

    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function() {
      // Reenable the inputs
      $inputs.prop("disabled", false);
    });

  });

});
