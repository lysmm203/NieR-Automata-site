var caption_array = $(".carousel_caption");

var caption_counter = 0;



$(document).ready(function() {
    $(".twobee_caption").show();

    var product_array = $(".product_image");

    for (var i = 0; i < product_array.length-1; i++) {
        product_array[i].style.display = "none";
    }

    $("#platform").change(function(){
        var platform_selected = $(this).children("option:selected").val();

        switch (platform_selected) {
            case "xbox_one":
            product_array[0].style.display = "inline";
            product_array[1].style.display = "none";
            product_array[2].style.display = "none";
                break;

            case "ps4":
            product_array[1].style.display = "inline";
            product_array[0].style.display = "none";
            product_array[2].style.display = "none";


                break;
            case "steam":
            product_array[2].style.display = "inline";
            product_array[1].style.display = "none";
            product_array[0].style.display = "none";

                break;



        }
    });
});










$(".carousel-control-next").click(function() {



    setTimeout(function() {

        hideEverything(caption_array);
        caption_counter++;
        $(proxy[caption_counter]).show();
        if (caption_counter == caption_array.length) {
            caption_counter = 0;
            $(".twobee_caption").show();
        }

    }, 500);




});


$(".carousel-control-prev").click(function() {

    setTimeout(function() {
        hideEverything(caption_array);
        caption_counter--;
        $(proxy[caption_counter]).show();

        if (Math.abs(caption_counter) == caption_array.length) {
            caption_counter = 0;
            $(".twobee_caption").show();
        }

    }, 500);


});

$("#platform").click(function() {





});





// Functions

function hideEverything(array) {
    for (var i = 0; i < array.length; i++) {
        array[i].style.display = "none";
    }
}

function showCaption(counter, array) {
    array[counter].style.display = "block";
}




const proxy = new Proxy(caption_array, {
    get(target, prop) {
        if (!isNaN(prop)) {
            prop = parseInt(prop, 10);
            if (prop < 0) {
                prop += target.length;
            }
        }
        return target[prop];
    }
});

//
// alert($("#character_page").css("display"));
