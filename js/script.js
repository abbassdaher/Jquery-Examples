// Header Style App
$(".header-list li").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    // console.log($(this).attr("href", "home"))

});
// Window App
var homeTopOffset = $(".home").offset().top;
console.log(homeTopOffset);
$(window).scroll(function () {

    if ($(window).scrollTop() > 0) {
        $("header").css({
            "opacity": "0.6",
            "box-shadow": "2px 2px 5px"
        });
    }
    else {
        $("header").css({
            "opacity": "1",
            "box-shadow": ""
        });
    }
    console.log("yes");
});
// Dynamic Taps
$("body section").show()
$(".logo a").click(function () {
    $("body section").show()
})
$(".header-list li a").click(function () {
    var id = $(this).attr("id");
    // $("body section").hide();
    $("." + id).fadeIn()
    console.log("." + id);
});
// Filter Images
$(".bullet li").click(function () {
    var getID = $(this).attr("id")
    var img = $("images-list").find('div').attr("class", "getID");
    $("." + getID).siblings().hide()
    $("." + getID).fadeIn()
    $("#" + getID + " i").addClass("fa fa-circle")
    console.log("." + getID);
}
);
// Smooth Scroll Header App
// Scroll To Top App
var headerHeight = $("header").innerHeight();
$(".header-list li a").click(function () {
    let id = $(this).attr("id")
    $("body,html").animate(
        {
            scrollTop: $("."+id).offset().top-headerHeight
                    }
    )
});
//scrollo top button
$()
var aboutOffset = $(".about").offset().top
$(window).scroll(function () { 
    if($(window).scrollTop() > aboutOffset){
        $(".scrollTOP").fadeIn()
        
    }else{
        $(".scrollTOP").fadeOut();
    }
    
    

});
$(".scrollTOP").click(function () { 
    $("body,html").animate({
        scrollTop: $(".home").offset().top-50

    },900)
});

// Calculate | CountDown Characters of Textarea App