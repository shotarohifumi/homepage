$(function() {
	$("#submit").click(function() {
			var passwordInput = $("#password").val();

			if (passwordInput === "nebit-kanri") {
					$.get("csvfile_trial.csv", function(data) {
							var tableHTML = displayCSVAsTable(data);
							$("#result").html(tableHTML);
							$("#topic").show();
							$("#saveButton").show();
							$("#explanation").show();
							$("#addRowForm").show();
							$("#addRowButton").show();
					});
			} else {
					alert("パスワードが正しくありません。");
			}
	});
});

function displayCSVAsTable(csvData) {
	var rows = csvData.split("\n");
	var table = "<table>";

	for (var i = 0; i < rows.length; i++) {
			var cells = rows[i].split(",");
			table += "<tr>";

			for (var j = 0; j < cells.length; j++) {
					table += "<td><input type='text' value='" + cells[j] + "'></td>";
			}

			table += "</tr>";
	}

	table += "</table>";
	return table;
}

$("#saveButton").on("click", function() {
	var editedCSVData = "";
	var tableRows = $("#result table tr");

	tableRows.each(function() {
			var row = $(this);
			var rowData = [];
			row.find("input").each(function() {
					rowData.push($(this).val());
			});
			var rowCSV = rowData.join(",");
			editedCSVData += rowCSV + "\n";
	});

	// const editedCSVData = $("#result").val();
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
	// ここで新しいCSVデータを保存または送信する処理を追加
	alert("CSVデータが保存またまたは送信されました。");
});

$("#addRowButton").on("click", function() {
	var newData1 = $("#newData1").val();
	var newData2 = $("#newData2").val();
	var newData3 = $("#newData3").val();
	var newData4 = $("#newData4").val();
	var newData5 = $("#newData5").val();
	var newRow = "<tr>";
	newRow += "<td><input type='number' value='" + newData1 + "'></td>";
	newRow += "<td><input type='number' value='" + newData2 + "'></td>";
	newRow += "<td><input type='text' value='" + newData3 + "'></td>";
	newRow += "<td><input type='text' value='" + newData4 + "'></td>";
	newRow += "<td><input type='url' value='" + newData5 + "'></td>";
	newRow += "</tr>";

	// 新しい行をテーブルに追加
	$("#result table").append(newRow);

	// 新しい行をCSVデータに追加
	var updatedCSVData = updateCSVData();
	// ここで新しいCSVデータを保存または送信する処理を追加
	alert("新しい行がCSVデータに追加されました。");

	// フォーム内の入力フィールドをクリア
	$("#newData1").val("");
	$("#newData2").val("");
	$("#newData3").val("");
	$("#newData4").val("");
	$("#newData5").val("");
});

function updateCSVData() {
	var updatedCSVData = "";
	$("#result table tr").each(function() {
			var row = $(this);
			var cell1 = row.find("td:eq(0) input").val();
			var cell2 = row.find("td:eq(1) input").val();
			updatedCSVData += cell1 + "," + cell2 + "\n";
	});
	return updatedCSVData;
}
