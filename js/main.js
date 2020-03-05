

$('.image-gallery').lightGallery({
  download:false,
  counter:false
});









//Searchfield based on the text inside the caption paragraphs//
let $search = $('#filter');
let $link = $('a');

$search.on('keyup', function(){
  const $value = $search.val().toLowerCase();

  $link.each(function(){
    const $currentLink = $(this);
    const $currentP =  $currentLink.find('p');

    if($currentP.text().toLowerCase().indexOf($value) === -1){
      $currentLink.hide();
    } else {
      $currentLink.show();
    }
 })
});
