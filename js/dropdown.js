$.fn.dropdown = function(){
	var create = function(el) {
		var options = el.find('option');
		var $list = $("<ul></ul>");
		options.each(function(i,option) {
			var $optionLink = $('<a><i class="fa  '+ $(option).attr('icon') +'" aria-hidden="true"></i>'+$(option).text()+'</a>');
			$optionLink.attr('data-value', $(option).attr('value'));
			$optionLink.attr('data-index', i);
			var $li = $('<li></li>');
			$li.append($optionLink);
			$li.attr('data-id',i);
			$list.append($li);
			$optionLink.on("click",function(){
				$list.find('a').removeClass('active');
				$(this).addClass('active');
				setSelectedOption($(this).attr('data-value'),$(this).attr('data-index'),el.find('option'));
			});
		});
		return $list;
	}
	var setSelectedOption = function(value,i,$options) {
		var option = $options.eq(i);
		var $optionLink = $('<i class="fa  '+ $(option).attr('icon') +'" aria-hidden="true"></i><san>'+$(option).text() + '</span>');
		$dropdownLink.html($optionLink);
		$container.toggleClass('open');
		$(option).attr('selected',true);
		$(option).prop('selected',true);
	}
	var $container, $el, $createList, $dropdownLink,$dropdown;
	var initialize = function(){
		$el = $(this);
		$el.hide();
		$container = $('<div class="dropdown"></div>');
		$el.after($container);
		$container.append($el);
		$createList = create($el);
		$dropdownLink = $('<a><i class="fa fa-user" aria-hidden="true"></i>Your Profile</a>');
		$dropdown = $('<div class="dropdown-menu"></div>');
		$dropdown.append($dropdownLink);
		$createList.appendTo($dropdown);
		$dropdown.appendTo($container);
	}.bind(this);

	var addEvents = function(){
		$dropdownLink.on('click',function() {
			$('.dropdown').not($container).removeClass('open');
			$container.toggleClass('open');
		})

		$('body').on('click',function(e){
			if(!$(e.target).parents('.dropdown').length){
				$container.removeClass('open');
			}
		});
	}

	initialize();
	addEvents();
	return this;
}
