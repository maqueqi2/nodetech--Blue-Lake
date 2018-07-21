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

// 点击勾选是否同意用户协议
var flag = false;
document.getElementById("label1").onclick=function()
{
    if(flag)
    {
        document.getElementById("img1").src = "img/click_n.png";
        // js不能用setAttribute("disabled")添加，只能.disabled=true添加
        document.getElementById("btn1").disabled=true;
        flag=false;
    }else {
        document.getElementById("img1").src = "img/click_y.png";
        document.getElementById("btn1").removeAttribute("disabled");
        flag=true;
    }
};
// .onblur当id为ipt1的元素失去焦点时触发
document.getElementById("ipt1").onblur=function () {
    var ipt1=document.getElementById("ipt1");
    var i=ipt1.value.search(/1[34578]\d{9}/);
    if(i==-1){
        alert("手机号码格式出错");
    }
};

// 检查两次输入密码是否一致
document.getElementById("psd2").onblur=function () {
    var psd1=document.getElementById("psd1").value;
    var psd2=document.getElementById("psd2").value;
    if(psd1!=psd2){
        alert("两次输入密码不一致");
    }
};

//点击注册跳转到找回密码验证界面
document.getElementById("btn1").onclick=function () {
    window.location.href="wap登录前.html?backurl="+window.location.href;
};
