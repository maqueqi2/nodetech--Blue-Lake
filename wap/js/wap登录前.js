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
};

// .onblur当id为ipt1的元素失去焦点时触发
document.getElementById("ipt1").onblur=function () {
    var ipt1=document.getElementById("ipt1");
    var i=ipt1.value.search(/1[34578]\d{9}/);
    if(i==-1){
        alert("手机号码格式出错");
    }
};

document.getElementById("close").onclick=function(){
    window.history.back();
    // window.history.go(-1);
};

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