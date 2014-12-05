var images = [];
images[0] = "../images/test1.JPG";
images[1] = "../images/test2.JPG";

var $img = $("#img"), i = 0, speed = 200;

window.setInterval(function() {
  $img.fadeOut(speed, function() {
    $img.attr("src", images[(++i % images.length)]);
    $img.fadeIn(speed);
  }, 30000);
});