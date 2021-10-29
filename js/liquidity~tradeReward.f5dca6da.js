(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["liquidity~tradeReward"],
  {
    "0adc": function (i, e, s) {},
    9029: function (i, e) {
      i.exports = (function (i) {
        var e = {};
        function s(n) {
          if (e[n]) return e[n].exports;
          var o = (e[n] = { i: n, l: !1, exports: {} });
          return i[n].call(o.exports, o, o.exports, s), (o.l = !0), o.exports;
        }
        return (
          (s.m = i),
          (s.c = e),
          (s.d = function (i, e, n) {
            s.o(i, e) ||
              Object.defineProperty(i, e, {
                configurable: !1,
                enumerable: !0,
                get: n,
              });
          }),
          (s.n = function (i) {
            var e =
              i && i.__esModule
                ? function () {
                    return i["default"];
                  }
                : function () {
                    return i;
                  };
            return s.d(e, "a", e), e;
          }),
          (s.o = function (i, e) {
            return Object.prototype.hasOwnProperty.call(i, e);
          }),
          (s.p = ""),
          s((s.s = 1))
        );
      })([
        function (i, e, s) {
          "use strict";
          var n = {
              MOBILE: "mobile",
              TABLET: "tablet",
              SMART_TV: "smarttv",
              CONSOLE: "console",
              WEARABLE: "wearable",
              BROWSER: void 0,
            },
            o = {
              CHROME: "Chrome",
              FIREFOX: "Firefox",
              OPERA: "Opera",
              YANDEX: "Yandex",
              SAFARI: "Safari",
              INTERNET_EXPLORER: "Internet Explorer",
              EDGE: "Edge",
              CHROMIUM: "Chromium",
              IE: "IE",
              MOBILE_SAFARI: "Mobile Safari",
              EDGE_CHROMIUM: "Edge Chromium",
            },
            r = {
              IOS: "iOS",
              ANDROID: "Android",
              WINDOWS_PHONE: "Windows Phone",
              WINDOWS: "Windows",
              MAC_OS: "Mac OS",
            },
            t = {
              isMobile: !1,
              isTablet: !1,
              isBrowser: !1,
              isSmartTV: !1,
              isConsole: !1,
              isWearable: !1,
            };
          i.exports = {
            BROWSER_TYPES: o,
            DEVICE_TYPES: n,
            OS_TYPES: r,
            defaultData: t,
          };
        },
        function (i, e, s) {
          "use strict";
          var n = s(2),
            o = s(0),
            r = o.BROWSER_TYPES,
            t = o.OS_TYPES,
            a = o.DEVICE_TYPES,
            d = s(4),
            u = d.checkType,
            l = d.broPayload,
            c = d.mobilePayload,
            w = d.wearPayload,
            m = d.consolePayload,
            p = d.stvPayload,
            f = d.getNavigatorInstance,
            b = d.isIOS13Check,
            g = new n(),
            v = g.getBrowser(),
            h = g.getDevice(),
            E = g.getEngine(),
            S = g.getOS(),
            x = g.getUA(),
            O = r.CHROME,
            T = r.CHROMIUM,
            y = r.IE,
            A = r.INTERNET_EXPLORER,
            N = r.OPERA,
            k = r.FIREFOX,
            R = r.SAFARI,
            M = r.EDGE,
            I = r.YANDEX,
            _ = r.MOBILE_SAFARI,
            C = a.MOBILE,
            P = a.TABLET,
            V = a.SMART_TV,
            B = a.BROWSER,
            D = a.WEARABLE,
            L = a.CONSOLE,
            W = t.ANDROID,
            z = t.WINDOWS_PHONE,
            j = t.IOS,
            F = t.WINDOWS,
            U = t.MAC_OS,
            G = function () {
              return h.type === C;
            },
            Y = function () {
              return h.type === P;
            },
            H = function () {
              switch (h.type) {
                case C:
                case P:
                  return !0;
                default:
                  return !1;
              }
            },
            X = function () {
              return (
                S.name === t.WINDOWS &&
                "10" === S.version &&
                "string" === typeof x &&
                -1 !== x.indexOf("Edg/")
              );
            },
            $ = function () {
              return h.type === V;
            },
            q = function () {
              return h.type === B;
            },
            J = function () {
              return h.type === D;
            },
            Q = function () {
              return h.type === L;
            },
            Z = function () {
              return S.name === W;
            },
            K = function () {
              return S.name === F;
            },
            ii = function () {
              return S.name === U;
            },
            ei = function () {
              return S.name === z;
            },
            si = function () {
              return S.name === j;
            },
            ni = function () {
              return v.name === O;
            },
            oi = function () {
              return v.name === k;
            },
            ri = function () {
              return v.name === T;
            },
            ti = function () {
              return v.name === M;
            },
            ai = function () {
              return v.name === I;
            },
            di = function () {
              return v.name === R || v.name === _;
            },
            ui = function () {
              return v.name === _;
            },
            li = function () {
              return v.name === N;
            },
            ci = function () {
              return v.name === A || v.name === y;
            },
            wi = function () {
              var i = f(),
                e = i && i.userAgent.toLowerCase();
              return "string" === typeof e && /electron/.test(e);
            },
            mi = function () {
              var i = f();
              return (
                i &&
                (/iPad|iPhone|iPod/.test(i.platform) ||
                  ("MacIntel" === i.platform && i.maxTouchPoints > 1)) &&
                !window.MSStream
              );
            },
            pi = function () {
              return b("iPad");
            },
            fi = function () {
              return b("iPhone");
            },
            bi = function () {
              return b("iPod");
            },
            gi = function () {
              return v.major;
            },
            vi = function () {
              return v.version;
            },
            hi = function () {
              return S.version ? S.version : "none";
            },
            Ei = function () {
              return S.name ? S.name : "none";
            },
            Si = function () {
              return v.name;
            },
            xi = function () {
              return h.vendor ? h.vendor : "none";
            },
            Oi = function () {
              return h.model ? h.model : "none";
            },
            Ti = function () {
              return E.name;
            },
            yi = function () {
              return E.version;
            },
            Ai = function () {
              return x;
            },
            Ni = function () {
              return h.type;
            },
            ki = $(),
            Ri = Q(),
            Mi = J(),
            Ii = ui() || pi(),
            _i = ri(),
            Ci = H() || pi(),
            Pi = G(),
            Vi = Y() || pi(),
            Bi = q(),
            Di = Z(),
            Li = ei(),
            Wi = si() || pi(),
            zi = ni(),
            ji = oi(),
            Fi = di(),
            Ui = li(),
            Gi = ci(),
            Yi = hi(),
            Hi = Ei(),
            Xi = gi(),
            $i = vi(),
            qi = Si(),
            Ji = xi(),
            Qi = Oi(),
            Zi = Ti(),
            Ki = yi(),
            ie = Ai(),
            ee = ti() || X(),
            se = ai(),
            ne = Ni(),
            oe = mi(),
            re = pi(),
            te = fi(),
            ae = bi(),
            de = wi(),
            ue = X(),
            le = ti(),
            ce = K(),
            we = ii(),
            me = u(h.type);
          function pe() {
            var i = me.isBrowser,
              e = me.isMobile,
              s = me.isTablet,
              n = me.isSmartTV,
              o = me.isConsole,
              r = me.isWearable;
            return i
              ? l(i, v, E, S, x)
              : n
              ? p(n, E, S, x)
              : o
              ? m(o, E, S, x)
              : e || s
              ? c(me, h, S, x)
              : r
              ? w(r, E, S, x)
              : void 0;
          }
          i.exports = {
            deviceDetect: pe,
            isSmartTV: ki,
            isConsole: Ri,
            isWearable: Mi,
            isMobileSafari: Ii,
            isChromium: _i,
            isMobile: Ci,
            isMobileOnly: Pi,
            isTablet: Vi,
            isBrowser: Bi,
            isAndroid: Di,
            isWinPhone: Li,
            isIOS: Wi,
            isChrome: zi,
            isFirefox: ji,
            isSafari: Fi,
            isOpera: Ui,
            isIE: Gi,
            osVersion: Yi,
            osName: Hi,
            fullBrowserVersion: Xi,
            browserVersion: $i,
            browserName: qi,
            mobileVendor: Ji,
            mobileModel: Qi,
            engineName: Zi,
            engineVersion: Ki,
            getUA: ie,
            isEdge: ee,
            isYandex: se,
            deviceType: ne,
            isIOS13: oe,
            isIPad13: re,
            isIPhone13: te,
            isIPod13: ae,
            isElectron: de,
            isEdgeChromium: ue,
            isLegacyEdge: le,
            isWindows: ce,
            isMacOs: we,
          };
        },
        function (i, e, s) {
          var n;
          /*!
           * UAParser.js v0.7.18
           * Lightweight JavaScript-based User-Agent string parser
           * https://github.com/faisalman/ua-parser-js
           *
           * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
           * Dual licensed under GPLv2 or MIT
           */ (function (o, r) {
            "use strict";
            var t = "0.7.18",
              a = "",
              d = "?",
              u = "function",
              l = "undefined",
              c = "object",
              w = "string",
              m = "major",
              p = "model",
              f = "name",
              b = "type",
              g = "vendor",
              v = "version",
              h = "architecture",
              E = "console",
              S = "mobile",
              x = "tablet",
              O = "smarttv",
              T = "wearable",
              y = "embedded",
              A = {
                extend: function (i, e) {
                  var s = {};
                  for (var n in i)
                    e[n] && e[n].length % 2 === 0
                      ? (s[n] = e[n].concat(i[n]))
                      : (s[n] = i[n]);
                  return s;
                },
                has: function (i, e) {
                  return (
                    "string" === typeof i &&
                    -1 !== e.toLowerCase().indexOf(i.toLowerCase())
                  );
                },
                lowerize: function (i) {
                  return i.toLowerCase();
                },
                major: function (i) {
                  return typeof i === w
                    ? i.replace(/[^\d\.]/g, "").split(".")[0]
                    : r;
                },
                trim: function (i) {
                  return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                },
              },
              N = {
                rgx: function (i, e) {
                  var s,
                    n,
                    o,
                    t,
                    a,
                    d,
                    l = 0;
                  while (l < e.length && !a) {
                    var w = e[l],
                      m = e[l + 1];
                    s = n = 0;
                    while (s < w.length && !a)
                      if (((a = w[s++].exec(i)), a))
                        for (o = 0; o < m.length; o++)
                          (d = a[++n]),
                            (t = m[o]),
                            typeof t === c && t.length > 0
                              ? 2 == t.length
                                ? typeof t[1] == u
                                  ? (this[t[0]] = t[1].call(this, d))
                                  : (this[t[0]] = t[1])
                                : 3 == t.length
                                ? typeof t[1] !== u || (t[1].exec && t[1].test)
                                  ? (this[t[0]] = d ? d.replace(t[1], t[2]) : r)
                                  : (this[t[0]] = d
                                      ? t[1].call(this, d, t[2])
                                      : r)
                                : 4 == t.length &&
                                  (this[t[0]] = d
                                    ? t[3].call(this, d.replace(t[1], t[2]))
                                    : r)
                              : (this[t] = d || r);
                    l += 2;
                  }
                },
                str: function (i, e) {
                  for (var s in e)
                    if (typeof e[s] === c && e[s].length > 0) {
                      for (var n = 0; n < e[s].length; n++)
                        if (A.has(e[s][n], i)) return s === d ? r : s;
                    } else if (A.has(e[s], i)) return s === d ? r : s;
                  return i;
                },
              },
              k = {
                browser: {
                  oldsafari: {
                    version: {
                      "1.0": "/8",
                      1.2: "/1",
                      1.3: "/3",
                      "2.0": "/412",
                      "2.0.2": "/416",
                      "2.0.3": "/417",
                      "2.0.4": "/419",
                      "?": "/",
                    },
                  },
                },
                device: {
                  amazon: { model: { "Fire Phone": ["SD", "KF"] } },
                  sprint: {
                    model: { "Evo Shift 4G": "7373KT" },
                    vendor: { HTC: "APA", Sprint: "Sprint" },
                  },
                },
                os: {
                  windows: {
                    version: {
                      ME: "4.90",
                      "NT 3.11": "NT3.51",
                      "NT 4.0": "NT4.0",
                      2e3: "NT 5.0",
                      XP: ["NT 5.1", "NT 5.2"],
                      Vista: "NT 6.0",
                      7: "NT 6.1",
                      8: "NT 6.2",
                      8.1: "NT 6.3",
                      10: ["NT 6.4", "NT 10.0"],
                      RT: "ARM",
                    },
                  },
                },
              },
              R = {
                browser: [
                  [
                    /(opera\smini)\/([\w\.-]+)/i,
                    /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i,
                    /(opera).+version\/([\w\.]+)/i,
                    /(opera)[\/\s]+([\w\.]+)/i,
                  ],
                  [f, v],
                  [/(opios)[\/\s]+([\w\.]+)/i],
                  [[f, "Opera Mini"], v],
                  [/\s(opr)\/([\w\.]+)/i],
                  [[f, "Opera"], v],
                  [
                    /(kindle)\/([\w\.]+)/i,
                    /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                    /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                    /(?:ms|\()(ie)\s([\w\.]+)/i,
                    /(rekonq)\/([\w\.]*)/i,
                    /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i,
                  ],
                  [f, v],
                  [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                  [[f, "IE"], v],
                  [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],
                  [[f, "Edge"], v],
                  [/(yabrowser)\/([\w\.]+)/i],
                  [[f, "Yandex"], v],
                  [/(puffin)\/([\w\.]+)/i],
                  [[f, "Puffin"], v],
                  [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                  [[f, "UCBrowser"], v],
                  [/(comodo_dragon)\/([\w\.]+)/i],
                  [[f, /_/g, " "], v],
                  [/(micromessenger)\/([\w\.]+)/i],
                  [[f, "WeChat"], v],
                  [/(qqbrowserlite)\/([\w\.]+)/i],
                  [f, v],
                  [/(QQ)\/([\d\.]+)/i],
                  [f, v],
                  [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                  [f, v],
                  [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                  [f, v],
                  [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                  [f, v],
                  [/(MetaSr)[\/\s]?([\w\.]+)/i],
                  [f],
                  [/(LBBROWSER)/i],
                  [f],
                  [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                  [v, [f, "MIUI Browser"]],
                  [/;fbav\/([\w\.]+);/i],
                  [v, [f, "Facebook"]],
                  [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                  [v, [f, "Chrome Headless"]],
                  [/\swv\).+(chrome)\/([\w\.]+)/i],
                  [[f, /(.+)/, "$1 WebView"], v],
                  [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                  [[f, /(.+(?:g|us))(.+)/, "$1 $2"], v],
                  [
                    /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i,
                  ],
                  [v, [f, "Android Browser"]],
                  [
                    /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i,
                  ],
                  [f, v],
                  [/(dolfin)\/([\w\.]+)/i],
                  [[f, "Dolphin"], v],
                  [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                  [[f, "Chrome"], v],
                  [/(coast)\/([\w\.]+)/i],
                  [[f, "Opera Coast"], v],
                  [/fxios\/([\w\.-]+)/i],
                  [v, [f, "Firefox"]],
                  [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                  [v, [f, "Mobile Safari"]],
                  [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                  [v, f],
                  [
                    /webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i,
                  ],
                  [[f, "GSA"], v],
                  [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                  [f, [v, N.str, k.browser.oldsafari.version]],
                  [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                  [f, v],
                  [/(navigator|netscape)\/([\w\.-]+)/i],
                  [[f, "Netscape"], v],
                  [
                    /(swiftfox)/i,
                    /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                    /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                    /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                    /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                    /(links)\s\(([\w\.]+)/i,
                    /(gobrowser)\/?([\w\.]*)/i,
                    /(ice\s?browser)\/v?([\w\._]+)/i,
                    /(mosaic)[\/\s]([\w\.]+)/i,
                  ],
                  [f, v],
                ],
                cpu: [
                  [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                  [[h, "amd64"]],
                  [/(ia32(?=;))/i],
                  [[h, A.lowerize]],
                  [/((?:i[346]|x)86)[;\)]/i],
                  [[h, "ia32"]],
                  [/windows\s(ce|mobile);\sppc;/i],
                  [[h, "arm"]],
                  [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                  [[h, /ower/, "", A.lowerize]],
                  [/(sun4\w)[;\)]/i],
                  [[h, "sparc"]],
                  [
                    /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i,
                  ],
                  [[h, A.lowerize]],
                ],
                device: [
                  [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                  [p, g, [b, x]],
                  [/applecoremedia\/[\w\.]+ \((ipad)/],
                  [p, [g, "Apple"], [b, x]],
                  [/(apple\s{0,1}tv)/i],
                  [
                    [p, "Apple TV"],
                    [g, "Apple"],
                  ],
                  [
                    /(archos)\s(gamepad2?)/i,
                    /(hp).+(touchpad)/i,
                    /(hp).+(tablet)/i,
                    /(kindle)\/([\w\.]+)/i,
                    /\s(nook)[\w\s]+build\/(\w+)/i,
                    /(dell)\s(strea[kpr\s\d]*[\dko])/i,
                  ],
                  [g, p, [b, x]],
                  [/(kf[A-z]+)\sbuild\/.+silk\//i],
                  [p, [g, "Amazon"], [b, x]],
                  [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                  [
                    [p, N.str, k.device.amazon.model],
                    [g, "Amazon"],
                    [b, S],
                  ],
                  [/\((ip[honed|\s\w*]+);.+(apple)/i],
                  [p, g, [b, S]],
                  [/\((ip[honed|\s\w*]+);/i],
                  [p, [g, "Apple"], [b, S]],
                  [
                    /(blackberry)[\s-]?(\w+)/i,
                    /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                    /(hp)\s([\w\s]+\w)/i,
                    /(asus)-?(\w+)/i,
                  ],
                  [g, p, [b, S]],
                  [/\(bb10;\s(\w+)/i],
                  [p, [g, "BlackBerry"], [b, S]],
                  [
                    /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i,
                  ],
                  [p, [g, "Asus"], [b, x]],
                  [
                    /(sony)\s(tablet\s[ps])\sbuild\//i,
                    /(sony)?(?:sgp.+)\sbuild\//i,
                  ],
                  [
                    [g, "Sony"],
                    [p, "Xperia Tablet"],
                    [b, x],
                  ],
                  [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                  [p, [g, "Sony"], [b, S]],
                  [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                  [g, p, [b, E]],
                  [/android.+;\s(shield)\sbuild/i],
                  [p, [g, "Nvidia"], [b, E]],
                  [/(playstation\s[34portablevi]+)/i],
                  [p, [g, "Sony"], [b, E]],
                  [/(sprint\s(\w+))/i],
                  [
                    [g, N.str, k.device.sprint.vendor],
                    [p, N.str, k.device.sprint.model],
                    [b, S],
                  ],
                  [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                  [g, p, [b, x]],
                  [
                    /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i,
                    /(zte)-(\w*)/i,
                    /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i,
                  ],
                  [g, [p, /_/g, " "], [b, S]],
                  [/(nexus\s9)/i],
                  [p, [g, "HTC"], [b, x]],
                  [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                  [p, [g, "Huawei"], [b, S]],
                  [/(microsoft);\s(lumia[\s\w]+)/i],
                  [g, p, [b, S]],
                  [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                  [p, [g, "Microsoft"], [b, E]],
                  [/(kin\.[onetw]{3})/i],
                  [
                    [p, /\./g, " "],
                    [g, "Microsoft"],
                    [b, S],
                  ],
                  [
                    /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i,
                    /mot[\s-]?(\w*)/i,
                    /(XT\d{3,4}) build\//i,
                    /(nexus\s6)/i,
                  ],
                  [p, [g, "Motorola"], [b, S]],
                  [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                  [p, [g, "Motorola"], [b, x]],
                  [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                  [
                    [g, A.trim],
                    [p, A.trim],
                    [b, O],
                  ],
                  [/hbbtv.+maple;(\d+)/i],
                  [
                    [p, /^/, "SmartTV"],
                    [g, "Samsung"],
                    [b, O],
                  ],
                  [/\(dtv[\);].+(aquos)/i],
                  [p, [g, "Sharp"], [b, O]],
                  [
                    /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i,
                    /((SM-T\w+))/i,
                  ],
                  [[g, "Samsung"], p, [b, x]],
                  [/smart-tv.+(samsung)/i],
                  [g, [b, O], p],
                  [
                    /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i,
                    /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
                    /sec-((sgh\w+))/i,
                  ],
                  [[g, "Samsung"], p, [b, S]],
                  [/sie-(\w*)/i],
                  [p, [g, "Siemens"], [b, S]],
                  [
                    /(maemo|nokia).*(n900|lumia\s\d+)/i,
                    /(nokia)[\s_-]?([\w-]*)/i,
                  ],
                  [[g, "Nokia"], p, [b, S]],
                  [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                  [p, [g, "Acer"], [b, x]],
                  [/android.+([vl]k\-?\d{3})\s+build/i],
                  [p, [g, "LG"], [b, x]],
                  [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                  [[g, "LG"], p, [b, x]],
                  [/(lg) netcast\.tv/i],
                  [g, p, [b, O]],
                  [
                    /(nexus\s[45])/i,
                    /lg[e;\s\/-]+(\w*)/i,
                    /android.+lg(\-?[\d\w]+)\s+build/i,
                  ],
                  [p, [g, "LG"], [b, S]],
                  [/android.+(ideatab[a-z0-9\-\s]+)/i],
                  [p, [g, "Lenovo"], [b, x]],
                  [/linux;.+((jolla));/i],
                  [g, p, [b, S]],
                  [/((pebble))app\/[\d\.]+\s/i],
                  [g, p, [b, T]],
                  [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                  [g, p, [b, S]],
                  [/crkey/i],
                  [
                    [p, "Chromecast"],
                    [g, "Google"],
                  ],
                  [/android.+;\s(glass)\s\d/i],
                  [p, [g, "Google"], [b, T]],
                  [/android.+;\s(pixel c)\s/i],
                  [p, [g, "Google"], [b, x]],
                  [/android.+;\s(pixel xl|pixel)\s/i],
                  [p, [g, "Google"], [b, S]],
                  [
                    /android.+;\s(\w+)\s+build\/hm\1/i,
                    /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                    /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i,
                    /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i,
                  ],
                  [
                    [p, /_/g, " "],
                    [g, "Xiaomi"],
                    [b, S],
                  ],
                  [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                  [
                    [p, /_/g, " "],
                    [g, "Xiaomi"],
                    [b, x],
                  ],
                  [/android.+;\s(m[1-5]\snote)\sbuild/i],
                  [p, [g, "Meizu"], [b, x]],
                  [
                    /android.+a000(1)\s+build/i,
                    /android.+oneplus\s(a\d{4})\s+build/i,
                  ],
                  [p, [g, "OnePlus"], [b, S]],
                  [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                  [p, [g, "RCA"], [b, x]],
                  [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                  [p, [g, "Dell"], [b, x]],
                  [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                  [p, [g, "Verizon"], [b, x]],
                  [
                    /android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i,
                  ],
                  [[g, "Barnes & Noble"], p, [b, x]],
                  [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                  [p, [g, "NuVision"], [b, x]],
                  [/android.+;\s(k88)\sbuild/i],
                  [p, [g, "ZTE"], [b, x]],
                  [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                  [p, [g, "Swiss"], [b, S]],
                  [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                  [p, [g, "Swiss"], [b, x]],
                  [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                  [p, [g, "Zeki"], [b, x]],
                  [
                    /(android).+[;\/]\s+([YR]\d{2})\s+build/i,
                    /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i,
                  ],
                  [[g, "Dragon Touch"], p, [b, x]],
                  [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                  [p, [g, "Insignia"], [b, x]],
                  [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                  [p, [g, "NextBook"], [b, x]],
                  [
                    /android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i,
                  ],
                  [[g, "Voice"], p, [b, S]],
                  [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                  [[g, "LvTel"], p, [b, S]],
                  [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                  [p, [g, "Envizen"], [b, x]],
                  [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                  [g, p, [b, x]],
                  [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                  [p, [g, "MachSpeed"], [b, x]],
                  [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                  [g, p, [b, x]],
                  [/android.+[;\/]\s*TU_(1491)\s+build/i],
                  [p, [g, "Rotor"], [b, x]],
                  [/android.+(KS(.+))\s+build/i],
                  [p, [g, "Amazon"], [b, x]],
                  [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                  [g, p, [b, x]],
                  [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                  [[b, A.lowerize], g, p],
                  [/(android[\w\.\s\-]{0,9});.+build/i],
                  [p, [g, "Generic"]],
                ],
                engine: [
                  [/windows.+\sedge\/([\w\.]+)/i],
                  [v, [f, "EdgeHTML"]],
                  [
                    /(presto)\/([\w\.]+)/i,
                    /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,
                    /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                    /(icab)[\/\s]([23]\.[\d\.]+)/i,
                  ],
                  [f, v],
                  [/rv\:([\w\.]{1,9}).+(gecko)/i],
                  [v, f],
                ],
                os: [
                  [/microsoft\s(windows)\s(vista|xp)/i],
                  [f, v],
                  [
                    /(windows)\snt\s6\.2;\s(arm)/i,
                    /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
                    /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i,
                  ],
                  [f, [v, N.str, k.os.windows.version]],
                  [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                  [
                    [f, "Windows"],
                    [v, N.str, k.os.windows.version],
                  ],
                  [/\((bb)(10);/i],
                  [[f, "BlackBerry"], v],
                  [
                    /(blackberry)\w*\/?([\w\.]*)/i,
                    /(tizen)[\/\s]([\w\.]+)/i,
                    /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i,
                    /linux;.+(sailfish);/i,
                  ],
                  [f, v],
                  [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                  [[f, "Symbian"], v],
                  [/\((series40);/i],
                  [f],
                  [/mozilla.+\(mobile;.+gecko.+firefox/i],
                  [[f, "Firefox OS"], v],
                  [
                    /(nintendo|playstation)\s([wids34portablevu]+)/i,
                    /(mint)[\/\s\(]?(\w*)/i,
                    /(mageia|vectorlinux)[;\s]/i,
                    /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i,
                    /(hurd|linux)\s?([\w\.]*)/i,
                    /(gnu)\s?([\w\.]*)/i,
                  ],
                  [f, v],
                  [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                  [[f, "Chromium OS"], v],
                  [/(sunos)\s?([\w\.\d]*)/i],
                  [[f, "Solaris"], v],
                  [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                  [f, v],
                  [/(haiku)\s(\w+)/i],
                  [f, v],
                  [
                    /cfnetwork\/.+darwin/i,
                    /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i,
                  ],
                  [
                    [v, /_/g, "."],
                    [f, "iOS"],
                  ],
                  [
                    /(mac\sos\sx)\s?([\w\s\.]*)/i,
                    /(macintosh|mac(?=_powerpc)\s)/i,
                  ],
                  [
                    [f, "Mac OS"],
                    [v, /_/g, "."],
                  ],
                  [
                    /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
                    /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
                    /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                    /(unix)\s?([\w\.]*)/i,
                  ],
                  [f, v],
                ],
              },
              M = function (i, e) {
                if (
                  ("object" === typeof i && ((e = i), (i = r)),
                  !(this instanceof M))
                )
                  return new M(i, e).getResult();
                var s =
                    i ||
                    (o && o.navigator && o.navigator.userAgent
                      ? o.navigator.userAgent
                      : a),
                  n = e ? A.extend(R, e) : R;
                return (
                  (this.getBrowser = function () {
                    var i = { name: r, version: r };
                    return (
                      N.rgx.call(i, s, n.browser),
                      (i.major = A.major(i.version)),
                      i
                    );
                  }),
                  (this.getCPU = function () {
                    var i = { architecture: r };
                    return N.rgx.call(i, s, n.cpu), i;
                  }),
                  (this.getDevice = function () {
                    var i = { vendor: r, model: r, type: r };
                    return N.rgx.call(i, s, n.device), i;
                  }),
                  (this.getEngine = function () {
                    var i = { name: r, version: r };
                    return N.rgx.call(i, s, n.engine), i;
                  }),
                  (this.getOS = function () {
                    var i = { name: r, version: r };
                    return N.rgx.call(i, s, n.os), i;
                  }),
                  (this.getResult = function () {
                    return {
                      ua: this.getUA(),
                      browser: this.getBrowser(),
                      engine: this.getEngine(),
                      os: this.getOS(),
                      device: this.getDevice(),
                      cpu: this.getCPU(),
                    };
                  }),
                  (this.getUA = function () {
                    return s;
                  }),
                  (this.setUA = function (i) {
                    return (s = i), this;
                  }),
                  this
                );
              };
            (M.VERSION = t),
              (M.BROWSER = { NAME: f, MAJOR: m, VERSION: v }),
              (M.CPU = { ARCHITECTURE: h }),
              (M.DEVICE = {
                MODEL: p,
                VENDOR: g,
                TYPE: b,
                CONSOLE: E,
                MOBILE: S,
                SMARTTV: O,
                TABLET: x,
                WEARABLE: T,
                EMBEDDED: y,
              }),
              (M.ENGINE = { NAME: f, VERSION: v }),
              (M.OS = { NAME: f, VERSION: v }),
              typeof e !== l
                ? (typeof i !== l && i.exports && (e = i.exports = M),
                  (e.UAParser = M))
                : "function" === u && s(3)
                ? ((n = function () {
                    return M;
                  }.call(e, s, e, i)),
                  n === r || (i.exports = n))
                : o && (o.UAParser = M);
            var I = o && (o.jQuery || o.Zepto);
            if (typeof I !== l) {
              var _ = new M();
              (I.ua = _.getResult()),
                (I.ua.get = function () {
                  return _.getUA();
                }),
                (I.ua.set = function (i) {
                  _.setUA(i);
                  var e = _.getResult();
                  for (var s in e) I.ua[s] = e[s];
                });
            }
          })("object" === typeof window ? window : this);
        },
        function (i, e) {
          (function (e) {
            i.exports = e;
          }.call(e, {}));
        },
        function (i, e, s) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n =
              Object.assign ||
              function (i) {
                for (var e = 1; e < arguments.length; e++) {
                  var s = arguments[e];
                  for (var n in s)
                    Object.prototype.hasOwnProperty.call(s, n) && (i[n] = s[n]);
                }
                return i;
              },
            o = s(0),
            r = o.DEVICE_TYPES,
            t = o.defaultData,
            a = function (i) {
              switch (i) {
                case r.MOBILE:
                  return { isMobile: !0 };
                case r.TABLET:
                  return { isTablet: !0 };
                case r.SMART_TV:
                  return { isSmartTV: !0 };
                case r.CONSOLE:
                  return { isConsole: !0 };
                case r.WEARABLE:
                  return { isWearable: !0 };
                case r.BROWSER:
                  return { isBrowser: !0 };
                default:
                  return t;
              }
            },
            d = function (i, e, s, n, o) {
              return {
                isBrowser: i,
                browserMajorVersion: e.major,
                browserFullVersion: e.version,
                browserName: e.name,
                engineName: s.name || !1,
                engineVersion: s.version,
                osName: n.name,
                osVersion: n.version,
                userAgent: o,
              };
            },
            u = function (i, e, s, o) {
              return n({}, i, {
                vendor: e.vendor,
                model: e.model,
                os: s.name,
                osVersion: s.version,
                ua: o,
              });
            },
            l = function (i, e, s, n) {
              return {
                isSmartTV: i,
                engineName: e.name,
                engineVersion: e.version,
                osName: s.name,
                osVersion: s.version,
                userAgent: n,
              };
            },
            c = function (i, e, s, n) {
              return {
                isConsole: i,
                engineName: e.name,
                engineVersion: e.version,
                osName: s.name,
                osVersion: s.version,
                userAgent: n,
              };
            },
            w = function (i, e, s, n) {
              return {
                isWearable: i,
                engineName: e.name,
                engineVersion: e.version,
                osName: s.name,
                osVersion: s.version,
                userAgent: n,
              };
            },
            m = (e.getNavigatorInstance = function () {
              return (
                !(
                  "undefined" === typeof window ||
                  (!window.navigator && !navigator)
                ) &&
                (window.navigator || navigator)
              );
            }),
            p = (e.isIOS13Check = function (i) {
              var e = m();
              return (
                e &&
                e.platform &&
                (-1 !== e.platform.indexOf(i) ||
                  ("MacIntel" === e.platform &&
                    e.maxTouchPoints > 1 &&
                    !window.MSStream))
              );
            });
          i.exports = {
            checkType: a,
            broPayload: d,
            mobilePayload: u,
            stvPayload: l,
            consolePayload: c,
            wearPayload: w,
            getNavigatorInstance: m,
            isIOS13Check: p,
          };
        },
      ]);
    },
    d816: function (i, e, s) {
      "use strict";
      var n = function () {
          var i = this,
            e = i.$createElement,
            s = i._self._c || e;
          return s("section", { class: i.chainName }, [
            s("div", { staticClass: "tip-msg-h5" }, [
              s("div", { staticClass: "text-msg-h5" }, [
                s("p", { staticClass: "text-info text-info1" }, [
                  i._v(i._s(i.$t("JoinTheDecentralized"))),
                ]),
                s(
                  "p",
                  {
                    staticClass: "p-text",
                    on: {
                      click: function (e) {
                        return i.$router.push("/introduce");
                      },
                    },
                  },
                  [s("button", [i._v(i._s(i.$t("ApplyNow")))])]
                ),
              ]),
            ]),
            s("div", { staticClass: "tip-msg-pc" }, [
              s("div", { staticClass: "div-text" }, [
                s("p", { staticClass: "text-info" }, [
                  i._v(i._s(i.$t("JoinTheDecentralized"))),
                ]),
              ]),
              s(
                "p",
                {
                  staticClass: "p-text",
                  on: {
                    click: function (e) {
                      return i.$router.push("/introduce");
                    },
                  },
                },
                [s("button", [i._v(i._s(i.$t("ApplyToJoin")))])]
              ),
            ]),
          ]);
        },
        o = [],
        r = {
          name: "apply-tip",
          components: {},
          data: function () {
            return {};
          },
          methods: {},
        },
        t = r,
        a = (s("f2db"), s("2877")),
        d = Object(a["a"])(t, n, o, !1, null, "4334412c", null);
      e["a"] = d.exports;
    },
    f2db: function (i, e, s) {
      "use strict";
      s("0adc");
    },
  },
]);
