jQuery(function(){

  $('.card').on('click', function(event) {
    $(this).toggleClass('card--open');
  });

  $('.card__like').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).toggleClass('card__like--red');
  });

  $('.card__follow-btn').on('click', function(event) {
    event.stopPropagation();
    const _this = $(this);
    _this.toggleClass('card__follow-btn--following');

    if (_this.text() === 'Following') {
      _this.text('Follow');
    } else {
      _this.text('Following');
    }
  });

})
