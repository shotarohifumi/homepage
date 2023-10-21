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
            $.get("csvfile_trial.csv", function(data) {
								$("#result").val(data).show();
                $("#topic").show();
								$("#saveButton").show();
								$("#explanation").show();
            });
							// 保存ボタンをクリックしたときの処理
						$("#saveButton").on("click", function() {
							const editedCSVData = $("#result").val();
							// CSVデータをファイルとしてダウンロード
							const blob = new Blob([editedCSVData], { type: "text/csv;charset=utf-8;" });
							const url = URL.createObjectURL(blob);
							const a = document.createElement("a");
							a.href = url;
							a.download = "edited.csv";
							document.body.appendChild(a);
							a.click();
							document.body.removeChild(a);
							URL.revokeObjectURL(url);
					});
        } else {
            // パスワードが一致しない場合、エラーメッセージを表示
            alert("パスワードが正しくありません。");
        }
    });
});
// $(document).ready(function() {
// 	// CSVデータを読み込み、エディターエリアに表示
// 	$.get("csvfile_trial.csv", function(data) {
// 			$("#result").val(data);
// 	});

// 	// 保存ボタンをクリックしたときの処理
// 	$("#saveButton").on("click", function() {
// 			const editedCSVData = $("#result").val();
// 			// CSVデータをファイルとしてダウンロード
// 			const blob = new Blob([editedCSVData], { type: "text/csv;charset=utf-8;" });
// 			const url = URL.createObjectURL(blob);
// 			const a = document.createElement("a");
// 			a.href = url;
// 			a.download = "edited.csv";
// 			document.body.appendChild(a);
// 			a.click();
// 			document.body.removeChild(a);
// 			URL.revokeObjectURL(url);
// 	});
// });




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
