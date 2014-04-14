(function($) {

	$.fn.haste = function( options ) {

		// Establish our default settings
		var settings = $.extend({
			input_id    : null,
			// element_id  : null,
			hidden      : true
		}, options);


		if( $(this).length > 0) {
            $(this).on('mouseover', function(){bindMouseDown(this,settings)});
            $(this).on('mouseout',function(){unbindAll(this,settings)});
        } else {
            alert('hi');
        }

	};

    // Private function for debugging.
    bindMouseDown = function( obj, settings ) {
        $(obj).on('mousedown', function(){bindMouseMove(obj,settings)});
    };

    bindMouseMove = function (obj, settings) {
        $('#' + settings.input_id).val('');
        $(obj).on('mousemove',function(){getText(obj,settings)});
    };

    getText = function (obj, settings) {
        var tr = '';
        tr = getSelected;

        if(tr !== '') {
            $('#' + settings.input_id).val(tr);
        }

    };

    unbindAll = function(obj, settings) {
        $(obj).off('mousedown');
        $(obj).off('mousemove');
    };

    getSelected = function() {
        var txt = '';
        if(window.getSelection){
            txt = window.getSelection();
        }else if(document.getSelection){
            txt = document.getSelection();
        }else if(document.selection){
            txt = document.selection.createRange().text;
        }
        return txt;

    };

}(jQuery));
