$(function() {
	// ログイン状態のフラグ
	var isLoggedIn = false;

	$("#submit").click(function() {
			var passwordInput = $("#password").val();

			if (passwordInput === "nebit") {
					$.get("showfile.csv", function(data) {
							var tableHTML = displayCSVAsTable(data);
							$("#result").html(tableHTML);
					});
					isLoggedIn = true;
					// パスワードフィールドの値をクリア
					$("#password").val("");
					// ログイン成功時の処理
					showResultContainer();
			} else {
					alert("パスワードが正しくありません。");
			}
		});

		// 結果コンテナを表示
		function showResultContainer() {
			$("#result-container").show();
		}
	
		function displayCSVAsTable(csvData) {
			var rows = csvData.split("\n");
			var table = "<table>";

			for (var i = 0; i < rows.length; i++) {
					var cells = rows[i].split(",");
					// 未入力の行をスキップ
					if (cells[0] || cells[1] || cells[2] || cells[3] || cells[4]) {
						table += "<tr>";

						for (var j = 0; j < cells.length; j++) {
								table += "<td><input type='text' value='" + cells[j] + "'></td>";
						}

						table += "</tr>\n";
				}
			}
			table += "</table>";
			return table;
		}
	

	//フォームの追加 
	$("#addRowButton").on("click", function() {
		addNewRow();
	});
	
	function addNewRow() {
		var newData1 = $("#newData1").val();
		var newData2 = $("#newData2").val();
		var newData3 = $("#newData3").val();
		var newData4 = $("#newData4").val();
		var newData5 = $("#newData5").val();
		
		// 新しい行をテーブルに追加
		if (newData1 !== "" && newData2 !== "" && newData3 !== "" && newData4 !== "" && newData5 !== "") {
			var newRow = "<tr><td><input type='number' value='" + newData1 + "'></td><td><input type='number' value='" + newData2 + "'></td><td><input type='text' value='" + newData3 + "'></td><td><input type='text' value='" + newData4 + "'></td><td><input type='url' value='" + newData5 + "'></td></tr>";
			$("#result table").append(newRow);

			// フォーム内の入力フィールドをクリア
			$("#newData1").val("");
			$("#newData2").val("");
			$("#newData3").val("");
			$("#newData4").val("");
			$("#newData5").val("");
			} 
	}

	// セーブボタン⇩
	$("#saveButton").on("click", function() {
		if (isLoggedIn) {
			// CSVデータを取得してサーバーに送信
			// 新しい行をフォームから取得して追加
			// addNewRow();
			// 新しいCSVデータを取得
			var editedCSVData = updateCSVData();

			// サーバーに新しいCSVデータを保存
			$.post("save_csv.php", { csvData: editedCSVData },function(response) {
				alert(response);
				// 表示を非表示に戻す
				hideResultContainer();
			});
		}
	});



	function updateCSVData() {
		var updatedCSVData = "";
		$("#result table tr").each(function() {
				var row = $(this);
				var rowData = [];
				row.find("input").each(function() {
					rowData.push($(this).val());
				});
				var rowCSV = rowData.join(",");
				updatedCSVData += rowCSV + "\n";
		});
		return updatedCSVData;
	}

	// 表示を非表示にする
	function hideResultContainer() {
		$("#result-container").hide();
		isLoggedIn = false;
	}
});