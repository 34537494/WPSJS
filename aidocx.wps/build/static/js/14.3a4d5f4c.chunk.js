(this.webpackJsonpaidocx = this.webpackJsonpaidocx || []).push([
  [14],
  {
    286: function (e, t, n) {
      "use strict";
      var i = n(93),
        a = n(94),
        l = n(96),
        s = n(95),
        o = n(0),
        r = n.n(o),
        c = n(513),
        p = n(226),
        d = n(287),
        u = n.n(d),
        h = n(26),
        m = n(512),
        g = n(70),
        f = n(11),
        v = n(45),
        b = n(125),
        y = new Array("/Compose"),
        x = {
          backGrClr1: "#0078D4",
          frontClr1: "#ffffff",
          backGrClr2: "#ffffff",
          frontClr2: "#0078D4",
        },
        k = (function (e) {
          Object(l.a)(n, e);
          var t = Object(s.a)(n);
          function n() {
            var e;
            Object(i.a)(this, n);
            for (var a = arguments.length, l = new Array(a), s = 0; s < a; s++)
              l[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(l))).onLinkClick = function (
                t
              ) {
                0 === t.props.itemKey &&
                  b.set("composing", !1, { expires: 365 }),
                  e.props.history.push({
                    pathname: y[t.props.itemKey],
                    state: {},
                  });
              }),
              (e.onComposeClick = function (t) {
                (x = {
                  backGrClr2: "#0078D4",
                  frontClr2: "#ffffff",
                  backGrClr1: "#f3f2f1",
                  frontClr1: "#0078D4",
                }),
                  e.props.history.push({ pathname: y[0], state: {} });
              }),
              (e.onMainClick = function (t) {
                b.set("composing", !1, { expires: 365 }),
                  e.props.history.push({ pathname: "/TaskHome", state: {} });
              }),
              (e.onPersonSchemaClick = function (t, n) {
                (x = {
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
                    Object(v.b)(
                      "".concat(h.apiPublicPath, "users/reglogin/addtoken"),
                      n
                    ).then(
                      function (t) {
                        if (t.success) {
                          var n =
                            h.RootPath +
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
            Object(a.a)(n, [
              { key: "componentDidMount", value: function () {} },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return (
                    console.log("webaddinheader_", this.props.curUser.user_id),
                    r.a.createElement(
                      "div",
                      { className: "checkTop" },
                      r.a.createElement(
                        m.a,
                        {
                          horizontal: !0,
                          horizontalAlign: "start",
                          tokens: { childrenGap: 5 },
                          verticalAlign: "center",
                        },
                        r.a.createElement(
                          m.a.Item,
                          null,
                          r.a.createElement(
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
                            r.a.createElement("img", {
                              src: u.a,
                              height: "45px",
                            })
                          )
                        ),
                        r.a.createElement(
                          m.a.Item,
                          { grow: !0 },
                          r.a.createElement("div", {
                            style: { fontSize: "16px", color: "#0078D4" },
                            id: "status",
                          })
                        ),
                        void 0 === this.props.curUser.user_id
                          ? r.a.createElement(p.a, {
                              iconProps: { iconName: "AddFriend" },
                              onClick: function () {
                                return e.props.showModal();
                              },
                              allowDisabledFocus: !0,
                            })
                          : r.a.createElement(
                              "div",
                              { style: { marginRight: "10px" } },
                              r.a.createElement(
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
                                r.a.createElement(
                                  "span",
                                  {
                                    style: {
                                      display: "inline-block",
                                      minWidth: "30px",
                                      maxWidth: "60px",
                                      overflow: "hidden",
                                    },
                                  },
                                  r.a.createElement(
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
                                    r.a.createElement("img", {
                                      onClick: this.handleAvatarClick.bind(
                                        this,
                                        this.props
                                      ),
                                      src:
                                        ""
                                          .concat(h.RootPath)
                                          .slice(
                                            0,
                                            "".concat(h.RootPath).length - 1
                                          ) +
                                        "".concat(
                                          h.apiPublicPath,
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
                              r.a.createElement(
                                "div",
                                {
                                  style: {
                                    display: "inline-block",
                                    float: "left",
                                    cursor: "pointer",
                                    marginRight: "8px",
                                    padding: 8,
                                    backgroundColor: x.backGrClr1,
                                    color: x.frontClr1,
                                  },
                                  onClick: this.onComposeClick.bind(this),
                                },
                                "\u6392\u7248"
                              ),
                              r.a.createElement(
                                "div",
                                {
                                  style: {
                                    display: "inline-block",
                                    float: "left",
                                    cursor: "pointer",
                                    marginRight: "8px",
                                    padding: 8,
                                    backgroundColor: x.backGrClr2,
                                    color: x.frontClr2,
                                  },
                                  onClick: this.onPersonSchemaClick.bind(
                                    this,
                                    this.props
                                  ),
                                },
                                "\u65b9\u6848"
                              ),
                              r.a.createElement(
                                c.a,
                                { content: "\u5355\u51fb\u9000\u51fa\uff01" },
                                r.a.createElement(p.a, {
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
        })(r.a.Component),
        C = {
          signup: f.i,
          login: f.d,
          logout: f.f,
          showModal: f.h,
          hideModal: f.c,
        };
      t.a = Object(g.b)(function (e) {
        return {
          curUser: e.current,
          user_id: { user_id: e.current.user_id },
          isLoginIn: !!e.current.username,
          isModalLoading: e.isLoading,
          isModalVisible: e.modalVisible,
        };
      }, C)(k);
    },
    287: function (e, t) {
      e.exports =
        "data:image/png;base64,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";
    },
    303: function (e, t, n) {
      "use strict";
      var i = n(0),
        a = n.n(i),
        l = n(177),
        s = n(263),
        o = n(35),
        r = n.n(o),
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
      function p() {
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
            i = e.onOk,
            o = e.onCancel,
            u = e.okText,
            h = e.cancelText;
          e.modalWidth, e.modalHeight;
          p() || d() || this.close(),
            (this.dom = document.createElement("div"));
          var m = a.a.createElement(
            "div",
            null,
            a.a.createElement("div", { style: c.mask }),
            a.a.createElement(
              "div",
              { style: c.modalWrap },
              a.a.createElement(
                "div",
                { style: c.modal },
                a.a.createElement("h3", null, t),
                n,
                a.a.createElement(
                  "h3",
                  null,
                  a.a.createElement(l.a, {
                    onClick: this.cancelClose.bind(this, o),
                    text: h,
                  }),
                  a.a.createElement(s.a, {
                    style: { marginLeft: "15px" },
                    onClick: this.okClose.bind(this, i),
                    text: u,
                  })
                )
              )
            )
          );
          r.a.render(m, this.dom), document.body.appendChild(this.dom);
        },
        close: function () {
          p() || d()
            ? this.dom && this.dom.parentNode.removeChild(this.dom)
            : this.dom && this.dom.remove();
        },
      };
    },
    328: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return h;
      }),
        n.d(t, "b", function () {
          return m;
        }),
        n.d(t, "c", function () {
          return g;
        });
      var i = n(93),
        a = n(94),
        l = n(96),
        s = n(95),
        o = n(0),
        r = n.n(o),
        c = n(478),
        p = n(523),
        d = n(511),
        u = n(513),
        h = (function (e) {
          Object(l.a)(n, e);
          var t = Object(s.a)(n);
          function n() {
            return Object(i.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(a.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props.curindex,
                    t = this.props.tips,
                    n = "tooltip" + e;
                  return r.a.createElement(
                    u.a,
                    {
                      content: t[0],
                      id: n,
                      calloutProps: { gapSpace: 0 },
                      styles: {
                        root: {
                          display: "inline-block",
                          marginTop: "10px",
                          paddingRight: "10px",
                        },
                      },
                    },
                    r.a.createElement(p.a, {
                      key: e,
                      label: t[1],
                      defaultChecked: this.props.ckserial[e],
                      onChange: this.props.handleChange,
                    })
                  );
                },
              },
            ]),
            n
          );
        })(r.a.Component),
        m = (function (e) {
          Object(l.a)(n, e);
          var t = Object(s.a)(n);
          function n() {
            return Object(i.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(a.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = { gapSpace: 0 },
                    t = this.props.curindex,
                    n = this.props.tips,
                    i = "1";
                  this.props.opserial[t] &&
                    (i = this.props.opserial[t].toString());
                  var a = {
                      root: { display: "inline-block", paddingRight: "12px" },
                    },
                    l = new Array(),
                    s = "OptionTip" + t;
                  return (
                    this.props.data.map(function (t, n) {
                      return (l[n] = {
                        key: n,
                        text: r.a.createElement(
                          u.a,
                          {
                            content: t.tip,
                            calloutProps: e,
                            id: "OptionOptTip" + n,
                            styles: a,
                          },
                          t.text
                        ),
                      });
                    }),
                    this.props.opserial[t] &&
                      (i = this.props.opserial[t].toString()),
                    r.a.createElement(
                      "div",
                      { style: { display: "inline-block" } },
                      r.a.createElement(
                        u.a,
                        { content: n[0], id: s, calloutProps: e, styles: a },
                        r.a.createElement(
                          "span",
                          {
                            style: {
                              fontSize: "14px",
                              textAlign: "center",
                              display: "flex",
                              height: "22px",
                            },
                          },
                          n[1]
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { style: { display: "inline-block" } },
                        r.a.createElement(c.a, {
                          styles: {
                            flexContainer: { display: "flex" },
                            label: {
                              wordWrap: "break-word",
                              wordBreak: "break-all",
                            },
                          },
                          defaultSelectedKey: Number(i) - 1,
                          options: l,
                          onChange: this.props.handleChange,
                        })
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(r.a.Component),
        g = (function (e) {
          Object(l.a)(n, e);
          var t = Object(s.a)(n);
          function n() {
            return Object(i.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(a.a)(n, [
              {
                key: "render",
                value: function () {
                  var e = this.props.curindex,
                    t = this.props.tips,
                    n = (this.props.data, "selecttooltip" + e),
                    i = new Array();
                  return (
                    this.props.data.map(function (e, t) {
                      return (i[t] = { key: t, text: e });
                    }),
                    r.a.createElement(
                      "div",
                      {
                        style: { display: "inline-block", marginRight: "12px" },
                      },
                      r.a.createElement(
                        u.a,
                        {
                          content: t[0],
                          id: n,
                          calloutProps: { gapSpace: 5 },
                          styles: {
                            root: { display: "inline-block", fontSize: "14px" },
                          },
                        },
                        t[1]
                      ),
                      r.a.createElement(
                        "div",
                        {
                          style: {
                            display: "inline-block",
                            alignItems: "bottom",
                          },
                        },
                        r.a.createElement(d.a, {
                          defaultSelectedKey: this.props.selserial[e],
                          options: i,
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
            n
          );
        })(r.a.Component);
    },
    466: function (e, t, n) {},
    467: function (e, t, n) {},
    519: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n(93),
        a = n(94),
        l = n(143),
        s = n(96),
        o = n(95),
        r = n(0),
        c = n.n(r),
        p = n(286),
        d = n(512),
        u = n(263),
        h = n(466),
        m = n.n(h),
        g = n(328),
        f = n(271),
        v = n(267),
        b = n(524),
        y = n(504),
        x = n(509),
        k = n(468),
        C = n(314),
        E = n(516),
        A = n(5),
        S = n(26),
        O = n(45),
        T = n(177),
        j = n(303),
        D = n(128),
        P = (n(467), n(144)),
        W =
          (n(125),
          Object(A.E)({
            fileIconHeaderIcon: { padding: 0, fontSize: "16px" },
            fileIconCell: {
              textAlign: "center",
              selectors: {
                "&:before": {
                  content: ".",
                  display: "inline-block",
                  verticalAlign: "middle",
                  height: "100%",
                  width: "0px",
                  visibility: "hidden",
                },
              },
            },
            fileIconImg: {
              verticalAlign: "middle",
              maxHeight: "16px",
              maxWidth: "16px",
            },
            controlWrapper: {
              display: "flex",
              flexWrap: "wrap",
              top: "20px",
              alignItems: "center",
            },
            fabricWrapper: {
              position: "relative",
              margin: "0 auto",
              textAlign: "center",
              maxWidth: "586px",
              minWidth: "280px",
              fontSize: "16px",
              width: "90%",
            },
            selectionDetails: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          })),
        w = {
          root: { margin: "0 30px 5px 0", maxWidth: "300px", minWidth: "60px" },
          fieldGroup: { marginTop: "3px" },
        },
        _ = {
          root: { margin: "0 5px 5px 0", maxWidth: "600px", minWidth: "60px" },
          fieldGroup: { marginTop: "3px" },
        },
        R = { fontSize: "16px", fontWeight: "bold", marginTop: "8px" },
        I = {
          root: {
            maxWidth: "60px",
            minWidth: "35px",
            marginTop: "8px",
            marginRight: "8px",
            paddingLeft: "8px",
            paddingRight: "8px",
          },
        },
        U = {
          root: {
            maxWidth: "90px",
            minWidth: "35px",
            marginTop: "8px",
            marginRight: "8px",
          },
        },
        G = {
          root: {
            maxWidth: "60px",
            minWidth: "35px",
            paddingLeft: "8px",
            paddingRight: "8px",
          },
        },
        N = {
          root: {
            maxWidth: "95px",
            minWidth: "35px",
            marginTop: "8px",
            marginRight: "8px",
          },
        },
        X = { maxWidth: "60px", minWidth: "35px" },
        L = { maxWidth: "95px", minWidth: "35px" },
        M = { maxWidth: "90px", minWidth: "35px" },
        q = {
          root: {
            maxWidth: "90px",
            minWidth: "45px",
            height: "32px",
            marginTop: "8px",
            marginRight: "8px",
          },
        },
        J = {
          root: {
            maxWidth: "135px",
            minWidth: "45px",
            height: "32px",
            marginTop: "8px",
            marginRight: "8px",
          },
        },
        z = { maxWidth: "90px", minWidth: "45px" },
        B = { maxWidth: "130px", minWidth: "45px" },
        H = (function (e) {
          Object(s.a)(n, e);
          var t = Object(o.a)(n);
          function n(e) {
            var a;
            Object(i.a)(this, n),
              ((a = t.call(this, e))._selection = ""),
              (a._AllItems = []),
              (a._onChangeText = function (e, t) {
                a.setState({
                  items: t
                    ? a._AllItems.filter(function (e) {
                        return e.name.toLowerCase().indexOf(t) > -1;
                      })
                    : a._AllItems,
                });
              }),
              (a._onColumnClick = function (e, t) {
                console.log(
                  " getautotplslist__onColumnClick_this.state:",
                  a.state
                );
                var n = a.state,
                  i = n.columns,
                  l = n.items,
                  s = i.slice(),
                  o = s.filter(function (e) {
                    return t.key === e.key;
                  })[0];
                s.forEach(function (e) {
                  e === o
                    ? ((o.isSortedDescending = !o.isSortedDescending),
                      (o.isSorted = !0),
                      a.setState({
                        announcedMessage: ""
                          .concat(o.name, " is sorted ")
                          .concat(
                            o.isSortedDescending ? "descending" : "ascending"
                          ),
                      }))
                    : ((e.isSorted = !1), (e.isSortedDescending = !0));
                });
                var r = a._copyAndSort(l, o.fieldName, o.isSortedDescending);
                a.setState({ columns: s, items: r });
              }),
              (a.handleTplDetail = function (e, t) {
                var n = {
                  SourceType: "\u79c1\u6709",
                  SchemaType: [
                    "\u5b66\u4f4d\u8bba\u6587\u4e66\u7a3f",
                    "\u5b66\u672f\u671f\u520a\u6295\u7a3f",
                    "\u8bfe\u8bbe\u6216\u5927\u4f5c\u4e1a",
                    "\u5236\u5ea6\u6807\u51c6\u6c47\u7f16",
                    "\u7814\u7a76\u8bbe\u8ba1\u62a5\u544a",
                    "\u6295\u6807\u4e0e\u62db\u6807\u4e66",
                    "\u8f6f\u4ef6\u64cd\u4f5c\u6587\u6863",
                    "\u672a\u77e5\u7c7b\u578b\u6587\u6863",
                  ][
                    a._selection._items[a._selection._keyToIndexMap[e]].tplData
                      .type
                  ],
                  searchType: 1,
                };
                a.props.history.push({
                  pathname: "/Compose/details",
                  state: a.props,
                  tplData:
                    a._selection._items[a._selection._keyToIndexMap[e]].tplData,
                  mainInf: n,
                });
              }),
              (a.handleTplEdit = function (e, t) {
                var n =
                  a._selection._items[a._selection._keyToIndexMap[e]].tplData;
                console.log(
                  "this._selection._items[this._selection._keyToIndexMap[index]].tplData:",
                  a._selection._items[a._selection._keyToIndexMap[e]].tplData
                );
                var i = {};
                (i.tel = a.props.curUser.tel),
                  (i.user_id = a.props.curUser.user_id);
                var l =
                  S.RootPath +
                  "LoginOnce/tel/" +
                  a.props.curUser.tel +
                  "/ID/" +
                  a.props.curUser.user_id +
                  "/direct/_Compose_option-recordid-" +
                  n.id +
                  "-ownerid-" +
                  n.ownerid;
                Object(O.b)(
                  "".concat(S.apiPublicPath, "users/reglogin/addtoken"),
                  i
                ).then(
                  function (e) {
                    e.success &&
                      (console.log("handleTplEdit_fullurl:", l),
                      window.open(l)),
                      a.setState({});
                  },
                  function (e) {}
                );
              }),
              (a.onRenameChangeText = function (e, t) {
                a.setState({ newTitle: t });
              }),
              (a.handleRenameTpl = function (e) {
                var t = a._selection._selectedItems[0].tplData,
                  n = Object(l.a)(a);
                j.a.success({
                  title:
                    "\u91cd\u547d\u540d\u6392\u7248\u65b9\u6848\uff0c\u65b9\u4fbf\u641c\u7d22",
                  content: r.createElement(
                    "div",
                    {
                      style: {
                        display: "inline-block",
                        textAlign: "center",
                        alignItems: "center",
                        justifyContent: "center",
                      },
                    },
                    r.createElement(f.a, {
                      label: "\u65b0\u540d\u79f0:",
                      defaultValue: t.title,
                      onChange: a.onRenameChangeText,
                      styles: _,
                    })
                  ),
                  okText: "\u786e\u5b9a",
                  cancelText: "\u53d6\u6d88",
                  onOk: function () {
                    var e = {};
                    (e.custplid = t.id),
                      (e.newTitle = n.state.newTitle),
                      console.log("handleRenameTpl_text:", e),
                      Object(O.b)(
                        "".concat(
                          S.apiPublicPath,
                          "getinfs/getautotplslist/reNameUserTpl"
                        ),
                        e
                      ).then(function (e) {
                        !0 === e.success && n.getDataList();
                      });
                  },
                  onCancel: function () {},
                });
              }),
              (a.handleDelTpl = function (e) {
                var t = a._selection._selectedItems[0].tplData,
                  n = Object(l.a)(a);
                j.a.success({
                  title: "\u5220\u9664\u6392\u7248\u65b9\u6848\u63d0\u793a",
                  content:
                    "\u5220\u9664\u6392\u7248\u65b9\u6848\u4e0d\u53ef\u6062\u590d\uff0c\u786e\u8ba4\u5220\u9664\u5417\uff1f",
                  okText: "\u662f",
                  cancelText: "\u5426",
                  onOk: function () {
                    var e = {};
                    (e.custplid = t.id),
                      (e.realdel = !0),
                      (e.user_id = n.props.curUser.user_id),
                      Object(O.b)(
                        "".concat(
                          S.apiPublicPath,
                          "getinfs/getautotplslist/deluserTpl"
                        ),
                        e
                      ).then(function (e) {
                        D.a.success({
                          title:
                            "\u5220\u9664\u6392\u7248\u65b9\u6848\u7ed3\u679c",
                          content: e.msg,
                          time: 2e3,
                        }),
                          !0 === e.success && n.getDataList();
                      });
                  },
                  onCancel: function () {},
                });
              }),
              (a.handleDelAllTpl = function (e) {
                console.log("tplList_handleDelTpl_e:", e),
                  console.log("handleDelAllTpl._selection:", a._selection);
                var t = a._selection._items.length,
                  n = [];
                if (!0 === a._selection_isAllSelected)
                  a._selection._items.map(function (e) {
                    return n.push(e.tplData.id);
                  });
                else {
                  var i = a._selection._exemptedIndices;
                  if (void 0 === i[0])
                    for (var s = 0; s < t; s++)
                      n.push(a._selection._items[s].tplData.id);
                  else
                    for (var o = 0; o < t; o++)
                      !0 === i[o] && n.push(a._selection._items[o].tplData.id);
                }
                t = n.length;
                var r = Object(l.a)(a),
                  c = {};
                t > 1 &&
                  j.a.success({
                    title:
                      "\u6279\u91cf\u5220\u9664\u6392\u7248\u65b9\u6848\u63d0\u793a",
                    content:
                      "\u5220\u9664\u6392\u7248\u65b9\u6848\u4e0d\u53ef\u6062\u590d\uff0c\u786e\u8ba4\u5220\u9664\u5417\uff1f",
                    okText: "\u662f",
                    cancelText: "\u5426",
                    onOk: function () {
                      (c.custplid = n),
                        (c.realdel = !0),
                        (c.user_id = r.props.curUser.user_id),
                        Object(O.b)(
                          "".concat(
                            S.apiPublicPath,
                            "getinfs/getautotplslist/delBatchTpl"
                          ),
                          c
                        ).then(function (e) {
                          !0 === e.success &&
                            (D.a.success({
                              title:
                                "\u6279\u91cf\u5220\u9664\u6392\u7248\u65b9\u6848",
                              content: e.msg,
                              time: 2e3,
                            }),
                            r.getDataList());
                        });
                    },
                    onCancel: function () {},
                  });
              }),
              (a.handleShareAll = function (e, t) {
                var n = a._selection._items.length,
                  i = [];
                if (
                  ("0" === e &&
                    "\u6279\u91cf\u53d6\u6d88\u6392\u7248\u65b9\u6848\u5206\u4eab",
                  !0 === a._selection_isAllSelected)
                )
                  a._selection._items.map(function (e) {
                    return i.push(e.tplData.id);
                  });
                else
                  for (var s = a._selection._exemptedIndices, o = 0; o < n; o++)
                    !0 === s[o] && i.push(a._selection._items[o].tplData.id);
                n = i.length;
                Object(l.a)(a);
                var r = {};
                n >= 1 &&
                  ((r.custplid = i),
                  (r.share = e),
                  (r.user_id = a.props.curUser.user_id),
                  Object(O.b)(
                    "".concat(
                      S.apiPublicPath,
                      "getinfs/getautotplslist/shareBatchTpl"
                    ),
                    r
                  ).then(function (e) {
                    !0 === e.success &&
                      D.a.success({
                        title:
                          "\u6279\u91cf\u5206\u4eab\u6392\u7248\u65b9\u6848",
                        content: e.msg,
                        time: 2e3,
                      });
                  }));
              }),
              (a.handleComposeClick = function (e, t) {
                console.log("handleComposeClick:", e),
                  (void 0 !== a.state &&
                    void 0 !== a.state.curUser &&
                    "" !== a.state.curUser.user_id) ||
                    Object(P.a)(
                      "".concat(S.apiPublicPath, "tools/composeFilesRecord"),
                      "0",
                      a.state.curUser.user_id,
                      a.composeInsert.bind(Object(l.a)(a), e)
                    );
              });
            var s = [
              {
                key: "column2",
                name: "\u65b9\u6848",
                fieldName: "name",
                minWidth: 100,
                maxWidth: 280,
                isRowHeader: !0,
                isResizable: !0,
                isSorted: !0,
                isSortedDescending: !1,
                sortAscendingAriaLabel: "Sorted A to Z",
                sortDescendingAriaLabel: "Sorted Z to A",
                onColumnClick: a._onColumnClick,
                data: "string",
                isPadded: !0,
              },
              {
                key: "column3",
                name: "\u64cd\u4f5c",
                fieldName: "command",
                minWidth: 85,
                maxWidth: 120,
                isResizable: !0,
                onColumnClick: a._onColumnClick,
                data: "number",
                onRender: function (e) {
                  return r.createElement("span", null, e.command);
                },
                isPadded: !0,
              },
              {
                key: "column4",
                name: "\u66f4\u65b0",
                fieldName: "dateModified",
                minWidth: 100,
                maxWidth: 160,
                fontSize: "14px",
                isResizable: !0,
                isCollapsible: !0,
                data: "number",
                onColumnClick: a._onColumnClick,
              },
            ];
            return (
              (a._selection = new y.a({
                onSelectionChanged: function () {
                  a.setState({ selectionDetails: a._getSelectionDetails() });
                },
              })),
              (a.state = {
                items: [],
                newTitle: "",
                columns: s,
                selectionDetails: a._getSelectionDetails(),
                isModalSelection: !0,
                isCompactMode: !0,
                announcedMessage: void 0,
              }),
              a
            );
          }
          return (
            Object(a.a)(n, [
              {
                key: "componentDidMount",
                value: function () {
                  this.getDataList(), console.log("tpllist_componentDidMount");
                },
              },
              {
                key: "getDataList",
                value: function () {
                  var e = this;
                  console.log("TplList_getDataList");
                  var t = {};
                  t.user_id = this.props.curUser.user_id;
                  var n = [];
                  Object(O.b)(
                    "".concat(S.apiPublicPath, "getinfs/getautotplslist/index"),
                    t
                  ).then(function (t) {
                    try {
                      for (var i = t.length, a = 0; a < i; a++)
                        n.push({
                          key: a.toString(),
                          name: t[a].title,
                          dateModified: r.createElement(
                            "span",
                            {
                              style: {
                                fontSize: "14px",
                                verticalAlign: "middle",
                              },
                            },
                            t[a].tpl_time
                          ),
                          tplData: t[a],
                          command: r.createElement(
                            "div",
                            null,
                            r.createElement(
                              "div",
                              { style: { display: "inline-block" } },
                              r.createElement(
                                u.a,
                                {
                                  primary: !0,
                                  styles: G,
                                  onClick: e.handleTplDetail.bind(e, a),
                                },
                                "\u8be6\u60c5"
                              )
                            ),
                            r.createElement(
                              "div",
                              {
                                style: {
                                  display: "inline-block",
                                  marginLeft: "4px",
                                },
                              },
                              r.createElement(
                                T.a,
                                {
                                  primary: !0,
                                  styles: G,
                                  onClick: e.handleTplEdit.bind(e, a),
                                },
                                "\u7f16\u8f91"
                              )
                            )
                          ),
                        });
                      e._AllItems = n;
                    } catch (l) {
                      console.log(
                        "apiPublicPath_getautotplslist_ERROR:\u6570\u636e\u83b7\u53d6\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u7f51\u7edc\uff01"
                      );
                    }
                  }),
                    this.setState({ items: n });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state,
                    t = e.columns,
                    n = e.isCompactMode,
                    i = e.items,
                    a = e.selectionDetails;
                  e.isModalSelection, e.announcedMessage;
                  return r.createElement(
                    v.a,
                    { className: W.fabricWrapper },
                    r.createElement(
                      "div",
                      { className: W.controlWrapper },
                      r.createElement(f.a, {
                        label: "\u7b5b\u9009:",
                        onChange: this._onChangeText,
                        styles: w,
                      }),
                      r.createElement(
                        "div",
                        { className: W.selectionDetails },
                        a
                      ),
                      r.createElement(b.a, { message: a })
                    ),
                    r.createElement(
                      E.a,
                      { selection: this._selection },
                      r.createElement(x.a, {
                        items: i,
                        compact: n,
                        columns: t,
                        selectionMode: k.b.multiple,
                        getKey: this._getKey,
                        setKey: "multiple",
                        layoutMode: C.e.justified,
                        isHeaderVisible: !0,
                        selection: this._selection,
                        selectionPreservedOnEmptyClick: !0,
                        onItemInvoked: this._onItemInvoked,
                        enterModalSelectionOnTouch: !0,
                        ariaLabelForSelectionColumn: "Toggle selection",
                        ariaLabelForSelectAllCheckbox:
                          "Toggle selection for all items",
                        checkButtonAriaLabel: "Row checkbox",
                      })
                    )
                  );
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  t.isModalSelection === this.state.isModalSelection ||
                    this.state.isModalSelection ||
                    this._selection.setAllSelected(!1),
                    !0 === this.props.listRenew &&
                      !1 === e.listRenew &&
                      this.getDataList();
                },
              },
              {
                key: "_getSelectionDetails",
                value: function () {
                  var e = this._selection.getSelectedCount();
                  switch (e) {
                    case 0:
                      return r.createElement(
                        "div",
                        null,
                        r.createElement(
                          "h4",
                          null,
                          "\u6ca1\u6709\u9009\u4e2d\u65b9\u6848"
                        ),
                        r.createElement(
                          "p",
                          null,
                          "\u6309\u4f4f\u9f20\u6807,\u6ed1\u52a8\uff0c\u53ef\u6279\u91cf\u9009\u4e2d"
                        )
                      );
                    case 1:
                      var t = r.createElement(
                        "div",
                        { styles: R },
                        "\u9009\u4e2d: ",
                        this._selection.getSelection()[0].name
                      );
                      return r.createElement(
                        "div",
                        null,
                        t,
                        r.createElement(
                          u.a,
                          {
                            primary: !0,
                            styles: I,
                            onClick: this.handleComposeClick.bind(
                              this,
                              this._selection.getSelection()[0].tplData
                            ),
                          },
                          r.createElement("span", { style: X }, "\u6392\u7248")
                        ),
                        r.createElement(
                          T.a,
                          {
                            styles: U,
                            onClick: this.handleRenameTpl.bind(this),
                          },
                          r.createElement(
                            "span",
                            { style: M },
                            "\u91cd\u547d\u540d"
                          )
                        ),
                        r.createElement(
                          T.a,
                          { styles: I, onClick: this.handleDelTpl.bind(this) },
                          r.createElement("span", { style: X }, "\u5220\u9664")
                        ),
                        r.createElement(
                          T.a,
                          {
                            styles: N,
                            onClick: this.handleShareAll.bind(this, "0"),
                          },
                          r.createElement(
                            "span",
                            { style: L },
                            "\u53d6\u6d88\u5206\u4eab"
                          )
                        )
                      );
                    default:
                      var n = r.createElement(
                        "div",
                        { styles: R },
                        " ",
                        e,
                        " \u4e2a\u65b9\u6848\u88ab\u9009\u4e2d"
                      );
                      return r.createElement(
                        "div",
                        null,
                        n,
                        r.createElement(
                          u.a,
                          {
                            styles: q,
                            onClick: this.handleDelAllTpl.bind(this),
                          },
                          r.createElement(
                            "span",
                            { style: z },
                            "\u5168\u90e8\u5220\u9664"
                          )
                        ),
                        r.createElement(
                          T.a,
                          {
                            styles: J,
                            onClick: this.handleShareAll.bind(this, "1"),
                          },
                          r.createElement(
                            "span",
                            { style: B },
                            "\u5168\u90e8\u5206\u4eab"
                          )
                        ),
                        r.createElement(
                          T.a,
                          {
                            styles: J,
                            onClick: this.handleShareAll.bind(this, "0"),
                          },
                          r.createElement(
                            "span",
                            { style: B },
                            "\u5168\u90e8\u53d6\u6d88\u5206\u4eab"
                          )
                        )
                      );
                  }
                },
              },
              {
                key: "_copyAndSort",
                value: function (e, t, n) {
                  var i = t;
                  return e.slice(0).sort(function (e, t) {
                    return (n ? e[i] < t[i] : e[i] > t[i]) ? 1 : -1;
                  });
                },
              },
              {
                key: "composeInsert",
                value: function (e, t) {
                  Object(P.b)(this.props, e, t, "aidocx.com");
                },
              },
            ]),
            n
          );
        })(r.Component),
        K = n(481),
        Q = n(21),
        F = n.n(Q),
        V = n(65);
      function Z() {
        return (Z = Object(V.a)(
          F.a.mark(function e(t) {
            return F.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      Object(O.a)(
                        "".concat(S.apiPublicPath, "users/getUserWebOpt"),
                        { method: "POST", body: JSON.stringify(t) }
                      )
                    );
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var Y = n(142),
        $ = n(125),
        ee = {
          opserial: [3, 1, 1, 1, 1],
          ckserial: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          demoopt: [1, 1],
        },
        te = ee,
        ne = [
          [
            "\u5206\u4eab\u6392\u7248\u65b9\u6848\uff0c\u53ef\u4ee5\u81ea\u52a8\u589e\u52a0\u79ef\u5206",
            "\u5206\u4eab",
          ],
          [
            "\u7edf\u4e00\u6240\u6709\u6837\u5f0f\u884c\u8ddd\u8bbe\u7f6e\u4f7f\u7528\u5230\u7c7b\u578b\u6216\u8005\u65b9\u5f0f",
            "\u7edf\u4e00\u884c\u8ddd\u6a21\u5f0f\uff1a",
          ],
          [
            "\u7edf\u4e00\u6240\u6709\u6837\u5f0f\u6bb5\u843d\u95f4\u8ddd\u8bbe\u7f6e\u4f7f\u7528\u5230\u7c7b\u578b\u6216\u8005\u65b9\u5f0f",
            "\u7edf\u4e00\u95f4\u8ddd\u6a21\u5f0f\uff1a",
          ],
          [
            "\u7edf\u4e00\u6240\u6709\u6837\u5f0f\u7684\u6587\u672c\u4e0a\u4e0b\u5bf9\u9f50\u65b9\u5f0f",
            "\u7edf\u4e00\u4e0a\u4e0b\u5bf9\u9f50\u65b9\u5f0f\uff1a",
          ],
          [
            "\u5c06\u6e90\u6587\u6863\u4e2d\u88ab\u81ea\u52a8\u5224\u65ad\u4e3a\u5c01\u9762\u7684\u90e8\u5206\u4fdd\u5b58\u4e3a\u5c01\u9762",
            "\u81ea\u52a8\u751f\u6210\u5c01\u9762",
          ],
          [
            "\u57fa\u4e8e\u4e00\u822c\u6027\u89c4\u5219\uff0c\u81ea\u52a8\u8c03\u6574\u76ee\u5f55\u6837\u5f0f\u4e2d\u7684\u5f02\u5e38\u60c5\u51b5",
            "\u667a\u80fd\u8c03\u6574\u76ee\u5f55",
          ],
          [
            "\u57fa\u4e8e\u4e00\u822c\u6027\u89c4\u5219\uff0c\u81ea\u52a8\u8c03\u6574\u6807\u9898\u6837\u5f0f\u4e2d\u7684\u5f02\u5e38\u60c5\u51b5",
            "\u667a\u80fd\u8c03\u6574\u6807\u9898",
          ],
          [
            "\u5bf9\u6e90\u6587\u6863\u4e2d\u6709\u7279\u5f02\u5b57\u5f62\u6216\u8005\u7f29\u8fdb\u5bf9\u90e8\u5206\u8fdb\u884c\u7edf\u8ba1\u5206\u6790\uff0c\u5f52\u7eb3\u51fa\u65b0\u89c4\u5219\uff0c\u5efa\u7acb\u6837\u5f0f\u53bb\u89c4\u8303\u7c7b\u4f3c\u6bb5\u843d",
            "\u667a\u80fd\u751f\u6210\u65b0\u89c4\u5219",
          ],
          [
            "\u57fa\u4e8e\u4e00\u822c\u6027\u89c4\u5219\uff0c\u5bf9\u6837\u5f0f\u7684\u7ec6\u8282\uff0c\u8fdb\u884c\u5fae\u8c03\uff0c\u8fbe\u5230\u7f8e\u5316\u5bf9\u6548\u679c\uff0c\u6bd4\u5982\u542f\u7528\u5b64\u884c\u63a7\u5236",
            "\u7f8e\u5316\u4f18\u5316",
          ],
          [
            "\u4ec5\u4ec5\u6ce8\u518c\u4e3a\u540c\u4e00\u4e2a\u673a\u6784\u7684\u7528\u6237\u53ef\u89c1\uff0c\u5206\u4eab\u6392\u7248\u53ef\u4ee5\u81ea\u52a8\u589e\u52a0\u79ef\u5206",
            "\u673a\u6784\u5185\u90e8\u5206\u4eab",
          ],
        ],
        ie = [
          [
            "\u5fc5\u987b\u5305\u542b\u591a\u7ea7\u6807\u9898\u5e8f",
            "\u3000\u3000\u6807\u9898\u6765\u6e90\uff1a",
          ],
          ["", ""],
          ["", ""],
          [
            "\u9700\u8981\u88ab\u6392\u7248\u7684\u6587\u6863\u683c\u5f0f\u7684\u4e00\u822c\u60c5\u51b5",
            "\u88ab\u6392\u7248\u6e90\u6587\u6863\u683c\u5f0f\uff1a",
          ],
          [
            "\u9700\u8981\u88ab\u6392\u7248\u7684\u6587\u6863\u5185\u5bb9\u7684\u4e00\u822c\u60c5\u51b5\uff1a",
            "\u88ab\u6392\u7248\u6e90\u6587\u6863\u5185\u5bb9\uff1a",
          ],
        ],
        ae = [
          [
            {
              value: "1",
              text: "\u5927\u7eb2",
              tip: "\u6309\u7167\u5df2\u7ecf\u5efa\u7acb\u591a\u7ea7\u5927\u7eb2\u8f6c\u6362",
            },
            {
              value: "2",
              text: "\u5185\u7f6e\u6807\u9898",
              tip: "\u6309\u7167\u5df2\u7ecf\u8bbe\u7f6e\u597d\u7684\u6807\u9898 1\u3001\u6807\u98982\u2026\u2026\u8f6c\u6362",
            },
            {
              value: "3",
              text: "\u81ea\u52a8\u8bc6\u522b",
              tip: "\u6309\u7167\u81ea\u52a8\u8bc6\u522b\u7684\u591a\u7ea7\u6807\u9898\u8f6c\u6362",
            },
          ],
          [
            {
              value: "1",
              text: "\u6700\u5c0f\u503c\u6a21\u5f0f",
              tip: "\u6700\u5c0f\u503c\u6a21\u5f0f\u4e0d\u4f1a\u51fa\u73b0\u6587\u5b57\u91cd\u53e0\u60c5\u51b5\uff0c\u6bb5\u843d\u5185\u90e8\u540c\u65f6\u6709\u56fe\u7247\u548c\u6587\u5b57\u65f6\uff0c\u56fe\u7247\u4e0d\u4f1a\u88ab\u63a9\u76d6\uff0c\u4f46\u662f\u8c03\u6574\u5b57\u4f53\u5927\u5c0f\u65f6\uff0c\u53ef\u80fd\u6839\u636e\u6700\u5c0f\u503c\u8bbe\u7f6e\u60c5\u51b5\u81ea\u52a8\u6539\u53d8\u884c\u8ddd",
            },
            {
              value: "2",
              text: "\u56fa\u5b9a\u503c\u6a21\u5f0f",
              tip: "\u5bb9\u6613\u88ab\u7528\u6237\u7406\u89e3\uff0c\u91c7\u7528\u56fa\u5b9a\u503c\u6a21\u5f0f\u540e\uff0c\u5728\u4f7f\u7528\u6837\u5f0f\u6570\u91cf\u591a\u5bf9\u60c5\u51b5\u4e0b\uff0c\u7f16\u8f91\u8fc7\u7a0b\u4e2d\u6837\u5f0f\u5f80\u5f80\u81ea\u52a8\u589e\u52a0\uff0c\u4e3a\u6837\u5f0f\u4f7f\u7528\u5e26\u6765\u9ebb\u70e6\uff0c\u6bb5\u843d\u5185\u90e8\u540c\u65f6\u6709\u56fe\u7247\u548c\u6587\u5b57\u65f6\uff0c\u56fe\u7247\u5f80\u5f80\u4f1a\u88ab\u63a9\u76d6",
            },
            {
              value: "3",
              text: "\u500d\u8ddd\u6a21\u5f0f",
              tip: "\u91c7\u7528\u500d\u8ddd\u6a21\u5f0f\uff0c\u53ef\u4ee5\u9632\u6b62\u7f16\u8f91\u8fc7\u7a0b\u4e2d\u6837\u5f0f\u81ea\u52a8\u589e\u52a0\uff0c\u6bb5\u843d\u5185\u90e8\u540c\u65f6\u6709\u56fe\u7247\u548c\u6587\u5b57\u65f6\uff0c\u56fe\u7247\u4e0d\u4f1a\u88ab\u63a9\u76d6\uff0c\u8c03\u6574\u9875\u9762\u884c\u8ddd\u53ef\u4ee5\u7edf\u4e00\u8c03\u6574\u6240\u6709\u95f4\u8ddd",
            },
            {
              value: "4",
              text: "\u667a\u80fd\u6a21\u5f0f",
              tip: "\u4f9d\u636e\u5bf9\u73b0\u6709\u6587\u6863\u5bf9\u7edf\u8ba1\u5206\u6790\uff0c\u51b3\u5b9a\u662f\u7528\u90a3\u79cd\u6a21\u5f0f\u4e4b\u4e00",
            },
          ],
          [
            {
              value: "1",
              text: "\u500d\u8ddd\u6a21\u5f0f",
              tip: "\u9700\u8c03\u6574\u9875\u9762\u884c\u8ddd\u53ef\u4ee5\u4e00\u6b21\u6027\u8c03\u6574\u6240\u6709\u95f4\u8ddd",
            },
            {
              value: "2",
              text: "\u56fa\u5b9a\u503c\u6a21\u5f0f",
              tip: "\u5bb9\u6613\u88ab\u7528\u6237\u7406\u89e3\uff0c\u4e0d\u80fd\u4e00\u6b21\u6027\u8c03\u6574\u6240\u6709\u95f4\u8ddd",
            },
            {
              value: "3",
              text: "\u667a\u80fd\u6a21\u5f0f",
              tip: "\u4f9d\u636e\u5bf9\u73b0\u6709\u6587\u6863\u5bf9\u7edf\u8ba1\u5206\u6790\uff0c\u51b3\u5b9a\u662f\u7528\u500d\u8ddd\u6a21\u5f0f\u8fd8\u662f\u56fa\u5b9a\u503c\u6a21\u5f0f",
            },
          ],
          [
            {
              value: "1",
              text: "\u6781\u4e0d\u89c4\u8303",
              tip: "\u6781\u5ea6\u4e0d\u89c4\u8303\u7684\u6587\u6863\u5f80\u5f80\u6765\u81ea\u4e8e\u5404\u79cd\u9014\u5f84\u7684\u6284\u6284\u5199\u5199",
            },
            {
              value: "2",
              text: "\u5f88\u4e0d\u89c4\u8303",
              tip: "\u5f88\u4e0d\u89c4\u8303\u7684\u6587\u6863\u5f80\u5f80\u6765\u81ea\u4e0d\u540c\u4eba\u5171\u540c\u5199\u7684\u6587\u6863\uff0c\u6216\u8005\u6587\u6863\u4ece\u4e0d\u540c\u7684Word\u6587\u6863\u590d\u5236\u7c98\u8d34\u5f97\u5230\u7684",
            },
            {
              value: "3",
              text: "\u8f83\u4e0d\u89c4\u8303",
              tip: "\u8f83\u4e0d\u89c4\u8303\u5f80\u5f80\u6765\u81ea\u4e8e\u64b0\u5199\u6587\u6863\u8fc7\u7a0b\u4e2d\u4f7f\u7528\u6587\u6863\u7f16\u8f91\u8f6f\u4ef6\u4e0d\u5730\u9053\u89c4\u4e0d\u89c4\u8303",
            },
            {
              value: "4",
              text: "\u6bd4\u8f83\u89c4\u8303",
              tip: "\u4f7f\u7528\u4e86\u6a21\u677f\u548c\u6837\u5f0f\u6765\u63a7\u5236\u6587\u6863\u683c\u5f0f\uff0c\u4f46\u662f\u4f1a\u6709\u51fa\u9519\u6216\u8005\u540c\u6837\u5f0f\u4f46\u662f\u683c\u5f0f\u4e0d\u540c\u7b49\u60c5\u51b5\uff0c\u5bfc\u81f4\u7684\u683c\u5f0f\u4e0d\u6574\u9f50\u7edf\u4e00",
            },
          ],
          [
            {
              value: "1",
              text: "\u5f88\u4e0d\u89c4\u8303",
              tip: "\u5f80\u5f80\u6765\u81ea\u4e8eOCR\u8bc6\u522b\u3001PDF\u8f6c\u6362\u3001\u7f51\u9875\u590d\u5236\u7b49\u5f97\u5230\u7684\u6587\u6863",
            },
            {
              value: "2",
              text: "\u8f83\u4e0d\u89c4\u8303",
              tip: "\u5b58\u5728\u6bd4\u8f83\u591a\u7684\u53ef\u4e2a\u4e0e\u6807\u70b9\u7b14\u8bef\uff0c\u4ee5\u53ca\u4e00\u4e9b\u4e0d\u5730\u9053\u7684\u7528\u6cd5\uff0c\u6bd4\u5982\u7a7a\u683c\u63a7\u5236\u7f29\u8fdb\u3001\u7a7a\u884c\u63a7\u5236\u683c\u5f0f\u7b49",
            },
            {
              value: "3",
              text: "\u6bd4\u8f83\u89c4\u8303",
              tip: "\u4ec5\u4ec5\u5b58\u5728\u5c11\u91cf\u7b14\u8bef\u4e0e\u4e0d\u89c4\u8303",
            },
            {
              value: "4",
              text: "\u5df2\u5f88\u89c4\u8303",
              tip: "\u6b63\u786e\u4f7f\u7528\u6587\u6863\u7f16\u8f91\u8f6f\u4ef6\u5e76\u624b\u5de5\u6821\u5bf9\u8fc7\u7684\u6587\u6863",
            },
          ],
        ],
        le = [
          [
            "\u5b66\u4f4d\u8bba\u6587\u4e66\u7a3f",
            "\u5b66\u672f\u671f\u520a\u6295\u7a3f",
            "\u8bfe\u8bbe\u6216\u5927\u4f5c\u4e1a",
            "\u5236\u5ea6\u6807\u51c6\u6c47\u7f16",
            "\u7814\u7a76\u8bbe\u8ba1\u62a5\u544a",
            "\u6295\u6807\u4e0e\u62db\u6807\u4e66",
            "\u8f6f\u4ef6\u64cd\u4f5c\u6587\u6863",
            "\u672a\u77e5\u7c7b\u578b\u6587\u6863",
          ],
          [
            "\u9876\u7aef\u5bf9\u9f50",
            "\u5c45\u4e2d\u5bf9\u9f50",
            "\u57fa\u7ebf\u5bf9\u9f50",
            "\u5e95\u7aef\u5bf9\u9f50",
            "\u81ea\u52a8\u8bbe\u7f6e",
          ],
        ],
        se = [
          [
            "\u4e0d\u540c\u7c7b\u578b\u6587\u6863\u57fa\u51c6\u6a21\u677f\u548c\u9009\u9879\u4e0d\u540c",
          ],
          [""],
        ],
        oe = (function (e) {
          Object(s.a)(n, e);
          var t = Object(o.a)(n);
          function n(e) {
            var a;
            return (
              Object(i.a)(this, n),
              ((a = t.call(this, e)).genCheckOpt = function (e, t) {
                return c.a.createElement(g.a, {
                  curindex: t,
                  ckserial: ee.ckserial,
                  tips: e,
                  handleChange: a.handleCheckChange.bind(Object(l.a)(a)),
                });
              }),
              (a.handleCheckChange = function (e) {
                ee.ckserial[e.target.curindex] = Number(e.target.checked);
              }),
              (a.genOptionOpt = function (e, t, n) {
                return c.a.createElement(g.b, {
                  curindex: n,
                  opserial: ee.opserial,
                  tips: e,
                  data: t,
                  handleChange: a.handleOptionChange.bind(Object(l.a)(a)),
                });
              }),
              (a.handleOptionChange = function (e) {
                ee.opserial[e.target.curindex] = e.target.value;
              }),
              (a.handleGenTpl = function (e, t, n) {
                if (
                  void 0 === e ||
                  void 0 === e.curUser ||
                  "" === e.curUser.user_id
                )
                  t();
                else {
                  if (JSON.stringify(te) !== JSON.stringify(ee)) {
                    var i = {};
                    (i.newset =
                      ee.ckserial.join(",") +
                      "_" +
                      ee.opserial.join(",") +
                      "_" +
                      ee.demoopt.join(",")),
                      (i.user_id = a.state.curUser.user_id),
                      (i.type = "3"),
                      Object(O.b)(
                        "".concat(S.apiPublicPath, "users/setUserWebOpt"),
                        i
                      ).then(function (e) {
                        !0 === e.success &&
                          (te = JSON.parse(JSON.stringify(ee)));
                      });
                  }
                  a.setState({ listRenew: !1 }),
                    Object(P.a)(
                      "".concat(S.apiPublicPath, "tools/composeFilesRecord"),
                      "1",
                      e.curUser.user_id,
                      a.autoGenTpl.bind(Object(l.a)(a))
                    );
                }
              }),
              (a.gendemoopt = function (e, t, n) {
                return c.a.createElement(g.c, {
                  curindex: n,
                  tips: e,
                  data: t,
                  selserial: ee.demoopt,
                  handleChange: a.handleSelChange.bind(Object(l.a)(a)),
                });
              }),
              (a.handleSelChange = function (e, t) {
                console.log("SelectOpt:e", e),
                  console.log("SelectOpt:value", t),
                  console.log("SelectOpt:e.target.key", e.target.tabIndex),
                  (ee.demoopt[e.target.tabIndex] = t.key),
                  a.setState({});
              }),
              (a.handleChange = function (e) {
                "done" === e.file.status
                  ? a.props.getMyTemplates(a.props.user_id)
                  : ("error" !== e.file.status &&
                      "removed" !== e.file.status) ||
                    a.setState({});
              }),
              (a.handleToggleChange = function (e, t) {
                a.setState({ hideopt: !t }),
                  $.set("showMore", t, { expires: 365 });
              }),
              (a.state = {
                curUser: { user_id: "" },
                showLayer: !1,
                showLayerNoId: !1,
                hideopt: "false" === $.get("showMore"),
                listRenew: !1,
              }),
              (a.getWebset = a.getWebset.bind(Object(l.a)(a))),
              a
            );
          }
          return (
            Object(a.a)(n, [
              {
                key: "getWebset",
                value: function () {
                  var e = this;
                  if (void 0 !== this.props.user_id) {
                    var t = {};
                    (t.user_id = this.props.user_id),
                      (t.type = "1"),
                      (function (e) {
                        return Z.apply(this, arguments);
                      })(t).then(
                        function (t) {
                          t.success
                            ? (ee = t.data)
                            : void 0 !== e.props.user_id &&
                              "" !== e.props.user_id &&
                              e.props.logout({}),
                            (te = JSON.parse(JSON.stringify(ee))),
                            e.setState({});
                        },
                        function (e) {}
                      );
                  }
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  console.log(
                    "genTpl_componentDidUpdate_this.props.location:",
                    this.props.location
                  ),
                    Object(P.c)("");
                },
              },
              {
                key: "UNSAFE_componentWillMount",
                value: function () {
                  console.log(
                    "genTpl_this.props.location:",
                    this.props.location
                  ),
                    void 0 !== this.props.location.state
                      ? this.setState({
                          curUser: this.props.location.state.curUser,
                        })
                      : this.props.history.push("/");
                },
              },
              {
                key: "autoGenTpl",
                value: function (e, t) {
                  var n = this;
                  console.log("tplDetail_composeInsert_xhr:", e),
                    console.log("tplDetail_composeInsert_fileName:", t);
                  var i = (t = t.replace(/\\/g, "/")).split("/"),
                    a = {};
                  (a.ckserial = ee.ckserial.join(",")),
                    (a.opserial = ee.opserial.join(",")),
                    (a.demoopt = ee.demoopt.join(",")),
                    (a.doc_id = JSON.parse(e.responseText).id),
                    (a.tplDirect = 0),
                    (a.doc_name = i[i.length - 1]);
                  Object(O.b)(
                    "".concat(S.apiPublicPath).concat("cores/FilesAutotpl"),
                    a
                  ).then(
                    function (e) {
                      void 0 !== e && !0 === e.success
                        ? Object(P.c)(
                            "\u751f\u6210\u6392\u7248\u65b9\u6848\u6210\u529f\uff01"
                          )
                        : Object(P.c)(
                            "\u751f\u6210\u6392\u7248\u65b9\u6848\u5931\u8d25\uff1a" +
                              e.msg
                          ),
                        n.setState({ listRenew: !0 });
                    },
                    function (e) {}
                  ),
                    this.setState({});
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state,
                    n = (t.showLayer, t.showLayerNoId, t.hideopt),
                    i = { childrenGap: 0 },
                    a = {
                      root: {
                        background: "#f3f2f1",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "left",
                      },
                    },
                    l = { root: { padding: 2 } },
                    s = 0,
                    o = 0,
                    r = 0,
                    h = this.props.history,
                    g = this.props,
                    f =
                      (g.disabled,
                      g.checked,
                      {
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
                      }),
                    v = c.a.createElement(
                      "div",
                      null,
                      c.a.createElement(
                        "div",
                        { className: "checkTop" },
                        c.a.createElement(
                          d.a,
                          { styles: a, tokens: i },
                          c.a.createElement(
                            d.a.Item,
                            {
                              align: "center",
                              verticalAlignment: "center",
                              styles: l,
                            },
                            c.a.createElement(
                              "div",
                              {
                                style: {
                                  display: "inline-block",
                                  alignItems: "center",
                                  paddingRight: 12,
                                },
                              },
                              "\u7c7b\u578b\uff1a"
                            ),
                            c.a.createElement(
                              "div",
                              { style: { display: "inline-block" } },
                              this.gendemoopt(se[r], le[r], r++)
                            ),
                            c.a.createElement(
                              "div",
                              {
                                style: {
                                  display: "inline-block",
                                  marginLeft: 12,
                                },
                              },
                              this.genCheckOpt(ne[s], s++)
                            )
                          ),
                          c.a.createElement(
                            d.a.Item,
                            {
                              align: "center",
                              verticalAlignment: "center",
                              styles: l,
                            },
                            c.a.createElement(
                              "div",
                              { style: { display: "inline-block" } },
                              this.genOptionOpt(ie[o], ae[o], o++)
                            ),
                            c.a.createElement(
                              "div",
                              {
                                style: {
                                  display: "inline-block",
                                  alignItems: "center",
                                },
                              },
                              c.a.createElement(K.a, {
                                label: "\u66f4\u591a\u9009\u9879",
                                styles: {
                                  container: {
                                    textAlign: "center",
                                    display: "flex",
                                    height: "14px",
                                  },
                                  root: { height: "14px" },
                                },
                                inlineLabel: !0,
                                checked: !n,
                                onChange: this.handleToggleChange,
                              })
                            )
                          )
                        )
                      ),
                      c.a.createElement(
                        "div",
                        { className: "checkOpt", hidden: n },
                        c.a.createElement(
                          d.a,
                          { styles: a, tokens: i },
                          c.a.createElement(
                            d.a.Item,
                            { align: "left", styles: l },
                            c.a.createElement(
                              "div",
                              { style: { display: "inline-block" } },
                              this.genCheckOpt(ne[s], s++)
                            ),
                            c.a.createElement(
                              "div",
                              { style: { display: "inline-block" } },
                              this.genOptionOpt(ie[o], ae[o], o++)
                            )
                          ),
                          c.a.createElement(
                            d.a.Item,
                            { align: "left", styles: l },
                            c.a.createElement(
                              "div",
                              { style: { display: "inline-block" } },
                              this.genCheckOpt(ne[s], s++)
                            ),
                            c.a.createElement(
                              "div",
                              { style: { display: "inline-block" } },
                              this.genOptionOpt(ie[o], ae[o], o++)
                            )
                          ),
                          c.a.createElement(
                            d.a.Item,
                            { align: "left", styles: l },
                            c.a.createElement(
                              "div",
                              { style: { display: "inline-block" } },
                              this.genCheckOpt(ne[s], s++)
                            ),
                            c.a.createElement(
                              "div",
                              { style: { display: "inline-block" } },
                              this.gendemoopt(se[r], le[r], r++),
                              c.a.createElement(
                                "div",
                                { style: { display: "inline-block" } },
                                " ",
                                this.genCheckOpt(ne[s], s++)
                              )
                            )
                          ),
                          c.a.createElement(
                            d.a.Item,
                            { align: "left", styles: l },
                            c.a.createElement(
                              "div",
                              { style: { display: "inline-block" } },
                              this.genCheckOpt(ne[s], s++)
                            ),
                            c.a.createElement(
                              "div",
                              { style: { display: "inline-block" } },
                              this.genCheckOpt(ne[s], s++)
                            ),
                            c.a.createElement(
                              "div",
                              { style: { display: "inline-block" } },
                              this.genCheckOpt(ne[s], s++)
                            ),
                            c.a.createElement(
                              "div",
                              { style: { display: "inline-block" } },
                              this.genCheckOpt(ne[s], s++)
                            )
                          ),
                          c.a.createElement(
                            d.a.Item,
                            { align: "left", styles: l },
                            c.a.createElement(
                              "div",
                              { style: { display: "inline-block" } },
                              this.genOptionOpt(ie[o], ae[o], o++)
                            )
                          ),
                          c.a.createElement(
                            d.a.Item,
                            { align: "left", styles: l },
                            c.a.createElement(
                              "div",
                              { style: { display: "inline-block" } },
                              this.genOptionOpt(ie[o], ae[o], o++)
                            )
                          ),
                          c.a.createElement(
                            d.a.Item,
                            { align: "left", styles: l },
                            c.a.createElement(
                              "div",
                              { style: { display: "inline-block" } },
                              this.genCheckOpt(ne[s], s++)
                            )
                          )
                        )
                      ),
                      c.a.createElement(H, {
                        history: h,
                        curUser: this.state.curUser,
                        listRenew: this.state.listRenew,
                      })
                    );
                  return c.a.createElement(Y.a, null, function (t) {
                    var n = t.state,
                      i = t.showSignUp;
                    return c.a.createElement(
                      "div",
                      { className: m.a.App },
                      c.a.createElement(p.a, { history: h }),
                      c.a.createElement(
                        u.a,
                        {
                          primary: !0,
                          styles: f,
                          onClick: e.handleGenTpl.bind(e, n, i),
                        },
                        "\u751f\u6210\u65b0\u6392\u7248\u65b9\u6848"
                      ),
                      v
                    );
                  });
                },
              },
            ]),
            n
          );
        })(c.a.Component);
      t.default = oe;
    },
  },
]);
//# sourceMappingURL=14.3a4d5f4c.chunk.js.map
