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
    var ipt2=document.getElementById("ipt2");
    var input = document.getElementsByTagName('input');
    //如果input为空 按钮不可点击
    for(var i = 0; i < input.length; i++) {
        (function(i) {
            input[i].onkeyup = function() {
                if(ipt1.value != ''&&ipt2.value != '') {
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

//Step1:任务
function task() {
    var span=document.getElementById("time");
    var n=parseInt(span.innerHTML);
    n--;
    if(n>=9){
        span.innerHTML=n+"s";
    }else if(n>0){
        span.innerHTML=n+"s";
    }else if(n==0){
        span.innerHTML=n+"s";
        document.getElementById("time").setAttribute("style", "display:none");
    }
}
//点击获取，重置定时器
document.getElementById("setInterval").onclick=function () {
    document.getElementById("time").setAttribute("style", "display:block");
    var n=60;
    document.getElementById("time").innerHTML=n+"s";
};
//Step2:启动周期性定时器
var timer=setInterval(task,1000);
//Step3:停止定时器
function stop() {
    clearInterval(timer);
    timer=null;
}
//点击跳转到找回密码验证界面
document.getElementById("btn1").onclick=function () {
    window.location.href="找回密码验证.html?backurl="+window.location.href;
};
//点击返回上一级页面
var icon1 = document.getElementsByClassName('icon1')[0];
icon1.onclick=function () {
    window.history.back();
};

// .onblur当id为ipt1的元素失去焦点时触发
document.getElementById("ipt1").onblur=function () {
    var ipt1=document.getElementById("ipt1");
    var i=ipt1.value.search(/1[34578]\d{9}/);
    if(i==-1){
        alert("手机号码格式出错");
    }
};