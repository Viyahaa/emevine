(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["introduce"],
  {
    3570: function (t, e, a) {
      "use strict";
      a("9fca");
    },
    5864: function (t, e, a) {},
    "67df": function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            { staticClass: "main", class: t.chainName },
            [
              a("title-banner"),
              a("div", { staticClass: "introduce" }, [
                a("section", { class: t.bannerName }),
                a("div", { staticClass: "list" }, [
                  a("h1", [t._v(t._s(t.$t("joinmedx")))]),
                  a("p", {
                    domProps: { innerHTML: t._s(t.$t("joinmedxDsc")) },
                  }),
                  a("div", { staticClass: "apply" }, [
                    a(
                      "a",
                      {
                        staticStyle: { "text-decoration": "underline" },
                        attrs: {
                          href: "https://docs.google.com/forms/d/e/1FAIpQLSem595jWpO5_A5fRj9W4-wX_3mg3ypqqNiXcC_yi-tpcbOaqA/viewform",
                          target: "_blank",
                        },
                      },
                      [t._v(t._s(t.$t("joinnow")))]
                    ),
                  ]),
                ]),
                a("div", { staticClass: "list" }, [
                  a("h1", [t._v(t._s(t.$t("joinLiquidity")))]),
                  a("p", {
                    domProps: { innerHTML: t._s(t.$t("joinLiquidityDsc")) },
                  }),
                  a("div", { staticClass: "apply" }, [
                    a(
                      "a",
                      {
                        staticStyle: { "text-decoration": "underline" },
                        attrs: {
                          href: "https://docs.google.com/forms/d/e/1FAIpQLSem595jWpO5_A5fRj9W4-wX_3mg3ypqqNiXcC_yi-tpcbOaqA/viewform",
                          target: "_blank",
                        },
                      },
                      [t._v(t._s(t.$t("joinnow")))]
                    ),
                  ]),
                ]),
                a("div", { staticClass: "list" }, [
                  a("h1", [t._v(t._s(t.$t("joinunit")))]),
                  a("p", {
                    domProps: { innerHTML: t._s(t.$t("joinunitDsc")) },
                  }),
                  a("div", { staticClass: "apply" }, [
                    a(
                      "a",
                      {
                        staticStyle: { "text-decoration": "underline" },
                        attrs: {
                          href: "https://docs.google.com/forms/d/e/1FAIpQLSem595jWpO5_A5fRj9W4-wX_3mg3ypqqNiXcC_yi-tpcbOaqA/viewform",
                          target: "_blank",
                        },
                      },
                      [t._v(t._s(t.$t("joinnow")))]
                    ),
                  ]),
                ]),
              ]),
            ],
            1
          );
        },
        i = [],
        n = a("aa95"),
        r = {
          name: "introduce",
          components: { TitleBanner: n["a"] },
          computed: {
            bannerName: function () {
              return "en" === this.$store.state.language
                ? "banner_en"
                : "banner";
            },
          },
        },
        o = r,
        c = (a("8560"), a("2877")),
        l = Object(c["a"])(o, s, i, !1, null, "368cf6ee", null);
      e["default"] = l.exports;
    },
    8560: function (t, e, a) {
      "use strict";
      a("5864");
    },
    "9fca": function (t, e, a) {},
    aa95: function (t, e, a) {
      "use strict";
      var s = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "div",
            {
              staticClass: "title-banner",
              class: t.bannerName,
              on: { click: t.goHomeUrl },
            },
            [
              a(
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
                  a(
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
                      t._v(
                        " " +
                          t._s(
                            128 == t.chainId
                              ? t.$t("EmevineFinance All-In-One DEX (Heco)")
                              : 56 == t.chainId
                              ? t.$t("EmevineFinance All-In-One DEX (Bsc)")
                              : 1 == t.chainId
                              ? t.$t("EmevineFinance All-In-One DEX (Eth)")
                              : 250 == t.chainId
                              ? t.$t("EmevineFinance All-In-One DEX (Ftm)")
                              : t.$t("MDEForEcoEurrencyTrading3")
                          ) +
                          " "
                      ),
                    ]
                  ),
                  a(
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
              a(
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
                  a("div", { staticClass: "pc" }, [
                    a("h1", { staticClass: "home__banner-title" }, [
                      t._v(
                        " " +
                          t._s(t.$t("CurrentTransacObtainCurrencytionVolume")) +
                          " "
                      ),
                    ]),
                    a("div", { staticClass: "ban-center" }, [
                      a(
                        "p",
                        { staticClass: "liquidity-mdx ban-center" },
                        [
                          t._v(" " + t._s(t.$t("MDXtotal")) + " "),
                          a("CountUp", {
                            attrs: { endVal: t.liquidity_mdex || 0 },
                          }),
                          t._v(" USDT "),
                        ],
                        1
                      ),
                    ]),
                  ]),
                  a("div", { staticClass: "h5 li-h5title ban-start" }, [
                    a("div", { staticClass: "act-title" }, [
                      a("p", [t._v(" " + t._s(t.$t("LiquidityMining")))]),
                      a("p"),
                    ]),
                    a(
                      "div",
                      {
                        staticClass: "li-title",
                        on: { click: t.h5_tab_evens },
                      },
                      [a("span", [t._v(" " + t._s(t.$t("TradePool")) + " ")])]
                    ),
                  ]),
                  a("div", { staticClass: "h5 li-banner-total" }, [
                    a("div", { staticClass: "banner-tit" }, [
                      t._v(" " + t._s(t.$t("TotalLockIn")) + "(USDT) "),
                    ]),
                    a(
                      "div",
                      { staticClass: "banner-sum" },
                      [
                        a("CountUp", {
                          attrs: { endVal: t.liquidity_mdex || 0 },
                        }),
                      ],
                      1
                    ),
                  ]),
                ]
              ),
              a(
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
                  a("div", { staticClass: "pc" }, [
                    a("h1", { staticClass: "home__banner-title" }, [
                      t._v(" " + t._s(t.$t("tradeTitle")) + " "),
                    ]),
                    a("div", { staticClass: "new-banner-totals" }, [
                      a("div", { staticClass: "new-banner-total-white" }, [
                        a("div", { staticClass: "list-white" }, [
                          a("span", { staticClass: "list-white-one" }, [
                            t._v(
                              " " + t._s(t.$t("TotalRewardOfCurrentPool")) + " "
                            ),
                          ]),
                          a(
                            "span",
                            { staticClass: "list-white-own" },
                            [
                              a("CountUp", {
                                attrs: { endVal: t.trading_totalReward },
                              }),
                            ],
                            1
                          ),
                          a("span", { staticClass: "list-white-one" }, [
                            t._v("VINE"),
                          ]),
                        ]),
                        a("div", { staticClass: "list-white" }, [
                          a("span", { staticClass: "list-white-one" }, [
                            t._v(
                              " " +
                                t._s(
                                  t.$t("CurrentIndividualWithdrawableBonus")
                                ) +
                                " "
                            ),
                          ]),
                          a(
                            "span",
                            { staticClass: "list-white-own" },
                            [
                              a("CountUp", {
                                attrs: {
                                  endVal: t.trading_userReward,
                                  options: t.trading_options,
                                },
                              }),
                            ],
                            1
                          ),
                          a("span", { staticClass: "list-white-one" }, [
                            t._v("MDX"),
                          ]),
                        ]),
                      ]),
                      a(
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
                  a("div", { staticClass: "h5 li-h5title ban-start" }, [
                    a(
                      "div",
                      {
                        staticClass: "li-title",
                        on: { click: t.h5_tab_li_evens },
                      },
                      [
                        a("span", [
                          t._v(" " + t._s(t.$t("LiquidityMining")) + " "),
                        ]),
                      ]
                    ),
                    a("div", { staticClass: "act-title act-mining" }, [
                      a("p", [t._v(" " + t._s(t.$t("TradePool")))]),
                      a("p"),
                    ]),
                  ]),
                  a("div", { staticClass: "h5 trading-banner" }, [
                    a("div", { staticClass: "ban-start trading-ban-list" }, [
                      a("div", [
                        a("p", [
                          t._v(" " + t._s(t.$t("TotalRewardOfCurrentPool"))),
                        ]),
                        a(
                          "p",
                          [
                            a("CountUp", {
                              attrs: { endVal: t.trading_totalReward },
                            }),
                            a("span", { staticClass: "h5-sum" }, [t._v("MDX")]),
                          ],
                          1
                        ),
                      ]),
                      a("div", [
                        a("p", [
                          t._v(
                            " " +
                              t._s(t.$t("CurrentIndividualWithdrawableBonus"))
                          ),
                        ]),
                        a(
                          "p",
                          [
                            a("CountUp", {
                              attrs: {
                                endVal: t.trading_userReward,
                                options: t.trading_options,
                              },
                            }),
                            a("span", { staticClass: "h5-sum" }, [t._v("MDX")]),
                          ],
                          1
                        ),
                      ]),
                    ]),
                    a("div", { staticClass: "ban-center " }, [
                      a(
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
              a(
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
                  a("div", { staticClass: "pc" }, [
                    a("h1", { staticClass: "home__banner-title" }, [
                      t._v(" " + t._s(t.$t("text9")) + " "),
                    ]),
                    a("h2", { staticClass: "home__banner-describe" }, [
                      t._v(" " + t._s(t.$t("text8")) + " "),
                    ]),
                  ]),
                  a("div", { staticClass: "h5 boardroom-banner__title" }),
                ]
              ),
              a(
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
                  a("div", { staticClass: "pc" }, [
                    a("h1", { staticClass: "home__banner-title" }, [
                      t._v(
                        " " +
                          t._s(
                            128 == t.chainId
                              ? t.$t("EmevineFinance All-In-One DEX (Heco)")
                              : 56 == t.chainId
                              ? t.$t("EmevineFinance All-In-One DEX (Bsc)")
                              : 1 == t.chainId
                              ? t.$t("EmevineFinance All-In-One DEX (Eth)")
                              : 250 == t.chainId
                              ? t.$t("EmevineFinance All-In-One DEX (Ftm)")
                              : t.$t("MDEForEcoEurrencyTrading3")
                          ) +
                          " "
                      ),
                    ]),
                    a("h2", { staticClass: "home__banner-describe" }, [
                      t._v(" " + t._s(t.$t("lightText")) + " "),
                    ]),
                  ]),
                  a("div", { staticClass: "h5 boardroom-banner__title" }),
                ]
              ),
              a(
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
                  a("div", { staticClass: "pc" }, [
                    a("h1", { staticClass: "home__banner-title" }, [
                      t._v(" " + t._s(t.$t("poolTitle")) + " "),
                    ]),
                    a("h2", { staticClass: "home__banner-describe" }, [
                      t._v(
                        " " +
                          t._s(
                            128 == t.chainId
                              ? t.$t("poolDescribe1")
                              : 56 == t.chainId
                              ? t.$t("poolDescribe2")
                              : 1 == t.chainId
                              ? t.$t("poolDescribe3")
                              : 250 == t.chainId
                              ? t.$t("poolDescribe4")
                              : t.$t("poolDescribe5")
                          ) +
                          " "
                      ),
                    ]),
                  ]),
                  a("div", { staticClass: "h5 boardroom-banner__title" }),
                ]
              ),
              a(
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
                  a("div", { staticClass: "pc" }, [
                    a("h1", { staticClass: "home__banner-title" }, [
                      t._v(" " + t._s(t.$t("introduce")) + " "),
                    ]),
                    a("h2", { staticClass: "introduceDsc" }, [
                      t._v(" " + t._s(t.$t("introduceDsc")) + " "),
                    ]),
                  ]),
                  t.isPC || "en" === t.$store.state.language
                    ? t._e()
                    : a("div", [
                        a("h1", { staticClass: "introduce_banner" }, [
                          t._v(" " + t._s(t.$t("introduce")) + " "),
                        ]),
                        a("h2", { staticClass: "introduceDsc" }, [
                          t._v(" " + t._s(t.$t("introduceDsc")) + " "),
                        ]),
                      ]),
                  t.isPC || "en" !== t.$store.state.language
                    ? t._e()
                    : a("div", [
                        a("p", { staticClass: "text-info" }, [
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
          (a("ac1f"),
          a("466d"),
          a("a9e3"),
          a("b0c0"),
          a("5319"),
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
                    "en" == this.$store.state.language
                      ? "https://mdexcom.zendesk.com/hc/en-gb/articles/360059671831";
                  window.open(t);
                }
              },
            },
          }),
        r = n,
        o = (a("3570"), a("2877")),
        c = Object(o["a"])(r, s, i, !1, null, "3cbe7340", null);
      e["a"] = c.exports;
    },
  },
]);
