(this.webpackJsonpaidocx = this.webpackJsonpaidocx || []).push([
  [13],
  {
    314: function (e, t, o) {
      "use strict";
      var i, n, r, s, a;
      o.d(t, "b", function () {
        return i;
      }),
        o.d(t, "d", function () {
          return n;
        }),
        o.d(t, "c", function () {
          return r;
        }),
        o.d(t, "e", function () {
          return s;
        }),
        o.d(t, "a", function () {
          return a;
        }),
        (function (e) {
          (e[(e.disabled = 0)] = "disabled"),
            (e[(e.clickable = 1)] = "clickable"),
            (e[(e.hasDropdown = 2)] = "hasDropdown");
        })(i || (i = {})),
        (function (e) {
          (e[(e.unconstrained = 0)] = "unconstrained"),
            (e[(e.horizontalConstrained = 1)] = "horizontalConstrained");
        })(n || (n = {})),
        (function (e) {
          (e[(e.outside = 0)] = "outside"),
            (e[(e.surface = 1)] = "surface"),
            (e[(e.header = 2)] = "header");
        })(r || (r = {})),
        (function (e) {
          (e[(e.fixedColumns = 0)] = "fixedColumns"),
            (e[(e.justified = 1)] = "justified");
        })(s || (s = {})),
        (function (e) {
          (e[(e.onHover = 0)] = "onHover"),
            (e[(e.always = 1)] = "always"),
            (e[(e.hidden = 2)] = "hidden");
        })(a || (a = {}));
    },
    465: function (e, t, o) {
      "use strict";
      o.d(t, "a", function () {
        return r;
      });
      var i = o(110);
      var n = Object(i.a)(function (e) {
        return Object(i.a)(function (t) {
          var o = Object(i.a)(function (e) {
            return function (o) {
              return t(o, e);
            };
          });
          return function (i, n) {
            return e(i, n ? o(n) : t);
          };
        });
      });
      function r(e, t) {
        return n(e)(t);
      }
    },
    468: function (e, t, o) {
      "use strict";
      o.d(t, "a", function () {
        return r;
      }),
        o.d(t, "b", function () {
          return i;
        });
      var i,
        n,
        r = "change";
      !(function (e) {
        (e[(e.none = 0)] = "none"),
          (e[(e.single = 1)] = "single"),
          (e[(e.multiple = 2)] = "multiple");
      })(i || (i = {})),
        (function (e) {
          (e[(e.horizontal = 0)] = "horizontal"),
            (e[(e.vertical = 1)] = "vertical");
        })(n || (n = {}));
    },
    469: function (e, t, o) {
      "use strict";
      function i(e) {
        var t;
        return (
          e &&
            (e === window
              ? (t = {
                  left: 0,
                  top: 0,
                  width: window.innerWidth,
                  height: window.innerHeight,
                  right: window.innerWidth,
                  bottom: window.innerHeight,
                })
              : e.getBoundingClientRect && (t = e.getBoundingClientRect())),
          t
        );
      }
      o.d(t, "a", function () {
        return i;
      });
    },
    478: function (e, t, o) {
      "use strict";
      o.d(t, "a", function () {
        return O;
      });
      var i = o(279),
        n = o(1),
        r = o(0),
        s = o(275),
        a = o(252),
        l = o(254),
        c = o(253),
        d = o(169),
        p = o(123),
        u = o(122),
        h = o(202),
        g = o(118),
        m = o(273),
        f = o(209),
        _ = o(465),
        b = Object(a.a)(),
        v = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            return (
              (o._onChange = function (e) {
                var t = o.props.onChange;
                t && t(e, o.props);
              }),
              (o._onBlur = function (e) {
                var t = o.props.onBlur;
                t && t(e, o.props);
              }),
              (o._onFocus = function (e) {
                var t = o.props.onFocus;
                t && t(e, o.props);
              }),
              (o._onRenderField = function (e) {
                var t = e.id,
                  i = e.imageSrc,
                  s = e.imageAlt,
                  a = void 0 === s ? "" : s,
                  l = e.selectedImageSrc,
                  c = e.iconProps,
                  d = e.imageSize ? e.imageSize : { width: 32, height: 32 },
                  p = (
                    e.onRenderLabel
                      ? Object(_.a)(e.onRenderLabel, o._onRenderLabel)
                      : o._onRenderLabel
                  )(e);
                return r.createElement(
                  "label",
                  { htmlFor: t, className: o._classNames.field },
                  i &&
                    r.createElement(
                      "div",
                      { className: o._classNames.innerField },
                      r.createElement(
                        "div",
                        { className: o._classNames.imageWrapper },
                        r.createElement(g.a, {
                          src: i,
                          alt: a,
                          width: d.width,
                          height: d.height,
                        })
                      ),
                      r.createElement(
                        "div",
                        { className: o._classNames.selectedImageWrapper },
                        r.createElement(g.a, {
                          src: l,
                          alt: a,
                          width: d.width,
                          height: d.height,
                        })
                      )
                    ),
                  c &&
                    r.createElement(
                      "div",
                      { className: o._classNames.innerField },
                      r.createElement(
                        "div",
                        { className: o._classNames.iconWrapper },
                        r.createElement(m.a, Object(n.a)({}, c))
                      )
                    ),
                  i || c
                    ? r.createElement(
                        "div",
                        { className: o._classNames.labelWrapper },
                        p
                      )
                    : p
                );
              }),
              (o._onRenderLabel = function (e) {
                return r.createElement(
                  "span",
                  { id: e.labelId, className: "ms-ChoiceFieldLabel" },
                  e.text
                );
              }),
              Object(l.a)(o),
              o
            );
          }
          return (
            Object(n.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.ariaLabel,
                o = e.focused,
                i = e.required,
                s = e.theme,
                a = e.iconProps,
                l = e.imageSrc,
                c = e.imageSize,
                d = e.disabled,
                u = e.checked,
                h = e.id,
                g = e.styles,
                m = e.name,
                _ = e.onRenderField,
                v = void 0 === _ ? this._onRenderField : _,
                C = Object(n.d)(e, [
                  "ariaLabel",
                  "focused",
                  "required",
                  "theme",
                  "iconProps",
                  "imageSrc",
                  "imageSize",
                  "disabled",
                  "checked",
                  "id",
                  "styles",
                  "name",
                  "onRenderField",
                ]);
              this._classNames = b(g, {
                theme: s,
                hasIcon: !!a,
                hasImage: !!l,
                checked: u,
                disabled: d,
                imageIsLarge: !!l && (c.width > 71 || c.height > 71),
                imageSize: c,
                focused: o,
              });
              var y = Object(p.h)(C, p.l),
                S = y.className,
                x = Object(n.d)(y, ["className"]);
              return r.createElement(
                "div",
                { className: this._classNames.root },
                r.createElement(
                  "div",
                  { className: this._classNames.choiceFieldWrapper },
                  r.createElement(
                    "input",
                    Object(n.a)(
                      {
                        "aria-label": t,
                        id: h,
                        className: Object(f.a)(this._classNames.input, S),
                        type: "radio",
                        name: m,
                        disabled: d,
                        checked: u,
                        required: i,
                      },
                      x,
                      {
                        onChange: this._onChange,
                        onFocus: this._onFocus,
                        onBlur: this._onBlur,
                      }
                    )
                  ),
                  v(this.props, this._onRenderField)
                )
              );
            }),
            (t.defaultProps = { imageSize: { width: 32, height: 32 } }),
            t
          );
        })(r.Component),
        C = o(5),
        y = {
          root: "ms-ChoiceField",
          choiceFieldWrapper: "ms-ChoiceField-wrapper",
          input: "ms-ChoiceField-input",
          field: "ms-ChoiceField-field",
          innerField: "ms-ChoiceField-innerField",
          imageWrapper: "ms-ChoiceField-imageWrapper",
          iconWrapper: "ms-ChoiceField-iconWrapper",
          labelWrapper: "ms-ChoiceField-labelWrapper",
          checked: "is-checked",
        };
      function S(e, t) {
        var o, i;
        return [
          "is-inFocus",
          {
            selectors:
              ((o = {}),
              (o["." + u.a + " &"] = {
                position: "relative",
                outline: "transparent",
                selectors: {
                  "::-moz-focus-inner": { border: 0 },
                  ":after": {
                    content: '""',
                    top: -2,
                    right: -2,
                    bottom: -2,
                    left: -2,
                    pointerEvents: "none",
                    border: "1px solid " + e,
                    position: "absolute",
                    selectors:
                      ((i = {}),
                      (i[C.e] = {
                        borderColor: "WindowText",
                        borderWidth: t ? 1 : 2,
                      }),
                      i),
                  },
                },
              }),
              o),
          },
        ];
      }
      function x(e, t, o) {
        return [
          t,
          {
            paddingBottom: 2,
            transitionProperty: "opacity",
            transitionDuration: "200ms",
            transitionTimingFunction: "ease",
            selectors: {
              ".ms-Image": { display: "inline-block", borderStyle: "none" },
            },
          },
          (o ? !e : e) && [
            "is-hidden",
            {
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              overflow: "hidden",
              opacity: 0,
            },
          ],
        ];
      }
      var D = Object(i.a)(
          v,
          function (e) {
            var t,
              o,
              i,
              r,
              s,
              a = e.theme,
              l = e.hasIcon,
              c = e.hasImage,
              d = e.checked,
              p = e.disabled,
              u = e.imageIsLarge,
              h = e.focused,
              g = e.imageSize,
              m = a.palette,
              f = a.semanticColors,
              _ = a.fonts,
              b = Object(C.v)(y, a),
              v = m.neutralPrimary,
              D = f.inputBorderHovered,
              k = f.inputBackgroundChecked,
              I = m.themeDark,
              R = f.disabledBodySubtext,
              w = f.bodyBackground,
              O = m.neutralSecondary,
              H = f.inputBackgroundChecked,
              P = m.themeDark,
              j = f.disabledBodySubtext,
              E = m.neutralDark,
              M = f.focusBorder,
              A = f.inputBorderHovered,
              N = f.inputBackgroundChecked,
              T = m.themeDark,
              z = m.neutralLighter,
              L = {
                selectors: {
                  ".ms-ChoiceFieldLabel": { color: E },
                  ":before": { borderColor: d ? I : D },
                  ":after": [
                    !l &&
                      !c &&
                      !d && {
                        content: '""',
                        transitionProperty: "background-color",
                        left: 5,
                        top: 5,
                        width: 10,
                        height: 10,
                        backgroundColor: O,
                      },
                    d && { borderColor: P },
                  ],
                },
              },
              F = {
                borderColor: d ? T : A,
                selectors: {
                  ":before": { opacity: 1, borderColor: d ? I : D },
                },
              },
              W = [
                {
                  content: '""',
                  display: "inline-block",
                  backgroundColor: w,
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: v,
                  width: 20,
                  height: 20,
                  fontWeight: "normal",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  boxSizing: "border-box",
                  transitionProperty: "border-color",
                  transitionDuration: "200ms",
                  transitionTimingFunction: "cubic-bezier(.4, 0, .23, 1)",
                  borderRadius: "50%",
                },
                p && {
                  borderColor: R,
                  selectors:
                    ((t = {}),
                    (t[C.e] = Object(n.a)(
                      { borderColor: "GrayText", background: "Window" },
                      Object(C.w)()
                    )),
                    t),
                },
                d && {
                  borderColor: p ? R : k,
                  selectors:
                    ((o = {}),
                    (o[C.e] = {
                      borderColor: "Highlight",
                      background: "Window",
                      forcedColorAdjust: "none",
                    }),
                    o),
                },
                (l || c) && {
                  top: 3,
                  right: 3,
                  left: "auto",
                  opacity: d ? 1 : 0,
                },
              ],
              G = [
                {
                  content: '""',
                  width: 0,
                  height: 0,
                  borderRadius: "50%",
                  position: "absolute",
                  left: 10,
                  right: 0,
                  transitionProperty: "border-width",
                  transitionDuration: "200ms",
                  transitionTimingFunction: "cubic-bezier(.4, 0, .23, 1)",
                  boxSizing: "border-box",
                },
                d && {
                  borderWidth: 5,
                  borderStyle: "solid",
                  borderColor: p ? j : H,
                  left: 5,
                  top: 5,
                  width: 10,
                  height: 10,
                  selectors:
                    ((i = {}),
                    (i[C.e] = {
                      borderColor: "Highlight",
                      forcedColorAdjust: "none",
                    }),
                    i),
                },
                d && (l || c) && { top: 8, right: 8, left: "auto" },
              ];
            return {
              root: [
                b.root,
                a.fonts.medium,
                {
                  display: "flex",
                  alignItems: "center",
                  boxSizing: "border-box",
                  color: f.bodyText,
                  minHeight: 26,
                  border: "none",
                  position: "relative",
                  marginTop: 8,
                  selectors: {
                    ".ms-ChoiceFieldLabel": { display: "inline-block" },
                  },
                },
                !l &&
                  !c && {
                    selectors: {
                      ".ms-ChoiceFieldLabel": { paddingLeft: "26px" },
                    },
                  },
                c && "ms-ChoiceField--image",
                l && "ms-ChoiceField--icon",
                (l || c) && {
                  display: "inline-flex",
                  fontSize: 0,
                  margin: "0 4px 4px 0",
                  paddingLeft: 0,
                  backgroundColor: z,
                  height: "100%",
                },
              ],
              choiceFieldWrapper: [b.choiceFieldWrapper, h && S(M, l || c)],
              input: [
                b.input,
                {
                  position: "absolute",
                  opacity: 0,
                  top: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                  margin: 0,
                },
                p && "is-disabled",
              ],
              field: [
                b.field,
                d && b.checked,
                {
                  display: "inline-block",
                  cursor: "pointer",
                  marginTop: 0,
                  position: "relative",
                  verticalAlign: "top",
                  userSelect: "none",
                  minHeight: 20,
                  selectors: {
                    ":hover": !p && L,
                    ":focus": !p && L,
                    ":before": W,
                    ":after": G,
                  },
                },
                l && "ms-ChoiceField--icon",
                c && "ms-ChoiceField-field--image",
                (l || c) && {
                  boxSizing: "content-box",
                  cursor: "pointer",
                  paddingTop: 22,
                  margin: 0,
                  textAlign: "center",
                  transitionProperty: "all",
                  transitionDuration: "200ms",
                  transitionTimingFunction: "ease",
                  border: "1px solid transparent",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                },
                d && { borderColor: N },
                (l || c) && !p && { selectors: { ":hover": F, ":focus": F } },
                p && {
                  cursor: "default",
                  selectors: {
                    ".ms-ChoiceFieldLabel": {
                      color: f.disabledBodyText,
                      selectors:
                        ((r = {}),
                        (r[C.e] = Object(n.a)(
                          { color: "GrayText" },
                          Object(C.w)()
                        )),
                        r),
                    },
                  },
                },
                d && p && { borderColor: z },
              ],
              innerField: [
                b.innerField,
                c && { height: g.height, width: g.width },
                (l || c) && {
                  position: "relative",
                  display: "inline-block",
                  paddingLeft: 30,
                  paddingRight: 30,
                },
                (l || c) && u && { paddingLeft: 24, paddingRight: 24 },
                (l || c) &&
                  p && {
                    opacity: 0.25,
                    selectors:
                      ((s = {}),
                      (s[C.e] = { color: "GrayText", opacity: 1 }),
                      s),
                  },
              ],
              imageWrapper: x(!1, b.imageWrapper, d),
              selectedImageWrapper: x(!0, b.imageWrapper, d),
              iconWrapper: [
                b.iconWrapper,
                { fontSize: 32, lineHeight: 32, height: 32 },
              ],
              labelWrapper: [
                b.labelWrapper,
                _.medium,
                (l || c) && {
                  display: "block",
                  position: "relative",
                  margin: "4px 8px 2px 8px",
                  height: 32,
                  lineHeight: 15,
                  maxWidth: 2 * g.width,
                  overflow: "hidden",
                  whiteSpace: "pre-wrap",
                },
              ],
            };
          },
          void 0,
          { scope: "ChoiceGroupOption" }
        ),
        k = Object(a.a)(),
        I = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            (o._focusCallbacks = {}),
              (o._changeCallbacks = {}),
              (o._onBlur = function (e, t) {
                o.setState({ keyFocused: void 0 });
              }),
              Object(l.a)(o);
            var i = t.defaultSelectedKey,
              n = t.options,
              r = void 0 === n ? [] : n,
              s =
                !R(t) &&
                void 0 !== i &&
                r.some(function (e) {
                  return e.key === i;
                });
            return (
              (o.state = { keyChecked: s ? i : o._getKeyChecked(t) }),
              (o._id = Object(c.a)("ChoiceGroup")),
              (o._labelId = Object(c.a)("ChoiceGroupLabel")),
              o
            );
          }
          return (
            Object(n.c)(t, e),
            Object.defineProperty(t.prototype, "checkedOption", {
              get: function () {
                var e = this,
                  t = this.props.options,
                  o = void 0 === t ? [] : t;
                return Object(d.c)(o, function (t) {
                  return t.key === e.state.keyChecked;
                });
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              if (e !== this.props) {
                var o = this._getKeyChecked(this.props);
                o !== this._getKeyChecked(e) &&
                  this.setState({ keyChecked: o });
              }
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                o = t.className,
                i = t.theme,
                a = t.styles,
                l = t.options,
                c = void 0 === l ? [] : l,
                d = t.label,
                u = t.required,
                h = t.disabled,
                g = t.name,
                m = this.state,
                f = m.keyChecked,
                _ = m.keyFocused,
                b = Object(p.h)(this.props, p.f, [
                  "onChange",
                  "className",
                  "required",
                ]),
                v = k(a, {
                  theme: i,
                  className: o,
                  optionsContainIconOrImage: c.some(function (e) {
                    return !(!e.iconProps && !e.imageSrc);
                  }),
                }),
                C = this._id + "-label",
                y =
                  this.props.ariaLabelledBy ||
                  (d ? C : this.props["aria-labelledby"]);
              return r.createElement(
                "div",
                Object(n.a)({ className: v.applicationRole }, b),
                r.createElement(
                  "div",
                  Object(n.a)(
                    { className: v.root, role: "radiogroup" },
                    y && { "aria-labelledby": y }
                  ),
                  d &&
                    r.createElement(
                      s.a,
                      { className: v.label, required: u, id: C, disabled: h },
                      d
                    ),
                  r.createElement(
                    "div",
                    { className: v.flexContainer },
                    c.map(function (t) {
                      var o = Object(n.a)(Object(n.a)({}, t), {
                        focused: t.key === _,
                        checked: t.key === f,
                        disabled: t.disabled || h,
                        id: e._getOptionId(t),
                        labelId: e._getOptionLabelId(t),
                        name: g || e._id,
                        required: u,
                      });
                      return r.createElement(
                        D,
                        Object(n.a)(
                          {
                            key: t.key,
                            onBlur: e._onBlur,
                            onFocus: e._onFocus(t.key),
                            onChange: e._onChange(t.key),
                          },
                          o
                        )
                      );
                    })
                  )
                )
              );
            }),
            (t.prototype.focus = function () {
              var e = this.props.options,
                t = void 0 === e ? [] : e,
                o =
                  this.checkedOption ||
                  t.filter(function (e) {
                    return !e.disabled;
                  })[0],
                i = o && document.getElementById(this._getOptionId(o));
              i && (i.focus(), Object(u.b)(!0, i));
            }),
            (t.prototype._onFocus = function (e) {
              var t = this;
              return (
                this._focusCallbacks[e] ||
                  (this._focusCallbacks[e] = function (o, i) {
                    t.setState({ keyFocused: e });
                  }),
                this._focusCallbacks[e]
              );
            }),
            (t.prototype._onChange = function (e) {
              var t = this;
              return (
                this._changeCallbacks[e] ||
                  (this._changeCallbacks[e] = function (o, i) {
                    var n = t.props,
                      r = n.onChanged,
                      s = n.onChange;
                    R(t.props) || t.setState({ keyChecked: e });
                    var a = Object(d.c)(t.props.options || [], function (t) {
                      return t.key === e;
                    });
                    s ? s(o, a) : r && r(a, o);
                  }),
                this._changeCallbacks[e]
              );
            }),
            (t.prototype._getKeyChecked = function (e) {
              if (void 0 !== e.selectedKey) return e.selectedKey;
              var t = e.options,
                o = (void 0 === t ? [] : t).filter(function (e) {
                  return e.checked;
                });
              return o[0] && o[0].key;
            }),
            (t.prototype._getOptionId = function (e) {
              return e.id || this._id + "-" + e.key;
            }),
            (t.prototype._getOptionLabelId = function (e) {
              return e.labelId || this._labelId + "-" + e.key;
            }),
            t
          );
        })(r.Component);
      function R(e) {
        return Object(h.a)(e, "selectedKey");
      }
      var w = {
          root: "ms-ChoiceFieldGroup",
          flexContainer: "ms-ChoiceFieldGroup-flexContainer",
        },
        O = Object(i.a)(
          I,
          function (e) {
            var t = e.className,
              o = e.optionsContainIconOrImage,
              i = e.theme,
              n = Object(C.v)(w, i);
            return {
              applicationRole: t,
              root: [n.root, i.fonts.medium, { display: "block" }],
              flexContainer: [
                n.flexContainer,
                o && {
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                },
              ],
            };
          },
          void 0,
          { scope: "ChoiceGroup" }
        );
    },
    481: function (e, t, o) {
      "use strict";
      o.d(t, "a", function () {
        return b;
      });
      var i = o(279),
        n = o(1),
        r = o(0),
        s = o(252),
        a = o(254),
        l = o(171),
        c = o(165),
        d = o(253),
        p = o(123),
        u = o(281),
        h = o(275),
        g = o(269),
        m = Object(s.a)(),
        f = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            return (
              (o._toggleButton = r.createRef()),
              (o._onClick = function (e) {
                var t = o.props,
                  i = t.disabled,
                  n = t.checked,
                  r = t.onChange,
                  s = t.onChanged,
                  a = t.onClick,
                  l = o.state.checked;
                i ||
                  (void 0 === n && o.setState({ checked: !l }),
                  r && r(e, !l),
                  s && s(!l),
                  a && a(e));
              }),
              Object(a.a)(o),
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
                i = void 0 === o ? "div" : o,
                s = t.className,
                a = t.theme,
                l = t.disabled,
                c = t.keytipProps,
                d = t.id,
                f = t.label,
                _ = t.ariaLabel,
                b = t.onAriaLabel,
                v = t.offAriaLabel,
                C = t.offText,
                y = t.onText,
                S = t.styles,
                x = t.inlineLabel,
                D = this.state.checked,
                k = D ? y : C,
                I = D ? b : v,
                R = Object(p.h)(this.props, p.l, ["defaultChecked"]),
                w = m(S, {
                  theme: a,
                  className: s,
                  disabled: l,
                  checked: D,
                  inlineLabel: x,
                  onOffMissing: !y && !C,
                }),
                O = d || this._id,
                H = O + "-label",
                P = O + "-stateText",
                j = void 0;
              _ || I || (f && (j = H), k && (j = j ? j + " " + P : P));
              var E = this.props.role ? this.props.role : "switch",
                M = function (t) {
                  return (
                    void 0 === t && (t = {}),
                    r.createElement(
                      "button",
                      Object(n.a)({}, R, t, {
                        className: w.pill,
                        disabled: l,
                        id: O,
                        type: "button",
                        role: E,
                        ref: e._toggleButton,
                        "aria-disabled": l,
                        "aria-checked": D,
                        "aria-label": _ || I,
                        "data-is-focusable": !0,
                        onChange: e._noop,
                        onClick: e._onClick,
                        "aria-labelledby": j,
                      }),
                      r.createElement("span", { className: w.thumb })
                    )
                  );
                },
                A = c
                  ? r.createElement(
                      g.a,
                      {
                        keytipProps: c,
                        ariaDescribedBy: R["aria-describedby"],
                        disabled: l,
                      },
                      function (e) {
                        return M(e);
                      }
                    )
                  : M();
              return r.createElement(
                i,
                { className: w.root, hidden: R.hidden },
                f &&
                  r.createElement(
                    h.a,
                    { htmlFor: O, className: w.label, id: H },
                    f
                  ),
                r.createElement(
                  "div",
                  { className: w.container },
                  A,
                  k &&
                    r.createElement(
                      h.a,
                      { htmlFor: O, className: w.text, id: P },
                      k
                    )
                ),
                r.createElement(u.a, null)
              );
            }),
            (t.prototype.focus = function () {
              this._toggleButton.current && this._toggleButton.current.focus();
            }),
            (t.prototype._noop = function () {}),
            t
          );
        })(r.Component),
        _ = o(5),
        b = Object(i.a)(
          f,
          function (e) {
            var t,
              o,
              i,
              r,
              s,
              a,
              l,
              c = e.theme,
              d = e.className,
              p = e.disabled,
              u = e.checked,
              h = e.inlineLabel,
              g = e.onOffMissing,
              m = c.semanticColors,
              f = c.palette,
              b = m.bodyBackground,
              v = m.inputBackgroundChecked,
              C = m.inputBackgroundCheckedHovered,
              y = f.neutralDark,
              S = m.disabledBodySubtext,
              x = m.smallInputBorder,
              D = m.inputForegroundChecked,
              k = m.disabledBodySubtext,
              I = m.disabledBackground,
              R = m.smallInputBorder,
              w = m.inputBorderHovered,
              O = m.disabledBodySubtext,
              H = m.disabledText;
            return {
              root: [
                "ms-Toggle",
                u && "is-checked",
                !p && "is-enabled",
                p && "is-disabled",
                c.fonts.medium,
                { marginBottom: "8px" },
                h && { display: "flex", alignItems: "center" },
                d,
              ],
              label: [
                "ms-Toggle-label",
                { display: "inline-block" },
                p && {
                  color: H,
                  selectors: ((t = {}), (t[_.e] = { color: "GrayText" }), t),
                },
                h && !g && { marginRight: 16 },
                g && h && { order: 1, marginLeft: 16 },
                h && { wordBreak: "break-all" },
              ],
              container: [
                "ms-Toggle-innerContainer",
                { display: "flex", position: "relative" },
              ],
              pill: [
                "ms-Toggle-background",
                Object(_.u)(c, { inset: -3 }),
                {
                  fontSize: "20px",
                  boxSizing: "border-box",
                  width: 40,
                  height: 20,
                  borderRadius: 10,
                  transition: "all 0.1s ease",
                  border: "1px solid " + R,
                  background: b,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 3px",
                },
                !p && [
                  !u && {
                    selectors: {
                      ":hover": [{ borderColor: w }],
                      ":hover .ms-Toggle-thumb": [
                        {
                          backgroundColor: y,
                          selectors:
                            ((o = {}),
                            (o[_.e] = { borderColor: "Highlight" }),
                            o),
                        },
                      ],
                    },
                  },
                  u && [
                    {
                      background: v,
                      borderColor: "transparent",
                      justifyContent: "flex-end",
                    },
                    {
                      selectors:
                        ((i = {
                          ":hover": [
                            {
                              backgroundColor: C,
                              borderColor: "transparent",
                              selectors:
                                ((r = {}),
                                (r[_.e] = { backgroundColor: "Highlight" }),
                                r),
                            },
                          ],
                        }),
                        (i[_.e] = Object(n.a)(
                          { backgroundColor: "Highlight" },
                          Object(_.w)()
                        )),
                        i),
                    },
                  ],
                ],
                p && [
                  { cursor: "default" },
                  !u && [{ borderColor: O }],
                  u && [
                    {
                      backgroundColor: S,
                      borderColor: "transparent",
                      justifyContent: "flex-end",
                    },
                  ],
                ],
                !p && {
                  selectors: {
                    "&:hover": {
                      selectors:
                        ((s = {}), (s[_.e] = { borderColor: "Highlight" }), s),
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
                  backgroundColor: x,
                  borderColor: "transparent",
                  borderWidth: 6,
                  borderStyle: "solid",
                  boxSizing: "border-box",
                },
                !p &&
                  u && [
                    {
                      backgroundColor: D,
                      selectors:
                        ((a = {}),
                        (a[_.e] = {
                          backgroundColor: "Window",
                          borderColor: "Window",
                        }),
                        a),
                    },
                  ],
                p && [
                  !u && [{ backgroundColor: k }],
                  u && [{ backgroundColor: I }],
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
                      fontWeight: _.d.regular,
                    },
                  },
                },
                p && {
                  selectors: {
                    "&&": {
                      color: H,
                      selectors:
                        ((l = {}), (l[_.e] = { color: "GrayText" }), l),
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
    504: function (e, t, o) {
      "use strict";
      o.d(t, "a", function () {
        return r;
      });
      var i = o(468),
        n = o(148),
        r = (function () {
          function e() {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            var o = e[0] || {},
              n = o.onSelectionChanged,
              r = o.getKey,
              a = o.canSelectItem,
              l =
                void 0 === a
                  ? function () {
                      return !0;
                    }
                  : a,
              c = o.items,
              d = o.selectionMode,
              p = void 0 === d ? i.b.multiple : d;
            (this.mode = p),
              (this._getKey = r || s),
              (this._changeEventSuppressionCount = 0),
              (this._exemptedCount = 0),
              (this._anchoredIndex = 0),
              (this._unselectableCount = 0),
              (this._onSelectionChanged = n),
              (this._canSelectItem = l),
              (this._isModal = !1),
              this.setItems(c || [], !0),
              (this.count = this.getSelectedCount());
          }
          return (
            (e.prototype.canSelectItem = function (e, t) {
              return (
                !("number" === typeof t && t < 0) && this._canSelectItem(e, t)
              );
            }),
            (e.prototype.getKey = function (e, t) {
              var o = this._getKey(e, t);
              return "number" === typeof o || o ? "" + o : "";
            }),
            (e.prototype.setChangeEvents = function (e, t) {
              (this._changeEventSuppressionCount += e ? -1 : 1),
                0 === this._changeEventSuppressionCount &&
                  this._hasChanged &&
                  ((this._hasChanged = !1), t || this._change());
            }),
            (e.prototype.isModal = function () {
              return this._isModal;
            }),
            (e.prototype.setModal = function (e) {
              this._isModal !== e &&
                (this.setChangeEvents(!1),
                (this._isModal = e),
                e || this.setAllSelected(!1),
                this._change(),
                this.setChangeEvents(!0));
            }),
            (e.prototype.setItems = function (e, t) {
              void 0 === t && (t = !0);
              var o = {},
                i = {},
                n = !1;
              this.setChangeEvents(!1), (this._unselectableCount = 0);
              for (var r = 0; r < e.length; r++) {
                if ((d = e[r])) {
                  var s = this.getKey(d, r);
                  s && (o[s] = r);
                }
                (i[r] = d && !this.canSelectItem(d)),
                  i[r] && this._unselectableCount++;
              }
              (t || 0 === e.length) && this._setAllSelected(!1, !0);
              var a = {},
                l = 0;
              for (var c in this._exemptedIndices)
                if (this._exemptedIndices.hasOwnProperty(c)) {
                  var d,
                    p = Number(c),
                    u = (d = this._items[p])
                      ? this.getKey(d, Number(p))
                      : void 0,
                    h = u ? o[u] : p;
                  void 0 === h
                    ? (n = !0)
                    : ((a[h] = !0), l++, (n = n || h !== p));
                }
              this._items &&
                0 === this._exemptedCount &&
                e.length !== this._items.length &&
                this._isAllSelected &&
                (n = !0),
                (this._exemptedIndices = a),
                (this._exemptedCount = l),
                (this._keyToIndexMap = o),
                (this._unselectableIndices = i),
                (this._items = e),
                (this._selectedItems = null),
                n && (this._updateCount(), this._change()),
                this.setChangeEvents(!0);
            }),
            (e.prototype.getItems = function () {
              return this._items;
            }),
            (e.prototype.getSelection = function () {
              if (!this._selectedItems) {
                this._selectedItems = [];
                var e = this._items;
                if (e)
                  for (var t = 0; t < e.length; t++)
                    this.isIndexSelected(t) && this._selectedItems.push(e[t]);
              }
              return this._selectedItems;
            }),
            (e.prototype.getSelectedCount = function () {
              return this._isAllSelected
                ? this._items.length -
                    this._exemptedCount -
                    this._unselectableCount
                : this._exemptedCount;
            }),
            (e.prototype.getSelectedIndices = function () {
              if (!this._selectedIndices) {
                this._selectedIndices = [];
                var e = this._items;
                if (e)
                  for (var t = 0; t < e.length; t++)
                    this.isIndexSelected(t) && this._selectedIndices.push(t);
              }
              return this._selectedIndices;
            }),
            (e.prototype.isRangeSelected = function (e, t) {
              if (0 === t) return !1;
              for (var o = e + t, i = e; i < o; i++)
                if (!this.isIndexSelected(i)) return !1;
              return !0;
            }),
            (e.prototype.isAllSelected = function () {
              var e = this._items.length - this._unselectableCount;
              return (
                this.mode === i.b.single && (e = Math.min(e, 1)),
                (this.count > 0 &&
                  this._isAllSelected &&
                  0 === this._exemptedCount) ||
                  (!this._isAllSelected && this._exemptedCount === e && e > 0)
              );
            }),
            (e.prototype.isKeySelected = function (e) {
              var t = this._keyToIndexMap[e];
              return this.isIndexSelected(t);
            }),
            (e.prototype.isIndexSelected = function (e) {
              return !!(
                (this.count > 0 &&
                  this._isAllSelected &&
                  !this._exemptedIndices[e] &&
                  !this._unselectableIndices[e]) ||
                (!this._isAllSelected && this._exemptedIndices[e])
              );
            }),
            (e.prototype.setAllSelected = function (e) {
              if (!e || this.mode === i.b.multiple) {
                var t = this._items
                  ? this._items.length - this._unselectableCount
                  : 0;
                this.setChangeEvents(!1),
                  t > 0 &&
                    (this._exemptedCount > 0 || e !== this._isAllSelected) &&
                    ((this._exemptedIndices = {}),
                    (e !== this._isAllSelected || this._exemptedCount > 0) &&
                      ((this._exemptedCount = 0),
                      (this._isAllSelected = e),
                      this._change()),
                    this._updateCount()),
                  this.setChangeEvents(!0);
              }
            }),
            (e.prototype.setKeySelected = function (e, t, o) {
              var i = this._keyToIndexMap[e];
              i >= 0 && this.setIndexSelected(i, t, o);
            }),
            (e.prototype.setIndexSelected = function (e, t, o) {
              if (
                this.mode !== i.b.none &&
                !(
                  (e = Math.min(Math.max(0, e), this._items.length - 1)) < 0 ||
                  e >= this._items.length
                )
              ) {
                this.setChangeEvents(!1);
                var n = this._exemptedIndices[e];
                !this._unselectableIndices[e] &&
                  (t &&
                    this.mode === i.b.single &&
                    this._setAllSelected(!1, !0),
                  n &&
                    ((t && this._isAllSelected) ||
                      (!t && !this._isAllSelected)) &&
                    (delete this._exemptedIndices[e], this._exemptedCount--),
                  !n &&
                    ((t && !this._isAllSelected) ||
                      (!t && this._isAllSelected)) &&
                    ((this._exemptedIndices[e] = !0), this._exemptedCount++),
                  o && (this._anchoredIndex = e)),
                  this._updateCount(),
                  this.setChangeEvents(!0);
              }
            }),
            (e.prototype.selectToKey = function (e, t) {
              this.selectToIndex(this._keyToIndexMap[e], t);
            }),
            (e.prototype.selectToIndex = function (e, t) {
              if (this.mode !== i.b.none)
                if (this.mode !== i.b.single) {
                  var o = this._anchoredIndex || 0,
                    n = Math.min(e, o),
                    r = Math.max(e, o);
                  for (
                    this.setChangeEvents(!1), t && this._setAllSelected(!1, !0);
                    n <= r;
                    n++
                  )
                    this.setIndexSelected(n, !0, !1);
                  this.setChangeEvents(!0);
                } else this.setIndexSelected(e, !0, !0);
            }),
            (e.prototype.toggleAllSelected = function () {
              this.setAllSelected(!this.isAllSelected());
            }),
            (e.prototype.toggleKeySelected = function (e) {
              this.setKeySelected(e, !this.isKeySelected(e), !0);
            }),
            (e.prototype.toggleIndexSelected = function (e) {
              this.setIndexSelected(e, !this.isIndexSelected(e), !0);
            }),
            (e.prototype.toggleRangeSelected = function (e, t) {
              if (this.mode !== i.b.none) {
                var o = this.isRangeSelected(e, t),
                  n = e + t;
                if (!(this.mode === i.b.single && t > 1)) {
                  this.setChangeEvents(!1);
                  for (var r = e; r < n; r++) this.setIndexSelected(r, !o, !1);
                  this.setChangeEvents(!0);
                }
              }
            }),
            (e.prototype._updateCount = function (e) {
              void 0 === e && (e = !1);
              var t = this.getSelectedCount();
              t !== this.count && ((this.count = t), this._change()),
                this.count || e || this.setModal(!1);
            }),
            (e.prototype._setAllSelected = function (e, t) {
              if (
                (void 0 === t && (t = !1), !e || this.mode === i.b.multiple)
              ) {
                var o = this._items
                  ? this._items.length - this._unselectableCount
                  : 0;
                this.setChangeEvents(!1),
                  o > 0 &&
                    (this._exemptedCount > 0 || e !== this._isAllSelected) &&
                    ((this._exemptedIndices = {}),
                    (e !== this._isAllSelected || this._exemptedCount > 0) &&
                      ((this._exemptedCount = 0),
                      (this._isAllSelected = e),
                      this._change()),
                    this._updateCount(t)),
                  this.setChangeEvents(!0);
              }
            }),
            (e.prototype._change = function () {
              0 === this._changeEventSuppressionCount
                ? ((this._selectedItems = null),
                  (this._selectedIndices = void 0),
                  n.a.raise(this, i.a),
                  this._onSelectionChanged && this._onSelectionChanged())
                : (this._hasChanged = !0);
            }),
            e
          );
        })();
      function s(e, t) {
        var o = (e || {}).key;
        return void 0 === o ? "" + t : o;
      }
    },
    509: function (e, t, o) {
      "use strict";
      o.d(t, "a", function () {
        return vt;
      });
      var i,
        n = o(279),
        r = o(1),
        s = o(0),
        a = o(252),
        l = o(110),
        c = o(163),
        d = o(33),
        p = o(281),
        u = o(254),
        h = o(132),
        g = o(208),
        m = o(314),
        f = o(209),
        _ = o(148),
        b = o(253),
        v = o(276),
        C = o(44),
        y = o(167),
        S = o(273),
        x = o(270),
        D = function (e) {
          var t = e.count,
            o = e.indentWidth,
            i = void 0 === o ? 36 : o,
            n = e.role,
            r = void 0 === n ? "presentation" : n,
            a = t * i;
          return t > 0
            ? s.createElement("span", {
                className: "ms-GroupSpacer",
                style: { display: "inline-block", width: a },
                role: r,
              })
            : null;
        };
      !(function (e) {
        (e[(e.hidden = 0)] = "hidden"), (e[(e.visible = 1)] = "visible");
      })(i || (i = {}));
      var k = o(123),
        I = {
          label: k.m,
          audio: k.b,
          video: k.w,
          ol: k.o,
          li: k.n,
          a: k.a,
          button: k.c,
          input: k.l,
          textarea: k.t,
          select: k.q,
          option: k.p,
          table: k.r,
          tr: k.v,
          th: k.u,
          td: k.s,
          colGroup: k.d,
          col: k.e,
          form: k.g,
          iframe: k.j,
          img: k.k,
        };
      var R = Object(a.a)(),
        w = function (e) {
          var t = e.checked,
            o = void 0 !== t && t,
            i = e.className,
            n = e.theme,
            r = e.styles,
            a = e.useFastIcons,
            l = void 0 === a || a,
            c = R(r, { theme: n, className: i, checked: o }),
            d = l ? y.a : S.a;
          return s.createElement(
            "div",
            { className: c.root },
            s.createElement(d, { iconName: "CircleRing", className: c.circle }),
            s.createElement(d, {
              iconName: "StatusCircleCheckmark",
              className: c.check,
            })
          );
        };
      w.displayName = "CheckBase";
      var O = o(5),
        H = {
          root: "ms-Check",
          circle: "ms-Check-circle",
          check: "ms-Check-check",
          checkHost: "ms-Check-checkHost",
        },
        P = Object(n.a)(
          w,
          function (e) {
            var t,
              o,
              i,
              n,
              s,
              a = e.height,
              l = void 0 === a ? e.checkBoxHeight || "18px" : a,
              d = e.checked,
              p = e.className,
              u = e.theme,
              h = u.palette,
              g = u.semanticColors,
              m = u.fonts,
              f = Object(c.a)(u),
              _ = Object(O.v)(H, u),
              b = {
                fontSize: l,
                position: "absolute",
                left: 0,
                top: 0,
                width: l,
                height: l,
                textAlign: "center",
                verticalAlign: "middle",
              };
            return {
              root: [
                _.root,
                m.medium,
                {
                  lineHeight: "1",
                  width: l,
                  height: l,
                  verticalAlign: "top",
                  position: "relative",
                  userSelect: "none",
                  selectors:
                    ((t = {
                      ":before": {
                        content: '""',
                        position: "absolute",
                        top: "1px",
                        right: "1px",
                        bottom: "1px",
                        left: "1px",
                        borderRadius: "50%",
                        opacity: 1,
                        background: g.bodyBackground,
                      },
                    }),
                    (t[
                      "." +
                        _.checkHost +
                        ":hover &, ." +
                        _.checkHost +
                        ":focus &, &:hover, &:focus"
                    ] = { opacity: 1 }),
                    t),
                },
                d && [
                  "is-checked",
                  {
                    selectors: {
                      ":before": {
                        background: h.themePrimary,
                        opacity: 1,
                        selectors:
                          ((o = {}), (o[O.e] = { background: "Window" }), o),
                      },
                    },
                  },
                ],
                p,
              ],
              circle: [
                _.circle,
                b,
                {
                  color: h.neutralSecondary,
                  selectors: ((i = {}), (i[O.e] = { color: "WindowText" }), i),
                },
                d && { color: h.white },
              ],
              check: [
                _.check,
                b,
                {
                  opacity: 0,
                  color: h.neutralSecondary,
                  fontSize: O.g.medium,
                  left: f ? "-0.5px" : ".5px",
                  selectors:
                    ((n = { ":hover": { opacity: 1 } }),
                    (n[O.e] = Object(r.a)({}, Object(O.w)())),
                    n),
                },
                d && {
                  opacity: 1,
                  color: h.white,
                  fontWeight: 900,
                  selectors:
                    ((s = {}),
                    (s[O.e] = { border: "none", color: "WindowText" }),
                    s),
                },
              ],
              checkHost: _.checkHost,
            };
          },
          void 0,
          { scope: "Check" },
          !0
        ),
        j = o(122),
        E = {
          root: "ms-DetailsRow",
          compact: "ms-DetailsList--Compact",
          cell: "ms-DetailsRow-cell",
          cellAnimation: "ms-DetailsRow-cellAnimation",
          cellCheck: "ms-DetailsRow-cellCheck",
          check: "ms-DetailsRow-check",
          cellMeasurer: "ms-DetailsRow-cellMeasurer",
          listCellFirstChild: "ms-List-cell:first-child",
          isContentUnselectable: "is-contentUnselectable",
          isSelected: "is-selected",
          isCheckVisible: "is-check-visible",
          isRowHeader: "is-row-header",
          fields: "ms-DetailsRow-fields",
        },
        M = {
          cellLeftPadding: 12,
          cellRightPadding: 8,
          cellExtraRightPadding: 24,
        },
        A = { rowHeight: 42, compactRowHeight: 32 },
        N = Object(r.a)(Object(r.a)({}, A), {
          rowVerticalPadding: 11,
          compactRowVerticalPadding: 6,
        }),
        T = {
          tooltipHost: "ms-TooltipHost",
          root: "ms-DetailsHeader",
          cell: "ms-DetailsHeader-cell",
          cellIsCheck: "ms-DetailsHeader-cellIsCheck",
          collapseButton: "ms-DetailsHeader-collapseButton",
          isCollapsed: "is-collapsed",
          isAllSelected: "is-allSelected",
          isSelectAllHidden: "is-selectAllHidden",
          isResizingColumn: "is-resizingColumn",
          cellSizer: "ms-DetailsHeader-cellSizer",
          isResizing: "is-resizing",
          dropHintCircleStyle: "ms-DetailsHeader-dropHintCircleStyle",
          dropHintCaretStyle: "ms-DetailsHeader-dropHintCaretStyle",
          dropHintLineStyle: "ms-DetailsHeader-dropHintLineStyle",
          cellTitle: "ms-DetailsHeader-cellTitle",
          cellName: "ms-DetailsHeader-cellName",
          filterChevron: "ms-DetailsHeader-filterChevron",
          gripperBarVertical: "ms-DetailsColumn-gripperBarVertical",
          checkTooltip: "ms-DetailsHeader-checkTooltip",
          check: "ms-DetailsHeader-check",
        },
        z = function (e) {
          var t = e.theme,
            o = e.cellStyleProps,
            i = void 0 === o ? M : o,
            n = t.semanticColors;
          return [
            Object(O.v)(T, t).cell,
            Object(O.u)(t),
            {
              color: n.bodyText,
              position: "relative",
              display: "inline-block",
              boxSizing: "border-box",
              padding:
                "0 " + i.cellRightPadding + "px 0 " + i.cellLeftPadding + "px",
              lineHeight: "inherit",
              margin: "0",
              height: 42,
              verticalAlign: "top",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              textAlign: "left",
            },
          ];
        },
        L = {
          root: "ms-DetailsRow-check",
          isDisabled: "ms-DetailsRow-check--isDisabled",
          isHeader: "ms-DetailsRow-check--isHeader",
        },
        F = o(465),
        W = Object(a.a)(),
        G = s.memo(function (e) {
          return s.createElement(P, {
            theme: e.theme,
            checked: e.checked,
            className: e.className,
            useFastIcons: !0,
          });
        });
      function B(e) {
        return s.createElement(P, { checked: e.checked });
      }
      function V(e) {
        return s.createElement(G, { theme: e.theme, checked: e.checked });
      }
      var U,
        K = Object(n.a)(
          function (e) {
            var t = e.isVisible,
              o = void 0 !== t && t,
              i = e.canSelect,
              n = void 0 !== i && i,
              a = e.anySelected,
              l = void 0 !== a && a,
              c = e.selected,
              d = void 0 !== c && c,
              p = e.isHeader,
              u = void 0 !== p && p,
              h = e.className,
              g = (e.checkClassName, e.styles),
              m = e.theme,
              _ = e.compact,
              b = e.onRenderDetailsCheckbox,
              v = e.useFastIcons,
              C = void 0 === v || v,
              y = Object(r.d)(e, [
                "isVisible",
                "canSelect",
                "anySelected",
                "selected",
                "isHeader",
                "className",
                "checkClassName",
                "styles",
                "theme",
                "compact",
                "onRenderDetailsCheckbox",
                "useFastIcons",
              ]),
              S = C ? V : B,
              x = b ? Object(F.a)(b, S) : S,
              D = W(g, {
                theme: m,
                canSelect: n,
                selected: d,
                anySelected: l,
                className: h,
                isHeader: u,
                isVisible: o,
                compact: _,
              }),
              R = { checked: d, theme: m },
              w = (function (e, t, o) {
                var i = (e && I[e]) || k.i;
                return Object(k.h)(t, i, o);
              })("div", y, [
                "aria-label",
                "aria-labelledby",
                "aria-describedby",
              ]);
            return n
              ? s.createElement(
                  "div",
                  Object(r.a)({}, y, {
                    role: "checkbox",
                    className: Object(f.a)(D.root, D.check),
                    "aria-checked": d,
                    "data-selection-toggle": !0,
                    "data-automationid": "DetailsRowCheck",
                    tabIndex: -1,
                  }),
                  x(R)
                )
              : s.createElement(
                  "div",
                  Object(r.a)({}, w, {
                    className: Object(f.a)(D.root, D.check),
                  })
                );
          },
          function (e) {
            var t = e.theme,
              o = e.className,
              i = e.isHeader,
              n = e.selected,
              r = e.anySelected,
              s = e.canSelect,
              a = e.compact,
              l = e.isVisible,
              c = Object(O.v)(L, t),
              d = i ? 42 : a ? A.compactRowHeight : A.rowHeight,
              p = l || n || r;
            return {
              root: [c.root, o],
              check: [
                !s && c.isDisabled,
                i && c.isHeader,
                Object(O.u)(t),
                t.fonts.small,
                H.checkHost,
                {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "default",
                  boxSizing: "border-box",
                  verticalAlign: "top",
                  background: "none",
                  backgroundColor: "transparent",
                  border: "none",
                  opacity: p ? 1 : 0,
                  height: d,
                  width: 48,
                  padding: 0,
                  margin: 0,
                },
              ],
              isDisabled: [],
            };
          },
          void 0,
          { scope: "DetailsRowCheck" },
          !0
        ),
        X = o(468),
        q = o(32),
        Z = (function () {
          function e(e) {
            (this._selection = e.selection),
              (this._dragEnterCounts = {}),
              (this._activeTargets = {}),
              (this._lastId = 0),
              (this._initialized = !1);
          }
          return (
            (e.prototype.dispose = function () {
              this._events && this._events.dispose();
            }),
            (e.prototype.subscribe = function (e, t, o) {
              var i = this;
              if (!this._initialized) {
                this._events = new _.a(this);
                var n = Object(q.a)();
                n &&
                  (this._events.on(
                    n.body,
                    "mouseup",
                    this._onMouseUp.bind(this),
                    !0
                  ),
                  this._events.on(
                    n,
                    "mouseup",
                    this._onDocumentMouseUp.bind(this),
                    !0
                  )),
                  (this._initialized = !0);
              }
              var r,
                s,
                a,
                l,
                c,
                d,
                p,
                u,
                h,
                g,
                m = o.key,
                f = void 0 === m ? "" + ++this._lastId : m,
                b = [];
              if (o && e) {
                var v = o.eventMap,
                  C = o.context,
                  y = o.updateDropState,
                  S = { root: e, options: o, key: f };
                if (
                  ((u = this._isDraggable(S)),
                  (h = this._isDroppable(S)),
                  (u || h) && v)
                )
                  for (var x = 0, D = v; x < D.length; x++) {
                    var k = D[x],
                      I = {
                        callback: k.callback.bind(null, C),
                        eventName: k.eventName,
                      };
                    b.push(I), this._events.on(e, I.eventName, I.callback);
                  }
                h &&
                  ((s = function (e) {
                    e.isHandled ||
                      ((e.isHandled = !0),
                      i._dragEnterCounts[f]--,
                      0 === i._dragEnterCounts[f] && y(!1, e));
                  }),
                  (a = function (e) {
                    e.preventDefault(),
                      e.isHandled ||
                        ((e.isHandled = !0),
                        i._dragEnterCounts[f]++,
                        1 === i._dragEnterCounts[f] && y(!0, e));
                  }),
                  (l = function (e) {
                    (i._dragEnterCounts[f] = 0), y(!1, e);
                  }),
                  (c = function (e) {
                    (i._dragEnterCounts[f] = 0),
                      y(!1, e),
                      o.onDrop && o.onDrop(o.context.data, e);
                  }),
                  (d = function (e) {
                    e.preventDefault(),
                      o.onDragOver && o.onDragOver(o.context.data, e);
                  }),
                  (this._dragEnterCounts[f] = 0),
                  t.on(e, "dragenter", a),
                  t.on(e, "dragleave", s),
                  t.on(e, "dragend", l),
                  t.on(e, "drop", c),
                  t.on(e, "dragover", d)),
                  u &&
                    ((p = this._onMouseDown.bind(this, S)),
                    (l = this._onDragEnd.bind(this, S)),
                    (r = function (t) {
                      var n = o;
                      n &&
                        n.onDragStart &&
                        n.onDragStart(
                          n.context.data,
                          n.context.index,
                          i._selection.getSelection(),
                          t
                        ),
                        (i._isDragging = !0),
                        t.dataTransfer && t.dataTransfer.setData("id", e.id);
                    }),
                    t.on(e, "dragstart", r),
                    t.on(e, "mousedown", p),
                    t.on(e, "dragend", l)),
                  (g = {
                    target: S,
                    dispose: function () {
                      if (
                        (i._activeTargets[f] === g &&
                          delete i._activeTargets[f],
                        e)
                      ) {
                        for (var o = 0, n = b; o < n.length; o++) {
                          var m = n[o];
                          i._events.off(e, m.eventName, m.callback);
                        }
                        h &&
                          (t.off(e, "dragenter", a),
                          t.off(e, "dragleave", s),
                          t.off(e, "dragend", l),
                          t.off(e, "dragover", d),
                          t.off(e, "drop", c)),
                          u &&
                            (t.off(e, "dragstart", r),
                            t.off(e, "mousedown", p),
                            t.off(e, "dragend", l));
                      }
                    },
                  }),
                  (this._activeTargets[f] = g);
              }
              return {
                key: f,
                dispose: function () {
                  g && g.dispose();
                },
              };
            }),
            (e.prototype.unsubscribe = function (e, t) {
              var o = this._activeTargets[t];
              o && o.dispose();
            }),
            (e.prototype._onDragEnd = function (e, t) {
              var o = e.options;
              o.onDragEnd && o.onDragEnd(o.context.data, t);
            }),
            (e.prototype._onMouseUp = function (e) {
              if (((this._isDragging = !1), this._dragData)) {
                for (
                  var t = 0, o = Object.keys(this._activeTargets);
                  t < o.length;
                  t++
                ) {
                  var i = o[t],
                    n = this._activeTargets[i];
                  n.target.root &&
                    (this._events.off(n.target.root, "mousemove"),
                    this._events.off(n.target.root, "mouseleave"));
                }
                this._dragData.dropTarget &&
                  (_.a.raise(this._dragData.dropTarget.root, "dragleave"),
                  _.a.raise(this._dragData.dropTarget.root, "drop"));
              }
              this._dragData = null;
            }),
            (e.prototype._onDocumentMouseUp = function (e) {
              var t = Object(q.a)();
              t && e.target === t.documentElement && this._onMouseUp(e);
            }),
            (e.prototype._onMouseMove = function (e, t) {
              var o = t.buttons,
                i = void 0 === o ? 1 : o;
              if (this._dragData && 1 !== i) this._onMouseUp(t);
              else {
                var n = e.root,
                  r = e.key;
                this._isDragging &&
                  this._isDroppable(e) &&
                  this._dragData &&
                  this._dragData.dropTarget &&
                  this._dragData.dropTarget.key !== r &&
                  !this._isChild(n, this._dragData.dropTarget.root) &&
                  this._dragEnterCounts[this._dragData.dropTarget.key] > 0 &&
                  (_.a.raise(this._dragData.dropTarget.root, "dragleave"),
                  _.a.raise(n, "dragenter"),
                  (this._dragData.dropTarget = e));
              }
            }),
            (e.prototype._onMouseLeave = function (e, t) {
              this._isDragging &&
                this._dragData &&
                this._dragData.dropTarget &&
                this._dragData.dropTarget.key === e.key &&
                (_.a.raise(e.root, "dragleave"),
                (this._dragData.dropTarget = void 0));
            }),
            (e.prototype._onMouseDown = function (e, t) {
              if (0 === t.button)
                if (this._isDraggable(e)) {
                  this._dragData = {
                    clientX: t.clientX,
                    clientY: t.clientY,
                    eventTarget: t.target,
                    dragTarget: e,
                  };
                  for (
                    var o = 0, i = Object.keys(this._activeTargets);
                    o < i.length;
                    o++
                  ) {
                    var n = i[o],
                      r = this._activeTargets[n];
                    r.target.root &&
                      (this._events.on(
                        r.target.root,
                        "mousemove",
                        this._onMouseMove.bind(this, r.target)
                      ),
                      this._events.on(
                        r.target.root,
                        "mouseleave",
                        this._onMouseLeave.bind(this, r.target)
                      ));
                  }
                } else this._dragData = null;
            }),
            (e.prototype._isChild = function (e, t) {
              for (; t && t.parentElement; ) {
                if (t.parentElement === e) return !0;
                t = t.parentElement;
              }
              return !1;
            }),
            (e.prototype._isDraggable = function (e) {
              var t = e.options;
              return !(!t.canDrag || !t.canDrag(t.context.data));
            }),
            (e.prototype._isDroppable = function (e) {
              var t = e.options,
                o =
                  this._dragData && this._dragData.dragTarget
                    ? this._dragData.dragTarget.options.context
                    : void 0;
              return !(!t.canDrop || !t.canDrop(t.context, o));
            }),
            e
          );
        })(),
        Y = Object(a.a)(),
        J = function (e) {
          return function (t) {
            return t
              ? t.column.isIconOnly
                ? s.createElement(
                    "span",
                    { className: e.accessibleLabel },
                    t.column.name
                  )
                : s.createElement(s.Fragment, null, t.column.name)
              : null;
          };
        },
        Q = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            return (
              (o._root = s.createRef()),
              (o._onRenderFilterIcon = function (e) {
                return function (e) {
                  var t,
                    o = e.columnProps,
                    i = Object(r.d)(e, ["columnProps"]),
                    n = (
                      null === (t = o) || void 0 === t ? void 0 : t.useFastIcons
                    )
                      ? y.a
                      : S.a;
                  return s.createElement(n, Object(r.a)({}, i));
                };
              }),
              (o._onRenderColumnHeaderTooltip = function (e) {
                return s.createElement(
                  "span",
                  { className: e.hostClassName },
                  e.children
                );
              }),
              (o._onColumnClick = function (e) {
                var t = o.props,
                  i = t.onColumnClick,
                  n = t.column;
                n.columnActionsMode !== m.b.disabled &&
                  (n.onColumnClick && n.onColumnClick(e, n), i && i(e, n));
              }),
              (o._onDragStart = function (e, t, i, n) {
                var r = o._classNames;
                t &&
                  (o._updateHeaderDragInfo(t),
                  o._root.current.classList.add(r.borderWhileDragging),
                  o._async.setTimeout(function () {
                    o._root.current &&
                      o._root.current.classList.add(r.noBorderWhileDragging);
                  }, 20));
              }),
              (o._onDragEnd = function (e, t) {
                var i = o._classNames;
                t && o._updateHeaderDragInfo(-1, t),
                  o._root.current.classList.remove(i.borderWhileDragging),
                  o._root.current.classList.remove(i.noBorderWhileDragging);
              }),
              (o._updateHeaderDragInfo = function (e, t) {
                o.props.setDraggedItemIndex && o.props.setDraggedItemIndex(e),
                  o.props.updateDragInfo &&
                    o.props.updateDragInfo({ itemIndex: e }, t);
              }),
              (o._onColumnContextMenu = function (e) {
                var t = o.props,
                  i = t.onColumnContextMenu,
                  n = t.column;
                n.onColumnContextMenu &&
                  (n.onColumnContextMenu(n, e), e.preventDefault()),
                  i && (i(n, e), e.preventDefault());
              }),
              (o._onRootMouseDown = function (e) {
                o.props.isDraggable && 0 === e.button && e.stopPropagation();
              }),
              Object(u.a)(o),
              (o._async = new h.a(o)),
              (o._events = new _.a(o)),
              o
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.column,
                o = e.columnIndex,
                i = e.parentId,
                n = e.isDraggable,
                r = e.styles,
                a = e.theme,
                l = e.cellStyleProps,
                c = void 0 === l ? M : l,
                d = e.useFastIcons,
                p = void 0 === d || d,
                u = this.props.onRenderColumnHeaderTooltip,
                h = void 0 === u ? this._onRenderColumnHeaderTooltip : u;
              this._classNames = Y(r, {
                theme: a,
                headerClassName: t.headerClassName,
                iconClassName: t.iconClassName,
                isActionable: t.columnActionsMode !== m.b.disabled,
                isEmpty: !t.name,
                isIconVisible: t.isSorted || t.isGrouped || t.isFiltered,
                isPadded: t.isPadded,
                isIconOnly: t.isIconOnly,
                cellStyleProps: c,
                transitionDurationDrag: 200,
                transitionDurationDrop: 1500,
              });
              var g = this._classNames,
                f = p ? y.a : S.a,
                _ = t.onRenderFilterIcon
                  ? Object(F.a)(
                      t.onRenderFilterIcon,
                      this._onRenderFilterIcon(this._classNames)
                    )
                  : this._onRenderFilterIcon(this._classNames),
                b = t.onRenderHeader
                  ? Object(F.a)(t.onRenderHeader, J(this._classNames))
                  : J(this._classNames);
              return s.createElement(
                s.Fragment,
                null,
                s.createElement(
                  "div",
                  {
                    key: t.key,
                    ref: this._root,
                    role: "columnheader",
                    "aria-sort": t.isSorted
                      ? t.isSortedDescending
                        ? "descending"
                        : "ascending"
                      : "none",
                    "aria-colindex": o,
                    className: g.root,
                    "data-is-draggable": n,
                    draggable: n,
                    style: {
                      width:
                        t.calculatedWidth +
                        c.cellLeftPadding +
                        c.cellRightPadding +
                        (t.isPadded ? c.cellExtraRightPadding : 0),
                    },
                    "data-automationid": "ColumnsHeaderColumn",
                    "data-item-key": t.key,
                  },
                  n &&
                    s.createElement(f, {
                      iconName: "GripperBarVertical",
                      className: g.gripperBarVerticalStyle,
                    }),
                  h(
                    {
                      hostClassName: g.cellTooltip,
                      id: i + "-" + t.key + "-tooltip",
                      setAriaDescribedBy: !1,
                      column: t,
                      content:
                        t.columnActionsMode !== m.b.disabled ? t.ariaLabel : "",
                      children: s.createElement(
                        "span",
                        {
                          id: i + "-" + t.key,
                          "aria-label": t.isIconOnly ? t.name : void 0,
                          "aria-labelledby": t.isIconOnly
                            ? void 0
                            : i + "-" + t.key + "-name",
                          className: g.cellTitle,
                          "data-is-focusable":
                            t.columnActionsMode !== m.b.disabled,
                          role:
                            t.columnActionsMode === m.b.disabled ||
                            (void 0 === t.onColumnClick &&
                              void 0 === this.props.onColumnClick)
                              ? void 0
                              : "button",
                          "aria-describedby":
                            !this.props.onRenderColumnHeaderTooltip &&
                            this._hasAccessibleLabel()
                              ? i + "-" + t.key + "-tooltip"
                              : void 0,
                          onContextMenu: this._onColumnContextMenu,
                          onClick: this._onColumnClick,
                          "aria-haspopup":
                            t.columnActionsMode === m.b.hasDropdown,
                          "aria-expanded":
                            t.columnActionsMode === m.b.hasDropdown
                              ? !!t.isMenuOpen
                              : void 0,
                        },
                        s.createElement(
                          "span",
                          {
                            id: i + "-" + t.key + "-name",
                            className: g.cellName,
                          },
                          (t.iconName || t.iconClassName) &&
                            s.createElement(f, {
                              className: g.iconClassName,
                              iconName: t.iconName,
                            }),
                          b(this.props)
                        ),
                        t.isFiltered &&
                          s.createElement(f, {
                            className: g.nearIcon,
                            iconName: "Filter",
                          }),
                        t.isSorted &&
                          s.createElement(f, {
                            className: g.sortIcon,
                            iconName: t.isSortedDescending
                              ? "SortDown"
                              : "SortUp",
                          }),
                        t.isGrouped &&
                          s.createElement(f, {
                            className: g.nearIcon,
                            iconName: "GroupedDescending",
                          }),
                        t.columnActionsMode === m.b.hasDropdown &&
                          !t.isIconOnly &&
                          _({
                            "aria-hidden": !0,
                            columnProps: this.props,
                            className: g.filterChevron,
                            iconName: "ChevronDown",
                          })
                      ),
                    },
                    this._onRenderColumnHeaderTooltip
                  )
                ),
                this.props.onRenderColumnHeaderTooltip
                  ? null
                  : this._renderAccessibleLabel()
              );
            }),
            (t.prototype.componentDidMount = function () {
              var e = this;
              this.props.dragDropHelper &&
                this.props.isDraggable &&
                this._addDragDropHandling();
              var t = this._classNames;
              this.props.isDropped &&
                (this._root.current &&
                  (this._root.current.classList.add(t.borderAfterDropping),
                  this._async.setTimeout(function () {
                    e._root.current &&
                      e._root.current.classList.add(t.noBorderAfterDropping);
                  }, 20)),
                this._async.setTimeout(function () {
                  e._root.current &&
                    (e._root.current.classList.remove(t.borderAfterDropping),
                    e._root.current.classList.remove(t.noBorderAfterDropping));
                }, 1520));
            }),
            (t.prototype.componentWillUnmount = function () {
              this._dragDropSubscription &&
                (this._dragDropSubscription.dispose(),
                delete this._dragDropSubscription),
                this._async.dispose(),
                this._events.dispose();
            }),
            (t.prototype.componentDidUpdate = function () {
              !this._dragDropSubscription &&
                this.props.dragDropHelper &&
                this.props.isDraggable &&
                this._addDragDropHandling(),
                this._dragDropSubscription &&
                  !this.props.isDraggable &&
                  (this._dragDropSubscription.dispose(),
                  this._events.off(this._root.current, "mousedown"),
                  delete this._dragDropSubscription);
            }),
            (t.prototype._getColumnDragDropOptions = function () {
              var e = this,
                t = this.props.columnIndex;
              return {
                selectionIndex: t,
                context: { data: t, index: t },
                canDrag: function () {
                  return e.props.isDraggable;
                },
                canDrop: function () {
                  return !1;
                },
                onDragStart: this._onDragStart,
                updateDropState: function () {},
                onDrop: function () {},
                onDragEnd: this._onDragEnd,
              };
            }),
            (t.prototype._hasAccessibleLabel = function () {
              var e = this.props.column;
              return !!(
                e.ariaLabel ||
                e.filterAriaLabel ||
                e.sortAscendingAriaLabel ||
                e.sortDescendingAriaLabel ||
                e.groupAriaLabel
              );
            }),
            (t.prototype._renderAccessibleLabel = function () {
              var e = this.props,
                t = e.column,
                o = e.parentId,
                i = this._classNames;
              return this._hasAccessibleLabel() &&
                !this.props.onRenderColumnHeaderTooltip
                ? s.createElement(
                    "label",
                    {
                      key: t.key + "_label",
                      id: o + "-" + t.key + "-tooltip",
                      className: i.accessibleLabel,
                    },
                    t.ariaLabel,
                    (t.isFiltered && t.filterAriaLabel) || null,
                    (t.isSorted &&
                      (t.isSortedDescending
                        ? t.sortDescendingAriaLabel
                        : t.sortAscendingAriaLabel)) ||
                      null,
                    (t.isGrouped && t.groupAriaLabel) || null
                  )
                : null;
            }),
            (t.prototype._addDragDropHandling = function () {
              (this._dragDropSubscription = this.props.dragDropHelper.subscribe(
                this._root.current,
                this._events,
                this._getColumnDragDropOptions()
              )),
                this._events.on(
                  this._root.current,
                  "mousedown",
                  this._onRootMouseDown
                );
            }),
            t
          );
        })(s.Component),
        $ = {
          isActionable: "is-actionable",
          cellIsCheck: "ms-DetailsHeader-cellIsCheck",
          collapseButton: "ms-DetailsHeader-collapseButton",
          isCollapsed: "is-collapsed",
          isAllSelected: "is-allSelected",
          isSelectAllHidden: "is-selectAllHidden",
          isResizingColumn: "is-resizingColumn",
          isEmpty: "is-empty",
          isIconVisible: "is-icon-visible",
          cellSizer: "ms-DetailsHeader-cellSizer",
          isResizing: "is-resizing",
          dropHintCircleStyle: "ms-DetailsHeader-dropHintCircleStyle",
          dropHintLineStyle: "ms-DetailsHeader-dropHintLineStyle",
          cellTitle: "ms-DetailsHeader-cellTitle",
          cellName: "ms-DetailsHeader-cellName",
          filterChevron: "ms-DetailsHeader-filterChevron",
          gripperBarVerticalStyle: "ms-DetailsColumn-gripperBar",
          nearIcon: "ms-DetailsColumn-nearIcon",
        },
        ee = Object(n.a)(
          Q,
          function (e) {
            var t,
              o = e.theme,
              i = e.headerClassName,
              n = e.iconClassName,
              s = e.isActionable,
              a = e.isEmpty,
              l = e.isIconVisible,
              c = e.isPadded,
              d = e.isIconOnly,
              p = e.cellStyleProps,
              u = void 0 === p ? M : p,
              h = e.transitionDurationDrag,
              g = e.transitionDurationDrop,
              m = o.semanticColors,
              f = o.palette,
              _ = o.fonts,
              b = Object(O.v)($, o),
              v = {
                iconForegroundColor: m.bodySubtext,
                headerForegroundColor: m.bodyText,
                headerBackgroundColor: m.bodyBackground,
                dropdownChevronForegroundColor: f.neutralSecondary,
                resizerColor: f.neutralTertiaryAlt,
              },
              C = { color: v.iconForegroundColor, opacity: 1, paddingLeft: 8 },
              y = { outline: "1px solid " + f.themePrimary },
              S = { outlineColor: "transparent" };
            return {
              root: [
                z(e),
                _.small,
                s && [
                  b.isActionable,
                  {
                    selectors: {
                      ":hover": {
                        color: m.bodyText,
                        background: m.listHeaderBackgroundHovered,
                      },
                      ":active": { background: m.listHeaderBackgroundPressed },
                    },
                  },
                ],
                a && [b.isEmpty, { textOverflow: "clip" }],
                l && b.isIconVisible,
                c && {
                  paddingRight: u.cellExtraRightPadding + u.cellRightPadding,
                },
                {
                  selectors: {
                    ':hover i[data-icon-name="GripperBarVertical"]': {
                      display: "block",
                    },
                  },
                },
                i,
              ],
              gripperBarVerticalStyle: {
                display: "none",
                position: "absolute",
                textAlign: "left",
                color: f.neutralTertiary,
                left: 1,
              },
              nearIcon: [b.nearIcon, C],
              sortIcon: [C, { paddingLeft: 4, position: "relative", top: 1 }],
              iconClassName: [{ color: v.iconForegroundColor, opacity: 1 }, n],
              filterChevron: [
                b.filterChevron,
                {
                  color: v.dropdownChevronForegroundColor,
                  paddingLeft: 6,
                  verticalAlign: "middle",
                  fontSize: _.small.fontSize,
                },
              ],
              cellTitle: [
                b.cellTitle,
                Object(O.u)(o),
                Object(r.a)(
                  {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    boxSizing: "border-box",
                    overflow: "hidden",
                    padding:
                      "0 " +
                      u.cellRightPadding +
                      "px 0 " +
                      u.cellLeftPadding +
                      "px",
                  },
                  d
                    ? {
                        alignContent: "flex-end",
                        maxHeight: "100%",
                        flexWrap: "wrap-reverse",
                      }
                    : {}
                ),
              ],
              cellName: [
                b.cellName,
                {
                  flex: "0 1 auto",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontWeight: O.d.semibold,
                  fontSize: _.medium.fontSize,
                },
                d && {
                  selectors:
                    ((t = {}), (t["." + b.nearIcon] = { paddingLeft: 0 }), t),
                },
              ],
              cellTooltip: {
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
              },
              accessibleLabel: O.C,
              borderWhileDragging: y,
              noBorderWhileDragging: [
                S,
                { transition: "outline " + h + "ms ease" },
              ],
              borderAfterDropping: y,
              noBorderAfterDropping: [
                S,
                { transition: "outline  " + g + "ms ease" },
              ],
            };
          },
          void 0,
          { scope: "DetailsColumn" }
        );
      !(function (e) {
        (e[(e.none = 0)] = "none"),
          (e[(e.hidden = 1)] = "hidden"),
          (e[(e.visible = 2)] = "visible");
      })(U || (U = {}));
      var te = Object(a.a)(),
        oe = [],
        ie = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            return (
              (o._rootElement = s.createRef()),
              (o._rootComponent = s.createRef()),
              (o._draggedColumnIndex = -1),
              (o._dropHintDetails = {}),
              (o._updateDroppingState = function (e, t) {
                o._draggedColumnIndex >= 0 &&
                  "drop" !== t.type &&
                  !e &&
                  o._resetDropHints();
              }),
              (o._onDragOver = function (e, t) {
                o._draggedColumnIndex >= 0 &&
                  (t.stopPropagation(), o._computeDropHintToBeShown(t.clientX));
              }),
              (o._onDrop = function (e, t) {
                var i = o._getColumnReorderProps();
                if (o._draggedColumnIndex >= 0 && t) {
                  var n =
                      o._draggedColumnIndex > o._currentDropHintIndex
                        ? o._currentDropHintIndex
                        : o._currentDropHintIndex - 1,
                    r = o._isValidCurrentDropHintIndex();
                  if ((t.stopPropagation(), r))
                    if (
                      ((o._onDropIndexInfo.sourceIndex = o._draggedColumnIndex),
                      (o._onDropIndexInfo.targetIndex = n),
                      i.onColumnDrop)
                    ) {
                      var s = {
                        draggedIndex: o._draggedColumnIndex,
                        targetIndex: n,
                      };
                      i.onColumnDrop(s);
                    } else
                      i.handleColumnReorder &&
                        i.handleColumnReorder(o._draggedColumnIndex, n);
                }
                o._resetDropHints(),
                  (o._dropHintDetails = {}),
                  (o._draggedColumnIndex = -1);
              }),
              (o._updateDragInfo = function (e, t) {
                var i = o._getColumnReorderProps(),
                  n = e.itemIndex;
                if (n >= 0)
                  (o._draggedColumnIndex = o._isCheckboxColumnHidden()
                    ? n - 1
                    : n - 2),
                    o._getDropHintPositions(),
                    i.onColumnDragStart && i.onColumnDragStart(!0);
                else if (
                  t &&
                  o._draggedColumnIndex >= 0 &&
                  (o._resetDropHints(),
                  (o._draggedColumnIndex = -1),
                  (o._dropHintDetails = {}),
                  i.onColumnDragEnd)
                ) {
                  var r = o._isEventOnHeader(t);
                  i.onColumnDragEnd({ dropLocation: r }, t);
                }
              }),
              (o._getDropHintPositions = function () {
                for (
                  var e,
                    t = o.props.columns,
                    i = void 0 === t ? oe : t,
                    n = o._getColumnReorderProps(),
                    r = 0,
                    s = 0,
                    a = n.frozenColumnCountFromStart || 0,
                    l = n.frozenColumnCountFromEnd || 0,
                    c = a;
                  c < i.length - l + 1;
                  c++
                )
                  if (o._rootElement.current) {
                    var d = o._rootElement.current.querySelectorAll(
                      "#columnDropHint_" + c
                    )[0];
                    if (d)
                      if (c === a)
                        (r = d.offsetLeft), (s = d.offsetLeft), (e = d);
                      else {
                        var p = (d.offsetLeft + r) / 2;
                        (o._dropHintDetails[c - 1] = {
                          originX: r,
                          startX: s,
                          endX: p,
                          dropHintElementRef: e,
                        }),
                          (s = p),
                          (e = d),
                          (r = d.offsetLeft),
                          c === i.length - l &&
                            (o._dropHintDetails[c] = {
                              originX: r,
                              startX: s,
                              endX: d.offsetLeft,
                              dropHintElementRef: e,
                            });
                      }
                  }
              }),
              (o._computeDropHintToBeShown = function (e) {
                var t = Object(c.a)(o.props.theme);
                if (o._rootElement.current) {
                  var i =
                      e - o._rootElement.current.getBoundingClientRect().left,
                    n = o._currentDropHintIndex;
                  if (
                    o._isValidCurrentDropHintIndex() &&
                    ne(
                      t,
                      i,
                      o._dropHintDetails[n].startX,
                      o._dropHintDetails[n].endX
                    )
                  )
                    return;
                  var r = o.props.columns,
                    s = void 0 === r ? oe : r,
                    a = o._getColumnReorderProps(),
                    l = a.frozenColumnCountFromStart || 0,
                    d = a.frozenColumnCountFromEnd || 0,
                    p = l,
                    u = s.length - d,
                    h = -1;
                  if (
                    (re(t, i, o._dropHintDetails[p].endX)
                      ? (h = p)
                      : se(t, i, o._dropHintDetails[u].startX)
                      ? (h = u)
                      : o._isValidCurrentDropHintIndex() &&
                        (o._dropHintDetails[n + 1] &&
                        ne(
                          t,
                          i,
                          o._dropHintDetails[n + 1].startX,
                          o._dropHintDetails[n + 1].endX
                        )
                          ? (h = n + 1)
                          : o._dropHintDetails[n - 1] &&
                            ne(
                              t,
                              i,
                              o._dropHintDetails[n - 1].startX,
                              o._dropHintDetails[n - 1].endX
                            ) &&
                            (h = n - 1)),
                    -1 === h)
                  )
                    for (var g = l, m = u; g < m; ) {
                      var f = Math.ceil((m + g) / 2);
                      if (
                        ne(
                          t,
                          i,
                          o._dropHintDetails[f].startX,
                          o._dropHintDetails[f].endX
                        )
                      ) {
                        h = f;
                        break;
                      }
                      re(t, i, o._dropHintDetails[f].originX)
                        ? (m = f)
                        : se(t, i, o._dropHintDetails[f].originX) && (g = f);
                    }
                  h === o._draggedColumnIndex || h === o._draggedColumnIndex + 1
                    ? o._isValidCurrentDropHintIndex() && o._resetDropHints()
                    : n !== h &&
                      h >= 0 &&
                      (o._resetDropHints(),
                      o._updateDropHintElement(
                        o._dropHintDetails[h].dropHintElementRef,
                        "inline-block"
                      ),
                      (o._currentDropHintIndex = h));
                }
              }),
              (o._renderColumnSizer = function (e) {
                var t,
                  i = e.columnIndex,
                  n = o.props.columns,
                  r = void 0 === n ? oe : n,
                  a = r[i],
                  l = o.state.columnResizeDetails,
                  c = o._classNames;
                return a.isResizable
                  ? s.createElement("div", {
                      key: a.key + "_sizer",
                      "aria-hidden": !0,
                      role: "button",
                      "data-is-focusable": !1,
                      onClick: ae,
                      "data-sizer-index": i,
                      onBlur: o._onSizerBlur,
                      className: Object(f.a)(
                        c.cellSizer,
                        i < r.length - 1 ? c.cellSizerStart : c.cellSizerEnd,
                        ((t = {}),
                        (t[c.cellIsResizing] = l && l.columnIndex === i),
                        t)
                      ),
                      onDoubleClick: o._onSizerDoubleClick.bind(o, i),
                    })
                  : null;
              }),
              (o._onRenderColumnHeaderTooltip = function (e) {
                return s.createElement(
                  "span",
                  { className: e.hostClassName },
                  e.children
                );
              }),
              (o._onSelectAllClicked = function () {
                var e = o.props.selection;
                e && e.toggleAllSelected();
              }),
              (o._onRootMouseDown = function (e) {
                var t = e.target.getAttribute("data-sizer-index"),
                  i = Number(t),
                  n = o.props.columns,
                  r = void 0 === n ? oe : n;
                null !== t &&
                  0 === e.button &&
                  (o.setState({
                    columnResizeDetails: {
                      columnIndex: i,
                      columnMinWidth: r[i].calculatedWidth,
                      originX: e.clientX,
                    },
                  }),
                  e.preventDefault(),
                  e.stopPropagation());
              }),
              (o._onRootMouseMove = function (e) {
                var t = o.state,
                  i = t.columnResizeDetails,
                  n = t.isSizing;
                i &&
                  !n &&
                  e.clientX !== i.originX &&
                  o.setState({ isSizing: !0 });
              }),
              (o._onRootKeyDown = function (e) {
                var t = o.state,
                  i = t.columnResizeDetails,
                  n = t.isSizing,
                  s = o.props,
                  a = s.columns,
                  l = void 0 === a ? oe : a,
                  p = s.onColumnResized,
                  u = e.target.getAttribute("data-sizer-index");
                if (u && !n) {
                  var h = Number(u);
                  if (i) {
                    var g = void 0;
                    e.which === d.a.enter
                      ? (o.setState({ columnResizeDetails: void 0 }),
                        e.preventDefault(),
                        e.stopPropagation())
                      : e.which === d.a.left
                      ? (g = Object(c.a)(o.props.theme) ? 1 : -1)
                      : e.which === d.a.right &&
                        (g = Object(c.a)(o.props.theme) ? -1 : 1),
                      g &&
                        (e.shiftKey || (g *= 10),
                        o.setState({
                          columnResizeDetails: Object(r.a)(Object(r.a)({}, i), {
                            columnMinWidth: i.columnMinWidth + g,
                          }),
                        }),
                        p && p(l[h], i.columnMinWidth + g, h),
                        e.preventDefault(),
                        e.stopPropagation());
                  } else
                    e.which === d.a.enter &&
                      (o.setState({
                        columnResizeDetails: {
                          columnIndex: h,
                          columnMinWidth: l[h].calculatedWidth,
                        },
                      }),
                      e.preventDefault(),
                      e.stopPropagation());
                }
              }),
              (o._onSizerMouseMove = function (e) {
                var t = e.buttons,
                  i = o.props,
                  n = i.onColumnIsSizingChanged,
                  r = i.onColumnResized,
                  s = i.columns,
                  a = void 0 === s ? oe : s,
                  l = o.state.columnResizeDetails;
                if (void 0 === t || 1 === t) {
                  if (
                    (e.clientX !== l.originX && n && n(a[l.columnIndex], !0), r)
                  ) {
                    var d = e.clientX - l.originX;
                    Object(c.a)(o.props.theme) && (d = -d),
                      r(a[l.columnIndex], l.columnMinWidth + d, l.columnIndex);
                  }
                } else o._onSizerMouseUp(e);
              }),
              (o._onSizerBlur = function (e) {
                o.state.columnResizeDetails &&
                  o.setState({ columnResizeDetails: void 0, isSizing: !1 });
              }),
              (o._onSizerMouseUp = function (e) {
                var t = o.props,
                  i = t.columns,
                  n = void 0 === i ? oe : i,
                  r = t.onColumnIsSizingChanged,
                  s = o.state.columnResizeDetails;
                o.setState({ columnResizeDetails: void 0, isSizing: !1 }),
                  r && r(n[s.columnIndex], !1);
              }),
              (o._onToggleCollapseAll = function () {
                var e = o.props.onToggleCollapseAll,
                  t = !o.state.isAllCollapsed;
                o.setState({ isAllCollapsed: t }), e && e(t);
              }),
              Object(u.a)(o),
              (o._events = new _.a(o)),
              (o.state = {
                columnResizeDetails: void 0,
                isAllCollapsed: o.props.isAllCollapsed,
                isAllSelected:
                  !!o.props.selection && o.props.selection.isAllSelected(),
              }),
              (o._onDropIndexInfo = { sourceIndex: -1, targetIndex: -1 }),
              (o._id = Object(b.a)("header")),
              (o._currentDropHintIndex = -1),
              (o._dragDropHelper = new Z({
                selection: { getSelection: function () {} },
                minimumPixelsForDrag: o.props.minimumPixelsForDrag,
              })),
              o
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.props.selection;
              this._events.on(e, X.a, this._onSelectionChanged),
                this._rootElement.current &&
                  (this._events.on(
                    this._rootElement.current,
                    "mousedown",
                    this._onRootMouseDown
                  ),
                  this._events.on(
                    this._rootElement.current,
                    "keydown",
                    this._onRootKeyDown
                  ),
                  this._getColumnReorderProps() &&
                    (this._subscriptionObject = this._dragDropHelper.subscribe(
                      this._rootElement.current,
                      this._events,
                      this._getHeaderDragDropOptions()
                    )));
            }),
            (t.prototype.componentDidUpdate = function (e) {
              if (
                (this._getColumnReorderProps()
                  ? !this._subscriptionObject &&
                    this._rootElement.current &&
                    (this._subscriptionObject = this._dragDropHelper.subscribe(
                      this._rootElement.current,
                      this._events,
                      this._getHeaderDragDropOptions()
                    ))
                  : this._subscriptionObject &&
                    (this._subscriptionObject.dispose(),
                    delete this._subscriptionObject),
                this.props !== e &&
                  this._onDropIndexInfo.sourceIndex >= 0 &&
                  this._onDropIndexInfo.targetIndex >= 0)
              ) {
                var t = e.columns,
                  o = void 0 === t ? oe : t,
                  i = this.props.columns,
                  n = void 0 === i ? oe : i;
                o[this._onDropIndexInfo.sourceIndex].key ===
                  n[this._onDropIndexInfo.targetIndex].key &&
                  (this._onDropIndexInfo = {
                    sourceIndex: -1,
                    targetIndex: -1,
                  });
              }
              this.props.isAllCollapsed !== e.isAllCollapsed &&
                this.setState({ isAllCollapsed: this.props.isAllCollapsed });
            }),
            (t.prototype.componentWillUnmount = function () {
              this._subscriptionObject &&
                (this._subscriptionObject.dispose(),
                delete this._subscriptionObject),
                this._dragDropHelper.dispose(),
                this._events.dispose();
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                o = t.columns,
                n = void 0 === o ? oe : o,
                r = t.ariaLabel,
                a = t.ariaLabelForToggleAllGroupsButton,
                l = t.ariaLabelForSelectAllCheckbox,
                d = t.selectAllVisibility,
                p = t.ariaLabelForSelectionColumn,
                u = t.indentWidth,
                h = t.onColumnClick,
                g = t.onColumnContextMenu,
                f = t.onRenderColumnHeaderTooltip,
                _ = void 0 === f ? this._onRenderColumnHeaderTooltip : f,
                b = t.styles,
                k = t.selectionMode,
                I = t.theme,
                R = t.onRenderDetailsCheckbox,
                w = t.groupNestingDepth,
                O = t.useFastIcons,
                H = t.checkboxVisibility,
                P = t.className,
                j = this.state,
                E = j.isAllSelected,
                M = j.columnResizeDetails,
                A = j.isSizing,
                N = j.isAllCollapsed,
                T = d !== U.none,
                z = d === U.hidden,
                L = H === m.a.always,
                F = this._getColumnReorderProps(),
                W =
                  F && F.frozenColumnCountFromStart
                    ? F.frozenColumnCountFromStart
                    : 0,
                G =
                  F && F.frozenColumnCountFromEnd
                    ? F.frozenColumnCountFromEnd
                    : 0;
              this._classNames = te(b, {
                theme: I,
                isAllSelected: E,
                isSelectAllHidden: d === U.hidden,
                isResizingColumn: !!M && A,
                isSizing: A,
                isAllCollapsed: N,
                isCheckboxHidden: z,
                className: P,
              });
              var B = this._classNames,
                V = O ? y.a : S.a,
                q = Object(c.a)(I);
              return s.createElement(
                v.a,
                {
                  role: "row",
                  "aria-label": r,
                  className: B.root,
                  componentRef: this._rootComponent,
                  elementRef: this._rootElement,
                  onMouseMove: this._onRootMouseMove,
                  "data-automationid": "DetailsHeader",
                  direction: C.a.horizontal,
                },
                T
                  ? [
                      s.createElement(
                        "div",
                        {
                          key: "__checkbox",
                          className: B.cellIsCheck,
                          "aria-labelledby": this._id + "-check",
                          onClick: z ? void 0 : this._onSelectAllClicked,
                          "aria-colindex": 1,
                          role: "columnheader",
                        },
                        _(
                          {
                            hostClassName: B.checkTooltip,
                            id: this._id + "-checkTooltip",
                            setAriaDescribedBy: !1,
                            content: l,
                            children: s.createElement(K, {
                              id: this._id + "-check",
                              "aria-label": k === X.b.multiple ? l : p,
                              "data-is-focusable": !z || void 0,
                              isHeader: !0,
                              selected: E,
                              anySelected: !1,
                              canSelect: !z,
                              className: B.check,
                              onRenderDetailsCheckbox: R,
                              useFastIcons: O,
                              isVisible: L,
                            }),
                          },
                          this._onRenderColumnHeaderTooltip
                        )
                      ),
                      this.props.onRenderColumnHeaderTooltip
                        ? null
                        : l && !z
                        ? s.createElement(
                            "label",
                            {
                              key: "__checkboxLabel",
                              id: this._id + "-checkTooltip",
                              className: B.accessibleLabel,
                              "aria-hidden": !0,
                            },
                            l
                          )
                        : p && z
                        ? s.createElement(
                            "label",
                            {
                              key: "__checkboxLabel",
                              id: this._id + "-checkTooltip",
                              className: B.accessibleLabel,
                              "aria-hidden": !0,
                            },
                            p
                          )
                        : null,
                    ]
                  : null,
                w > 0 && this.props.collapseAllVisibility === i.visible
                  ? s.createElement(
                      "div",
                      {
                        className: B.cellIsGroupExpander,
                        onClick: this._onToggleCollapseAll,
                        "data-is-focusable": !0,
                        "aria-label": a,
                        "aria-expanded": !N,
                        role: "columnheader",
                      },
                      s.createElement(V, {
                        className: B.collapseButton,
                        iconName: q ? "ChevronLeftMed" : "ChevronRightMed",
                      })
                    )
                  : null,
                s.createElement(D, {
                  indentWidth: u,
                  role: "gridcell",
                  count: w - 1,
                }),
                n.map(function (t, o) {
                  var i = !!F && o >= W && o < n.length - G;
                  return [
                    F && (i || o === n.length - G) && e._renderDropHint(o),
                    s.createElement(ee, {
                      column: t,
                      styles: t.styles,
                      key: t.key,
                      columnIndex: (T ? 2 : 1) + o,
                      parentId: e._id,
                      isDraggable: i,
                      updateDragInfo: e._updateDragInfo,
                      dragDropHelper: e._dragDropHelper,
                      onColumnClick: h,
                      onColumnContextMenu: g,
                      onRenderColumnHeaderTooltip:
                        e.props.onRenderColumnHeaderTooltip,
                      isDropped: e._onDropIndexInfo.targetIndex === o,
                      cellStyleProps: e.props.cellStyleProps,
                      useFastIcons: O,
                    }),
                    e._renderColumnDivider(o),
                  ];
                }),
                F && 0 === G && this._renderDropHint(n.length),
                A &&
                  s.createElement(
                    x.a,
                    null,
                    s.createElement("div", {
                      className: B.sizingOverlay,
                      onMouseMove: this._onSizerMouseMove,
                      onMouseUp: this._onSizerMouseUp,
                    })
                  )
              );
            }),
            (t.prototype.focus = function () {
              var e;
              return !!(null === (e = this._rootComponent.current) ||
              void 0 === e
                ? void 0
                : e.focus());
            }),
            (t.prototype._getColumnReorderProps = function () {
              var e = this.props,
                t = e.columnReorderOptions;
              return (
                e.columnReorderProps ||
                (t &&
                  Object(r.a)(Object(r.a)({}, t), { onColumnDragEnd: void 0 }))
              );
            }),
            (t.prototype._getHeaderDragDropOptions = function () {
              return {
                selectionIndex: 1,
                context: { data: this, index: 0 },
                canDrag: function () {
                  return !1;
                },
                canDrop: function () {
                  return !0;
                },
                onDragStart: function () {},
                updateDropState: this._updateDroppingState,
                onDrop: this._onDrop,
                onDragEnd: function () {},
                onDragOver: this._onDragOver,
              };
            }),
            (t.prototype._isValidCurrentDropHintIndex = function () {
              return this._currentDropHintIndex >= 0;
            }),
            (t.prototype._isCheckboxColumnHidden = function () {
              var e = this.props,
                t = e.selectionMode,
                o = e.checkboxVisibility;
              return t === X.b.none || o === m.a.hidden;
            }),
            (t.prototype._resetDropHints = function () {
              this._currentDropHintIndex >= 0 &&
                (this._updateDropHintElement(
                  this._dropHintDetails[this._currentDropHintIndex]
                    .dropHintElementRef,
                  "none"
                ),
                (this._currentDropHintIndex = -1));
            }),
            (t.prototype._updateDropHintElement = function (e, t) {
              (e.childNodes[1].style.display = t),
                (e.childNodes[0].style.display = t);
            }),
            (t.prototype._isEventOnHeader = function (e) {
              if (this._rootElement.current) {
                var t = this._rootElement.current.getBoundingClientRect();
                if (
                  e.clientX > t.left &&
                  e.clientX < t.right &&
                  e.clientY > t.top &&
                  e.clientY < t.bottom
                )
                  return m.c.header;
              }
            }),
            (t.prototype._renderColumnDivider = function (e) {
              var t = this.props.columns,
                o = (void 0 === t ? oe : t)[e],
                i = o.onRenderDivider;
              return i
                ? i({ column: o, columnIndex: e }, this._renderColumnSizer)
                : this._renderColumnSizer({ column: o, columnIndex: e });
            }),
            (t.prototype._renderDropHint = function (e) {
              var t = this._classNames,
                o = this.props.useFastIcons ? y.a : S.a;
              return s.createElement(
                "div",
                {
                  key: "dropHintKey",
                  className: t.dropHintStyle,
                  id: "columnDropHint_" + e,
                },
                s.createElement(
                  "div",
                  {
                    role: "presentation",
                    key: "dropHintCircleKey",
                    className: t.dropHintCaretStyle,
                    "data-is-focusable": !1,
                    "data-sizer-index": e,
                    "aria-hidden": !0,
                  },
                  s.createElement(o, { iconName: "CircleShapeSolid" })
                ),
                s.createElement("div", {
                  key: "dropHintLineKey",
                  "aria-hidden": !0,
                  "data-is-focusable": !1,
                  "data-sizer-index": e,
                  className: t.dropHintLineStyle,
                })
              );
            }),
            (t.prototype._onSizerDoubleClick = function (e, t) {
              var o = this.props,
                i = o.onColumnAutoResized,
                n = o.columns;
              i && i((void 0 === n ? oe : n)[e], e);
            }),
            (t.prototype._onSelectionChanged = function () {
              var e =
                !!this.props.selection && this.props.selection.isAllSelected();
              this.state.isAllSelected !== e &&
                this.setState({ isAllSelected: e });
            }),
            (t.defaultProps = {
              selectAllVisibility: U.visible,
              collapseAllVisibility: i.visible,
              useFastIcons: !0,
            }),
            t
          );
        })(s.Component);
      function ne(e, t, o, i) {
        return e ? t <= o && t >= i : t >= o && t <= i;
      }
      function re(e, t, o) {
        return e ? t >= o : t <= o;
      }
      function se(e, t, o) {
        return e ? t <= o : t >= o;
      }
      function ae(e) {
        e.stopPropagation();
      }
      var le = Object(n.a)(
          ie,
          function (e) {
            var t,
              o,
              i,
              n,
              s = e.theme,
              a = e.className,
              l = e.isAllSelected,
              d = e.isResizingColumn,
              p = e.isSizing,
              u = e.isAllCollapsed,
              h = e.cellStyleProps,
              g = void 0 === h ? M : h,
              m = s.semanticColors,
              f = s.palette,
              _ = s.fonts,
              b = Object(O.v)(T, s),
              v = {
                iconForegroundColor: m.bodySubtext,
                headerForegroundColor: m.bodyText,
                headerBackgroundColor: m.bodyBackground,
                resizerColor: f.neutralTertiaryAlt,
              },
              C = { opacity: 1, transition: "opacity 0.3s linear" },
              y = z(e);
            return {
              root: [
                b.root,
                _.small,
                {
                  display: "inline-block",
                  background: v.headerBackgroundColor,
                  position: "relative",
                  minWidth: "100%",
                  verticalAlign: "top",
                  height: 42,
                  lineHeight: 42,
                  whiteSpace: "nowrap",
                  boxSizing: "content-box",
                  paddingBottom: "1px",
                  paddingTop: "16px",
                  borderBottom: "1px solid " + m.bodyDivider,
                  cursor: "default",
                  userSelect: "none",
                  selectors:
                    ((t = {}),
                    (t["&:hover ." + b.check] = { opacity: 1 }),
                    (t["& ." + b.tooltipHost + " ." + b.checkTooltip] = {
                      display: "block",
                    }),
                    t),
                },
                l && b.isAllSelected,
                d && b.isResizingColumn,
                a,
              ],
              check: [
                b.check,
                { height: 42 },
                {
                  selectors:
                    ((o = {}), (o["." + j.a + " &:focus"] = { opacity: 1 }), o),
                },
              ],
              cellWrapperPadded: {
                paddingRight: g.cellExtraRightPadding + g.cellRightPadding,
              },
              cellIsCheck: [
                y,
                b.cellIsCheck,
                {
                  position: "relative",
                  padding: 0,
                  margin: 0,
                  display: "inline-flex",
                  alignItems: "center",
                  border: "none",
                },
                l && { opacity: 1 },
              ],
              cellIsGroupExpander: [
                y,
                {
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: _.small.fontSize,
                  padding: 0,
                  border: "none",
                  width: 36,
                  color: f.neutralSecondary,
                  selectors: {
                    ":hover": { backgroundColor: f.neutralLighter },
                    ":active": { backgroundColor: f.neutralLight },
                  },
                },
              ],
              cellIsActionable: {
                selectors: {
                  ":hover": {
                    color: m.bodyText,
                    background: m.listHeaderBackgroundHovered,
                  },
                  ":active": { background: m.listHeaderBackgroundPressed },
                },
              },
              cellIsEmpty: { textOverflow: "clip" },
              cellSizer: [
                b.cellSizer,
                Object(O.t)(),
                {
                  display: "inline-block",
                  position: "relative",
                  cursor: "ew-resize",
                  bottom: 0,
                  top: 0,
                  overflow: "hidden",
                  height: "inherit",
                  background: "transparent",
                  zIndex: 1,
                  width: 16,
                  selectors:
                    ((i = {
                      ":after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        width: 1,
                        background: v.resizerColor,
                        opacity: 0,
                        left: "50%",
                      },
                      ":focus:after": C,
                      ":hover:after": C,
                    }),
                    (i["&." + b.isResizing + ":after"] = [
                      C,
                      { boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.4)" },
                    ]),
                    i),
                },
              ],
              cellIsResizing: b.isResizing,
              cellSizerStart: { margin: "0 -8px" },
              cellSizerEnd: { margin: 0, marginLeft: -16 },
              collapseButton: [
                b.collapseButton,
                {
                  transformOrigin: "50% 50%",
                  transition: "transform .1s linear",
                },
                u
                  ? [b.isCollapsed, { transform: "rotate(0deg)" }]
                  : {
                      transform: Object(c.a)(s)
                        ? "rotate(-90deg)"
                        : "rotate(90deg)",
                    },
              ],
              checkTooltip: b.checkTooltip,
              sizingOverlay: p && {
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                cursor: "ew-resize",
                background: "rgba(255, 255, 255, 0)",
                selectors:
                  ((n = {}),
                  (n[O.e] = Object(r.a)(
                    { background: "transparent" },
                    Object(O.w)()
                  )),
                  n),
              },
              accessibleLabel: O.C,
              dropHintCircleStyle: [
                b.dropHintCircleStyle,
                {
                  display: "inline-block",
                  visibility: "hidden",
                  position: "absolute",
                  bottom: 0,
                  height: 9,
                  width: 9,
                  borderRadius: "50%",
                  marginLeft: -5,
                  top: 34,
                  overflow: "visible",
                  zIndex: 10,
                  border: "1px solid " + f.themePrimary,
                  background: f.white,
                },
              ],
              dropHintCaretStyle: [
                b.dropHintCaretStyle,
                {
                  display: "none",
                  position: "absolute",
                  top: -28,
                  left: -6.5,
                  fontSize: _.medium.fontSize,
                  color: f.themePrimary,
                  overflow: "visible",
                  zIndex: 10,
                },
              ],
              dropHintLineStyle: [
                b.dropHintLineStyle,
                {
                  display: "none",
                  position: "absolute",
                  bottom: 0,
                  top: 0,
                  overflow: "hidden",
                  height: 42,
                  width: 1,
                  background: f.themePrimary,
                  zIndex: 10,
                },
              ],
              dropHintStyle: { display: "inline-block", position: "absolute" },
            };
          },
          void 0,
          { scope: "DetailsHeader" }
        ),
        ce = o(164),
        de = function (e) {
          var t = e.columns,
            o = e.columnStartIndex,
            i = e.rowClassNames,
            n = e.cellStyleProps,
            r = void 0 === n ? M : n,
            a = e.item,
            l = e.itemIndex,
            c = e.onRenderItemColumn,
            d = e.getCellValueKey,
            p = e.cellsByColumn,
            u = e.enableUpdateAnimations,
            h = e.rowHeaderId,
            g = s.useRef(),
            m = g.current || (g.current = {});
          return s.createElement(
            "div",
            {
              className: i.fields,
              "data-automationid": "DetailsRowFields",
              role: "presentation",
            },
            t.map(function (e, t) {
              var n =
                  "undefined" === typeof e.calculatedWidth
                    ? "auto"
                    : e.calculatedWidth +
                      r.cellLeftPadding +
                      r.cellRightPadding +
                      (e.isPadded ? r.cellExtraRightPadding : 0),
                g = e.onRender,
                _ = void 0 === g ? c : g,
                b = e.getValueKey,
                v = void 0 === b ? d : b,
                C =
                  p && e.key in p
                    ? p[e.key]
                    : _
                    ? _(a, l, e)
                    : (function (e, t) {
                        var o = e && t && t.fieldName ? e[t.fieldName] : "";
                        return (
                          (null !== o && void 0 !== o) || (o = ""),
                          "boolean" === typeof o ? o.toString() : o
                        );
                      })(a, e),
                y = m[e.key],
                S = u && v ? v(a, l, e) : void 0,
                x = !1;
              void 0 !== S && void 0 !== y && S !== y && (x = !0),
                (m[e.key] = S);
              var D = e.key + (void 0 !== S ? "-" + S : "");
              return s.createElement(
                "div",
                {
                  key: D,
                  id: e.isRowHeader ? h : void 0,
                  role: e.isRowHeader ? "rowheader" : "gridcell",
                  "aria-readonly": !0,
                  "aria-colindex": t + o + 1,
                  className: Object(f.a)(
                    e.className,
                    e.isMultiline && i.isMultiline,
                    e.isRowHeader && i.isRowHeader,
                    i.cell,
                    e.isPadded ? i.cellPadded : i.cellUnpadded,
                    x && i.cellAnimation
                  ),
                  style: { width: n },
                  "data-automationid": "DetailsRowCell",
                  "data-automation-key": e.key,
                },
                C
              );
            })
          );
        },
        pe = Object(a.a)(),
        ue = [],
        he = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            return (
              (o._root = s.createRef()),
              (o._cellMeasurer = s.createRef()),
              (o._focusZone = s.createRef()),
              (o._onSelectionChanged = function () {
                var e = ge(o.props);
                Object(ce.b)(e, o.state.selectionState) ||
                  o.setState({ selectionState: e });
              }),
              (o._updateDroppingState = function (e, t) {
                var i = o.state.isDropping,
                  n = o.props,
                  r = n.dragDropEvents,
                  s = n.item;
                e
                  ? r.onDragEnter &&
                    (o._droppingClassNames = r.onDragEnter(s, t))
                  : r.onDragLeave && r.onDragLeave(s, t),
                  i !== e && o.setState({ isDropping: e });
              }),
              Object(u.a)(o),
              (o._events = new _.a(o)),
              (o.state = {
                selectionState: ge(t),
                columnMeasureInfo: void 0,
                isDropping: !1,
              }),
              (o._droppingClassNames = ""),
              o
            );
          }
          return (
            Object(r.c)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return Object(r.a)(Object(r.a)({}, t), { selectionState: ge(e) });
            }),
            (t.prototype.componentDidMount = function () {
              var e = this.props,
                t = e.dragDropHelper,
                o = e.selection,
                i = e.item,
                n = e.onDidMount;
              t &&
                this._root.current &&
                (this._dragDropSubscription = t.subscribe(
                  this._root.current,
                  this._events,
                  this._getRowDragDropOptions()
                )),
                o && this._events.on(o, X.a, this._onSelectionChanged),
                n && i && ((this._onDidMountCalled = !0), n(this));
            }),
            (t.prototype.componentDidUpdate = function (e) {
              var t = this.state,
                o = this.props,
                i = o.item,
                n = o.onDidMount,
                r = t.columnMeasureInfo;
              if (
                ((this.props.itemIndex === e.itemIndex &&
                  this.props.item === e.item &&
                  this.props.dragDropHelper === e.dragDropHelper) ||
                  (this._dragDropSubscription &&
                    (this._dragDropSubscription.dispose(),
                    delete this._dragDropSubscription),
                  this.props.dragDropHelper &&
                    this._root.current &&
                    (this._dragDropSubscription =
                      this.props.dragDropHelper.subscribe(
                        this._root.current,
                        this._events,
                        this._getRowDragDropOptions()
                      ))),
                r && r.index >= 0 && this._cellMeasurer.current)
              ) {
                var s =
                  this._cellMeasurer.current.getBoundingClientRect().width;
                r.onMeasureDone(s),
                  this.setState({ columnMeasureInfo: void 0 });
              }
              i &&
                n &&
                !this._onDidMountCalled &&
                ((this._onDidMountCalled = !0), n(this));
            }),
            (t.prototype.componentWillUnmount = function () {
              var e = this.props,
                t = e.item,
                o = e.onWillUnmount;
              o && t && o(this),
                this._dragDropSubscription &&
                  (this._dragDropSubscription.dispose(),
                  delete this._dragDropSubscription),
                this._events.dispose();
            }),
            (t.prototype.shouldComponentUpdate = function (e, t) {
              if (this.props.useReducedRowRenderer) {
                var o = ge(e);
                return (
                  this.state.selectionState.isSelected !== o.isSelected ||
                  !Object(ce.b)(this.props, e)
                );
              }
              return !0;
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.className,
                o = e.columns,
                n = void 0 === o ? ue : o,
                a = e.dragDropEvents,
                l = e.item,
                c = e.itemIndex,
                d = e.flatIndexOffset,
                p = void 0 === d ? 2 : d,
                u = e.id,
                h = e.onRenderCheck,
                g = void 0 === h ? this._onRenderCheck : h,
                _ = e.onRenderDetailsCheckbox,
                y = e.onRenderItemColumn,
                S = e.getCellValueKey,
                x = e.selectionMode,
                I = e.rowWidth,
                R = void 0 === I ? 0 : I,
                w = e.checkboxVisibility,
                O = e.getRowAriaLabel,
                H = e.getRowAriaDescription,
                P = e.getRowAriaDescribedBy,
                j = e.checkButtonAriaLabel,
                E = e.checkboxCellClassName,
                M = e.rowFieldsAs,
                A = void 0 === M ? de : M,
                N = e.selection,
                T = e.indentWidth,
                z = e.enableUpdateAnimations,
                L = e.compact,
                F = e.theme,
                W = e.styles,
                G = e.cellsByColumn,
                B = e.groupNestingDepth,
                V = e.useFastIcons,
                U = void 0 === V || V,
                K = e.cellStyleProps,
                q = e.disabled,
                Z = void 0 !== q && q,
                Y = this.state,
                J = Y.columnMeasureInfo,
                Q = Y.isDropping,
                $ = this.state.selectionState,
                ee = $.isSelected,
                te = void 0 !== ee && ee,
                oe = $.isSelectionModal,
                ie = void 0 !== oe && oe,
                ne = a ? !(!a.canDrag || !a.canDrag(l)) : void 0,
                re = Q ? this._droppingClassNames || "is-dropping" : "",
                se = O ? O(l) : void 0,
                ae = H ? H(l) : void 0,
                le = P ? P(l) : void 0,
                he = !!N && N.canSelectItem(l, c) && !Z,
                ge = x === X.b.multiple,
                me = x !== X.b.none && w !== m.a.hidden,
                fe = x === X.b.none ? void 0 : te;
              this._classNames = Object(r.a)(
                Object(r.a)({}, this._classNames),
                pe(W, {
                  theme: F,
                  isSelected: te,
                  canSelect: !ge,
                  anySelected: ie,
                  checkboxCellClassName: E,
                  droppingClassName: re,
                  className: t,
                  compact: L,
                  enableUpdateAnimations: z,
                  cellStyleProps: K,
                  disabled: Z,
                })
              );
              var _e = {
                isMultiline: this._classNames.isMultiline,
                isRowHeader: this._classNames.isRowHeader,
                cell: this._classNames.cell,
                cellAnimation: this._classNames.cellAnimation,
                cellPadded: this._classNames.cellPadded,
                cellUnpadded: this._classNames.cellUnpadded,
                fields: this._classNames.fields,
              };
              Object(ce.b)(this._rowClassNames || {}, _e) ||
                (this._rowClassNames = _e);
              var be = s.createElement(A, {
                  rowClassNames: this._rowClassNames,
                  rowHeaderId: u + "-header",
                  cellsByColumn: G,
                  columns: n,
                  item: l,
                  itemIndex: c,
                  columnStartIndex: (me ? 1 : 0) + (B ? 1 : 0),
                  onRenderItemColumn: y,
                  getCellValueKey: S,
                  enableUpdateAnimations: z,
                  cellStyleProps: K,
                }),
                ve = this.props.role ? this.props.role : "row";
              return (
                (this._ariaRowDescriptionId = Object(b.a)(
                  "DetailsRow-description"
                )),
                s.createElement(
                  v.a,
                  Object(r.a)(
                    { "data-is-focusable": !0 },
                    Object(k.h)(this.props, k.f),
                    "boolean" === typeof ne
                      ? { "data-is-draggable": ne, draggable: ne }
                      : {},
                    {
                      direction: C.a.horizontal,
                      elementRef: this._root,
                      componentRef: this._focusZone,
                      role: ve,
                      "aria-label": se,
                      "aria-disabled": Z || void 0,
                      "aria-describedby": ae ? this._ariaRowDescriptionId : le,
                      className: this._classNames.root,
                      "data-selection-index": c,
                      "data-selection-touch-invoke": !0,
                      "data-selection-disabled": Z || void 0,
                      "data-item-index": c,
                      "aria-rowindex": B ? void 0 : c + p,
                      "aria-level": (B && B + 1) || void 0,
                      "data-automationid": "DetailsRow",
                      style: { minWidth: R },
                      "aria-selected": fe,
                      allowFocusRoot: !0,
                    }
                  ),
                  ae
                    ? s.createElement(
                        "span",
                        {
                          key: "description",
                          role: "presentation",
                          hidden: !0,
                          id: this._ariaRowDescriptionId,
                        },
                        ae
                      )
                    : null,
                  me &&
                    s.createElement(
                      "div",
                      {
                        role: "gridcell",
                        "aria-colindex": 1,
                        "data-selection-toggle": !0,
                        className: this._classNames.checkCell,
                      },
                      g({
                        id: u ? u + "-checkbox" : void 0,
                        selected: te,
                        anySelected: ie,
                        "aria-label": j,
                        "aria-labelledby": u
                          ? u + "-checkbox " + u + "-header"
                          : void 0,
                        canSelect: he,
                        compact: L,
                        className: this._classNames.check,
                        theme: F,
                        isVisible: w === m.a.always,
                        onRenderDetailsCheckbox: _,
                        useFastIcons: U,
                      })
                    ),
                  s.createElement(D, {
                    indentWidth: T,
                    role: "gridcell",
                    count:
                      B -
                      (this.props.collapseAllVisibility === i.hidden ? 1 : 0),
                  }),
                  l && be,
                  J &&
                    s.createElement(
                      "span",
                      {
                        role: "presentation",
                        className: Object(f.a)(
                          this._classNames.cellMeasurer,
                          this._classNames.cell
                        ),
                        ref: this._cellMeasurer,
                      },
                      s.createElement(A, {
                        rowClassNames: this._rowClassNames,
                        rowHeaderId: u + "-header",
                        columns: [J.column],
                        item: l,
                        itemIndex: c,
                        columnStartIndex: (me ? 1 : 0) + (B ? 1 : 0) + n.length,
                        onRenderItemColumn: y,
                        getCellValueKey: S,
                      })
                    ),
                  s.createElement("span", {
                    role: "checkbox",
                    className: this._classNames.checkCover,
                    "aria-checked": te,
                    "data-selection-toggle": !0,
                  })
                )
              );
            }),
            (t.prototype.measureCell = function (e, t) {
              var o = this.props.columns,
                i = void 0 === o ? ue : o,
                n = Object(r.a)({}, i[e]);
              (n.minWidth = 0),
                (n.maxWidth = 999999),
                delete n.calculatedWidth,
                this.setState({
                  columnMeasureInfo: { index: e, column: n, onMeasureDone: t },
                });
            }),
            (t.prototype.focus = function (e) {
              var t;
              return (
                void 0 === e && (e = !1),
                !!(null === (t = this._focusZone.current) || void 0 === t
                  ? void 0
                  : t.focus(e))
              );
            }),
            (t.prototype._onRenderCheck = function (e) {
              return s.createElement(K, Object(r.a)({}, e));
            }),
            (t.prototype._getRowDragDropOptions = function () {
              var e = this.props,
                t = e.item,
                o = e.itemIndex,
                i = e.dragDropEvents;
              return {
                eventMap: e.eventsToRegister,
                selectionIndex: o,
                context: { data: t, index: o },
                canDrag: i.canDrag,
                canDrop: i.canDrop,
                onDragStart: i.onDragStart,
                updateDropState: this._updateDroppingState,
                onDrop: i.onDrop,
                onDragEnd: i.onDragEnd,
                onDragOver: i.onDragOver,
              };
            }),
            t
          );
        })(s.Component);
      function ge(e) {
        var t,
          o,
          i,
          n,
          r = e.itemIndex,
          s = e.selection;
        return {
          isSelected: !!(null === (t = s) || void 0 === t
            ? void 0
            : t.isIndexSelected(r)),
          isSelectionModal: !!(null ===
            (n = null === (o = s) || void 0 === o ? void 0 : (i = o).isModal) ||
          void 0 === n
            ? void 0
            : n.call(i)),
        };
      }
      var me,
        fe,
        _e = Object(n.a)(
          he,
          function (e) {
            var t,
              o,
              i,
              n,
              s,
              a,
              l,
              c,
              d,
              p,
              u,
              h,
              g = e.theme,
              m = e.isSelected,
              f = e.canSelect,
              _ = e.droppingClassName,
              b = e.anySelected,
              v = e.isCheckVisible,
              C = e.checkboxCellClassName,
              y = e.compact,
              S = e.className,
              x = e.cellStyleProps,
              D = void 0 === x ? M : x,
              k = e.enableUpdateAnimations,
              I = e.disabled,
              R = g.palette,
              w = g.fonts,
              H = R.neutralPrimary,
              P = R.white,
              A = R.neutralSecondary,
              T = R.neutralLighter,
              z = R.neutralLight,
              L = R.neutralDark,
              F = R.neutralQuaternaryAlt,
              W = g.semanticColors.focusBorder,
              G = Object(O.v)(E, g),
              B = {
                defaultHeaderText: H,
                defaultMetaText: A,
                defaultBackground: P,
                defaultHoverHeaderText: L,
                defaultHoverMetaText: H,
                defaultHoverBackground: T,
                selectedHeaderText: L,
                selectedMetaText: H,
                selectedBackground: z,
                selectedHoverHeaderText: L,
                selectedHoverMetaText: H,
                selectedHoverBackground: F,
                focusHeaderText: L,
                focusMetaText: H,
                focusBackground: z,
                focusHoverBackground: F,
              },
              V = [
                Object(O.u)(g, {
                  inset: -1,
                  borderColor: W,
                  outlineColor: P,
                  highContrastStyle: { top: 2, right: 2, bottom: 2, left: 2 },
                }),
                G.isSelected,
                {
                  color: B.selectedMetaText,
                  background: B.selectedBackground,
                  borderBottom: "1px solid " + P,
                  selectors:
                    ((t = {
                      "&:before": {
                        position: "absolute",
                        display: "block",
                        top: -1,
                        height: 1,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        content: "",
                        borderTop: "1px solid " + P,
                      },
                      "&:hover": {
                        background: B.selectedHoverBackground,
                        color: B.selectedHoverMetaText,
                        selectors:
                          ((o = {}),
                          (o["." + G.cell + " " + O.e] = {
                            color: "HighlightText",
                            selectors: { "> a": { color: "HighlightText" } },
                          }),
                          (o["." + G.isRowHeader] = {
                            color: B.selectedHoverHeaderText,
                            selectors:
                              ((i = {}),
                              (i[O.e] = { color: "HighlightText" }),
                              i),
                          }),
                          (o[O.e] = { background: "Highlight" }),
                          o),
                      },
                      "&:focus": {
                        background: B.focusBackground,
                        selectors:
                          ((n = {}),
                          (n["." + G.cell] = {
                            color: B.focusMetaText,
                            selectors:
                              ((s = {}),
                              (s[O.e] = {
                                color: "HighlightText",
                                selectors: {
                                  "> a": { color: "HighlightText" },
                                },
                              }),
                              s),
                          }),
                          (n["." + G.isRowHeader] = {
                            color: B.focusHeaderText,
                            selectors:
                              ((a = {}),
                              (a[O.e] = { color: "HighlightText" }),
                              a),
                          }),
                          (n[O.e] = { background: "Highlight" }),
                          n),
                      },
                    }),
                    (t[O.e] = Object(r.a)(
                      Object(r.a)(
                        { background: "Highlight", color: "HighlightText" },
                        Object(O.w)()
                      ),
                      { selectors: { a: { color: "HighlightText" } } }
                    )),
                    (t["&:focus:hover"] = {
                      background: B.focusHoverBackground,
                    }),
                    t),
                },
              ],
              U = [
                G.isContentUnselectable,
                { userSelect: "none", cursor: "default" },
              ],
              K = { minHeight: N.compactRowHeight, border: 0 },
              X = {
                minHeight: N.compactRowHeight,
                paddingTop: N.compactRowVerticalPadding,
                paddingBottom: N.compactRowVerticalPadding,
                paddingLeft: D.cellLeftPadding + "px",
              },
              q = [
                Object(O.u)(g, { inset: -1 }),
                G.cell,
                {
                  display: "inline-block",
                  position: "relative",
                  boxSizing: "border-box",
                  minHeight: N.rowHeight,
                  verticalAlign: "top",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  paddingTop: N.rowVerticalPadding,
                  paddingBottom: N.rowVerticalPadding,
                  paddingLeft: D.cellLeftPadding + "px",
                  selectors:
                    ((l = { "& > button": { maxWidth: "100%" } }),
                    (l["[data-is-focusable='true']"] = Object(O.u)(g, {
                      inset: -1,
                      borderColor: A,
                      outlineColor: P,
                    })),
                    l),
                },
                m && {
                  selectors:
                    ((c = {}),
                    (c[O.e] = Object(r.a)(
                      Object(r.a)(
                        { background: "Highlight", color: "HighlightText" },
                        Object(O.w)()
                      ),
                      { selectors: { a: { color: "HighlightText" } } }
                    )),
                    c),
                },
                y && X,
                I && { opacity: 0.5 },
              ];
            return {
              root: [
                G.root,
                O.a.fadeIn400,
                _,
                g.fonts.small,
                v && G.isCheckVisible,
                Object(O.u)(g, { borderColor: W, outlineColor: P }),
                {
                  borderBottom: "1px solid " + T,
                  background: B.defaultBackground,
                  color: B.defaultMetaText,
                  display: "inline-flex",
                  minWidth: "100%",
                  minHeight: N.rowHeight,
                  whiteSpace: "nowrap",
                  padding: 0,
                  boxSizing: "border-box",
                  verticalAlign: "top",
                  textAlign: "left",
                  selectors:
                    ((d = {}),
                    (d["." + G.listCellFirstChild + " &:before"] = {
                      display: "none",
                    }),
                    (d["&:hover"] = {
                      background: B.defaultHoverBackground,
                      color: B.defaultHoverMetaText,
                      selectors:
                        ((p = {}),
                        (p["." + G.isRowHeader] = {
                          color: B.defaultHoverHeaderText,
                        }),
                        p),
                    }),
                    (d["&:hover ." + G.check] = { opacity: 1 }),
                    (d["." + j.a + " &:focus ." + G.check] = { opacity: 1 }),
                    d),
                },
                m && V,
                !f && U,
                y && K,
                S,
              ],
              cellUnpadded: { paddingRight: D.cellRightPadding + "px" },
              cellPadded: {
                paddingRight:
                  D.cellExtraRightPadding + D.cellRightPadding + "px",
                selectors:
                  ((u = {}), (u["&." + G.cellCheck] = { paddingRight: 0 }), u),
              },
              cell: q,
              cellAnimation: k && O.b.slideLeftIn40,
              cellMeasurer: [
                G.cellMeasurer,
                { overflow: "visible", whiteSpace: "nowrap" },
              ],
              checkCell: [
                q,
                G.cellCheck,
                C,
                { padding: 0, paddingTop: 1, marginTop: -1, flexShrink: 0 },
              ],
              checkCover: {
                position: "absolute",
                top: -1,
                left: 0,
                bottom: 0,
                right: 0,
                display: b ? "block" : "none",
              },
              fields: [G.fields, { display: "flex", alignItems: "stretch" }],
              isRowHeader: [
                G.isRowHeader,
                { color: B.defaultHeaderText, fontSize: w.medium.fontSize },
                m && {
                  color: B.selectedHeaderText,
                  fontWeight: O.d.semibold,
                  selectors:
                    ((h = {}), (h[O.e] = { color: "HighlightText" }), h),
                },
              ],
              isMultiline: [
                q,
                {
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  textOverflow: "clip",
                },
              ],
              check: [G.check],
            };
          },
          void 0,
          { scope: "DetailsRow" }
        ),
        be = o(119),
        ve = o(16),
        Ce = o(225),
        ye = o(213),
        Se = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            (o._root = s.createRef()),
              (o.ignoreNextFocus = function () {
                o._handleNextFocus(!1);
              }),
              (o._onSelectionChange = function () {
                var e = o.props.selection,
                  t = e.isModal && e.isModal();
                o.setState({ isModal: t });
              }),
              (o._onMouseDownCapture = function (e) {
                var t = e.target;
                if (
                  document.activeElement === t ||
                  Object(g.a)(document.activeElement, t)
                ) {
                  if (Object(g.a)(t, o._root.current))
                    for (; t !== o._root.current; ) {
                      if (o._hasAttribute(t, "data-selection-invoke")) {
                        o.ignoreNextFocus();
                        break;
                      }
                      t = Object(be.a)(t);
                    }
                } else o.ignoreNextFocus();
              }),
              (o._onFocus = function (e) {
                var t = e.target,
                  i = o.props.selection,
                  n = o._isCtrlPressed || o._isMetaPressed,
                  r = o._getSelectionMode();
                if (o._shouldHandleFocus && r !== X.b.none) {
                  var s = o._hasAttribute(t, "data-selection-toggle"),
                    a = o._findItemRoot(t);
                  if (!s && a) {
                    var l = o._getItemIndex(a);
                    n
                      ? (i.setIndexSelected(l, i.isIndexSelected(l), !0),
                        o.props.enterModalOnTouch &&
                          o._isTouch &&
                          i.setModal &&
                          (i.setModal(!0), o._setIsTouch(!1)))
                      : o.props.isSelectedOnFocus &&
                        o._onItemSurfaceClick(e, l);
                  }
                }
                o._handleNextFocus(!1);
              }),
              (o._onMouseDown = function (e) {
                o._updateModifiers(e);
                var t = e.target,
                  i = o._findItemRoot(t);
                if (!o._isSelectionDisabled(t))
                  for (
                    ;
                    t !== o._root.current &&
                    !o._hasAttribute(t, "data-selection-all-toggle");

                  ) {
                    if (i) {
                      if (o._hasAttribute(t, "data-selection-toggle")) break;
                      if (o._hasAttribute(t, "data-selection-invoke")) break;
                      if (
                        !(
                          (t !== i && !o._shouldAutoSelect(t)) ||
                          o._isShiftPressed ||
                          o._isCtrlPressed ||
                          o._isMetaPressed
                        )
                      ) {
                        o._onInvokeMouseDown(e, o._getItemIndex(i));
                        break;
                      }
                      if (
                        o.props.disableAutoSelectOnInputElements &&
                        ("A" === t.tagName ||
                          "BUTTON" === t.tagName ||
                          "INPUT" === t.tagName)
                      )
                        return;
                    }
                    t = Object(be.a)(t);
                  }
              }),
              (o._onTouchStartCapture = function (e) {
                o._setIsTouch(!0);
              }),
              (o._onClick = function (e) {
                var t = o.props.enableTouchInvocationTarget,
                  i = void 0 !== t && t;
                o._updateModifiers(e);
                for (
                  var n = e.target,
                    r = o._findItemRoot(n),
                    s = o._isSelectionDisabled(n);
                  n !== o._root.current;

                ) {
                  if (o._hasAttribute(n, "data-selection-all-toggle")) {
                    s || o._onToggleAllClick(e);
                    break;
                  }
                  if (r) {
                    var a = o._getItemIndex(r);
                    if (o._hasAttribute(n, "data-selection-toggle")) {
                      s ||
                        (o._isShiftPressed
                          ? o._onItemSurfaceClick(e, a)
                          : o._onToggleClick(e, a));
                      break;
                    }
                    if (
                      (o._isTouch &&
                        i &&
                        o._hasAttribute(n, "data-selection-touch-invoke")) ||
                      o._hasAttribute(n, "data-selection-invoke")
                    ) {
                      o._onInvokeClick(e, a);
                      break;
                    }
                    if (n === r) {
                      s || o._onItemSurfaceClick(e, a);
                      break;
                    }
                    if (
                      "A" === n.tagName ||
                      "BUTTON" === n.tagName ||
                      "INPUT" === n.tagName
                    )
                      return;
                  }
                  n = Object(be.a)(n);
                }
              }),
              (o._onContextMenu = function (e) {
                var t = e.target,
                  i = o.props,
                  n = i.onItemContextMenu,
                  r = i.selection;
                if (n) {
                  var s = o._findItemRoot(t);
                  if (s) {
                    var a = o._getItemIndex(s);
                    o._onInvokeMouseDown(e, a),
                      n(r.getItems()[a], a, e.nativeEvent) ||
                        e.preventDefault();
                  }
                }
              }),
              (o._onDoubleClick = function (e) {
                var t = e.target,
                  i = o.props.onItemInvoked,
                  n = o._findItemRoot(t);
                if (n && i && !o._isInputElement(t)) {
                  for (
                    var r = o._getItemIndex(n);
                    t !== o._root.current &&
                    !o._hasAttribute(t, "data-selection-toggle") &&
                    !o._hasAttribute(t, "data-selection-invoke");

                  ) {
                    if (t === n) {
                      o._onInvokeClick(e, r);
                      break;
                    }
                    t = Object(be.a)(t);
                  }
                  t = Object(be.a)(t);
                }
              }),
              (o._onKeyDownCapture = function (e) {
                o._updateModifiers(e), o._handleNextFocus(!0);
              }),
              (o._onKeyDown = function (e) {
                o._updateModifiers(e);
                var t = e.target,
                  i = o._isSelectionDisabled(t),
                  n = o.props.selection,
                  r =
                    e.which === d.a.a && (o._isCtrlPressed || o._isMetaPressed),
                  s = e.which === d.a.escape;
                if (!o._isInputElement(t)) {
                  var a = o._getSelectionMode();
                  if (r && a === X.b.multiple && !n.isAllSelected())
                    return (
                      i || n.setAllSelected(!0),
                      e.stopPropagation(),
                      void e.preventDefault()
                    );
                  if (s && n.getSelectedCount() > 0)
                    return (
                      i || n.setAllSelected(!1),
                      e.stopPropagation(),
                      void e.preventDefault()
                    );
                  var l = o._findItemRoot(t);
                  if (l)
                    for (
                      var c = o._getItemIndex(l);
                      t !== o._root.current &&
                      !o._hasAttribute(t, "data-selection-toggle");

                    ) {
                      if (o._shouldAutoSelect(t)) {
                        i || o._onInvokeMouseDown(e, c);
                        break;
                      }
                      if (
                        !(
                          (e.which !== d.a.enter && e.which !== d.a.space) ||
                          ("BUTTON" !== t.tagName &&
                            "A" !== t.tagName &&
                            "INPUT" !== t.tagName)
                        )
                      )
                        return !1;
                      if (t === l) {
                        if (e.which === d.a.enter)
                          return (
                            o._onInvokeClick(e, c), void e.preventDefault()
                          );
                        if (e.which === d.a.space)
                          return (
                            i || o._onToggleClick(e, c), void e.preventDefault()
                          );
                        break;
                      }
                      t = Object(be.a)(t);
                    }
                }
              }),
              (o._events = new _.a(o)),
              (o._async = new h.a(o)),
              Object(u.a)(o);
            var i = o.props.selection,
              n = i.isModal && i.isModal();
            return (o.state = { isModal: n }), o;
          }
          return (
            Object(r.c)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              var o = e.selection.isModal && e.selection.isModal();
              return Object(r.a)(Object(r.a)({}, t), { isModal: o });
            }),
            (t.prototype.componentDidMount = function () {
              var e = Object(ve.a)(this._root.current);
              this._events.on(e, "keydown, keyup", this._updateModifiers, !0),
                this._events.on(
                  document,
                  "click",
                  this._findScrollParentAndTryClearOnEmptyClick
                ),
                this._events.on(
                  document.body,
                  "touchstart",
                  this._onTouchStartCapture,
                  !0
                ),
                this._events.on(
                  document.body,
                  "touchend",
                  this._onTouchStartCapture,
                  !0
                ),
                this._events.on(
                  this.props.selection,
                  "change",
                  this._onSelectionChange
                );
            }),
            (t.prototype.render = function () {
              var e = this.state.isModal;
              return s.createElement(
                "div",
                {
                  className: Object(f.a)(
                    "ms-SelectionZone",
                    this.props.className,
                    { "ms-SelectionZone--modal": !!e }
                  ),
                  ref: this._root,
                  onKeyDown: this._onKeyDown,
                  onMouseDown: this._onMouseDown,
                  onKeyDownCapture: this._onKeyDownCapture,
                  onClick: this._onClick,
                  role: "presentation",
                  onDoubleClick: this._onDoubleClick,
                  onContextMenu: this._onContextMenu,
                  onMouseDownCapture: this._onMouseDownCapture,
                  onFocusCapture: this._onFocus,
                  "data-selection-is-modal": !!e || void 0,
                },
                this.props.children,
                s.createElement(p.a, null)
              );
            }),
            (t.prototype.componentDidUpdate = function (e) {
              var t = this.props.selection;
              t !== e.selection &&
                (this._events.off(e.selection),
                this._events.on(t, "change", this._onSelectionChange));
            }),
            (t.prototype.componentWillUnmount = function () {
              this._events.dispose(), this._async.dispose();
            }),
            (t.prototype._isSelectionDisabled = function (e) {
              if (this._getSelectionMode() === X.b.none) return !0;
              for (; e !== this._root.current; ) {
                if (this._hasAttribute(e, "data-selection-disabled")) return !0;
                e = Object(be.a)(e);
              }
              return !1;
            }),
            (t.prototype._onToggleAllClick = function (e) {
              var t = this.props.selection;
              this._getSelectionMode() === X.b.multiple &&
                (t.toggleAllSelected(),
                e.stopPropagation(),
                e.preventDefault());
            }),
            (t.prototype._onToggleClick = function (e, t) {
              var o = this.props.selection,
                i = this._getSelectionMode();
              if (
                (o.setChangeEvents(!1),
                this.props.enterModalOnTouch &&
                  this._isTouch &&
                  !o.isIndexSelected(t) &&
                  o.setModal &&
                  (o.setModal(!0), this._setIsTouch(!1)),
                i === X.b.multiple)
              )
                o.toggleIndexSelected(t);
              else {
                if (i !== X.b.single) return void o.setChangeEvents(!0);
                var n = o.isIndexSelected(t),
                  r = o.isModal && o.isModal();
                o.setAllSelected(!1),
                  o.setIndexSelected(t, !n, !0),
                  r && o.setModal && o.setModal(!0);
              }
              o.setChangeEvents(!0), e.stopPropagation();
            }),
            (t.prototype._onInvokeClick = function (e, t) {
              var o = this.props,
                i = o.selection,
                n = o.onItemInvoked;
              n &&
                (n(i.getItems()[t], t, e.nativeEvent),
                e.preventDefault(),
                e.stopPropagation());
            }),
            (t.prototype._onItemSurfaceClick = function (e, t) {
              var o = this.props.selection,
                i = this._isCtrlPressed || this._isMetaPressed,
                n = this._getSelectionMode();
              n === X.b.multiple
                ? this._isShiftPressed && !this._isTabPressed
                  ? o.selectToIndex(t, !i)
                  : i
                  ? o.toggleIndexSelected(t)
                  : this._clearAndSelectIndex(t)
                : n === X.b.single && this._clearAndSelectIndex(t);
            }),
            (t.prototype._onInvokeMouseDown = function (e, t) {
              this.props.selection.isIndexSelected(t) ||
                this._clearAndSelectIndex(t);
            }),
            (t.prototype._findScrollParentAndTryClearOnEmptyClick = function (
              e
            ) {
              var t = Object(Ce.e)(this._root.current);
              this._events.off(
                document,
                "click",
                this._findScrollParentAndTryClearOnEmptyClick
              ),
                this._events.on(t, "click", this._tryClearOnEmptyClick),
                ((t && e.target instanceof Node && t.contains(e.target)) ||
                  t === e.target) &&
                  this._tryClearOnEmptyClick(e);
            }),
            (t.prototype._tryClearOnEmptyClick = function (e) {
              !this.props.selectionPreservedOnEmptyClick &&
                this._isNonHandledClick(e.target) &&
                this.props.selection.setAllSelected(!1);
            }),
            (t.prototype._clearAndSelectIndex = function (e) {
              var t = this.props.selection;
              if (!(1 === t.getSelectedCount() && t.isIndexSelected(e))) {
                var o = t.isModal && t.isModal();
                t.setChangeEvents(!1),
                  t.setAllSelected(!1),
                  t.setIndexSelected(e, !0, !0),
                  (o || (this.props.enterModalOnTouch && this._isTouch)) &&
                    (t.setModal && t.setModal(!0),
                    this._isTouch && this._setIsTouch(!1)),
                  t.setChangeEvents(!0);
              }
            }),
            (t.prototype._updateModifiers = function (e) {
              (this._isShiftPressed = e.shiftKey),
                (this._isCtrlPressed = e.ctrlKey),
                (this._isMetaPressed = e.metaKey);
              var t = e.keyCode;
              this._isTabPressed = !!t && t === d.a.tab;
            }),
            (t.prototype._findItemRoot = function (e) {
              for (var t = this.props.selection; e !== this._root.current; ) {
                var o = e.getAttribute("data-selection-index"),
                  i = Number(o);
                if (null !== o && i >= 0 && i < t.getItems().length) break;
                e = Object(be.a)(e);
              }
              if (e !== this._root.current) return e;
            }),
            (t.prototype._getItemIndex = function (e) {
              return Number(e.getAttribute("data-selection-index"));
            }),
            (t.prototype._shouldAutoSelect = function (e) {
              return this._hasAttribute(e, "data-selection-select");
            }),
            (t.prototype._hasAttribute = function (e, t) {
              for (var o = !1; !o && e !== this._root.current; )
                (o = "true" === e.getAttribute(t)), (e = Object(be.a)(e));
              return o;
            }),
            (t.prototype._isInputElement = function (e) {
              return "INPUT" === e.tagName || "TEXTAREA" === e.tagName;
            }),
            (t.prototype._isNonHandledClick = function (e) {
              var t = Object(q.a)();
              if (t && e)
                for (; e && e !== t.documentElement; ) {
                  if (Object(ye.n)(e)) return !1;
                  e = Object(be.a)(e);
                }
              return !0;
            }),
            (t.prototype._handleNextFocus = function (e) {
              var t = this;
              this._shouldHandleFocusTimeoutId &&
                (this._async.clearTimeout(this._shouldHandleFocusTimeoutId),
                (this._shouldHandleFocusTimeoutId = void 0)),
                (this._shouldHandleFocus = e),
                e &&
                  this._async.setTimeout(function () {
                    t._shouldHandleFocus = !1;
                  }, 100);
            }),
            (t.prototype._setIsTouch = function (e) {
              var t = this;
              this._isTouchTimeoutId &&
                (this._async.clearTimeout(this._isTouchTimeoutId),
                (this._isTouchTimeoutId = void 0)),
                (this._isTouch = !0),
                e &&
                  this._async.setTimeout(function () {
                    t._isTouch = !1;
                  }, 300);
            }),
            (t.prototype._getSelectionMode = function () {
              var e = this.props.selection,
                t = this.props.selectionMode;
              return void 0 === t ? (e ? e.mode : X.b.none) : t;
            }),
            (t.defaultProps = {
              isSelectedOnFocus: !0,
              selectionMode: X.b.multiple,
            }),
            t
          );
        })(s.Component),
        xe = o(504),
        De = {
          root: "ms-GroupedList",
          compact: "ms-GroupedList--Compact",
          group: "ms-GroupedList-group",
          link: "ms-Link",
          listCell: "ms-List-cell",
        },
        ke = "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
        Ie = {
          root: "ms-GroupHeader",
          compact: "ms-GroupHeader--compact",
          check: "ms-GroupHeader-check",
          dropIcon: "ms-GroupHeader-dropIcon",
          expand: "ms-GroupHeader-expand",
          isCollapsed: "is-collapsed",
          title: "ms-GroupHeader-title",
          isSelected: "is-selected",
          iconTag: "ms-Icon--Tag",
          group: "ms-GroupedList-group",
          isDropping: "is-dropping",
        },
        Re = "cubic-bezier(0.075, 0.820, 0.165, 1.000)",
        we = "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
        Oe = "cubic-bezier(0.600, -0.280, 0.735, 0.045)";
      !(function (e) {
        (e[(e.xSmall = 0)] = "xSmall"),
          (e[(e.small = 1)] = "small"),
          (e[(e.medium = 2)] = "medium"),
          (e[(e.large = 3)] = "large");
      })(me || (me = {})),
        (function (e) {
          (e[(e.normal = 0)] = "normal"), (e[(e.large = 1)] = "large");
        })(fe || (fe = {}));
      var He = o(262),
        Pe = Object(a.a)(),
        je = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.type,
                o = e.size,
                i = e.ariaLabel,
                n = e.ariaLive,
                a = e.styles,
                l = e.label,
                c = e.theme,
                d = e.className,
                p = e.labelPosition,
                u = i,
                h = Object(k.h)(this.props, k.f, ["size"]),
                g = o;
              void 0 === g &&
                void 0 !== t &&
                (g = t === fe.large ? me.large : me.medium);
              var m = Pe(a, {
                theme: c,
                size: g,
                className: d,
                labelPosition: p,
              });
              return s.createElement(
                "div",
                Object(r.a)({}, h, { className: m.root }),
                s.createElement("div", { className: m.circle }),
                l && s.createElement("div", { className: m.label }, l),
                u &&
                  s.createElement(
                    "div",
                    { role: "status", "aria-live": n },
                    s.createElement(
                      He.a,
                      null,
                      s.createElement(
                        "div",
                        { className: m.screenReaderText },
                        u
                      )
                    )
                  )
              );
            }),
            (t.defaultProps = {
              size: me.medium,
              ariaLive: "polite",
              labelPosition: "bottom",
            }),
            t
          );
        })(s.Component),
        Ee = {
          root: "ms-Spinner",
          circle: "ms-Spinner-circle",
          label: "ms-Spinner-label",
        },
        Me = Object(l.b)(function () {
          return Object(O.D)({
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          });
        }),
        Ae = Object(n.a)(
          je,
          function (e) {
            var t,
              o = e.theme,
              i = e.size,
              n = e.className,
              s = e.labelPosition,
              a = o.palette,
              l = Object(O.v)(Ee, o);
            return {
              root: [
                l.root,
                {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                },
                "top" === s && { flexDirection: "column-reverse" },
                "right" === s && { flexDirection: "row" },
                "left" === s && { flexDirection: "row-reverse" },
                n,
              ],
              circle: [
                l.circle,
                {
                  boxSizing: "border-box",
                  borderRadius: "50%",
                  border: "1.5px solid " + a.themeLight,
                  borderTopColor: a.themePrimary,
                  animationName: Me(),
                  animationDuration: "1.3s",
                  animationIterationCount: "infinite",
                  animationTimingFunction: "cubic-bezier(.53,.21,.29,.67)",
                  selectors:
                    ((t = {}),
                    (t[O.e] = Object(r.a)(
                      { borderTopColor: "Highlight" },
                      Object(O.w)()
                    )),
                    t),
                },
                i === me.xSmall && [
                  "ms-Spinner--xSmall",
                  { width: 12, height: 12 },
                ],
                i === me.small && [
                  "ms-Spinner--small",
                  { width: 16, height: 16 },
                ],
                i === me.medium && [
                  "ms-Spinner--medium",
                  { width: 20, height: 20 },
                ],
                i === me.large && [
                  "ms-Spinner--large",
                  { width: 28, height: 28 },
                ],
              ],
              label: [
                l.label,
                o.fonts.small,
                {
                  color: a.themePrimary,
                  margin: "8px 0 0",
                  textAlign: "center",
                },
                "top" === s && { margin: "0 0 8px" },
                "right" === s && { margin: "0 0 0 8px" },
                "left" === s && { margin: "0 8px 0 0" },
              ],
              screenReaderText: O.C,
            };
          },
          void 0,
          { scope: "Spinner" }
        ),
        Ne = Object(a.a)(),
        Te = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            return (
              (o._toggleCollapse = function () {
                var e = o.props,
                  t = e.group,
                  i = e.onToggleCollapse,
                  n = e.isGroupLoading,
                  r = !o.state.isCollapsed,
                  s = !r && n && n(t);
                o.setState({ isCollapsed: r, isLoadingVisible: s }), i && i(t);
              }),
              (o._onKeyUp = function (e) {
                var t = o.props,
                  i = t.group,
                  n = t.onGroupHeaderKeyUp;
                if ((n && n(e, i), !e.defaultPrevented)) {
                  var r =
                    o.state.isCollapsed &&
                    e.which === Object(c.b)(d.a.right, o.props.theme);
                  ((!o.state.isCollapsed &&
                    e.which === Object(c.b)(d.a.left, o.props.theme)) ||
                    r) &&
                    (o._toggleCollapse(),
                    e.stopPropagation(),
                    e.preventDefault());
                }
              }),
              (o._onToggleClick = function (e) {
                o._toggleCollapse(), e.stopPropagation(), e.preventDefault();
              }),
              (o._onToggleSelectGroupClick = function (e) {
                var t = o.props,
                  i = t.onToggleSelectGroup,
                  n = t.group;
                i && i(n), e.preventDefault(), e.stopPropagation();
              }),
              (o._onHeaderClick = function () {
                var e = o.props,
                  t = e.group,
                  i = e.onGroupHeaderClick,
                  n = e.onToggleSelectGroup;
                i ? i(t) : n && n(t);
              }),
              (o._onRenderTitle = function (e) {
                var t = e.group,
                  i = e.ariaColSpan;
                return t
                  ? s.createElement(
                      "div",
                      {
                        className: o._classNames.title,
                        id: o._id,
                        role: "gridcell",
                        "aria-colspan": i,
                      },
                      s.createElement("span", null, t.name),
                      s.createElement(
                        "span",
                        { className: o._classNames.headerCount },
                        "(",
                        t.count,
                        t.hasMoreData && "+",
                        ")"
                      )
                    )
                  : null;
              }),
              (o._id = Object(b.a)("GroupHeader")),
              (o.state = {
                isCollapsed: o.props.group && o.props.group.isCollapsed,
                isLoadingVisible: !1,
              }),
              o
            );
          }
          return (
            Object(r.c)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              if (e.group) {
                var o = e.group.isCollapsed,
                  i = e.isGroupLoading,
                  n = !o && i && i(e.group);
                return Object(r.a)(Object(r.a)({}, t), {
                  isCollapsed: o || !1,
                  isLoadingVisible: n || !1,
                });
              }
              return t;
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.group,
                o = e.groupLevel,
                i = void 0 === o ? 0 : o,
                n = e.viewport,
                a = e.selectionMode,
                l = e.loadingText,
                d = e.isSelected,
                p = void 0 !== d && d,
                u = e.selected,
                h = void 0 !== u && u,
                g = e.indentWidth,
                m = e.onRenderTitle,
                f = void 0 === m ? this._onRenderTitle : m,
                _ = e.onRenderGroupHeaderCheckbox,
                b = e.isCollapsedGroupSelectVisible,
                v = void 0 === b || b,
                C = e.expandButtonProps,
                y = e.expandButtonIcon,
                x = e.selectAllButtonProps,
                k = e.theme,
                I = e.styles,
                R = e.className,
                w = e.compact,
                O = e.ariaPosInSet,
                H = e.ariaSetSize,
                P = e.useFastIcons
                  ? this._fastDefaultCheckboxRender
                  : this._defaultCheckboxRender,
                j = _ ? Object(F.a)(_, P) : P,
                E = this.state,
                M = E.isCollapsed,
                A = E.isLoadingVisible,
                N = a === X.b.multiple,
                T = N && (v || !(t && t.isCollapsed)),
                z = h || p,
                L = Object(c.a)(k);
              return (
                (this._classNames = Ne(I, {
                  theme: k,
                  className: R,
                  selected: z,
                  isCollapsed: M,
                  compact: w,
                })),
                t
                  ? s.createElement(
                      "div",
                      {
                        className: this._classNames.root,
                        style: n ? { minWidth: n.width } : {},
                        onClick: this._onHeaderClick,
                        role: "row",
                        "aria-setsize": H,
                        "aria-posinset": O,
                        "data-is-focusable": !0,
                        onKeyUp: this._onKeyUp,
                        "aria-label": t.ariaLabel,
                        "aria-labelledby": t.ariaLabel ? void 0 : this._id,
                        "aria-expanded": !this.state.isCollapsed,
                        "aria-selected": N ? z : void 0,
                        "aria-level": i + 1,
                      },
                      s.createElement(
                        "div",
                        {
                          className: this._classNames.groupHeaderContainer,
                          role: "presentation",
                        },
                        T
                          ? s.createElement(
                              "div",
                              { role: "gridcell" },
                              s.createElement(
                                "button",
                                Object(r.a)(
                                  {
                                    "data-is-focusable": !1,
                                    type: "button",
                                    className: this._classNames.check,
                                    role: "checkbox",
                                    id: this._id + "-check",
                                    "aria-checked": z,
                                    "aria-labelledby":
                                      this._id + "-check " + this._id,
                                    "data-selection-toggle": !0,
                                    onClick: this._onToggleSelectGroupClick,
                                  },
                                  x
                                ),
                                j({ checked: z, theme: k }, j)
                              )
                            )
                          : a !== X.b.none &&
                              s.createElement(D, { indentWidth: g, count: 1 }),
                        s.createElement(D, { indentWidth: g, count: i }),
                        s.createElement(
                          "div",
                          {
                            className: this._classNames.dropIcon,
                            role: "presentation",
                          },
                          s.createElement(S.a, { iconName: "Tag" })
                        ),
                        s.createElement(
                          "div",
                          { role: "gridcell" },
                          s.createElement(
                            "button",
                            Object(r.a)(
                              {
                                "data-is-focusable": !1,
                                type: "button",
                                className: this._classNames.expand,
                                onClick: this._onToggleClick,
                                "aria-expanded": !this.state.isCollapsed,
                              },
                              C
                            ),
                            s.createElement(S.a, {
                              className: this._classNames.expandIsCollapsed,
                              iconName:
                                y || (L ? "ChevronLeftMed" : "ChevronRightMed"),
                            })
                          )
                        ),
                        f(this.props, this._onRenderTitle),
                        A && s.createElement(Ae, { label: l })
                      )
                    )
                  : null
              );
            }),
            (t.prototype._defaultCheckboxRender = function (e) {
              return s.createElement(P, { checked: e.checked });
            }),
            (t.prototype._fastDefaultCheckboxRender = function (e) {
              return s.createElement(ze, {
                theme: e.theme,
                checked: e.checked,
              });
            }),
            (t.defaultProps = {
              expandButtonProps: { "aria-label": "expand collapse group" },
            }),
            t
          );
        })(s.Component),
        ze = s.memo(function (e) {
          return s.createElement(P, {
            theme: e.theme,
            checked: e.checked,
            className: e.className,
            useFastIcons: !0,
          });
        }),
        Le = Object(n.a)(
          Te,
          function (e) {
            var t,
              o,
              i,
              n,
              r,
              s = e.theme,
              a = e.className,
              l = e.selected,
              d = e.isCollapsed,
              p = e.compact,
              u = M.cellLeftPadding,
              h = p ? 40 : 48,
              g = s.semanticColors,
              m = s.palette,
              f = s.fonts,
              _ = Object(O.v)(Ie, s),
              b = [
                Object(O.u)(s),
                {
                  cursor: "default",
                  background: "none",
                  backgroundColor: "transparent",
                  border: "none",
                  padding: 0,
                },
              ];
            return {
              root: [
                _.root,
                Object(O.u)(s),
                s.fonts.medium,
                {
                  borderBottom: "1px solid " + g.listBackground,
                  cursor: "default",
                  userSelect: "none",
                  selectors:
                    ((t = {
                      ":hover": {
                        background: g.listItemBackgroundHovered,
                        color: g.actionLinkHovered,
                      },
                    }),
                    (t["&:hover ." + _.check] = { opacity: 1 }),
                    (t["." + j.a + " &:focus ." + _.check] = { opacity: 1 }),
                    (t[":global(." + _.group + "." + _.isDropping + ")"] = {
                      selectors:
                        ((o = {}),
                        (o["& > ." + _.root + " ." + _.dropIcon] = {
                          transition:
                            "transform " +
                            O.c.durationValue4 +
                            " " +
                            Re +
                            " opacity " +
                            O.c.durationValue1 +
                            " " +
                            we,
                          transitionDelay: O.c.durationValue3,
                          opacity: 1,
                          transform: "rotate(0.2deg) scale(1);",
                        }),
                        (o["." + _.check] = { opacity: 0 }),
                        o),
                    }),
                    t),
                },
                l && [
                  _.isSelected,
                  {
                    background: g.listItemBackgroundChecked,
                    selectors:
                      ((i = {
                        ":hover": {
                          background: g.listItemBackgroundCheckedHovered,
                        },
                      }),
                      (i["" + _.check] = { opacity: 1 }),
                      i),
                  },
                ],
                p && [_.compact, { border: "none" }],
                a,
              ],
              groupHeaderContainer: [
                { display: "flex", alignItems: "center", height: h },
              ],
              headerCount: [{ padding: "0px 4px" }],
              check: [
                _.check,
                b,
                {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: 1,
                  marginTop: -1,
                  opacity: 0,
                  width: 48,
                  height: h,
                  selectors:
                    ((n = {}), (n["." + j.a + " &:focus"] = { opacity: 1 }), n),
                },
              ],
              expand: [
                _.expand,
                b,
                {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: f.small.fontSize,
                  width: 36,
                  height: h,
                  color: l ? m.neutralPrimary : m.neutralSecondary,
                  selectors: {
                    ":hover": {
                      backgroundColor: l ? m.neutralQuaternary : m.neutralLight,
                    },
                    ":active": {
                      backgroundColor: l
                        ? m.neutralTertiaryAlt
                        : m.neutralQuaternaryAlt,
                    },
                  },
                },
              ],
              expandIsCollapsed: [
                d
                  ? [
                      _.isCollapsed,
                      {
                        transform: "rotate(0deg)",
                        transformOrigin: "50% 50%",
                        transition: "transform .1s linear",
                      },
                    ]
                  : {
                      transform: Object(c.a)(s)
                        ? "rotate(-90deg)"
                        : "rotate(90deg)",
                      transformOrigin: "50% 50%",
                      transition: "transform .1s linear",
                    },
              ],
              title: [
                _.title,
                {
                  paddingLeft: u,
                  fontSize: p ? f.medium.fontSize : f.mediumPlus.fontSize,
                  fontWeight: d ? O.d.regular : O.d.semibold,
                  cursor: "pointer",
                  outline: 0,
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                },
              ],
              dropIcon: [
                _.dropIcon,
                {
                  position: "absolute",
                  left: -26,
                  fontSize: O.g.large,
                  color: m.neutralSecondary,
                  transition:
                    "transform " +
                    O.c.durationValue2 +
                    " " +
                    Oe +
                    ", opacity " +
                    O.c.durationValue4 +
                    " " +
                    we,
                  opacity: 0,
                  transform: "rotate(0.2deg) scale(0.65)",
                  transformOrigin: "10px 10px",
                  selectors:
                    ((r = {}),
                    (r[":global(." + _.iconTag + ")"] = {
                      position: "absolute",
                    }),
                    r),
                },
              ],
            };
          },
          void 0,
          { scope: "GroupHeader" }
        ),
        Fe = { root: "ms-GroupShowAll", link: "ms-Link" },
        We = o(272),
        Ge = Object(a.a)(),
        Be = Object(n.a)(
          function (e) {
            var t = e.group,
              o = e.groupLevel,
              i = e.showAllLinkText,
              n = void 0 === i ? "Show All" : i,
              r = e.styles,
              a = e.theme,
              l = e.onToggleSummarize,
              c = Ge(r, { theme: a }),
              d = Object(s.useCallback)(
                function (e) {
                  l(t), e.stopPropagation(), e.preventDefault();
                },
                [l, t]
              );
            return t
              ? s.createElement(
                  "div",
                  { className: c.root },
                  s.createElement(D, { count: o }),
                  s.createElement(We.a, { onClick: d }, n)
                )
              : null;
          },
          function (e) {
            var t,
              o = e.theme,
              i = o.fonts,
              n = Object(O.v)(Fe, o);
            return {
              root: [
                n.root,
                {
                  position: "relative",
                  padding: "10px 84px",
                  cursor: "pointer",
                  selectors:
                    ((t = {}),
                    (t["." + n.link] = { fontSize: i.small.fontSize }),
                    t),
                },
              ],
            };
          },
          void 0,
          { scope: "GroupShowAll" }
        ),
        Ve = { root: "ms-groupFooter" },
        Ue = Object(a.a)(),
        Ke = Object(n.a)(
          function (e) {
            var t = e.group,
              o = e.groupLevel,
              i = e.footerText,
              n = e.indentWidth,
              r = e.styles,
              a = e.theme,
              l = Ue(r, { theme: a });
            return t && i
              ? s.createElement(
                  "div",
                  { className: l.root },
                  s.createElement(D, { indentWidth: n, count: o }),
                  i
                )
              : null;
          },
          function (e) {
            var t = e.theme,
              o = e.className,
              i = Object(O.v)(Ve, t);
            return {
              root: [
                t.fonts.medium,
                i.root,
                { position: "relative", padding: "5px 38px" },
                o,
              ],
            };
          },
          void 0,
          { scope: "GroupFooter" }
        ),
        Xe = o(169),
        qe = 0,
        Ze = 1,
        Ye = 2,
        Je = 3,
        Qe = { top: -1, bottom: -1, left: -1, right: -1, width: 0, height: 0 },
        $e = function (e) {
          return e.getBoundingClientRect();
        },
        et = $e,
        tt = $e,
        ot = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            return (
              (o._root = s.createRef()),
              (o._surface = s.createRef()),
              (o._pageRefs = {}),
              (o._getDerivedStateFromProps = function (e, t) {
                return e.items !== o.props.items ||
                  e.renderCount !== o.props.renderCount ||
                  e.startIndex !== o.props.startIndex ||
                  e.version !== o.props.version
                  ? (o._resetRequiredWindows(),
                    (o._requiredRect = null),
                    o._measureVersion++,
                    o._invalidatePageCache(),
                    o._updatePages(e, t))
                  : t;
              }),
              (o._onRenderRoot = function (e) {
                var t = e.rootRef,
                  o = e.surfaceElement,
                  i = e.divProps;
                return s.createElement("div", Object(r.a)({ ref: t }, i), o);
              }),
              (o._onRenderSurface = function (e) {
                var t = e.surfaceRef,
                  o = e.pageElements,
                  i = e.divProps;
                return s.createElement("div", Object(r.a)({ ref: t }, i), o);
              }),
              (o._onRenderPage = function (e, t) {
                for (
                  var i = o.props,
                    n = i.onRenderCell,
                    a = i.role,
                    l = e.page,
                    c = l.items,
                    d = void 0 === c ? [] : c,
                    p = l.startIndex,
                    u = Object(r.d)(e, ["page"]),
                    h = void 0 === a ? "listitem" : "presentation",
                    g = [],
                    m = 0;
                  m < d.length;
                  m++
                ) {
                  var f = p + m,
                    _ = d[m],
                    b = o.props.getKey ? o.props.getKey(_, f) : _ && _.key;
                  (null !== b && void 0 !== b) || (b = f),
                    g.push(
                      s.createElement(
                        "div",
                        {
                          role: h,
                          className: "ms-List-cell",
                          key: b,
                          "data-list-index": f,
                          "data-automationid": "ListCell",
                        },
                        n &&
                          n(
                            _,
                            f,
                            o.props.ignoreScrollingState
                              ? void 0
                              : o.state.isScrolling
                          )
                      )
                    );
                }
                return s.createElement("div", Object(r.a)({}, u), g);
              }),
              Object(u.a)(o),
              (o.state = {
                pages: [],
                isScrolling: !1,
                getDerivedStateFromProps: o._getDerivedStateFromProps,
              }),
              (o._async = new h.a(o)),
              (o._events = new _.a(o)),
              (o._estimatedPageHeight = 0),
              (o._totalEstimates = 0),
              (o._requiredWindowsAhead = 0),
              (o._requiredWindowsBehind = 0),
              (o._measureVersion = 0),
              (o._onAsyncScroll = o._async.debounce(o._onAsyncScroll, 100, {
                leading: !1,
                maxWait: 500,
              })),
              (o._onAsyncIdle = o._async.debounce(o._onAsyncIdle, 200, {
                leading: !1,
              })),
              (o._onAsyncResize = o._async.debounce(o._onAsyncResize, 16, {
                leading: !1,
              })),
              (o._onScrollingDone = o._async.debounce(o._onScrollingDone, 500, {
                leading: !1,
              })),
              (o._cachedPageHeights = {}),
              (o._estimatedPageHeight = 0),
              (o._focusedIndex = -1),
              (o._pageCache = {}),
              o
            );
          }
          return (
            Object(r.c)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return t.getDerivedStateFromProps(e, t);
            }),
            Object.defineProperty(t.prototype, "pageRefs", {
              get: function () {
                return this._pageRefs;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.scrollToIndex = function (e, t, o) {
              void 0 === o && (o = qe);
              for (
                var i = this.props.startIndex,
                  n = i + this._getRenderCount(),
                  r = this._allowedRect,
                  s = 0,
                  a = 1,
                  l = i;
                l < n;
                l += a
              ) {
                var c = this._getPageSpecification(l, r),
                  d = c.height;
                if (((a = c.itemCount), l <= e && l + a > e)) {
                  if (t && this._scrollElement) {
                    for (
                      var p = tt(this._scrollElement),
                        u = {
                          top: this._scrollElement.scrollTop,
                          bottom: this._scrollElement.scrollTop + p.height,
                        },
                        h = e - l,
                        g = 0;
                      g < h;
                      ++g
                    )
                      s += t(l + g);
                    var m = s + t(e);
                    switch (o) {
                      case Ze:
                        return void (this._scrollElement.scrollTop = s);
                      case Ye:
                        return void (this._scrollElement.scrollTop =
                          m - p.height);
                      case Je:
                        return void (this._scrollElement.scrollTop =
                          (s + m - p.height) / 2);
                    }
                    if (s >= u.top && m <= u.bottom) return;
                    s < u.top || (m > u.bottom && (s = m - p.height));
                  }
                  return void (this._scrollElement.scrollTop = s);
                }
                s += d;
              }
            }),
            (t.prototype.getStartItemIndexInView = function (e) {
              for (var t = 0, o = this.state.pages || []; t < o.length; t++) {
                var i = o[t];
                if (
                  !i.isSpacer &&
                  (this._scrollTop || 0) >= i.top &&
                  (this._scrollTop || 0) <= i.top + i.height
                ) {
                  if (!e) {
                    var n = Math.floor(i.height / i.itemCount);
                    return (
                      i.startIndex + Math.floor((this._scrollTop - i.top) / n)
                    );
                  }
                  for (
                    var r = 0, s = i.startIndex;
                    s < i.startIndex + i.itemCount;
                    s++
                  ) {
                    n = e(s);
                    if (
                      i.top + r <= this._scrollTop &&
                      this._scrollTop < i.top + r + n
                    )
                      return s;
                    r += n;
                  }
                }
              }
              return 0;
            }),
            (t.prototype.componentDidMount = function () {
              this.setState(this._updatePages(this.props, this.state)),
                this._measureVersion++,
                (this._scrollElement = Object(Ce.e)(this._root.current)),
                this._events.on(window, "resize", this._onAsyncResize),
                this._root.current &&
                  this._events.on(
                    this._root.current,
                    "focus",
                    this._onFocus,
                    !0
                  ),
                this._scrollElement &&
                  (this._events.on(
                    this._scrollElement,
                    "scroll",
                    this._onScroll
                  ),
                  this._events.on(
                    this._scrollElement,
                    "scroll",
                    this._onAsyncScroll
                  ));
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              var o = this.props,
                i = this.state;
              if (this.state.pagesVersion !== t.pagesVersion) {
                if (o.getPageHeight) this._onAsyncIdle();
                else
                  this._updatePageMeasurements(i.pages)
                    ? ((this._materializedRect = null),
                      this._hasCompletedFirstRender
                        ? this._onAsyncScroll()
                        : ((this._hasCompletedFirstRender = !0),
                          this.setState(this._updatePages(o, i))))
                    : this._onAsyncIdle();
                o.onPagesUpdated && o.onPagesUpdated(i.pages);
              }
            }),
            (t.prototype.componentWillUnmount = function () {
              this._async.dispose(),
                this._events.dispose(),
                delete this._scrollElement;
            }),
            (t.prototype.shouldComponentUpdate = function (e, t) {
              var o = this.state.pages,
                i = t.pages,
                n = !1;
              if (!t.isScrolling && this.state.isScrolling) return !0;
              if (e.version !== this.props.version) return !0;
              if (e.items === this.props.items && o.length === i.length)
                for (var r = 0; r < o.length; r++) {
                  var s = o[r],
                    a = i[r];
                  if (s.key !== a.key || s.itemCount !== a.itemCount) {
                    n = !0;
                    break;
                  }
                }
              else n = !0;
              return n;
            }),
            (t.prototype.forceUpdate = function () {
              this._invalidatePageCache(),
                this._updateRenderRects(this.props, this.state, !0),
                this.setState(this._updatePages(this.props, this.state)),
                this._measureVersion++,
                e.prototype.forceUpdate.call(this);
            }),
            (t.prototype.getTotalListHeight = function () {
              return this._surfaceRect.height;
            }),
            (t.prototype.render = function () {
              for (
                var e = this.props,
                  t = e.className,
                  o = e.role,
                  i = void 0 === o ? "list" : o,
                  n = e.onRenderSurface,
                  s = e.onRenderRoot,
                  a = this.state.pages,
                  l = void 0 === a ? [] : a,
                  c = [],
                  d = Object(k.h)(this.props, k.f),
                  p = 0,
                  u = l;
                p < u.length;
                p++
              ) {
                var h = u[p];
                c.push(this._renderPage(h));
              }
              var g = n
                ? Object(F.a)(n, this._onRenderSurface)
                : this._onRenderSurface;
              return (
                s ? Object(F.a)(s, this._onRenderRoot) : this._onRenderRoot
              )({
                rootRef: this._root,
                pages: l,
                surfaceElement: g({
                  surfaceRef: this._surface,
                  pages: l,
                  pageElements: c,
                  divProps: {
                    role: "presentation",
                    className: "ms-List-surface",
                  },
                }),
                divProps: Object(r.a)(Object(r.a)({}, d), {
                  className: Object(f.a)("ms-List", t),
                  role: c.length > 0 ? i : void 0,
                }),
              });
            }),
            (t.prototype._shouldVirtualize = function (e) {
              void 0 === e && (e = this.props);
              var t = e.onShouldVirtualize;
              return !t || t(e);
            }),
            (t.prototype._invalidatePageCache = function () {
              this._pageCache = {};
            }),
            (t.prototype._renderPage = function (e) {
              var t,
                o = this,
                i = this.props.usePageCache;
              if (i && (t = this._pageCache[e.key]) && t.pageElement)
                return t.pageElement;
              var n = this._getPageStyle(e),
                r = this.props.onRenderPage,
                s = (void 0 === r ? this._onRenderPage : r)(
                  {
                    page: e,
                    className: "ms-List-page",
                    key: e.key,
                    ref: function (t) {
                      o._pageRefs[e.key] = t;
                    },
                    style: n,
                    role: "presentation",
                  },
                  this._onRenderPage
                );
              return (
                i &&
                  0 === e.startIndex &&
                  (this._pageCache[e.key] = { page: e, pageElement: s }),
                s
              );
            }),
            (t.prototype._getPageStyle = function (e) {
              var t = this.props.getPageStyle;
              return Object(r.a)(
                Object(r.a)({}, t ? t(e) : {}),
                e.items ? {} : { height: e.height }
              );
            }),
            (t.prototype._onFocus = function (e) {
              for (var t = e.target; t !== this._surface.current; ) {
                var o = t.getAttribute("data-list-index");
                if (o) {
                  this._focusedIndex = Number(o);
                  break;
                }
                t = Object(be.a)(t);
              }
            }),
            (t.prototype._onScroll = function () {
              this.state.isScrolling ||
                this.props.ignoreScrollingState ||
                this.setState({ isScrolling: !0 }),
                this._resetRequiredWindows(),
                this._onScrollingDone();
            }),
            (t.prototype._resetRequiredWindows = function () {
              (this._requiredWindowsAhead = 0),
                (this._requiredWindowsBehind = 0);
            }),
            (t.prototype._onAsyncScroll = function () {
              var e, t;
              this._updateRenderRects(this.props, this.state),
                (this._materializedRect &&
                  ((e = this._requiredRect),
                  (t = this._materializedRect),
                  e.top >= t.top &&
                    e.left >= t.left &&
                    e.bottom <= t.bottom &&
                    e.right <= t.right)) ||
                  this.setState(this._updatePages(this.props, this.state));
            }),
            (t.prototype._onAsyncIdle = function () {
              var e = this.props,
                t = e.renderedWindowsAhead,
                o = e.renderedWindowsBehind,
                i = this._requiredWindowsAhead,
                n = this._requiredWindowsBehind,
                r = Math.min(t, i + 1),
                s = Math.min(o, n + 1);
              (r === i && s === n) ||
                ((this._requiredWindowsAhead = r),
                (this._requiredWindowsBehind = s),
                this._updateRenderRects(this.props, this.state),
                this.setState(this._updatePages(this.props, this.state))),
                (t > r || o > s) && this._onAsyncIdle();
            }),
            (t.prototype._onScrollingDone = function () {
              this.props.ignoreScrollingState ||
                this.setState({ isScrolling: !1 });
            }),
            (t.prototype._onAsyncResize = function () {
              this.forceUpdate();
            }),
            (t.prototype._updatePages = function (e, t) {
              this._requiredRect || this._updateRenderRects(e, t);
              var o = this._buildPages(e, t),
                i = t.pages;
              return (
                this._notifyPageChanges(i, o.pages, this.props),
                Object(r.a)(Object(r.a)(Object(r.a)({}, t), o), {
                  pagesVersion: {},
                })
              );
            }),
            (t.prototype._notifyPageChanges = function (e, t, o) {
              var i = o.onPageAdded,
                n = o.onPageRemoved;
              if (i || n) {
                for (var r = {}, s = 0, a = e; s < a.length; s++) {
                  (d = a[s]).items && (r[d.startIndex] = d);
                }
                for (var l = 0, c = t; l < c.length; l++) {
                  var d;
                  (d = c[l]).items &&
                    (r[d.startIndex]
                      ? delete r[d.startIndex]
                      : this._onPageAdded(d));
                }
                for (var p in r)
                  r.hasOwnProperty(p) && this._onPageRemoved(r[p]);
              }
            }),
            (t.prototype._updatePageMeasurements = function (e) {
              var t = !1;
              if (!this._shouldVirtualize()) return t;
              for (var o = 0; o < e.length; o++) {
                var i = e[o];
                i.items && (t = this._measurePage(i) || t);
              }
              return t;
            }),
            (t.prototype._measurePage = function (e) {
              var t = !1,
                o = this._pageRefs[e.key],
                i = this._cachedPageHeights[e.startIndex];
              if (
                o &&
                this._shouldVirtualize() &&
                (!i || i.measureVersion !== this._measureVersion)
              ) {
                var n = { width: o.clientWidth, height: o.clientHeight };
                (n.height || n.width) &&
                  ((t = e.height !== n.height),
                  (e.height = n.height),
                  (this._cachedPageHeights[e.startIndex] = {
                    height: n.height,
                    measureVersion: this._measureVersion,
                  }),
                  (this._estimatedPageHeight = Math.round(
                    (this._estimatedPageHeight * this._totalEstimates +
                      n.height) /
                      (this._totalEstimates + 1)
                  )),
                  this._totalEstimates++);
              }
              return t;
            }),
            (t.prototype._onPageAdded = function (e) {
              var t = this.props.onPageAdded;
              t && t(e);
            }),
            (t.prototype._onPageRemoved = function (e) {
              var t = this.props.onPageRemoved;
              t && t(e);
            }),
            (t.prototype._buildPages = function (e, t) {
              var o = e.renderCount,
                i = e.items,
                n = e.startIndex,
                s = e.getPageHeight;
              o = this._getRenderCount(e);
              for (
                var a = Object(r.a)({}, Qe),
                  l = [],
                  c = 1,
                  d = 0,
                  p = null,
                  u = this._focusedIndex,
                  h = n + o,
                  g = this._shouldVirtualize(e),
                  m = 0 === this._estimatedPageHeight && !s,
                  f = this._allowedRect,
                  _ = function (e) {
                    var o = b._getPageSpecification(e, f),
                      r = o.height,
                      s = o.data,
                      _ = o.key;
                    c = o.itemCount;
                    var v,
                      C,
                      y = d + r - 1,
                      S =
                        Object(Xe.d)(t.pages, function (t) {
                          return !!t.items && t.startIndex === e;
                        }) > -1,
                      x = !f || (y >= f.top && d <= f.bottom),
                      D =
                        !b._requiredRect ||
                        (y >= b._requiredRect.top &&
                          d <= b._requiredRect.bottom);
                    if (
                      (!m && (D || (x && S))) ||
                      !g ||
                      (u >= e && u < e + c) ||
                      e === n
                    ) {
                      p && (l.push(p), (p = null));
                      var k = Math.min(c, h - e),
                        I = b._createPage(
                          _,
                          i.slice(e, e + k),
                          e,
                          void 0,
                          void 0,
                          s
                        );
                      (I.top = d),
                        (I.height = r),
                        b._visibleRect &&
                          b._visibleRect.bottom &&
                          (I.isVisible =
                            y >= b._visibleRect.top &&
                            d <= b._visibleRect.bottom),
                        l.push(I),
                        D &&
                          b._allowedRect &&
                          ((v = a),
                          (C = {
                            top: d,
                            bottom: y,
                            height: r,
                            left: f.left,
                            right: f.right,
                            width: f.width,
                          }),
                          (v.top =
                            C.top < v.top || -1 === v.top ? C.top : v.top),
                          (v.left =
                            C.left < v.left || -1 === v.left ? C.left : v.left),
                          (v.bottom =
                            C.bottom > v.bottom || -1 === v.bottom
                              ? C.bottom
                              : v.bottom),
                          (v.right =
                            C.right > v.right || -1 === v.right
                              ? C.right
                              : v.right),
                          (v.width = v.right - v.left + 1),
                          (v.height = v.bottom - v.top + 1));
                    } else
                      p ||
                        (p = b._createPage(
                          "spacer-" + e,
                          void 0,
                          e,
                          0,
                          void 0,
                          s,
                          !0
                        )),
                        (p.height = (p.height || 0) + (y - d) + 1),
                        (p.itemCount += c);
                    if (((d += y - d + 1), m && g)) return "break";
                  },
                  b = this,
                  v = n;
                v < h;
                v += c
              ) {
                if ("break" === _(v)) break;
              }
              return (
                p && ((p.key = "spacer-end"), l.push(p)),
                (this._materializedRect = a),
                Object(r.a)(Object(r.a)({}, t), {
                  pages: l,
                  measureVersion: this._measureVersion,
                })
              );
            }),
            (t.prototype._getPageSpecification = function (e, t) {
              var o = this.props.getPageSpecification;
              if (o) {
                var i = o(e, t),
                  n = i.itemCount,
                  r = void 0 === n ? this._getItemCountForPage(e, t) : n,
                  s = i.height;
                return {
                  itemCount: r,
                  height: void 0 === s ? this._getPageHeight(e, t, r) : s,
                  data: i.data,
                  key: i.key,
                };
              }
              return {
                itemCount: (r = this._getItemCountForPage(e, t)),
                height: this._getPageHeight(e, t, r),
              };
            }),
            (t.prototype._getPageHeight = function (e, t, o) {
              if (this.props.getPageHeight)
                return this.props.getPageHeight(e, t, o);
              var i = this._cachedPageHeights[e];
              return i ? i.height : this._estimatedPageHeight || 30;
            }),
            (t.prototype._getItemCountForPage = function (e, t) {
              var o = this.props.getItemCountForPage
                ? this.props.getItemCountForPage(e, t)
                : 10;
              return o || 10;
            }),
            (t.prototype._createPage = function (e, t, o, i, n, r, s) {
              void 0 === o && (o = -1),
                void 0 === i && (i = t ? t.length : 0),
                void 0 === n && (n = {}),
                (e = e || "page-" + o);
              var a = this._pageCache[e];
              return a && a.page
                ? a.page
                : {
                    key: e,
                    startIndex: o,
                    itemCount: i,
                    items: t,
                    style: n,
                    top: 0,
                    height: 0,
                    data: r,
                    isSpacer: s || !1,
                  };
            }),
            (t.prototype._getRenderCount = function (e) {
              var t = e || this.props,
                o = t.items,
                i = t.startIndex,
                n = t.renderCount;
              return void 0 === n ? (o ? o.length - i : 0) : n;
            }),
            (t.prototype._updateRenderRects = function (e, t, o) {
              var i = e.renderedWindowsAhead,
                n = e.renderedWindowsBehind,
                s = t.pages;
              if (this._shouldVirtualize(e)) {
                var a = this._surfaceRect || Object(r.a)({}, Qe),
                  l = this._scrollElement && this._scrollElement.scrollHeight,
                  c = this._scrollElement ? this._scrollElement.scrollTop : 0;
                this._surface.current &&
                  (o ||
                    !s ||
                    !this._surfaceRect ||
                    !l ||
                    l !== this._scrollHeight ||
                    Math.abs(this._scrollTop - c) >
                      this._estimatedPageHeight / 3) &&
                  ((a = this._surfaceRect = et(this._surface.current)),
                  (this._scrollTop = c)),
                  (!o && l && l === this._scrollHeight) ||
                    this._measureVersion++,
                  (this._scrollHeight = l);
                var d = Math.max(0, -a.top),
                  p = Object(ve.a)(this._root.current),
                  u = {
                    top: d,
                    left: a.left,
                    bottom: d + p.innerHeight,
                    right: a.right,
                    width: a.width,
                    height: p.innerHeight,
                  };
                (this._requiredRect = it(
                  u,
                  this._requiredWindowsBehind,
                  this._requiredWindowsAhead
                )),
                  (this._allowedRect = it(u, n, i)),
                  (this._visibleRect = u);
              }
            }),
            (t.defaultProps = {
              startIndex: 0,
              onRenderCell: function (e, t, o) {
                return s.createElement(s.Fragment, null, (e && e.name) || "");
              },
              renderedWindowsAhead: 2,
              renderedWindowsBehind: 2,
            }),
            t
          );
        })(s.Component);
      function it(e, t, o) {
        var i = e.top - t * e.height,
          n = e.height + (t + o) * e.height;
        return {
          top: i,
          bottom: i + n,
          height: n,
          left: e.left,
          right: e.right,
          width: e.width,
        };
      }
      var nt = (function (e) {
          function t(o) {
            var i = e.call(this, o) || this;
            (i._root = s.createRef()),
              (i._list = s.createRef()),
              (i._subGroupRefs = {}),
              (i._droppingClassName = ""),
              (i._onRenderGroupHeader = function (e) {
                return s.createElement(Le, Object(r.a)({}, e));
              }),
              (i._onRenderGroupShowAll = function (e) {
                return s.createElement(Be, Object(r.a)({}, e));
              }),
              (i._onRenderGroupFooter = function (e) {
                return s.createElement(Ke, Object(r.a)({}, e));
              }),
              (i._renderSubGroup = function (e, o) {
                var n = i.props,
                  r = n.dragDropEvents,
                  a = n.dragDropHelper,
                  l = n.eventsToRegister,
                  c = n.getGroupItemLimit,
                  d = n.groupNestingDepth,
                  p = n.groupProps,
                  u = n.items,
                  h = n.headerProps,
                  g = n.showAllProps,
                  m = n.footerProps,
                  f = n.listProps,
                  _ = n.onRenderCell,
                  b = n.selection,
                  v = n.selectionMode,
                  C = n.viewport,
                  y = n.onRenderGroupHeader,
                  S = n.onRenderGroupShowAll,
                  x = n.onRenderGroupFooter,
                  D = n.onShouldVirtualize,
                  k = n.group,
                  I = n.compact,
                  R = e.level ? e.level + 1 : d;
                return !e || e.count > 0 || (p && p.showEmptyGroups)
                  ? s.createElement(t, {
                      ref: function (e) {
                        return (i._subGroupRefs["subGroup_" + o] = e);
                      },
                      key: i._getGroupKey(e, o),
                      dragDropEvents: r,
                      dragDropHelper: a,
                      eventsToRegister: l,
                      footerProps: m,
                      getGroupItemLimit: c,
                      group: e,
                      groupIndex: o,
                      groupNestingDepth: R,
                      groupProps: p,
                      headerProps: h,
                      items: u,
                      listProps: f,
                      onRenderCell: _,
                      selection: b,
                      selectionMode: v,
                      showAllProps: g,
                      viewport: C,
                      onRenderGroupHeader: y,
                      onRenderGroupShowAll: S,
                      onRenderGroupFooter: x,
                      onShouldVirtualize: D,
                      groups: k ? k.children : [],
                      compact: I,
                    })
                  : null;
              }),
              (i._getGroupDragDropOptions = function () {
                var e = i.props,
                  t = e.group,
                  o = e.groupIndex,
                  n = e.dragDropEvents;
                return {
                  eventMap: e.eventsToRegister,
                  selectionIndex: -1,
                  context: { data: t, index: o, isGroup: !0 },
                  updateDropState: i._updateDroppingState,
                  canDrag: n.canDrag,
                  canDrop: n.canDrop,
                  onDrop: n.onDrop,
                  onDragStart: n.onDragStart,
                  onDragEnter: n.onDragEnter,
                  onDragLeave: n.onDragLeave,
                  onDragEnd: n.onDragEnd,
                  onDragOver: n.onDragOver,
                };
              }),
              (i._updateDroppingState = function (e, t) {
                var o = i.state.isDropping,
                  n = i.props,
                  r = n.dragDropEvents,
                  s = n.group;
                o !== e &&
                  (o
                    ? r && r.onDragLeave && r.onDragLeave(s, t)
                    : r &&
                      r.onDragEnter &&
                      (i._droppingClassName = r.onDragEnter(s, t)),
                  i.setState({ isDropping: e }));
              });
            var n = o.selection,
              a = o.group;
            return (
              Object(u.a)(i),
              (i._id = Object(b.a)("GroupedListSection")),
              (i.state = {
                isDropping: !1,
                isSelected:
                  !(!n || !a) && n.isRangeSelected(a.startIndex, a.count),
              }),
              (i._events = new _.a(i)),
              i
            );
          }
          return (
            Object(r.c)(t, e),
            (t.prototype.componentDidMount = function () {
              var e = this.props,
                t = e.dragDropHelper,
                o = e.selection;
              t &&
                this._root.current &&
                (this._dragDropSubscription = t.subscribe(
                  this._root.current,
                  this._events,
                  this._getGroupDragDropOptions()
                )),
                o && this._events.on(o, X.a, this._onSelectionChange);
            }),
            (t.prototype.componentWillUnmount = function () {
              this._events.dispose(),
                this._dragDropSubscription &&
                  this._dragDropSubscription.dispose();
            }),
            (t.prototype.componentDidUpdate = function (e) {
              (this.props.group === e.group &&
                this.props.groupIndex === e.groupIndex &&
                this.props.dragDropHelper === e.dragDropHelper) ||
                (this._dragDropSubscription &&
                  (this._dragDropSubscription.dispose(),
                  delete this._dragDropSubscription),
                this.props.dragDropHelper &&
                  this._root.current &&
                  (this._dragDropSubscription =
                    this.props.dragDropHelper.subscribe(
                      this._root.current,
                      this._events,
                      this._getGroupDragDropOptions()
                    )));
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.getGroupItemLimit,
                o = e.group,
                i = e.groupIndex,
                n = e.headerProps,
                a = e.showAllProps,
                l = e.footerProps,
                c = e.viewport,
                d = e.selectionMode,
                p = e.onRenderGroupHeader,
                u = void 0 === p ? this._onRenderGroupHeader : p,
                h = e.onRenderGroupShowAll,
                g = void 0 === h ? this._onRenderGroupShowAll : h,
                m = e.onRenderGroupFooter,
                _ = void 0 === m ? this._onRenderGroupFooter : m,
                b = e.onShouldVirtualize,
                v = e.groupedListClassNames,
                C = e.groups,
                y = e.compact,
                S = e.listProps,
                x = void 0 === S ? {} : S,
                D = this.state.isSelected,
                k = o && t ? t(o) : 1 / 0,
                I =
                  o &&
                  !o.children &&
                  !o.isCollapsed &&
                  !o.isShowingAll &&
                  (o.count > k || o.hasMoreData),
                R = o && o.children && o.children.length > 0,
                w = x.version,
                O = {
                  group: o,
                  groupIndex: i,
                  groupLevel: o ? o.level : 0,
                  isSelected: D,
                  selected: D,
                  viewport: c,
                  selectionMode: d,
                  groups: C,
                  compact: y,
                },
                H = {
                  groupedListId: this._id,
                  ariaSetSize: C ? C.length : void 0,
                  ariaPosInSet: void 0 !== i ? i + 1 : void 0,
                },
                P = Object(r.a)(Object(r.a)(Object(r.a)({}, n), O), H),
                j = Object(r.a)(Object(r.a)({}, a), O),
                E = Object(r.a)(Object(r.a)({}, l), O),
                M =
                  !!this.props.dragDropHelper &&
                  this._getGroupDragDropOptions().canDrag(o) &&
                  !!this.props.dragDropEvents.canDragGroups;
              return s.createElement(
                "div",
                Object(r.a)({ ref: this._root }, M && { draggable: !0 }, {
                  className: Object(f.a)(
                    v && v.group,
                    this._getDroppingClassName()
                  ),
                  role: "presentation",
                }),
                u(P, this._onRenderGroupHeader),
                o && o.isCollapsed
                  ? null
                  : R
                  ? s.createElement(ot, {
                      role: "presentation",
                      ref: this._list,
                      items: o ? o.children : [],
                      onRenderCell: this._renderSubGroup,
                      getItemCountForPage: this._returnOne,
                      onShouldVirtualize: b,
                      version: w,
                      id: this._id,
                    })
                  : this._onRenderGroup(k),
                o && o.isCollapsed
                  ? null
                  : I && g(j, this._onRenderGroupShowAll),
                _(E, this._onRenderGroupFooter)
              );
            }),
            (t.prototype.forceUpdate = function () {
              e.prototype.forceUpdate.call(this), this.forceListUpdate();
            }),
            (t.prototype.forceListUpdate = function () {
              var e = this.props.group;
              if (this._list.current) {
                if (
                  (this._list.current.forceUpdate(),
                  e && e.children && e.children.length > 0)
                )
                  for (var t = e.children.length, o = 0; o < t; o++) {
                    var i;
                    (i =
                      this._list.current.pageRefs["subGroup_" + String(o)]) &&
                      i.forceListUpdate();
                  }
              } else
                (i = this._subGroupRefs["subGroup_" + String(0)]) &&
                  i.forceListUpdate();
            }),
            (t.prototype._onSelectionChange = function () {
              var e = this.props,
                t = e.group,
                o = e.selection;
              if (o && t) {
                var i = o.isRangeSelected(t.startIndex, t.count);
                i !== this.state.isSelected && this.setState({ isSelected: i });
              }
            }),
            (t.prototype._onRenderGroupCell = function (e, t) {
              return function (o, i) {
                return e(t, o, i);
              };
            }),
            (t.prototype._onRenderGroup = function (e) {
              var t,
                o = this.props,
                i = o.group,
                n = o.items,
                a = o.onRenderCell,
                l = o.listProps,
                c = o.groupNestingDepth,
                d = o.onShouldVirtualize,
                p = o.groupProps,
                u = i && !i.isShowingAll ? i.count : n.length,
                h = i ? i.startIndex : 0;
              return s.createElement(
                ot,
                Object(r.a)(
                  {
                    role: p && p.role ? p.role : "rowgroup",
                    "aria-label":
                      null === (t = i) || void 0 === t ? void 0 : t.name,
                    items: n,
                    onRenderCell: this._onRenderGroupCell(a, c),
                    ref: this._list,
                    renderCount: Math.min(u, e),
                    startIndex: h,
                    onShouldVirtualize: d,
                    id: this._id,
                  },
                  l
                )
              );
            }),
            (t.prototype._returnOne = function () {
              return 1;
            }),
            (t.prototype._getGroupKey = function (e, t) {
              return (
                "group-" + (e && e.key ? e.key : String(e.level) + String(t))
              );
            }),
            (t.prototype._getDroppingClassName = function () {
              var e = this.state.isDropping,
                t = this.props,
                o = t.group,
                i = t.groupedListClassNames;
              return (
                (e = !(!o || !e)),
                Object(f.a)(
                  e && this._droppingClassName,
                  e && "is-dropping",
                  e && i && i.groupIsDropping
                )
              );
            }),
            t
          );
        })(s.Component),
        rt = Object(a.a)(),
        st = A.rowHeight,
        at = A.compactRowHeight,
        lt = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            (o._list = s.createRef()),
              (o._renderGroup = function (e, t) {
                var i = o.props,
                  n = i.dragDropEvents,
                  a = i.dragDropHelper,
                  l = i.eventsToRegister,
                  c = i.groupProps,
                  d = i.items,
                  p = i.listProps,
                  u = i.onRenderCell,
                  h = i.selectionMode,
                  g = i.selection,
                  m = i.viewport,
                  f = i.onShouldVirtualize,
                  _ = i.groups,
                  b = i.compact,
                  v = {
                    onToggleSelectGroup: o._onToggleSelectGroup,
                    onToggleCollapse: o._onToggleCollapse,
                    onToggleSummarize: o._onToggleSummarize,
                  },
                  C = Object(r.a)(Object(r.a)({}, c.headerProps), v),
                  y = Object(r.a)(Object(r.a)({}, c.showAllProps), v),
                  S = Object(r.a)(Object(r.a)({}, c.footerProps), v),
                  x = o._getGroupNestingDepth();
                if (!c.showEmptyGroups && e && 0 === e.count) return null;
                var D = Object(r.a)(Object(r.a)({}, p || {}), {
                  version: o.state.version,
                });
                return s.createElement(nt, {
                  key: o._getGroupKey(e, t),
                  dragDropEvents: n,
                  dragDropHelper: a,
                  eventsToRegister: l,
                  footerProps: S,
                  getGroupItemLimit: c && c.getGroupItemLimit,
                  group: e,
                  groupIndex: t,
                  groupNestingDepth: x,
                  groupProps: c,
                  headerProps: C,
                  listProps: D,
                  items: d,
                  onRenderCell: u,
                  onRenderGroupHeader: c.onRenderHeader,
                  onRenderGroupShowAll: c.onRenderShowAll,
                  onRenderGroupFooter: c.onRenderFooter,
                  selectionMode: h,
                  selection: g,
                  showAllProps: y,
                  viewport: m,
                  onShouldVirtualize: f,
                  groupedListClassNames: o._classNames,
                  groups: _,
                  compact: b,
                });
              }),
              (o._getDefaultGroupItemLimit = function (e) {
                return e.count;
              }),
              (o._getGroupItemLimit = function (e) {
                var t = o.props.groupProps;
                return (
                  t && t.getGroupItemLimit
                    ? t.getGroupItemLimit
                    : o._getDefaultGroupItemLimit
                )(e);
              }),
              (o._getGroupHeight = function (e) {
                var t = o.props.compact ? at : st;
                return t + (e.isCollapsed ? 0 : t * o._getGroupItemLimit(e));
              }),
              (o._getPageHeight = function (e) {
                var t = o.state.groups,
                  i = o.props.getGroupHeight,
                  n = void 0 === i ? o._getGroupHeight : i,
                  r = t && t[e];
                return r ? n(r, e) : 0;
              }),
              (o._onToggleCollapse = function (e) {
                var t = o.props.groupProps,
                  i = t && t.headerProps && t.headerProps.onToggleCollapse;
                e &&
                  (i && i(e),
                  (e.isCollapsed = !e.isCollapsed),
                  o._updateIsSomeGroupExpanded(),
                  o.forceUpdate());
              }),
              (o._onToggleSelectGroup = function (e) {
                var t = o.props,
                  i = t.selection,
                  n = t.selectionMode;
                e &&
                  i &&
                  n === X.b.multiple &&
                  i.toggleRangeSelected(e.startIndex, e.count);
              }),
              (o._isInnerZoneKeystroke = function (e) {
                return e.which === Object(c.b)(d.a.right);
              }),
              (o._onToggleSummarize = function (e) {
                var t = o.props.groupProps,
                  i = t && t.showAllProps && t.showAllProps.onToggleSummarize;
                i
                  ? i(e)
                  : (e && (e.isShowingAll = !e.isShowingAll), o.forceUpdate());
              }),
              (o._getPageSpecification = function (e) {
                var t = o.state.groups,
                  i = t && t[e];
                return { key: i && i.key };
              }),
              Object(u.a)(o),
              (o._isSomeGroupExpanded = o._computeIsSomeGroupExpanded(
                t.groups
              ));
            var i = t.listProps,
              n = (void 0 === i ? {} : i).version,
              a = void 0 === n ? {} : n;
            return (
              (o.state = {
                groups: t.groups,
                items: t.items,
                listProps: t.listProps,
                version: a,
              }),
              o
            );
          }
          return (
            Object(r.c)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              var o = e.groups,
                i = e.selectionMode,
                n = e.compact,
                s = e.items,
                a = e.listProps,
                l = a && a.version,
                c = Object(r.a)(Object(r.a)({}, t), {
                  selectionMode: i,
                  compact: n,
                  groups: o,
                  listProps: a,
                }),
                d = !1;
              return (
                (l === (t.listProps && t.listProps.version) &&
                  s === t.items &&
                  o === t.groups &&
                  i === t.selectionMode &&
                  n === t.compact) ||
                  (d = !0),
                d && (c = Object(r.a)(Object(r.a)({}, c), { version: {} })),
                c
              );
            }),
            (t.prototype.scrollToIndex = function (e, t, o) {
              this._list.current && this._list.current.scrollToIndex(e, t, o);
            }),
            (t.prototype.getStartItemIndexInView = function () {
              return this._list.current.getStartItemIndexInView() || 0;
            }),
            (t.prototype.componentDidMount = function () {
              var e = this.props,
                t = e.groupProps,
                o = e.groups,
                i = void 0 === o ? [] : o;
              t &&
                t.isAllGroupsCollapsed &&
                this._setGroupsCollapsedState(i, t.isAllGroupsCollapsed);
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.className,
                o = e.usePageCache,
                i = e.onShouldVirtualize,
                n = e.theme,
                a = e.role,
                l = void 0 === a ? "treegrid" : a,
                c = e.styles,
                d = e.compact,
                p = e.focusZoneProps,
                u = void 0 === p ? {} : p,
                h = e.rootListProps,
                g = void 0 === h ? {} : h,
                m = this.state,
                _ = m.groups,
                b = m.version;
              this._classNames = rt(c, { theme: n, className: t, compact: d });
              var y = u.shouldEnterInnerZone,
                S = void 0 === y ? this._isInnerZoneKeystroke : y;
              return s.createElement(
                v.a,
                Object(r.a)(
                  {
                    direction: C.a.vertical,
                    "data-automationid": "GroupedList",
                    "data-is-scrollable": "false",
                    role: "presentation",
                  },
                  u,
                  {
                    shouldEnterInnerZone: S,
                    className: Object(f.a)(this._classNames.root, u.className),
                  }
                ),
                _
                  ? s.createElement(
                      ot,
                      Object(r.a)(
                        {
                          ref: this._list,
                          role: l,
                          items: _,
                          onRenderCell: this._renderGroup,
                          getItemCountForPage: this._returnOne,
                          getPageHeight: this._getPageHeight,
                          getPageSpecification: this._getPageSpecification,
                          usePageCache: o,
                          onShouldVirtualize: i,
                          version: b,
                        },
                        g
                      )
                    )
                  : this._renderGroup(void 0, 0)
              );
            }),
            (t.prototype.forceUpdate = function () {
              e.prototype.forceUpdate.call(this), this._forceListUpdates();
            }),
            (t.prototype.toggleCollapseAll = function (e) {
              var t = this.state.groups,
                o = void 0 === t ? [] : t,
                i = this.props.groupProps,
                n = i && i.onToggleCollapseAll;
              o.length > 0 &&
                (n && n(e),
                this._setGroupsCollapsedState(o, e),
                this._updateIsSomeGroupExpanded(),
                this.forceUpdate());
            }),
            (t.prototype._setGroupsCollapsedState = function (e, t) {
              for (var o = 0; o < e.length; o++) e[o].isCollapsed = t;
            }),
            (t.prototype._returnOne = function () {
              return 1;
            }),
            (t.prototype._getGroupKey = function (e, t) {
              return "group-" + (e && e.key ? e.key : String(t));
            }),
            (t.prototype._getGroupNestingDepth = function () {
              for (var e = 0, t = this.state.groups; t && t.length > 0; )
                e++, (t = t[0].children);
              return e;
            }),
            (t.prototype._forceListUpdates = function (e) {
              this.setState({ version: {} });
            }),
            (t.prototype._computeIsSomeGroupExpanded = function (e) {
              var t = this;
              return !(
                !e ||
                !e.some(function (e) {
                  return e.children
                    ? t._computeIsSomeGroupExpanded(e.children)
                    : !e.isCollapsed;
                })
              );
            }),
            (t.prototype._updateIsSomeGroupExpanded = function () {
              var e = this.state.groups,
                t = this.props.onGroupExpandStateChanged,
                o = this._computeIsSomeGroupExpanded(e);
              this._isSomeGroupExpanded !== o &&
                (t && t(o), (this._isSomeGroupExpanded = o));
            }),
            (t.defaultProps = {
              selectionMode: X.b.multiple,
              isHeaderVisible: !0,
              groupProps: {},
              compact: !1,
            }),
            t
          );
        })(s.Component),
        ct = Object(n.a)(
          lt,
          function (e) {
            var t,
              o,
              i = e.theme,
              n = e.className,
              r = e.compact,
              s = i.palette,
              a = Object(O.v)(De, i);
            return {
              root: [
                a.root,
                i.fonts.small,
                {
                  position: "relative",
                  selectors:
                    ((t = {}), (t["." + a.listCell] = { minHeight: 38 }), t),
                },
                r && [
                  a.compact,
                  {
                    selectors:
                      ((o = {}), (o["." + a.listCell] = { minHeight: 32 }), o),
                  },
                ],
                n,
              ],
              group: [
                a.group,
                {
                  transition:
                    "background-color " + O.c.durationValue2 + " " + ke,
                },
              ],
              groupIsDropping: { backgroundColor: s.neutralLight },
            };
          },
          void 0,
          { scope: "GroupedList" }
        ),
        dt = o(160),
        pt = o(469);
      function ut(e) {
        return (function (t) {
          function o(e) {
            var o = t.call(this, e) || this;
            return (
              (o._root = s.createRef()),
              (o._registerResizeObserver = function () {
                var e = Object(ve.a)(o._root.current);
                (o._viewportResizeObserver = new e.ResizeObserver(
                  o._onAsyncResize
                )),
                  o._viewportResizeObserver.observe(o._root.current);
              }),
              (o._unregisterResizeObserver = function () {
                o._viewportResizeObserver &&
                  (o._viewportResizeObserver.disconnect(),
                  delete o._viewportResizeObserver);
              }),
              (o._updateViewport = function (e) {
                var t = o.state.viewport,
                  i = o._root.current,
                  n = Object(Ce.e)(i),
                  r = Object(pt.a)(n),
                  s = Object(pt.a)(i);
                ((s && s.width) !== t.width || (r && r.height) !== t.height) &&
                o._resizeAttempts < 3 &&
                s &&
                r
                  ? (o._resizeAttempts++,
                    o.setState(
                      { viewport: { width: s.width, height: r.height } },
                      function () {
                        o._updateViewport(e);
                      }
                    ))
                  : ((o._resizeAttempts = 0),
                    e &&
                      o._composedComponentInstance &&
                      o._composedComponentInstance.forceUpdate());
              }),
              (o._async = new h.a(o)),
              (o._events = new _.a(o)),
              (o._resizeAttempts = 0),
              (o.state = { viewport: { width: 0, height: 0 } }),
              o
            );
          }
          return (
            Object(r.c)(o, t),
            (o.prototype.componentDidMount = function () {
              var e = this,
                t = this.props,
                o = t.delayFirstMeasure,
                i = t.disableResizeObserver,
                n = t.skipViewportMeasures,
                r = Object(ve.a)(this._root.current);
              (this._onAsyncResize = this._async.debounce(
                this._onAsyncResize,
                500,
                { leading: !1 }
              )),
                n ||
                  (!i && this._isResizeObserverAvailable()
                    ? this._registerResizeObserver()
                    : this._events.on(r, "resize", this._onAsyncResize),
                  o
                    ? this._async.setTimeout(function () {
                        e._updateViewport();
                      }, 500)
                    : this._updateViewport());
            }),
            (o.prototype.componentDidUpdate = function (e) {
              var t = e.skipViewportMeasures,
                o = this.props,
                i = o.disableResizeObserver,
                n = o.skipViewportMeasures,
                r = Object(ve.a)(this._root.current);
              n !== t &&
                (n
                  ? (this._unregisterResizeObserver(),
                    this._events.off(r, "resize", this._onAsyncResize))
                  : (!i && this._isResizeObserverAvailable()
                      ? this._viewportResizeObserver ||
                        this._registerResizeObserver()
                      : this._events.on(r, "resize", this._onAsyncResize),
                    this._updateViewport()));
            }),
            (o.prototype.componentWillUnmount = function () {
              this._events.dispose(),
                this._async.dispose(),
                this._unregisterResizeObserver();
            }),
            (o.prototype.render = function () {
              var t = this.state.viewport,
                o = t.width > 0 && t.height > 0 ? t : void 0;
              return s.createElement(
                "div",
                {
                  className: "ms-Viewport",
                  ref: this._root,
                  style: { minWidth: 1, minHeight: 1 },
                },
                s.createElement(
                  e,
                  Object(r.a)(
                    { ref: this._updateComposedComponentRef, viewport: o },
                    this.props
                  )
                )
              );
            }),
            (o.prototype.forceUpdate = function () {
              this._updateViewport(!0);
            }),
            (o.prototype._onAsyncResize = function () {
              this._updateViewport();
            }),
            (o.prototype._isResizeObserverAvailable = function () {
              var e = Object(ve.a)(this._root.current);
              return e && e.ResizeObserver;
            }),
            o
          );
        })(dt.a);
      }
      var ht = o(260),
        gt = Object(a.a)(),
        mt = function (e) {
          var t = e.selection,
            o = e.ariaLabelForListHeader,
            i = e.ariaLabelForSelectAllCheckbox,
            n = e.ariaLabelForSelectionColumn,
            a = e.className,
            u = e.checkboxVisibility,
            h = e.compact,
            g = e.constrainMode,
            f = e.dragDropEvents,
            _ = e.groups,
            y = e.groupProps,
            S = e.indentWidth,
            x = e.items,
            D = e.isPlaceholderData,
            k = e.isHeaderVisible,
            I = e.layoutMode,
            R = e.onItemInvoked,
            w = e.onItemContextMenu,
            O = e.onColumnHeaderClick,
            H = e.onColumnHeaderContextMenu,
            P = e.selectionMode,
            j = void 0 === P ? t.mode : P,
            E = e.selectionPreservedOnEmptyClick,
            A = e.selectionZoneProps,
            N = e.ariaLabel,
            T = e.ariaLabelForGrid,
            z = e.rowElementEventMap,
            L = e.shouldApplyApplicationRole,
            W = void 0 !== L && L,
            G = e.getKey,
            B = e.listProps,
            V = e.usePageCache,
            K = e.onShouldVirtualize,
            q = e.viewport,
            Z = e.minimumPixelsForDrag,
            Y = e.getGroupHeight,
            J = e.styles,
            Q = e.theme,
            $ = e.cellStyleProps,
            ee = void 0 === $ ? M : $,
            te = e.onRenderCheckbox,
            oe = e.useFastIcons,
            ie = e.dragDropHelper,
            ne = e.adjustedColumns,
            re = e.isCollapsed,
            se = e.isSizing,
            ae = e.isSomeGroupExpanded,
            ce = e.version,
            de = e.rootRef,
            pe = e.listRef,
            ue = e.focusZoneRef,
            he = e.columnReorderOptions,
            ge = e.groupedListRef,
            me = e.headerRef,
            fe = e.onGroupExpandStateChanged,
            _e = e.onColumnIsSizingChanged,
            be = e.onRowDidMount,
            ve = e.onRowWillUnmount,
            Ce = e.disableSelectionZone,
            ye = e.onColumnResized,
            xe = e.onColumnAutoResized,
            De = e.onToggleCollapse,
            ke = e.onActiveRowChanged,
            Ie = e.onBlur,
            Re = e.rowElementEventMap,
            we = e.onRenderMissingItem,
            Oe = e.onRenderItemColumn,
            He = e.getCellValueKey,
            Pe = e.getRowAriaLabel,
            je = e.getRowAriaDescribedBy,
            Ee = e.checkButtonAriaLabel,
            Me = e.checkButtonGroupAriaLabel,
            Ae = e.checkboxCellClassName,
            Ne = e.useReducedRowRenderer,
            Te = e.enableUpdateAnimations,
            ze = e.enterModalSelectionOnTouch,
            Le = e.onRenderDefaultRow,
            Fe = e.selectionZoneRef,
            We = e.role ? e.role : "grid",
            Ge = Object(b.a)("row"),
            Be = (function (e) {
              var t = 0,
                o = e;
              for (; o && o.length > 0; ) t++, (o = o[0].children);
              return t;
            })(_),
            Ve = s.useMemo(
              function () {
                return Object(r.a)(
                  {
                    renderedWindowsAhead: se ? 0 : 2,
                    renderedWindowsBehind: se ? 0 : 2,
                    getKey: G,
                    version: ce,
                  },
                  B
                );
              },
              [se, G, ce, B]
            ),
            Ue = U.none;
          if ((j === X.b.single && (Ue = U.hidden), j === X.b.multiple)) {
            var Ke =
              y && y.headerProps && y.headerProps.isCollapsedGroupSelectVisible;
            void 0 === Ke && (Ke = !0),
              (Ue = Ke || !_ || ae ? U.visible : U.hidden);
          }
          u === m.a.hidden && (Ue = U.none);
          var Xe = s.useCallback(function (e) {
              return s.createElement(le, Object(r.a)({}, e));
            }, []),
            qe = s.useCallback(function () {
              return null;
            }, []),
            Ze = e.onRenderDetailsHeader,
            Ye = s.useMemo(
              function () {
                return Ze ? Object(F.a)(Ze, Xe) : Xe;
              },
              [Ze, Xe]
            ),
            Je = e.onRenderDetailsFooter,
            Qe = s.useMemo(
              function () {
                return Je ? Object(F.a)(Je, qe) : qe;
              },
              [Je, qe]
            ),
            $e = s.useMemo(
              function () {
                return {
                  columns: ne,
                  groupNestingDepth: Be,
                  selection: t,
                  selectionMode: j,
                  viewport: q,
                  checkboxVisibility: u,
                  indentWidth: S,
                  cellStyleProps: ee,
                };
              },
              [ne, Be, t, j, q, u, S, ee]
            ),
            et = he && he.onDragEnd,
            tt = s.useCallback(
              function (e, t) {
                var o = e.dropLocation,
                  i = m.c.outside;
                if (et) {
                  if (o && o !== m.c.header) i = o;
                  else if (de.current) {
                    var n = de.current.getBoundingClientRect();
                    t.clientX > n.left &&
                      t.clientX < n.right &&
                      t.clientY > n.top &&
                      t.clientY < n.bottom &&
                      (i = m.c.surface);
                  }
                  et(i);
                }
              },
              [et, de]
            ),
            it = s.useMemo(
              function () {
                if (he)
                  return Object(r.a)(Object(r.a)({}, he), {
                    onColumnDragEnd: tt,
                  });
              },
              [he, tt]
            ),
            nt =
              (k ? 1 : 0) +
              (function (e) {
                var t = 0;
                if (e)
                  for (var o = Object(r.e)(e), i = void 0; o && o.length > 0; )
                    ++t,
                      (i = o.pop()) &&
                        i.children &&
                        o.push.apply(o, i.children);
                return t;
              })(_) +
              (x ? x.length : 0),
            rt = (Ue !== U.none ? 1 : 0) + (ne ? ne.length : 0) + (_ ? 1 : 0),
            st = s.useMemo(
              function () {
                return gt(J, {
                  theme: Q,
                  compact: h,
                  isFixed: I === m.e.fixedColumns,
                  isHorizontalConstrained: g === m.d.horizontalConstrained,
                  className: a,
                });
              },
              [J, Q, h, I, g, a]
            ),
            at = y && y.onRenderFooter,
            lt = s.useMemo(
              function () {
                return at
                  ? function (e, o) {
                      return at(
                        Object(r.a)(Object(r.a)({}, e), {
                          columns: ne,
                          groupNestingDepth: Be,
                          indentWidth: S,
                          selection: t,
                          selectionMode: j,
                          viewport: q,
                          checkboxVisibility: u,
                          cellStyleProps: ee,
                        }),
                        o
                      );
                    }
                  : void 0;
              },
              [at, ne, Be, S, t, j, q, u, ee]
            ),
            dt = y && y.onRenderHeader,
            pt = s.useMemo(
              function () {
                return dt
                  ? function (e, o) {
                      var i = e.ariaPosInSet,
                        n = e.ariaSetSize;
                      return dt(
                        Object(r.a)(Object(r.a)({}, e), {
                          columns: ne,
                          groupNestingDepth: Be,
                          indentWidth: S,
                          selection: t,
                          selectionMode: j,
                          viewport: q,
                          checkboxVisibility: u,
                          cellStyleProps: ee,
                          ariaColSpan: ne.length,
                          ariaPosInSet: void 0,
                          ariaSetSize: void 0,
                          ariaRowCount: n ? n + (k ? 1 : 0) : void 0,
                          ariaRowIndex: i ? i + (k ? 1 : 0) : void 0,
                        }),
                        o
                      );
                    }
                  : function (e, t) {
                      var o = e.ariaPosInSet,
                        i = e.ariaSetSize;
                      return t(
                        Object(r.a)(Object(r.a)({}, e), {
                          ariaColSpan: ne.length,
                          ariaPosInSet: void 0,
                          ariaSetSize: void 0,
                          ariaRowCount: i ? i + (k ? 1 : 0) : void 0,
                          ariaRowIndex: o ? o + (k ? 1 : 0) : void 0,
                        })
                      );
                    };
              },
              [dt, ne, Be, S, k, t, j, q, u, ee]
            ),
            ut = s.useMemo(
              function () {
                var e, t, o;
                return Object(r.a)(Object(r.a)({}, y), {
                  role: "grid" === We ? "rowgroup" : "presentation",
                  onRenderFooter: lt,
                  onRenderHeader: pt,
                  headerProps: Object(r.a)(
                    Object(r.a)(
                      {},
                      null === (e = y) || void 0 === e ? void 0 : e.headerProps
                    ),
                    {
                      selectAllButtonProps: Object(r.a)(
                        { "aria-label": Me },
                        null ===
                          (o =
                            null === (t = y) || void 0 === t
                              ? void 0
                              : t.headerProps) || void 0 === o
                          ? void 0
                          : o.selectAllButtonProps
                      ),
                    }
                  ),
                });
              },
              [y, lt, pt, Me, We]
            ),
            mt = Object(ht.a)(function () {
              return Object(l.b)(function (e) {
                var t = 0;
                return (
                  e.forEach(function (e) {
                    return (t += e.calculatedWidth || e.minWidth);
                  }),
                  t
                );
              });
            }),
            ft = y && y.collapseAllVisibility,
            _t = s.useMemo(
              function () {
                return mt(ne);
              },
              [ne, mt]
            ),
            bt = s.useCallback(
              function (o, i, n) {
                var r = e.onRenderRow ? Object(F.a)(e.onRenderRow, Le) : Le,
                  s = {
                    item: i,
                    itemIndex: n,
                    flatIndexOffset: k ? 2 : 1,
                    compact: h,
                    columns: ne,
                    groupNestingDepth: o,
                    id: Ge + "-" + n,
                    selectionMode: j,
                    selection: t,
                    onDidMount: be,
                    onWillUnmount: ve,
                    onRenderItemColumn: Oe,
                    getCellValueKey: He,
                    eventsToRegister: Re,
                    dragDropEvents: f,
                    dragDropHelper: ie,
                    viewport: q,
                    checkboxVisibility: u,
                    collapseAllVisibility: ft,
                    getRowAriaLabel: Pe,
                    getRowAriaDescribedBy: je,
                    checkButtonAriaLabel: Ee,
                    checkboxCellClassName: Ae,
                    useReducedRowRenderer: Ne,
                    indentWidth: S,
                    cellStyleProps: ee,
                    onRenderDetailsCheckbox: te,
                    enableUpdateAnimations: Te,
                    rowWidth: _t,
                    useFastIcons: oe,
                    role: "grid" === We ? void 0 : "presentation",
                  };
                return i ? r(s) : we ? we(n, s) : null;
              },
              [
                h,
                ne,
                j,
                t,
                Ge,
                be,
                ve,
                Oe,
                He,
                Re,
                f,
                ie,
                q,
                u,
                ft,
                Pe,
                je,
                k,
                Ee,
                Ae,
                Ne,
                S,
                ee,
                te,
                Te,
                oe,
                Le,
                we,
                e.onRenderRow,
                _t,
                We,
              ]
            ),
            vt = s.useCallback(
              function (e) {
                return function (t, o) {
                  return bt(e, t, o);
                };
              },
              [bt]
            ),
            Ct = s.useCallback(
              function (e) {
                return e.which === Object(c.b)(d.a.right, Q);
              },
              [Q]
            ),
            yt = {
              componentRef: ue,
              className: st.focusZone,
              direction: C.a.vertical,
              shouldEnterInnerZone: Ct,
              onActiveElementChanged: ke,
              shouldRaiseClicks: !1,
              onBlur: Ie,
            },
            St = _
              ? s.createElement(ct, {
                  focusZoneProps: yt,
                  componentRef: ge,
                  groups: _,
                  groupProps: ut,
                  items: x,
                  onRenderCell: bt,
                  role: "presentation",
                  selection: t,
                  selectionMode: u !== m.a.hidden ? j : X.b.none,
                  dragDropEvents: f,
                  dragDropHelper: ie,
                  eventsToRegister: z,
                  listProps: Ve,
                  onGroupExpandStateChanged: fe,
                  usePageCache: V,
                  onShouldVirtualize: K,
                  getGroupHeight: Y,
                  compact: h,
                })
              : s.createElement(
                  v.a,
                  Object(r.a)({}, yt),
                  s.createElement(
                    ot,
                    Object(r.a)(
                      {
                        ref: pe,
                        role: "presentation",
                        items: x,
                        onRenderCell: vt(0),
                        usePageCache: V,
                        onShouldVirtualize: K,
                      },
                      Ve
                    )
                  )
                ),
            xt = s.useCallback(
              function (e) {
                e.which === d.a.down &&
                  ue.current &&
                  ue.current.focus() &&
                  (0 === t.getSelectedIndices().length &&
                    t.setIndexSelected(0, !0, !1),
                  e.preventDefault(),
                  e.stopPropagation());
              },
              [t, ue]
            ),
            Dt = s.useCallback(
              function (e) {
                e.which !== d.a.up ||
                  e.altKey ||
                  (me.current &&
                    me.current.focus() &&
                    (e.preventDefault(), e.stopPropagation()));
              },
              [me]
            );
          return s.createElement(
            "div",
            Object(r.a)(
              {
                ref: de,
                className: st.root,
                "data-automationid": "DetailsList",
                "data-is-scrollable": "false",
                "aria-label": N,
              },
              W ? { role: "application" } : {}
            ),
            s.createElement(p.a, null),
            s.createElement(
              "div",
              {
                role: We,
                "aria-label": T,
                "aria-rowcount": D ? -1 : nt,
                "aria-colcount": rt,
                "aria-readonly": "true",
                "aria-busy": D,
              },
              s.createElement(
                "div",
                {
                  onKeyDown: xt,
                  role: "presentation",
                  className: st.headerWrapper,
                },
                k &&
                  Ye(
                    {
                      componentRef: me,
                      selectionMode: j,
                      layoutMode: I,
                      selection: t,
                      columns: ne,
                      onColumnClick: O,
                      onColumnContextMenu: H,
                      onColumnResized: ye,
                      onColumnIsSizingChanged: _e,
                      onColumnAutoResized: xe,
                      groupNestingDepth: Be,
                      isAllCollapsed: re,
                      onToggleCollapseAll: De,
                      ariaLabel: o,
                      ariaLabelForSelectAllCheckbox: i,
                      ariaLabelForSelectionColumn: n,
                      selectAllVisibility: Ue,
                      collapseAllVisibility: y && y.collapseAllVisibility,
                      viewport: q,
                      columnReorderProps: it,
                      minimumPixelsForDrag: Z,
                      cellStyleProps: ee,
                      checkboxVisibility: u,
                      indentWidth: S,
                      onRenderDetailsCheckbox: te,
                      rowWidth: mt(ne),
                      useFastIcons: oe,
                    },
                    Ye
                  )
              ),
              s.createElement(
                "div",
                {
                  onKeyDown: Dt,
                  role: "presentation",
                  className: st.contentWrapper,
                },
                Ce
                  ? St
                  : s.createElement(
                      Se,
                      Object(r.a)(
                        {
                          ref: Fe,
                          selection: t,
                          selectionPreservedOnEmptyClick: E,
                          selectionMode: j,
                          onItemInvoked: R,
                          onItemContextMenu: w,
                          enterModalOnTouch: ze,
                        },
                        A || {}
                      ),
                      St
                    )
              ),
              Qe(Object(r.a)({}, $e))
            )
          );
        },
        ft = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            return (
              (o._root = s.createRef()),
              (o._header = s.createRef()),
              (o._groupedList = s.createRef()),
              (o._list = s.createRef()),
              (o._focusZone = s.createRef()),
              (o._selectionZone = s.createRef()),
              (o._onRenderRow = function (e, t) {
                return s.createElement(_e, Object(r.a)({}, e));
              }),
              (o._getDerivedStateFromProps = function (e, t) {
                var i = o.props,
                  n = i.checkboxVisibility,
                  s = i.items,
                  a = i.setKey,
                  l = i.selectionMode,
                  c = void 0 === l ? o._selection.mode : l,
                  d = i.columns,
                  p = i.viewport,
                  u = i.compact,
                  h = i.dragDropEvents,
                  g = (o.props.groupProps || {}).isAllGroupsCollapsed,
                  m = void 0 === g ? void 0 : g,
                  f = (e.viewport && e.viewport.width) || 0,
                  _ = (p && p.width) || 0,
                  b = e.setKey !== a || void 0 === e.setKey,
                  v = !1;
                e.layoutMode !== o.props.layoutMode && (v = !0);
                var C = t;
                return (
                  b &&
                    ((o._initialFocusedIndex = e.initialFocusedIndex),
                    (C = Object(r.a)(Object(r.a)({}, C), {
                      focusedItemIndex:
                        void 0 !== o._initialFocusedIndex
                          ? o._initialFocusedIndex
                          : -1,
                    }))),
                  o.props.disableSelectionZone ||
                    e.items === s ||
                    o._selection.setItems(e.items, b),
                  (e.checkboxVisibility === n &&
                    e.columns === d &&
                    f === _ &&
                    e.compact === u) ||
                    (v = !0),
                  (C = Object(r.a)(
                    Object(r.a)({}, C),
                    o._adjustColumns(e, C, !0)
                  )),
                  e.selectionMode !== c && (v = !0),
                  void 0 === m &&
                    e.groupProps &&
                    void 0 !== e.groupProps.isAllGroupsCollapsed &&
                    (C = Object(r.a)(Object(r.a)({}, C), {
                      isCollapsed: e.groupProps.isAllGroupsCollapsed,
                      isSomeGroupExpanded: !e.groupProps.isAllGroupsCollapsed,
                    })),
                  e.dragDropEvents !== h &&
                    (o._dragDropHelper && o._dragDropHelper.dispose(),
                    (o._dragDropHelper = e.dragDropEvents
                      ? new Z({
                          selection: o._selection,
                          minimumPixelsForDrag: e.minimumPixelsForDrag,
                        })
                      : void 0),
                    (v = !0)),
                  v && (C = Object(r.a)(Object(r.a)({}, C), { version: {} })),
                  C
                );
              }),
              (o._onGroupExpandStateChanged = function (e) {
                o.setState({ isSomeGroupExpanded: e });
              }),
              (o._onColumnIsSizingChanged = function (e, t) {
                o.setState({ isSizing: t });
              }),
              (o._onRowDidMount = function (e) {
                var t = e.props,
                  i = t.item,
                  n = t.itemIndex,
                  r = o._getItemKey(i, n);
                (o._activeRows[r] = e), o._setFocusToRowIfPending(e);
                var s = o.props.onRowDidMount;
                s && s(i, n);
              }),
              (o._onRowWillUnmount = function (e) {
                var t = o.props.onRowWillUnmount,
                  i = e.props,
                  n = i.item,
                  r = i.itemIndex,
                  s = o._getItemKey(n, r);
                delete o._activeRows[s], t && t(n, r);
              }),
              (o._onToggleCollapse = function (e) {
                o.setState({ isCollapsed: e }),
                  o._groupedList.current &&
                    o._groupedList.current.toggleCollapseAll(e);
              }),
              (o._onColumnResized = function (e, t, i) {
                var n = Math.max(e.minWidth || 100, t);
                o.props.onColumnResize && o.props.onColumnResize(e, n, i),
                  o._rememberCalculatedWidth(e, n),
                  o.setState(
                    Object(r.a)(
                      Object(r.a)(
                        {},
                        o._adjustColumns(o.props, o.state, !0, i)
                      ),
                      { version: {} }
                    )
                  );
              }),
              (o._onColumnAutoResized = function (e, t) {
                var i = 0,
                  n = 0,
                  r = Object.keys(o._activeRows).length;
                for (var s in o._activeRows) {
                  if (o._activeRows.hasOwnProperty(s))
                    o._activeRows[s].measureCell(t, function (s) {
                      (i = Math.max(i, s)),
                        ++n === r && o._onColumnResized(e, i, t);
                    });
                }
              }),
              (o._onActiveRowChanged = function (e, t) {
                var i = o.props,
                  n = i.items,
                  r = i.onActiveItemChanged;
                if (e && e.getAttribute("data-item-index")) {
                  var s = Number(e.getAttribute("data-item-index"));
                  s >= 0 &&
                    (r && r(n[s], s, t), o.setState({ focusedItemIndex: s }));
                }
              }),
              (o._onBlur = function (e) {
                o.setState({ focusedItemIndex: -1 });
              }),
              Object(u.a)(o),
              (o._async = new h.a(o)),
              (o._activeRows = {}),
              (o._columnOverrides = {}),
              (o.state = {
                focusedItemIndex: -1,
                lastWidth: 0,
                adjustedColumns: o._getAdjustedColumns(t, void 0),
                isSizing: !1,
                isCollapsed: t.groupProps && t.groupProps.isAllGroupsCollapsed,
                isSomeGroupExpanded:
                  t.groupProps && !t.groupProps.isAllGroupsCollapsed,
                version: {},
                getDerivedStateFromProps: o._getDerivedStateFromProps,
              }),
              (o._selection =
                t.selection ||
                new xe.a({
                  onSelectionChanged: void 0,
                  getKey: t.getKey,
                  selectionMode: t.selectionMode,
                })),
              o.props.disableSelectionZone ||
                o._selection.setItems(t.items, !1),
              (o._dragDropHelper = t.dragDropEvents
                ? new Z({
                    selection: o._selection,
                    minimumPixelsForDrag: t.minimumPixelsForDrag,
                  })
                : void 0),
              (o._initialFocusedIndex = t.initialFocusedIndex),
              o
            );
          }
          return (
            Object(r.c)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return t.getDerivedStateFromProps(e, t);
            }),
            (t.prototype.scrollToIndex = function (e, t, o) {
              this._list.current && this._list.current.scrollToIndex(e, t, o),
                this._groupedList.current &&
                  this._groupedList.current.scrollToIndex(e, t, o);
            }),
            (t.prototype.focusIndex = function (e, t, o, i) {
              void 0 === t && (t = !1);
              var n = this.props.items[e];
              if (n) {
                this.scrollToIndex(e, o, i);
                var r = this._getItemKey(n, e),
                  s = this._activeRows[r];
                s && this._setFocusToRow(s, t);
              }
            }),
            (t.prototype.getStartItemIndexInView = function () {
              return this._list && this._list.current
                ? this._list.current.getStartItemIndexInView()
                : this._groupedList && this._groupedList.current
                ? this._groupedList.current.getStartItemIndexInView()
                : 0;
            }),
            (t.prototype.componentWillUnmount = function () {
              this._dragDropHelper && this._dragDropHelper.dispose(),
                this._async.dispose();
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              if (
                (this._notifyColumnsResized(),
                void 0 !== this._initialFocusedIndex) &&
                (r = this.props.items[this._initialFocusedIndex])
              ) {
                var o = this._getItemKey(r, this._initialFocusedIndex);
                (i = this._activeRows[o]) && this._setFocusToRowIfPending(i);
              }
              if (
                this.props.items !== e.items &&
                this.props.items.length > 0 &&
                -1 !== this.state.focusedItemIndex &&
                !Object(g.a)(this._root.current, document.activeElement, !1)
              ) {
                var i,
                  n =
                    this.state.focusedItemIndex < this.props.items.length
                      ? this.state.focusedItemIndex
                      : this.props.items.length - 1,
                  r = this.props.items[n];
                o = this._getItemKey(r, this.state.focusedItemIndex);
                (i = this._activeRows[o])
                  ? this._setFocusToRow(i)
                  : (this._initialFocusedIndex = n);
              }
              this.props.onDidUpdate && this.props.onDidUpdate(this);
            }),
            (t.prototype.render = function () {
              return s.createElement(
                mt,
                Object(r.a)({}, this.props, this.state, {
                  selection: this._selection,
                  dragDropHelper: this._dragDropHelper,
                  rootRef: this._root,
                  listRef: this._list,
                  groupedListRef: this._groupedList,
                  focusZoneRef: this._focusZone,
                  headerRef: this._header,
                  selectionZoneRef: this._selectionZone,
                  onGroupExpandStateChanged: this._onGroupExpandStateChanged,
                  onColumnIsSizingChanged: this._onColumnIsSizingChanged,
                  onRowDidMount: this._onRowDidMount,
                  onRowWillUnmount: this._onRowWillUnmount,
                  onColumnResized: this._onColumnResized,
                  onColumnAutoResized: this._onColumnAutoResized,
                  onToggleCollapse: this._onToggleCollapse,
                  onActiveRowChanged: this._onActiveRowChanged,
                  onBlur: this._onBlur,
                  onRenderDefaultRow: this._onRenderRow,
                })
              );
            }),
            (t.prototype.forceUpdate = function () {
              e.prototype.forceUpdate.call(this), this._forceListUpdates();
            }),
            (t.prototype._getGroupNestingDepth = function () {
              for (var e = 0, t = this.props.groups; t && t.length > 0; )
                e++, (t = t[0].children);
              return e;
            }),
            (t.prototype._setFocusToRowIfPending = function (e) {
              var t = e.props.itemIndex;
              void 0 !== this._initialFocusedIndex &&
                t === this._initialFocusedIndex &&
                (this._setFocusToRow(e), delete this._initialFocusedIndex);
            }),
            (t.prototype._setFocusToRow = function (e, t) {
              void 0 === t && (t = !1),
                this._selectionZone.current &&
                  this._selectionZone.current.ignoreNextFocus(),
                this._async.setTimeout(function () {
                  e.focus(t);
                }, 0);
            }),
            (t.prototype._forceListUpdates = function () {
              this._groupedList.current &&
                this._groupedList.current.forceUpdate(),
                this._list.current && this._list.current.forceUpdate();
            }),
            (t.prototype._notifyColumnsResized = function () {
              this.state.adjustedColumns.forEach(function (e) {
                e.onColumnResize && e.onColumnResize(e.currentWidth);
              });
            }),
            (t.prototype._adjustColumns = function (e, t, o, i) {
              var n = this._getAdjustedColumns(e, t, o, i),
                s = this.props.viewport,
                a = s && s.width ? s.width : 0;
              return Object(r.a)(Object(r.a)({}, t), {
                adjustedColumns: n,
                lastWidth: a,
              });
            }),
            (t.prototype._getAdjustedColumns = function (e, t, o, i) {
              var n,
                r = this,
                s = e.items,
                a = e.layoutMode,
                l = e.selectionMode,
                c = e.viewport,
                d = c && c.width ? c.width : 0,
                p = e.columns,
                u = this.props ? this.props.columns : [],
                h = t ? t.lastWidth : -1,
                g = t ? t.lastSelectionMode : void 0;
              return o || h !== d || g !== l || (u && p !== u)
                ? ((p =
                    p ||
                    (function (e, t, o, i, n, r, s) {
                      var a = [];
                      if (e && e.length) {
                        var l = e[0];
                        for (var c in l)
                          l.hasOwnProperty(c) &&
                            a.push({
                              key: c,
                              name: c,
                              fieldName: c,
                              minWidth: 100,
                              maxWidth: 300,
                              isCollapsable: !!a.length,
                              isCollapsible: !!a.length,
                              isMultiline: void 0 !== s && s,
                              isSorted: i === c,
                              isSortedDescending: !!n,
                              isRowHeader: !1,
                              columnActionsMode: m.b.clickable,
                              isResizable: t,
                              onColumnClick: o,
                              isGrouped: r === c,
                            });
                      }
                      return a;
                    })(s, !0)),
                  a === m.e.fixedColumns
                    ? (n = this._getFixedColumns(p, d, e)).forEach(function (
                        e
                      ) {
                        r._rememberCalculatedWidth(e, e.calculatedWidth);
                      })
                    : (n = this._getJustifiedColumns(p, d, e)).forEach(
                        function (e) {
                          r._getColumnOverride(e.key).currentWidth =
                            e.calculatedWidth;
                        }
                      ),
                  n)
                : p || [];
            }),
            (t.prototype._getFixedColumns = function (e, t, o) {
              var i = this,
                n = this.props,
                s = n.selectionMode,
                a = void 0 === s ? this._selection.mode : s,
                l = n.checkboxVisibility,
                c = n.flexMargin,
                d = n.skipViewportMeasures,
                p = t - (c || 0),
                u = 0;
              e.forEach(function (e) {
                d || !e.flexGrow
                  ? (p -= e.maxWidth || e.minWidth || 100)
                  : ((p -= e.minWidth || 100), (u += e.flexGrow)),
                  (p -= _t(e, o, !0));
              });
              var h = a !== X.b.none && l !== m.a.hidden ? 48 : 0,
                g = 36 * this._getGroupNestingDepth(),
                f = (p -= h + g) / u;
              return (
                d ||
                  e.forEach(function (e) {
                    var t = Object(r.a)(
                      Object(r.a)({}, e),
                      i._columnOverrides[e.key]
                    );
                    if (t.flexGrow && t.maxWidth) {
                      var o = t.flexGrow * f + t.minWidth,
                        n = o - t.maxWidth;
                      n > 0 &&
                        ((p += n), (u -= (n / (o - t.minWidth)) * t.flexGrow));
                    }
                  }),
                (f = p > 0 ? p / u : 0),
                e.map(function (e) {
                  var t = Object(r.a)(
                    Object(r.a)({}, e),
                    i._columnOverrides[e.key]
                  );
                  return (
                    (!d && t.flexGrow && p <= 0) ||
                      t.calculatedWidth ||
                      (!d && t.flexGrow
                        ? ((t.calculatedWidth = t.minWidth + t.flexGrow * f),
                          (t.calculatedWidth = Math.min(
                            t.calculatedWidth,
                            t.maxWidth || Number.MAX_VALUE
                          )))
                        : (t.calculatedWidth =
                            t.maxWidth || t.minWidth || 100)),
                    t
                  );
                })
              );
            }),
            (t.prototype._getJustifiedColumns = function (e, t, o) {
              var i = this,
                n = o.selectionMode,
                s = void 0 === n ? this._selection.mode : n,
                a = o.checkboxVisibility,
                l = s !== X.b.none && a !== m.a.hidden ? 48 : 0,
                c = 36 * this._getGroupNestingDepth(),
                d = 0,
                p = 0,
                u = t - (l + c),
                h = e.map(function (e, t) {
                  var n = Object(r.a)(Object(r.a)({}, e), {
                      calculatedWidth: e.minWidth || 100,
                    }),
                    s = Object(r.a)(
                      Object(r.a)({}, n),
                      i._columnOverrides[e.key]
                    );
                  return (
                    n.isCollapsible || n.isCollapsable || (p += _t(n, o)),
                    (d += _t(s, o)),
                    s
                  );
                });
              if (p > u) return h;
              for (var g = h.length - 1; g >= 0 && d > u; ) {
                var f = (C = h[g]).minWidth || 100,
                  _ = d - u;
                if (
                  C.calculatedWidth - f >= _ ||
                  (!C.isCollapsible && !C.isCollapsable)
                ) {
                  var b = C.calculatedWidth;
                  (C.calculatedWidth = Math.max(C.calculatedWidth - _, f)),
                    (d -= b - C.calculatedWidth);
                } else (d -= _t(C, o)), h.splice(g, 1);
                g--;
              }
              for (var v = 0; v < h.length && d < u; v++) {
                var C = h[v],
                  y = v === h.length - 1,
                  S = this._columnOverrides[C.key];
                if (!S || !S.calculatedWidth || y) {
                  var x = u - d,
                    D = void 0;
                  if (y) D = x;
                  else {
                    var k = C.maxWidth;
                    f = C.minWidth || k || 100;
                    D = k ? Math.min(x, k - f) : x;
                  }
                  (C.calculatedWidth = C.calculatedWidth + D), (d += D);
                }
              }
              return h;
            }),
            (t.prototype._rememberCalculatedWidth = function (e, t) {
              var o = this._getColumnOverride(e.key);
              (o.calculatedWidth = t), (o.currentWidth = t);
            }),
            (t.prototype._getColumnOverride = function (e) {
              return (this._columnOverrides[e] =
                this._columnOverrides[e] || {});
            }),
            (t.prototype._getItemKey = function (e, t) {
              var o = this.props.getKey,
                i = void 0;
              return e && (i = e.key), o && (i = o(e, t)), i || (i = t), i;
            }),
            (t.defaultProps = {
              layoutMode: m.e.justified,
              selectionMode: X.b.multiple,
              constrainMode: m.d.horizontalConstrained,
              checkboxVisibility: m.a.onHover,
              isHeaderVisible: !0,
              compact: !1,
              useFastIcons: !0,
            }),
            (t = Object(r.b)([ut], t))
          );
        })(s.Component);
      function _t(e, t, o) {
        var i = t.cellStyleProps,
          n = void 0 === i ? M : i;
        return (
          (o ? 0 : e.calculatedWidth) +
          n.cellLeftPadding +
          n.cellRightPadding +
          (e.isPadded ? n.cellExtraRightPadding : 0)
        );
      }
      var bt = {
          root: "ms-DetailsList",
          compact: "ms-DetailsList--Compact",
          contentWrapper: "ms-DetailsList-contentWrapper",
          headerWrapper: "ms-DetailsList-headerWrapper",
          isFixed: "is-fixed",
          isHorizontalConstrained: "is-horizontalConstrained",
          listCell: "ms-List-cell",
        },
        vt = Object(n.a)(
          ft,
          function (e) {
            var t,
              o,
              i = e.theme,
              n = e.className,
              r = e.isHorizontalConstrained,
              s = e.compact,
              a = e.isFixed,
              l = i.semanticColors,
              c = Object(O.v)(bt, i);
            return {
              root: [
                c.root,
                i.fonts.small,
                {
                  position: "relative",
                  color: l.listText,
                  selectors:
                    ((t = {}),
                    (t["& ." + c.listCell] = {
                      minHeight: 38,
                      wordBreak: "break-word",
                    }),
                    t),
                },
                a && c.isFixed,
                s && [
                  c.compact,
                  {
                    selectors:
                      ((o = {}), (o["." + c.listCell] = { minHeight: 32 }), o),
                  },
                ],
                r && [
                  c.isHorizontalConstrained,
                  {
                    overflowX: "auto",
                    overflowY: "visible",
                    WebkitOverflowScrolling: "touch",
                  },
                ],
                n,
              ],
              focusZone: [
                { display: "inline-block", minWidth: "100%", minHeight: 1 },
              ],
              headerWrapper: c.headerWrapper,
              contentWrapper: c.contentWrapper,
            };
          },
          void 0,
          { scope: "DetailsList" }
        );
    },
    516: function (e, t, o) {
      "use strict";
      o.d(t, "a", function () {
        return _;
      });
      var i = o(279),
        n = o(1),
        r = o(0),
        s = o(252),
        a = o(148),
        l = o(225),
        c = o(469),
        d = (function () {
          function e(e) {
            (this._events = new a.a(this)),
              (this._scrollableParent = Object(l.e)(e)),
              (this._incrementScroll = this._incrementScroll.bind(this)),
              (this._scrollRect = Object(c.a)(this._scrollableParent)),
              this._scrollableParent === window &&
                (this._scrollableParent = document.body),
              this._scrollableParent &&
                (this._events.on(window, "mousemove", this._onMouseMove, !0),
                this._events.on(window, "touchmove", this._onTouchMove, !0));
          }
          return (
            (e.prototype.dispose = function () {
              this._events.dispose(), this._stopScroll();
            }),
            (e.prototype._onMouseMove = function (e) {
              this._computeScrollVelocity(e);
            }),
            (e.prototype._onTouchMove = function (e) {
              e.touches.length > 0 && this._computeScrollVelocity(e);
            }),
            (e.prototype._computeScrollVelocity = function (e) {
              if (this._scrollRect) {
                var t, o;
                "clientX" in e
                  ? ((t = e.clientX), (o = e.clientY))
                  : ((t = e.touches[0].clientX), (o = e.touches[0].clientY));
                var i,
                  n,
                  r,
                  s = this._scrollRect.top,
                  a = this._scrollRect.left,
                  l = s + this._scrollRect.height - 100,
                  c = a + this._scrollRect.width - 100;
                o < s + 100 || o > l
                  ? ((n = o), (i = s), (r = l), (this._isVerticalScroll = !0))
                  : ((n = t), (i = a), (r = c), (this._isVerticalScroll = !1)),
                  (this._scrollVelocity =
                    n < i + 100
                      ? Math.max(-15, ((100 - (n - i)) / 100) * -15)
                      : n > r
                      ? Math.min(15, ((n - r) / 100) * 15)
                      : 0),
                  this._scrollVelocity
                    ? this._startScroll()
                    : this._stopScroll();
              }
            }),
            (e.prototype._startScroll = function () {
              this._timeoutId || this._incrementScroll();
            }),
            (e.prototype._incrementScroll = function () {
              this._scrollableParent &&
                (this._isVerticalScroll
                  ? (this._scrollableParent.scrollTop += Math.round(
                      this._scrollVelocity
                    ))
                  : (this._scrollableParent.scrollLeft += Math.round(
                      this._scrollVelocity
                    ))),
                (this._timeoutId = setTimeout(this._incrementScroll, 16));
            }),
            (e.prototype._stopScroll = function () {
              this._timeoutId &&
                (clearTimeout(this._timeoutId), delete this._timeoutId);
            }),
            e
          );
        })(),
        p = o(254),
        u = o(132),
        h = o(163);
      var g = Object(s.a)(),
        m = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            return (
              (o._root = r.createRef()),
              (o._onMouseDown = function (e) {
                var t = o.props,
                  i = t.isEnabled,
                  n = t.onShouldStartSelection;
                o._isMouseEventOnScrollbar(e) ||
                  o._isInSelectionToggle(e) ||
                  o._isTouch ||
                  !i ||
                  o._isDragStartInSelection(e) ||
                  (n && !n(e)) ||
                  (o._scrollableSurface &&
                    0 === e.button &&
                    o._root.current &&
                    ((o._selectedIndicies = {}),
                    (o._preservedIndicies = void 0),
                    o._events.on(window, "mousemove", o._onAsyncMouseMove, !0),
                    o._events.on(
                      o._scrollableParent,
                      "scroll",
                      o._onAsyncMouseMove
                    ),
                    o._events.on(window, "click", o._onMouseUp, !0),
                    (o._autoScroll = new d(o._root.current)),
                    (o._scrollTop = o._scrollableSurface.scrollTop),
                    (o._scrollLeft = o._scrollableSurface.scrollLeft),
                    (o._rootRect = o._root.current.getBoundingClientRect()),
                    o._onMouseMove(e)));
              }),
              (o._onTouchStart = function (e) {
                (o._isTouch = !0),
                  o._async.setTimeout(function () {
                    o._isTouch = !1;
                  }, 0);
              }),
              (o._onPointerDown = function (e) {
                "touch" === e.pointerType &&
                  ((o._isTouch = !0),
                  o._async.setTimeout(function () {
                    o._isTouch = !1;
                  }, 0));
              }),
              Object(p.a)(o),
              (o._async = new u.a(o)),
              (o._events = new a.a(o)),
              (o.state = { dragRect: void 0 }),
              o
            );
          }
          return (
            Object(n.c)(t, e),
            (t.prototype.componentDidMount = function () {
              (this._scrollableParent = Object(l.e)(this._root.current)),
                (this._scrollableSurface =
                  this._scrollableParent === window
                    ? document.body
                    : this._scrollableParent);
              var e = this.props.isDraggingConstrainedToRoot
                ? this._root.current
                : this._scrollableSurface;
              this._events.on(e, "mousedown", this._onMouseDown),
                this._events.on(e, "touchstart", this._onTouchStart, !0),
                this._events.on(e, "pointerdown", this._onPointerDown, !0);
            }),
            (t.prototype.componentWillUnmount = function () {
              this._autoScroll && this._autoScroll.dispose(),
                delete this._scrollableParent,
                delete this._scrollableSurface,
                this._events.dispose(),
                this._async.dispose();
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.rootProps,
                o = e.children,
                i = e.theme,
                s = e.className,
                a = e.styles,
                l = this.state.dragRect,
                c = g(a, { theme: i, className: s });
              return r.createElement(
                "div",
                Object(n.a)({}, t, { className: c.root, ref: this._root }),
                o,
                l && r.createElement("div", { className: c.dragMask }),
                l &&
                  r.createElement(
                    "div",
                    { className: c.box, style: l },
                    r.createElement("div", { className: c.boxFill })
                  )
              );
            }),
            (t.prototype._isMouseEventOnScrollbar = function (e) {
              var t = e.target,
                o = t.offsetWidth - t.clientWidth,
                i = t.offsetHeight - t.clientHeight;
              if (o || i) {
                var n = t.getBoundingClientRect();
                if (Object(h.a)(this.props.theme)) {
                  if (e.clientX < n.left + o) return !0;
                } else if (e.clientX > n.left + t.clientWidth) return !0;
                if (e.clientY > n.top + t.clientHeight) return !0;
              }
              return !1;
            }),
            (t.prototype._getRootRect = function () {
              return {
                left:
                  this._rootRect.left +
                  (this._scrollLeft - this._scrollableSurface.scrollLeft),
                top:
                  this._rootRect.top +
                  (this._scrollTop - this._scrollableSurface.scrollTop),
                width: this._rootRect.width,
                height: this._rootRect.height,
              };
            }),
            (t.prototype._onAsyncMouseMove = function (e) {
              var t = this;
              this._async.requestAnimationFrame(function () {
                t._onMouseMove(e);
              }),
                e.stopPropagation(),
                e.preventDefault();
            }),
            (t.prototype._onMouseMove = function (e) {
              if (this._autoScroll) {
                void 0 !== e.clientX && (this._lastMouseEvent = e);
                var t = this._getRootRect(),
                  o = { left: e.clientX - t.left, top: e.clientY - t.top };
                if (
                  (this._dragOrigin || (this._dragOrigin = o),
                  void 0 !== e.buttons && 0 === e.buttons)
                )
                  this._onMouseUp(e);
                else if (
                  this.state.dragRect ||
                  (function (e, t) {
                    var o = e.left || e.x || 0,
                      i = e.top || e.y || 0,
                      n = t.left || t.x || 0,
                      r = t.top || t.y || 0;
                    return Math.sqrt(Math.pow(o - n, 2) + Math.pow(i - r, 2));
                  })(this._dragOrigin, o) > 5
                ) {
                  if (!this.state.dragRect) {
                    var i = this.props.selection;
                    e.shiftKey || i.setAllSelected(!1),
                      (this._preservedIndicies =
                        i && i.getSelectedIndices && i.getSelectedIndices());
                  }
                  var n = this.props.isDraggingConstrainedToRoot
                      ? {
                          left: Math.max(
                            0,
                            Math.min(
                              t.width,
                              this._lastMouseEvent.clientX - t.left
                            )
                          ),
                          top: Math.max(
                            0,
                            Math.min(
                              t.height,
                              this._lastMouseEvent.clientY - t.top
                            )
                          ),
                        }
                      : {
                          left: this._lastMouseEvent.clientX - t.left,
                          top: this._lastMouseEvent.clientY - t.top,
                        },
                    r = {
                      left: Math.min(this._dragOrigin.left || 0, n.left),
                      top: Math.min(this._dragOrigin.top || 0, n.top),
                      width: Math.abs(n.left - (this._dragOrigin.left || 0)),
                      height: Math.abs(n.top - (this._dragOrigin.top || 0)),
                    };
                  this._evaluateSelection(r, t), this.setState({ dragRect: r });
                }
                return !1;
              }
            }),
            (t.prototype._onMouseUp = function (e) {
              this._events.off(window),
                this._events.off(this._scrollableParent, "scroll"),
                this._autoScroll && this._autoScroll.dispose(),
                (this._autoScroll =
                  this._dragOrigin =
                  this._lastMouseEvent =
                    void 0),
                (this._selectedIndicies = this._itemRectCache = void 0),
                this.state.dragRect &&
                  (this.setState({ dragRect: void 0 }),
                  e.preventDefault(),
                  e.stopPropagation());
            }),
            (t.prototype._isPointInRectangle = function (e, t) {
              return (
                !!t.top &&
                e.top < t.top &&
                e.bottom > t.top &&
                !!t.left &&
                e.left < t.left &&
                e.right > t.left
              );
            }),
            (t.prototype._isDragStartInSelection = function (e) {
              var t = this.props.selection;
              if (!this._root.current || (t && 0 === t.getSelectedCount()))
                return !1;
              for (
                var o = this._root.current.querySelectorAll(
                    "[data-selection-index]"
                  ),
                  i = 0;
                i < o.length;
                i++
              ) {
                var n = o[i],
                  r = Number(n.getAttribute("data-selection-index"));
                if (t.isIndexSelected(r)) {
                  var s = n.getBoundingClientRect();
                  if (
                    this._isPointInRectangle(s, {
                      left: e.clientX,
                      top: e.clientY,
                    })
                  )
                    return !0;
                }
              }
              return !1;
            }),
            (t.prototype._isInSelectionToggle = function (e) {
              for (var t = e.target; t && t !== this._root.current; ) {
                if ("true" === t.getAttribute("data-selection-toggle"))
                  return !0;
                t = t.parentElement;
              }
              return !1;
            }),
            (t.prototype._evaluateSelection = function (e, t) {
              if (e && this._root.current) {
                var o = this.props.selection,
                  i = this._root.current.querySelectorAll(
                    "[data-selection-index]"
                  );
                this._itemRectCache || (this._itemRectCache = {});
                for (var n = 0; n < i.length; n++) {
                  var r = i[n],
                    s = r.getAttribute("data-selection-index"),
                    a = this._itemRectCache[s];
                  a ||
                    ((a = {
                      left: (a = r.getBoundingClientRect()).left - t.left,
                      top: a.top - t.top,
                      width: a.width,
                      height: a.height,
                      right: a.left - t.left + a.width,
                      bottom: a.top - t.top + a.height,
                    }).width > 0 &&
                      a.height > 0 &&
                      (this._itemRectCache[s] = a)),
                    a.top < e.top + e.height &&
                    a.bottom > e.top &&
                    a.left < e.left + e.width &&
                    a.right > e.left
                      ? (this._selectedIndicies[s] = !0)
                      : delete this._selectedIndicies[s];
                }
                var l = this._allSelectedIndices || {};
                for (var s in ((this._allSelectedIndices = {}),
                this._selectedIndicies))
                  this._selectedIndicies.hasOwnProperty(s) &&
                    (this._allSelectedIndices[s] = !0);
                if (this._preservedIndicies)
                  for (
                    var c = 0, d = this._preservedIndicies;
                    c < d.length;
                    c++
                  ) {
                    s = d[c];
                    this._allSelectedIndices[s] = !0;
                  }
                var p = !1;
                for (var s in this._allSelectedIndices)
                  if (this._allSelectedIndices[s] !== l[s]) {
                    p = !0;
                    break;
                  }
                if (!p)
                  for (var s in l)
                    if (this._allSelectedIndices[s] !== l[s]) {
                      p = !0;
                      break;
                    }
                if (p) {
                  o.setChangeEvents(!1), o.setAllSelected(!1);
                  for (
                    var u = 0, h = Object.keys(this._allSelectedIndices);
                    u < h.length;
                    u++
                  ) {
                    s = h[u];
                    o.setIndexSelected(Number(s), !0, !1);
                  }
                  o.setChangeEvents(!0);
                }
              }
            }),
            (t.defaultProps = {
              rootTagName: "div",
              rootProps: {},
              isEnabled: !0,
            }),
            t
          );
        })(r.Component),
        f = o(5),
        _ = Object(i.a)(
          m,
          function (e) {
            var t,
              o,
              i,
              n = e.theme,
              r = e.className,
              s = n.palette;
            return {
              root: [r, { position: "relative", cursor: "default" }],
              dragMask: [
                {
                  position: "absolute",
                  background: "rgba(255, 0, 0, 0)",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  selectors:
                    ((t = {}),
                    (t[f.e] = {
                      background: "none",
                      backgroundColor: "transparent",
                    }),
                    t),
                },
              ],
              box: [
                {
                  position: "absolute",
                  boxSizing: "border-box",
                  border: "1px solid " + s.themePrimary,
                  pointerEvents: "none",
                  zIndex: 10,
                  selectors:
                    ((o = {}), (o[f.e] = { borderColor: "Highlight" }), o),
                },
              ],
              boxFill: [
                {
                  position: "absolute",
                  boxSizing: "border-box",
                  backgroundColor: s.themePrimary,
                  opacity: 0.1,
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  selectors:
                    ((i = {}),
                    (i[f.e] = {
                      background: "none",
                      backgroundColor: "transparent",
                    }),
                    i),
                },
              ],
            };
          },
          void 0,
          { scope: "MarqueeSelection" }
        );
    },
    524: function (e, t, o) {
      "use strict";
      o.d(t, "a", function () {
        return u;
      });
      var i = o(279),
        n = o(1),
        r = o(0),
        s = o(252),
        a = o(123),
        l = o(262),
        c = Object(s.a)(),
        d = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Object(n.c)(t, e),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.message,
                o = e.styles,
                i = e.as,
                s = void 0 === i ? "div" : i,
                d = e.className,
                p = c(o, { className: d });
              return r.createElement(
                s,
                Object(n.a)(
                  { role: "status", className: p.root },
                  Object(a.h)(this.props, a.f, ["className"])
                ),
                r.createElement(
                  l.a,
                  null,
                  r.createElement("div", { className: p.screenReaderText }, t)
                )
              );
            }),
            (t.defaultProps = { "aria-live": "polite" }),
            t
          );
        })(r.Component),
        p = o(5),
        u = Object(i.a)(d, function (e) {
          return { root: e.className, screenReaderText: p.C };
        });
    },
  },
]);
//# sourceMappingURL=13.c104db9f.chunk.js.map
