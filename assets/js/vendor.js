"use strict";

/*! jQuery & Zepto Lazy v1.7.10 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2018 Daniel 'Eisbehr' Kern */
!function (t, e) {
  "use strict";

  function r(r, a, i, u, l) {
    function f() {
      L = t.devicePixelRatio > 1, i = c(i), a.delay >= 0 && setTimeout(function () {
        s(!0);
      }, a.delay), (a.delay < 0 || a.combined) && (u.e = v(a.throttle, function (t) {
        "resize" === t.type && (w = B = -1), s(t.all);
      }), u.a = function (t) {
        t = c(t), i.push.apply(i, t);
      }, u.g = function () {
        return i = n(i).filter(function () {
          return !n(this).data(a.loadedName);
        });
      }, u.f = function (t) {
        for (var e = 0; e < t.length; e++) {
          var r = i.filter(function () {
            return this === t[e];
          });
          r.length && s(!1, r);
        }
      }, s(), n(a.appendScroll).on("scroll." + l + " resize." + l, u.e));
    }

    function c(t) {
      var i = a.defaultImage,
          o = a.placeholder,
          u = a.imageBase,
          l = a.srcsetAttribute,
          f = a.loaderAttribute,
          c = a._f || {};
      t = n(t).filter(function () {
        var t = n(this),
            r = m(this);
        return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(l) || t.attr(f) || c[r] !== e);
      }).data("plugin_" + a.name, r);

      for (var s = 0, d = t.length; s < d; s++) {
        var A = n(t[s]),
            g = m(t[s]),
            h = A.attr(a.imageBaseAttribute) || u;
        g === N && h && A.attr(l) && A.attr(l, b(A.attr(l), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g === N && i && !A.attr(E) ? A.attr(E, i) : g === N || !o || A.css(O) && "none" !== A.css(O) || A.css(O, "url('" + o + "')");
      }

      return t;
    }

    function s(t, e) {
      if (!i.length) return void (a.autoDestroy && r.destroy());

      for (var o = e || i, u = !1, l = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++) {
        if (t || e || A(o[s])) {
          var g = n(o[s]),
              h = m(o[s]),
              b = g.attr(a.attribute),
              v = g.attr(a.imageBaseAttribute) || l,
              p = g.attr(a.loaderAttribute);
          g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h === N && (v + b !== g.attr(E) || g.attr(f) !== g.attr(F)) || h !== N && v + b !== g.css(O)) || p) || (u = !0, g.data(c, !0), d(g, h, v, p));
        }
      }

      u && (i = n(i).filter(function () {
        return !n(this).data(c);
      }));
    }

    function d(t, e, r, i) {
      ++z;

      var _o = function o() {
        y("onError", t), p(), _o = n.noop;
      };

      y("beforeLoad", t);
      var u = a.attribute,
          l = a.srcsetAttribute,
          f = a.sizesAttribute,
          c = a.retinaAttribute,
          s = a.removeAttribute,
          d = a.loadedName,
          A = t.attr(c);

      if (i) {
        var _g = function g() {
          s && t.removeAttr(a.loaderAttribute), t.data(d, !0), y(T, t), setTimeout(p, 1), _g = n.noop;
        };

        t.off(I).one(I, _o).one(D, _g), y(i, t, function (e) {
          e ? (t.off(D), _g()) : (t.off(I), _o());
        }) || t.trigger(I);
      } else {
        var h = n(new Image());
        h.one(I, _o).one(D, function () {
          t.hide(), e === N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(u + " " + l + " " + c + " " + a.imageBaseAttribute), f !== C && t.removeAttr(f)), t.data(d, !0), y(T, t), h.remove(), p();
        });
        var m = (L && A ? A : t.attr(u)) || "";
        h.attr(C, t.attr(f)).attr(F, t.attr(l)).attr(E, m ? r + m : null), h.complete && h.trigger(D);
      }
    }

    function A(t) {
      var e = t.getBoundingClientRect(),
          r = a.scrollDirection,
          n = a.threshold,
          i = h() + n > e.top && -n < e.bottom,
          o = g() + n > e.left && -n < e.right;
      return "vertical" === r ? i : "horizontal" === r ? o : i && o;
    }

    function g() {
      return w >= 0 ? w : w = n(t).width();
    }

    function h() {
      return B >= 0 ? B : B = n(t).height();
    }

    function m(t) {
      return t.tagName.toLowerCase();
    }

    function b(t, e) {
      if (e) {
        var r = t.split(",");
        t = "";

        for (var a = 0, n = r.length; a < n; a++) {
          t += e + r[a].trim() + (a !== n - 1 ? "," : "");
        }
      }

      return t;
    }

    function v(t, e) {
      var n,
          i = 0;
      return function (o, u) {
        function l() {
          i = +new Date(), e.call(r, o);
        }

        var f = +new Date() - i;
        n && clearTimeout(n), f > t || !a.enableThrottle || u ? l() : n = setTimeout(l, t - f);
      };
    }

    function p() {
      --z, i.length || z || y("onFinishedAll");
    }

    function y(t, e, n) {
      return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0);
    }

    var z = 0,
        w = -1,
        B = -1,
        L = !1,
        T = "afterLoad",
        D = "load",
        I = "error",
        N = "img",
        E = "src",
        F = "srcset",
        C = "sizes",
        O = "background-image";
    "event" === a.bind || o ? f() : n(t).on(D + "." + l, f);
  }

  function a(a, o) {
    var u = this,
        l = n.extend({}, u.config, o),
        f = {},
        c = l.name + "-" + ++i;
    return u.config = function (t, r) {
      return r === e ? l[t] : (l[t] = r, u);
    }, u.addItems = function (t) {
      return f.a && f.a("string" === n.type(t) ? n(t) : t), u;
    }, u.getItems = function () {
      return f.g ? f.g() : {};
    }, u.update = function (t) {
      return f.e && f.e({}, !t), u;
    }, u.force = function (t) {
      return f.f && f.f("string" === n.type(t) ? n(t) : t), u;
    }, u.loadAll = function () {
      return f.e && f.e({
        all: !0
      }, !0), u;
    }, u.destroy = function () {
      return n(l.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e;
    }, r(u, l, a, f, c), l.chainable ? a : u;
  }

  var n = t.jQuery || t.Zepto,
      i = 0,
      o = !1;
  n.fn.Lazy = n.fn.lazy = function (t) {
    return new a(this, t);
  }, n.Lazy = n.lazy = function (t, r, i) {
    if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) {
      t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r];

      for (var o = a.prototype.config, u = o._f || (o._f = {}), l = 0, f = t.length; l < f; l++) {
        (o[t[l]] === e || n.isFunction(o[t[l]])) && (o[t[l]] = i);
      }

      for (var c = 0, s = r.length; c < s; c++) {
        u[r[c]] = t[0];
      }
    }
  }, a.prototype.config = {
    name: "lazy",
    chainable: !0,
    autoDestroy: !0,
    bind: "load",
    threshold: 500,
    visibleOnly: !1,
    appendScroll: t,
    scrollDirection: "both",
    imageBase: null,
    defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    placeholder: null,
    delay: -1,
    combined: !1,
    attribute: "data-src",
    srcsetAttribute: "data-srcset",
    sizesAttribute: "data-sizes",
    retinaAttribute: "data-retina",
    loaderAttribute: "data-loader",
    imageBaseAttribute: "data-imagebase",
    removeAttribute: !0,
    handledName: "handled",
    loadedName: "loaded",
    effect: "show",
    effectTime: 0,
    enableThrottle: !0,
    throttle: 250,
    beforeLoad: e,
    afterLoad: e,
    onError: e,
    onFinishedAll: e
  }, n(t).on("load", function () {
    o = !0;
  });
}(window);
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * jQuery plugin paroller.js v1.4.7
 * https://github.com/tgomilar/paroller.js
 * preview: https://tgomilar.github.io/paroller/
 * author: Tanja Gomilar
 **/
