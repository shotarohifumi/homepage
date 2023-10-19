// document.getElementById("submit").addEventListener("click", function() {
//     var passwordInput = document.getElementById("password").value;
//     if (passwordInput === "nebit-kanri") {
//         // パスワードが正しいと特定のアクション実行
//         var fileContent = "/csvfile_trial.csv"
//         var fileContentElement = document.getElementById("editarea");
//         fileContentElement.textContent = editarea;
//         fileContentElement.style.display = "block";
//         // alert("アクションが発生？");
//     } else {
//         alert("パスワードが正しくありません");
//     }
// })

// document.getElementById("submit").addEventListener("click", function() {
//     var passwordInput = document.getElementById("password").value;

//     if (passwordInput === "nebit-kanri") {
//         // パスワードが一致する場合、ファイルの内容をAjaxで取得し表示
//         $.ajax({
//             type: "GET",
//             url: "C:\Users\社員１\Desktop\csv\csvfile_trial.csv", // ファイルのURL
//             success: function(data) {
//                 var fileContentElement = document.getElementById("editarea");
//                 fileContentElement.textContent = data;
//                 fileContentElement.style.display = "block";
//             },
//             error: function() {
//                 alert("ファイルの取得に失敗しました。");
//             }
//         });
//     } else {
//         // パスワードが一致しない場合、エラーメッセージを表示
//         alert("パスワードが正しくありません。");
//     }
// });

// document.getElementById("submit").addEventListener("click", function() {
//     var passwordInput = document.getElementById("password").value;
//     if (passwordInput === "nebit-kanri") {
//         // パスワードが "pwpw" の場合、特定のアクションを実行
//         alert("アクションが発生しました。");
//         // ここに任意のアクションを追加できます
//     } else {
//         alert("パスワードが正しくありません。");
//     }
// });


$(function() {
    $("#submit").click(function() {
        var passwordInput = $("#password").val();

        if (passwordInput === "nebit-kanri") {
            // パスワードが一致する場合、特定のファイルを表示
            window.location.href = "/csvfile_trial.csv";
        } else {
            // パスワードが一致しない場合、エラーメッセージを表示
            alert("パスワードが正しくありません。");
        }
    });
})


