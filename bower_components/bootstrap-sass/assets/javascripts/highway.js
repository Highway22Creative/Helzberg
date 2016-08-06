jQuery(function( $ ) {

  // calculate cookie expiration for events filter--in this case 20 minutes
  var date = new Date();
  var minutes = 20;
  date.setTime(date.getTime() + (minutes * 60 * 1000));
  
  // determine in store services state based on cookie and display accordingly
  if($.cookie('inStore') == 'pickup'){
    $('.pickup').addClass('active');
    $('.appointment').removeClass('active');
    $('.panel-pickup').show();
    $('.panel-appointment').hide();
  }
  else if ($.cookie('inStore') == 'appointment'){
    $('.pickup').removeClass('active');
    $('.appointment').addClass('active');
    $('.panel-pickup').hide();
    $('.panel-appointment').show();
  }
  else if ($.cookie('inStore') == 'ship'){
    $('.pickup').removeClass('active');
    $('.appointment').removeClass('active');
    $('.panel-pickup').hide();
    $('.panel-appointment').hide();
  }
  else {
    $('.pickup').removeClass('active');
    $('.appointment').removeClass('active');
    $('.panel-pickup').hide();
    $('.panel-appointment').hide();
  }

  // clicking button, sets cookie to remember selection for 20 minutes
  $('.pickup').click(function() {
    $('.pickup').addClass('active');
    $('.appointment').removeClass('active');
    $('.panel-pickup').fadeIn();
    $('.panel-appointment').hide();
    $.cookie("inStore", 'pickup', { expires: date });
  });
  $('.appointment').click(function() {
    $('.pickup').removeClass('active');
    $('.appointment').addClass('active');
    $('.panel-pickup').hide();
    $('.panel-appointment').fadeIn();
    $.cookie("inStore", 'appointment', { expires: date });
  });
    $('.ship').click(function() {
    $('.pickup').removeClass('active');
    $('.appointment').removeClass('active');
    $('.panel-pickup').hide();
    $('.panel-appointment').hide();
    $.cookie("inStore", 'ship', { expires: date });
  });

});