define([
		'dojo/_base/declare',
		'jimu/BaseWidget',
		'dijit/_WidgetsInTemplateMixin',
		'esri/dijit/HorizontalSlider',
		'dojo/dom',
		'dojo/dom-style',
		'dijit/form/TextBox',
		'dijit/form/HorizontalRuleLabels',
		'dijit/form/HorizontalSlider'
	],
	function (
		declare,
		BaseWidget,
		_WidgetsInTemplateMixin,
		HorizontalSlider,
		dom,
		domStyle,
		TextBox,
		HorzRuleLabels,
		HorizSlider) {
	//To create a widget, you need to derive from BaseWidget.
	return declare([BaseWidget, _WidgetsInTemplateMixin], {
		// Custom widget code goes here
		baseClass : 'jimu-widget-customwidget',
		horizontalSlider : null,
		//this property is set by the framework when widget is loaded.
		name : 'Slider',
		_vectorial : null,
		_baseAerea : null,

		//methods to communication with app container:

		postCreate : function () {
			this.inherited(arguments);
			this._vectorial = this.map.getLayer(this.map.layerIds[1]);
			this._baseAerea = this.map.getLayer(this.map.layerIds[2]);
			console.log('postCreate');
		},

		startup : function () {
			this.inherited(arguments);
			this.horizontalSlider = new HorizSlider({
					minimum : 0,
					maximum : 1,
					intermediateChanges : true,
					onChange : function (value) {
						console.log('slider value: ' + value);
						this._onTransparencyChanged(value);
						console.log('opacity changed');
					}
				}, this.sliderNode);
			this.horizontalSlider.startup();
			new HorzRuleLabels({
				container : "bottomDecoration"
			}, this.transparencyRule);
			console.log('startup');
		},

		onOpen : function () {
			console.log('onOpen');
			/*var style = {
			left : '100px',
			right : '250px',
			top : '150px',
			bottom : '40px',
			width : '80px'
			};
			domStyle.set(this.sliderNode, style);*/
		},
		onClose : function () {
			console.log('onClose');
		},
		_onTransparencyChanged : function (opacity) {
			this._vectorial.setOpacity(1 - opacity);
			this._baseAerea.setOpacity(opacity);
		}

	});
});