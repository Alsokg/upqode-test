(function($) {

  $.NavAnchor = function(element, options) {
    var self = this;

    // default settings
    self.settings = $.extend({
      window: window.top,
      fixedMenuHeight: 60,
      scrollTime: 400
    }, options);


    self.init = function() {

      $(element).find('>ul>li').each(function(i, e) {
        // event click
        $(e).click(function(event) {
          event.preventDefault();

          var pos = $('#' + $(e).data('id')).position();
          $(self.settings.window.document).find('html, body').animate({ scrollTop: pos.top - self.settings.fixedMenuHeight },
            self.settings.scrollTime,
            function() {
              self.setAnchor($(e).data('id'));
            }
          );
        });
      });

      // scroll event
      $(self.settings.window).scroll(function() {
        self.setAnchor();
      });

    };

    self.setAnchor = function(anchorId) {
      var currentPos = -1;
      var currentId = '';

      $(element).find('>ul>li').each(function(i, e) {
        // remove selected class
        if ($('[data-id="' + $(e).data('id') + '"]').hasClass('is-active')) {
          $('[data-id="' + $(e).data('id') + '"]').removeClass('is-active');
        }

        var x = $('#' + $(e).data('id')).offset();
        var y = self.settings.window.pageYOffset;
        var scrPos = x.top - y;

        if ((scrPos >= 0 && currentPos >= scrPos) || currentPos <= 0 || currentId === '') {
          currentPos = scrPos;
          currentId = $(e).data('id');
        }


      });

      if (anchorId)
        currentId = anchorId;

      if (currentId !== '')
        $('[data-id="' + currentId + '"]').addClass('is-active');

    };

    self.init();
   // self.setAnchor();
  };

  $.fn.NavAnchor = function(options) {
    return this.each(function() {
      (new $.NavAnchor(this, options));
    });
  };
}(jQuery));
