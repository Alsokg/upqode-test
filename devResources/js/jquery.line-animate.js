(function($) {

  $.LineAnimate = function(element, options) {
    var self = this;

    // default settings
    self.settings = $.extend({
      animateTime: 2500,
      counterClass: ".line__precent__number",
      lineClass: ".line__filler",
      topOffset: 100
    }, options);


    self.init = function() {
      // scroll event
      $(window).scroll(function() {
        self.animate();
      });
    };

    self.animate = function(anchorId) {

      $(element).each(function(i, e) {
        // remove selected class
        if (!$(e).hasClass('is-animated')) {

          var x = $(e).offset();
          var y = window.pageYOffset;

          if (x.top < y + window.innerHeight - self.settings.topOffset) {
            var $number = $(e).find(self.settings.counterClass);
            var $line = $(e).find(self.settings.lineClass);
            var percent = $number.data('percent');
            $number.prop('Counter', 0).animate({
              Counter: percent
            }, {
              duration: self.settings.animateTime,
              step: function(now) {
                $number.text(Math.ceil(now));
              }
            });
            $line.animate({
              width: percent + "%"
            }, {
              duration: self.settings.animateTime,
            });
            $(e).addClass('is-animated');
          }
        }


      });

    };

    self.init();
    self.animate();
  };

  $.fn.LineAnimate = function(options) {
    return this.each(function() {
      (new $.LineAnimate(this, options));
    });
  };
}(jQuery));
