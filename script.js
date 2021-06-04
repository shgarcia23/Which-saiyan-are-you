$("button").click(function() {
    let age = $("input").val();
    let emotion = $("input").val;
    if (age >= 20 && "angry") {
        $("p").text("vegeta ");
        $(".v").show();
    } else if (age <= 19 && "angry") {
        $("p").text("trunks");
        $(".t").show();
    }
});
$("button").click(function() {
    let age = $("input").val();
    let emotion = $("input").val;
    if (age >= 20 && emotion=== "happy") {
        $("p").text("goku ");
        $(".g").show();
        $(".v").hide();

    } else if (age <= 19 && emotion=== "happy") {
        $("p").text("gohan");
        $(".g2").show();
        $(".t").hide();


    }




});