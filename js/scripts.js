$(document).ready(function () {
  $('.clearHistory').click(function(){
    $('.searchSuggestions').addClass('d-none');
  })
});
$(document).ready(function () {
  $('.clearBtn').click(function(){
    $('.notificationPanel').addClass('d-none');
  })
});
$(document).ready(function () {
	$('.pageDetails .toggle').click(function(){
		$(this).toggleClass('changeToggleColor');
	})
});
// custom checkbox
$(document).ready(function () {
	$('input[type="checkbox"]').before('<span class="custom-checkbox">');
	$('input[type="checkbox"]').each(function () {
		customizeCheckbox($(this));
	});
});
$('body').on('change', 'input[type="checkbox"]', function () {
	customizeCheckbox($(this));
});
function customizeCheckbox(elem) {
	if ($(elem).is(':checked')) {
		$(elem).prev('.custom-checkbox').addClass('checked');
	} else {
		$(elem).prev('.custom-checkbox').removeClass('checked');
	}
}