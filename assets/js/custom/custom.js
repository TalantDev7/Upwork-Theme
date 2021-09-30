( function( $ ) {  

    $( document ).ready(function() {
        $('#primary-menu li a').on( 'click', function( e ) {
            e.preventDefault(); 
            $('#primary-menu li a').not( this ).removeClass( 'active' );
            $( this ).addClass( 'active' );
            var target = $( this ).attr( "href" ); 
            $( 'html, body' ).stop().animate({
                    scrollTop: $(target).offset().top - 250 
            }, 700);
            return false;
        });
    });

    $(".show_mobile_menu").click(function (e) {
        $(this).addClass("open");

        var $message = $(".mobile_navigation");

        if ( !$message.hasClass('show') ) {
            $message.addClass('show');
            var firstClick = true;
            $(document).bind("click.myEvent", function (e) {
                if (!firstClick && $(e.target).closest(".mobile_navigation").length == 0) {
                    $message.removeClass("show");
                    $(".show_mobile_menu").removeClass("open");
                    $(document).unbind("click.myEvent");
                }
                firstClick = false;
            });
        }
        e.preventDefault();
    });

    var fixed_menu = 78;

	$(document).on("scroll", function () {
		var documentScroll = $(this).scrollTop();
		if (documentScroll > fixed_menu) {
			$(".header").addClass("fixed");
			$(".header_row").addClass("fixed");

		} else {
			$(".header").removeClass("fixed");
			$(".header_row").removeClass("fixed");
			$(".header").removeAttr("style");
		}
	});
    
    $('.lazy').Lazy({
        // your configuration goes here
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 2000,
        
    });

    $(function() {
        var wow = new WOW(
            {
                boxClass:     'wow',     
                animateClass: 'animated', 
                offset:       150,          
                mobile:       false,      
                live:         true,      
                scrollContainer: null 
            }
        );
        wow.init();
    });

    $(document).ready(function () {
        $('.location_bottom_left').paroller({
            factorXs: 0.0,
            factorSm: 0.0,
            factorMd: 0.0,
            factorLg: 0.0,
            factor: -0.10,
            type: 'foreground',
            direction: 'horizontal',
            transition: 'transform .5s linear'
        });
        $('.location_bottom_right').paroller({
            factorXs: 0.0,
            factorSm: 0.0,
            factorMd: 0.0,
            factorLg: 0.0,
            factor: -0.10,
            type: 'foreground',
            direction: 'horizontal',
            transition: 'transform .5s linear'
        });
        $('.footer_left_bg').paroller({
            factor: 0.1,
            type: 'foreground',
            direction: 'vertical',
            transition: 'transform .3s linear'
        });
        $('.footer_right_bg').paroller({
            factor: 0.1,
            type: 'foreground',
            direction: 'vertical',
            transition: 'transform .4s linear'
        });
    });

} ( jQuery ) );