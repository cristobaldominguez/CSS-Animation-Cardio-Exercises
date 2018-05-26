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

  $('select#image').on('change', function(event) {
    event.preventDefault();
    // $('.create__image .create__img').attr('src', 'assets/images/squared/' + $(event.target).val());
    $('.create__image .create__img').attr('src', `assets/images/squared/${$(event.target).val()}`);
  });

  $('select#author').on('change', function(event) {
    event.preventDefault();
    // $('.create__profile .create__img').attr('src', 'assets/images/profiles/' + $(event.target).val());
    $('.create__profile .create__img').attr('src', `assets/images/profiles/${$(event.target).val()}`);
  });

  $('form.create__form').on('submit', function(event) {
    event.preventDefault();

    const _this       = $(this);
    const title       = _this.find('[name="name"]').val();
    const image       = _this.find('[name="image"]').val();
    const author      = _this.find('[name="author"]').val();
    const author_name = _this.find('[name="author"]').children(':selected').text();
    const followers   = _this.find('[name="followers"]').val();
    const likes       = _this.find('[name="likes"]').val();
    const following   = _this.find('[name="following"]').val();

    // console.log({title, image, author, followers, likes, following})

    $('ul.cards').append('<li class="card">'+
      '<div class="card__highlight">'+
        '<img class="card__img" src="./assets/images/squared/'+ image +'" alt="">'+
      '</div>'+
      '<div class="card__content">'+
        '<div class="card__profile-container">'+
          '<img class="card__profile" src="./assets/images/profiles/'+ author +'" alt="">'+
        '</div>'+
        '<a class="card__like" href="#">'+
          '<i class="fas fa-heart"></i>'+
        '</a>'+
        '<div class="card__title">'+
          '<h2>'+ title +'</h2>'+
        '</div>'+
        '<div class="card__author">'+
          '<h3 class="card__author-name">'+ author_name +'</h3>'+
        '</div>'+
        '<div class="card__hidden">'+
          '<ul class="social">'+
            '<li class="social__element">'+
              '<div class="social__number">'+ followers +'</div>'+
              '<div class="social__text">Followers</div>'+
            '</li>'+
            '<li class="social__element">'+
              '<div class="social__number">'+ likes +'</div>'+
              '<div class="social__text">Likes</div>'+
            '</li>'+
            '<li class="social__element">'+
              '<div class="social__number">'+ following +'</div>'+
              '<div class="social__text">Following</div>'+
            '</li>'+
          '</ul>'+
          '<div class="card__follow">'+
            '<button class="card__follow-btn">Follow</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</li>')

    _this.find('[name="name"]').val('');
    _this.find('[name="image"]').val('uk.png');
    _this.find('[name="author"]').val('uk.png');
    _this.find('[name="followers"]').val('');
    _this.find('[name="likes"]').val('');
    _this.find('[name="following"]').val('');

    $('.create__image .create__img').attr('src', 'assets/images/squared/uk.png');
    $('.create__profile .create__img').attr('src', 'assets/images/profiles/uk.png');
  });

})
