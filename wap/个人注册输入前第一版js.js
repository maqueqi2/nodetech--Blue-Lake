//Step1:任务
function task() {
    var span=document.getElementById("time");
    var n=parseInt(span.innerHTML);
    n--;
    if(n>=9){
        span.innerHTML=n+span.innerHTML.slice(2);
    }else if(n>0){
        span.innerHTML=n+span.innerHTML.slice(1);
    }else if(n==0){
        span.innerHTML=n+span.innerHTML.slice(1);
        document.getElementById("time").setAttribute("style", "display:none");
    }
}
//点击获取，重置定时器
document.getElementById("setInterval").onclick=function () {
    document.getElementById("time").setAttribute("style", "display:block");
    var n=60;
    document.getElementById("time").innerHTML=n+document.getElementById("time").innerHTML.slice(1);
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