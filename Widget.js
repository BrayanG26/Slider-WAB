define(['dojo/_base/declare', 'jimu/BaseWidget','dijit/form/HorizontalSlider',
        'dijit/form/HorizontalRuleLabels','dojo/parser','dijit/form/TextBox','dojo/dom',
		'dijit/_TemplatedMixin','dijit/_WidgetsInTemplateMixin','dojo/dom-style','dojo/text!./Template.html',
    'dijit/form/Button','esri/dijit/HorizontalSlider'],
        function(declare, BaseWidget,HorizSlider,HorzRuleLabels,parser,TextBox,dom,_TemplatedMixin,_WidgetsInTemplateMixin,domStyle,
                 template,Button,HorizontalSlider) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget,_WidgetsInTemplateMixin], {
      // Custom widget code goes here
      //templateString:template,
      baseClass: 'jimu-widget-customwidget',
	  slider:null,
      parser:null,
      //this property is set by the framework when widget is loaded.
      name: 'Slider',


      //methods to communication with app container:

       postCreate: function() {
         this.inherited(arguments);
         console.log('postCreate');
       },

       startup: function() {
           var style = {
               left: '100px',
               right: '250px',
               top: '150px',
               bottom: '40px',
               width: 'auto'
           };
		   console.log('el perro me mojo');
           this.inherited(arguments);
           this.slider = new HorizSlider({
               name: "slider",
               value: 5,
               minimum: 0,
               maximum: 1,
               intermediateChanges: true,
               onChange: function (value) {
                   dom.byId("sliderValue").value = value;
                   console.log("value of slider: "+value);
               }
           }, "slider");
           domStyle.set("slider", "display", "block");
           domStyle.set("slider", style);
        console.log('startup');
       },

       onOpen: function(){
         console.log('onOpen');
       },

       onClose: function(){
         console.log('onClose');
       },

      // onMinimize: function(){
      //   console.log('onMinimize');
      // },

      // onMaximize: function(){
      //   console.log('onMaximize');
      // },

      // onSignIn: function(credential){
      //   /* jshint unused:false*/
      //   console.log('onSignIn');
      // },

      // onSignOut: function(){
      //   console.log('onSignOut');
      // }

      // onPositionChange: function(){
      //   console.log('onPositionChange');
      // },

      // resize: function(){
      //   console.log('resize');
      // }

      //methods to communication between widgets:

    });
  });