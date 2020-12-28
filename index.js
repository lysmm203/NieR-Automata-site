var caption_array = $(".carousel_caption");

var caption_counter = 0;



//
// $(document).ready(function() {
//   $(".carousel_caption").click(function() {
//     $(".carousel_caption").hide();
//   });
//
// });

$(".twobee_caption").show();


$(".carousel-control-next").click(function() {

    hideEverything(caption_array);
    caption_counter++;
    $(proxy[caption_counter]).show();

    if (caption_counter == caption_array.length) {
        caption_counter = 0;
        $(".twobee_caption").show();
    }

});


$(".carousel-control-prev").click(function() {
    hideEverything(caption_array);
    caption_counter--;
    $(proxy[caption_counter]).show();

    if (Math.abs(caption_counter) == caption_array.length) {
        caption_counter = 0;
        $(".twobee_caption").show();
    }

});



function hideEverything(array) {
    for (var i = 0; i < array.length; i++) {
        array[i].style.display = "none";
    }
}

function showCaption(counter, array){
    array[counter].style.display = "block";
}




const proxy = new Proxy(caption_array, {
    get(target, prop) {
        if (!isNaN(prop)) {
            prop = parseInt(prop, 10);
            if (prop < 0) {
                prop += target.length;
            }
        }        return target[prop];
    }
});
