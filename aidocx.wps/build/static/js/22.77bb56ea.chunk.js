(this.webpackJsonpaidocx = this.webpackJsonpaidocx || []).push([
  [22],
  {
    286: function (e, t, a) {
      "use strict";
      var n = a(93),
        r = a(94),
        l = a(96),
        i = a(95),
        o = a(0),
        c = a.n(o),
        s = a(513),
        f = a(226),
        p = a(287),
        u = a.n(p),
        d = a(26),
        v = a(512),
        h = a(70),
        m = a(11),
        A = a(45),
        b = a(125),
        k = new Array("/Compose"),
        w = {
          backGrClr1: "#0078D4",
          frontClr1: "#ffffff",
          backGrClr2: "#ffffff",
          frontClr2: "#0078D4",
        },
        g = (function (e) {
          Object(l.a)(a, e);
          var t = Object(i.a)(a);
          function a() {
            var e;
            Object(n.a)(this, a);
            for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++)
              l[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(l))).onLinkClick = function (
                t
              ) {
                0 === t.props.itemKey &&
                  b.set("composing", !1, { expires: 365 }),
                  e.props.history.push({
                    pathname: k[t.props.itemKey],
                    state: {},
                  });
              }),
              (e.onComposeClick = function (t) {
                (w = {
                  backGrClr2: "#0078D4",
                  frontClr2: "#ffffff",
                  backGrClr1: "#f3f2f1",
                  frontClr1: "#0078D4",
                }),
                  e.props.history.push({ pathname: k[0], state: {} });
              }),
              (e.onMainClick = function (t) {
                b.set("composing", !1, { expires: 365 }),
                  e.props.history.push({ pathname: "/TaskHome", state: {} });
              }),
              (e.onPersonSchemaClick = function (t, a) {
                (w = {
                  backGrClr1: "#0078D4",
                  frontClr1: "#ffffff",
                  backGrClr2: "#f3f2f1",
                  frontClr2: "#0078D4",
                }),
                  e.props.history.push({
                    pathname: "/Compose/genTpl",
                    state: t,
                  });
              }),
              (e.handleAvatarClick = function (e, t) {
                if ("" !== e.curUser.user_id) {
                  var a = {};
                  (a.tel = e.curUser.tel),
                    (a.user_id = e.curUser.user_id),
                    Object(A.b)(
                      "".concat(d.apiPublicPath, "users/reglogin/addtoken"),
                      a
                    ).then(
                      function (t) {
                        if (t.success) {
                          var a =
                            d.RootPath +
                            "LoginOnce/tel/" +
                            e.curUser.tel +
                            "/ID/" +
                            e.curUser.user_id +
                            "/direct/_UserCenter_profile";
                          console.log("fullurl:", a), window.open(a);
                        }
                      },
                      function (e) {}
                    );
                }
              }),
              e
            );
          }
          return (
            Object(r.a)(a, [
              { key: "componentDidMount", value: function () {} },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return (
                    console.log("webaddinheader_", this.props.curUser.user_id),
                    c.a.createElement(
                      "div",
                      { className: "checkTop" },
                      c.a.createElement(
                        v.a,
                        {
                          horizontal: !0,
                          horizontalAlign: "start",
                          tokens: { childrenGap: 5 },
                          verticalAlign: "center",
                        },
                        c.a.createElement(
                          v.a.Item,
                          null,
                          c.a.createElement(
                            "div",
                            {
                              style: {
                                display: "inline-block",
                                marginLeft: "5px",
                                marginTop: "2px",
                                float: "left",
                                cursor: "pointer",
                              },
                              onClick: this.onMainClick,
                            },
                            c.a.createElement("img", {
                              src: u.a,
                              height: "45px",
                            })
                          )
                        ),
                        c.a.createElement(
                          v.a.Item,
                          { grow: !0 },
                          c.a.createElement("div", {
                            style: { fontSize: "16px", color: "#0078D4" },
                            id: "status",
                          })
                        ),
                        void 0 === this.props.curUser.user_id
                          ? c.a.createElement(f.a, {
                              iconProps: { iconName: "AddFriend" },
                              onClick: function () {
                                return e.props.showModal();
                              },
                              allowDisabledFocus: !0,
                            })
                          : c.a.createElement(
                              "div",
                              { style: { marginRight: "10px" } },
                              c.a.createElement(
                                "span",
                                {
                                  style: {
                                    fontSize: "16px",
                                    textAlign: "center",
                                    display: "inline-flex",
                                    position: "relative",
                                    top: "6px",
                                  },
                                },
                                c.a.createElement(
                                  "span",
                                  {
                                    style: {
                                      display: "inline-block",
                                      minWidth: "30px",
                                      maxWidth: "60px",
                                      overflow: "hidden",
                                    },
                                  },
                                  c.a.createElement(
                                    s.a,
                                    {
                                      content:
                                        "\u67e5\u770b\u7528\u6237\uff1a" +
                                        this.props.curUser.username,
                                      id: "headerUser",
                                      calloutProps: { gapSpace: 0 },
                                      styles: {
                                        root: {
                                          display: "inline-block",
                                          paddingRight: "10px",
                                        },
                                      },
                                    },
                                    c.a.createElement("img", {
                                      onClick: this.handleAvatarClick.bind(
                                        this,
                                        this.props
                                      ),
                                      src:
                                        ""
                                          .concat(d.RootPath)
                                          .slice(
                                            0,
                                            "".concat(d.RootPath).length - 1
                                          ) +
                                        "".concat(
                                          d.apiPublicPath,
                                          "users/avatar?user_id="
                                        ) +
                                        this.props.curUser.user_id +
                                        "&random=" +
                                        Math.random(),
                                      className: "userIcon",
                                      alt: "",
                                    })
                                  )
                                )
                              ),
                              c.a.createElement(
                                "div",
                                {
                                  style: {
                                    display: "inline-block",
                                    float: "left",
                                    cursor: "pointer",
                                    marginRight: "8px",
                                    padding: 8,
                                    backgroundColor: w.backGrClr1,
                                    color: w.frontClr1,
                                  },
                                  onClick: this.onComposeClick.bind(this),
                                },
                                "\u6392\u7248"
                              ),
                              c.a.createElement(
                                "div",
                                {
                                  style: {
                                    display: "inline-block",
                                    float: "left",
                                    cursor: "pointer",
                                    marginRight: "8px",
                                    padding: 8,
                                    backgroundColor: w.backGrClr2,
                                    color: w.frontClr2,
                                  },
                                  onClick: this.onPersonSchemaClick.bind(
                                    this,
                                    this.props
                                  ),
                                },
                                "\u65b9\u6848"
                              ),
                              c.a.createElement(
                                s.a,
                                { content: "\u5355\u51fb\u9000\u51fa\uff01" },
                                c.a.createElement(f.a, {
                                  iconProps: { iconName: "SignOut" },
                                  onClick: function () {
                                    e.props.logout({});
                                  },
                                  allowDisabledFocus: !0,
                                })
                              )
                            )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(c.a.Component),
        C = {
          signup: m.i,
          login: m.d,
          logout: m.f,
          showModal: m.h,
          hideModal: m.c,
        };
      t.a = Object(h.b)(function (e) {
        return {
          curUser: e.current,
          user_id: { user_id: e.current.user_id },
          isLoginIn: !!e.current.username,
          isModalLoading: e.isLoading,
          isModalVisible: e.modalVisible,
        };
      }, C)(g);
    },
    287: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    499: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(93),
        r = a(94),
        l = a(96),
        i = a(95),
        o = a(0),
        c = a.n(o),
        s = a(286),
        f = (function (e) {
          Object(l.a)(a, e);
          var t = Object(i.a)(a);
          function a() {
            return Object(n.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props.history;
                  return c.a.createElement(
                    "div",
                    null,
                    c.a.createElement(s.a, { history: e }),
                    c.a.createElement(
                      "div",
                      { align: "center" },
                      c.a.createElement(
                        "h2",
                        null,
                        "\u57fa\u672c\u6392\u7248\u529f\u80fd"
                      ),
                      c.a.createElement("iframe", {
                        allowFullScreen: !0,
                        mozallowfullscreen: !0,
                        webkitallowfullscreen: !0,
                        src: "https://share.polyv.net/front/video/preview?vid=80e36b9a6ffb5ea0910e1840021507c3_8",
                      })
                    ),
                    c.a.createElement(
                      "div",
                      { align: "center" },
                      c.a.createElement(
                        "h2",
                        null,
                        "\u4e00\u52b3\u5168\u9038\u6392\u7248\u6a21\u5f0f"
                      ),
                      c.a.createElement("iframe", {
                        allowFullScreen: !0,
                        mozallowfullscreen: !0,
                        webkitallowfullscreen: !0,
                        src: "https://share.polyv.net/front/video/preview?vid=80e36b9a6f9c8b1afd4425dbda57e7bb_8",
                      })
                    ),
                    c.a.createElement(
                      "div",
                      { align: "center" },
                      c.a.createElement(
                        "h2",
                        null,
                        "\u5ba2\u6237\u7aef\u89c6\u9891\u6f14\u793a"
                      ),
                      c.a.createElement("iframe", {
                        allowFullScreen: !0,
                        mozallowfullscreen: !0,
                        webkitallowfullscreen: !0,
                        src: "https://share.polyv.net/front/video/preview?vid=80e36b9a6f9f5862b6e157af2269c22a_8",
                      })
                    ),
                    c.a.createElement(
                      "div",
                      { align: "center" },
                      c.a.createElement(
                        "h2",
                        null,
                        "\u6574\u7406\u529f\u80fd\u7fa4\u89c6\u9891\u6f14\u793a"
                      ),
                      c.a.createElement("iframe", {
                        allowFullScreen: !0,
                        mozallowfullscreen: !0,
                        webkitallowfullscreen: !0,
                        src: "https://share.polyv.net/front/video/preview?vid=80e36b9a6f9fdbd2038349047c7a8b03_8",
                      })
                    ),
                    c.a.createElement(
                      "div",
                      { align: "center" },
                      c.a.createElement(
                        "h2",
                        null,
                        "\u5199\u4f5c\u529f\u80fd\u7fa4\u89c6\u9891\u6f14\u793a"
                      ),
                      c.a.createElement("iframe", {
                        allowFullScreen: !0,
                        mozallowfullscreen: !0,
                        webkitallowfullscreen: !0,
                        src: "https://share.polyv.net/front/video/preview?vid=80e36b9a6f736413850af7f4da3f2325_8",
                      })
                    ),
                    c.a.createElement(
                      "div",
                      { align: "center" },
                      c.a.createElement(
                        "h2",
                        null,
                        "\u6392\u7248\u529f\u80fd\u7fa4\u89c6\u9891\u6f14\u793a"
                      ),
                      c.a.createElement("iframe", {
                        allowFullScreen: !0,
                        mozallowfullscreen: !0,
                        webkitallowfullscreen: !0,
                        src: "https://share.polyv.net/front/video/preview?vid=80e36b9a6f9124c4d20acbc465a4cbd5_8",
                      })
                    ),
                    c.a.createElement(
                      "div",
                      { align: "center" },
                      c.a.createElement(
                        "h2",
                        null,
                        "\u901a\u7528\u529f\u80fd\u7fa4\u89c6\u9891\u6f14\u793a"
                      ),
                      c.a.createElement("iframe", {
                        allowFullScreen: !0,
                        mozallowfullscreen: !0,
                        webkitallowfullscreen: !0,
                        src: "https://share.polyv.net/front/video/preview?vid=80e36b9a6f3181ad0b6e447c364041d5_8",
                      })
                    )
                  );
                },
              },
            ]),
            a
          );
        })(c.a.Component);
      t.default = f;
    },
  },
]);
//# sourceMappingURL=22.77bb56ea.chunk.js.map
