SoGr = {};

(function() {

    $(function() {

        SC.initialize({
            client_id: "9ba9381d894c0cc4421485707925533d",
            redirect_uri: "http://localhost:8080/html/callback.html"
        });

        var connectView = new SoGr.connectView();

        $("#get_favourites").on("click", function(){
            SC.get("/me/favorites", function(favs){
                console.log(favs);
                $.each(favs, function(index, obj) {
                    $(".favourites").append("<li>" + obj.title + "</li>");
                });
            });
        });

    });

 }).call(this);
