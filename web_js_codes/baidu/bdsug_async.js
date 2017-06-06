! function () {
    function checkHsugIn(e) {
        return window.__sample_hsug_length ? e.length >= 4 || encodeURIComponent(e).length >= 18 : e.length >= 4 || encodeURIComponent(e).length >= 18
    }

    function checkHsugShow(e) {
        return e.length >= 1 && encodeURIComponent(e).length > 3
    }

    function bdsug(e) {
        var t = this,
            e = t.opts = e || {};
        t.ipt = e.ipt || null, 
        t.reverse = e.reverse || !1, 
        t.form = e.form || null, 
        t.submission = e.submission || null, 
        t.maxNum = e.maxNum || 10, 
        t.withoutMode = e.withoutMode || !1, 
        t.withoutRich = e.withoutRich || !1, 
        t.withoutStat = e.withoutStat || !1, 
        t.withoutZhixin = e.withoutZhixin || !1, 
        t.visible = !1, 
        t.stopRefresh = !1, 
        t.renderCallback = e.renderCallback || function () {}, 
        t.selectCallback = e.selectCallback || function () {}, 
        t.storestr = t.storestr || "", 
        t.storearr = t.storearr || [], 
        t.zhixinsug = [], t.zhixintemplate = {}, 
        t.zhixinused = {}, t.zhixindata = {};
        t.zhixintemplate.tvsingle = "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/sug/js/zhixin/tvsingle_fe6cc8c.js", 
        t.query = t.ipt && t.ipt.value || "", 
        t.inputValue = t.query, 
        t.showValue = t.query, 
        t.sugValue = "", 
        t.queryValue = "", 
        t.reqValue = "", 
        t.value = t.query, 
        t.index = -1, 
        t.sugcontainer, 
        t.dataCached = {}, 
        t.dataArray = [], 
        t.dataStored = [], 
        t.dataAladdin = [], 
        t.dataDirect = [], 
        t.directSugSelected = !1, 
        t.dataHot = [], 
        t.timer, 
        t.rsv_sug = 0, 
        t.rsv_sug1 = 0, 
        t.rsv_sug3 = 0, 
        t.rsv_sug4 = 0, 
        t.rsv_sug7 = [0, 0, 0], 
        t.rsv_sug9 = 0, 
        t.initTime = 0, 
        t.inputT = 0, 
        t.rsv_bp = bds && bds.comm && 1 === bds.comm.ishome ? 0 : 1, 
        t.jqXhr = null, 
        t.ipt && t.init(), 
        t.pwd = ""
    }

    function xss(e) {
        return e.toString()
        .replace(/[<%3C]/g, "&lt;")
        .replace(/[>%3E]/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
    }

    var bds = window.bds || {};
    bds.se = bds.se || {}, 
    bds.se.store = function () {
        function e() {
            try {
                return u in r && r[u]
            } catch (e) {
                return !1
            }
        }

        function t() {
            try {
                return d in r && r[d] && r[d][r.location.hostname]
            } catch (e) {
                return !1
            }
        }

        function s(e) {
            return function () {
                var t = Array.prototype.slice.call(arguments, 0);
                t.unshift(a), 
                l.appendChild(a), 
                a.addBehavior("#default#userData"), 
                a.load(u);
                var s = e.apply(i, t);
                return l.removeChild(a), s
            }
        }

        function n(e) {
            return "_" + e
        }
        
        var a, i = {},
            r = window,
            o = r.document,
            u = "localStorage",
            d = "globalStorage",
            c = "__storejs__";
        if (i.disabled = !1, 
            i.set = function () {}, 
            i.get = function () {}, 
            i.remove = function () {}, 
            i.clear = function () {}, 
            i.transact = function (e, t, s) {
                    var n = i.get(e);
                    null == s && (s = t, t = null), 
                    "undefined" == typeof n && (n = t || {}), 
                    s(n), 
                    i.set(e, n)
            }, 
            i.getAll = function () {}, 
            i.serialize = function (e) {
                return String(e)
            }, 
            i.deserialize = function (e) {
                return "string" != typeof e ? void 0 : e
            }, e()) 

            a = r[u], 

        i.set = function (e, t) {
            return void 0 === t ? i.remove(e) : void a.setItem(e, i.serialize(t))
        }, 
        i.get = function (e) {
            return i.deserialize(a.getItem(e))
        }, 
        i.remove = function (e) {
            a.removeItem(e)
        }, 
        i.clear = function () {
            a.clear()
        }, 
        i.getAll = function () {
            for (var e = {}, t = 0; t < a.length; ++t) {
                var s = a.key(t);
                e[s] = i.get(s)
            }
            return e
        };
        
        else if (t()) a = r[d][r.location.hostname], i.set = function (e, t) {
            return void 0 === t ? i.remove(e) : void(a[e] = i.serialize(t))
        }, i.get = function (e) {
            return i.deserialize(a[e] && a[e].value)
        }, i.remove = function (e) {
            delete a[e]
        }, i.clear = function () {
            for (var e in a) delete a[e]
        }, i.getAll = function () {
            for (var e = {}, t = 0; t < a.length; ++t) {
                var s = a.key(t);
                e[s] = i.get(s)
            }
            return e
        };
        else if (o.documentElement.addBehavior) {
            var l, g;
            try {
                g = new ActiveXObject("htmlfile"), g.open(), g.write("<script>document.w=window</script><iframe src='/favicon.ico'></iframe>"), g.close(), l = g.w.frames[0].document, a = l.createElement("div")
            } catch (m) {
                a = o.createElement("div"), l = o.body
            }
            i.set = s(function (e, t, s) {
                return t = n(t), void 0 === s ? i.remove(t) : (e.setAttribute(t, i.serialize(s)), void e.save(u))
            }), i.get = s(function (e, t) {
                return t = n(t), i.deserialize(e.getAttribute(t))
            }), i.remove = s(function (e, t) {
                t = n(t), e.removeAttribute(t), e.save(u)
            }), i.clear = s(function (e) {
                var t = e.XMLDocument.documentElement.attributes;
                e.load(u);
                for (var s, n = 0; s = t[n]; n++) e.removeAttribute(s.name);
                e.save(u)
            }), i.getAll = s(function (e) {
                var t = e.XMLDocument.documentElement.attributes;
                e.load(u);
                for (var s, n = {}, a = 0; s = t[a]; ++a) n[s] = i.get(s);
                return n
            })
        }
        try {
            i.set(c, c), i.get(c) != c && (i.disabled = !0), i.remove(c)
        } catch (m) {
            i.disabled = !0
        }
        return i
    }();
    
    var ImeTrack = function () {
        function e(e) {
            var t = 0;
            if (document.selection) {
                e.focus();
                var s = document.selection.createRange();
                s.moveStart("character", -e.value.length), t = s.text.length - 1
            } else(e.selectionStart || "0" == e.selectionStart) && (t = e.selectionStart);
            return t
        }

        function t(t) {
            function s(e) {
                a.ipt.value != a.oldval && (a.oldval = a.ipt.value, a.inputchangeHandle(e))
            }

            function n() {
                for (var e = 0, t = a.logs.length - 1; t < a.logs.length - 1; t--)
                    if (-1 == a.logs[t].type.indexOf("unval-")) return a.logs[t].time;
                return e
            }
            var a = this;
            a.logs = [], a.opts = t || {}, a.opts.logmaxnum = t.logmaxnum || 10, a.opts.adv = t.adv || !1, this.onLogChange = t.onLogChange, void 0 === a.opts.innerchange && (a.opts.innerchange = !0), a.ipt = document.getElementById(a.opts.iptId), a._kdcode = 0, a._kdevt = {}, a._keyposition = 0, a.ipt.onkeydown = function (e) {
                var t = e || window.event;
                a._kdcode = t.keyCode || t.which, a._kdevt = t
            }, a.ipt.onkeyup = function (t) {
                var s = t || window.event,
                    n = s.keyCode || s.which;
                a.ipt.value || "", e(a.ipt), a._kdcode && (a.addLog({
                    ku: n,
                    type: "upsave"
                }), a._kdcode = 0, a._kdevt = {}, a.oldval = a.ipt.value)
            }, a.ipt.onpaste = function () {
                a.addLog(a._kdevt.ctrlKey ? {
                    type: "unval-paste-key"
                } : {
                    type: "unval-paste-mouse"
                })
            }, a.oldval = a.ipt.value || "", a.inputchangeHandle = function () {
                if (a._kdcode) a.addLog({
                    type: "unval-change-key"
                });
                else {
                    var e = "";
                    a.logs.length && (new Date).getTime() - n() < 300 && (e = "unval-"), a.addLog({
                        type: e + "change-unkey"
                    })
                }
            }, a.timmer, a.opts.innerchange && (a.ipt.onfocus = function (e) {
                a.timmer = setInterval(function () {
                    s(e)
                }, 200)
            }, a.ipt.onblur = function () {
                clearInterval(a.timmer)
            })
        }
        return t.prototype = {
            checkLog: function (e) {
                for (var t = this.logs.length, s = !1; t > 0;) t--, -1 != this.logs[t].type.indexOf("unval-") ? (e.type = (-1 == e.type.indexOf("unval-") ? "" : "unval-") + this.logs[t].type.replace("unval-", "") + "-" + e.type.replace("unval-", ""), this.logs[t] = e, s = !0) : t = -2;
                if (s) return !1;
                for (; this.logs.length >= this.opts.logmaxnum;) this.logs.shift();
                return !0
            }, analyseLog: function () {
                function t() {
                    if (s.opts.adv)
                        for (var e = 0; e < i.length; e++) i.charCodeAt(e) > 256 && (o = i.substring(0, e + 1), u = i.substring(e + 1))
                }
                var s = this;
                if (this.logs.length > 0 && -1 == this.logs[this.logs.length - 1].type.indexOf("unval")) {
                    var n = this.logs[this.logs.length - 1],
                        a = n.val.substring(0, n.start),
                        i = n.val.substring(n.start, n.cursor),
                        r = n.val.substring(n.cursor),
                        o = "",
                        u = "";
                    229 == n.kd ? i.charCodeAt(i.length - 1) > 256 || !i.match(/[\x00-\x80]/g) ? (this._keyposition = e(this.ipt), n.type += "-endime", 0 == i.length && (n.type += "-cancelime")) : (n.type += "-imeinput", t()) : n.type.indexOf("paste-mouse") > -1 ? this._keyposition = e(this.ipt) : n.type.indexOf("change-unkey") > -1 ? 0 == i.length ? (this._keyposition = e(this.ipt), this.logs.length > 1 && this.logs[this.logs.length - 2].type.indexOf("upsave") > -1 && (n.type += "-link")) : i.charCodeAt(i.length - 1) > 256 || !i.match(/[\x00-\x80]/g) ? (this._keyposition = e(this.ipt), n.type += "-endime") : (n.type += "-imeinput", t()) : this._keyposition = e(this.ipt), this.opts.adv && (n.type += "-adv", n.strA = a, n.strB = i, n.strB1 = o, n.strB2 = u, n.strC = r), this.onLogChange && this.onLogChange.call(this, n)
                }
            }, addLog: function (t) {
                t.kd = this._kdcode, t.val = this.ipt.value, t.start = this._keyposition, t.cursor = e(this.ipt), t.type = t.type || 0, t.time = (new Date).getTime(), (0 == this.logs.length || this.logs[this.logs.length - 1].val != t.val || -1 != this.logs[this.logs.length - 1].type.indexOf("unval-") || -1 != t.type.indexOf("unval-")) && (this.checkLog(t) && this.logs.push(t), this.analyseLog())
            }, getLog: function () {
                var e = this.logs.slice(0);
                return e
            }, triggerInputChange: function (e) {
                this.inputchangeHandle(e)
            }, diffLog: function () {
                var e = [],
                    t = !1;
                for (var s in this.logs)
                    if (0 != s) {
                        var n = this.logs[s];
                        if (n.strB && n.strA) {
                            if (0 === n.strB.length && n.strA.length < this.logs[s - 1].strA.length) {
                                e = [];
                                continue
                            }
                            if (n.type.indexOf("link") > -1 || n.type.indexOf("paste") > -1) {
                                e = [];
                                continue
                            }
                        }
                        var a = n.time - this.logs[s - 1].time;
                        a > 3e3 && (e = []);
                        var i = 0,
                            r = (n.val.match(/[^\x00-\x80]/g) || []).length - (this.logs[s - 1].val.match(/[^\x00-\x80]/g) || []).length;
                        r > 0 ? i = 1 : r = (n.val.match(/[\x00-\x80]/g) || []).length - (this.logs[s - 1].val.match(/[\x00-\x80]/g) || []).length, n.type.indexOf("ime") > -1 ? (i += 2, t = !0) : n.type.indexOf("unval") > -1 && t ? i += 2 : t = !1, r > 0 && e.push(i, r, a)
                    }
                return e
            }
        }, t
    }();
    bds.se.sug = function (e) {
        var t = new bdsug(e);
        return t.outInterface()
    };
    var supportInputEvent = "oninput" in document.createElement("input") && !navigator.userAgent.match(/MSIE 9/) && !navigator.userAgent.match(/chrome\/(28|29|30|31)/i),
        BDSUG_TIMESTAMP_START = 14183424e5,
        BDSUG_QUERY_LEV = 4;
    bdsug.prototype = {
        updateInitData: function (type) {
            var me = this,
                opts = me.opts || {};
            me.setsug = !0, me.setsugstorage = !0, me.sets = {}, me.sugcookie = navigator.cookieEnabled && /sug=(\d)/.test(document.cookie) ? RegExp.$1 : 3, me.sugstorecookie = navigator.cookieEnabled && /sugstore=(\d)/.test(document.cookie) ? RegExp.$1 : 1, bds.comm && bds.comm.personalData && (me.sets = "string" == typeof bds.comm.personalData ? eval("(" + bds.comm.personalData + ")") : bds.comm.personalData), me.sets.errno && 0 == me.sets.errno && me.sets.sugSet && me.sets.sugSet.ErrMsg && "SUCCESS" == me.sets.sugSet.ErrMsg ? 0 == me.sets.sugSet.value && (me.setsug = !1) : 0 == me.sugcookie && (me.setsug = !1), me.sets.errno && 0 == me.sets.errno && me.sets.sugStoreSet && me.sets.sugStoreSet.ErrMsg && "SUCCESS" == me.sets.sugStoreSet.ErrMsg ? 0 == me.sets.sugStoreSet.value && (me.setsugstorage = !1) : 0 == me.sugstorecookie && (me.setsugstorage = !1), me.loggedon = bds.comm && bds.se.store && !bds.se.store.disabled && navigator.cookieEnabled, me.showsug = opts.showsug ? opts.showsug : me.setsug, me.showsugstore = opts.showsugstore ? opts.showsugstore : me.showsug && me.loggedon && me.setsugstorage, me.query = bds.comm.query, me.pinyin = bds.comm.pinyin, me.sugHost = bds.comm.sugHost || "", me.sid = navigator.cookieEnabled && /H_PS_PSSID=([0-9_]+)/.test(document.cookie) ? RegExp.$1 : bds.comm.sid, ("init" != type || document.referrer) && me.writeStore()
        }, check: function () {
            var e = this;
            e.value != e.ipt.value && e.showValue != e.ipt.value && (e.inputValue = e.showValue = e.value = e.ipt.value, bds && bds.comm && 0 === bds.comm.ishome && e.addStat("oq", bds.comm.confirmQuery ? xss(bds.comm.confirmQuery) : ""), bds && bds.comm && bds.comm.confirmQid && e.addStat("rsv_pq", bds.comm.confirmQid), $(e.ipt).trigger("inputChange", [e]), e.request(e.value))
        }, startCircle: function () {
            var e = this;
            e.timer || ($(e.ipt).trigger("start", [e]), e.timer = setTimeout(function () {
                e.check(), e.timer = setTimeout(arguments.callee, 200)
            }, 200), supportInputEvent && $(e.ipt).bind("input", function () {
                e.check()
            }))
        }, stopCircle: function () {
            var e = this;
            e.timer && (clearTimeout(e.timer), supportInputEvent && $(e.ipt).unbind("input"), e.timer = null, $(e.ipt).trigger("stop", [e]))
        }, callback: function (e, t) {
            function s(e) {
                n.zhixintemplate[e] && !n.zhixinused[e] && (n.zhixinused[e] = $.ajax({
                    crossDomain: !0,
                    url: n.zhixintemplate[e],
                    dataType: "script",
                    scriptCharset: "UTF-8"
                }))
            }
            var n = this;
            if (e && e.exp) {
                var a = n.stat.rsv_sug6 || "";
                a.length > 0 && e.exp.length > 0 && -1 == a.indexOf(e.exp) ? a += "_" + e.exp : a = e.exp, n.addStat("rsv_sug6", a)
            }
            if (e && (e.g || e.z || n.checkStore(e) && n.checkStore(e).length > 0)) {
                if (n.queryValue = e.q, e.q && 2 != t && (n.dataCached[e.q] = e), $(n.form).hasClass("showsugzhixin") || (n.withoutZhixin = !0), $(n.ipt).trigger("dataReady", [n]), !n.withoutZhixin && e.zzx)
                    for (var i = 0; i < e.zzx.length; i++) e.zzx[i] && e.zzx[i].type && (n.zhixinsug.push({
                        value: e.g[i].q,
                        type: e.zzx[i].type,
                        url: e.zzx[i].url
                    }), s(e.zzx[i].type));
                n.dataArray = n.packData(e), n.render(n.dataArray)
            } else n.hideSug()
        }, buildUrl: function (e, t, s) {
            var n = this,
                a = n.sugHost || "http://suggestion.baidu.com/su",
                i = "";
            if (!bds.comm.username && "" == e) {
                var r = [],
                    o = [];
                try {
                    var u = bds.se.store.get("BDSUGSTORED");
                    r = u && $.parseJSON(u) || []
                } catch (d) {}
                for (var c = 0; c < r.length && 9 > c; c++) {
                    var l = r[c].t ? 1 * r[c].t + BDSUG_TIMESTAMP_START : (new Date).getTime();
                    l = Math.round(l / 1e3);
                    var g = {
                        time: l,
                        kw: decodeURIComponent(r[c].q)
                    };
                    r[c].s && r[c].s > BDSUG_QUERY_LEV && (g.fq = r[c].s - BDSUG_QUERY_LEV + 1), o.push(g)
                }
                a = "//www.baidu.com/his", i = "&from=pc_web&rf=3&hisdata=", $.stringify && o.length && (i += encodeURIComponent($.stringify(o)))
            }
            var m = t ? "&sugmode=" + t : "",
                p = n.withoutZhixin ? "" : "&zxmode=1";
            n.sugcookie > 0 && (n.sugcookie = 3);
            var h = a + "?wd=" + encodeURIComponent(e) + i + m + p + "&json=1&p=" + n.sugcookie + "&sid=" + n.sid;
            return bds.comm.supportis && (h += "&req=2"), window.bds && bds.comm && bds.comm.cur_query && (h += "&bs=" + encodeURIComponent(bds.comm.cur_query)), window.bds && bds.comm && bds.comm.cur_disp_query && (h += "&pbs=" + encodeURIComponent(bds.comm.cur_disp_query)), !window._is_sugemptyhot_sam || !bds.comm.ishome || bds.comm.username || e || s ? e || s || (h += "&sc=eb") : h += "&sc=hot", n.ipt && (h += "&csor=" + getCursortPosition(n.ipt)), n.pwd && (h += "&pwd=" + encodeURIComponent(n.pwd)), n.pwd = e, h
        }, request: function (e, t) {
            var s = this;
            if (e && (e = $.limitWd(e, 160)), s.directSugSelected = !1, "_blank" == $(s.form).attr("target") && 1 == $(s.ipt).attr("data-bfocus")) $(s.ipt).focus().attr("data-bfocus", 0);
            else if (s.showsug) {
                if (s.reqValue = e, 2 != t && s.dataCached[e]) return void s.callback(s.dataCached[e]);
                s.jqXhr && s.jqXhr.abort(), s.jqXhr = $.ajax({
                    dataType: "jsonp",
                    async: !0,
                    scriptCharset: "gbk",
                    url: s.buildUrl(e, t),
                    jsonp: "cb",
                    timeout: 5e3,
                    success: function (e) {
                        s.callback(e, t)
                    }, always: function () {
                        s.jqXhr = null
                    }
                }), s.rsv_sug3++, s.addStat("rsv_sug3", s.rsv_sug3), s.initTime = (new Date).getTime()
            }
        }, packData: function (e) {
            var t = this,
                s = [];
            t.checkHot(e), t.checkAla(e), t.checkStore(e), bds.comm.supportis || t.checkDirect(e);
            for (var n = t.mergeData(e), a = 0; a < n.length; a++) {
                if (bds && bds.comm && 1 == bds.comm.ishome && bds.comm.supportis) {
                    if (a > 9) break
                } else if (bds && bds.comm && 0 == bds.comm.ishome && bds.comm.supportis && "store" == n[a].type) {
                    if (a > t.maxNum - 1 + 5) break
                } else if (a > t.maxNum - 1) break;
                t.reverse ? s.unshift(n[a]) : s.push(n[a])
            }
            return s
        }, checkHot: function (e) {
            var t = this;
            if (t.dataHot = [], e.g && e.g.length)
                for (var s = 0; s < e.g.length; s++) {
                    var n = e.g[s];
                    n.t && "hot" == n.t && t.dataHot.push({
                        value: n.q,
                        otherData: n.st
                    })
                }
        }, checkDirect: function (e) {
            var t = this;
            if (t.dataDirect = [], e.tzx && "6" == e.tzx.type && e.tzx.info) {
                var s = e.tzx.info;
                t.dataDirect.push({
                    value: s.site,
                    otherData: s
                })
            }
        }, checkAla: function (e) {
            var t = this;
            if (t.dataAladdin = [], e.z && e.z.length > 0 && !t.withoutRich)
                for (var s = 0; s < e.z.length; s++) {
                    var n = e.z[s];
                    n.id && n.type && n.key && n.word && t.dataAladdin.push({
                        value: n.key,
                        otherData: n
                    })
                } else t.dataAladdin = []
        }, writeStore: function () {
            var e = this;
            if (e.showsugstore && e.query && e.pinyin && checkHsugIn(e.query)) {
                e.getStore();
                var t = encodeURIComponent(e.query.toLowerCase()),
                    s = encodeURIComponent(e.pinyin.toLowerCase()),
                    n = BDSUG_QUERY_LEV,
                    a = (new Date).getTime() - BDSUG_TIMESTAMP_START,
                    i = -1;
                $.each(e.storearr, function (e, r) {
                    r.p == s && (r.q = t, n = (r.s || BDSUG_QUERY_LEV) + 1, r.t = a, i = e)
                }), i > -1 && e.storearr.splice(i, 1), e.storearr.push({
                    q: t,
                    p: s,
                    s: n,
                    t: a
                }), e.storearr.length > 50 && e.storearr.shift(), e.setStore()
            }
        }, checkStore: function (e) {
            var t = this;
            if (t.dataStored = [], t.showsugstore && checkHsugShow(t.value)) {
                if (e && e.g && e.g.length)
                    for (var s = 0; s < e.g.length; s++) {
                        var n = e.g[s];
                        n.t && "hs" == n.t && $.trim(n.q) && t.dataStored.push({
                            value: $.trim(n.q),
                            pinyin: "|",
                            s: 4,
                            t: ""
                        })
                    }
                0 == t.dataStored.length && (t.getStore(), $.each(t.storearr, function (e, s) {
                    var n = decodeURIComponent(s.q),
                        a = decodeURIComponent(s.p);
                    (0 == n.indexOf(t.value.toLowerCase()) || 0 == a.indexOf(t.value.toLowerCase())) && t.dataStored.unshift({
                        value: n,
                        pinyin: a,
                        s: s.s,
                        t: s.t
                    })
                }))
            } else if (t.showsugstore && "" === t.value) {
                if (e && e.g && e.g.length)
                    for (var s = 0; s < e.g.length; s++) {
                        var n = e.g[s];
                        n.t && "hs" == n.t && $.trim(n.q) && t.dataStored.push({
                            value: $.trim(n.q),
                            pinyin: "|",
                            s: 4,
                            t: ""
                        })
                    }!window._is_sugempty_sam || window.bds && bds.comm && bds.comm.username || (t.getStore(), $.each(t.storearr, function (e, s) {
                        var n = decodeURIComponent(s.q),
                            a = decodeURIComponent(s.p);
                        t.dataStored.unshift({
                            value: n,
                            pinyin: a,
                            s: s.s,
                            t: s.t
                        })
                    }))
            }
            return t.dataStored
        }, placeHolder: function (e) {
            var t = this;
            t.placeholder = e || "", $(t.ipt).attr("placeholder", t.placeholder)
        }, getStore: function () {
            var e = this;
            try {
                e.storestr = bds.se.store.get("BDSUGSTORED"), e.storearr = e.storestr && $.parseJSON(e.storestr) || []
            } catch (t) {
                e.storestr = "[]", e.storearr = []
            }
            $.each(e.storearr, function (e, t) {
                t.t = t.t || 0, t.s = t.s || 4
            })
        }, setStore: function () {
            var e = this,
                t = "";
            $.each(e.storearr, function (e, s) {
                t += (0 == e ? "" : ",") + '{"q":"' + s.q + '","p":"' + s.p + '","s":' + s.s + ',"t":' + s.t + "}"
            }), e.storestr = "[" + t + "]";
            try {
                bds.se.store.set("BDSUGSTORED", e.storestr)
            } catch (s) {}
        }, mergeData: function (e) {
            function t(e, t, n, i) {
                function r(e, t) {
                    var e = $.subByte(e, "41");
                    return t && e ? (e = $.trim(e), t = $.trim(t), e = 0 == e.indexOf(t) && e !== t ? o(e, t) : u(e)) : e = u(e), e
                }

                function o(e, t) {
                    e = u(e), t = u(t);
                    var s = t,
                        n = t.length,
                        a = "<b>" + e.substring(n) + "</b>";
                    return s + a
                }

                function u(e) {
                    return e = e.replace(/&/g, "&amp;"), e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;")
                }
                var d = {};
                d.value = e;
                var c = r(e, s.queryValue);
                switch (t) {
                case "hot":
                    var l = ["#f54545", "#f54545", "#ff8547", "#ffac38"];
                    d.html = '<span style="display:inline-block; padding:1px 0; color:#fff; width:14px; line-height:100%; font-size:12px; text-align:center; background:' + (l[a] || "#aaa") + '; margin-right:5px;">' + a + "</span>", d.html += '<span style="color:#666">' + n.q + "</span>", n.n && 1 == n.n && (d.html += '<span style="display:inline-block; padding:2px; color:#fff; line-height:100%; font-size:12px; text-align:center; background:#f13f40; margin-left:5px;">新</span>'), d.type = "hot";
                    break;
                case "direct":
                    d.html = "-" == n.iconurl ? '<p link="' + n.siteurl + '">' + n.site + "<span>" + n.showurl + "</span><i>官网</i></p>" : '<p link="' + n.siteurl + '"><img src="' + n.iconurl + '"/>' + n.site + "<span>" + n.showurl + "</span></p>", d.type = "direct";
                    break;
                case "ala":
                    d.html = "<h3>" + c + "</h3><p>" + n.word + "</p>", d.type = "ala", d.alaid = n.id;
                    break;
                case "store":
                    2 == n["new"] && (c += '<span class="bdsug-newicon">&nbsp;[<i>企业</i>]</span>'), d.html = "<span>" + c + "</span>", (bds.comm.username || "|" != n) && (d.html += '<u class="bdsug-store-del ' + ("|" == n ? "bdsug-store-del-cloud" : "") + '" title="如您不需要此搜索历史提示，&#13;可在右上角搜索设置中关闭">删除</u>'), d.type = "store", d.pinyin = n, d.s = i;
                    break;
                default:
                    2 == n["new"] && (c += '<span class="bdsug-newicon">&nbsp;[<i>企业</i>]</span>'), d.html = c
                }
                if (!s.withoutZhixin && s.zhixinsug.length > 0)
                    for (var g = 0; g < s.zhixinsug.length; g++)
                        if (d.value == s.zhixinsug[g].value && "ala" != d.type) {
                            d.zxtype = s.zhixinsug[g].type, d.zxurl = s.zhixinsug[g].url;
                            var m = '<i class="bdsug-arrow"></i>';
                            d.html.split(m).length <= 1 && (d.html += m)
                        }
                return d
            }
            var s = this,
                n = [],
                a = 0,
                i = 0;
            if (s.rsv_sug = 0, s.dataHot.length > 0 && "" === s.value) {
                for (var r = 0; r < s.dataHot.length && (a++, n.push(t(s.dataHot[r].value, "hot", s.dataHot[r].otherData)), !(a >= 8)); r++);
                return n
            }
            if (s.dataDirect.length > 0 && (n.push(t(s.dataDirect[0].value, "direct", s.dataDirect[0].otherData)), ns_c({
                pj_name: "zhida_sug",
                zhida_prefix: encodeURIComponent(s.inputValue),
                zhida_query: encodeURIComponent(s.dataDirect[0].value),
                zhida_chufa: encodeURIComponent(s.dataDirect[0].otherData.hit_q),
                zhida_bp: bds.comm.ishome ? 0 : 1
            })), s.dataAladdin.length > 0)
                for (var r = 0; r < s.dataAladdin.length && (n.push(t(s.dataAladdin[0].value, "ala", s.dataAladdin[0].otherData)), a++, !(a >= 1)); r++);
            if (s.dataStored.length > 0)
                for (var r = 0; r < s.dataStored.length; r++) {
                    for (var o = !1, u = 0; u < n.length; u++) "direct" != n[u].type && s.dataStored[r].value == n[u].value && (o = !0);
                    if (o || (n.push(t(s.dataStored[r].value, "store", s.dataStored[r].pinyin, s.dataStored[r].s || 0)), a++, 0 == i && "|" == s.dataStored[r].pinyin && (i = 3)), s.rsv_sug++, "" === s.value && a >= 9) break;
                    if ("" !== s.value && a >= 2) break
                }
            var d = [];
            if (e.g && e.g.length > 0) {
                for (var r = 0; r < e.g.length; r++)
                    if ("n" === e.g[r].t) {
                        for (var o = !1, u = 0; u < n.length; u++) "direct" != n[u].type && e.g[r].q == n[u].value && (o = !0);
                        o || (d.push(t(e.g[r].q, e.g[r].t, e.g[r].st)), i = i ? i : 1)
                    }
                n = "" === s.value && d.length ? bds.comm.supportis ? d.slice(0, Math.max(4 - n.length, 2)).concat(n) : d.slice(0, Math.max(10 - n.length, 5)).concat(n) : n.concat(d)
            }
            switch (i) {
            case 1:
                s.rsv_sug7[0] = 1;
                break;
            case 3:
                s.rsv_sug7[2] = 1
            }
            return n
        }, render: function (e) {
            var t = this;
            if (t.is_selecting = !1, t.sugcontainer || (t.sugcontainer = document.createElement("DIV"), t.sugcontainer.className = "bdsug", $(t.sugcontainer).delegate("li", "mouseenter", function () {
                var e = $(this).data("key");
                t.blurSug($(t.sugcontainer).find("li")), t.focusSug(this, e), t.index = $(t.sugcontainer).find("li").index($(this))
            }).delegate("li", "mouseleave", function () {
                $(this).removeClass("bdsug-s")
            }).delegate("li", "click", function () {
                var e = $(this).data("key");
                t.directSugSelected = $(this).hasClass("bdsug-direct") ? !0 : !1, t.sugValue = t.showValue = t.value = t.ipt.value = e, t.index = $(t.sugcontainer).find("li").index($(this)), t.hideSug(), bds && bds.comm && 0 === bds.comm.ishome && t.addStat("oq", bds.comm.confirmQuery ? xss(bds.comm.confirmQuery) : ""), bds && bds.comm && bds.comm.confirmQid && t.addStat("rsv_pq", bds.comm.confirmQid), t.addStat("sug", xss(e)), t.addStat("rsv_sug2", 1), t.formSubmit()
            }), $(t.sugcontainer).click(function (e) {
                e.stopPropagation()
            })), e.length > 0) {
                for (var s = document.createElement("UL"), n = bds && bds.util && bds.util.domain ? bds.util.domain.get("http://sclick.baidu.com") : "http://sclick.baidu.com", a = 0; a < e.length; a++) {
                    var i = document.createElement("LI");
                    if (i.innerHTML = e[a].html, e[a].zxtype && e[a].zxurl) {
                        var r = e[a].value,
                            o = e[a].zxtype,
                            u = e[a].zxurl,
                            d = t.zhixindata[r] && t.zhixindata[r].responseJSON && 0 == t.zhixindata[r].responseJSON.status && t.zhixindata[r].responseJSON.data && t.zhixindata[r].responseJSON.data.length > 0;
                        d || (t.zhixindata[r] = $.ajax({
                            dataType: "jsonp",
                            async: !0,
                            url: u,
                            jsonp: "cb"
                        })), $(i).addClass("bdsug-zx").on("focused", function () {
                            var e = $(this).data("key"),
                                s = t.zhixindata[e] && t.zhixindata[e].responseJSON && 0 == t.zhixindata[e].responseJSON.status && t.zhixindata[e].responseJSON.data && t.zhixindata[e].responseJSON.data.length > 0,
                                n = $(t.sugcontainer).find(".bdsug-box")[0];
                            if (s && n && bds.se.sugzx && bds.se.sugzx[o]) {
                                var a = bds.se.sugzx[o](t.zhixindata[e].responseJSON.data, e, t.outInterface(), t);
                                a instanceof jQuery && ($(t.sugcontainer).addClass("bdsug-showzx"), $(n).empty().append(a), $(t.sugcontainer).height() < $(t.sugcontainer).find(".bdsug-box").height() && $(t.sugcontainer).css({
                                    height: $(t.sugcontainer).find(".bdsug-box").height()
                                }))
                            }
                        }).on("blured", function () {
                            $(t.sugcontainer).removeClass("bdsug-showzx"), $(t.sugcontainer).css({
                                height: "auto"
                            })
                        })
                    }
                    t.setSug(i, e[a].value, e[a].type), s.appendChild(i)
                }
                t.form ? $(t.sugcontainer).insertBefore(t.form.firstChild) : $(t.ipt).after(t.sugcontainer), t.sugcontainer.innerHTML = "", t.sugcontainer.appendChild(s), $(t.sugcontainer).removeClass("bdsug-showzx"), $(t.sugcontainer).css({
                    height: "auto"
                });
                var c = $(t.sugcontainer).find("ul li");
                t.withoutZhixin || ($(t.sugcontainer).addClass("bdsug-showarrow"), $(t.sugcontainer).append($('<div class="bdsug-box"></div>')), $(t.form).find(".bdsug-tmp").length || $(t.form).append($('<div class="bdsug-tmp"></div>')), $(t.sugcontainer).find(".bdsug-box").on("mouseenter", function () {
                    $(t.sugcontainer).addClass("bdsug-showzx"), $(c[t.index]).addClass("bdsug-s")
                }).on("mouseleave", function () {
                    $(t.sugcontainer).removeClass("bdsug-showzx"), $(c[t.index]).removeClass("bdsug-s"), $(t.sugcontainer).css({
                        height: "auto"
                    })
                }).on("click", function (e) {
                    e.stopPropagation()
                })), $(t.form).find(".bdsug-tmp").empty();
                var l = $("<li>").appendTo($("<div>").addClass("bdsug-showzx").appendTo($(t.form).find(".bdsug-tmp"))),
                    g = $("<div>").css({
                        position: "absolute",
                        display: "inline-block",
                        top: "-10000px",
                        left: "-10000px"
                    }).appendTo($(t.form).find(".bdsug-tmp"));
                $.each(c, function (e, s) {
                    g.html($(s).html());
                    var n = 28;
                    g.width() > l.width() - $(t.sugcontainer).find(".bdsug-arrow").width() - n && $(s).addClass("bdsug-overflow")
                }), "" === t.value && t.dataHot.length && $(t.sugcontainer).prepend('<div style="height:25px; line-height:31px; padding-left:10px; font-size:12px; color:#333; overflow:hidden;">实时热搜</div>');
                var m = "0";
                if (0 == bds.comm.ishome ? m = "0" : 1 == bds.comm.ishome && window.s_domain && "home" == window.s_domain.base ? m = "2" : 1 == bds.comm.ishome && (m = "1"), "" === t.value && e.length) {
                    for (var p = 0, a = 0; a < e.length; a++) e[a].type && "store" == e[a].type && p++;
                    ns_c({
                        pj_name: "es_sug",
                        es_sug_num: e.length,
                        eb_sug_num: e.length - p,
                        es_sug_bp: m + "_" + (bds.comm.supportis ? 1 : 0)
                    }), t.dataStored.length && t.dataStored.length > 3 && ($(t.sugcontainer).append(bds.comm.username ? '<div style="text-align:right; background:#fafafa; color:#666; height:25px; line-height:25px;"><span class="setup_storeSug" style="margin-right:10px; text-decoration:underline; cursor:pointer;">关闭历史</span><span style="color:#e6e6e6;margin-right:10px;">|</span><span class="del_all_storeSug" style="margin-right:10px; text-decoration:underline; cursor:pointer;">删除历史</span><span style="color:#e6e6e6;margin-right:10px;">|</span><a class="more_storeSug" href="http://i.baidu.com/my/history?from=pssug" target="_blank" style="color:#666; text-decoration:underline; margin-right:10px;">更多历史</a></div>' : '<div style="text-align:right; background:#fafafa; color:#666; height:25px; line-height:25px;"><span class="setup_storeSug" style="margin-right:10px; text-decoration:underline; cursor:pointer;">关闭历史</span></div>'), $(t.sugcontainer).find(".del_all_storeSug").click(function () {
                        if (t.dataStored[0] && t.dataStored[0].pinyin && "|" == t.dataStored[0].pinyin) {
                            var e = window.bds && bds.util && bds.util.domain && bds.util.domain.get("http://api.open.baidu.com/pae/hsug/data/Deleteall");
                            $.ajax({
                                dataType: "jsonp",
                                scriptCharset: "utf-8",
                                jsonp: "cb",
                                timeout: 6e3,
                                url: e,
                                success: function () {}
                            })
                        }
                        t.storearr = [], t.setStore(), t.hideSug();
                        var s = window["BD_PS_C" + (new Date).getTime()] = new Image;
                        s.src = n + "/w.gif?q=delall&fm=beha&rsv_sug=delall&rsv_sid=" + bds.comm.sid + "&t=" + (new Date).getTime() + "&rsv_sug9=es_" + m + "_" + (bds.comm.supportis ? 1 : 0) + "&path=http://www.baidu.com"
                    }), $(t.sugcontainer).find(".more_storeSug").click(function () {
                        ns_c({
                            pj_name: "hs_sug_more"
                        })
                    }), $(t.sugcontainer).find(".setup_storeSug").click(function () {
                        bds.event.trigger("bd.se.loadpanel", {
                            tabindex: 0,
                            tipsConfig: {
                                content: bds && bds.comm && bds.comm.username ? "该选项可以关闭您账号下多个设备的搜索历史" : "该选项可以关闭您的历史记录",
                                wrapper: "#se-setting-5"
                            }
                        }), t.hideSug(), ns_c({
                            pj_name: "hs_sug_setup"
                        })
                    }))
                }
                $.each(c, function (s, a) {
                    if (e[s] && "store" == e[s].type) {
                        var i = s;
                        $(a).find("u").click(function (s) {
                            if (s.stopPropagation(), $(a).remove(), bds && bds.comm && bds.comm.username) {
                                var r = window.bds && bds.util && bds.util.domain && bds.util.domain.get("http://api.open.baidu.com/pae/hsug/data/Delete");
                                r = r + "?query=" + encodeURIComponent(e[i].value), $.ajax({
                                    dataType: "jsonp",
                                    scriptCharset: "utf-8",
                                    jsonp: "cb",
                                    timeout: 6e3,
                                    url: r,
                                    success: function () {}
                                })
                            }
                            if (e[i].pinyin && "|" == e[i].pinyin) {
                                t.dataCached = {};
                                var o = !1;
                                $.each(t.storearr, function (e) {
                                    encodeURIComponent(t.dataArray[i].value) == t.storearr[e].q && (o = e)
                                }), o !== !1 && (t.storearr.splice(o, 1), t.setStore())
                            } else {
                                var o = !1;
                                $.each(t.storearr, function (e) {
                                    t.dataArray[i].pinyin == decodeURIComponent(t.storearr[e].p) && (o = e)
                                }), o !== !1 && (t.storearr.splice(o, 1), t.setStore())
                            }
                            var u = window["BD_PS_C" + (new Date).getTime()] = new Image;
                            u.src = n + "/w.gif?q=" + encodeURIComponent(e[i].value) + "&fm=beha&rsv_sug=del&rsv_sid=" + bds.comm.sid + "&t=" + (new Date).getTime() + ("" === t.value ? "&rsv_sug9=es_" + m + "_" + (bds.comm.supportis ? 1 : 0) : "") + "&path=http://www.baidu.com"
                        })
                    }
                }), $(t.ipt).trigger("render", [t]), t.renderCallback(), t.showSug(), $(t.ipt).trigger("showSug", [t])
            } else t.renderCallback(), t.hideSug()
        }, setAutocomplete: function (e) {
            var t = this;
            $(t.ipt).attr("autocomplete", e)
        }, setSug: function (e, t, s) {
            $(e).attr("data-key", t), s && $(e).addClass("bdsug-" + s)
        }, clickIpt: function () {
            var e = this;
            bds.comm.query && e.ipt.value && bds.comm.query == e.ipt.value ? e.request(e.ipt.value, "2") : e.request(e.ipt.value)
        }, showSug: function () {
            var e = this;
            e.index = -1, e.ipt.value == e.reqValue && $(e.sugcontainer).show(), e.visible = !0, e.rsv_sug1++, e.addStat("rsv_sug1", e.rsv_sug1), e.addStat("rsv_sug7", e.rsv_sug7.join(""))
        }, hideSug: function () {
            var e = this;
            e.is_selecting = !1, $(e.ipt).trigger("hide", [e]), $(e.sugcontainer).hide(), e.visible = !1, e.jqXhr && e.jqXhr.abort(), e.jqXhr = null
        }, selectSug: function (e) {
            var t = this,
                s = $(t.sugcontainer).find("li");
            if (t.blurSug(s), t.directSugSelected = -1 != e && s.eq(e).hasClass("bdsug-direct") ? !0 : !1, -1 != e) {
                t.is_selecting = !0;
                var n = $($(s)[e]).data("key");
                t.focusSug(s[e], n), t.sugValue = t.showValue = t.value = t.ipt.value = n, t.addStat("sug", n), bds && bds.comm && 0 === bds.comm.ishome && t.addStat("oq", bds.comm.confirmQuery ? xss(bds.comm.confirmQuery) : ""), bds && bds.comm && bds.comm.confirmQid && t.addStat("rsv_pq", bds.comm.confirmQid), t.addStat("rsv_n", 1)
            } else t.is_selecting = !1, t.selectCallback(t.inputValue), t.showValue = t.value = t.ipt.value = t.inputValue, t.sugValue = "", t.removeStat("sug"), t.removeStat("rsv_n");
            t.stopRefresh = t.inputValue || 1 != bds.comm.ishome ? !1 : !0, $(t.ipt).trigger("selectSug", [t, e, n])
        }, blurSug: function (e) {
            $(e).removeClass("bdsug-s"), $(e).trigger("blured")
        }, focusSug: function (e, t) {
            var s = this;
            $(e).addClass("bdsug-s"), $(e).trigger("focused"), s.selectCallback(t)
        }, pressUp: function (e) {
            var t = this,
                e = $(t.sugcontainer).find("li").length;
            t.index--, t.index < -1 && (t.index = e - 1), t.selectSug(t.index)
        }, pressDown: function (e) {
            var t = this,
                e = $(t.sugcontainer).find("li").length;
            t.index++, t.index >= e && (t.index = -1), t.selectSug(t.index)
        }, addStat: function (e, t) {
            t = encodeURIComponent(t);
            var s = this;
            if (s.stat || (s.stat = {}), s.stat[e] = t, !s.withoutStat) {
                var n = $(s.form).find('input[type="hidden"][name="' + e + '"]');
                n.length ? $(n).val(t) : $(s.form).append('<input type="hidden" name="' + e + '" value="' + t + '"/>')
            }
        }, removeStat: function (e) {
            var t = this;
            if (!t.withoutStat && ($(t.form).find('input[type="hidden"][name="' + e + '"]').remove(), !t.stat)) try {
                delete t.stat[e]
            } catch (s) {}
        }, clearStat: function () {
            var e = this;
            bds && bds.comm && bds.comm.isAsync && (e.removeStat("rsp"), e.removeStat("prefixsug")), e.rsv_sug7 = [0, 0, 0], e.removeStat("rsv_n"), e.removeStat("rsv_sug"), e.removeStat("rsv_sug1"), e.removeStat("rsv_sug2"), e.removeStat("rsv_sug3"), e.removeStat("rsv_sug4"), e.removeStat("rsv_sug5"), e.removeStat("rsv_sug6"), e.removeStat("rsv_sug7"), e.removeStat("rsv_sug8"), e.removeStat("rsv_sug9"), e.stat = {}
        }, getRsvStatus: function (e) {
            var t = this,
                s = [],
                n = [-2];
            if (t.rsv_sug) {
                n = [-1];
                for (var a in t.dataArray) e == t.dataArray[a].value && (n = [0, a], a < t.rsv_sug && (n = [1, a]));
                for (var a = 0; a < t.rsv_sug && t.dataArray[a]; a++) s.push(t.dataArray[a].value.length, t.dataArray[a].s);
                n.push(t.index, t.rsv_sug, s.join("."))
            }
            return n.join("_")
        }, formSubmit: function (e) {
            var t = this,
                s = !0;
            if (-1 != t.index && (t.addStat("f", 3), t.addStat("prefixsug", xss(t.inputValue)), t.addStat("rsp", t.index), t.dataArray[t.index] && t.dataArray[t.index].alaid ? t.addStat("rsv_sug5", t.dataArray[t.index].alaid) : t.removeStat("rsv_sug5")), !t.dataArray[t.index] || "" !== t.inputValue && "|" !== t.dataArray[t.index].pinyin || "store" != t.dataArray[t.index].type) "" === t.inputValue && t.addStat("rsv_sug9", "eb_" + (bds.comm.supportis ? 1 : 0));
            else {
                var n = "0";
                0 == bds.comm.ishome ? n = "0" : 1 == bds.comm.ishome && window.s_domain && "home" == window.s_domain.base ? n = "2" : 1 == bds.comm.ishome && (n = "1"), t.addStat("rsv_sug9", "es_" + n + "_" + (bds.comm.supportis ? 1 : 0))
            }
            t.sugValue == t.value && (t.removeStat("rsv_n"), t.removeStat("sug")), 0 != t.inputT ? (t.addStat("inputT", (new Date).getTime() - t.inputT), t.directInputT = (new Date).getTime() - t.inputT, t.inputT = 0) : t.removeStat("inputT"), 0 != t.rsv_sug4 && (t.addStat("rsv_sug4", (new Date).getTime() - t.rsv_sug4), t.rsv_sug4 = 0), t.rsv_sug && t.addStat("rsv_sug", t.rsv_sug), $($(t.sugcontainer).find("li")[t.index]).hasClass("bdsug-zx") ? "all" == $(t.sugcontainer).find(".bdsug-box").attr("bdsug-click") ? t.addStat("rsv_sugtp", 1) : t.addStat("rsv_sugtp", 0) : t.removeStat("rsv_sugtp");
            try {
                ! function () {
                    var e = (new Date).getTime();
                    document.cookie = "WWW_ST=" + e + ";expires=" + new Date(e + 1e4).toGMTString()
                }()
            } catch (a) {}
            if (0 == t.index && t.dataDirect.length > 0 && t.directSugSelected) {
                if (window.open($(t.sugcontainer).find(".bdsug-direct p").attr("link"), "_blank"), t.blankHandle(), ns_c({
                    pj_name: "zhida_sug",
                    sug_prefix: encodeURIComponent(t.inputValue),
                    sug_query: encodeURIComponent(t.dataDirect[0].value),
                    sug_siteurl: encodeURIComponent(t.dataDirect[0].otherData.siteurl),
                    sug_chufa: encodeURIComponent(t.dataDirect[0].otherData.hit_q),
                    sug_inputT: t.directInputT ? t.directInputT : 0,
                    rsv_bp: bds.comm.ishome ? 0 : 1
                }), bds && bds.comm && bds.comm.username) {
                    var i = window.bds && bds.util && bds.util.domain && bds.util.domain.get("http://api.open.baidu.com/pae/hsug/data/write");
                    i = i + "?query=" + encodeURIComponent(t.dataDirect[0].value) + "&src=1&f=3&st=" + (t.showsugstore ? "1" : "0"), $.ajax({
                        dataType: "jsonp",
                        scriptCharset: "utf-8",
                        jsonp: "cb",
                        timeout: 6e3,
                        url: i,
                        success: function () {}
                    })
                }
                t.index = -1, t.directSugSelected = !1
            } else if ($.isFunction(t.submission) && (s = t.submission.call(t.form, e), t.hideSug(), t.inputValue = t.value, t.dataCached = {}, t.clearStat()), s) {
                var r = t.ipt.value;
                r && (r = $.limitWd(r), t.ipt.value = t.value = t.inputValue = t.showValue = r), t.form.submit(), t.blankHandle()
            }
            "_blank" !== $(t.form).attr("target") && t.addStat("rsv_bp", 1)
        }, blankHandle: function () {
            var e = this;
            /12783|14655|14668/.test(bds.comm.sid) ? setTimeout(function () {
                e.ipt.value = e.value = e.inputValue = e.showValue = "", (navigator && navigator.userAgent ? navigator.userAgent : "").match(/(msie [2-8])/i) || $(e.ipt).focus()
            }, 25) : /13488|14654|14667/.test(bds.comm.sid) && setTimeout(function () {
                $(e.ipt).select()
            }, 25)
        }, init: function () {
            var e = this;
            e.setAutocomplete("off"), e.addStat("rsv_bp", e.rsv_bp), e.updateInitData("init"), bds.se.sugdnscached || ($.ajax({
                dataType: "jsonp",
                async: !0,
                scriptCharset: "gbk",
                url: e.buildUrl("", "", !0),
                jsonp: "cb",
                timeout: 5e3,
                success: function () {}
            }), bds.se.sugdnscached = 1), e.imt = new ImeTrack({
                iptId: "kw",
                adv: !0,
                innerchange: !1
            }), $(e.ipt).on("inputChange", function (e, t) {
                t.imt.triggerInputChange(e)
            }), e.startCircle(), e.clearStat(), $(e.ipt).on("click", function (t) {
                t.stopPropagation(), !e.withoutMode && e.clickIpt(), 0 == e.rsv_sug4 && (e.rsv_sug4 = (new Date).getTime())
            }).on("focus", function () {
                e.startCircle()
            }).on("keydown", function (t) {
                t = t || window.event, 0 == e.inputT && (e.inputT = (new Date).getTime()), 0 == e.rsv_sug4 && (e.rsv_sug4 = (new Date).getTime()), (9 == t.keyCode || 27 == t.keyCode) && e.hideSug(), 13 == t.keyCode && e.addStat("rsv_sug2", 0), 86 == t.keyCode && t.ctrlKey && e.addStat("rsv_n", 2), e.sugcontainer && "none" != e.sugcontainer.style.display ? (38 == t.keyCode && (t.preventDefault(), e.pressUp()), 40 == t.keyCode && (t.preventDefault(), e.pressDown())) : (38 == t.keyCode || 40 == t.keyCode) && (t.preventDefault(), e.request(e.value))
            }), e.form && $(e.form).submit(function (t) {
                return bds && bds.comm && 0 === bds.comm.ishome && e.addStat("oq", bds.comm.confirmQuery ? xss(bds.comm.confirmQuery) : ""), bds && bds.comm && bds.comm.confirmQid && e.addStat("rsv_pq", bds.comm.confirmQid), e.formSubmit(t), !1
            })
        }, outInterface: function () {
            var e = this;
            return {
                setVisibleSug: function () {
                    var t = $("<i class='c-icon c-icon-bear-round'></i>");
                    return function (s) {
                        var n;
                        for (t.remove(), n = 0; n < e.dataArray.length; n++)
                            if (e.dataArray[n].value == s) {
                                t.appendTo($(e.sugcontainer).find("li").eq(n));
                                break
                            }
                    }
                }(),
                getStat: function (t) {
                    return e.stat ? e.stat[t] : void 0
                }, clearStat: function () {
                    return e.clearStat()
                }, setKey: function (t) {
                    e.ipt.value = e.value = e.inputValue = e.showValue = t
                }, visible: function () {
                    return e.visible
                }, is_selecting: function () {
                    return e.visible && e.is_selecting
                }, data: function () {
                    return e.dataArray && e.dataArray.length ? $.grep(e.dataArray, function (e) {
                        return "direct" != e.type
                    }) : []
                }, show: function () {
                    return e.showSug()
                }, hide: function () {
                    return e.hideSug()
                }, start: function () {
                    return e.startCircle()
                }, stop: function () {
                    return e.stopCircle()
                }, setMaxNum: function (t) {
                    return e.maxNum = t
                }, check: function () {
                    return e.check()
                }, formSubmit: function () {
                    return e.formSubmit()
                }, updateInitData: function () {
                    return e.updateInitData()
                }, on: function () {
                    $(e.ipt).on.apply($(e.ipt), arguments)
                }, height: function () {
                    return $(e.sugcontainer).height()
                }, off: function () {
                    $(e.ipt).off.apply($(e.ipt), arguments)
                }, getRsvStatus: function (t) {
                    return e.getRsvStatus(t)
                }
            }
        }
    }
}();