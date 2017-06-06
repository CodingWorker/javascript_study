! function () {
    var t = navigator.platform.toUpperCase(),
        e = "http:" === location.protocol ? "http://image.baidu.com/n/image" : "https://sp1.baidu.com/70cHazva2gU2pMbgoY3K/n/image",
        a = -1 !== t.indexOf("MAC"),
        n = $("#kw"),
        o = $("#form").parent(),
        i = "https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/soutu/css/soutu.css",
        r = 10485760,
        s = 102400,
        u = {
            1: "抱歉，您上传的文件不是图片格式",
            2: "图片上传失败"
        },
        /**
         * [l description]
         * @type {Object}
         */
        l = {
            getEnv: function () {
                if (bds && bds.comm) {
                    if (bds.comm.ishome && bds.comm.newindex) return "newindex";
                    if (bds.comm.ishome) return "index";
                    if (/^\/imgsearch/.test(location.pathname)) return "imgresult"
                }
                return "result"
            }, supportVoice: function () {
                return window.URL = window.URL || window.webkitURL, 
                navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia, 
                window.AudioContext = window.AudioContext || window.webkitAudioContext, 
                navigator.getUserMedia && window.URL && window.AudioContext && window.Worker && swfobject.hasFlashPlayerVersion("11.1.0") ? !0 : !1
            }, parseQuery: function () {
                for (var t = window.location.search.substr(1), 
                    e = {}, 
                    a = t.substring(t.indexOf("?") + 1, t.length).split("&"), 
                    n = 0; n < a.length; n++) {
                    var o = a[n],
                        i = o.split("=");
                    i[0] && (e[i[0]] = decodeURIComponent(i[1]))
                }
                return e
            }, getQuery: function (t) {
                var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"),
                    a = window.location.search.substr(1).match(e);
                return null != a ? a[2] : null
            }, isURL: function (t) {
                return /^(((http[s]?:\/\/)|(ftp:\/\/))?([\w-]+\.)+(com|edu|gov|int|mil|net|org|biz|info|pro|name|museum|coop|aero|xxx|idv|al|dz|af|ar|ae|aw|om|az|eg|et|ie|ee|ad|ao|ai|ag|at|au|mo|bb|pg|bs|pk|py|ps|bh|pa|br|by|bm|bg|mp|bj|be|is|pr|ba|pl|bo|bz|bw|bt|bf|bi|bv|kp|gq|dk|de|tl|tp|tg|dm|do|ru|ec|er|fr|fo|pf|gf|tf|va|ph|fj|fi|cv|fk|gm|cg|cd|co|cr|gg|gd|gl|ge|cu|gp|gu|gy|kz|ht|kr|nl|an|hm|hn|ki|dj|kg|gn|gw|ca|gh|ga|kh|cz|zw|cm|qa|ky|km|ci|kw|cc|hr|ke|ck|lv|ls|la|lb|lt|lr|ly|li|re|lu|rw|ro|mg|im|mv|mt|mw|my|ml|mk|mh|mq|yt|mu|mr|us|um|as|vi|mn|ms|bd|pe|fm|mm|md|ma|mc|mz|mx|nr|np|ni|ne|ng|nu|no|nf|na|za|zq|aq|gs|eu|pw|pn|pt|jp|se|ch|sv|ws|yu|sl|sn|cy|sc|sa|cx|st|sh|kn|lc|sm|pm|vc|lk|sk|si|sj|sz|sd|sr|sb|so|tj|tw|th|tz|to|tc|tt|tn|tv|tr|tm|tk|wf|vu|gt|ve|bn|ug|ua|uy|uz|es|eh|gr|hk|sg|nc|nz|hu|sy|jm|am|ac|ye|iq|ir|il|it|in|id|uk|vg|io|jo|vn|zm|je|td|gi|cl|cf|cn)(:\d+)?(\/[^\s]*)?)$/.test(t)
            }, blobtoBase64: function (t, e) {
                var a = new FileReader;
                a.onload = function () {
                    e(this.result)
                }, 
                a.onerror = function () {
                    e()
                }, 
                a.readAsDataURL(t)
            }, compressImg: function (t) {
                function e(t, e) {
                    var a = new FileReader;
                    a.onload = function () {
                        var t = this.result.split("base64,")[1];
                        e(t, this.result)
                    }, 
                    a.onerror = function () {
                        e()
                    }, 
                    a.readAsDataURL(t)
                }

                function a(t, e, a) {
                    e = e || "", a = a || 512;
                    for (var n = atob(t), o = [], i = n.length, r = 0; i > r; r += a) {
                        for (var s = n.slice(r, r + a), u = new Array(s.length), l = 0; l < s.length; l++) u[l] = s.charCodeAt(l);
                        var c = new Uint8Array(u);
                        o.push(c)
                    }
                    return new Blob(o, {
                        type: e
                    })
                }

                function n(t) {
                    var e = t.width,
                        n = t.height;
                    if (e > 800 || n > 800) {
                        var o = Math.max(e / 800, n / 800);
                        e /= o, n /= o
                    }
                    var i = document.createElement("canvas");
                    i.width = e, i.height = n;
                    var r = i.getContext("2d");
                    r.fillRect(0, 0, i.width, i.height), r.drawImage(t, 0, 0, e, n);
                    var s = i.toDataURL("image/jpeg", 1);
                    return a(s.replace(/^.*?,/, ""), "image/jpeg")
                }
                var o = new $.Deferred,
                    i = t.size;
                return e(t, function (e, a) {
                    var r = new Image;
                    r.onload = function () {
                        return s > i && r.width < 800 && r.height < 800 ? void o.resolve(t) : (t = n(r), void o.resolve(t))
                    }, r.src = a
                }), o.promise()
            }, sendLog: function (t) {
                var e = location.href.match(/sign=(\w{32})\b/),
                    a = e && e[1] || "";
                t.sign = a, t.fm = "inlo", t.rsv_imageclick && (t.rsv_imageclick = l.getEnv() + "_" + t.rsv_imageclick), window.soutu_mixsearch && (t.rsv_imagemix = 1), window.ns_c(t)
            }
        },
        /**
         * [c description]
         * @type {Object}
         */
        c = {
            graphIconHtml: function () {
                return '<span class="soutu-btn"></span>'
            }, wrapHtml: function () {
                return '<div class="soutu-layer"><div class="soutu-url"><span class="soutu-url-wrap"><input id="soutu-url-kw" class="soutu-url-kw" maxlength="255" autocomplete="off" placeholder="在此处粘贴图片网址"/></span><span class="soutu-url-btn"><i class="soutu-icon soutu-url-btn-icon"></i></span><span class="soutu-url-error">请输入正确的图片网址</span></div><div class="soutu-state-normal"><div class="soutu-drop"><span class="soutu-drop-tip">拖拽图片到这里</span><i class="soutu-icon soutu-drop-icon"></i></div><div class="upload-wrap"><input type="file" class="upload-pic" value="上传图片"/><i class="soutu-icon upload-icon"></i><span class="upload-text">本地上传图片</span></div></div><a class="soutu-icon soutu-close" href="javascript:void(0);"></a></div>'
            }, waitingHtml: function () {
                return '<div class="soutu-state-waiting soutu-waiting"><div class="ball"><div class="b"></div><div class="b"></div><div class="b"></div></div><span>正在加载图片</span></div>'
            }, errorHtml: function (t) {
                return '<div class="soutu-state-error soutu-error"><i class="soutu-icon soutu-error-icon"></i><p class="soutu-error-main">' + t + '，请<a href="#" class="soutu-error-upload">重新上传</a></p><p class="soutu-error-tip">仅支持10M以下JPG,JPEG,PNG,BMP,GIF格式图片</p></div>'
            }, newTabTipHtml: function (t) {
                return ['<div class="soutu-state-newtabtip soutu-newtab">', '<div class="soutu-newtab-cont">', '<div class="soutu-newtab-img" style="background-image:url(' + t.imgUrl + ')">', "</div>", '<div class="soutu-newtab-text">', "<p>" + t.text + "</p>", "<span></span>", "</div>", "</div>", '<a class="soutu-newtab-link" href="' + t.url + '" target="_blank">查看搜索结果</a>', "</div>"].join("")
            }
        },
        /**
         * [d description]
         * @type {Object}
         */
        d = {
            init: function () {
                if ("imgresult" === l.getEnv()) {
                    var t = $("#form"),
                        e = t.find(".soutu-input-image");
                    if (e.length) {
                        var a = !0,
                            o = l.parseQuery(),
                            i = t.find("input[type=hidden]"),
                            r = i.clone();
                        t.attr("action", "/imgsearch"), i.remove(), delete o.wd, t.append('<input type="hidden" name="sign" value="' + o.sign + '">');
                        var s = function () {
                            e.remove(), e.off("click.soutu"), e.removeClass("soutu-input-image-active"), n.off(".soutu"), n.attr("placeholder", "").removeClass("soutu-input"), a = !1, t.find("input[type=hidden]").remove(), t.append(r), t.attr("action", "/s")
                        };
                        e.on("click.soutu", function () {
                            s(), 
                            l.sendLog({
                                rsv_imageclick: "del_thumb_by_click"
                            })
                        }), 
                        n.on("keydown", function (t) {
                            var a = n.val();
                            return 8 !== t.which || a.length ? void(a.length <= 1 && e.hasClass("soutu-input-image-active") && e.removeClass("soutu-input-image-active")) : void(e.hasClass("soutu-input-image-active") ? (s(), l.sendLog({
                                rsv_imageclick: "del_thumb_by_return"
                            })) : e.addClass("soutu-input-image-active"))
                        }), 
                        n.on("focus.soutu", function () {
                            e.show()
                        }), 
                        n.on("click", function () {
                            l.sendLog(a ? {
                                rsv_imageclick: "click_input_thumb"
                            } : {
                                rsv_imageclick: "click_input"
                            })
                        }), n.on("blur.soutu", function () {
                            e.removeClass("soutu-input-image-active")
                        }), $("#su").on("click.soutu", function () {
                            var t = n.val();
                            return a && !t.length ? (l.sendLog({
                                rsv_imageclick: "search_only_thumb"
                            }), location.href = "/imgsearch?" + $.param({
                                sign: o.sign,
                                wd: o.sign.substr(5, 16)
                            }), !1) : void 0
                        }), t.on("submit", function () {
                            l.sendLog(a ? {
                                rsv_imageclick: "search_image_and_text"
                            } : {
                                rsv_imageclick: "search_only_text"
                            })
                        })
                    }
                }
            }
        },
        /**
         *  
         * @type {Object}
         */
        p = {
            init: function () {
                var t = this;
                t.canDrop = "ondrop" in document.body;
                var e = $('<link rel="stylesheet" href="' + i + '" type="text/css" data-for="result"/>');
                "newindex" === l.getEnv() ? 
                e.insertBefore(o.parent()) : e.appendTo("head"), t.$graphIcon = $(c.graphIconHtml()).prependTo(n.parent()), o.addClass(a ? "soutu-env-mac" : "soutu-env-nomac").addClass("soutu-env-" + l.getEnv()), t.state = "init", d.init(), t.listenIcon()
            }, 

            listenIcon: function () {
                var t = this;
                t.$graphIcon.on("click", function (e) {
                    e.stopPropagation(), e.preventDefault(), t.show(), t.log({
                        rsv_imageclick: "camerabtn"
                    })
                }), $(document).on("dragstart.soutu", function (t) {
                    var e, a = t.originalEvent.dataTransfer,
                        n = t.target || t.srcElement,
                        o = n.nodeName.toLowerCase();
                    if ("img" === o) {
                        e = n.src;
                        try {
                            a.setData("text/plain", e)
                        } catch (i) {
                            a.setData("Text", e)
                        }
                    } else if ("a" === o) {
                        var r = $(n).children("img");
                        if (r.length) {
                            e = r[0].src;
                            try {
                                a.setData("text/plain", e)
                            } catch (i) {
                                a.setData("Text", e)
                            }
                        }
                    }
                }), 
                n.on("drop.soutu", function (e) {
                    e.originalEvent.dataTransfer && e.originalEvent.dataTransfer.files && e.originalEvent.dataTransfer.files.length && (e.stopPropagation(), e.preventDefault(), t.$graphIcon.trigger("click"), t.handleDrop(e), t.log({
                        rsv_imageclick: "iptdrop"
                    }))
                }).on("dragover.soutu", function () {
                    var t = window.bds && bds.se && bds.se.upn && bds.se.upn.cookieset || [],
                        e = t[0] && 1 === t[0].v;
                    return !e
                }), 
                $(window).one("index_off", function () {
                    o.removeClass("soutu-env-newindex"), o.removeClass("soutu-no-skin")
                })
            }, show: function () {
                var t = this;
                t.$layer || t.addLayer();
                var e = t.$layer;
                t.setState("normal"), e.show(), t.$graphIcon.hide(), 1 !== window.pageState || o.hasClass("soutu-env-result") || o.addClass("soutu-env-result"), "newindex" === l.getEnv() && (o.addClass("soutu-env-newindex"), window.s_session && !!s_session.userSkinName != !1 ? e.removeClass("soutu-no-skin") : e.addClass("soutu-no-skin"))
            }, close: function () {
                var t = this;
                t.$layer.hide(), t.$graphIcon.show(), t.setState("normal"), t.$urlErrorTip.hide(), t.$urlInput.val("")
            }, addLayer: function () {
                var t = this,
                    e = t.$layer = $(c.wrapHtml()).prependTo($("#form"));
                t.$urlInput = e.find("#soutu-url-kw").on("focus", function () {
                    e.find(".soutu-url-layer").addClass("focus")
                }).on("blur", function () {
                    e.find(".soutu-url-layer").removeClass("focus")
                }), "newindex" === l.getEnv() && $(".s-lite").not(".hide-icon").length && e.find(".soutu-url-btn").css("width", "103px"), t.$dropArea = e.find(".soutu-drop"), t.$urlErrorTip = e.find(".soutu-url-error"), t.$urlSearchBtn = e.find(".soutu-url-btn"), t.panelHidden = !1, t.listenLayer()
            }, handleDrop: function (t) {
                var e = this;
                e.$dropArea.removeClass("drag-over");
                var a;
                if (t.originalEvent.dataTransfer && (a = t.originalEvent.dataTransfer.files), a && 0 !== a.length) {
                    var n = a[0];
                    e.uptype = "drag", e.upload(n)
                } else {
                    var o;
                    try {
                        o = t.originalEvent.dataTransfer.getData("text/plain") || t.originalEvent.dataTransfer.getData("text/uri-list")
                    } catch (i) {
                        o = t.originalEvent.dataTransfer.getData("Text") || t.originalEvent.dataTransfer.getData("URL")
                    }
                    o ? e.handleURL(o) : e.setState("error")
                }
            }, listenLayer: function () {
                var t = this,
                    e = t.$layer;
                t.$urlInput.on("focus", function () {
                    e.find(".soutu-url-panel").addClass("focus")
                }).on("blur", function () {
                    e.find(".soutu-url-panel").removeClass("focus")
                }).on("keydown", function (e) {
                    var a = e.keyCode;
                    return "none" !== t.$urlErrorTip.css("display") && t.$urlErrorTip.hide(), 13 === a ? (t.handleURL(this.value), e.stopPropagation(), e.preventDefault(), !1) : void 0
                }), t.$urlSearchBtn.on("click", function () {
                    var e = t.$urlInput.val();
                    t.handleURL(e)
                }), t.$layer.find(".upload-pic").on("change", function () {
                    var e = this.files[0];
                    e && (t.uptype = "upload", t.upload(e))
                }), t.$layer.find(".upload-pic").on("click", function () {
                    t.log({
                        rsv_imageclick: "uploadbtn"
                    })
                }), t.$dropArea.on("dragover", function (e) {
                    t.$dropArea.addClass("drag-over"), e.stopPropagation(), e.preventDefault()
                }).on("dragleave", function (e) {
                    t.$dropArea.removeClass("drag-over"), e.stopPropagation(), e.preventDefault()
                }).on("drop", function (e) {
                    e.stopPropagation(), e.preventDefault(), t.handleDrop(e)
                }), t.$layer.find(".soutu-close").on("click", function () {
                    t.close(!0), t.log({
                        rsv_imageclick: "close"
                    })
                }), t.$layer.on("click", ".soutu-error-upload", function (e) {
                    e.stopPropagation(), e.preventDefault(), t.setState("normal")
                }), $(document).on("click", function (e) {
                    var a = e.target,
                        n = !0;
                    do
                        if (a === t.$layer[0] || a === t.$graphIcon[0]) {
                            n = !1;
                            break
                        }
                    while (a = a.parentNode);
                    n && t.close()
                })
            }, setNormal: function () {
                this.$layer.find(".soutu-state-normal").show();
                var t = this.$layer.find(".upload-pic");
                t.val("")
            }, setWaiting: function () {
                var t = this;
                t.$layer.append(c.waitingHtml());
                var e = [
                        [0, 40],
                        [20, 20],
                        [40, 0]
                    ],
                    a = ["rgb(55,137,250)", "rgb(99,99,99)", "rgb(235,67,70)"];
                t.$layer.find(".b").each(function (t, n) {
                    var o = 0;
                    $(n).css({
                            "background-color": a[t]
                        }),
                        function i() {
                            $(n).animate({
                                left: e[t][o % 2]
                            }, {
                                duration: 800,
                                easing: "swing",
                                progress: function (e, i) {
                                    i >= .5 && $(n).css({
                                        "background-color": a[(o + t) % 3]
                                    })
                                }, complete: function () {
                                    i()
                                }
                            }), o++
                        }()
                })
            }, setError: function (t) {
                var e = t.msg || u[2];
                this.$layer.append(c.errorHtml(e))
            }, setNewTabTip: function (t) {
                var e = this.$layer.find(".soutu-state-newtabtip");
                e.length && e.remove(), e = $(c.newTabTipHtml(t)), this.$layer.append(e), l.sendLog({
                    rsv_imageclick: "tipForNewTab"
                })
            }, setState: function (t, e) {
                var a = this;
                a.state = t, a.$layer.find(".soutu-state-normal").hide(), a.$layer.find(".soutu-state-error").remove(), a.$layer.find(".soutu-state-waiting").remove(), a.$layer.find(".soutu-state-newtabtip").remove(), a.$urlErrorTip.hide(), t = t.charAt(0).toUpperCase() + t.substring(1), a["set" + t].apply(a, [e || {}])
            }, handleURL: function (t) {
                l.isURL(t) ? (this.$urlInput.val(t), this.setState("normal"), this.$urlErrorTip.hide(), this.uploadUrl(t), this.log({
                    rsv_imageclick: "searchurl-success"
                })) : (this.setState("normal"), this.$urlErrorTip.show(), this.log({
                    rsv_imageclick: "searchurl-error"
                }))
            }, openResutlPage: function (t) {
                var e = this,
                    a = $("#form").attr("target");
                if ("_blank" === a) {
                    var n = "图片上传完毕，根据您的搜索习惯，<br/>将打开新窗口展示搜索结果",
                        o = window.player;
                    o && o.config && o.config.play.on && (n = "您正在听音乐，为了不打扰您继续听音乐，<br/>将打开新窗口查看搜索结果"), $.isString(e.uploadObj) ? e.setState("newTabTip", {
                        text: n,
                        imgUrl: e.uploadObj,
                        url: t
                    }) : l.blobtoBase64(e.uploadObj, function (a) {
                        e.setState("newTabTip", {
                            text: n,
                            imgUrl: a,
                            url: t
                        })
                    })
                } else location.href = t, e.close()
            }, validate: function (t) {
                var e = ["jpg", "jpeg", "png", "bmp", "gif"],
                    a = t.name.split("."),
                    n = a.pop().toLowerCase();
                return t.type && n && -1 !== $.inArray(n, e) ? t.size > r ? 2 : 0 : 1
            }, doAjax: function (t, a) {
                var n = this;
                "waiting" !== this.state && this.setState("waiting"), a = a || "", $.ajax({
                    url: e + "?" + a,
                    type: "POST",
                    data: t,
                    processData: !1,
                    contentType: !1,
                    success: function (t) {
                        n.uploadComplete(t)
                    }, error: function () {
                        n.setState("error")
                    }, always: function () {}
                })
            }, uploadUrl: function (t) {
                var e = this;
                e.uploadObj = t;
                var a = ["queryImageUrl=" + encodeURIComponent(t), "uptype=urlsearch"].join("&");
                this.log({
                    rsv_imageclick: "uploadurl"
                }), setTimeout(function () {
                    e.openResutlPage("http://image.baidu.com/n/pc_search?" + a)
                }, 10)
            }, upload: function (t) {
                var e = this;
                e.uploadObj = t, e.$urlInput.val("");
                var a = e.validate(t);
                if (a) return void 

                e.setState("error", {
                    msg: u[a]
                });
                e.setState("waiting");
                var n = new FormData;
                n.append("image", t);
                var o = ["fr=ps" + l.getEnv(), "target=pcSearchImage", "needJson=true", "id=WU_FILE_0", "name=" + t.name, "type=" + t.type || "", "lastModifiedDate=" + t.lastModifiedDate || "", "size=" + t.size || 0].join("&");
                e.doAjax(n, o), e.log({
                    rsv_imageclick: "uploadfile"
                })
            }, uploadComplete: function (t) {
                var e = this;
                !t.errno && t.data ? setTimeout(function () {
                    var a = t.data.pageUrl;
                    a += "&uptype=" + e.uptype || "upload", e.openResutlPage(a)
                }, 30) : e.setState("error")
            }, log: l.sendLog
        };
    p.init(), "function" == typeof define && define("soutu/js/tu", ["require"], function () {
        return p
    })
}();