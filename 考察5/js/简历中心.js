window.onload = function () {
    var u2 = getClassNames('u2', 'ul');
    var searchBtn = getClassNames('btn1', 'button');
    var pc = document.getElementById('page-checked');
    var btn = pc.getElementsByTagName('li');

    //page效果
    for (var k = 0; k < getNameValue().length; k++) {
        (function(k) {
            if (pc.getAttribute('name') == getNameValue()[k][0]) {
                var pcLi = pc.getElementsByTagName('li');
                for (var j = 2; j < pcLi.length-2; j++) {
                    pcLi[j].firstChild.className = '';
                    (function(j) {
                        if(pcLi[j].getAttribute('value') == getNameValue()[k][1]) {
                            pcLi[j].firstChild.className = 'btn2';
                            // 当首页时仅下一页可点击，当尾页时仅上一页可点击
                            if (getNameValue()[k][1] > 1) { pcLi[1].firstChild.className = 'btn2'; }
                            if (getNameValue()[k][1] ==  btn.length - 4) { pcLi[btn.length - 2].firstChild.className = ''; }
                        }
                    })(j);
                }
            }
        })(k);
    }

    //page点击传参
    for (var i = 0; i < btn.length; i++) {
        (function(i) {
            btn[i].onclick = function () {
                if (i == 0) /*点击首页*/ {
                    getHref(btn[i].parentNode.getAttribute("name"), 1);
                } else if (i == 1) /*点击上一页*/ {
                    if (pageNow() == 1) /*如果当前页是 1*/{
                        getHref(btn[i].parentNode.getAttribute("name"), 1);
                    } else if (pageNow() > 1 && pageNow() <= btn.length-4) /*如果当前页不是 1*/ {
                        getHref(btn[i].parentNode.getAttribute("name"), (pageNow() - 1));
                    } else /*如果没有当前页也改为page=1*/ {
                        getHref(btn[i].parentNode.getAttribute("name"), 1);
                    }
                } else if (i == btn.length-1) /*点击尾页*/ {
                    getHref(btn[i].parentNode.getAttribute("name"), (btn.length - 4));
                } else if (i == btn.length-2) /*点击下一页*/ {
                    if (pageNow() ==  btn.length - 4) /*如果当前页是尾页*/{
                        getHref(btn[i].parentNode.getAttribute("name"), (btn.length - 4));
                    } else if (pageNow() >= 1 && pageNow() < btn.length-4) {
                        getHref(btn[i].parentNode.getAttribute("name"),  (parseInt(pageNow()) + 1));
                    } else /*如果没有当前页也改为page=尾页*/ {
                        getHref(btn[i].parentNode.getAttribute("name"), 2);
                    }
                } else /*点击数字*/ {
                    getHref(btn[i].parentNode.getAttribute("name"), btn[i].getAttribute("value"));
                }
            };
        })(i);
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // 获取当前页数~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    function pageNow() {
        var loca = window.location;
        var query = loca.search.substr(1);
        var arr = query.split("&");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].split("=");
            if(arr[i][0]=='page') {
                return arr[i][1];
            }
        };
    };

    // 为class="u2"的ul点击传参
    for (var i = 0; i < u2.length; i++) {
        (function(i){
            var cl = u2[i].getElementsByTagName('li');
            for (var j = 0; j < cl.length; j++) {
                (function(j){
                    cl[j].onclick = function () {
                        getHref(cl[j].parentNode.getAttribute("name"), cl[j].getAttribute("value"));
                    };
                })(j);
            }
        })(i);
    }
    //class="u2"的ul效果
    for (var k = 0; k < getNameValue().length; k++) {
        (function(k) {
            for (var i = 0; i < u2.length; i++) {
                (function(i) {
                    if (u2[i].getAttribute('name') == getNameValue()[k][0]) {
                        var u2Li = u2[i].getElementsByTagName('li');
                        for (var j = 0; j < u2Li.length; j++) {
                            u2Li[j].className = '';
                            (function(j) {
                                if(u2Li[j].getAttribute('value') == getNameValue()[k][1]) {
                                    u2Li[j].className = 'li1';
                                }
                            })(j);
                        }
                    }
                })(i);
            }
        })(k);
    }
    //search搜索框按钮点击传参
    for (var i = 0; i < searchBtn.length; i++) {
        (function(i) {
            searchBtn[i].onclick = function () {
                getHref(searchBtn[i].parentNode.getAttribute("name"), searchBtn[i].getAttribute("value"));
            };
        })(i);
    }



    // 改变href值~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    function getHref (name, value) {
        // 为了兼容IE和FF中没有origin
        if (location.protocol) {
            return  window.location = location.protocol + location.pathname + '?' + funcUrl (name, value, 1);
        } else {
            return  window.location = location.origin + location.pathname + '?' + funcUrl (name, value, 1);
        }
    };


    // 获取url中search的name、value~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    function getNameValue() {
        var loca = window.location;
        var query = loca.search.substr(1);
        var arr = query.split("&");

        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].split("=");
        };
        return arr;
    };



    // 拼接url的search~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    function funcUrl(name,value,type){
        var loca = window.location;
        var baseUrl = type==undefined ? loca.origin + loca.pathname + "?" : "";
        var query = loca.search.substr(1);
        // 如果没有传参,就返回 search 值 不包含问号
        if (name==undefined) { return query }
        // 本网页无此种情况66666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
        // 如果没有传值,就返回要查询的参数的值
        // if (value==undefined){
        // 	var val = query.match(new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"));
        // 	// 为什么是val[2]？5555555555555555555555555555555555555555555555555555555555555555555
        // 	return val!=null ? decodeURI(val[2]) : null;
        // };
        var url;
        if (query=="") {
            // 如果没有 search 值,则返回追加了参数的 url
            url = baseUrl + name + "=" + value;
        }else{
            // 如果有 search 值,则在其中修改对应的值,并且去重,最后返回 url
            var obj = {};
            var arr = query.split("&");
            for (var i = 0; i < arr.length; i++) {
                arr[i] = arr[i].split("=");
                obj[arr[i][0]] = arr[i][1];
            };
            obj[name] = value;
            url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&");
        };
        return url;
    }

    // 为了兼容ie获取ClassName的方法~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // 通过class名和标签名获取css样式对象组
    function getClassNames (classStr, tagName) {
        if (document.getElementsByClassName) {
            return document.getElementsByClassName(classStr);
        } else {
            //为了兼容ie8及其以下版本的方法
            var nodes = document.getElementsByTagName(tageName);
            var ret = [];
            for (i = 0; i < nodes.length; i++) {
                if (hasClass(nodes[i], classStr)) {
                    ret.push(nodes[i]);
                }
            }
            return ret;
        }
    };

    // 点击效果
    $(".ul2").on('click', 'li', function () {
        $(this).addClass("lihover").siblings().removeClass("lihover");
    });
    // $(".u2").on('click', 'li', function () {
    //     $(this).addClass("li1").siblings().removeClass("li1");
    // });
    // $(".u3").on('click', 'li', function () {
    //     $(this).addClass("li3").siblings().removeClass("li3");
    // });
    // $("button").click(function () {
    //     $(this).addClass("btn2");
    // });
}