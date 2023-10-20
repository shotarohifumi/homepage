// $(function() {
//     $("#submit").click(function() {
//         var passwordInput = $("#password").val();

//         if (passwordInput === "nebit-kanri") {
//             // パスワードが一致する場合、特定のファイルを表示
//             window.location.href = "/csvfile_trial.csv";
//         } else {
//             // パスワードが一致しない場合、エラーメッセージを表示
//             alert("パスワードが正しくありません。");
//         }
//     });
// })


$(function() {
    $("#submit").click(function() {
        var passwordInput = $("#password").val();

        if (passwordInput === "nebit-kanri") {
            // パスワードが一致する場合、CSVファイルを読み込んでHTMLテーブルに表示
            $.get("edited.csv", function(data) {
                var lines = data.split("\n");
                var table = "<table>";
                for (var i = 0; i < lines.length; i++) {
                    var cells = lines[i].split(",");
                    table += "<tr>";
                    for (var j = 0; j < cells.length; j++) {
                        table += "<td>" + cells[j] + "</td>";
                    }
                    table += "</tr>";
                }
                table += "</table>";
                $("#result").html(table);
                $("#topic").show();
            });
        } else {
            // パスワードが一致しない場合、エラーメッセージを表示
            alert("パスワードが正しくありません。");
        }
    });
});




// script.js
// $(document).ready(function () {
//     $.ajax({
//         type: "GET",
//         url: "csvfile_trial.csv", // CSV ファイルのパスを指定
//         dataType: "text",
//         success: function (data) {
//             var lines = data.split("\n");
//             var table = $("#csvTableAll");

//             for (var i = 0; i < lines.length; i++) {
//                 var row = $("<tr>");
//                 var cells = lines[i].split(",");

//                 for (var j = 0; j < cells.length; j++) {
//                     if (i === 0) {
//                         row.append("<th>" + cells[j] + "</th>");
//                     } else {
//                         row.append("<td>" + cells[j] + "</td>");
//                     }
//                 }

//                 table.append(row);
//             }
//         }
//     });
// });
