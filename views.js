// JavaScript Document
window.views = window.views || {};

views.Tab = function(options) {

	// private
	this.min = 0;
	this.max = 99999;
	
	// public
	// jquery对象
	this.ele = $();
	// 切换事件
	this.eventType = "mouseenter";

	this.class_panel = ".tab-panel";
	this.class_leader = ".tab-leader";

	this.attr_type = "type";
	this.attr_active = "on-active";

	this.init(options);
	this.bindEvents();
};
views.Tab.prototype = {
	init : function(options) {

		for ( var x in options) {
			this[x] = options[x];
		}
		
		var $leader = this.ele.find(this.class_leader);
		this.min = 0;
		this.max = $leader.length -1;
		
		this.go(this.min);
	},
	bindEvents : function() {

		var $leader = this.ele.find(this.class_leader);
		var temp = {};
		var _this = this;
		temp[this.eventType] = function(e) {
			var n = $(this).index();
			_this.go(n);
		};

		$leader.bind(temp);

	},
	go : function(n) {

		if (n < this.min || n > this.max || n == this.active) {
			return;
		}
		
		var $leader = this.ele.find(this.class_leader);
		var panel = this.ele.find(this.class_panel);
		
		$leader.removeClass(this.attr_active).eq(n).addClass(this.attr_active);
		panel.removeClass(this.attr_active).eq(n).addClass(this.attr_active);
	}
};

$(document).ready(function(e) {
	$(".views-tab").each(function(index, element) {
		new views.Tab({
			ele : $(this)
		});
	});
});