(this.webpackJsonpaidocx = this.webpackJsonpaidocx || []).push([
  [17],
  {
    376: function (e, t, o) {},
    377: function (e, t, o) {
      e.exports = o.p + "static/media/home-intro-box.8e3104f6.png";
    },
    481: function (e, t, o) {
      "use strict";
      o.d(t, "a", function () {
        return k;
      });
      var r = o(279),
        n = o(1),
        a = o(0),
        i = o(252),
        s = o(254),
        l = o(171),
        c = o(165),
        d = o(253),
        u = o(123),
        p = o(281),
        m = o(275),
        h = o(269),
        b = Object(i.a)(),
        g = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            return (
              (o._toggleButton = a.createRef()),
              (o._onClick = function (e) {
                var t = o.props,
                  r = t.disabled,
                  n = t.checked,
                  a = t.onChange,
                  i = t.onChanged,
                  s = t.onClick,
                  l = o.state.checked;
                r ||
                  (void 0 === n && o.setState({ checked: !l }),
                  a && a(e, !l),
                  i && i(!l),
                  s && s(e));
              }),
              Object(s.a)(o),
              Object(l.a)("Toggle", t, { checked: "defaultChecked" }),
              Object(c.a)("Toggle", t, {
                onAriaLabel: "ariaLabel",
                offAriaLabel: void 0,
                onChanged: "onChange",
              }),
              (o.state = { checked: !(!t.checked && !t.defaultChecked) }),
              (o._id = Object(d.a)("Toggle")),
              o
            );
          }
          return (
            Object(n.c)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return void 0 === e.checked ? null : { checked: !!e.checked };
            }),
            Object.defineProperty(t.prototype, "checked", {
              get: function () {
                return this.state.checked;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                o = t.as,
                r = void 0 === o ? "div" : o,
                i = t.className,
                s = t.theme,
                l = t.disabled,
                c = t.keytipProps,
                d = t.id,
                g = t.label,
                f = t.ariaLabel,
                k = t.onAriaLabel,
                C = t.offAriaLabel,
                y = t.offText,
                x = t.onText,
                v = t.styles,
                T = t.inlineLabel,
                O = this.state.checked,
                j = O ? x : y,
                w = O ? k : C,
                _ = Object(u.h)(this.props, u.l, ["defaultChecked"]),
                E = b(v, {
                  theme: s,
                  className: i,
                  disabled: l,
                  checked: O,
                  inlineLabel: T,
                  onOffMissing: !x && !y,
                }),
                S = d || this._id,
                L = S + "-label",
                N = S + "-stateText",
                B = void 0;
              f || w || (g && (B = L), j && (B = B ? B + " " + N : N));
              var P = this.props.role ? this.props.role : "switch",
                I = function (t) {
                  return (
                    void 0 === t && (t = {}),
                    a.createElement(
                      "button",
                      Object(n.a)({}, _, t, {
                        className: E.pill,
                        disabled: l,
                        id: S,
                        type: "button",
                        role: P,
                        ref: e._toggleButton,
                        "aria-disabled": l,
                        "aria-checked": O,
                        "aria-label": f || w,
                        "data-is-focusable": !0,
                        onChange: e._noop,
                        onClick: e._onClick,
                        "aria-labelledby": B,
                      }),
                      a.createElement("span", { className: E.thumb })
                    )
                  );
                },
                U = c
                  ? a.createElement(
                      h.a,
                      {
                        keytipProps: c,
                        ariaDescribedBy: _["aria-describedby"],
                        disabled: l,
                      },
                      function (e) {
                        return I(e);
                      }
                    )
                  : I();
              return a.createElement(
                r,
                { className: E.root, hidden: _.hidden },
                g &&
                  a.createElement(
                    m.a,
                    { htmlFor: S, className: E.label, id: L },
                    g
                  ),
                a.createElement(
                  "div",
                  { className: E.container },
                  U,
                  j &&
                    a.createElement(
                      m.a,
                      { htmlFor: S, className: E.text, id: N },
                      j
                    )
                ),
                a.createElement(p.a, null)
              );
            }),
            (t.prototype.focus = function () {
              this._toggleButton.current && this._toggleButton.current.focus();
            }),
            (t.prototype._noop = function () {}),
            t
          );
        })(a.Component),
        f = o(5),
        k = Object(r.a)(
          g,
          function (e) {
            var t,
              o,
              r,
              a,
              i,
              s,
              l,
              c = e.theme,
              d = e.className,
              u = e.disabled,
              p = e.checked,
              m = e.inlineLabel,
              h = e.onOffMissing,
              b = c.semanticColors,
              g = c.palette,
              k = b.bodyBackground,
              C = b.inputBackgroundChecked,
              y = b.inputBackgroundCheckedHovered,
              x = g.neutralDark,
              v = b.disabledBodySubtext,
              T = b.smallInputBorder,
              O = b.inputForegroundChecked,
              j = b.disabledBodySubtext,
              w = b.disabledBackground,
              _ = b.smallInputBorder,
              E = b.inputBorderHovered,
              S = b.disabledBodySubtext,
              L = b.disabledText;
            return {
              root: [
                "ms-Toggle",
                p && "is-checked",
                !u && "is-enabled",
                u && "is-disabled",
                c.fonts.medium,
                { marginBottom: "8px" },
                m && { display: "flex", alignItems: "center" },
                d,
              ],
              label: [
                "ms-Toggle-label",
                { display: "inline-block" },
                u && {
                  color: L,
                  selectors: ((t = {}), (t[f.e] = { color: "GrayText" }), t),
                },
                m && !h && { marginRight: 16 },
                h && m && { order: 1, marginLeft: 16 },
                m && { wordBreak: "break-all" },
              ],
              container: [
                "ms-Toggle-innerContainer",
                { display: "flex", position: "relative" },
              ],
              pill: [
                "ms-Toggle-background",
                Object(f.u)(c, { inset: -3 }),
                {
                  fontSize: "20px",
                  boxSizing: "border-box",
                  width: 40,
                  height: 20,
                  borderRadius: 10,
                  transition: "all 0.1s ease",
                  border: "1px solid " + _,
                  background: k,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 3px",
                },
                !u && [
                  !p && {
                    selectors: {
                      ":hover": [{ borderColor: E }],
                      ":hover .ms-Toggle-thumb": [
                        {
                          backgroundColor: x,
                          selectors:
                            ((o = {}),
                            (o[f.e] = { borderColor: "Highlight" }),
                            o),
                        },
                      ],
                    },
                  },
                  p && [
                    {
                      background: C,
                      borderColor: "transparent",
                      justifyContent: "flex-end",
                    },
                    {
                      selectors:
                        ((r = {
                          ":hover": [
                            {
                              backgroundColor: y,
                              borderColor: "transparent",
                              selectors:
                                ((a = {}),
                                (a[f.e] = { backgroundColor: "Highlight" }),
                                a),
                            },
                          ],
                        }),
                        (r[f.e] = Object(n.a)(
                          { backgroundColor: "Highlight" },
                          Object(f.w)()
                        )),
                        r),
                    },
                  ],
                ],
                u && [
                  { cursor: "default" },
                  !p && [{ borderColor: S }],
                  p && [
                    {
                      backgroundColor: v,
                      borderColor: "transparent",
                      justifyContent: "flex-end",
                    },
                  ],
                ],
                !u && {
                  selectors: {
                    "&:hover": {
                      selectors:
                        ((i = {}), (i[f.e] = { borderColor: "Highlight" }), i),
                    },
                  },
                },
              ],
              thumb: [
                "ms-Toggle-thumb",
                {
                  display: "block",
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  transition: "all 0.1s ease",
                  backgroundColor: T,
                  borderColor: "transparent",
                  borderWidth: 6,
                  borderStyle: "solid",
                  boxSizing: "border-box",
                },
                !u &&
                  p && [
                    {
                      backgroundColor: O,
                      selectors:
                        ((s = {}),
                        (s[f.e] = {
                          backgroundColor: "Window",
                          borderColor: "Window",
                        }),
                        s),
                    },
                  ],
                u && [
                  !p && [{ backgroundColor: j }],
                  p && [{ backgroundColor: w }],
                ],
              ],
              text: [
                "ms-Toggle-stateText",
                {
                  selectors: {
                    "&&": {
                      padding: "0",
                      margin: "0 8px",
                      userSelect: "none",
                      fontWeight: f.d.regular,
                    },
                  },
                },
                u && {
                  selectors: {
                    "&&": {
                      color: L,
                      selectors:
                        ((l = {}), (l[f.e] = { color: "GrayText" }), l),
                    },
                  },
                },
              ],
            };
          },
          void 0,
          { scope: "Toggle" }
        );
    },
    498: function (e, t, o) {
      "use strict";
      o.r(t);
      var r = o(93),
        n = o(94),
        a = o(96),
        i = o(95),
        s = o(0),
        l = o(70),
        c = o(263),
        d = o(481),
        u = o(272),
        p = (o(376), o(377)),
        m = o.n(p),
        h = (o(142), o(45)),
        b = o(26),
        g = o(125),
        f = !1,
        k = (function (e) {
          Object(a.a)(o, e);
          var t = Object(i.a)(o);
          function o() {
            return Object(r.a)(this, o), t.apply(this, arguments);
          }
          return (
            Object(n.a)(o, [
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.title,
                    o = e.logo,
                    r = e.message;
                  return s.createElement(
                    "section",
                    {
                      className:
                        "ms-welcome__header ms-bgColor-neutralLighter ms-u-fadeIn500",
                    },
                    s.createElement("img", {
                      width: "180",
                      height: "180",
                      src: o,
                      alt: t,
                      title: t,
                    }),
                    s.createElement(
                      "h2",
                      {
                        className:
                          "ms-fontWeight-light ms-fontColor-neutralPrimary",
                      },
                      r
                    )
                  );
                },
              },
            ]),
            o
          );
        })(s.Component),
        C = (function (e) {
          Object(a.a)(o, e);
          var t = Object(i.a)(o);
          function o() {
            var e;
            Object(r.a)(this, o);
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
              a[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(a))).onLinkClick = function (
                t
              ) {
                if (
                  (console.log(
                    "TaskPane_HeroList.onLinkClick_ this.props.curUser:",
                    e.props.curUser
                  ),
                  "" !== e.props.curUser.user_id)
                ) {
                  var o = {};
                  (o.tel = e.props.curUser.tel),
                    (o.user_id = e.props.curUser.user_id),
                    Object(h.b)(
                      "".concat(b.apiPublicPath, "users/reglogin/addtoken"),
                      o
                    ).then(
                      function (o) {
                        o.success &&
                          window.open(
                            b.RootPath +
                              "LoginOnce/tel/" +
                              e.props.curUser.tel +
                              "/ID/" +
                              e.props.curUser.user_id +
                              "/direct/" +
                              t
                          ),
                          e.setState({});
                      },
                      function (e) {}
                    );
                } else
                  window.open(
                    b.RootPath.slice(0, b.RootPath.length - 1) +
                      t.replace(/_/g, "/")
                  );
              }),
              e
            );
          }
          return (
            Object(n.a)(o, [
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    o = t.children,
                    r = t.items.map(function (t, o) {
                      return s.createElement(
                        "li",
                        { className: "ms-ListItem", key: o },
                        s.createElement("i", {
                          className: "ms-Icon ms-Icon--".concat(t.icon),
                        }),
                        s.createElement(
                          u.a,
                          { href: "#" },
                          s.createElement(
                            "span",
                            {
                              onClick: e.onLinkClick.bind(e, t.url),
                              className:
                                "ms-font-m ms-fontColor-neutralPrimary",
                            },
                            t.primaryText
                          )
                        )
                      );
                    });
                  return s.createElement(
                    "div",
                    { className: "ms-welcome__main" },
                    s.createElement(
                      "ul",
                      {
                        className:
                          "ms-List ms-welcome__features ms-u-slideUpIn10",
                      },
                      r
                    ),
                    o
                  );
                },
              },
            ]),
            o
          );
        })(s.Component),
        y = (function (e) {
          Object(a.a)(o, e);
          var t = Object(i.a)(o);
          function o(e) {
            var n;
            return (
              Object(r.a)(this, o),
              ((n = t.call(this, e)).onComposeClick = function (e) {
                g.set("composing", f, { expires: 365 }),
                  n.props.history.push({ pathname: "/Compose", state: {} });
              }),
              (n.onTestClick = function (e) {
                wps.alert("test click");
                var t = wps.WpsApplication().Selection;
                t.TypeText("\u6d4b\u8bd5"),
                  t.SetRange(2, 2),
                  t.TypeText("\u63d2\u5165"),
                  t.SetRange(4, 4),
                  t.TypeParagraph(),
                  t.TypeText("\u7b2c\u4e8c\u6bb5"),
                  t.SetRange(8, 8),
                  t.MoveUp(5, 1, 0),
                  (t.Style = "\u6807\u9898 1");
              }),
              (n.TglonChange = function (e, t) {
                g.set("composing", t, { expires: 365 }),
                  (f = t),
                  n.setState({ ShowMain: t });
              }),
              (n.state = {
                listItems: [],
                ShowMain: "true" === g.get("composing"),
              }),
              n
            );
          }
          return (
            Object(n.a)(o, [
              {
                key: "componentDidMount",
                value: function () {
                  this.setState({
                    listItems: [
                      {
                        icon: "Ribbon",
                        primaryText: "Word\u767e\u5b9d\u7bb1\u66f4\u5f3a\u5927",
                        url: "_WordAddin",
                      },
                      {
                        icon: "Unlock",
                        primaryText:
                          "\u6392\u7248\u5ba2\u6237\u7aef\u66f4\u65b9\u4fbf",
                        url: "_PcClient",
                      },
                      {
                        icon: "Design",
                        primaryText: "\u8be6\u60c5:AiDocx.com",
                        url: "_",
                      },
                    ],
                    ShowMain: g.get("composing"),
                  }),
                    "true" === g.get("composing") &&
                      this.props.history.push({
                        pathname: "/Compose",
                        state: {},
                      });
                },
              },
              {
                key: "render",
                value: function () {
                  return s.createElement(
                    "div",
                    { className: "ms-welcome" },
                    s.createElement(k, {
                      logo: m.a,
                      title: this.props.title,
                      message: "\u957f\u6587\u6863\u667a\u80fd\u6392\u7248",
                    }),
                    s.createElement(
                      C,
                      {
                        items: this.state.listItems,
                        curUser: this.props.curUser,
                      },
                      s.createElement(
                        "p",
                        { className: "ms-font-l" },
                        "\u67e5\u627e\u5230\u65b9\u6848\u540e",
                        s.createElement(
                          "b",
                          null,
                          "\u4e00\u952e\u667a\u80fd\u6392\u7248"
                        )
                      ),
                      s.createElement(
                        "div",
                        null,
                        s.createElement(
                          c.a,
                          {
                            styles: {
                              root: {
                                textAlign: "center",
                                fontSize: "16px",
                                height: "42px",
                                width: "160px",
                              },
                            },
                            onClick: this.onComposeClick,
                          },
                          "\u7acb\u5373\u4f53\u9a8c"
                        )
                      ),
                      s.createElement(d.a, {
                        className: "ms-welcome-toggle",
                        label:
                          "\u542f\u52a8\u5c31\u8fdb\u5165\u667a\u80fd\u6392\u7248",
                        inlineLabel: !0,
                        defaultChecked: f,
                        onChange: this.TglonChange,
                      })
                    )
                  );
                },
              },
            ]),
            o
          );
        })(s.Component);
      t.default = Object(l.b)(function (e) {
        return { curUser: e.current };
      })(y);
    },
  },
]);
//# sourceMappingURL=17.6604858b.chunk.js.map
