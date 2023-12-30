$("h1").addClass("big-title margin-50");

$("button").text("Don't Click Me");

$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function () {
  $("h1").toggleClass("active");
});

$("button").click(function () {
  //   $("h1").fadeToggle();
  //   $("h1").slideToggle();
  //   $("h1").animate({ opacity: 0.5 });
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});

$(document).keydown(function (event) {
  $("h1").text(event.key);
});

/*
$("h1").on("mouseover", function () {
  $("h1").css("color", "purple");
});


$("h1").before("<button>New</button>");

$("h1").after("<button>New</button>");

$("h1").prepend("<button>New</button>");

$("h1").append("<button>New</button>");

$("button").remove();
*/
