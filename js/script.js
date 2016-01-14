$('.slick').slick();

var link_href;
$('.tabs-link a').on('click', function(e){
  e.preventDefault();

  $(this)
    .closest('.tabs-list')
    .find('.tabs-link.active')
    .removeClass('active');

  $(this)
   .closest('.tabs-link')
   .addClass('active');

  $(this)
   .closest('.tabs')
   .find('.tab-item.active')
   .removeClass('active');
  link_href = $(this).attr('href');
  $(link_href).addClass('active');
});
