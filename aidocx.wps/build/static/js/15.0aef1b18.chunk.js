(this.webpackJsonpaidocx = this.webpackJsonpaidocx || []).push([
  [15],
  {
    286: function (e, t, n) {
      "use strict";
      var a = n(93),
        o = n(94),
        r = n(96),
        i = n(95),
        c = n(0),
        s = n.n(c),
        l = n(513),
        A = n(226),
        d = n(287),
        u = n.n(d),
        p = n(26),
        h = n(512),
        g = n(70),
        m = n(11),
        f = n(45),
        v = n(125),
        C = new Array("/Compose"),
        b = {
          backGrClr1: "#0078D4",
          frontClr1: "#ffffff",
          backGrClr2: "#ffffff",
          frontClr2: "#0078D4",
        },
        y = (function (e) {
          Object(r.a)(n, e);
          var t = Object(i.a)(n);
          function n() {
            var e;
            Object(a.a)(this, n);
            for (var o = arguments.length, r = new Array(o), i = 0; i < o; i++)
              r[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(r))).onLinkClick = function (
                t
              ) {
                0 === t.props.itemKey &&
                  v.set("composing", !1, { expires: 365 }),
                  e.props.history.push({
                    pathname: C[t.props.itemKey],
                    state: {},
                  });
              }),
              (e.onComposeClick = function (t) {
                (b = {
                  backGrClr2: "#0078D4",
                  frontClr2: "#ffffff",
                  backGrClr1: "#f3f2f1",
                  frontClr1: "#0078D4",
                }),
                  e.props.history.push({ pathname: C[0], state: {} });
              }),
              (e.onMainClick = function (t) {
                v.set("composing", !1, { expires: 365 }),
                  e.props.history.push({ pathname: "/TaskHome", state: {} });
              }),
              (e.onPersonSchemaClick = function (t, n) {
                (b = {
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
                  var n = {};
                  (n.tel = e.curUser.tel),
                    (n.user_id = e.curUser.user_id),
                    Object(f.b)(
                      "".concat(p.apiPublicPath, "users/reglogin/addtoken"),
                      n
                    ).then(
                      function (t) {
                        if (t.success) {
                          var n =
                            p.RootPath +
                            "LoginOnce/tel/" +
                            e.curUser.tel +
                            "/ID/" +
                            e.curUser.user_id +
                            "/direct/_UserCenter_profile";
                          console.log("fullurl:", n), window.open(n);
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
            Object(o.a)(n, [
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
                          ? s.a.createElement(A.a, {
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
                                    l.a,
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
                                          .concat(p.RootPath)
                                          .slice(
                                            0,
                                            "".concat(p.RootPath).length - 1
                                          ) +
                                        "".concat(
                                          p.apiPublicPath,
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
                                    backgroundColor: b.backGrClr1,
                                    color: b.frontClr1,
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
                                    backgroundColor: b.backGrClr2,
                                    color: b.frontClr2,
                                  },
                                  onClick: this.onPersonSchemaClick.bind(
                                    this,
                                    this.props
                                  ),
                                },
                                "\u65b9\u6848"
                              ),
                              s.a.createElement(
                                l.a,
                                { content: "\u5355\u51fb\u9000\u51fa\uff01" },
                                s.a.createElement(A.a, {
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
            n
          );
        })(s.a.Component),
        S = {
          signup: m.i,
          login: m.d,
          logout: m.f,
          showModal: m.h,
          hideModal: m.c,
        };
      t.a = Object(g.b)(function (e) {
        return {
          curUser: e.current,
          user_id: { user_id: e.current.user_id },
          isLoginIn: !!e.current.username,
          isModalLoading: e.isLoading,
          isModalVisible: e.modalVisible,
        };
      }, S)(y);
    },
    287: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    303: function (e, t, n) {
      "use strict";
      var a = n(0),
        o = n.n(a),
        r = n(177),
        i = n(263),
        c = n(35),
        s = n.n(c),
        l = {
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
      function A() {
        return !(!window.ActiveXObject && !("ActiveXObject" in window));
      }
      function d() {
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
            n = e.content,
            a = e.onOk,
            c = e.onCancel,
            u = e.okText,
            p = e.cancelText;
          e.modalWidth, e.modalHeight;
          A() || d() || this.close(),
            (this.dom = document.createElement("div"));
          var h = o.a.createElement(
            "div",
            null,
            o.a.createElement("div", { style: l.mask }),
            o.a.createElement(
              "div",
              { style: l.modalWrap },
              o.a.createElement(
                "div",
                { style: l.modal },
                o.a.createElement("h3", null, t),
                n,
                o.a.createElement(
                  "h3",
                  null,
                  o.a.createElement(r.a, {
                    onClick: this.cancelClose.bind(this, c),
                    text: p,
                  }),
                  o.a.createElement(i.a, {
                    style: { marginLeft: "15px" },
                    onClick: this.okClose.bind(this, a),
                    text: u,
                  })
                )
              )
            )
          );
          s.a.render(h, this.dom), document.body.appendChild(this.dom);
        },
        close: function () {
          A() || d()
            ? this.dom && this.dom.parentNode.removeChild(this.dom)
            : this.dom && this.dom.remove();
        },
      };
    },
    327: function (e, t) {
      e.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAd0AAADCCAYAAAAMyhiUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjg5Nzk1Nzg3NEMyNTExRTdBMTIyQUZDQTBENUE3RTc2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjg5Nzk1Nzg4NEMyNTExRTdBMTIyQUZDQTBENUE3RTc2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODk3OTU3ODU0QzI1MTFFN0ExMjJBRkNBMEQ1QTdFNzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODk3OTU3ODY0QzI1MTFFN0ExMjJBRkNBMEQ1QTdFNzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz791JD8AAAheElEQVR42uyd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";
    },
    461: function (e, t, n) {},
    525: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(21),
        o = n.n(a),
        r = n(65),
        i = n(93),
        c = n(94),
        s = n(96),
        l = n(95),
        A = n(0),
        d = n.n(A),
        u = n(286),
        p = n(143),
        h = n(517),
        g = n(528),
        m = n(529),
        f = n(510),
        v = n(522),
        C = n(142),
        b = n(45),
        y = n(26),
        S = n(303),
        D = n(355),
        U = n.n(D),
        w = n(360),
        x = n.n(w),
        L = n(144),
        N = 0,
        O = (function (e) {
          Object(s.a)(n, e);
          var t = Object(l.a)(n);
          function n(e) {
            var a;
            return (
              Object(i.a)(this, n),
              ((a = t.call(this, e)).state = {
                curUser: { user_id: "" },
                hideDialog: !0,
                addSchema: { id: "", ownerid: "" },
              }),
              (a.onShareClick = function () {
                N = 1;
                var e = a.showUrl();
                S.a.success({
                  modalHeight: "300px",
                  modalWidth: "320px",
                  title: a.showtitle(),
                  content: d.a.createElement(
                    "div",
                    { style: { textAlign: "center" } },
                    d.a.createElement(
                      "div",
                      null,
                      d.a.createElement(U.a, { value: e, size: 100 })
                    ),
                    d.a.createElement(
                      "h3",
                      null,
                      d.a.createElement("a", { href: e }, e)
                    )
                  ),
                  okText: "\u5173\u95ed",
                  cancelText: "\u590d\u5236",
                  onOk: function () {},
                  onCancel: function () {
                    x()(e);
                  },
                });
              }),
              (a.showUrl = function () {
                var e,
                  t = a.props.curUser.user_id,
                  n = a.props.tplData.id;
                return (
                  (e =
                    "0" === a.props.tplData.ownerid
                      ? "".concat(y.RootPath, "Compose/share/").concat(n)
                      : ""
                          .concat(y.RootPath, "Compose/share/")
                          .concat(a.props.tplData.ownerid, "_")
                          .concat(n)),
                  t && (e = e + "/" + t),
                  e
                );
              }),
              (a.showtitle = function () {
                var e;
                if (void 0 !== a.props.tplData.ownerid) {
                  if (
                    ((e =
                      "0" === a.props.tplData.ownerid
                        ? "\u5206\u4eab\u516c\u5171\u6392\u7248\u65b9\u6848"
                        : "\u5728\u4e2a\u4eba\u4e2d\u5fc3\u53ef\u53d6\u6d88\u79c1\u6709\u6392\u7248\u65b9\u6848\u5206\u4eab\u72b6\u6001\uff01"),
                    a.props.curUser.user_id === a.props.tplData.ownerid &&
                      "" !== a.props.curUser.user_id)
                  ) {
                    var t = {};
                    (t.user_id = a.props.curUser.user_id),
                      (t.tpl_id = a.props.tplData.id),
                      (t.share = 1),
                      Object(b.b)(
                        "".concat(y.apiPublicPath, "users/ShareUserTpl"),
                        t
                      ).then(function (e) {
                        e.success;
                      });
                  }
                  return e + "\uff0c\u626b\u7801\u8fdb\u5165\uff1a";
                }
              }),
              (a.onDetailClick = function (e, t, n) {
                (N = 3),
                  a.props.history.push({
                    pathname: "/Compose/details",
                    state: e,
                    tplData: t,
                    mainInf: n,
                  });
              }),
              (a.handleComposeClick = function (e, t, n) {
                console.log("handleComposeClick"),
                  0 === N
                    ? void 0 === e ||
                      void 0 === e.curUser ||
                      "" === e.curUser.user_id
                      ? t()
                      : Object(L.a)(
                          "".concat(
                            y.apiPublicPath,
                            "tools/composeFilesRecord"
                          ),
                          "0",
                          e.curUser.user_id,
                          a.composeInsert.bind(Object(p.a)(a), e, n)
                        )
                    : (N = 0);
              }),
              (a.handleLocationClick = function (e, t) {
                N = 4;
                var n = t.id;
                void 0 !== t &&
                  void 0 !== t.ownerid &&
                  ("0" === t.ownerid ||
                    (n = "".concat(t.ownerid, "_").concat(t.id)));
                var o = "_Compose_share_" + n;
                if (
                  (console.log("handleLocationClick_clickType:", N),
                  "" !== e.curUser.user_id)
                ) {
                  var r = {};
                  (r.tel = e.curUser.tel),
                    (r.user_id = e.curUser.user_id),
                    Object(b.b)(
                      "".concat(y.apiPublicPath, "users/reglogin/addtoken"),
                      r
                    ).then(
                      function (t) {
                        t.success &&
                          window.open(
                            y.RootPath +
                              "LoginOnce/tel/" +
                              e.curUser.tel +
                              "/ID/" +
                              e.curUser.user_id +
                              "/direct/" +
                              o
                          ),
                          a.setState({});
                      },
                      function () {}
                    );
                } else window.open(y.RootPath + "Compose/share" + n);
              }),
              a
            );
          }
          return (
            Object(c.a)(n, [
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.addDirect();
                },
              },
              {
                key: "handleAddSchema",
                value: function (e, t, n) {
                  N = 2;
                  var a = "";
                  void 0 !== t && (a = t.curUser),
                    "" === a.user_id && e(),
                    "" !== n.ownerid &&
                      this.setState({ curUser: a, addSchema: n });
                },
              },
              {
                key: "addDirect",
                value: function () {
                  if (
                    "" !== this.state.curUser.user_id &&
                    "" !== this.state.addSchema.id
                  ) {
                    var e = this.state.addSchema.id,
                      t = this.props.history,
                      n = this.state;
                    "0" !== this.state.addSchema.ownerid &&
                      (e = ""
                        .concat(this.state.addSchema.ownerid, "_")
                        .concat(e));
                    var a = {};
                    (a.user_id = this.state.curUser.user_id),
                      (a.tpl_id = e),
                      Object(b.b)(
                        "".concat(y.apiPublicPath, "users/tplCopy"),
                        a
                      ).then(function (e) {
                        !0 === e.success
                          ? S.a.success({
                              title:
                                "\u52a0\u5165\u6392\u7248\u65b9\u6848\u63d0\u793a",
                              content:
                                "\u6392\u7248\u65b9\u6848\u5df2\u7ecf\u52a0\u5165\u5230\u4e2a\u4eba\u4e2d\u5fc3\uff0c\u7acb\u5373\u67e5\u770b\u5417\uff1f",
                              okText: "\u662f",
                              cancelText: "\u5426",
                              onOk: function () {
                                t.push({
                                  pathname: "/Compose/genTpl",
                                  state: n,
                                });
                              },
                              onCancel: function () {},
                            })
                          : t.push("/");
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
                      root: {
                        display: "inline-block",
                        textAlign: "left",
                        marginTop: 0,
                        marginBottom: 10,
                        marginLeft: 5,
                        marginRight: 5,
                        maxWidth: 200,
                        minWidth: 200,
                      },
                    },
                    n = [
                      "\u516c\u5171",
                      "\u79c1\u6709",
                      "\u5206\u4eab",
                      "\u673a\u6784",
                    ],
                    a = 0,
                    o = this.props.curUser.user_id,
                    r = this.props.tplData.ownerid;
                  "0" !== r &&
                    (a =
                      o === r
                        ? 1
                        : "0" !== this.props.tplData.org_id && o
                        ? 3
                        : 2);
                  var i = "AiDocx.com\u3000\u3000\u6765\u6e90\uff1a" + n[a],
                    c = [
                      "\u5b66\u4f4d\u8bba\u6587\u4e66\u7a3f",
                      "\u5b66\u672f\u671f\u520a\u6295\u7a3f",
                      "\u8bfe\u8bbe\u6216\u5927\u4f5c\u4e1a",
                      "\u5236\u5ea6\u6807\u51c6\u6c47\u7f16",
                      "\u7814\u7a76\u8bbe\u8ba1\u62a5\u544a",
                      "\u6295\u6807\u4e0e\u62db\u6807\u4e66",
                      "\u8f6f\u4ef6\u64cd\u4f5c\u6587\u6863",
                      "\u672a\u77e5\u7c7b\u578b\u6587\u6863",
                    ],
                    s = {
                      SourceType: n[a],
                      SchemaType: c[this.props.tplData.type],
                      searchType: a + 1,
                    };
                  return d.a.createElement(C.a, null, function (n) {
                    var a = n.state,
                      o = n.showSignUp;
                    return d.a.createElement(
                      h.a,
                      {
                        onClick: e.handleComposeClick.bind(
                          e,
                          a,
                          o,
                          e.props.tplData
                        ),
                        styles: t,
                      },
                      d.a.createElement(g.a, {
                        location: i,
                        locationHref: "#",
                        onClick: e.handleLocationClick.bind(
                          e,
                          a,
                          e.props.tplData
                        ),
                        ariaLabel:
                          "\u5230\u7f51\u7ad9\u67e5\u770b\u66f4\u8be6\u7ec6\u4fe1\u606f",
                      }),
                      d.a.createElement(m.a, {
                        title: e.props.tplData.title,
                        shouldTruncate: !0,
                      }),
                      d.a.createElement(f.a, {
                        activity: "\u66f4\u65b0\uff1a2019/09/20",
                        people: [
                          {
                            name: c[e.props.tplData.type],
                            profileImageSrc: e.props.tplData.badgeSrc,
                            contain: 1,
                          },
                        ],
                      }),
                      d.a.createElement(v.a, {
                        views: e.props.tplData.usedtimes,
                        actions: [
                          {
                            iconProps: { iconName: "Share" },
                            onClick: e.onShareClick.bind(e, a),
                            ariaLabel: "\u5206\u4eab\u6392\u7248\u65b9\u6848",
                          },
                          {
                            iconProps: { iconName: "ReminderPerson" },
                            onClick: e.handleAddSchema.bind(
                              e,
                              o,
                              a,
                              e.props.tplData
                            ),
                            ariaLabel: "\u52a0\u5165\u4e2a\u4eba\u4e2d\u5fc3",
                          },
                          {
                            iconProps: { iconName: "Settings" },
                            onClick: e.onDetailClick.bind(
                              e,
                              a,
                              e.props.tplData,
                              s
                            ),
                            ariaLabel: "\u8be6\u7ec6\u8bbe\u7f6e",
                          },
                        ],
                      })
                    );
                  });
                },
              },
              {
                key: "composeInsert",
                value: function (e, t, n, a) {
                  Object(L.b)(e, t, n, a);
                },
              },
            ]),
            n
          );
        })(d.a.PureComponent),
        G = n(461),
        T = n.n(G),
        j = n(520),
        E = n(512),
        P = n(511),
        k = n(327),
        q = n.n(k),
        V = n(125),
        W = [],
        Q = [],
        B = {
          optTypeText: "\u5168\u90e8",
          optTypeIndex: 0,
          OldSearch: "",
          curValue: "",
        },
        X = (function (e) {
          Object(s.a)(n, e);
          var t = Object(l.a)(n);
          function n(e) {
            var a;
            return (
              Object(i.a)(this, n),
              ((a = t.call(this, e)).composeClick = Object(r.a)(
                o.a.mark(function e() {
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return e.abrupt(
                            "return",
                            "".run(
                              (function () {
                                var e = Object(r.a)(
                                  o.a.mark(function e(t) {
                                    return o.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (t.document.body.insertParagraph(
                                                "Hello World",
                                                "".InsertLocation.end
                                              ).font.color = "blue"),
                                              (e.next = 4),
                                              t.sync()
                                            );
                                          case 4:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                          );
                        case 1:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )),
              (a.onTypeChange = function (e, t, n, o) {
                (B.optTypeIndex = o.key),
                  console.log("onTypeChange_showSignUp\uff1a", e),
                  console.log("onTypeChange_curState\uff1a", t),
                  console.log("onTypeChange_curValue\uff1a", o),
                  console.log("onTypeChange_ref\uff1a", n),
                  V.set("TplIndex", B.optTypeIndex, { expires: 365 }),
                  a.handleSearch(e, t, "f\uff5efgxg");
              }),
              (a.handleSearch = function (e, t, n) {
                var o = "";
                if (
                  (void 0 !== t &&
                    ((o = t.curUser.user_id),
                    a.setState({ curUser: t.curUser })),
                  B.OldSearch !== n || "f\uff5efgxg" === n || "" === n)
                ) {
                  var r = V.get("TplIndex");
                  (2 !== r && 4 !== r) ||
                    ("" === o &&
                      (console.log(
                        "onTypeChange_typeof showSignUp !:",
                        typeof e
                      ),
                      "string" !== typeof e && void 0 !== e && e())),
                    "f\uff5efgxg" !== n && (B.OldSearch = n),
                    void 0 === B.OldSearch && (B.OldSearch = "");
                  var i =
                    "".concat(
                      y.apiPublicPath,
                      "getinfs/gettemplates?page=1&type=1&lib_id=1&isMobile=true&search="
                    ) +
                    encodeURIComponent(B.OldSearch) +
                    "&lib_id=" +
                    B.optTypeIndex;
                  "" !== o && (i = i + "&user_id=" + o),
                    Object(b.a)(i, { method: "GET" }).then(function (e) {
                      try {
                        (Q = e.list), a.setState({}), console.log(Q);
                      } catch (t) {
                        console.log(
                          "\u6a21\u677f\u6570\u636e\u83b7\u53d6\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\uff01",
                          t
                        );
                      }
                    });
                } else setTimeout((B.OldSearch = ""), 200);
              }),
              (a.state = { curUser: { user_id: "" } }),
              a
            );
          }
          return (
            Object(c.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.handleSearch();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = "";
                  (t = localStorage.getItem("searchs")) &&
                    ((W = t.split("\r\n")), W),
                    localStorage.getItem("TplIndex") &&
                      ((B.optTypeText = localStorage.getItem("TplType")),
                      (B.optTypeIndex = localStorage.getItem("TplIndex")));
                  this.props.match.path;
                  [].push(B.optTypeIndex);
                  var n = {
                      root: { left: "0px" },
                      childrenGap: 5,
                      padding: "10px 0px 30px 0px",
                    },
                    a = [
                      { key: 0, text: "\u5168\u90e8" },
                      { key: 1, text: "\u516c\u5171" },
                      { key: 2, text: "\u79c1\u6709" },
                      { key: 3, text: "\u5206\u4eab" },
                      { key: 4, text: "\u673a\u6784" },
                    ],
                    o = { dropdown: { width: 75, marginRight: "15px" } },
                    r = 0,
                    i = this.props.history,
                    c = "";
                  return (
                    (c =
                      0 === Q.length
                        ? d.a.createElement("img", {
                            src: q.a,
                            alt: "\u6ca1\u6709\u627e\u5230\u6392\u7248\u65b9\u6848\uff0c\u6ce8\u610f\u9009\u62e9\u67e5\u627e\u7c7b\u578b",
                          })
                        : Q.map(function (t) {
                            return d.a.createElement(O, {
                              key: r++,
                              history: i,
                              tplData: t,
                              curUser: e.state.curUser,
                            });
                          })),
                    d.a.createElement(C.a, null, function (t) {
                      var r = t.state,
                        i = t.showSignUp;
                      return d.a.createElement(
                        "div",
                        { className: T.a.App },
                        d.a.createElement(u.a, { history: e.props.history }),
                        d.a.createElement(
                          "div",
                          { style: { display: "block", marginLeft: "10px" } },
                          d.a.createElement(
                            E.a,
                            { horizontal: !0, tokens: n, verticalAlign: "end" },
                            d.a.createElement(
                              E.a.Item,
                              { align: "start", grow: !0 },
                              d.a.createElement(j.a, {
                                placeholder:
                                  "\u6ce8\u610f\u9009\u62e9\u67e5\u627e\u7c7b\u578b",
                                onSearch: e.handleSearch.bind(e, i, r),
                                onFocus: function () {},
                                onBlur: function () {
                                  return console.log("onBlur called");
                                },
                                onChange: function () {
                                  return console.log("onChange called");
                                },
                              })
                            ),
                            d.a.createElement(P.a, {
                              defaultSelectedKey: B.optTypeIndex,
                              options: a,
                              styles: o,
                              onChange: e.onTypeChange.bind(e, i, r),
                            })
                          )
                        ),
                        d.a.createElement(
                          "div",
                          { className: "ms-Grid", dir: "ltr" },
                          c
                        )
                      );
                    })
                  );
                },
              },
            ]),
            n
          );
        })(A.Component);
      t.default = X;
    },
  },
]);
//# sourceMappingURL=15.0aef1b18.chunk.js.map
