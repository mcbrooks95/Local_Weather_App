$(document).ready(function() {
    
      $.getJSON("http://ip-api.com/json", function(json) {
        $(".message").html(JSON.stringify(json));
        var city = json["city"];
        var region = json["region"];
        var key = "6b02fb2a4f4e51e0";
        var url = "http://api.wunderground.com/api/" + key + "/conditions/q/" + region + "/" + city + ".json";
        $.getJSON(url, function(json) {
          $(".message").html(JSON.stringify(json.current_observation.temperature_string));
        });
        //$(".message").html(url);
        
      });
});
