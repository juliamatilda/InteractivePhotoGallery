

$('.image-gallery').lightGallery({
  download:false,
  counter:false,
  width:'90%'
});









//Searchfield//
let $search = $('#filter');
let $images = $('img');

$search.on('keyup', function(){
  let $value = $search.val().toLowerCase();
  $images.show();
  if($value !== ''){
    $images.not('[alt*="' + $value + '"]').hide();
  }

});
