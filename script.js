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
    
    // $('button').mouseover(function(){
    //     // $(this).hide({
    //     //     'display': 'block'
    //     // });
    //     $(this).animate({
    //         'width': '104px',
    //         'height': '40px',
    //         'opacity': '0.5',
    //         'font-size': '12px',
    //         'repeat': 'infinity'
    //         // 'overflow': 'hidden'
    //         // 'margin': '+=10'
    //         // 'transform': 'scale(0.8, 0.8)'
    //     }, 'slow');
    // });
    // $('button').mouseout(function(){
    //     $(this).animate({
    //         'height': '48px',
    //         'width': '128px',
    //         'opacity': '1',
    //         'font-size': '16px',
    //         // 'display': 'block'
    //         // 'overflow': 'hidden'
    //         // 'margin': '-=10'
    //         // 'transform': 'scale(1.0, 1.0)'
    //     }, 'fast');
    // });
    // 案３
    // var handleHoverIn = function() {
    //     $('#dayoff').css('width', '104px');
    // }
    // var handleHoverOut = function() {
    //     $('#dayoff').css('width', '128px');
    // }
    // $('#dayoff').hover(handleHoverIn, handleHoverOut);

    // jqueryuiのやーつ
    $('.test').draggable();
});

// // SheetJSライブラリをインポート
// const XLSX = require('xlsx');

// // Excelファイルを読み込む
// const workbook = XLSX.readFile('ファイル名.xlsx');

// // シートを選択
// const sheetName = workbook.SheetNames[0]; // シート名を指定
// const sheet = workbook.Sheets[sheetName];

// // セルにアクセス
// const cellValue = sheet['A1'].v; // セルA1の値を取得

// console.log(cellValue);

// // 任意の後処理

