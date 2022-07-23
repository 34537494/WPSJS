(this.webpackJsonpaidocx = this.webpackJsonpaidocx || []).push([
  [12],
  {
    286: function (e, t, a) {
      "use strict";
      var n = a(93),
        i = a(94),
        o = a(96),
        r = a(95),
        l = a(0),
        s = a.n(l),
        c = a(513),
        d = a(226),
        p = a(287),
        u = a.n(p),
        A = a(26),
        h = a(512),
        m = a(70),
        g = a(11),
        f = a(45),
        v = a(125),
        b = new Array("/Compose"),
        C = {
          backGrClr1: "#0078D4",
          frontClr1: "#ffffff",
          backGrClr2: "#ffffff",
          frontClr2: "#0078D4",
        },
        y = (function (e) {
          Object(o.a)(a, e);
          var t = Object(r.a)(a);
          function a() {
            var e;
            Object(n.a)(this, a);
            for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++)
              o[r] = arguments[r];
            return (
              ((e = t.call.apply(t, [this].concat(o))).onLinkClick = function (
                t
              ) {
                0 === t.props.itemKey &&
                  v.set("composing", !1, { expires: 365 }),
                  e.props.history.push({
                    pathname: b[t.props.itemKey],
                    state: {},
                  });
              }),
              (e.onComposeClick = function (t) {
                (C = {
                  backGrClr2: "#0078D4",
                  frontClr2: "#ffffff",
                  backGrClr1: "#f3f2f1",
                  frontClr1: "#0078D4",
                }),
                  e.props.history.push({ pathname: b[0], state: {} });
              }),
              (e.onMainClick = function (t) {
                v.set("composing", !1, { expires: 365 }),
                  e.props.history.push({ pathname: "/TaskHome", state: {} });
              }),
              (e.onPersonSchemaClick = function (t, a) {
                (C = {
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
                    Object(f.b)(
                      "".concat(A.apiPublicPath, "users/reglogin/addtoken"),
                      a
                    ).then(
                      function (t) {
                        if (t.success) {
                          var a =
                            A.RootPath +
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
            Object(i.a)(a, [
              { key: "componentDidMount", value: function () {} },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return (
                    console.log("webaddinheader_", this.props.curUser.user_id),
                    s.a.createElement(
                      "div",
                      { className: "checkTop" },
                      s.a.createElement(
                        h.a,
                        {
                          horizontal: !0,
                          horizontalAlign: "start",
                          tokens: { childrenGap: 5 },
                          verticalAlign: "center",
                        },
                        s.a.createElement(
                          h.a.Item,
                          null,
                          s.a.createElement(
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
                            s.a.createElement("img", {
                              src: u.a,
                              height: "45px",
                            })
                          )
                        ),
                        s.a.createElement(
                          h.a.Item,
                          { grow: !0 },
                          s.a.createElement("div", {
                            style: { fontSize: "16px", color: "#0078D4" },
                            id: "status",
                          })
                        ),
                        void 0 === this.props.curUser.user_id
                          ? s.a.createElement(d.a, {
                              iconProps: { iconName: "AddFriend" },
                              onClick: function () {
                                return e.props.showModal();
                              },
                              allowDisabledFocus: !0,
                            })
                          : s.a.createElement(
                              "div",
                              { style: { marginRight: "10px" } },
                              s.a.createElement(
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
                                s.a.createElement(
                                  "span",
                                  {
                                    style: {
                                      display: "inline-block",
                                      minWidth: "30px",
                                      maxWidth: "60px",
                                      overflow: "hidden",
                                    },
                                  },
                                  s.a.createElement(
                                    c.a,
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
                                    s.a.createElement("img", {
                                      onClick: this.handleAvatarClick.bind(
                                        this,
                                        this.props
                                      ),
                                      src:
                                        ""
                                          .concat(A.RootPath)
                                          .slice(
                                            0,
                                            "".concat(A.RootPath).length - 1
                                          ) +
                                        "".concat(
                                          A.apiPublicPath,
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
                              s.a.createElement(
                                "div",
                                {
                                  style: {
                                    display: "inline-block",
                                    float: "left",
                                    cursor: "pointer",
                                    marginRight: "8px",
                                    padding: 8,
                                    backgroundColor: C.backGrClr1,
                                    color: C.frontClr1,
                                  },
                                  onClick: this.onComposeClick.bind(this),
                                },
                                "\u6392\u7248"
                              ),
                              s.a.createElement(
                                "div",
                                {
                                  style: {
                                    display: "inline-block",
                                    float: "left",
                                    cursor: "pointer",
                                    marginRight: "8px",
                                    padding: 8,
                                    backgroundColor: C.backGrClr2,
                                    color: C.frontClr2,
                                  },
                                  onClick: this.onPersonSchemaClick.bind(
                                    this,
                                    this.props
                                  ),
                                },
                                "\u65b9\u6848"
                              ),
                              s.a.createElement(
                                c.a,
                                { content: "\u5355\u51fb\u9000\u51fa\uff01" },
                                s.a.createElement(d.a, {
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
        })(s.a.Component),
        E = {
          signup: g.i,
          login: g.d,
          logout: g.f,
          showModal: g.h,
          hideModal: g.c,
        };
      t.a = Object(m.b)(function (e) {
        return {
          curUser: e.current,
          user_id: { user_id: e.current.user_id },
          isLoginIn: !!e.current.username,
          isModalLoading: e.isLoading,
          isModalVisible: e.modalVisible,
        };
      }, E)(y);
    },
    287: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    303: function (e, t, a) {
      "use strict";
      var n = a(0),
        i = a.n(n),
        o = a(177),
        r = a(263),
        l = a(35),
        s = a.n(l),
        c = {
          mask: {
            position: "fixed",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            height: "100%",
            zIndex: 1e3,
          },
          modalWrap: {
            position: "fixed",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            zIndex: 1e3,
          },
          modal: {
            fontSize: 14,
            padding: 10,
            width: "fit-content",
            margin: "10px auto 0",
            backgroundColor: "#fff",
            borderRadius: 4,
            overflow: "hidden",
            textAlign: "center",
          },
        };
      function d() {
        return !(!window.ActiveXObject && !("ActiveXObject" in window));
      }
      function p() {
        return !!/Trident\/7\./.test(navigator.userAgent);
      }
      t.a = {
        okClose: function (e, t) {
          e(), this.close();
        },
        cancelClose: function (e, t) {
          e(), this.close();
        },
        dom: null,
        success: function (e) {
          var t = e.title,
            a = e.content,
            n = e.onOk,
            l = e.onCancel,
            u = e.okText,
            A = e.cancelText;
          e.modalWidth, e.modalHeight;
          d() || p() || this.close(),
            (this.dom = document.createElement("div"));
          var h = i.a.createElement(
            "div",
            null,
            i.a.createElement("div", { style: c.mask }),
            i.a.createElement(
              "div",
              { style: c.modalWrap },
              i.a.createElement(
                "div",
                { style: c.modal },
                i.a.createElement("h3", null, t),
                a,
                i.a.createElement(
                  "h3",
                  null,
                  i.a.createElement(o.a, {
                    onClick: this.cancelClose.bind(this, l),
                    text: A,
                  }),
                  i.a.createElement(r.a, {
                    style: { marginLeft: "15px" },
                    onClick: this.okClose.bind(this, n),
                    text: u,
                  })
                )
              )
            )
          );
          s.a.render(h, this.dom), document.body.appendChild(this.dom);
        },
        close: function () {
          d() || p()
            ? this.dom && this.dom.parentNode.removeChild(this.dom)
            : this.dom && this.dom.remove();
        },
      };
    },
    327: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAd0AAADCCAYAAAAMyhiUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg5Nzk1Nzg3NEMyNTExRTdBMTIyQUZDQTBENUE3RTc2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg5Nzk1Nzg4NEMyNTExRTdBMTIyQUZDQTBENUE3RTc2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODk3OTU3ODU0QzI1MTFFN0ExMjJBRkNBMEQ1QTdFNzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODk3OTU3ODY0QzI1MTFFN0ExMjJBRkNBMEQ1QTdFNzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz791JD8AAAheElEQVR42uyd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";
    },
    328: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return A;
      }),
        a.d(t, "b", function () {
          return h;
        }),
        a.d(t, "c", function () {
          return m;
        });
      var n = a(93),
        i = a(94),
        o = a(96),
        r = a(95),
        l = a(0),
        s = a.n(l),
        c = a(478),
        d = a(523),
        p = a(511),
        u = a(513),
        A = (function (e) {
          Object(o.a)(a, e);
          var t = Object(r.a)(a);
          function a() {
            return Object(n.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(i.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props.curindex,
                    t = this.props.tips,
                    a = "tooltip" + e;
                  return s.a.createElement(
                    u.a,
                    {
                      content: t[0],
                      id: a,
                      calloutProps: { gapSpace: 0 },
                      styles: {
                        root: {
                          display: "inline-block",
                          marginTop: "10px",
                          paddingRight: "10px",
                        },
                      },
                    },
                    s.a.createElement(d.a, {
                      key: e,
                      label: t[1],
                      defaultChecked: this.props.ckserial[e],
                      onChange: this.props.handleChange,
                    })
                  );
                },
              },
            ]),
            a
          );
        })(s.a.Component),
        h = (function (e) {
          Object(o.a)(a, e);
          var t = Object(r.a)(a);
          function a() {
            return Object(n.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(i.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = { gapSpace: 0 },
                    t = this.props.curindex,
                    a = this.props.tips,
                    n = "1";
                  this.props.opserial[t] &&
                    (n = this.props.opserial[t].toString());
                  var i = {
                      root: { display: "inline-block", paddingRight: "12px" },
                    },
                    o = new Array(),
                    r = "OptionTip" + t;
                  return (
                    this.props.data.map(function (t, a) {
                      return (o[a] = {
                        key: a,
                        text: s.a.createElement(
                          u.a,
                          {
                            content: t.tip,
                            calloutProps: e,
                            id: "OptionOptTip" + a,
                            styles: i,
                          },
                          t.text
                        ),
                      });
                    }),
                    this.props.opserial[t] &&
                      (n = this.props.opserial[t].toString()),
                    s.a.createElement(
                      "div",
                      { style: { display: "inline-block" } },
                      s.a.createElement(
                        u.a,
                        { content: a[0], id: r, calloutProps: e, styles: i },
                        s.a.createElement(
                          "span",
                          {
                            style: {
                              fontSize: "14px",
                              textAlign: "center",
                              display: "flex",
                              height: "22px",
                            },
                          },
                          a[1]
                        )
                      ),
                      s.a.createElement(
                        "div",
                        { style: { display: "inline-block" } },
                        s.a.createElement(c.a, {
                          styles: {
                            flexContainer: { display: "flex" },
                            label: {
                              wordWrap: "break-word",
                              wordBreak: "break-all",
                            },
                          },
                          defaultSelectedKey: Number(n) - 1,
                          options: o,
                          onChange: this.props.handleChange,
                        })
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(s.a.Component),
        m = (function (e) {
          Object(o.a)(a, e);
          var t = Object(r.a)(a);
          function a() {
            return Object(n.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(i.a)(a, [
              {
                key: "render",
                value: function () {
                  var e = this.props.curindex,
                    t = this.props.tips,
                    a = (this.props.data, "selecttooltip" + e),
                    n = new Array();
                  return (
                    this.props.data.map(function (e, t) {
                      return (n[t] = { key: t, text: e });
                    }),
                    s.a.createElement(
                      "div",
                      {
                        style: { display: "inline-block", marginRight: "12px" },
                      },
                      s.a.createElement(
                        u.a,
                        {
                          content: t[0],
                          id: a,
                          calloutProps: { gapSpace: 5 },
                          styles: {
                            root: { display: "inline-block", fontSize: "14px" },
                          },
                        },
                        t[1]
                      ),
                      s.a.createElement(
                        "div",
                        {
                          style: {
                            display: "inline-block",
                            alignItems: "bottom",
                          },
                        },
                        s.a.createElement(p.a, {
                          defaultSelectedKey: this.props.selserial[e],
                          options: n,
                          onChange: this.props.handleChange,
                          styles: {
                            root: {
                              display: "inline-block",
                              paddingRight: "12px",
                              height: "24px",
                            },
                          },
                          tabIndex: e,
                        })
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(s.a.Component);
    },
    462: function (e, t, a) {},
    463: function (e, t, a) {},
    464: function (e, t, a) {
      e.exports = a.p + "static/media/qrcodehelp.f7c52b29.png";
    },
    526: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(21),
        i = a.n(n),
        o = a(65),
        r = a(93),
        l = a(94),
        s = a(143),
        c = a(96),
        d = a(95),
        p = a(462),
        u = a.n(p),
        A = a(0),
        h = a.n(A),
        m = a(286),
        g = a(513),
        f = a(128),
        v = a(463),
        b = a.n(v),
        C = a(327),
        y = a.n(C),
        E = a(26),
        x = a(517),
        S = a(529),
        k = (function (e) {
          Object(c.a)(a, e);
          var t = Object(d.a)(a);
          function a() {
            return Object(r.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(l.a)(a, [
              {
                key: "render",
                value: function () {
                  for (
                    var e =
                        "".concat(
                          E.apiPublicPath,
                          "getinfs/getSampleList/index?tpl_id="
                        ) +
                        this.props.FullID +
                        "&index=",
                      t = new Array(this.props.SamplePN),
                      a = 0;
                    a < t.length;
                    a++
                  )
                    t[a] = e + String(a + 1);
                  var n = {
                    root: {
                      backgroundColor: "transparent",
                      width: "100%",
                      maxWidth: "100%",
                      marginTop: 0,
                      marginBottom: 10,
                      marginLeft: 5,
                      marginRight: 5,
                    },
                  };
                  return h.a.createElement(
                    "div",
                    null,
                    h.a.createElement(
                      x.a,
                      { styles: n },
                      h.a.createElement(S.a, {
                        title: "\u8303\u6587\u793a\u4f8b",
                      })
                    ),
                    t.length > 0
                      ? t.map(function (e, t) {
                          return h.a.createElement(
                            "div",
                            {
                              onClick: function () {
                                return scrollTo(0, 0);
                              },
                              style: { cursor: "pointer" },
                              key: t,
                            },
                            h.a.createElement(
                              x.a,
                              { styles: n },
                              h.a.createElement("img", {
                                src: e,
                                width: "100%",
                              })
                            )
                          );
                        })
                      : h.a.createElement(
                          "div",
                          { className: b.a["no-result-tip"] },
                          h.a.createElement(
                            "p",
                            null,
                            "\u62b1\u6b49\uff0c\u6ca1\u6709\u627e\u5230\u6392\u7248\u65b9\u6848\u9884\u89c8"
                          ),
                          h.a.createElement("img", {
                            src: y.a,
                            alt: "\u6ca1\u6709\u627e\u5230\u6392\u7248\u65b9\u6848\u9884\u89c8",
                          })
                        )
                  );
                },
              },
            ]),
            a
          );
        })(h.a.Component),
        O = a(355),
        N = a.n(O),
        D = a(360),
        P = a.n(D),
        w = a(512),
        j = a(278),
        G = a(263),
        T = a(503),
        L = a(521),
        q = a(364),
        U = a(464),
        W = a.n(U),
        V = a(328),
        F = a(45),
        R = a(144),
        Q = a(303),
        B = a(142),
        X = a(70),
        I = a(125),
        z = {
          opserial: [4],
          ckserial: [1, 1, 1, 1, 1, 1, 1, 1, 1],
          demoopt: [1, 1, 1, 1],
        },
        Y = (function (e) {
          Object(c.a)(a, e);
          var t = Object(d.a)(a);
          function a(e) {
            var n;
            return (
              Object(r.a)(this, a),
              ((n = t.call(this, e)).handleComposeClick = function (e, t, a) {
                void 0 === e || void 0 === e.curUser || "" === e.curUser.user_id
                  ? t()
                  : Object(R.a)(
                      "".concat(E.apiPublicPath, "tools/composeFilesRecord"),
                      "0",
                      e.curUser.user_id,
                      n.composeInsert.bind(Object(s.a)(n), e, a)
                    );
              }),
              (n.genCheckOpt = function (e, t) {
                return h.a.createElement(V.a, {
                  curindex: t,
                  ckserial: z.ckserial,
                  tips: e,
                  handleChange: n.handleCheckChange.bind(Object(s.a)(n)),
                });
              }),
              (n.handleCheckChange = function (e) {
                z.ckserial[e.target.curindex] = Number(e.target.checked);
              }),
              (n.genOptionOpt = function (e, t, a) {
                return h.a.createElement(V.b, {
                  curindex: a,
                  opserial: z.opserial,
                  tips: e,
                  data: t,
                  handleChange: n.handleOptionChange.bind(Object(s.a)(n)),
                });
              }),
              (n.handleOptionChange = function (e) {
                z.opserial[e.target.curindex] = e.target.value;
              }),
              (n.handleClearClick = function () {
                n.setState({ choice: "" });
              }),
              (n.shareSchema = function (e) {
                console.log("Tpldetail_shareSchema_e:", e);
                var t = n.showUrl();
                Q.a.success({
                  modalHeight: "300px",
                  modalWidth: "320px",
                  title: n.showtitle(),
                  content: h.a.createElement(
                    "div",
                    { style: { textAlign: "center" } },
                    h.a.createElement(
                      "div",
                      null,
                      h.a.createElement(N.a, { value: t, size: 100 })
                    ),
                    h.a.createElement(
                      "h3",
                      null,
                      h.a.createElement("a", { href: t }, t)
                    )
                  ),
                  okText: "\u5173\u95ed",
                  cancelText: "\u590d\u5236",
                  onOk: function () {},
                  onCancel: function () {
                    P()(t);
                  },
                });
              }),
              (n.shareAidocx = function (e) {
                console.log("Tpldetail_shareAidocx_e:", e);
                var t = E.RootPath;
                Q.a.success({
                  modalHeight: "300px",
                  modalWidth: "320px",
                  title:
                    "\u7b77\u5b50\u6587\u6863\uff0c\u626b\u7801\u8fdb\u5165\uff1a",
                  content: h.a.createElement(
                    "div",
                    { style: { textAlign: "center" } },
                    h.a.createElement(
                      "div",
                      null,
                      h.a.createElement(N.a, { value: t, size: 100 })
                    ),
                    h.a.createElement(
                      "h3",
                      null,
                      h.a.createElement("a", { href: t }, t)
                    )
                  ),
                  okText: "\u5173\u95ed",
                  cancelText: "\u590d\u5236",
                  onOk: function () {},
                  onCancel: function () {
                    P()(t);
                  },
                });
              }),
              (n.showUrl = function () {
                var e;
                console.log("tpldetail_props:", n.props);
                var t = n.props.user_id,
                  a = n.state.tplData.id;
                return (
                  (e =
                    "0" === n.state.tplData.ownerid
                      ? "".concat(E.RootPath, "Compose/share/").concat(a)
                      : ""
                          .concat(E.RootPath, "Compose/share/")
                          .concat(n.state.tplData.ownerid, "_")
                          .concat(a)),
                  t && (e = e + "/" + t),
                  e
                );
              }),
              (n.showtitle = function () {
                var e;
                if (void 0 !== n.state.tplData.ownerid) {
                  if (
                    ((e =
                      "0" === n.state.tplData.ownerid
                        ? "\u5206\u4eab\u516c\u5171\u6392\u7248\u65b9\u6848"
                        : "\u5728\u4e2a\u4eba\u4e2d\u5fc3\u53ef\u53d6\u6d88\u79c1\u6709\u6392\u7248\u65b9\u6848\u5206\u4eab\u72b6\u6001\uff01"),
                    n.props.user_id === n.state.tplData.ownerid &&
                      "" !== n.props.user_id)
                  ) {
                    var t = {};
                    (t.user_id = n.props.user_id),
                      (t.tpl_id = n.state.tplData.id),
                      (t.share = 1),
                      Object(F.b)(
                        "".concat(E.apiPublicPath, "users/ShareUserTpl"),
                        t
                      ).then(function (e) {
                        e.success;
                      });
                  }
                  return e + "\uff0c\u626b\u7801\u8fdb\u5165\uff1a";
                }
              }),
              (n.handleSaveSetting = function (e) {
                console.log("handleSaveSetting_e", e);
                try {
                  I.set(
                    "ComposeSet",
                    z.ckserial.join("") + z.opserial.join(""),
                    { expires: 365 }
                  );
                  var t = z.demoopt[2];
                  void 0 === t && (t = 1),
                    t < 1 && (t = 1),
                    I.set("ComposeGetType", t, { expires: 365 }),
                    f.a.success({
                      title: "\u6210\u529f\u4fdd\u5b58\u6392\u7248\u8bbe\u7f6e",
                      content: "\u4fdd\u5b58\u6709\u6548\u671f1\u5e74\uff01",
                      time: 2e3,
                    });
                } catch (a) {
                  f.a.success({
                    title: "\u4fdd\u5b58\u6392\u7248\u8bbe\u7f6e\u5931\u8d25",
                    content:
                      "\u53ef\u80fd\u662f\u8bfb\u5199Cookie\u6743\u9650\u4e0d\u591f\u5bfc\u81f4\u4fdd\u5b58\u6392\u7248\u8bbe\u7f6e\u5931\u8d25\uff01",
                    time: 2e3,
                  });
                }
              }),
              (n.InsertSource = (function () {
                var e = Object(o.a)(
                  i.a.mark(function e(t, a, o) {
                    var r, l, s;
                    return i.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            console.log("tpldetail_InsertSource_userid:", a),
                              (r = a.curUser.user_id),
                              console.log("tpldetail_InsertSource_userid:", r),
                              "" === r
                                ? o()
                                : ((l = n.state.tplData.id),
                                  "0" !== n.state.tplData.ownerid &&
                                    (l = n.state.tplData.ownerid + "_" + l),
                                  ((s = {}).res_id = t),
                                  (s.tpl_id = l),
                                  "\u83b7\u53d6\u6a21\u677f\u5931\u8d25\uff01",
                                  Object(F.b)(
                                    "".concat(
                                      E.apiPublicPath,
                                      "getinfs/getInsertSource"
                                    ),
                                    s
                                  ).then(function (e) {
                                    if (!0 === e.success) {
                                      console.log("InsertSource_path:", e.msg);
                                      var t =
                                          "".concat(
                                            E.apiPublicPath,
                                            "getinfs/getInsertSource/insertResFile?destFile="
                                          ) +
                                          e.msg +
                                          "&destId=" +
                                          l,
                                        a = new XMLHttpRequest();
                                      (a.onreadystatechange = function () {
                                        Object(F.c)(e.fileName, a, 2);
                                      }),
                                        a.open("GET", t, !0),
                                        (a.responseType = "arraybuffer"),
                                        a.send();
                                    } else f.a.success({ title: "\u83b7\u53d6\u6a21\u677f\u5931\u8d25\uff01", content: e.msg, time: 2e3 });
                                  }));
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t, a, n) {
                  return e.apply(this, arguments);
                };
              })()),
              (n.handleMoreClick = function () {
                n.setState({ ShowDemo: !n.state.ShowDemo }),
                  I.set("showDemo", !n.state.ShowDemo, { expires: 365 });
              }),
              (n.gendemoopt = function (e, t, a) {
                return h.a.createElement(V.c, {
                  curindex: a,
                  tips: e,
                  data: t,
                  selserial: n.state.docType,
                  handleChange: n.handleSelChange.bind(Object(s.a)(n)),
                });
              }),
              (n.handleSelChange = function (e, t) {
                z.demoopt[2] = t.key;
              }),
              (n.state = {
                show: !1,
                choice: "block",
                docType: [0],
                ruletip: [],
                SamplePN: 0,
                ShowDemo: !1,
                curUser: { user_id: "" },
                tplData: { id: "" },
                mainInf: { SourceType: "", SchemaType: "", searchType: "1" },
                addSchema: { id: "", ownerid: "" },
              }),
              (n.getWebset = n.getWebset.bind(Object(s.a)(n))),
              n
            );
          }
          return (
            Object(l.a)(a, [
              {
                key: "getWebset",
                value: function () {
                  var e = this;
                  if ("" !== this.props.user_id) {
                    var t = {};
                    (t.user_id = this.props.user_id),
                      console.log("getwebset_user:", this.props.user_id),
                      (t.type = "1"),
                      Object(F.b)(
                        "".concat(E.apiPublicPath, "users/getUserWebOpt"),
                        t
                      ).then(
                        function (t) {
                          t.success &&
                            ((z = t.data), JSON.parse(JSON.stringify(z))),
                            e.setState({});
                        },
                        function () {}
                      );
                  }
                },
              },
              {
                key: "UNSAFE_componentWillMount",
                value: function () {
                  console.log(" this.props.location:", this.props.location),
                    void 0 !== this.props.location.state &&
                    void 0 !== this.props.location.tplData
                      ? this.setState({
                          curUser: this.props.location.state.curUser,
                          tplData: this.props.location.tplData,
                          mainInf: this.props.location.mainInf,
                          ShowDemo: "true" === I.get("showDemo"),
                        })
                      : this.props.history.push("/Compose");
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  console.log(
                    "componentDidMount.his.props.location:",
                    this.props.location
                  );
                  var t = this.state.tplData.id;
                  void 0 !== t &&
                    ("0" === this.state.tplData.ownerid ||
                      (void 0 !== this.state.tplData.ownerid &&
                        (t = ""
                          .concat(this.state.tplData.ownerid, "_")
                          .concat(this.state.tplData.id)))),
                    this.getWebset();
                  var a = "";
                  if (void 0 !== t && "" !== t) {
                    void 0 !== this.props.user_id &&
                      (a = "&user_id=" + this.props.user_id),
                      void 0 !== this.props.org_id &&
                        "" !== this.props.org_id &&
                        (a = a + "&org_id=" + this.props.org_id);
                    var n =
                      "getinfs/getruletip?tpl_id=" +
                      t +
                      "&type=" +
                      this.state.mainInf.searchType +
                      a;
                    Object(F.a)("".concat(E.apiPublicPath).concat(n)).then(
                      function (a) {
                        (a.success = "" === a.msg[1]),
                          e.setState({
                            ruletip: a.msg,
                            FullID: t,
                            SamplePN: a.SamplePN,
                          });
                      },
                      function () {}
                    );
                  }
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  console.log(
                    "WebAddintpldetail_componentupdate_prevProps:",
                    e
                  ),
                    this.addDirect();
                },
              },
              {
                key: "composeInsert",
                value: function (e, t, a, n) {
                  Object(R.b)(e, t, a, n);
                },
              },
              {
                key: "handleAddSchema",
                value: function (e, t, a) {
                  console.log("addSchema_schemaData_ownerid:", a.ownerid);
                  var n = "";
                  void 0 !== t && (n = t.curUser),
                    "" === n.user_id && e(),
                    "" !== a.ownerid &&
                      this.setState({ curUser: n, addSchema: a });
                },
              },
              {
                key: "addDirect",
                value: function () {
                  if (
                    (console.log(
                      "WebAddinSchema_addDirect_start:",
                      this.state.addSchema.id
                    ),
                    console.log(
                      "WebAddinSchema_addDirect_start_this.props.user_id:",
                      this.props.user_id
                    ),
                    "" !== this.props.user_id && "" !== this.state.addSchema.id)
                  ) {
                    var e = this.state.addSchema.id,
                      t = this.props.history,
                      a = this.state;
                    "0" !== this.state.addSchema.ownerid &&
                      (e = ""
                        .concat(this.state.addSchema.ownerid, "_")
                        .concat(e));
                    var n = {};
                    (n.user_id = this.props.user_id),
                      (n.tpl_id = e),
                      Object(F.b)(
                        "".concat(E.apiPublicPath, "users/tplCopy"),
                        n
                      ).then(function (e) {
                        !0 === e.success
                          ? Q.a.success({
                              title:
                                "\u52a0\u5165\u6392\u7248\u65b9\u6848\u63d0\u793a",
                              content:
                                "\u6392\u7248\u65b9\u6848\u5df2\u7ecf\u52a0\u5165\u5230\u4e2a\u4eba\u4e2d\u5fc3\uff0c\u7acb\u5373\u67e5\u770b\u5417\uff1f",
                              okText: "\u662f",
                              cancelText: "\u5426",
                              onOk: function () {
                                t.push({
                                  pathname: "/Compose/genTpl",
                                  state: a,
                                });
                              },
                              onCancel: function () {},
                            })
                          : (f.a.success({
                              title:
                                "\u52a0\u5165\u6392\u7248\u65b9\u6848\u5931\u8d25",
                              content: e.msg,
                              time: 2e3,
                            }),
                            t.push("/"));
                      }),
                      this.setState({ addSchema: { id: "", ownerid: "" } });
                  }
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = {
                      items: [
                        {
                          key: "emailMessage",
                          text: "\u5206\u4eab\u6392\u7248\u65b9\u6848",
                          iconProps: { iconName: "share" },
                          onClick: this.shareSchema,
                        },
                        {
                          key: "calendarEvent",
                          text: "\u5206\u4eab\u7b77\u5b50\u6587\u6863",
                          iconProps: { iconName: "PageShared" },
                          onClick: this.shareAidocx,
                        },
                      ],
                    },
                    a = { iconName: "Add" },
                    n = {
                      root: { backgroundColor: "#f3f2f1", marginTop: "10px" },
                    },
                    i = "",
                    o = {
                      tokens: { childrenGap: 15 },
                      styles: { root: { width: 300 } },
                    };
                  if (!0 === this.state.ShowDemo) {
                    var r = this.state.ruletip;
                    i = h.a.createElement(
                      "div",
                      null,
                      h.a.createElement(
                        w.a,
                        {
                          horizontal: !0,
                          tokens: { childrenGap: 15 },
                          styles: { root: {} },
                        },
                        h.a.createElement(
                          w.a,
                          o,
                          h.a.createElement(
                            "div",
                            { style: { paddingLeft: "5px" } },
                            h.a.createElement(
                              "h3",
                              { className: u.a.demoInfo },
                              r[0]
                            )
                          )
                        ),
                        h.a.createElement(
                          w.a,
                          o,
                          h.a.createElement(
                            "div",
                            { className: u.a.helpTip },
                            h.a.createElement(
                              "h3",
                              null,
                              "\u516c\u4f17\u53f7\u4e0a\u63d0\u95ee\uff1a"
                            )
                          ),
                          h.a.createElement(
                            "div",
                            { className: u.a.helpTip },
                            h.a.createElement("img", { src: W.a })
                          )
                        )
                      ),
                      h.a.createElement(
                        "div",
                        { className: u.a["demo-div"] },
                        h.a.createElement(k, {
                          FullID: this.state.FullID,
                          SamplePN: this.state.SamplePN,
                        })
                      )
                    );
                  }
                  var l = { childrenGap: 5 },
                    s = {
                      root: {
                        background: "#f3f2f1",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "left",
                        flexShrink: "1",
                      },
                    },
                    c = { root: { padding: 2 } },
                    d = h.a.createElement(
                      "div",
                      { style: { display: "inline-flex" } },
                      h.a.createElement(
                        "div",
                        { style: { display: "inline-block" } },
                        h.a.createElement(
                          "span",
                          {
                            style: {
                              fontSize: "14px",
                              textAlign: "center",
                              display: "flex",
                              height: "22px",
                            },
                          },
                          h.a.createElement(j.a, {
                            iconProps: this.state.ShowDemo
                              ? { iconName: "DoubleChevronUp" }
                              : { iconName: "DoubleChevronDown" },
                            onClick: this.handleMoreClick.bind(
                              this,
                              this.state
                            ),
                            ariaLabel: "\u66f4\u591a",
                          }),
                          h.a.createElement(j.a, {
                            iconProps: { iconName: "Clear" },
                            onClick: this.handleClearClick,
                            ariaLabel: "\u5173\u95ed",
                          })
                        )
                      )
                    ),
                    p = function () {
                      return h.a.createElement(
                        L.a,
                        {
                          actions: d,
                          messageBarType: q.a.success,
                          isMultiline: !1,
                          truncated: !0,
                          styles: n,
                        },
                        h.a.createElement(
                          "div",
                          { style: { display: "inline-flex" } },
                          h.a.createElement(
                            w.a,
                            {
                              horizontal: !0,
                              styles: {
                                root: {
                                  background: "#f3f2f1",
                                  display: "flex",
                                  alignItems: "stretch",
                                  flexShrink: "1",
                                },
                              },
                              tokens: { childrenGap: 12 },
                            },
                            h.a.createElement(
                              w.a.Item,
                              { align: "left", styles: c },
                              h.a.createElement(
                                "div",
                                {
                                  style: {
                                    display: "inline-flex",
                                    textAlign: "left",
                                    fontSize: "15px",
                                  },
                                },
                                h.a.createElement(
                                  "b",
                                  null,
                                  " ",
                                  e.state.tplData.title
                                )
                              )
                            ),
                            h.a.createElement(
                              w.a.Item,
                              { align: "center", styles: c },
                              h.a.createElement(
                                "div",
                                {
                                  style: {
                                    display: "inline-flex",
                                    textAlign: "center",
                                    fontSize: "16px",
                                  },
                                },
                                h.a.createElement(
                                  "b",
                                  null,
                                  "\u6765\u6e90\uff1a"
                                )
                              ),
                              h.a.createElement(
                                "div",
                                {
                                  style: {
                                    display: "inline-flex",
                                    textAlign: "center",
                                    fontSize: "15px",
                                  },
                                },
                                e.state.mainInf.SourceType
                              )
                            ),
                            h.a.createElement(
                              w.a.Item,
                              { align: "end", styles: c },
                              h.a.createElement(
                                "div",
                                {
                                  style: {
                                    display: "inline-flex",
                                    textAlign: "right",
                                    fontSize: "16px",
                                  },
                                },
                                h.a.createElement(
                                  "b",
                                  null,
                                  "\u7c7b\u578b\uff1a"
                                )
                              ),
                              h.a.createElement(
                                "div",
                                {
                                  style: {
                                    display: "inline-flex",
                                    textAlign: "right",
                                    fontSize: "15px",
                                  },
                                },
                                e.state.mainInf.SchemaType
                              )
                            )
                          )
                        )
                      );
                    },
                    A = 0,
                    f = 0,
                    v = [
                      [
                        "\u667a\u80fd\u4fee\u6b63\u4e2d\u82f1\u6587\u6807\u70b9\u7b26\u53f7\uff0c\u9002\u5408\u4e8e\u6587\u6863\u6807\u70b9\u4e66\u5199\u4e0d\u89c4\u8303\uff0c\u6709\u4e00\u5b9a\u98ce\u9669",
                        "\u4fee\u6b63\u6807\u70b9",
                      ],
                      [
                        "\u667a\u80fd\u6e05\u7406\u88ab\u8bef\u7528\u7684\u7a7a\u683c\u533a\u57df\uff0c\u6709\u4e00\u5b9a\u98ce\u9669",
                        "\u6e05\u7406\u7a7a\u683c",
                      ],
                      [
                        "\u5c06\u7528\u5c3e\u6ce8\u6807\u793a\u7684\u53c2\u8003\u6587\u732e\u8f6c\u6362\u4e3a\u6587\u672c\u5316\u7684\u53c2\u8003\u6587\u732e\uff0c\u9002\u5408\u6700\u7ec8\u5b9a\u7a3f\u65f6\uff0c\u5982\u679c\u6392\u7248\u540e\u8fd8\u9700\u8981\u7f16\u8f91\uff0c\u8bf7\u4e0d\u8981\u9009\u62e9\u8be5\u9009\u9879",
                        "\u5c3e\u6ce8\u8f6c\u6587\u672c",
                      ],
                      [
                        "\u5957\u7528\u6a21\u677f\u7684\u9875\u9762\u5927\u5c0f\uff0c\u9875\u7709\u9875\u811a\u8bbe\u7f6e\uff0c\u5e76\u7528\u6a21\u677f\u4e2d\u7684\u6837\u5f0f\u6765\u63a7\u5236\u683c\u5f0f\uff0c\u5426\u5219\u6309\u7167\u6392\u7248\u65b9\u6848\u4e2d\u7684\u76f8\u5173\u8bbe\u7f6e\u5904\u7406\uff0c\u5efa\u8bae\u9009\u4e2d",
                        "\u6a21\u677f\u4f18\u5148",
                      ],
                      [
                        "\u6e05\u7406\u672a\u4f7f\u7528\u7684\u6837\u5f0f\uff0c\u5de6\u5bf9\u9f50\u548c\u5206\u6563\u5bf9\u9f50\u8f6c\u4e24\u7aef\u5bf9\u9f50\uff0c\u5b64\u884c\u63a7\u5236\uff0c\u9996\u6807\u70b9\u538b\u7f29\uff0c\u5c45\u4e2d\u4e0d\u7f29\u8fdb\uff0c\u6837\u5f0f\u66f4\u65b0\uff0c\u5c01\u9762\u548c\u5c01\u5c3e\u65e0\u5927\u7eb2\u7ea7\u522b\u7b49\uff0c\u5efa\u8bae\u9009\u4e2d",
                        "\u7f8e\u5316\u4f18\u5316",
                      ],
                      [
                        "\u81ea\u52a8\u5206\u6790\u5185\u90e8\u77e5\u8bc6\u94fe\u63a5\uff0c\u5305\u62ec\u6807\u9898\u3001\u56fe\u3001\u8868\u548c\u516c\u5f0f\u7f16\u53f7\uff0c\u4ee5\u53ca\u6807\u9898\u5185\u5bb9\uff0c\u56fe\u3001\u8868\u8bf4\u660e\u5185\u5bb9",
                        "\u5efa\u7acb\u5185\u90e8\u77e5\u8bc6\u94fe\u63a5",
                      ],
                      [
                        "\u5c06EQ\u57df\u3001Word\u516c\u5f0f\u548cMathType\u516c\u5f0f\u8f6c\u6362\u4e3a\u6587\u672c\u516c\u5f0f",
                        "\u516c\u5f0f\u6587\u672c\u5316",
                      ],
                      [
                        "\u5c06\u56fe\u7247\u767d\u8272\u80cc\u666f\u900f\u660e\u5316\u5904\u7406",
                        "\u56fe\u7247\u900f\u660e\u5316",
                      ],
                    ],
                    b = [
                      [
                        "\u6839\u636e\u6587\u6863\u60c5\u51b5\uff0c\u9009\u62e9\u4e0d\u540c\u7b49\u6e05\u7406\u6a21\u5f0f\uff0c\u6392\u7248\u6548\u679c\u4e0d\u6ee1\u610f\u65f6\u8bf7\u66f4\u6362\u6a21\u5f0f\u5c1d\u8bd5",
                        "\u683c\u5f0f\u6e05\u7406\uff1a\u3000",
                      ],
                    ],
                    C = [
                      [
                        {
                          value: "1",
                          text: "\u5ffd\u7565",
                          tip: "\u4e0d\u6e05\u7406\u73b0\u6709\u6587\u6863\u683c\u5f0f\uff0c\u4ec5\u4ec5\u7edf\u4e00\u89c4\u8303\u6587\u6863\u7279\u6b8a\u4f4d\u7f6e\uff0c\u6587\u6863\u683c\u5f0f\u5df2\u7ecf\u5f88\u89c4\u8303\u65f6\u9002\u7528",
                        },
                        {
                          value: "2",
                          text: "\u9ed8\u8ba4",
                          tip: "\u6839\u636e\u9ed8\u8ba4\u7684\u914d\u7f6e\u6587\u4ef6\u8fdb\u884c\u683c\u5f0f\u6e05\u7406\uff0c\u8981\u4fee\u6539\u5177\u4f53\u9009\u9879\u5b9e\u884c\u4e0d\u540c\u7684\u6e05\u7406\u6548\u679c\uff0c\u8bf7\u52a0\u5165\u65b9\u6848\u5230\u4e2a\u4eba\u4e2d\u5fc3\u8fdb\u884c\u4fee\u6539",
                        },
                        {
                          value: "3",
                          text: "\u8f7b\u5ea6",
                          tip: "\u57fa\u4e8e\u6bb5\u843d\u7f16\u8f91\u7279\u5f81\uff0c\u4fdd\u7559\u4e3b\u8981\u5b57\u7b26\u683c\u5f0f\uff0c\u5220\u9664\u4e3b\u8981\u6bb5\u843d\u683c\u5f0f\uff0c\u4fdd\u7559\u4f5c\u8fc7\u6807\u9898\u7684\u6216\u8005\u77ed\u6bb5\u843d\u7b49\u7279\u6b8a\u4f4d\u7f6e\u7684\u5c5e\u6027\uff0c\u6587\u6863\u6bd4\u8f83\u89c4\u8303\u65f6\u9002\u7528",
                        },
                        {
                          value: "4",
                          text: "\u91cd\u5ea6",
                          tip: "\u9664\u4e86\u7279\u6b8a\u4f4d\u7f6e\u5916\uff0c\u5220\u9664\u4e3b\u8981\u5b57\u7b26\u683c\u5f0f\uff0c\u5220\u9664\u4e3b\u8981\u6bb5\u843d\u683c\u5f0f\uff0c\u6587\u6863\u683c\u5f0f\u6bd4\u8f83\u4e71\u65f6\u9002\u7528",
                        },
                        {
                          value: "5",
                          text: "\u6781\u5ea6",
                          tip: "\u9664\u4e86\u6587\u672c\u63a7\u4ef6\u533a\u57df\u3001\u4e0a\u4e0b\u6807\u3001\u7740\u91cd\u7b26\u3001\u4e0b\u5212\u7ebf\u548c\u9690\u85cf\u5c5e\u6027\u5916\uff0c\u5220\u9664\u6240\u6709\u5b57\u7b26\u683c\u5f0f\uff0c\u5220\u9664\u6240\u6709\u6bb5\u843d\u683c\u5f0f\uff0c\u6587\u6863\u683c\u5f0f\u4e71\u65f6\u9002\u7528",
                        },
                        {
                          value: "6",
                          text: "\u5168\u90e8",
                          tip: "\u5220\u9664\u4e0a\u4e0b\u6807\u4ee5\u5916\u7684\u6240\u6709\u5b57\u7b26\u683c\u5f0f\uff0c\u5220\u9664\u6240\u6709\u6bb5\u843d\u683c\u5f0f\u548c\u8868\u683c\u6837\u5f0f\uff0c\u6587\u6863\u683c\u5f0f\u5f88\u4e71\u65f6\u9002\u7528",
                        },
                      ],
                    ],
                    y = {
                      root: {
                        textAlign: "center",
                        marginTop: 15,
                        marginBottom: 15,
                        fontSize: 16,
                        minWidth: 150,
                        maxWidth: 586,
                        width: "90%",
                        height: 60,
                      },
                    },
                    E = [
                      [
                        "\u6807\u51c6\u7248\u4e0d\u5e26\u5ba1\u9605\u548c\u6279\u6ce8\uff0c\u5ba1\u9605\u7248\u5206\u7c7b\u6807\u6ce8\u4e86\u6392\u7248\u8fc7\u7a0b\u4e2d\u4fee\u6539\u7684\u4f4d\u7f6e\u548c\u6587\u6863\u683c\u5f0f\u6216\u8005\u7f16\u53f7\u4e2d\u5b58\u5728\u7684\u95ee\u9898\uff0c\u65e0\u6837\u5f0f\u7248\u672c\u4e0d\u901a\u8fc7\u6837\u5f0f\u8fdb\u884c\u6392\u7248",
                      ],
                    ],
                    x = [
                      [
                        "\u6807\u51c6\u7248",
                        "\u5ba1\u9605\u7248",
                        "\u65e0\u6837\u5f0f\u7248",
                      ],
                    ],
                    S = { gapSpace: 0 },
                    O = {
                      root: {
                        display: "inline-block",
                        marginTop: "10px",
                        paddingRight: "5px",
                      },
                    },
                    N = 0;
                  return h.a.createElement(B.a, null, function (n) {
                    var o = n.state,
                      r = n.showSignUp;
                    return h.a.createElement(
                      "div",
                      { className: u.a.App },
                      h.a.createElement(m.a, { history: e.props.history }),
                      h.a.createElement(
                        "div",
                        null,
                        h.a.createElement(
                          "div",
                          { className: "checkTop" },
                          h.a.createElement(
                            G.a,
                            {
                              styles: y,
                              onClick: e.handleComposeClick.bind(
                                e,
                                o,
                                r,
                                e.state.tplData
                              ),
                            },
                            "\u6392\u7248\u5f53\u524d\u6587\u6863"
                          ),
                          h.a.createElement(
                            w.a,
                            { styles: s, tokens: l },
                            h.a.createElement(
                              "div",
                              { style: { align: "center" } },
                              e.genOptionOpt(b[f], C[f], f++)
                            ),
                            h.a.createElement(
                              "div",
                              { style: { align: "center" } },
                              h.a.createElement(
                                "div",
                                { style: { display: "inline-block" } },
                                e.genCheckOpt(v[A], A++)
                              ),
                              h.a.createElement(
                                "div",
                                { style: { display: "inline-block" } },
                                e.genCheckOpt(v[A], A++)
                              ),
                              h.a.createElement(
                                "div",
                                { style: { display: "inline-block" } },
                                e.genCheckOpt(v[A], A++)
                              ),
                              h.a.createElement(
                                "div",
                                { style: { display: "inline-block" } },
                                e.genCheckOpt(v[A], A++)
                              ),
                              h.a.createElement(
                                "div",
                                { style: { display: "inline-block" } },
                                e.genCheckOpt(v[A], A++)
                              )
                            ),
                            h.a.createElement(
                              w.a.Item,
                              {
                                align: "center",
                                verticalAlignment: "center",
                                styles: c,
                              },
                              h.a.createElement(
                                "div",
                                {
                                  className: u.a["check-info-check"],
                                  hidden: !0,
                                },
                                e.genCheckOpt(v[A], A++),
                                e.genCheckOpt(v[A], A++),
                                e.genCheckOpt(v[A], A++)
                              )
                            )
                          )
                        )
                      ),
                      h.a.createElement(
                        "div",
                        { className: "checkTop" },
                        h.a.createElement(
                          "div",
                          { className: "edition" },
                          h.a.createElement(
                            "div",
                            {
                              style: {
                                display: "inline-block",
                                paddingRight: "5px",
                                paddingLeft: "2px",
                                fontSize: "14px",
                              },
                            },
                            "\u7248\u672c\uff1a",
                            h.a.createElement(
                              "div",
                              {
                                style: {
                                  display: "inline-block",
                                  paddingTop: "12px",
                                  fontSize: "14px",
                                  width: "80px",
                                },
                              },
                              e.gendemoopt(E[N], x[N], N++)
                            )
                          ),
                          h.a.createElement(
                            g.a,
                            {
                              content:
                                "\u76f4\u63a5\u57fa\u4e8e\u672c\u6392\u7248\u65b9\u6848\u7684\u6a21\u677f\u64b0\u5199\u6587\u6863",
                              id: "getTemplate",
                              calloutProps: S,
                              styles: O,
                            },
                            h.a.createElement(T.a, {
                              onClick: e.InsertSource.bind(e, 2, o, r),
                              iconProps: { iconName: "FileTemplate" },
                              text: "\u6a21\u677f",
                            })
                          ),
                          h.a.createElement(
                            g.a,
                            {
                              content:
                                "\u63d2\u5165\u672c\u6392\u7248\u65b9\u6848\u7684\u5c01\u9762",
                              id: "getcover",
                              calloutProps: S,
                              styles: O,
                            },
                            h.a.createElement(T.a, {
                              onClick: e.InsertSource.bind(e, 1, o, r),
                              iconProps: { iconName: "PageAdd" },
                              text: "\u5c01\u9762",
                            })
                          ),
                          h.a.createElement(
                            g.a,
                            {
                              content:
                                "\u5206\u4eab\u53ef\u4ee5\u589e\u52a0\u79ef\u5206",
                              id: "shareTipId",
                              calloutProps: S,
                              styles: O,
                            },
                            h.a.createElement(T.a, {
                              iconProps: a,
                              text: "\u5206\u4eab",
                              menuProps: t,
                            })
                          ),
                          h.a.createElement(
                            g.a,
                            {
                              content:
                                "\u4fdd\u5b58\u4e3a\u4e0d\u8fdb\u5165\u65b9\u6848\u8be6\u60c5\u754c\u9762\u65f6\u4f7f\u7528\u7684\u6392\u7248\uff08\u672c\u5730\uff09\u8bbe\u7f6e",
                              id: "shareTipId",
                              calloutProps: S,
                              styles: O,
                            },
                            h.a.createElement(T.a, {
                              onClick: e.handleSaveSetting,
                              iconProps: { iconName: "SaveTemplate" },
                              text: "",
                            })
                          ),
                          h.a.createElement(
                            g.a,
                            {
                              content:
                                "\u52a0\u5165\u4e2a\u4eba\u4e2d\u5fc3\u65b9\u4fbf\u5bf9\u539f\u6392\u7248\u65b9\u6848\u8fdb\u884c\u4fee\u6539",
                              id: "shareTipId",
                              calloutProps: S,
                              styles: O,
                            },
                            h.a.createElement(T.a, {
                              onClick: e.handleAddSchema.bind(
                                e,
                                r,
                                o,
                                e.state.tplData
                              ),
                              iconProps: { iconName: "ReminderPerson" },
                            })
                          )
                        ),
                        "block" === e.state.choice && h.a.createElement(p, null)
                      ),
                      h.a.createElement(
                        "div",
                        { className: "checkOpt" },
                        "block" === e.state.choice && i
                      )
                    );
                  });
                },
              },
            ]),
            a
          );
        })(A.Component);
      t.default = Object(X.b)(function (e) {
        return {
          curUser: e.current,
          user_id: e.current.user_id,
          isModalVisible: e.modalVisible,
        };
      }, {})(Y);
    },
  },
]);
//# sourceMappingURL=12.880d8ae5.chunk.js.map
