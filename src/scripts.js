$(document).ready(function () {

    $('.contact-form').submit(function () {
        event.preventDefault();
        $.ajax({
            url: $(this).attr('action'),
            type: $(this).attr('method'),
            dataType: 'json',
            data: $(this).serialize(),
   
            success: function (data, status) {
                if (status === 'success') {
                    $('.flash-message-success').removeClass('d-none');
                }
            },
            error: function(err) {
                response = err.responseJSON;
                if (err.status === 422) {
                    if (response.contactFormName) {
                        $('.flash-message-name span').html(response.contactFormName[0]);
                        $('.flash-message-name').removeClass('d-none');
                    }
                    else {
                        $('.flash-message-name').addClass('d-none');
                    }
                    if (response.contactFormEmail) {
                        $('.flash-message-email span').html(response.contactFormEmail[0]);
                        $('.flash-message-email').removeClass('d-none');
                    }
                    else {
                        $('.flash-message-email').addClass('d-none');
                    }
                    if (response.contactFormMessage) {
                        $('.flash-message-message span').html(response.contactFormMessage[0]);
                        $('.flash-message-message').removeClass('d-none');
                    }
                    else {
                        $('.flash-message-message').addClass('d-none');
                    }
                }
            }
        });

        return false;
    });


    $('#gallery-upload-form').submit(function () {
        var formData = new FormData($('#gallery-upload-form')[0]);
        if ($('#gallery-overlay-checkbox').attr('data-id')) {
            formData.set('gallery-overlay-checkbox', $('#gallery-overlay-checkbox').attr('data-id'));
        }
        $.ajax({
            url: $(this).attr('action'),
            type: $(this).attr('method'),
            dataType: 'json',
            processData: false,
            contentType: false,
            headers: {
                'X-CSRF-Token': $('[name="_token"]').val()
            },
            data: formData,

            success: function (data, status) {
                if (status === 'success') {
                    console.log(data);
                    location.href = '/admin/user-panel/gallery/';
                }
            },
            error: function (xhr, status, err) {
                response = err.responseJSON;
                console.log(xhr.responseText);
            }
        });

        return false;
    });


      
    /* This script is to collapse the bootstrap mobile menu when a nav item is clicked */
    /* When a nav item is clicked */
    $('.dropdown-item , .nav-item:not(.dropdown)').click(function (e) {
        $('.nav-link').removeClass('active');
        /* we will remove the bootstrap show class */
        $('#navbarSupportedContent').removeClass('show');
    }) 


    $(window).on('load', function() {
        $('#loader').addClass('d-none');
    })
});



