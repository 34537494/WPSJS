(this.webpackJsonpaidocx = this.webpackJsonpaidocx || []).push([
  [4],
  {
    503: function (e, t, o) {
      "use strict";
      o.d(t, "a", function () {
        return n;
      });
      var n = o(226).a;
    },
    511: function (e, t, o) {
      "use strict";
      o.d(t, "a", function () {
        return Re;
      });
      var n,
        r = o(279),
        i = o(1),
        a = o(0),
        s = o(252),
        l = o(159),
        d = o(32),
        c = o(33),
        p = o(213),
        u = o(254),
        m = o(253),
        h = o(123),
        b = o(261),
        f = o(169),
        v = o(257),
        _ = o(258),
        g = o(268),
        y = o(523),
        O = o(503),
        x = o(19);
      !(function (e) {
        (e[(e.Normal = 0)] = "Normal"),
          (e[(e.Divider = 1)] = "Divider"),
          (e[(e.Header = 2)] = "Header");
      })(n || (n = {}));
      var w,
        k = (function () {
          function e() {
            this._size = 0;
          }
          return (
            (e.prototype.updateOptions = function (e) {
              for (var t = [], o = 0, r = 0; r < e.length; r++)
                e[r].itemType === n.Divider || e[r].itemType === n.Header
                  ? t.push(r)
                  : e[r].hidden || o++;
              (this._size = o),
                (this._displayOnlyOptionsCache = t),
                (this._cachedOptions = Object(i.e)(e));
            }),
            Object.defineProperty(e.prototype, "optionSetSize", {
              get: function () {
                return this._size;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "cachedOptions", {
              get: function () {
                return this._cachedOptions;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.positionInSet = function (e) {
              if (void 0 !== e) {
                for (var t = 0; e > this._displayOnlyOptionsCache[t]; ) t++;
                if (this._displayOnlyOptionsCache[t] === e)
                  throw new Error(
                    "Unexpected: Option at index " +
                      e +
                      " is not a selectable element."
                  );
                return e - t + 1;
              }
            }),
            e
          );
        })(),
        C = o(276),
        I = o(44),
        S = o(273),
        D = o(275),
        N = o(269),
        P = o(278),
        j = o(270),
        R = o(274),
        T = o(255),
        F = o(225),
        E = o(209),
        B = o(132),
        H = o(148),
        L = o(165),
        M = o(163),
        W = o(208),
        A = o(280);
      !(function (e) {
        (e[(e.smallFluid = 0)] = "smallFluid"),
          (e[(e.smallFixedFar = 1)] = "smallFixedFar"),
          (e[(e.smallFixedNear = 2)] = "smallFixedNear"),
          (e[(e.medium = 3)] = "medium"),
          (e[(e.large = 4)] = "large"),
          (e[(e.largeFixed = 5)] = "largeFixed"),
          (e[(e.extraLarge = 6)] = "extraLarge"),
          (e[(e.custom = 7)] = "custom"),
          (e[(e.customNear = 8)] = "customNear");
      })(w || (w = {}));
      var K,
        z = Object(s.a)();
      !(function (e) {
        (e[(e.closed = 0)] = "closed"),
          (e[(e.animatingOpen = 1)] = "animatingOpen"),
          (e[(e.open = 2)] = "open"),
          (e[(e.animatingClosed = 3)] = "animatingClosed");
      })(K || (K = {}));
      var U,
        Z,
        G,
        q,
        Y,
        J = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            (o._panel = a.createRef()),
              (o._animationCallback = null),
              (o._hasCustomNavigation = !(
                !o.props.onRenderNavigation &&
                !o.props.onRenderNavigationContent
              )),
              (o.dismiss = function (e) {
                o.props.onDismiss && o.isActive && o.props.onDismiss(e),
                  (!e || (e && !e.defaultPrevented)) && o.close();
              }),
              (o._allowScrollOnPanel = function (e) {
                e
                  ? o._allowTouchBodyScroll
                    ? Object(F.a)(e, o._events)
                    : Object(F.b)(e, o._events)
                  : o._events.off(o._scrollableContent),
                  (o._scrollableContent = e);
              }),
              (o._onRenderNavigation = function (e) {
                if (
                  !o.props.onRenderNavigationContent &&
                  !o.props.onRenderNavigation &&
                  !o.props.hasCloseButton
                )
                  return null;
                var t = o.props.onRenderNavigationContent,
                  n = void 0 === t ? o._onRenderNavigationContent : t;
                return a.createElement(
                  "div",
                  { className: o._classNames.navigation },
                  n(e, o._onRenderNavigationContent)
                );
              }),
              (o._onRenderNavigationContent = function (e) {
                var t,
                  n = e.closeButtonAriaLabel,
                  r = e.hasCloseButton,
                  i = e.onRenderHeader,
                  s = void 0 === i ? o._onRenderHeader : i;
                if (r) {
                  var l =
                    null === (t = o._classNames.subComponentStyles) ||
                    void 0 === t
                      ? void 0
                      : t.closeButton();
                  return a.createElement(
                    a.Fragment,
                    null,
                    !o._hasCustomNavigation &&
                      s(o.props, o._onRenderHeader, o._headerTextId),
                    a.createElement(P.a, {
                      styles: l,
                      className: o._classNames.closeButton,
                      onClick: o._onPanelClick,
                      ariaLabel: n,
                      title: n,
                      "data-is-visible": !0,
                      iconProps: { iconName: "Cancel" },
                    })
                  );
                }
                return null;
              }),
              (o._onRenderHeader = function (e, t, n) {
                var r = e.headerText,
                  s = e.headerTextProps,
                  l = void 0 === s ? {} : s;
                return r
                  ? a.createElement(
                      "div",
                      { className: o._classNames.header },
                      a.createElement(
                        "div",
                        Object(i.a)(
                          { id: n, role: "heading", "aria-level": 1 },
                          l,
                          {
                            className: Object(E.a)(
                              o._classNames.headerText,
                              l.className
                            ),
                          }
                        ),
                        r
                      )
                    )
                  : null;
              }),
              (o._onRenderBody = function (e) {
                return a.createElement(
                  "div",
                  { className: o._classNames.content },
                  e.children
                );
              }),
              (o._onRenderFooter = function (e) {
                var t = o.props.onRenderFooterContent,
                  n = void 0 === t ? null : t;
                return n
                  ? a.createElement(
                      "div",
                      { className: o._classNames.footer },
                      a.createElement(
                        "div",
                        { className: o._classNames.footerInner },
                        n()
                      )
                    )
                  : null;
              }),
              (o._animateTo = function (e) {
                e === K.open && o.props.onOpen && o.props.onOpen(),
                  (o._animationCallback = o._async.setTimeout(function () {
                    o.setState({ visibility: e }), o._onTransitionComplete();
                  }, 200));
              }),
              (o._clearExistingAnimationTimer = function () {
                null !== o._animationCallback &&
                  o._async.clearTimeout(o._animationCallback);
              }),
              (o._onPanelClick = function (e) {
                o.dismiss(e);
              }),
              (o._onTransitionComplete = function () {
                o._updateFooterPosition(),
                  o.state.visibility === K.open &&
                    o.props.onOpened &&
                    o.props.onOpened(),
                  o.state.visibility === K.closed &&
                    o.props.onDismissed &&
                    o.props.onDismissed();
              });
            var n = o.props.allowTouchBodyScroll,
              r = void 0 !== n && n;
            return (
              (o._allowTouchBodyScroll = r),
              (o._async = new B.a(o)),
              (o._events = new H.a(o)),
              Object(u.a)(o),
              Object(L.a)("Panel", t, {
                ignoreExternalFocusing: "focusTrapZoneProps",
                forceFocusInsideTrap: "focusTrapZoneProps",
                firstFocusableSelector: "focusTrapZoneProps",
              }),
              (o.state = {
                isFooterSticky: !1,
                visibility: K.closed,
                id: Object(m.a)("Panel"),
              }),
              o
            );
          }
          return (
            Object(i.c)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return void 0 === e.isOpen
                ? null
                : !e.isOpen ||
                  (t.visibility !== K.closed &&
                    t.visibility !== K.animatingClosed)
                ? e.isOpen ||
                  (t.visibility !== K.open && t.visibility !== K.animatingOpen)
                  ? null
                  : { visibility: K.animatingClosed }
                : { visibility: K.animatingOpen };
            }),
            (t.prototype.componentDidMount = function () {
              this._events.on(window, "resize", this._updateFooterPosition),
                this._shouldListenForOuterClick(this.props) &&
                  this._events.on(
                    document.body,
                    "mousedown",
                    this._dismissOnOuterClick,
                    !0
                  ),
                this.props.isOpen &&
                  this.setState({ visibility: K.animatingOpen });
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              var o = this._shouldListenForOuterClick(this.props),
                n = this._shouldListenForOuterClick(e);
              this.state.visibility !== t.visibility &&
                (this._clearExistingAnimationTimer(),
                this.state.visibility === K.animatingOpen
                  ? this._animateTo(K.open)
                  : this.state.visibility === K.animatingClosed &&
                    this._animateTo(K.closed)),
                o && !n
                  ? this._events.on(
                      document.body,
                      "mousedown",
                      this._dismissOnOuterClick,
                      !0
                    )
                  : !o &&
                    n &&
                    this._events.off(
                      document.body,
                      "mousedown",
                      this._dismissOnOuterClick,
                      !0
                    );
            }),
            (t.prototype.componentWillUnmount = function () {
              this._async.dispose(), this._events.dispose();
            }),
            (t.prototype.render = function () {
              var e = this.props,
                t = e.className,
                o = void 0 === t ? "" : t,
                n = e.elementToFocusOnDismiss,
                r = e.firstFocusableSelector,
                s = e.focusTrapZoneProps,
                l = e.forceFocusInsideTrap,
                d = e.hasCloseButton,
                c = e.headerText,
                p = e.headerClassName,
                u = void 0 === p ? "" : p,
                m = e.ignoreExternalFocusing,
                b = e.isBlocking,
                f = e.isFooterAtBottom,
                v = e.isLightDismiss,
                _ = e.isHiddenOnDismiss,
                g = e.layerProps,
                y = e.overlayProps,
                O = e.popupProps,
                x = e.type,
                k = e.styles,
                C = e.theme,
                I = e.customWidth,
                S = e.onLightDismissClick,
                D = void 0 === S ? this._onPanelClick : S,
                N = e.onRenderNavigation,
                P = void 0 === N ? this._onRenderNavigation : N,
                F = e.onRenderHeader,
                E = void 0 === F ? this._onRenderHeader : F,
                B = e.onRenderBody,
                H = void 0 === B ? this._onRenderBody : B,
                L = e.onRenderFooter,
                W = void 0 === L ? this._onRenderFooter : L,
                U = this.state,
                Z = U.isFooterSticky,
                G = U.visibility,
                q = U.id,
                Y = x === w.smallFixedNear || x === w.customNear,
                J = Object(M.a)(C) ? Y : !Y,
                V = x === w.custom || x === w.customNear ? { width: I } : {},
                X = Object(h.h)(this.props, h.f),
                Q = this.isActive,
                $ = G === K.animatingClosed || G === K.animatingOpen;
              if (
                ((this._headerTextId = c && q + "-headerText"), !Q && !$ && !_)
              )
                return null;
              this._classNames = z(k, {
                theme: C,
                className: o,
                focusTrapZoneClassName: s ? s.className : void 0,
                hasCloseButton: d,
                headerClassName: u,
                isAnimating: $,
                isFooterSticky: Z,
                isFooterAtBottom: f,
                isOnRightSide: J,
                isOpen: Q,
                isHiddenOnDismiss: _,
                type: x,
                hasCustomNavigation: this._hasCustomNavigation,
              });
              var ee,
                te = this._classNames,
                oe = this._allowTouchBodyScroll;
              return (
                b &&
                  Q &&
                  (ee = a.createElement(
                    R.a,
                    Object(i.a)(
                      {
                        className: te.overlay,
                        isDarkThemed: !1,
                        onClick: v ? D : void 0,
                        allowTouchBodyScroll: oe,
                      },
                      y
                    )
                  )),
                a.createElement(
                  j.a,
                  Object(i.a)({}, g),
                  a.createElement(
                    T.a,
                    Object(i.a)(
                      {
                        role: "dialog",
                        "aria-modal": "true",
                        ariaLabelledBy: this._headerTextId
                          ? this._headerTextId
                          : void 0,
                        onDismiss: this.dismiss,
                        className: te.hiddenPanel,
                      },
                      O
                    ),
                    a.createElement(
                      "div",
                      Object(i.a)({ "aria-hidden": !Q && $ }, X, {
                        ref: this._panel,
                        className: te.root,
                      }),
                      ee,
                      a.createElement(
                        A.a,
                        Object(i.a)(
                          {
                            ignoreExternalFocusing: m,
                            forceFocusInsideTrap: !(!b || (_ && !Q)) && l,
                            firstFocusableSelector: r,
                            isClickableOutsideFocusTrap: !0,
                          },
                          s,
                          {
                            className: te.main,
                            style: V,
                            elementToFocusOnDismiss: n,
                          }
                        ),
                        a.createElement(
                          "div",
                          { className: te.commands, "data-is-visible": !0 },
                          P(this.props, this._onRenderNavigation)
                        ),
                        a.createElement(
                          "div",
                          { className: te.contentInner },
                          (this._hasCustomNavigation || !d) &&
                            E(
                              this.props,
                              this._onRenderHeader,
                              this._headerTextId
                            ),
                          a.createElement(
                            "div",
                            {
                              ref: this._allowScrollOnPanel,
                              className: te.scrollableContent,
                              "data-is-scrollable": !0,
                            },
                            H(this.props, this._onRenderBody)
                          ),
                          W(this.props, this._onRenderFooter)
                        )
                      )
                    )
                  )
                )
              );
            }),
            (t.prototype.open = function () {
              void 0 === this.props.isOpen &&
                (this.isActive ||
                  this.setState({ visibility: K.animatingOpen }));
            }),
            (t.prototype.close = function () {
              void 0 === this.props.isOpen &&
                this.isActive &&
                this.setState({ visibility: K.animatingClosed });
            }),
            Object.defineProperty(t.prototype, "isActive", {
              get: function () {
                return (
                  this.state.visibility === K.open ||
                  this.state.visibility === K.animatingOpen
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype._shouldListenForOuterClick = function (e) {
              return !!e.isBlocking && !!e.isOpen;
            }),
            (t.prototype._updateFooterPosition = function () {
              var e = this._scrollableContent;
              if (e) {
                var t = e.clientHeight,
                  o = e.scrollHeight;
                this.setState({ isFooterSticky: t < o });
              }
            }),
            (t.prototype._dismissOnOuterClick = function (e) {
              var t = this._panel.current;
              this.isActive &&
                t &&
                !e.defaultPrevented &&
                (Object(W.a)(t, e.target) ||
                  (this.props.onOuterClick
                    ? this.props.onOuterClick(e)
                    : this.dismiss(e)));
            }),
            (t.defaultProps = {
              isHiddenOnDismiss: !1,
              isOpen: void 0,
              isBlocking: !0,
              hasCloseButton: !0,
              type: w.smallFixedFar,
            }),
            t
          );
        })(a.Component),
        V = o(5),
        X = {
          root: "ms-Panel",
          main: "ms-Panel-main",
          commands: "ms-Panel-commands",
          contentInner: "ms-Panel-contentInner",
          scrollableContent: "ms-Panel-scrollableContent",
          navigation: "ms-Panel-navigation",
          closeButton: "ms-Panel-closeButton ms-PanelAction-close",
          header: "ms-Panel-header",
          headerText: "ms-Panel-headerText",
          content: "ms-Panel-content",
          footer: "ms-Panel-footer",
          footerInner: "ms-Panel-footerInner",
          isOpen: "is-open",
          hasCloseButton: "ms-Panel--hasCloseButton",
          smallFluid: "ms-Panel--smFluid",
          smallFixedNear: "ms-Panel--smLeft",
          smallFixedFar: "ms-Panel--sm",
          medium: "ms-Panel--md",
          large: "ms-Panel--lg",
          largeFixed: "ms-Panel--fixed",
          extraLarge: "ms-Panel--xl",
          custom: "ms-Panel--custom",
          customNear: "ms-Panel--customLeft",
        },
        Q = "100%",
        $ = "auto",
        ee = 272,
        te = 340,
        oe = 592,
        ne = 644,
        re = 940,
        ie = "auto",
        ae = 0,
        se = 48,
        le = 428,
        de = 176,
        ce =
          (((U = {})["@media (min-width: " + V.k + "px)"] = { width: te }), U),
        pe =
          (((Z = {})["@media (min-width: " + V.j + "px)"] = { width: oe }),
          (Z["@media (min-width: " + V.n + "px)"] = { width: ne }),
          Z),
        ue =
          (((G = {})["@media (min-width: " + V.m + "px)"] = {
            left: se,
            width: $,
          }),
          (G["@media (min-width: " + V.o + "px)"] = { left: le }),
          G),
        me =
          (((q = {})["@media (min-width: " + V.o + "px)"] = {
            left: ie,
            width: re,
          }),
          q),
        he =
          (((Y = {})["@media (min-width: " + V.o + "px)"] = { left: de }), Y),
        be = function (e) {
          var t;
          switch (e) {
            case w.smallFixedFar:
              t = Object(i.a)({}, ce);
              break;
            case w.medium:
              t = Object(i.a)(Object(i.a)({}, ce), pe);
              break;
            case w.large:
              t = Object(i.a)(Object(i.a)(Object(i.a)({}, ce), pe), ue);
              break;
            case w.largeFixed:
              t = Object(i.a)(
                Object(i.a)(Object(i.a)(Object(i.a)({}, ce), pe), ue),
                me
              );
              break;
            case w.extraLarge:
              t = Object(i.a)(
                Object(i.a)(Object(i.a)(Object(i.a)({}, ce), pe), ue),
                he
              );
          }
          return t;
        },
        fe = { paddingLeft: "24px", paddingRight: "24px" },
        ve = Object(r.a)(
          J,
          function (e) {
            var t,
              o = e.className,
              n = e.focusTrapZoneClassName,
              r = e.hasCloseButton,
              a = e.headerClassName,
              s = e.isAnimating,
              l = e.isFooterSticky,
              d = e.isFooterAtBottom,
              c = e.isOnRightSide,
              p = e.isOpen,
              u = e.isHiddenOnDismiss,
              m = e.hasCustomNavigation,
              h = e.theme,
              b = e.type,
              f = void 0 === b ? w.smallFixedFar : b,
              v = h.effects,
              _ = h.fonts,
              g = h.semanticColors,
              y = Object(V.v)(X, h),
              O = f === w.custom || f === w.customNear;
            return {
              root: [
                y.root,
                h.fonts.medium,
                p && y.isOpen,
                r && y.hasCloseButton,
                {
                  pointerEvents: "none",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                },
                O && c && y.custom,
                O && !c && y.customNear,
                o,
              ],
              overlay: [
                { pointerEvents: "auto", cursor: "pointer" },
                p && s && V.a.fadeIn100,
                !p && s && V.a.fadeOut100,
              ],
              hiddenPanel: [!p && !s && u && { visibility: "hidden" }],
              main: [
                y.main,
                {
                  backgroundColor: g.bodyBackground,
                  boxShadow: v.elevation64,
                  pointerEvents: "auto",
                  position: "absolute",
                  display: "flex",
                  flexDirection: "column",
                  overflowX: "hidden",
                  overflowY: "auto",
                  WebkitOverflowScrolling: "touch",
                  bottom: 0,
                  top: 0,
                  left: ie,
                  right: ae,
                  width: Q,
                  selectors: Object(i.a)(
                    ((t = {}),
                    (t[V.e] = {
                      borderLeft: "3px solid " + g.variantBorder,
                      borderRight: "3px solid " + g.variantBorder,
                    }),
                    t),
                    be(f)
                  ),
                },
                f === w.smallFluid && { left: ae },
                f === w.smallFixedNear && { left: ae, right: ie, width: ee },
                f === w.customNear && { right: "auto", left: 0 },
                O && { maxWidth: "100vw" },
                p && s && !c && V.a.slideRightIn40,
                p && s && c && V.a.slideLeftIn40,
                !p && s && !c && V.a.slideLeftOut40,
                !p && s && c && V.a.slideRightOut40,
                n,
              ],
              commands: [
                y.commands,
                { marginTop: 18 },
                m && { marginTop: "inherit" },
              ],
              navigation: [
                y.navigation,
                { display: "flex", justifyContent: "flex-end" },
                m && { height: "44px" },
              ],
              contentInner: [
                y.contentInner,
                {
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  overflowY: "hidden",
                },
              ],
              header: [
                y.header,
                fe,
                { alignSelf: "flex-start" },
                r && !m && { flexGrow: 1 },
                m && { flexShrink: 0 },
              ],
              headerText: [
                y.headerText,
                _.xLarge,
                {
                  color: g.bodyText,
                  lineHeight: "27px",
                  overflowWrap: "break-word",
                  wordWrap: "break-word",
                  wordBreak: "break-word",
                  hyphens: "auto",
                },
                a,
              ],
              scrollableContent: [
                y.scrollableContent,
                { overflowY: "auto" },
                d && { flexGrow: 1 },
              ],
              content: [y.content, fe, { paddingBottom: 20 }],
              footer: [
                y.footer,
                {
                  flexShrink: 0,
                  borderTop: "1px solid transparent",
                  transition:
                    "opacity " + V.c.durationValue3 + " " + V.c.easeFunction2,
                },
                l && {
                  background: g.bodyBackground,
                  borderTopColor: g.variantBorder,
                },
              ],
              footerInner: [
                y.footerInner,
                fe,
                { paddingBottom: 16, paddingTop: 16 },
              ],
              subComponentStyles: {
                closeButton: {
                  root: [
                    y.closeButton,
                    {
                      marginRight: 14,
                      color: h.palette.neutralSecondary,
                      fontSize: V.g.large,
                    },
                    m && { marginRight: 0, height: "auto", width: "44px" },
                  ],
                  rootHovered: { color: h.palette.neutralPrimary },
                },
              },
            };
          },
          void 0,
          { scope: "Panel" }
        ),
        _e = o(47);
      function ge(e, t) {
        for (var o = [], n = 0, r = t; n < r.length; n++) {
          var i = e[r[n]];
          i && o.push(i);
        }
        return o;
      }
      var ye,
        Oe,
        xe,
        we = Object(s.a)(),
        ke = (function (e) {
          function t(t) {
            var o = e.call(this, t) || this;
            (o._host = a.createRef()),
              (o._focusZone = a.createRef()),
              (o._dropDown = a.createRef()),
              (o._scrollIdleDelay = 250),
              (o._sizePosCache = new k()),
              (o._requestAnimationFrame = (function (e) {
                var t;
                return function (o) {
                  t ||
                    ((t = new Set()),
                    Object(l.a)(e, {
                      componentWillUnmount: function () {
                        t.forEach(function (e) {
                          return cancelAnimationFrame(e);
                        });
                      },
                    }));
                  var n = requestAnimationFrame(function () {
                    t.delete(n), o();
                  });
                  t.add(n);
                };
              })(o)),
              (o._onChange = function (e, t, n, r, a) {
                var s = o.props,
                  l = s.onChange,
                  d = s.onChanged;
                if (l || d) {
                  var c = a
                    ? Object(i.a)(Object(i.a)({}, t[n]), { selected: !r })
                    : t[n];
                  l &&
                    l(
                      Object(i.a)(Object(i.a)({}, e), {
                        target: o._dropDown.current,
                      }),
                      c,
                      n
                    ),
                    d && d(c, n);
                }
              }),
              (o._getPlaceholder = function () {
                return o.props.placeholder || o.props.placeHolder;
              }),
              (o._getTitle = function (e, t) {
                var n = o.props.multiSelectDelimiter,
                  r = void 0 === n ? ", " : n;
                return e
                  .map(function (e) {
                    return e.text;
                  })
                  .join(r);
              }),
              (o._onRenderTitle = function (e) {
                return a.createElement(a.Fragment, null, o._getTitle(e));
              }),
              (o._onRenderPlaceholder = function (e) {
                return o._getPlaceholder()
                  ? a.createElement(a.Fragment, null, o._getPlaceholder())
                  : null;
              }),
              (o._onRenderContainer = function (e) {
                var t = e.calloutProps,
                  n = e.panelProps,
                  r = o.props,
                  s = r.responsiveMode,
                  l = r.dropdownWidth,
                  d = s <= _e.a.medium,
                  c = o._classNames.subComponentStyles
                    ? o._classNames.subComponentStyles.panel
                    : void 0,
                  p = void 0,
                  u = void 0;
                return (
                  "auto" === l
                    ? (u = o._dropDown.current
                        ? o._dropDown.current.clientWidth
                        : 0)
                    : (p =
                        l ||
                        (o._dropDown.current
                          ? o._dropDown.current.clientWidth
                          : 0)),
                  d
                    ? a.createElement(
                        ve,
                        Object(i.a)(
                          {
                            isOpen: !0,
                            isLightDismiss: !0,
                            onDismiss: o._onDismiss,
                            hasCloseButton: !1,
                            styles: c,
                          },
                          n
                        ),
                        o._renderFocusableList(e)
                      )
                    : a.createElement(
                        g.a,
                        Object(i.a)(
                          {
                            isBeakVisible: !1,
                            gapSpace: 0,
                            doNotLayer: !1,
                            directionalHintFixed: !1,
                            directionalHint: x.a.bottomLeftEdge,
                            calloutWidth: p,
                            calloutMinWidth: u,
                          },
                          t,
                          {
                            className: o._classNames.callout,
                            target: o._dropDown.current,
                            onDismiss: o._onDismiss,
                            onScroll: o._onScroll,
                            onPositioned: o._onPositioned,
                          }
                        ),
                        o._renderFocusableList(e)
                      )
                );
              }),
              (o._onRenderCaretDown = function (e) {
                return a.createElement(S.a, {
                  className: o._classNames.caretDown,
                  iconName: "ChevronDown",
                  "aria-hidden": !0,
                });
              }),
              (o._onRenderList = function (e) {
                var t = e.onRenderItem,
                  r = void 0 === t ? o._onRenderItem : t,
                  s = { items: [] },
                  l = [],
                  d = function () {
                    var e = s.id
                      ? [
                          a.createElement(
                            "div",
                            {
                              role: "group",
                              key: s.id,
                              "aria-labelledby": s.id,
                            },
                            s.items
                          ),
                        ]
                      : s.items;
                    (l = Object(i.e)(l, e)), (s = { items: [] });
                  };
                return (
                  e.options.forEach(function (e, t) {
                    !(function (e, t) {
                      switch (e.itemType) {
                        case n.Header:
                          s.items.length > 0 && d();
                          var a = o._id + e.key;
                          s.items.push(
                            r(
                              Object(i.a)(Object(i.a)({ id: a }, e), {
                                index: t,
                              }),
                              o._onRenderItem
                            )
                          ),
                            (s.id = a);
                          break;
                        case n.Divider:
                          t > 0 &&
                            s.items.push(
                              r(
                                Object(i.a)(Object(i.a)({}, e), { index: t }),
                                o._onRenderItem
                              )
                            ),
                            s.items.length > 0 && d();
                          break;
                        default:
                          s.items.push(
                            r(
                              Object(i.a)(Object(i.a)({}, e), { index: t }),
                              o._onRenderItem
                            )
                          );
                      }
                    })(e, t);
                  }),
                  s.items.length > 0 && d(),
                  a.createElement(a.Fragment, null, l)
                );
              }),
              (o._onRenderItem = function (e) {
                switch (e.itemType) {
                  case n.Divider:
                    return o._renderSeparator(e);
                  case n.Header:
                    return o._renderHeader(e);
                  default:
                    return o._renderOption(e);
                }
              }),
              (o._renderOption = function (e) {
                var t = o.props.onRenderOption,
                  n = void 0 === t ? o._onRenderOption : t,
                  r = o.state.selectedIndices,
                  s = void 0 === r ? [] : r,
                  l = !(void 0 === e.index || !s) && s.indexOf(e.index) > -1,
                  d = e.hidden
                    ? o._classNames.dropdownItemHidden
                    : l && !0 === e.disabled
                    ? o._classNames.dropdownItemSelectedAndDisabled
                    : l
                    ? o._classNames.dropdownItemSelected
                    : !0 === e.disabled
                    ? o._classNames.dropdownItemDisabled
                    : o._classNames.dropdownItem,
                  c = e.title,
                  p = void 0 === c ? e.text : c,
                  u = o._classNames.subComponentStyles
                    ? o._classNames.subComponentStyles.multiSelectItem
                    : void 0;
                return o.props.multiSelect
                  ? a.createElement(y.a, {
                      id: o._listId + e.index,
                      key: e.key,
                      disabled: e.disabled,
                      onChange: o._onItemClick(e),
                      inputProps: Object(i.a)(
                        {
                          "aria-selected": l,
                          onMouseEnter: o._onItemMouseEnter.bind(o, e),
                          onMouseLeave: o._onMouseItemLeave.bind(o, e),
                          onMouseMove: o._onItemMouseMove.bind(o, e),
                          role: "option",
                        },
                        {
                          "data-index": e.index,
                          "data-is-focusable": !e.disabled,
                        }
                      ),
                      label: e.text,
                      title: p,
                      onRenderLabel: o._onRenderItemLabel.bind(o, e),
                      className: d,
                      checked: l,
                      styles: u,
                      ariaPositionInSet: o._sizePosCache.positionInSet(e.index),
                      ariaSetSize: o._sizePosCache.optionSetSize,
                    })
                  : a.createElement(
                      O.a,
                      {
                        id: o._listId + e.index,
                        key: e.key,
                        "data-index": e.index,
                        "data-is-focusable": !e.disabled,
                        disabled: e.disabled,
                        className: d,
                        onClick: o._onItemClick(e),
                        onMouseEnter: o._onItemMouseEnter.bind(o, e),
                        onMouseLeave: o._onMouseItemLeave.bind(o, e),
                        onMouseMove: o._onItemMouseMove.bind(o, e),
                        role: "option",
                        "aria-selected": l ? "true" : "false",
                        ariaLabel: e.ariaLabel,
                        title: p,
                        "aria-posinset": o._sizePosCache.positionInSet(e.index),
                        "aria-setsize": o._sizePosCache.optionSetSize,
                      },
                      n(e, o._onRenderOption)
                    );
              }),
              (o._onRenderOption = function (e) {
                return a.createElement(
                  "span",
                  { className: o._classNames.dropdownOptionText },
                  e.text
                );
              }),
              (o._onRenderItemLabel = function (e) {
                var t = o.props.onRenderOption;
                return (void 0 === t ? o._onRenderOption : t)(
                  e,
                  o._onRenderOption
                );
              }),
              (o._onPositioned = function (e) {
                o._focusZone.current &&
                  o._requestAnimationFrame(function () {
                    var e = o.state.selectedIndices;
                    if (o._focusZone.current)
                      if (e && e[0] && !o.props.options[e[0]].disabled) {
                        var t = Object(d.a)().getElementById(
                          o._id + "-list" + e[0]
                        );
                        t && o._focusZone.current.focusElement(t);
                      } else o._focusZone.current.focus();
                  }),
                  (o.state.calloutRenderEdge &&
                    o.state.calloutRenderEdge === e.targetEdge) ||
                    o.setState({ calloutRenderEdge: e.targetEdge });
              }),
              (o._onItemClick = function (e) {
                return function (t) {
                  e.disabled ||
                    (o.setSelectedIndex(t, e.index),
                    o.props.multiSelect || o.setState({ isOpen: !1 }));
                };
              }),
              (o._onScroll = function () {
                o._isScrollIdle || void 0 === o._scrollIdleTimeoutId
                  ? (o._isScrollIdle = !1)
                  : (clearTimeout(o._scrollIdleTimeoutId),
                    (o._scrollIdleTimeoutId = void 0)),
                  (o._scrollIdleTimeoutId = setTimeout(function () {
                    o._isScrollIdle = !0;
                  }, o._scrollIdleDelay));
              }),
              (o._onMouseItemLeave = function (e, t) {
                if (!o._shouldIgnoreMouseEvent() && o._host.current)
                  if (o._host.current.setActive)
                    try {
                      o._host.current.setActive();
                    } catch (n) {}
                  else o._host.current.focus();
              }),
              (o._onDismiss = function () {
                o.setState({ isOpen: !1 });
              }),
              (o._onDropdownBlur = function (e) {
                o._isDisabled() ||
                  (o.setState({ hasFocus: !1 }),
                  o.state.isOpen || (o.props.onBlur && o.props.onBlur(e)));
              }),
              (o._onDropdownKeyDown = function (e) {
                if (
                  !o._isDisabled() &&
                  ((o._lastKeyDownWasAltOrMeta = o._isAltOrMeta(e)),
                  !o.props.onKeyDown ||
                    (o.props.onKeyDown(e), !e.defaultPrevented))
                ) {
                  var t,
                    n = o.state.selectedIndices.length
                      ? o.state.selectedIndices[0]
                      : -1,
                    r = e.altKey || e.metaKey,
                    i = o.state.isOpen;
                  switch (e.which) {
                    case c.a.enter:
                      o.setState({ isOpen: !i });
                      break;
                    case c.a.escape:
                      if (!i) return;
                      o.setState({ isOpen: !1 });
                      break;
                    case c.a.up:
                      if (r) {
                        if (i) {
                          o.setState({ isOpen: !1 });
                          break;
                        }
                        return;
                      }
                      o.props.multiSelect
                        ? o.setState({ isOpen: !0 })
                        : o._isDisabled() ||
                          (t = o._moveIndex(e, -1, n - 1, n));
                      break;
                    case c.a.down:
                      r && (e.stopPropagation(), e.preventDefault()),
                        (r && !i) || o.props.multiSelect
                          ? o.setState({ isOpen: !0 })
                          : o._isDisabled() ||
                            (t = o._moveIndex(e, 1, n + 1, n));
                      break;
                    case c.a.home:
                      o.props.multiSelect || (t = o._moveIndex(e, 1, 0, n));
                      break;
                    case c.a.end:
                      o.props.multiSelect ||
                        (t = o._moveIndex(
                          e,
                          -1,
                          o.props.options.length - 1,
                          n
                        ));
                      break;
                    case c.a.space:
                      break;
                    default:
                      return;
                  }
                  t !== n && (e.stopPropagation(), e.preventDefault());
                }
              }),
              (o._onDropdownKeyUp = function (e) {
                if (!o._isDisabled()) {
                  var t = o._shouldHandleKeyUp(e),
                    n = o.state.isOpen;
                  if (
                    !o.props.onKeyUp ||
                    (o.props.onKeyUp(e), !e.defaultPrevented)
                  ) {
                    switch (e.which) {
                      case c.a.space:
                        o.setState({ isOpen: !n });
                        break;
                      default:
                        return void (t && n && o.setState({ isOpen: !1 }));
                    }
                    e.stopPropagation(), e.preventDefault();
                  }
                }
              }),
              (o._onZoneKeyDown = function (e) {
                var t;
                o._lastKeyDownWasAltOrMeta = o._isAltOrMeta(e);
                var n = e.altKey || e.metaKey;
                switch (e.which) {
                  case c.a.up:
                    n
                      ? o.setState({ isOpen: !1 })
                      : o._host.current &&
                        (t = Object(p.h)(
                          o._host.current,
                          o._host.current.lastChild,
                          !0
                        ));
                    break;
                  case c.a.home:
                  case c.a.end:
                  case c.a.pageUp:
                  case c.a.pageDown:
                    break;
                  case c.a.down:
                    !n &&
                      o._host.current &&
                      (t = Object(p.e)(
                        o._host.current,
                        o._host.current.firstChild,
                        !0
                      ));
                    break;
                  case c.a.escape:
                    o.setState({ isOpen: !1 });
                    break;
                  case c.a.tab:
                    return void o.setState({ isOpen: !1 });
                  default:
                    return;
                }
                t && t.focus(), e.stopPropagation(), e.preventDefault();
              }),
              (o._onZoneKeyUp = function (e) {
                o._shouldHandleKeyUp(e) &&
                  o.state.isOpen &&
                  (o.setState({ isOpen: !1 }), e.preventDefault());
              }),
              (o._onDropdownClick = function (e) {
                if (
                  !o.props.onClick ||
                  (o.props.onClick(e), !e.defaultPrevented)
                ) {
                  var t = o.state.isOpen;
                  o._isDisabled() ||
                    o._shouldOpenOnFocus() ||
                    o.setState({ isOpen: !t }),
                    (o._isFocusedByClick = !1);
                }
              }),
              (o._onDropdownMouseDown = function () {
                o._isFocusedByClick = !0;
              }),
              (o._onFocus = function (e) {
                if (!o._isDisabled()) {
                  o.props.onFocus && o.props.onFocus(e);
                  var t = { hasFocus: !0 };
                  o._shouldOpenOnFocus() && (t.isOpen = !0), o.setState(t);
                }
              }),
              (o._isDisabled = function () {
                var e = o.props.disabled,
                  t = o.props.isDisabled;
                return void 0 === e && (e = t), e;
              }),
              (o._onRenderLabel = function (e) {
                var t = e.label,
                  n = e.required,
                  r = e.disabled,
                  i = o._classNames.subComponentStyles
                    ? o._classNames.subComponentStyles.label
                    : void 0;
                return t
                  ? a.createElement(
                      D.a,
                      {
                        className: o._classNames.label,
                        id: o._labelId,
                        required: n,
                        styles: i,
                        disabled: r,
                      },
                      t
                    )
                  : null;
              }),
              Object(u.a)(o);
            var r,
              s = t.multiSelect,
              h = t.selectedKey,
              b = t.selectedKeys,
              f = t.defaultSelectedKey,
              v = t.defaultSelectedKeys,
              _ = t.options;
            return (
              (o._id = t.id || Object(m.a)("Dropdown")),
              (o._labelId = o._id + "-label"),
              (o._listId = o._id + "-list"),
              (o._optionId = o._id + "-option"),
              (o._isScrollIdle = !0),
              (r = s
                ? o._getSelectedIndexes(_, void 0 !== v ? v : b)
                : o._getSelectedIndexes(_, void 0 !== f ? f : h)),
              o._sizePosCache.updateOptions(_),
              (o.state = {
                isOpen: !1,
                selectedIndices: r,
                hasFocus: !1,
                calloutRenderEdge: void 0,
              }),
              o
            );
          }
          return (
            Object(i.c)(t, e),
            Object.defineProperty(t.prototype, "selectedOptions", {
              get: function () {
                return ge(this.props.options, this.state.selectedIndices);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.componentWillUnmount = function () {
              clearTimeout(this._scrollIdleTimeoutId);
            }),
            (t.prototype.UNSAFE_componentWillReceiveProps = function (e) {
              var t,
                o = e.options !== this.props.options;
              void 0 ===
                e[
                  (t = e.multiSelect
                    ? o && void 0 !== e.defaultSelectedKeys
                      ? "defaultSelectedKeys"
                      : "selectedKeys"
                    : o && void 0 !== e.defaultSelectedKey
                    ? "defaultSelectedKey"
                    : "selectedKey")
                ] ||
                (e[t] === this.props[t] && !o) ||
                this.setState({
                  selectedIndices: this._getSelectedIndexes(e.options, e[t]),
                });
            }),
            (t.prototype.componentDidUpdate = function (e, t) {
              !0 === t.isOpen &&
                !1 === this.state.isOpen &&
                ((this._gotMouseMove = !1),
                this.props.onDismiss && this.props.onDismiss());
            }),
            (t.prototype.render = function () {
              var e,
                t,
                o = this,
                n = this._id,
                r = this.props,
                s = r.className,
                l = r.label,
                d = r.options,
                c = r.ariaLabel,
                p = r.required,
                u = r.errorMessage,
                m = r.keytipProps,
                f = r.styles,
                v = r.theme,
                _ = r.panelProps,
                g = r.calloutProps,
                y = r.onRenderTitle,
                O = void 0 === y ? this._getTitle : y,
                x = r.onRenderContainer,
                w = void 0 === x ? this._onRenderContainer : x,
                k = r.onRenderCaretDown,
                C = void 0 === k ? this._onRenderCaretDown : k,
                I = r.onRenderLabel,
                S = void 0 === I ? this._onRenderLabel : I,
                D = this.state,
                P = D.isOpen,
                j = D.selectedIndices,
                R = D.calloutRenderEdge,
                T =
                  r.onRenderPlaceholder ||
                  r.onRenderPlaceHolder ||
                  this._getPlaceholder;
              d !== this._sizePosCache.cachedOptions &&
                this._sizePosCache.updateOptions(d);
              var F = ge(d, j),
                E = Object(h.h)(r, h.f),
                B = this._isDisabled(),
                H = n + "-errorMessage",
                L = B
                  ? void 0
                  : P && 1 === j.length && j[0] >= 0
                  ? this._listId + j[0]
                  : void 0;
              this._classNames = we(f, {
                theme: v,
                className: s,
                hasError: !!(u && u.length > 0),
                hasLabel: !!l,
                isOpen: P,
                required: p,
                disabled: B,
                isRenderingPlaceholder: !F.length,
                panelClassName:
                  null === (e = _) || void 0 === e ? void 0 : e.className,
                calloutClassName:
                  null === (t = g) || void 0 === t ? void 0 : t.className,
                calloutRenderEdge: R,
              });
              var M = !!u && u.length > 0;
              return a.createElement(
                "div",
                { className: this._classNames.root },
                S(this.props, this._onRenderLabel),
                a.createElement(
                  N.a,
                  { keytipProps: m, disabled: B },
                  function (e) {
                    return a.createElement(
                      "div",
                      Object(i.a)(
                        {},
                        e,
                        {
                          "data-is-focusable": !B,
                          ref: o._dropDown,
                          id: n,
                          tabIndex: B ? -1 : 0,
                          role: "combobox",
                          "aria-haspopup": "listbox",
                          "aria-expanded": P ? "true" : "false",
                          "aria-label": c,
                          "aria-labelledby":
                            l && !c
                              ? Object(b.a)(o._labelId, o._optionId)
                              : void 0,
                          "aria-describedby": Object(b.a)(
                            e["aria-describedby"],
                            M ? o._id + "-errorMessage" : void 0
                          ),
                          "aria-activedescendant": L,
                          "aria-required": p,
                          "aria-disabled": B,
                          "aria-controls": P ? o._listId : void 0,
                        },
                        E,
                        {
                          className: o._classNames.dropdown,
                          onBlur: o._onDropdownBlur,
                          onKeyDown: o._onDropdownKeyDown,
                          onKeyUp: o._onDropdownKeyUp,
                          onClick: o._onDropdownClick,
                          onMouseDown: o._onDropdownMouseDown,
                          onFocus: o._onFocus,
                        }
                      ),
                      a.createElement(
                        "span",
                        {
                          id: o._optionId,
                          className: o._classNames.title,
                          "aria-live": "polite",
                          "aria-atomic": !0,
                        },
                        F.length
                          ? O(F, o._onRenderTitle)
                          : T(r, o._onRenderPlaceholder)
                      ),
                      a.createElement(
                        "span",
                        { className: o._classNames.caretDownWrapper },
                        C(r, o._onRenderCaretDown)
                      )
                    );
                  }
                ),
                P &&
                  w(
                    Object(i.a)(Object(i.a)({}, r), {
                      onDismiss: this._onDismiss,
                    }),
                    this._onRenderContainer
                  ),
                M &&
                  a.createElement(
                    "div",
                    {
                      role: "alert",
                      id: H,
                      className: this._classNames.errorMessage,
                    },
                    u
                  )
              );
            }),
            (t.prototype.focus = function (e) {
              this._dropDown.current &&
                (this._dropDown.current.focus(),
                e && this.setState({ isOpen: !0 }));
            }),
            (t.prototype.setSelectedIndex = function (e, t) {
              var o = this,
                n = this.props,
                r = n.options,
                i = n.selectedKey,
                a = n.selectedKeys,
                s = n.multiSelect,
                l = n.notifyOnReselect,
                d = this.state.selectedIndices,
                c = void 0 === d ? [] : d,
                p = !!c && c.indexOf(t) > -1,
                u = [];
              if (
                ((t = Math.max(0, Math.min(r.length - 1, t))),
                void 0 === i && void 0 === a)
              ) {
                if (s || l || t !== c[0]) {
                  if (s)
                    if (((u = c ? this._copyArray(c) : []), p)) {
                      var m = u.indexOf(t);
                      m > -1 && u.splice(m, 1);
                    } else u.push(t);
                  else u = [t];
                  e.persist(),
                    this.setState({ selectedIndices: u }, function () {
                      o._onChange(e, r, t, p, s);
                    });
                }
              } else this._onChange(e, r, t, p, s);
            }),
            (t.prototype._copyArray = function (e) {
              for (var t = [], o = 0, n = e; o < n.length; o++) {
                var r = n[o];
                t.push(r);
              }
              return t;
            }),
            (t.prototype._moveIndex = function (e, t, o, r) {
              var i = this.props.options;
              if (r === o || 0 === i.length) return r;
              o >= i.length ? (o = 0) : o < 0 && (o = i.length - 1);
              for (
                var a = 0;
                i[o].itemType === n.Header ||
                i[o].itemType === n.Divider ||
                i[o].disabled;

              ) {
                if (a >= i.length) return r;
                o + t < 0 ? (o = i.length) : o + t >= i.length && (o = -1),
                  (o += t),
                  a++;
              }
              return this.setSelectedIndex(e, o), o;
            }),
            (t.prototype._renderFocusableList = function (e) {
              var t = e.onRenderList,
                o = void 0 === t ? this._onRenderList : t,
                n = e.label,
                r = e.ariaLabel,
                i = e.multiSelect;
              return a.createElement(
                "div",
                {
                  className: this._classNames.dropdownItemsWrapper,
                  onKeyDown: this._onZoneKeyDown,
                  onKeyUp: this._onZoneKeyUp,
                  ref: this._host,
                  tabIndex: 0,
                },
                a.createElement(
                  C.a,
                  {
                    ref: this._focusZone,
                    direction: I.a.vertical,
                    id: this._listId,
                    className: this._classNames.dropdownItems,
                    role: "listbox",
                    "aria-label": r,
                    "aria-labelledby": n && !r ? this._labelId : void 0,
                    "aria-multiselectable": i,
                  },
                  o(e, this._onRenderList)
                )
              );
            }),
            (t.prototype._renderSeparator = function (e) {
              var t = e.index,
                o = e.key;
              return t > 0
                ? a.createElement("div", {
                    role: "separator",
                    key: o,
                    className: this._classNames.dropdownDivider,
                  })
                : null;
            }),
            (t.prototype._renderHeader = function (e) {
              var t = this.props.onRenderOption,
                o = void 0 === t ? this._onRenderOption : t,
                n = e.key,
                r = e.id;
              return a.createElement(
                "div",
                {
                  id: r,
                  key: n,
                  className: this._classNames.dropdownItemHeader,
                },
                o(e, this._onRenderOption)
              );
            }),
            (t.prototype._onItemMouseEnter = function (e, t) {
              this._shouldIgnoreMouseEvent() || t.currentTarget.focus();
            }),
            (t.prototype._onItemMouseMove = function (e, t) {
              var o = t.currentTarget;
              (this._gotMouseMove = !0),
                this._isScrollIdle && document.activeElement !== o && o.focus();
            }),
            (t.prototype._shouldIgnoreMouseEvent = function () {
              return !this._isScrollIdle || !this._gotMouseMove;
            }),
            (t.prototype._getSelectedIndexes = function (e, t) {
              if (void 0 === t)
                return this.props.multiSelect
                  ? this._getAllSelectedIndices(e)
                  : -1 !== (i = this._getSelectedIndex(e, null))
                  ? [i]
                  : [];
              if (!Array.isArray(t))
                return -1 !== (i = this._getSelectedIndex(e, t)) ? [i] : [];
              for (var o = [], n = 0, r = t; n < r.length; n++) {
                var i,
                  a = r[n];
                -1 !== (i = this._getSelectedIndex(e, a)) && o.push(i);
              }
              return o;
            }),
            (t.prototype._getAllSelectedIndices = function (e) {
              return e
                .map(function (e, t) {
                  return e.selected ? t : -1;
                })
                .filter(function (e) {
                  return -1 !== e;
                });
            }),
            (t.prototype._getSelectedIndex = function (e, t) {
              return Object(f.d)(e, function (e) {
                return null != t ? e.key === t : !!e.selected || !!e.isSelected;
              });
            }),
            (t.prototype._isAltOrMeta = function (e) {
              return e.which === c.a.alt || "Meta" === e.key;
            }),
            (t.prototype._shouldHandleKeyUp = function (e) {
              var t = this._lastKeyDownWasAltOrMeta && this._isAltOrMeta(e);
              return (
                (this._lastKeyDownWasAltOrMeta = !1),
                !!t && !(Object(v.a)() || Object(_.a)())
              );
            }),
            (t.prototype._shouldOpenOnFocus = function () {
              var e = this.state.hasFocus,
                t = this.props.openOnKeyboardFocus;
              return !this._isFocusedByClick && !0 === t && !e;
            }),
            (t.defaultProps = { options: [] }),
            (t = Object(i.b)([_e.b], t))
          );
        })(a.Component),
        Ce = o(122),
        Ie = o(8),
        Se = {
          root: "ms-Dropdown-container",
          label: "ms-Dropdown-label",
          dropdown: "ms-Dropdown",
          title: "ms-Dropdown-title",
          caretDownWrapper: "ms-Dropdown-caretDownWrapper",
          caretDown: "ms-Dropdown-caretDown",
          callout: "ms-Dropdown-callout",
          panel: "ms-Dropdown-panel",
          dropdownItems: "ms-Dropdown-items",
          dropdownItem: "ms-Dropdown-item",
          dropdownDivider: "ms-Dropdown-divider",
          dropdownOptionText: "ms-Dropdown-optionText",
          dropdownItemHeader: "ms-Dropdown-header",
          titleIsPlaceHolder: "ms-Dropdown-titleIsPlaceHolder",
          titleHasError: "ms-Dropdown-title--hasError",
        },
        De =
          (((ye = {})[V.e + ", " + V.f.replace("@media ", "")] = Object(i.a)(
            {},
            Object(V.w)()
          )),
          ye),
        Ne = {
          selectors: Object(i.a)(
            ((Oe = {}),
            (Oe[V.e] = {
              backgroundColor: "Highlight",
              borderColor: "Highlight",
              color: "HighlightText",
            }),
            Oe),
            De
          ),
        },
        Pe = {
          selectors: ((xe = {}), (xe[V.e] = { borderColor: "Highlight" }), xe),
        },
        je = Object(V.A)(0, V.k),
        Re = Object(r.a)(
          ke,
          function (e) {
            var t,
              o,
              n,
              r,
              a,
              s,
              l,
              d,
              c,
              p,
              u,
              m = e.theme,
              h = e.hasError,
              b = e.hasLabel,
              f = e.className,
              v = e.isOpen,
              _ = e.disabled,
              g = e.required,
              y = e.isRenderingPlaceholder,
              O = e.panelClassName,
              x = e.calloutClassName,
              w = e.calloutRenderEdge;
            if (!m)
              throw new Error(
                "theme is undefined or null in base Dropdown getStyles function."
              );
            var k = Object(V.v)(Se, m),
              C = m.palette,
              I = m.semanticColors,
              S = m.effects,
              D = m.fonts,
              N = { color: I.menuItemTextHovered },
              P = { color: I.menuItemText },
              j = { borderColor: I.errorText },
              R = [
                k.dropdownItem,
                {
                  backgroundColor: "transparent",
                  boxSizing: "border-box",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 8px",
                  width: "100%",
                  minHeight: 36,
                  lineHeight: 20,
                  height: 0,
                  position: "relative",
                  border: "1px solid transparent",
                  borderRadius: 0,
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  textAlign: "left",
                  ".ms-Button-flexContainer": { width: "100%" },
                },
              ],
              T = I.menuItemBackgroundPressed,
              F = function (e) {
                var t;
                return (
                  void 0 === e && (e = !1),
                  {
                    selectors:
                      ((t = {
                        "&:hover:focus": [
                          {
                            color: I.menuItemTextHovered,
                            backgroundColor: e
                              ? T
                              : I.menuItemBackgroundHovered,
                          },
                          Ne,
                        ],
                        "&:focus": [
                          { backgroundColor: e ? T : "transparent" },
                          Ne,
                        ],
                        "&:active": [
                          {
                            color: I.menuItemTextHovered,
                            backgroundColor: e
                              ? I.menuItemBackgroundHovered
                              : I.menuBackground,
                          },
                          Ne,
                        ],
                      }),
                      (t["." + Ce.a + " &:focus:after"] = {
                        left: 0,
                        top: 0,
                        bottom: 0,
                        right: 0,
                      }),
                      (t[V.e] = { border: "none" }),
                      t),
                  }
                );
              },
              E = Object(i.e)(R, [
                { backgroundColor: T, color: I.menuItemTextHovered },
                F(!0),
                Ne,
              ]),
              B = Object(i.e)(R, [
                {
                  color: I.disabledText,
                  cursor: "default",
                  selectors:
                    ((t = {}),
                    (t[V.e] = { color: "GrayText", border: "none" }),
                    t),
                },
              ]),
              H =
                w === Ie.a.bottom
                  ? S.roundedCorner2 + " " + S.roundedCorner2 + " 0 0"
                  : "0 0 " + S.roundedCorner2 + " " + S.roundedCorner2,
              L =
                w === Ie.a.bottom
                  ? "0 0 " + S.roundedCorner2 + " " + S.roundedCorner2
                  : S.roundedCorner2 + " " + S.roundedCorner2 + " 0 0";
            return {
              root: [k.root, f],
              label: k.label,
              dropdown: [
                k.dropdown,
                V.G,
                D.medium,
                {
                  color: I.menuItemText,
                  borderColor: I.focusBorder,
                  position: "relative",
                  outline: 0,
                  userSelect: "none",
                  selectors:
                    ((o = {}),
                    (o["&:hover ." + k.title] = [
                      !_ && N,
                      {
                        borderColor: v ? C.neutralSecondary : C.neutralPrimary,
                      },
                      Pe,
                    ]),
                    (o["&:focus ." + k.title] = [
                      !_ && N,
                      {
                        selectors:
                          ((n = {}), (n[V.e] = { color: "Highlight" }), n),
                      },
                    ]),
                    (o["&:focus:after"] = [
                      {
                        pointerEvents: "none",
                        content: "''",
                        position: "absolute",
                        boxSizing: "border-box",
                        top: "0px",
                        left: "0px",
                        width: "100%",
                        height: "100%",
                        border: _ ? "none" : "2px solid " + C.themePrimary,
                        borderRadius: "2px",
                        selectors:
                          ((r = {}), (r[V.e] = { color: "Highlight" }), r),
                      },
                    ]),
                    (o["&:active ." + k.title] = [
                      !_ && N,
                      { borderColor: C.themePrimary },
                      Pe,
                    ]),
                    (o["&:hover ." + k.caretDown] = !_ && P),
                    (o["&:focus ." + k.caretDown] = [
                      !_ && P,
                      {
                        selectors:
                          ((a = {}), (a[V.e] = { color: "Highlight" }), a),
                      },
                    ]),
                    (o["&:active ." + k.caretDown] = !_ && P),
                    (o["&:hover ." + k.titleIsPlaceHolder] = !_ && P),
                    (o["&:focus ." + k.titleIsPlaceHolder] = !_ && P),
                    (o["&:active ." + k.titleIsPlaceHolder] = !_ && P),
                    (o["&:hover ." + k.titleHasError] = j),
                    (o["&:active ." + k.titleHasError] = j),
                    o),
                },
                v && "is-open",
                _ && "is-disabled",
                g && "is-required",
                g &&
                  !b && {
                    selectors:
                      ((s = {
                        ":before": {
                          content: "'*'",
                          color: I.errorText,
                          position: "absolute",
                          top: -5,
                          right: -10,
                        },
                      }),
                      (s[V.e] = { selectors: { ":after": { right: -14 } } }),
                      s),
                  },
              ],
              title: [
                k.title,
                V.G,
                {
                  backgroundColor: I.inputBackground,
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: I.inputBorder,
                  borderRadius: v ? H : S.roundedCorner2,
                  cursor: "pointer",
                  display: "block",
                  height: 32,
                  lineHeight: 30,
                  padding: "0 28px 0 8px",
                  position: "relative",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                },
                y && [k.titleIsPlaceHolder, { color: I.inputPlaceholderText }],
                h && [k.titleHasError, j],
                _ && {
                  backgroundColor: I.disabledBackground,
                  border: "none",
                  color: I.disabledText,
                  cursor: "default",
                  selectors:
                    ((l = {}),
                    (l[V.e] = Object(i.a)(
                      {
                        border: "1px solid GrayText",
                        color: "GrayText",
                        backgroundColor: "Window",
                      },
                      Object(V.w)()
                    )),
                    l),
                },
              ],
              caretDownWrapper: [
                k.caretDownWrapper,
                {
                  position: "absolute",
                  top: 1,
                  right: 8,
                  height: 32,
                  lineHeight: 30,
                },
                !_ && { cursor: "pointer" },
              ],
              caretDown: [
                k.caretDown,
                {
                  color: C.neutralSecondary,
                  fontSize: D.small.fontSize,
                  pointerEvents: "none",
                },
                _ && {
                  color: I.disabledText,
                  selectors:
                    ((d = {}),
                    (d[V.e] = Object(i.a)(
                      { color: "GrayText" },
                      Object(V.w)()
                    )),
                    d),
                },
              ],
              errorMessage: Object(i.a)(
                Object(i.a)({ color: I.errorText }, m.fonts.small),
                { paddingTop: 5 }
              ),
              callout: [
                k.callout,
                {
                  boxShadow: S.elevation8,
                  borderRadius: L,
                  selectors:
                    ((c = {}),
                    (c[".ms-Callout-main"] = { borderRadius: L }),
                    c),
                },
                x,
              ],
              dropdownItemsWrapper: {
                selectors: { "&:focus": { outline: 0 } },
              },
              dropdownItems: [k.dropdownItems, { display: "block" }],
              dropdownItem: Object(i.e)(R, [F()]),
              dropdownItemSelected: E,
              dropdownItemDisabled: B,
              dropdownItemSelectedAndDisabled: [
                E,
                B,
                { backgroundColor: "transparent" },
              ],
              dropdownItemHidden: Object(i.e)(R, [{ display: "none" }]),
              dropdownDivider: [
                k.dropdownDivider,
                { height: 1, backgroundColor: I.bodyDivider },
              ],
              dropdownOptionText: [
                k.dropdownOptionText,
                {
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  minWidth: 0,
                  maxWidth: "100%",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  margin: "1px",
                },
              ],
              dropdownItemHeader: [
                k.dropdownItemHeader,
                Object(i.a)(Object(i.a)({}, D.medium), {
                  fontWeight: V.d.semibold,
                  color: I.menuHeader,
                  background: "none",
                  backgroundColor: "transparent",
                  border: "none",
                  height: 36,
                  lineHeight: 36,
                  cursor: "default",
                  padding: "0 8px",
                  userSelect: "none",
                  textAlign: "left",
                  selectors:
                    ((p = {}),
                    (p[V.e] = Object(i.a)(
                      { color: "GrayText" },
                      Object(V.w)()
                    )),
                    p),
                }),
              ],
              subComponentStyles: {
                label: { root: { display: "inline-block" } },
                multiSelectItem: {
                  root: { padding: 0 },
                  label: {
                    alignSelf: "stretch",
                    padding: "0 8px",
                    width: "100%",
                  },
                },
                panel: {
                  root: [O],
                  main: { selectors: ((u = {}), (u[je] = { width: 272 }), u) },
                  contentInner: { padding: "0 0 20px" },
                },
              },
            };
          },
          void 0,
          { scope: "Dropdown" }
        );
    },
    523: function (e, t, o) {
      "use strict";
      o.d(t, "a", function () {
        return _;
      });
      var n = o(279),
        r = o(1),
        i = o(0),
        a = o(252),
        s = o(281),
        l = o(261),
        d = o(254),
        c = o(253),
        p = o(273),
        u = o(269),
        m = Object(a.a)(),
        h = (function (e) {
          function t(t, o) {
            var n = e.call(this, t, o) || this;
            return (
              (n._checkBox = i.createRef()),
              (n._renderContent = function (e, t, o) {
                void 0 === o && (o = {});
                var a = n.props,
                  d = a.disabled,
                  c = a.inputProps,
                  u = a.name,
                  m = a.ariaLabel,
                  h = a.ariaLabelledBy,
                  b = a.ariaDescribedBy,
                  f = a.onRenderLabel,
                  v = void 0 === f ? n._onRenderLabel : f,
                  _ = a.checkmarkIconProps,
                  g = a.ariaPositionInSet,
                  y = a.ariaSetSize,
                  O = a.title,
                  x = a.label;
                return i.createElement(
                  "div",
                  { className: n._classNames.root, title: O },
                  i.createElement(s.a, null),
                  i.createElement(
                    "input",
                    Object(r.a)({ type: "checkbox" }, c, {
                      "data-ktp-execute-target": o["data-ktp-execute-target"],
                      checked: e,
                      disabled: d,
                      className: n._classNames.input,
                      ref: n._checkBox,
                      name: u,
                      id: n._id,
                      title: O,
                      onChange: n._onChange,
                      onFocus: n._onFocus,
                      onBlur: n._onBlur,
                      "aria-disabled": d,
                      "aria-label": m || x,
                      "aria-labelledby": h,
                      "aria-describedby": Object(l.a)(b, o["aria-describedby"]),
                      "aria-posinset": g,
                      "aria-setsize": y,
                      "aria-checked": t ? "mixed" : e ? "true" : "false",
                    })
                  ),
                  i.createElement(
                    "label",
                    { className: n._classNames.label, htmlFor: n._id },
                    i.createElement(
                      "div",
                      {
                        className: n._classNames.checkbox,
                        "data-ktp-target": o["data-ktp-target"],
                      },
                      i.createElement(
                        p.a,
                        Object(r.a)({ iconName: "CheckMark" }, _, {
                          className: n._classNames.checkmark,
                        })
                      )
                    ),
                    v(n.props, n._onRenderLabel)
                  )
                );
              }),
              (n._onFocus = function (e) {
                var t = n.props.inputProps;
                t && t.onFocus && t.onFocus(e);
              }),
              (n._onBlur = function (e) {
                var t = n.props.inputProps;
                t && t.onBlur && t.onBlur(e);
              }),
              (n._onChange = function (e) {
                var t = n.props.onChange,
                  o = n.state,
                  r = o.isChecked;
                o.isIndeterminate
                  ? (t && t(e, r),
                    void 0 === n.props.indeterminate &&
                      n.setState({ isIndeterminate: !1 }))
                  : (t && t(e, !r),
                    void 0 === n.props.checked &&
                      n.setState({ isChecked: !r }));
              }),
              (n._onRenderLabel = function (e) {
                var t = e.label,
                  o = e.title;
                return t
                  ? i.createElement(
                      "span",
                      {
                        "aria-hidden": "true",
                        className: n._classNames.text,
                        title: o,
                      },
                      t
                    )
                  : null;
              }),
              Object(d.a)(n),
              (n._id = n.props.id || Object(c.a)("checkbox-")),
              (n.state = {
                isChecked: !!(void 0 !== t.checked
                  ? t.checked
                  : t.defaultChecked),
                isIndeterminate: !!(void 0 !== t.indeterminate
                  ? t.indeterminate
                  : t.defaultIndeterminate),
              }),
              n
            );
          }
          return (
            Object(r.c)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              var o = {};
              return (
                void 0 !== e.indeterminate &&
                  (o.isIndeterminate = !!e.indeterminate),
                void 0 !== e.checked && (o.isChecked = !!e.checked),
                Object.keys(o).length ? o : null
              );
            }),
            (t.prototype.render = function () {
              var e = this,
                t = this.props,
                o = t.className,
                n = t.disabled,
                r = t.boxSide,
                a = t.theme,
                s = t.styles,
                l = t.onRenderLabel,
                d = void 0 === l ? this._onRenderLabel : l,
                c = t.keytipProps,
                p = this.state,
                h = p.isChecked,
                b = p.isIndeterminate;
              return (
                (this._classNames = m(s, {
                  theme: a,
                  className: o,
                  disabled: n,
                  indeterminate: b,
                  checked: h,
                  reversed: "start" !== r,
                  isUsingCustomLabelRender: d !== this._onRenderLabel,
                })),
                c
                  ? i.createElement(
                      u.a,
                      { keytipProps: c, disabled: n },
                      function (t) {
                        return e._renderContent(h, b, t);
                      }
                    )
                  : this._renderContent(h, b)
              );
            }),
            Object.defineProperty(t.prototype, "indeterminate", {
              get: function () {
                return !!this.state.isIndeterminate;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "checked", {
              get: function () {
                return !!this.state.isChecked;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.focus = function () {
              this._checkBox.current && this._checkBox.current.focus();
            }),
            (t.defaultProps = { boxSide: "start" }),
            t
          );
        })(i.Component),
        b = o(5),
        f = o(122),
        v = {
          root: "ms-Checkbox",
          label: "ms-Checkbox-label",
          checkbox: "ms-Checkbox-checkbox",
          checkmark: "ms-Checkbox-checkmark",
          text: "ms-Checkbox-text",
        },
        _ = Object(n.a)(
          h,
          function (e) {
            var t,
              o,
              n,
              i,
              a,
              s,
              l,
              d,
              c,
              p,
              u,
              m,
              h,
              _,
              g,
              y,
              O,
              x,
              w = e.className,
              k = e.theme,
              C = e.reversed,
              I = e.checked,
              S = e.disabled,
              D = e.isUsingCustomLabelRender,
              N = e.indeterminate,
              P = k.semanticColors,
              j = k.effects,
              R = k.palette,
              T = k.fonts,
              F = Object(b.v)(v, k),
              E = P.inputForegroundChecked,
              B = R.neutralSecondary,
              H = R.neutralPrimary,
              L = P.inputBackgroundChecked,
              M = P.inputBackgroundChecked,
              W = P.disabledBodySubtext,
              A = P.inputBorderHovered,
              K = P.inputBackgroundCheckedHovered,
              z = P.inputBackgroundChecked,
              U = P.inputBackgroundCheckedHovered,
              Z = P.inputBackgroundCheckedHovered,
              G = P.inputTextHovered,
              q = P.disabledBodySubtext,
              Y = P.bodyText,
              J = P.disabledText,
              V = [
                ((t = {
                  content: '""',
                  borderRadius: j.roundedCorner2,
                  position: "absolute",
                  width: 10,
                  height: 10,
                  top: 4,
                  left: 4,
                  boxSizing: "border-box",
                  borderWidth: 5,
                  borderStyle: "solid",
                  borderColor: S ? W : L,
                  transitionProperty: "border-width, border, border-color",
                  transitionDuration: "200ms",
                  transitionTimingFunction: "cubic-bezier(.4, 0, .23, 1)",
                }),
                (t[b.e] = { borderColor: "WindowText" }),
                t),
              ];
            return {
              root: [
                F.root,
                { position: "relative", display: "flex" },
                C && "reversed",
                I && "is-checked",
                !S && "is-enabled",
                S && "is-disabled",
                !S && [
                  !I &&
                    ((o = {}),
                    (o[":hover ." + F.checkbox] =
                      ((n = { borderColor: A }),
                      (n[b.e] = { borderColor: "Highlight" }),
                      n)),
                    (o[":focus ." + F.checkbox] = { borderColor: A }),
                    (o[":hover ." + F.checkmark] =
                      ((i = { color: B, opacity: "1" }),
                      (i[b.e] = { color: "Highlight" }),
                      i)),
                    o),
                  I &&
                    !N &&
                    ((a = {}),
                    (a[":hover ." + F.checkbox] = {
                      background: U,
                      borderColor: Z,
                    }),
                    (a[":focus ." + F.checkbox] = {
                      background: U,
                      borderColor: Z,
                    }),
                    (a[b.e] =
                      ((s = {}),
                      (s[":hover ." + F.checkbox] = {
                        background: "Highlight",
                        borderColor: "Highlight",
                      }),
                      (s[":focus ." + F.checkbox] = {
                        background: "Highlight",
                      }),
                      (s[":focus:hover ." + F.checkbox] = {
                        background: "Highlight",
                      }),
                      (s[":focus:hover ." + F.checkmark] = { color: "Window" }),
                      (s[":hover ." + F.checkmark] = { color: "Window" }),
                      s)),
                    a),
                  N &&
                    ((l = {}),
                    (l[
                      ":hover ." +
                        F.checkbox +
                        ", :hover ." +
                        F.checkbox +
                        ":after"
                    ] =
                      ((d = { borderColor: K }),
                      (d[b.e] = { borderColor: "WindowText" }),
                      d)),
                    (l[":focus ." + F.checkbox] = { borderColor: K }),
                    (l[":hover ." + F.checkmark] = { opacity: "0" }),
                    l),
                  ((c = {}),
                  (c[":hover ." + F.text + ", :focus ." + F.text] =
                    ((p = { color: G }),
                    (p[b.e] = { color: S ? "GrayText" : "WindowText" }),
                    p)),
                  c),
                ],
                w,
              ],
              input:
                ((u = { position: "absolute", background: "none", opacity: 0 }),
                (u["." + f.a + " &:focus + label::before"] =
                  ((m = {
                    outline: "1px solid " + k.palette.neutralSecondary,
                    outlineOffset: "2px",
                  }),
                  (m[b.e] = { outline: "1px solid WindowText" }),
                  m)),
                u),
              label: [
                F.label,
                k.fonts.medium,
                {
                  display: "flex",
                  alignItems: D ? "center" : "flex-start",
                  cursor: S ? "default" : "pointer",
                  position: "relative",
                  userSelect: "none",
                },
                C && {
                  flexDirection: "row-reverse",
                  justifyContent: "flex-end",
                },
                {
                  "&::before": {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    content: '""',
                    pointerEvents: "none",
                  },
                },
              ],
              checkbox: [
                F.checkbox,
                ((h = {
                  position: "relative",
                  display: "flex",
                  flexShrink: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  height: "20px",
                  width: "20px",
                  border: "1px solid " + H,
                  borderRadius: j.roundedCorner2,
                  boxSizing: "border-box",
                  transitionProperty: "background, border, border-color",
                  transitionDuration: "200ms",
                  transitionTimingFunction: "cubic-bezier(.4, 0, .23, 1)",
                  overflow: "hidden",
                  ":after": N ? V : null,
                }),
                (h[b.e] = Object(r.a)(
                  { borderColor: "WindowText" },
                  Object(b.w)()
                )),
                h),
                N && { borderColor: L },
                C ? { marginLeft: 4 } : { marginRight: 4 },
                !S &&
                  !N &&
                  I &&
                  ((_ = { background: z, borderColor: M }),
                  (_[b.e] = {
                    background: "Highlight",
                    borderColor: "Highlight",
                  }),
                  _),
                S &&
                  ((g = { borderColor: W }),
                  (g[b.e] = { borderColor: "GrayText" }),
                  g),
                I &&
                  S &&
                  ((y = { background: q, borderColor: W }),
                  (y[b.e] = { background: "Window" }),
                  y),
              ],
              checkmark: [
                F.checkmark,
                ((O = { opacity: I ? "1" : "0", color: E }),
                (O[b.e] = Object(r.a)(
                  { color: S ? "GrayText" : "Window" },
                  Object(b.w)()
                )),
                O),
              ],
              text: [
                F.text,
                ((x = {
                  color: S ? J : Y,
                  fontSize: T.medium.fontSize,
                  lineHeight: "20px",
                }),
                (x[b.e] = Object(r.a)(
                  { color: S ? "GrayText" : "WindowText" },
                  Object(b.w)()
                )),
                x),
                C ? { marginRight: 4 } : { marginLeft: 4 },
              ],
            };
          },
          void 0,
          { scope: "Checkbox" }
        );
    },
  },
]);
//# sourceMappingURL=4.a3833be2.chunk.js.map
