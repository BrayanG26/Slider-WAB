define([
		'dojo/_base/declare',
		'jimu/BaseWidget',
		'dijit/_WidgetsInTemplateMixin',
		'esri/dijit/HorizontalSlider',
		'dojo/dom',
		'dojo/dom-style'
	],
	function (
		declare,
		BaseWidget,
		_WidgetsInTemplateMixin,
		HorizontalSlider,
		dom,
		domStyle) {
	//To create a widget, you need to derive from BaseWidget.
	return declare([BaseWidget, _WidgetsInTemplateMixin], {
		// Custom widget code goes here
		baseClass : 'jimu-widget-customwidget',
		horizontalSlider : null,
		//this property is set by the framework when widget is loaded.
		name : 'Slider',

		//methods to communication with app container:

		postCreate : function () {
			this.inherited(arguments);
			console.log('postCreate');
		},

		startup : function () {
			this.inherited(arguments);
			this.horizontalSlider = new HorizontalSlider({
					labels : ["1", "5", "10"]
				}, this.sliderNode);
			this.horizontalSlider.showButtons = true;
			this.horizontalSlider.startup();
			console.log('startup');
		},

		onOpen : function () {
			console.log('onOpen');
			var style = {
				left : '100px',
				right : '250px',
				top : '150px',
				bottom : '40px',
				width : '100px'
			};
			domStyle.set(this.sliderNode, style);
		},

		onClose : function () {
			console.log('onClose');
		}

	});
});