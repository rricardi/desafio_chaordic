

$(document).ready(function() {

    var jqxhr = $.getJSON( "http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X", function(data) {
      console.log( "success", data );
    })
      .fail(function(textStatus, errorThrown) {
        console.log("error " + textStatus, errorThrown);
      })

});
