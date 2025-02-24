function De({ node: e }) {
  return e.body.filter((r) => r.type === "ImportDeclaration");
}
function ir({ importNodes: e, sourceCode: r }) {
  return e.map((t) => r.getText(t));
}
function _e(e) {
  return e.replace(/\r\n/g, `
`).trim();
}
function ar(e) {
  return e.replace(/^\n+|\n+$/g, "").replace(/\n{2,}/g, `
`);
}
function me(e) {
  return e.replace(/\r/g, "");
}
var Ne = typeof global == "object" && global && global.Object === Object && global, or = typeof self == "object" && self && self.Object === Object && self, v = Ne || or || Function("return this")(), $ = v.Symbol, ze = Object.prototype, sr = ze.hasOwnProperty, ur = ze.toString, M = $ ? $.toStringTag : void 0;
function fr(e) {
  var r = sr.call(e, M), t = e[M];
  try {
    e[M] = void 0;
    var n = !0;
  } catch {
  }
  var a = ur.call(e);
  return n && (r ? e[M] = t : delete e[M]), a;
}
var cr = Object.prototype, pr = cr.toString;
function lr(e) {
  return pr.call(e);
}
var gr = "[object Null]", dr = "[object Undefined]", ye = $ ? $.toStringTag : void 0;
function C(e) {
  return e == null ? e === void 0 ? dr : gr : ye && ye in Object(e) ? fr(e) : lr(e);
}
function S(e) {
  return e != null && typeof e == "object";
}
var hr = "[object Symbol]";
function L(e) {
  return typeof e == "symbol" || S(e) && C(e) == hr;
}
function U(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, a = Array(n); ++t < n; )
    a[t] = r(e[t], t, e);
  return a;
}
var h = Array.isArray, be = $ ? $.prototype : void 0, ve = be ? be.toString : void 0;
function Ue(e) {
  if (typeof e == "string")
    return e;
  if (h(e))
    return U(e, Ue) + "";
  if (L(e))
    return ve ? ve.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -1 / 0 ? "-0" : r;
}
function ne(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
function ie(e) {
  return e;
}
var _r = "[object AsyncFunction]", mr = "[object Function]", yr = "[object GeneratorFunction]", br = "[object Proxy]";
function He(e) {
  if (!ne(e))
    return !1;
  var r = C(e);
  return r == mr || r == yr || r == _r || r == br;
}
var Y = v["__core-js_shared__"], Te = function() {
  var e = /[^.]+$/.exec(Y && Y.keys && Y.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function vr(e) {
  return !!Te && Te in e;
}
var Tr = Function.prototype, wr = Tr.toString;
function E(e) {
  if (e != null) {
    try {
      return wr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ar = /[\\^$.*+?()[\]{}|]/g, $r = /^\[object .+?Constructor\]$/, Or = Function.prototype, Pr = Object.prototype, xr = Or.toString, Er = Pr.hasOwnProperty, Sr = RegExp(
  "^" + xr.call(Er).replace(Ar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Cr(e) {
  if (!ne(e) || vr(e))
    return !1;
  var r = He(e) ? Sr : $r;
  return r.test(E(e));
}
function Ir(e, r) {
  return e == null ? void 0 : e[r];
}
function I(e, r) {
  var t = Ir(e, r);
  return Cr(t) ? t : void 0;
}
var k = I(v, "WeakMap");
function Mr(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var jr = 9007199254740991, Lr = /^(?:0|[1-9]\d*)$/;
function ae(e, r) {
  var t = typeof e;
  return r = r ?? jr, !!r && (t == "number" || t != "symbol" && Lr.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
function Ke(e, r) {
  return e === r || e !== e && r !== r;
}
var Rr = 9007199254740991;
function oe(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Rr;
}
function X(e) {
  return e != null && oe(e.length) && !He(e);
}
var Fr = Object.prototype;
function qe(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || Fr;
  return e === t;
}
function Gr(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var Br = "[object Arguments]";
function we(e) {
  return S(e) && C(e) == Br;
}
var Xe = Object.prototype, Dr = Xe.hasOwnProperty, Nr = Xe.propertyIsEnumerable, se = we(/* @__PURE__ */ function() {
  return arguments;
}()) ? we : function(e) {
  return S(e) && Dr.call(e, "callee") && !Nr.call(e, "callee");
};
function zr() {
  return !1;
}
var Ze = typeof exports == "object" && exports && !exports.nodeType && exports, Ae = Ze && typeof module == "object" && module && !module.nodeType && module, Ur = Ae && Ae.exports === Ze, $e = Ur ? v.Buffer : void 0, Hr = $e ? $e.isBuffer : void 0, H = Hr || zr, Kr = "[object Arguments]", qr = "[object Array]", Xr = "[object Boolean]", Zr = "[object Date]", Wr = "[object Error]", Jr = "[object Function]", Yr = "[object Map]", Qr = "[object Number]", Vr = "[object Object]", kr = "[object RegExp]", et = "[object Set]", rt = "[object String]", tt = "[object WeakMap]", nt = "[object ArrayBuffer]", it = "[object DataView]", at = "[object Float32Array]", ot = "[object Float64Array]", st = "[object Int8Array]", ut = "[object Int16Array]", ft = "[object Int32Array]", ct = "[object Uint8Array]", pt = "[object Uint8ClampedArray]", lt = "[object Uint16Array]", gt = "[object Uint32Array]", p = {};
p[at] = p[ot] = p[st] = p[ut] = p[ft] = p[ct] = p[pt] = p[lt] = p[gt] = !0;
p[Kr] = p[qr] = p[nt] = p[Xr] = p[it] = p[Zr] = p[Wr] = p[Jr] = p[Yr] = p[Qr] = p[Vr] = p[kr] = p[et] = p[rt] = p[tt] = !1;
function dt(e) {
  return S(e) && oe(e.length) && !!p[C(e)];
}
function We(e) {
  return function(r) {
    return e(r);
  };
}
var Je = typeof exports == "object" && exports && !exports.nodeType && exports, j = Je && typeof module == "object" && module && !module.nodeType && module, ht = j && j.exports === Je, Q = ht && Ne.process, Oe = function() {
  try {
    var e = j && j.require && j.require("util").types;
    return e || Q && Q.binding && Q.binding("util");
  } catch {
  }
}(), Pe = Oe && Oe.isTypedArray, ue = Pe ? We(Pe) : dt, _t = Object.prototype, mt = _t.hasOwnProperty;
function yt(e, r) {
  var t = h(e), n = !t && se(e), a = !t && !n && H(e), i = !t && !n && !a && ue(e), o = t || n || a || i, s = o ? Gr(e.length, String) : [], u = s.length;
  for (var f in e)
    mt.call(e, f) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    ae(f, u))) && s.push(f);
  return s;
}
function bt(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var vt = bt(Object.keys, Object), Tt = Object.prototype, wt = Tt.hasOwnProperty;
function Ye(e) {
  if (!qe(e))
    return vt(e);
  var r = [];
  for (var t in Object(e))
    wt.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
function fe(e) {
  return X(e) ? yt(e) : Ye(e);
}
var At = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $t = /^\w*$/;
function ce(e, r) {
  if (h(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || L(e) ? !0 : $t.test(e) || !At.test(e) || r != null && e in Object(r);
}
var R = I(Object, "create");
function Ot() {
  this.__data__ = R ? R(null) : {}, this.size = 0;
}
function Pt(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var xt = "__lodash_hash_undefined__", Et = Object.prototype, St = Et.hasOwnProperty;
function Ct(e) {
  var r = this.__data__;
  if (R) {
    var t = r[e];
    return t === xt ? void 0 : t;
  }
  return St.call(r, e) ? r[e] : void 0;
}
var It = Object.prototype, Mt = It.hasOwnProperty;
function jt(e) {
  var r = this.__data__;
  return R ? r[e] !== void 0 : Mt.call(r, e);
}
var Lt = "__lodash_hash_undefined__";
function Rt(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = R && r === void 0 ? Lt : r, this;
}
function x(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
x.prototype.clear = Ot;
x.prototype.delete = Pt;
x.prototype.get = Ct;
x.prototype.has = jt;
x.prototype.set = Rt;
function Ft() {
  this.__data__ = [], this.size = 0;
}
function Z(e, r) {
  for (var t = e.length; t--; )
    if (Ke(e[t][0], r))
      return t;
  return -1;
}
var Gt = Array.prototype, Bt = Gt.splice;
function Dt(e) {
  var r = this.__data__, t = Z(r, e);
  if (t < 0)
    return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : Bt.call(r, t, 1), --this.size, !0;
}
function Nt(e) {
  var r = this.__data__, t = Z(r, e);
  return t < 0 ? void 0 : r[t][1];
}
function zt(e) {
  return Z(this.__data__, e) > -1;
}
function Ut(e, r) {
  var t = this.__data__, n = Z(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : t[n][1] = r, this;
}
function T(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
T.prototype.clear = Ft;
T.prototype.delete = Dt;
T.prototype.get = Nt;
T.prototype.has = zt;
T.prototype.set = Ut;
var F = I(v, "Map");
function Ht() {
  this.size = 0, this.__data__ = {
    hash: new x(),
    map: new (F || T)(),
    string: new x()
  };
}
function Kt(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
function W(e, r) {
  var t = e.__data__;
  return Kt(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
function qt(e) {
  var r = W(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
function Xt(e) {
  return W(this, e).get(e);
}
function Zt(e) {
  return W(this, e).has(e);
}
function Wt(e, r) {
  var t = W(this, e), n = t.size;
  return t.set(e, r), this.size += t.size == n ? 0 : 1, this;
}
function w(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
w.prototype.clear = Ht;
w.prototype.delete = qt;
w.prototype.get = Xt;
w.prototype.has = Zt;
w.prototype.set = Wt;
var Jt = "Expected a function";
function pe(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(Jt);
  var t = function() {
    var n = arguments, a = r ? r.apply(this, n) : n[0], i = t.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return t.cache = i.set(a, o) || i, o;
  };
  return t.cache = new (pe.Cache || w)(), t;
}
pe.Cache = w;
var Yt = 500;
function Qt(e) {
  var r = pe(e, function(n) {
    return t.size === Yt && t.clear(), n;
  }), t = r.cache;
  return r;
}
var Vt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, kt = /\\(\\)?/g, en = Qt(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(Vt, function(t, n, a, i) {
    r.push(a ? i.replace(kt, "$1") : n || t);
  }), r;
});
function Qe(e) {
  return e == null ? "" : Ue(e);
}
function le(e, r) {
  return h(e) ? e : ce(e, r) ? [e] : en(Qe(e));
}
function B(e) {
  if (typeof e == "string" || L(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -1 / 0 ? "-0" : r;
}
function J(e, r) {
  r = le(r, e);
  for (var t = 0, n = r.length; e != null && t < n; )
    e = e[B(r[t++])];
  return t && t == n ? e : void 0;
}
function rn(e, r, t) {
  var n = e == null ? void 0 : J(e, r);
  return n === void 0 ? t : n;
}
function tn(e, r) {
  for (var t = -1, n = r.length, a = e.length; ++t < n; )
    e[a + t] = r[t];
  return e;
}
function nn(e, r, t) {
  var n = -1, a = e.length;
  r < 0 && (r = -r > a ? 0 : a + r), t = t > a ? a : t, t < 0 && (t += a), a = r > t ? 0 : t - r >>> 0, r >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + r];
  return i;
}
function an() {
  this.__data__ = new T(), this.size = 0;
}
function on(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
function sn(e) {
  return this.__data__.get(e);
}
function un(e) {
  return this.__data__.has(e);
}
var fn = 200;
function cn(e, r) {
  var t = this.__data__;
  if (t instanceof T) {
    var n = t.__data__;
    if (!F || n.length < fn - 1)
      return n.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new w(n);
  }
  return t.set(e, r), this.size = t.size, this;
}
function b(e) {
  var r = this.__data__ = new T(e);
  this.size = r.size;
}
b.prototype.clear = an;
b.prototype.delete = on;
b.prototype.get = sn;
b.prototype.has = un;
b.prototype.set = cn;
function pn(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++t < n; ) {
    var o = e[t];
    r(o, t, e) && (i[a++] = o);
  }
  return i;
}
function ln() {
  return [];
}
var gn = Object.prototype, dn = gn.propertyIsEnumerable, xe = Object.getOwnPropertySymbols, hn = xe ? function(e) {
  return e == null ? [] : (e = Object(e), pn(xe(e), function(r) {
    return dn.call(e, r);
  }));
} : ln;
function _n(e, r, t) {
  var n = r(e);
  return h(e) ? n : tn(n, t(e));
}
function Ee(e) {
  return _n(e, fe, hn);
}
var ee = I(v, "DataView"), re = I(v, "Promise"), te = I(v, "Set"), Se = "[object Map]", mn = "[object Object]", Ce = "[object Promise]", Ie = "[object Set]", Me = "[object WeakMap]", je = "[object DataView]", yn = E(ee), bn = E(F), vn = E(re), Tn = E(te), wn = E(k), y = C;
(ee && y(new ee(new ArrayBuffer(1))) != je || F && y(new F()) != Se || re && y(re.resolve()) != Ce || te && y(new te()) != Ie || k && y(new k()) != Me) && (y = function(e) {
  var r = C(e), t = r == mn ? e.constructor : void 0, n = t ? E(t) : "";
  if (n)
    switch (n) {
      case yn:
        return je;
      case bn:
        return Se;
      case vn:
        return Ce;
      case Tn:
        return Ie;
      case wn:
        return Me;
    }
  return r;
});
var Le = v.Uint8Array, An = "__lodash_hash_undefined__";
function $n(e) {
  return this.__data__.set(e, An), this;
}
function On(e) {
  return this.__data__.has(e);
}
function K(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new w(); ++r < t; )
    this.add(e[r]);
}
K.prototype.add = K.prototype.push = $n;
K.prototype.has = On;
function Pn(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n; )
    if (r(e[t], t, e))
      return !0;
  return !1;
}
function xn(e, r) {
  return e.has(r);
}
var En = 1, Sn = 2;
function Ve(e, r, t, n, a, i) {
  var o = t & En, s = e.length, u = r.length;
  if (s != u && !(o && u > s))
    return !1;
  var f = i.get(e), g = i.get(r);
  if (f && g)
    return f == r && g == e;
  var l = -1, c = !0, d = t & Sn ? new K() : void 0;
  for (i.set(e, r), i.set(r, e); ++l < s; ) {
    var _ = e[l], m = r[l];
    if (n)
      var A = o ? n(m, _, l, r, e, i) : n(_, m, l, e, r, i);
    if (A !== void 0) {
      if (A)
        continue;
      c = !1;
      break;
    }
    if (d) {
      if (!Pn(r, function(O, P) {
        if (!xn(d, P) && (_ === O || a(_, O, t, n, i)))
          return d.push(P);
      })) {
        c = !1;
        break;
      }
    } else if (!(_ === m || a(_, m, t, n, i))) {
      c = !1;
      break;
    }
  }
  return i.delete(e), i.delete(r), c;
}
function Cn(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(n, a) {
    t[++r] = [a, n];
  }), t;
}
function In(e) {
  var r = -1, t = Array(e.size);
  return e.forEach(function(n) {
    t[++r] = n;
  }), t;
}
var Mn = 1, jn = 2, Ln = "[object Boolean]", Rn = "[object Date]", Fn = "[object Error]", Gn = "[object Map]", Bn = "[object Number]", Dn = "[object RegExp]", Nn = "[object Set]", zn = "[object String]", Un = "[object Symbol]", Hn = "[object ArrayBuffer]", Kn = "[object DataView]", Re = $ ? $.prototype : void 0, V = Re ? Re.valueOf : void 0;
function qn(e, r, t, n, a, i, o) {
  switch (t) {
    case Kn:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      e = e.buffer, r = r.buffer;
    case Hn:
      return !(e.byteLength != r.byteLength || !i(new Le(e), new Le(r)));
    case Ln:
    case Rn:
    case Bn:
      return Ke(+e, +r);
    case Fn:
      return e.name == r.name && e.message == r.message;
    case Dn:
    case zn:
      return e == r + "";
    case Gn:
      var s = Cn;
    case Nn:
      var u = n & Mn;
      if (s || (s = In), e.size != r.size && !u)
        return !1;
      var f = o.get(e);
      if (f)
        return f == r;
      n |= jn, o.set(e, r);
      var g = Ve(s(e), s(r), n, a, i, o);
      return o.delete(e), g;
    case Un:
      if (V)
        return V.call(e) == V.call(r);
  }
  return !1;
}
var Xn = 1, Zn = Object.prototype, Wn = Zn.hasOwnProperty;
function Jn(e, r, t, n, a, i) {
  var o = t & Xn, s = Ee(e), u = s.length, f = Ee(r), g = f.length;
  if (u != g && !o)
    return !1;
  for (var l = u; l--; ) {
    var c = s[l];
    if (!(o ? c in r : Wn.call(r, c)))
      return !1;
  }
  var d = i.get(e), _ = i.get(r);
  if (d && _)
    return d == r && _ == e;
  var m = !0;
  i.set(e, r), i.set(r, e);
  for (var A = o; ++l < u; ) {
    c = s[l];
    var O = e[c], P = r[c];
    if (n)
      var he = o ? n(P, O, c, r, e, i) : n(O, P, c, e, r, i);
    if (!(he === void 0 ? O === P || a(O, P, t, n, i) : he)) {
      m = !1;
      break;
    }
    A || (A = c == "constructor");
  }
  if (m && !A) {
    var D = e.constructor, N = r.constructor;
    D != N && "constructor" in e && "constructor" in r && !(typeof D == "function" && D instanceof D && typeof N == "function" && N instanceof N) && (m = !1);
  }
  return i.delete(e), i.delete(r), m;
}
var Yn = 1, Fe = "[object Arguments]", Ge = "[object Array]", z = "[object Object]", Qn = Object.prototype, Be = Qn.hasOwnProperty;
function Vn(e, r, t, n, a, i) {
  var o = h(e), s = h(r), u = o ? Ge : y(e), f = s ? Ge : y(r);
  u = u == Fe ? z : u, f = f == Fe ? z : f;
  var g = u == z, l = f == z, c = u == f;
  if (c && H(e)) {
    if (!H(r))
      return !1;
    o = !0, g = !1;
  }
  if (c && !g)
    return i || (i = new b()), o || ue(e) ? Ve(e, r, t, n, a, i) : qn(e, r, u, t, n, a, i);
  if (!(t & Yn)) {
    var d = g && Be.call(e, "__wrapped__"), _ = l && Be.call(r, "__wrapped__");
    if (d || _) {
      var m = d ? e.value() : e, A = _ ? r.value() : r;
      return i || (i = new b()), a(m, A, t, n, i);
    }
  }
  return c ? (i || (i = new b()), Jn(e, r, t, n, a, i)) : !1;
}
function ge(e, r, t, n, a) {
  return e === r ? !0 : e == null || r == null || !S(e) && !S(r) ? e !== e && r !== r : Vn(e, r, t, n, ge, a);
}
var kn = 1, ei = 2;
function ri(e, r, t, n) {
  var a = t.length, i = a;
  if (e == null)
    return !i;
  for (e = Object(e); a--; ) {
    var o = t[a];
    if (o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return !1;
  }
  for (; ++a < i; ) {
    o = t[a];
    var s = o[0], u = e[s], f = o[1];
    if (o[2]) {
      if (u === void 0 && !(s in e))
        return !1;
    } else {
      var g = new b(), l;
      if (!(l === void 0 ? ge(f, u, kn | ei, n, g) : l))
        return !1;
    }
  }
  return !0;
}
function ke(e) {
  return e === e && !ne(e);
}
function ti(e) {
  for (var r = fe(e), t = r.length; t--; ) {
    var n = r[t], a = e[n];
    r[t] = [n, a, ke(a)];
  }
  return r;
}
function er(e, r) {
  return function(t) {
    return t == null ? !1 : t[e] === r && (r !== void 0 || e in Object(t));
  };
}
function ni(e) {
  var r = ti(e);
  return r.length == 1 && r[0][2] ? er(r[0][0], r[0][1]) : function(t) {
    return t === e || ri(t, e, r);
  };
}
function ii(e, r) {
  return e != null && r in Object(e);
}
function ai(e, r, t) {
  r = le(r, e);
  for (var n = -1, a = r.length, i = !1; ++n < a; ) {
    var o = B(r[n]);
    if (!(i = e != null && t(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && oe(a) && ae(o, a) && (h(e) || se(e)));
}
function oi(e, r) {
  return e != null && ai(e, r, ii);
}
var si = 1, ui = 2;
function fi(e, r) {
  return ce(e) && ke(r) ? er(B(e), r) : function(t) {
    var n = rn(t, e);
    return n === void 0 && n === r ? oi(t, e) : ge(r, n, si | ui);
  };
}
function ci(e) {
  return function(r) {
    return r == null ? void 0 : r[e];
  };
}
function pi(e) {
  return function(r) {
    return J(r, e);
  };
}
function li(e) {
  return ce(e) ? ci(B(e)) : pi(e);
}
function rr(e) {
  return typeof e == "function" ? e : e == null ? ie : typeof e == "object" ? h(e) ? fi(e[0], e[1]) : ni(e) : li(e);
}
function gi(e) {
  return function(r, t, n) {
    for (var a = -1, i = Object(r), o = n(r), s = o.length; s--; ) {
      var u = o[++a];
      if (t(i[u], u, i) === !1)
        break;
    }
    return r;
  };
}
var di = gi();
function hi(e, r) {
  return e && di(e, r, fe);
}
function _i(e, r) {
  return function(t, n) {
    if (t == null)
      return t;
    if (!X(t))
      return e(t, n);
    for (var a = t.length, i = -1, o = Object(t); ++i < a && n(o[i], i, o) !== !1; )
      ;
    return t;
  };
}
var tr = _i(hi);
function mi(e) {
  var r = e == null ? 0 : e.length;
  return r ? e[r - 1] : void 0;
}
function yi(e) {
  return typeof e == "function" ? e : ie;
}
function G(e, r) {
  var t = h(e) ? Mr : tr;
  return t(e, yi(r));
}
function bi(e, r) {
  var t = -1, n = X(e) ? Array(e.length) : [];
  return tr(e, function(a, i, o) {
    n[++t] = r(a, i, o);
  }), n;
}
function vi(e, r) {
  return r.length < 2 ? e : J(e, nn(r, 0, -1));
}
var Ti = "[object Map]", wi = "[object Set]", Ai = Object.prototype, $i = Ai.hasOwnProperty;
function Oi(e) {
  if (e == null)
    return !0;
  if (X(e) && (h(e) || typeof e == "string" || typeof e.splice == "function" || H(e) || ue(e) || se(e)))
    return !e.length;
  var r = y(e);
  if (r == Ti || r == wi)
    return !e.size;
  if (qe(e))
    return !Ye(e).length;
  for (var t in e)
    if ($i.call(e, t))
      return !1;
  return !0;
}
function nr(e) {
  return e === void 0;
}
function Pi(e, r) {
  return r = le(r, e), e = vi(e, r), e == null || delete e[B(mi(r))];
}
function xi(e, r) {
  var t = e.length;
  for (e.sort(r); t--; )
    e[t] = e[t].value;
  return e;
}
function Ei(e, r) {
  if (e !== r) {
    var t = e !== void 0, n = e === null, a = e === e, i = L(e), o = r !== void 0, s = r === null, u = r === r, f = L(r);
    if (!s && !f && !i && e > r || i && o && u && !s && !f || n && o && u || !t && u || !a)
      return 1;
    if (!n && !i && !f && e < r || f && t && a && !n && !i || s && t && a || !o && a || !u)
      return -1;
  }
  return 0;
}
function Si(e, r, t) {
  for (var n = -1, a = e.criteria, i = r.criteria, o = a.length, s = t.length; ++n < o; ) {
    var u = Ei(a[n], i[n]);
    if (u) {
      if (n >= s)
        return u;
      var f = t[n];
      return u * (f == "desc" ? -1 : 1);
    }
  }
  return e.index - r.index;
}
function Ci(e, r, t) {
  r.length ? r = U(r, function(i) {
    return h(i) ? function(o) {
      return J(o, i.length === 1 ? i[0] : i);
    } : i;
  }) : r = [ie];
  var n = -1;
  r = U(r, We(rr));
  var a = bi(e, function(i, o, s) {
    var u = U(r, function(f) {
      return f(i);
    });
    return { criteria: u, index: ++n, value: i };
  });
  return xi(a, function(i, o) {
    return Si(i, o, t);
  });
}
function q(e, r, t, n) {
  return e == null ? [] : (h(r) || (r = r == null ? [] : [r]), t = t, h(t) || (t = t == null ? [] : [t]), Ci(e, r, t));
}
var Ii = Array.prototype, Mi = Ii.splice;
function ji(e, r) {
  for (var t = e ? r.length : 0, n = t - 1; t--; ) {
    var a = r[t];
    if (t == n || a !== i) {
      var i = a;
      ae(a) ? Mi.call(e, a, 1) : Pi(e, a);
    }
  }
  return e;
}
function Li(e, r) {
  var t = [];
  if (!(e && e.length))
    return t;
  var n = -1, a = [], i = e.length;
  for (r = rr(r); ++n < i; ) {
    var o = e[n];
    r(o, n, e) && (t.push(o), a.push(n));
  }
  return ji(e, a), t;
}
var Ri = 0;
function Fi(e) {
  var r = ++Ri;
  return Qe(e) + r;
}
const de = "_rest_";
function Gi({ groups: e }) {
  return e.map((r) => ({
    ...r,
    patterns: r.patterns.map((t) => ({
      ...t,
      id: t.exact === "_rest_" ? de : Fi("sub_group_")
    }))
  }));
}
function Bi({ importNodes: e, sourceCode: r }) {
  const t = e[0], n = e[e.length - 1];
  return r.getText().slice(t.range[0], n.range[1]).trim();
}
function Di({ importNodes: e, sourceCode: r }) {
  const t = r.getText();
  let n = "", a = -1;
  return e.forEach((i) => {
    a !== -1 && i.range[0] > a && (n += t.slice(a, i.range[0])), a = i.range[1] + 1;
  }), ar(n);
}
function Ni(e, r) {
  const t = e.match(/from\s+['"](.*?)['"];/);
  if (!t)
    return !1;
  const n = t[1];
  return r.exact ? n === r.exact : r.includes ? n.includes(r.includes) : r.regex ? new RegExp(r.regex).test(n) : !1;
}
function zi({ importTexts: e, groups: r }) {
  const t = [...e], n = {};
  return G(r, (a) => {
    G(a.patterns, (i) => {
      if (i.exact === "_rest_")
        return;
      let o = Li(t, (s) => Ni(s, i));
      i.sort && (o = q(o, void 0, i.sort)), n[i.id] = o;
    });
  }), Oi(t) || (n[de] = t), n;
}
function Ui({ groupedImports: e, groups: r, emptyLinesBetweenGroups: t }) {
  const n = [];
  return G(r, (a) => {
    let i = [];
    if (G(a.patterns, (o) => {
      const {
        id: s
      } = o;
      e[s] && (s === de && o.sort ? i.push(...q(e[s], void 0, o.sort)) : i.push(...e[s]));
    }), !!i.length) {
      if (a.sort && (i = q(i, void 0, a.sort)), n.length) {
        const o = nr(a.emptyLinesBeforeGroup) ? t : a.emptyLinesBeforeGroup;
        o && n.push(...Array(o).fill(""));
      }
      n.push(...i);
    }
  }), n;
}
function Hi(e, r, t) {
  e.report({
    node: r[0],
    messageId: "incorrectOrder",
    fix(n) {
      return n.replaceTextRange(
        [r[0].range[0], r[r.length - 1].range[1]],
        t
      );
    }
  });
}
const Ki = {
  meta: {
    type: "layout",
    docs: {
      description: "Enforce import grouping with custom order",
      recommended: !0,
      url: "https://github.com/ilia-brykin/eslint-plugin-import-group/blob/main/docs/group-imports.md"
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          groups: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
                patterns: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      includes: { type: "string" },
                      exact: { type: "string" },
                      regex: { type: "string" },
                      sort: { type: "string", enum: ["asc", "desc"] }
                    }
                  }
                },
                sort: { type: "string", enum: ["asc", "desc"] },
                emptyLinesBeforeGroup: {
                  type: "integer",
                  minimum: 0,
                  maximum: 5
                }
              }
            }
          },
          emptyLinesBetweenGroups: {
            type: "integer",
            minimum: 0,
            maximum: 5
          },
          preserveNonImportCode: {
            type: "boolean",
            default: !1
          }
        },
        additionalProperties: !1
      }
    ],
    messages: {
      incorrectOrder: "Imports should be grouped correctly."
    }
  },
  create(e) {
    const r = e.options[0] || {};
    let t = r.groups ? [...r.groups] : [];
    const n = r.emptyLinesBetweenGroups || 0, a = r.preserveNonImportCode !== !1;
    return t.some((i) => i.patterns.some((o) => o.exact === "_rest_")) || t.push({
      name: "Uncategorized Imports",
      patterns: [{ exact: "_rest_" }]
    }), t = Gi({ groups: t }), {
      Program(i) {
        const o = e.getSourceCode(), s = De({ node: i });
        if (s.length < 2)
          return;
        const u = ir({ importNodes: s, sourceCode: o }), f = zi({ importTexts: u, groups: t }), g = Ui({ groupedImports: f, groups: t, emptyLinesBetweenGroups: n }), l = me(Bi({ importNodes: s, sourceCode: o }));
        let c = g.join(`
`);
        if (a) {
          const d = Di({ importNodes: s, sourceCode: o });
          d && (c += `

${d}`);
        }
        c = me(c), l !== c && Hi(e, s, c);
      }
    };
  }
};
function qi({ importText: e, sortOrder: r, newline: t, indentSpaces: n }) {
  return e.replace(/{([^}]*)}/g, (a, i) => {
    let o = i.split(",").map((s) => s.trim()).filter(Boolean);
    return r !== "none" && (o = q(o, [(s) => s.toLowerCase()], [r])), t ? `{
${n}${o.join(`,
${n}`)},
}` : `{${n}${o.join(`,${n}`)}${n}}`;
  });
}
const Xi = {
  meta: {
    type: "layout",
    docs: {
      description: "Sort named imports alphabetically and format with new lines",
      recommended: !0,
      url: "https://github.com/ilia-brykin/eslint-plugin-import-group/blob/main/docs/named-imports.md"
    },
    fixable: "code",
    schema: [
      {
        type: "object",
        properties: {
          sort: {
            type: "string",
            enum: ["asc", "desc", "none"],
            default: "asc"
          },
          newline: {
            type: "boolean",
            default: !0
          },
          indent: {
            type: "integer",
            default: 2,
            minimum: 0
          }
        },
        additionalProperties: !1
      }
    ],
    messages: {
      asc_newline_true: "Named imports should be sorted in ascending order and each item should be on a new line.",
      desc_newline_true: "Named imports should be sorted in descending order and each item should be on a new line.",
      none_newline_true: "Named imports can not be sorted, but each item should be on a new line.",
      asc_newline_false: "Named imports should be sorted in ascending order and kept in a single line.",
      desc_newline_false: "Named imports should be sorted in descending order and kept in a single line.",
      none_newline_false: "Named imports can not be sorted and kept in a single line."
    }
  },
  create(e) {
    const r = e.options[0] || {}, t = r.sort || "asc", n = r.newline !== !1;
    let a = r.indent;
    nr(a) && (a = n ? 2 : 1);
    const i = " ".repeat(a), o = `${t}_newline_${n}`;
    return {
      Program(s) {
        const u = e.getSourceCode(), f = De({ node: s });
        G(f, (g) => {
          const l = u.getText(g);
          if (l.includes("{") && l.includes("}")) {
            const c = qi({ importText: l, sortOrder: t, newline: n, indentSpaces: i });
            _e(l) !== _e(c) && e.report({
              node: g,
              messageId: o,
              fix(d) {
                return d.replaceText(g, c);
              }
            });
          }
        });
      }
    };
  }
}, Zi = {
  meta: {
    name: "eslint-plugin-import-group",
    version: "2.0.2"
  },
  rules: {
    "group-imports": Ki,
    "named-imports": Xi
  }
};
export {
  Zi as default
};
