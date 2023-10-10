$(function () {
    // $(`button`).on(`mouseover`, function () {
    //     $(this).css(`opacity`, 0.5);
    // })
    // $(`button`).on(`mouseleave`, function () {
    //     $(this).css(`opacity`, 1);
    // })



    // 案1
    // $('#dayoff').hover(function () {
    //     $(this).animate({
    //         // width: `+=200`,
    //         height: 40,
    //         width: 104,
    //         opacity: 0.5,
    //         margin: '+=10',
    //     }, 1000)
    //         .animate({
    //             // width: `-=200`,
    //             height: 48,
    //             width: 128,
    //             opacity: 1,
    //             margin: '-=10'
    //         },1000)
    // });
    // $('#dayoff').mouseleave(function(){
    //     $('#dayoff').stop(false, true);
    // });
    // 案２
    $('button').mouseover(function(){
        // $(this).hide({
        //     'display': 'none'
        // });
        $(this).animate({
            'width': '104px',
            'height': '40px',
            'opacity': '0.5',
            'font-size': '12px',
            'repeat': 'infinity',
            // 'margin': '+=10'
        }, 'fast');
    });
    $('button').mouseout(function(){
        $(this).animate({
            'height': '48px',
            'width': '128px',
            'opacity': '1',
            // 'margin': '-=10'
        }, 'fast');
    });
    // 案３
    // var handleHoverIn = function() {
    //     $('#dayoff').css('width', '104px');
    // }
    // var handleHoverOut = function() {
    //     $('#dayoff').css('width', '128px');
    // }
    // $('#dayoff').hover(handleHoverIn, handleHoverOut);
});
