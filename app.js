
//creating ul
$('body').append('<ul></ul>')

// creatig li and random color function
$('#btnSubmit').click(function (e) {
    e.preventDefault()
    $('ul').append('<li>' + $(txtbox).val() + '</li>')
    //color change
    $('li').click(function () {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);
        var color = 'rgb(' + r + ',' + g + ',' + b + ')';
        $(this).css("color", color);
        // remove li function
        $('li').dblclick(function () {
            $('li').remove();
        });
    });
});




// disable button function
$('#txtbox').keyup(function () {
    if ($(this).val() == "") {
        $('#btnSubmit').prop('disabled', true);
    } else {
        $('#btnSubmit').prop('disabled', false);
    };
});

// create div
$('body').append('<div></div>')
