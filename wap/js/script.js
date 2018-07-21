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

document.getElementById("close").onclick=function(){
    window.history.back();
    // window.history.go(-1);
};