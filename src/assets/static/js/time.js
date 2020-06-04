(function() {
    var t = 820;
    var a = 250;
    var r = 7;
    var n = 10;
    var e = .65;
    var f;
    var o = [];
    const v = ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF4444", "#CC0000"];
    var h = [];
    var u = [
        [
            [0, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 0, 1, 1, 0],
            [0, 0, 1, 1, 1, 0, 0]
        ],
        [
            [0, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [1, 1, 1, 1, 1, 1, 1]
        ],
        [
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 1, 1, 1, 1, 1]
        ],
        [
            [1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0]
        ],
        [
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 1, 0],
            [0, 0, 1, 1, 1, 1, 0],
            [0, 1, 1, 0, 1, 1, 0],
            [1, 1, 0, 0, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 1, 1]
        ],
        [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0]
        ],
        [
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0, 0],
            [1, 1, 0, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0]
        ],
        [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0],
            [0, 0, 1, 1, 0, 0, 0]
        ],
        [
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 1, 1, 0]
        ],
        [
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [1, 1, 0, 0, 0, 1, 1],
            [0, 1, 1, 1, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 0, 1, 1],
            [0, 0, 0, 0, 1, 1, 0],
            [0, 0, 0, 1, 1, 0, 0],
            [0, 1, 1, 0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ]
    ];

    function l(t) {
        var a = [];
        f.fillStyle = "#005EAC";
        var r = new Date;
        var e = 70,
            o = 30;
        var v = r.getHours();
        var u = Math.floor(v / 10);
        var l = v % 10;
        a.push({
            num: u
        });
        a.push({
            num: l
        });
        a.push({
            num: 10
        });
        var c = r.getMinutes();
        var u = Math.floor(c / 10);
        var l = c % 10;
        a.push({
            num: u
        });
        a.push({
            num: l
        });
        a.push({
            num: 10
        });
        var M = r.getSeconds();
        var u = Math.floor(M / 10);
        var l = M % 10;
        a.push({
            num: u
        });
        a.push({
            num: l
        });
        for (var p = 0; p < a.length; p++) {
            a[p].offsetX = e;
            e = m(e, o, a[p].num, t);
            if (p < a.length - 1) {
                if (a[p].num != 10 && a[p + 1].num != 10) {
                    e += n
                }
            }
        }
        if (h.length == 0) {
            h = a
        } else {
            for (var C = 0; C < h.length; C++) {
                if (h[C].num != a[C].num) {
                    s(a[C]);
                    h[C].num = a[C].num
                }
            }
        }
        i(t);
        g();
        return r
    }

    function s(t) {
        var a = t.num;
        var n = u[a];
        for (var e = 0; e < n.length; e++) {
            for (var f = 0; f < n[e].length; f++) {
                if (n[e][f] == 1) {
                    var h = {
                        offsetX: t.offsetX + r + r * 2 * f,
                        offsetY: 30 + r + r * 2 * e,
                        color: v[Math.floor(Math.random() * v.length)],
                        g: 1.5 + Math.random(),
                        vx: Math.pow(-1, Math.ceil(Math.random() * 10)) * 4 + Math.random(),
                        vy: -5
                    };
                    o.push(h)
                }
            }
        }
    }

    function i(t) {
        for (var a = 0; a < o.length; a++) {
            t.beginPath();
            t.fillStyle = o[a].color;
            t.arc(o[a].offsetX, o[a].offsetY, r, 0, 2 * Math.PI);
            t.fill()
        }
    }

    function g() {
        var n = 0;
        for (var f = 0; f < o.length; f++) {
            var v = o[f];
            v.offsetX += v.vx;
            v.offsetY += v.vy;
            v.vy += v.g;
            if (v.offsetY > a - r) {
                v.offsetY = a - r;
                v.vy = -v.vy * e
            }
            if (v.offsetX > r && v.offsetX < t - r) {
                o[n] = o[f];
                n++
            }
        }
        for (; n < o.length; n++) {
            o.pop()
        }
    }

    function m(t, a, n, e) {
        var f = u[n];
        for (var o = 0; o < f.length; o++) {
            for (var v = 0; v < f[o].length; v++) {
                if (f[o][v] == 1) {
                    e.beginPath();
                    e.arc(t + r + r * 2 * v, a + r + r * 2 * o, r, 0, 2 * Math.PI);
                    e.fill()
                }
            }
        }
        e.beginPath();
        t += f[0].length * r * 2;
        return t
    }
    var c = document.getElementById("canvas");
    c.width = t;
    c.height = a;
    f = c.getContext("2d");
    var M = new Date;
    setInterval(function() {
        f.clearRect(0, 0, f.canvas.width, f.canvas.height);
        l(f)
    }, 50)
})();


//导出声明的公共函数
// export {
//     addNum, getExplorerInfo
// }