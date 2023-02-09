$(function(){

    let attentionSeekers = [ 'bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 
        'swing', 'tada', 'wobble', 'jello', 'heartBeat' ];
    
    $('#birthday-header').addClass('animate__' + attentionSeekers[Math.floor(attentionSeekers.length * Math.random())]);

    $('#birthday').pickadate({ format: 'mmmm, d' });

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
            $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
            $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });

    $('.form-check-label').hover(function(event) {
        $('#birthday-header').css({color: $(this).attr('for')});
    }, function() {
        // return header to its original color after hover ends
        $('#birthday-header').css({color: 'slategray'});
    });

    $('#select-all').click(function(event) {
        event.preventDefault();

        let select = false; 
        $('.form-check-input').each(function() {
            if (!$(this).is(':checked')) {
                select = true;
            }
        });

        $('.form-check-input').each(function() {
            $(this).prop('checked', select);
            // trigger change event
            $(this).change();
        });
    });

    var toast = new Audio('media/toast.wav');
    $('#submit').click(function(event) {
        event.preventDefault();

        let showToast = true; 
        $('.form-check-input').each(function() {
            if ($(this).is(':checked')) {
                showToast = false;
            }
        });

        if (showToast) {
            toast.pause();
            toast.currentTime = 0;
            toast.play();
            $('#toast').toast({ autohide: true, delay: 2000 }).toast('show');
        }
    });

});