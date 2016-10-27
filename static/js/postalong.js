(function(){
	function hasClass(obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }
    function addClass(obj,cls){
    	if (!hasClass(obj, cls)) obj.className += " " + cls;
    }
	//绑定验证码按钮事件
	document.querySelector('.u-code-btn').addEventListener('touchend',function(){
		addClass(this,'z-code-btn-hover');
	})	
})()

