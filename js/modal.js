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
    $("#modal-container").addClass('out1');
    $('body').removeClass('modal-active');
});
// 1
$('').click(function() {
    $("#modal-container1").addClass('out');
    $('body').removeClass('modal-active');
});
// 2
$('.close').click(function() {
    $('#modal-container2').addClass('out');
    $('body').removeClass('modal-active');
});
// 3
$('.close').click(function() {
    $('#modal-container3').addClass('out');
    $('body').removeClass('modal-active');
});
// 4
$('.close').click(function() {
    $('#modal-container4').addClass('out');
    $('body').removeClass('modal-active');
});
// 5
$('.close').click(function() {
    $('#modal-container5').addClass('out');
    $('body').removeClass('modal-active');
});
// 7
$('.close').click(function() {
    $('#modal-container7').addClass('out');
    $('body').removeClass('modal-active');
});
// 8
$('.close').click(function() {
    $('#modal-container8').addClass('out');
    $('body').removeClass('modal-active');
});
// banner