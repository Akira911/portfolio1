// lightbox //
"use strict"

var image = ["s1.jpg", "s2.jpg", "s3.jpg" , "s4.jpg" , "s5.jpg" ,"s6.jpg" ,"s7.jpg"  ,"s9.jpg" ,"s10.jpg" ,"s11.jpg" ,"s12.jpg"
,"s13.jpg" ,"s14.jpg" ,"s15.jpg" ,"s16.jpg" ,"s17.jpg" ,"s18.jpg" ,"s19.jpg"  ,"s20.jpg" ,"s8.jpg"  ];

var descriptions = ["A picture of a man"];
$(document).ready(function() {
  /* FOR LATER
    $("#img1").click(function() {


      $("#lightbox").css("width", "100%");
      $("#lightbox").css("height", "100%");
      $("#lightbox").css("background-color", "#E8E8E8");
      $("#lightbox").css("display", "block");
      // $("#lightbox").css("position", "fixed"); //


    });

    $("#lightbox").click(function() {
      $("#lightbox").css("display", "none");

    });

    */

  /* // Writing a paragraph that appears in your webpage !!!//
  for (var i = 0; i < 10; i++) {
    $("body").append("<p> Hello, I was written by JS Loop:" + i + "</p>");
  } */

  for (let i = 0; i < image.length; i++) {

    let currentImage = image[i];
    var imageID = "image" + i;

    //$("body").append("<img id='" + imageID + "' class='gallery' src='Images/" + currentImage + "' alt='descriptions' />");
    $("body").append(`<img id='${imageID}' class='gallery' src='${currentImage}' alt='Image' />`);


    $("#" + imageID).click(function() {

      $("body").append('<div id="lightbox"></div>');
      $("#lightbox").css({
        "position": "fixed",
        "top": "0",
        "left": "0",
        "text-align": "center",
        "width": "100%",
        "height": "100%",
        "background-color": "#E8E8E8",
        "display": "block"

      });
      $("#lightbox").append(`<img src='${currentImage}' alt='images' />`);

      $("#lightbox img").css("height", "100%");


      $("#lightbox").click(function() {
        $("#lightbox").remove();
      });


      console.log('Clicked' + i);

    });


  }
  $(".gallery").css("max-height", "300px");
  $(".gallery").css("margin-right", "25px");
  $(".gallery").css("padding-bottom" , "35px" );
//  $(".gallery").css("opacity", "0.5");

  $("body").css("background-color", "white");
});
