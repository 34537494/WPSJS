(this.webpackJsonpaidocx = this.webpackJsonpaidocx || []).push([
  [1],
  {
    512: function (e, t, o) {
      "use strict";
      o.d(t, "a", function () {
        return H;
      });
      var i = o(1),
        n = o(0);
      var r = function () {
        return (r =
          Object.assign ||
          function (e) {
            for (var t, o = 1, i = arguments.length; o < i; o++)
              for (var n in (t = arguments[o]))
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }).apply(this, arguments);
      };
      function a() {
        for (var e = 0, t = 0, o = arguments.length; t < o; t++)
          e += arguments[t].length;
        var i = Array(e),
          n = 0;
        for (t = 0; t < o; t++)
          for (var r = arguments[t], a = 0, l = r.length; a < l; a++, n++)
            i[n] = r[a];
        return i;
      }
      var l = o(207),
        s = o(110),
        c = o(163),
        u = r;
      function p(e, t) {
        for (var o = [], i = 2; i < arguments.length; i++)
          o[i - 2] = arguments[i];
        var l = e;
        return l.isSlot
          ? 0 === (o = n.Children.toArray(o)).length
            ? l(t)
            : l(r(r({}, t), { children: o }))
          : n.createElement.apply(n, a([e, t], o));
      }
      function d(e, t) {
        void 0 === t && (t = {});
        var o = t.defaultProp,
          i = void 0 === o ? "children" : o;
        return function (t, o, a, s, p) {
          if (n.isValidElement(o)) return o;
          var d = (function (e, t) {
            for (var o = [], i = 2; i < arguments.length; i++)
              o[i - 2] = arguments[i];
            for (var n = {}, r = [], a = 0, s = o; a < s.length; a++) {
              var p = s[a];
              r.push(p && p.className), u(n, p);
            }
            return (
              (n.className = Object(l.a)([e, r], { rtl: Object(c.a)(t) })), n
            );
          })(
            s,
            p,
            t,
            (function (e, t) {
              var o, i;
              "string" === typeof t ||
              "number" === typeof t ||
              "boolean" === typeof t
                ? (((o = {})[e] = t), (i = o))
                : (i = t);
              return i;
            })(i, o)
          );
          if (a) {
            if (a.component) {
              var m = a.component;
              return n.createElement(m, r({}, d));
            }
            if (a.render) return a.render(d, e);
          }
          return n.createElement(e, r({}, d));
        };
      }
      var m = Object(s.b)(function (e) {
        return d(e);
      });
      function h(e, t) {
        var o = {},
          i = e,
          n = function (e) {
            if (t.hasOwnProperty(e)) {
              var n = function (o) {
                for (var n = [], r = 1; r < arguments.length; r++)
                  n[r - 1] = arguments[r];
                if (n.length > 0)
                  throw new Error(
                    "Any module using getSlots must use withSlots. Please see withSlots javadoc for more info."
                  );
                return f(
                  t[e],
                  o,
                  i[e],
                  i.slots && i.slots[e],
                  i._defaultStyles && i._defaultStyles[e],
                  i.theme
                );
              };
              (n.isSlot = !0), (o[e] = n);
            }
          };
        for (var r in t) n(r);
        return o;
      }
      function f(e, t, o, i, n, r) {
        return void 0 !== e.create ? e.create(t, o, i, n) : m(e)(t, o, i, n, r);
      }
      var v = o(5),
        g = o(67),
        b = o(52);
      function T(e, t) {
        void 0 === t && (t = {});
        var o = t.factoryOptions,
          i = (void 0 === o ? {} : o).defaultProp,
          l = function (o) {
            var i,
              l,
              s,
              c =
                ((i = t.displayName),
                (l = n.useContext(g.a)),
                (s = t.fields),
                b.a.getSettings(
                  s || ["theme", "styles", "tokens"],
                  i,
                  l.customizations
                )),
              p = t.state;
            p && (o = r(r({}, o), p(o)));
            var d = o.theme || c.theme,
              m = (function e(t, o) {
                for (var i = [], n = 2; n < arguments.length; n++)
                  i[n - 2] = arguments[n];
                for (var r = {}, l = 0, s = i; l < s.length; l++) {
                  var c = s[l];
                  c &&
                    ((c = "function" === typeof c ? c(t, o) : c),
                    Array.isArray(c) && (c = e.apply(void 0, a([t, o], c))),
                    u(r, c));
                }
                return r;
              })(o, d, t.tokens, c.tokens, o.tokens),
              h = (function (e, t, o) {
                for (var i = [], n = 3; n < arguments.length; n++)
                  i[n - 3] = arguments[n];
                return v.q.apply(
                  void 0,
                  i.map(function (i) {
                    return "function" === typeof i ? i(e, t, o) : i;
                  })
                );
              })(o, d, m, t.styles, c.styles, o.styles),
              f = r(r({}, o), {
                styles: h,
                tokens: m,
                _defaultStyles: h,
                theme: d,
              });
            return e(f);
          };
        return (
          (l.displayName = t.displayName || e.name),
          i && (l.create = d(l, { defaultProp: i })),
          u(l, t.statics),
          l
        );
      }
      var y = o(165),
        _ = o(123),
        x = function (e, t) {
          return t.spacing.hasOwnProperty(e) ? t.spacing[e] : e;
        },
        w = function (e) {
          var t = parseFloat(e),
            o = isNaN(t) ? 0 : t,
            i = isNaN(t) ? "" : t.toString();
          return { value: o, unit: e.substring(i.toString().length) || "px" };
        },
        O = function (e, t) {
          if (void 0 === e || "number" === typeof e || "" === e) return e;
          var o = e.split(" ");
          return o.length < 2
            ? x(e, t)
            : o.reduce(function (e, o) {
                return x(e, t) + " " + x(o, t);
              });
        },
        j = { start: "flex-start", end: "flex-end" },
        S = { root: "ms-Stack", inner: "ms-Stack-inner" },
        k = { root: "ms-StackItem" },
        N = { start: "flex-start", end: "flex-end" },
        E = T(
          function (e) {
            var t = e.children,
              o = Object(_.h)(e, _.i);
            return n.Children.count(t) < 1
              ? null
              : p(h(e, { root: "div" }).root, Object(i.a)({}, o), t);
          },
          {
            displayName: "StackItem",
            styles: function (e, t, o) {
              var i = e.grow,
                n = e.shrink,
                r = e.disableShrink,
                a = e.align,
                l = e.verticalFill,
                s = e.order,
                c = e.className,
                u = Object(v.v)(k, t);
              return {
                root: [
                  t.fonts.medium,
                  u.root,
                  {
                    margin: o.margin,
                    padding: o.padding,
                    height: l ? "100%" : "auto",
                    width: "auto",
                  },
                  i && { flexGrow: !0 === i ? 1 : i },
                  (r || (!i && !n)) && { flexShrink: 0 },
                  n && !r && { flexShrink: 1 },
                  a && { alignSelf: N[a] || a },
                  s && { order: s },
                  c,
                ],
              };
            },
          }
        );
      var H = T(
        function (e) {
          var t = e.as,
            o = void 0 === t ? "div" : t,
            r = e.disableShrink,
            a = e.wrap,
            l = Object(i.d)(e, ["as", "disableShrink", "wrap"]);
          Object(y.a)("Stack", e, {
            gap: "tokens.childrenGap",
            maxHeight: "tokens.maxHeight",
            maxWidth: "tokens.maxWidth",
            padding: "tokens.padding",
          });
          var s = n.Children.map(e.children, function (e, t) {
              if (!e) return null;
              if (
                (a = e) &&
                "object" === typeof a &&
                a.type &&
                a.type.displayName === E.displayName
              ) {
                var o = { shrink: !r };
                return n.cloneElement(
                  e,
                  Object(i.a)(Object(i.a)({}, o), e.props)
                );
              }
              var a;
              return e;
            }),
            c = Object(_.h)(l, _.i),
            u = h(e, { root: o, inner: "div" });
          return p(u.root, Object(i.a)({}, c), a ? p(u.inner, null, s) : s);
        },
        {
          displayName: "Stack",
          styles: function (e, t, o) {
            var n,
              r,
              a,
              l,
              s,
              c,
              u,
              p = e.verticalFill,
              d = e.horizontal,
              m = e.reversed,
              h = e.grow,
              f = e.wrap,
              g = e.horizontalAlign,
              b = e.verticalAlign,
              T = e.disableShrink,
              y = e.className,
              _ = Object(v.v)(S, t),
              k = o && o.childrenGap ? o.childrenGap : e.gap,
              N = o && o.maxHeight ? o.maxHeight : e.maxHeight,
              E = o && o.maxWidth ? o.maxWidth : e.maxWidth,
              H = o && o.padding ? o.padding : e.padding,
              W = (function (e, t) {
                if (void 0 === e || "" === e)
                  return {
                    rowGap: { value: 0, unit: "px" },
                    columnGap: { value: 0, unit: "px" },
                  };
                if ("number" === typeof e)
                  return {
                    rowGap: { value: e, unit: "px" },
                    columnGap: { value: e, unit: "px" },
                  };
                var o = e.split(" ");
                if (o.length > 2)
                  return {
                    rowGap: { value: 0, unit: "px" },
                    columnGap: { value: 0, unit: "px" },
                  };
                if (2 === o.length)
                  return { rowGap: w(x(o[0], t)), columnGap: w(x(o[1], t)) };
                var i = w(x(e, t));
                return { rowGap: i, columnGap: i };
              })(k, t),
              C = W.rowGap,
              P = W.columnGap,
              M = "" + -0.5 * P.value + P.unit,
              I = "" + -0.5 * C.value + C.unit,
              G = { textOverflow: "ellipsis" },
              R = { "> *:not(.ms-StackItem)": { flexShrink: T ? 0 : 1 } };
            return f
              ? {
                  root: [
                    _.root,
                    {
                      flexWrap: "wrap",
                      maxWidth: E,
                      maxHeight: N,
                      width: "auto",
                      overflow: "visible",
                      height: "100%",
                    },
                    g &&
                      ((n = {}),
                      (n[d ? "justifyContent" : "alignItems"] = j[g] || g),
                      n),
                    b &&
                      ((r = {}),
                      (r[d ? "alignItems" : "justifyContent"] = j[b] || b),
                      r),
                    y,
                    { display: "flex" },
                    d && { height: p ? "100%" : "auto" },
                  ],
                  inner: [
                    _.inner,
                    {
                      display: "flex",
                      flexWrap: "wrap",
                      marginLeft: M,
                      marginRight: M,
                      marginTop: I,
                      marginBottom: I,
                      overflow: "visible",
                      boxSizing: "border-box",
                      padding: O(H, t),
                      width:
                        0 === P.value
                          ? "100%"
                          : "calc(100% + " + P.value + P.unit + ")",
                      maxWidth: "100vw",
                      selectors: Object(i.a)(
                        {
                          "> *": Object(i.a)(
                            {
                              margin:
                                "" +
                                0.5 * C.value +
                                C.unit +
                                " " +
                                0.5 * P.value +
                                P.unit,
                            },
                            G
                          ),
                        },
                        R
                      ),
                    },
                    g &&
                      ((a = {}),
                      (a[d ? "justifyContent" : "alignItems"] = j[g] || g),
                      a),
                    b &&
                      ((l = {}),
                      (l[d ? "alignItems" : "justifyContent"] = j[b] || b),
                      l),
                    d && {
                      flexDirection: m ? "row-reverse" : "row",
                      height:
                        0 === C.value
                          ? "100%"
                          : "calc(100% + " + C.value + C.unit + ")",
                      selectors: {
                        "> *": {
                          maxWidth:
                            0 === P.value
                              ? "100%"
                              : "calc(100% - " + P.value + P.unit + ")",
                        },
                      },
                    },
                    !d && {
                      flexDirection: m ? "column-reverse" : "column",
                      height: "calc(100% + " + C.value + C.unit + ")",
                      selectors: {
                        "> *": {
                          maxHeight:
                            0 === C.value
                              ? "100%"
                              : "calc(100% - " + C.value + C.unit + ")",
                        },
                      },
                    },
                  ],
                }
              : {
                  root: [
                    _.root,
                    {
                      display: "flex",
                      flexDirection: d
                        ? m
                          ? "row-reverse"
                          : "row"
                        : m
                        ? "column-reverse"
                        : "column",
                      flexWrap: "nowrap",
                      width: "auto",
                      height: p ? "100%" : "auto",
                      maxWidth: E,
                      maxHeight: N,
                      padding: O(H, t),
                      boxSizing: "border-box",
                      selectors: Object(i.a)(
                        ((s = { "> *": G }),
                        (s[
                          m ? "> *:not(:last-child)" : "> *:not(:first-child)"
                        ] = [
                          d && { marginLeft: "" + P.value + P.unit },
                          !d && { marginTop: "" + C.value + C.unit },
                        ]),
                        s),
                        R
                      ),
                    },
                    h && { flexGrow: !0 === h ? 1 : h },
                    g &&
                      ((c = {}),
                      (c[d ? "justifyContent" : "alignItems"] = j[g] || g),
                      c),
                    b &&
                      ((u = {}),
                      (u[d ? "alignItems" : "justifyContent"] = j[b] || b),
                      u),
                    y,
                  ],
                };
          },
          statics: { Item: E },
        }
      );
    },
    513: function (e, t, o) {
      "use strict";
      o.d(t, "a", function () {
        return j;
      });
      var i = o(279),
        n = o(1),
        r = o(0),
        a = o(5),
        l = o(252),
        s = o(253);
      var c,
        u = o(259),
        p = o(33),
        d = o(254),
        m = o(132),
        h = o(164),
        f = o(123);
      !(function (e) {
        (e[(e.Parent = 0)] = "Parent"), (e[(e.Self = 1)] = "Self");
      })(c || (c = {}));
      var v,
        g = o(268),
        b = o(19),
        T = Object(l.a)(),
        y = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t._onRenderContent = function (e) {
                return r.createElement(
                  "p",
                  { className: t._classNames.subText },
                  e.content
                );
              }),
              t
            );
          }
          return (
            Object(n.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.className,
                o = e.calloutProps,
                i = e.directionalHint,
                a = e.directionalHintForRTL,
                l = e.styles,
                s = e.id,
                c = e.maxWidth,
                u = e.onRenderContent,
                p = void 0 === u ? this._onRenderContent : u,
                d = e.targetElement,
                m = e.theme;
              return (
                (this._classNames = T(l, {
                  theme: m,
                  className: t || (o && o.className),
                  beakWidth: o && o.beakWidth,
                  gapSpace: o && o.gapSpace,
                  maxWidth: c,
                })),
                r.createElement(
                  g.a,
                  Object(n.a)(
                    { target: d, directionalHint: i, directionalHintForRTL: a },
                    o,
                    Object(f.h)(this.props, f.f, ["id"]),
                    { className: this._classNames.root }
                  ),
                  r.createElement(
                    "div",
                    {
                      className: this._classNames.content,
                      id: s,
                      role: "tooltip",
                      onMouseEnter: this.props.onMouseEnter,
                      onMouseLeave: this.props.onMouseLeave,
                    },
                    p(this.props, this._onRenderContent)
                  )
                )
              );
            }),
            (t.defaultProps = {
              directionalHint: b.a.topCenter,
              maxWidth: "364px",
              calloutProps: {
                isBeakVisible: !0,
                beakWidth: 16,
                gapSpace: 0,
                setInitialFocus: !0,
                doNotLayer: !1,
              },
            }),
            t
          );
        })(r.Component),
        _ = Object(i.a)(
          y,
          function (e) {
            var t = e.className,
              o = e.beakWidth,
              i = void 0 === o ? 16 : o,
              n = e.gapSpace,
              r = void 0 === n ? 0 : n,
              l = e.maxWidth,
              s = e.theme,
              c = s.semanticColors,
              u = s.fonts,
              p = s.effects,
              d = -(Math.sqrt((i * i) / 2) + r) + 1 / window.devicePixelRatio;
            return {
              root: [
                "ms-Tooltip",
                s.fonts.medium,
                a.a.fadeIn200,
                {
                  background: c.menuBackground,
                  boxShadow: p.elevation8,
                  padding: "8px",
                  maxWidth: l,
                  selectors: {
                    ":after": {
                      content: "''",
                      position: "absolute",
                      bottom: d,
                      left: d,
                      right: d,
                      top: d,
                      zIndex: 0,
                    },
                  },
                },
                t,
              ],
              content: [
                "ms-Tooltip-content",
                u.small,
                {
                  position: "relative",
                  zIndex: 1,
                  color: c.menuItemText,
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  overflow: "hidden",
                },
              ],
              subText: [
                "ms-Tooltip-subtext",
                {
                  fontSize: "inherit",
                  fontWeight: "inherit",
                  color: "inherit",
                  margin: 0,
                },
              ],
            };
          },
          void 0,
          { scope: "Tooltip" }
        );
      !(function (e) {
        (e[(e.zero = 0)] = "zero"),
          (e[(e.medium = 1)] = "medium"),
          (e[(e.long = 2)] = "long");
      })(v || (v = {}));
      var x = Object(l.a)(),
        w = (function (e) {
          function t(o) {
            var i = e.call(this, o) || this;
            return (
              (i._tooltipHost = r.createRef()),
              (i._defaultTooltipId = Object(s.a)("tooltip")),
              (i.show = function () {
                i._toggleTooltip(!0);
              }),
              (i.dismiss = function () {
                i._hideTooltip();
              }),
              (i._getTargetElement = function () {
                if (i._tooltipHost.current) {
                  var e = i.props.overflowMode;
                  if (void 0 !== e)
                    switch (e) {
                      case c.Parent:
                        return i._tooltipHost.current.parentElement;
                      case c.Self:
                        return i._tooltipHost.current;
                    }
                  return i._tooltipHost.current;
                }
              }),
              (i._onTooltipMouseEnter = function (e) {
                var o,
                  n = i.props,
                  r = n.overflowMode,
                  a = n.delay;
                if (
                  (t._currentVisibleTooltip &&
                    t._currentVisibleTooltip !== i &&
                    t._currentVisibleTooltip.dismiss(),
                  (t._currentVisibleTooltip = i),
                  void 0 !== r)
                ) {
                  var l = i._getTargetElement();
                  if (
                    l &&
                    !(function (e) {
                      return e.clientWidth < e.scrollWidth;
                    })((o = l)) &&
                    !(function (e) {
                      return e.clientHeight < e.scrollHeight;
                    })(o)
                  )
                    return;
                }
                if (!e.target || !Object(u.a)(e.target, i._getTargetElement()))
                  if (
                    (i._clearDismissTimer(), i._clearOpenTimer(), a !== v.zero)
                  ) {
                    i.setState({ isAriaPlaceholderRendered: !0 });
                    var s = i._getDelayTime(a);
                    i._openTimerId = i._async.setTimeout(function () {
                      i._toggleTooltip(!0);
                    }, s);
                  } else i._toggleTooltip(!0);
              }),
              (i._onTooltipMouseLeave = function (e) {
                var o = i.props.closeDelay;
                i._clearDismissTimer(),
                  i._clearOpenTimer(),
                  o
                    ? (i._dismissTimerId = i._async.setTimeout(function () {
                        i._toggleTooltip(!1);
                      }, o))
                    : i._toggleTooltip(!1),
                  t._currentVisibleTooltip === i &&
                    (t._currentVisibleTooltip = void 0);
              }),
              (i._onTooltipKeyDown = function (e) {
                (e.which === p.a.escape || e.ctrlKey) &&
                  i.state.isTooltipVisible &&
                  (i._hideTooltip(), e.stopPropagation());
              }),
              (i._clearDismissTimer = function () {
                i._async.clearTimeout(i._dismissTimerId);
              }),
              (i._clearOpenTimer = function () {
                i._async.clearTimeout(i._openTimerId);
              }),
              (i._hideTooltip = function () {
                i._clearOpenTimer(),
                  i._clearDismissTimer(),
                  i._toggleTooltip(!1);
              }),
              (i._toggleTooltip = function (e) {
                i.state.isTooltipVisible !== e &&
                  i.setState(
                    { isAriaPlaceholderRendered: !1, isTooltipVisible: e },
                    function () {
                      return (
                        i.props.onTooltipToggle && i.props.onTooltipToggle(e)
                      );
                    }
                  );
              }),
              (i._getDelayTime = function (e) {
                switch (e) {
                  case v.medium:
                    return 300;
                  case v.long:
                    return 500;
                  default:
                    return 0;
                }
              }),
              Object(d.a)(i),
              (i.state = {
                isAriaPlaceholderRendered: !1,
                isTooltipVisible: !1,
              }),
              (i._async = new m.a(i)),
              i
            );
          }
          return (
            Object(n.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.calloutProps,
                o = e.children,
                i = e.content,
                l = e.directionalHint,
                s = e.directionalHintForRTL,
                c = e.hostClassName,
                u = e.id,
                p = e.setAriaDescribedBy,
                d = void 0 === p || p,
                m = e.tooltipProps,
                v = e.styles,
                g = e.theme;
              this._classNames = x(v, { theme: g, className: c });
              var b = this.state,
                T = b.isAriaPlaceholderRendered,
                y = b.isTooltipVisible,
                w = u || this._defaultTooltipId,
                O = !!(i || (m && m.onRenderContent && m.onRenderContent())),
                j = y && O,
                S = d && y && O ? w : void 0;
              return r.createElement(
                "div",
                Object(n.a)(
                  { className: this._classNames.root, ref: this._tooltipHost },
                  { onFocusCapture: this._onTooltipMouseEnter },
                  { onBlurCapture: this._hideTooltip },
                  {
                    onMouseEnter: this._onTooltipMouseEnter,
                    onMouseLeave: this._onTooltipMouseLeave,
                    onKeyDown: this._onTooltipKeyDown,
                    "aria-describedby": S,
                  }
                ),
                o,
                j &&
                  r.createElement(
                    _,
                    Object(n.a)(
                      {
                        id: w,
                        content: i,
                        targetElement: this._getTargetElement(),
                        directionalHint: l,
                        directionalHintForRTL: s,
                        calloutProps: Object(h.a)({}, t, {
                          onDismiss: this._hideTooltip,
                          onMouseEnter: this._onTooltipMouseEnter,
                          onMouseLeave: this._onTooltipMouseLeave,
                        }),
                        onMouseEnter: this._onTooltipMouseEnter,
                        onMouseLeave: this._onTooltipMouseLeave,
                      },
                      Object(f.h)(this.props, f.f),
                      m
                    )
                  ),
                T && r.createElement("div", { id: w, style: a.C }, i)
              );
            }),
            (t.prototype.componentWillUnmount = function () {
              t._currentVisibleTooltip &&
                t._currentVisibleTooltip === this &&
                (t._currentVisibleTooltip = void 0),
                this._async.dispose();
            }),
            (t.defaultProps = { delay: v.medium }),
            t
          );
        })(r.Component),
        O = {
          root: "ms-TooltipHost",
          ariaPlaceholder: "ms-TooltipHost-aria-placeholder",
        },
        j = Object(i.a)(
          w,
          function (e) {
            var t = e.className,
              o = e.theme;
            return { root: [Object(a.v)(O, o).root, { display: "inline" }, t] };
          },
          void 0,
          { scope: "TooltipHost" }
        );
    },
  },
]);
//# sourceMappingURL=1.ebe6cd18.chunk.js.map