(function (factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define('parollerjs', ['jquery'], factory);
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && _typeof(module.exports) === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
})(function ($) {
  'use strict';

  var working = false;

  var scrollAction = function scrollAction() {
    working = false;
  };

  var setDirection = {
    bgVertical: function bgVertical(elem, bgOffset) {
      return elem.css({
        'background-position': 'center ' + -bgOffset + 'px'
      });
    },
    bgHorizontal: function bgHorizontal(elem, bgOffset) {
      return elem.css({
        'background-position': -bgOffset + 'px' + ' center'
      });
    },
    vertical: function vertical(elem, elemOffset, transition, oldTransform) {
      oldTransform === 'none' ? oldTransform = '' : true;
      return elem.css({
        '-webkit-transform': 'translateY(' + elemOffset + 'px)' + oldTransform,
        '-moz-transform': 'translateY(' + elemOffset + 'px)' + oldTransform,
        'transform': 'translateY(' + elemOffset + 'px)' + oldTransform,
        'transition': transition,
        'will-change': 'transform'
      });
    },
    horizontal: function horizontal(elem, elemOffset, transition, oldTransform) {
      oldTransform === 'none' ? oldTransform = '' : true;
      return elem.css({
        '-webkit-transform': 'translateX(' + elemOffset + 'px)' + oldTransform,
        '-moz-transform': 'translateX(' + elemOffset + 'px)' + oldTransform,
        'transform': 'translateX(' + elemOffset + 'px)' + oldTransform,
        'transition': transition,
        'will-change': 'transform'
      });
    }
  };
  var setMovement = {
    factor: function factor(elem, width, options) {
      var dataFactor = elem.data('paroller-factor');
      var factor = dataFactor ? dataFactor : options.factor;

      if (width < 576) {
        var dataFactorXs = elem.data('paroller-factor-xs');
        var factorXs = dataFactorXs ? dataFactorXs : options.factorXs;
        return factorXs ? factorXs : factor;
      } else if (width <= 768) {
        var dataFactorSm = elem.data('paroller-factor-sm');
        var factorSm = dataFactorSm ? dataFactorSm : options.factorSm;
        return factorSm ? factorSm : factor;
      } else if (width <= 1024) {
        var dataFactorMd = elem.data('paroller-factor-md');
        var factorMd = dataFactorMd ? dataFactorMd : options.factorMd;
        return factorMd ? factorMd : factor;
      } else if (width <= 1200) {
        var dataFactorLg = elem.data('paroller-factor-lg');
        var factorLg = dataFactorLg ? dataFactorLg : options.factorLg;
        return factorLg ? factorLg : factor;
      } else if (width <= 1920) {
        var dataFactorXl = elem.data('paroller-factor-xl');
        var factorXl = dataFactorXl ? dataFactorXl : options.factorXl;
        return factorXl ? factorXl : factor;
      } else {
        return factor;
      }
    },
    bgOffset: function bgOffset(offset, factor) {
      return Math.round(offset * factor);
    },
    transform: function transform(offset, factor, windowHeight, height) {
      return Math.round((offset - windowHeight / 2 + height) * factor);
    }
  };
  var clearPositions = {
    background: function background(elem) {
      return elem.css({
        'background-position': 'unset'
      });
    },
    foreground: function foreground(elem) {
      return elem.css({
        'transform': 'unset',
        'transition': 'unset'
      });
    }
  };

  $.fn.paroller = function (options) {
    var windowHeight = $(window).height();
    var documentHeight = $(document).height(); // default options

    var options = $.extend({
      factor: 0,
      // - to +
      factorXs: 0,
      // - to +
      factorSm: 0,
      // - to +
      factorMd: 0,
      // - to +
      factorLg: 0,
      // - to +
      factorXl: 0,
      // - to +
      transition: 'translate 0.1s ease',
      // CSS transition
      type: 'background',
      // foreground
      direction: 'vertical' // horizontal

    }, options);
    return this.each(function () {
      var $this = $(this);
      var width = $(window).width();
      var offset = $this.offset().top;
      var height = $this.outerHeight();
      var dataType = $this.data('paroller-type');
      var dataDirection = $this.data('paroller-direction');
      var dataTransition = $this.data('paroller-transition');
      var oldTransform = $this.css('transform');
      var transition = dataTransition ? dataTransition : options.transition;
      var type = dataType ? dataType : options.type;
      var direction = dataDirection ? dataDirection : options.direction;
      var factor = 0;
      var bgOffset = setMovement.bgOffset(offset, factor);
      var transform = setMovement.transform(offset, factor, windowHeight, height);

      if (type === 'background') {
        if (direction === 'vertical') {
          setDirection.bgVertical($this, bgOffset);
        } else if (direction === 'horizontal') {
          setDirection.bgHorizontal($this, bgOffset);
        }
      } else if (type === 'foreground') {
        if (direction === 'vertical') {
          setDirection.vertical($this, transform, transition, oldTransform);
        } else if (direction === 'horizontal') {
          setDirection.horizontal($this, transform, transition, oldTransform);
        }
      }

      $(window).on('resize', function () {
        var scrolling = $(this).scrollTop();
        width = $(window).width();
        offset = $this.offset().top;
        height = $this.outerHeight();
        factor = setMovement.factor($this, width, options);
        bgOffset = Math.round(offset * factor);
        transform = Math.round((offset - windowHeight / 2 + height) * factor);

        if (!working) {
          window.requestAnimationFrame(scrollAction);
          working = true;
        }

        if (type === 'background') {
          clearPositions.background($this);

          if (direction === 'vertical') {
            setDirection.bgVertical($this, bgOffset);
          } else if (direction === 'horizontal') {
            setDirection.bgHorizontal($this, bgOffset);
          }
        } else if (type === 'foreground' && scrolling <= documentHeight) {
          clearPositions.foreground($this);

          if (direction === 'vertical') {
            setDirection.vertical($this, transform, transition);
          } else if (direction === 'horizontal') {
            setDirection.horizontal($this, transform, transition);
          }
        }
      });
      $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();
        var scrollTop = $(document).scrollTop();

        if (scrollTop === 0) {
          factor = 0;
        } else {
          factor = setMovement.factor($this, width, options);
        }

        bgOffset = Math.round((offset - scrolling) * factor);
        transform = Math.round((offset - windowHeight / 2 + height - scrolling) * factor);

        if (!working) {
          window.requestAnimationFrame(scrollAction);
          working = true;
        }

        if (type === 'background') {
          if (direction === 'vertical') {
            setDirection.bgVertical($this, bgOffset);
          } else if (direction === 'horizontal') {
            setDirection.bgHorizontal($this, bgOffset);
          }
        } else if (type === 'foreground' && scrolling <= documentHeight) {
          if (direction === 'vertical') {
            setDirection.vertical($this, transform, transition, oldTransform);
          } else if (direction === 'horizontal') {
            setDirection.horizontal($this, transform, transition, oldTransform);
          }
        }
      });
    });
  };
});