jQuery(function($) {
  var ACTIVE_CLASS = 'g-active';

  var $btn = $('.btn'),
      $prev = $('#prev'),
      $next = $('#next'),
      $team = $('.card-team-member'),
      $items = $('.item', '#cardPagination'),
      $mittens = $('.card-mittens'),
      slider;

  slider = new Swipe(document.getElementById('slider'), {
    callback: function(event, index, elem) {
      setActiveItem();

      $prev.show();
      $next.show();

      if (slider.getPos() === 0) {
        $prev.hide();
      }
      else if (slider.getPos() === ($team.length - 1)) {
        $next.hide();
      }
    }
  });

  function setActiveItem() {
    $items.removeClass(ACTIVE_CLASS);
    var name = $team.eq(slider.getPos()).data('id');
    $(document.getElementById(name)).addClass(ACTIVE_CLASS);
  }

  $btn.on('click', function(e) {
    var $this = $(this),
        direction = $this.data('direction'),
        className = 'to-' + direction;

    e.preventDefault();
    $mittens
        .addClass(className)
        .on('webkitAnimationEnd animationEnd', function() {
          $mittens.removeClass(className);
        });
    slider[direction == 'right' ? 'next' : 'prev']();
  });

  $items.on('click', function(e) {
    var $this = $(this);

    $items.removeClass(ACTIVE_CLASS);
    $this.addClass(ACTIVE_CLASS);
    slider.slide($this.data('page'));
  });

  $('.snowglobe').on('click', function() {
    $(document).snowfall('clear');

    setTimeout(function() {
      $(document).snowfall();
      $(document).snowfall({
        collection: '.collectonme',
        flakeCount: 80,
        minSize: 1,
        maxSize: 4,
        round: true,
        shadow: true
      });
    }, 500);

  });

  window.addEventListener("orientationchange", function() {
    slider.slide(slider.getPos());
  }, false);
});