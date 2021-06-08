$(document).ready(function () {
  $('#userCaret').click(function(){
    $('.profileDropdown').toggleClass('d-none');
    $('#userCaret svg').toggleClass('changeColor');
  })
});

$(document).ready(function () {
  $('#filterCaret').click(function(){
    $('.filterMenu').toggleClass('d-none');
  })
});
$(document).ready(function () {
  $('#searchResultCaret').click(function(){
    $('.recentSearch ').toggleClass('d-none');
  });
});
$(document).ready(function () {
  $('.searchControl').click(function(){
    $('.searchSuggestions').toggleClass('d-none');
  });
  $('.clearHistory').click(function(){
    $('.searchSuggestions').addClass('d-none');
  })
});
$(document).ready(function () {
  $('.bellIcon').click(function(){
    $('.notificationPanel').toggleClass('d-none');
  })
  $('.clearBtn').click(function(){
    $('.notificationPanel').addClass('d-none');
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