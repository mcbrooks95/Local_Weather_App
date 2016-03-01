$(document).ready(function() {
    var city_string;
    var city_string2;
    var region_string;
    var region_string2;
    var country_string;
    var country_string2;
    var weather_string;
    var weather_string2;
    var icon_url_string;
    var icon_url_string2;
    var key;
    var url;
    var CorF;
   
    $.getJSON("http://ip-api.com/json", function(json) {
        //$(".text1").html(JSON.stringify(json));
		city_string = JSON.stringify(json["city"]);
		city_string2 = city_string.substring(1, (city_string.length - 1));
		region_string = JSON.stringify(json["region"]);
		region_string2 = region_string.substring(1, (region_string.length - 1));
		country_string = JSON.stringify(json["countryCode"]);
		country_string2 = country_string.substring(1, (country_string.length - 1));

		key = "6b02fb2a4f4e51e0";
		url = "http://api.wunderground.com/api/" + key + "/conditions/q/" + region_string2 + "/" + city_string2 + ".json";
       	$(".text2").html(city_string2 + ", " + region_string2 + ", " + country_string2);

        $.getJSON(url, function(json) {
			icon_url = JSON.stringify(json.current_observation.icon_url);
			icon_url_2 = icon_url.substring(1, (icon_url.length - 1));
         	$(".text3").html(JSON.stringify(json.current_observation.temp_f));  
			$("img").attr("src", "http://icons.wxug.com/i/c/k/nt_cloudy.gif");
			weather_string = JSON.stringify(json.current_observation.weather);
			weather_string2 = weather_string.substring(1, (weather_string.length - 1));         
         	$(".text4").html(weather_string2);
       	});
        //$(".message").html(url);
        //http://api.wunderground.com/api/6b02fb2a4f4e51e0/conditions/q/IN/West%20Lafayette.json
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