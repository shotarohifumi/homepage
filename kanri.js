$(function () {
	// ログイン状態のフラグ
	var isLoggedIn = false;

	$("#submit").click(function () {
		var passwordInput = $("#password").val();

		if (passwordInput === "nebit") {
			$.get("showfile.csv", function (data) {
				var tableHTML = displayCSVAsTable(data);
				$("#result").html(tableHTML);
				sortTable();
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

	// 確認ボタン
	$("#kakunin").on("click", function() {
		kakunin();
	})

	function kakunin() {
		 // 1列目の値に応じて3列目のテキストを自動入力
		var newData1 = $("#newData1").val();
		var newData3 = "";

		 if (newData1 === "1") {
			newData3 = "お知らせ";
		} else if (newData1 === "2") {
				newData3 = "申請書";
		} else if (newData1 === "3") {
				newData3 = "勤務時間報告書";
		} else if (newData1 === "4") {
				newData3 = "就業規則等";
		} else if (newData1 === "5") {
				newData3 = "その他";
		} else {
			alert("記入した番号は不可");
			// 追加ボタンを無効化
			$("#addRowButton").prop("disabled", true);
			// 3列目の入力フィールドを無効化
			$("#newData3").prop("disabled", true);
			return;
		}

		// 3列目の入力フィールドに自動入力
		$("#newData3").val(newData3);
		// 追加ボタンを有効化
		$("#addRowButton").prop("disabled", false);
		// 3列目の入力フィールドを無効化
		$("#newData3").prop("disabled", true);

	}

	//フォームの追加 
	$("#addRowButton").on("click", function () {
		addNewRow();
	});

	function addNewRow() {
		var newData1 = $("#newData1").val();
		var newData2 = $("#newData2").val();
		var newData3 = $("#newData3").val();
		var newData4 = $("#newData4").val();
		var newData5 = $("#newData5").val();

		
    // 1列目の値に応じて3列目のテキストを自動入力
    // if (newData1 === "1") {
		// 	newData3 = "お知らせ";
		// } else if (newData1 === "2") {
		// 		newData3 = "申請書";
		// } else if (newData1 === "3") {
		// 		newData3 = "勤務時間報告書";
		// } else if (newData1 === "4") {
		// 		newData3 = "就業規則等";
		// } else if (newData1 === "5") {
		// 		newData3 = "その他";
		// }
		if (newData1 === "" || newData2 === "" || newData3 === "" || newData4 === "" || newData5 === "") {
			alert("全てのフィールドを入力してください。");
			return;
	}

		var newRow = "<tr><td><input type='number' value='" + newData1 + "'></td><td><input type='number' value='" + newData2 + "'></td><td><input type='text' value='" + newData3 + "'></td><td><input type='text' value='" + newData4 + "'></td><td><input type='url' value='" + newData5 + "'></td></tr>";
		$("#result table").append(newRow);

		// 新しい行をテーブルに追加
		// if (newData1 !== "" && newData2 !== "" && newData3 !== "" && newData4 !== "" && newData5 !== "") {
		// 	var newRow = "<tr><td><input type='number' value='" + newData1 + "'></td><td><input type='number' value='" + newData2 + "'></td><td><input type='text' value='" + newData3 + "'></td><td><input type='text' value='" + newData4 + "'></td><td><input type='url' value='" + newData5 + "'></td></tr>";
		// 	$("#result table").append(newRow);

			// フォーム内の入力フィールドをクリア
			$("#newData1").val("");
			$("#newData2").val("");
			$("#newData3").val("");
			$("#newData4").val("");
			$("#newData5").val("");
			// 3列目の入力フィールドを無効化
			$("#newData3").prop("disabled", true);
	// }
	}

	// sortするやつ
	function sortTable() {
		var table = $("#result table");
		var rows = table.find("tr").toArray();
		rows.sort(function(a, b) {
			var keyA1 = parseInt($(a).find("td:eq(0) input").val()); //左の区分番号
			var keyB1 = parseInt($(b).find("td:eq(0) input").val());
			
			var keyA2 = parseInt($(a).find("td:eq(1) input").val()); //隣の区分番号
			var keyB2 = parseInt($(b).find("td:eq(1) input").val());

			// まず、左の区分番号でソートし、左の区分番号が同じ場合には隣の区分別番号でソート
			if (keyA1 === keyB1) {
				return keyA2 - keyB2;
			}
			return keyA1 - keyB1;
		});
		$.each(rows, function(index, row) {
			table.append(row);
		});
	}

	// セーブボタン⇩
	$("#saveButton").on("click", function () {
		if (isLoggedIn) {
			// CSVデータを取得してサーバーに送信
			// 新しい行をフォームから取得して追加
			// addNewRow();
			// 新しいCSVデータを取得
			var editedCSVData = updateCSVData();

			// サーバーに新しいCSVデータを保存
			$.post("save_csv.php", { csvData: editedCSVData }, function (response) {
				alert(response);
				// 表示を非表示に戻す
				hideResultContainer();
				// ページ読み込み時にテーブルをソート
				sortTable();
				// フォーム内の入力フィールドをクリア
				$("#newData1").val("");
				$("#newData2").val("");
				$("#newData3").val("");
				$("#newData4").val("");
				$("#newData5").val("");
				// 3列目の入力フィールドを無効化
				$("#newData3").prop("disabled", true);
			});

		}
	});



	function updateCSVData() {
		var updatedCSVData = "";
		$("#result table tr").each(function () {
			var row = $(this);
			var rowData = [];
			row.find("input").each(function () {
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