$(document).ready(function() {
    var key;
    var url;
    var CorF;
   
    $.getJSON("http://ip-api.com/json", function(json) {
		  key = "6b02fb2a4f4e51e0";
      url = "http://api.wunderground.com/api/" + key + "/conditions/q/" + JSON.stringify(json["region"]).replace(/\"/g, "") + "/" + JSON.stringify(json["city"]).replace(/\"/g, "") + ".json";
      $(".text2").html(JSON.stringify(json["city"]).replace(/\"/g, "") + ", " + JSON.stringify(json["region"]).replace(/\"/g, "") + ", " + JSON.stringify(json["countryCode"]).replace(/\"/g, ""));

      $.getJSON(url, function(json) {
        $(".text3").html(JSON.stringify(json.current_observation.temp_f));  
			  $("img").attr("src", JSON.stringify(json.current_observation.icon_url).replace(/\"/g, ""));     
        $(".text4").html(JSON.stringify(json.current_observation.weather).replace(/\"/g, ""));
      });
    });


    $('.asText').click(function() {
        
        if(CorF === "C") {
          CorF = "F";      
        } else {
          CorF = "C";      
        }
               // $(".text4").html(url);
        $.getJSON(url, function(json) {
			if(CorF === "C") {
			    $(".text3").html(JSON.stringify(json.current_observation.temp_c)); 
				$(".asText").html("C");
			}
			else {
				$(".text3").html(JSON.stringify(json.current_observation.temp_f));
				$(".asText").html("F");
			}	          
        });
    });

});