$(function () {
// ボタンにカーソルが合うと大きさ文字が８０％縮み色も褪せる
    $('#dayoff').mouseover(function(){
        // $(this).hide({
        //     'display': 'none'
        // });
        $(this).animate({
            'width': '104px',
            'height': '40px',
            'opacity': '0.5',
            'font-size': '12px',
            'repeat': 'infinity',
            'overflow': 'hidden'
            // 'margin': '+=10'
        }, 'slow');
    });
    $('#dayoff').mouseout(function(){
        $(this).animate({
            'height': '48px',
            'width': '128px',
            'opacity': '1',
            // 'margin': '-=10'
            'font-size': '16px',
        }, 'fast');
    });
    $('#address').mouseover(function(){
        // $(this).hide({
        //     'display': 'none'
        // });
        $(this).animate({
            'width': '104px',
            'height': '40px',
            'opacity': '0.5',
            'font-size': '12px',
            'repeat': 'infinity',
            'overflow': 'hidden'
            // 'margin': '+=10'
        }, 'slow');
    });
    $('#address').mouseout(function(){
        $(this).animate({
            'height': '48px',
            'width': '128px',
            'opacity': '1',
            'font-size': '16px'
            // 'margin': '-=10'
        }, 'fast');
    });
    $('#bankaccount').mouseover(function(){
        // $(this).hide({
        //     'display': 'none'
        // });
        $(this).animate({
            'width': '104px',
            'height': '40px',
            'opacity': '0.5',
            'font-size': '12px',
            'repeat': 'infinity',
            'overflow': 'hidden'
            // 'margin': '+=10'
        }, 'slow');
    });
    $('#bankaccount').mouseout(function(){
        $(this).animate({
            'height': '48px',
            'width': '128px',
            'opacity': '1',
            'font-size': '16px',
            // 'margin': '-=10'
        }, 'fast');
    });
    
});

