$('.buttonModal').click(function() {
    var buttonId = $(this).attr('id');
    $('#modal-container').removeAttr('class').addClass(buttonId);
    $('body').addClass('modal-active');
    console.log(buttonId);
})

$('#modal-container').click(function() {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});

// banner