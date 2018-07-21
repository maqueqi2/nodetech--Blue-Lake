
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
//点击注册跳转到找回密码验证界面
document.getElementById("btn1").onclick=function () {
    window.location.href="wap登录前.html?backurl="+window.location.href;
};