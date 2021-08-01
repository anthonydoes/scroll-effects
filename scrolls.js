$(document).on('scroll', function() {
    var pixelsFromTop = $(document).scrollTop()
  
    if (pixelsFromTop > 50) {
      $('header').addClass('hidden')
    } else {
      $('header').removeClass('hidden')
    }
  
    if (pixelsFromTop < 600) {
      $('body').css('background-color', '#174869')
    } else if (pixelsFromTop < 1400) {
      $('body').css('background-color', '#305066')
    } else if (pixelsFromTop < 2200) {
      $('body').css('background-color', '#728ab0')
    } else if (pixelsFromTop < 3000) {
      $('body').css('background-color', '#5e192e')
    } else {
      $('body').css('background-color', '#756b90')
    }
  
  
    var documentHeight = $(document).height()
    var windowHeight = $(window).height()
  
    var difference = documentHeight - windowHeight
  
    var percentage = 100 * pixelsFromTop / difference
  
    console.log(percentage)
      
    $('.bar').css('width', percentage + '%')
    
  })

  
  