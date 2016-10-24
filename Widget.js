define(['dojo/_base/declare', 'jimu/BaseWidget','dijit/form/HorizontalSlider',
        'dijit/form/HorizontalRuleLabels','esri/dijit/HorizontalSlider','dojo/parser','dijit/form/TextBox','dojo/dom'],
        function(declare, BaseWidget,HorizSlider,HorzRuleLabels,HorizontalSlider,parser,TextBox,dom) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

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
           parser.parse();
           this.inherited(arguments);
           this.slider = new HorizSlider({
               name: "slider",
               value: 5,
               minimum: 0,
               maximum: 1,
               intermediateChanges: true,
               onChange: function (value) {
                   console.log("value of slider: "+value);
               }
           }, this.sliderDiv);

        console.log('startup');
       },

       onOpen: function(){
           console.log('el perro me mojo');
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