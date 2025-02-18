function De({ node: e }) {
  return e.body.filter((t) => t.type === "ImportDeclaration");
}
function rt({ importNodes: e, sourceCode: t }) {
  return e.map((r) => t.getText(r));
}
function he(e) {
  return e.replace(/\r\n/g, `
`).trim();
}
var Ge = typeof global == "object" && global && global.Object === Object && global, nt = typeof self == "object" && self && self.Object === Object && self, T = Ge || nt || Function("return this")(), O = T.Symbol, ze = Object.prototype, it = ze.hasOwnProperty, at = ze.toString, M = O ? O.toStringTag : void 0;
function ot(e) {
  var t = it.call(e, M), r = e[M];
  try {
    e[M] = void 0;
    var n = !0;
  } catch {
  }
  var a = at.call(e);
  return n && (t ? e[M] = r : delete e[M]), a;
}
var st = Object.prototype, ut = st.toString;
function ft(e) {
  return ut.call(e);
}
var ct = "[object Null]", pt = "[object Undefined]", _e = O ? O.toStringTag : void 0;
function I(e) {
  return e == null ? e === void 0 ? pt : ct : _e && _e in Object(e) ? ot(e) : ft(e);
}
function C(e) {
  return e != null && typeof e == "object";
}
var lt = "[object Symbol]";
function R(e) {
  return typeof e == "symbol" || C(e) && I(e) == lt;
}
function U(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = Array(n); ++r < n; )
    a[r] = t(e[r], r, e);
  return a;
}
var d = Array.isArray, ye = O ? O.prototype : void 0, me = ye ? ye.toString : void 0;
function Be(e) {
  if (typeof e == "string")
    return e;
  if (d(e))
    return U(e, Be) + "";
  if (R(e))
    return me ? me.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function re(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function ne(e) {
  return e;
}
var gt = "[object AsyncFunction]", dt = "[object Function]", ht = "[object GeneratorFunction]", _t = "[object Proxy]";
function Ne(e) {
  if (!re(e))
    return !1;
  var t = I(e);
  return t == dt || t == ht || t == gt || t == _t;
}
var J = T["__core-js_shared__"], be = function() {
  var e = /[^.]+$/.exec(J && J.keys && J.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function yt(e) {
  return !!be && be in e;
}
var mt = Function.prototype, bt = mt.toString;
function S(e) {
  if (e != null) {
    try {
      return bt.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Tt = /[\\^$.*+?()[\]{}|]/g, vt = /^\[object .+?Constructor\]$/, wt = Function.prototype, At = Object.prototype, Ot = wt.toString, Pt = At.hasOwnProperty, $t = RegExp(
  "^" + Ot.call(Pt).replace(Tt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function xt(e) {
  if (!re(e) || yt(e))
    return !1;
  var t = Ne(e) ? $t : vt;
  return t.test(S(e));
}
function Et(e, t) {
  return e == null ? void 0 : e[t];
}
function j(e, t) {
  var r = Et(e, t);
  return xt(r) ? r : void 0;
}
var V = j(T, "WeakMap");
function St(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
    ;
  return e;
}
var Ct = 9007199254740991, It = /^(?:0|[1-9]\d*)$/;
function ie(e, t) {
  var r = typeof e;
  return t = t ?? Ct, !!t && (r == "number" || r != "symbol" && It.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ue(e, t) {
  return e === t || e !== e && t !== t;
}
var jt = 9007199254740991;
function ae(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= jt;
}
function q(e) {
  return e != null && ae(e.length) && !Ne(e);
}
var Mt = Object.prototype;
function He(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Mt;
  return e === r;
}
function Lt(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var Rt = "[object Arguments]";
function Te(e) {
  return C(e) && I(e) == Rt;
}
var Ke = Object.prototype, Ft = Ke.hasOwnProperty, Dt = Ke.propertyIsEnumerable, oe = Te(/* @__PURE__ */ function() {
  return arguments;
}()) ? Te : function(e) {
  return C(e) && Ft.call(e, "callee") && !Dt.call(e, "callee");
};
function Gt() {
  return !1;
}
var qe = typeof exports == "object" && exports && !exports.nodeType && exports, ve = qe && typeof module == "object" && module && !module.nodeType && module, zt = ve && ve.exports === qe, we = zt ? T.Buffer : void 0, Bt = we ? we.isBuffer : void 0, H = Bt || Gt, Nt = "[object Arguments]", Ut = "[object Array]", Ht = "[object Boolean]", Kt = "[object Date]", qt = "[object Error]", Wt = "[object Function]", Xt = "[object Map]", Zt = "[object Number]", Jt = "[object Object]", Yt = "[object RegExp]", Qt = "[object Set]", Vt = "[object String]", kt = "[object WeakMap]", er = "[object ArrayBuffer]", tr = "[object DataView]", rr = "[object Float32Array]", nr = "[object Float64Array]", ir = "[object Int8Array]", ar = "[object Int16Array]", or = "[object Int32Array]", sr = "[object Uint8Array]", ur = "[object Uint8ClampedArray]", fr = "[object Uint16Array]", cr = "[object Uint32Array]", c = {};
c[rr] = c[nr] = c[ir] = c[ar] = c[or] = c[sr] = c[ur] = c[fr] = c[cr] = !0;
c[Nt] = c[Ut] = c[er] = c[Ht] = c[tr] = c[Kt] = c[qt] = c[Wt] = c[Xt] = c[Zt] = c[Jt] = c[Yt] = c[Qt] = c[Vt] = c[kt] = !1;
function pr(e) {
  return C(e) && ae(e.length) && !!c[I(e)];
}
function We(e) {
  return function(t) {
    return e(t);
  };
}
var Xe = typeof exports == "object" && exports && !exports.nodeType && exports, L = Xe && typeof module == "object" && module && !module.nodeType && module, lr = L && L.exports === Xe, Y = lr && Ge.process, Ae = function() {
  try {
    var e = L && L.require && L.require("util").types;
    return e || Y && Y.binding && Y.binding("util");
  } catch {
  }
}(), Oe = Ae && Ae.isTypedArray, se = Oe ? We(Oe) : pr, gr = Object.prototype, dr = gr.hasOwnProperty;
function hr(e, t) {
  var r = d(e), n = !r && oe(e), a = !r && !n && H(e), i = !r && !n && !a && se(e), o = r || n || a || i, f = o ? Lt(e.length, String) : [], u = f.length;
  for (var s in e)
    dr.call(e, s) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (s == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (s == "offset" || s == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (s == "buffer" || s == "byteLength" || s == "byteOffset") || // Skip index properties.
    ie(s, u))) && f.push(s);
  return f;
}
function _r(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var yr = _r(Object.keys, Object), mr = Object.prototype, br = mr.hasOwnProperty;
function Ze(e) {
  if (!He(e))
    return yr(e);
  var t = [];
  for (var r in Object(e))
    br.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ue(e) {
  return q(e) ? hr(e) : Ze(e);
}
var Tr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, vr = /^\w*$/;
function fe(e, t) {
  if (d(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || R(e) ? !0 : vr.test(e) || !Tr.test(e) || t != null && e in Object(t);
}
var F = j(Object, "create");
function wr() {
  this.__data__ = F ? F(null) : {}, this.size = 0;
}
function Ar(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Or = "__lodash_hash_undefined__", Pr = Object.prototype, $r = Pr.hasOwnProperty;
function xr(e) {
  var t = this.__data__;
  if (F) {
    var r = t[e];
    return r === Or ? void 0 : r;
  }
  return $r.call(t, e) ? t[e] : void 0;
}
var Er = Object.prototype, Sr = Er.hasOwnProperty;
function Cr(e) {
  var t = this.__data__;
  return F ? t[e] !== void 0 : Sr.call(t, e);
}
var Ir = "__lodash_hash_undefined__";
function jr(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = F && t === void 0 ? Ir : t, this;
}
function x(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
x.prototype.clear = wr;
x.prototype.delete = Ar;
x.prototype.get = xr;
x.prototype.has = Cr;
x.prototype.set = jr;
function Mr() {
  this.__data__ = [], this.size = 0;
}
function W(e, t) {
  for (var r = e.length; r--; )
    if (Ue(e[r][0], t))
      return r;
  return -1;
}
var Lr = Array.prototype, Rr = Lr.splice;
function Fr(e) {
  var t = this.__data__, r = W(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : Rr.call(t, r, 1), --this.size, !0;
}
function Dr(e) {
  var t = this.__data__, r = W(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Gr(e) {
  return W(this.__data__, e) > -1;
}
function zr(e, t) {
  var r = this.__data__, n = W(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
function v(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
v.prototype.clear = Mr;
v.prototype.delete = Fr;
v.prototype.get = Dr;
v.prototype.has = Gr;
v.prototype.set = zr;
var D = j(T, "Map");
function Br() {
  this.size = 0, this.__data__ = {
    hash: new x(),
    map: new (D || v)(),
    string: new x()
  };
}
function Nr(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function X(e, t) {
  var r = e.__data__;
  return Nr(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Ur(e) {
  var t = X(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Hr(e) {
  return X(this, e).get(e);
}
function Kr(e) {
  return X(this, e).has(e);
}
function qr(e, t) {
  var r = X(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
function w(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
w.prototype.clear = Br;
w.prototype.delete = Ur;
w.prototype.get = Hr;
w.prototype.has = Kr;
w.prototype.set = qr;
var Wr = "Expected a function";
function ce(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Wr);
  var r = function() {
    var n = arguments, a = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(a))
      return i.get(a);
    var o = e.apply(this, n);
    return r.cache = i.set(a, o) || i, o;
  };
  return r.cache = new (ce.Cache || w)(), r;
}
ce.Cache = w;
var Xr = 500;
function Zr(e) {
  var t = ce(e, function(n) {
    return r.size === Xr && r.clear(), n;
  }), r = t.cache;
  return t;
}
var Jr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Yr = /\\(\\)?/g, Qr = Zr(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Jr, function(r, n, a, i) {
    t.push(a ? i.replace(Yr, "$1") : n || r);
  }), t;
});
function Je(e) {
  return e == null ? "" : Be(e);
}
function pe(e, t) {
  return d(e) ? e : fe(e, t) ? [e] : Qr(Je(e));
}
function G(e) {
  if (typeof e == "string" || R(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Z(e, t) {
  t = pe(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[G(t[r++])];
  return r && r == n ? e : void 0;
}
function Vr(e, t, r) {
  var n = e == null ? void 0 : Z(e, t);
  return n === void 0 ? r : n;
}
function kr(e, t) {
  for (var r = -1, n = t.length, a = e.length; ++r < n; )
    e[a + r] = t[r];
  return e;
}
function en(e, t, r) {
  var n = -1, a = e.length;
  t < 0 && (t = -t > a ? 0 : a + t), r = r > a ? a : r, r < 0 && (r += a), a = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + t];
  return i;
}
function tn() {
  this.__data__ = new v(), this.size = 0;
}
function rn(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function nn(e) {
  return this.__data__.get(e);
}
function an(e) {
  return this.__data__.has(e);
}
var on = 200;
function sn(e, t) {
  var r = this.__data__;
  if (r instanceof v) {
    var n = r.__data__;
    if (!D || n.length < on - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new w(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
function b(e) {
  var t = this.__data__ = new v(e);
  this.size = t.size;
}
b.prototype.clear = tn;
b.prototype.delete = rn;
b.prototype.get = nn;
b.prototype.has = an;
b.prototype.set = sn;
function un(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++r < n; ) {
    var o = e[r];
    t(o, r, e) && (i[a++] = o);
  }
  return i;
}
function fn() {
  return [];
}
var cn = Object.prototype, pn = cn.propertyIsEnumerable, Pe = Object.getOwnPropertySymbols, ln = Pe ? function(e) {
  return e == null ? [] : (e = Object(e), un(Pe(e), function(t) {
    return pn.call(e, t);
  }));
} : fn;
function gn(e, t, r) {
  var n = t(e);
  return d(e) ? n : kr(n, r(e));
}
function $e(e) {
  return gn(e, ue, ln);
}
var k = j(T, "DataView"), ee = j(T, "Promise"), te = j(T, "Set"), xe = "[object Map]", dn = "[object Object]", Ee = "[object Promise]", Se = "[object Set]", Ce = "[object WeakMap]", Ie = "[object DataView]", hn = S(k), _n = S(D), yn = S(ee), mn = S(te), bn = S(V), m = I;
(k && m(new k(new ArrayBuffer(1))) != Ie || D && m(new D()) != xe || ee && m(ee.resolve()) != Ee || te && m(new te()) != Se || V && m(new V()) != Ce) && (m = function(e) {
  var t = I(e), r = t == dn ? e.constructor : void 0, n = r ? S(r) : "";
  if (n)
    switch (n) {
      case hn:
        return Ie;
      case _n:
        return xe;
      case yn:
        return Ee;
      case mn:
        return Se;
      case bn:
        return Ce;
    }
  return t;
});
var je = T.Uint8Array, Tn = "__lodash_hash_undefined__";
function vn(e) {
  return this.__data__.set(e, Tn), this;
}
function wn(e) {
  return this.__data__.has(e);
}
function K(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new w(); ++t < r; )
    this.add(e[t]);
}
K.prototype.add = K.prototype.push = vn;
K.prototype.has = wn;
function An(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function On(e, t) {
  return e.has(t);
}
var Pn = 1, $n = 2;
function Ye(e, t, r, n, a, i) {
  var o = r & Pn, f = e.length, u = t.length;
  if (f != u && !(o && u > f))
    return !1;
  var s = i.get(e), p = i.get(t);
  if (s && p)
    return s == t && p == e;
  var g = -1, l = !0, y = r & $n ? new K() : void 0;
  for (i.set(e, t), i.set(t, e); ++g < f; ) {
    var h = e[g], _ = t[g];
    if (n)
      var A = o ? n(_, h, g, t, e, i) : n(h, _, g, e, t, i);
    if (A !== void 0) {
      if (A)
        continue;
      l = !1;
      break;
    }
    if (y) {
      if (!An(t, function(P, $) {
        if (!On(y, $) && (h === P || a(h, P, r, n, i)))
          return y.push($);
      })) {
        l = !1;
        break;
      }
    } else if (!(h === _ || a(h, _, r, n, i))) {
      l = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), l;
}
function xn(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, a) {
    r[++t] = [a, n];
  }), r;
}
function En(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Sn = 1, Cn = 2, In = "[object Boolean]", jn = "[object Date]", Mn = "[object Error]", Ln = "[object Map]", Rn = "[object Number]", Fn = "[object RegExp]", Dn = "[object Set]", Gn = "[object String]", zn = "[object Symbol]", Bn = "[object ArrayBuffer]", Nn = "[object DataView]", Me = O ? O.prototype : void 0, Q = Me ? Me.valueOf : void 0;
function Un(e, t, r, n, a, i, o) {
  switch (r) {
    case Nn:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Bn:
      return !(e.byteLength != t.byteLength || !i(new je(e), new je(t)));
    case In:
    case jn:
    case Rn:
      return Ue(+e, +t);
    case Mn:
      return e.name == t.name && e.message == t.message;
    case Fn:
    case Gn:
      return e == t + "";
    case Ln:
      var f = xn;
    case Dn:
      var u = n & Sn;
      if (f || (f = En), e.size != t.size && !u)
        return !1;
      var s = o.get(e);
      if (s)
        return s == t;
      n |= Cn, o.set(e, t);
      var p = Ye(f(e), f(t), n, a, i, o);
      return o.delete(e), p;
    case zn:
      if (Q)
        return Q.call(e) == Q.call(t);
  }
  return !1;
}
var Hn = 1, Kn = Object.prototype, qn = Kn.hasOwnProperty;
function Wn(e, t, r, n, a, i) {
  var o = r & Hn, f = $e(e), u = f.length, s = $e(t), p = s.length;
  if (u != p && !o)
    return !1;
  for (var g = u; g--; ) {
    var l = f[g];
    if (!(o ? l in t : qn.call(t, l)))
      return !1;
  }
  var y = i.get(e), h = i.get(t);
  if (y && h)
    return y == t && h == e;
  var _ = !0;
  i.set(e, t), i.set(t, e);
  for (var A = o; ++g < u; ) {
    l = f[g];
    var P = e[l], $ = t[l];
    if (n)
      var de = o ? n($, P, l, t, e, i) : n(P, $, l, e, t, i);
    if (!(de === void 0 ? P === $ || a(P, $, r, n, i) : de)) {
      _ = !1;
      break;
    }
    A || (A = l == "constructor");
  }
  if (_ && !A) {
    var z = e.constructor, B = t.constructor;
    z != B && "constructor" in e && "constructor" in t && !(typeof z == "function" && z instanceof z && typeof B == "function" && B instanceof B) && (_ = !1);
  }
  return i.delete(e), i.delete(t), _;
}
var Xn = 1, Le = "[object Arguments]", Re = "[object Array]", N = "[object Object]", Zn = Object.prototype, Fe = Zn.hasOwnProperty;
function Jn(e, t, r, n, a, i) {
  var o = d(e), f = d(t), u = o ? Re : m(e), s = f ? Re : m(t);
  u = u == Le ? N : u, s = s == Le ? N : s;
  var p = u == N, g = s == N, l = u == s;
  if (l && H(e)) {
    if (!H(t))
      return !1;
    o = !0, p = !1;
  }
  if (l && !p)
    return i || (i = new b()), o || se(e) ? Ye(e, t, r, n, a, i) : Un(e, t, u, r, n, a, i);
  if (!(r & Xn)) {
    var y = p && Fe.call(e, "__wrapped__"), h = g && Fe.call(t, "__wrapped__");
    if (y || h) {
      var _ = y ? e.value() : e, A = h ? t.value() : t;
      return i || (i = new b()), a(_, A, r, n, i);
    }
  }
  return l ? (i || (i = new b()), Wn(e, t, r, n, a, i)) : !1;
}
function le(e, t, r, n, a) {
  return e === t ? !0 : e == null || t == null || !C(e) && !C(t) ? e !== e && t !== t : Jn(e, t, r, n, le, a);
}
var Yn = 1, Qn = 2;
function Vn(e, t, r, n) {
  var a = r.length, i = a;
  if (e == null)
    return !i;
  for (e = Object(e); a--; ) {
    var o = r[a];
    if (o[2] ? o[1] !== e[o[0]] : !(o[0] in e))
      return !1;
  }
  for (; ++a < i; ) {
    o = r[a];
    var f = o[0], u = e[f], s = o[1];
    if (o[2]) {
      if (u === void 0 && !(f in e))
        return !1;
    } else {
      var p = new b(), g;
      if (!(g === void 0 ? le(s, u, Yn | Qn, n, p) : g))
        return !1;
    }
  }
  return !0;
}
function Qe(e) {
  return e === e && !re(e);
}
function kn(e) {
  for (var t = ue(e), r = t.length; r--; ) {
    var n = t[r], a = e[n];
    t[r] = [n, a, Qe(a)];
  }
  return t;
}
function Ve(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function ei(e) {
  var t = kn(e);
  return t.length == 1 && t[0][2] ? Ve(t[0][0], t[0][1]) : function(r) {
    return r === e || Vn(r, e, t);
  };
}
function ti(e, t) {
  return e != null && t in Object(e);
}
function ri(e, t, r) {
  t = pe(t, e);
  for (var n = -1, a = t.length, i = !1; ++n < a; ) {
    var o = G(t[n]);
    if (!(i = e != null && r(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && ae(a) && ie(o, a) && (d(e) || oe(e)));
}
function ni(e, t) {
  return e != null && ri(e, t, ti);
}
var ii = 1, ai = 2;
function oi(e, t) {
  return fe(e) && Qe(t) ? Ve(G(e), t) : function(r) {
    var n = Vr(r, e);
    return n === void 0 && n === t ? ni(r, e) : le(t, n, ii | ai);
  };
}
function si(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function ui(e) {
  return function(t) {
    return Z(t, e);
  };
}
function fi(e) {
  return fe(e) ? si(G(e)) : ui(e);
}
function ke(e) {
  return typeof e == "function" ? e : e == null ? ne : typeof e == "object" ? d(e) ? oi(e[0], e[1]) : ei(e) : fi(e);
}
function ci(e) {
  return function(t, r, n) {
    for (var a = -1, i = Object(t), o = n(t), f = o.length; f--; ) {
      var u = o[++a];
      if (r(i[u], u, i) === !1)
        break;
    }
    return t;
  };
}
var pi = ci();
function li(e, t) {
  return e && pi(e, t, ue);
}
function gi(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!q(r))
      return e(r, n);
    for (var a = r.length, i = -1, o = Object(r); ++i < a && n(o[i], i, o) !== !1; )
      ;
    return r;
  };
}
var et = gi(li);
function di(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function hi(e) {
  return typeof e == "function" ? e : ne;
}
function E(e, t) {
  var r = d(e) ? St : et;
  return r(e, hi(t));
}
function _i(e, t) {
  var r = -1, n = q(e) ? Array(e.length) : [];
  return et(e, function(a, i, o) {
    n[++r] = t(a, i, o);
  }), n;
}
function yi(e, t) {
  return t.length < 2 ? e : Z(e, en(t, 0, -1));
}
var mi = "[object Map]", bi = "[object Set]", Ti = Object.prototype, vi = Ti.hasOwnProperty;
function wi(e) {
  if (e == null)
    return !0;
  if (q(e) && (d(e) || typeof e == "string" || typeof e.splice == "function" || H(e) || se(e) || oe(e)))
    return !e.length;
  var t = m(e);
  if (t == mi || t == bi)
    return !e.size;
  if (He(e))
    return !Ze(e).length;
  for (var r in e)
    if (vi.call(e, r))
      return !1;
  return !0;
}
function Ai(e, t) {
  return t = pe(t, e), e = yi(e, t), e == null || delete e[G(di(t))];
}
function Oi(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
function Pi(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, a = e === e, i = R(e), o = t !== void 0, f = t === null, u = t === t, s = R(t);
    if (!f && !s && !i && e > t || i && o && u && !f && !s || n && o && u || !r && u || !a)
      return 1;
    if (!n && !i && !s && e < t || s && r && a && !n && !i || f && r && a || !o && a || !u)
      return -1;
  }
  return 0;
}
function $i(e, t, r) {
  for (var n = -1, a = e.criteria, i = t.criteria, o = a.length, f = r.length; ++n < o; ) {
    var u = Pi(a[n], i[n]);
    if (u) {
      if (n >= f)
        return u;
      var s = r[n];
      return u * (s == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
function xi(e, t, r) {
  t.length ? t = U(t, function(i) {
    return d(i) ? function(o) {
      return Z(o, i.length === 1 ? i[0] : i);
    } : i;
  }) : t = [ne];
  var n = -1;
  t = U(t, We(ke));
  var a = _i(e, function(i, o, f) {
    var u = U(t, function(s) {
      return s(i);
    });
    return { criteria: u, index: ++n, value: i };
  });
  return Oi(a, function(i, o) {
    return $i(i, o, r);
  });
}
function ge(e, t, r, n) {
  return e == null ? [] : (d(t) || (t = t == null ? [] : [t]), r = r, d(r) || (r = r == null ? [] : [r]), xi(e, t, r));
}
var Ei = Array.prototype, Si = Ei.splice;
function Ci(e, t) {
  for (var r = e ? t.length : 0, n = r - 1; r--; ) {
    var a = t[r];
    if (r == n || a !== i) {
      var i = a;
      ie(a) ? Si.call(e, a, 1) : Ai(e, a);
    }
  }
  return e;
}
function Ii(e, t) {
  var r = [];
  if (!(e && e.length))
    return r;
  var n = -1, a = [], i = e.length;
  for (t = ke(t); ++n < i; ) {
    var o = e[n];
    t(o, n, e) && (r.push(o), a.push(n));
  }
  return Ci(e, a), r;
}
var ji = 0;
function Mi(e) {
  var t = ++ji;
  return Je(e) + t;
}
const tt = "_rest_";
function Li({ groups: e }) {
  return E(e, (t) => {
    E(t.patterns, (r) => {
      r.exact === "_rest_" ? r.id = tt : r.id = Mi("sub_group_");
    });
  }), e;
}
function Ri({ importNodes: e, sourceCode: t }) {
  const n = t.getText().split(`
`), a = [];
  let i = 0;
  return e.forEach((o, f) => {
    const u = t.getText(o), s = o.loc.start.line - 1;
    if (f > 0)
      for (let p = i + 1; p < s; p++)
        n[p].trim() === "" && a.push("");
    a.push(u), i = o.loc.end.line - 1;
  }), a;
}
function Fi(e, t) {
  const r = e.match(/from\s+['"](.*?)['"];/);
  if (!r)
    return !1;
  const n = r[1];
  return t.exact ? n === t.exact : t.regex ? new RegExp(t.regex).test(n) : !1;
}
function Di({ importTexts: e, groups: t }) {
  const r = [...e], n = {};
  return E(t, (a) => {
    E(a.patterns, (i) => {
      if (i.exact === "_rest_")
        return;
      let o = Ii(r, (f) => Fi(f, i));
      i.sort && (o = ge(o, void 0, i.sort)), n[i.id] = o;
    });
  }), wi(r) || (n[tt] = r), n;
}
function Gi({ groupedImports: e, groups: t, newlineBetweenGroups: r }) {
  const n = [];
  return E(t, (a) => {
    let i = [];
    E(a.patterns, (o) => {
      const {
        id: f
      } = o;
      e[f] && i.push(...e[f]);
    }), i.length && (a.sort && (i = ge(i, void 0, a.sort)), r && n.length && n.push(...Array(r).fill("")), n.push(...i));
  }), n;
}
function zi(e, t, r) {
  e.report({
    node: t[0],
    messageId: "incorrectOrder",
    fix(n) {
      return n.replaceTextRange(
        [t[0].range[0], t[t.length - 1].range[1]],
        r
      );
    }
  });
}
const Bi = {
  meta: {
    type: "layout",
    docs: {
      description: "Enforce import grouping with custom order",
      recommended: !1
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
                      exact: { type: "string" },
                      regex: { type: "string" },
                      sort: { type: "string", enum: ["asc", "desc"] }
                    }
                  }
                },
                sort: { type: "string", enum: ["asc", "desc"] }
              }
            }
          },
          newlineBetweenGroups: {
            type: "integer",
            minimum: 0,
            maximum: 5
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
    const t = e.options[0] || {};
    let r = t.groups || [];
    const n = t.newlineBetweenGroups || 0;
    return r.some((a) => a.patterns.some((i) => i.exact === "_rest_")) || r.push({
      name: "Uncategorized Imports",
      patterns: [{ exact: "_rest_" }],
      sort: "desc"
      // Default sorting for _rest_ group
    }), r = Li({ groups: r }), {
      Program(a) {
        const i = e.getSourceCode(), o = De({ node: a });
        if (o.length < 2)
          return;
        const f = rt({ importNodes: o, sourceCode: i }), u = Di({ importTexts: f, groups: r }), s = Gi({ groupedImports: u, groups: r, newlineBetweenGroups: n }), g = Ri({ importNodes: o, sourceCode: i }).join(`
`), l = s.join(`
`);
        g !== l && zi(e, o, l);
      }
    };
  }
};
function Ni({ importText: e, sortOrder: t, newline: r }) {
  return e.replace(/{([^}]*)}/g, (n, a) => {
    let i = a.split(",").map((o) => o.trim()).filter(Boolean);
    return t !== "none" && (i = ge(i, [(o) => o.toLowerCase()], [t])), r ? `{
  ${i.join(`,
  `)},
}` : `{ ${i.join(", ")} }`;
  });
}
const Ui = {
  meta: {
    type: "layout",
    docs: {
      description: "Sort named imports alphabetically and format with new lines",
      recommended: !1
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
    const t = e.options[0] || {}, r = t.sort || "asc", n = t.newline !== !1, a = `${r}_newline_${n}`;
    return {
      Program(i) {
        const o = e.getSourceCode(), f = De({ node: i });
        E(f, (u) => {
          const s = o.getText(u);
          if (s.includes("{") && s.includes("}")) {
            const p = Ni({ importText: s, sortOrder: r, newline: n });
            he(s) !== he(p) && e.report({
              node: u,
              messageId: a,
              fix(g) {
                return g.replaceText(u, p);
              }
            });
          }
        });
      }
    };
  }
}, Hi = {
  meta: {
    name: "eslint-plugin-import-group",
    version: "1.1.1"
  },
  rules: {
    "group-imports": Bi,
    "named-imports": Ui
  }
};
export {
  Hi as default
};
