function Be({ node: e }) {
  return e.body.filter((r) => r.type === "ImportDeclaration");
}
function nr({ importNodes: e, sourceCode: r }) {
  return e.map((t) => r.getText(t));
}
function _e(e) {
  return e.replace(/\r\n/g, `
`).trim();
}
function ir(e) {
  return e.replace(/^\n+|\n+$/g, "").replace(/\n{2,}/g, `
`);
}
var De = typeof global == "object" && global && global.Object === Object && global, ar = typeof self == "object" && self && self.Object === Object && self, v = De || ar || Function("return this")(), $ = v.Symbol, Ne = Object.prototype, or = Ne.hasOwnProperty, sr = Ne.toString, M = $ ? $.toStringTag : void 0;
function ur(e) {
  var r = or.call(e, M), t = e[M];
  try {
    e[M] = void 0;
    var n = !0;
  } catch {
  }
  var a = sr.call(e);
  return n && (r ? e[M] = t : delete e[M]), a;
}
var fr = Object.prototype, cr = fr.toString;
function pr(e) {
  return cr.call(e);
}
var lr = "[object Null]", gr = "[object Undefined]", me = $ ? $.toStringTag : void 0;
function I(e) {
  return e == null ? e === void 0 ? gr : lr : me && me in Object(e) ? ur(e) : pr(e);
}
function S(e) {
  return e != null && typeof e == "object";
}
var dr = "[object Symbol]";
function L(e) {
  return typeof e == "symbol" || S(e) && I(e) == dr;
}
function U(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, a = Array(n); ++t < n; )
    a[t] = r(e[t], t, e);
  return a;
}
var h = Array.isArray, ye = $ ? $.prototype : void 0, be = ye ? ye.toString : void 0;
function ze(e) {
  if (typeof e == "string")
    return e;
  if (h(e))
    return U(e, ze) + "";
  if (L(e))
    return be ? be.call(e) : "";
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
var hr = "[object AsyncFunction]", _r = "[object Function]", mr = "[object GeneratorFunction]", yr = "[object Proxy]";
function Ue(e) {
  if (!ne(e))
    return !1;
  var r = I(e);
  return r == _r || r == mr || r == hr || r == yr;
}
var Y = v["__core-js_shared__"], ve = function() {
  var e = /[^.]+$/.exec(Y && Y.keys && Y.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function br(e) {
  return !!ve && ve in e;
}
var vr = Function.prototype, Tr = vr.toString;
function E(e) {
  if (e != null) {
    try {
      return Tr.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var wr = /[\\^$.*+?()[\]{}|]/g, Ar = /^\[object .+?Constructor\]$/, $r = Function.prototype, Or = Object.prototype, Pr = $r.toString, xr = Or.hasOwnProperty, Er = RegExp(
  "^" + Pr.call(xr).replace(wr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Sr(e) {
  if (!ne(e) || br(e))
    return !1;
  var r = Ue(e) ? Er : Ar;
  return r.test(E(e));
}
function Ir(e, r) {
  return e == null ? void 0 : e[r];
}
function C(e, r) {
  var t = Ir(e, r);
  return Sr(t) ? t : void 0;
}
var k = C(v, "WeakMap");
function Cr(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var Mr = 9007199254740991, jr = /^(?:0|[1-9]\d*)$/;
function ae(e, r) {
  var t = typeof e;
  return r = r ?? Mr, !!r && (t == "number" || t != "symbol" && jr.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
function He(e, r) {
  return e === r || e !== e && r !== r;
}
var Lr = 9007199254740991;
function oe(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Lr;
}
function X(e) {
  return e != null && oe(e.length) && !Ue(e);
}
var Rr = Object.prototype;
function Ke(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || Rr;
  return e === t;
}
function Fr(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var Gr = "[object Arguments]";
function Te(e) {
  return S(e) && I(e) == Gr;
}
var qe = Object.prototype, Br = qe.hasOwnProperty, Dr = qe.propertyIsEnumerable, se = Te(/* @__PURE__ */ function() {
  return arguments;
}()) ? Te : function(e) {
  return S(e) && Br.call(e, "callee") && !Dr.call(e, "callee");
};
function Nr() {
  return !1;
}
var Xe = typeof exports == "object" && exports && !exports.nodeType && exports, we = Xe && typeof module == "object" && module && !module.nodeType && module, zr = we && we.exports === Xe, Ae = zr ? v.Buffer : void 0, Ur = Ae ? Ae.isBuffer : void 0, H = Ur || Nr, Hr = "[object Arguments]", Kr = "[object Array]", qr = "[object Boolean]", Xr = "[object Date]", Zr = "[object Error]", Wr = "[object Function]", Jr = "[object Map]", Yr = "[object Number]", Qr = "[object Object]", Vr = "[object RegExp]", kr = "[object Set]", et = "[object String]", rt = "[object WeakMap]", tt = "[object ArrayBuffer]", nt = "[object DataView]", it = "[object Float32Array]", at = "[object Float64Array]", ot = "[object Int8Array]", st = "[object Int16Array]", ut = "[object Int32Array]", ft = "[object Uint8Array]", ct = "[object Uint8ClampedArray]", pt = "[object Uint16Array]", lt = "[object Uint32Array]", c = {};
c[it] = c[at] = c[ot] = c[st] = c[ut] = c[ft] = c[ct] = c[pt] = c[lt] = !0;
c[Hr] = c[Kr] = c[tt] = c[qr] = c[nt] = c[Xr] = c[Zr] = c[Wr] = c[Jr] = c[Yr] = c[Qr] = c[Vr] = c[kr] = c[et] = c[rt] = !1;
function gt(e) {
  return S(e) && oe(e.length) && !!c[I(e)];
}
function Ze(e) {
  return function(r) {
    return e(r);
  };
}
var We = typeof exports == "object" && exports && !exports.nodeType && exports, j = We && typeof module == "object" && module && !module.nodeType && module, dt = j && j.exports === We, Q = dt && De.process, $e = function() {
  try {
    var e = j && j.require && j.require("util").types;
    return e || Q && Q.binding && Q.binding("util");
  } catch {
  }
}(), Oe = $e && $e.isTypedArray, ue = Oe ? Ze(Oe) : gt, ht = Object.prototype, _t = ht.hasOwnProperty;
function mt(e, r) {
  var t = h(e), n = !t && se(e), a = !t && !n && H(e), i = !t && !n && !a && ue(e), o = t || n || a || i, s = o ? Fr(e.length, String) : [], u = s.length;
  for (var f in e)
    _t.call(e, f) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    ae(f, u))) && s.push(f);
  return s;
}
function yt(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var bt = yt(Object.keys, Object), vt = Object.prototype, Tt = vt.hasOwnProperty;
function Je(e) {
  if (!Ke(e))
    return bt(e);
  var r = [];
  for (var t in Object(e))
    Tt.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
function fe(e) {
  return X(e) ? mt(e) : Je(e);
}
var wt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, At = /^\w*$/;
function ce(e, r) {
  if (h(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || L(e) ? !0 : At.test(e) || !wt.test(e) || r != null && e in Object(r);
}
var R = C(Object, "create");
function $t() {
  this.__data__ = R ? R(null) : {}, this.size = 0;
}
function Ot(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var Pt = "__lodash_hash_undefined__", xt = Object.prototype, Et = xt.hasOwnProperty;
function St(e) {
  var r = this.__data__;
  if (R) {
    var t = r[e];
    return t === Pt ? void 0 : t;
  }
  return Et.call(r, e) ? r[e] : void 0;
}
var It = Object.prototype, Ct = It.hasOwnProperty;
function Mt(e) {
  var r = this.__data__;
  return R ? r[e] !== void 0 : Ct.call(r, e);
}
var jt = "__lodash_hash_undefined__";
function Lt(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = R && r === void 0 ? jt : r, this;
}
function x(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
x.prototype.clear = $t;
x.prototype.delete = Ot;
x.prototype.get = St;
x.prototype.has = Mt;
x.prototype.set = Lt;
function Rt() {
  this.__data__ = [], this.size = 0;
}
function Z(e, r) {
  for (var t = e.length; t--; )
    if (He(e[t][0], r))
      return t;
  return -1;
}
var Ft = Array.prototype, Gt = Ft.splice;
function Bt(e) {
  var r = this.__data__, t = Z(r, e);
  if (t < 0)
    return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : Gt.call(r, t, 1), --this.size, !0;
}
function Dt(e) {
  var r = this.__data__, t = Z(r, e);
  return t < 0 ? void 0 : r[t][1];
}
function Nt(e) {
  return Z(this.__data__, e) > -1;
}
function zt(e, r) {
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
T.prototype.clear = Rt;
T.prototype.delete = Bt;
T.prototype.get = Dt;
T.prototype.has = Nt;
T.prototype.set = zt;
var F = C(v, "Map");
function Ut() {
  this.size = 0, this.__data__ = {
    hash: new x(),
    map: new (F || T)(),
    string: new x()
  };
}
function Ht(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
function W(e, r) {
  var t = e.__data__;
  return Ht(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
function Kt(e) {
  var r = W(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
function qt(e) {
  return W(this, e).get(e);
}
function Xt(e) {
  return W(this, e).has(e);
}
function Zt(e, r) {
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
w.prototype.clear = Ut;
w.prototype.delete = Kt;
w.prototype.get = qt;
w.prototype.has = Xt;
w.prototype.set = Zt;
var Wt = "Expected a function";
function pe(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(Wt);
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
var Jt = 500;
function Yt(e) {
  var r = pe(e, function(n) {
    return t.size === Jt && t.clear(), n;
  }), t = r.cache;
  return r;
}
var Qt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Vt = /\\(\\)?/g, kt = Yt(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(Qt, function(t, n, a, i) {
    r.push(a ? i.replace(Vt, "$1") : n || t);
  }), r;
});
function Ye(e) {
  return e == null ? "" : ze(e);
}
function le(e, r) {
  return h(e) ? e : ce(e, r) ? [e] : kt(Ye(e));
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
function en(e, r, t) {
  var n = e == null ? void 0 : J(e, r);
  return n === void 0 ? t : n;
}
function rn(e, r) {
  for (var t = -1, n = r.length, a = e.length; ++t < n; )
    e[a + t] = r[t];
  return e;
}
function tn(e, r, t) {
  var n = -1, a = e.length;
  r < 0 && (r = -r > a ? 0 : a + r), t = t > a ? a : t, t < 0 && (t += a), a = r > t ? 0 : t - r >>> 0, r >>>= 0;
  for (var i = Array(a); ++n < a; )
    i[n] = e[n + r];
  return i;
}
function nn() {
  this.__data__ = new T(), this.size = 0;
}
function an(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
function on(e) {
  return this.__data__.get(e);
}
function sn(e) {
  return this.__data__.has(e);
}
var un = 200;
function fn(e, r) {
  var t = this.__data__;
  if (t instanceof T) {
    var n = t.__data__;
    if (!F || n.length < un - 1)
      return n.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new w(n);
  }
  return t.set(e, r), this.size = t.size, this;
}
function b(e) {
  var r = this.__data__ = new T(e);
  this.size = r.size;
}
b.prototype.clear = nn;
b.prototype.delete = an;
b.prototype.get = on;
b.prototype.has = sn;
b.prototype.set = fn;
function cn(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, a = 0, i = []; ++t < n; ) {
    var o = e[t];
    r(o, t, e) && (i[a++] = o);
  }
  return i;
}
function pn() {
  return [];
}
var ln = Object.prototype, gn = ln.propertyIsEnumerable, Pe = Object.getOwnPropertySymbols, dn = Pe ? function(e) {
  return e == null ? [] : (e = Object(e), cn(Pe(e), function(r) {
    return gn.call(e, r);
  }));
} : pn;
function hn(e, r, t) {
  var n = r(e);
  return h(e) ? n : rn(n, t(e));
}
function xe(e) {
  return hn(e, fe, dn);
}
var ee = C(v, "DataView"), re = C(v, "Promise"), te = C(v, "Set"), Ee = "[object Map]", _n = "[object Object]", Se = "[object Promise]", Ie = "[object Set]", Ce = "[object WeakMap]", Me = "[object DataView]", mn = E(ee), yn = E(F), bn = E(re), vn = E(te), Tn = E(k), y = I;
(ee && y(new ee(new ArrayBuffer(1))) != Me || F && y(new F()) != Ee || re && y(re.resolve()) != Se || te && y(new te()) != Ie || k && y(new k()) != Ce) && (y = function(e) {
  var r = I(e), t = r == _n ? e.constructor : void 0, n = t ? E(t) : "";
  if (n)
    switch (n) {
      case mn:
        return Me;
      case yn:
        return Ee;
      case bn:
        return Se;
      case vn:
        return Ie;
      case Tn:
        return Ce;
    }
  return r;
});
var je = v.Uint8Array, wn = "__lodash_hash_undefined__";
function An(e) {
  return this.__data__.set(e, wn), this;
}
function $n(e) {
  return this.__data__.has(e);
}
function K(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new w(); ++r < t; )
    this.add(e[r]);
}
K.prototype.add = K.prototype.push = An;
K.prototype.has = $n;
function On(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n; )
    if (r(e[t], t, e))
      return !0;
  return !1;
}
function Pn(e, r) {
  return e.has(r);
}
var xn = 1, En = 2;
function Qe(e, r, t, n, a, i) {
  var o = t & xn, s = e.length, u = r.length;
  if (s != u && !(o && u > s))
    return !1;
  var f = i.get(e), g = i.get(r);
  if (f && g)
    return f == r && g == e;
  var l = -1, p = !0, d = t & En ? new K() : void 0;
  for (i.set(e, r), i.set(r, e); ++l < s; ) {
    var _ = e[l], m = r[l];
    if (n)
      var A = o ? n(m, _, l, r, e, i) : n(_, m, l, e, r, i);
    if (A !== void 0) {
      if (A)
        continue;
      p = !1;
      break;
    }
    if (d) {
      if (!On(r, function(O, P) {
        if (!Pn(d, P) && (_ === O || a(_, O, t, n, i)))
          return d.push(P);
      })) {
        p = !1;
        break;
      }
    } else if (!(_ === m || a(_, m, t, n, i))) {
      p = !1;
      break;
    }
  }
  return i.delete(e), i.delete(r), p;
}
function Sn(e) {
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
var Cn = 1, Mn = 2, jn = "[object Boolean]", Ln = "[object Date]", Rn = "[object Error]", Fn = "[object Map]", Gn = "[object Number]", Bn = "[object RegExp]", Dn = "[object Set]", Nn = "[object String]", zn = "[object Symbol]", Un = "[object ArrayBuffer]", Hn = "[object DataView]", Le = $ ? $.prototype : void 0, V = Le ? Le.valueOf : void 0;
function Kn(e, r, t, n, a, i, o) {
  switch (t) {
    case Hn:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      e = e.buffer, r = r.buffer;
    case Un:
      return !(e.byteLength != r.byteLength || !i(new je(e), new je(r)));
    case jn:
    case Ln:
    case Gn:
      return He(+e, +r);
    case Rn:
      return e.name == r.name && e.message == r.message;
    case Bn:
    case Nn:
      return e == r + "";
    case Fn:
      var s = Sn;
    case Dn:
      var u = n & Cn;
      if (s || (s = In), e.size != r.size && !u)
        return !1;
      var f = o.get(e);
      if (f)
        return f == r;
      n |= Mn, o.set(e, r);
      var g = Qe(s(e), s(r), n, a, i, o);
      return o.delete(e), g;
    case zn:
      if (V)
        return V.call(e) == V.call(r);
  }
  return !1;
}
var qn = 1, Xn = Object.prototype, Zn = Xn.hasOwnProperty;
function Wn(e, r, t, n, a, i) {
  var o = t & qn, s = xe(e), u = s.length, f = xe(r), g = f.length;
  if (u != g && !o)
    return !1;
  for (var l = u; l--; ) {
    var p = s[l];
    if (!(o ? p in r : Zn.call(r, p)))
      return !1;
  }
  var d = i.get(e), _ = i.get(r);
  if (d && _)
    return d == r && _ == e;
  var m = !0;
  i.set(e, r), i.set(r, e);
  for (var A = o; ++l < u; ) {
    p = s[l];
    var O = e[p], P = r[p];
    if (n)
      var he = o ? n(P, O, p, r, e, i) : n(O, P, p, e, r, i);
    if (!(he === void 0 ? O === P || a(O, P, t, n, i) : he)) {
      m = !1;
      break;
    }
    A || (A = p == "constructor");
  }
  if (m && !A) {
    var D = e.constructor, N = r.constructor;
    D != N && "constructor" in e && "constructor" in r && !(typeof D == "function" && D instanceof D && typeof N == "function" && N instanceof N) && (m = !1);
  }
  return i.delete(e), i.delete(r), m;
}
var Jn = 1, Re = "[object Arguments]", Fe = "[object Array]", z = "[object Object]", Yn = Object.prototype, Ge = Yn.hasOwnProperty;
function Qn(e, r, t, n, a, i) {
  var o = h(e), s = h(r), u = o ? Fe : y(e), f = s ? Fe : y(r);
  u = u == Re ? z : u, f = f == Re ? z : f;
  var g = u == z, l = f == z, p = u == f;
  if (p && H(e)) {
    if (!H(r))
      return !1;
    o = !0, g = !1;
  }
  if (p && !g)
    return i || (i = new b()), o || ue(e) ? Qe(e, r, t, n, a, i) : Kn(e, r, u, t, n, a, i);
  if (!(t & Jn)) {
    var d = g && Ge.call(e, "__wrapped__"), _ = l && Ge.call(r, "__wrapped__");
    if (d || _) {
      var m = d ? e.value() : e, A = _ ? r.value() : r;
      return i || (i = new b()), a(m, A, t, n, i);
    }
  }
  return p ? (i || (i = new b()), Wn(e, r, t, n, a, i)) : !1;
}
function ge(e, r, t, n, a) {
  return e === r ? !0 : e == null || r == null || !S(e) && !S(r) ? e !== e && r !== r : Qn(e, r, t, n, ge, a);
}
var Vn = 1, kn = 2;
function ei(e, r, t, n) {
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
      if (!(l === void 0 ? ge(f, u, Vn | kn, n, g) : l))
        return !1;
    }
  }
  return !0;
}
function Ve(e) {
  return e === e && !ne(e);
}
function ri(e) {
  for (var r = fe(e), t = r.length; t--; ) {
    var n = r[t], a = e[n];
    r[t] = [n, a, Ve(a)];
  }
  return r;
}
function ke(e, r) {
  return function(t) {
    return t == null ? !1 : t[e] === r && (r !== void 0 || e in Object(t));
  };
}
function ti(e) {
  var r = ri(e);
  return r.length == 1 && r[0][2] ? ke(r[0][0], r[0][1]) : function(t) {
    return t === e || ei(t, e, r);
  };
}
function ni(e, r) {
  return e != null && r in Object(e);
}
function ii(e, r, t) {
  r = le(r, e);
  for (var n = -1, a = r.length, i = !1; ++n < a; ) {
    var o = B(r[n]);
    if (!(i = e != null && t(e, o)))
      break;
    e = e[o];
  }
  return i || ++n != a ? i : (a = e == null ? 0 : e.length, !!a && oe(a) && ae(o, a) && (h(e) || se(e)));
}
function ai(e, r) {
  return e != null && ii(e, r, ni);
}
var oi = 1, si = 2;
function ui(e, r) {
  return ce(e) && Ve(r) ? ke(B(e), r) : function(t) {
    var n = en(t, e);
    return n === void 0 && n === r ? ai(t, e) : ge(r, n, oi | si);
  };
}
function fi(e) {
  return function(r) {
    return r == null ? void 0 : r[e];
  };
}
function ci(e) {
  return function(r) {
    return J(r, e);
  };
}
function pi(e) {
  return ce(e) ? fi(B(e)) : ci(e);
}
function er(e) {
  return typeof e == "function" ? e : e == null ? ie : typeof e == "object" ? h(e) ? ui(e[0], e[1]) : ti(e) : pi(e);
}
function li(e) {
  return function(r, t, n) {
    for (var a = -1, i = Object(r), o = n(r), s = o.length; s--; ) {
      var u = o[++a];
      if (t(i[u], u, i) === !1)
        break;
    }
    return r;
  };
}
var gi = li();
function di(e, r) {
  return e && gi(e, r, fe);
}
function hi(e, r) {
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
var rr = hi(di);
function _i(e) {
  var r = e == null ? 0 : e.length;
  return r ? e[r - 1] : void 0;
}
function mi(e) {
  return typeof e == "function" ? e : ie;
}
function G(e, r) {
  var t = h(e) ? Cr : rr;
  return t(e, mi(r));
}
function yi(e, r) {
  var t = -1, n = X(e) ? Array(e.length) : [];
  return rr(e, function(a, i, o) {
    n[++t] = r(a, i, o);
  }), n;
}
function bi(e, r) {
  return r.length < 2 ? e : J(e, tn(r, 0, -1));
}
var vi = "[object Map]", Ti = "[object Set]", wi = Object.prototype, Ai = wi.hasOwnProperty;
function $i(e) {
  if (e == null)
    return !0;
  if (X(e) && (h(e) || typeof e == "string" || typeof e.splice == "function" || H(e) || ue(e) || se(e)))
    return !e.length;
  var r = y(e);
  if (r == vi || r == Ti)
    return !e.size;
  if (Ke(e))
    return !Je(e).length;
  for (var t in e)
    if (Ai.call(e, t))
      return !1;
  return !0;
}
function tr(e) {
  return e === void 0;
}
function Oi(e, r) {
  return r = le(r, e), e = bi(e, r), e == null || delete e[B(_i(r))];
}
function Pi(e, r) {
  var t = e.length;
  for (e.sort(r); t--; )
    e[t] = e[t].value;
  return e;
}
function xi(e, r) {
  if (e !== r) {
    var t = e !== void 0, n = e === null, a = e === e, i = L(e), o = r !== void 0, s = r === null, u = r === r, f = L(r);
    if (!s && !f && !i && e > r || i && o && u && !s && !f || n && o && u || !t && u || !a)
      return 1;
    if (!n && !i && !f && e < r || f && t && a && !n && !i || s && t && a || !o && a || !u)
      return -1;
  }
  return 0;
}
function Ei(e, r, t) {
  for (var n = -1, a = e.criteria, i = r.criteria, o = a.length, s = t.length; ++n < o; ) {
    var u = xi(a[n], i[n]);
    if (u) {
      if (n >= s)
        return u;
      var f = t[n];
      return u * (f == "desc" ? -1 : 1);
    }
  }
  return e.index - r.index;
}
function Si(e, r, t) {
  r.length ? r = U(r, function(i) {
    return h(i) ? function(o) {
      return J(o, i.length === 1 ? i[0] : i);
    } : i;
  }) : r = [ie];
  var n = -1;
  r = U(r, Ze(er));
  var a = yi(e, function(i, o, s) {
    var u = U(r, function(f) {
      return f(i);
    });
    return { criteria: u, index: ++n, value: i };
  });
  return Pi(a, function(i, o) {
    return Ei(i, o, t);
  });
}
function q(e, r, t, n) {
  return e == null ? [] : (h(r) || (r = r == null ? [] : [r]), t = t, h(t) || (t = t == null ? [] : [t]), Si(e, r, t));
}
var Ii = Array.prototype, Ci = Ii.splice;
function Mi(e, r) {
  for (var t = e ? r.length : 0, n = t - 1; t--; ) {
    var a = r[t];
    if (t == n || a !== i) {
      var i = a;
      ae(a) ? Ci.call(e, a, 1) : Oi(e, a);
    }
  }
  return e;
}
function ji(e, r) {
  var t = [];
  if (!(e && e.length))
    return t;
  var n = -1, a = [], i = e.length;
  for (r = er(r); ++n < i; ) {
    var o = e[n];
    r(o, n, e) && (t.push(o), a.push(n));
  }
  return Mi(e, a), t;
}
var Li = 0;
function Ri(e) {
  var r = ++Li;
  return Ye(e) + r;
}
const de = "_rest_";
function Fi({ groups: e }) {
  return e.map((r) => ({
    ...r,
    patterns: r.patterns.map((t) => ({
      ...t,
      id: t.exact === "_rest_" ? de : Ri("sub_group_")
    }))
  }));
}
function Gi({ importNodes: e, sourceCode: r }) {
  const t = e[0], n = e[e.length - 1];
  return r.getText().slice(t.range[0], n.range[1]).trim();
}
function Bi({ importNodes: e, sourceCode: r }) {
  const t = r.getText();
  let n = "", a = -1;
  return e.forEach((i) => {
    a !== -1 && i.range[0] > a && (n += t.slice(a, i.range[0])), a = i.range[1] + 1;
  }), ir(n);
}
function Di(e, r) {
  const t = e.match(/from\s+['"](.*?)['"];/);
  if (!t)
    return !1;
  const n = t[1];
  return r.exact ? n === r.exact : r.includes ? n.includes(r.includes) : r.regex ? new RegExp(r.regex).test(n) : !1;
}
function Ni({ importTexts: e, groups: r }) {
  const t = [...e], n = {};
  return G(r, (a) => {
    G(a.patterns, (i) => {
      if (i.exact === "_rest_")
        return;
      let o = ji(t, (s) => Di(s, i));
      i.sort && (o = q(o, void 0, i.sort)), n[i.id] = o;
    });
  }), $i(t) || (n[de] = t), n;
}
function zi({ groupedImports: e, groups: r, emptyLinesBetweenGroups: t }) {
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
        const o = tr(a.emptyLinesBeforeGroup) ? t : a.emptyLinesBeforeGroup;
        o && n.push(...Array(o).fill(""));
      }
      n.push(...i);
    }
  }), n;
}
function Ui(e, r, t) {
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
const Hi = {
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
    }), t = Fi({ groups: t }), {
      Program(i) {
        const o = e.getSourceCode(), s = Be({ node: i });
        if (s.length < 2)
          return;
        const u = nr({ importNodes: s, sourceCode: o }), f = Ni({ importTexts: u, groups: t }), g = zi({ groupedImports: f, groups: t, emptyLinesBetweenGroups: n }), l = Gi({ importNodes: s, sourceCode: o });
        let p = g.join(`
`);
        if (a) {
          const d = Bi({ importNodes: s, sourceCode: o });
          d && (p += `

${d}`);
        }
        l !== p && Ui(e, s, p);
      }
    };
  }
};
function Ki({ importText: e, sortOrder: r, newline: t, indentSpaces: n }) {
  return e.replace(/{([^}]*)}/g, (a, i) => {
    let o = i.split(",").map((s) => s.trim()).filter(Boolean);
    return r !== "none" && (o = q(o, [(s) => s.toLowerCase()], [r])), t ? `{
${n}${o.join(`,
${n}`)},
}` : `{${n}${o.join(`,${n}`)}${n}}`;
  });
}
const qi = {
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
    tr(a) && (a = n ? 2 : 1);
    const i = " ".repeat(a), o = `${t}_newline_${n}`;
    return {
      Program(s) {
        const u = e.getSourceCode(), f = Be({ node: s });
        G(f, (g) => {
          const l = u.getText(g);
          if (l.includes("{") && l.includes("}")) {
            const p = Ki({ importText: l, sortOrder: t, newline: n, indentSpaces: i });
            _e(l) !== _e(p) && e.report({
              node: g,
              messageId: o,
              fix(d) {
                return d.replaceText(g, p);
              }
            });
          }
        });
      }
    };
  }
}, Xi = {
  meta: {
    name: "eslint-plugin-import-group",
    version: "2.0.0"
  },
  rules: {
    "group-imports": Hi,
    "named-imports": qi
  }
};
export {
  Xi as default
};
