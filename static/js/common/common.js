;var mQuery = (function(window,document,undefined){
	var mQuery = function(){
		return new mQuery.prototype.init();
	}
	mQuery.prototype = {
		init: function(){
			return this;
		},
		hasClass: function(obj,cls){
			return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
		},
		addClass: function(obj,cls){
			if (!this.hasClass(obj, cls)) obj.className += " " + cls;
		},
		removeClass: function(obj, cls) {
            if (this.hasClass(obj, cls)) {
                var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                obj.className = obj.className.replace(reg, ' ');
            }
        }
	}

	mQuery.prototype.init.prototype = mQuery.prototype;

	window['$M'] = mQuery();
	return mQuery();
})(window,document);
