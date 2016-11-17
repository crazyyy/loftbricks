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


});
