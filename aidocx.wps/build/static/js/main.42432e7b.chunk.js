(this.webpackJsonpaidocx = this.webpackJsonpaidocx || []).push([
  [8],
  {
    11: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return i;
      }),
        n.d(t, "i", function () {
          return c;
        }),
        n.d(t, "f", function () {
          return s;
        }),
        n.d(t, "e", function () {
          return l;
        }),
        n.d(t, "j", function () {
          return u;
        }),
        n.d(t, "g", function () {
          return d;
        }),
        n.d(t, "h", function () {
          return p;
        }),
        n.d(t, "c", function () {
          return m;
        }),
        n.d(t, "a", function () {
          return h;
        }),
        n.d(t, "b", function () {
          return b;
        });
      var a = n(212),
        r = n(83),
        o = Object(a.a)({
          USER: {
            LOGIN: function (e) {
              return {
                tel: e.tel,
                email: e.email,
                password: e.password,
                remeber: e.remeber,
                captcha: e.captcha,
              };
            },
            SIGNUP: function (e) {
              return {
                tel: e.tel,
                email: e.email,
                password: e.password,
                username: e.username,
                captcha: e.captcha,
                owner: e.owner,
                sharer: e.sharer,
              };
            },
            LOGOUT: function () {},
            LOGIN_FINISHED: r.a,
            SIGNUP_FINISHED: r.a,
            LOGOUT_FINISHED: r.a,
            SHOW_MODAL: r.a,
            HIDE_MODAL: r.a,
            AUTO_LOGIN_START: function () {},
            AUTO_LOGIN_FINISHED: r.a,
          },
        }).user,
        i = o.login,
        c = o.signup,
        s = o.logout,
        l = o.loginFinished,
        u = o.signupFinished,
        d = o.logoutFinished,
        p = o.showModal,
        m = o.hideModal,
        h = o.autologin,
        b = o.autologinFinished;
    },
    128: function (e, t, n) {
      "use strict";
      var a = n(0),
        r = n.n(a),
        o = n(35),
        i = n.n(o),
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
            width: 220,
            height: 90,
            margin: "10px auto 0",
            backgroundColor: "#fff",
            borderRadius: 4,
            overflow: "hidden",
            textAlign: "center",
          },
        };
      function s() {
        return !(!window.ActiveXObject && !("ActiveXObject" in window));
      }
      function l() {
        return !!/Trident\/7\./.test(navigator.userAgent);
      }
      t.a = {
        dom: null,
        success: function (e) {
          var t = this,
            n = e.title,
            a = e.content,
            o = e.time;
          s() || l() || this.close(),
            (this.dom = document.createElement("div"));
          var u = r.a.createElement(
            "div",
            null,
            r.a.createElement("div", { style: c.mask }),
            r.a.createElement(
              "div",
              { style: c.modalWrap },
              r.a.createElement(
                "div",
                { style: c.modal },
                r.a.createElement("h3", null, n),
                r.a.createElement("p", null, a)
              )
            )
          );
          setTimeout(function () {
            t.close();
          }, o),
            i.a.render(u, this.dom),
            document.body.appendChild(this.dom);
        },
        close: function () {
          s() || l()
            ? this.dom && this.dom.parentNode.removeChild(this.dom)
            : this.dom && this.dom.remove();
        },
      };
    },
    142: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "a", function () {
          return i;
        });
      var a = n(0),
        r = Object(a.createContext)({ userid: "", tplid: "", showLgin: !1 }),
        o = r.Provider,
        i = r.Consumer;
    },
    144: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return i;
      }),
        n.d(t, "a", function () {
          return s;
        }),
        n.d(t, "b", function () {
          return l;
        });
      var a = n(26),
        r = n(45),
        o = n(125);
      function i(e) {
        var t = document.getElementById("status");
        null !== t && (t.innerHTML = e);
      }
      function c(e) {
        for (
          var t = new ArrayBuffer(e.length),
            n = new Uint8Array(t),
            a = 0,
            r = e.length;
          a < r;
          a++
        )
          n[a] = e.charCodeAt(a);
        return n;
      }
      function s(e, t, n, a) {
        var r = wps.WpsApplication(),
          o = r.ActiveDocument.FullName,
          s = !1;
        if (!wps.FileSystem.Exists(o)) {
          var l = r.ActiveDocument.WordOpenXML,
            u = r.Documents.Add(null, null, 0, !1),
            d = wps.Env.GetTempPath() + "\\TempDoc";
          wps.FileSystem.Exists(d) || wps.FileSystem.Mkdir(d),
            (o = d + "\\TempDoc.docx"),
            u.Range(0, 0).InsertXML(l),
            (s = !0),
            u.SaveAs2(o, 12, null, null, !1),
            u.Close(!1);
        }
        try {
          if (
            ((function (e, t, n, a, r) {
              console.log("updateDirect_fileName:", r),
                "" === r && (r = "\u672a\u547d\u540d.docx"),
                console.log("updateDirect_start_fileName:", r);
              try {
                if (wps.FileSystem.Exists(r)) {
                  var o = new FormData(),
                    s = new Blob([c(wps.FileSystem.readAsBinaryString(r))], {
                      type: "application/octet-stream",
                    }),
                    l = new window.File([s], "lite.docx", { type: s.type });
                  o.append("file", l), o.append("user_id", a);
                  var u = new XMLHttpRequest();
                  (u.onreadystatechange = function () {
                    4 === u.readyState &&
                      (200 === u.status
                        ? u.responseText.length > 35
                          ? wps.alert(
                              "\u4e0a\u4f20\u51fa\u9519\u4e86\uff1a" +
                                u.responseText
                            )
                          : n(u, r)
                        : i(
                            "\u4e0a\u4f20\u5931\u8d25,\u68c0\u67e5\u4e0a\u4f20\u5730\u5740\u662f\u5426\u6b63\u786e" +
                              u.responseText
                          ));
                  }),
                    u.open("POST", e, !0),
                    u.send(o);
                } else
                  wps.alert("\u6ca1\u6709\u627e\u5230\u6587\u4ef6\uff1a", r);
              } catch (d) {}
            })(e, 0, a, n, o),
            !0 === s)
          )
            try {
              wps.FileSystem.Remove(o);
            } catch (p) {}
        } catch (m) {}
      }
      function l(e, t, n, c) {
        console.log("composeInsert_fileName", c);
        var s =
          c.slice(0, c.length - 5) +
          (function (e) {
            for (
              var t = [
                  "0",
                  "1",
                  "2",
                  "3",
                  "4",
                  "5",
                  "6",
                  "7",
                  "8",
                  "9",
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "F",
                  "G",
                  "H",
                  "I",
                  "J",
                  "K",
                  "L",
                  "M",
                  "N",
                  "O",
                  "P",
                  "Q",
                  "R",
                  "S",
                  "T",
                  "U",
                  "V",
                  "W",
                  "X",
                  "Y",
                  "Z",
                  "a",
                  "b",
                  "c",
                  "d",
                  "e",
                  "f",
                  "g",
                  "h",
                  "i",
                  "j",
                  "k",
                  "l",
                  "m",
                  "n",
                  "o",
                  "p",
                  "q",
                  "r",
                  "s",
                  "t",
                  "u",
                  "v",
                  "w",
                  "x",
                  "y",
                  "z",
                ],
                n = "",
                a = 0;
              a < e;
              a++
            ) {
              n += t[parseInt(61 * Math.random(), 10)];
            }
            return n;
          })(12) +
          ".aidocx.docx";
        console.log("composeInsert_newName", s);
        var l = t.id,
          u = o.get("ComposeGetType");
        console.log("schema_direct_docIndex:", u),
          void 0 === u && (u = 1),
          u < 1 && (u = 1);
        var d = o.get("ComposeSet");
        void 0 === d && (d = "111111116"),
          console.log("schema_direct_optioninf\uff1a", d),
          void 0 !== t &&
            void 0 !== t.ownerid &&
            ("0" === t.ownerid || (l = "".concat(t.ownerid, "_").concat(t.id)));
        var p = e.curUser.user_id,
          m = { action: "1" };
        (m.doc_id = JSON.parse(n.responseText).id),
          (m.tpl_id = l),
          (m.options = d),
          Object(r.b)("".concat(a.apiPublicPath, "cores/Composeext"), m).then(
            function (e) {
              if (!0 === e.success) {
                console.log(
                  "composeInsert_finished_extend_data_\u63d2\u5165\u7ed3\u679c:",
                  m
                ),
                  i("\u6392\u7248\u5b8c\u6210\uff0c\u6b63\u5728\u4e0b\u8f7d"),
                  console.log("InsertSource_path:", e.doc_id);
                var t = new FormData();
                t.append("numName", 1),
                  t.append("ownerid", p),
                  t.append("tpl_id", l),
                  t.append("index", u),
                  t.append("doc_id", e.doc_id);
                var n = "".concat(
                    a.apiPublicPath,
                    "tools/downresult/downInsert"
                  ),
                  o = new XMLHttpRequest();
                (o.onreadystatechange = function () {
                  4 === o.readyState && 200 === o.status
                    ? (i("\u4e0b\u8f7d\u5b8c\u6210"), Object(r.c)(s, o, 1))
                    : 200 !== o.status && i("\u6b63\u5728\u4e0b\u8f7d\u4e2d");
                }),
                  o.open("POST", n, !0),
                  (o.responseType = "arraybuffer"),
                  o.send(t);
              }
            },
            function () {}
          );
      }
    },
    150: function (e, t, n) {
      "use strict";
      n.d(t, "i", function () {
        return H;
      }),
        n.d(t, "b", function () {
          return z;
        }),
        n.d(t, "c", function () {
          return X;
        }),
        n.d(t, "a", function () {
          return K;
        }),
        n.d(t, "e", function () {
          return q;
        }),
        n.d(t, "g", function () {
          return Z;
        }),
        n.d(t, "f", function () {
          return J;
        }),
        n.d(t, "d", function () {
          return $;
        });
      var a = n(93),
        r = n(94),
        o = n(96),
        i = n(95),
        c = n(0),
        s = n.n(c),
        l = n(79);
      function u(e) {
        var t = e.PluginStorage.getItem("writer_id");
        if (t) {
          var n = e.GetTaskPane(t);
          n.Visible = !n.Visible;
        } else {
          var a = e.CreateTaskPane(l.a.GetUrlPath() + "Writer"),
            r = a.ID;
          console.log("ShowWriterPane", a),
            console.log("ShowWriterPane", l.a.GetUrlPath() + "Writer"),
            e.PluginStorage.setItem("writer_id", r),
            (a.Visible = !0);
        }
      }
      var d = {
          OnAddinLoad: function (e) {
            return (
              "object" !== typeof wps.ribbonUI && (wps.ribbonUI = e),
              "object" !== typeof wps.Enum && (wps.Enum = l.a.WPS_Enum),
              u(wps),
              !0
            );
          },
          OnAction: function (e) {
            switch (e.Id) {
              case "btnShowComposer":
                !(function (e) {
                  var t = e.PluginStorage.getItem("composer_id");
                  if (t) {
                    var n = e.GetTaskPane(t);
                    n.Visible = !n.Visible;
                  } else {
                    var a = e.CreateTaskPane(l.a.GetUrlPath()),
                      r = a.ID;
                    console.log("ShowComposerPane", l.a.GetUrlPath()),
                      console.log("ShowComposerPane", a),
                      e.PluginStorage.setItem("composer_id", r),
                      (a.Visible = !0);
                  }
                })(wps);
                break;
              case "btnShowWriter":
                u(wps);
            }
            return !0;
          },
          GetImage: function (e) {
            switch (e.Id) {
              case "btnShowMsg":
                return "images/1.svg";
              case "btnShowDialog":
                return "images/2.svg";
              case "btnShowTaskPane":
                return "images/3.svg";
              case "btnShowWriter":
                return "images/2.svg";
              case "btnShowComposer":
                return "images/3.svg";
            }
            return "images/newFromTemp.svg";
          },
          OnGetEnabled: function (e) {
            switch (e.Id) {
              case "btnShowMsg":
                return !0;
              case "btnShowDialog":
                return wps.PluginStorage.getItem("EnableFlag");
              case "btnShowTaskPane":
                return wps.PluginStorage.getItem("EnableFlag");
            }
            return !0;
          },
          OnGetVisible: function (e) {
            var t = e.Id;
            return console.log(t), !0;
          },
          OnGetLabel: function (e) {
            switch (e.Id) {
              case "btnIsEnbable":
                return wps.PluginStorage.getItem("EnableFlag")
                  ? "\u6309\u94aeDisable"
                  : "\u6309\u94aeEnable";
              case "btnApiEvent":
                return wps.PluginStorage.getItem("ApiEventFlag")
                  ? "\u6e05\u9664\u65b0\u5efa\u6587\u4ef6\u4e8b\u4ef6"
                  : "\u6ce8\u518c\u65b0\u5efa\u6587\u4ef6\u4e8b\u4ef6";
            }
            return "";
          },
          OnNewDocumentApiEvent: function (e) {
            alert(
              "\u65b0\u5efa\u6587\u4ef6\u4e8b\u4ef6\u54cd\u5e94\uff0c\u53d6\u6587\u4ef6\u540d: " +
                e.Name
            );
          },
        },
        p = (n(194), n(70)),
        m = n(40),
        h = n.n(m),
        b = n(142),
        f = n(265),
        g = n(68),
        w = n(178),
        v = n(226),
        O = n(263),
        y = n(177),
        x = n(271),
        E = n(26),
        P = n(272),
        j = n(128),
        _ = n(11),
        S = n(125),
        I = n(154),
        C = [];
      function k(e, t) {
        return (e.code + "").length < 4
          ? "\u9a8c\u8bc1\u7801\u9519\u8bef"
          : !0 === t &&
            (console.log("userInf[email]:", e.email),
            !1 ===
              ((n = e.email),
              !0 ===
                /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(
                  n
                )))
          ? "\u90ae\u7bb1\u683c\u5f0f\u4e0d\u5408\u6cd5"
          : !1 === ((a = e.phone), !!/^1[3456789]\d{9}$/.test(a))
          ? "\u624b\u673a\u683c\u5f0f\u4e0d\u5408\u6cd5"
          : !((e.psw + "").length < 6) ||
            "\u5bc6\u7801\u957f\u5ea6\u4e0d\u591f\u6216\u8005\u4e0d\u5408\u6cd5";
        var n, a;
      }
      function D(e) {
        e = unescape(e);
        for (
          var t = String.fromCharCode(e.charCodeAt(0) - e.length), n = 1;
          n < e.length;
          n++
        )
          t += String.fromCharCode(e.charCodeAt(n) - t.charCodeAt(n - 1));
        return t;
      }
      var T = (function (e) {
          Object(o.a)(n, e);
          var t = Object(i.a)(n);
          function n(e) {
            var r;
            return (
              Object(a.a)(this, n),
              ((r = t.call(this, e))._dragOptions = {
                moveMenuItemText: "\u79fb\u52a8",
                closeMenuItemText: "\u5173\u95ed",
              }),
              (r.state = { hideEmail: !1 }),
              (r.logoutHandler = function (e) {
                r.props.logout({});
              }),
              (r.loginHandler = function (e, t) {
                r.regLogin(e, !1);
              }),
              (r.signHandler = function (e, t) {
                r.regLogin(e, !0);
              }),
              (r.signShowHandler = function (e) {
                r.props.showModal();
              }),
              (r.signHideHandler = function (e) {
                r.props.hideModal();
              }),
              (r.handleChangePhone = function (e, t) {
                C.phone = t;
              }),
              (r.handleChangePsw = function (e, t) {
                C.psw = t;
              }),
              (r.handleChangeCode = function (e, t) {
                C.code = t;
              }),
              (r.handleCodeKeypress = function (e) {
                console.log("handleCodeKeypress_handleCodeKeypress_e:", e),
                  void 0 != e && e.key;
              }),
              (r.handleEmailKeypress = function (e) {
                console.log("EmailKeypress_handleCodeKeypress_e:", e),
                  void 0 != e && e.key;
              }),
              (r.handleChangeEmail = function (e, t) {
                C.email = t;
              }),
              (r.regLogin = function (e, t) {
                var n = k(e, t);
                if (!0 === k(e, t)) {
                  var a;
                  if (
                    ((a = {
                      tel: e.phone.replace(/\s+/g, ""),
                      password: I.hex(e.psw + I.hex(e.psw)),
                      captcha: e.code.replace(/\s+/g, ""),
                      email: e.email.replace(/\s+/g, ""),
                    }),
                    r.state.isModelLoading)
                  )
                    return;
                  !0 === t ? r.props.signup(a) : r.props.login(a),
                    console.log("webaddinSigninout_onclick", r.props.user_id);
                } else
                  j.a.success({
                    title: "\u8f93\u5165\u9519\u8bef",
                    content: n,
                    time: 2e3,
                  });
              }),
              (C.phone = D(S.get("phone"))),
              (C.psw = D(S.get("pswen"))),
              (C.email = D(S.get("email"))),
              (C.code = ""),
              r
            );
          }
          return (
            Object(r.a)(n, [
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  console.log("trigger:componentDidUpdate");
                },
              },
              { key: "componentDidMount", value: function () {} },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return (
                    console.log(
                      "websinginout_this.props.isModalVisible:",
                      this.props.isModalVisible
                    ),
                    c.createElement(
                      f.a,
                      {
                        hidden: !this.props.isModalVisible,
                        onDismiss: this.props.hideModal,
                        dialogContentProps: {
                          type: g.a.normal,
                          closeButtonAriaLabel: "\u5173\u95ed",
                          title: "\u6ce8\u518c\u767b\u5f55",
                        },
                        modalProps: {
                          isBlocking: !1,
                          styles: { main: { maxWidth: 450 } },
                          dragOptions: this._dragOptions,
                        },
                      },
                      c.createElement(x.a, {
                        label: "\u624b\u673a\u53f7",
                        onChange: this.handleChangePhone,
                        required: !0,
                      }),
                      c.createElement(x.a, {
                        label: "\u5bc6\u7801",
                        type: "password",
                        onChange: this.handleChangePsw,
                        required: !0,
                      }),
                      c.createElement(
                        "div",
                        { className: "piccode" },
                        c.createElement(
                          "div",
                          { style: { display: "flex", width: "90px" } },
                          c.createElement(x.a, {
                            label: "\u9a8c\u8bc1\u7801",
                            styles: { fieldGroup: { width: 100 } },
                            onChange: this.handleChangeCode,
                            required: !0,
                          })
                        ),
                        c.createElement("img", {
                          style: { cursor: "pointer" },
                          onClick: function () {
                            return (document.getElementById("captchain").src =
                              "".concat(E.apiPublicPath, "tools/codepic?") +
                              Math.random());
                          },
                          id: "captchain",
                          className: "captchain",
                          src: "".concat(E.apiPublicPath, "tools/codepic"),
                        })
                      ),
                      c.createElement(
                        "div",
                        { hidden: !!this.state.hideEmail },
                        c.createElement(x.a, {
                          label: "Email",
                          onChange: this.handleChangeEmail,
                        })
                      ),
                      c.createElement(
                        w.a,
                        null,
                        c.createElement(
                          P.a,
                          { href: E.RootPath + "FindPsw" },
                          c.createElement(v.a, {
                            iconProps: { iconName: "ProtectRestrict" },
                            allowDisabledFocus: !0,
                          })
                        ),
                        c.createElement(O.a, {
                          onClick: function () {
                            return e.regLogin(C, !1);
                          },
                          text: "\u767b\u5f55",
                        }),
                        c.createElement(y.a, {
                          onClick: function () {
                            return e.regLogin(C, !0);
                          },
                          text: "\u6ce8\u518c",
                        })
                      )
                    )
                  );
                },
              },
            ]),
            n
          );
        })(c.Component),
        A = {
          signup: _.i,
          login: _.d,
          logout: _.f,
          showModal: _.h,
          hideModal: _.c,
        },
        M = Object(p.b)(function (e) {
          return {
            curUser: e.current,
            user_id: e.current.user_id,
            isModalVisible: e.modalVisible,
          };
        }, A)(T),
        F = n(146),
        U = n(22),
        N = (n(45), n(264));
      n(154), n(125);
      Object(N.a)();
      var L = function (e) {
          return e.error
            ? s.a.createElement(
                "div",
                { align: "center", marginTop: "50px", marginBotton: "50px" },
                s.a.createElement(
                  "h2",
                  null,
                  "\u5bf9\u4e0d\u8d77\uff0c\u52a0\u8f7d\u9047\u5230\u9519\u8bef\uff0c\u8bf7\u5237\u65b0\u754c\u9762\uff01",
                  s.a.createElement(
                    "button",
                    { onClick: e.retry },
                    "\u5237\u65b0"
                  )
                )
              )
            : e.timedOut
            ? s.a.createElement(
                "div",
                { align: "center", marginTop: "50px", marginBotton: "50px" },
                s.a.createElement(
                  "h2",
                  null,
                  "\u5bf9\u4e0d\u8d77\uff0c\u52a0\u8f7d\u8d85\u65f6\uff0c\u8bf7\u5237\u65b0\u754c\u9762\uff01 ",
                  s.a.createElement(
                    "button",
                    { onClick: e.retry },
                    "\u91cd\u8bd5"
                  )
                )
              )
            : (e.pastDelay, s.a.createElement("p", null));
        },
        G = h()({
          loader: function () {
            return n.e(17).then(n.bind(null, 498));
          },
          loading: L,
          delay: 1500,
          timeout: 1e4,
        }),
        W = h()({
          loader: function () {
            return Promise.all([n.e(1), n.e(22)]).then(n.bind(null, 499));
          },
          loading: L,
          delay: 1500,
          timeout: 1e4,
        }),
        V = h()({
          loader: function () {
            return Promise.all([n.e(0), n.e(2), n.e(3), n.e(5), n.e(11)]).then(
              n.bind(null, 508)
            );
          },
          loading: L,
          delay: 1500,
          timeout: 1e4,
        }),
        R = h()({
          loader: function () {
            return Promise.all([n.e(1), n.e(16)]).then(n.bind(null, 500));
          },
          loading: L,
          delay: 1500,
          timeout: 1e4,
        }),
        B = h()({
          loader: function () {
            return n.e(25).then(n.bind(null, 501));
          },
          loading: L,
          delay: 1500,
          timeout: 1e4,
        }),
        H = h()({
          loader: function () {
            return Promise.all([n.e(0), n.e(2), n.e(24)]).then(
              n.bind(null, 502)
            );
          },
          loading: L,
          delay: 1500,
          timeout: 1e4,
        }),
        z = h()({
          loader: function () {
            return Promise.all([n.e(1), n.e(4), n.e(6), n.e(21), n.e(15)]).then(
              n.bind(null, 525)
            );
          },
          loading: L,
          delay: 1500,
          timeout: 1e4,
        }),
        X = h()({
          loader: function () {
            return Promise.all([n.e(1), n.e(4), n.e(6), n.e(20), n.e(12)]).then(
              n.bind(null, 526)
            );
          },
          loading: L,
          delay: 1500,
          timeout: 1e4,
        }),
        K = h()({
          loader: function () {
            return Promise.all([n.e(1), n.e(4), n.e(13), n.e(14)]).then(
              n.bind(null, 519)
            );
          },
          loading: L,
          delay: 1500,
          timeout: 1e4,
        }),
        q = h()({
          loader: function () {
            return Promise.all([n.e(0), n.e(2), n.e(7), n.e(19)]).then(
              n.bind(null, 505)
            );
          },
          loading: L,
          delay: 1500,
          timeout: 1e4,
        }),
        Z = h()({
          loader: function () {
            return Promise.all([n.e(0), n.e(2), n.e(3), n.e(7), n.e(23)]).then(
              n.bind(null, 506)
            );
          },
          loading: L,
          delay: 1500,
          timeout: 1e4,
        }),
        J = h()({
          loader: function () {
            return n.e(18).then(n.bind(null, 507));
          },
          loading: L,
          delay: 1500,
          timeout: 1e4,
        }),
        $ = h()({
          loader: function () {
            return Promise.all([n.e(0), n.e(3), n.e(5), n.e(26)]).then(
              n.bind(null, 514)
            );
          },
          loading: L,
          delay: 1500,
          timeout: 1e4,
        });
      var Q = (function (e) {
          Object(o.a)(n, e);
          var t = Object(i.a)(n);
          function n(e) {
            var r;
            return (
              Object(a.a)(this, n),
              ((r = t.call(this, e)).selectData = function (e) {
                r.setState({ SelectID: e }),
                  console.log("selectData_e", e),
                  console.log(
                    "app_componentDidMount_this.props.curUser",
                    r.props.curUser
                  ),
                  console.log("app_componentDidMount_state", r.state);
              }),
              (r.useData = function (e) {
                console.log(
                  "app_componentDidMount_this.props.curUser",
                  r.props.curUser
                ),
                  console.log("app_componentDidMount_state", r.state);
              }),
              (r.state = {}),
              console.log("init ribbon"),
              (window.ribbon = d),
              r
            );
          }
          return (
            Object(r.a)(n, [
              { key: "componentDidUpdate", value: function (e, t) {} },
              { key: "componentDidMount", value: function () {} },
              {
                key: "render",
                value: function () {
                  return s.a.createElement(
                    "div",
                    { className: "App" },
                    s.a.createElement(
                      b.b,
                      {
                        value: {
                          state: this.state,
                          selectData: this.selectData,
                          useData: this.useData,
                        },
                      },
                      s.a.createElement(
                        F.a,
                        null,
                        s.a.createElement(
                          U.d,
                          null,
                          s.a.createElement(U.b, {
                            exact: !0,
                            path: "/",
                            component: G,
                          }),
                          s.a.createElement(U.b, {
                            path: "/DemoVideo",
                            component: W,
                          }),
                          s.a.createElement(U.b, {
                            path: "/AboutUs",
                            component: R,
                          }),
                          s.a.createElement(U.b, {
                            path: "/Compose",
                            component: B,
                          }),
                          s.a.createElement(U.b, {
                            path: "/Writer",
                            component: V,
                          }),
                          s.a.createElement(U.b, {
                            render: function () {
                              return s.a.createElement(U.a, { to: "/" });
                            },
                          })
                        )
                      ),
                      s.a.createElement(M, null),
                      this.props.autologin()
                    )
                  );
                },
              },
            ]),
            n
          );
        })(s.a.Component),
        Y = { autologin: _.a };
      t.h = Object(p.b)(function (e) {
        return {
          curUser: e.current,
          user_id: e.current.user_id,
          isModalVisible: e.modalVisible,
        };
      }, Y)(Q);
    },
    189: function (e, t, n) {
      e.exports = n(205);
    },
    194: function (e, t, n) {},
    205: function (e, t, n) {
      "use strict";
      n.r(t);
      var a,
        r,
        o = n(0),
        i = n.n(o),
        c = n(35),
        s = n.n(c),
        l = n(176),
        u = n(150),
        d = n(70),
        p = n(61),
        m = n(174),
        h = n(57),
        b = n(266),
        f = n(277),
        g = n(11),
        w = Object(b.a)(
          Object(h.a)({}, Object(f.a)(g.e, g.j, g.b, g.f), {
            next: function (e, t) {
              return t.payload;
            },
          }),
          {}
        ),
        v = Object(b.a)(
          ((a = {}),
          Object(h.a)(a, Object(f.a)(g.d, g.a, g.i), function () {
            return !0;
          }),
          Object(h.a)(a, Object(f.a)(g.e, g.b, g.j), function () {
            return !1;
          }),
          a),
          !1
        ),
        O = Object(b.a)(
          ((r = {}),
          Object(h.a)(r, g.h, function () {
            return !0;
          }),
          Object(h.a)(r, g.e, function () {
            return !1;
          }),
          Object(h.a)(r, g.j, function () {
            return !1;
          }),
          Object(h.a)(r, g.b, function () {
            return !1;
          }),
          Object(h.a)(r, g.c, function () {
            return !1;
          }),
          r),
          !1
        ),
        y = Object(p.b)({ current: w, isLoading: v, modalVisible: O }),
        x = n(21),
        E = n.n(x),
        P = n(23),
        j = n(175),
        _ = (n(65), n(45)),
        S = n(26);
      function I(e) {
        return Object(_.b)(
          "".concat(S.apiPublicPath, "users/reglogin/register"),
          e
        );
      }
      function C(e) {
        return Object(_.b)(
          "".concat(S.apiPublicPath, "users/reglogin/login"),
          e
        );
      }
      function k(e) {
        return Object(_.a)(
          "".concat(S.apiPublicPath, "users/reglogin/index"),
          e
        );
      }
      function D(e) {
        return Object(_.b)(
          "".concat(S.apiPublicPath, "users/reglogin/logout"),
          e
        );
      }
      var T = E.a.mark(N),
        A = E.a.mark(L),
        M = E.a.mark(G),
        F = E.a.mark(W),
        U = E.a.mark(V);
      function N(e) {
        var t, n, a;
        return E.a.wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (t = e.payload),
                    (r.prev = 1),
                    (r.next = 4),
                    Object(P.a)(C, t)
                  );
                case 4:
                  return (n = r.sent), (r.next = 7), Object(P.a)(g.e, n);
                case 7:
                  return (
                    (a = r.sent),
                    void 0 === n ||
                      !0 === n.success ||
                      (j.b.error(n.msg),
                      (document.getElementById("captchain").src =
                        "".concat(S.apiPublicPath, "tools/codepic?") +
                        Math.random())),
                    (r.next = 11),
                    Object(P.b)(a)
                  );
                case 11:
                  r.next = 17;
                  break;
                case 13:
                  return (
                    (r.prev = 13),
                    (r.t0 = r.catch(1)),
                    (r.next = 17),
                    Object(P.b)(Object(g.e)(r.t0))
                  );
                case 17:
                case "end":
                  return r.stop();
              }
          },
          T,
          null,
          [[1, 13]]
        );
      }
      function L(e) {
        var t, n, a;
        return E.a.wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (t = e.payload),
                    (r.prev = 1),
                    (r.next = 4),
                    Object(P.a)(k, t)
                  );
                case 4:
                  return (n = r.sent), (r.next = 7), Object(P.a)(g.b, n);
                case 7:
                  return (
                    (a = r.sent),
                    void 0 === n || n.success,
                    (r.next = 11),
                    Object(P.b)(a)
                  );
                case 11:
                  r.next = 17;
                  break;
                case 13:
                  return (
                    (r.prev = 13),
                    (r.t0 = r.catch(1)),
                    (r.next = 17),
                    Object(P.b)(Object(g.e)(r.t0))
                  );
                case 17:
                case "end":
                  return r.stop();
              }
          },
          A,
          null,
          [[1, 13]]
        );
      }
      function G(e) {
        var t, n, a;
        return E.a.wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (t = e.payload),
                    (r.prev = 1),
                    (r.next = 4),
                    Object(P.a)(D, t)
                  );
                case 4:
                  return (n = r.sent), (r.next = 7), Object(P.a)(g.g, n);
                case 7:
                  return (a = r.sent), (r.next = 10), Object(P.b)(a);
                case 10:
                  r.next = 16;
                  break;
                case 12:
                  return (
                    (r.prev = 12),
                    (r.t0 = r.catch(1)),
                    (r.next = 16),
                    Object(P.b)(Object(g.g)(r.t0))
                  );
                case 16:
                case "end":
                  return r.stop();
              }
          },
          M,
          null,
          [[1, 12]]
        );
      }
      function W(e) {
        var t, n, a;
        return E.a.wrap(
          function (r) {
            for (;;)
              switch ((r.prev = r.next)) {
                case 0:
                  return (
                    (t = e.payload),
                    (r.prev = 1),
                    (r.next = 4),
                    Object(P.a)(I, t)
                  );
                case 4:
                  return (n = r.sent), (r.next = 7), Object(P.a)(g.j, n);
                case 7:
                  return (
                    (a = r.sent),
                    void 0 === n ||
                      !0 === n.success ||
                      (j.b.error(n.msg),
                      (document.getElementById("captchain").src =
                        "".concat(S.apiPublicPath, "tools/codepic?") +
                        Math.random())),
                    (r.next = 11),
                    Object(P.b)(a)
                  );
                case 11:
                  r.next = 17;
                  break;
                case 13:
                  return (
                    (r.prev = 13),
                    (r.t0 = r.catch(1)),
                    (r.next = 17),
                    Object(P.b)(Object(g.j)(r.t0))
                  );
                case 17:
                case "end":
                  return r.stop();
              }
          },
          F,
          null,
          [[1, 13]]
        );
      }
      function V() {
        return E.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), Object(P.c)(g.d, N);
              case 2:
                return (e.next = 4), Object(P.c)(g.a, L);
              case 4:
                return (e.next = 6), Object(P.c)(g.i, W);
              case 6:
                return (e.next = 8), Object(P.c)(g.f, G);
              case 8:
              case "end":
                return e.stop();
            }
        }, U);
      }
      var R = Object(l.a)(),
        B = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || p.c,
        H = Object(p.d)(y, {}, B(Object(p.a)(R)));
      R.run(V),
        s.a.render(
          i.a.createElement(
            d.a,
            { store: H },
            i.a.createElement(
              m.AppContainer,
              null,
              i.a.createElement(u.h, { title: "\u7b77\u5b50\u6587\u6863" })
            )
          ),
          document.getElementById("root")
        );
    },
    26: function (e, t) {
      e.exports = {
        publicPath: "/",
        apiPublicPath: "/api/",
        apiWritePath: "/vstoapi/",
        RootPath: "https://www.aidocx.com/",
      };
    },
    45: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return l;
        }),
        n.d(t, "c", function () {
          return d;
        });
      var a = n(21),
        r = n.n(a),
        o = n(65),
        i = n(144);
      function c(e) {
        return s.apply(this, arguments);
      }
      function s() {
        return (s = Object(o.a)(
          r.a.mark(function e(t) {
            var n,
              a,
              o,
              i = arguments;
            return r.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        i.length > 1 && void 0 !== i[1] ? i[1] : {},
                        (n = { method: "GET", credentials: "same-origin" }),
                        console.log("handleFetch_url\uff1a", t),
                        (e.prev = 3),
                        (e.next = 6),
                        fetch(t, n)
                      );
                    case 6:
                      if ("string" === typeof (a = e.sent)) {
                        e.next = 18;
                        break;
                      }
                      if (void 0 === a || "object" !== typeof a || !a) {
                        e.next = 16;
                        break;
                      }
                      o = "";
                      try {
                        o = a.json();
                      } catch (r) {}
                      if ("object" === typeof o) {
                        e.next = 15;
                        break;
                      }
                      return e.abrupt("return", { success: !1 });
                    case 15:
                      return e.abrupt("return", o);
                    case 16:
                      e.next = 18;
                      break;
                    case 18:
                      e.next = 22;
                      break;
                    case 20:
                      (e.prev = 20), (e.t0 = e.catch(3));
                    case 22:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[3, 20]]
            );
          })
        )).apply(this, arguments);
      }
      function l(e, t) {
        return u.apply(this, arguments);
      }
      function u() {
        return (u = Object(o.a)(
          r.a.mark(function e(t, n) {
            var a, o;
            return r.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(n),
                        }),
                        console.log("handlePost_url\uff1a", t),
                        (e.prev = 2),
                        (e.next = 5),
                        fetch(t, a)
                      );
                    case 5:
                      if ("string" === typeof (o = e.sent)) {
                        e.next = 11;
                        break;
                      }
                      if (void 0 === o || "object" !== typeof o || !o) {
                        e.next = 9;
                        break;
                      }
                      return e.abrupt("return", o.json());
                    case 9:
                      e.next = 11;
                      break;
                    case 11:
                      e.next = 15;
                      break;
                    case 13:
                      (e.prev = 13), (e.t0 = e.catch(2));
                    case 15:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[2, 13]]
            );
          })
        )).apply(this, arguments);
      }
      function d(e, t, n) {
        var a = new Blob([t.response]),
          r = new FileReader();
        r.readAsBinaryString(a),
          (r.onload = function () {
            if (-1 === e.indexOf("\\") && -1 === e.indexOf("/")) {
              var t = wps.Env.GetTempPath() + "\\TempSource";
              wps.FileSystem.Exists(t) || wps.FileSystem.Mkdir(t),
                (e = t + "/" + e);
            }
            (wps.FileSystem.writeAsBinaryString(e, this.result),
            1 === n &&
              (wps.FileSystem.Exists(e)
                ? wps.WpsApplication().Documents.Open(e)
                : Object(i.c)("\u4e0b\u8f7d\u5931\u8d25\uff01")),
            2 === n) &&
              wps.FileSystem.Exists(e) &&
              (wps.WpsApplication().Selection.Range.InsertFile(e),
              wps.FileSystem.Remove(e));
          });
      }
    },
    79: function (e, t, n) {
      "use strict";
      t.a = {
        WPS_Enum: { msoCTPDockPositionLeft: 0, msoCTPDockPositionRight: 2 },
        GetUrlPath: function () {
          var e = document.location.toString();
          return (
            -1 !== (e = decodeURI(e)).indexOf("/") &&
              (e = e.substring(0, e.lastIndexOf("/"))),
            e
          );
        },
      };
    },
  },
  [[189, 9, 10]],
]);
//# sourceMappingURL=main.42432e7b.chunk.js.map
