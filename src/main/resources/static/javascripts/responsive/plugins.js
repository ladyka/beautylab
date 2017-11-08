var beautyDebug = false;
window.Modernizr = function (a, b, c) {
    function d(a) {
        t.cssText = a
    }

    function e(a, b) {
        return d(x.join(a + ";") + (b || ""))
    }

    function f(a, b) {
        return typeof a === b
    }

    function g(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function h(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!g(e, "-") && t[e] !== c) return "pfx" == b ? e : !0
        }
        return !1
    }

    function i(a, b, d) {
        for (var e in a) {
            var g = b[a[e]];
            if (g !== c) return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g
        }
        return !1
    }

    function j(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
            e = (a + " " + z.join(d + " ") + d).split(" ");
        return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + A.join(d + " ") + d).split(" "), i(e, b, c))
    }

    function k() {
        o.input = function (c) {
            for (var d = 0, e = c.length; e > d; d++) E[c[d]] = !!(c[d] in u);
            return E.list && (E.list = !(!b.createElement("datalist") || !a.HTMLDataListElement)), E
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), o.inputtypes = function (a) {
            for (var d, e, f, g = 0, h = a.length; h > g; g++) u.setAttribute("type", e = a[g]), d = "text" !== u.type, d && (u.value = v, u.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(e) && u.style.WebkitAppearance !== c ? (q.appendChild(u), f = b.defaultView, d = f.getComputedStyle && "textfield" !== f.getComputedStyle(u, null).WebkitAppearance && 0 !== u.offsetHeight, q.removeChild(u)) : /^(search|tel)$/.test(e) || (d = /^(url|email)$/.test(e) ? u.checkValidity && u.checkValidity() === !1 : u.value != v)), D[a[g]] = !!d;
            return D
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }

    var l, m, n = "2.8.3",
        o = {},
        p = !0,
        q = b.documentElement,
        r = "modernizr",
        s = b.createElement(r),
        t = s.style,
        u = b.createElement("input"),
        v = ":)",
        w = {}.toString,
        x = " -webkit- -moz- -o- -ms- ".split(" "),
        y = "Webkit Moz O ms",
        z = y.split(" "),
        A = y.toLowerCase().split(" "),
        B = {
            svg: "http://www.w3.org/2000/svg"
        },
        C = {},
        D = {},
        E = {},
        F = [],
        G = F.slice,
        H = function (a, c, d, e) {
            var f, g, h, i, j = b.createElement("div"),
                k = b.body,
                l = k || b.createElement("body");
            if (parseInt(d, 10))
                for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : r + (d + 1), j.appendChild(h);
            return f = ["&#173;", '<style id="s', r, '">', a, "</style>"].join(""), j.id = r, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = q.style.overflow, q.style.overflow = "hidden", q.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), q.style.overflow = i), !!g
        },
        I = function (b) {
            var c = a.matchMedia || a.msMatchMedia;
            if (c) return c(b) && c(b).matches || !1;
            var d;
            return H("@media " + b + " { #" + r + " { position: absolute; } }", function (b) {
                d = "absolute" == (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position
            }), d
        },
        J = function () {
            function a(a, e) {
                e = e || b.createElement(d[a] || "div"), a = "on" + a;
                var g = a in e;
                return g || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(a, ""), g = f(e[a], "function"), f(e[a], "undefined") || (e[a] = c), e.removeAttribute(a))), e = null, g
            }

            var d = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return a
        }(),
        K = {}.hasOwnProperty;
    m = f(K, "undefined") || f(K.call, "undefined") ? function (a, b) {
        return b in a && f(a.constructor.prototype[b], "undefined")
    } : function (a, b) {
        return K.call(a, b)
    }, Function.prototype.bind || (Function.prototype.bind = function (a) {
        var b = this;
        if ("function" != typeof b) throw new TypeError;
        var c = G.call(arguments, 1),
            d = function () {
                if (this instanceof d) {
                    var e = function () {
                    };
                    e.prototype = b.prototype;
                    var f = new e,
                        g = b.apply(f, c.concat(G.call(arguments)));
                    return Object(g) === g ? g : f
                }
                return b.apply(a, c.concat(G.call(arguments)))
            };
        return d
    }), C.flexbox = function () {
        return j("flexWrap")
    }, C.flexboxlegacy = function () {
        return j("boxDirection")
    }, C.canvas = function () {
        var a = b.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    }, C.canvastext = function () {
        return !(!o.canvas || !f(b.createElement("canvas").getContext("2d").fillText, "function"))
    }, C.webgl = function () {
        return !!a.WebGLRenderingContext
    }, C.touch = function () {
        var c;
        return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : H(["@media (", x.join("touch-enabled),("), r, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
            c = 9 === a.offsetTop
        }), c
    }, C.geolocation = function () {
        return "geolocation" in navigator
    }, C.postmessage = function () {
        return !!a.postMessage
    }, C.websqldatabase = function () {
        return !!a.openDatabase
    }, C.indexedDB = function () {
        return !!j("indexedDB", a)
    }, C.hashchange = function () {
        return J("hashchange", a) && (b.documentMode === c || b.documentMode > 7)
    }, C.history = function () {
        return !(!a.history || !history.pushState)
    }, C.draganddrop = function () {
        var a = b.createElement("div");
        return "draggable" in a || "ondragstart" in a && "ondrop" in a
    }, C.websockets = function () {
        return "WebSocket" in a || "MozWebSocket" in a
    }, C.rgba = function () {
        return d("background-color:rgba(150,255,150,.5)"), g(t.backgroundColor, "rgba")
    }, C.hsla = function () {
        return d("background-color:hsla(120,40%,100%,.5)"), g(t.backgroundColor, "rgba") || g(t.backgroundColor, "hsla")
    }, C.multiplebgs = function () {
        return d("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(t.background)
    }, C.backgroundsize = function () {
        return j("backgroundSize")
    }, C.borderimage = function () {
        return j("borderImage")
    }, C.borderradius = function () {
        return j("borderRadius")
    }, C.boxshadow = function () {
        return j("boxShadow")
    }, C.textshadow = function () {
        return "" === b.createElement("div").style.textShadow
    }, C.opacity = function () {
        return e("opacity:.55"), /^0.55$/.test(t.opacity)
    }, C.cssanimations = function () {
        return j("animationName")
    }, C.csscolumns = function () {
        return j("columnCount")
    }, C.cssgradients = function () {
        var a = "background-image:",
            b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            c = "linear-gradient(left top,#9f9, white);";
        return d((a + "-webkit- ".split(" ").join(b + a) + x.join(c + a)).slice(0, -a.length)), g(t.backgroundImage, "gradient")
    }, C.cssreflections = function () {
        return j("boxReflect")
    }, C.csstransforms = function () {
        return !!j("transform")
    }, C.csstransforms3d = function () {
        var a = !!j("perspective");
        return a && "webkitPerspective" in q.style && H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b) {
            a = 9 === b.offsetLeft && 3 === b.offsetHeight
        }), a
    }, C.csstransitions = function () {
        return j("transition")
    }, C.fontface = function () {
        var a;
        return H('@font-face {font-family:"font";src:url("https://")}', function (c, d) {
            var e = b.getElementById("smodernizr"),
                f = e.sheet || e.styleSheet,
                g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : "";
            a = /src/i.test(g) && 0 === g.indexOf(d.split(" ")[0])
        }), a
    }, C.generatedcontent = function () {
        var a;
        return H(["#", r, "{font:0/0 a}#", r, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}'].join(""), function (b) {
            a = b.offsetHeight >= 3
        }), a
    }, C.video = function () {
        var a = b.createElement("video"),
            c = !1;
        try {
            (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (d) {
        }
        return c
    }, C.audio = function () {
        var a = b.createElement("audio"),
            c = !1;
        try {
            (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (d) {
        }
        return c
    }, C.localstorage = function () {
        try {
            return localStorage.setItem(r, r), localStorage.removeItem(r), !0
        } catch (a) {
            return !1
        }
    }, C.sessionstorage = function () {
        try {
            return sessionStorage.setItem(r, r), sessionStorage.removeItem(r), !0
        } catch (a) {
            return !1
        }
    }, C.webworkers = function () {
        return !!a.Worker
    }, C.applicationcache = function () {
        return !!a.applicationCache
    }, C.svg = function () {
        return !!b.createElementNS && !!b.createElementNS(B.svg, "svg").createSVGRect
    }, C.inlinesvg = function () {
        var a = b.createElement("div");
        return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == B.svg
    }, C.smil = function () {
        return !!b.createElementNS && /SVGAnimate/.test(w.call(b.createElementNS(B.svg, "animate")))
    }, C.svgclippaths = function () {
        return !!b.createElementNS && /SVGClipPath/.test(w.call(b.createElementNS(B.svg, "clipPath")))
    };
    for (var L in C) m(C, L) && (l = L.toLowerCase(), o[l] = C[L](), F.push((o[l] ? "" : "no-") + l));
    return o.input || k(), o.addTest = function (a, b) {
        if ("object" == typeof a)
            for (var d in a) m(a, d) && o.addTest(d, a[d]);
        else {
            if (a = a.toLowerCase(), o[a] !== c) return o;
            b = "function" == typeof b ? b() : b, "undefined" != typeof p && p && (q.className += " " + (b ? "" : "no-") + a), o[a] = b
        }
        return o
    }, d(""), s = u = null,
        function (a, b) {
            function c(a, b) {
                var c = a.createElement("p"),
                    d = a.getElementsByTagName("head")[0] || a.documentElement;
                return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
            }

            function d() {
                var a = s.elements;
                return "string" == typeof a ? a.split(" ") : a
            }

            function e(a) {
                var b = r[a[p]];
                return b || (b = {}, q++, a[p] = q, r[q] = b), b
            }

            function f(a, c, d) {
                if (c || (c = b), k) return c.createElement(a);
                d || (d = e(c));
                var f;
                return f = d.cache[a] ? d.cache[a].cloneNode() : o.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !f.canHaveChildren || n.test(a) || f.tagUrn ? f : d.frag.appendChild(f)
            }

            function g(a, c) {
                if (a || (a = b), k) return a.createDocumentFragment();
                c = c || e(a);
                for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) f.createElement(h[g]);
                return f
            }

            function h(a, b) {
                b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                    return s.shivMethods ? f(c, a, b) : b.createElem(c)
                }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-]+/g, function (a) {
                    return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                }) + ");return n}")(s, b.frag)
            }

            function i(a) {
                a || (a = b);
                var d = e(a);
                return !s.shivCSS || j || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || h(a, d), a
            }

            var j, k, l = "3.7.0",
                m = a.html5 || {},
                n = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                p = "_html5shiv",
                q = 0,
                r = {};
            !function () {
                try {
                    var a = b.createElement("a");
                    a.innerHTML = "<xyz></xyz>", j = "hidden" in a, k = 1 == a.childNodes.length || function () {
                        b.createElement("a");
                        var a = b.createDocumentFragment();
                        return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
                    }()
                } catch (c) {
                    j = !0, k = !0
                }
            }();
            var s = {
                elements: m.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: l,
                shivCSS: m.shivCSS !== !1,
                supportsUnknownElements: k,
                shivMethods: m.shivMethods !== !1,
                type: "default",
                shivDocument: i,
                createElement: f,
                createDocumentFragment: g
            };
            a.html5 = s, i(b)
        }(this, b), o._version = n, o._prefixes = x, o._domPrefixes = A, o._cssomPrefixes = z, o.mq = I, o.hasEvent = J, o.testProp = function (a) {
        return h([a])
    }, o.testAllProps = j, o.testStyles = H, o.prefixed = function (a, b, c) {
        return b ? j(a, b, c) : j(a, "pfx")
    }, q.className = q.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (p ? " js " + F.join(" ") : ""), o
}(this, this.document);

/*!
 * jQuery Cookie Plugin v1.2
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function ($, document, undefined) {

    var pluses = /\+/g;

    function raw(s) {
        return s;
    }

    function decoded(s) {
        return decodeURIComponent(s.replace(pluses, ' '));
    }

    $.cookie = function (key, value, options) {

        // key and at least value given, set cookie...
        if (value !== undefined && !/Object/.test(Object.prototype.toString.call(value))) {
            options = $.extend({}, $.cookie.defaults, options);

            if (value === null) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || $.cookie.defaults || {};
        var decode = options.raw ? raw : decoded;
        var cookies = document.cookie.split('; ');
        for (var i = 0, parts;
             (parts = cookies[i] && cookies[i].split('=')); i++) {
            if (decode(parts.shift()) === key) {
                return decode(parts.join('='));
            }
        }

        return null;
    };

    $.cookie.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key, options) !== null) {
            $.cookie(key, null, options);
            return true;
        }
        return false;
    };

})(jQuery, document);
// JavaScript Document
/*
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.99 (12-MAR-2011)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.3.2 or later
 */
(function ($) {
    var ver = "2.99";
    if ($.support == undefined) {
        $.support = {
            opacity: !($.browser.msie)
        };
    }

    function debug(s) {
        $.fn.cycle.debug && log(s);
    }

    function log() {
        if (beautyDebug) {
            window.console && console.log && console.log("[cycle] " + Array.prototype.join.call(arguments, " "));
        }
    }

    $.expr[":"].paused = function (el) {
        return el.cyclePause;
    };
    $.fn.cycle = function (options, arg2) {
        var o = {
            s: this.selector,
            c: this.context
        };
        if (this.length === 0 && options != "stop") {
            if (!$.isReady && o.s) {
                log("DOM not ready, queuing slideshow");
                $(function () {
                    $(o.s, o.c).cycle(options, arg2);
                });
                return this;
            }
            log("terminating; zero elements found by selector" + ($.isReady ? "" : " (DOM not ready)"));
            return this;
        }
        return this.each(function () {
            var opts = handleArguments(this, options, arg2);
            if (opts === false) {
                return;
            }
            opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
            if (this.cycleTimeout) {
                clearTimeout(this.cycleTimeout);
            }
            this.cycleTimeout = this.cyclePause = 0;
            var $cont = $(this);
            var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
            var els = $slides.get();
            if (els.length < 2) {
                log("terminating; too few slides: " + els.length);
                return;
            }
            var opts2 = buildOptions($cont, $slides, els, opts, o);
            if (opts2 === false) {
                return;
            }
            var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.backwards);
            if (startTime) {
                startTime += (opts2.delay || 0);
                if (startTime < 10) {
                    startTime = 10;
                }
                debug("first timeout: " + startTime);
                this.cycleTimeout = setTimeout(function () {
                    go(els, opts2, 0, !opts.backwards);
                }, startTime);
            }
        });
    };

    function handleArguments(cont, options, arg2) {
        if (cont.cycleStop == undefined) {
            cont.cycleStop = 0;
        }
        if (options === undefined || options === null) {
            options = {};
        }
        if (options.constructor == String) {
            switch (options) {
                case "destroy":
                case "stop":
                    var opts = $(cont).data("cycle.opts");
                    if (!opts) {
                        return false;
                    }
                    cont.cycleStop++;
                    if (cont.cycleTimeout) {
                        clearTimeout(cont.cycleTimeout);
                    }
                    cont.cycleTimeout = 0;
                    $(cont).removeData("cycle.opts");
                    if (options == "destroy") {
                        destroy(opts);
                    }
                    return false;
                case "toggle":
                    cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
                    checkInstantResume(cont.cyclePause, arg2, cont);
                    return false;
                case "pause":
                    cont.cyclePause = 1;
                    return false;
                case "resume":
                    cont.cyclePause = 0;
                    checkInstantResume(false, arg2, cont);
                    return false;
                case "prev":
                case "next":
                    var opts = $(cont).data("cycle.opts");
                    if (!opts) {
                        log('options not found, "prev/next" ignored');
                        return false;
                    }
                    $.fn.cycle[options](opts);
                    return false;
                default:
                    options = {
                        fx: options
                    };
            }
            return options;
        } else {
            if (options.constructor == Number) {
                var num = options;
                options = $(cont).data("cycle.opts");
                if (!options) {
                    log("options not found, can not advance slide");
                    return false;
                }
                if (num < 0 || num >= options.elements.length) {
                    log("invalid slide index: " + num);
                    return false;
                }
                options.nextSlide = num;
                if (cont.cycleTimeout) {
                    clearTimeout(cont.cycleTimeout);
                    cont.cycleTimeout = 0;
                }
                if (typeof arg2 == "string") {
                    options.oneTimeFx = arg2;
                }
                go(options.elements, options, 1, num >= options.currSlide);
                return false;
            }
        }
        return options;

        function checkInstantResume(isPaused, arg2, cont) {
            if (!isPaused && arg2 === true) {
                var options = $(cont).data("cycle.opts");
                if (!options) {
                    log("options not found, can not resume");
                    return false;
                }
                if (cont.cycleTimeout) {
                    clearTimeout(cont.cycleTimeout);
                    cont.cycleTimeout = 0;
                }
                go(options.elements, options, 1, !options.backwards);
            }
        }
    }

    function removeFilter(el, opts) {
        if (!$.support.opacity && opts.cleartype && el.style.filter) {
            try {
                el.style.removeAttribute("filter");
            } catch (smother) {
            }
        }
    }

    function destroy(opts) {
        if (opts.next) {
            $(opts.next).unbind(opts.prevNextEvent);
        }
        if (opts.prev) {
            $(opts.prev).unbind(opts.prevNextEvent);
        }
        if (opts.pager || opts.pagerAnchorBuilder) {
            $.each(opts.pagerAnchors || [], function () {
                this.unbind().remove();
            });
        }
        opts.pagerAnchors = null;
        if (opts.destroy) {
            opts.destroy(opts);
        }
    }

    function buildOptions($cont, $slides, els, options, o) {
        var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
        if (opts.autostop) {
            opts.countdown = opts.autostopCount || els.length;
        }
        var cont = $cont[0];
        $cont.data("cycle.opts", opts);
        opts.$cont = $cont;
        opts.stopCount = cont.cycleStop;
        opts.elements = els;
        opts.before = opts.before ? [opts.before] : [];
        opts.after = opts.after ? [opts.after] : [];
        if (!$.support.opacity && opts.cleartype) {
            opts.after.push(function () {
                removeFilter(this, opts);
            });
        }
        if (opts.continuous) {
            opts.after.push(function () {
                go(els, opts, 0, !opts.backwards);
            });
        }
        saveOriginalOpts(opts);
        if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg) {
            clearTypeFix($slides);
        }
        if ($cont.css("position") == "static") {
            $cont.css("position", "relative");
        }
        if (opts.width) {
            $cont.width(opts.width);
        }
        if (opts.height && opts.height != "auto") {
            $cont.height(opts.height);
        }
        if (opts.startingSlide) {
            opts.startingSlide = parseInt(opts.startingSlide);
        } else {
            if (opts.backwards) {
                opts.startingSlide = els.length - 1;
            }
        }
        if (opts.random) {
            opts.randomMap = [];
            for (var i = 0; i < els.length; i++) {
                opts.randomMap.push(i);
            }
            opts.randomMap.sort(function (a, b) {
                return Math.random() - 0.5;
            });
            opts.randomIndex = 1;
            opts.startingSlide = opts.randomMap[1];
        } else {
            if (opts.startingSlide >= els.length) {
                opts.startingSlide = 0;
            }
        }
        opts.currSlide = opts.startingSlide || 0;
        var first = opts.startingSlide;
        $slides.css({
            position: "absolute",
            top: 0,
            left: 0
        }).hide().each(function (i) {
            var z;
            if (opts.backwards) {
                z = first ? i <= first ? els.length + (i - first) : first - i : els.length - i;
            } else {
                z = first ? i >= first ? els.length - (i - first) : first - i : els.length - i;
            }
            $(this).css("z-index", z);
        });
        $(els[first]).css("opacity", 1).show();
        removeFilter(els[first], opts);
        if (opts.fit && opts.width) {
            $slides.width(opts.width);
        }
        if (opts.fit && opts.height && opts.height != "auto") {
            $slides.height(opts.height);
        }
        var reshape = opts.containerResize && !$cont.innerHeight();
        if (reshape) {
            var maxw = 0,
                maxh = 0;
            for (var j = 0; j < els.length; j++) {
                var $e = $(els[j]),
                    e = $e[0],
                    w = $e.outerWidth(),
                    h = $e.outerHeight();
                if (!w) {
                    w = e.offsetWidth || e.width || $e.attr("width");
                }
                if (!h) {
                    h = e.offsetHeight || e.height || $e.attr("height");
                }
                maxw = w > maxw ? w : maxw;
                maxh = h > maxh ? h : maxh;
            }
            if (maxw > 0 && maxh > 0) {
                $cont.css({
                    width: maxw + "px",
                    height: maxh + "px"
                });
            }
        }
        if (opts.pause) {
            $cont.hover(function () {
                this.cyclePause++;
            }, function () {
                this.cyclePause--;
            });
        }
        if (supportMultiTransitions(opts) === false) {
            return false;
        }
        var requeue = false;
        options.requeueAttempts = options.requeueAttempts || 0;
        $slides.each(function () {
            var $el = $(this);
            this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr("height") || 0);
            this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr("width") || 0);
            if ($el.is("img")) {
                var loadingIE = ($.browser.msie && this.cycleW == 28 && this.cycleH == 30 && !this.complete);
                var loadingFF = ($.browser.mozilla && this.cycleW == 34 && this.cycleH == 19 && !this.complete);
                var loadingOp = ($.browser.opera && ((this.cycleW == 42 && this.cycleH == 19) || (this.cycleW == 37 && this.cycleH == 17)) && !this.complete);
                var loadingOther = (this.cycleH == 0 && this.cycleW == 0 && !this.complete);
                if (loadingIE || loadingFF || loadingOp || loadingOther) {
                    if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) {
                        log(options.requeueAttempts, " - img slide not loaded, requeuing slideshow: ", this.src, this.cycleW, this.cycleH);
                        setTimeout(function () {
                            $(o.s, o.c).cycle(options);
                        }, opts.requeueTimeout);
                        requeue = true;
                        return false;
                    } else {
                        log("could not determine size of image: " + this.src, this.cycleW, this.cycleH);
                    }
                }
            }
            return true;
        });
        if (requeue) {
            return false;
        }
        opts.cssBefore = opts.cssBefore || {};
        opts.cssAfter = opts.cssAfter || {};
        opts.cssFirst = opts.cssFirst || {};
        opts.animIn = opts.animIn || {};
        opts.animOut = opts.animOut || {};
        $slides.not(":eq(" + first + ")").css(opts.cssBefore);
        $($slides[first]).css(opts.cssFirst);
        if (opts.timeout) {
            opts.timeout = parseInt(opts.timeout);
            if (opts.speed.constructor == String) {
                opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed);
            }
            if (!opts.sync) {
                opts.speed = opts.speed / 2;
            }
            var buffer = opts.fx == "none" ? 0 : opts.fx == "shuffle" ? 500 : 250;
            while ((opts.timeout - opts.speed) < buffer) {
                opts.timeout += opts.speed;
            }
        }
        if (opts.easing) {
            opts.easeIn = opts.easeOut = opts.easing;
        }
        if (!opts.speedIn) {
            opts.speedIn = opts.speed;
        }
        if (!opts.speedOut) {
            opts.speedOut = opts.speed;
        }
        opts.slideCount = els.length;
        opts.currSlide = opts.lastSlide = first;
        if (opts.random) {
            if (++opts.randomIndex == els.length) {
                opts.randomIndex = 0;
            }
            opts.nextSlide = opts.randomMap[opts.randomIndex];
        } else {
            if (opts.backwards) {
                opts.nextSlide = opts.startingSlide == 0 ? (els.length - 1) : opts.startingSlide - 1;
            } else {
                opts.nextSlide = opts.startingSlide >= (els.length - 1) ? 0 : opts.startingSlide + 1;
            }
        }
        if (!opts.multiFx) {
            var init = $.fn.cycle.transitions[opts.fx];
            if ($.isFunction(init)) {
                init($cont, $slides, opts);
            } else {
                if (opts.fx != "custom" && !opts.multiFx) {
                    log("unknown transition: " + opts.fx, "; slideshow terminating");
                    return false;
                }
            }
        }
        var e0 = $slides[first];
        if (opts.before.length) {
            opts.before[0].apply(e0, [e0, e0, opts, true]);
        }
        if (opts.after.length) {
            opts.after[0].apply(e0, [e0, e0, opts, true]);
        }
        if (opts.next) {
            $(opts.next).bind(opts.prevNextEvent, function () {
                return advance(opts, 1);
            });
        }
        if (opts.prev) {
            $(opts.prev).bind(opts.prevNextEvent, function () {
                return advance(opts, 0);
            });
        }
        if (opts.pager || opts.pagerAnchorBuilder) {
            buildPager(els, opts);
        }
        exposeAddSlide(opts, els);
        return opts;
    }

    function saveOriginalOpts(opts) {
        opts.original = {
            before: [],
            after: []
        };
        opts.original.cssBefore = $.extend({}, opts.cssBefore);
        opts.original.cssAfter = $.extend({}, opts.cssAfter);
        opts.original.animIn = $.extend({}, opts.animIn);
        opts.original.animOut = $.extend({}, opts.animOut);
        $.each(opts.before, function () {
            opts.original.before.push(this);
        });
        $.each(opts.after, function () {
            opts.original.after.push(this);
        });
    }

    function supportMultiTransitions(opts) {
        var i, tx, txs = $.fn.cycle.transitions;
        if (opts.fx.indexOf(",") > 0) {
            opts.multiFx = true;
            opts.fxs = opts.fx.replace(/\s*/g, "").split(",");
            for (i = 0; i < opts.fxs.length; i++) {
                var fx = opts.fxs[i];
                tx = txs[fx];
                if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
                    log("discarding unknown transition: ", fx);
                    opts.fxs.splice(i, 1);
                    i--;
                }
            }
            if (!opts.fxs.length) {
                log("No valid transitions named; slideshow terminating.");
                return false;
            }
        } else {
            if (opts.fx == "all") {
                opts.multiFx = true;
                opts.fxs = [];
                for (p in txs) {
                    tx = txs[p];
                    if (txs.hasOwnProperty(p) && $.isFunction(tx)) {
                        opts.fxs.push(p);
                    }
                }
            }
        }
        if (opts.multiFx && opts.randomizeEffects) {
            var r1 = Math.floor(Math.random() * 20) + 30;
            for (i = 0; i < r1; i++) {
                var r2 = Math.floor(Math.random() * opts.fxs.length);
                opts.fxs.push(opts.fxs.splice(r2, 1)[0]);
            }
            debug("randomized fx sequence: ", opts.fxs);
        }
        return true;
    }

    function exposeAddSlide(opts, els) {
        opts.addSlide = function (newSlide, prepend) {
            var $s = $(newSlide),
                s = $s[0];
            if (!opts.autostopCount) {
                opts.countdown++;
            }
            els[prepend ? "unshift" : "push"](s);
            if (opts.els) {
                opts.els[prepend ? "unshift" : "push"](s);
            }
            opts.slideCount = els.length;
            $s.css("position", "absolute");
            $s[prepend ? "prependTo" : "appendTo"](opts.$cont);
            if (prepend) {
                opts.currSlide++;
                opts.nextSlide++;
            }
            if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg) {
                clearTypeFix($s);
            }
            if (opts.fit && opts.width) {
                $s.width(opts.width);
            }
            if (opts.fit && opts.height && opts.height != "auto") {
                $s.height(opts.height);
            }
            s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
            s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();
            $s.css(opts.cssBefore);
            if (opts.pager || opts.pagerAnchorBuilder) {
                $.fn.cycle.createPagerAnchor(els.length - 1, s, $(opts.pager), els, opts);
            }
            if ($.isFunction(opts.onAddSlide)) {
                opts.onAddSlide($s);
            } else {
                $s.hide();
            }
        };
    }

    $.fn.cycle.resetState = function (opts, fx) {
        fx = fx || opts.fx;
        opts.before = [];
        opts.after = [];
        opts.cssBefore = $.extend({}, opts.original.cssBefore);
        opts.cssAfter = $.extend({}, opts.original.cssAfter);
        opts.animIn = $.extend({}, opts.original.animIn);
        opts.animOut = $.extend({}, opts.original.animOut);
        opts.fxFn = null;
        $.each(opts.original.before, function () {
            opts.before.push(this);
        });
        $.each(opts.original.after, function () {
            opts.after.push(this);
        });
        var init = $.fn.cycle.transitions[fx];
        if ($.isFunction(init)) {
            init(opts.$cont, $(opts.elements), opts);
        }
    };

    function go(els, opts, manual, fwd) {
        if (manual && opts.busy && opts.manualTrump) {
            debug("manualTrump in go(), stopping active transition");
            $(els).stop(true, true);
            opts.busy = 0;
        }
        if (opts.busy) {
            debug("transition active, ignoring new tx request");
            return;
        }
        var p = opts.$cont[0],
            curr = els[opts.currSlide],
            next = els[opts.nextSlide];
        if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual) {
            return;
        }
        if (!manual && !p.cyclePause && !opts.bounce && ((opts.autostop && (--opts.countdown <= 0)) || (opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
            if (opts.end) {
                opts.end(opts);
            }
            return;
        }
        var changed = false;
        if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
            changed = true;
            var fx = opts.fx;
            curr.cycleH = curr.cycleH || $(curr).height();
            curr.cycleW = curr.cycleW || $(curr).width();
            next.cycleH = next.cycleH || $(next).height();
            next.cycleW = next.cycleW || $(next).width();
            if (opts.multiFx) {
                if (opts.lastFx == undefined || ++opts.lastFx >= opts.fxs.length) {
                    opts.lastFx = 0;
                }
                fx = opts.fxs[opts.lastFx];
                opts.currFx = fx;
            }
            if (opts.oneTimeFx) {
                fx = opts.oneTimeFx;
                opts.oneTimeFx = null;
            }
            $.fn.cycle.resetState(opts, fx);
            if (opts.before.length) {
                $.each(opts.before, function (i, o) {
                    if (p.cycleStop != opts.stopCount) {
                        return;
                    }
                    o.apply(next, [curr, next, opts, fwd]);
                });
            }
            var after = function () {
                opts.busy = 0;
                $.each(opts.after, function (i, o) {
                    if (p.cycleStop != opts.stopCount) {
                        return;
                    }
                    o.apply(next, [curr, next, opts, fwd]);
                });
            };
            debug("tx firing(" + fx + "); currSlide: " + opts.currSlide + "; nextSlide: " + opts.nextSlide);
            opts.busy = 1;
            if (opts.fxFn) {
                opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
            } else {
                if ($.isFunction($.fn.cycle[opts.fx])) {
                    $.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
                } else {
                    $.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
                }
            }
        }
        if (changed || opts.nextSlide == opts.currSlide) {
            opts.lastSlide = opts.currSlide;
            if (opts.random) {
                opts.currSlide = opts.nextSlide;
                if (++opts.randomIndex == els.length) {
                    opts.randomIndex = 0;
                }
                opts.nextSlide = opts.randomMap[opts.randomIndex];
                if (opts.nextSlide == opts.currSlide) {
                    opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1;
                }
            } else {
                if (opts.backwards) {
                    var roll = (opts.nextSlide - 1) < 0;
                    if (roll && opts.bounce) {
                        opts.backwards = !opts.backwards;
                        opts.nextSlide = 1;
                        opts.currSlide = 0;
                    } else {
                        opts.nextSlide = roll ? (els.length - 1) : opts.nextSlide - 1;
                        opts.currSlide = roll ? 0 : opts.nextSlide + 1;
                    }
                } else {
                    var roll = (opts.nextSlide + 1) == els.length;
                    if (roll && opts.bounce) {
                        opts.backwards = !opts.backwards;
                        opts.nextSlide = els.length - 2;
                        opts.currSlide = els.length - 1;
                    } else {
                        opts.nextSlide = roll ? 0 : opts.nextSlide + 1;
                        opts.currSlide = roll ? els.length - 1 : opts.nextSlide - 1;
                    }
                }
            }
        }
        if (changed && opts.pager) {
            opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);
        }
        var ms = 0;
        if (opts.timeout && !opts.continuous) {
            ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
        } else {
            if (opts.continuous && p.cyclePause) {
                ms = 10;
            }
        }
        if (ms > 0) {
            p.cycleTimeout = setTimeout(function () {
                go(els, opts, 0, !opts.backwards);
            }, ms);
        }
    }

    $.fn.cycle.updateActivePagerLink = function (pager, currSlide, clsName) {
        $(pager).each(function () {
            $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
        });
    };

    function getTimeout(curr, next, opts, fwd) {
        if (opts.timeoutFn) {
            var t = opts.timeoutFn.call(curr, curr, next, opts, fwd);
            while (opts.fx != "none" && (t - opts.speed) < 250) {
                t += opts.speed;
            }
            debug("calculated timeout: " + t + "; speed: " + opts.speed);
            if (t !== false) {
                return t;
            }
        }
        return opts.timeout;
    }

    $.fn.cycle.next = function (opts) {
        advance(opts, 1);
    };
    $.fn.cycle.prev = function (opts) {
        advance(opts, 0);
    };

    function advance(opts, moveForward) {
        var val = moveForward ? 1 : -1;
        var els = opts.elements;
        var p = opts.$cont[0],
            timeout = p.cycleTimeout;
        if (timeout) {
            clearTimeout(timeout);
            p.cycleTimeout = 0;
        }
        if (opts.random && val < 0) {
            opts.randomIndex--;
            if (--opts.randomIndex == -2) {
                opts.randomIndex = els.length - 2;
            } else {
                if (opts.randomIndex == -1) {
                    opts.randomIndex = els.length - 1;
                }
            }
            opts.nextSlide = opts.randomMap[opts.randomIndex];
        } else {
            if (opts.random) {
                opts.nextSlide = opts.randomMap[opts.randomIndex];
            } else {
                opts.nextSlide = opts.currSlide + val;
                if (opts.nextSlide < 0) {
                    if (opts.nowrap) {
                        return false;
                    }
                    opts.nextSlide = els.length - 1;
                } else {
                    if (opts.nextSlide >= els.length) {
                        if (opts.nowrap) {
                            return false;
                        }
                        opts.nextSlide = 0;
                    }
                }
            }
        }
        var cb = opts.onPrevNextEvent || opts.prevNextClick;
        if ($.isFunction(cb)) {
            cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
        }
        go(els, opts, 1, moveForward);
        return false;
    }

    function buildPager(els, opts) {
        var $p = $(opts.pager);
        $.each(els, function (i, o) {
            $.fn.cycle.createPagerAnchor(i, o, $p, els, opts);
        });
        opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
    }

    $.fn.cycle.createPagerAnchor = function (i, el, $p, els, opts) {
        var a;
        if ($.isFunction(opts.pagerAnchorBuilder)) {
            a = opts.pagerAnchorBuilder(i, el);
            debug("pagerAnchorBuilder(" + i + ", el) returned: " + a);
        } else {
            a = '<a href="#">' + (i + 1) + "</a>";
        }
        if (!a) {
            return;
        }
        var $a = $(a);
        if ($a.parents("body").length === 0) {
            var arr = [];
            if ($p.length > 1) {
                $p.each(function () {
                    var $clone = $a.clone(true);
                    $(this).append($clone);
                    arr.push($clone[0]);
                });
                $a = $(arr);
            } else {
                $a.appendTo($p);
            }
        }
        opts.pagerAnchors = opts.pagerAnchors || [];
        opts.pagerAnchors.push($a);
        $a.bind(opts.pagerEvent, function (e) {
            e.preventDefault();
            opts.nextSlide = i;
            var p = opts.$cont[0],
                timeout = p.cycleTimeout;
            if (timeout) {
                clearTimeout(timeout);
                p.cycleTimeout = 0;
            }
            var cb = opts.onPagerEvent || opts.pagerClick;
            if ($.isFunction(cb)) {
                cb(opts.nextSlide, els[opts.nextSlide]);
            }
            go(els, opts, 1, opts.currSlide < i);
        });
        if (!/^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble) {
            $a.bind("click.cycle", function () {
                return false;
            });
        }
        if (opts.pauseOnPagerHover) {
            $a.hover(function () {
                opts.$cont[0].cyclePause++;
            }, function () {
                opts.$cont[0].cyclePause--;
            });
        }
    };
    $.fn.cycle.hopsFromLast = function (opts, fwd) {
        var hops, l = opts.lastSlide,
            c = opts.currSlide;
        if (fwd) {
            hops = c > l ? c - l : opts.slideCount - l;
        } else {
            hops = c < l ? l - c : l + opts.slideCount - c;
        }
        return hops;
    };

    function clearTypeFix($slides) {
        debug("applying clearType background-color hack");

        function hex(s) {
            s = parseInt(s).toString(16);
            return s.length < 2 ? "0" + s : s;
        }

        function getBg(e) {
            for (; e && e.nodeName.toLowerCase() != "html"; e = e.parentNode) {
                var v = $.css(e, "background-color");
                if (v && v.indexOf("rgb") >= 0) {
                    var rgb = v.match(/\d+/g);
                    return "#" + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
                }
                if (v && v != "transparent") {
                    return v;
                }
            }
            return "#ffffff";
        }

        $slides.each(function () {
            $(this).css("background-color", getBg(this));
        });
    }

    $.fn.cycle.commonReset = function (curr, next, opts, w, h, rev) {
        $(opts.elements).not(curr).hide();
        if (typeof opts.cssBefore.opacity == "undefined") {
            opts.cssBefore.opacity = 1;
        }
        opts.cssBefore.display = "block";
        if (opts.slideResize && w !== false && next.cycleW > 0) {
            opts.cssBefore.width = next.cycleW;
        }
        if (opts.slideResize && h !== false && next.cycleH > 0) {
            opts.cssBefore.height = next.cycleH;
        }
        opts.cssAfter = opts.cssAfter || {};
        opts.cssAfter.display = "none";
        $(curr).css("zIndex", opts.slideCount + (rev === true ? 1 : 0));
        $(next).css("zIndex", opts.slideCount + (rev === true ? 0 : 1));
    };
    $.fn.cycle.custom = function (curr, next, opts, cb, fwd, speedOverride) {
        var $l = $(curr),
            $n = $(next);
        var speedIn = opts.speedIn,
            speedOut = opts.speedOut,
            easeIn = opts.easeIn,
            easeOut = opts.easeOut;
        $n.css(opts.cssBefore);
        if (speedOverride) {
            if (typeof speedOverride == "number") {
                speedIn = speedOut = speedOverride;
            } else {
                speedIn = speedOut = 1;
            }
            easeIn = easeOut = null;
        }
        var fn = function () {
            $n.animate(opts.animIn, speedIn, easeIn, function () {
                cb();
            });
        };
        $l.animate(opts.animOut, speedOut, easeOut, function () {
            $l.css(opts.cssAfter);
            if (!opts.sync) {
                fn();
            }
        });
        if (opts.sync) {
            fn();
        }
    };
    $.fn.cycle.transitions = {
        fade: function ($cont, $slides, opts) {
            $slides.not(":eq(" + opts.currSlide + ")").css("opacity", 0);
            opts.before.push(function (curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts);
                opts.cssBefore.opacity = 0;
            });
            opts.animIn = {
                opacity: 1
            };
            opts.animOut = {
                opacity: 0
            };
            opts.cssBefore = {
                top: 0,
                left: 0
            };
        }
    };
    $.fn.cycle.ver = function () {
        return ver;
    };
    $.fn.cycle.defaults = {
        activePagerClass: "activeSlide",
        after: null,
        allowPagerClickBubble: false,
        animIn: null,
        animOut: null,
        autostop: 0,
        autostopCount: 0,
        backwards: false,
        before: null,
        cleartype: !$.support.opacity,
        cleartypeNoBg: false,
        containerResize: 1,
        continuous: 0,
        cssAfter: null,
        cssBefore: null,
        delay: 0,
        easeIn: null,
        easeOut: null,
        easing: null,
        end: null,
        fastOnEvent: 0,
        fit: 0,
        fx: "fade",
        fxFn: null,
        height: "auto",
        manualTrump: true,
        next: null,
        nowrap: 0,
        onPagerEvent: null,
        onPrevNextEvent: null,
        pager: null,
        pagerAnchorBuilder: null,
        pagerEvent: "click.cycle",
        pause: 0,
        pauseOnPagerHover: 0,
        prev: null,
        prevNextEvent: "click.cycle",
        random: 0,
        randomizeEffects: 1,
        requeueOnImageNotLoaded: true,
        requeueTimeout: 250,
        rev: 0,
        shuffle: null,
        slideExpr: null,
        slideResize: 1,
        speed: 1000,
        speedIn: null,
        speedOut: null,
        startingSlide: 0,
        sync: 1,
        timeout: 4000,
        timeoutFn: null,
        updateActivePagerLink: null
    };
})(jQuery);
/*
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:  2.73
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function ($) {
    $.fn.cycle.transitions.none = function ($cont, $slides, opts) {
        opts.fxFn = function (curr, next, opts, after) {
            $(next).show();
            $(curr).hide();
            after();
        };
    };
    $.fn.cycle.transitions.fadeout = function ($cont, $slides, opts) {
        $slides.not(":eq(" + opts.currSlide + ")").css({
            display: "block",
            opacity: 1
        });
        opts.before.push(function (curr, next, opts, w, h, rev) {
            $(curr).css("zIndex", opts.slideCount + (!rev === true ? 1 : 0));
            $(next).css("zIndex", opts.slideCount + (!rev === true ? 0 : 1));
        });
        opts.animIn.opacity = 1;
        opts.animOut.opacity = 0;
        opts.cssBefore.opacity = 1;
        opts.cssBefore.display = "block";
        opts.cssAfter.zIndex = 0;
    };
    $.fn.cycle.transitions.scrollUp = function ($cont, $slides, opts) {
        $cont.css("overflow", "hidden");
        opts.before.push($.fn.cycle.commonReset);
        var h = $cont.height();
        opts.cssBefore.top = h;
        opts.cssBefore.left = 0;
        opts.cssFirst.top = 0;
        opts.animIn.top = 0;
        opts.animOut.top = -h;
    };
    $.fn.cycle.transitions.scrollDown = function ($cont, $slides, opts) {
        $cont.css("overflow", "hidden");
        opts.before.push($.fn.cycle.commonReset);
        var h = $cont.height();
        opts.cssFirst.top = 0;
        opts.cssBefore.top = -h;
        opts.cssBefore.left = 0;
        opts.animIn.top = 0;
        opts.animOut.top = h;
    };
    $.fn.cycle.transitions.scrollLeft = function ($cont, $slides, opts) {
        $cont.css("overflow", "hidden");
        opts.before.push($.fn.cycle.commonReset);
        var w = $cont.width();
        opts.cssFirst.left = 0;
        opts.cssBefore.left = w;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
        opts.animOut.left = 0 - w;
    };
    $.fn.cycle.transitions.scrollRight = function ($cont, $slides, opts) {
        $cont.css("overflow", "hidden");
        opts.before.push($.fn.cycle.commonReset);
        var w = $cont.width();
        opts.cssFirst.left = 0;
        opts.cssBefore.left = -w;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
        opts.animOut.left = w;
    };
    $.fn.cycle.transitions.scrollHorz = function ($cont, $slides, opts) {
        $cont.css("overflow", "hidden").width();
        opts.before.push(function (curr, next, opts, fwd) {
            if (opts.rev) {
                fwd = !fwd;
            }
            $.fn.cycle.commonReset(curr, next, opts);
            opts.cssBefore.left = fwd ? (next.cycleW - 1) : (1 - next.cycleW);
            opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
        });
        opts.cssFirst.left = 0;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
        opts.animOut.top = 0;
    };
    $.fn.cycle.transitions.scrollVert = function ($cont, $slides, opts) {
        $cont.css("overflow", "hidden");
        opts.before.push(function (curr, next, opts, fwd) {
            if (opts.rev) {
                fwd = !fwd;
            }
            $.fn.cycle.commonReset(curr, next, opts);
            opts.cssBefore.top = fwd ? (1 - next.cycleH) : (next.cycleH - 1);
            opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
        });
        opts.cssFirst.top = 0;
        opts.cssBefore.left = 0;
        opts.animIn.top = 0;
        opts.animOut.left = 0;
    };
    $.fn.cycle.transitions.slideX = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $(opts.elements).not(curr).hide();
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.animIn.width = next.cycleW;
        });
        opts.cssBefore.left = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.width = 0;
        opts.animIn.width = "show";
        opts.animOut.width = 0;
    };
    $.fn.cycle.transitions.slideY = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $(opts.elements).not(curr).hide();
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.animIn.height = next.cycleH;
        });
        opts.cssBefore.left = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.height = 0;
        opts.animIn.height = "show";
        opts.animOut.height = 0;
    };
    $.fn.cycle.transitions.shuffle = function ($cont, $slides, opts) {
        var i, w = $cont.css("overflow", "visible").width();
        $slides.css({
            left: 0,
            top: 0
        });
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, true, true);
        });
        if (!opts.speedAdjusted) {
            opts.speed = opts.speed / 2;
            opts.speedAdjusted = true;
        }
        opts.random = 0;
        opts.shuffle = opts.shuffle || {
            left: -w,
            top: 15
        };
        opts.els = [];
        for (i = 0; i < $slides.length; i++) {
            opts.els.push($slides[i]);
        }
        for (i = 0; i < opts.currSlide; i++) {
            opts.els.push(opts.els.shift());
        }
        opts.fxFn = function (curr, next, opts, cb, fwd) {
            if (opts.rev) {
                fwd = !fwd;
            }
            var $el = fwd ? $(curr) : $(next);
            $(next).css(opts.cssBefore);
            var count = opts.slideCount;
            $el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function () {
                var hops = $.fn.cycle.hopsFromLast(opts, fwd);
                for (var k = 0; k < hops; k++) {
                    fwd ? opts.els.push(opts.els.shift()) : opts.els.unshift(opts.els.pop());
                }
                if (fwd) {
                    for (var i = 0, len = opts.els.length; i < len; i++) {
                        $(opts.els[i]).css("z-index", len - i + count);
                    }
                } else {
                    var z = $(curr).css("z-index");
                    $el.css("z-index", parseInt(z) + 1 + count);
                }
                $el.animate({
                    left: 0,
                    top: 0
                }, opts.speedOut, opts.easeOut, function () {
                    $(fwd ? this : curr).hide();
                    if (cb) {
                        cb();
                    }
                });
            });
        };
        $.extend(opts.cssBefore, {
            display: "block",
            opacity: 1,
            top: 0,
            left: 0
        });
    };
    $.fn.cycle.transitions.turnUp = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.cssBefore.top = next.cycleH;
            opts.animIn.height = next.cycleH;
            opts.animOut.width = next.cycleW;
        });
        opts.cssFirst.top = 0;
        opts.cssBefore.left = 0;
        opts.cssBefore.height = 0;
        opts.animIn.top = 0;
        opts.animOut.height = 0;
    };
    $.fn.cycle.transitions.turnDown = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.animIn.height = next.cycleH;
            opts.animOut.top = curr.cycleH;
        });
        opts.cssFirst.top = 0;
        opts.cssBefore.left = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.height = 0;
        opts.animOut.height = 0;
    };
    $.fn.cycle.transitions.turnLeft = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.cssBefore.left = next.cycleW;
            opts.animIn.width = next.cycleW;
        });
        opts.cssBefore.top = 0;
        opts.cssBefore.width = 0;
        opts.animIn.left = 0;
        opts.animOut.width = 0;
    };
    $.fn.cycle.transitions.turnRight = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.animIn.width = next.cycleW;
            opts.animOut.left = curr.cycleW;
        });
        $.extend(opts.cssBefore, {
            top: 0,
            left: 0,
            width: 0
        });
        opts.animIn.left = 0;
        opts.animOut.width = 0;
    };
    $.fn.cycle.transitions.zoom = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, false, true);
            opts.cssBefore.top = next.cycleH / 2;
            opts.cssBefore.left = next.cycleW / 2;
            $.extend(opts.animIn, {
                top: 0,
                left: 0,
                width: next.cycleW,
                height: next.cycleH
            });
            $.extend(opts.animOut, {
                width: 0,
                height: 0,
                top: curr.cycleH / 2,
                left: curr.cycleW / 2
            });
        });
        opts.cssFirst.top = 0;
        opts.cssFirst.left = 0;
        opts.cssBefore.width = 0;
        opts.cssBefore.height = 0;
    };
    $.fn.cycle.transitions.fadeZoom = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, false);
            opts.cssBefore.left = next.cycleW / 2;
            opts.cssBefore.top = next.cycleH / 2;
            $.extend(opts.animIn, {
                top: 0,
                left: 0,
                width: next.cycleW,
                height: next.cycleH
            });
        });
        opts.cssBefore.width = 0;
        opts.cssBefore.height = 0;
        opts.animOut.opacity = 0;
    };
    $.fn.cycle.transitions.blindX = function ($cont, $slides, opts) {
        var w = $cont.css("overflow", "hidden").width();
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.animIn.width = next.cycleW;
            opts.animOut.left = curr.cycleW;
        });
        opts.cssBefore.left = w;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
        opts.animOut.left = w;
    };
    $.fn.cycle.transitions.blindY = function ($cont, $slides, opts) {
        var h = $cont.css("overflow", "hidden").height();
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.animIn.height = next.cycleH;
            opts.animOut.top = curr.cycleH;
        });
        opts.cssBefore.top = h;
        opts.cssBefore.left = 0;
        opts.animIn.top = 0;
        opts.animOut.top = h;
    };
    $.fn.cycle.transitions.blindZ = function ($cont, $slides, opts) {
        var h = $cont.css("overflow", "hidden").height();
        var w = $cont.width();
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.animIn.height = next.cycleH;
            opts.animOut.top = curr.cycleH;
        });
        opts.cssBefore.top = h;
        opts.cssBefore.left = w;
        opts.animIn.top = 0;
        opts.animIn.left = 0;
        opts.animOut.top = h;
        opts.animOut.left = w;
    };
    $.fn.cycle.transitions.growX = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.cssBefore.left = this.cycleW / 2;
            opts.animIn.left = 0;
            opts.animIn.width = this.cycleW;
            opts.animOut.left = 0;
        });
        opts.cssBefore.top = 0;
        opts.cssBefore.width = 0;
    };
    $.fn.cycle.transitions.growY = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.cssBefore.top = this.cycleH / 2;
            opts.animIn.top = 0;
            opts.animIn.height = this.cycleH;
            opts.animOut.top = 0;
        });
        opts.cssBefore.height = 0;
        opts.cssBefore.left = 0;
    };
    $.fn.cycle.transitions.curtainX = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true, true);
            opts.cssBefore.left = next.cycleW / 2;
            opts.animIn.left = 0;
            opts.animIn.width = this.cycleW;
            opts.animOut.left = curr.cycleW / 2;
            opts.animOut.width = 0;
        });
        opts.cssBefore.top = 0;
        opts.cssBefore.width = 0;
    };
    $.fn.cycle.transitions.curtainY = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false, true);
            opts.cssBefore.top = next.cycleH / 2;
            opts.animIn.top = 0;
            opts.animIn.height = next.cycleH;
            opts.animOut.top = curr.cycleH / 2;
            opts.animOut.height = 0;
        });
        opts.cssBefore.height = 0;
        opts.cssBefore.left = 0;
    };
    $.fn.cycle.transitions.cover = function ($cont, $slides, opts) {
        var d = opts.direction || "left";
        var w = $cont.css("overflow", "hidden").width();
        var h = $cont.height();
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            if (d == "right") {
                opts.cssBefore.left = -w;
            } else {
                if (d == "up") {
                    opts.cssBefore.top = h;
                } else {
                    if (d == "down") {
                        opts.cssBefore.top = -h;
                    } else {
                        opts.cssBefore.left = w;
                    }
                }
            }
        });
        opts.animIn.left = 0;
        opts.animIn.top = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.left = 0;
    };
    $.fn.cycle.transitions.uncover = function ($cont, $slides, opts) {
        var d = opts.direction || "left";
        var w = $cont.css("overflow", "hidden").width();
        var h = $cont.height();
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, true, true);
            if (d == "right") {
                opts.animOut.left = w;
            } else {
                if (d == "up") {
                    opts.animOut.top = -h;
                } else {
                    if (d == "down") {
                        opts.animOut.top = h;
                    } else {
                        opts.animOut.left = -w;
                    }
                }
            }
        });
        opts.animIn.left = 0;
        opts.animIn.top = 0;
        opts.cssBefore.top = 0;
        opts.cssBefore.left = 0;
    };
    $.fn.cycle.transitions.toss = function ($cont, $slides, opts) {
        var w = $cont.css("overflow", "visible").width();
        var h = $cont.height();
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, true, true);
            if (!opts.animOut.left && !opts.animOut.top) {
                $.extend(opts.animOut, {
                    left: w * 2,
                    top: -h / 2,
                    opacity: 0
                });
            } else {
                opts.animOut.opacity = 0;
            }
        });
        opts.cssBefore.left = 0;
        opts.cssBefore.top = 0;
        opts.animIn.left = 0;
    };
    $.fn.cycle.transitions.wipe = function ($cont, $slides, opts) {
        var w = $cont.css("overflow", "hidden").width();
        var h = $cont.height();
        opts.cssBefore = opts.cssBefore || {};
        var clip;
        if (opts.clip) {
            if (/l2r/.test(opts.clip)) {
                clip = "rect(0px 0px " + h + "px 0px)";
            } else {
                if (/r2l/.test(opts.clip)) {
                    clip = "rect(0px " + w + "px " + h + "px " + w + "px)";
                } else {
                    if (/t2b/.test(opts.clip)) {
                        clip = "rect(0px " + w + "px 0px 0px)";
                    } else {
                        if (/b2t/.test(opts.clip)) {
                            clip = "rect(" + h + "px " + w + "px " + h + "px 0px)";
                        } else {
                            if (/zoom/.test(opts.clip)) {
                                var top = parseInt(h / 2);
                                var left = parseInt(w / 2);
                                clip = "rect(" + top + "px " + left + "px " + top + "px " + left + "px)";
                            }
                        }
                    }
                }
            }
        }
        opts.cssBefore.clip = opts.cssBefore.clip || clip || "rect(0px 0px 0px 0px)";
        var d = opts.cssBefore.clip.match(/(\d+)/g);
        var t = parseInt(d[0]),
            r = parseInt(d[1]),
            b = parseInt(d[2]),
            l = parseInt(d[3]);
        opts.before.push(function (curr, next, opts) {
            if (curr == next) {
                return;
            }
            var $curr = $(curr),
                $next = $(next);
            $.fn.cycle.commonReset(curr, next, opts, true, true, false);
            opts.cssAfter.display = "block";
            var step = 1,
                count = parseInt((opts.speedIn / 13)) - 1;
            (function f() {
                var tt = t ? t - parseInt(step * (t / count)) : 0;
                var ll = l ? l - parseInt(step * (l / count)) : 0;
                var bb = b < h ? b + parseInt(step * ((h - b) / count || 1)) : h;
                var rr = r < w ? r + parseInt(step * ((w - r) / count || 1)) : w;
                $next.css({
                    clip: "rect(" + tt + "px " + rr + "px " + bb + "px " + ll + "px)"
                });
                (step++ <= count) ? setTimeout(f, 13) : $curr.css("display", "none");
            })();
        });
        $.extend(opts.cssBefore, {
            display: "block",
            opacity: 1,
            top: 0,
            left: 0
        });
        opts.animIn = {
            left: 0
        };
        opts.animOut = {
            left: 0
        };
    };
})(jQuery);

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;
(function (d) {
    var k = d.scrollTo = function (a, i, e) {
        d(window).scrollTo(a, i, e)
    };
    k.defaults = {
        axis: 'xy',
        duration: parseFloat(d.fn.jquery) >= 1.3 ? 0 : 1
    };
    k.window = function (a) {
        return d(window)._scrollable()
    };
    d.fn._scrollable = function () {
        return this.map(function () {
            var a = this,
                i = !a.nodeName || d.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
            if (!i) return a;
            var e = (a.contentWindow || a).document || a.ownerDocument || a;
            return d.browser.safari || e.compatMode == 'BackCompat' ? e.body : e.documentElement
        })
    };
    d.fn.scrollTo = function (n, j, b) {
        if (typeof j == 'object') {
            b = j;
            j = 0
        }
        if (typeof b == 'function') b = {
            onAfter: b
        };
        if (n == 'max') n = 9e9;
        b = d.extend({}, k.defaults, b);
        j = j || b.speed || b.duration;
        b.queue = b.queue && b.axis.length > 1;
        if (b.queue) j /= 2;
        b.offset = p(b.offset);
        b.over = p(b.over);
        return this._scrollable().each(function () {
            var q = this,
                r = d(q),
                f = n,
                s, g = {},
                u = r.is('html,body');
            switch (typeof f) {
                case 'number':
                case 'string':
                    if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)) {
                        f = p(f);
                        break
                    }
                    f = d(f, this);
                case 'object':
                    if (f.is || f.style) s = (f = d(f)).offset()
            }
            d.each(b.axis.split(''), function (a, i) {
                var e = i == 'x' ? 'Left' : 'Top',
                    h = e.toLowerCase(),
                    c = 'scroll' + e,
                    l = q[c],
                    m = k.max(q, i);
                if (s) {
                    g[c] = s[h] + (u ? 0 : l - r.offset()[h]);
                    if (b.margin) {
                        g[c] -= parseInt(f.css('margin' + e)) || 0;
                        g[c] -= parseInt(f.css('border' + e + 'Width')) || 0
                    }
                    g[c] += b.offset[h] || 0;
                    if (b.over[h]) g[c] += f[i == 'x' ? 'width' : 'height']() * b.over[h]
                } else {
                    var o = f[h];
                    g[c] = o.slice && o.slice(-1) == '%' ? parseFloat(o) / 100 * m : o
                }
                if (/^\d+$/.test(g[c])) g[c] = g[c] <= 0 ? 0 : Math.min(g[c], m);
                if (!a && b.queue) {
                    if (l != g[c]) t(b.onAfterFirst);
                    delete g[c]
                }
            });
            t(b.onAfter);

            function t(a) {
                r.animate(g, j, b.easing, a && function () {
                    a.call(this, n, b)
                })
            }
        }).end()
    };
    k.max = function (a, i) {
        var e = i == 'x' ? 'Width' : 'Height',
            h = 'scroll' + e;
        if (!d(a).is('html,body')) return a[h] - d(a)[e.toLowerCase()]();
        var c = 'client' + e,
            l = a.ownerDocument.documentElement,
            m = a.ownerDocument.body;
        return Math.max(l[h], m[h]) - Math.min(l[c], m[c])
    };

    function p(a) {
        return typeof a == 'object' ? a : {
            top: a,
            left: a
        }
    }
})(jQuery);
/*
 * jQuery FlexSlider v2.5.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;
(function ($) {

    //FlexSlider: Object Instance
    $.flexslider = function (el, options) {
        var slider = $(el);

        // making variables public
        slider.vars = $.extend({}, $.flexslider.defaults, options);

        var namespace = slider.vars.namespace,
            msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            touch = (("ontouchstart" in window) || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
            // depricating this idea, as devices are being released with both of these events
            //eventType = (touch) ? "touchend" : "click",
            eventType = "click touchend MSPointerUp keyup",
            watchedEvent = "",
            watchedEventClearTimer,
            vertical = slider.vars.direction === "vertical",
            reverse = slider.vars.reverse,
            carousel = (slider.vars.itemWidth > 0),
            fade = slider.vars.animation === "fade",
            asNav = slider.vars.asNavFor !== "",
            methods = {},
            focused = true;

        // Store a reference to the slider object
        $.data(el, "flexslider", slider);

        // Private slider methods
        methods = {
            init: function () {
                slider.animating = false;
                // Get current slide and make sure it is a number
                slider.currentSlide = parseInt((slider.vars.startAt ? slider.vars.startAt : 0), 10);
                if (isNaN(slider.currentSlide)) {
                    slider.currentSlide = 0;
                }
                slider.animatingTo = slider.currentSlide;
                slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
                slider.containerSelector = slider.vars.selector.substr(0, slider.vars.selector.search(' '));
                slider.slides = $(slider.vars.selector, slider);
                slider.container = $(slider.containerSelector, slider);
                slider.count = slider.slides.length;
                // SYNC:
                slider.syncExists = $(slider.vars.sync).length > 0;
                // SLIDE:
                if (slider.vars.animation === "slide") {
                    slider.vars.animation = "swing";
                }
                slider.prop = (vertical) ? "top" : "marginLeft";
                slider.args = {};
                // SLIDESHOW:
                slider.manualPause = false;
                slider.stopped = false;
                //PAUSE WHEN INVISIBLE
                slider.started = false;
                slider.startTimeout = null;
                // TOUCH/USECSS:
                slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function () {
                    var obj = document.createElement('div'),
                        props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
                    for (var i in props) {
                        if (obj.style[props[i]] !== undefined) {
                            slider.pfx = props[i].replace('Perspective', '').toLowerCase();
                            slider.prop = "-" + slider.pfx + "-transform";
                            return true;
                        }
                    }
                    return false;
                }());
                slider.ensureAnimationEnd = '';
                // CONTROLSCONTAINER:
                if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
                // MANUAL:
                if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);

                // CUSTOM DIRECTION NAV:
                if (slider.vars.customDirectionNav !== "") slider.customDirectionNav = $(slider.vars.customDirectionNav).length === 2 && $(slider.vars.customDirectionNav);

                // RANDOMIZE:
                if (slider.vars.randomize) {
                    slider.slides.sort(function () {
                        return (Math.round(Math.random()) - 0.5);
                    });
                    slider.container.empty().append(slider.slides);
                }

                slider.doMath();

                // INIT
                slider.setup("init");

                // CONTROLNAV:
                if (slider.vars.controlNav) {
                    methods.controlNav.setup();
                }

                // DIRECTIONNAV:
                if (slider.vars.directionNav) {
                    methods.directionNav.setup();
                }

                // KEYBOARD:
                if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
                    $(document).bind('keyup', function (event) {
                        var keycode = event.keyCode;
                        if (!slider.animating && (keycode === 39 || keycode === 37)) {
                            var target = (keycode === 39) ? slider.getTarget('next') :
                                (keycode === 37) ? slider.getTarget('prev') : false;
                            slider.flexAnimate(target, slider.vars.pauseOnAction);
                        }
                    });
                }
                // MOUSEWHEEL:
                if (slider.vars.mousewheel) {
                    slider.bind('mousewheel', function (event, delta, deltaX, deltaY) {
                        event.preventDefault();
                        var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    });
                }

                // PAUSEPLAY
                if (slider.vars.pausePlay) {
                    methods.pausePlay.setup();
                }

                //PAUSE WHEN INVISIBLE
                if (slider.vars.slideshow && slider.vars.pauseInvisible) {
                    methods.pauseInvisible.init();
                }

                // SLIDSESHOW
                if (slider.vars.slideshow) {
                    if (slider.vars.pauseOnHover) {
                        slider.hover(function () {
                            if (!slider.manualPlay && !slider.manualPause) {
                                slider.pause();
                            }
                        }, function () {
                            if (!slider.manualPause && !slider.manualPlay && !slider.stopped) {
                                slider.play();
                            }
                        });
                    }
                    // initialize animation
                    //If we're visible, or we don't use PageVisibility API
                    if (!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
                        (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay) : slider.play();
                    }
                }

                // ASNAV:
                if (asNav) {
                    methods.asNav.setup();
                }

                // TOUCH
                if (touch && slider.vars.touch) {
                    methods.touch();
                }

                // FADE&&SMOOTHHEIGHT || SLIDE:
                if (!fade || (fade && slider.vars.smoothHeight)) {
                    $(window).bind("resize orientationchange focus", methods.resize);
                }

                slider.find("img").attr("draggable", "false");

                // API: start() Callback
                setTimeout(function () {
                    slider.vars.start(slider);
                }, 200);
            },
            asNav: {
                setup: function () {
                    slider.asNav = true;
                    slider.animatingTo = Math.floor(slider.currentSlide / slider.move);
                    slider.currentItem = slider.currentSlide;
                    slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
                    if (!msGesture) {
                        slider.slides.on(eventType, function (e) {
                            e.preventDefault();
                            var $slide = $(this),
                                target = $slide.index();
                            var posFromLeft = $slide.offset().left - $(slider).scrollLeft(); // Find position of slide relative to left of slider container
                            if (posFromLeft <= 0 && $slide.hasClass(namespace + 'active-slide')) {
                                slider.flexAnimate(slider.getTarget("prev"), true);
                            } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
                                slider.direction = (slider.currentItem < target) ? "next" : "prev";
                                slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                            }
                        });
                    } else {
                        el._slider = slider;
                        slider.slides.each(function () {
                            var that = this;
                            that._gesture = new MSGesture();
                            that._gesture.target = that;
                            that.addEventListener("MSPointerDown", function (e) {
                                e.preventDefault();
                                if (e.currentTarget._gesture) {
                                    e.currentTarget._gesture.addPointer(e.pointerId);
                                }
                            }, false);
                            that.addEventListener("MSGestureTap", function (e) {
                                e.preventDefault();
                                var $slide = $(this),
                                    target = $slide.index();
                                if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
                                    slider.direction = (slider.currentItem < target) ? "next" : "prev";
                                    slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                                }
                            });
                        });
                    }
                }
            },
            controlNav: {
                setup: function () {
                    if (!slider.manualControls) {
                        methods.controlNav.setupPaging();
                    } else { // MANUALCONTROLS:
                        methods.controlNav.setupManual();
                    }
                },
                setupPaging: function () {
                    var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
                        j = 1,
                        item,
                        slide;

                    slider.controlNavScaffold = $('<ol class="' + namespace + 'control-nav ' + namespace + type + '"></ol>');

                    if (slider.pagingCount > 1) {
                        for (var i = 0; i < slider.pagingCount; i++) {
                            slide = slider.slides.eq(i);
                            item = (slider.vars.controlNav === "thumbnails") ? '<img src="' + slide.attr('data-thumb') + '"/>' : '<a>' + j + '</a>';
                            if ('thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions) {
                                var captn = slide.attr('data-thumbcaption');
                                if ('' !== captn && undefined !== captn) {
                                    item += '<span class="' + namespace + 'caption">' + captn + '</span>';
                                }
                            }
                            slider.controlNavScaffold.append('<li>' + item + '</li>');
                            j++;
                        }
                    }

                    // CONTROLSCONTAINER:
                    (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
                    methods.controlNav.set();

                    methods.controlNav.active();

                    slider.controlNavScaffold.delegate('a, img', eventType, function (event) {
                        event.preventDefault();

                        if (watchedEvent === "" || watchedEvent === event.type) {
                            var $this = $(this),
                                target = slider.controlNav.index($this);

                            if (!$this.hasClass(namespace + 'active')) {
                                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                                slider.flexAnimate(target, slider.vars.pauseOnAction);
                            }
                        }

                        // setup flags to prevent event duplication
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();

                    });
                },
                setupManual: function () {
                    slider.controlNav = slider.manualControls;
                    methods.controlNav.active();

                    slider.controlNav.bind(eventType, function (event) {
                        event.preventDefault();

                        if (watchedEvent === "" || watchedEvent === event.type) {
                            var $this = $(this),
                                target = slider.controlNav.index($this);

                            if (!$this.hasClass(namespace + 'active')) {
                                (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
                                slider.flexAnimate(target, slider.vars.pauseOnAction);
                            }
                        }

                        // setup flags to prevent event duplication
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();
                    });
                },
                set: function () {
                    var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
                    slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
                },
                active: function () {
                    slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
                },
                update: function (action, pos) {
                    if (slider.pagingCount > 1 && action === "add") {
                        slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
                    } else if (slider.pagingCount === 1) {
                        slider.controlNavScaffold.find('li').remove();
                    } else {
                        slider.controlNav.eq(pos).closest('li').remove();
                    }
                    methods.controlNav.set();
                    (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
                }
            },
            directionNav: {
                setup: function () {
                    var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li class="' + namespace + 'nav-prev"><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li class="' + namespace + 'nav-next"><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');

                    // CUSTOM DIRECTION NAV:
                    if (slider.customDirectionNav) {
                        slider.directionNav = slider.customDirectionNav;
                        // CONTROLSCONTAINER:
                    } else if (slider.controlsContainer) {
                        $(slider.controlsContainer).append(directionNavScaffold);
                        slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
                    } else {
                        slider.append(directionNavScaffold);
                        slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
                    }

                    methods.directionNav.update();

                    slider.directionNav.bind(eventType, function (event) {
                        event.preventDefault();
                        var target;

                        if (watchedEvent === "" || watchedEvent === event.type) {
                            target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
                            slider.flexAnimate(target, slider.vars.pauseOnAction);
                        }

                        // setup flags to prevent event duplication
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();
                    });
                },
                update: function () {
                    var disabledClass = namespace + 'disabled';
                    if (slider.pagingCount === 1) {
                        slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
                    } else if (!slider.vars.animationLoop) {
                        if (slider.animatingTo === 0) {
                            slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
                        } else if (slider.animatingTo === slider.last) {
                            slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
                        } else {
                            slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
                        }
                    } else {
                        slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
                    }
                }
            },
            pausePlay: {
                setup: function () {
                    var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');

                    // CONTROLSCONTAINER:
                    if (slider.controlsContainer) {
                        slider.controlsContainer.append(pausePlayScaffold);
                        slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
                    } else {
                        slider.append(pausePlayScaffold);
                        slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
                    }

                    methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');

                    slider.pausePlay.bind(eventType, function (event) {
                        event.preventDefault();

                        if (watchedEvent === "" || watchedEvent === event.type) {
                            if ($(this).hasClass(namespace + 'pause')) {
                                slider.manualPause = true;
                                slider.manualPlay = false;
                                slider.pause();
                            } else {
                                slider.manualPause = false;
                                slider.manualPlay = true;
                                slider.play();
                            }
                        }

                        // setup flags to prevent event duplication
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();
                    });
                },
                update: function (state) {
                    (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
                }
            },
            touch: function () {
                var startX,
                    startY,
                    offset,
                    cwidth,
                    dx,
                    startT,
                    onTouchStart,
                    onTouchMove,
                    onTouchEnd,
                    scrolling = false,
                    localX = 0,
                    localY = 0,
                    accDx = 0;

                if (!msGesture) {
                    onTouchStart = function (e) {
                        if (slider.animating) {
                            e.preventDefault();
                        } else if ((window.navigator.msPointerEnabled) || e.touches.length === 1) {
                            slider.pause();
                            // CAROUSEL:
                            cwidth = (vertical) ? slider.h : slider.w;
                            startT = Number(new Date());
                            // CAROUSEL:

                            // Local vars for X and Y points.
                            localX = e.touches[0].pageX;
                            localY = e.touches[0].pageY;

                            offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                                (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                                    (carousel && slider.currentSlide === slider.last) ? slider.limit :
                                        (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                                            (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                            startX = (vertical) ? localY : localX;
                            startY = (vertical) ? localX : localY;

                            el.addEventListener('touchmove', onTouchMove, false);
                            el.addEventListener('touchend', onTouchEnd, false);
                        }
                    };

                    onTouchMove = function (e) {
                        // Local vars for X and Y points.

                        localX = e.touches[0].pageX;
                        localY = e.touches[0].pageY;

                        dx = (vertical) ? startX - localY : startX - localX;
                        scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));

                        var fxms = 500;

                        if (!scrolling || Number(new Date()) - startT > fxms) {
                            e.preventDefault();
                            if (!fade && slider.transitions) {
                                if (!slider.vars.animationLoop) {
                                    dx = dx / ((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx) / cwidth + 2) : 1);
                                }
                                slider.setProps(offset + dx, "setTouch");
                            }
                        }
                    };

                    onTouchEnd = function (e) {
                        // finish the touch by undoing the touch session
                        el.removeEventListener('touchmove', onTouchMove, false);

                        if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                            var updateDx = (reverse) ? -dx : dx,
                                target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                            if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
                                slider.flexAnimate(target, slider.vars.pauseOnAction);
                            } else {
                                if (!fade) {
                                    slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                                }
                            }
                        }
                        el.removeEventListener('touchend', onTouchEnd, false);

                        startX = null;
                        startY = null;
                        dx = null;
                        offset = null;
                    };

                    el.addEventListener('touchstart', onTouchStart, false);
                } else {
                    el.style.msTouchAction = "none";
                    el._gesture = new MSGesture();
                    el._gesture.target = el;
                    el.addEventListener("MSPointerDown", onMSPointerDown, false);
                    el._slider = slider;
                    el.addEventListener("MSGestureChange", onMSGestureChange, false);
                    el.addEventListener("MSGestureEnd", onMSGestureEnd, false);

                    function onMSPointerDown(e) {
                        e.stopPropagation();
                        if (slider.animating) {
                            e.preventDefault();
                        } else {
                            slider.pause();
                            el._gesture.addPointer(e.pointerId);
                            accDx = 0;
                            cwidth = (vertical) ? slider.h : slider.w;
                            startT = Number(new Date());
                            // CAROUSEL:

                            offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                                (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                                    (carousel && slider.currentSlide === slider.last) ? slider.limit :
                                        (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                                            (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                        }
                    }

                    function onMSGestureChange(e) {
                        e.stopPropagation();
                        var slider = e.target._slider;
                        if (!slider) {
                            return;
                        }
                        var transX = -e.translationX,
                            transY = -e.translationY;

                        //Accumulate translations.
                        accDx = accDx + ((vertical) ? transY : transX);
                        dx = accDx;
                        scrolling = (vertical) ? (Math.abs(accDx) < Math.abs(-transX)) : (Math.abs(accDx) < Math.abs(-transY));

                        if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
                            setImmediate(function () {
                                el._gesture.stop();
                            });

                            return;
                        }

                        if (!scrolling || Number(new Date()) - startT > 500) {
                            e.preventDefault();
                            if (!fade && slider.transitions) {
                                if (!slider.vars.animationLoop) {
                                    dx = accDx / ((slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0) ? (Math.abs(accDx) / cwidth + 2) : 1);
                                }
                                slider.setProps(offset + dx, "setTouch");
                            }
                        }
                    }

                    function onMSGestureEnd(e) {
                        e.stopPropagation();
                        var slider = e.target._slider;
                        if (!slider) {
                            return;
                        }
                        if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                            var updateDx = (reverse) ? -dx : dx,
                                target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                            if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
                                slider.flexAnimate(target, slider.vars.pauseOnAction);
                            } else {
                                if (!fade) {
                                    slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                                }
                            }
                        }

                        startX = null;
                        startY = null;
                        dx = null;
                        offset = null;
                        accDx = 0;
                    }
                }
            },
            resize: function () {
                if (!slider.animating && slider.is(':visible')) {
                    if (!carousel) {
                        slider.doMath();
                    }

                    if (fade) {
                        // SMOOTH HEIGHT:
                        methods.smoothHeight();
                    } else if (carousel) { //CAROUSEL:
                        slider.slides.width(slider.computedW);
                        slider.update(slider.pagingCount);
                        slider.setProps();
                    } else if (vertical) { //VERTICAL:
                        slider.viewport.height(slider.h);
                        slider.setProps(slider.h, "setTotal");
                    } else {
                        // SMOOTH HEIGHT:
                        if (slider.vars.smoothHeight) {
                            methods.smoothHeight();
                        }
                        slider.newSlides.width(slider.computedW);
                        slider.setProps(slider.computedW, "setTotal");
                    }
                }
            },
            smoothHeight: function (dur) {
                if (!vertical || fade) {
                    var $obj = (fade) ? slider : slider.viewport;
                    (dur) ? $obj.animate({
                        "height": slider.slides.eq(slider.animatingTo).height()
                    }, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
                }
            },
            sync: function (action) {
                var $obj = $(slider.vars.sync).data("flexslider"),
                    target = slider.animatingTo;

                switch (action) {
                    case "animate":
                        $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true);
                        break;
                    case "play":
                        if (!$obj.playing && !$obj.asNav) {
                            $obj.play();
                        }
                        break;
                    case "pause":
                        $obj.pause();
                        break;
                }
            },
            uniqueID: function ($clone) {
                // Append _clone to current level and children elements with id attributes
                $clone.filter('[id]').add($clone.find('[id]')).each(function () {
                    var $this = $(this);
                    $this.attr('id', $this.attr('id') + '_clone');
                });
                return $clone;
            },
            pauseInvisible: {
                visProp: null,
                init: function () {
                    var visProp = methods.pauseInvisible.getHiddenProp();
                    if (visProp) {
                        var evtname = visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
                        document.addEventListener(evtname, function () {
                            if (methods.pauseInvisible.isHidden()) {
                                if (slider.startTimeout) {
                                    clearTimeout(slider.startTimeout); //If clock is ticking, stop timer and prevent from starting while invisible
                                } else {
                                    slider.pause(); //Or just pause
                                }
                            } else {
                                if (slider.started) {
                                    slider.play(); //Initiated before, just play
                                } else {
                                    if (slider.vars.initDelay > 0) {
                                        setTimeout(slider.play, slider.vars.initDelay);
                                    } else {
                                        slider.play(); //Didn't init before: simply init or wait for it
                                    }
                                }
                            }
                        });
                    }
                },
                isHidden: function () {
                    var prop = methods.pauseInvisible.getHiddenProp();
                    if (!prop) {
                        return false;
                    }
                    return document[prop];
                },
                getHiddenProp: function () {
                    var prefixes = ['webkit', 'moz', 'ms', 'o'];
                    // if 'hidden' is natively supported just return it
                    if ('hidden' in document) {
                        return 'hidden';
                    }
                    // otherwise loop over all the known prefixes until we find one
                    for (var i = 0; i < prefixes.length; i++) {
                        if ((prefixes[i] + 'Hidden') in document) {
                            return prefixes[i] + 'Hidden';
                        }
                    }
                    // otherwise it's not supported
                    return null;
                }
            },
            setToClearWatchedEvent: function () {
                clearTimeout(watchedEventClearTimer);
                watchedEventClearTimer = setTimeout(function () {
                    watchedEvent = "";
                }, 3000);
            }
        };

        // public methods
        slider.flexAnimate = function (target, pause, override, withSync, fromNav) {
            if (!slider.vars.animationLoop && target !== slider.currentSlide) {
                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
            }

            if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";

            if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
                if (asNav && withSync) {
                    var master = $(slider.vars.asNavFor).data('flexslider');
                    slider.atEnd = target === 0 || target === slider.count - 1;
                    master.flexAnimate(target, true, false, true, fromNav);
                    slider.direction = (slider.currentItem < target) ? "next" : "prev";
                    master.direction = slider.direction;

                    if (Math.ceil((target + 1) / slider.visible) - 1 !== slider.currentSlide && target !== 0) {
                        slider.currentItem = target;
                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
                        target = Math.floor(target / slider.visible);
                    } else {
                        slider.currentItem = target;
                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
                        return false;
                    }
                }

                slider.animating = true;
                slider.animatingTo = target;

                // SLIDESHOW:
                if (pause) {
                    slider.pause();
                }

                // API: before() animation Callback
                slider.vars.before(slider);

                // SYNC:
                if (slider.syncExists && !fromNav) {
                    methods.sync("animate");
                }

                // CONTROLNAV
                if (slider.vars.controlNav) {
                    methods.controlNav.active();
                }

                // !CAROUSEL:
                // CANDIDATE: slide active class (for add/remove slide)
                if (!carousel) {
                    slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');
                }

                // INFINITE LOOP:
                // CANDIDATE: atEnd
                slider.atEnd = target === 0 || target === slider.last;

                // DIRECTIONNAV:
                if (slider.vars.directionNav) {
                    methods.directionNav.update();
                }

                if (target === slider.last) {
                    // API: end() of cycle Callback
                    slider.vars.end(slider);
                    // SLIDESHOW && !INFINITE LOOP:
                    if (!slider.vars.animationLoop) {
                        slider.pause();
                    }
                }

                // SLIDE:
                if (!fade) {
                    var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
                        margin, slideString, calcNext;

                    // INFINITE LOOP / REVERSE:
                    if (carousel) {
                        //margin = (slider.vars.itemWidth > slider.w) ? slider.vars.itemMargin * 2 : slider.vars.itemMargin;
                        margin = slider.vars.itemMargin;
                        calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
                        slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
                    } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
                        slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
                    } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
                        slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
                    } else {
                        slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
                    }
                    slider.setProps(slideString, "", slider.vars.animationSpeed);
                    if (slider.transitions) {
                        if (!slider.vars.animationLoop || !slider.atEnd) {
                            slider.animating = false;
                            slider.currentSlide = slider.animatingTo;
                        }

                        // Unbind previous transitionEnd events and re-bind new transitionEnd event
                        slider.container.unbind("webkitTransitionEnd transitionend");
                        slider.container.bind("webkitTransitionEnd transitionend", function () {
                            clearTimeout(slider.ensureAnimationEnd);
                            slider.wrapup(dimension);
                        });

                        // Insurance for the ever-so-fickle transitionEnd event
                        clearTimeout(slider.ensureAnimationEnd);
                        slider.ensureAnimationEnd = setTimeout(function () {
                            slider.wrapup(dimension);
                        }, slider.vars.animationSpeed + 100);

                    } else {
                        slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function () {
                            slider.wrapup(dimension);
                        });
                    }
                } else { // FADE:
                    if (!touch) {
                        //slider.slides.eq(slider.currentSlide).fadeOut(slider.vars.animationSpeed, slider.vars.easing);
                        //slider.slides.eq(target).fadeIn(slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

                        slider.slides.eq(slider.currentSlide).css({
                            "zIndex": 1
                        }).animate({
                            "opacity": 0
                        }, slider.vars.animationSpeed, slider.vars.easing);
                        slider.slides.eq(target).css({
                            "zIndex": 2
                        }).animate({
                            "opacity": 1
                        }, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

                    } else {
                        slider.slides.eq(slider.currentSlide).css({
                            "opacity": 0,
                            "zIndex": 1
                        });
                        slider.slides.eq(target).css({
                            "opacity": 1,
                            "zIndex": 2
                        });
                        slider.wrapup(dimension);
                    }
                }
                // SMOOTH HEIGHT:
                if (slider.vars.smoothHeight) {
                    methods.smoothHeight(slider.vars.animationSpeed);
                }
            }
        };
        slider.wrapup = function (dimension) {
            // SLIDE:
            if (!fade && !carousel) {
                if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
                    slider.setProps(dimension, "jumpEnd");
                } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
                    slider.setProps(dimension, "jumpStart");
                }
            }
            slider.animating = false;
            slider.currentSlide = slider.animatingTo;
            // API: after() animation Callback
            slider.vars.after(slider);
        };

        // SLIDESHOW:
        slider.animateSlides = function () {
            if (!slider.animating && focused) {
                slider.flexAnimate(slider.getTarget("next"));
            }
        };
        // SLIDESHOW:
        slider.pause = function () {
            clearInterval(slider.animatedSlides);
            slider.animatedSlides = null;
            slider.playing = false;
            // PAUSEPLAY:
            if (slider.vars.pausePlay) {
                methods.pausePlay.update("play");
            }
            // SYNC:
            if (slider.syncExists) {
                methods.sync("pause");
            }
        };
        // SLIDESHOW:
        slider.play = function () {
            if (slider.playing) {
                clearInterval(slider.animatedSlides);
            }
            slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
            slider.started = slider.playing = true;
            // PAUSEPLAY:
            if (slider.vars.pausePlay) {
                methods.pausePlay.update("pause");
            }
            // SYNC:
            if (slider.syncExists) {
                methods.sync("play");
            }
        };
        // STOP:
        slider.stop = function () {
            slider.pause();
            slider.stopped = true;
        };
        slider.canAdvance = function (target, fromNav) {
            // ASNAV:
            var last = (asNav) ? slider.pagingCount - 1 : slider.last;
            return (fromNav) ? true :
                (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true :
                    (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
                        (target === slider.currentSlide && !asNav) ? false :
                            (slider.vars.animationLoop) ? true :
                                (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
                                    (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
                                        true;
        };
        slider.getTarget = function (dir) {
            slider.direction = dir;
            if (dir === "next") {
                return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
            } else {
                return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
            }
        };

        // SLIDE:
        slider.setProps = function (pos, special, dur) {
            var target = (function () {
                var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,
                    posCalc = (function () {
                        if (carousel) {
                            return (special === "setTouch") ? pos :
                                (reverse && slider.animatingTo === slider.last) ? 0 :
                                    (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                                        (slider.animatingTo === slider.last) ? slider.limit : posCheck;
                        } else {
                            switch (special) {
                                case "setTotal":
                                    return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                                case "setTouch":
                                    return (reverse) ? pos : pos;
                                case "jumpEnd":
                                    return (reverse) ? pos : slider.count * pos;
                                case "jumpStart":
                                    return (reverse) ? slider.count * pos : pos;
                                default:
                                    return pos;
                            }
                        }
                    }());

                return (posCalc * -1) + "px";
            }());

            if (slider.transitions) {
                target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
                dur = (dur !== undefined) ? (dur / 1000) + "s" : "0s";
                slider.container.css("-" + slider.pfx + "-transition-duration", dur);
                slider.container.css("transition-duration", dur);
            }

            slider.args[slider.prop] = target;
            if (slider.transitions || dur === undefined) {
                slider.container.css(slider.args);
            }

            slider.container.css('transform', target);
        };

        slider.setup = function (type) {
            // SLIDE:
            if (!fade) {
                var sliderOffset, arr;

                if (type === "init") {
                    slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({
                        "overflow": "hidden",
                        "position": "relative"
                    }).appendTo(slider).append(slider.container);
                    // INFINITE LOOP:
                    slider.cloneCount = 0;
                    slider.cloneOffset = 0;
                    // REVERSE:
                    if (reverse) {
                        arr = $.makeArray(slider.slides).reverse();
                        slider.slides = $(arr);
                        slider.container.empty().append(slider.slides);
                    }
                }
                // INFINITE LOOP && !CAROUSEL:
                if (slider.vars.animationLoop && !carousel) {
                    slider.cloneCount = 2;
                    slider.cloneOffset = 1;
                    // clear out old clones
                    if (type !== "init") {
                        slider.container.find('.clone').remove();
                    }
                    slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass('clone')).attr('aria-hidden', 'true'))
                        .prepend(methods.uniqueID(slider.slides.last().clone().addClass('clone')).attr('aria-hidden', 'true'));
                }
                slider.newSlides = $(slider.vars.selector, slider);

                sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
                // VERTICAL:
                if (vertical && !carousel) {
                    slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                    setTimeout(function () {
                        slider.newSlides.css({
                            "display": "block"
                        });
                        slider.doMath();
                        slider.viewport.height(slider.h);
                        slider.setProps(sliderOffset * slider.h, "init");
                    }, (type === "init") ? 100 : 0);
                } else {
                    slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
                    slider.setProps(sliderOffset * slider.computedW, "init");
                    setTimeout(function () {
                        slider.doMath();
                        slider.newSlides.css({
                            "width": slider.computedW,
                            "float": "left",
                            "display": "block"
                        });
                        // SMOOTH HEIGHT:
                        if (slider.vars.smoothHeight) {
                            methods.smoothHeight();
                        }
                    }, (type === "init") ? 100 : 0);
                }
            } else { // FADE:
                slider.slides.css({
                    "width": "100%",
                    "float": "left",
                    "marginRight": "-100%",
                    "position": "relative"
                });
                if (type === "init") {
                    if (!touch) {
                        //slider.slides.eq(slider.currentSlide).fadeIn(slider.vars.animationSpeed, slider.vars.easing);
                        if (slider.vars.fadeFirstSlide == false) {
                            slider.slides.css({
                                "opacity": 0,
                                "display": "block",
                                "zIndex": 1
                            }).eq(slider.currentSlide).css({
                                "zIndex": 2
                            }).css({
                                "opacity": 1
                            });
                        } else {
                            slider.slides.css({
                                "opacity": 0,
                                "display": "block",
                                "zIndex": 1
                            }).eq(slider.currentSlide).css({
                                "zIndex": 2
                            }).animate({
                                "opacity": 1
                            }, slider.vars.animationSpeed, slider.vars.easing);
                        }
                    } else {
                        slider.slides.css({
                            "opacity": 0,
                            "display": "block",
                            "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease",
                            "zIndex": 1
                        }).eq(slider.currentSlide).css({
                            "opacity": 1,
                            "zIndex": 2
                        });
                    }
                }
                // SMOOTH HEIGHT:
                if (slider.vars.smoothHeight) {
                    methods.smoothHeight();
                }
            }
            // !CAROUSEL:
            // CANDIDATE: active slide
            if (!carousel) {
                slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
            }

            //FlexSlider: init() Callback
            slider.vars.init(slider);
        };

        slider.doMath = function () {
            var slide = slider.slides.first(),
                slideMargin = slider.vars.itemMargin,
                minItems = slider.vars.minItems,
                maxItems = slider.vars.maxItems;

            slider.w = (slider.viewport === undefined) ? slider.width() : slider.viewport.width();
            slider.h = slide.height();
            slider.boxPadding = slide.outerWidth() - slide.width();

            // CAROUSEL:
            if (carousel) {
                slider.itemT = slider.vars.itemWidth + slideMargin;
                slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
                slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
                slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1))) / minItems :
                    (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1))) / maxItems :
                        (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;

                slider.visible = Math.floor(slider.w / (slider.itemW));
                slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible) ? slider.vars.move : slider.visible;
                slider.pagingCount = Math.ceil(((slider.count - slider.visible) / slider.move) + 1);
                slider.last = slider.pagingCount - 1;
                slider.limit = (slider.pagingCount === 1) ? 0 :
                    (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
            } else {
                slider.itemW = slider.w;
                slider.pagingCount = slider.count;
                slider.last = slider.count - 1;
            }
            slider.computedW = slider.itemW - slider.boxPadding;
        };

        slider.update = function (pos, action) {
            slider.doMath();

            // update currentSlide and slider.animatingTo if necessary
            if (!carousel) {
                if (pos < slider.currentSlide) {
                    slider.currentSlide += 1;
                } else if (pos <= slider.currentSlide && pos !== 0) {
                    slider.currentSlide -= 1;
                }
                slider.animatingTo = slider.currentSlide;
            }

            // update controlNav
            if (slider.vars.controlNav && !slider.manualControls) {
                if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
                    methods.controlNav.update("add");
                } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
                    if (carousel && slider.currentSlide > slider.last) {
                        slider.currentSlide -= 1;
                        slider.animatingTo -= 1;
                    }
                    methods.controlNav.update("remove", slider.last);
                }
            }
            // update directionNav
            if (slider.vars.directionNav) {
                methods.directionNav.update();
            }

        };

        slider.addSlide = function (obj, pos) {
            var $obj = $(obj);

            slider.count += 1;
            slider.last = slider.count - 1;

            // append new slide
            if (vertical && reverse) {
                (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
            } else {
                (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
            }

            // update currentSlide, animatingTo, controlNav, and directionNav
            slider.update(pos, "add");

            // update slider.slides
            slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
            // re-setup the slider to accomdate new slide
            slider.setup();

            //FlexSlider: added() Callback
            slider.vars.added(slider);
        };
        slider.removeSlide = function (obj) {
            var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;

            // update count
            slider.count -= 1;
            slider.last = slider.count - 1;

            // remove slide
            if (isNaN(obj)) {
                $(obj, slider.slides).remove();
            } else {
                (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
            }

            // update currentSlide, animatingTo, controlNav, and directionNav
            slider.doMath();
            slider.update(pos, "remove");

            // update slider.slides
            slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
            // re-setup the slider to accomdate new slide
            slider.setup();

            // FlexSlider: removed() Callback
            slider.vars.removed(slider);
        };

        //FlexSlider: Initialize
        methods.init();
    };

    // Ensure the slider isn't focussed if the window loses focus.
    $(window).blur(function (e) {
        focused = false;
    }).focus(function (e) {
        focused = true;
    });

    //FlexSlider: Default Settings
    $.flexslider.defaults = {
        namespace: "flex-", //{NEW} String: Prefix string attached to the class of every element generated by the plugin
        selector: ".slides > li", //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
        animation: "fade", //String: Select your animation type, "fade" or "slide"
        easing: "swing", //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        direction: "horizontal", //String: Select the sliding direction, "horizontal" or "vertical"
        reverse: false, //{NEW} Boolean: Reverse the animation direction
        animationLoop: true, //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight: false, //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        startAt: 0, //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow: true, //Boolean: Animate slider automatically
        slideshowSpeed: 7000, //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed: 600, //Integer: Set the speed of animations, in milliseconds
        initDelay: 0, //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize: false, //Boolean: Randomize slide order
        fadeFirstSlide: true, //Boolean: Fade in the first slide when animation type is "fade"
        thumbCaptions: false, //Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.

        // Usability features
        pauseOnAction: true, //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover: false, //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        pauseInvisible: true, //{NEW} Boolean: Pause the slideshow when tab is invisible, resume when visible. Provides better UX, lower CPU usage.
        useCSS: true, //{NEW} Boolean: Slider will use CSS3 transitions if available
        touch: true, //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video: false, //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

        // Primary Controls
        controlNav: true, //Boolean: Create navigation for paging control of each slide? Note: Leave true for manualControls usage
        directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText: "Previous", //String: Set the text for the "previous" directionNav item
        nextText: "Next", //String: Set the text for the "next" directionNav item

        // Secondary Navigation
        keyboard: true, //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard: false, //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel: false, //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
        pausePlay: false, //Boolean: Create pause/play dynamic element
        pauseText: "Pause", //String: Set the text for the "pause" pausePlay item
        playText: "Play", //String: Set the text for the "play" pausePlay item

        // Special properties
        controlsContainer: "", //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
        manualControls: "", //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
        customDirectionNav: "", //{NEW} jQuery Object/Selector: Custom prev / next button. Must be two jQuery elements. In order to make the events work they have to have the classes "prev" and "next" (plus namespace)
        sync: "", //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
        asNavFor: "", //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

        // Carousel Options
        itemWidth: 0, //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
        itemMargin: 0, //{NEW} Integer: Margin between carousel items.
        minItems: 1, //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
        maxItems: 0, //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
        move: 0, //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
        allowOneSlide: true, //{NEW} Boolean: Whether or not to allow a slider comprised of a single slide

        // Callback API
        start: function () {
        }, //Callback: function(slider) - Fires when the slider loads the first slide
        before: function () {
        }, //Callback: function(slider) - Fires asynchronously with each slider animation
        after: function () {
        }, //Callback: function(slider) - Fires after each slider animation completes
        end: function () {
        }, //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
        added: function () {
        }, //{NEW} Callback: function(slider) - Fires after a slide is added
        removed: function () {
        }, //{NEW} Callback: function(slider) - Fires after a slide is removed
        init: function () {
        } //{NEW} Callback: function(slider) - Fires after the slider is initially setup
    };

    //FlexSlider: Plugin Function
    $.fn.flexslider = function (options) {
        if (options === undefined) {
            options = {};
        }

        if (typeof options === "object") {
            return this.each(function () {
                var $this = $(this),
                    selector = (options.selector) ? options.selector : ".slides > li",
                    $slides = $this.find(selector);

                if (($slides.length === 1 && options.allowOneSlide === true) || $slides.length === 0) {
                    $slides.fadeIn(400);
                    if (options.start) {
                        options.start($this);
                    }
                } else if ($this.data('flexslider') === undefined) {
                    new $.flexslider(this, options);
                }
            });
        } else {
            // Helper strings to quickly perform functions on the slider
            var $slider = $(this).data('flexslider');
            switch (options) {
                case "play":
                    $slider.play();
                    break;
                case "pause":
                    $slider.pause();
                    break;
                case "stop":
                    $slider.stop();
                    break;
                case "next":
                    $slider.flexAnimate($slider.getTarget("next"), true);
                    break;
                case "prev":
                case "previous":
                    $slider.flexAnimate($slider.getTarget("prev"), true);
                    break;
                default:
                    if (typeof options === "number") {
                        $slider.flexAnimate(options, true);
                    }
            }
        }
    };
})(jQuery);
///////////////////////////////////////////////////////////////////////////////////////////////
//                                     PLUGINS                                               //
///////////////////////////////////////////////////////////////////////////////////////////////


//THESE ARE THE PLUGINS TO MAKE THE SITE WORK CROSS DEVICE/BROWSER - AS WELL AS SOME ONES USED ALLLLLL THE TIME!
//ADD NEW ONES IN HERE IF YOU WANT, OR ADD THEM SEPARATELY VIA THE all.js FILE.


/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);*/

//console log that doesn't break IE
window.log = window.log || function () {
};
window.log.needDetailPrint = function () {
    var uaCheck, uaVersion, ua = window.navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(window.navigator.platform)) {
        uaCheck = ua.match(/OS\s([0-9]{1})_([0-9]{1})/);
        uaVersion = uaCheck ? parseInt(uaCheck[1], 10) : 0;
        if (uaVersion >= 6) return !0
    } else if (window.opera) {
        uaCheck = /Version\/(\d+)\.\d+/;
        if (uaCheck.test(ua) && parseInt(uaCheck.exec(ua)[1], 10) <= 11) return !0
    } else if (/MSIE\s\d/.test(ua)) return !0;
    return !1
};
window.log.detailPrint = function (args) {
    var j, thisArg, argType, str, beginStr, getSpecificType = function (obj) {
            var reportedType = Object.prototype.toString.call(obj),
                found = "",
                types = "Array,Date,RegExp,Null".split(","),
                n = types.length;
            while (n--)
                if (reportedType === "[object " + types[n] + "]") {
                    found = types[n].toLowerCase();
                    break
                }
            if (found.length) return found;
            if (typeof HTMLElement == "object" && obj instanceof HTMLElement || typeof obj.nodeName == "string" && obj.nodeType === 1) found = "element";
            else if (typeof Node == "object" && obj instanceof Node || typeof obj.nodeType == "number" && typeof obj.nodeName == "string") found = "node";
            return found.length ? found : typeof obj
        },
        detailedArgs = [],
        i = 0;
    while (i < args.length) {
        thisArg = args[i];
        argType = typeof thisArg;
        beginStr = "Item " + (i + 1) + "/" + args.length + " ";
        if (argType === "object") {
            argType = getSpecificType(thisArg);
            if (argType === "array")
                if (!thisArg.length) detailedArgs.push(beginStr + "(array, empty) ", thisArg);
                else {
                    j = thisArg.length > 3 ? 3 : thisArg.length;
                    str = "";
                    while (j--) str = getSpecificType(thisArg[j]) + ", " + str;
                    thisArg.length > 3 ? str += "..." : str = str.replace(/,\s$/, "");
                    detailedArgs.push(beginStr + "(array, length=" + thisArg.length + ", [" + str + "]) ", thisArg)
                } else if (argType === "element") {
                str = thisArg.nodeName.toLowerCase();
                thisArg.id && (str += "#" + thisArg.id);
                thisArg.className && (str += "." + thisArg.className.replace(/\s+/g, "."));
                detailedArgs.push(beginStr + "(element, " + str + ") ", thisArg)
            } else if (argType === "date") detailedArgs.push(beginStr + "(date) ", thisArg.toUTCString());
            else {
                detailedArgs.push(beginStr + "(" + argType + ")", thisArg);
                if (argType === "object" && typeof thisArg.hasOwnProperty == "function")
                    for (j in thisArg) thisArg.hasOwnProperty(j) && detailedArgs.push(' --> "' + j + '" = (' + getSpecificType(thisArg[j]) + ") ", thisArg[j])
            }
        } else detailedArgs.push(beginStr + "(" + typeof thisArg + ") ", thisArg);
        i++
    }
    return detailedArgs
};
/*
CSS Browser Selector v0.4.0 (Nov 02, 2010)
Rafael Lima (http://rafael.adm.br)
http://rafael.adm.br/css_browser_selector
License: http://creativecommons.org/licenses/by/2.5/
Contributors: http://rafael.adm.br/css_browser_selector#contributors

v0.5.0 2011-08-24
andrew relkin

modified, now detects:
any version of Firefox
more versions of Windows (Win8, Win7, Vista, XP, Win2k)
more versions of IE under unique conditions
more detailed support for Opera
if "no-js" in HTML class: removes and replaces with "js" (<html class="no-js">)

identifies
  browsers: Firefox; IE; Opera; Safari; Chrome, Konqueror, Iron
  browser versions: (most importantly: ie6, ie7, ie8, ie9)
  rendering engines: Webkit; Mozilla; Gecko
  platforms/OSes: Mac; Win: Win7, Vista, XP, Win2k; FreeBSD; Linux/x11
  devices: Ipod; Ipad; Iphone; WebTV; Blackberry; Android; J2me; mobile(generic)
  enabled technology: JS

v0.6.3 2014-03-06
@silasrm <silasrm@gmail.com>
    - Added support to IE11
        @see http://msdn.microsoft.com/en-us/library/ie/hh869301(v=vs.85).aspx
        @see http://msdn.microsoft.com/en-us/library/ie/bg182625(v=vs.85).aspx
*/

showLog = true;

function log(m) {
    if (window.console && showLog) {
        console.log(m);
    }
}

function css_browser_selector(u) {
    var uaInfo = {},
        screens = [320, 480, 640, 768, 1024, 1152, 1280, 1440, 1680, 1920, 2560],
        allScreens = screens.length,
        ua = u.toLowerCase(),
        is = function (t) {
            return RegExp(t, "i").test(ua);
        },
        version = function (p, n) {
            n = n.replace(".", "_");
            var i = n.indexOf('_'),
                ver = "";
            while (i > 0) {
                ver += " " + p + n.substring(0, i);
                i = n.indexOf('_', i + 1);
            }
            ver += " " + p + n;
            return ver;
        },
        g = 'gecko',
        w = 'webkit',
        c = 'chrome',
        f = 'firefox',
        s = 'safari',
        o = 'opera',
        m = 'mobile',
        a = 'android',
        bb = 'blackberry',
        lang = 'lang_',
        dv = 'device_',
        html = document.documentElement,
        b = [

            // browser
            ((!(/opera|webtv/i.test(ua)) && /msie\s(\d+)/.test(ua) || (/trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.test(ua)))) ? ('ie ie' + (/trident\/4\.0/.test(ua) ? '8' : RegExp.$1 == '11.0' ? '11' : RegExp.$1)) : is('firefox/') ? g + " " + f + (/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua) ? ' ' + f + RegExp.$2 + ' ' + f + RegExp.$2 + "_" + RegExp.$4 : '') : is('gecko/') ? g : is('opera') ? o + (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua) ? ' ' + o + RegExp.$2 + ' ' + o + RegExp.$2 + "_" + RegExp.$4 : (/opera(\s|\/)(\d+)\.(\d+)/.test(ua) ? ' ' + o + RegExp.$2 + " " + o + RegExp.$2 + "_" + RegExp.$3 : '')) : is('konqueror') ? 'konqueror'

                : is('blackberry') ?
                    (bb +
                        (/Version\/(\d+)(\.(\d+)+)/i.test(ua) ? " " + bb + RegExp.$1 + " " + bb + RegExp.$1 + RegExp.$2.replace('.', '_') : (/Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(ua) ? ' ' + bb + RegExp.$2 + (RegExp.$3 ? ' ' + bb + RegExp.$2 + RegExp.$3 : '') : ''))
                    ) // blackberry

                    : is('android') ?
                        (a +
                            (/Version\/(\d+)(\.(\d+))+/i.test(ua) ? " " + a + RegExp.$1 + " " + a + RegExp.$1 + RegExp.$2.replace('.', '_') : '') + (/Android (.+); (.+) Build/i.test(ua) ? ' ' + dv + ((RegExp.$2).replace(/ /g, "_")).replace(/-/g, "_") : '')
                        ) //android

                        : is('chrome') ? w + ' ' + c + (/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua) ? ' ' + c + RegExp.$2 + ((RegExp.$4 > 0) ? ' ' + c + RegExp.$2 + "_" + RegExp.$4 : '') : '')

                            : is('iron') ? w + ' iron'

                                : is('applewebkit/') ?
                                    (w + ' ' + s +
                                        (/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(ua) ? ' ' + s + RegExp.$2 + " " + s + RegExp.$2 + RegExp.$3.replace('.', '_') : (/ Safari\/(\d+)/i.test(ua) ?
                                            ((RegExp.$1 == "419" || RegExp.$1 == "417" || RegExp.$1 == "416" || RegExp.$1 == "412") ? ' ' + s + '2_0' : RegExp.$1 == "312" ? ' ' + s + '1_3' : RegExp.$1 == "125" ? ' ' + s + '1_2' : RegExp.$1 == "85" ? ' ' + s + '1_0' : '') : ''))
                                    ) //applewebkit

                                    : is('mozilla/') ? g : ''

            // mobile
            , is("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk") ? m : ''

            // os/platform
            , is('j2me') ? 'j2me' : is('ipad|ipod|iphone') ?
                (
                    (
                        /CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(ua) ?
                            'ios' + version('ios', RegExp.$2) : ''
                    ) + ' ' + (/(ip(ad|od|hone))/gi.test(ua) ? RegExp.$1 : "")
                ) //'iphone'
                //:is('ipod')?'ipod'
                //:is('ipad')?'ipad'
                : is('playbook') ? 'playbook' : is('kindle|silk') ? 'kindle' : is('playbook') ? 'playbook' : is('mac') ? 'mac' + (/mac os x ((\d+)[.|_](\d+))/.test(ua) ? (' mac' + (RegExp.$2) + ' mac' + (RegExp.$1).replace('.', "_")) : '') : is('win') ? 'win' +
                    (is('windows nt 6.2') ? ' win8' : is('windows nt 6.1') ? ' win7' : is('windows nt 6.0') ? ' vista' : is('windows nt 5.2') || is('windows nt 5.1') ? ' win_xp' : is('windows nt 5.0') ? ' win_2k' : is('windows nt 4.0') || is('WinNT4.0') ? ' win_nt' : '') : is('freebsd') ? 'freebsd' : (is('x11|linux')) ? 'linux' : ''

            // user agent language
            , (/[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(ua)) ? (lang + RegExp.$2).replace("-", "_") + (RegExp.$3 != '' ? (' ' + lang + RegExp.$1).replace("-", "_") : '') : ''

            // beta: test if running iPad app
            , (is('ipad|iphone|ipod') && !is('safari')) ? 'ipad_app' : ''


        ]; // b

    function screenSize() {
        var w = window.outerWidth || html.clientWidth;
        var h = window.outerHeight || html.clientHeight;
        uaInfo.orientation = ((w < h) ? "portrait" : "landscape");
        // remove previous min-width, max-width, client-width, client-height, and orientation
        html.className = html.className.replace(/ ?orientation_\w+/g, "").replace(/ [min|max|cl]+[w|h]_\d+/g, "")
        for (var i = (allScreens - 1); i >= 0; i--) {
            if (w >= screens[i]) {
                uaInfo.maxw = screens[i];
                break;
            }
        }
        widthClasses = "";
        for (var info in uaInfo) {
            widthClasses += " " + info + "_" + uaInfo[info]
        }
        ;
        html.className = (html.className + widthClasses);
        return widthClasses;
    } // screenSize

    window.onresize = screenSize;
    screenSize();

    function retina() {
        var r = window.devicePixelRatio > 1;
        if (r) {
            html.className += ' retina';
        } else {
            html.className += ' non-retina';
        }
    }

    retina();

    var cssbs = (b.join(' ')) + " js ";
    html.className = (cssbs + html.className.replace(/\b(no[-|_]?)?js\b/g, "")).replace(/^ /, "").replace(/ +/g, " ");

    return cssbs;
}

css_browser_selector(navigator.userAgent);
/**
 * hoverIntent is similar to jQuery's built-in "hover" function except that
 * instead of firing the onMouseOver event immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the onMouseOver event.
 *
 * hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
 * <http://cherne.net/brian/resources/jquery.hoverIntent.html>
 *
 * hoverIntent is currently available for use in all personal or commercial
 * projects under both MIT and GPL licenses. This means that you can choose
 * the license that best suits your project, and use it accordingly.
 *
 * // basic usage (just like .hover) receives onMouseOver and onMouseOut functions
 * $("ul li").hoverIntent( showNav , hideNav );
 *
 * // advanced usage receives configuration object only
 * $("ul li").hoverIntent({
 * sensitivity: 7, // number = sensitivity threshold (must be 1 or higher)
 * interval: 100,   // number = milliseconds of polling interval
 * over: showNav,  // function = onMouseOver callback (required)
 * timeout: 0,   // number = milliseconds delay before onMouseOut function call
 * out: hideNav    // function = onMouseOut callback (required)
 * });
 *
 * @param  f  onMouseOver function || An object with configuration options
 * @param  g  onMouseOut function  || Nothing (use configuration options object)
 * @author    Brian Cherne brian(at)cherne(dot)net
 */
(function ($) {
    $.fn.hoverIntent = function (f, g) {
        // default configuration options
        var cfg = {
            sensitivity: 7,
            interval: 150,
            timeout: 150
        };
        // override configuration options with user supplied object
        cfg = $.extend(cfg, g ? {
            over: f,
            out: g
        } : f);

        // instantiate variables
        // cX, cY = current X and Y position of mouse, updated by mousemove event
        // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
        var cX, cY, pX, pY;

        // A private function for getting mouse position
        var track = function (ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };

        // A private function for comparing current and previous mouse position
        var compare = function (ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            // compare mouse positions to see if they've crossed the threshold
            if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) {
                $(ob).unbind("mousemove", track);
                // set hoverIntent state to true (so mouseOut can be called)
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob, [ev]);
            } else {
                // set previous coordinates for next time
                pX = cX;
                pY = cY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                ob.hoverIntent_t = setTimeout(function () {
                    compare(ev, ob);
                }, cfg.interval);
            }
        };

        // A private function for delaying the mouseOut function
        var delay = function (ev, ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob, [ev]);
        };

        // A private function for handling mouse 'hovering'
        var handleHover = function (e) {
            // copy objects to be passed into t (required for event object to be passed in IE)
            var ev = jQuery.extend({}, e);
            var ob = this;

            // cancel hoverIntent timer if it exists
            if (ob.hoverIntent_t) {
                ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            }

            // if e.type == "mouseenter"
            if (e.type == "mouseenter") {
                // set "previous" X and Y position based on initial entry point
                pX = ev.pageX;
                pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $(ob).bind("mousemove", track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                if (ob.hoverIntent_s != 1) {
                    ob.hoverIntent_t = setTimeout(function () {
                        compare(ev, ob);
                    }, cfg.interval);
                }

                // else e.type == "mouseleave"
            } else {
                // unbind expensive mousemove event
                $(ob).unbind("mousemove", track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                if (ob.hoverIntent_s == 1) {
                    ob.hoverIntent_t = setTimeout(function () {
                        delay(ev, ob);
                    }, cfg.timeout);
                }
            }
        };

        // bind the function to the two event listeners
        return this.bind('mouseenter', handleHover).bind('mouseleave', handleHover);
    };
})(jQuery);
/**
 * jquery-bigTarget.js - enlarge an anchors clickzone
 * https://github.com/leevigraham/jquery-bigTarget
 * Written by: Leevi Graham <http://leevigraham.com>
 * Requires: jQuery v1.3.2 or later
 *
 * jquery-bigTarget.js takes an anchor and expands it's clickzone by adding an onclick action to a parent element (defined in the clickzone plugin option)  improving user accessibility.
 *
 * Plugin options:
 *
 * clickZone: 'div:eq(0)', // parent element selector. The element will be the big target clickzone
 * clickZoneClass: 'big-target-click-zone', // class added to the clickzone
 * clickZoneHoverClass: 'big-target-click-zone-hover', // class add on clickzone hover
 * anchorClass: 'big-target-anchor', // class added the the bigTarget anchor
 * anchorHoverClass: 'big-target-anchor-hover', // class added the the bigTarget anchor on hover
 * copyTitleToClickZone: true, // copy the anchors title element to the clickzone
 * openRelExternalInNewWindow: true // open rel="external" in a new window / tab
 *
 * Example Usage:
 *
 * $("#example2 .big-target-link").bigTarget({
 *     clickZone: '#example2',
 *     clickZoneClass: 'custom-big-target-click-zone',
 *     clickZoneHoverClass: 'custom-big-target-click-zone-hover',
 *     anchorHoverClass: 'custom-big-target-link-hover',
 *     copyTitleToClickZone: false,
 *     openRelExternalInNewWindow: false
 * });
 */

;
(function ($) {

    var ver = '2.0';

    $.fn.bigTarget = function (options) {
        var settings = $.extend({}, $.fn.bigTarget.defaults, options);
        return this.each(function (index) {

            var $a = $(this),
                href = this.href || false,
                title = this.title || false;

            if (!href) {
                return;
            }

            var o = $.metadata ? $.extend({}, settings, $a.metadata()) : settings;

            $a
                .addClass(o['anchorClass'])
                .hover(function () {
                    $a.toggleClass(o['anchorHoverClass']);
                })
                .parents(o['clickZone'])
                .each(function (index) {
                    var $clickZone = $(this);
                    if (title && o['copyTitleToClickZone']) {
                        $clickZone.attr('title', title);
                    }
                    $clickZone
                        .addClass(o['clickZoneClass'])
                        .hover(function () {
                            $clickZone.toggleClass(o['clickZoneHoverClass']);
                        })
                        .click(function () {
                            if (getSelectedText() == "") {
                                ($a.is('[rel*=external]') && o["openRelExternalInNewWindow"]) ? window.open(href) : window.location = href;
                            }
                        });
                });
        });
    };

    function getSelectedText() {
        var t = false;
        if (window.getSelection) {
            t = window.getSelection().toString();
        } else if (document.getSelection) {
            t = document.getSelection();
        } else if (document.selection) {
            t = document.selection.createRange().text;
        }
        return t;
    }

    $.fn.bigTarget.ver = function () {
        return ver;
    };

    $.fn.bigTarget.defaults = {
        clickZone: 'div:eq(0)',
        clickZoneClass: 'clickZone',
        clickZoneHoverClass: 'clickZoneHover',
        anchorClass: 'anchor',
        anchorHoverClass: 'anchorHover',
        copyTitleToClickZone: true,
        openRelExternalInNewWindow: true
    };

})(jQuery);
/**
 * Equal Heights Plugin
 * Equalize the heights of elements. Great for columns or any elements
 * that need to be the same size (floats, etc).
 *
 * Version 1.0
 * Updated 12/10/2008
 *
 * Copyright (c) 2008 Rob Glazebrook (cssnewbie.com)
 *
 * Usage: $(object).equalHeights([minHeight], [maxHeight]);
 *
 * Example 1: $(".cols").equalHeights(); Sets all columns to the same height.
 * Example 2: $(".cols").equalHeights(400); Sets all cols to at least 400px tall.
 * Example 3: $(".cols").equalHeights(100,300); Cols are at least 100 but no more
 * than 300 pixels tall. Elements with too much content will gain a scrollbar.
 *
 */

(function ($) {
    $.fn.equalHeights = function (minHeight, maxHeight) {
        tallest = (minHeight) ? minHeight : 0;
        this.each(function () {
            if ($(this).outerHeight() > tallest) {
                tallest = $(this).outerHeight();
            }
        });
        if ((maxHeight) && tallest > maxHeight) tallest = maxHeight;
        return this.each(function () {
            $(this).css({
                'min-height': tallest
            });
            //$(this).animate({'min-height':tallest},250);
            //.css("overflow","auto");
        });
    };
})(jQuery);
/**
 * jquery.matchHeight.js v0.5.2
 * http://brm.io/jquery-match-height/
 * License: MIT
 */

;
(function ($) {
    /*
   *  internal
   */

    var _previousResizeWidth = -1,
        _updateTimeout = -1;

    /*
   *  _rows
   *  utility function returns array of jQuery selections representing each row
   *  (as displayed after float wrapping applied by browser)
   */

    var _rows = function (elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];

        // group elements by their top position
        $elements.each(function () {
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    /*
   *  _parse
   *  value parse utility function
   */

    var _parse = function (value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

    /*
   *  $.fn.matchHeight
   *  plugin definition
   */

    $.fn.matchHeight = function (byRow) {

        // handle matchHeight('remove')
        if (byRow === 'remove') {
            var that = this;

            // remove fixed height from all selected elements
            this.css('height', '');

            // remove selected elements from all groups
            $.each($.fn.matchHeight._groups, function (key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1)
            return this;

        // byRow default to true
        byRow = (typeof byRow !== 'undefined') ? byRow : true;

        // keep track of this group so we can re-apply later on load and resize events
        $.fn.matchHeight._groups.push({
            elements: this,
            byRow: byRow
        });

        // match each element's height to the tallest element in the selection
        $.fn.matchHeight._apply(this, byRow);

        return this;
    };

    /*
   *  plugin global options
   */

    $.fn.matchHeight._groups = [];
    $.fn.matchHeight._throttle = 80;
    $.fn.matchHeight._maintainScroll = false;

    /*
   *  $.fn.matchHeight._apply
   *  apply matchHeight to given elements
   */

    $.fn.matchHeight._apply = function (elements, byRow) {
        var $elements = $(elements),
            rows = [$elements];

        // take note of scroll position
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);

        // get rows if using byRow, otherwise assume one row
        if (byRow) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function () {
                var $that = $(this),
                    display = $that.css('display') === 'inline-block' ? 'inline-block' : 'block';

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert the temporary forced style
            $elements.css({
                'display': '',
                'padding-top': '',
                'padding-bottom': '',
                'border-top-width': '',
                'border-bottom-width': '',
                'height': ''
            });
        }

        $.each(rows, function (key, row) {
            var $row = $(row),
                maxHeight = 0;

            // ensure elements are visible to prevent 0 height
            var hiddenParents = $row.parents().add($row).filter(':hidden');
            hiddenParents.css({
                'display': 'block'
            });

            // iterate the row and find the max height
            $row.each(function () {
                var $that = $(this),
                    display = $that.css('display') === 'inline-block' ? 'inline-block' : 'block';

                // ensure we get the correct actual height (and not a previously set height value)
                $that.css({
                    'display': display,
                    'height': ''
                });

                // find the max height (including padding, but not margin)
                if ($that.outerHeight(false) > maxHeight)
                    maxHeight = $that.outerHeight(false);

                // revert display block
                $that.css({
                    'display': ''
                });
            });

            // revert display block
            hiddenParents.css({
                'display': ''
            });

            // iterate the row and apply the height to all elements
            $row.each(function () {
                var $that = $(this),
                    verticalPadding = 0;

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css('height', maxHeight - verticalPadding);
            });
        });

        // restore scroll position if enabled
        if ($.fn.matchHeight._maintainScroll)
            $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));

        return this;
    };

    /*
   *  $.fn.matchHeight._applyDataApi
   *  applies matchHeight to all elements with a data-match-height attribute
   */

    $.fn.matchHeight._applyDataApi = function () {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function () {
            var $this = $(this),
                groupId = $this.attr('data-match-height') || $this.attr('data-mh');
            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function () {
            this.matchHeight(true);
        });
    };

    /*
   *  $.fn.matchHeight._update
   *  updates matchHeight on all current groups with their correct options
   */

    $.fn.matchHeight._update = function (event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth)
                return;
            _previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function () {

                $.each($.fn.matchHeight._groups, function () {
                    $.fn.matchHeight._apply(this.elements, this.byRow);
                });

                _updateTimeout = -1;

            }, $.fn.matchHeight._throttle);
        }
    };

    /*
   *  bind events
   */

    // apply on DOM ready event
    $($.fn.matchHeight._applyDataApi);

    // update heights on load and resize events
    $(window).bind('load resize orientationchange', $.fn.matchHeight._update);

})(jQuery);

(function ($, sr) {

    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced() {
            var obj = this,
                args = arguments;

            function delayed() {
                if (!execAsap)
                    func.apply(obj, args);
                timeout = null;
            }

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100);
        };
    };
    // smartresize
    jQuery.fn[sr] = function (fn) {
        return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
    };

})(jQuery, 'smartresize');

//handling the silly phone overflow properties
/*! Overthrow. An overflow:auto polyfill for responsive design. (c) 2012: Scott Jehl, Filament Group, Inc. http://filamentgroup.github.com/Overthrow/license.txt */
(function (w, undefined) {

    var doc = w.document,
        docElem = doc.documentElement,
        enabledClassName = "overthrow-enabled",

        // Touch events are used in the polyfill, and thus are a prerequisite
        canBeFilledWithPoly = "ontouchmove" in doc,

        // The following attempts to determine whether the browser has native overflow support
        // so we can enable it but not polyfill
        nativeOverflow =
            // Features-first. iOS5 overflow scrolling property check - no UA needed here. thanks Apple :)
            "WebkitOverflowScrolling" in docElem.style ||
            // Test the windows scrolling property as well
            "msOverflowStyle" in docElem.style ||
            // Touch events aren't supported and screen width is greater than X
            // ...basically, this is a loose "desktop browser" check.
            // It may wrongly opt-in very large tablets with no touch support.
            (!canBeFilledWithPoly && w.screen.width > 800) ||
            // Hang on to your hats.
            // Whitelist some popular, overflow-supporting mobile browsers for now and the future
            // These browsers are known to get overlow support right, but give us no way of detecting it.
            (function () {
                var ua = w.navigator.userAgent,
                    // Webkit crosses platforms, and the browsers on our list run at least version 534
                    webkit = ua.match(/AppleWebKit\/([0-9]+)/),
                    wkversion = webkit && webkit[1],
                    wkLte534 = webkit && wkversion >= 534;

                return (
                    /* Android 3+ with webkit gte 534
        ~: Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13 */
                    ua.match(/Android ([0-9]+)/) && RegExp.$1 >= 3 && wkLte534 ||
                    /* Blackberry 7+ with webkit gte 534
        ~: Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0 Mobile Safari/534.11+ */
                    ua.match(/ Version\/([0-9]+)/) && RegExp.$1 >= 0 && w.blackberry && wkLte534 ||
                    /* Blackberry Playbook with webkit gte 534
        ~: Mozilla/5.0 (PlayBook; U; RIM Tablet OS 1.0.0; en-US) AppleWebKit/534.8+ (KHTML, like Gecko) Version/0.0.1 Safari/534.8+ */
                    ua.indexOf("PlayBook") > -1 && wkLte534 && !ua.indexOf("Android 2") === -1 ||
                    /* Firefox Mobile (Fennec) 4 and up
        ~: Mozilla/5.0 (Mobile; rv:15.0) Gecko/15.0 Firefox/15.0 */
                    ua.match(/Firefox\/([0-9]+)/) && RegExp.$1 >= 4 ||
                    /* WebOS 3 and up (TouchPad too)
        ~: Mozilla/5.0 (hp-tablet; Linux; hpwOS/3.0.0; U; en-US) AppleWebKit/534.6 (KHTML, like Gecko) wOSBrowser/233.48 Safari/534.6 TouchPad/1.0 */
                    ua.match(/wOSBrowser\/([0-9]+)/) && RegExp.$1 >= 233 && wkLte534 ||
                    /* Nokia Browser N8
        ~: Mozilla/5.0 (Symbian/3; Series60/5.2 NokiaN8-00/012.002; Profile/MIDP-2.1 Configuration/CLDC-1.1 ) AppleWebKit/533.4 (KHTML, like Gecko) NokiaBrowser/7.3.0 Mobile Safari/533.4 3gpp-gba
        ~: Note: the N9 doesn't have native overflow with one-finger touch. wtf */
                    ua.match(/NokiaBrowser\/([0-9\.]+)/) && parseFloat(RegExp.$1) === 7.3 && webkit && wkversion >= 533
                );
            })();

    // Expose overthrow API
    w.overthrow = {};

    w.overthrow.enabledClassName = enabledClassName;

    w.overthrow.addClass = function () {
        if (docElem.className.indexOf(w.overthrow.enabledClassName) === -1) {
            docElem.className += " " + w.overthrow.enabledClassName;
        }
    };

    w.overthrow.removeClass = function () {
        docElem.className = docElem.className.replace(w.overthrow.enabledClassName, "");
    };

    // Enable and potentially polyfill overflow
    w.overthrow.set = function () {

        // If nativeOverflow or at least the element canBeFilledWithPoly, add a class to cue CSS that assumes overflow scrolling will work (setting height on elements and such)
        if (nativeOverflow) {
            w.overthrow.addClass();
        }

    };

    // expose polyfillable
    w.overthrow.canBeFilledWithPoly = canBeFilledWithPoly;

    // Destroy everything later. If you want to.
    w.overthrow.forget = function () {

        w.overthrow.removeClass();

    };

    // Expose overthrow API
    w.overthrow.support = nativeOverflow ? "native" : "none";

})(this);
/*! Overthrow. An overflow:auto polyfill for responsive design. (c) 2012: Scott Jehl, Filament Group, Inc. http://filamentgroup.github.com/Overthrow/license.txt */
(function (w, o, undefined) {

    // o is overthrow reference from overthrow-polyfill.js
    if (o === undefined) {
        return;
    }

    o.scrollIndicatorClassName = "overthrow";

    var doc = w.document,
        docElem = doc.documentElement,
        // o api
        nativeOverflow = o.support === "native",
        canBeFilledWithPoly = o.canBeFilledWithPoly,
        configure = o.configure,
        set = o.set,
        forget = o.forget,
        scrollIndicatorClassName = o.scrollIndicatorClassName;

    // find closest overthrow (elem or a parent)
    o.closest = function (target, ascend) {
        return !ascend && target.className && target.className.indexOf(scrollIndicatorClassName) > -1 && target || o.closest(target.parentNode);
    };

    // polyfill overflow
    var enabled = false;
    o.set = function () {

        set();

        // If nativeOverflow or it doesn't look like the browser canBeFilledWithPoly, our job is done here. Exit viewport left.
        if (enabled || nativeOverflow || !canBeFilledWithPoly) {
            return;
        }

        w.overthrow.addClass();

        enabled = true;

        o.support = "polyfilled";

        o.forget = function () {
            forget();
            enabled = false;
            // Remove touch binding (check for method support since this part isn't qualified by touch support like the rest)
            if (doc.removeEventListener) {
                doc.removeEventListener("touchstart", start, false);
            }
        };

        // Fill 'er up!
        // From here down, all logic is associated with touch scroll handling
        // elem references the overthrow element in use
        var elem,

            // The last several Y values are kept here
            lastTops = [],

            // The last several X values are kept here
            lastLefts = [],

            // lastDown will be true if the last scroll direction was down, false if it was up
            lastDown,

            // lastRight will be true if the last scroll direction was right, false if it was left
            lastRight,

            // For a new gesture, or change in direction, reset the values from last scroll
            resetVertTracking = function () {
                lastTops = [];
                lastDown = null;
            },

            resetHorTracking = function () {
                lastLefts = [];
                lastRight = null;
            },

            // On webkit, touch events hardly trickle through textareas and inputs
            // Disabling CSS pointer events makes sure they do, but it also makes the controls innaccessible
            // Toggling pointer events at the right moments seems to do the trick
            // Thanks Thomas Bachem http://stackoverflow.com/a/5798681 for the following
            inputs,
            setPointers = function (val) {
                inputs = elem.querySelectorAll("textarea, input");
                for (var i = 0, il = inputs.length; i < il; i++) {
                    inputs[i].style.pointerEvents = val;
                }
            },

            // For nested overthrows, changeScrollTarget restarts a touch event cycle on a parent or child overthrow
            changeScrollTarget = function (startEvent, ascend) {
                if (doc.createEvent) {
                    var newTarget = (!ascend || ascend === undefined) && elem.parentNode || elem.touchchild || elem,
                        tEnd;

                    if (newTarget !== elem) {
                        tEnd = doc.createEvent("HTMLEvents");
                        tEnd.initEvent("touchend", true, true);
                        elem.dispatchEvent(tEnd);
                        newTarget.touchchild = elem;
                        elem = newTarget;
                        newTarget.dispatchEvent(startEvent);
                    }
                }
            },

            // Touchstart handler
            // On touchstart, touchmove and touchend are freshly bound, and all three share a bunch of vars set by touchstart
            // Touchend unbinds them again, until next time
            start = function (e) {

                // Stop any throw in progress
                if (o.intercept) {
                    o.intercept();
                }

                // Reset the distance and direction tracking
                resetVertTracking();
                resetHorTracking();

                elem = o.closest(e.target);

                if (!elem || elem === docElem || e.touches.length > 1) {
                    return;
                }

                setPointers("none");
                var touchStartE = e,
                    scrollT = elem.scrollTop,
                    scrollL = elem.scrollLeft,
                    height = elem.offsetHeight,
                    width = elem.offsetWidth,
                    startY = e.touches[0].pageY,
                    startX = e.touches[0].pageX,
                    scrollHeight = elem.scrollHeight,
                    scrollWidth = elem.scrollWidth,

                    // Touchmove handler
                    move = function (e) {

                        var ty = scrollT + startY - e.touches[0].pageY,
                            tx = scrollL + startX - e.touches[0].pageX,
                            down = ty >= (lastTops.length ? lastTops[0] : 0),
                            right = tx >= (lastLefts.length ? lastLefts[0] : 0);

                        // If there's room to scroll the current container, prevent the default window scroll
                        if ((ty > 0 && ty < scrollHeight - height) || (tx > 0 && tx < scrollWidth - width)) {
                            e.preventDefault();
                        }
                        // This bubbling is dumb. Needs a rethink.
                        else {
                            changeScrollTarget(touchStartE);
                        }

                        // If down and lastDown are inequal, the y scroll has changed direction. Reset tracking.
                        if (lastDown && down !== lastDown) {
                            resetVertTracking();
                        }

                        // If right and lastRight are inequal, the x scroll has changed direction. Reset tracking.
                        if (lastRight && right !== lastRight) {
                            resetHorTracking();
                        }

                        // remember the last direction in which we were headed
                        lastDown = down;
                        lastRight = right;

                        // set the container's scroll
                        elem.scrollTop = ty;
                        elem.scrollLeft = tx;

                        lastTops.unshift(ty);
                        lastLefts.unshift(tx);

                        if (lastTops.length > 3) {
                            lastTops.pop();
                        }
                        if (lastLefts.length > 3) {
                            lastLefts.pop();
                        }
                    },

                    // Touchend handler
                    end = function (e) {

                        // Bring the pointers back
                        setPointers("auto");
                        setTimeout(function () {
                            setPointers("none");
                        }, 450);
                        elem.removeEventListener("touchmove", move, false);
                        elem.removeEventListener("touchend", end, false);
                    };

                elem.addEventListener("touchmove", move, false);
                elem.addEventListener("touchend", end, false);
            };

        // Bind to touch, handle move and end within
        doc.addEventListener("touchstart", start, false);
    };

})(this, this.overthrow);
/*! Overthrow. An overflow:auto polyfill for responsive design. (c) 2012: Scott Jehl, Filament Group, Inc. http://filamentgroup.github.com/Overthrow/license.txt */
(function (w, o, undefined) {

    // o is overthrow reference from overthrow-polyfill.js
    if (o === undefined) {
        return;
    }

    // Easing can use any of Robert Penner's equations (http://www.robertpenner.com/easing_terms_of_use.html). By default, overthrow includes ease-out-cubic
    // arguments: t = current iteration, b = initial value, c = end value, d = total iterations
    // use w.overthrow.easing to provide a custom function externally, or pass an easing function as a callback to the toss method
    o.easing = function (t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    };

    // tossing property is true during a programatic scroll
    o.tossing = false;

    // Keeper of intervals
    var timeKeeper;

    /* toss scrolls and element with easing

  // elem is the element to scroll
  // options hash:
    * left is the desired horizontal scroll. Default is "+0". For relative distances, pass a string with "+" or "-" in front.
    * top is the desired vertical scroll. Default is "+0". For relative distances, pass a string with "+" or "-" in front.
    * duration is the number of milliseconds the throw will take. Default is 100.
    * easing is an optional custom easing function. Default is w.overthrow.easing. Must follow the easing function signature

  */
    o.toss = function (elem, options) {
        o.intercept();
        var i = 0,
            sLeft = elem.scrollLeft,
            sTop = elem.scrollTop,
            // Toss defaults
            op = {
                top: "+0",
                left: "+0",
                duration: 50,
                easing: o.easing,
                finished: function () {
                }
            },
            endLeft, endTop, finished = false;

        // Mixin based on predefined defaults
        if (options) {
            for (var j in op) {
                if (options[j] !== undefined) {
                    op[j] = options[j];
                }
            }
        }

        // Convert relative values to ints
        // First the left val
        if (typeof op.left === "string") {
            op.left = parseFloat(op.left);
            endLeft = op.left + sLeft;
        } else {
            endLeft = op.left;
            op.left = op.left - sLeft;
        }
        // Then the top val
        if (typeof op.top === "string") {

            op.top = parseFloat(op.top);
            endTop = op.top + sTop;
        } else {
            endTop = op.top;
            op.top = op.top - sTop;
        }

        o.tossing = true;
        timeKeeper = setInterval(function () {
            if (i++ < op.duration) {
                elem.scrollLeft = op.easing(i, sLeft, op.left, op.duration);
                elem.scrollTop = op.easing(i, sTop, op.top, op.duration);
            } else {
                if (endLeft !== elem.scrollLeft) {
                    elem.scrollLeft = endLeft;
                } else {
                    // if the end of the vertical scrolling has taken place
                    // we know that we're done here call the callback
                    // otherwise signal that horizontal scrolling is complete
                    if (finished) {
                        op.finished();
                    }
                    finished = true;
                }

                if (endTop !== elem.scrollTop) {
                    elem.scrollTop = endTop;
                } else {
                    // if the end of the horizontal scrolling has taken place
                    // we know that we're done here call the callback
                    if (finished) {
                        op.finished();
                    }
                    finished = true;
                }

                o.intercept();
            }
        }, 1);

        // Return the values, post-mixin, with end values specified
        return {
            top: endTop,
            left: endLeft,
            duration: o.duration,
            easing: o.easing
        };
    };

    // Intercept any throw in progress
    o.intercept = function () {
        clearInterval(timeKeeper);
        o.tossing = false;
    };

})(this, this.overthrow);
/*! Overthrow. An overflow:auto polyfill for responsive design. (c) 2012: Scott Jehl, Filament Group, Inc. http://filamentgroup.github.com/Overthrow/license.txt */
(function (w, undefined) {

    // Auto-init
    w.overthrow.set();

}(this));

/*
 * jQuery mmenu v4.3.5
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * Dual licensed under the MIT license:
 * http://en.wikipedia.org/wiki/MIT_License
 */
!function (e) {
    function s(s, n, t) {
        if (t) {
            if ("object" != typeof s && (s = {}), "boolean" != typeof s.isMenu) {
                var i = t.children();
                s.isMenu = 1 == i.length && i.is(n.panelNodetype)
            }
            return s
        }
        s = e.extend(!0, {}, e[a].defaults, s), ("top" == s.position || "bottom" == s.position) && ("back" == s.zposition || "next" == s.zposition) && (e[a].deprecated('Using position "' + s.position + '" in combination with zposition "' + s.zposition + '"', 'zposition "front"'), s.zposition = "front");
        for (var o = ["position", "zposition", "modal", "moveBackground"], l = 0, d = o.length; d > l; l++) "undefined" != typeof s[o[l]] && (e[a].deprecated('The option "' + o[l] + '"', "offCanvas." + o[l]), s.offCanvas = s.offCanvas || {}, s.offCanvas[o[l]] = s[o[l]]);
        return s
    }

    function n(s) {
        s = e.extend(!0, {}, e[a].configuration, s);
        for (var n = ["panel", "list", "selected", "label", "spacer"], t = 0, i = n.length; i > t; t++) "undefined" != typeof s[n[t] + "Class"] && (e[a].deprecated('The configuration option "' + n[t] + 'Class"', "classNames." + n[t]), s.classNames[n[t]] = s[n[t] + "Class"]);
        if ("undefined" != typeof s.counterClass && (e[a].deprecated('The configuration option "counterClass"', "classNames.counters.counter"), s.classNames.counters = s.classNames.counters || {}, s.classNames.counters.counter = s.counterClass), "undefined" != typeof s.collapsedClass && (e[a].deprecated('The configuration option "collapsedClass"', "classNames.labels.collapsed"), s.classNames.labels = s.classNames.labels || {}, s.classNames.labels.collapsed = s.collapsedClass), "undefined" != typeof s.header)
            for (var n = ["panelHeader", "panelNext", "panelPrev"], t = 0, i = n.length; i > t; t++) "undefined" != typeof s.header[n[t] + "Class"] && (e[a].deprecated('The configuration option "header.' + n[t] + 'Class"', "classNames.header." + n[t]), s.classNames.header = s.classNames.header || {}, s.classNames.header[n[t]] = s.header[n[t] + "Class"]);
        for (var n = ["pageNodetype", "pageSelector", "menuWrapperSelector", "menuInjectMethod"], t = 0, i = n.length; i > t; t++) "undefined" != typeof s[n[t]] && (e[a].deprecated('The configuration option "' + n[t] + '"', "offCanvas." + n[t]), s.offCanvas = s.offCanvas || {}, s.offCanvas[n[t]] = s[n[t]]);
        return s
    }

    function t() {
        u = !0, c.$wndw = e(window), c.$html = e("html"), c.$body = e("body"), e.each([l, d, r], function (e, s) {
            s.add = function (e) {
                e = e.split(" ");
                for (var n in e) s[e[n]] = s.mm(e[n])
            }
        }), l.mm = function (e) {
            return "mm-" + e
        }, l.add("wrapper menu ismenu inline panel list subtitle selected label spacer current highest hidden opened subopened subopen fullsubopen subclose"), l.umm = function (e) {
            return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e
        }, d.mm = function (e) {
            return "mm-" + e
        }, d.add("parent"), r.mm = function (e) {
            return e + ".mm"
        }, r.add("toggle open close setSelected transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend scroll resize click keydown keyup"), e[a]._c = l, e[a]._d = d, e[a]._e = r, e[a].glbl = c
    }

    function i(s, n) {
        if (s.hasClass(l.current)) return !1;
        var t = e("." + l.panel, n),
            i = t.filter("." + l.current);
        return t.removeClass(l.highest).removeClass(l.current).not(s).not(i).addClass(l.hidden), s.hasClass(l.opened) ? i.addClass(l.highest).removeClass(l.opened).removeClass(l.subopened) : (s.addClass(l.highest), i.addClass(l.subopened)), s.removeClass(l.hidden).addClass(l.current), setTimeout(function () {
            s.removeClass(l.subopened).addClass(l.opened)
        }, 25), "open"
    }

    var a = "mmenu",
        o = "4.3.5";
    if (!e[a]) {
        var l = {},
            d = {},
            r = {},
            u = !1,
            c = {
                $wndw: null,
                $html: null,
                $body: null
            };
        e[a] = function (e, s, n) {
            return this.$menu = e, this.opts = s, this.conf = n, this.vars = {}, this._init(), this
        }, e[a].uniqueId = 0, e[a].prototype = {
            _init: function () {
                if (this.opts = s(this.opts, this.conf, this.$menu), this._initMenu(), this._initPanels(), this._initLinks(), this._bindCustomEvents(), e[a].addons)
                    for (var n = 0; n < e[a].addons.length; n++) "function" == typeof this["_addon_" + e[a].addons[n]] && this["_addon_" + e[a].addons[n]]()
            },
            _bindCustomEvents: function () {
                var s = this,
                    n = this.$menu.find(this.opts.isMenu && !this.opts.slidingSubmenus ? "ul, ol" : "." + l.panel);
                n.off(r.toggle + " " + r.open + " " + r.close).on(r.toggle + " " + r.open + " " + r.close, function (e) {
                    e.stopPropagation()
                }), this.opts.slidingSubmenus ? n.on(r.open, function () {
                    return i(e(this), s.$menu)
                }) : n.on(r.toggle, function () {
                    var s = e(this);
                    return s.triggerHandler(s.parent().hasClass(l.opened) ? r.close : r.open)
                }).on(r.open, function () {
                    return e(this).parent().addClass(l.opened), "open"
                }).on(r.close, function () {
                    return e(this).parent().removeClass(l.opened), "close"
                })
            },
            _initMenu: function () {
                this.opts.offCanvas && this.conf.clone && (this.$menu = this.$menu.clone(!0), this.$menu.add(this.$menu.find("*")).filter("[id]").each(function () {
                    e(this).attr("id", l.mm(e(this).attr("id")))
                })), this.$menu.contents().each(function () {
                    3 == e(this)[0].nodeType && e(this).remove()
                }), this.$menu.parent().addClass(l.wrapper);
                var s = [l.menu];
                s.push(l.mm(this.opts.slidingSubmenus ? "horizontal" : "vertical")), this.opts.classes && s.push(this.opts.classes), this.opts.isMenu && s.push(l.ismenu), this.$menu.addClass(s.join(" "))
            },
            _initPanels: function () {
                var s = this;
                this.__refactorClass(e("." + this.conf.classNames.list, this.$menu), this.conf.classNames.list, "list"), this.opts.isMenu && e("ul, ol", this.$menu).not(".mm-nolist").addClass(l.list);
                var n = e("." + l.list + " > li", this.$menu);
                this.__refactorClass(n, this.conf.classNames.selected, "selected"), this.__refactorClass(n, this.conf.classNames.label, "label"), this.__refactorClass(n, this.conf.classNames.spacer, "spacer"), n.off(r.setSelected).on(r.setSelected, function (s, t) {
                    s.stopPropagation(), n.removeClass(l.selected), "boolean" != typeof t && (t = !0), t && e(this).addClass(l.selected)
                }), this.__refactorClass(e("." + this.conf.classNames.panel, this.$menu), this.conf.classNames.panel, "panel"), this.$menu.children().filter(this.conf.panelNodetype).add(this.$menu.find("." + l.list).children().children().filter(this.conf.panelNodetype)).addClass(l.panel);
                var t = e("." + l.panel, this.$menu);
                t.each(function () {
                    var n = e(this),
                        t = n.attr("id") || s.__getUniqueId();
                    n.attr("id", t)
                }), t.find("." + l.panel).each(function () {
                    var n = e(this),
                        t = n.is("ul, ol") ? n : n.find("ul ,ol").first(),
                        i = n.parent(),
                        a = i.find("> a, > span"),
                        o = i.closest("." + l.panel);
                    if (n.data(d.parent, i), i.parent().is("." + l.list)) {
                        var r = e('<a class="' + l.subopen + '" href="#' + n.attr("id") + '" />').insertBefore(a);
                        a.is("a") || r.addClass(l.fullsubopen), s.opts.slidingSubmenus && t.prepend('<li class="' + l.subtitle + '"><a class="' + l.subclose + '" href="#' + o.attr("id") + '">' + a.text() + "</a></li>")
                    }
                });
                var i = this.opts.slidingSubmenus ? r.open : r.toggle;
                if (t.each(function () {
                        var n = e(this),
                            t = n.attr("id");
                        e('a[href="#' + t + '"]', s.$menu).off(r.click).on(r.click, function (e) {
                            e.preventDefault(), n.trigger(i)
                        })
                    }), this.opts.slidingSubmenus) {
                    var a = e("." + l.list + " > li." + l.selected, this.$menu);
                    a.parents("li").removeClass(l.selected).end().add(a.parents("li")).each(function () {
                        var s = e(this),
                            n = s.find("> ." + l.panel);
                        n.length && (s.parents("." + l.panel).addClass(l.subopened), n.addClass(l.opened))
                    }).closest("." + l.panel).addClass(l.opened).parents("." + l.panel).addClass(l.subopened)
                } else {
                    var a = e("li." + l.selected, this.$menu);
                    a.parents("li").removeClass(l.selected).end().add(a.parents("li")).addClass(l.opened)
                }
                var o = t.filter("." + l.opened);
                o.length || (o = t.first()), o.addClass(l.opened).last().addClass(l.current), this.opts.slidingSubmenus && t.not(o.last()).addClass(l.hidden).end().find("." + l.panel).appendTo(this.$menu)
            },
            _initLinks: function () {
                var s = this;
                e("." + l.list + " > li > a", this.$menu).not("." + l.subopen).not("." + l.subclose).not('[rel="external"]').not('[target="_blank"]').off(r.click).on(r.click, function (n) {
                    var t = e(this),
                        i = t.attr("href") || "";
                    s.__valueOrFn(s.opts.onClick.setSelected, t) && t.parent().trigger(r.setSelected);
                    var a = s.__valueOrFn(s.opts.onClick.preventDefault, t, "#" == i.slice(0, 1));
                    a && n.preventDefault(), s.__valueOrFn(s.opts.onClick.blockUI, t, !a) && c.$html.addClass(l.blocking), s.__valueOrFn(s.opts.onClick.close, t, a) && s.$menu.triggerHandler(r.close)
                })
            },
            _update: function (e) {
                if (this.updates || (this.updates = []), "function" == typeof e) this.updates.push(e);
                else
                    for (var s = 0, n = this.updates.length; n > s; s++) this.updates[s].call(this, e)
            },
            __valueOrFn: function (e, s, n) {
                return "function" == typeof e ? e.call(s[0]) : "undefined" == typeof e && "undefined" != typeof n ? n : e
            },
            __refactorClass: function (e, s, n) {
                e.filter("." + s).removeClass(s).addClass(l[n])
            },
            __transitionend: function (e, s, n) {
                var t = !1,
                    i = function () {
                        t || s.call(e[0]), t = !0
                    };
                e.one(r.transitionend, i), e.one(r.webkitTransitionEnd, i), setTimeout(i, 1.1 * n)
            },
            __getUniqueId: function () {
                return l.mm(e[a].uniqueId++)
            }
        }, e.fn[a] = function (i, o) {
            return u || t(), i = s(i, o), o = n(o), this.each(function () {
                var s = e(this);
                s.data(a) || s.data(a, new e[a](s, i, o))
            })
        }, e[a].version = o, e[a].defaults = {
            classes: "",
            slidingSubmenus: !0,
            onClick: {
                setSelected: !0
            }
        }, e[a].configuration = {
            panelNodetype: "ul, ol, div",
            transitionDuration: 400,
            classNames: {
                panel: "Panle",
                list: "List",
                selected: "Selected",
                label: "Label",
                spacer: "Spacer"
            }
        },
            function () {
                var s = window.document,
                    n = window.navigator.userAgent,
                    t = "ontouchstart" in s,
                    i = "WebkitOverflowScrolling" in s.documentElement.style,
                    o = function () {
                        return n.indexOf("Android") >= 0 ? 2.4 > parseFloat(n.slice(n.indexOf("Android") + 8)) : !1
                    }();
                e[a].support = {
                    touch: t,
                    oldAndroidBrowser: o,
                    overflowscrolling: function () {
                        return t ? i ? !0 : o ? !1 : !0 : !0
                    }()
                }
            }(), e[a].debug = function () {
        }, e[a].deprecated = function (e, s) {
            "undefined" != typeof console && "undefined" != typeof console.warn && console.warn("MMENU: " + e + " is deprecated, use " + s + " instead.")
        }
    }
}(jQuery);
/*
 * jQuery mmenu offCanvas addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function (e) {
    function o(e) {
        return e
    }

    function t(e) {
        return "string" != typeof e.pageSelector && (e.pageSelector = "> " + e.pageNodetype), e
    }

    function n() {
        d = !0, s = e[r]._c, i = e[r]._d, a = e[r]._e, s.add("offcanvas modal background opening blocker page"), i.add("style"), a.add("opening opened closing closed setPage"), p = e[r].glbl, p.$allMenus = (p.$allMenus || e()).add(this.$menu), p.$wndw.on(a.keydown, function (e) {
            return p.$html.hasClass(s.opened) && 9 == e.keyCode ? (e.preventDefault(), !1) : void 0
        });
        var o = 0;
        p.$wndw.on(a.resize, function (e, t) {
            if (t || p.$html.hasClass(s.opened)) {
                var n = p.$wndw.height();
                (t || n != o) && (o = n, p.$page.css("minHeight", n))
            }
        })
    }

    var s, i, a, p, r = "mmenu",
        l = "offCanvas",
        d = !1;
    e[r].prototype["_addon_" + l] = function () {
        if (!this.opts[l]) return this;
        d || n(), this.opts[l] = o(this.opts[l]), this.conf[l] = t(this.conf[l]), "boolean" != typeof this.vars.opened && (this.vars.opened = !1);
        var e = this.opts[l],
            i = this.conf[l],
            a = [s.offcanvas];
        "left" != e.position && a.push(s.mm(e.position)), "back" != e.zposition && a.push(s.mm(e.zposition)), this.$menu.addClass(a.join(" ")).parent().removeClass(s.wrapper), this[l + "_initPage"](p.$page), this[l + "_initBlocker"](), this[l + "_initOpenClose"](), this[l + "_bindCustomEvents"](), this.$menu[i.menuInjectMethod + "To"](i.menuWrapperSelector)
    }, e[r].addons = e[r].addons || [], e[r].addons.push(l), e[r].defaults[l] = {
        position: "left",
        zposition: "back",
        modal: !1,
        moveBackground: !0
    }, e[r].configuration[l] = {
        pageNodetype: "div",
        pageSelector: null,
        menuWrapperSelector: "body",
        menuInjectMethod: "prepend"
    }, e[r].prototype.open = function () {
        if (this.vars.opened) return !1;
        var e = this;
        return this._openSetup(), setTimeout(function () {
            e._openFinish()
        }, 25), "open"
    }, e[r].prototype._openSetup = function () {
        p.$allMenus.not(this.$menu).trigger(a.close), p.$page.data(i.style, p.$page.attr("style") || ""), p.$wndw.trigger(a.resize, [!0]);
        var e = [s.opened];
        this.opts[l].modal && e.push(s.modal), this.opts[l].moveBackground && e.push(s.background), "left" != this.opts[l].position && e.push(s.mm(this.opts[l].position)), "back" != this.opts[l].zposition && e.push(s.mm(this.opts[l].zposition)), this.opts.classes && e.push(this.opts.classes), p.$html.addClass(e.join(" ")), this.$menu.addClass(s.current + " " + s.opened)
    }, e[r].prototype._openFinish = function () {
        var e = this;
        this.__transitionend(p.$page, function () {
            e.$menu.trigger(a.opened)
        }, this.conf.transitionDuration), this.vars.opened = !0, p.$html.addClass(s.opening), this.$menu.trigger(a.opening)
    }, e[r].prototype.close = function () {
        if (!this.vars.opened) return !1;
        var e = this;
        return this.__transitionend(p.$page, function () {
            e.$menu.removeClass(s.current).removeClass(s.opened), p.$html.removeClass(s.opened).removeClass(s.modal).removeClass(s.background).removeClass(s.mm(e.opts[l].position)).removeClass(s.mm(e.opts[l].zposition)), e.opts.classes && p.$html.removeClass(e.opts.classes), p.$page.attr("style", p.$page.data(i.style)), e.vars.opened = !1, e.$menu.trigger(a.closed)
        }, this.conf.transitionDuration), p.$html.removeClass(s.opening), this.$menu.trigger(a.closing), "close"
    }, e[r].prototype[l + "_initBlocker"] = function () {
        var o = this;
        p.$blck || (p.$blck = e('<div id="' + s.blocker + '" />').appendTo(p.$body)), p.$blck.off(a.touchstart).on(a.touchstart, function (e) {
            e.preventDefault(), e.stopPropagation(), p.$blck.trigger(a.mousedown)
        }).on(a.mousedown, function (e) {
            e.preventDefault(), p.$html.hasClass(s.modal) || o.close()
        })
    }, e[r].prototype[l + "_initPage"] = function (o) {
        o || (o = e(this.conf[l].pageSelector, p.$body), o.length > 1 && (e[r].debug("Multiple nodes found for the page-node, all nodes are wrapped in one <" + this.conf[l].pageNodetype + ">."), o = o.wrapAll("<" + this.conf[l].pageNodetype + " />").parent())), o.addClass(s.page), p.$page = o
    }, e[r].prototype[l + "_initOpenClose"] = function () {
        var o = this,
            t = this.$menu.attr("id");
        t && t.length && (this.conf.clone && (t = s.umm(t)), e('a[href="#' + t + '"]').off(a.click).on(a.click, function (e) {
            e.preventDefault(), o.open()
        }));
        var t = p.$page.attr("id");
        t && t.length && e('a[href="#' + t + '"]').on(a.click, function (e) {
            e.preventDefault(), o.close()
        })
    }, e[r].prototype[l + "_bindCustomEvents"] = function () {
        var e = this,
            o = a.open + " " + a.opening + " " + a.opened + " " + a.close + " " + a.closing + " " + a.closed + " " + a.setPage;
        this.$menu.off(o).on(o, function (e) {
            e.stopPropagation()
        }), this.$menu.on(a.open, function () {
            e.open()
        }).on(a.close, function () {
            e.close()
        }).on(a.setPage, function (o, t) {
            e[l + "_initPage"](t), e[l + "_initOpenClose"]()
        })
    }
}(jQuery);
/*
 * jQuery mmenu counters addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function (t) {
    function n(n) {
        return "boolean" == typeof n && (n = {
            add: n,
            update: n
        }), "object" != typeof n && (n = {}), n = t.extend(!0, {}, t[i].defaults[c], n), n.count && (t[i].deprecated('the option "count" for counters', 'the option "update"'), n.update = n.count), n
    }

    function e(t) {
        return t
    }

    function o() {
        d = !0, s = t[i]._c, a = t[i]._d, u = t[i]._e, s.add("counter search noresultsmsg"), r = t[i].glbl
    }

    var s, a, u, r, i = "mmenu",
        c = "counters",
        d = !1;
    t[i].prototype["_addon_" + c] = function () {
        d || o(), this.opts[c] = n(this.opts[c]), this.conf[c] = e(this.conf[c]);
        var u = this,
            r = this.opts[c];
        if (this.conf[c], this.__refactorClass(t("em", this.$menu), this.conf.classNames[c].counter, "counter"), r.add && t("." + s.panel, this.$menu).each(function () {
                var n = t(this),
                    e = n.data(a.parent);
                if (e) {
                    var o = t('<em class="' + s.counter + '" />'),
                        u = e.find("> a." + s.subopen);
                    u.parent().find("em." + s.counter).length || u.before(o)
                }
            }), r.update) {
            var i = t("em." + s.counter, this.$menu);
            i.each(function () {
                var n = t(this),
                    e = t(n.next().attr("href"), u.$menu);
                if (e.is("." + s.list) || (e = e.find("> ." + s.list)), e.length) {
                    var o = function () {
                        var t = e.children().not("." + s.label).not("." + s.subtitle).not("." + s.hidden).not("." + s.search).not("." + s.noresultsmsg);
                        n.html(t.length)
                    };
                    o(), u._update(o)
                }
            })
        }
    }, t[i].addons = t[i].addons || [], t[i].addons.push(c), t[i].defaults[c] = {
        add: !1,
        update: !1
    }, t[i].configuration.classNames[c] = {
        counter: "Counter"
    }
}(jQuery);
/*
 * jQuery mmenu dragOpen addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function (e) {
    function t(t) {
        return "boolean" == typeof t && (t = {
            open: t
        }), "object" != typeof t && (t = {}), t = e.extend(!0, {}, e[p].defaults[g], t)
    }

    function a(e) {
        return e
    }

    function o() {
        f = !0, s = e[p]._c, i = e[p]._d, r = e[p]._e, s.add("dragging"), r.add("dragleft dragright dragup dragdown dragend"), d = e[p].glbl
    }

    function n(e, t, a) {
        return t > e && (e = t), e > a && (e = a), e
    }

    var s, i, r, d, p = "mmenu",
        g = "dragOpen",
        f = !1;
    e[p].prototype["_addon_" + g] = function () {
        if (e.fn.hammer) {
            f || o(), this.opts[g] = t(this.opts[g]), this.conf[g] = a(this.conf[g]);
            var i = this,
                p = this.opts[g],
                h = this.conf[g];
            if (p.open) {
                var c = 0,
                    l = !1,
                    u = 0,
                    v = 0,
                    m = "width";
                switch (this.opts.offCanvas.position) {
                    case "left":
                    case "right":
                        m = "width";
                        break;
                    default:
                        m = "height"
                }
                switch (this.opts.offCanvas.position) {
                    case "left":
                        var _ = {
                            events: r.dragleft + " " + r.dragright,
                            open_dir: "right",
                            close_dir: "left",
                            delta: "deltaX",
                            page: "pageX",
                            negative: !1
                        };
                        break;
                    case "right":
                        var _ = {
                            events: r.dragleft + " " + r.dragright,
                            open_dir: "left",
                            close_dir: "right",
                            delta: "deltaX",
                            page: "pageX",
                            negative: !0
                        };
                        break;
                    case "top":
                        var _ = {
                            events: r.dragup + " " + r.dragdown,
                            open_dir: "down",
                            close_dir: "up",
                            delta: "deltaY",
                            page: "pageY",
                            negative: !1
                        };
                        break;
                    case "bottom":
                        var _ = {
                            events: r.dragup + " " + r.dragdown,
                            open_dir: "up",
                            close_dir: "down",
                            delta: "deltaY",
                            page: "pageY",
                            negative: !0
                        }
                }
                var w = this.__valueOrFn(p.pageNode, this.$menu, d.$page);
                "string" == typeof w && (w = e(w));
                var b = d.$page.find("." + s.mm("fixed-top") + ", ." + s.mm("fixed-bottom")),
                    $ = d.$page;
                switch (this.opts.offCanvas.zposition) {
                    case "back":
                        $ = $.add(b);
                        break;
                    case "front":
                        $ = this.$menu;
                        break;
                    case "next":
                        $ = $.add(this.$menu).add(b)
                }
                w.hammer().on(r.touchstart + " " + r.mousedown, function (e) {
                    if ("touchstart" == e.type) var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                        a = t[_.page];
                    else if ("mousedown" == e.type) var a = e[_.page];
                    switch (i.opts.offCanvas.position) {
                        case "right":
                        case "bottom":
                            a >= d.$wndw[m]() - p.maxStartPos && (c = 1);
                            break;
                        default:
                            a <= p.maxStartPos && (c = 1)
                    }
                }).on(_.events + " " + r.dragend, function (e) {
                    c > 0 && (e.gesture.preventDefault(), e.stopPropagation())
                }).on(_.events, function (e) {
                    var t = _.negative ? -e.gesture[_.delta] : e.gesture[_.delta];
                    if (l = t > u ? _.open_dir : _.close_dir, u = t, u > p.threshold && 1 == c) {
                        if (d.$html.hasClass(s.opened)) return;
                        c = 2, i._openSetup(), i.vars.opened = !0, d.$html.addClass(s.dragging), v = n(d.$wndw[m]() * h[m].perc, h[m].min, h[m].max)
                    }
                    2 == c && $.css(i.opts.offCanvas.position, n(u, 10, v) - ("front" == i.opts.offCanvas.zposition ? v : 0))
                }).on(r.dragend, function () {
                    2 == c && (d.$html.removeClass(s.dragging), $.css(i.opts.offCanvas.position, ""), l == _.open_dir ? i._openFinish() : i.close()), c = 0
                })
            }
        }
    }, e[p].addons = e[p].addons || [], e[p].addons.push(g), e[p].defaults[g] = {
        open: !1,
        maxStartPos: 100,
        threshold: 50
    }, e[p].configuration[g] = {
        width: {
            perc: .8,
            min: 140,
            max: 440
        },
        height: {
            perc: .8,
            min: 140,
            max: 880
        }
    }
}(jQuery);
/*
 * jQuery mmenu header addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function (e) {
    function t(t) {
        return "boolean" == typeof t && (t = {
            add: t,
            update: t
        }), "object" != typeof t && (t = {}), t = e.extend(!0, {}, e[i].defaults[h], t)
    }

    function a(e) {
        return e
    }

    function n() {
        c = !0, s = e[i]._c, r = e[i]._d, o = e[i]._e, s.add("header hasheader prev next title titletext"), d = e[i].glbl
    }

    var s, r, o, d, i = "mmenu",
        h = "header",
        c = !1;
    e[i].prototype["_addon_" + h] = function () {
        c || n(), this.opts[h] = t(this.opts[h]), this.conf[h] = a(this.conf[h]);
        var r = this,
            i = this.opts[h];
        if (this.conf[h], i.add) {
            var l = i.content ? i.content : '<a class="' + s.prev + '" href="#"></a><span class="' + s.title + '"></span><a class="' + s.next + '" href="#"></a>';
            e('<div class="' + s.header + '" />').prependTo(this.$menu).append(l)
        }
        var f = e("div." + s.header, this.$menu);
        if (f.length && this.$menu.addClass(s.hasheader), i.update && f.length) {
            var p = f.find("." + s.title),
                u = f.find("." + s.prev),
                v = f.find("." + s.next),
                m = !1;
            d.$page && (m = "#" + d.$page.attr("id")), u.add(v).on(o.click, function (t) {
                t.preventDefault(), t.stopPropagation();
                var a = e(this).attr("href");
                "#" !== a && (m && a == m ? r.$menu.trigger(o.close) : e(a, r.$menu).trigger(o.open))
            }), e("." + s.panel, this.$menu).each(function () {
                var t = e(this),
                    a = e("." + r.conf.classNames[h].panelHeader, t).text(),
                    n = e("." + r.conf.classNames[h].panelPrev, t).attr("href"),
                    d = e("." + r.conf.classNames[h].panelNext, t).attr("href");
                a || (a = e("." + s.subclose, t).text()), a || (a = i.title), n || (n = e("." + s.subclose, t).attr("href"));
                var c = function () {
                    p[a ? "show" : "hide"]().text(a), u[n ? "show" : "hide"]().attr("href", n), v[d ? "show" : "hide"]().attr("href", d)
                };
                t.on(o.open, function () {
                    c()
                }), t.hasClass(s.current) && c()
            })
        }
    }, e[i].addons = e[i].addons || [], e[i].addons.push(h), e[i].defaults[h] = {
        add: !1,
        content: !1,
        update: !1,
        title: "Menu"
    }, e[i].configuration.classNames[h] = {
        panelHeader: "Header",
        panelNext: "Next",
        panelPrev: "Prev"
    }
}(jQuery);
/*
 * jQuery mmenu labels addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function (l) {
    function s(s) {
        return "boolean" == typeof s && (s = {
            collapse: s
        }), "object" != typeof s && (s = {}), s = l.extend(!0, {}, l[p].defaults[d], s)
    }

    function e(l) {
        return l
    }

    function a() {
        i = !0, o = l[p]._c, n = l[p]._d, t = l[p]._e, o.add("collapsed"), c = l[p].glbl
    }

    var o, n, t, c, p = "mmenu",
        d = "labels",
        i = !1;
    l[p].prototype["_addon_" + d] = function () {
        i || a(), this.opts[d] = s(this.opts[d]), this.conf[d] = e(this.conf[d]);
        var n = this.opts[d];
        this.conf[d], n.collapse && (this.__refactorClass(l("li", this.$menu), this.conf.classNames[d].collapsed, "collapsed"), l("." + o.label, this.$menu).each(function () {
            var s = l(this),
                e = s.nextUntil("." + o.label, "all" == n.collapse ? null : "." + o.collapsed);
            "all" == n.collapse && (s.addClass(o.opened), e.removeClass(o.collapsed)), e.length && (s.wrapInner("<span />"), l('<a href="#" class="' + o.subopen + " " + o.fullsubopen + '" />').prependTo(s).on(t.click, function (l) {
                l.preventDefault(), s.toggleClass(o.opened), e[s.hasClass(o.opened) ? "removeClass" : "addClass"](o.collapsed)
            }))
        }))
    }, l[p].addons = l[p].addons || [], l[p].addons.push(d), l[p].defaults[d] = {
        collapse: !1
    }, l[p].configuration.classNames[d] = {
        collapsed: "Collapsed"
    }
}(jQuery);
/*
 * jQuery mmenu searchfield addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function (e) {
    function s(s) {
        return "boolean" == typeof s && (s = {
            add: s,
            search: s
        }), "object" != typeof s && (s = {}), s = e.extend(!0, {}, e[d].defaults[c], s), "boolean" != typeof s.showLinksOnly && (s.showLinksOnly = "menu" == s.addTo), s
    }

    function n(e) {
        return e
    }

    function t() {
        h = !0, o = e[d]._c, r = e[d]._d, l = e[d]._e, o.add("search hassearch noresultsmsg noresults nosubresults counter"), l.add("search reset change"), i = e[d].glbl
    }

    function a(e) {
        switch (e) {
            case 9:
            case 16:
            case 17:
            case 18:
            case 37:
            case 38:
            case 39:
            case 40:
                return !0
        }
        return !1
    }

    var o, r, l, i, d = "mmenu",
        c = "searchfield",
        h = !1;
    e[d].prototype["_addon_" + c] = function () {
        h || t(), this.opts[c] = s(this.opts[c]), this.conf[c] = n(this.conf[c]);
        var i = this,
            d = this.opts[c];
        if (this.conf[c], d.add) {
            switch (d.addTo) {
                case "menu":
                    var u = this.$menu;
                    break;
                case "panels":
                    var u = e("." + o.panel, this.$menu);
                    break;
                default:
                    var u = e(d.addTo, this.$menu).filter("." + o.panel)
            }
            u.length && u.each(function () {
                var s = e(this),
                    n = s.is("." + o.list) ? "li" : "div",
                    t = e("<" + n + ' class="' + o.search + '" />');
                if (t.append('<input placeholder="' + d.placeholder + '" type="text" autocomplete="off" />'), s.is("." + o.menu)) t.prependTo(i.$menu);
                else {
                    var a = s.children().first(),
                        r = a.is("." + o.subtitle) ? "After" : "Before";
                    t["insert" + r](a)
                }
                d.noResults && (s.is("." + o.menu) && (s = s.find("." + o.panel).first()), n = s.is("." + o.list) ? "li" : "div", e("<" + n + ' class="' + o.noresultsmsg + '" />').html(d.noResults).appendTo(s))
            })
        }
        if (this.$menu.children("div." + o.search).length && this.$menu.addClass(o.hassearch), d.search) {
            var f = e("." + o.search, this.$menu);
            f.length && f.each(function () {
                var s = e(this);
                if ("menu" == d.addTo) var n = e("." + o.panel, i.$menu),
                    t = i.$menu;
                else var n = s.closest("." + o.panel),
                    t = n;
                var c = n.add(n.children("." + o.list)),
                    h = s.find("input"),
                    u = e("> li", c),
                    f = u.filter("." + o.label),
                    p = u.not("." + o.subtitle).not("." + o.label).not("." + o.search).not("." + o.noresultsmsg),
                    m = "> a";
                d.showLinksOnly || (m += ", > span"), h.off(l.keyup + " " + l.change).on(l.keyup, function (e) {
                    a(e.keyCode) || s.trigger(l.search)
                }).on(l.change, function () {
                    s.trigger(l.search)
                }), s.off(l.reset + " " + l.search).on(l.reset + " " + l.search, function (e) {
                    e.stopPropagation()
                }).on(l.reset, function () {
                    s.trigger(l.search, [""])
                }).on(l.search, function (s, a) {
                    "string" == typeof a ? h.val(a) : a = h.val(), a = a.toLowerCase(), n.scrollTop(0), p.add(f).addClass(o.hidden), p.each(function () {
                        var s = e(this);
                        e(m, s).text().toLowerCase().indexOf(a) > -1 && s.add(s.prevAll("." + o.label).first()).removeClass(o.hidden)
                    }), e(n.get().reverse()).each(function () {
                        var s = e(this),
                            n = s.data(r.parent);
                        if (n) {
                            var t = s.add(s.find("> ." + o.list)).find("> li").not("." + o.subtitle).not("." + o.search).not("." + o.noresultsmsg).not("." + o.label).not("." + o.hidden);
                            t.length ? n.removeClass(o.hidden).removeClass(o.nosubresults).prevAll("." + o.label).first().removeClass(o.hidden) : "menu" == d.addTo && (s.hasClass(o.current) && n.trigger(l.open), n.addClass(o.nosubresults))
                        }
                    }), t[p.not("." + o.hidden).length ? "removeClass" : "addClass"](o.noresults), i._update()
                })
            })
        }
    }, e[d].addons = e[d].addons || [], e[d].addons.push(c), e[d].defaults[c] = {
        add: !1,
        addTo: "menu",
        search: !1,
        placeholder: "Search",
        noResults: "No results found."
    }
}(jQuery);
/*
 * jQuery mmenu toggles addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function (t) {
    function n(t) {
        return t
    }

    function s(t) {
        return t
    }

    function e() {
        g = !0, o = t[r]._c, i = t[r]._d, a = t[r]._e, o.add("toggle"), l = t[r].glbl
    }

    var o, i, a, l, r = "mmenu",
        d = "toggles",
        g = !1;
    t[r].prototype["_addon_" + d] = function () {
        g || e(), this.opts[d] = n(this.opts[d]), this.conf[d] = s(this.conf[d]);
        var i = this;
        this.opts[d], this.conf[d], this.__refactorClass(t("input", this.$menu), this.conf.classNames[d].toggle, "toggle"), t("." + o.toggle, this.$menu).each(function () {
            var n = t(this),
                s = n.parent(),
                e = n.attr("id") || i.__getUniqueId();
            n.attr("id", e), s.prepend(n), t('<label for="' + e + '" class="' + o.toggle + '"><div></div></label>').insertBefore(s.children().last())
        })
    }, t[r].addons = t[r].addons || [], t[r].addons.push(d), t[r].defaults[d] = {}, t[r].configuration.classNames[d] = {
        toggle: "Toggle"
    }
}(jQuery);


// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function () {
    var t = [].indexOf || function (t) {
            for (var e = 0, n = this.length; e < n; e++) {
                if (e in this && this[e] === t) return e
            }
            return -1
        },
        e = [].slice;
    (function (t, e) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function (n) {
                return e(n, t)
            })
        } else {
            return e(t.jQuery, t)
        }
    })(window, function (n, r) {
        var i, o, l, s, f, u, c, a, h, d, p, y, v, w, g, m;
        i = n(r);
        a = t.call(r, "ontouchstart") >= 0;
        s = {
            horizontal: {},
            vertical: {}
        };
        f = 1;
        c = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function () {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                this.element[u] = this.id;
                c[this.id] = this;
                t.bind(y, function () {
                    var t;
                    if (!(e.didScroll || a)) {
                        e.didScroll = true;
                        t = function () {
                            e.doScroll();
                            return e.didScroll = false
                        };
                        return r.setTimeout(t, n[m].settings.scrollThrottle)
                    }
                });
                t.bind(p, function () {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function () {
                            n[m]("refresh");
                            return e.didResize = false
                        };
                        return r.setTimeout(t, n[m].settings.resizeThrottle)
                    }
                })
            }

            t.prototype.doScroll = function () {
                var t, e = this;
                t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if (a && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[m]("refresh")
                }
                n.each(t, function (t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function (t, e) {
                        var n, i;
                        if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return l.push(e)
                        } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                            return l.push(e)
                        }
                    });
                    l.sort(function (t, e) {
                        return t.offset - e.offset
                    });
                    if (!o) {
                        l.reverse()
                    }
                    return n.each(l, function (t, e) {
                        if (e.options.continuous || t === l.length - 1) {
                            return e.trigger([i])
                        }
                    })
                });
                return this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                }
            };
            t.prototype.refresh = function () {
                var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return n.each(t, function (t, e) {
                    return n.each(i.waypoints[t], function (t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element)
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(e.contextDimension * i / 100)
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if (r.options.onlyOnScroll && l != null || !r.enabled) {
                            return
                        }
                        if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                            return r.trigger([e.backward])
                        } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                            return r.trigger([e.forward])
                        } else if (l === null && e.oldScroll >= r.offset) {
                            return r.trigger([e.forward])
                        }
                    })
                })
            };
            t.prototype.checkEmpty = function () {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([p, y].join(" "));
                    return delete c[this.id]
                }
            };
            return t
        }();
        l = function () {
            function t(t, e, r) {
                var i, o;
                if (r.offset === "bottom-in-view") {
                    r.offset = function () {
                        var t;
                        t = n[m]("viewportHeight");
                        if (!n.isWindow(e.element)) {
                            t = e.$element.height()
                        }
                        return t - n(this).outerHeight()
                    }
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = this.element[w]) != null ? o : [];
                i.push(this.id);
                this.element[w] = i
            }

            t.prototype.trigger = function (t) {
                if (!this.enabled) {
                    return
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, t)
                }
                if (this.options.triggerOnce) {
                    return this.destroy()
                }
            };
            t.prototype.disable = function () {
                return this.enabled = false
            };
            t.prototype.enable = function () {
                this.context.refresh();
                return this.enabled = true
            };
            t.prototype.destroy = function () {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            };
            t.getWaypointsByElement = function (t) {
                var e, r;
                r = t[w];
                if (!r) {
                    return []
                }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function (t) {
                    return e[t]
                })
            };
            return t
        }();
        d = {
            init: function (t, e) {
                var r;
                e = n.extend({}, n.fn[g].defaults, e);
                if ((r = e.handler) == null) {
                    e.handler = t
                }
                this.each(function () {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if (!n.isWindow(i)) {
                        i = t.closest(i)
                    }
                    i = n(i);
                    r = c[i[0][u]];
                    if (!r) {
                        r = new o(i)
                    }
                    return new l(t, r, e)
                });
                n[m]("refresh");
                return this
            },
            disable: function () {
                return d._invoke.call(this, "disable")
            },
            enable: function () {
                return d._invoke.call(this, "enable")
            },
            destroy: function () {
                return d._invoke.call(this, "destroy")
            },
            prev: function (t, e) {
                return d._traverse.call(this, t, e, function (t, e, n) {
                    if (e > 0) {
                        return t.push(n[e - 1])
                    }
                })
            },
            next: function (t, e) {
                return d._traverse.call(this, t, e, function (t, e, n) {
                    if (e < n.length - 1) {
                        return t.push(n[e + 1])
                    }
                })
            },
            _traverse: function (t, e, i) {
                var o, l;
                if (t == null) {
                    t = "vertical"
                }
                if (e == null) {
                    e = r
                }
                l = h.aggregate(e);
                o = [];
                this.each(function () {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t])
                });
                return this.pushStack(o)
            },
            _invoke: function (t) {
                this.each(function () {
                    var e;
                    e = l.getWaypointsByElement(this);
                    return n.each(e, function (e, n) {
                        n[t]();
                        return true
                    })
                });
                return this
            }
        };
        n.fn[g] = function () {
            var t, r;
            r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (d[r]) {
                return d[r].apply(this, t)
            } else if (n.isFunction(r)) {
                return d.init.apply(this, arguments)
            } else if (n.isPlainObject(r)) {
                return d.init.apply(this, [null, r])
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.")
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.")
            }
        };
        n.fn[g].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        h = {
            refresh: function () {
                return n.each(c, function (t, e) {
                    return e.refresh()
                })
            },
            viewportHeight: function () {
                var t;
                return (t = r.innerHeight) != null ? t : i.height()
            },
            aggregate: function (t) {
                var e, r, i;
                e = s;
                if (t) {
                    e = (i = c[n(t)[0][u]]) != null ? i.waypoints : void 0
                }
                if (!e) {
                    return []
                }
                r = {
                    horizontal: [],
                    vertical: []
                };
                n.each(r, function (t, i) {
                    n.each(e[t], function (t, e) {
                        return i.push(e)
                    });
                    i.sort(function (t, e) {
                        return t.offset - e.offset
                    });
                    r[t] = n.map(i, function (t) {
                        return t.element
                    });
                    return r[t] = n.unique(r[t])
                });
                return r
            },
            above: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function (t, e) {
                    return e.offset <= t.oldScroll.y
                })
            },
            below: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function (t, e) {
                    return e.offset > t.oldScroll.y
                })
            },
            left: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function (t, e) {
                    return e.offset <= t.oldScroll.x
                })
            },
            right: function (t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function (t, e) {
                    return e.offset > t.oldScroll.x
                })
            },
            enable: function () {
                return h._invoke("enable")
            },
            disable: function () {
                return h._invoke("disable")
            },
            destroy: function () {
                return h._invoke("destroy")
            },
            extendFn: function (t, e) {
                return d[t] = e
            },
            _invoke: function (t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function (e, n) {
                    n[t]();
                    return true
                })
            },
            _filter: function (t, e, r) {
                var i, o;
                i = c[n(t)[0][u]];
                if (!i) {
                    return []
                }
                o = [];
                n.each(i.waypoints[e], function (t, e) {
                    if (r(i, e)) {
                        return o.push(e)
                    }
                });
                o.sort(function (t, e) {
                    return t.offset - e.offset
                });
                return n.map(o, function (t) {
                    return t.element
                })
            }
        };
        n[m] = function () {
            var t, n;
            n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (h[n]) {
                return h[n].apply(null, t)
            } else {
                return h.aggregate.call(null, n)
            }
        };
        n[m].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return i.on("load.waypoints", function () {
            return n[m]("refresh")
        })
    })
}).call(this);

// Generated by CoffeeScript 1.6.2
/*
Sticky Elements Shortcut for jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/


(function () {
    (function (root, factory) {
        if (typeof define === 'function' && define.amd) {
            return define(['jquery', 'waypoints'], factory);
        } else {
            return factory(root.jQuery);
        }
    })(window, function ($) {
        var defaults, wrap;

        defaults = {
            wrapper: '<div class="sticky-wrapper" />',
            stuckClass: 'stuck',
            direction: 'down right'
        };
        wrap = function ($elements, options) {
            var $parent;

            $elements.wrap(options.wrapper);
            $parent = $elements.parent();
            return $parent.data('isWaypointStickyWrapper', true);
        };
        $.waypoints('extendFn', 'sticky', function (opt) {
            var $wrap, options, originalHandler;

            options = $.extend({}, $.fn.waypoint.defaults, defaults, opt);
            $wrap = wrap(this, options);
            originalHandler = options.handler;
            options.handler = function (direction) {
                var $sticky, shouldBeStuck;

                $sticky = $(this).children(':first');
                shouldBeStuck = options.direction.indexOf(direction) !== -1;
                $sticky.toggleClass(options.stuckClass, shouldBeStuck);
                $wrap.height(shouldBeStuck ? $sticky.outerHeight() : '');
                if (originalHandler != null) {
                    return originalHandler.call(this, direction);
                }
            };
            $wrap.waypoint(options);
            return this.data('stuckClass', options.stuckClass);
        });
        return $.waypoints('extendFn', 'unsticky', function () {
            var $parent;

            $parent = this.parent();
            if (!$parent.data('isWaypointStickyWrapper')) {
                return this;
            }
            $parent.waypoint('destroy');
            this.unwrap();
            return this.removeClass(this.data('stuckClass'));
        });
    });

}).call(this);

/*
 Sticky-kit v1.1.1 | WTFPL | Leaf Corcoran 2014 | http://leafo.net
*/
(function () {
    var k, e;
    k = this.jQuery || window.jQuery;
    e = k(window);
    k.fn.stick_in_parent = function (d) {
        var v, y, n, p, h, C, s, G, q, H;
        null == d && (d = {});
        s = d.sticky_class;
        y = d.inner_scrolling;
        C = d.recalc_every;
        h = d.parent;
        p = d.offset_top;
        n = d.spacer;
        v = d.bottoming;
        null == p && (p = 0);
        null == h && (h = void 0);
        null == y && (y = !0);
        null == s && (s = "is_stuck");
        null == v && (v = !0);
        G = function (a, d, q, z, D, t, r, E) {
            var u, F, m, A, c, f, B, w, x, g, b;
            if (!a.data("sticky_kit")) {
                a.data("sticky_kit", !0);
                f = a.parent();
                null != h && (f = f.closest(h));
                if (!f.length) throw "failed to find stick parent";
                u = m = !1;
                (g = null != n ? n && a.closest(n) : k("<div />")) && g.css("position", a.css("position"));
                B = function () {
                    var c, e, l;
                    if (!E && (c = parseInt(f.css("border-top-width"), 10), e = parseInt(f.css("padding-top"), 10), d = parseInt(f.css("padding-bottom"), 10), q = f.offset().top + c + e, z = f.height(), m && (u = m = !1, null == n && (a.insertAfter(g), g.detach()), a.css({
                            position: "",
                            top: "",
                            width: "",
                            bottom: ""
                        }).removeClass(s), l = !0), D = a.offset().top - parseInt(a.css("margin-top"), 10) - p, t = a.outerHeight(!0), r = a.css("float"), g && g.css({
                            width: a.outerWidth(!0),
                            height: t,
                            display: a.css("display"),
                            "vertical-align": a.css("vertical-align"),
                            "float": r
                        }), l)) return b()
                };
                B();
                if (t !== z) return A = void 0, c = p, x = C, b = function () {
                    var b, k, l, h;
                    if (!E && (null != x && (--x, 0 >= x && (x = C, B())), l = e.scrollTop(), null != A && (k = l - A), A = l, m ? (v && (h = l + t + c > z + q, u && !h && (u = !1, a.css({
                            position: "fixed",
                            bottom: "",
                            top: c
                        }).trigger("sticky_kit:unbottom"))), l < D && (m = !1, c = p, null == n && ("left" !== r && "right" !== r || a.insertAfter(g), g.detach()), b = {
                            position: "",
                            width: "",
                            top: ""
                        }, a.css(b).removeClass(s).trigger("sticky_kit:unstick")),
                        y && (b = e.height(), t + p > b && !u && (c -= k, c = Math.max(b - t, c), c = Math.min(p, c), m && a.css({
                            top: c + "px"
                        })))) : l > D && (m = !0, b = {
                            position: "fixed",
                            top: c
                        }, b.width = "border-box" === a.css("box-sizing") ? a.outerWidth() + "px" : a.width() + "px", a.css(b).addClass(s), null == n && (a.after(g), "left" !== r && "right" !== r || g.append(a)), a.trigger("sticky_kit:stick")), m && v && (null == h && (h = l + t + c > z + q), !u && h))) return u = !0, "static" === f.css("position") && f.css({
                        position: "relative"
                    }), a.css({
                        position: "absolute",
                        bottom: d,
                        top: "auto"
                    }).trigger("sticky_kit:bottom")
                },
                    w = function () {
                        B();
                        return b()
                    }, F = function () {
                    E = !0;
                    e.off("touchmove", b);
                    e.off("scroll", b);
                    e.off("resize", w);
                    k(document.body).off("sticky_kit:recalc", w);
                    a.off("sticky_kit:detach", F);
                    a.removeData("sticky_kit");
                    a.css({
                        position: "",
                        bottom: "",
                        top: "",
                        width: ""
                    });
                    f.position("position", "");
                    if (m) return null == n && ("left" !== r && "right" !== r || a.insertAfter(g), g.remove()), a.removeClass(s)
                }, e.on("touchmove", b), e.on("scroll", b), e.on("resize", w), k(document.body).on("sticky_kit:recalc", w), a.on("sticky_kit:detach", F), setTimeout(b,
                    0)
            }
        };
        q = 0;
        for (H = this.length; q < H; q++) d = this[q], G(k(d));
        return this
    }
}).call(this);

/*! Backstretch - v2.0.4 - 2013-06-19
* http://srobbin.com/jquery-plugins/backstretch/
* Copyright (c) 2013 Scott Robbin; Licensed MIT */

;(function ($, window, undefined) {
    'use strict';

    /* PLUGIN DEFINITION
   * ========================= */

    $.fn.backstretch = function (images, options) {
        // We need at least one image or method name
        if (images === undefined || images.length === 0) {
            $.error("No images were supplied for Backstretch");
        }

        /*
     * Scroll the page one pixel to get the right window height on iOS
     * Pretty harmless for everyone else
    */
        if ($(window).scrollTop() === 0) {
            window.scrollTo(0, 0);
        }

        return this.each(function () {
            var $this = $(this)
                , obj = $this.data('backstretch');

            // Do we already have an instance attached to this element?
            if (obj) {

                // Is this a method they're trying to execute?
                if (typeof images == 'string' && typeof obj[images] == 'function') {
                    // Call the method
                    obj[images](options);

                    // No need to do anything further
                    return;
                }

                // Merge the old options with the new
                options = $.extend(obj.options, options);

                // Remove the old instance
                obj.destroy(true);
            }

            obj = new Backstretch(this, images, options);
            $this.data('backstretch', obj);
        });
    };

    // If no element is supplied, we'll attach to body
    $.backstretch = function (images, options) {
        // Return the instance
        return $('body')
            .backstretch(images, options)
            .data('backstretch');
    };

    // Custom selector
    $.expr[':'].backstretch = function (elem) {
        return $(elem).data('backstretch') !== undefined;
    };

    /* DEFAULTS
   * ========================= */

    $.fn.backstretch.defaults = {
        centeredX: true   // Should we center the image on the X axis?
        , centeredY: true   // Should we center the image on the Y axis?
        , duration: 5000    // Amount of time in between slides (if slideshow)
        , fade: 0           // Speed of fade transition between slides
    };

    /* STYLES
   *
   * Baked-in styles that we'll apply to our elements.
   * In an effort to keep the plugin simple, these are not exposed as options.
   * That said, anyone can override these in their own stylesheet.
   * ========================= */
    var styles = {
        wrap: {
            left: 0
            , top: 0
            , overflow: 'hidden'
            , margin: 0
            , padding: 0
            , height: '100%'
            , width: '100%'
            , zIndex: -999999
        }
        , img: {
            position: 'absolute'
            , display: 'none'
            , margin: 0
            , padding: 0
            , border: 'none'
            , width: 'auto'
            , height: 'auto'
            , maxHeight: 'none'
            , maxWidth: 'none'
            , zIndex: -999999
        }
    };

    /* CLASS DEFINITION
   * ========================= */
    var Backstretch = function (container, images, options) {
        this.options = $.extend({}, $.fn.backstretch.defaults, options || {});

        /* In its simplest form, we allow Backstretch to be called on an image path.
     * e.g. $.backstretch('/path/to/image.jpg')
     * So, we need to turn this back into an array.
     */
        this.images = $.isArray(images) ? images : [images];

        // Preload images
        $.each(this.images, function () {
            $('<img />')[0].src = this;
        });

        // Convenience reference to know if the container is body.
        this.isBody = container === document.body;

        /* We're keeping track of a few different elements
     *
     * Container: the element that Backstretch was called on.
     * Wrap: a DIV that we place the image into, so we can hide the overflow.
     * Root: Convenience reference to help calculate the correct height.
     */
        this.$container = $(container);
        this.$root = this.isBody ? supportsFixedPosition ? $(window) : $(document) : this.$container;

        // Don't create a new wrap if one already exists (from a previous instance of Backstretch)
        var $existing = this.$container.children(".backstretch").first();
        this.$wrap = $existing.length ? $existing : $('<div class="backstretch"></div>').css(styles.wrap).appendTo(this.$container);

        // Non-body elements need some style adjustments
        if (!this.isBody) {
            // If the container is statically positioned, we need to make it relative,
            // and if no zIndex is defined, we should set it to zero.
            var position = this.$container.css('position')
                , zIndex = this.$container.css('zIndex');

            this.$container.css({
                position: position === 'static' ? 'relative' : position
                , zIndex: zIndex === 'auto' ? 0 : zIndex
                , background: 'none'
            });

            // Needs a higher z-index
            this.$wrap.css({zIndex: -999998});
        }

        // Fixed or absolute positioning?
        this.$wrap.css({
            position: this.isBody && supportsFixedPosition ? 'fixed' : 'absolute'
        });

        // Set the first image
        this.index = 0;
        this.show(this.index);

        // Listen for resize
        $(window).on('resize.backstretch', $.proxy(this.resize, this))
            .on('orientationchange.backstretch', $.proxy(function () {
                // Need to do this in order to get the right window height
                if (this.isBody && window.pageYOffset === 0) {
                    window.scrollTo(0, 1);
                    this.resize();
                }
            }, this));
    };

    /* PUBLIC METHODS
   * ========================= */
    Backstretch.prototype = {
        resize: function () {
            try {
                var bgCSS = {left: 0, top: 0}
                    , rootWidth = this.isBody ? this.$root.width() : this.$root.innerWidth()
                    , bgWidth = rootWidth
                    ,
                    rootHeight = this.isBody ? ( window.innerHeight ? window.innerHeight : this.$root.height() ) : this.$root.innerHeight()
                    , bgHeight = bgWidth / this.$img.data('ratio')
                    , bgOffset;

                // Make adjustments based on image ratio
                if (bgHeight >= rootHeight) {
                    bgOffset = (bgHeight - rootHeight) / 2;
                    if (this.options.centeredY) {
                        bgCSS.top = '-' + bgOffset + 'px';
                    }
                } else {
                    bgHeight = rootHeight;
                    bgWidth = bgHeight * this.$img.data('ratio');
                    bgOffset = (bgWidth - rootWidth) / 2;
                    if (this.options.centeredX) {
                        bgCSS.left = '-' + bgOffset + 'px';
                    }
                }

                this.$wrap.css({width: rootWidth, height: rootHeight})
                    .find('img:not(.deleteable)').css({width: bgWidth, height: bgHeight}).css(bgCSS);
            } catch (err) {
                // IE7 seems to trigger resize before the image is loaded.
                // This try/catch block is a hack to let it fail gracefully.
            }

            return this;
        }

        // Show the slide at a certain position
        , show: function (newIndex) {

            // Validate index
            if (Math.abs(newIndex) > this.images.length - 1) {
                return;
            }

            // Vars
            var self = this
                , oldImage = self.$wrap.find('img').addClass('deleteable')
                , evtOptions = {relatedTarget: self.$container[0]};

            // Trigger the "before" event
            self.$container.trigger($.Event('backstretch.before', evtOptions), [self, newIndex]);

            // Set the new index
            this.index = newIndex;

            // Pause the slideshow
            clearInterval(self.interval);

            // New image
            self.$img = $('<img />')
                .css(styles.img)
                .bind('load', function (e) {
                    var imgWidth = this.width || $(e.target).width()
                        , imgHeight = this.height || $(e.target).height();

                    // Save the ratio
                    $(this).data('ratio', imgWidth / imgHeight);

                    // Show the image, then delete the old one
                    // "speed" option has been deprecated, but we want backwards compatibilty
                    $(this).fadeIn(self.options.speed || self.options.fade, function () {
                        oldImage.remove();

                        // Resume the slideshow
                        if (!self.paused) {
                            self.cycle();
                        }

                        // Trigger the "after" and "show" events
                        // "show" is being deprecated
                        $(['after', 'show']).each(function () {
                            self.$container.trigger($.Event('backstretch.' + this, evtOptions), [self, newIndex]);
                        });
                    });

                    // Resize
                    self.resize();
                })
                .appendTo(self.$wrap);

            // Hack for IE img onload event
            self.$img.attr('src', self.images[newIndex]);
            return self;
        }

        , next: function () {
            // Next slide
            return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0);
        }

        , prev: function () {
            // Previous slide
            return this.show(this.index === 0 ? this.images.length - 1 : this.index - 1);
        }

        , pause: function () {
            // Pause the slideshow
            this.paused = true;
            return this;
        }

        , resume: function () {
            // Resume the slideshow
            this.paused = false;
            this.next();
            return this;
        }

        , cycle: function () {
            // Start/resume the slideshow
            if (this.images.length > 1) {
                // Clear the interval, just in case
                clearInterval(this.interval);

                this.interval = setInterval($.proxy(function () {
                    // Check for paused slideshow
                    if (!this.paused) {
                        this.next();
                    }
                }, this), this.options.duration);
            }
            return this;
        }

        , destroy: function (preserveBackground) {
            // Stop the resize events
            $(window).off('resize.backstretch orientationchange.backstretch');

            // Clear the interval
            clearInterval(this.interval);

            // Remove Backstretch
            if (!preserveBackground) {
                this.$wrap.remove();
            }
            this.$container.removeData('backstretch');
        }
    };

    /* SUPPORTS FIXED POSITION?
   *
   * Based on code from jQuery Mobile 1.1.0
   * http://jquerymobile.com/
   *
   * In a nutshell, we need to figure out if fixed positioning is supported.
   * Unfortunately, this is very difficult to do on iOS, and usually involves
   * injecting content, scrolling the page, etc.. It's ugly.
   * jQuery Mobile uses this workaround. It's not ideal, but works.
   *
   * Modified to detect IE6
   * ========================= */

    var supportsFixedPosition = (function () {
        var ua = navigator.userAgent
            , platform = navigator.platform
            // Rendering engine is Webkit, and capture major version
            , wkmatch = ua.match(/AppleWebKit\/([0-9]+)/)
            , wkversion = !!wkmatch && wkmatch[1]
            , ffmatch = ua.match(/Fennec\/([0-9]+)/)
            , ffversion = !!ffmatch && ffmatch[1]
            , operammobilematch = ua.match(/Opera Mobi\/([0-9]+)/)
            , omversion = !!operammobilematch && operammobilematch[1]
            , iematch = ua.match(/MSIE ([0-9]+)/)
            , ieversion = !!iematch && iematch[1];

        return !(
            // iOS 4.3 and older : Platform is iPhone/Pad/Touch and Webkit version is less than 534 (ios5)
            ((platform.indexOf("iPhone") > -1 || platform.indexOf("iPad") > -1 || platform.indexOf("iPod") > -1 ) && wkversion && wkversion < 534) ||

            // Opera Mini
            (window.operamini && ({}).toString.call(window.operamini) === "[object OperaMini]") ||
            (operammobilematch && omversion < 7458) ||

            //Android lte 2.1: Platform is Android and Webkit version is less than 533 (Android 2.2)
            (ua.indexOf("Android") > -1 && wkversion && wkversion < 533) ||

            // Firefox Mobile before 6.0 -
            (ffversion && ffversion < 6) ||

            // WebOS less than 3
            ("palmGetResource" in window && wkversion && wkversion < 534) ||

            // MeeGo
            (ua.indexOf("MeeGo") > -1 && ua.indexOf("NokiaBrowser/8.5.0") > -1) ||

            // IE6
            (ieversion && ieversion <= 6)
        );
    }());

}(jQuery, window));

//custom scroll bars
(function ($) {

    $.fn.customScrollbar = function (options, args) {

        var defaultOptions = {
            skin: 'default-skin',
            hScroll: true,
            vScroll: true,
            updateOnWindowResize: false,
            animationSpeed: 300,
            onCustomScroll: undefined,
            swipeSpeed: 1,
            wheelSpeed: 40,
            fixedThumbWidth: undefined,
            fixedThumbHeight: undefined,
            preventDefaultScroll: false
        }

        var Scrollable = function (element, options) {
            this.$element = $(element);
            this.options = options;
            this.addScrollableClass();
            this.addSkinClass();
            this.addScrollBarComponents();
            if (this.options.vScroll)
                this.vScrollbar = new Scrollbar(this, new VSizing());
            if (this.options.hScroll)
                this.hScrollbar = new Scrollbar(this, new HSizing());
            this.$element.data("scrollable", this);
            this.initKeyboardScrolling();
            this.bindEvents();
        }

        Scrollable.prototype = {

            addScrollableClass: function () {
                if (!this.$element.hasClass("scrollable")) {
                    this.scrollableAdded = true;
                    this.$element.addClass("scrollable");
                }
            },

            removeScrollableClass: function () {
                if (this.scrollableAdded)
                    this.$element.removeClass("scrollable");
            },

            addSkinClass: function () {
                if (typeof(this.options.skin) == "string" && !this.$element.hasClass(this.options.skin)) {
                    this.skinClassAdded = true;
                    this.$element.addClass(this.options.skin);
                }
            },

            removeSkinClass: function () {
                if (this.skinClassAdded)
                    this.$element.removeClass(this.options.skin);
            },

            addScrollBarComponents: function () {
                this.assignViewPort();
                if (this.$viewPort.length == 0) {
                    this.$element.wrapInner("<div class=\"viewport\" />");
                    this.assignViewPort();
                    this.viewPortAdded = true;
                }
                this.assignOverview();
                if (this.$overview.length == 0) {
                    this.$viewPort.wrapInner("<div class=\"overview\" />");
                    this.assignOverview();
                    this.overviewAdded = true;
                }
                this.addScrollBar("vertical", "prepend");
                this.addScrollBar("horizontal", "append");
            },

            removeScrollbarComponents: function () {
                this.removeScrollbar("vertical");
                this.removeScrollbar("horizontal");
                if (this.overviewAdded)
                    this.$element.unwrap();
                if (this.viewPortAdded)
                    this.$element.unwrap();
            },

            removeScrollbar: function (orientation) {
                if (this[orientation + "ScrollbarAdded"])
                    this.$element.find(".scroll-bar." + orientation).remove();
            },

            assignViewPort: function () {
                this.$viewPort = this.$element.find(".viewport");
            },

            assignOverview: function () {
                this.$overview = this.$viewPort.find(".overview");
            },

            addScrollBar: function (orientation, fun) {
                if (this.$element.find(".scroll-bar." + orientation).length == 0) {
                    this.$element[fun]("<div class='scroll-bar " + orientation + "'><div class='thumb'></div></div>")
                    this[orientation + "ScrollbarAdded"] = true;
                }
            },

            resize: function (keepPosition) {
                if (this.vScrollbar)
                    this.vScrollbar.resize(keepPosition);
                if (this.hScrollbar)
                    this.hScrollbar.resize(keepPosition);
            },

            scrollTo: function (element) {
                if (this.vScrollbar)
                    this.vScrollbar.scrollToElement(element);
                if (this.hScrollbar)
                    this.hScrollbar.scrollToElement(element);
            },

            scrollToXY: function (x, y) {
                this.scrollToX(x);
                this.scrollToY(y);
            },

            scrollToX: function (x) {
                if (this.hScrollbar)
                    this.hScrollbar.scrollOverviewTo(x, true);
            },

            scrollToY: function (y) {
                if (this.vScrollbar)
                    this.vScrollbar.scrollOverviewTo(y, true);
            },

            remove: function () {
                this.removeScrollableClass();
                this.removeSkinClass();
                this.removeScrollbarComponents();
                this.$element.data("scrollable", null);
                this.removeKeyboardScrolling();
                if (this.vScrollbar)
                    this.vScrollbar.remove();
                if (this.hScrollbar)
                    this.hScrollbar.remove();
            },

            setAnimationSpeed: function (speed) {
                this.options.animationSpeed = speed;
            },

            isInside: function (element, wrappingElement) {
                var $element = $(element);
                var $wrappingElement = $(wrappingElement);
                var elementOffset = $element.offset();
                var wrappingElementOffset = $wrappingElement.offset();
                return (elementOffset.top >= wrappingElementOffset.top) && (elementOffset.left >= wrappingElementOffset.left) &&
                    (elementOffset.top + $element.height() <= wrappingElementOffset.top + $wrappingElement.height()) &&
                    (elementOffset.left + $element.width() <= wrappingElementOffset.left + $wrappingElement.width())
            },

            initKeyboardScrolling: function () {
                var _this = this;

                this.elementKeydown = function (event) {
                    if (document.activeElement === _this.$element[0]) {
                        if (_this.vScrollbar)
                            _this.vScrollbar.keyScroll(event);
                        if (_this.hScrollbar)
                            _this.hScrollbar.keyScroll(event);
                    }
                }

                this.$element
                    .attr('tabindex', '-1')
                    .keydown(this.elementKeydown);
            },

            removeKeyboardScrolling: function () {
                this.$element
                    .removeAttr('tabindex')
                    .unbind("keydown", this.elementKeydown);
            },

            bindEvents: function () {
                if (this.options.onCustomScroll)
                    this.$element.on("customScroll", this.options.onCustomScroll);
            }

        }

        var Scrollbar = function (scrollable, sizing) {
            this.scrollable = scrollable;
            this.sizing = sizing
            this.$scrollBar = this.sizing.scrollBar(this.scrollable.$element);
            this.$thumb = this.$scrollBar.find(".thumb");
            this.setScrollPosition(0, 0);
            this.resize();
            this.initMouseMoveScrolling();
            this.initMouseWheelScrolling();
            this.initTouchScrolling();
            this.initMouseClickScrolling();
            this.initWindowResize();
        }

        Scrollbar.prototype = {

            resize: function (keepPosition) {
                this.scrollable.$viewPort.height(this.scrollable.$element.height());
                this.sizing.size(this.scrollable.$viewPort, this.sizing.size(this.scrollable.$element));
                this.viewPortSize = this.sizing.size(this.scrollable.$viewPort);
                this.overviewSize = this.sizing.size(this.scrollable.$overview);
                this.ratio = this.viewPortSize / this.overviewSize;
                this.sizing.size(this.$scrollBar, this.viewPortSize);
                this.thumbSize = this.calculateThumbSize();
                this.sizing.size(this.$thumb, this.thumbSize);
                this.maxThumbPosition = this.calculateMaxThumbPosition();
                this.maxOverviewPosition = this.calculateMaxOverviewPosition();
                this.enabled = (this.overviewSize > this.viewPortSize);
                if (this.scrollPercent === undefined)
                    this.scrollPercent = 0.0;
                if (this.enabled)
                    this.rescroll(keepPosition);
                else
                    this.setScrollPosition(0, 0);
                this.$scrollBar.toggle(this.enabled);
            },

            calculateThumbSize: function () {
                var fixedSize = this.sizing.fixedThumbSize(this.scrollable.options)
                var size;
                if (fixedSize)
                    size = fixedSize;
                else
                    size = this.ratio * this.viewPortSize
                return Math.max(size, this.sizing.minSize(this.$thumb));
            },

            initMouseMoveScrolling: function () {
                var _this = this;
                this.$thumb.mousedown(function (event) {
                    if (_this.enabled)
                        _this.startMouseMoveScrolling(event);
                });
                this.documentMouseup = function (event) {
                    _this.stopMouseMoveScrolling(event);
                };
                $(document).mouseup(this.documentMouseup);
                this.documentMousemove = function (event) {
                    _this.mouseMoveScroll(event);
                };
                $(document).mousemove(this.documentMousemove);
                this.$thumb.click(function (event) {
                    event.stopPropagation();
                });
            },

            removeMouseMoveScrolling: function () {
                this.$thumb.unbind();
                $(document).unbind("mouseup", this.documentMouseup);
                $(document).unbind("mousemove", this.documentMousemove);
            },

            initMouseWheelScrolling: function () {
                var _this = this;
                this.scrollable.$element.mousewheel(function (event, delta, deltaX, deltaY) {
                    if (_this.enabled) {
                        var scrolled = _this.mouseWheelScroll(deltaX, deltaY);
                        _this.stopEventConditionally(event, scrolled);
                    }
                });
            },

            removeMouseWheelScrolling: function () {
                this.scrollable.$element.unbind("mousewheel");
            },

            initTouchScrolling: function () {
                if (document.addEventListener) {
                    var _this = this;
                    this.elementTouchstart = function (event) {
                        if (_this.enabled)
                            _this.startTouchScrolling(event);
                    }
                    this.scrollable.$element[0].addEventListener("touchstart", this.elementTouchstart);
                    this.documentTouchmove = function (event) {
                        _this.touchScroll(event);
                    }
                    document.addEventListener("touchmove", this.documentTouchmove);
                    this.elementTouchend = function (event) {
                        _this.stopTouchScrolling(event);
                    }
                    this.scrollable.$element[0].addEventListener("touchend", this.elementTouchend);
                }
            },

            removeTouchScrolling: function () {
                if (document.addEventListener) {
                    this.scrollable.$element[0].removeEventListener("touchstart", this.elementTouchstart);
                    document.removeEventListener("touchmove", this.documentTouchmove);
                    this.scrollable.$element[0].removeEventListener("touchend", this.elementTouchend);
                }
            },

            initMouseClickScrolling: function () {
                var _this = this;
                this.scrollBarClick = function (event) {
                    _this.mouseClickScroll(event);
                };
                this.$scrollBar.click(this.scrollBarClick);
            },

            removeMouseClickScrolling: function () {
                this.$scrollBar.unbind("click", this.scrollBarClick);
            },

            initWindowResize: function () {
                if (this.scrollable.options.updateOnWindowResize) {
                    var _this = this;
                    this.windowResize = function () {
                        _this.resize();
                    };
                    $(window).resize(this.windowResize);
                }
            },

            removeWindowResize: function () {
                $(window).unbind("resize", this.windowResize);
            },

            isKeyScrolling: function (key) {
                return this.keyScrollDelta(key) != null;
            },

            keyScrollDelta: function (key) {
                for (var scrollingKey in this.sizing.scrollingKeys)
                    if (scrollingKey == key)
                        return this.sizing.scrollingKeys[key](this.viewPortSize);
                return null;
            },

            startMouseMoveScrolling: function (event) {
                this.mouseMoveScrolling = true;
                $("html").addClass("not-selectable");
                this.setUnselectable($("html"), "on");
                this.setScrollEvent(event);
            },

            stopMouseMoveScrolling: function (event) {
                this.mouseMoveScrolling = false;
                $("html").removeClass("not-selectable");
                this.setUnselectable($("html"), null);
            },

            setUnselectable: function (element, value) {
                if (element.attr("unselectable") != value) {
                    element.attr("unselectable", value);
                    element.find(':not(input)').attr('unselectable', value);
                }
            },

            mouseMoveScroll: function (event) {
                if (this.mouseMoveScrolling) {
                    var delta = this.sizing.mouseDelta(this.scrollEvent, event);
                    this.scrollThumbBy(delta);
                    this.setScrollEvent(event);
                }
            },

            startTouchScrolling: function (event) {
                if (event.touches && event.touches.length == 1) {
                    this.setScrollEvent(event.touches[0]);
                    this.touchScrolling = true;
                    event.stopPropagation();
                }
            },

            touchScroll: function (event) {
                if (this.touchScrolling && event.touches && event.touches.length == 1) {
                    var delta = -this.sizing.mouseDelta(this.scrollEvent, event.touches[0]) * this.scrollable.options.swipeSpeed;
                    var scrolled = this.scrollOverviewBy(delta);
                    if (scrolled)
                        this.setScrollEvent(event.touches[0]);
                    this.stopEventConditionally(event, scrolled);
                }
            },

            stopTouchScrolling: function (event) {
                this.touchScrolling = false;
                event.stopPropagation();
            },

            mouseWheelScroll: function (deltaX, deltaY) {
                var delta = -this.sizing.wheelDelta(deltaX, deltaY) * this.scrollable.options.wheelSpeed;
                if (delta != 0)
                    return this.scrollOverviewBy(delta);
            },

            mouseClickScroll: function (event) {
                var delta = this.viewPortSize - 20;
                if (event["page" + this.sizing.scrollAxis()] < this.$thumb.offset()[this.sizing.offsetComponent()])
                // mouse click over thumb
                    delta = -delta;
                this.scrollOverviewBy(delta);
            },

            keyScroll: function (event) {
                var keyDown = event.which;
                if (this.enabled && this.isKeyScrolling(keyDown)) {
                    var scrolled = this.scrollOverviewBy(this.keyScrollDelta(keyDown));
                    this.stopEventConditionally(event, scrolled);
                }
            },

            scrollThumbBy: function (delta) {
                var thumbPosition = this.thumbPosition();
                thumbPosition += delta;
                thumbPosition = this.positionOrMax(thumbPosition, this.maxThumbPosition);
                var oldScrollPercent = this.scrollPercent;
                this.scrollPercent = thumbPosition / this.maxThumbPosition;
                if (oldScrollPercent != this.scrollPercent) {
                    var overviewPosition = (thumbPosition * this.maxOverviewPosition) / this.maxThumbPosition;
                    this.setScrollPosition(overviewPosition, thumbPosition);
                    this.triggerCustomScroll(oldScrollPercent);
                    return true
                } else
                    return false;
            },

            thumbPosition: function () {
                return this.$thumb.position()[this.sizing.offsetComponent()];
            },

            scrollOverviewBy: function (delta) {
                var overviewPosition = this.overviewPosition() + delta;
                return this.scrollOverviewTo(overviewPosition, false);
            },

            overviewPosition: function () {
                return -this.scrollable.$overview.position()[this.sizing.offsetComponent()];
            },

            scrollOverviewTo: function (overviewPosition, animate) {
                overviewPosition = this.positionOrMax(overviewPosition, this.maxOverviewPosition);
                var oldScrollPercent = this.scrollPercent;
                this.scrollPercent = overviewPosition / this.maxOverviewPosition;
                if (oldScrollPercent != this.scrollPercent) {
                    var thumbPosition = this.scrollPercent * this.maxThumbPosition;
                    if (animate)
                        this.setScrollPositionWithAnimation(overviewPosition, thumbPosition);
                    else
                        this.setScrollPosition(overviewPosition, thumbPosition);
                    this.triggerCustomScroll(oldScrollPercent);
                    return true;
                } else
                    return false;
            },

            positionOrMax: function (p, max) {
                if (p < 0)
                    return 0;
                else if (p > max)
                    return max;
                else
                    return p;
            },

            triggerCustomScroll: function (oldScrollPercent) {
                this.scrollable.$element.trigger("customScroll", {
                    scrollAxis: this.sizing.scrollAxis(),
                    direction: this.sizing.scrollDirection(oldScrollPercent, this.scrollPercent),
                    scrollPercent: this.scrollPercent * 100
                });
            },

            rescroll: function (keepPosition) {
                if (keepPosition) {
                    var overviewPosition = this.positionOrMax(this.overviewPosition(), this.maxOverviewPosition);
                    this.scrollPercent = overviewPosition / this.maxOverviewPosition;
                    var thumbPosition = this.scrollPercent * this.maxThumbPosition;
                    this.setScrollPosition(overviewPosition, thumbPosition);
                } else {
                    var thumbPosition = this.scrollPercent * this.maxThumbPosition;
                    var overviewPosition = this.scrollPercent * this.maxOverviewPosition;
                    this.setScrollPosition(overviewPosition, thumbPosition);
                }
            },

            setScrollPosition: function (overviewPosition, thumbPosition) {
                this.$thumb.css(this.sizing.offsetComponent(), thumbPosition + "px");
                this.scrollable.$overview.css(this.sizing.offsetComponent(), -overviewPosition + "px");
            },

            setScrollPositionWithAnimation: function (overviewPosition, thumbPosition) {
                var thumbAnimationOpts = {};
                var overviewAnimationOpts = {};
                thumbAnimationOpts[this.sizing.offsetComponent()] = thumbPosition + "px";
                this.$thumb.animate(thumbAnimationOpts, this.scrollable.options.animationSpeed);
                overviewAnimationOpts[this.sizing.offsetComponent()] = -overviewPosition + "px";
                this.scrollable.$overview.animate(overviewAnimationOpts, this.scrollable.options.animationSpeed);
            },

            calculateMaxThumbPosition: function () {
                return Math.max(0, this.sizing.size(this.$scrollBar) - this.thumbSize);
            },

            calculateMaxOverviewPosition: function () {
                return Math.max(0, this.sizing.size(this.scrollable.$overview) - this.sizing.size(this.scrollable.$viewPort));
            },

            setScrollEvent: function (event) {
                var attr = "page" + this.sizing.scrollAxis();
                if (!this.scrollEvent || this.scrollEvent[attr] != event[attr])
                    this.scrollEvent = {
                        pageX: event.pageX,
                        pageY: event.pageY
                    };
            },

            scrollToElement: function (element) {
                var $element = $(element);
                if (this.sizing.isInside($element, this.scrollable.$overview) && !this.sizing.isInside($element, this.scrollable.$viewPort)) {
                    var elementOffset = $element.offset();
                    var overviewOffset = this.scrollable.$overview.offset();
                    var viewPortOffset = this.scrollable.$viewPort.offset();
                    this.scrollOverviewTo(elementOffset[this.sizing.offsetComponent()] - overviewOffset[this.sizing.offsetComponent()], true);
                }
            },

            remove: function () {
                this.removeMouseMoveScrolling();
                this.removeMouseWheelScrolling();
                this.removeTouchScrolling();
                this.removeMouseClickScrolling();
                this.removeWindowResize();
            },

            stopEventConditionally: function (event, condition) {
                if (condition || this.scrollable.options.preventDefaultScroll) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            }

        }

        var HSizing = function () {
        }

        HSizing.prototype = {
            size: function ($el, arg) {
                if (arg)
                    return $el.width(arg);
                else
                    return $el.width();
            },

            minSize: function ($el) {
                return parseInt($el.css("min-width")) || 0;
            },

            fixedThumbSize: function (options) {
                return options.fixedThumbWidth;
            },

            scrollBar: function ($el) {
                return $el.find(".scroll-bar.horizontal");
            },

            mouseDelta: function (event1, event2) {
                return event2.pageX - event1.pageX;
            },

            offsetComponent: function () {
                return "left";
            },

            wheelDelta: function (deltaX, deltaY) {
                return deltaX;
            },

            scrollAxis: function () {
                return "X";
            },

            scrollDirection: function (oldPercent, newPercent) {
                return oldPercent < newPercent ? "right" : "left";
            },

            scrollingKeys: {
                37: function (viewPortSize) {
                    return -10; //arrow left
                },
                39: function (viewPortSize) {
                    return 10; //arrow right
                }
            },

            isInside: function (element, wrappingElement) {
                var $element = $(element);
                var $wrappingElement = $(wrappingElement);
                var elementOffset = $element.offset();
                var wrappingElementOffset = $wrappingElement.offset();
                return (elementOffset.left >= wrappingElementOffset.left) &&
                    (elementOffset.left + $element.width() <= wrappingElementOffset.left + $wrappingElement.width());
            }

        }

        var VSizing = function () {
        }

        VSizing.prototype = {

            size: function ($el, arg) {
                if (arg)
                    return $el.height(arg);
                else
                    return $el.height();
            },

            minSize: function ($el) {
                return parseInt($el.css("min-height")) || 0;
            },

            fixedThumbSize: function (options) {
                return options.fixedThumbHeight;
            },

            scrollBar: function ($el) {
                return $el.find(".scroll-bar.vertical");
            },

            mouseDelta: function (event1, event2) {
                return event2.pageY - event1.pageY;
            },

            offsetComponent: function () {
                return "top";
            },

            wheelDelta: function (deltaX, deltaY) {
                return deltaY;
            },

            scrollAxis: function () {
                return "Y";
            },

            scrollDirection: function (oldPercent, newPercent) {
                return oldPercent < newPercent ? "down" : "up";
            },

            scrollingKeys: {
                38: function (viewPortSize) {
                    return -10; //arrow up
                },
                40: function (viewPortSize) {
                    return 10; //arrow down
                },
                33: function (viewPortSize) {
                    return -(viewPortSize - 20); //page up
                },
                34: function (viewPortSize) {
                    return viewPortSize - 20; //page down
                }
            },

            isInside: function (element, wrappingElement) {
                var $element = $(element);
                var $wrappingElement = $(wrappingElement);
                var elementOffset = $element.offset();
                var wrappingElementOffset = $wrappingElement.offset();
                return (elementOffset.top >= wrappingElementOffset.top) &&
                    (elementOffset.top + $element.height() <= wrappingElementOffset.top + $wrappingElement.height());
            }

        }

        return this.each(function () {
            if (options == undefined)
                options = defaultOptions;
            if (typeof(options) == "string") {
                var scrollable = $(this).data("scrollable");
                if (scrollable)
                    scrollable[options](args);
            } else if (typeof(options) == "object") {
                options = $.extend(defaultOptions, options);
                new Scrollable($(this), options);
            } else
                throw "Invalid type of options";
        });

    };

})
(jQuery);

(function ($) {

    var types = ['DOMMouseScroll', 'mousewheel'];

    if ($.event.fixHooks) {
        for (var i = types.length; i;) {
            $.event.fixHooks[types[--i]] = $.event.mouseHooks;
        }
    }

    $.event.special.mousewheel = {
        setup: function () {
            if (this.addEventListener) {
                for (var i = types.length; i;) {
                    this.addEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
        },

        teardown: function () {
            if (this.removeEventListener) {
                for (var i = types.length; i;) {
                    this.removeEventListener(types[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
        }
    };

    $.fn.extend({
        mousewheel: function (fn) {
            return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
        },

        unmousewheel: function (fn) {
            return this.unbind("mousewheel", fn);
        }
    });


    function handler(event) {
        var orgEvent = event || window.event,
            args = [].slice.call(arguments, 1),
            delta = 0,
            returnValue = true,
            deltaX = 0,
            deltaY = 0;
        event = $.event.fix(orgEvent);
        event.type = "mousewheel";

        // Old school scrollwheel delta
        if (orgEvent.wheelDelta) {
            delta = orgEvent.wheelDelta / 120;
        }
        if (orgEvent.detail) {
            delta = -orgEvent.detail / 3;
        }

        // New school multidimensional scroll (touchpads) deltas
        deltaY = delta;

        // Gecko
        if (orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaY = 0;
            deltaX = delta;
        }

        // Webkit
        if (orgEvent.wheelDeltaY !== undefined) {
            deltaY = orgEvent.wheelDeltaY / 120;
        }
        if (orgEvent.wheelDeltaX !== undefined) {
            deltaX = orgEvent.wheelDeltaX / 120;
        }

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

})(jQuery);
/*!
 * Isotope PACKAGED v2.2.0
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!function (a) {
    function b() {
    }

    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function (b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }

        function e(b, c) {
            a.fn[b] = function (e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h], k = a.data(j, b);
                        if (k) if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                            var l = k[e].apply(k, g);
                            if (void 0 !== l) return l
                        } else f("no such method '" + e + "' for " + b + " instance"); else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function () {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }

        if (a) {
            var f = "undefined" == typeof console ? b : function (a) {
                console.error(a)
            };
            return a.bridget = function (a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }

    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window), function (a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }

    var c = document.documentElement, d = function () {
    };
    c.addEventListener ? d = function (a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function (a, c, d) {
        a[c + d] = d.handleEvent ? function () {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function () {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function () {
    };
    c.removeEventListener ? e = function (a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function (a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {bind: d, unbind: e};
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window), function () {
    "use strict";

    function a() {
    }

    function b(a, b) {
        for (var c = a.length; c--;) if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function () {
            return this[a].apply(this, arguments)
        }
    }

    var d = a.prototype, e = this, f = e.EventEmitter;
    d.getListeners = function (a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function (a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function (a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function (a, c) {
        var d, e = this.getListenersAsObject(a), f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {listener: c, once: !1});
        return this
    }, d.on = c("addListener"), d.addOnceListener = function (a, b) {
        return this.addListener(a, {listener: b, once: !0})
    }, d.once = c("addOnceListener"), d.defineEvent = function (a) {
        return this.getListeners(a), this
    }, d.defineEvents = function (a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function (a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function (a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function (a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function (a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener, g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp) for (d = c.length; d--;) f.call(this, b, c[d]); else for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function (a) {
        var b, c = typeof a, d = this._getEvents();
        if ("string" === c) delete d[a]; else if (a instanceof RegExp) for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b]; else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g) if (g.hasOwnProperty(e)) for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function (a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function (a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function () {
        return this._events || (this._events = {})
    }, a.noConflict = function () {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this), function (a) {
    function b(a) {
        if (a) {
            if ("string" == typeof d[a]) return a;
            a = a.charAt(0).toUpperCase() + a.slice(1);
            for (var b, e = 0, f = c.length; f > e; e++) if (b = c[e] + a, "string" == typeof d[b]) return b
        }
    }

    var c = "Webkit Moz ms Ms O".split(" "), d = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
        return b
    }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
}(window), function (a, b) {
    function c(a) {
        var b = parseFloat(a), c = -1 === a.indexOf("%") && !isNaN(b);
        return c && b
    }

    function d() {
    }

    function e() {
        for (var a = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, b = 0, c = h.length; c > b; b++) {
            var d = h[b];
            a[d] = 0
        }
        return a
    }

    function f(b) {
        function d() {
            if (!m) {
                m = !0;
                var d = a.getComputedStyle;
                if (j = function () {
                        var a = d ? function (a) {
                            return d(a, null)
                        } : function (a) {
                            return a.currentStyle
                        };
                        return function (b) {
                            var c = a(b);
                            return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                        }
                    }(), k = b("boxSizing")) {
                    var e = document.createElement("div");
                    e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                    var f = document.body || document.documentElement;
                    f.appendChild(e);
                    var h = j(e);
                    l = 200 === c(h.width), f.removeChild(e)
                }
            }
        }

        function f(a) {
            if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                var b = j(a);
                if ("none" === b.display) return e();
                var f = {};
                f.width = a.offsetWidth, f.height = a.offsetHeight;
                for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
                    var o = h[m], p = b[o];
                    p = i(a, p);
                    var q = parseFloat(p);
                    f[o] = isNaN(q) ? 0 : q
                }
                var r = f.paddingLeft + f.paddingRight, s = f.paddingTop + f.paddingBottom,
                    t = f.marginLeft + f.marginRight, u = f.marginTop + f.marginBottom,
                    v = f.borderLeftWidth + f.borderRightWidth, w = f.borderTopWidth + f.borderBottomWidth, x = g && l,
                    y = c(b.width);
                y !== !1 && (f.width = y + (x ? 0 : r + v));
                var z = c(b.height);
                return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
            }
        }

        function i(b, c) {
            if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
            var d = b.style, e = d.left, f = b.runtimeStyle, g = f && f.left;
            return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
        }

        var j, k, l, m = !1;
        return f
    }

    var g = "undefined" == typeof console ? d : function (a) {
            console.error(a)
        },
        h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
}(window), function (a) {
    function b(a) {
        "function" == typeof a && (b.isReady ? a() : g.push(a))
    }

    function c(a) {
        var c = "readystatechange" === a.type && "complete" !== f.readyState;
        b.isReady || c || d()
    }

    function d() {
        b.isReady = !0;
        for (var a = 0, c = g.length; c > a; a++) {
            var d = g[a];
            d()
        }
    }

    function e(e) {
        return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
    }

    var f = a.document, g = [];
    b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
}(window), function (a) {
    "use strict";

    function b(a, b) {
        return a[g](b)
    }

    function c(a) {
        if (!a.parentNode) {
            var b = document.createDocumentFragment();
            b.appendChild(a)
        }
    }

    function d(a, b) {
        c(a);
        for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++) if (d[e] === a) return !0;
        return !1
    }

    function e(a, d) {
        return c(a), b(a, d)
    }

    var f, g = function () {
        if (a.matches) return "matches";
        if (a.matchesSelector) return "matchesSelector";
        for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
            var e = b[c], f = e + "MatchesSelector";
            if (a[f]) return f
        }
    }();
    if (g) {
        var h = document.createElement("div"), i = b(h, "div");
        f = i ? b : e
    } else f = d;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
        return f
    }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
}(Element.prototype), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (c, d) {
        return b(a, c, d)
    }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
}(window, function (a, b, c) {
    var d = {};
    d.extend = function (a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }, d.modulo = function (a, b) {
        return (a % b + b) % b
    };
    var e = Object.prototype.toString;
    d.isArray = function (a) {
        return "[object Array]" == e.call(a)
    }, d.makeArray = function (a) {
        var b = [];
        if (d.isArray(a)) b = a; else if (a && "number" == typeof a.length) for (var c = 0, e = a.length; e > c; c++) b.push(a[c]); else b.push(a);
        return b
    }, d.indexOf = Array.prototype.indexOf ? function (a, b) {
        return a.indexOf(b)
    } : function (a, b) {
        for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
        return -1
    }, d.removeFrom = function (a, b) {
        var c = d.indexOf(a, b);
        -1 != c && a.splice(c, 1)
    }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (a) {
        return a instanceof HTMLElement
    } : function (a) {
        return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
    }, d.setText = function () {
        function a(a, c) {
            b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
        }

        var b;
        return a
    }(), d.getParent = function (a, b) {
        for (; a != document.body;) if (a = a.parentNode, c(a, b)) return a
    }, d.getQueryElement = function (a) {
        return "string" == typeof a ? document.querySelector(a) : a
    }, d.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, d.filterFindElements = function (a, b) {
        a = d.makeArray(a);
        for (var e = [], f = 0, g = a.length; g > f; f++) {
            var h = a[f];
            if (d.isElement(h)) if (b) {
                c(h, b) && e.push(h);
                for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
            } else e.push(h)
        }
        return e
    }, d.debounceMethod = function (a, b, c) {
        var d = a.prototype[b], e = b + "Timeout";
        a.prototype[b] = function () {
            var a = this[e];
            a && clearTimeout(a);
            var b = arguments, f = this;
            this[e] = setTimeout(function () {
                d.apply(f, b), delete f[e]
            }, c || 100)
        }
    }, d.toDashed = function (a) {
        return a.replace(/(.)([A-Z])/g, function (a, b, c) {
            return b + "-" + c
        }).toLowerCase()
    };
    var f = a.console;
    return d.htmlInit = function (c, e) {
        b(function () {
            for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                var k, l = g[i], m = l.getAttribute(h);
                try {
                    k = m && JSON.parse(m)
                } catch (n) {
                    f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                    continue
                }
                var o = new c(l, k), p = a.jQuery;
                p && p.data(l, e, o)
            }
        })
    }, d
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (c, d, e, f) {
        return b(a, c, d, e, f)
    }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
}(window, function (a, b, c, d, e) {
    "use strict";

    function f(a) {
        for (var b in a) return !1;
        return b = null, !0
    }

    function g(a, b) {
        a && (this.element = a, this.layout = b, this.position = {x: 0, y: 0}, this._create())
    }

    function h(a) {
        return a.replace(/([A-Z])/g, function (a) {
            return "-" + a.toLowerCase()
        })
    }

    var i = a.getComputedStyle, j = i ? function (a) {
        return i(a, null)
    } : function (a) {
        return a.currentStyle
    }, k = d("transition"), l = d("transform"), m = k && l, n = !!d("perspective"), o = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend"
    }[k], p = ["transform", "transition", "transitionDuration", "transitionProperty"], q = function () {
        for (var a = {}, b = 0, c = p.length; c > b; b++) {
            var e = p[b], f = d(e);
            f && f !== e && (a[e] = f)
        }
        return a
    }();
    e.extend(g.prototype, b.prototype), g.prototype._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, g.prototype.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, g.prototype.getSize = function () {
        this.size = c(this.element)
    }, g.prototype.css = function (a) {
        var b = this.element.style;
        for (var c in a) {
            var d = q[c] || c;
            b[d] = a[c]
        }
    }, g.prototype.getPosition = function () {
        var a = j(this.element), b = this.layout.options, c = b.isOriginLeft, d = b.isOriginTop,
            e = a[c ? "left" : "right"], f = a[d ? "top" : "bottom"], g = parseInt(e, 10), h = parseInt(f, 10),
            i = this.layout.size;
        g = -1 != e.indexOf("%") ? g / 100 * i.width : g, h = -1 != f.indexOf("%") ? h / 100 * i.height : h, g = isNaN(g) ? 0 : g, h = isNaN(h) ? 0 : h, g -= c ? i.paddingLeft : i.paddingRight, h -= d ? i.paddingTop : i.paddingBottom, this.position.x = g, this.position.y = h
    }, g.prototype.layoutPosition = function () {
        var a = this.layout.size, b = this.layout.options, c = {}, d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
            e = b.isOriginLeft ? "left" : "right", f = b.isOriginLeft ? "right" : "left", g = this.position.x + a[d];
        c[e] = this.getXValue(g), c[f] = "";
        var h = b.isOriginTop ? "paddingTop" : "paddingBottom", i = b.isOriginTop ? "top" : "bottom",
            j = b.isOriginTop ? "bottom" : "top", k = this.position.y + a[h];
        c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
    }, g.prototype.getXValue = function (a) {
        var b = this.layout.options;
        return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
    }, g.prototype.getYValue = function (a) {
        var b = this.layout.options;
        return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
    }, g.prototype._transitionTo = function (a, b) {
        this.getPosition();
        var c = this.position.x, d = this.position.y, e = parseInt(a, 10), f = parseInt(b, 10),
            g = e === this.position.x && f === this.position.y;
        if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
        var h = a - c, i = b - d, j = {};
        j.transform = this.getTranslate(h, i), this.transition({
            to: j,
            onTransitionEnd: {transform: this.layoutPosition},
            isCleaning: !0
        })
    }, g.prototype.getTranslate = function (a, b) {
        var c = this.layout.options;
        return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, a = this.getXValue(a), b = this.getYValue(b), n ? "translate3d(" + a + ", " + b + ", 0)" : "translate(" + a + ", " + b + ")"
    }, g.prototype.goTo = function (a, b) {
        this.setPosition(a, b), this.layoutPosition()
    }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function (a, b) {
        this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
    }, g.prototype._nonTransition = function (a) {
        this.css(a.to), a.isCleaning && this._removeStyles(a.to);
        for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
    }, g.prototype._transition = function (a) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
        var b = this._transn;
        for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
        for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
        if (a.from) {
            this.css(a.from);
            var d = this.element.offsetHeight;
            d = null
        }
        this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
    };
    var r = "opacity," + h(q.transform || "transform");
    g.prototype.enableTransition = function () {
        this.isTransitioning || (this.css({
            transitionProperty: r,
            transitionDuration: this.layout.options.transitionDuration
        }), this.element.addEventListener(o, this, !1))
    }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function (a) {
        this.ontransitionend(a)
    }, g.prototype.onotransitionend = function (a) {
        this.ontransitionend(a)
    };
    var s = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
    g.prototype.ontransitionend = function (a) {
        if (a.target === this.element) {
            var b = this._transn, c = s[a.propertyName] || a.propertyName;
            if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                var d = b.onEnd[c];
                d.call(this), delete b.onEnd[c]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, g.prototype.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
    }, g.prototype._removeStyles = function (a) {
        var b = {};
        for (var c in a) b[c] = "";
        this.css(b)
    };
    var t = {transitionProperty: "", transitionDuration: ""};
    return g.prototype.removeTransitionStyles = function () {
        this.css(t)
    }, g.prototype.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, g.prototype.remove = function () {
        if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
        var a = this;
        this.once("transitionEnd", function () {
            a.removeElem()
        }), this.hide()
    }, g.prototype.reveal = function () {
        delete this.isHidden, this.css({display: ""});
        var a = this.layout.options, b = {}, c = this.getHideRevealTransitionEndProperty("visibleStyle");
        b[c] = this.onRevealTransitionEnd, this.transition({
            from: a.hiddenStyle,
            to: a.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }, g.prototype.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, g.prototype.getHideRevealTransitionEndProperty = function (a) {
        var b = this.layout.options[a];
        if (b.opacity) return "opacity";
        for (var c in b) return c
    }, g.prototype.hide = function () {
        this.isHidden = !0, this.css({display: ""});
        var a = this.layout.options, b = {}, c = this.getHideRevealTransitionEndProperty("hiddenStyle");
        b[c] = this.onHideTransitionEnd, this.transition({
            from: a.visibleStyle,
            to: a.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: b
        })
    }, g.prototype.onHideTransitionEnd = function () {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, g.prototype.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, g
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (c, d, e, f, g) {
        return b(a, c, d, e, f, g)
    }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
}(window, function (a, b, c, d, e, f) {
    "use strict";

    function g(a, b) {
        var c = e.getQueryElement(a);
        if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
        this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
        var d = ++k;
        this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
    }

    var h = a.console, i = a.jQuery, j = function () {
    }, k = 0, l = {};
    return g.namespace = "outlayer", g.Item = f, g.defaults = {
        containerStyle: {position: "relative"},
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
        visibleStyle: {opacity: 1, transform: "scale(1)"}
    }, e.extend(g.prototype, c.prototype), g.prototype.option = function (a) {
        e.extend(this.options, a)
    }, g.prototype._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
    }, g.prototype.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, g.prototype._itemize = function (a) {
        for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
            var g = b[e], h = new c(g, this);
            d.push(h)
        }
        return d
    }, g.prototype._filterFindItemElements = function (a) {
        return e.filterFindElements(a, this.options.itemSelector)
    }, g.prototype.getItemElements = function () {
        for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
        return a
    }, g.prototype.layout = function () {
        this._resetLayout(), this._manageStamps();
        var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, a), this._isLayoutInited = !0
    }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function () {
        this.getSize()
    }, g.prototype.getSize = function () {
        this.size = d(this.element)
    }, g.prototype._getMeasurement = function (a, b) {
        var c, f = this.options[a];
        f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
    }, g.prototype.layoutItems = function (a, b) {
        a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
    }, g.prototype._getItemsForLayout = function (a) {
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            var e = a[c];
            e.isIgnored || b.push(e)
        }
        return b
    }, g.prototype._layoutItems = function (a, b) {
        if (this._emitCompleteOnItems("layout", a), a && a.length) {
            for (var c = [], d = 0, e = a.length; e > d; d++) {
                var f = a[d], g = this._getItemLayoutPosition(f);
                g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
            }
            this._processLayoutQueue(c)
        }
    }, g.prototype._getItemLayoutPosition = function () {
        return {x: 0, y: 0}
    }, g.prototype._processLayoutQueue = function (a) {
        for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            this._positionItem(d.item, d.x, d.y, d.isInstant)
        }
    }, g.prototype._positionItem = function (a, b, c, d) {
        d ? a.goTo(b, c) : a.moveTo(b, c)
    }, g.prototype._postLayout = function () {
        this.resizeContainer()
    }, g.prototype.resizeContainer = function () {
        if (this.options.isResizingContainer) {
            var a = this._getContainerSize();
            a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
        }
    }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function (a, b) {
        if (void 0 !== a) {
            var c = this.size;
            c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
        }
    }, g.prototype._emitCompleteOnItems = function (a, b) {
        function c() {
            e.dispatchEvent(a + "Complete", null, [b])
        }

        function d() {
            g++, g === f && c()
        }

        var e = this, f = b.length;
        if (!b || !f) return void c();
        for (var g = 0, h = 0, i = b.length; i > h; h++) {
            var j = b[h];
            j.once(a, d)
        }
    }, g.prototype.dispatchEvent = function (a, b, c) {
        var d = b ? [b].concat(c) : c;
        if (this.emitEvent(a, d), i) if (this.$element = this.$element || i(this.element), b) {
            var e = i.Event(b);
            e.type = a, this.$element.trigger(e, c)
        } else this.$element.trigger(a, c)
    }, g.prototype.ignore = function (a) {
        var b = this.getItem(a);
        b && (b.isIgnored = !0)
    }, g.prototype.unignore = function (a) {
        var b = this.getItem(a);
        b && delete b.isIgnored
    }, g.prototype.stamp = function (a) {
        if (a = this._find(a)) {
            this.stamps = this.stamps.concat(a);
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this.ignore(d)
            }
        }
    }, g.prototype.unstamp = function (a) {
        if (a = this._find(a)) for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            e.removeFrom(this.stamps, d), this.unignore(d)
        }
    }, g.prototype._find = function (a) {
        return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
    }, g.prototype._manageStamps = function () {
        if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var a = 0, b = this.stamps.length; b > a; a++) {
                var c = this.stamps[a];
                this._manageStamp(c)
            }
        }
    }, g.prototype._getBoundingRect = function () {
        var a = this.element.getBoundingClientRect(), b = this.size;
        this._boundingRect = {
            left: a.left + b.paddingLeft + b.borderLeftWidth,
            top: a.top + b.paddingTop + b.borderTopWidth,
            right: a.right - (b.paddingRight + b.borderRightWidth),
            bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
        }
    }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function (a) {
        var b = a.getBoundingClientRect(), c = this._boundingRect, e = d(a), f = {
            left: b.left - c.left - e.marginLeft,
            top: b.top - c.top - e.marginTop,
            right: c.right - b.right - e.marginRight,
            bottom: c.bottom - b.bottom - e.marginBottom
        };
        return f
    }, g.prototype.handleEvent = function (a) {
        var b = "on" + a.type;
        this[b] && this[b](a)
    }, g.prototype.bindResize = function () {
        this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
    }, g.prototype.unbindResize = function () {
        this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
    }, g.prototype.onresize = function () {
        function a() {
            b.resize(), delete b.resizeTimeout
        }

        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var b = this;
        this.resizeTimeout = setTimeout(a, 100)
    }, g.prototype.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, g.prototype.needsResizeLayout = function () {
        var a = d(this.element), b = this.size && a;
        return b && a.innerWidth !== this.size.innerWidth
    }, g.prototype.addItems = function (a) {
        var b = this._itemize(a);
        return b.length && (this.items = this.items.concat(b)), b
    }, g.prototype.appended = function (a) {
        var b = this.addItems(a);
        b.length && (this.layoutItems(b, !0), this.reveal(b))
    }, g.prototype.prepended = function (a) {
        var b = this._itemize(a);
        if (b.length) {
            var c = this.items.slice(0);
            this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
        }
    }, g.prototype.reveal = function (a) {
        this._emitCompleteOnItems("reveal", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.reveal()
        }
    }, g.prototype.hide = function (a) {
        this._emitCompleteOnItems("hide", a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.hide()
        }
    }, g.prototype.revealItemElements = function (a) {
        var b = this.getItems(a);
        this.reveal(b)
    }, g.prototype.hideItemElements = function (a) {
        var b = this.getItems(a);
        this.hide(b)
    }, g.prototype.getItem = function (a) {
        for (var b = 0, c = this.items.length; c > b; b++) {
            var d = this.items[b];
            if (d.element === a) return d
        }
    }, g.prototype.getItems = function (a) {
        a = e.makeArray(a);
        for (var b = [], c = 0, d = a.length; d > c; c++) {
            var f = a[c], g = this.getItem(f);
            g && b.push(g)
        }
        return b
    }, g.prototype.remove = function (a) {
        var b = this.getItems(a);
        if (this._emitCompleteOnItems("remove", b), b && b.length) for (var c = 0, d = b.length; d > c; c++) {
            var f = b[c];
            f.remove(), e.removeFrom(this.items, f)
        }
    }, g.prototype.destroy = function () {
        var a = this.element.style;
        a.height = "", a.position = "", a.width = "";
        for (var b = 0, c = this.items.length; c > b; b++) {
            var d = this.items[b];
            d.destroy()
        }
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
    }, g.data = function (a) {
        a = e.getQueryElement(a);
        var b = a && a.outlayerGUID;
        return b && l[b]
    }, g.create = function (a, b) {
        function c() {
            g.apply(this, arguments)
        }

        return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function () {
            f.apply(this, arguments)
        }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
    }, g.Item = f, g
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
}(window, function (a) {
    "use strict";

    function b() {
        a.Item.apply(this, arguments)
    }

    b.prototype = new a.Item, b.prototype._create = function () {
        this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
    }, b.prototype.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var a = this.layout.options.getSortData, b = this.layout._sorters;
            for (var c in a) {
                var d = b[c];
                this.sortData[c] = d(this.element, this)
            }
        }
    };
    var c = b.prototype.destroy;
    return b.prototype.destroy = function () {
        c.apply(this, arguments), this.css({display: ""})
    }, b
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
}(window, function (a, b) {
    "use strict";

    function c(a) {
        this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
    }

    return function () {
        function a(a) {
            return function () {
                return b.prototype[a].apply(this.isotope, arguments)
            }
        }

        for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
            var g = d[e];
            c.prototype[g] = a(g)
        }
    }(), c.prototype.needsVerticalResizeLayout = function () {
        var b = a(this.isotope.element), c = this.isotope.size && b;
        return c && b.innerHeight != this.isotope.size.innerHeight
    }, c.prototype._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
    }, c.prototype.getColumnWidth = function () {
        this.getSegmentSize("column", "Width")
    }, c.prototype.getRowHeight = function () {
        this.getSegmentSize("row", "Height")
    }, c.prototype.getSegmentSize = function (a, b) {
        var c = a + b, d = "outer" + b;
        if (this._getMeasurement(c, d), !this[c]) {
            var e = this.getFirstItemSize();
            this[c] = e && e[d] || this.isotope.size["inner" + b]
        }
    }, c.prototype.getFirstItemSize = function () {
        var b = this.isotope.filteredItems[0];
        return b && b.element && a(b.element)
    }, c.prototype.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
    }, c.prototype.getSize = function () {
        this.isotope.getSize(), this.size = this.isotope.size
    }, c.modes = {}, c.create = function (a, b) {
        function d() {
            c.apply(this, arguments)
        }

        return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
    }, c
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
}(window, function (a, b, c) {
    var d = a.create("masonry");
    return d.prototype._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
        var a = this.cols;
        for (this.colYs = []; a--;) this.colYs.push(0);
        this.maxY = 0
    }, d.prototype.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var a = this.items[0], c = a && a.element;
            this.columnWidth = c && b(c).outerWidth || this.containerWidth
        }
        var d = this.columnWidth += this.gutter, e = this.containerWidth + this.gutter, f = e / d, g = d - e % d,
            h = g && 1 > g ? "round" : "floor";
        f = Math[h](f), this.cols = Math.max(f, 1)
    }, d.prototype.getContainerWidth = function () {
        var a = this.options.isFitWidth ? this.element.parentNode : this.element, c = b(a);
        this.containerWidth = c && c.innerWidth
    }, d.prototype._getItemLayoutPosition = function (a) {
        a.getSize();
        var b = a.size.outerWidth % this.columnWidth, d = b && 1 > b ? "round" : "ceil",
            e = Math[d](a.size.outerWidth / this.columnWidth);
        e = Math.min(e, this.cols);
        for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
            x: this.columnWidth * h,
            y: g
        }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
        return i
    }, d.prototype._getColGroup = function (a) {
        if (2 > a) return this.colYs;
        for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
            var e = this.colYs.slice(d, d + a);
            b[d] = Math.max.apply(Math, e)
        }
        return b
    }, d.prototype._manageStamp = function (a) {
        var c = b(a), d = this._getElementOffset(a), e = this.options.isOriginLeft ? d.left : d.right,
            f = e + c.outerWidth, g = Math.floor(e / this.columnWidth);
        g = Math.max(0, g);
        var h = Math.floor(f / this.columnWidth);
        h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
        for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
    }, d.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var a = {height: this.maxY};
        return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
    }, d.prototype._getContainerFitWidth = function () {
        for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
        return (this.cols - a) * this.columnWidth - this.gutter
    }, d.prototype.needsResizeLayout = function () {
        var a = this.containerWidth;
        return this.getContainerWidth(), a !== this.containerWidth
    }, d
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
}(window, function (a, b) {
    "use strict";

    function c(a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }

    var d = a.create("masonry"), e = d.prototype._getElementOffset, f = d.prototype.layout,
        g = d.prototype._getMeasurement;
    c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
    var h = d.prototype.measureColumns;
    d.prototype.measureColumns = function () {
        this.items = this.isotope.filteredItems, h.call(this)
    };
    var i = d.prototype._manageStamp;
    return d.prototype._manageStamp = function () {
        this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
    }, d
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
}(window, function (a) {
    "use strict";
    var b = a.create("fitRows");
    return b.prototype._resetLayout = function () {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, b.prototype._getItemLayoutPosition = function (a) {
        a.getSize();
        var b = a.size.outerWidth + this.gutter, c = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
        var d = {x: this.x, y: this.y};
        return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
    }, b.prototype._getContainerSize = function () {
        return {height: this.maxY}
    }, b
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
}(window, function (a) {
    "use strict";
    var b = a.create("vertical", {horizontalAlignment: 0});
    return b.prototype._resetLayout = function () {
        this.y = 0
    }, b.prototype._getItemLayoutPosition = function (a) {
        a.getSize();
        var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment, c = this.y;
        return this.y += a.size.outerHeight, {x: b, y: c}
    }, b.prototype._getContainerSize = function () {
        return {height: this.y}
    }, b
}), function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (c, d, e, f, g, h) {
        return b(a, c, d, e, f, g, h)
    }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
}(window, function (a, b, c, d, e, f, g) {
    function h(a, b) {
        return function (c, d) {
            for (var e = 0, f = a.length; f > e; e++) {
                var g = a[e], h = c.sortData[g], i = d.sortData[g];
                if (h > i || i > h) {
                    var j = void 0 !== b[g] ? b[g] : b, k = j ? 1 : -1;
                    return (h > i ? 1 : -1) * k
                }
            }
            return 0
        }
    }

    var i = a.jQuery, j = String.prototype.trim ? function (a) {
        return a.trim()
    } : function (a) {
        return a.replace(/^\s+|\s+$/g, "")
    }, k = document.documentElement, l = k.textContent ? function (a) {
        return a.textContent
    } : function (a) {
        return a.innerText
    }, m = b.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
    m.Item = f, m.LayoutMode = g, m.prototype._create = function () {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var a in g.modes) this._initLayoutMode(a)
    }, m.prototype.reloadItems = function () {
        this.itemGUID = 0, b.prototype.reloadItems.call(this)
    }, m.prototype._itemize = function () {
        for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
            var e = a[c];
            e.id = this.itemGUID++
        }
        return this._updateItemsSortData(a), a
    }, m.prototype._initLayoutMode = function (a) {
        var b = g.modes[a], c = this.options[a] || {};
        this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
    }, m.prototype.layout = function () {
        return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
    }, m.prototype._layout = function () {
        var a = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
    }, m.prototype.arrange = function (a) {
        function b() {
            d.reveal(c.needReveal), d.hide(c.needHide)
        }

        this.option(a), this._getIsInstant();
        var c = this._filter(this.items);
        this.filteredItems = c.matches;
        var d = this;
        this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
    }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function () {
        var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        return this._isInstant = a, a
    }, m.prototype._bindArrangeComplete = function () {
        function a() {
            b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
        }

        var b, c, d, e = this;
        this.once("layoutComplete", function () {
            b = !0, a()
        }), this.once("hideComplete", function () {
            c = !0, a()
        }), this.once("revealComplete", function () {
            d = !0, a()
        })
    }, m.prototype._filter = function (a) {
        var b = this.options.filter;
        b = b || "*";
        for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
            var i = a[g];
            if (!i.isIgnored) {
                var j = f(i);
                j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
            }
        }
        return {matches: c, needReveal: d, needHide: e}
    }, m.prototype._getFilterTest = function (a) {
        return i && this.options.isJQueryFiltering ? function (b) {
            return i(b.element).is(a)
        } : "function" == typeof a ? function (b) {
            return a(b.element)
        } : function (b) {
            return d(b.element, a)
        }
    }, m.prototype.updateSortData = function (a) {
        var b;
        a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
    }, m.prototype._getSorters = function () {
        var a = this.options.getSortData;
        for (var b in a) {
            var c = a[b];
            this._sorters[b] = n(c)
        }
    }, m.prototype._updateItemsSortData = function (a) {
        for (var b = a && a.length, c = 0; b && b > c; c++) {
            var d = a[c];
            d.updateSortData()
        }
    };
    var n = function () {
        function a(a) {
            if ("string" != typeof a) return a;
            var c = j(a).split(" "), d = c[0], e = d.match(/^\[(.+)\]$/), f = e && e[1], g = b(f, d),
                h = m.sortDataParsers[c[1]];
            return a = h ? function (a) {
                return a && h(g(a))
            } : function (a) {
                return a && g(a)
            }
        }

        function b(a, b) {
            var c;
            return c = a ? function (b) {
                return b.getAttribute(a)
            } : function (a) {
                var c = a.querySelector(b);
                return c && l(c)
            }
        }

        return a
    }();
    m.sortDataParsers = {
        parseInt: function (a) {
            return parseInt(a, 10)
        }, parseFloat: function (a) {
            return parseFloat(a)
        }
    }, m.prototype._sort = function () {
        var a = this.options.sortBy;
        if (a) {
            var b = [].concat.apply(a, this.sortHistory), c = h(b, this.options.sortAscending);
            this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
        }
    }, m.prototype._mode = function () {
        var a = this.options.layoutMode, b = this.modes[a];
        if (!b) throw new Error("No layout mode: " + a);
        return b.options = this.options[a], b
    }, m.prototype._resetLayout = function () {
        b.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, m.prototype._getItemLayoutPosition = function (a) {
        return this._mode()._getItemLayoutPosition(a)
    }, m.prototype._manageStamp = function (a) {
        this._mode()._manageStamp(a)
    }, m.prototype._getContainerSize = function () {
        return this._mode()._getContainerSize()
    }, m.prototype.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
    }, m.prototype.appended = function (a) {
        var b = this.addItems(a);
        if (b.length) {
            var c = this._filterRevealAdded(b);
            this.filteredItems = this.filteredItems.concat(c)
        }
    }, m.prototype.prepended = function (a) {
        var b = this._itemize(a);
        if (b.length) {
            this._resetLayout(), this._manageStamps();
            var c = this._filterRevealAdded(b);
            this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
        }
    }, m.prototype._filterRevealAdded = function (a) {
        var b = this._filter(a);
        return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
    }, m.prototype.insert = function (a) {
        var b = this.addItems(a);
        if (b.length) {
            var c, d, e = b.length;
            for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
            var f = this._filter(b).matches;
            for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
            for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
            this.reveal(f)
        }
    };
    var o = m.prototype.remove;
    return m.prototype.remove = function (a) {
        a = e.makeArray(a);
        var b = this.getItems(a);
        o.call(this, a);
        var c = b && b.length;
        if (c) for (var d = 0; c > d; d++) {
            var f = b[d];
            e.removeFrom(this.filteredItems, f)
        }
    }, m.prototype.shuffle = function () {
        for (var a = 0, b = this.items.length; b > a; a++) {
            var c = this.items[a];
            c.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, m.prototype._noTransition = function (a) {
        var b = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var c = a.call(this);
        return this.options.transitionDuration = b, c
    }, m.prototype.getFilteredItemElements = function () {
        for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
        return a
    }, m
});


/*
 * Gritter for jQuery
 * http://www.boedesign.com/
 *
 * Copyright (c) 2012 Jordan Boesch
 * Dual licensed under the MIT and GPL licenses.
 *
 * Date: February 24, 2012
 * Version: 1.7.4
 */

(function ($) {

    /**
     * Set it up as an object under the jQuery namespace
     */
    $.gritter = {};

    /**
     * Set up global options that the user can over-ride
     */
    $.gritter.options = {
        position: '',
        class_name: '', // could be set to 'gritter-light' to use white notifications
        fade_in_speed: 'medium', // how fast notifications fade in
        fade_out_speed: 1000, // how fast the notices fade out
        time: 6000 // hang on the screen for...
    }

    /**
     * Add a gritter notification to the screen
     * @see Gritter#add();
     */
    $.gritter.add = function (params) {

        try {
            return Gritter.add(params || {});
        } catch (e) {

            var err = 'Gritter Error: ' + e;
            (typeof(console) != 'undefined' && console.error) ?
                console.error(err, params) :
                alert(err);

        }

    }

    /**
     * Remove a gritter notification from the screen
     * @see Gritter#removeSpecific();
     */
    $.gritter.remove = function (id, params) {
        Gritter.removeSpecific(id, params || {});
    }

    /**
     * Remove all notifications
     * @see Gritter#stop();
     */
    $.gritter.removeAll = function (params) {
        Gritter.stop(params || {});
    }

    /**
     * Big fat Gritter object
     * @constructor (not really since its object literal)
     */
    var Gritter = {

        // Public - options to over-ride with $.gritter.options in "add"
        position: '',
        fade_in_speed: '',
        fade_out_speed: '',
        time: '',

        // Private - no touchy the private parts
        _custom_timer: 0,
        _item_count: 0,
        _is_setup: 0,
        _tpl_close: '<div class="gritter-close"></div>',
        _tpl_title: '<span class="gritter-title">[[title]]</span>',
        _tpl_item: '<div id="gritter-item-[[number]]" class="gritter-item-wrapper [[item_class]]" style="display:none"><div class="gritter-top"></div><div class="gritter-item">[[close]][[image]]<div class="[[class_name]]">[[title]]<p>[[text]]</p></div><div style="clear:both"></div></div><div class="gritter-bottom"></div></div>',
        _tpl_wrap: '<div id="gritter-notice-wrapper"></div>',

        /**
         * Add a gritter notification to the screen
         * @param {Object} params The object that contains all the options for drawing the notification
         * @return {Integer} The specific numeric id to that gritter notification
         */
        add: function (params) {
            // Handle straight text
            if (typeof(params) == 'string') {
                params = {text: params};
            }

            // We might have some issues if we don't have a title or text!
            if (!params.text) {
                throw 'You must supply "text" parameter.';
            }

            // Check the options and set them once
            if (!this._is_setup) {
                this._runSetup();
            }

            // Basics
            var title = params.title,
                text = params.text,
                image = params.image || '',
                sticky = params.sticky || false,
                item_class = params.class_name || $.gritter.options.class_name,
                position = $.gritter.options.position,
                time_alive = params.time || '';

            this._verifyWrapper();

            this._item_count++;
            var number = this._item_count,
                tmp = this._tpl_item;

            // Assign callbacks
            $(['before_open', 'after_open', 'before_close', 'after_close']).each(function (i, val) {
                Gritter['_' + val + '_' + number] = ($.isFunction(params[val])) ? params[val] : function () {
                }
            });

            // Reset
            this._custom_timer = 0;

            // A custom fade time set
            if (time_alive) {
                this._custom_timer = time_alive;
            }

            var image_str = (image != '') ? '<img src="' + image + '" class="gritter-image" />' : '',
                class_name = (image != '') ? 'gritter-with-image' : 'gritter-without-image';

            // String replacements on the template
            if (title) {
                title = this._str_replace('[[title]]', title, this._tpl_title);
            } else {
                title = '';
            }

            tmp = this._str_replace(
                ['[[title]]', '[[text]]', '[[close]]', '[[image]]', '[[number]]', '[[class_name]]', '[[item_class]]'],
                [title, text, this._tpl_close, image_str, this._item_count, class_name, item_class], tmp
            );

            // If it's false, don't show another gritter message
            if (this['_before_open_' + number]() === false) {
                return false;
            }

            $('#gritter-notice-wrapper').addClass(position).append(tmp);

            var item = $('#gritter-item-' + this._item_count);

            item.fadeIn(this.fade_in_speed, function () {
                Gritter['_after_open_' + number]($(this));
            });

            if (!sticky) {
                this._setFadeTimer(item, number);
            }

            // Bind the hover/unhover states
            $(item).bind('mouseenter mouseleave', function (event) {
                if (event.type == 'mouseenter') {
                    if (!sticky) {
                        Gritter._restoreItemIfFading($(this), number);
                    }
                }
                else {
                    if (!sticky) {
                        Gritter._setFadeTimer($(this), number);
                    }
                }
                Gritter._hoverState($(this), event.type);
            });

            // Clicking (X) makes the perdy thing close
            $(item).find('.gritter-close').click(function () {
                Gritter.removeSpecific(number, {}, null, true);
            });

            return number;

        },

        /**
         * If we don't have any more gritter notifications, get rid of the wrapper using this check
         * @private
         * @param {Integer} unique_id The ID of the element that was just deleted, use it for a callback
         * @param {Object} e The jQuery element that we're going to perform the remove() action on
         * @param {Boolean} manual_close Did we close the gritter dialog with the (X) button
         */
        _countRemoveWrapper: function (unique_id, e, manual_close) {

            // Remove it then run the callback function
            e.remove();
            this['_after_close_' + unique_id](e, manual_close);

            // Check if the wrapper is empty, if it is.. remove the wrapper
            if ($('.gritter-item-wrapper').length == 0) {
                $('#gritter-notice-wrapper').remove();
            }

        },

        /**
         * Fade out an element after it's been on the screen for x amount of time
         * @private
         * @param {Object} e The jQuery element to get rid of
         * @param {Integer} unique_id The id of the element to remove
         * @param {Object} params An optional list of params to set fade speeds etc.
         * @param {Boolean} unbind_events Unbind the mouseenter/mouseleave events if they click (X)
         */
        _fade: function (e, unique_id, params, unbind_events) {

            var params = params || {},
                fade = (typeof(params.fade) != 'undefined') ? params.fade : true,
                fade_out_speed = params.speed || this.fade_out_speed,
                manual_close = unbind_events;

            this['_before_close_' + unique_id](e, manual_close);

            // If this is true, then we are coming from clicking the (X)
            if (unbind_events) {
                e.unbind('mouseenter mouseleave');
            }

            // Fade it out or remove it
            if (fade) {

                e.animate({
                    opacity: 0
                }, fade_out_speed, function () {
                    e.animate({height: 0}, 300, function () {
                        Gritter._countRemoveWrapper(unique_id, e, manual_close);
                    })
                })

            }
            else {

                this._countRemoveWrapper(unique_id, e);

            }

        },

        /**
         * Perform actions based on the type of bind (mouseenter, mouseleave)
         * @private
         * @param {Object} e The jQuery element
         * @param {String} type The type of action we're performing: mouseenter or mouseleave
         */
        _hoverState: function (e, type) {

            // Change the border styles and add the (X) close button when you hover
            if (type == 'mouseenter') {

                e.addClass('hover');

                // Show close button
                e.find('.gritter-close').show();

            }
            // Remove the border styles and hide (X) close button when you mouse out
            else {

                e.removeClass('hover');

                // Hide close button
                e.find('.gritter-close').hide();

            }

        },

        /**
         * Remove a specific notification based on an ID
         * @param {Integer} unique_id The ID used to delete a specific notification
         * @param {Object} params A set of options passed in to determine how to get rid of it
         * @param {Object} e The jQuery element that we're "fading" then removing
         * @param {Boolean} unbind_events If we clicked on the (X) we set this to true to unbind mouseenter/mouseleave
         */
        removeSpecific: function (unique_id, params, e, unbind_events) {

            if (!e) {
                var e = $('#gritter-item-' + unique_id);
            }

            // We set the fourth param to let the _fade function know to
            // unbind the "mouseleave" event.  Once you click (X) there's no going back!
            this._fade(e, unique_id, params || {}, unbind_events);

        },

        /**
         * If the item is fading out and we hover over it, restore it!
         * @private
         * @param {Object} e The HTML element to remove
         * @param {Integer} unique_id The ID of the element
         */
        _restoreItemIfFading: function (e, unique_id) {

            clearTimeout(this['_int_id_' + unique_id]);
            e.stop().css({opacity: '', height: ''});

        },

        /**
         * Setup the global options - only once
         * @private
         */
        _runSetup: function () {

            for (opt in $.gritter.options) {
                this[opt] = $.gritter.options[opt];
            }
            this._is_setup = 1;

        },

        /**
         * Set the notification to fade out after a certain amount of time
         * @private
         * @param {Object} item The HTML element we're dealing with
         * @param {Integer} unique_id The ID of the element
         */
        _setFadeTimer: function (e, unique_id) {

            var timer_str = (this._custom_timer) ? this._custom_timer : this.time;
            this['_int_id_' + unique_id] = setTimeout(function () {
                Gritter._fade(e, unique_id);
            }, timer_str);

        },

        /**
         * Bring everything to a halt
         * @param {Object} params A list of callback functions to pass when all notifications are removed
         */
        stop: function (params) {

            // callbacks (if passed)
            var before_close = ($.isFunction(params.before_close)) ? params.before_close : function () {
            };
            var after_close = ($.isFunction(params.after_close)) ? params.after_close : function () {
            };

            var wrap = $('#gritter-notice-wrapper');
            before_close(wrap);
            wrap.fadeOut(function () {
                $(this).remove();
                after_close();
            });

        },

        /**
         * An extremely handy PHP function ported to JS, works well for templating
         * @private
         * @param {String/Array} search A list of things to search for
         * @param {String/Array} replace A list of things to replace the searches with
         * @return {String} sa The output
         */
        _str_replace: function (search, replace, subject, count) {

            var i = 0, j = 0, temp = '', repl = '', sl = 0, fl = 0,
                f = [].concat(search),
                r = [].concat(replace),
                s = subject,
                ra = r instanceof Array, sa = s instanceof Array;
            s = [].concat(s);

            if (count) {
                this.window[count] = 0;
            }

            for (i = 0, sl = s.length; i < sl; i++) {

                if (s[i] === '') {
                    continue;
                }

                for (j = 0, fl = f.length; j < fl; j++) {

                    temp = s[i] + '';
                    repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
                    s[i] = (temp).split(f[j]).join(repl);

                    if (count && s[i] !== temp) {
                        this.window[count] += (temp.length - s[i].length) / f[j].length;
                    }

                }
            }

            return sa ? s : s[0];

        },

        /**
         * A check to make sure we have something to wrap our notices with
         * @private
         */
        _verifyWrapper: function () {

            if ($('#gritter-notice-wrapper').length == 0) {
                $('body').append(this._tpl_wrap);
            }

        }

    }

})(jQuery);
/*
 * Title: jQuery Etalage plugin
 * Author: Berend de Jong, Frique
 * Author URI: http://www.frique.me/
 * Version: 1.3.3 (20130226.1)
 */

(function ($) {
    $.fn.etalage = function (options) {

        // OPTION DEFAULTS
        var o = $.extend({
            align: 'left',            // Align of the Etalage container. The zoom area will appear on the opposite side ('left'/'right')
            thumb_image_width: 320,       // The large thumbnail width (excluding borders / padding) (value in pixels)
            thumb_image_height: 320,      // The large thumbnail height (excluding borders / padding) (value in pixels)
            source_image_width: 1040,     // The source/zoomed image width (not the frame around it) (value in pixels)
            source_image_height: 1040,      // The source/zoomed image height (not the frame around it) (value in pixels)
            zoom_area_width: 600,       // Width of the zoomed image frame (including borders, padding) (value in pixels)
            zoom_area_height: 'justify',    // Height of the zoomed image frame (including borders, padding) (value in pixels / 'justify' = height of large thumb + small thumbs)
            zoom_area_distance: 10,       // Distance between the zoom area and thumbnail (value in pixels)
            zoom_easing: true,          // Ease the animation while moving the zoomed image (true/false)
            click_to_zoom: false,       // Will start zooming when image is clicked instead of when hovering (when true, click-callback functions are disabled) (true/false)
            zoom_element: 'auto',       // Supply your custom zoom area element as a CSS type selector ('auto'/'#selector'/'.selector')
            show_descriptions: true,      // Shows the description area if a title attribute is given to the source image (true/false)
            description_location: 'bottom',   // Location of the description area ('top'/'bottom')
            description_opacity: 0.7,     // Opacity of the description area (except for IE) (number between or equal to 0-1)
            small_thumbs: 3,          // How many small thumbnails will be visible underneath the large thumbnail (minimum of 3) (number)
            smallthumb_inactive_opacity: 0.4, // Opacity of the inactive small thumbnails (number between or equal to 0-1)
            smallthumb_hide_single: true,   // Don't show the small thumb when there is only 1 image (true/false)
            smallthumb_select_on_hover: false,  // This will scroll through the small thumbnails when hovering them, instead of clicking them (true/false)
            smallthumbs_position: 'bottom',   // Where to position the row of small thumbnails ('top' / 'bottom' / 'left' / 'right')
            magnifier_opacity: 0.5,       // Opacity of the magnifier area (does not apply if magnifier_invert is true) (number between or equal to 0-1)
            magnifier_invert: true,       // Make the large thumbnail clear through the magnifier, opaque around it (opacity is the value of magnifier_opacity) (true/false)
            show_icon: true,          // Shows the icon image in the middle of the magnifier (only if magnifier_invert is false) and left-bottom of large thumb (true/false)
            icon_offset: 20,          // The icon's offset to the left-bottom corner (value in pixels)
            hide_cursor: false,         // Hides the cursor when hovering the large thumbnail (only works in some browsers) (true/false)
            show_hint: false,         // Show "hint" until image is zoomed for the first time (true/false)
            hint_offset: 15,          // The hint's offset to the right-top corner (value in pixels)
            speed: 600,             // All animation speeds are based on this setting (value in ms)
            autoplay: true,           // Makes the thumbs switch automatically when not interacting (at each autoplay_interval below) (true/false)
            autoplay_interval: 6000,      // Time showing each image if autoplay is on (value in ms)
            keyboard: true,           // Left/right arrow keys to navigate (true/false)
            right_to_left: false,       // Makes the thumbnails slide from right to left and the caption texts RTL (true/false)
            // Callback functions:        // These functions are automatically run when certain events trigger. Assign your own behaviour as a plugin option:
            click_callback: function () {     // Provide your own callback for the click event (function). Takes 2 arguments: image_anchor, instance_id
                return true;
            },
            change_callback: function () {    // Provide your own callback for the change event (thumb switching) (function). Takes 2 arguments: image_anchor, instance_id
                return true;
            }
        }, options);

        $.each(this, function () {
            var $container = $(this);

            // Verify if this is a UL, has atleast 1 LI and 1 source image
            if ($container.is('ul') && $container.children('li').length && $container.find('img.etalage_source_image').length) {

                var i, j, src, thumb_id, magnifier_opacity, autotimer, description, container_outerwidth,
                    smallthumbs_overflow, css,
                    instance_id = $container.attr('id'),
                    faster = Math.floor(o.speed * 0.7),
                    zoom_follow_speed = Math.round(o.speed / 100),
                    st_moving = false,
                    st_steps = false,
                    ie6 = false,
                    preview = true,
                    clicked_to_zoom = false,
                    zoom_move_timer = 0,
                    cur_zoomx = 0,
                    cur_zoomy = 0,
                    new_zoomx = 0,
                    new_zoomy = 0,
                    smallthumbs_align = 'hori';

                if (typeof instance_id === 'undefined' || !instance_id) {
                    instance_id = '[no id]';
                }

                if (o.smallthumbs_position === 'left' || o.smallthumbs_position === 'right') {
                    smallthumbs_align = 'vert';
                }

                // IE specifics
                if (typeof $.browser === 'object' && $.browser.msie) {
                    if ($.browser.version < 9) {
                        preview = false;
                        if ($.browser.version < 7) {
                            ie6 = true;
                        }
                    }
                }

// NEW ELEMENTS & CACHE
                $container.addClass('etalage').show();
                var $thumbs = $container.children('li').addClass('etalage_thumb');
                $thumbs.first().show().addClass('etalage_thumb_active');

                var images = $thumbs.length,
                    autoplay = o.autoplay;
                if (images < 2) {
                    autoplay = false;
                }

                if (o.align === 'right') {
                    $container.addClass('etalage_right');
                }

                // Add/generate large thumbs (& check for existing thumb/source images)
                $.each($thumbs, function (i) {
                    i += 1;
                    var $t = $(this),
                        $t_thumb = $t.find('.etalage_thumb_image').removeAttr('alt').show(),
                        $t_source = $t.find('.etalage_source_image'),
                        $t_anchor = $t.find('a');
                    $t.data('id', i).addClass('thumb_' + i);
                    // No thumb, but source
                    if (!$t_thumb.length && $t_source.length) {
                        $t.prepend('<img class="etalage_thumb_image" src="' + $t_source.attr('src') + '" />');
                    }
                    // No thumb and no source
                    else if (!$t_thumb.length && !$t_source.length) {
                        $t.remove();
                    }
                    // Add anchor data to large thumbnail
                    if ($t_anchor.length) {
                        $t.find('.etalage_thumb_image').data('anchor', $t_anchor.attr('href'));
                    }
                });
                var $thumb_images = $thumbs.find('.etalage_thumb_image').css({
                    width: o.thumb_image_width,
                    height: o.thumb_image_height
                }).show();
                $.each($thumb_images, function () {
                    $(this).data('src', this.src); //todo
                });

                // Add magnifier
                var $magnifier = $('<li class="etalage_magnifier"><div><img /></div></li>').appendTo($container),
                    $magnifier_img_area = $magnifier.children('div'),
                    $magnifier_img = $magnifier_img_area.children('img');

                // Add zoom icon
                var $icon = $('<li class="etalage_icon">&nbsp;</li>').appendTo($container);
                if (o.show_icon) {
                    $icon.show();
                }

                // Add hint
                var $hint;
                if (o.show_hint) {
                    $hint = $('<li class="etalage_hint">&nbsp;</li>').appendTo($container).show();
                }

                // Add zoom area
                var $zoom,
                    zoom_element = o.zoom_element;
                if (zoom_element !== 'auto' && zoom_element && $(zoom_element).length) {
                    $zoom = $(zoom_element)
                        .addClass('etalage_zoom_area')
                        .html('<div><img class="etalage_zoom_img" /></div>');
                } else {
                    zoom_element = 'auto';
                    $zoom = $('<li class="etalage_zoom_area"><div><img class="etalage_zoom_img" /></div></li>').appendTo($container);
                }
                var $zoom_img_area = $zoom.children('div'),
                    $zoom_preview;
                if (preview) {
                    $zoom_preview = $('<img class="etalage_zoom_preview" />').css({
                        width: o.source_image_width,
                        height: o.source_image_height,
                        opacity: 0.3
                    }).prependTo($zoom_img_area).show();
                }
                var $zoom_img = $zoom_img_area.children('.etalage_zoom_img').css({
                    width: o.source_image_width,
                    height: o.source_image_height
                });

                // Add description area
                var $description;
                if (o.show_descriptions) {
                    $description = $('<div class="etalage_description' + ((o.right_to_left) ? ' rtl' : '') + '"></div>').prependTo($zoom);
                }

                // Add/generate smallthumbs
                var $smallthumbs,
                    $smallthumbs_ul,
                    $smallthumb,
                    $smallthumb_images,
                    smallthumbs,
                    small_thumbs = o.small_thumbs;
                if (images > 1 || !o.smallthumb_hide_single) {
                    $smallthumbs = $('<li class="etalage_small_thumbs"><ul></ul></li>').appendTo($container);
                    $smallthumbs_ul = $smallthumbs.children('ul');
                    $.each($thumb_images, function () {
                        var $t = $(this);
                        src = $t.data('src');
                        thumb_id = $t.parents('.etalage_thumb').data('id');
                        $('<li><img class="etalage_small_thumb" src="' + src + '" /></li>').data('thumb_id', thumb_id).appendTo($smallthumbs_ul);
                    });
                    $smallthumb = $smallthumbs_ul.children('li').css({opacity: o.smallthumb_inactive_opacity});
                    if (small_thumbs < 3) {
                        small_thumbs = 3;
                    }
                    // If more smallthumbs than visible
                    if (images > small_thumbs) {
                        // Add extra thumb on each side
                        src = $thumb_images.eq(images - 1).data('src');
                        thumb_id = $thumbs.eq(images - 1).data('id');
                        $('<li class="etalage_smallthumb_first"><img class="etalage_small_thumb" src="' + src + '" /></li>')
                            .data('src', src)
                            .data('thumb_id', thumb_id)
                            .css({opacity: o.smallthumb_inactive_opacity})
                            .prependTo($smallthumbs_ul);
                        src = $thumb_images.eq(0).data('src');
                        thumb_id = $thumbs.eq(0).data('id');
                        $('<li><img class="etalage_small_thumb" src="' + src + '" /></li>')
                            .data('src', src)
                            .data('thumb_id', thumb_id)
                            .css({opacity: o.smallthumb_inactive_opacity})
                            .appendTo($smallthumbs_ul);
                        $smallthumb = $smallthumbs_ul.children('li');

                        // Prepare for moving them left/right / up/down
                        $smallthumb.eq(small_thumbs - 1).addClass('etalage_smallthumb_last');
                        // Set first active smallthumb
                        $smallthumb.eq(1).addClass('etalage_smallthumb_active').css({opacity: 1});
                    }
                    // Smallthumbs are within boundries
                    else {
                        $smallthumb.eq(0).addClass('etalage_smallthumb_active').css({opacity: 1});
                    }
                    // Apply id
                    $.each($smallthumb, function (i) {
                        $(this).data('id', (i + 1));
                    });
                    $smallthumb_images = $smallthumb.children('img');
                    smallthumbs = $smallthumb.length;
                    // Vertical
                    if (smallthumbs_align === 'vert') {
                        $smallthumb.addClass('vertical');
                    }
                }

// PREPARE
                // Magnifier invert option
                if (o.magnifier_invert) {
                    magnifier_opacity = 1;
                } else {
                    magnifier_opacity = o.magnifier_opacity;
                }

                // Determine (generated) dimensions
                var thumb_border = parseInt($thumbs.css('borderLeftWidth'), 10) + parseInt($thumbs.css('borderRightWidth'), 10) + parseInt($thumb_images.css('borderLeftWidth'), 10) + parseInt($thumb_images.css('borderRightWidth'), 10),
                    thumb_margin = parseInt($thumbs.css('marginLeft'), 10) + parseInt($thumbs.css('marginRight'), 10),
                    thumb_padding = parseInt($thumbs.css('paddingLeft'), 10) + parseInt($thumbs.css('paddingRight'), 10) + parseInt($thumb_images.css('marginLeft'), 10) + parseInt($thumb_images.css('marginRight'), 10) + parseInt($thumb_images.css('paddingLeft'), 10) + parseInt($thumb_images.css('paddingRight'), 10),
                    thumb_outerwidth = o.thumb_image_width + thumb_border + thumb_margin + thumb_padding,
                    thumb_outerheight = o.thumb_image_height + thumb_border + thumb_margin + thumb_padding,
                    smallthumb_border = 0,
                    smallthumb_margin = 0,
                    smallthumb_padding = 0,
                    smallthumb_width = 0,
                    smallthumb_height = 0,
                    smallthumb_outerwidth = 0,
                    smallthumb_outerheight = 0;
                if (images > 1 || !o.smallthumb_hide_single) {
                    smallthumb_border = parseInt($smallthumb.css('borderLeftWidth'), 10) + parseInt($smallthumb.css('borderRightWidth'), 10) + parseInt($smallthumb_images.css('borderLeftWidth'), 10) + parseInt($smallthumb_images.css('borderRightWidth'), 10);
                    smallthumb_margin = parseInt($smallthumb.css('marginTop'), 10);
                    smallthumb_padding = parseInt($smallthumb.css('paddingLeft'), 10) + parseInt($smallthumb.css('paddingRight'), 10) + parseInt($smallthumb_images.css('marginLeft'), 10) + parseInt($smallthumb_images.css('marginRight'), 10) + parseInt($smallthumb_images.css('paddingLeft'), 10) + parseInt($smallthumb_images.css('paddingRight'), 10);
                    if (smallthumbs_align === 'vert') {
                        smallthumb_height = Math.round((thumb_outerheight - ((small_thumbs - 1) * smallthumb_margin)) / small_thumbs) - (smallthumb_border + smallthumb_padding);
                        smallthumb_width = Math.round((o.thumb_image_width * smallthumb_height) / o.thumb_image_height);
                        smallthumb_outerwidth = smallthumb_width + smallthumb_border + smallthumb_padding;
                        smallthumb_outerheight = smallthumb_height + smallthumb_border + smallthumb_padding;
                    } else {
                        smallthumb_width = Math.round((thumb_outerwidth - ((small_thumbs - 1) * smallthumb_margin)) / small_thumbs) - (smallthumb_border + smallthumb_padding);
                        smallthumb_height = Math.round((o.thumb_image_height * smallthumb_width) / o.thumb_image_width);
                        smallthumb_outerwidth = smallthumb_width + smallthumb_border + smallthumb_padding;
                        smallthumb_outerheight = smallthumb_height + smallthumb_border + smallthumb_padding;
                    }
                }

                var zoom_border = parseInt($zoom.css('borderTopWidth'), 10),
                    zoom_margin = parseInt(o.zoom_area_distance, 10),
                    zoom_padding = parseInt($zoom.css('paddingTop'), 10),
                    zoom_area_width,
                    zoom_area_height;
                // If source image width is smaller than zoom area
                if ((o.zoom_area_width - (zoom_border * 2) - (zoom_padding * 2)) > o.source_image_width) {
                    zoom_area_width = o.source_image_width;
                } else {
                    zoom_area_width = o.zoom_area_width - (zoom_border * 2) - (zoom_padding * 2);
                }
                if (o.zoom_area_height === 'justify') {
                    zoom_area_height = (thumb_outerheight + smallthumb_margin + smallthumb_outerheight) - (zoom_border * 2) - (zoom_padding * 2);
                } else {
                    zoom_area_height = o.zoom_area_height - (zoom_border * 2) - (zoom_padding * 2);
                }
                // If source image height is smaller than zoom area
                if (zoom_area_height > o.source_image_height) {
                    zoom_area_height = o.source_image_height;
                }
                var description_border,
                    description_margin,
                    description_padding,
                    description_width;
                if (o.show_descriptions) {
                    description_border = parseInt($description.css('borderLeftWidth'), 10) + parseInt($description.css('borderRightWidth'), 10);
                    description_margin = parseInt($description.css('marginLeft'), 10) + parseInt($description.css('marginRight'), 10);
                    description_padding = parseInt($description.css('paddingLeft'), 10) + parseInt($description.css('paddingRight'), 10);
                    description_width = zoom_area_width - description_border - description_margin - description_padding;
                }
                // Add iframe underlay to resolve IE6 <select> tag bug
                var $ie6_iframe_fix;
                if (ie6) {
                    $ie6_iframe_fix = $('<iframe marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="javascript:\'<html></html>\'"></iframe>')
                        .css({position: 'absolute', zIndex: 1})
                        .prependTo($zoom);
                }

                var magnifier_border = parseInt($magnifier.css('borderTopWidth'), 10),
                    magnifier_top = parseInt($thumbs.css('borderTopWidth'), 10) +
                        parseInt($thumbs.css('marginTop'), 10) +
                        parseInt($thumbs.css('paddingTop'), 10) +
                        parseInt($thumb_images.css('borderTopWidth'), 10) +
                        parseInt($thumb_images.css('marginTop'), 10) -
                        magnifier_border,
                    magnifier_left = $thumb_images.offset().left - $container.offset().left - magnifier_border;
                if (o.smallthumbs_position === 'left') {
                    magnifier_left = magnifier_left + smallthumb_outerwidth + smallthumb_margin;
                } else if (o.smallthumbs_position === 'top') {
                    magnifier_top = magnifier_top + smallthumb_outerheight + smallthumb_margin;
                }
                var magnifier_width = Math.round(zoom_area_width * (o.thumb_image_width / o.source_image_width)),
                    magnifier_height = Math.round(zoom_area_height * (o.thumb_image_height / o.source_image_height)),
                    magnifier_bottom = magnifier_top + o.thumb_image_height - magnifier_height,
                    magnifier_right = magnifier_left + o.thumb_image_width - magnifier_width,
                    magnifier_center_x = Math.round(magnifier_width / 2),
                    magnifier_center_y = Math.round(magnifier_height / 2),
                    hint_top,
                    hint_right;
                if (o.show_hint) {
                    hint_top = parseInt(o.hint_offset, 10) + parseInt($hint.css('marginTop'), 10);
                    hint_right = parseInt(o.hint_offset, 10) + parseInt($hint.css('marginRight'), 10);
                    if (o.smallthumbs_position === 'right') {
                        hint_right = hint_right - smallthumb_outerwidth - smallthumb_margin;
                    }
                }

// RESIZE AND REPOSITION ELEMENTS
                // Container
                if (smallthumbs_align === 'vert') {
                    container_outerwidth = thumb_outerwidth + smallthumb_margin + smallthumb_outerwidth;
                    $container.css({width: container_outerwidth, height: thumb_outerheight});
                } else {
                    container_outerwidth = thumb_outerwidth;
                    $container.css({
                        width: container_outerwidth,
                        height: thumb_outerheight + smallthumb_margin + smallthumb_outerheight
                    });
                }
                // Icon
                if (o.show_icon) {
                    css = {
                        top: thumb_outerheight - $icon.outerHeight(true) - parseInt(o.icon_offset, 10),
                        left: parseInt(o.icon_offset, 10)
                    };
                    if (o.smallthumbs_position === 'left') {
                        css.left = smallthumb_outerwidth + smallthumb_margin + parseInt(o.icon_offset, 10);
                    } else if (o.smallthumbs_position === 'top') {
                        css.top += smallthumb_outerheight + smallthumb_margin;
                    }
                    $icon.css(css);
                }
                // Hint
                if (o.show_hint) {
                    $hint.css({margin: 0, top: -hint_top, right: -hint_right});
                }
                // Magnifier
                $magnifier_img.css({margin: 0, padding: 0, width: o.thumb_image_width, height: o.thumb_image_height});
                $magnifier_img_area.css({margin: 0, padding: 0, width: magnifier_width, height: magnifier_height});
                css = {
                    margin: 0,
                    padding: 0,
                    left: (magnifier_right - magnifier_left) / 2,
                    top: (magnifier_bottom - magnifier_top) / 2
                };
                if (o.smallthumbs_position === 'left') {
                    css.left = '+=' + smallthumb_outerwidth + smallthumb_margin;
                } else if (o.smallthumbs_position === 'top') {
                    css.top = '+=' + smallthumb_outerheight + smallthumb_margin;
                }
                $magnifier.css(css).hide();
                // Zoom area
                $zoom_img_area.css({width: zoom_area_width, height: zoom_area_height});
                css = {margin: 0, opacity: 0};
                if (o.align === 'right' && zoom_element === 'auto') {
                    css.left = -(zoom_area_width + (zoom_border * 2) + (zoom_padding * 2) + zoom_margin);
                } else if (zoom_element === 'auto') {
                    css.left = container_outerwidth + zoom_margin;
                }
                $zoom.css(css).hide();
                // Descriptions
                if (o.show_descriptions) {
                    css = {
                        width: description_width,
                        bottom: zoom_padding,
                        left: zoom_padding,
                        opacity: o.description_opacity
                    };
                    if (o.description_location === 'top') {
                        css.top = zoom_padding;
                        css.bottom = 'auto';
                    }
                    $description.css(css).hide();
                }
                // Small thumbs
                if (images > 1 || !o.smallthumb_hide_single) {
                    if (smallthumbs_align === 'vert') {
                        css = {top: 0, height: thumb_outerheight};
                        if (o.smallthumbs_position === 'left') {
                            $thumbs.css({left: smallthumb_outerwidth + smallthumb_margin});
                        } else {
                            css.marginLeft = thumb_outerwidth + smallthumb_margin;
                        }
                        $smallthumbs.css(css);
                        $smallthumbs_ul.css({height: (smallthumb_outerheight * smallthumbs) + (smallthumbs * smallthumb_margin) + 100}); //100 = some extra to prevent a browser zoom glitch fix
                        $smallthumb_images.css({
                            width: smallthumb_width,
                            height: smallthumb_height
                        }).attr('height', smallthumb_height);
                        $smallthumb.css({margin: 0, marginBottom: smallthumb_margin});
                    } else {
                        css = {width: thumb_outerwidth};
                        if (o.smallthumbs_position === 'top') {
                            $thumbs.css({top: smallthumb_outerheight + smallthumb_margin});
                        } else {
                            css.top = thumb_outerheight + smallthumb_margin;
                        }
                        $smallthumbs.css(css);
                        $smallthumbs_ul.css({width: (smallthumb_outerwidth * smallthumbs) + (smallthumbs * smallthumb_margin) + 100}); //100 = some extra to prevent a browser zoom glitch fix
                        $smallthumb_images.css({
                            width: smallthumb_width,
                            height: smallthumb_height
                        }).attr('width', smallthumb_width);
                        $smallthumb.css({margin: 0, marginRight: smallthumb_margin});
                    }

                    // Smallthumbs overflow fix for unmatching space (width/height of visible smallthumbs + their margins is more than the container width/height:
                    if (smallthumbs_align === 'vert') {
                        smallthumbs_overflow = ((smallthumb_outerheight * small_thumbs) + ((small_thumbs - 1) * smallthumb_margin)) - thumb_outerheight;
                    } else {
                        smallthumbs_overflow = ((smallthumb_outerwidth * small_thumbs) + ((small_thumbs - 1) * smallthumb_margin)) - thumb_outerwidth;
                    }
                    // Overflow*1px decrease
                    if (smallthumbs_overflow > 0) {
                        // Each set
                        for (i = 1; i <= (smallthumbs - 1); i = i + (small_thumbs - 1)) {
                            j = 1;
                            // Each smallthumb
                            for (j; j <= smallthumbs_overflow; j += 1) {
                                if (smallthumbs_align === 'vert') {
                                    $smallthumb.eq(i + j - 1).css({marginBottom: (smallthumb_margin - 1)});
                                } else {
                                    $smallthumb.eq(i + j - 1).css({marginRight: (smallthumb_margin - 1)});
                                }
                            }
                        }
                    }
                    // Overflow*1px increase
                    else if (smallthumbs_overflow < 0) {
                        for (i = 1; i <= (smallthumbs - 1); i = i + (small_thumbs - 1)) {
                            j = 1;
                            // Each smallthumb
                            for (j; j <= (-smallthumbs_overflow); j += 1) {
                                if (smallthumbs_align === 'vert') {
                                    $smallthumb.eq(i + j - 1).css({marginBottom: (smallthumb_margin + 1)});
                                    $smallthumbs_ul.css({height: parseInt($smallthumbs_ul.css('height'), 10) + 1});
                                } else {
                                    $smallthumb.eq(i + j - 1).css({marginRight: (smallthumb_margin + 1)});
                                    $smallthumbs_ul.css({width: parseInt($smallthumbs_ul.css('width'), 10) + 1});
                                }
                            }
                        }
                    }
                }

                if (o.show_icon && !o.magnifier_invert) {
                    $magnifier.css({background: $magnifier.css('background-color') + ' ' + $icon.css('background-image') + ' center no-repeat'});
                }
                if (o.hide_cursor) {
                    $magnifier.add($icon).css({cursor: 'none'});
                }
                if (ie6) {
                    $ie6_iframe_fix.css({width: $zoom_img_area.css('width'), height: $zoom_img_area.css('height')});
                }

// INITIATE FIRST RUN

                var $current_thumb = $thumbs.first().find('.etalage_thumb_image'),
                    $current_source = $thumbs.first().find('.etalage_source_image');
                if (o.magnifier_invert) {
                    $magnifier_img.attr('src', $current_thumb.data('src')).show();
                }
                if (preview) {
                    $zoom_preview.attr('src', $current_thumb.data('src'));
                }
                $zoom_img.attr('src', $current_source.attr('src'));
                if (o.show_descriptions) {
                    description = $current_source.attr('title');
                    if (description) {
                        $description.html(description).show();
                    }
                }

// FUNCTIONS

                // Autoplay
                var stopAutoplay = function () {
                    if (autotimer) {
                        clearInterval(autotimer);
                        autotimer = false;
                    }
                };
                var startAutoplay = function () {
                    if (autotimer) {
                        stopAutoplay();
                    }
                    autotimer = setInterval(function () {
                        next();
                    }, o.autoplay_interval);
                };

                // Start zooming
                var start_zoom = function () {
                    $magnifier.stop().fadeTo(faster, magnifier_opacity);
                    $icon.stop().animate({opacity: 0}, faster);
                    $zoom.stop().show().animate({opacity: 1}, faster);
                    // Magnifier invert option
                    if (o.magnifier_invert) {
                        $current_thumb.stop().animate({opacity: o.magnifier_opacity}, faster);
                    }
                    // Pause autoplay
                    if (autoplay) {
                        stopAutoplay();
                    }
                };

                // Stop zooming
                var stop_zoom = function () {
                    $magnifier.stop().fadeOut(o.speed);
                    $icon.stop().animate({opacity: 1}, o.speed);
                    $zoom.stop().animate({opacity: 0}, o.speed, function () {
                        $(this).hide();
                    });
                    // Magnifier invert option
                    if (o.magnifier_invert) {
                        $current_thumb.stop().animate({opacity: 1}, o.speed, function () {
                            if (o.click_to_zoom) {
                                clicked_to_zoom = false;
                            }
                        });
                    }
                    clearTimeout(zoom_move_timer);
                    // Restart autoplay
                    if (autoplay) {
                        startAutoplay();
                    }
                };

                // Switch active thumb
                var st_click = function ($next_active, moved) {
                    var $next_thumb,
                        image_number,
                        $active = $container.find('.etalage_smallthumb_active').removeClass('etalage_smallthumb_active');
                    $next_active.addClass('etalage_smallthumb_active');
                    // Make sure the magnifier is hidden
                    $magnifier.stop().hide();
                    // Make sure the zoom area is hidden
                    $zoom.stop().hide();
                    // Switch small thumb
                    if (!moved) {
                        st_moving = true;
                        $active.stop(true, true).animate({opacity: o.smallthumb_inactive_opacity}, faster);
                        $next_active.stop(true, true).animate({opacity: 1}, faster, function () {
                            st_moving = false;
                        });
                    }
                    // Switch large thumb
                    $container.find('.etalage_thumb_active').removeClass('etalage_thumb_active').stop().animate({opacity: 0}, o.speed, function () {
                        $(this).hide();
                    });
                    $next_thumb = $thumbs.filter('.thumb_' + $next_active.data('thumb_id')).addClass('etalage_thumb_active').show().stop().css({opacity: 0}).animate({opacity: 1}, o.speed);
                    $current_thumb = $next_thumb.find('.etalage_thumb_image');
                    $current_source = $next_thumb.find('.etalage_source_image');
                    // Switch magnifier
                    if (o.magnifier_invert) {
                        $magnifier_img.attr('src', $current_thumb.data('src'));
                    }
                    // Switch zoom image
                    if (preview) {
                        $zoom_preview.attr('src', $current_thumb.data('src'));
                    }
                    $zoom_img.attr('src', $current_source.attr('src'));
                    // Switch/hide/show description
                    if (o.show_descriptions) {
                        description = $current_source.attr('title');
                        if (description) {
                            $description.html(description).show();
                        } else {
                            $description.hide();
                        }
                    }
                    // Reset autoplay
                    if (autoplay) {
                        stopAutoplay();
                        startAutoplay();
                    }
                    // Trigger change-callback
                    image_number = $next_active.data('id');
                    if (images >= small_thumbs) {
                        image_number--;
                    }
                    change_callback(image_number);
                };

                // Smallthumbs sliding
                var st_move = function (distance, $next_first, $next_last, $next_active) {
                    $.each($smallthumb, function () {
                        var $this = $(this),
                            animation = {
                                opacity: o.smallthumb_inactive_opacity
                            };
                        if ($this.data('id') === $next_active.data('id')) {
                            animation.opacity = 1;
                        }
                        if (smallthumbs_align === 'vert') {
                            animation.top = '-=' + distance;
                        } else {
                            animation.left = '-=' + distance;
                        }
                        $this.animate(animation, faster, 'swing', function () {
                            if (st_moving) {
                                $next_active.addClass('etalage_smallthumb_active');
                                st_moving = false;
                            }
                        });
                    });
                    // Switch thumb
                    st_click($next_active, true);
                };

                // Moving the zoomed image
                var zoom_move = function () {
                    var diff_x = new_zoomx - cur_zoomx,
                        diff_y = new_zoomy - cur_zoomy,
                        movethismuchnow_x = -diff_x / zoom_follow_speed,
                        movethismuchnow_y = -diff_y / zoom_follow_speed;
                    cur_zoomx = cur_zoomx - movethismuchnow_x;
                    cur_zoomy = cur_zoomy - movethismuchnow_y;
                    if (diff_x < 1 && diff_x > -1) {
                        cur_zoomx = new_zoomx;
                    }
                    if (diff_y < 1 && diff_y > -1) {
                        cur_zoomy = new_zoomy;
                    }
                    // Move a bit
                    $zoom_img.css({left: cur_zoomx, top: cur_zoomy});
                    if (preview) {
                        $zoom_preview.css({left: cur_zoomx, top: cur_zoomy});
                    }
                    // Repeat
                    if (diff_x > 1 || diff_y > 1 || diff_x < 1 || diff_y < 1) {
                        zoom_move_timer = setTimeout(function () {
                            zoom_move();
                        }, 25);
                    }
                };

                // Navigate to previous image
                var prev = function () {
                    var $prev;
                    if (o.magnifier_invert) {
                        $container.find('.etalage_thumb_active').mouseleave();
                    }
                    if (!o.right_to_left) {
                        $prev = $container.find('.etalage_smallthumb_active').prev();
                        if (!$prev.length) {
                            $prev = $smallthumb.last();
                        }
                    } else {
                        $prev = $container.find('.etalage_smallthumb_active').next();
                        if (!$prev.length) {
                            $prev = $smallthumb.first();
                        }
                    }
                    $prev.click();
                };

                // Navigate to next image
                var next = function () {
                    var $next;
                    if (o.magnifier_invert) {
                        $container.find('.etalage_thumb_active').mouseleave();
                    }
                    if (!o.right_to_left) {
                        $next = $container.find('.etalage_smallthumb_active').next();
                        if (!$next.length) {
                            $next = $smallthumb.first();
                        }
                    } else {
                        $next = $container.find('.etalage_smallthumb_active').prev();
                        if (!$next.length) {
                            $next = $smallthumb.last();
                        }
                    }
                    $next.click();
                };

                // Navigate to specific image
                var show = function (number) {
                    if (images <= small_thumbs) {
                        number = number - 1;
                    }
                    var $number = $smallthumb.eq(number);
                    if ($number.length && !st_moving) {
                        var $active = $container.find('.etalage_smallthumb_active'),
                            active = $active.data('id') - 1,
                            difference;
                        // Move backward
                        if (active > number) {
                            st_steps = active - number;
                            var $first = $container.find('.etalage_smallthumb_first'),
                                firstid = $first.data('id');
                            if (number < firstid) {
                                difference = active - firstid;
                                st_steps = st_steps - difference;
                                $first.click();
                            } else {
                                st_click($number, false);
                            }
                        }
                        // Move forward
                        else if (active < number) {
                            st_steps = number - active;
                            var $last = $container.find('.etalage_smallthumb_last'),
                                lastid = $last.data('id') - 1;
                            if (number >= lastid) {
                                difference = lastid - active - 1;
                                st_steps = st_steps - difference;
                                $last.click();
                            } else {
                                st_click($number, false);
                            }
                        }
                        st_steps = false;
                    }
                };

// EXTERNAL FUNCTIONS

                // Navigate to previous image
                window[instance_id + '_previous'] = function () {
                    prev();
                };

                // Navigate to next image
                window[instance_id + '_next'] = function () {
                    next();
                };

                // Navigate to specific image
                window[instance_id + '_show'] = function (number) {
                    show(number);
                };

// CALLBACK FUNCTIONS

                // Thumb click callback
                // Return false === do not trigger regular click event
                var click_callback = function (image_anchor) {
                    // Plugin option callback
                    if (!o.click_callback(image_anchor, instance_id)) {
                        return false;
                    }
                    // Legacy support
                    if (typeof etalage_click_callback === 'function') {
                        etalage_click_callback(image_anchor, instance_id);
                        return false;
                    }
                    return true;
                };

                // Thumb switched callback
                var change_callback = function (image_number) {
                    // Plugin option callback
                    if (o.change_callback(image_number, instance_id)) {
                        // Legacy support
                        if (typeof etalage_change_callback === 'function') {
                            etalage_change_callback(image_number, instance_id);
                        }
                    }
                };

// ACTIONS

                // Thumb hover
                $thumbs.add($magnifier).add($icon).mouseenter(function () {
                    // Hide hint
                    if (o.show_hint) {
                        $hint.hide();
                    }
                    // Start zooming
                    if (!o.click_to_zoom || clicked_to_zoom) {
                        start_zoom();
                    }
                }).mouseleave(function () {
                    stop_zoom();
                });

                // Magnifier movement
                var max_zoomx = -(o.source_image_width - zoom_area_width),
                    max_zoomy = -(o.source_image_height - zoom_area_height);
                $thumbs.add($magnifier).add($icon).mousemove(function (e) {
                    var mouse_x = Math.round(e.pageX - $current_thumb.offset().left + magnifier_left),
                        mouse_y = Math.round(e.pageY - $current_thumb.offset().top + magnifier_top);

                    // Magnifier location
                    var new_x = (mouse_x - magnifier_center_x),
                        new_y = (mouse_y - magnifier_center_y);
                    if (new_x < magnifier_left) {
                        new_x = magnifier_left;
                    }
                    if (new_x > magnifier_right) {
                        new_x = magnifier_right;
                    }
                    if (new_y < magnifier_top) {
                        new_y = magnifier_top;
                    }
                    if (new_y > magnifier_bottom) {
                        new_y = magnifier_bottom;
                    }
                    $magnifier.css({left: new_x, top: new_y});

                    // Magnifier invert option
                    if (o.magnifier_invert) {
                        var invert_x = new_x - magnifier_left,
                            invert_y = new_y - magnifier_top;
                        $magnifier_img.css({left: -invert_x, top: -invert_y});
                    }

                    // Zoomed area scrolling
                    new_zoomx = -( (new_x - magnifier_left) * (1 / (o.thumb_image_width / o.source_image_width)) );
                    new_zoomy = -( (new_y - magnifier_top) * (1 / (o.thumb_image_height / o.source_image_height)) );
                    if (new_zoomx < max_zoomx) {
                        new_zoomx = max_zoomx;
                    }
                    if (new_zoomy < max_zoomy) {
                        new_zoomy = max_zoomy;
                    }
                    if (o.zoom_easing) {
                        clearTimeout(zoom_move_timer);
                        zoom_move();
                    }
                    else {
                        if (preview) {
                            $zoom_preview.css({left: new_zoomx, top: new_zoomy});
                        }
                        $zoom_img.css({left: new_zoomx, top: new_zoomy});
                    }
                });

                if (images > 1 || !o.smallthumb_hide_single) {
                    // Smallthumbs slide left / up
                    $container.delegate('.etalage_smallthumb_first', 'click', function () {
                        // If not already moving
                        if (!st_moving || st_steps) {
                            var $this = $(this),
                                times = 1,
                                distance = 0,
                                $first,
                                $last,
                                $next_first,
                                $next_last,
                                $next_active;
                            if (st_steps) {
                                times = st_steps;
                            }
                            st_moving = true;

                            for (var i = 0; i < times; i += 1) {
                                $first = $this.removeClass('etalage_smallthumb_first');
                                $last = $container.find('.etalage_smallthumb_last').removeClass('etalage_smallthumb_last');

                                // If this isnt the first
                                if ($this.prev().length) {
                                    $next_first = $first.prev().addClass('etalage_smallthumb_first');
                                    $next_last = $last.prev().addClass('etalage_smallthumb_last');
                                    $next_active = $first;
                                }
                                // Shift to the end
                                else {
                                    $next_first = $smallthumb.eq(smallthumbs - small_thumbs).addClass('etalage_smallthumb_first');
                                    $next_last = $smallthumb.eq(smallthumbs - 1).addClass('etalage_smallthumb_last');
                                    $next_active = $next_last.prev();
                                }
                                if (smallthumbs_align === 'vert') {
                                    distance = $next_first.position().top;
                                } else {
                                    distance = $next_first.position().left;
                                }
                                // If repeating:
                                if ($this.prev().length) {
                                    $this = $this.prev();
                                }
                            }

                            // Animate and switch thumb
                            st_move(distance, $next_first, $next_last, $next_active);
                        }
                    });

                    // Smallthumbs slide right / down
                    $container.delegate('.etalage_smallthumb_last', 'click', function () {
                        // If not already moving
                        if (!st_moving || st_steps) {
                            var $this = $(this),
                                times = 1,
                                distance = 0,
                                $first,
                                $last,
                                $next_first,
                                $next_last,
                                $next_active;
                            if (st_steps) {
                                times = st_steps;
                            }
                            st_moving = true;

                            for (var i = 0; i < times; i += 1) {
                                $first = $container.find('.etalage_smallthumb_first').removeClass('etalage_smallthumb_first');
                                $last = $this.removeClass('etalage_smallthumb_last');

                                // If this isnt the last
                                if ($this.next().length) {
                                    $next_first = $first.next().addClass('etalage_smallthumb_first');
                                    $next_last = $last.next().addClass('etalage_smallthumb_last');
                                    $next_active = $last;
                                }
                                // Shift back to beginning
                                else {
                                    $next_first = $smallthumb.eq(0).addClass('etalage_smallthumb_first');
                                    $next_last = $smallthumb.eq(small_thumbs - 1).addClass('etalage_smallthumb_last');
                                    $next_active = $next_first.next();
                                }
                                if (smallthumbs_align === 'vert') {
                                    distance = $next_first.position().top;
                                } else {
                                    distance = $next_first.position().left;
                                }
                                // If repeating:
                                if ($this.next().length) {
                                    $this = $this.next();
                                }
                            }
                            // Animate and switch thumb
                            st_move(distance, $next_first, $next_last, $next_active);
                        }
                    });

                    // Smallthumb click
                    $smallthumb.click(function () {
                        var $this = $(this);
                        if (!$this.hasClass('etalage_smallthumb_first') && !$this.hasClass('etalage_smallthumb_last') && !$this.hasClass('etalage_smallthumb_active') && !st_moving) {
                            st_click($this, false);
                        }
                    });

                    // Smallthumb hover
                    if (o.smallthumb_select_on_hover) {
                        $smallthumb.mouseenter(function () {
                            $(this).click();
                        });
                    }

                }

                // Large thumbnail click to zoom
                if (o.click_to_zoom) {
                    $thumbs.click(function () {
                        clicked_to_zoom = true;
                        start_zoom();
                    });
                }
                // Large thumbnail click callback
                else {
                    $magnifier.click(function () {
                        var image_anchor = $current_thumb.data('anchor');
                        if (image_anchor) {
                            // Click callback function
                            if (click_callback(image_anchor)) {
                                // Regular href action
                                window.location = image_anchor;
                            }
                        }
                    });
                }

                if (images > 1 && o.keyboard) {
                    // Keystrokes
                    $(document).keydown(function (e) {
                        // Right arrow = move right / down
                        if (e.keyCode === 39 || e.keyCode === '39') {
                            if (!o.right_to_left) {
                                next();
                            } else {
                                prev();
                            }
                        }
                        // Left arrow = move left / up
                        if (e.keyCode === 37 || e.keyCode === '37') {
                            if (!o.right_to_left) {
                                prev();
                            } else {
                                next();
                            }
                        }
                    });
                }

                // Remove loading gifs when full page is loaded
                $(window).bind('load', function () {
                    // Large thumbnail background image
                    $thumbs.css({'background-image': 'none'});
                    // Zoom background image
                    $zoom.css({'background-image': 'none'});
                    // Remove zoom preview
                    if (preview) {
                        preview = false;
                        $zoom_preview.remove();
                    }
                });

                // Initiate first autoplay
                if (autoplay) {
                    startAutoplay();
                }

            }
        });
        return this;
    };
})(jQuery);

/*
 *  Project: jquery.responsiveTabs.js
 *  Description: A plugin that creates responsive tabs, optimized for all devices
 *  Author: Jelle Kralt (jelle@jellekralt.nl)
 *  Version: 1.4.5
 *  License: MIT
 */

;(function ($, window, undefined) {

    /** Default settings */
    var defaults = {
        active: null,
        event: 'click',
        disabled: [],
        collapsible: 'accordion',
        startCollapsed: false,
        rotate: false,
        setHash: false,
        animation: 'default',
        animationQueue: false,
        duration: 500,
        scrollToAccordion: false,
        activate: function () {
        },
        deactivate: function () {
        },
        load: function () {
        },
        activateState: function () {
        },
        classes: {
            stateDefault: 'r-tabs-state-default',
            stateActive: 'r-tabs-state-active',
            stateDisabled: 'r-tabs-state-disabled',
            stateExcluded: 'r-tabs-state-excluded',
            tab: 'r-tabs-tab',
            anchor: 'r-tabs-anchor',
            panel: 'r-tabs-panel',
            accordionTitle: 'r-tabs-accordion-title'
        }
    };

    /**
     * Responsive Tabs
     * @constructor
     * @param {object} element - The HTML element the validator should be bound to
     * @param {object} options - An option map
     */
    function ResponsiveTabs(element, options) {
        this.element = element; // Selected DOM element
        this.$element = $(element); // Selected jQuery element

        this.tabs = []; // Create tabs array
        this.state = ''; // Define the plugin state (tabs/accordion)
        this.rotateInterval = 0; // Define rotate interval
        this.$queue = $({});

        // Extend the defaults with the passed options
        this.options = $.extend({}, defaults, options);

        this.init();
    }


    /**
     * This function initializes the tab plugin
     */
    ResponsiveTabs.prototype.init = function () {
        var _this = this;

        // Load all the elements
        this.tabs = this._loadElements();
        this._loadClasses();
        this._loadEvents();

        // Window resize bind to check state
        $(window).on('resize', function (e) {
            _this._setState(e);
        });

        // Hashchange event
        $(window).on('hashchange', function (e) {
            var tabRef = _this._getTabRefBySelector(window.location.hash);
            var oTab = _this._getTab(tabRef);

            // Check if a tab is found that matches the hash
            if (tabRef >= 0 && !oTab._ignoreHashChange && !oTab.disabled) {
                // If so, open the tab and auto close the current one
                _this._openTab(e, _this._getTab(tabRef), true);
            }
        });

        // Start rotate event if rotate option is defined
        if (this.options.rotate !== false) {
            this.startRotation();
        }

        // --------------------
        // Define plugin events
        //

        // Activate: this event is called when a tab is selected
        this.$element.bind('tabs-activate', function (e, oTab) {
            _this.options.activate.call(this, e, oTab);
        });
        // Deactivate: this event is called when a tab is closed
        this.$element.bind('tabs-deactivate', function (e, oTab) {
            _this.options.deactivate.call(this, e, oTab);
        });
        // Activate State: this event is called when the plugin switches states
        this.$element.bind('tabs-activate-state', function (e, state) {
            _this.options.activateState.call(this, e, state);
        });

        // Load: this event is called when the plugin has been loaded
        this.$element.bind('tabs-load', function (e) {
            var startTab;

            _this._setState(e); // Set state

            // Check if the panel should be collaped on load
            if (_this.options.startCollapsed !== true && !(_this.options.startCollapsed === 'accordion' && _this.state === 'accordion')) {

                startTab = _this._getStartTab();

                // Open the initial tab
                _this._openTab(e, startTab); // Open first tab

                // Call the callback function
                _this.options.load.call(this, e, startTab); // Call the load callback
            }
        });
        // Trigger loaded event
        this.$element.trigger('tabs-load');
    };

    //
    // PRIVATE FUNCTIONS
    //

    /**
     * This function loads the tab elements and stores them in an array
     * @returns {Array} Array of tab elements
     */
    ResponsiveTabs.prototype._loadElements = function () {
        var _this = this;
        var $ul = this.$element.children('ul');
        var tabs = [];
        var id = 0;

        // Add the classes to the basic html elements
        this.$element.addClass('r-tabs'); // Tab container
        $ul.addClass('r-tabs-nav'); // List container

        // Get tab buttons and store their data in an array
        $('li', $ul).each(function () {
            var $tab = $(this);
            var isExcluded = $tab.hasClass(_this.options.classes.stateExcluded);
            var $anchor, $panel, $accordionTab, $accordionAnchor, panelSelector;

            // Check if the tab should be excluded
            if (!isExcluded) {

                $anchor = $('a', $tab);
                panelSelector = $anchor.attr('href');
                $panel = $(panelSelector);
                $accordionTab = $('<div></div>').insertBefore($panel);
                $accordionAnchor = $('<a></a>').attr('href', panelSelector).html($anchor.html()).appendTo($accordionTab);

                var oTab = {
                    _ignoreHashChange: false,
                    id: id,
                    disabled: ($.inArray(id, _this.options.disabled) !== -1),
                    tab: $(this),
                    anchor: $('a', $tab),
                    panel: $panel,
                    selector: panelSelector,
                    accordionTab: $accordionTab,
                    accordionAnchor: $accordionAnchor,
                    active: false
                };

                // 1up the ID
                id++;
                // Add to tab array
                tabs.push(oTab);
            }
        });
        return tabs;
    };


    /**
     * This function adds classes to the tab elements based on the options
     */
    ResponsiveTabs.prototype._loadClasses = function () {
        for (var i = 0; i < this.tabs.length; i++) {
            this.tabs[i].tab.addClass(this.options.classes.stateDefault).addClass(this.options.classes.tab);
            this.tabs[i].anchor.addClass(this.options.classes.anchor);
            this.tabs[i].panel.addClass(this.options.classes.stateDefault).addClass(this.options.classes.panel);
            this.tabs[i].accordionTab.addClass(this.options.classes.accordionTitle);
            this.tabs[i].accordionAnchor.addClass(this.options.classes.anchor);
            if (this.tabs[i].disabled) {
                this.tabs[i].tab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
                this.tabs[i].accordionTab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
            }
        }
    };

    /**
     * This function adds events to the tab elements
     */
    ResponsiveTabs.prototype._loadEvents = function () {
        var _this = this;

        // Define activate event on a tab element
        var fActivate = function (e) {
            var current = _this._getCurrentTab(); // Fetch current tab
            var activatedTab = e.data.tab;

            e.preventDefault();

            // Make sure this tab isn't disabled
            if (!activatedTab.disabled) {

                // Check if hash has to be set in the URL location
                if (_this.options.setHash) {
                    // Set the hash using the history api if available to tackle Chromes repaint bug on hash change
                    if (history.pushState) {
                        history.pushState(null, null, activatedTab.selector);
                    } else {
                        // Otherwise fallback to the hash update for sites that don't support the history api
                        window.location.hash = activatedTab.selector;
                    }
                }

                e.data.tab._ignoreHashChange = true;

                // Check if the activated tab isnt the current one or if its collapsible. If not, do nothing
                if (current !== activatedTab || _this._isCollapisble()) {
                    // The activated tab is either another tab of the current one. If it's the current tab it is collapsible
                    // Either way, the current tab can be closed
                    _this._closeTab(e, current);

                    // Check if the activated tab isnt the current one or if it isnt collapsible
                    if (current !== activatedTab || !_this._isCollapisble()) {
                        _this._openTab(e, activatedTab, false, true);
                    }
                }
            }
        };

        // Loop tabs
        for (var i = 0; i < this.tabs.length; i++) {
            // Add activate function to the tab and accordion selection element
            this.tabs[i].anchor.on(_this.options.event, {tab: _this.tabs[i]}, fActivate);
            this.tabs[i].accordionAnchor.on(_this.options.event, {tab: _this.tabs[i]}, fActivate);
        }
    };

    /**
     * This function gets the tab that should be opened at start
     * @returns {Object} Tab object
     */
    ResponsiveTabs.prototype._getStartTab = function () {
        var tabRef = this._getTabRefBySelector(window.location.hash);
        var startTab;

        // Check if the page has a hash set that is linked to a tab
        if (tabRef >= 0 && !this._getTab(tabRef).disabled) {
            // If so, set the current tab to the linked tab
            startTab = this._getTab(tabRef);
        } else if (this.options.active > 0 && !this._getTab(this.options.active).disabled) {
            startTab = this._getTab(this.options.active);
        } else {
            // If not, just get the first one
            startTab = this._getTab(0);
        }

        return startTab;
    };

    /**
     * This function sets the current state of the plugin
     * @param {Event} e - The event that triggers the state change
     */
    ResponsiveTabs.prototype._setState = function (e) {
        var $ul = $('ul', this.$element);
        var oldState = this.state;
        var startCollapsedIsState = (typeof this.options.startCollapsed === 'string');
        var startTab;

        // The state is based on the visibility of the tabs list
        if ($ul.is(':visible')) {
            // Tab list is visible, so the state is 'tabs'
            this.state = 'tabs';
        } else {
            // Tab list is invisible, so the state is 'accordion'
            this.state = 'accordion';
        }

        // If the new state is different from the old state
        if (this.state !== oldState) {
            // If so, the state activate trigger must be called
            this.$element.trigger('tabs-activate-state', {oldState: oldState, newState: this.state});

            // Check if the state switch should open a tab
            if (oldState && startCollapsedIsState && this.options.startCollapsed !== this.state && this._getCurrentTab() === undefined) {
                // Get initial tab
                startTab = this._getStartTab(e);
                // Open the initial tab
                this._openTab(e, startTab); // Open first tab
            }
        }
    };

    /**
     * This function opens a tab
     * @param {Event} e - The event that triggers the tab opening
     * @param {Object} oTab - The tab object that should be opened
     * @param {Boolean} closeCurrent - Defines if the current tab should be closed
     * @param {Boolean} stopRotation - Defines if the tab rotation loop should be stopped
     */
    ResponsiveTabs.prototype._openTab = function (e, oTab, closeCurrent, stopRotation) {
        var _this = this;

        // Check if the current tab has to be closed
        if (closeCurrent) {
            this._closeTab(e, this._getCurrentTab());
        }

        // Check if the rotation has to be stopped when activated
        if (stopRotation && this.rotateInterval > 0) {
            this.stopRotation();
        }

        // Set this tab to active
        oTab.active = true;
        // Set active classes to the tab button and accordion tab button
        oTab.tab.removeClass(_this.options.classes.stateDefault).addClass(_this.options.classes.stateActive);
        oTab.accordionTab.removeClass(_this.options.classes.stateDefault).addClass(_this.options.classes.stateActive);

        // Run panel transiton
        _this._doTransition(oTab.panel, _this.options.animation, 'open', function () {
            // When finished, set active class to the panel
            oTab.panel.removeClass(_this.options.classes.stateDefault).addClass(_this.options.classes.stateActive);

            // And if enabled and state is accordion, scroll to the accordion tab
            if (_this.getState() === 'accordion' && _this.options.scrollToAccordion && (!_this._isInView(oTab.accordionTab) || _this.options.animation !== 'default')) {
                // Check if the animation option is enabled, and if the duration isn't 0
                if (_this.options.animation !== 'default' && _this.options.duration > 0) {
                    // If so, set scrollTop with animate and use the 'animation' duration
                    $('html, body').animate({
                        scrollTop: oTab.accordionTab.offset().top
                    }, _this.options.duration);
                } else {
                    //  If not, just set scrollTop
                    $('html, body').scrollTop(oTab.accordionTab.offset().top);
                }
            }
        });

        this.$element.trigger('tabs-activate', oTab);
    };

    /**
     * This function closes a tab
     * @param {Event} e - The event that is triggered when a tab is closed
     * @param {Object} oTab - The tab object that should be closed
     */
    ResponsiveTabs.prototype._closeTab = function (e, oTab) {
        var _this = this;
        var doQueueOnState = typeof _this.options.animationQueue === 'string';
        var doQueue;

        if (oTab !== undefined) {
            if (doQueueOnState && _this.getState() === _this.options.animationQueue) {
                doQueue = true;
            } else if (doQueueOnState) {
                doQueue = false;
            } else {
                doQueue = _this.options.animationQueue;
            }

            // Deactivate tab
            oTab.active = false;
            // Set default class to the tab button
            oTab.tab.removeClass(_this.options.classes.stateActive).addClass(_this.options.classes.stateDefault);

            // Run panel transition
            _this._doTransition(oTab.panel, _this.options.animation, 'close', function () {
                // Set default class to the accordion tab button and tab panel
                oTab.accordionTab.removeClass(_this.options.classes.stateActive).addClass(_this.options.classes.stateDefault);
                oTab.panel.removeClass(_this.options.classes.stateActive).addClass(_this.options.classes.stateDefault);
            }, !doQueue);

            this.$element.trigger('tabs-deactivate', oTab);
        }
    };

    /**
     * This function runs an effect on a panel
     * @param {Element} panel - The HTML element of the tab panel
     * @param {String} method - The transition method reference
     * @param {String} state - The state (open/closed) that the panel should transition to
     * @param {Function} callback - The callback function that is called after the transition
     * @param {Boolean} dequeue - Defines if the event queue should be dequeued after the transition
     */
    ResponsiveTabs.prototype._doTransition = function (panel, method, state, callback, dequeue) {
        var effect;
        var _this = this;

        // Get effect based on method
        switch (method) {
            case 'slide':
                effect = (state === 'open') ? 'slideDown' : 'slideUp';
                break;
            case 'fade':
                effect = (state === 'open') ? 'fadeIn' : 'fadeOut';
                break;
            default:
                effect = (state === 'open') ? 'show' : 'hide';
                // When default is used, set the duration to 0
                _this.options.duration = 0;
                break;
        }

        // Add the transition to a custom queue
        this.$queue.queue('responsive-tabs', function (next) {
            // Run the transition on the panel
            panel[effect]({
                duration: _this.options.duration,
                complete: function () {
                    // Call the callback function
                    callback.call(panel, method, state);
                    // Run the next function in the queue
                    next();
                }
            });
        });

        // When the panel is openend, dequeue everything so the animation starts
        if (state === 'open' || dequeue) {
            this.$queue.dequeue('responsive-tabs');
        }

    };

    /**
     * This function returns the collapsibility of the tab in this state
     * @returns {Boolean} The collapsibility of the tab
     */
    ResponsiveTabs.prototype._isCollapisble = function () {
        return (typeof this.options.collapsible === 'boolean' && this.options.collapsible) || (typeof this.options.collapsible === 'string' && this.options.collapsible === this.getState());
    };

    /**
     * This function returns a tab by numeric reference
     * @param {Integer} numRef - Numeric tab reference
     * @returns {Object} Tab object
     */
    ResponsiveTabs.prototype._getTab = function (numRef) {
        return this.tabs[numRef];
    };

    /**
     * This function returns the numeric tab reference based on a hash selector
     * @param {String} selector - Hash selector
     * @returns {Integer} Numeric tab reference
     */
    ResponsiveTabs.prototype._getTabRefBySelector = function (selector) {
        // Loop all tabs
        for (var i = 0; i < this.tabs.length; i++) {
            // Check if the hash selector is equal to the tab selector
            if (this.tabs[i].selector === selector) {
                return i;
            }
        }
        // If none is found return a negative index
        return -1;
    };

    /**
     * This function returns the current tab element
     * @returns {Object} Current tab element
     */
    ResponsiveTabs.prototype._getCurrentTab = function () {
        return this._getTab(this._getCurrentTabRef());
    };

    /**
     * This function returns the next tab's numeric reference
     * @param {Integer} currentTabRef - Current numeric tab reference
     * @returns {Integer} Numeric tab reference
     */
    ResponsiveTabs.prototype._getNextTabRef = function (currentTabRef) {
        var tabRef = (currentTabRef || this._getCurrentTabRef());
        var nextTabRef = (tabRef === this.tabs.length - 1) ? 0 : tabRef + 1;
        return (this._getTab(nextTabRef).disabled) ? this._getNextTabRef(nextTabRef) : nextTabRef;
    };

    /**
     * This function returns the previous tab's numeric reference
     * @returns {Integer} Numeric tab reference
     */
    ResponsiveTabs.prototype._getPreviousTabRef = function () {
        return (this._getCurrentTabRef() === 0) ? this.tabs.length - 1 : this._getCurrentTabRef() - 1;
    };

    /**
     * This function returns the current tab's numeric reference
     * @returns {Integer} Numeric tab reference
     */
    ResponsiveTabs.prototype._getCurrentTabRef = function () {
        // Loop all tabs
        for (var i = 0; i < this.tabs.length; i++) {
            // If this tab is active, return it
            if (this.tabs[i].active) {
                return i;
            }
        }
        // No tabs have been found, return negative index
        return -1;
    };

    //
    // HELPER FUNCTIONS
    //

    ResponsiveTabs.prototype._isInView = function ($element) {
        var docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),
            elemTop = $element.offset().top,
            elemBottom = elemTop + $element.height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    };

    //
    // PUBLIC FUNCTIONS
    //

    /**
     * This function activates a tab
     * @param {Integer} tabRef - Numeric tab reference
     * @param {Boolean} stopRotation - Defines if the tab rotation should stop after activation
     */
    ResponsiveTabs.prototype.activate = function (tabRef, stopRotation) {
        var e = jQuery.Event('tabs-activate');
        var oTab = this._getTab(tabRef);
        if (!oTab.disabled) {
            this._openTab(e, oTab, true, stopRotation || true);
        }
    };

    /**
     * This function deactivates a tab
     * @param {Integer} tabRef - Numeric tab reference
     */
    ResponsiveTabs.prototype.deactivate = function (tabRef) {
        var e = jQuery.Event('tabs-dectivate');
        var oTab = this._getTab(tabRef);
        if (!oTab.disabled) {
            this._closeTab(e, oTab);
        }
    };

    /**
     * This function enables a tab
     * @param {Integer} tabRef - Numeric tab reference
     */
    ResponsiveTabs.prototype.enable = function (tabRef) {
        var oTab = this._getTab(tabRef);
        if (oTab) {
            oTab.disabled = false;
            oTab.tab.addClass(this.options.classes.stateDefault).removeClass(this.options.classes.stateDisabled);
            oTab.accordionTab.addClass(this.options.classes.stateDefault).removeClass(this.options.classes.stateDisabled);
        }
    };

    /**
     * This function disable a tab
     * @param {Integer} tabRef - Numeric tab reference
     */
    ResponsiveTabs.prototype.disable = function (tabRef) {
        var oTab = this._getTab(tabRef);
        if (oTab) {
            oTab.disabled = true;
            oTab.tab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
            oTab.accordionTab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
        }
    };

    /**
     * This function gets the current state of the plugin
     * @returns {String} State of the plugin
     */
    ResponsiveTabs.prototype.getState = function () {
        return this.state;
    };

    /**
     * This function starts the rotation of the tabs
     * @param {Integer} speed - The speed of the rotation
     */
    ResponsiveTabs.prototype.startRotation = function (speed) {
        var _this = this;
        // Make sure not all tabs are disabled
        if (this.tabs.length > this.options.disabled.length) {
            this.rotateInterval = setInterval(function () {
                var e = jQuery.Event('rotate');
                _this._openTab(e, _this._getTab(_this._getNextTabRef()), true);
            }, speed || (($.isNumeric(_this.options.rotate)) ? _this.options.rotate : 4000));
        } else {
            throw new Error("Rotation is not possible if all tabs are disabled");
        }
    };

    /**
     * This function stops the rotation of the tabs
     */
    ResponsiveTabs.prototype.stopRotation = function () {
        window.clearInterval(this.rotateInterval);
        this.rotateInterval = 0;
    };

    /**
     * This function can be used to get/set options
     * @return {any} Option value
     */
    ResponsiveTabs.prototype.option = function (key, value) {
        if (value) {
            this.options[key] = value;
        }
        return this.options[key];
    };

    /** jQuery wrapper */
    $.fn.responsiveTabs = function (options) {
        var args = arguments;
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                if (!$.data(this, 'responsivetabs')) {
                    $.data(this, 'responsivetabs', new ResponsiveTabs(this, options));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            return this.each(function () {
                var instance = $.data(this, 'responsivetabs');

                if (instance instanceof ResponsiveTabs && typeof instance[options] === 'function') {
                    instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }

                // Allow instances to be destroyed via the 'destroy' method
                if (options === 'destroy') {
                    // TODO: destroy instance classes, etc
                    $.data(this, 'responsivetabs', null);
                }
            });
        }
    };

}(jQuery, window));


///////////////////////////////////////////////////////////////////////////           END PLUG INS                                           //
/////////////////////////////////////////////////////////////////////////
