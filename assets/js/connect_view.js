(function() {

    SoGr.connectView = Backbone.View.extend({
    el: $('body'), // it needs to be called el...

    events: {
      'click #connect':  'connect'
    }, 

    initialize: function(){
      _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

       this.render();
    },

    render: function(){
      $(this.el).append("<a href='# class='button' id='connect'><img src='../images/btn-connect-l.png'/></a>");
    },

    connect: function(){
      SC.connect(function(){
        SC.get("/me", function(me){
          $("#username").text(me.username);
          $("#description").val(me.description);
        });
      });
    }
  });



 }).call(this);