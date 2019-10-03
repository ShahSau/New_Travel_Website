$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scroolTop() > 40) {
      $('#topBtn').fadeIn();
    } else {
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });
});


$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scroolTop() > 80) {
      $('#topBtn2').fadeIn();
    } else {
      $('#topBtn2').fadeOut();
    }
  });

  $("#topBtn2").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });
});


$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scroolTop() > 100) {
      $('#topBtn3').fadeIn();
    } else {
      $('#topBtn3').fadeOut();
    }
  });

  $("#topBtn3").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scroolTop() > 120) {
      $('#topBtn4').fadeIn();
    } else {
      $('#topBtn4').fadeOut();
    }
  });

  $("#topBtn4").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scroolTop() > 140) {
      $('#topBtn5').fadeIn();
    } else {
      $('#topBtn5').fadeOut();
    }
  });

  $("#topBtn5").click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });
});
