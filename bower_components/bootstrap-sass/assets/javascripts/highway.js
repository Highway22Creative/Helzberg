jQuery(function($) {
  var date = new Date();
  var minutes = 20;
  date.setTime(date.getTime() + (minutes * 60 * 1000));
  // Services
  if ($.cookie('services') == 1) {
    $('.hwy-radio-ship').removeClass('selected');
    $('.hwy-radio-pickup').addClass('selected');
    $('.hwy-radio-appointment').removeClass('selected');
    $('.appointment').removeClass('active');
    $('.panel-ship').hide();
    $('.panel-appointment').hide();
    $('.panel-pickup').show();
    $('.pickup').addClass('active');
  } else if ($.cookie('services') == 2) {
    $('.hwy-radio-ship').removeClass('selected');
    $('.hwy-radio-pickup').removeClass('selected');
    $('.hwy-radio-appointment').addClass('selected');
    $('.appointment').addClass('active');
    $('.panel-ship').hide();
    $('.panel-appointment').show();
    $('.panel-pickup').hide();
    $('.pickup').removeClass('active');
  } else if ($.cookie('services') == 3) {
    $('.hwy-radio-ship').addClass('selected');
    $('.hwy-radio-pickup').removeClass('selected');
    $('.hwy-radio-appointment').removeClass('selected');
    $('.appointment').removeClass('active');
    $('.panel-ship').show();
    $('.panel-appointment').hide();
    $('.panel-pickup').hide();
    $('.pickup').removeClass('active');
  } else {
    $('.hwy-radio-ship').removeClass('selected');
    $('.hwy-radio-pickup').removeClass('selected');
    $('.hwy-radio-appointment').removeClass('selected');
    $('.appointment').removeClass('active');
    $('.panel-ship').hide();
    $('.panel-appointment').hide();
    $('.panel-pickup').hide();
    $('.pickup').removeClass('active');
  }
  // Cookie services selection
  
  $('.set-services-pickup').click(function() {
    $.cookie("services", 1, {
      expires: date
    });
  });


  $('.pickup').click(function() {
    $('.hwy-radio-ship').removeClass('selected'); 
    $('.hwy-radio-pickup').addClass('selected');
    $('.hwy-radio-appointment').removeClass('selected');
    $('.appointment').removeClass('active');
    $('.panel-ship').hide();
    $('.panel-appointment').hide();
    $('.panel-pickup').show();
    $('.pickup').addClass('active');
    $.cookie("services", 1, {
      expires: date
    });
  });
  $('.appointment').click(function() {
    $('.hwy-radio-ship').removeClass('selected');
    $('.hwy-radio-pickup').removeClass('selected');
    $('.hwy-radio-appointment').addClass('selected');
    $('.pickup').removeClass('active');
    $('.appointment').addClass('active');
    $('.panel-ship').hide();
    $('.panel-pickup').hide();
    $('.panel-appointment').show();
    $.cookie("services", 2, {
      expires: date
    });
  });
  $('.ship').click(function() {
    $('.hwy-radio-ship').addClass('selected');
    $('.hwy-radio-pickup').removeClass('selected');
    $('.hwy-radio-appointment').removeClass('selected');
    $('.pickup').removeClass('active');
    $('.appointment').removeClass('active');
    $('.panel-ship').show();
    $('.panel-pickup').hide();
    $('.panel-appointment').hide();
    $.cookie("services", 3, {
      expires: date
    });
  });
  // Location
  if ($.cookie('location') == '1') {
    $('.oakparkmall-radio').show();
    $('.oakparkmall-address').hide();
    $('.oakparkmall-location').hide();
    $('.towncenterplaza-radio').hide();
    $('.towncenterplaza-address').show();
    $('.towncenterplaza-location').show();
  } else {
    $('.oakparkmall-radio').hide();
    $('.oakparkmall-address').show();
    $('.oakparkmall-location').show();
    $('.towncenterplaza-radio').show();
    $('.towncenterplaza-address').hide();
    $('.towncenterplaza-location').hide();
  }
  $('.oakparkmall-radio').click(function() {
    $('.oakparkmall-radio').hide();
    $('.oakparkmall-address').show();
    $('.towncenterplaza-radio').show();
    $('.towncenterplaza-address').hide('');
    $.cookie("location", 0, { expires: date });
  });
  $('.towncenterplaza-radio').click(function() {
    $('.oakparkmall-radio').show();
    $('.oakparkmall-address').hide();
    $('.towncenterplaza-radio').hide();
    $('.towncenterplaza-address').show();
    $.cookie("location", 1, { expires: date });
  });

  // Date

  $('.reset-date').click(function() {
    $.cookie("date", 0, {
      expires: date
    });
  });


  if ($.cookie('date') == 1) {
    $('.date-selected').show();
    $('.select-date').hide();
  } else {
    $('.date-selected').hide();
    $('.select-date').show();
  }
  $('.select-date').click(function() {
    $('.select-date').hide();
    $('.date-selected').show();
    $.cookie("date", 1, { expires: date });
  });
 $('.reset-date').click(function() {
    $('.select-date').show();
    $('.date-selected').hide();
    $.cookie("time", 0, { expires: date });
  });



  
  // Time



  if ($.cookie('time') == 1) {
    $('.select-time').hide();
    $('.time-selected').show();
  } else {
    $('.time-selected').hide();
    $('.select-time').show();
  }
  $('.select-time').click(function() {
    $('.select-time').hide();
    $('.time-selected').show();
    $.cookie("time", 1, { expires: date });

  $('.reset-time').click(function() {
    $('.select-time').show();
    $('.time-selected').hide();
    $.cookie("time", 0, { expires: date });
  });

  });

  });

