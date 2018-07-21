//动态
window.addEventListener('resize', function(e){
    //获取屏幕宽度(viewport)
    var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    //获取html的dom
    var htmlDom = document.getElementsByTagName('html')[0];
    //设置html的fontsize
    htmlDom.style.fontSize = htmlWidth / 10 + "px";
});
window.onload=function () {
    //获取屏幕宽度(viewport)
    var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    //获取html的dom
    var htmlDom = document.getElementsByTagName('html')[0];
    //设置html的fontsize
    htmlDom.style.fontSize = htmlWidth / 10 + "px";

    // 内容不为空才可以点击按钮
    var ipt1=document.getElementById("ipt1");
    var input = document.getElementsByTagName('input');
    //如果input为空 按钮不可点击
    for(var i = 0; i < input.length; i++) {
        (function(i) {
            input[i].onkeyup = function() {
                if(ipt1.value != '') {
                    document.getElementById("btn1").removeAttribute("disabled");
                    document.getElementById("btn1").style.background="#6C8BFE";
                    document.getElementById("btn1").style.color="#FFF";
                } else {
                    document.getElementById("btn1").disabled=true;
                    document.getElementById("btn1").style.background="#E5E5E5";
                    document.getElementById("btn1").style.color="#979799";
                }
            };
        })(i);
    }
};
//点击注册跳转到找回密码验证界面
document.getElementById("btn1").onclick=function () {
    window.location.href="wap登录前.html?backurl="+window.location.href;
};
//点击返回上一级页面
var icon1 = document.getElementsByClassName('icon1')[0];
icon1.onclick=function () {
    window.history.back();
};