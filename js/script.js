$(function(){

	var height=0;
  if($('.category-block').eq(0).height()>height){
    height=$('.category-block').height();
  }
  else if($('.category-block').eq(1).height()>height){
    height=$(this).height();
}
else if($('.category-block').eq(2).height()>height){
  height=$(this).height();
}
else if($('.category-block').eq(3).height()>height){
  height=$(this).height();
}
else if($('.category-block').eq(4).height()>height){
  height=$(this).height();
}
$('.category-block').height(height);

$('.toggle2_info').click(function(){

		$(this).toggleClass('selected').parent().next('.user').fadeToggle();
		if($(this).hasClass('selected')){
		    $(this).html('<i class="fa fa-minus float-right fa-2x"></i>');
		}else{
		    $(this).html('<i class="fa fa-plus float-right fa-2x "></i>');

		}


	});
$('.delete').on('click',function () {
	$(this).parents('tr').fadeOut();
});
$('.edit-profile').on('dblclick',function(){
   event.preventDefault();
   $('input').prop("disabled", false); // Element(s) are now enabled.


});

});
