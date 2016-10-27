function fn(){}
fn.prototype = {
	init: function(){
		return this;
	}
}
var fn = function(){
	return new fn();
}
