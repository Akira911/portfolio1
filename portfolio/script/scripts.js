// lightbox //
"use strict"

var image = ["images/a1.jpeg", "images/a2.jpeg", "images/a3.jpg" , "images/a4.jpg" , "images/a5.jpg" ,"images/a6.jpg" ,"images/a7.jpg"  ,"images/a9.jpeg" ,"images/a10.jpg" ,"images/a11.jpg" ,"images/a12.jpg"
,"images/a13.jpeg" ,"images/z1.jpg" ,"images/z2.jpg" ,"images/z3.jpeg" ,"images/z4.jpg" ,"images/z5.jpg" ,"images/z6.jpg"  ,"images/z7.jpg" ,"images/z8.jpg" ,"images/z9.jpg" ,"images/z10.jpg"  ,"images/z12.jpeg" ,"images/z13.jpeg" ,"images/z14.jpg"  ];

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
  $(".gallery").css("max-height", "260px");
  $(".gallery").css("margin-left", "15px");
    $(".gallery").css("margin-bottom", "25px");
      $(".gallery").css("margin-top", "50px");
//  $(".gallery").css("padding-bottom" , "50px" );
  $(".gallery").css("position", "center");
  $(".gallery").css("border", "2px solid white");
  //    $(".gallery").css("border-style", "dotted");

  $("body").css("background-color", "white");
});
