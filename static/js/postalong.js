//绑定事件
;(function(mQuery){
	//绑定验证码按钮事件
	document.querySelector('.u-code-btn').addEventListener('touchend',function(){
		mQuery.addClass(this,'z-code-btn-hover');
	})
})(mQuery);

