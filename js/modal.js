$('.buttonModal').click(function() {
    var buttonId = $(this).attr('id');
    if (buttonId == 'six') {
        $('#modal-container').removeAttr('class').addClass(buttonId);
    } else if (buttonId == 'one') {
        $('#modal-container1').removeAttr('class').addClass(buttonId);
    } else if (buttonId == 'two') {
        $('#modal-container2').removeAttr('class').addClass(buttonId);
    } else if (buttonId == 'three') {
        $('#modal-container3').removeAttr('class').addClass(buttonId);
    } else if (buttonId == 'four') {
        $('#modal-container4').removeAttr('class').addClass(buttonId);
    } else if (buttonId == 'five') {
        $('#modal-container5').removeAttr('class').addClass(buttonId);
    } else if (buttonId == 'seven') {
        $('#modal-container7').removeAttr('class').addClass(buttonId);
    } else if (buttonId == 'eight') {
        $('#modal-container8').removeAttr('class').addClass(buttonId);
    }
    $('body').addClass('modal-active');
    console.log(buttonId);
})

$('.close').click(function() {
    console.log("click");
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});
// 1
$('#modal-container1').click(function() {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});
// 2
$('#modal-container2').click(function() {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});
// 3
$('#modal-container3').click(function() {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});
// 4
$('#modal-container4').click(function() {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});
// 5
$('#modal-container5').click(function() {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});
// 7
$('#modal-container7').click(function() {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});
// 8
$('#modal-container8').click(function() {
    $(this).addClass('out');
    $('body').removeClass('modal-active');
});
// banner
