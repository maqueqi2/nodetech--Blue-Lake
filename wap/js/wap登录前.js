// 点击效果
$(".banner-btn").on('click', 'button', function () {
    $(this).addClass("btn2").siblings().removeClass("btn2");
});

// 单击切换密码显示
var flag = false;
document.getElementById("img1").onclick=function()
{
    var img1=document.getElementById("img1");
    if(flag)
    {
        document.getElementById("img1").src = "img/eyesclose.png";
        document.getElementById("ipt2").type="password";
        flag=false;
    }else {
        document.getElementById("img1").src = "img/eyesopen.png";
        document.getElementById("ipt2").type="text";
        flag=true;
    }
};