(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["Boardroom~liquidity~tradeReward"],
  {
    "0edc": function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAB4CAMAAAB4gHRrAAAAflBMVEUAAACAkLCAkLCAj7CQwOCAj7CAkLCBkbGEl7iEl7WAkK+AkLCAkLCAkLGCkrKLoMOAkLCAkLCAj7CAkLCAkbCBkLCAkLCAkLCAkLCBkbCBkLKCk7CCkbODlLGCmLmAka+BkLB/kLCAkK+AkbCBkbGBkbKCk7GAkLGBkbF/j68+xf3dAAAAKXRSTlMAsvfrA/uVPRIN2dPBUyYH8OS6qoVynstsWUYtIRwXZmTes42ANjF4TunAJAIAAAHCSURBVGje7NVXbsMwFETRMaleXGTLvbdk9r/BAAkcwaZsiY/61FnA+yHuEA02QaJ0cfTgZObzVzqEg4AP2uFOyUoSQWjtk5XCg8hwzCcXSMQpX6xgzxvwlboJnpqmyR6WVqyzGMHKXbHWHDb2E75Ror1Rxnf8taQB07h1FUt+ksRoJfT50blVFVvNBjNRA6SgiimbqTsaXGkQVJGznexjFZsxDfZVRCe2tsQ7Xsb2/FDSgElvUetIO2lc24CipSlMO01rV3NiFhTIzQYk1AZPvihzioDKt0+hzDO+WZGgaiChg8OjgYIGQRUXutE7Y2JEFh4QT+hsCZR0pz0U7MANmh04dHUmYQdyBHTnRwjp7gxgTldqCyDOXK/kf/sZKDpIw/85L4OBzHS2Rq/X6/20a8c2AMNADAOBNMkEqbP/lBnAjYEjYBfWEi+Rf3IypDkw4bl7guNbVYGomEQ1KSptmzXRpl5HZb+ZHtEQqmaZj8TrTibrFw9on/MOF3rU4eDFMZBDqRyRObBzfNjDTEerDnodO/cQ3JG8CwLXFZE8mcxrKsfFkmsul26uAF1Iuh51WevqOBbZrtVd8q9/OZh+gPgBZoCcXIMKE0EAAAAASUVORK5CYII=";
    },
    "178e": function (t, e, s) {},
    "1c4e": function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAaVBMVEUAAACA//+qqv+AqtWSkraAlb+JnbGAlbWAlLWCk7CAkLGBkLCBj7KAj6+BkLCAkbCAj7GAkLCAj7CAj7CAkLCAka+AkLCAkLCAkLCAj7CAj6+AkK+AkLCAkLCAj7CAkK9/j7CAkK9/j691/8ocAAAAInRSTlMAAgMGBwwNGCYtLkdJUFdkgpGSlJWWsb/H2Nnj5fHy8/T8LCZhjwAAAQJJREFUOMu1lMtygzAMRQ0BQosTaHkGQyHn/z8yG4dCrHbURe9K9pyRbL2M2XQqmn5clrFvipP5Sed2ZtPcnkUoqVYOWqtEcDUQaAgcvjsAXG3zNM1t7Y9vL74cwFTGz4u4nADcwV8yAHTZ/i7rAIb9+yqAj+gYIfoEqHYhV6CLXt8bdcD6HbYFpiz8fTYB7Zb7GSilXJbA/KxHAbhYwmIHFP7QALVcvxpovN0DVsYs0Ht7BHIZy4HR2wuQylgKLDrs629BlV9QJkSZXmWxlKXXNpKyLX9p8luiGRnuV8UAhpw0zrd7yEnL4Spw0qoROWFxyVyo/+EuOs4ZFafAzMU5+wBGJDYhE3tJQgAAAABJRU5ErkJggg==";
    },
    "1d12": function (t, e, s) {
      "use strict";
      var a = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "span",
            {
              staticClass: "sort",
              on: {
                click: function (e) {
                  return t.sort(t.num);
                },
              },
            },
            [
              a("span", [t._v(t._s(t.name))]),
              a("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.sortType === t.num && "0" === t.sortSide,
                    expression: "sortType === num && sortSide === '0'",
                  },
                ],
                attrs: { src: s("8219"), alt: "" },
              }),
              a("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.sortType === t.num && "1" === t.sortSide,
                    expression: "sortType === num && sortSide === '1'",
                  },
                ],
                attrs: { src: s("4ee8"), alt: "" },
              }),
              a("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.sortType !== t.num,
                    expression: "sortType !== num",
                  },
                ],
                attrs: { src: s("0edc"), alt: "" },
              }),
            ]
          );
        },
        i = [],
        n = {
          name: "h5sort",
          data: function () {
            return { sortNum: 1 };
          },
          props: {
            name: { type: String, default: "" },
            sortType: { type: String, default: "" },
            sortSide: { type: String, default: "1" },
            num: { type: String, default: "" },
          },
          beforeMount: function () {},
          computed: {},
          methods: {
            sort: function (t) {
              (this.sortNum = 1 == this.sortNum ? 2 : 1),
                this.$emit("sort", this.num, this.sortSide, this.sortNum);
            },
          },
        },
        r = n,
        o = (s("1deb"), s("2877")),
        c = Object(o["a"])(r, a, i, !1, null, "40c56164", null);
      e["a"] = c.exports;
    },
    "1deb": function (t, e, s) {
      "use strict";
      s("1f49");
    },
    "1f49": function (t, e, s) {},
    3570: function (t, e, s) {
      "use strict";
      s("9fca");
    },
    "4ee8": function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAB4CAMAAABmSUTYAAABIFBMVEUAAAAEGEOAkLBgaZOAkK8EGEMiIlGAj68EGUONnMaCk7KKo8AEGEMFGEOAkLAFGEOAj7CDkLMGGkaClLIWLEsEGEOAkLCAj7CAkLCAkLCAkLCAkK+AkK8FGUOAkLCBj7GAj7EFGUSAkbEFGkYMIEcEGUQEGEQFGUQFGUMFGEOAj68EGUOAkLAEGUMFGEOAkLCAkLAFGEMEGEQEGUQEGESBkbAFGESAkbAFGESAkLEGGUWBkbIHGkQHGkUIG0UJGkeClbaAkLEQIU6AkK+AkLCAj6+Aj7AFGUQEGEMFGUQFGUQGGEMGGUSBkbEFGUOBkLGBkbGAkrOCk7EEGkWAkrMFHEYGHESCkbEIH0cKHkaAkLAFGUOAkbGGlLx/j68EGEPJ5dipAAAAXnRSTlMAsrED/PsH+PcGLgrq39nLwCcmGwvy8Ozn39SVjo6HeXJkQjAV7uTa2NO5ua6uqKeflH14c2xqY15dUkpKRkEcFg8P8+LNyMO/oZqIhoBvaE9GOzo2Ni0gIBnOwlgTbaiCygAAAopJREFUaN7t1uda4kAYhuFXExMDCogoimDB3tvaO3bX3t3ycf5nsciKlEmZ+SY/uQ/gva5AnpkggHOXSNuxbBc0RWJUZg9p7qSpYhAaDk+oagNsToJq2I/gGqA6fd3gWaMGp1Fw5E1qtAiGtzSJhqAsmiEX5g5UzZGr3i6ouSEPsSOouCdPM4ZKGcfkLQtpf/vJzxYkGQnyZT9LlyFgtbJBgc4cBHu0KdgSAnX3kYzhwDJOSYr5AH+LJGC1MkTSMn6t7Jgkr9W7la5eUjEID0cxUvPHo4wZUmRH4CZLyk4OIdoihoTYyrNNHEvMMkRrqOOcEZOZR60lYku/oWqYNGSiqHgwScecUAbXDcqcDOnaEY4Opv4oAOeY9N0ByFMI5oS/nqk/zKENCsEvAN3EI566CdJmRlASMUnXAMq2dJdmKtnmY6TBzjqoMO4HF1t5BtYO0dTU1NTUFAZj+3qhhWf5dgzf9iaLGtpzFv7bbCvqmU3h02t1h2sZn34XtbWNAjgohuAngJEwhuIAfoQx1Bnm0H4YQ/MArJ6ivhGUrITwZBZKrGntoV2UJcc1d1a+o23T/aXLdF+B6RSqLvk7He+oYcXZve6jzscEc2gdDV7aWTtXEGxyds4tiHLqOxNjcGHMKh/7o3BVUL1MtuEhqXYQXMPTrkorLQa8rcrvTBXgZ0F2ZzwJX6m4ZBl7CHDQITV0i0BPMq1cIojcjRm3IGM5sIwPSDEuAsp4gaSxTt+hTUh79WslBwXbPp9nBmT5Xr+TBaiZd9/pSUJRatq1jF0oe3drZRUM++LhtACWdaGMFHiuGi7nAzBZ53VlPEHAamUEGkbHa7/JtZamvp5rFZqs9YuO9qlcEkH+AQCQA+6EDUz0AAAAAElFTkSuQmCC";
    },
    "5a5d": function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAxElEQVRYR2NkYGBgWLvthMyv33+7GP7/d2BgYJAEidERPGdgZDzAxspcFuxl8YQR5Jjfv/5e/M/wX4iOjsCwipGB8R0rG7M+4/KNR5cx/P8fOZCOgdvNyLiccfmGI88GIJpw+f85yEH/kWUjA2wY6Rla6PaPOgg99EdDiFB6HA2h0RAiFAKE5EfT0GgIEQoBQvKjaWg0hAiFACH50TQ0GkKEQoCQ/GgaGg0hQiFASH40DQ2LEBpkgw2DbThm0A1YDbYhPQDBjQUirY1DbgAAAABJRU5ErkJggg==";
    },
    "685c": function (t, e, s) {
      "use strict";
      s("178e");
    },
    "69fa": function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAC+ElEQVRYR+2YW0gUYRTH/99c9iIWpYKUIhFU4qWIIImCNsmHSB8S1ETQLmQQWWixEAXZRlRCVpRgUBRlitlDBpUQpBBdiEArH1KELpZLJkay7c7uzs4Xk1qu36wzK67tg/s4O3POb//nf86Z/QgArLS7k2lAqaGU2AC6SL02ex/iJIR2EJ6zv62J+UJUGEVW3gCImz0IzUzDnMCtIpmHXI2Uovg/w/xJTwiaSEbVr4HZL1Oon0+cJKPKRaNBnXGGOSC9aswpFBUKxccCp4rNyFrG48MgxfE7Xrz7rGiyRbxkJgG4VWFBWjL/F2BoREHOSQ9kDaaIA50oNCE/S2TUyD3jxqfv7MSJKNC2tQIcRWYG5qebYlO1G/4AW7WIAaUmcWiosMAsEiarvUHCo04NGnV9RGJSz7cCzZVWJMdzDEzDUz/O3vOFbLaIAF3ebcbGNIFJ2vUxgJ11kqaZI7Y6yjeLqNhiYmCGXRQF5zwYHJl6dc6oQuuWc6jfYwHHBfsmoFCUX5Hwqk979kykNwSUFEewegmHvm8U779qB01cQNBSacXCWNbEFx74cO2JX29Ij74T6Znals6jttQMURhNdFs1ZasPdILyAg/c3G9BZsq/4Teevb1bxoHrXkMwhoBa7VYsTQzulrYuGUcavZDHOvdYvglF69nh1z+koPC8By7JMI++Qu3VMUiYx5bhZW8AB29IyE7ncbrEwmSU/BQlFyX0OvV9E5aHKreK2JXNdo0apGdAQUoCgdXEAh9t8uL+a9m4NGN36npI4ADHdjPy1rBzJVS2lhd+OO6GHn5TUeoCjT98OM+EMhvrk8nBu/sDKL0kae4pI3IZBlKD7bCJqMoVQQhbIvV7dWkW1Hrg/DH9/w1hAalJ1dI5ikwQ+GAoRaHYd9WLZz3aS9OIOobaXivQhlQetWXmIDPXtflQ/9jY8JsRD00OsmIxh705IuJjCR52ymh+Hn5HaYGFXTKj0k/3vjkgPeWi77Ah6o5jou7ASq1pNB3p/QYmhTfi22n1JQAAAABJRU5ErkJggg==";
    },
    8219: function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAB4CAMAAABrVzSfAAABHVBMVEUAAACAj7AEGESAj7CMn8GAj7C43P8EGEMEGUSBj7mAj7AFGEMEGUMfH1AtLVuAkLAFGUMFGEOAkLAFGUWCk7EJGkeAkLAEGEMEGEN/kLAFGEOAj7CAkK+AkLGAkLCBkLCAkLCAkLCBkbEGGkSAkbMIG0WBkrGBkrIFG0aCkrKCkrKDlreFmroVKkoEGUOAkLAEGEOAkLAEGUSAkLAEGUOAkLAFGEOAkLAFGEMFGUSBkLEEGUOAkLGAkLAFGEQHGUWAkbEFG0cGGkUHG0YKIEeCkbQOHksEGUMEGUSAkLCAkLAEGESAkLCAkLAFGUQFGUQGGEMGGUMEGkUIH0cFGUQFGUMFGUMGGkMEGEQEGUQFGkSAkbEGGkZ/j68EGEOPchmQAAAAXXRSTlMAsrH8B/gB/PkE7eBwCAXZ2czLZxwc8vLq3tTTlo6HcmtkTk1HQjgwLiokFwwM9sPAubmurqinnpKNfXl4Xl1HQTQpJRcREe/t6OXl4b+hl4mGOyDEwpuBf3thWFiLA8mMAAACjElEQVRo3u3W51LiUBjG8UeJCaEICgoWFBFs2Hvv2Lvbd3nv/zJ2Zmc3EFJOeeOXHX4X8J9kJs85gUg6t1pczu5eIBJzWfojfhBJ7Yb+eQHbZZJacmDq/0xt4m/geSaX4hA4ctRhIA19NYs6bUPbe5G8DqBpaZR8WNPQYm6Sr8I5dHyjANkrqJumQOu2+rYKFGwPiq6SFOZYcVurFCp+BhW7JHA/pLUtB2Ntb3ESe4KkoSLJSEFKeoCkWCeQsU2Sri8gdkDSRpfE27JIXq+JcOcFUvEq2FaW1PxCCHudFC2HrW2PlCUvEeSYNHzqh7+zOOn4ErCte9KT4mzLy6rB64m03byjU4o8GGs7sYhj0722i2vi+eq6aUaJ6wQt34ktmW49XIH4ck6uRhHYdH0kbMmPyv2gCAy0xk8ReIFjldisOTjO48S16zqHub119yFQyxLD8l4/3Mzp1+1ePc+pS3R1dXV1df1fzMrEVo+e8XIdHaqZJkNfyUa7o1iTZ20RLfOxJtc4WlaabLFZp5ZvRmDCyU1FkRt0cpNR5EY+KncaRW7DyRnDTb4pOPb5tREDDmOMnauizUKCWduHS5U3sw0TDv7HMraITjv6tcQCPIxB7fWfwkf+TjNXhq+ZPq3aDgIc6dRWDAQpqdce6ghkrylfOrMI0VC90H4i1Pyw4okuUFFZW48JkUPWtry2ONvSX1usCin5W6ncJDwYa9uBiMo9PmhA3riodleHAvtRsK0ZKGmMhOaO4MFYWwnKKsG1NRvSxL8GmQY0mBv+teF5aFkc891WBZryCZ/cIbSdeg+/LTCUOdsSr+02DxZ7xbMtlvqD64eVbTbhurf4vczfNz1EJIzyY6IvU1qAlN/lYPRGnN4szAAAAABJRU5ErkJggg==";
    },
    "9fca": function (t, e, s) {},
    aa95: function (t, e, s) {
      "use strict";
      var a = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            {
              staticClass: "title-banner",
              class: t.bannerName,
              on: { click: t.goHomeUrl },
            },
            [
              s(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "/" == t.routerName,
                      expression: "routerName=='/'",
                    },
                  ],
                  staticClass: "heco-home",
                },
                [
                  s(
                    "h1",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "Bsc" != t.chainName,
                          expression: "chainName!='Bsc'",
                        },
                      ],
                      staticClass: "home__banner-title",
                    },
					[
                  s(
                    "h2",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "Eth" != t.chainName,
                          expression: "chainName!='Eth'",
                        },
                      ],
                      staticClass: "home__banner-title",
                    },
					[
                  s(
                    "h1",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "Ftm" != t.chainName,
                          expression: "chainName!='Ftm'",
                        },
                      ],
                      staticClass: "home__banner-title",
                    },
                    [
                      t._v(
                        " " +
                          t._s(
                            128 == t.chainId
                              ? t.$t("MDEForEcoEurrencyTrading1")
                              : 56 == t.chainId
                              ? t.$t("MDEForEcoEurrencyTrading2")
							  : 1 == t.chainId
                              ? t.$t("MDEForEcoEurrencyTrading3")
							  : 250 == t.chainId
                              ? t.$t("MDEForEcoEurrencyTrading4")
                              : t.$t("MDEForEcoEurrencyTrading3")
                          ) +
                          " "
                      ),
                    ]
                  ),
                  s(
                    "p",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: "Bsc" != t.chainName,
                          expression: "chainName!='Bsc'",
                        },
                      ],
                      staticClass: "home__banner-describe",
                    },
                    [t._v(" " + t._s(t.$t("lightText")) + " ")]
                  ),
                ]
              ),
              s(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "/liquidity" == t.routerName,
                      expression: "routerName=='/liquidity'",
                    },
                  ],
                },
                [
                  s("div", { staticClass: "pc" }, [
                    s("h1", { staticClass: "home__banner-title" }, [
                      t._v(
                        " " +
                          t._s(t.$t("CurrentTransacObtainCurrencytionVolume")) +
                          " "
                      ),
                    ]),
                    s("div", { staticClass: "ban-center" }, [
                      s(
                        "p",
                        { staticClass: "liquidity-mdx ban-center" },
                        [
                          t._v(" " + t._s(t.$t("MDXtotal")) + " "),
                          s("CountUp", {
                            attrs: { endVal: t.liquidity_mdex || 0 },
                          }),
                          t._v(" USDT "),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  s("div", { staticClass: "h5 li-h5title ban-start" }, [
                    s("div", { staticClass: "act-title" }, [
                      s("p", [t._v(" " + t._s(t.$t("LiquidityMining")))]),
                      s("p"),
                    ]),
                    s(
                      "div",
                      {
                        staticClass: "li-title",
                        on: { click: t.h5_tab_evens },
                      },
                      [s("span", [t._v(" " + t._s(t.$t("TradePool")) + " ")])]
                    ),
                  ]),
                  s("div", { staticClass: "h5 li-banner-total" }, [
                    s("div", { staticClass: "banner-tit" }, [
                      t._v(" " + t._s(t.$t("TotalLockIn")) + "(USDT) "),
                    ]),
                    s(
                      "div",
                      { staticClass: "banner-sum" },
                      [
                        s("CountUp", {
                          attrs: { endVal: t.liquidity_mdex || 0 },
                        }),
                      ],
                      1
                    ),
                  ]),
                ]
              ),
              s(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "/trading" == t.routerName,
                      expression: "routerName=='/trading'",
                    },
                  ],
                },
                [
                  s("div", { staticClass: "pc" }, [
                    s("h1", { staticClass: "home__banner-title" }, [
                      t._v(" " + t._s(t.$t("tradeTitle")) + " "),
                    ]),
                    s("div", { staticClass: "new-banner-totals" }, [
                      s("div", { staticClass: "new-banner-total-white" }, [
                        s("div", { staticClass: "list-white" }, [
                          s("span", { staticClass: "list-white-one" }, [
                            t._v(
                              " " + t._s(t.$t("TotalRewardOfCurrentPool")) + " "
                            ),
                          ]),
                          s(
                            "span",
                            { staticClass: "list-white-own" },
                            [
                              s("CountUp", {
                                attrs: { endVal: t.trading_totalReward },
                              }),
                            ],
                            1
                          ),
                          s("span", { staticClass: "list-white-one" }, [
                            t._v("MDX"),
                          ]),
                        ]),
                        s("div", { staticClass: "list-white" }, [
                          s("span", { staticClass: "list-white-one" }, [
                            t._v(
                              " " +
                                t._s(
                                  t.$t("CurrentIndividualWithdrawableBonus")
                                ) +
                                " "
                            ),
                          ]),
                          s(
                            "span",
                            { staticClass: "list-white-own" },
                            [
                              s("CountUp", {
                                attrs: {
                                  endVal: t.trading_userReward,
                                  options: t.trading_options,
                                },
                              }),
                            ],
                            1
                          ),
                          s("span", { staticClass: "list-white-one" }, [
                            t._v("MDX"),
                          ]),
                        ]),
                      ]),
                      s(
                        "button",
                        {
                          staticClass: "new-list-white-banner",
                          attrs: { disabled: !t.trading_userReward },
                          on: { click: t.onWithdrawal },
                        },
                        [t._v(" " + t._s(t.$t("CashWithdrawalReward")) + " ")]
                      ),
                    ]),
                  ]),
                  s("div", { staticClass: "h5 li-h5title ban-start" }, [
                    s(
                      "div",
                      {
                        staticClass: "li-title",
                        on: { click: t.h5_tab_li_evens },
                      },
                      [
                        s("span", [
                          t._v(" " + t._s(t.$t("LiquidityMining")) + " "),
                        ]),
                      ]
                    ),
                    s("div", { staticClass: "act-title act-mining" }, [
                      s("p", [t._v(" " + t._s(t.$t("TradePool")))]),
                      s("p"),
                    ]),
                  ]),
                  s("div", { staticClass: "h5 trading-banner" }, [
                    s("div", { staticClass: "ban-start trading-ban-list" }, [
                      s("div", [
                        s("p", [
                          t._v(" " + t._s(t.$t("TotalRewardOfCurrentPool"))),
                        ]),
                        s(
                          "p",
                          [
                            s("CountUp", {
                              attrs: { endVal: t.trading_totalReward },
                            }),
                            s("span", { staticClass: "h5-sum" }, [t._v("MDX")]),
                          ],
                          1
                        ),
                      ]),
                      s("div", [
                        s("p", [
                          t._v(
                            " " +
                              t._s(t.$t("CurrentIndividualWithdrawableBonus"))
                          ),
                        ]),
                        s(
                          "p",
                          [
                            s("CountUp", {
                              attrs: {
                                endVal: t.trading_userReward,
                                options: t.trading_options,
                              },
                            }),
                            s("span", { staticClass: "h5-sum" }, [t._v("MDX")]),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    s("div", { staticClass: "ban-center " }, [
                      s(
                        "button",
                        {
                          staticClass: "new-banner-btn-dra",
                          attrs: { disabled: !t.trading_userReward },
                          on: { click: t.onWithdrawal },
                        },
                        [t._v(" " + t._s(t.$t("CashWithdrawalReward")) + " ")]
                      ),
                    ]),
                  ]),
                ]
              ),
              s(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "/boardroom" == t.routerName,
                      expression: "routerName=='/boardroom'",
                    },
                  ],
                },
                [
                  s("div", { staticClass: "pc" }, [
                    s("h1", { staticClass: "home__banner-title" }, [
                      t._v(" " + t._s(t.$t("text9")) + " "),
                    ]),
                    s("h2", { staticClass: "home__banner-describe" }, [
                      t._v(" " + t._s(t.$t("text8")) + " "),
                    ]),
                  ]),
                  s("div", { staticClass: "h5 boardroom-banner__title" }),
                ]
              ),
              s(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "/bridge" == t.routerName,
                      expression: "routerName=='/bridge'",
                    },
                  ],
                },
                [
                  s("div", { staticClass: "pc" }, [
                    s("h1", { staticClass: "home__banner-title" }, [
                      t._v(
                        " " +
                          t._s(
                            128 == t.chainId
                              ? t.$t("MDEForEcoEurrencyTrading1")
                              : 56 == t.chainId
                              ? t.$t("MDEForEcoEurrencyTrading2")
							  : 1 == t.chainId
                              ? t.$t("MDEForEcoEurrencyTrading3")
							  : 250 == t.chainId
                              ? t.$t("MDEForEcoEurrencyTrading4")
                              : t.$t("MDEForEcoEurrencyTrading5")
                          ) +
                          " "
                      ),
                    ]),
                    s("h2", { staticClass: "home__banner-describe" }, [
                      t._v(" " + t._s(t.$t("lightText")) + " "),
                    ]),
                  ]),
                  s("div", { staticClass: "h5 boardroom-banner__title" }),
                ]
              ),
              s(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "BoardroomPool" == t.getRoute,
                      expression: "'BoardroomPool'==getRoute",
                    },
                  ],
                },
                [
                  s("div", { staticClass: "pc" }, [
                    s("h1", { staticClass: "home__banner-title" }, [
                      t._v(" " + t._s(t.$t("poolTitle")) + " "),
                    ]),
                    s("h2", { staticClass: "home__banner-describe" }, [
                      t._v(
                        " " +
                          t._s(
                            128 == t.chainId
                              ? t.$t("poolDescribe1")
                              : 56 == t.chainId
                              ? t.$t("poolDescribe2")
                              : t.$t("poolDescribe3")
                          ) +
                          " "
                      ),
                    ]),
                  ]),
                  s("div", { staticClass: "h5 boardroom-banner__title" }),
                ]
              ),
              s(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "/introduce" === t.routerName,
                      expression: "routerName==='/introduce'",
                    },
                  ],
                },
                [
                  s("div", { staticClass: "pc" }, [
                    s("h1", { staticClass: "home__banner-title" }, [
                      t._v(" " + t._s(t.$t("introduce")) + " "),
                    ]),
                    s("h2", { staticClass: "introduceDsc" }, [
                      t._v(" " + t._s(t.$t("introduceDsc")) + " "),
                    ]),
                  ]),
                  t.isPC || "en" === t.$store.state.language
                    ? t._e()
                    : s("div", [
                        s("h1", { staticClass: "introduce_banner" }, [
                          t._v(" " + t._s(t.$t("introduce")) + " "),
                        ]),
                        s("h2", { staticClass: "introduceDsc" }, [
                          t._v(" " + t._s(t.$t("introduceDsc")) + " "),
                        ]),
                      ]),
                  t.isPC || "en" !== t.$store.state.language
                    ? t._e()
                    : s("div", [
                        s("p", { staticClass: "text-info" }, [
                          t._v(t._s(t.$t("introduceComplete"))),
                        ]),
                      ]),
                ]
              ),
            ]
          );
        },
        i = [],
        n =
          (s("ac1f"),
          s("466d"),
          s("a9e3"),
          s("b0c0"),
          s("5319"),
          {
            name: "HomeBanner",
            data: function () {
              return {
                userReward: 0,
                onresizeIsPC: !navigator.userAgent.match(
                  /(iPhone|iPod|Android|ios)/i
                ),
              };
            },
            props: {
              liquidity_mdex: { type: String | Number, default: 0 },
              trading_userReward: {
                type: String | Number | Boolean,
                default: 0,
              },
              trading_options: {
                type: Object | Array,
                default: function () {},
              },
              trading_totalReward: {
                type: String | Number | Boolean,
                default: 0,
              },
            },
            computed: {
              getRoute: function () {
                return this.$route.name;
              },
              isPC: function () {
                return this.$store.getters.isPC;
              },
              routerName: function () {
                return this.$store.state.routerName;
              },
              chainName: function () {
                return this.$store.state.chainName;
              },
              chainId: function () {
                return this.$store.getters.chainId;
              },
              bannerName: function () {
                var t =
                  "en" == this.$store.state.language
                    ? " Bsc-home-en"
                    : "Bsc-home-zh-CN";
                return "/" == this.routerName && "Bsc" == this.chainName
                  ? t
                  : this.chainName;
              },
            },
            mounted: function () {
              var t = this;
              window.onresize = function () {
                t.onresizeIsPC = !navigator.userAgent.match(
                  /(iPhone|iPod|Android|ios)/i
                );
              };
            },
            $computed: { bnp: "bnp" },
            methods: {
              h5_tab_li_evens: function () {
                this.$router.replace({ path: "/liquidity" });
              },
              h5_tab_evens: function () {
                this.$router.replace({ path: "/trading" });
              },
              onWithdrawal: function () {
                this.$emit("on-withdrawal");
              },
              goHomeUrl: function () {
                if ("Bsc" == this.chainName && "/" == this.routerName) {
                  var t =
                    "zh-CN" == this.$store.state.language
                      ? "https://mdexcom.zendesk.com/hc/zh-cn/articles/360059672551"
                      : "https://mdexcom.zendesk.com/hc/en-gb/articles/360059671831";
                  window.open(t);
                }
              },
            },
          }),
        r = n,
        o = (s("3570"), s("2877")),
        c = Object(o["a"])(r, a, i, !1, null, "3cbe7340", null);
      e["a"] = c.exports;
    },
    e150: function (t, e, s) {
      "use strict";
      var a = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("section", { staticClass: "selete", class: t.chainName }, [
            a("div", { staticClass: "sele-head" }, [
              a(
                "ul",
                { staticClass: "sele-wenzi" },
                [
                  t._l(t.list, function (e, s) {
                    return a(
                      "li",
                      {
                        key: s,
                        staticClass: "sele-span item-span",
                        class: e.show ? "sele-act-btn" : "",
                        on: {
                          click: function (a) {
                            return t.onlist(e, s);
                          },
                        },
                      },
                      [a("span", [t._v(" " + t._s(e.name))])]
                    );
                  }),
                  a("li", { staticClass: "li-hide" }),
                  a("li", { staticClass: "li-hide" }),
                ],
                2
              ),
              a("div", { staticClass: "se-input" }, [
                t.showCheck
                  ? a(
                      "div",
                      { staticClass: "action", on: { click: t.chenck } },
                      [
                        a("img", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "Heco" == t.chainName && t.actionChenck,
                              expression: "chainName=='Heco'&&actionChenck",
                            },
                          ],
                          attrs: { src: s("69fa"), alt: "" },
                        }),
                        a("img", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: "Bsc" == t.chainName && t.actionChenck,
                              expression: "chainName=='Bsc'&&actionChenck",
                            },
                          ],
                          attrs: { src: s("e1a0"), alt: "" },
                        }),
                        a("img", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !t.actionChenck,
                              expression: "!actionChenck",
                            },
                          ],
                          attrs: { src: s("5a5d"), alt: "" },
                        }),
                        a("span", [t._v(t._s(t.$t("Pledged")))]),
                      ]
                    )
                  : t._e(),
                a("div", { staticClass: "sele-input" }, [
                  a("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.searchValue,
                        expression: "searchValue",
                      },
                    ],
                    attrs: { type: "text", placeholder: t.inputText },
                    domProps: { value: t.searchValue },
                    on: {
                      input: function (e) {
                        e.target.composing || (t.searchValue = e.target.value);
                      },
                    },
                  }),
                  a("img", { attrs: { src: s("1c4e"), alt: "" } }),
                ]),
              ]),
            ]),
            t.listItem.length > 0
              ? a("div", { staticClass: "item-ul" }, [
                  a(
                    "ul",
                    { staticClass: "sele-item" },
                    t._l(t.listItem, function (e, s) {
                      return a(
                        "li",
                        {
                          key: s,
                          staticClass: "se-item-name child-item",
                          class: e.show ? "se-li-item-act" : "",
                          on: {
                            click: function (a) {
                              return t.onlistItem(e, s);
                            },
                          },
                        },
                        [a("span", [t._v(" " + t._s(e.name) + " ")])]
                      );
                    }),
                    0
                  ),
                ])
              : t._e(),
          ]);
        },
        i = [],
        n = s("b85c"),
        r = {
          name: "selete-table",
          data: function () {
            return {
              listAct: 0,
              listItemAct: 0,
              searchValue: "",
              listItem: [],
              actionChenck: !1,
              autoTapIndex: 0,
              autoTapChild: [],
            };
          },
          watch: {
            searchValue: function (t) {
              this.$emit("change-input", t);
            },
            list: function (t) {
              this.listItem = t[0].child || [];
            },
            chainName: function () {
              var t,
                e = Object(n["a"])(this.list);
              try {
                for (e.s(); !(t = e.n()).done; ) {
                  var s = t.value;
                  if (((s.show = !1), s.child)) {
                    var a,
                      i = Object(n["a"])(s.child);
                    try {
                      for (i.s(); !(a = i.n()).done; ) {
                        var r = a.value;
                        r.show = !1;
                      }
                    } catch (o) {
                      i.e(o);
                    } finally {
                      i.f();
                    }
                  }
                  s.child && s.child.length > 0 && (s.child[0].show = !0);
                }
              } catch (o) {
                e.e(o);
              } finally {
                e.f();
              }
              (this.list[0].show = !0),
                (this.listItem = this.list[0].child || []);
            },
          },
          props: {
            list: {
              type: Array,
              default: function () {
                return [];
              },
            },
            inputText: { type: String, default: "" },
            showCheck: { type: Boolean, default: !0 },
            autoTap: { type: Boolean, default: !1 },
          },
          beforeMount: function () {
            this.listItem = this.list[0].child || [];
          },
          computed: {
            chainName: function () {
              return this.changeList(), this.$store.state.chainName;
            },
            isPC: function () {
              return this.$store.getters.isPC;
            },
          },
          methods: {
            changeList: function () {},
            chenck: function () {
              if (
                ((this.actionChenck = !this.actionChenck),
                this.$emit("onchenck", this.actionChenck),
                this.autoTap)
              ) {
                for (var t in this.list) this.list[t].show = !1;
                this.actionChenck
                  ? ((this.list[0].show = !0),
                    this.$emit("change-list", { item: this.list[0], index: 0 }),
                    (this.listItem = []))
                  : ((this.list[this.autoTapIndex].show = !0),
                    this.$emit("change-list", {
                      item: this.list[this.autoTapIndex],
                      index: this.autoTapIndex,
                    }),
                    (this.listItem = this.autoTapChild));
              }
            },
            setAct: function (t, e, s, a, i) {
              for (var n in ((this[t][this[e]].show = !1), this[t]))
                this[t][n].show = !1;
              (this[t][s].show = !0),
                (this[e] = s),
                null != a && this.$emit(i, { item: a, index: s });
            },
            onlist: function (t, e) {
              for (var s in this.list) this.list[s].show = !1;
              (this.list[e].show = !0),
                this.$emit("change-list", { item: t, index: e }),
                (this.listItem = t.child || []),
                (this.autoTapChild = this.listItem),
                (this.autoTapIndex = e);
            },
            onlistItem: function (t, e) {
              this.setAct("listItem", "listItemAct", e, t, "change-list-item");
            },
          },
        },
        o = r,
        c = (s("685c"), s("2877")),
        A = Object(c["a"])(o, a, i, !1, null, "ef910fec", null);
      e["a"] = A.exports;
    },
    e1a0: function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAC6UlEQVRYR+2YXUgUURiG3zOzOzM7SaUZZpkoGqYh/sVSJFREQQj9XBoVUUF0VQQJgRDUTUZXBV5EBhIkVFd144VWIBqJZkmWLP0gZq0IG+o6u7OzMydmyXQ5YzOpu82Fcznznfd95jvfOefjEABQXiDPMHATFHsokGu+S9dDgB8geMlxaJD34hsxYXQd7wBkpQtiAZ8Qz6OChDvxkFLU/2eYhD0haCPhDnxP9zQt9PPm9JHpDlA3ZGeWYQXIbjZWMuSKDBEhB2JZK/jMfTCUYagfz8KYem3Jlvop4yT4arrBr67+A2CoQSjd+QDVGKiUA4lb78G76QxjPNNTAhoJpBfIk3saUlkLY0q1EGa6NgJUTR8Ql1EF3/YeEF5iTKPvjyE+3pbGGvJkQvb3g/MVMqax0duIBS4suNhSUEMEUsUzeLLrGFN98hUi/bstizllR4e3oBFi0XW2bmITUHqrQNWxv25Fy5ohPms/pMp2EMIlmVKqIzpwAPrP53b7IhwBEakQ/NpdMMJDMMID1sUobobsfwMiZDPf1U9XoI3csIVJ9ER27QeffQhS+WMQTkgIxkbvIBa4CMCYMyACfDVd4Nf4GdP4xFNEB48ADrscWyB5xwdwq0qTjLTxR1CHTgA0lngvljTDm3eegTGUz1B6awB90lF2HGVIrg2CE3PYPw91Ijp4FJ71hyFte8AWsR5BpG8njLDZrjt/bDMkFDVBKGiwVNSnB8HJxSC8zG5+Q6cQD7Y6J/kdaQsE4oVYeh/e3OOOxbWxu1CHzzmOnx9oD5SIJhC23IKQf8nWRJ/qQ6Sv1vKcsh3sZJXNF/HmX4ZQ3ARCiKW2eWgqvdWg0REn3pYxDjM0N9az4STE0hYQzpMkSKmB6Ns66KH2RcM4WmVW6vy6g5DKnyQVs/rlKrSv15YEs2ggcyCXUQmhsBFme6oF2xAfa14yzJKAlsXdQuSfayhVILO67gNy3WWD665jXHdhZRaTm670fgHN6zG4YburpAAAAABJRU5ErkJggg==";
    },
  },
]);
